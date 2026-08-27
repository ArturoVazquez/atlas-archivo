# CONTRATO DE DATOS — Atlas Estratégico de España

Este documento dice **qué puede esperar quien reutiliza los datos del atlas**:
qué prometen, cómo vienen, cómo se verifica cada valor y qué garantiza cada
release. Está escrito para el lector de fuera — investigador, periodista,
analista GIS — y se sostiene solo: todo lo que cita se puede abrir.

El atlas se construye en privado; lo que publica responde por sí mismo. La
maquinaria de validación —reglas numeradas, esquemas por capa, casos de
prueba— es interna, pero sus **efectos** son públicos y son exactamente lo que
este contrato describe. El manifiesto de cada release declara con qué edición
del contrato técnico se validó (`schema_version`).

---

## 1 · Lo que el atlas promete

1. **Todo dato lleva procedencia.** Ningún valor entra sin fuente y fecha. Lo
   que no tiene fuente primaria se publica marcado como tal, no se rellena.
2. **La verificación es un estado, no una promesa.** Cada registro —y sus
   campos sensibles, uno a uno— declara si está confirmado, parcialmente
   verificado o sin verificar. Un anuncio de empresa o una noticia se registran
   con su origen; no ascienden a hecho.
3. **La memoria no se borra.** Un registro nunca se elimina: cambia de estado,
   y el historial completo queda en Git.
4. **Evolución aditiva.** Los cambios añaden, no rompen: un consumidor que
   ignora los campos que no conoce sigue funcionando. Romper algo exigiría una
   versión mayor con su guía de migración escrita.
5. **Formatos estándar.** GeoJSON RFC 7946 en WGS84. QGIS, GDAL o cualquier
   herramienta GIS común leen los datos sin adaptadores.
6. **El repositorio es la cita.** Los documentos archivados, su procedencia,
   este contrato y el changelog viven versionados juntos; toda corrección es
   un cambio con su evidencia.

## 2 · Dónde está cada cosa

| Qué | Dónde |
|---|---|
| El mapa y las fichas de cada registro | [atlas.eltercioviejo.com](https://atlas.eltercioviejo.com) |
| El índice de capas, con descargas GeoJSON | [la biblioteca](https://atlas.eltercioviejo.com/biblioteca/) |
| Cómo se lee un dato, y qué no se garantiza | [el método](https://atlas.eltercioviejo.com/metodo.html) |
| Los documentos que sostienen cada cita | [`fuentes/`](fuentes/) en este repositorio |
| De dónde sale cada capa y qué obliga su licencia | [`fuentes/PROCEDENCIA.md`](fuentes/PROCEDENCIA.md) |
| Qué cambió en cada release | [`CHANGELOG-DATOS.md`](CHANGELOG-DATOS.md) |
| La licencia de salida (CC BY 4.0) | [`datos/LICENCIA-DATOS.md`](datos/LICENCIA-DATOS.md) |
| Cómo citar, con DOI | [`README.md`](README.md) y [`CITATION.cff`](CITATION.cff) |

El visor sirve siempre una **release etiquetada** de los datos, nunca el
trabajo en curso: lo que se ve publicado es siempre una versión que pasó la
validación entera.

## 3 · El formato

Cada capa es una `FeatureCollection` de GeoJSON con un bloque propio de
metadatos:

```json
{
  "type": "FeatureCollection",
  "atlas": {
    "capa": "minerales-proyectos",
    "schema_version": "1.71.0",
    "verificado_a": "2026-08-22"
  },
  "features": [ … ]
}
```

- **CRS:** WGS84 (longitud, latitud), el único de RFC 7946. Nada de
  coordenadas proyectadas en los datos.
- **Precisión:** máximo 5 decimales (~1 m), para que un diff enseñe cambios y
  no ruido.
- **Identificador:** cada Feature lleva `id` con la forma `capa:slug`
  (`minerales-proyectos:aguablanca`). **Es estable para siempre y nunca se
  reutiliza** — es lo que hace citable un registro concreto.
- **Propiedades planas.** Los campos van directamente en `properties`, sin
  objetos anidados, para que el dato se lea en cualquier herramienta GIS sin
  desempaquetar nada. Las dos únicas estructuras son `fuentes` y `claves`,
  definidas aquí.
- **Nombres de campo en español.** El proyecto entero habla español y sus
  datos también; el coste para el tooling anglosajón se asume a sabiendas.

## 4 · El núcleo de cada registro

Presente en todo registro de toda capa:

| Campo | Obligatorio | Qué es |
|---|---|---|
| `slug` | ✔ | identificador corto, único en la capa |
| `nombre` | ✔ | nombre de presentación |
| `categoria` | ✔ | valor del vocabulario controlado de la capa (§8) |
| `descripcion` | – | una a tres frases de contexto |
| `estado_registro` | ✔ | `vigente` · `historico` · `retirado` |
| `verif` | ✔ | `confirmado` · `parcial` · `no_verificado` — el estado global del registro |
| `geo_precision` | ✔ | qué promete la coordenada (§6) |
| `geo_fuente` | – | de dónde sale la geometría |
| `fecha_alta` | ✔ | cuándo entró el registro en el atlas |
| `fecha_verificacion` | ✔ | última pasada de verificación humana |
| `fuentes` | ✔ | las fuentes del registro (§5), incluido el hueco explícito si lo hay |
| `claves` | – | afirmaciones sueltas de las fuentes, citadas verbatim con su condicional |
| `nota` | – | matices en voz del atlas |
| `debate_url` | – | enlace al hilo de debate en El Tercio, la casa del atlas |

Los campos **específicos de cada capa** (potencia, materias, titular…) van
igual de planos y en español. Su significado se ve rotulado en la ficha de
cada registro del visor, y lo que hay que saber antes de citarlos —origen,
licencia, trampas de la fuente— está en su ficha de
[`PROCEDENCIA.md`](fuentes/PROCEDENCIA.md).

## 5 · Fuentes y verificación

Cada fuente es un objeto con identidad propia dentro del registro:

```json
{ "id": "f1",
  "tipo": "primaria",
  "titulo": "Comisión Europea — Decisión 1ª lista de Proyectos Estratégicos CRMA",
  "fecha": "2025-03-25",
  "url": "https://…",
  "archivo": "fuentes/ce/2025/2026-07-22_ce_lista-crma-1.pdf" }
```

| `tipo` | Qué es | ¿Sostiene un `confirmado`? |
|---|---|---|
| `primaria` | el acto oficial: BOE/DOUE, decisión, resolución, registro, estadística oficial | **Sí** |
| `prensa` | medio de comunicación | No |
| `corporativa` | anuncio, web o comunicado de empresa | No |
| `hueco` | la fuente que falta, declarada como tal | No |

**Solo una fuente primaria sostiene un dato confirmado**, y primaria es el
**acto, no el anuncio del acto**: una nota de prensa de un gobierno parece
primaria —la firma un ministerio, vive en un dominio oficial— y no lo es. Al
revés también: un registro que una norma **obliga** a publicar sí es primaria
aunque viva en una web, porque es el registro, no la nota sobre el registro. Y
un registro publica lo que sus registrados declaran, así que la cifra del
proyecto va al campo, la ambición va a `claves` con su condicional intacto, y
el adjetivo promocional no se publica.

**La verificación baja hasta el campo.** Un campo sensible lleva su propio
estado y su propia fuente mediante dos sufijos:

```json
"promotor": "Río Narcea Recursos",
"promotor__v": "parcial",
"promotor__f": "f2"
```

`__v` dice cómo de verificado está ese valor concreto; `__f` apunta a la
fuente (por su `id`) que lo sostiene. Un registro puede estar confirmado en su
existencia y tener un campo en `parcial` porque su única fuente es prensa: los
dos hechos se declaran por separado, y un dato solo sube de rango cuando sube
su evidencia.

**Cuando una fuente se cita, se archiva.** El campo `archivo` apunta a la
copia guardada en [`fuentes/`](fuentes/) de este repositorio, tomada en el
momento de citar: las URLs se pudren y la cita no.

## 6 · La geometría también cita

Una coordenada en un mapa **afirma**, así que se le exige lo mismo que a
cualquier otro dato. `geo_precision` declara qué promete:

| Valor | La coordenada… |
|---|---|
| `exacta` | sitúa el objeto, con fuente cartográfica que responde de ello |
| `paraje` | ancla al topónimo oficial más cercano al objeto |
| `municipio` | señala el municipio, no el emplazamiento |
| `generalizada` | simplificada a propósito (recintos grandes, escala) |
| `proyectada` | trazado previsto, que puede no coincidir con el final |
| `pais` | atribuye a un país, sin emplazamiento |
| `ilustrativa` | dibuja para entender, no para medir |

`geo_fuente` dice de dónde salió, y puede llevar sus `__v`/`__f` como
cualquier campo sensible. **El atlas no inventa coordenadas**: lo que no tiene
emplazamiento con fuente se publica en la precisión que la evidencia da, y esa
precisión se puede comprobar contra el propio mapa.

## 7 · Series y hechos de conjunto

- **Series temporales.** Las capas con película (el agua embalsada, las
  entradas de gas) publican sus series como ficheros propios por registro, con
  la misma disciplina de fuente. El visor las pinta; los partes de
  [/agua/](https://atlas.eltercioviejo.com/agua/) y
  [/gas/](https://atlas.eltercioviejo.com/gas/) las cuentan.
- **Hechos del conjunto.** A veces la fuente da un hecho que no es de ningún
  registro sino de todos a la vez —la energía almacenada en los 401 embalses—.
  Vive en el bloque `atlas.conjunto` de la capa, con el mismo aparato de
  verificación por campo que una ficha: un hecho del conjunto no es más blando
  que uno de un registro.
- **Sin derivados.** El atlas no publica porcentajes ni agregados que salgan
  de operar sus propios campos: esos los calcula quien pinta, sobre los datos
  desnudos.

## 8 · Vocabularios controlados

`categoria` no es texto libre: cada capa declara sus valores posibles en un
vocabulario, con el color con que el mapa la pinta. Añadir un valor es un acto
deliberado de una release — nunca una errata que entra sola. Por eso un filtro
puede colgar de `categoria` sin adivinar.

## 9 · La validación

**Una regla que nadie comprueba es prosa disfrazada de garantía.** Todo lo que
este contrato afirma sobre los datos lo comprueba una validación automática en
cada cambio, antes de publicar: el formato, los estados, que solo una fuente
primaria sostenga un confirmado, que la precisión declarada de la geometría
tenga la fuente que exige, que los vocabularios se respeten, que todo fichero
citado exista en el archivo. Lo que rompería un dato **bloquea** la release;
lo que solo degrada (una capa sin color propio, una cita que aún no se puede
comprobar) **avisa**, y el aviso queda a la vista.

Además del cerrojo, hay guardia: un vigía semanal barre el BOE y varios
boletines autonómicos buscando actos nuevos de lo ya publicado, y una guardia
de URLs comprueba que las citadas sigan vivas — **avisan y jamás escriben**:
lo que entra al atlas lo firma siempre el criterio humano.

## 10 · Releases, versiones y cómo citar

- Cada release de datos es una **etiqueta Git** (`datos-vAAAA.MM`, con sufijo
  `.N` si hay más de una en el mes). **Una etiqueta publicada no se mueve ni
  se reescribe jamás**: citar una release es citar algo inmutable.
- Cada release tiene su entrada en el
  [changelog](CHANGELOG-DATOS.md) —qué cambió, por qué y con qué evidencia— y
  recibe su **DOI propio** en Zenodo; el DOI de concepto del atlas resuelve
  siempre a la última. Las releases se anuncian por
  [RSS](https://atlas.eltercioviejo.com/feed.xml).
- **Lo que la evolución garantiza:** un identificador nunca se recicla; un
  registro retirado cambia de estado pero no desaparece; un campo nuevo es
  opcional para el consumidor que no lo conoce; renombrar o cambiar el
  significado de un campo está prohibido sin versión mayor y guía de
  migración — y no ha hecho falta nunca.
- La forma de citar el atlas, una edición concreta o un registro suelto está
  en el [README](README.md); la legible por máquina, en
  [`CITATION.cff`](CITATION.cff).

### 10.1 · Acceso programático

Los datos se sirven estáticos desde el sitio, sin clave, sin cuota y **abiertos
a cualquier origen**. Estas cinco rutas son las que se prometen:

| Ruta | Qué es |
|---|---|
| `/datos/manifest.json` | el catálogo. Trae la edición servida y la versión de este contrato. **Es la puerta**: se baja este, y no las cuarenta capas, para saber qué hay |
| `/datos/vocabularios.json` | categorías, grupos, el árbol y **los colores**, que están aquí y no en la aplicación para que cualquiera pueda repintar el atlas sin ella |
| `/datos/capas/<id>.geojson` | la capa **tal como se publica en la release**, byte a byte |
| `/datos/series/<capa>/<slug>.json` | las series temporales |
| `/datos/conjuntos/<id>.json` | los documentos de conjunto |

Lo que cambia dentro de ellas lo gobiernan las garantías de arriba.

**Y se sirven sin precomprimir.** La compresión de estas cinco rutas la negocia
el servidor con quien pide, como en cualquier sitio: quien la pida recibe el
fichero comprimido y quien no, texto plano. Es una garantía deliberada, y existe
porque los órganos internos del visor sí van precomprimidos en origen y se
comprobó que la plataforma que sirve el atlas no siempre respeta la cabecera con
la que un cliente pide que no le compriman. Aplicar eso aquí rompería a quien
descargue una capa con una herramienta que no sepa descomprimirla —y la rompería
en silencio, con una respuesta correcta y un cuerpo ilegible—. Estas rutas
existen para leerse sin saber nada de esta casa, así que la optimización se
queda fuera de ellas.

**Y lo que NO se promete, que importa igual.** Bajo `/datos/` hay además
`representacion/`, `detalle/` e `indice-busqueda.json`. **No son datos: son
órganos internos del visor.** Existen porque bajar el expediente completo de
cada registro para dibujar un punto costaba casi setenta megas, y su forma es
esa optimización — que desde el 2026-08-27 incluye ir **precomprimidos en
origen**, un 44 % menos por el cable en las capas mayores. Cambiarán cuando la
optimización cambie, sin aviso y sin versión, y eso incluye esto. Quien construya sobre ellas se romperá, y queda dicho de antemano; el
dato canónico está en `capas/`.

**Qué edición se obtiene.** Siempre la viva, la que nombra el manifiesto. No hay
URL por edición, y por eso estas rutas piden revalidar en cada petición: una
ruta sin versión que se cachease mucho entregaría datos de una edición ya
retirada, que es peor que tardar.

**Cómo se fija una edición** —para citarla, reproducir un análisis o comparar
dos—: cada release de este archivo lleva adjunto su **paquete de datos**. Se
llama **como su etiqueta**, `<etiqueta>.tar.gz`, y trae la carpeta de datos
entera de esa etiqueta. **Lo tienen todas las ediciones con release**, de
`datos-v2026.08.41` en adelante, que es donde empieza este archivo.

**Y conviene no confundir dos cosas.** El DOI de una release **no ampara ese
paquete**: el depósito archiva el contenido del repositorio y no sus ficheros
adjuntos, así que lo que el DOI conserva es el aparato de citación —fuentes,
procedencia, contrato y registro de cambios—. Las capas se descargan del
adjunto, que cuelga de una etiqueta que no se mueve jamás y por eso vale igual
para fijar una edición. Las dos cosas se nombran por separado a propósito: darlas
por una sola sería prometer un depósito que no existe.

## 11 · Un registro de ejemplo

```json
{
  "type": "Feature",
  "id": "minerales-proyectos:aguablanca",
  "geometry": { "type": "Point", "coordinates": [-6.27080, 38.08050] },
  "properties": {
    "slug": "aguablanca",
    "nombre": "Aguablanca",
    "categoria": "estrategico_ue",
    "descripcion": "Reactivación del único yacimiento de níquel explotado en España.",
    "estado_registro": "vigente",
    "verif": "confirmado",
    "geo_precision": "municipio",
    "geo_fuente": "centroide municipal — pendiente catastro minero",
    "fecha_alta": "2026-07-22",
    "fecha_verificacion": "2026-07-22",
    "materias": ["niquel", "cobre", "cobalto", "pgm"],
    "municipio": "Monesterio",
    "provincia": "Badajoz",
    "promotor": "Río Narcea Recursos",
    "promotor__v": "parcial",
    "promotor__f": "f2",
    "fase": "desarrollo",
    "fase__v": "parcial",
    "fase__f": "f1",
    "claves": [],
    "fuentes": [
      { "id": "f1", "tipo": "primaria",
        "titulo": "Comisión Europea — Decisión de la 1ª lista de Proyectos Estratégicos CRMA, con su anexo",
        "fecha": "2025-03-25" },
      { "id": "f2", "tipo": "prensa",
        "titulo": "elEconomista — Quién está detrás de los 7 proyectos",
        "fecha": "2025-03-31" }
    ],
    "nota": "La inclusión en la lista CRMA es un hecho oficial."
  }
}
```

No es una ilustración aproximada: es uno de los casos que la validación pasa
en verde en cada cambio. Obsérvese `promotor__v: parcial` con su `__f`
apuntando a una fuente de prensa — ese campo no puede ser `confirmado` hasta
que exista fuente primaria del promotor, por mucho que el registro entero sí
lo sea. Y la geometría va en `municipio`, así que no promete una precisión que
no tiene: el día que la coordenada salga del catastro minero subirá a
`exacta`, con su fuente cartográfica al lado.

## 12 · Las decisiones de diseño, y su porqué

- **Propiedades planas**, para que los datos se abran en cualquier herramienta
  GIS sin desempaquetar estructuras.
- **Nombres de campo en español**, porque el proyecto entero habla español; el
  coste se asume.
- **`__v` y `__f` como sufijos**, para verificar campo a campo sin romper el
  modelo plano.
- **La doctrina se comprueba, no se promete**: lo que el contrato afirma lo
  vigila la validación en cada cambio.
- **El visor lee releases etiquetadas**, nunca el trabajo en curso.
- **La máquina avisa y jamás escribe**: los vigías señalan; el criterio humano
  firma cada dato que entra.
- **Nada se borra**: los registros cambian de estado y el historial queda.
- **Lo que falta se declara como dato**: una capa anunciada sin datos aparece
  en el manifiesto como `en_preparacion`, consultable — no como promesa suelta
  en un README.
- **La geometría cita como cualquier otro dato**, porque era el único campo
  cuya procedencia no se podía comprobar — y el único que el mapa contradice
  solo con dibujarse.

## 13 · Este documento

Esta es la **edición pública** del contrato, reescrita en agosto de 2026 para
decir lo esencial en corto. Las entradas antiguas del changelog citan la
numeración técnica anterior («§6.6», «1.42.0», reglas «R»), que describe su
momento y no se reescribe. Cuando cambie algo que afecte a lo aquí prometido,
el cambio se contará en el [changelog](CHANGELOG-DATOS.md) con su release.
