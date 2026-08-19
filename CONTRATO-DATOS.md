# CONTRATO DE DATOS — Atlas Estratégico de España

**Versión del contrato:** 1.61.0 · **Fecha:** 2026-08-19
**Ámbito:** todo dato publicado por el atlas. Este documento es la fuente de verdad;
el código se adapta al contrato, nunca al revés.

> **Qué añade la 1.1.0** (aditiva; ningún consumidor de la 1.0.0 se rompe) —
> formaliza lo que `DECISIONES.md` D2/D3/D4 acordaron y este documento aún no
> recogía: el campo `arbol` y el `ambito` en el manifiesto (§3), la clase de
> registro `analisis` (§3), las entradas `en_preparacion` (§3), el campo
> **derivado** `activo` con su tabla de mapeo normativa (§6.5) y el campo
> controlado `fase` del que se deriva (§10). Historial completo en §13.

---

## 1 · Principios

1. **Todo dato lleva procedencia.** Ningún valor entra sin fuente y fecha. Lo que no
   tiene fuente primaria se publica marcado, no se rellena.
2. **La verificación es un estado, no una promesa.** Cada registro —y sus campos
   sensibles— declara si está confirmado, parcialmente verificado o sin verificar.
   Un anuncio corporativo o una noticia de prensa se registra con su origen; no
   asciende a dato confirmado.
3. **La memoria no se borra.** Un registro nunca se elimina: cambia de
   `estado_registro`. El historial completo vive en Git.
4. **Evolución aditiva.** Los cambios al contrato añaden, no rompen. Los
   consumidores toleran campos desconocidos. Romper exige versión mayor y
   migración documentada.
5. **Formatos estándar.** GeoJSON RFC 7946, WGS84, herramientas GIS comunes
   (QGIS, GDAL, tippecanoe) deben poder consumir los datos sin adaptadores.
6. **El repo es la cita.** Datos, fuentes archivadas, esquemas y reglas de
   validación viven versionados juntos. Toda corrección es un commit con evidencia.

---

## 2 · Estructura del repositorio

```
atlas-estrategico-espana/
├── CONTRATO-DATOS.md          ← este documento
├── CHANGELOG-DATOS.md         ← una entrada por release de datos
├── DECISIONES.md              ← el porqué de cada decisión
├── PLAN.md                    ← fases y criterios de hecho
├── README.md                  ← el escaparate público
├── LICENSE                    ← MIT, solo para el CÓDIGO
├── datos/
│   ├── LICENCIA-DATOS.md      ← CC BY 4.0, y qué obliga (licencias contagiosas)
│   ├── manifest.json          ← registro de capas (la app lee de aquí)
│   ├── vocabularios.json      ← vocabularios controlados (enums)
│   ├── series/                ← series temporales: <capa>/<slug>.json (§4.1)
│   └── capas/
│       ├── minerales-proyectos.geojson
│       ├── minerales-dominios.geojson
│       ├── parques-eolicos.geojson
│       ├── plantas-solares.geojson
│       └── cables-submarinos.geojson
├── fuentes/                   ← archivo documental (URLs se pudren; esto no)
│   ├── PROCEDENCIA.md         ← de dónde sale cada capa, qué obliga, qué saber
│   └── 2026-07-22_ce_lista-crma-1.pdf     (fecha-captura_emisor_titulo.ext)
├── pipeline/
│   ├── esquemas/              ← JSON Schema: nucleo.schema.json + uno por capa
│   ├── pruebas/               ← fixtures: uno válido y al menos uno por regla de §6.4
│   ├── validar.py             ← esquema + reglas de doctrina (§7), corre en CI
│   ├── consultar.py           ← consulta al IGN y al catastro; contrasta (§6.6)
│   └── vigilar.py             ← URLs y caducidad, semanal (avisa, jamás escribe)
├── referencia/                ← la demo v4: canon de interacción, no de código
├── app/                       ← el visor (consume datos/ por release etiquetada)
└── .github/workflows/         ← validar.yml (cada PR y cada push a main)
                               ← vigilar.yml (semanal, solo lectura)
```

Reglas de la estructura:

- `datos/` es **curado a mano**; `pipeline/` **valida, vigila y consulta, nunca
  genera datos**. Ninguno de los tres escribe en `datos/`, y **ninguno escribe en
  `fuentes/`**: archivar una fuente es un acto con criterio —qué se guarda, con
  qué título, qué sostiene— y lo firma una persona.
- `.cache/` (ignorado por git) son copias de trabajo que `consultar.py` descarga
  para no repetir peticiones. **Una copia de trabajo no es una cita**: la cita es
  el extracto curado de `fuentes/`, con su fecha de captura.
- Toda fuente citada por URL se **archiva** en `fuentes/` en el momento de la cita.
  `fuentes/` **jamás** entra en `.gitignore`: es la cita.
- **`fuentes/PROCEDENCIA.md` responde por capa lo que ningún otro fichero
  responde del tirón** *(1.26)*: de qué emisor sale, con qué licencia y qué
  obliga, y qué hay que saber antes de citarla. No duplica nada — el manifiesto
  sigue siendo la **licencia autoritativa** (§3), §10 los campos y el changelog
  la narración por release; la ficha sintetiza y enlaza. **Ninguna capa publica
  sin la suya**, y eso lo comprueba §7.9.
- La app **no lee ficheros vivos**: lee la última release etiquetada (§8).
- **Licencias separadas:** MIT para el código, CC BY 4.0 para los datos. Esa
  segunda elección prohíbe incorporar datasets con licencia contagiosa
  (*ShareAlike* / *NonCommercial*); ver `datos/LICENCIA-DATOS.md`.
- **Finales de línea LF** en todo el repo (`.gitattributes`). Un CRLF colado
  reescribe ficheros enteros en el diff y destruye la trazabilidad de una
  corrección, que es el argumento del principio 6.

---

## 3 · El manifiesto de capas

`datos/manifest.json` registra cada capa. Añadir una capa al atlas = añadir su
fichero y su entrada aquí. La app construye el panel desde el manifiesto.

```json
{
  "schema_version": "1.1.0",
  "release": "2026.08",
  "capas": [
    {
      "id": "minerales-proyectos",
      "titulo": "Minerales críticos — proyectos",
      "resumen": "Proyectos de extracción y transformación de minerales críticos con expediente localizado.",
      "arbol": "minerales",
      "grupo": "actividad",
      "ambito": "espana",
      "geometria": "puntos",
      "registro": "verificado",
      "cadencia_revision_dias": 120,
      "verificado_a": "2026-07-22",
      "version": "1.0.0",
      "fichero": "capas/minerales-proyectos.geojson",
      "licencia": "CC-BY-4.0",
      "atribucion": "Atlas Estratégico de España"
    },
    {
      "id": "renovable-provincia",
      "titulo": "Renovable instalada por provincia",
      "arbol": "energia",
      "grupo": "dotacion",
      "en_preparacion": true
    }
  ]
}
```

| Campo | Valores / notas |
|---|---|
| `resumen` | **(1.43)** UNA línea que dice **qué contiene la capa**, en castellano llano y como máximo 140 caracteres. **Obligatorio en toda capa con `fichero`**; se omite en una rama en preparación, que todavía no contiene nada. Nace de un hueco que solo se ve cuando se intenta hacer un catálogo: el atlas sabía cómo se llama cada capa y de dónde sale, y **no sabía decir qué es**. Las notas `_` del manifiesto no servían —son prosa de taller, explican decisiones («Era `recurso-eolico`, y se renombra…») y diez capas no tenían ninguna—. **No es un dato y no lleva aparato de verificación**, igual que `titulo`: es cómo la casa presenta su propia capa, y por eso se escribe a mano y no se deriva. Lo que sí exige el contrato es que **exista, quepa y no repita el título**: un resumen que solo dice el nombre otra vez es una casilla rellenada, no una respuesta. |
| `arbol` | **(1.1)** dominio bajo el que cuelga la capa en el panel: `minerales` · `energia` · `conectividad` · `tablero` · `intangibles`. Es la organización visible (D3). |
| `grupo` | `dotacion` (lo que tiene) · `actividad` (lo que se trabaja). Abierto a nuevos grupos por versión menor. |
| `ambito` | **(1.1)** `espana` (por defecto si se omite) · `mundo`. Relaja la comprobación de bbox de §7.4: una capa de ámbito mundo no se valida contra el recuadro de España. |
| `geometria` | `puntos` · `poligonos` · `lineas` · `mixta` |
| `registro` | `verificado` (fichas con doctrina completa) · `ilustrativo` (dibuja dónde, no cuánto ni de quién) · **(1.1)** `analisis` (investigación u opinión **sellada como tal**, con su `debate_url` al hilo donde se defiende — nunca se presenta como hecho) |
| `cadencia_revision_dias` | umbral tras el cual la capa se considera caducada; `vigilar.py` avisa cada semana (§7) y el visor lo mostrará |
| `fondo` | **(1.14)** `true` = la capa **cubre el territorio entero** y se dibuja al fondo, cediendo el clic a cualquier registro que tenga encima. Lo declara el manifiesto, no el código: sin esta marca, una coropleta que tapa España robaría la ficha a las ocho capas que hay debajo, y el visor tendría que conocerla por su nombre para evitarlo. Se omite en todas las demás. |
| `atribucion` | **(1.27)** a quién hay que citar, **con las palabras que exija cada emisor**. No es una etiqueta de cortesía y no la redacta el atlas a su gusto: la licencia del IGN (Orden FOM/2807/2015, punto 4) impone para obra derivada la fórmula literal «Obra derivada de \<producto\> \<fecha\> CC-BY 4.0 \<productores\>», y Adif impone «© Administrador de infraestructuras ferroviarias». **El visor la pinta**, atada a la fuente de la capa, así que aparece solo mientras la capa está encendida — que es lo que esa misma licencia pide, «visible junto con los datos, a pie de mapa». Comprobar que una fuente es compatible **no es lo mismo** que leer cómo obliga a citarla; se hizo lo primero y no lo segundo durante veintidós capas. La forma exacta de cada emisor vive en `fuentes/PROCEDENCIA.md`. |
| `series` | **(1.35)** nombre de la serie temporal que la capa publica en `datos/series/<id>/` (§4.1), p. ej. `"reserva-semanal"`. Lo declara el manifiesto para que el visor sepa a qué capas pedir la película sin conocerlas por su nombre — y sin sembrar 404 en las que no la tienen. Se omite en las demás. |
| `series_completas` | **(1.42)** `true` = **todo registro de esta capa publica su película**, y uno sin ella es un defecto que bloquea (§4.1). Se omite cuando la capa tiene serie solo para algunos registros, y entonces el validador calla. Existe porque los dos casos son legítimos y **el fichero no puede distinguirlos**: `agua-embalsada` tiene 401 registros y 401 series —que falte una es que se ha perdido—, y `gas-interconexiones` tiene 6 registros y 2 series —porque solo dos interconexiones publican flujo—. Sin esta palabra, la única regla posible era una que rompía la segunda capa, y por eso el hueco estuvo abierto: no faltaba la comprobación, faltaba **el dato que la hace decidible**. |
| `pagina` | **(1.40)** una capa puede tener **una página que la cuente entera** —hoy solo `agua-embalsada`, con su parte semanal y la hemeroteca— y aquí declara dónde: `{ "ruta": "/agua/", "titulo": "El parte semanal" }`. Lo declara el MANIFIESTO y no el código por el mismo motivo que `series`: el visor ofrece el enlace en el panel de cualquier capa que lo traiga, sin conocer capas por su nombre. Se omite en las demás. **La barra del visor no crece con esto**: cuando haya una segunda página, el enlace de la barra pasará a apuntar a un índice, no a sumarse otro. |
| `version` | semver de la **capa**: parche = corrección de valores; menor = registros o campos nuevos; mayor = cambio de esquema |
| `en_preparacion` | **(1.1)** `true` = rama declarada pero sin datos. **El mapa declara su horizonte** (D4): el panel la pinta en gris, no cargable. Una entrada `en_preparacion` solo exige `id`, `titulo`, `arbol` y `grupo`; el resto de campos se rellenan cuando la capa nace. |

**Regla del horizonte:** una capa con `en_preparacion: true` **no puede** declarar
`fichero`. El día que tiene datos, se le quita la marca y se le añaden `fichero`,
`geometria`, `registro`, `version` y `verificado_a`. Eso es una versión menor de
manifiesto, no un cambio de contrato.

---

## 4 · Formato de capa

Cada capa es una `FeatureCollection` GeoJSON con metadatos propios en
`propiedades de colección` (miembro extranjero permitido por RFC 7946):

```json
{
  "type": "FeatureCollection",
  "atlas": {
    "capa": "minerales-proyectos",
    "schema_version": "1.0.0",
    "verificado_a": "2026-07-22"
  },
  "features": [ ... ]
}
```

### `atlas.conjunto` — los hechos del CONJUNTO *(1.41)*

Una capa publica **registros**, pero su fuente publica a veces hechos **del
conjunto** que no son de ninguno de ellos. El Boletín Hidrológico da el agua
embalse a embalse y da además, en el mismo parte, la **energía hidroeléctrica
almacenada** en todos ellos: no es de Alcántara ni de Buendía, es de los 401 a
la vez. `atlas.conjunto` es donde vive eso.

```json
"atlas": {
  "capa": "agua-embalsada",
  "schema_version": "1.41.0",
  "verificado_a": "2026-08-14",
  "conjunto": {
    "fecha_dato": "2026-08-11",
    "energia_almacenada_gwh": 13983,
    "energia_almacenada_gwh__v": "confirmado",
    "energia_almacenada_gwh__f": "f1",
    "fuentes": [ { "id": "f1", "tipo": "primaria", "titulo": "…", "archivo": "fuentes/…" } ]
  }
}
```

**Mismo aparato que una ficha, y por el mismo motivo:** `__v` y `__f` por campo,
`fuentes` propias con sus ids, `fecha_dato` obligatoria. Un hecho del conjunto no
es más blando que uno de un registro, así que no se verifica más flojo. **R7 rige
igual**: nada de derivados — el porcentaje que sale de dividir dos campos lo
calcula quien lo pinte.

**Por qué no un registro nacional.** Fue la primera salida y se descartó: un
registro «España» con su punto obliga a inventar una capa que el panel del mapa
enseñaría entre las demás, con una geometría que no significa nada, o a meterlo
entre los 401 embalses y corromper el recuento que la capa declara. Un hecho del
conjunto no es un objeto del territorio y no debe fingir que lo es.

**Por qué no el manifiesto.** Porque §3 es un **registro de capas**, no datos: no
tiene `__v` ni `__f` ni `fuentes`, así que una cifra escrita ahí no se podría
verificar ni citar — y toda cifra que el atlas imprima tiene que poder citarse.

**La cautela que hay que escribir siempre:** un hecho del conjunto se refiere a
**algún** conjunto, y no tiene por qué ser el que la capa publica. La producción
hidroeléctrica que trae el mismo parte incluye **centrales fluyentes** que no
salen de ningún embalse de la capa. Se publica igual —la fuente la da ahí— pero
la ficha y la página dicen que son **dos cosas puestas al lado, no una
explicando a la otra**. Un bloque `conjunto` sin esa frase, cuando hace falta,
afirma una pertenencia que nadie ha comprobado.

Reglas de geometría:

- **CRS:** WGS84 (lon, lat), el único de RFC 7946. Nada de coordenadas proyectadas
  en los datos; la proyección es asunto del visor.
- **Precisión de coordenadas:** máximo 5 decimales (~1 m). Evita diffs de ruido.
- **Tipos:** `Point` para registros de actividad; `Polygon`/`MultiPolygon` para
  dominios y zonas; `LineString` para trazados. Un registro puede evolucionar de
  punto a polígono (p. ej., derechos mineros del catastro) mediante versión menor
  de capa, conservando el mismo `id`.
- `id` del Feature (nivel raíz, RFC 7946): `"<capa>:<slug>"`, p. ej.
  `"minerales-proyectos:aguablanca"`. **Estable para siempre; nunca se reutiliza.**

---

## 4.1 · Las series temporales *(1.35)*

Una capa es una **foto**: el estado de cada registro a la fecha de su parte.
Una serie es la **película** del mismo registro: la sucesión de partes de una
única fuente primaria archivada. Las dos responden preguntas distintas —«¿cómo
está?» y «¿cómo ha cambiado?»— y por eso son artefactos distintos, con estas
reglas:

- **Un fichero por dueño.** Para un registro, `datos/series/<capa>/<slug>.json`,
  y el slug ha de existir en la capa publicada: una serie sin ficha es huérfana y
  no valida. **Y desde la 1.45, para un conjunto** (§4.2):
  `datos/series/conjuntos/<id>.json`, declarando `conjunto` en vez de
  `capa`+`slug` — excluyentes, y una de las dos obligatoria. Los hechos de un
  sistema también tienen historia, y la regla de arriba se escribió cuando la
  única película posible era la de un registro. **Y al revés, cuando la capa lo declara** *(1.42)*: con
  `series_completas: true` en el manifiesto, una **ficha sin serie** tampoco
  valida. Nació de un hueco que la auditoría del 2026-08-14 encontró abierto: la
  regla existía en un solo sentido, así que **perder un fichero de serie pasaba
  el CI en verde** y solo lo cazaba una guarda del generador de `/agua/`, que
  vive en `app/` y no en el contrato. No se cerró antes porque la regla obvia
  —«toda capa con `series` las tiene todas»— es **falsa**: `gas-interconexiones`
  publica 6 registros y 2 series a propósito. Lo que faltaba no era la
  comprobación: era que el manifiesto pudiera decir de qué caso se trata. La razón del troceo es el visor estático: la gráfica se abre para UN
  registro y se descarga solo su fichero, sin backend y sin cargar cientos de
  miles de filas ajenas.
- **Solo hay película donde hay negativo.** Una serie exige que su histórico
  completo esté en una fuente primaria **archivada en `fuentes/`**; no se
  reconstruye retrospectivamente desde fuentes que ya no existen ni se empalman
  fuentes distintas en una misma serie. Una serie tiene **una** fuente.
- **Los huecos se quedan huecos.** Semana sin parte, semana sin punto. La
  interpolación es el dato inventado con mejor coartada, y aquí no entra. Los
  valores van como los publica la fuente, sin suavizar ni convertir.
- **Formato:**

```json
{
  "capa": "agua-embalsada",
  "slug": "alarcon-jucar",
  "serie": "reserva-semanal",
  "columnas": ["fecha", "agua_hm3", "capacidad_hm3"],
  "cuadre": [
    { "columna": 1, "campo": "agua_actual_hm3" },
    { "columna": 2, "campo": "capacidad_hm3" }
  ],
  "fuente": { "tipo": "primaria", "titulo": "…", "url": "…", "fecha": "…", "archivo": "fuentes/…" },
  "generado": "2026-08-10",
  "puntos": [ ["1988-10-04", 508.0, 1112.0], ["1988-10-11", 506.0, 1112.0] ]
}
```

  La primera columna es siempre la fecha (ISO, orden estrictamente
  ascendente, sin duplicados). Las demás las nombra `columnas` y pueden ser
  `null` en un punto concreto si la fuente publicó el parte sin ese valor. La
  capacidad viaja EN la serie y no como constante, porque cambia — Contreras
  pasó de 874 a 361 hm³ en 2019, y una serie que la fijara mentiría sobre el
  porcentaje de llenado de tres décadas.

- **R11 — la foto y la película no se contradicen** *(bloquea, §7.11)*. Cada
  entrada de `cuadre` declara qué campo de la ficha es la instantánea de qué
  columna: el **último punto** de la serie debe coincidir con ese campo, y la
  última fecha con el `fecha_dato` de la ficha. Es la regla que impide que el
  dossier diga una cifra y la gráfica termine en otra — la clase de
  divergencia silenciosa en la que nadie repara hasta que un lector la usa de
  argumento. Se comprueba en CI, sobre las dos piezas a la vez, como R8.
- **Estado o flujo, y hay que decirlo** *(1.38)*. `magnitud` declara qué clase
  de número es cada punto. **`estado`**: una LECTURA en un instante —el agua que
  había ese día—, que se compara entre fechas pero no se suma. **`flujo`**: lo
  ACUMULADO durante un período —los GWh que entraron ese mes—, que sí se suma, y
  cuya fecha es el **primer día del período que resume**, no un instante en que
  se midiera nada. Por omisión, `estado`. Sin esta palabra, dos series con la
  misma forma invitan a sumar lo que no se suma, o a leer un total mensual como
  si fuera una medición.
- **La serie dice en qué se mide y cómo se llama lo que dibuja** *(1.38)*:
  `unidades` («hm³», «GWh»), `etiquetas` —el nombre humano de cada columna de
  valor— y `paso` («semanal», «mensual»). Nace de una mordedura real: el
  dibujante rotulaba **«hm³» y «agua embalsada» viniera lo que viniera**, porque
  la única serie que existía era de embalses. La primera que no lo fuera habría
  publicado gas medido en hectómetros cúbicos, con la gráfica afirmándolo en su
  leyenda y en su descripción accesible. Ahora lo declara el dato; y si no lo
  declara, **la gráfica calla en vez de rellenarlo**.
- **Una fuente, que puede estar archivada en varias piezas** *(1.38)*. `archivo`
  admite una lista. Sigue habiendo UNA fuente —un emisor, una operación
  estadística—; lo que cambia es que su materialización puede venir partida
  porque el emisor la publica así: CORES saca las entradas y las salidas de gas
  en dos libros, y una serie que enseñe el flujo en los dos sentidos necesita
  los dos. **Lo prohibido sigue igual**: empalmar emisores u operaciones
  distintas para cubrir tramos distintos del tiempo.
- **La serie no releva a la ficha.** `agua_actual_hm3` sigue viviendo en la
  capa con su verificación; la serie añade profundidad, no sustituye campos.
  Y los derivados siguen prohibidos por R7: el porcentaje de llenado lo
  calcula quien lo pinte, también en la gráfica.

---

## 4.2 · Los documentos de conjunto *(1.44)*

`datos/conjuntos/<id>.json` — **hechos de un sistema que no es un conjunto de
registros situados**. Es la casa que le faltaba a la cautela que §4 dejó escrita
al nacer `atlas.conjunto`:

> *un hecho del conjunto se refiere a **ALGÚN** conjunto, y no tiene por qué ser
> el que la capa publica*

**El caso que lo pide, medido:** en mayo de 2026 entraron a España **31.312,6
GWh** de gas natural y el atlas solo podía dar cuenta de **29.997,6**. Los
**1.314,9 GWh** que faltaban —el 4,2 %— entraron por los dos **VIP**, puntos
virtuales de mercado que la normativa europea creó en 2014 y que **no son un
sitio**: no tienen coordenada, no la tendrán nunca, y por eso ninguna capa
puede alojarlos sin publicar una geometría que no significa nada. Con las
**cisternas** —gas por carretera— pasa lo mismo por otro camino.

Lleva **el mismo aparato que una ficha**, ni más blando ni más fuerte:
`fecha_dato`, `fuentes` propias, `__v` y `__f` en **cada** cifra, y `claves`
para lo que no cabe en un número. Y **R7 rige igual**: prohibido escribir un
total que sea la suma de lo ya publicado — el total de gas entrado lo calcula
la página, no el dato.

| Campo | Valores / notas |
|---|---|
| `atlas.conjunto` | el `id` del documento, en kebab-case, igual que el fichero. |
| `sobre` | **qué sistema describe**, en una línea. Es el campo que la cautela pedía: en vez de dejar el alcance a la interpretación de quien lo hospede, **el conjunto declara de qué conjunto habla**. |
| `titulo` y `resumen` | como los de una capa (§3), y con el mismo tope de 140 en el resumen: un conjunto se publica en el mismo catálogo. |
| `capas` | qué capas del atlas **sitúan las piezas de ese sistema que sí tienen lugar**. Enlaza en vez de duplicar (D3): el documento publica lo que no está en ningún sitio, y señala dónde está lo demás. Cada id ha de existir en el manifiesto. |
| cifras | cada una con su `__v` y su `__f`, como en cualquier ficha. |
| `claves` y `fuentes` | idénticas a las de un registro (§6). |

**Por qué no es una capa** y por qué no se resolvió metiéndolo en una: un
registro del atlas tiene geometría, y la geometría de un punto virtual de
mercado no existe. Inventarle una —el centro de España, la sede del operador—
sería exactamente el dato fabricado que R2 persigue. **Por qué no es el
manifiesto**: allí no hay `__v`, `__f` ni `fuentes`, así que una cifra escrita
ahí no se podría citar; ese argumento ya se dejó escrito en 1.41 y sigue valiendo.

---

## 5 · Núcleo común de propiedades

Presente en **todo** feature de **toda** capa. Los nombres de campo son en
**español** — decisión deliberada: el dataset es de cara al público hispano y el
proyecto entero habla español; el coste (menor familiaridad para tooling
anglosajón) se asume y queda anotado aquí.

| Campo | Tipo | Oblig. | Descripción |
|---|---|---|---|
| `slug` | string | ✔ | identificador corto, kebab-case, único en la capa |
| `nombre` | string | ✔ | nombre de presentación |
| `categoria` | string | ✔ | valor del vocabulario de la capa (§ vocabularios) |
| `descripcion` | string | – | 1–3 frases de contexto |
| `estado_registro` | enum | ✔ | `vigente` · `historico` · `retirado` |
| `verif` | enum | ✔ | `confirmado` · `parcial` · `no_verificado` — estado global del registro |
| `geo_precision` | enum | ✔ | `exacta` · `paraje` · **(1.14)** `generalizada` · **(1.16)** `proyectada` · `municipio` · **(1.19)** `pais` · `ilustrativa` |
| `geo_fuente` | string | – | de dónde sale la geometría (p. ej. `catastro minero`, `mano alzada`). **(1.3)** admite `__v`/`__f` como cualquier campo sensible — ver §6.6 |
| `fecha_alta` | fecha ISO | ✔ | cuándo entró el registro en el atlas |
| `fecha_verificacion` | fecha ISO | ✔ | última pasada de verificación humana |
| `fuentes` | Fuente[] | ✔ | ver §6; puede contener el hueco explícito |
| `nota` | string | – | matices en voz del atlas (aparece en la ficha) |
| `debate_url` | string | – | enlace al hilo de El Tercio de este registro o su capa |

**Tolerancia:** los consumidores ignoran campos que no conocen. Los campos
específicos de capa (§ apartados de capa) se añaden **planos** en `properties`,
nunca anidados en objetos opacos — mantiene el dataset legible en QGIS y
consultable con GDAL sin adaptadores. Las dos excepciones estructuradas son
`fuentes` y `claves`, definidas por este contrato.

---

## 6 · Fuentes y verificación (la doctrina, en datos)

### 6.1 Objeto Fuente

```json
{ "id": "f1",
  "tipo": "primaria",
  "titulo": "Comisión Europea — Decisión 1ª lista de Proyectos Estratégicos CRMA",
  "fecha": "2025-03-25",
  "url": "https://…",
  "archivo": "fuentes/2026-07-22_ce_lista-crma-1.pdf" }
```

| `tipo` | Significado | ¿Puede sostener `confirmado`? |
|---|---|---|
| `primaria` | documento oficial: BOE/DOUE, decisión, resolución, registro, estadística oficial | **Sí** |
| `prensa` | medio de comunicación | No |
| `corporativa` | anuncio, web o comunicado de empresa | No |
| `hueco` | fuente pendiente de asignar — el hueco explícito del principio 1 | No |

> **Una nota de prensa de una administración NO es `primaria`** *(1.15)*. Lo dice
> ya la tabla —«decisión, resolución, registro, estadística»— pero conviene
> escribirlo, porque es la trampa más fácil de todas: el comunicado lo firma un
> gobierno y lo publica un dominio oficial, así que *parece* fuente primaria y no
> lo es. Lo primario es el **acto**, no el anuncio del acto.
>
> El caso que obligó a escribirlo: la Generalitat de Catalunya anunció «26
> proyectos de centros de datos, unos 2.000 MW y siete polos de implantación».
> Ninguno de esos 26 estaba autorizado ni localizado por un acto: son intenciones
> recopiladas por quien quiere atraerlas. Publicarlas con el sello de `primaria`
> habría convertido una previsión en un hecho, que es la única cosa que este
> atlas no puede hacer. Cuando el acto llegue, el registro entra; hasta entonces,
> la fuente es `prensa` y el registro no puede ser `confirmado`.

> **Un registro que una norma obliga a publicar SÍ es `primaria`, aunque viva en
> una web** *(1.16)*. El reverso de lo anterior, y hacía falta escribirlo porque
> la regla «el acto, no el anuncio» mal aplicada dejaría fuera fuentes buenas. La
> **plataforma de transparencia PCI-PMI** de la Comisión no es divulgación: existe
> por el **artículo 23 del Reglamento (UE) 2022/869**, que obliga a publicar
> «información general actualizada, **por ejemplo, información geográfica**, para
> cada proyecto de la lista de la Unión». Es el registro, no la nota sobre el
> registro. La prueba está en el propio artículo: enumera de la a) a la g) lo que
> la plataforma **debe** contener.
>
> Dos cautelas que vienen con ella, y que valen para cualquier registro de este
> tipo. **Primera: la obligación de publicar no alcanza a todo lo que se sirve
> junto.** El mismo visor sirve la capa `PLATTS` (S&P Global), que es de tercero y
> comercial: no la cubre ni el artículo 23 ni la Decisión 2011/833/UE, y no entra.
> **Segunda: un registro puede publicar y advertir a la vez.** Esta advierte de su
> geometría que puede no coincidir con el trazado final — y esa advertencia no la
> degrada a `corporativa`, la coloca en `geo_precision: proyectada` (§6.6).

> **Un registro obliga a publicar, no a certificar** *(1.17)*. La consecuencia
> práctica de lo anterior, y hace falta escribirla porque cambia **cómo se
> redacta** una ficha, no si la fuente vale. Un registro publica lo que sus
> registrados le declaran — eso es lo que es un registro, y vale igual para el
> Catastro Minero que para la plataforma PCI-PMI. Sigue siendo `primaria`.
>
> Lo que cambia es que, cuando quien declara es una empresa, su texto trae tres
> cosas mezcladas: **el proyecto**, **la ambición** y **el argumento de venta**.
> La regla de escritura:
>
> - **Al campo numérico va la cifra del proyecto que la ficha define.** Nada más.
> - **La ambición y la ampliación futura van a `claves`, verbatim**, con su
>   condicional intacto si lo tiene. Un «1 GW de aquí a 2030 si las condiciones
>   de mercado son favorables» no es un dato de potencia: es una frase con una
>   condición dentro, y borrar la condición al escribir el número la convierte en
>   otra cosa.
> - **La evaluación promocional no se publica en absoluto.** «Impacto positivo
>   significativo en el empleo» y «cuota del 38 % del mercado español» no son
>   hechos del objeto que la capa registra; son adjetivos y contexto comercial.
>
> El caso que obligó a escribirlo: el valle asturiano de hidrógeno declara **1 GW
> de ambición** y **150 MW de proyecto**, en el mismo párrafo. La cifra que suele
> circular es la primera. La que publica el atlas es la segunda, y la primera está
> en su ficha, entera y con su «si».

> **Una propuesta de resolución es documento oficial, pero no es el acto**
> *(1.18)*. La tercera de esta familia, y la más fácil de olvidar porque la
> palabra «definitiva» invita: el listado del PERTE VEC se titula «Propuesta de
> Resolución **Definitiva**» y aun así **no concede nada** — la resolución se
> notifica por el registro electrónico y no es públicamente citable.
>
> Sostiene un `confirmado` sobre **lo que ella afirma**: que se PROPONE conceder
> tal importe a tal beneficiario. No sobre la concesión. Y como el atlas no puede
> poner ese matiz en un asterisco que nadie lee, va **dentro del nombre de los
> campos**: `subvencion_propuesta`, `prestamo_propuesto`. El esquema prohíbe
> además `subvencion` a secas, para que la propuesta no se convierta en concesión
> borrando un adjetivo.
>
> **Y hay documentos oficiales que no son una tabla aunque lo parezcan.** Ese
> listado es un registro por comisiones de verificación en el que un mismo
> expediente reaparece con cifras nuevas: **la aparición posterior revisa a la
> anterior**. Contar filas da 61; los expedientes vigentes son 57. Cuando una
> fuente publique sus propios totales, hay que **cuadrar contra ellos antes de
> publicar** — es lo único que distingue haber entendido el documento de haberlo
> leído por encima.

> **Un texto legal no tiene dueño, y por eso se puede republicar entero**
> *(1.19)*. Las tres enmiendas anteriores discuten **cuánta autoridad** concede
> una fuente; esta discute algo distinto y que hasta ahora no había hecho falta:
> **si el atlas puede copiarla**. El artículo 13 del TRLPI es literal —«no son
> objeto de propiedad intelectual las **disposiciones legales o reglamentarias**
> […] y **los actos, acuerdos, deliberaciones y dictámenes de los organismos
> públicos**, así como las traducciones oficiales»—, así que una constitución, una
> ley o un tratado se archivan enteros, se citan literalmente y se republican bajo
> la CC BY 4.0 del atlas sin pedir permiso a nadie.
>
> **Lo escribió una capa que se quedó sin su fuente obvia.** «El idioma como
> activo» pedía demolingüística, y la demolingüística del español la publica el
> Instituto Cervantes en PDF con un aviso legal que dice que el acceso «no otorga
> a los usuarios ningún derecho» sobre los contenidos, solo «uso exclusivo y
> personal»; en `datos.gob.es` no hay conjunto de datos suyo. Extraer la parte
> sustancial de esa base para republicarla con permiso comercial es lo que
> `datos/LICENCIA-DATOS.md` prohíbe — el tercer muro de licencia del atlas, tras
> el ShareAlike de la CNMC y el NonCommercial de TeleGeography.
>
> **La consecuencia no es publicar menos, es publicar otra cosa mejor sostenida:**
> el ESTATUTO jurídico del idioma en vez de su demografía. Y de ahí sale la regla
> general: cuando la fuente obvia de una capa no se puede reutilizar, hay que
> preguntarse qué pregunta vecina SÍ tiene fuente libre, antes de dar la capa por
> imposible. Tres veces en el mismo horizonte —«renovable instalada» → mezcla de
> generación, «PERTE acotado» → lo que un documento sitúa, «el idioma» → su
> estatuto— la restricción obligó a decir con precisión qué se publica, y las tres
> veces la capa salió **más honesta**, no más pobre.

> **Una fuente que la máquina no puede leer: la transcripción declarada**
> *(1.60)*. `archivo` guarda el documento; **`transcripcion`** guarda lo que el
> atlas leyó en él cuando el documento **no tiene capa de texto**. Es una ruta a
> un fichero de `fuentes/`, y la comprobación §7.7 exige que exista: si se
> declara una lectura, la lectura se publica.
>
> **Lo escribió una renuncia prematura.** La ONU publica la comunicación
> portuguesa de 1 de abril de 2015 escaneada —una página, una imagen, cero
> fuentes tipográficas— y el atlas dio su contenido por incitable durante doce
> días, con su hueco declarado y todo. La página estaba ahí: lo que faltaba no
> era el texto, era descomprimir la imagen del PDF y leerla. **«No se puede
> extraer» no es lo mismo que «no se puede leer»**, y confundirlos cuesta
> justamente el párrafo que la fuente existía para sostener.
>
> Con eso viene la cautela, y es la razón de que el campo exista en vez de
> transcribir en silencio. Una transcripción **no es la fuente**: la fuente es
> el escaneo, y la transcripción es una lectura que puede equivocarse. Por eso
> se archiva **al lado del documento, verbatim**, diciendo cómo se obtuvo y
> marcando lo manuscrito — para que cualquiera la contraste con la imagen y la
> desmienta. Un atlas que cita un escaneo tiene que enseñar lo que creyó leer.
>
> **Lo que NO autoriza:** resumir, traducir ni interpretar dentro del fichero de
> transcripción, y **tomar prestada la lectura de un tercero**. Si el contenido
> de un documento ilegible se conoce por un análisis ajeno, eso es fuente
> secundaria y sigue sin sostener un `confirmado`: el hueco se queda hueco hasta
> que el atlas lea el original.

### 6.2 Verificación por campo

Los campos **sensibles** llevan compañeros con sufijo reservado `__v` (estado) y
`__f` (id de fuente dentro de `fuentes`):

```json
"promotor": "Río Narcea Recursos",
"promotor__v": "confirmado",
"promotor__f": "f2",

"estado_proyecto": "Reactivación del yacimiento",
"estado_proyecto__v": "parcial",
"estado_proyecto__f": "f1",
"estado_proyecto_fecha": "2025-03-25"
```

El doble guion bajo es un **espacio de nombres reservado** del contrato: ningún
campo de datos puede contener `__`. Esto permite a cualquier herramienta separar
mecánicamente dato y metadato.

### 6.3 Hechos adicionales: `claves`

Afirmaciones sueltas con su propio estado, sin abrir un campo nuevo por cada una:

```json
"claves": [
  { "k": "Dimensión anunciada",
    "v": "410 M€ · 350 empleos · 60.000 t/año RAEE",
    "verif": "no_verificado",
    "fuente": "f3" }
]
```

**Una clave es un hecho del SUJETO, no del atlas** *(1.59)*. La distinción parece
obvia y no lo fue: al repartir las once ICTS distribuidas (§6.6), cada una
recibió una clave que contaba **el arreglo** —«estuvo dibujada entera en Madrid,
y su fuente nunca dijo eso»—, once veces casi la misma. Nada de eso es un hecho
de la instalación; es **biografía del atlas**, y su sitio es el CHANGELOG, que
existe literalmente para «lo que un lector externo necesita saber para confiar en
una versión de los datos, o para desconfiar de la anterior con motivo». Contarlo
también en el dato es la **segunda verdad** que descartó D3: dos copias que se
desincronizan a la primera corrección. Lo vio Arturo, sobre la ficha ya
publicada.

La prueba de si una clave se ha ido de sitio es corta: **si el texto habla del
atlas en vez de la cosa, no es una clave**. Y tiene una hermana que sí lo es —
cuando la corrección **viene de la fuente** y trae hechos con ella («el convenio
dice que sus sedes a nivel del mar son La Laguna y Breña Baja»), lo que se
publica son esos hechos, no el arrepentimiento.

### 6.4 Reglas de coherencia (se validan en CI, §7)

Van numeradas **desde la 1.1** para que `validar.py` pueda nombrarlas en el
mensaje de error: un fallo de doctrina debe decir *qué doctrina*, no soltar un
error de esquema genérico.

| | Regla |
|---|---|
| **R1** | `verif: confirmado` del registro ⇒ existe al menos una fuente `primaria`. |
| **R2** | Un campo con `__v: confirmado` ⇒ su `__f` apunta a una fuente `primaria`. |
| **R3** | Una fuente `corporativa` o `prensa` **no puede** ser la `__f` de un valor `confirmado`. |
| **R4** | Existe una fuente `tipo: hueco` ⇒ el registro no puede ser `confirmado` global. |
| **R5** | `registro: ilustrativo` en el manifiesto ⇒ la capa no declara `__v` por campo y toda su geometría es `geo_precision: ilustrativa`; su ficha lo dice. |
| **R6** *(1.1)* | Todo `__v` y todo `__f` acompañan a un campo que existe, y todo `__f` apunta a un `id` que existe en `fuentes`. Un metadato huérfano es un dato que nadie sostiene. |
| **R7** *(1.1)* | Ningún fichero de datos contiene el campo `activo`: es **derivado** (§6.5). Escribirlo a mano es la doble fuente de verdad que D3 descartó. |
| **R8** *(1.1, con diente desde 1.10)* | Un polígono de `minerales-dominios` con `categoria ∈ {desarrollo, historico}` **no puede contener** un registro de `minerales-proyectos` con `fase == "produccion"`. Su explicación larga está en §6.5, porque nació de cerrar el matiz abierto de D3. |
| **R9** *(1.3; `generalizada` desde 1.14, `proyectada` desde 1.16)* | `geo_precision ∈ {exacta, paraje, generalizada, proyectada}` ⇒ el registro declara `geo_fuente`, y su `geo_fuente__f` apunta a una fuente `primaria`. Una precisión que promete cartografía tiene que citarla (§6.6). |
| **R10** *(1.16)* | En una capa con lineales, un registro que declare `longitud_km` **cuadra con su propia geometría** al 15 %, medida sobre el elipsoide. La tolerancia es ancha a propósito: no persigue un decimal, persigue un cambio de unidad o de proyección (§10, `hidrogeno-red`). |

**Esta tabla es lo que el CI comprueba, y desde la 1.10 no le falta ninguna.**
R8 estuvo fuera desde la 1.1 —escrita, normativa y sin diente— porque necesitaba
la capa `minerales-dominios` para tener contra qué comprobarse. Ya existe, y con
ella se acaba el único renglón en el que este documento afirmaba algo que no
podía sostener.

**R8 es también la única regla que cruza dos ficheros.** Se comprueba cuando
ambas capas entran en la misma pasada del validador, que es siempre en CI: sin
argumentos, `validar.py` recorre todas las capas del manifiesto que tienen
`fichero`.

R2 y R3 son la misma frontera vista desde los dos lados, y así se validan: R2
comprueba que el confirmado tiene detrás una primaria; R3, que ninguna prensa o
corporativa se cuela por debajo. Se mantienen separadas porque los mensajes de
error que producen son distintos y ambos son útiles.

### 6.5 · El campo derivado `activo` *(1.1)*

`activo` responde a una sola pregunta: **¿esto está en explotación hoy?** Es el
filtro transversal que corta a través de los árboles (D3).

**No se escribe: se calcula.** No aparece en ningún `.geojson` de `datos/` (R7);
lo materializa el consumidor —el visor, o `validar.py` al comprobar— aplicando
esta tabla. La razón está en D3: un booleano editable a mano junto a un campo de
estado son dos fuentes de verdad que acaban contradiciéndose.

| Capa | `activo` se deriva de | `true` cuando |
|---|---|---|
| `minerales-proyectos` | `fase` (§10, vocabulario) | `fase == "produccion"` |
| `nuclear` *(1.6)* | `fase` | `fase == "produccion"` (reactor en explotación) |
| `gas-regasificacion` *(1.8)* | `fase` | `fase == "produccion"` (planta en servicio) |
| `refinerias` *(1.28)* | `fase` | `fase == "produccion"` (la refinería opera). Hoy nueve de diez: Tenerife va en `parado` porque su propia serie de capacidad lo anota — estatus legal intacto, sin permisos para arrancar. |
| `gas-almacenamiento` *(1.29)* | `fase` | `fase == "produccion"` (el almacén está en el sistema: la resolución anual le asigna capacidad). Castor va en `cerrado`, y su `false` es de los verdaderos — concesión extinguida y pozos en sellado. |
| `bases-eeuu` *(1.29)* | — | **no aplica**. Una base de utilización conjunta no es una explotación que se abra o se cierre: es un régimen pactado sobre una instalación del Estado, la misma clase de objeto que el resto del tablero. |
| `seguimiento-espacial` *(1.29)* | `fase` | `fase == "produccion"` (la estación opera bajo su instrumento). Robledo lo dice su acuerdo de 2024 con todas las letras; Cebreros y Maspalomas llevan `parcial`, con su hueco. |
| `desaladoras` *(1.30)* | `fase` | `fase == "produccion"` (la planta opera). Hoy las seis: la Orden TED/157/2023 las llama operativas o les reconoce la explotación encomendada. |
| `icts` *(1.31)* | `fase` | `fase == "produccion"` (la ICTS opera). El acuerdo del Mapa compromete la operatividad de todas durante su vigencia; la única en `desarrollo` es IDISOM, que el propio acuerdo declara «a constituir». |
| `minerales-dominios` *(1.10)* | `categoria` (§9, vocabulario) | `categoria ∈ {activo, mixto}` |
| `electricidad-interconexiones` *(1.13)* | `categoria` (§9) | `categoria == "en_servicio"`. Un enlace en servicio SÍ está en explotación — al contrario que un derecho minero, que es un título y no una obra. |
| `minerales-derechos` *(1.12)* | — | **no aplica**. Un título otorgado NO dice que se esté explotando: se puede tener una concesión décadas sin abrir una mina. Va en el grupo `actividad` porque alguien lo sostiene y puede caducar, pero la pregunta del filtro no se le hace. |
| `cables-submarinos` *(1.20)* | `fase` | `fase == "produccion"` (el cable presta servicio). Ojo: el registro es el ATERRIZAJE, y su fase es la del cable que llega a él — un expediente en información pública es `tramitacion` aunque la playa lleve ahí siglos. |
| ~~`recurso-eolico`, `recurso-solar`~~ | — | ~~**no aplica**: son recurso, no explotación.~~ **La fila caducó con las capas** *(1.23)*: dejaron de ser recurso al renombrarse a `parques-eolicos` y `plantas-solares`, y un recinto de instalación SÍ es la clase de objeto a la que la pregunta se le hace. Ver la fila siguiente. |
| `puertos`, `rte-t`, `ferrocarril` *(1.25)* | — | **no aplica**, y por tres motivos distintos que conviene no fundir. Una **zona de servicio portuaria** es una delimitación de dominio público: no se explota ni se deja de explotar, se delimita. Un **nodo RTE-T** es una designación de un reglamento, no una instalación — la misma clase de objeto que una provincia. Y una **línea de Adif** sí sería la clase de objeto correcta, pero la fuente no dice si presta servicio: es el caso de `red-electrica`, y un `false` por falta de dato sería la mentira que R7 evita. |
| `parques-eolicos`, `plantas-solares` *(1.23)* | — | **no aplica**, pero por el motivo contrario al de arriba y conviene no confundirlos. No es que la pregunta sea de otra clase de objeto —a un parque eólico se le puede preguntar perfectamente si está produciendo—: es que **la fuente no lo responde**. La BTN cartografía el recinto y no dice si gira. Devuelve `null`, y un `false` por falta de dato sería la mentira que R7 evita. Mismo caso que `red-electrica`. |
| `red-electrica` *(1.22)* | — | **no aplica**, y por partida doble. Un tendido cartografiado no es una instalación que se explote o se deje de explotar: es infraestructura, y la BTN además **no dice si está energizada** — solo que está ahí. Preguntarle a una subestación si está «en explotación» tendría sentido, pero la fuente no lo responde, y **un `false` por falta de dato es exactamente la mentira que R7 evita**. Devuelve `null`. |
| `tablero`: `limites-soberania` y `espacios-maritimos` *(1.11)* | — | **no aplica**, por el mismo motivo. Un territorio reclamado o un espacio marítimo sin delimitar no está «en explotación»; la pregunta no se le hace. |
| `centros-datos` *(1.15)* | `fase` | `fase == "produccion"` (el centro presta servicio). Un campus **autorizado y sin construir no está en explotación**, por muchos gigavatios-hora que prometa su declaración ambiental. |
| `hidrogeno-red` *(1.16)* | `fase` | `fase == "produccion"` (el tramo, la compresora o la caverna prestan servicio). Hoy **ninguno de los diez**: la red entera está en tramitación, y eso es lo que el filtro debe enseñar. |
| `perte` *(1.18)* | — | **no aplica**. Un plan de inversión subvencionado no es una instalación: es dinero comprometido sobre un expediente. Preguntarle si está «en explotación» es preguntarle a la clase de objeto equivocada, como a una provincia o a un espacio marítimo. |
| `hidrogeno-produccion` *(1.17)* | `fase` | `fase == "produccion"` (la planta electroliza hoy). Hoy **ninguna de las siete**. Ojo con la palabra: aquí `produccion` es la fase del expediente, no «producir hidrógeno» en abstracto — una planta con todos los permisos y sin construir sigue sin producir nada. |
| `agua-embalsada` *(1.21)* | — | **no aplica**. Un embalse no es una instalación que se explote ni se deje de explotar: es una reserva. La pregunta del filtro es de otra clase de objeto, como con las provincias y el tablero. Lo que varía —cuánta agua tiene— va en un campo con su fecha, no en un booleano. |
| `idioma` *(1.19)* | — | **no aplica**, y es el caso más claro de todos. El registro es un **Estado** o una **organización internacional**, y lo que se publica de él es una norma vigente. Un idioma oficial no está «en explotación»: ni siquiera es una cosa que se explote. Devuelve `null`, como las provincias y el tablero. |
| `generacion-electrica-provincia` *(1.14)* | — | **no aplica**. El registro no es una instalación: es una **provincia**, y a un territorio no se le pregunta si está en explotación. Lo que generó no la pone «en explotación» ni la deja fuera: la pregunta es de otra clase de objeto. Devuelve `null`, y por eso el filtro no esconde ni una sola de las 52. |

Una capa cuya fila diga «no aplica» devuelve `null`, no `false`. La diferencia
importa: `false` afirma que algo está parado; `null` dice que la pregunta no se
le hace a esa capa. El filtro de la interfaz solo esconde `false`.

**Por qué `fase` y no el `estado_proyecto` que ya existe.** `estado_proyecto` es
texto libre en voz del atlas («Reactivación del único yacimiento de níquel
explotado en España») y el texto libre no puede gobernar un filtro sin adivinar.
La 1.1 añade `fase`, un campo **controlado** que lleva su propio `__v`/`__f` como
cualquier otro dato. Los dos conviven: `fase` es la máquina, `estado_proyecto` es
la prosa.

#### El matiz abierto de D3, cerrado

D3 dejó anotado el problema: al filtrar «en explotación», un dominio marcado
`desarrollo` desaparece **aunque contenga una mina viva**.

La salida **no** es hacer que `activo` del dominio mire dentro de sí. Eso
enmascararía el problema al pintar, dejando el dato mal en el fichero. Si un
dominio alberga un registro en producción, entonces su `categoria` correcta es
`mixto` —que existe precisamente para eso— y declararlo `desarrollo` es
sencillamente un **error de dato**.

Así que se convierte en una comprobación, no en una derivación:

| | Regla |
|---|---|
| **R8** *(1.1)* | Un polígono de `minerales-dominios` con `categoria ∈ {desarrollo, historico}` **no puede contener** un registro de `minerales-proyectos` con `fase == "produccion"`. Si lo contiene, su `categoria` es `mixto` o `activo`. |

Esto atrapa la mentira en el fichero en lugar de disimularla en pantalla, que es
la doctrina del proyecto entera en miniatura.

> **R8 tiene diente desde la 1.10** *(2026-08-06)*, cuando nació la capa
> `minerales-dominios` que le faltaba. Durante nueve versiones este documento
> llevó aquí escrito que no lo tenía: la nota se retira porque ya sería falsa, no
> porque estorbara. Es la única regla de coherencia que compara dos capas entre
> sí, y por eso vive en `main()` y no en `validar_capa()`.

---

## 6.6 · La precisión de la geometría, y lo que la sostiene *(1.3)*

`geo_precision` es la única declaración del atlas que el mapa puede desmentir él
solo. Un punto pintado sobre buena cartografía **afirma exactitud aunque la ficha
diga lo contrario**, y en un mapa gana lo que se ve. Un lector que mide una
distancia sobre la pantalla no ha leído el campo `geo_fuente`, y no tiene por qué.

Por eso la geometría deja de ser el único dato del atlas cuya procedencia era
prosa: `geo_fuente` admite `geo_fuente__v` y `geo_fuente__f` como cualquier otro
campo sensible (§6.2), y la fuente cartográfica entra en `fuentes` con su tipo y
su copia archivada, igual que la que sostiene un promotor.

**Qué precisión concede cada clase de fuente:**

| Lo que da la fuente | `geo_precision` |
|---|---|
| Perímetro o coordenadas **del objeto mismo**: catastro minero, o la resolución que lo autoriza | `exacta` |
| Topónimo de un nomenclátor oficial: primaria para el **nombre del lugar**, no para el perímetro de la instalación | `paraje` |
| Perímetro del objeto mismo, de fuente cartográfica primaria, **simplificado por el atlas** para poder publicarse *(1.14)* | `generalizada` |
| Trazado o emplazamiento **previsto**, publicado por la fuente primaria que además **advierte ella misma** de que puede no ser el definitivo *(1.16)* | `proyectada` |
| Nada localizable, o fuente con licencia incompatible (`datos/LICENCIA-DATOS.md`) | `municipio` — se queda ahí, y lo dice |
| El hecho es **de un Estado entero** y la fuente no sitúa nada dentro de él *(1.19)* | `pais` |
| Trazado a mano alzada | `ilustrativa` |

Quedarse en `municipio` es un resultado legítimo: es el hueco del principio 1
aplicado a la geometría. Lo que no es legítimo es ascender de rango sin que
ascienda la evidencia — el mismo criterio que gobierna todos los demás campos.

**`generalizada` no es una `ilustrativa` con mejor nombre** *(1.14)*. Nació
porque la primera coropleta lo pedía y porque `ilustrativa` habría hecho MENTIR
a la ficha: su definición dice «trazado a mano alzada», y el límite de una
provincia no lo es — es cartografía del IGN, simplificada a propósito para que
52 polígonos y 1,2 millones de vértices quepan en una página web. Meter las dos
cosas en el mismo cajón habría borrado justo la distinción que este atlas existe
para conservar: **de dónde sale un borde y cuánto se ha tocado son dos preguntas
distintas**, y solo la segunda separa una simplificación declarada de un dibujo.
Por eso `generalizada` entra en **R9** como las otras dos que prometen
cartografía: la simplificación tiene que citar qué simplificó. Lo que NO concede
es exactitud — un borde generalizado no sirve para medir, y su ficha lo dice.

**`proyectada` es lo que todavía no existe, dicho por quien lo va a construir**
*(1.16)*. Nació del mismo modo que `generalizada`, y por el mismo error evitado:
la geometría de la red de hidrógeno la publica la plataforma de transparencia de
la Comisión —registro obligatorio por el artículo 23 del TEN-E, no una web de
cortesía—, y esa misma plataforma advierte de su propio trazado que «no prejuzga
y puede no coincidir con el trazado final del proyecto». Ninguno de los valores
anteriores dice eso: `exacta` promete el objeto mismo cuando el objeto **aún no
está construido**, `generalizada` culpa al atlas de una simplificación que aquí
no ha hecho, y `ilustrativa` volvería a hacer mentir a la ficha —«trazado a mano
alzada»— sobre cartografía que nadie ha dibujado a mano.

La distinción que conserva es de **tiempo**, no de detalle: las otras cuatro
responden a «cuánto se afina esto»; `proyectada` responde a «¿existe ya?». Un
hidroducto que se pondrá en servicio en 2032 tiene una geometría tan precisa
como quiera su promotor y sigue sin poder desmentirla el terreno, porque el
terreno todavía no la tiene. Entra en **R9** con las otras que prometen
cartografía, y **no concede exactitud**: sobre una `proyectada` no se mide, se
lee una intención con fuente.

**`pais` es el hermano de `municipio` una escala más arriba** *(1.19)*. Nació con
`idioma`, cuyos registros afirman cosas de la forma «en este Estado rige esta
norma». Eso no tiene coordenada: el objeto es el territorio entero, y el punto
solo existe para que el registro se pueda pinchar en un mapa. Los cinco valores
anteriores mentirían, cada uno a su manera — `exacta` y `paraje` prometen un
lugar donde no hay ninguno, `generalizada` y `proyectada` prometen cartografía
que nadie ha trazado, e `ilustrativa` diría «mano alzada» de una capital que
está donde está.

Como `municipio`, **queda fuera de R9 a propósito**: una precisión que no promete
cartografía no tiene por qué citarla como primaria. Lo que sí debe hacer es
declarar de dónde sale el punto en `geo_fuente` **sin marcarlo `confirmado`**
cuando la fuente cartográfica no sea un emisor oficial. El caso que lo estrena:
las capitales salen de Natural Earth, que está en dominio público —licencia
cómoda— pero es una compilación, no un registro público. Un punto de cortesía se
declara como lo que es.

Y una tentación que se rechaza con él: **polígonos de países**. Habrían metido al
atlas en cada disputa fronteriza del planeta a cambio de ningún poder analítico,
porque el hecho que se publica no es una línea.

**`autonomia` es la hermana intermedia** *(1.31)*: entre `municipio` y `pais`
faltaba un peldaño, y lo pidió el Mapa de ICTS, que sitúa cada infraestructura
**por comunidad autónoma y nada más dentro de ella**. El punto es el de la
capital autonómica, sale de nomenclátor oficial (así que su `geo_fuente` sí
puede ir `confirmado`, al contrario que el Natural Earth de las capitales del
mundo) y solo existe para poder pinchar el registro. Fuera de R9 por lo mismo
que sus dos hermanas. La alternativa —adivinar el municipio de cada instalación
por notoriedad— es exactamente el relleno por verosimilitud que el principio 1
prohíbe.

**Un hecho con varios lugares recibe varios puntos, no un centro inventado**
*(1.57)*. Las precisiones de arriba responden a **cuánto afina la fuente**; esta
regla responde a otra pregunta distinta, **cuántos sitios nombra**. Nació de un
defecto que duró cuatro releases: doce ICTS distribuidas se dibujaban en el
**mismo punto de Madrid**, declaradas `pais`, cuando el Anexo I que las sostiene
**sí dice dónde están** —«Cataluña y Madrid», «Canarias, Cantabria, Cataluña,
Madrid y País Vasco»— y el atlas ya lo tenía copiado en su campo `localizacion`.
No era una precisión insuficiente: era `pais` usado **fuera de su definición**,
que exige que la fuente «no sitúe nada dentro» del Estado.

Lo delataba su propio `geo_fuente`, que decía «sitúa el sujeto, no el objeto». Y
ahí está el defecto entero: **la ficha honesta y el mapa afirmando otra cosa**,
que es lo mismo que le pasó al Gran Telescopio Canarias dibujado en la isla que
no era. Una ficha sincera no absuelve a un punto falso — **un punto en un mapa
afirma**, y quien mira el mapa no está leyendo la ficha.

Así que cuando la fuente nombre varios lugares, la geometría es `MultiPoint` con
**un vértice por lugar nombrado**, y la `geo_precision` es la que corresponda a
esos lugares. El orden de las dos preguntas: **primero cuántos lugares nombra la
fuente, después con cuánto detalle nombra cada uno**. Reducir varios a uno «para
tener una coordenada» es fabricar una sede que no existe.

Dos cosas que esta regla **no** autoriza. No autoriza repartir un registro por
lugares que la fuente no nombre —si dice «varias comunidades» sin decir cuáles,
no hay vértices que poner—, ni convierte en sospechoso el apilamiento que quede:
nueve de aquellas once tienen sede en Madrid **de verdad**, y su vértice allí es
tan cierto como los otros. Lo que se quita no es el punto: es la mentira.

**Un punto representativo no hereda la precisión del polígono del que sale.**
Un perímetro de fuente primaria concede `exacta` **a ese perímetro**, no a un
punto sacado de él: el centroide de una concesión minera de 28 km² no es una
coordenada de nada, y el de un derecho **multiparte** puede caer donde no hay
derecho ninguno (las dos cosas, comprobadas sobre el catastro minero al abrir
esta capa). Consecuencia práctica, y conviene decirla entera: **mientras una
capa sea de puntos, `exacta` es inalcanzable por construcción.** Se llega a ella
ascendiendo la geometría a polígono (§8), no reetiquetando el punto.

**«Del objeto mismo» quiere decir del objeto que la fuente define, y de ningún
otro** *(1.12)*. La frase parecía obvia hasta que hubo que aplicarla: el catastro
minero define **derechos**, no minas. El perímetro de un derecho es exacto
**sobre el derecho** —es su envolvente administrativa de cuadrículas, y ahí no
hay margen de error— y **no dice dónde está la instalación**. Un proyecto que
tiene ese derecho no hereda su geometría ni su precisión:

- **`minerales-derechos` es `exacta`**: la geometría ES el derecho.
- **`minerales-proyectos` sigue en `paraje` y `municipio`**: son proyectos, y el
  derecho que cada uno tiene no lo dice ningún documento. Un titular puede
  acumular decenas de derechos —TOLSA tiene medio centenar solo en Madrid— y
  elegir cuál «es» el proyecto sería una atribución sin fuente.

Las dos capas se dibujan encima la una de la otra y **el lector ve el solape**,
que es un hecho, en vez de leer una identificación que nadie ha firmado.

**El CRS es parte de la cita, no un detalle de taller.** Los derechos mineros
españoles vienen históricamente en **ED50**, y ED50→ETRS89 en la Península
desplaza del orden de 100-200 m. Una coordenada mal transformada cae fuera de la
mina **mientras la ficha dice `exacta`**: exactamente la mentira que esta sección
existe para impedir. `geo_fuente` declara el CRS de origen y la transformación
aplicada.

**Por qué R9 hace falta**, si ya existían R2 y R3: esas dos solo miran los campos
declarados `confirmado`. Una geometría `exacta`, apoyada en un anuncio
corporativo y marcada `parcial`, pasaba en verde. R9 mira la precisión declarada,
que es lo que el mapa va a dibujar.

**El contraste de municipio** *(1.4)*. R9 comprueba que la geometría **cite**;
no puede comprobar que la coordenada esté **bien**, porque eso exige salir a
preguntar. Esa parte la hace una persona con `pipeline/consultar.py contraste
<capa>`, que recorre la capa y comprueba, por punto-en-polígono contra los
límites administrativos del IGN, que cada coordenada cae en el `municipio` que su
ficha declara. **No corre en CI** ni bloquea nada: toca la red, y un contrato que
se cae porque un ministerio está de mantenimiento no es un contrato.

Si un punto y su municipio no cuadran, la salida **no es elegir**: uno de los dos
datos está mal y no se sabe cuál. Se para, la geometría se queda donde estaba y
se declara el hueco — que es lo que se hizo con `las-cruces` al abrir esta capa.

---

## 6.7 · Qué sella exactamente `registro: analisis` *(1.19)*

La clase existe desde la 1.1 y **nadie la había usado**. La estrena `idioma`, y
lo primero que hubo que decidir es qué promete y qué no, porque la definición
corta —«investigación u opinión sellada como tal»— se puede leer de dos maneras
y una de ellas es un desastre.

**`analisis` marca la TESIS. No rebaja la prueba.**

Cada dato de una capa `analisis` lleva su fuente primaria, su `__v` y su `__f`
exactamente igual que en una capa `verificado`, y R1–R10 se le aplican enteras.
Lo que la clase advierte al lector es otra cosa: que **el marco es discutible**.
En `idioma`, cada artículo citado es un hecho comprobable contra el texto
archivado; lo opinable es llamar «activo» a ese conjunto de hechos y haberlo
recortado así. Una capa `analisis` con datos flojos no es análisis: es una capa
mala con coartada, y el sello sirve justamente para que eso no cuele.

Es el reverso exacto de `ilustrativo` (R5), y conviene verlos juntos porque se
confunden: **`ilustrativo` baja el listón de la evidencia y no toca la
interpretación** —dibuja dónde, no cuánto ni de quién—; **`analisis` mantiene el
listón intacto y marca la interpretación**. Por eso R5 obliga a `ilustrativo` a
renunciar a los `__v` por campo, y por eso a `analisis` no se le permite
renunciar a nada.

**El `debate_url` es embudo, no dependencia.** D4 define la clase «enlazada al
hilo del foro donde se defiende», y D1 manda por encima: «el atlas debe ser
público y autosuficiente, las fichas se bastan solas». Un `analisis` sin hilo se
publica; lo que no se hace es inventarse el enlace. Queda como hueco declarado
hasta que el hilo exista.

**Y una advertencia sobre el diente:** hoy `validar.py` **no comprueba nada**
sobre `analisis` ni sobre `debate_url`. Esta sección es doctrina sin CI, y se
dice aquí porque §8 prohíbe que el contrato afirme garantías que la validación no
da. Si alguna vez una segunda capa `analisis` la pone a prueba, esto es lo
primero que hay que convertir en regla.

---

## 7 · Validación — el contrato con dientes

`pipeline/validar.py` corre en CI sobre cada PR a `datos/`. La doctrina deja de
ser prosa y pasa a ser test:

1. **Esquema:** cada capa valida contra `nucleo.schema.json` + su extensión, **y el manifiesto contra `manifest.schema.json`** *(1.56)*. Era el único documento de `datos/` sin esquema, y se notó por la puerta de atrás: `cadencia_revision_dias` se pinta dentro de un atributo `title` del visor y nada garantizaba que fuera un número, así que hubo que escaparlo por si acaso. El esquema cierra los **tipos** y los **valores** —incluidos los cinco enums que hasta ahora solo leía el código: `arbol`, `grupo`, `geometria`, `registro` y `ambito`, y un dedazo en `geometria` dejaba de dibujar la capa **en silencio**—; la **doctrina** se queda en la comprobación 8, con su mensaje. Por eso el esquema no exige que una capa traiga `resumen`: fallar con «'resumen' is a required property» no enseña nada, y la 8 sí explica para qué sirve.
2. **Identidad:** `slug` únicos por capa; `id` = `capa:slug`; ids nunca
   desaparecen entre releases (solo cambian de `estado_registro`).
3. **Doctrina:** las reglas **R1–R7 y R9** de §6.4, mecánicamente. El mensaje de error
   **nombra la regla** (`R3: la fuente f2 es de tipo prensa…`), no describe un
   fallo de esquema: quien lo lee tiene que poder ir al contrato.
4. **Geometría:** WGS84 plausible, ≤5 decimales, anillos cerrados y orientados
   según RFC. El recuadro de plausibilidad depende del `ambito` de la capa
   *(1.1)*: `espana` valida contra el bbox del territorio —**Canarias incluidas**,
   `[-18.3, 27.5, 4.4, 43.9]`—; `mundo` solo contra el rango legal de WGS84.
5. **Fechas:** `fecha_verificacion` ≥ `fecha_alta`; formato ISO-8601; ninguna
   fecha en el futuro *(1.1)*, **con un día de tolerancia** *(1.6.1)*. «El
   futuro» exige saber de quién es el ahora, y una fecha ISO no lleva huso: el
   atlas se cura en España (UTC+1/+2) y el CI corre en UTC, así que un par de
   horas cada noche lo que aquí es hoy allí es mañana. Sin ese margen, un dato
   fechado correctamente a las 00:47 rompe la validación — y la rompió. La
   comprobación existe para cazar un 2027 escrito donde iba 2017, no para
   arbitrar un desfase de dos horas.
6. **Vocabularios:** todo enum contra `vocabularios.json` — **y que haya contra qué** *(1.48)*. Una capa cuyos registros declaran `categoria` sin entrada en el vocabulario **bloquea**: hasta la 1.48 no lo hacía, y ese silencio era el peor posible, porque el conjunto de valores admitidos salía vacío y apagaba de golpe los DOS controles de la categoría —el del enum y el del color de §9—. La capa más desprotegida era la que menos aviso daba. Bloquea y no avisa por simetría: un valor suelto fuera del vocabulario ya bloqueaba, así que una capa entera fuera no puede costar menos. Y el **valor** tiene forma comprobada, como ya la tenía el color: `[a-z0-9_]`, porque no es prosa —viaja a una clave de estilo del mapa y a una URL de filtro—. Los 99 valores del atlas la cumplen; el único que se salió, `autovía`, no lo escribió nadie: lo fabricó un `.lower().replace(" ", "_")` sobre el rótulo de la fuente, y sobrevivió porque su capa era justamente una de las tres sin entrada.
7. **Archivo de fuentes:** toda fuente con `url` y tipo ≠ `hueco` referencia un
   `archivo` existente en `fuentes/` (aviso, no bloqueo, durante la v1).
   *(1.60)* Y toda fuente que declare **`transcripcion`** referencia un fichero
   que existe — este **bloquea**, y la asimetría con el aviso anterior es
   deliberada: un `archivo` que falta deja una cita sin respaldo archivado, pero
   una `transcripcion` que falta deja sin respaldo **la lectura misma** que
   sostiene el `confirmado` de una fuente que ninguna máquina puede leer.
8. **Manifiesto** *(1.1)*: cada capa con `fichero` apunta a un fichero que existe;
   el `atlas.capa` de la colección coincide con el `id` del manifiesto; una capa
   `en_preparacion` no declara `fichero` (regla del horizonte, §3). Y *(1.43)*
   toda capa con `fichero` trae **`resumen`**: existe, cabe en 140 caracteres y
   **no es el título otra vez** — lo único comprobable de una línea escrita a
   mano. Que además diga algo verdadero lo sostiene quien la escribe, como el
   `titulo`.
   *(1.56)* Y la **ruta de la página** de una capa es de este sitio: empieza
   por «/» y **no por «//»** — lo segundo cumple la regla al pie de la letra y
   es un dominio ajeno con el protocolo omitido. Era el único hueco del atlas
   que no cerraba ninguna de sus dos barreras contra un enlace de fuera:
   `escapar` no mira a dónde apunta un enlace, y `urlSegura` lo habría
   aprobado, porque resuelve contra el dominio del atlas y saca un `https:` de
   buena fe. Un enlace ajeno se habría presentado como «la página de esta
   capa», con el rótulo que el manifiesto quisiera (auditoría del 2026-08-17).
9. **Procedencia** *(1.26)*: toda capa con `fichero` tiene su ficha en
   `fuentes/PROCEDENCIA.md`, y toda ficha tiene su capa. Se reconoce una ficha
   por su encabezado de nivel 2 en kebab-case, que es la forma de un `id` — los
   de prosa llevan espacios y no colisionan.
10. **Enlaces publicables** *(1.33)*: toda `url` de fuente y todo `debate_url`
    usan esquema **`http` o `https`**. Es la única comprobación del contrato que
    no protege el dato sino **a quien lo lee**: esos dos campos acaban los dos en
    el `href` de un enlace, y desde que las fichas se pre-renderizan, en miles de
    ficheros HTML servidos por el dominio del atlas. Un `javascript:…` ahí sería
    un enlace que **ejecuta** al pincharlo.
11. **Series temporales** *(1.35)*: todo fichero de `datos/series/` valida
    contra `serie.schema.json`; su `<capa>/<slug>` corresponde a un registro
    publicado; las fechas van en ISO, estrictamente ascendentes y sin
    duplicados; y se cumple **R11**: el último punto de cada columna con
    `cuadre` coincide con el campo declarado de la ficha, y la última fecha con
    su `fecha_dato`. Como R8, compara dos piezas a la vez y vive en `main()`.

**Aviso vs. bloqueo.** De esta lista, solo la comprobación **7** avisa sin romper
el CI —hay citas que se archivan con retraso—; las otras diez **bloquean**. Fuera
de la lista avisan también las dos del `color` de §9. `validar.py` distingue las
dos cosas en la salida y solo devuelve código ≠ 0 por las que bloquean.

> **Por qué la 10 no la hacía ya el esquema, que es la pregunta obvia.** El
> esquema declara `"format": "uri"` sobre `url`, y `javascript:alert(1)` **es una
> URI válida** — la valida sin protestar, igual que `vbscript:`. Escapar tampoco
> vale: el escapado convierte `<` y las comillas, y no toca el esquema de una
> URL. Son dos defensas que parecen cubrir esto y no lo cubren ninguna de las
> dos, que es exactamente por qué hizo falta una comprobación propia. La otra
> mitad vive en el visor (`urlSegura`, en `app/src/expediente.js`): aquí se
> impide que **entre**, allí que se **publique**. Las dos listas de esquemas
> tienen que decir lo mismo.

> **Por qué la 9 bloquea y la 7 no, siendo las dos «de archivo».** La 7 mira una
> cita que ya está escrita en el dato: llega tarde el PDF, no el hecho. La 9 mira
> si la capa **dice de dónde sale**, y ahí no hay retraso posible — quien la
> publicó lo sabía en ese momento o no debió publicarla. Lo que comprueba es que
> la ficha EXISTE, no que diga la verdad: eso no lo sabe una máquina. Y es
> suficiente, porque el fallo real no es la ficha mentirosa sino la ficha que se
> escribe «luego» y nunca se escribe.

`pipeline/vigilar.py` corre programado (Action semanal, `vigilar.yml`): capas que
superan su `cadencia_revision_dias` y citas cuya URL ha muerto. **Avisa; jamás
escribe datos.** *(Construido en la 1.5.0; hasta entonces esta sección describía
una guardia que no estaba montada, y desde la 1.4.0 lo decía.)*

**Avisa fallando, no abriendo issues** *(1.5)*. Abrir issues exigiría dar permiso
de **escritura** a un workflow programado de un repositorio público, y ponerse en
rojo consigue el mismo aviso con cero permisos. Un permiso concedido y olvidado
no se nota; su ausencia, sí.

**Qué cuenta como URL muerta:** solo **404** y **410**. Un 403, un 405, un 429 o
un 5xx son bloqueos anti-bot y caídas pasajeras; se informan como *no
concluyente* y **no dan la alarma**. La frontera es estrecha a propósito: un
vigilante con falsos positivos se apaga, y entonces no vigila nada.

> **Lo que esta guardia NO puede comprobar, y lo dice cada vez que corre.**
> Medido sobre las fuentes de este atlas: **EUR-Lex y el IGME devuelven HTTP 200
> para documentos que no existen**, sirviendo una página de error. Donde la URL
> promete formato —termina en `.pdf`— el engaño se detecta, porque responder
> `text/html` delata el enlace roto. Donde no lo promete, un *soft-404* es
> indistinguible del documento y **no hay comprobación**. Por eso `vigilar.py`
> imprime cuántas citas quedan sin verificar de verdad: un «sin alarmas» que se
> leyera como «todas las citas siguen vivas» sería la garantía falsa que §8
> prohíbe. Para esas citas, la garantía es `fuentes/` — y esta es la mejor
> defensa escrita de por qué ese directorio existe.

---

## 8 · Versionado y releases

- **Release de datos:** etiqueta Git `datos-vAAAA.MM` (p. ej. `datos-v2026.07`).
  El visor consume siempre una release etiquetada, nunca la rama viva. Si en un
  mismo mes sale una segunda release, lleva sufijo `.N` empezando en 1
  (`datos-v2026.08.1`) *(1.3)*. La etiqueta ya publicada **no se mueve ni se
  reescribe**: el sufijo existe precisamente para no tener que tocarla.
- **Por release:** una entrada en `CHANGELOG-DATOS.md` — qué cambió, por qué, con
  qué evidencia. Esa entrada alimenta la respuesta en el hilo de El Tercio.
- **Semver de contrato** (este documento) y **semver por capa** (manifiesto)
  evolucionan por separado: corregir el promotor de un registro es parche de
  capa; añadir la capa de PERTE es menor de manifiesto; renombrar un campo del
  núcleo es **mayor de contrato** y exige guía de migración escrita aquí.

### Reglas de evolución (lo que garantiza que nunca quede cojo)

| Cambio | Versión | Regla |
|---|---|---|
| Corregir un valor | parche de capa | commit con fuente en la descripción |
| Añadir registro | menor de capa | id nuevo, jamás reciclado |
| Retirar registro | menor de capa | `estado_registro: retirado`, nunca borrado |
| Añadir campo | menor de contrato | opcional para consumidores viejos |
| Añadir valor a un vocabulario | menor de contrato | acto deliberado en `vocabularios.json` |
| Añadir capa o grupo | menor de manifiesto | entrada en manifiesto + esquema propio |
| Punto → polígono del mismo registro | menor de capa | mismo `id`, `geo_precision` y `geo_fuente` actualizados |
| Declarar una rama `en_preparacion` *(1.1)* | menor de manifiesto | solo `id`, `titulo`, `arbol`, `grupo`; **sin `fichero`** |
| Una rama `en_preparacion` nace con datos *(1.1)* | menor de manifiesto | se retira la marca y se añaden `fichero`, `geometria`, `registro`, `version`, `verificado_a` |
| Añadir una regla de coherencia `R*` *(1.1)* | menor de contrato | entra con su implementación en `validar.py`, **o con su estado declarado** si aún no la tiene |
| **Renombrar el id de una rama sin datos** *(1.23)* | menor de manifiesto | **solo mientras no haya publicado un registro.** Lo que esta sección protege es la estabilidad de las CITAS, y a un id sin datos no lo cita nadie. En cuanto sale una release con registros dentro, la puerta se cierra para siempre. Ya se usó dos veces antes de escribirse: `h2med` → `hidrogeno-red` y `recurso-eolico`/`recurso-solar` → `parques-eolicos`/`plantas-solares` |
| Renombrar/eliminar campo o cambiar semántica | **mayor de contrato** | prohibido sin migración documentada |

**El contrato no puede mentir sobre sí mismo.** Una regla escrita aquí que el CI
no comprueba es prosa disfrazada de garantía — el fallo exacto que este documento
existe para evitar. Por eso toda `R*` sin diente lleva su estado escrito al lado,
y por eso §7 separa lo que avisa de lo que bloquea. **Desde la 1.10 no hay
ninguna**: R8, que fue la última, se implementó al nacer la capa que le faltaba.
La puerta se queda abierta —una regla puede volver a adelantarse a sus datos—
pero se cruza declarándolo, nunca en silencio.

---

## 9 · Vocabularios controlados (arranque)

`datos/vocabularios.json` — añadir valores es versión menor de contrato.

Cada entrada lleva su `valor`, su `etiqueta` y, desde la **1.9**, el **`color`**
con el que el mapa la pinta. Desde la **1.33** el color tiene además una **forma
comprobada**: hex de 3, 4, 6 u 8 dígitos, y lo que no la tenga avisa. No es
pedantería tipográfica — el color viaja hasta un atributo `style` de la ficha, y
ahí un `;` dentro del valor deja de ser un color para ser una declaración más.
Los 61 colores del atlas son `#RRGGBB` sin excepción, así que la regla no
estrecha nada que se estuviera usando. El color es dato, no capricho del visor: estuvo
cableado en el código mientras hubo una sola capa y, al llegar la cuarta, tres
capas se pintaban del mismo gris porque el programa solo conocía las categorías
de la primera. Ponerlo aquí tiene una consecuencia que conviene saber: **cambiar
un color exige una release de datos**, como cualquier otro cambio de
vocabulario.

> **Y desde la 1.24, el color lo COMPRUEBA `validar.py`** — avisa, no bloquea.
> Esta línea llevaba desde la 1.9 escrita y sin verificar, que es justo lo que §8
> llama «prosa disfrazada de garantía», y el precio de no tener diente se pagó
> otra vez: `cables-submarinos` nació con sus dos categorías **sin color** y
> estuvo **una release entera** pintándose con el color de reserva —
> indistinguible de cualquier otra capa— sin que nada lo dijera. Tercera vez que
> el mismo fallo entra por la misma puerta.
>
> **Avisa y no bloquea a propósito:** el dato es correcto y lo único que se
> pierde es poder distinguir la capa en el mapa. Bloquear por eso pararía la
> publicación de un registro bueno.
>
> **Y se comprueba sobre las categorías que se USAN, no sobre las declaradas.**
> La diferencia importa y tiene un caso vivo: `cables-submarinos:trazado` está
> declarada, no la usa ningún registro **y no lleva color, deliberadamente**. El
> color es «con el que el mapa la pinta», así que una categoría que no pinta nada
> no tiene color que declarar — elegirlo hoy sería decidir un diseño para algo que
> no existe. El aviso salta el día que alguien la use, que es cuando hace falta.

**Del registro:**

- `verif`: `confirmado` · `parcial` · `no_verificado`
- `estado_registro`: `vigente` · `historico` · `retirado`
- `geo_precision`: `exacta` · `paraje` · `generalizada` *(1.14)* · `proyectada`
  *(1.16)* · `municipio` · `pais` *(1.19)* · `ilustrativa` — qué fuente concede
  cada uno, en §6.6
- `fuente.tipo`: `primaria` · `prensa` · `corporativa` · `hueco`
- `fase` *(1.1)*: `produccion` · `desarrollo` · `tramitacion` · `parado` · `cerrado`

**Del manifiesto:**

- `grupo`: `dotacion` · `actividad`
- `arbol` *(1.1)*: `minerales` · `energia` · `conectividad` · `tablero` · `intangibles`
- `ambito` *(1.1)*: `espana` · `mundo`
- `registro`: `verificado` · `ilustrativo` · `analisis` *(1.1)*
- `geometria`: `puntos` · `poligonos` · `lineas` · `mixta`

**`categoria`, por capa:**

- *minerales-proyectos*: `estrategico_ue` · `produccion_singular` · `en_disputa`
- *nuclear* *(1.6)*: `en_operacion` · `en_cese` · `desmantelamiento`
- *limites-soberania* *(1.7)*: `reclamado_por_espana` · `reclamado_a_espana`
- *espacios-maritimos* *(1.11)*: `sin_delimitar` · `limite_declarado` ·
  `limite_acordado` *(1.61)* · `recurso_afectado`
- *gas-regasificacion* *(1.8)*: `regasificacion` · `logistica_gnl`
- *refinerias* *(1.28)*: `refino` — **un solo valor**: el registro que fija el
  perímetro (PRTR, actividad 1.a.i) no distingue clases de refinería, y
  fabricarlas desde el nombre o el producto sería interpretar. Lo que las
  distingue —capacidad, grupo, fase— ya va en campos
- *gas-almacenamiento* *(1.29)*: `basico` · `extinguido` — la primera la define
  la resolución anual de la DGPEM; la segunda existe por Castor, cuya concesión
  extinguió un real decreto-ley y cuyas instalaciones siguen en el terreno
- *bases-eeuu* *(1.29)*: `utilizacion_conjunta` — un solo valor: el anejo 2 no
  distingue clases de base
- *seguimiento-espacial* *(1.29)*: `espacio_profundo` · `seguimiento` — la
  distinción la traen los propios instrumentos («antena de espacio lejano» en el
  acuerdo de Cebreros; el complejo «del Espacio Profundo» en el de Robledo)
- *desaladoras* *(1.30)*: `idam` — un solo valor: la orden que fija el perímetro
  no distingue clases de desaladora
- *icts* *(1.31)*: `localizacion_unica` · `distribuida` — la tipología LU/ID del
  propio Anexo I del Mapa, no una clasificación del atlas
- *minerales-dominios* *(1.10)*: `activo` · `historico` · `desarrollo` · `disputa` · `mixto`
- *minerales-derechos* *(1.12)*: `vigente` · `en_tramite` · `extinguido`
- *electricidad-interconexiones* *(1.13)*: `en_servicio` · `en_construccion` · `proyectada`
- *centros-datos* *(1.15)*: `en_servicio` · `autorizado` · `en_tramitacion`
- *perte* *(1.18)*: `plan_inversion` — **un solo valor**: el documento no
  clasifica los planes, y sacar una clase del título de cada proyecto sería
  interpretar. Lo que distingue a unos de otros es el dinero, y ese va en campos
- *hidrogeno-produccion* *(1.17)*: `electrolizador` — **un solo valor**, y es
  deliberado: las siete son la misma clase de cosa y la fuente las sirve en la
  misma capa. Lo que las distingue —en qué punto están— ya lo llevan `fase` y
  `estado_pci`. Precedente: `recurso-eolico`, con `zona` a secas
- *hidrogeno-red* *(1.16)*: `hidroducto` · `estacion_compresion` · `almacenamiento`
- *idioma* *(1.19)*: `estado` · `organizacion` — dos clases de sujeto, no dos
  grados de la misma cosa: un Estado se da a sí mismo su norma lingüística, una
  organización internacional la recibe de un tratado que firman otros

**`estatuto`, el vocabulario de `idioma`** *(1.19)*. Es el campo espinal de la
capa y **no puede ser un booleano**, porque el mapa de un solo color que todo el
mundo tiene en la cabeza es falso. Ocho valores, y ninguno se inventó de
antemano: cada uno salió de leer un texto que no encajaba en los anteriores.
Tampoco se multiplican por gusto — hubo un noveno, `cooficial_regional`, que se
retiró antes de publicar: separaba tres maneras de acotar la cooficialidad que se
distinguen mejor citando el artículo que clasificándolo.

- `oficial_constitucion` — la constitución lo declara lengua oficial del Estado
  (España, Colombia, Costa Rica, Guatemala, Honduras, Panamá, Cuba, R. Dominicana)
- `cooficial_acotada` — oficial, y otras lenguas lo son **con un límite** (España,
  Colombia, Perú, Ecuador, Venezuela, Nicaragua). **El límite no es el mismo en
  las seis** —territorio donde predomina, Estatuto de autonomía, región nombrada,
  pueblo indígena, «relación intercultural»— y esa diferencia es demasiado fina
  para un enum: va a `claves` verbatim. El valor afirma la arquitectura: hay
  cooficialidad y **no alcanza a todo el Estado**
- `cooficial_estatal` — varias lenguas oficiales **en todo el Estado**, enumeradas
  (Bolivia, con el castellano y treinta y seis lenguas indígenas)
- `bilingue` — el Estado se declara bilingüe (Paraguay, con el guaraní)
- `oficial_con_remision` — la norma fundamental nombra unas y **delega el resto en
  la ley** (Guinea Ecuatorial; y la UE, por el art. 342 TFUE)
- `nacional_sin_oficialidad` — norma expresa que la hace **nacional** sin
  declararla oficial (México)
- `sin_norma_expresa` — lengua de facto del Estado y **ninguna norma la nombra**
  (Argentina, Chile, Uruguay)
- `lengua_de_trabajo` — en una organización internacional, por su tratado o
  reglamento (ONU)
  — aquí `categoria` dice **qué pieza de la red es**, no en qué estado está: el
  estado ya lo llevan `fase` y `estado_pci`, y las tres piezas se leen de un
  vistazo en el mapa porque son línea, punto y punto
- *generacion-electrica-provincia* *(1.14)*: `eolica` · `solar_fv` · `solar_termica` ·
  `hidraulica` · `nuclear` · `combustibles` · `cogeneracion` · `mareomotriz` —
  la **tecnología dominante** de la provincia
- *agua-embalsada* *(1.21)*: `embalse` — **un solo valor**: el Boletín no
  clasifica los embalses, y sacar una clase del uso o del tamaño sería
  interpretar. Lo que los distingue va en campos
- *cables-submarinos*: `aterrizaje` · `trazado` — **`trazado` se queda sin
  usar** *(1.20)*, y no es olvido: el recorrido de un cable submarino no tiene
  fuente con licencia compatible (TeleGeography es CC BY-NC-SA). Lo que sí
  publica una fuente primaria es dónde toca tierra
- *puertos* *(1.25)*: `zona_terrestre` · `zona_i` · `zona_ii` — los tres los pone
  la LEY de Puertos, que delimita a cada puerto una zona terrestre y dos de aguas
- *rte-t* *(1.25)*: `red_basica` · `red_global` · `nodo_urbano` — la RED, que es
  la distinción del Reglamento; los modos van en campos, uno por columna
- *ferrocarril* *(1.25)*: `linea` — un solo valor: de línea, tramo y nodo, la
  fuente solo NOMBRA la línea
- *parques-eolicos* *(1.23)*: `parque_eolico` — un solo valor, heredero directo
  del `zona` que tenía `recurso-eolico`, con la diferencia de que ahora nombra
  algo que existe
- *plantas-solares* *(1.23)*: `fotovoltaica` · `termosolar` — las dos van juntas
  porque la BTN las sirve en la misma tabla y son la misma clase de objeto; lo
  que cambia es cómo, que es justo lo que un vocabulario de categoría dice
- *red-electrica* *(1.22)*: `tendido` · `subestacion` — los dos los
  separa la fuente, que captura la línea y el recinto como objetos
  distintos. No hay un tercero para la torre de alta tensión, aunque el
  IGN capture 280.072: una torre no es un activo, es el detalle con el
  que se dibuja la línea

> **`proyectada` existe en dos vocabularios distintos, y es a propósito**
> *(1.16)*. Es `categoria` en `electricidad-interconexiones` (qué clase de enlace
> es) y `geo_precision` en cualquier capa (qué clase de geometría es). No chocan:
> viven en ramas separadas de `vocabularios.json` y quieren decir lo mismo —
> **esto todavía no está construido**—, cada una aplicada a su objeto. Se dejó la
> palabra en vez de inventar un sinónimo peor.

> **`fase` y `categoria` no son lo mismo, aunque compartan palabras.**
> `categoria` dice **qué clase de cosa es** un registro (por qué está en el
> atlas); `fase` dice **en qué punto de su vida está** (§6.5). Una mina puede ser
> `estrategico_ue` y estar en `tramitacion`, o dejar de estarlo sin cambiar de
> categoría.
>
> **`minerales-dominios` no tiene `fase`, y eso es deliberado** *(1.10)*: un
> dominio no es un expediente, es una comarca. Su carácter —viva, histórica, en
> desarrollo, en disputa— *es* la clase de cosa que es, así que va en `categoria`
> y no en un campo aparte. Hasta la 1.9 el contrato llamaba `caracter` a ese
> campo mientras archivaba sus valores bajo `categoria`, lo que habría publicado
> **dos campos con los mismos cinco valores**: exactamente la doble fuente de
> verdad que D3 descartó. Se unifican antes de que la capa exista, que es cuando
> sale gratis — el mismo momento y el mismo motivo por los que la 1.1 pudo
> introducir `fase`.

---

## 10 · Esquemas por capa (campos específicos, planos)

**minerales-proyectos** (`actividad`, puntos, verificado):
`materias[]` (✔) · `tipo_proyecto` (✔: extracción / procesamiento / refino /
reciclaje, combinables) · `municipio` (✔) · `provincia` (✔) · `promotor` (+`__v`,`__f`)
· **`fase`** (✔ *(1.1)*, vocabulario; +`__v`,`__f`) · `estado_proyecto`
(+`__v`,`__f`,`_fecha`) · **`nombre_oficial`** (– *(1.2)*; +`__v`,`__f`) · `claves[]`

> **Por qué existe `nombre_oficial` *(1.2)*.** El nombre con el que se conoce un
> proyecto y el que lleva en el documento que lo reconoce no siempre coinciden —
> en la primera lista CRMA difieren en cinco de los siete proyectos españoles:
> «La Parrilla» figura como *P6 Metals* y «Las Cruces» como *Polymetallic primary
> sulphide project*. Sin este campo, quien quisiera contrastar una ficha contra
> el DOUE no encontraría la entrada. `nombre` sigue siendo el de presentación;
> `nombre_oficial` es el que permite la cita.

**nuclear** *(1.6)* (`actividad`, puntos, verificado):
`grupo` (✔: el reactor dentro de su emplazamiento) · `municipio` (✔) ·
`provincia` (✔) · `potencia_mw` (+`__v`,`__f`) · `tecnologia` (+`__v`,`__f`) ·
`titulares[]` (+`__v`,`__f`) · **`fase`** (✔, vocabulario; +`__v`,`__f`) ·
**`autorizacion_hasta`** (+`__v`,`__f`) · **`cierre_acordado`** (+`__v`,`__f`) ·
`nombre_oficial` · `claves[]`

> **Por qué DOS fechas, y no una «fecha de cierre».** Son hechos distintos, de
> instrumentos distintos, y en España no coinciden:
>
> - **`autorizacion_hasta`** es hasta cuándo un reactor está **legalmente
>   autorizado** a operar. Lo fija una orden ministerial publicada en el BOE, que
>   es lo más duro que hay: se cita por su número y se archiva.
> - **`cierre_acordado`** es la fecha del **calendario pactado** en 2019 entre
>   Enresa y los titulares.
>
> Vandellós II lo enseña de un vistazo: autorizado hasta 2030, acordado para
> 2035. Meterlo todo en un campo obligaría a elegir cuál es «la» fecha, y quien
> lea el mapa no sabría cuál está viendo.
>
> **Un reactor por registro, aunque compartan emplazamiento.** Almaraz I y II
> tienen autorizaciones, fechas y potencias distintas: son dos hechos, no uno.
> Comparten coordenada, y eso se dice — separarlos en el mapa exigiría una
> fuente que sitúe cada edificio, y no la hay (§6.6).

**conducciones-combustible** *(1.39)* (`dotacion`, líneas, verificado):
`n_tramos` (✔) · `longitud_medida_km` (✔; +`__v`,`__f`) · `claves[]`
— y un esquema que existe sobre todo para **PROHIBIR**: `titular`,
`propietario`, `operador`, `presion_bar`, `diametro_mm` y `fase`.

> **Dos registros y no 3.106, por la misma razón que el tendido son dos y no
> 1.784.** La BTN trae `nombre` **a NULL en todas** sus conducciones. Publicar
> una ficha por objeto obligaría a bautizarlas por sus extremos, que es fabricar
> un dato con buena presencia. Se publica lo que la fuente sí distingue —el tipo,
> gasoducto u oleoducto— agregando sus tramos, y `n_tramos` dice cuántos hay
> detrás para que la agregación sea una decisión leída y no un descuido.
>
> **Lo prohibido es lo que haría que la capa mintiera.** Una carta topográfica
> mide dónde está el eje y de eso responde; no dice de quién es la conducción, ni
> a qué presión trabaja, ni si conduce hoy. Quien publica eso es el operador,
> fuente corporativa que por R3 no sostiene un confirmado — **y no se sustituye
> un dato por su parecido**. `fase` queda fuera por lo mismo que en el tendido:
> un `false` por falta de dato es justo la mentira que R7 evita.
>
> **`longitud_medida_km` se llama así a propósito**, y no `longitud_km`: el IGN
> no publica ninguna longitud. La mide el atlas, va `parcial` —medir sobre un
> dato primario no convierte la medida en primaria (R2)— y **mide sobre la
> geometría ya simplificada**. Si midiera la original, la ficha diría una cifra
> que el mapa no dibuja, que es exactamente la divergencia silenciosa que R11
> persigue en las series.

**gas-interconexiones** *(1.37)* (`actividad`, puntos, verificado):
`municipio` (– *admite null*) · `provincia` (✔) · `pais_vecino` (✔; +`__v`,`__f`) ·
`extremo_exterior` (nombrado, sin coordenada) · `nombre_estadistico` ·
`codigo_entsog` (– *admite null*) · **`fase`** (✔, vocabulario; +`__v`,`__f`) ·
`claves[]`

> **`nombre_estadistico` existe porque el mismo tubo tiene tres nombres.** Para
> CORES es «Zahara de los Atunes»; para la CNMC, «la interconexión de Tarifa»;
> para el BOE, «el gasoducto Magreb-Europa». Sin este campo, cruzar la
> estadística con los actos fabrica duplicados o huecos — y el fallo sería
> silencioso, que es el peor.
>
> **`fase: produccion` dice que opera, NO en qué sentido.** El Magreb-Europa está
> en producción **exportando** a Marruecos desde que dejó de importar. El sentido
> es un hecho de la estadística, con su fecha, y vive en `claves`; meterlo en la
> fase obligaría a inventar valores que no corresponden a un campo del que se
> deriva `activo`. Por eso la CATEGORÍA sí tiene un valor propio,
> `flujo_invertido`: llamarlo «en servicio» a secas escondería lo más importante
> que tiene, y «parado» sería sencillamente falso.
>
> **`municipio` admite null, y es el caso de Larrau.** El punto es un paso de
> montaña en el límite jurisdiccional, y ningún acto archivado dice a qué término
> municipal pertenece el cruce. Rellenarlo por cercanía sería el relleno por
> verosimilitud que el principio 1 prohíbe.
>
> **`codigo_entsog` es un identificador, no un dato de ENTSOG.** Los datos de
> ENTSOG no se pueden redistribuir —sus condiciones prohíben expresamente
> derivar—, pero un identificador es un hecho y citarlo no arrastra licencia. Se
> publica solo para que la capa sea cruzable con los datos europeos de capacidad
> por quien tenga derecho a usarlos.
>
> **Los VIP no son registros.** Desde octubre de 2014 la normativa europea agrupa
> las cuatro conexiones europeas en dos puntos **virtuales**. No tienen
> ubicación: darles geometría sería inventarla. Y su consecuencia se declara en
> cada ficha — **desde esa fecha no hay dato oficial de flujo por punto físico**
> para Francia y Portugal, así que el cero de Badajoz o Tuy en la serie significa
> «se cuenta en otro sitio», no «no pasa nada».

**residuos-radiactivos** *(1.36)* (`dotacion`, puntos, verificado):
`municipio` (✔) · `provincia` (✔) · **`fase`** (✔, vocabulario; +`__v`,`__f`) ·
`anio_operacion` (+`__v`,`__f`) · `capacidad` (+`__v`,`__f`) ·
`titular` (+`__v`,`__f`) · `claves[]`

> **`fase` es aquí el campo que impide la mentira más fácil de esta capa.**
> «Autorizar la ejecución y montaje» de un almacén y «tener un almacén» son dos
> hechos con años de distancia, y el segundo casi nunca llega al BOE: los ATI se
> autorizan como **modificación de diseño** de su central, en dos pasos —
> ejecución y montaje primero, puesta en servicio después—, y lo que se publica
> es el primero. De modo que los cuatro ATI-100 con acto archivado van en
> `desarrollo` y no en `produccion`, y su ficha lo dice con todas las letras.
> Publicarlos como existentes sería el error simétrico al de registrar como vivo
> un almacén cancelado.
>
> **`capacidad` es texto, y a propósito.** Cada instalación mide lo suyo en lo
> suyo: Trillo en contenedores, José Cabrera en posiciones de losa, El Cabril en
> celdas y en metros cúbicos. Un campo numérico común obligaría a convertir entre
> unidades que no lo son sin suponer, y suponer es lo que el principio 1 prohíbe.
> Quien quiera comparar, que lea la frase de la fuente.
>
> **Un ATD no es un registro.** El 7.º PGRR define el Almacén Temporal
> Descentralizado de cada central como «su ATI, al que se le añade una
> instalación complementaria, así como medidas adicionales». No es una
> instalación distinta: es el mismo edificio con un envoltorio de doctrina. Darle
> ficha propia contaría dos veces lo mismo — la misma trampa que §6.6 evita con
> los reactores que comparten emplazamiento, vista desde el otro lado.
>
> **Y una instalación cancelada sigue siendo un registro.** El ATC de Villar de
> Cañas nunca se construyó y se abandonó en 2023, pero va en la capa como
> `estado_registro: historico`: su cancelación es el hecho que explica por qué
> hay catorce almacenes repartidos donde debía haber uno. «Nada se borra» (§8) no
> vale solo para lo que dejó de ser verdad: también para lo que nunca llegó a
> serlo, cuando su no-existencia está acreditada por acto.

**gas-regasificacion** *(1.8)* (`dotacion`, puntos, verificado):
`operador` (✔; +`__v`,`__f`) · `municipio` (✔) · `provincia` (✔) ·
**`fase`** (✔, vocabulario; +`__v`,`__f`) · `puesta_en_servicio` (+`__v`,`__f`) ·
`capacidad_almacenamiento_m3` (+`__v`,`__f`) ·
`capacidad_emision_nm3h` (+`__v`,`__f`) · `claves[]`

> **Los dos campos de capacidad existen y van a quedarse vacíos.** No es un
> descuido: al abrir la capa se comprobó que **nadie los publica en documento
> accesible**. Ni el informe de supervisión del sistema gasista de la CNMC —que
> sí trae mínimos técnicos y días de operación por planta— ni las páginas de los
> operadores traen la capacidad de almacenamiento en m³ de cada terminal, que es
> justamente la cifra que todo el mundo repite. Los campos se declaran para que
> el hueco tenga dónde alojarse el día que aparezca el instrumento.
>
> **Ojo con la fuente que se dé por buena aquí.** Enagás es una sociedad
> cotizada: por §6.1 sus publicaciones son `corporativa` y por **R3** no pueden
> sostener un `confirmado`. Lo primario es el BOE y la CNMC.

**refinerias** *(1.28)* (`actividad`, puntos, verificado):
`grupo` (✔; +`__v`,`__f`) · `operador` (✔; +`__v`,`__f`) · `municipio` (✔) ·
`provincia` (✔) · **`fase`** (✔, vocabulario; +`__v`,`__f`) ·
`capacidad_crudo_kt` (✔; +`__v`,`__f`, `_fecha`) · `anio_inicio` (✔; +`__v`,`__f`) ·
`nombre_oficial` · `claves[]`

> **El perímetro no lo elige el atlas: lo fija un código de actividad.** Entra
> lo que el PRTR-España —el registro que el Reglamento (CE) 166/2006 obliga a
> publicar, primaria por la misma doctrina que la plataforma PCI-PMI (enmienda
> 1.16)— clasifica como **refino de petróleo (actividad 1.a.i, CNAE 19.20)**:
> exactamente diez complejos, que coinciden uno a uno con la serie de capacidad
> de CORES. Sin ese código, «refinería» se cuela en todo: el mismo registro
> tiene refinerías de aluminio, de aceites y de mantecas.
>
> **Dos fuentes que se reparten el trabajo.** CORES —corporación de derecho
> público adscrita a MITECO, estadística oficial del sector— sostiene capacidad,
> grupo, año de inicio y la única nota de inactividad; el PRTR sostiene titular,
> municipio y **la coordenada del complejo**, que es lo que permite
> `geo_precision: exacta`. En Muskiz y Tarragona el Nomenclátor del IGN corrobora
> el punto con un topónimo a menos de un kilómetro; en los otros ocho no nombra
> la instalación (barrido por recuadro archivado).
>
> **La atribución de CORES es de fórmula fija**, como la del IGN: «Fuente CORES
> (www.cores.es)», y así va en el manifiesto. Comprobar compatibilidad no es leer
> cómo obliga a citar — la lección de la 1.27, aplicada a la primera fuente nueva
> que llegó después.
>
> **`capacidad_crudo_kt` lleva `_fecha` porque la capacidad no es intemporal**:
> es el último año cerrado de la serie («figures to 31st December»), y la serie
> demuestra que se mueve — Cartagena pasó de 9.000 a 5.000 kt entre 1984 y 1985.
> La suma de las diez se cuadró contra el total nacional de la propia serie
> antes de publicar (79.200 kt en 2025), que es lo que separa entender un
> documento de leerlo por encima.
>
> **`fase` se sostiene distinto según el lado.** El `parado` de Tenerife lo dice
> la fuente con todas las letras; el `produccion` de las otras nueve se apoya en
> la serie vigente y en que la única nota de inactividad señala solo a Tenerife
> — por eso las nueve llevan marca `parcial` y un hueco (f9) que pide el acto
> administrativo por instalación.

**gas-almacenamiento** *(1.29)* (`dotacion`, **mixta**, verificado):
`titular` (+`__v`,`__f`) · **`fase`** (✔, vocabulario; +`__v`,`__f`) ·
`capacidad_disponible_gwh` (+`__v`,`__f`, `_fecha`) · `superficie_ha`
(+`__v`,`__f`) · `municipio` · `provincia` · `claves[]`

> **El perímetro lo fijan dos clases de acto.** Los **básicos** los nombra cada
> año la resolución de capacidad de la DGPEM — cuatro hoy: Serrablo, Gaviota,
> Marismas y Yela, con su capacidad disponible en GWh —; y **Castor** entra por
> sus propios actos: la concesión de 2008, el real decreto-ley que la extinguió
> y ordenó la hibernación (13/2014), el desmantelamiento (2019) y el sellado de
> los pozos (2025). La capa registra la distancia entre la capacidad que un
> acto otorga y la que el sistema tiene.
>
> **La geometría es mixta con motivo.** Las concesiones marinas traen sus
> vértices en el anexo del real decreto —ocho Gaviota, cuatro Castor— y se
> publican como polígono `exacta`, en horario en el acto y reorientadas a
> RFC 7946 al migrar, como los dominios mineros. Las de tierra no publican
> coordenada en ningún acto localizado: van como punto de municipio con su
> hueco declarado, el mismo trato que las plantas de GNL.
>
> **`capacidad_disponible_gwh` lleva `_fecha` porque es la cifra de un
> periodo**, no una constante: la asigna la resolución anual. Castor no la
> lleva — no está en la resolución, y ese silencio también es el dato.
>
> **Ojo con el titular de Marismas.** El RD 1088/2011 recoge la designación de
> Gas Natural Almacenamiento Andalucía como titular de los activos; la Orden
> TED/1200/2022 cede las concesiones de YACIMIENTO a Trinity Capital. Qué quedó
> del almacenamiento no lo dice ninguno de los dos actos: el campo va `parcial`
> y el hueco lo pide.

**bases-eeuu** *(1.29)* (`dotacion`, puntos, verificado, árbol `tablero`):
`marco` (✔; +`__v`,`__f`) · `municipio` · `provincia` · `claves[]`

> **El perímetro lo fija el anejo 2 del Convenio de 1988**: las bases y
> establecimientos de utilización conjunta con los Estados Unidos. Hoy son dos
> —Rota y Morón— y cada despliegue que los protocolos autorizan (los
> destructores AEGIS de 2012, la fuerza de respuesta a crisis de 2015, los dos
> buques de 2023) va en `claves`, cada uno con su instrumento.
>
> **El atlas registra el régimen, no la guarnición.** Se publica lo que los
> tratados del BOE dicen — qué se autoriza, con qué límites y desde cuándo — y
> nada que no esté en ellos: ni capacidades, ni despliegues, ni recintos. El
> punto es el topónimo del Nomenclátor, como en cualquier otra capa.
>
> **Sin `fase` por esquema** (`"not": {}`): una base de utilización conjunta no
> es una explotación que se abra o se cierre. §6.5 la declara «no aplica».

**seguimiento-espacial** *(1.29)* (`actividad`, puntos, verificado, árbol
`conectividad`): `agencia` (✔; +`__v`,`__f`) · **`fase`** (✔, vocabulario;
+`__v`,`__f`) · `municipio` · `provincia` · `claves[]`

> **Entra la estación que un instrumento publicado nombra y sitúa** — la misma
> doctrina que `centros-datos`. Robledo la sostienen dos acuerdos con los
> Estados Unidos (2003 y 2024, este por quince años) y el convenio de operación
> del INTA; Cebreros, sus dos acuerdos con la ESA (2003 y 2012). **Maspalomas
> es el registro más flojo de la capa, y lo dice su propia ficha**: el acto
> localizado que la nombra y acredita a su titular es una licitación del INTA,
> no un tratado, y el hueco pide el instrumento de verdad. Se publica `parcial`
> en vez de omitirse porque existe, tiene titular público y el Nomenclátor la
> sitúa.
>
> **La categoría la traen los propios instrumentos**: «antena de espacio
> lejano» (Cebreros), complejo «del Espacio Profundo» (Robledo). Maspalomas no
> tiene esa palabra en ningún acto y va como `seguimiento` a secas.

**icts** *(1.31)* (`actividad`, puntos, verificado, `ambito: mundo`, árbol
`ciencia`): `acronimo` (✔; +`__v`,`__f`) · `localizacion` (✔; +`__v`,`__f`) ·
`titular` (+`__v`,`__f`) · **`fase`** (✔, vocabulario; +`__v`,`__f`) ·
`municipio` · `provincia` · `claves[]` · *(1.51)* `altitud_m` ·
`servidumbre_acto` · `servidumbre_distancia_minima_m` ·
`servidumbre_distancia_mayor_m` (los cuatro, +`__v`,`__f`, y **solo en los dos
registros que tienen acto de servidumbre**) · *(1.52)* `proteccion_acto` ·
`proteccion_altitud_industrias_m` · `proteccion_radio_la_palma_km` ·
`proteccion_radio_tenerife_km` (+`__v`,`__f`, **solo en `oocc`**) · *(1.53)*
`nodos_del_mapa` · `nodos_publicados` (+`__v`,`__f`, **solo en `res`**) ·
*(1.58)* **`sedes[]`** (+`__v`,`__f`, **solo en las once distribuidas**)

> **`sedes` nombra los vértices, uno por uno y en su orden** *(1.58)*. Una ICTS
> repartida lleva un `MultiPoint` con un punto por comunidad (§6.6), y sin los
> nombres el mapa acierta y la ficha calla: once coordenadas anónimas y, peor,
> los vecinos de cinco emplazamientos distintos amontonados en una lista sola —
> **catorce nombres bajo un punto que decía «3»**. Los tres números eran
> correctos y juntos no cuadraban, que en una pantalla es lo mismo que estar mal.
>
> Es la forma estructurada de lo que `localizacion` ya dice en prosa, y existe
> porque **la prosa no la puede leer un consumidor**: el mismo motivo por el que
> `nodos_del_mapa` es un entero y no una frase. Que haya **tantas sedes como
> vértices** lo comprueba §10 y no el esquema, porque es una correspondencia
> entre una propiedad y la GEOMETRÍA — cada mitad es válida por su cuenta, y
> desalinearlas no rompe nada: solo pone cada laboratorio en la comunidad de al
> lado, con toda la seguridad del mundo.

> **El perímetro ES el Anexo I del acuerdo del CPCTI** que aprueba el Mapa de
> ICTS 2025-2028 (regulado por la DA 30.ª de la Ley 14/2011): 28 ICTS que
> agrupan 64 infraestructuras, con tipología, titular y localización. Un
> registro por ICTS; las infraestructuras de cada distribuida van en `claves`,
> verbatim del anexo.
>
> **El Mapa sitúa por comunidad autónoma, y el atlas no finge más precisión de
> la que la fuente da.** De ahí la escalera de esta capa: `paraje` donde el
> Nomenclátor nombra la instalación (los Observatorios de Canarias, Calar
> Alto, Yebes, Doñana), `municipio` donde el propio nombre del Mapa lo da
> (Canfranc), **`autonomia`** —el valor que esta capa estrena— para el resto de
> las de sede única, `pais` para las distribuidas y, en las bases antárticas,
> `ilustrativa` sobre la isla que las fuentes nombran. Adivinar municipios por
> notoriedad —el GTC «se sabe» que está en el Roque de los Muchachos— habría
> sido relleno por verosimilitud, y queda como hueco.
>
> **La capa estrena también el árbol `ciencia`** — añadido al FINAL del
> vocabulario a propósito: el visor abre por el primer árbol, y esa vista no
> debe cambiar porque entre una rama nueva.
>
> **`ambito: mundo` por dos puntos**: las Bases Antárticas Españolas están en
> las Shetland del Sur, fuera del recuadro de §7.4 — que no se ensancha, se
> declara la capa, como ya hizo `espacios-maritimos`.

**desaladoras** *(1.30, ampliada en 1.32)* (`actividad`, puntos, verificado):
`encomendada_a` (✔; +`__v`,`__f`) · `demarcacion` (+`__v`,`__f`) ·
**`fase`** (✔, vocabulario; +`__v`,`__f`) · `capacidad_hm3_anio`
(+`__v`,`__f`, `_fecha`) · `capacidad_m3_dia` *(1.32)* (+`__v`,`__f`,
`_fecha`) · `en_servicio_desde` (+`__v`,`__f`) · `municipio` · `provincia` ·
`claves[]`

> **El «sin inventario único» tenía una salida, y era un acto.** El plan daba
> las desaladoras por bloqueadas porque nadie publica el censo; la Orden
> TED/157/2023 resultó nombrar **las seis IDAM de interés general del Estado
> operativas y encomendadas a Acuamed** — Torrevieja, Valdelentisco y Águilas
> en el Segura; Carboneras, Campo de Dalías y Bajo Almanzora en las cuencas
> mediterráneas andaluzas — y ese acto ES el perímetro de la capa.
>
> **La 1.32 añade el segundo perímetro: las cuatro de la Mancomunidad de los
> Canales del Taibilla**, el organismo autónomo que las construye y explota —
> San Pedro del Pinatar I y II (el Nomenclátor las nombra a las dos) y
> Alicante I y II, en el paraje de Agua Amarga que la propia MCT declara y el
> Nomenclátor sitúa. Cada una con su DIA o su ficha de organismo. Con ellas
> nace **`capacidad_m3_dia`**: la MCT y la DIA del Bajo Almanzora publican en
> m³/día, y un campo no cambia de unidad según el registro (la lección del
> Musel) — conviven los dos campos, cada acto en su unidad, y el atlas **no
> convierte entre ambas**, porque la conversión exigiría suponer días de
> operación. `demarcacion` deja de ser obligatoria por lo mismo: ningún acto
> la declara para las de la MCT, y adivinarla sería relleno.
>
> **Sigue sin ser el censo de la desalación española y la capa no lo
> afirma**: las autonómicas, las canarias y las privadas son ampliación
> pendiente, cada una con sus actos.
>
> **Cada cifra de capacidad lleva la fecha de su acto, porque cada acto retrata
> un momento distinto**: la de Carboneras es la producción prevista en su DIA
> de 1999; la de Torrevieja, la capacidad nominal que su informe de ampliación
> de 2022 declara en servicio desde 2015. Bajo Almanzora no lleva campo de
> capacidad — su DIA la publica en m³/día, y un campo no cambia de unidad según
> el registro (la lección del Musel): la cifra va en claves.
>
> **La geometría es de municipio en las seis**, con el barrido del Nomenclátor
> archivado como prueba del cero — incluida la primera pasada, que ancló tres
> municipios en homónimos de Madrid, Huesca y León y se descartó: **un punto de
> municipio también puede estar mal**, y la captura conserva el error para que
> se vea qué se comprobó.

**limites-soberania** *(1.7)* (`dotacion`, puntos, verificado):
`administrado_por` (✔; +`__v`,`__f`) · `reclamado_por` (✔; +`__v`,`__f`) ·
`municipio` · `provincia` · `nombre_oficial` · `claves[]`

> **Los dos campos son la doctrina D5 puesta en datos.** El atlas registra que
> la reclamación existe y quién la sostiene; **no dicta veredicto**. Por eso hay
> exactamente dos campos, simétricos: quién **administra** hoy y quién
> **reclama**. Con esa estructura, Gibraltar (administra el Reino Unido, reclama
> España) y Ceuta (administra España, reclama Marruecos) se describen igual.
>
> Esa simetría no es elegancia: es la garantía de que el atlas no cambia de vara
> según de quién sea la reclamación. Y por eso `categoria` solo tiene dos
> valores, que dicen **quién reclama, no quién tiene razón**.
>
> **Los instrumentos van en `claves[]`**, uno por afirmación y con su fuente:
> «España invoca X», «el Reino Unido invoca Y». Así cada posición se lee
> atribuida a quien la sostiene, y la que no tiene documento se ve como lo que
> es. Un tratado acredita la posición de una parte, no la razón de nadie.
>
> **Nada de esto tiene `fase`**: el tablero figura como «no aplica» en §6.5, así
> que su `activo` es `null` y el filtro de explotación no lo esconde nunca.

**espacios-maritimos** *(1.11)* (`dotacion`, **mixta**, verificado, `ambito:
mundo`): `estado_juridico` (✔; +`__v`,`__f`) · `partes[]` · `instrumento` ·
`claves[]`

> **La misma doctrina D5, en el mar.** `estado_juridico` es aquí lo que
> `administrado_por`/`reclamado_por` es en tierra: dice **en qué situación
> jurídica está el espacio** —sin delimitación acordada, límite declarado por
> una parte— y `partes[]` dice **a quién concierne**. Como en tierra, cada
> afirmación va en `claves[]` atribuida a quien la sostiene.
>
> **Por qué `ambito: mundo` y no `espana`** *(y no se toca el recuadro de §7.4)*:
> la plataforma continental más allá de las 200 millas cae **fuera del recuadro
> del territorio por definición** —los puntos de la presentación española llegan
> a 24,7° W y 22,6° N—, así que la comprobación de §7.4 que sirve para el resto
> de capas aquí sería falsa. Ensanchar el recuadro habría debilitado la
> comprobación de las otras seis; declarar el ámbito real de esta capa no
> debilita ninguna.
>
> **La regla que gobierna esta capa entera:** no se dibuja ninguna frontera ni
> línea mediana. Se dibuja **lo que un instrumento deposita** —el límite exterior
> que España presentó ante la CLCS— y, aparte y como `geo_precision:
> ilustrativa`, **la zona sin delimitación acordada**. Calcular la equidistancia
> sería dictar el resultado que los propios instrumentos dejan a un acuerdo
> futuro, y eso es exactamente lo que D5 prohíbe.
>
> *(1.61)* **Y la línea que un tratado en vigor publica se dibuja igual**
> (`limite_acordado`): tampoco ahí traza el atlas — copia el anexo del propio
> tratado, que por ser de las dos partes es el único trazo del tablero que no
> acredita una posición sino un acuerdo. La diferencia con `limite_declarado`
> la guarda el esquema: un `limite_acordado` sin `instrumento` no existe. Los
> convenios de los años setenta no declaran datum; su `geo_fuente` lo dice en
> vez de disimularlo, que es lo que §6.6 pide de una precisión declarada.
>
> **Una capa `verificado` PUEDE contener geometría `ilustrativa`.** R5 va de la
> capa hacia la geometría —capa ilustrativa ⇒ toda su geometría ilustrativa— y
> **no al revés**; R9 solo vigila `exacta` y `paraje`. Queda escrito aquí porque
> el malentendido contrario ya aplazó esta capa una vez.

**electricidad-interconexiones** *(1.13)* (`actividad`, puntos, verificado):
`pais_vecino` (✔) · `extremo_exterior` · `codigo_actuacion` · `tension_kv` ·
`instrumento` · `municipio` · `provincia` · `claves[]`

> **Un enlace tiene dos extremos y el atlas solo puede situar uno.** Ningún
> instrumento publica el trazado de estas interconexiones, y la subestación del
> otro lado —Cantegrit, Beni Harchane, la frontera andorrana— está en un país
> cuyo nomenclátor este atlas no ha comprobado. Dibujar una recta entre las dos
> sería un esquema; dibujarla hasta una coordenada extranjera que no puedo citar
> sería inventar la mitad del dato.
>
> Así que **el registro es un PUNTO en el extremo español** y el de fuera va
> **nombrado y sin coordenada**, en `extremo_exterior`. El día que un instrumento
> publique el trazado, el registro sube a `LineString` con el mismo `id` (§8).
>
> ~~**Por qué la red de transporte NO está aquí.** El mallado español —líneas de
> 400 kV, subestaciones interiores— lo publica Red Eléctrica, que es **sociedad
> cotizada**: por §6.1 es `corporativa` y por R3 no sostiene un `confirmado`. No
> hay cartografía de la red bajo licencia compatible con CC BY 4.0
> (`datos/LICENCIA-DATOS.md`), así que `red-electrica` sigue declarada y vacía.~~
> **El mallado ya tiene capa propia** *(1.22)*, y lo de arriba se conserva tachado
> porque enseña bien un error: todo lo que afirmaba de REE y de R3 era cierto, y
> la conclusión era falsa igual. La premisa que fallaba no estaba escrita —«no hay
> cartografía» quería decir «no la he encontrado»—, y por eso no se podía discutir.
> **Una frase que da por cerrado el mundo tiene que decir dónde miró.**
> El IGN la publica: ver `red-electrica`, más abajo.

**minerales-derechos** *(1.12)* (`actividad`, polígonos, verificado):
`titular` (✔) · `tipo_derecho` · `situacion` (✔) · `n_registro` ·
`sustancia_principal` · `sustancias[]` · `superficie_declarada` · `provincia`

> **Qué entra y qué no, dicho como regla y no como criterio.** Publicar los casi
> cuatro mil derechos de ocho provincias sería un volcado, no curación; elegirlos
> a ojo sería sesgo. La regla es mecánica: **entran los derechos cuyo titular es
> uno de los promotores que el atlas ya registra** en `minerales-proyectos`. Se
> puede repetir, se puede discutir, y no depende de qué me parezca importante.
>
> **Los extinguidos se publican.** Que los tres permisos de tierras raras de
> Quantum Minería en el Campo de Montiel figuren **caducados** es exactamente el
> tipo de hecho que el atlas existe para registrar, y la memoria no se borra
> (principio 3).
>
> **`superficie_declarada` va VERBATIM y sin `__v`, y no concuerda con el
> perímetro.** Medido sobre los 106 derechos, cada unidad vale ~0,30 km² con el
> código «C» y ~0,22 km² con el código «H» —que el catastro rotula «hectáreas», y
> una hectárea es 0,01 km²—. El atlas **no elige** cuál de los dos datos de la
> misma fuente vale: publica el perímetro, que es el que esa fuente dibuja, y
> deja el campo dicho con su desacuerdo. Traducir «H» por «hectáreas» habría
> publicado un número veintidós veces menor que el área que el propio catastro
> traza.

**minerales-dominios** (`dotacion`, polígonos, ilustrativo→verificado) *(1.10)*:
`ambito_territorial` · `materias[]` · `distritos[]` · `sym` (etiqueta corta de
mapa: «Cu · Zn · Pb»)

> **Esta capa no lleva `municipio` ni `provincia`, y es a propósito**: casi
> ningún dominio cabe en una provincia —la Faja Pirítica son dos, Galicia tres—,
> así que dice su ámbito entero en prosa (`ambito_territorial`) en vez de elegir
> una a dedo. Su esquema PROHÍBE `provincia` para que la tentación no vuelva. No
> confundir con el `ambito` del manifiesto, que es de capa y dice contra qué
> recuadro se valida la geometría (§3).
>
> El carácter del dominio va en **`categoria`** (§9), no en un campo propio — ver
> la nota de §9. Y ninguno de estos campos lleva `✔`: la capa es `ilustrativo`,
> y **R5 prohíbe la verificación por campo** en una capa que dibuja dónde, no
> cuánto ni de quién. El día que un dominio ascienda a cartografía de fuente
> primaria, R5 obliga a que ascienda **la capa entera**: es regla de capa, no de
> registro, así que el ascenso parcial parte la capa en dos en vez de mezclarlas.

**cables-submarinos** *(1.20)* (`dotacion`, **puntos**, verificado):
`sistema` · `titular` (✔) · `conecta` (✔) · `expediente` (✔) · `instrumento` (✔) ·
`fase` · `emplazamiento` (✔; **admite `null`** desde 1.34, cuando el acto sitúa
solo el término municipal — entonces `geo_precision` es `municipio`) ·
`municipio` (✔) · `provincia` (✔) · `claves[]`

> **La capa registra ATERRIZAJES, no cables.** El boceto anterior la imaginaba
> `mixta`, con `sistemas[]` y `destinos[]` en arrays y un trazado que dibujar. La
> realidad de las fuentes obliga a otra cosa: **el trazado de un cable submarino no
> tiene fuente compatible** —el mapa de TeleGeography, que es la referencia obvia,
> está bajo CC BY-NC-SA y `datos/LICENCIA-DATOS.md` lo veta— y lo que sí publica
> una fuente primaria es **dónde toca tierra**, porque para tocar tierra hace falta
> ocupar dominio público marítimo-terrestre y eso exige un acto administrativo. Un
> registro por aterrizaje, con arrays convertidos en campos planos. La categoría
> `trazado` (§9) **se queda sin usar**, y no es un olvido.
>
> **Qué acota, y lo obliga lo encontrado.** Los actos de Costas cubren TODO cable
> que ocupe dominio público marítimo-terrestre, y ahí dentro hay un cable de fibra
> atado al puente de Txatxarramendi y canalizaciones que cruzan la ría del Bidasoa
> y la de Oriñón. Sin criterio, la capa se llena de cruces de ría. El que separa
> sale del propio acto: **entra el aterrizaje de un cable que une territorios
> separados por mar** —otro país, otra isla, la península con un archipiélago—.
>
> **Un cable que cruza aguas españolas y no aterriza aquí NO ENTRA.** Lo decidió
> el Europe India Gateway: su resolución de impacto ambiental (BOE-A-2010-2040)
> describe 15.000 km por aguas de Galicia, el Estrecho y el mar de Alborán, y toca
> tierra en **Gibraltar**. Sin aterrizaje no hay punto, y su paso por aguas
> españolas está en prosa, no en coordenadas. Se archiva, se cita y se queda
> fuera — el mismo muro que la subasta IF24.
>
> **`sistema` admite hueco, y es importante que lo admita.** El acto de Costas
> autoriza una ocupación, no bautiza un cable: el expediente CNC02/23/39/0009 de
> Santander no nombra el sistema en ninguna parte. Publicar ahí un nombre sacado
> de la prensa sería exactamente lo que esta capa evita, así que el campo se queda
> vacío con su fuente `tipo: hueco` y R4 baja el registro a `parcial`.
>
> **La geometría es `paraje`**: el acto nombra la playa o el puerto, y el
> Nomenclátor del IGN da su coordenada. Con dos avisos que costaron encontrarse.
> Los nombres **no coinciden** entre el acto y el nomenclátor —la playa que el
> expediente llama «Arrietara» está como «Playa Atxabiribil», y la «Malvarrosa»
> como «Platja de la Malva-rosa»—, y manda el nomenclátor. Y en Santander el IGN
> **no nombra la playa**: nombra la isla y la ermita de la Virgen del Mar que la
> delimitan, así que se usa ese topónimo y la ficha lo dice.
>
> **Sin registro público, la capa no puede afirmar que están todos**, y lo dice en
> el manifiesto. La Ley 11/2022 obliga a los titulares a comunicar sus cables al
> Ministerio de Transformación Digital, pero el Ministerio **no publica la lista**:
> su punto de contacto único solo ofrece el formulario. Lo que se publica son los
> aterrizajes que un acto administrativo nombra y sitúa.

~~**recurso-eolico / recurso-solar** (`dotacion`, polígonos, ilustrativo):
`distritos[]` · `justificacion` (por qué la zona)~~

**parques-eolicos** *(1.23)* (`actividad`, polígonos, verificado): —
**plantas-solares** *(1.23)* (`actividad`, polígonos, verificado): —

> **Estas dos capas no cambiaron de nombre: cambiaron de OBJETO.** Y esa
> distinción es el contenido entero de la enmienda, porque un renombrado
> cosmético habría sido peor que dejarlas en gris.
>
> **Lo que prometían no existía como dato.** «Recurso» es cuánto sopla el viento
> o cuánto sol cae, y eso es un **campo continuo**: existe como ráster (Global
> Wind Atlas, Global Solar Atlas, ambos CC BY 4.0) y no como registros. Convertir
> ese campo en «zonas de recurso» lo tendría que hacer el atlas, y eso es generar
> datos. La salida que el propio `PLAN.md` daba por buena —la zonificación
> ambiental del MITECO, «en shapefile y vectorial»— resultó ser **falsa al
> comprobarla**: dentro del ZIP vienen dos GeoTIFF y un léeme que dice «los ráster
> clasificados». La vía de escape tenía el mismo defecto que la vía original.
>
> **Lo que sí existe es la instalación**, y la trae la misma BTN que desbloqueó
> `red-electrica`: `0713S Central eléctrica`, **geometría de superficie**,
> capturada «por el contorno exterior de su recinto». De ahí los dos ids nuevos.
>
> **Renombrar salió gratis, y la regla merece quedar escrita** (§8): un id se
> puede renombrar **mientras no haya publicado un solo registro**, porque lo que
> §8 protege es la estabilidad de las citas, y a un id sin datos no lo cita nadie.
> Precedente exacto: `h2med` → `hidrogeno-red`, renombrado *«antes de publicar
> nada porque el nombre habría sido inexacto desde el primer día»*. En cuanto sale
> una release con registros dentro, esa puerta se cierra para siempre.
>
> **Los dos cambios que pesan más que el id.** Primero, **`dotacion` →
> `actividad`**: `dotacion` es «una condición permanente del territorio» y el
> viento lo es, pero **un parque eólico se desmantela** — «alguien lo sostiene y
> puede abandonarlo», que es la definición literal de `actividad`. Segundo,
> **`ilustrativo` → `verificado`**: eran `ilustrativo` porque se las imaginaba
> dibujadas a mano, con R5 renunciando al `__v`; son perímetros de fuente
> primaria y van en `geo_precision: exacta`. **Cambiar solo el título habría
> dejado el mismo error escrito de otra forma.**
>
> **Ninguna de las dos añade un solo campo, y es lo que deben hacer.** La BTN da
> el contorno y el nombre. No da potencia, ni titular, ni fecha de puesta en
> servicio, ni cuántos molinos hay dentro — las especificaciones dicen
> literalmente que «no se representan las placas o espejos interiores». Sus
> esquemas existen para **prohibir**, no para describir: `potencia_mw` y
> `potencia_instalada_mw` los primeros, porque son la cifra que cualquiera espera
> de un parque eólico y **no está en la fuente**. Es también el motivo por el que
> los ids no son `eolica-instalada` / `solar-instalada`: «instalada» arrastra a
> «potencia instalada» y habría prometido en el título lo que la ficha no cumple.
>
> **`superficie_ha` está prohibida por DERIVADA**, como `porcentaje_llenado` en
> `agua-embalsada` y como `activo` en R7: sale del polígono que la propia capa
> publica, y el día que la geometría se corrija la cifra escrita a mano mentiría.
> Estuvo a punto de colarse al construir estas capas bajo el nombre
> `superficie_recinto_ha`, así que ese también queda cerrado: **rebautizar un
> derivado no lo deja de derivar**.
>
> **La geometría NO se simplifica**, al revés que el tendido de `red-electrica`,
> y el contraste enseña cuándo simplificar es gratis y cuándo no. Allí la BTN pone
> un vértice por torre: un tramo recto de cuarenta torres tiene cuarenta vértices
> y una sola forma, y quitarlos costó el 0,017 % de la longitud. Aquí el contorno
> **es** el dato: a 25 m de tolerancia se ahorraría el 61 % de los vértices, pero
> costaría el 0,23 % de superficie y **dejaría 29 parques convertidos en
> cuadrados**. Se quedan enteros, en `exacta`, y el fichero pesa lo que pesa.
>
> **El alcance, con el hueco por delante.** Eólica: **1.382 de 1.389**, el
> **100 % de la superficie** — los 7 que faltan no llevan nombre y `nombre` es
> obligatorio. Termosolar: **44 de 45**. Fotovoltaica: **1.206 de 3.165**, que
> parece un desastre y es el **76 % de la superficie**, porque las anónimas son
> las pequeñas. Misma forma que `agua-embalsada` (77 % de los embalses, 86 % de la
> capacidad): **cuando el hueco es de censo y no de magnitud, hay que decir las
> dos cifras**, porque una sola de ellas engaña en la dirección que le convenga a
> quien la elija.

**generacion-electrica-provincia** *(1.14)* (`actividad`, polígonos, verificado,
`fondo`): `anio` (✔) · `caracter_dato` · `provincia` · `total_gwh` (✔) y las ocho
tecnologías en **producción neta**, cada una con su `__v`/`__f`: `nuclear_gwh` ·
`eolica_gwh` · `solar_fv_gwh` · `solar_termica_gwh` · `mareomotriz_gwh` ·
`combustibles_gwh` · `cogeneracion_gwh` · `hidraulica_gwh`

> **Esta capa nació de una casilla que no se podía cumplir.** El horizonte pedía
> **potencia instalada** por provincia, y no la sostiene ninguna fuente primaria
> con licencia compatible: MITECO desagrega por provincia la **generación**, no la
> potencia; la **CNMC** publica potencia pero solo por comunidad autónoma y bajo
> **CC BY-SA 4.0**, ShareAlike y por tanto vetada por `datos/LICENCIA-DATOS.md`; y
> **Red Eléctrica** llega a provincia pero es `corporativa` (§6.1) y R3 le prohíbe
> sostener un `confirmado`. Se publica lo que sí se sostiene y la potencia queda
> como **hueco declarado en las 52 fichas**, con sus tres motivos.
>
> **Que la CNMC quede fuera es lo que merece recordarse.** Es el regulador —fuente
> primaria de manual— y no entra por su LICENCIA. Hasta la 1.13 el atlas solo
> había chocado con una licencia contagiosa en fuente privada (TeleGeography en
> los cables). También pasa con las públicas, y la prueba está archivada.
>
> **Se publica la mezcla entera, no solo lo renovable**, y no es una ampliación
> caprichosa: sin los combustibles y sin el total no se puede leer qué peso tiene
> lo renovable, que es la pregunta. Hay además una razón que lo zanja: **la fuente
> no desglosa biomasa ni residuos** —van dentro de `combustibles` y
> `cogeneracion`—, así que una capa titulada «renovable» no podría decir cuánta
> hay. **El atlas no escribe ninguna cuota renovable**: los ocho campos están, y
> quien la quiera la deriva, con la advertencia en la `nota` de cada ficha.
>
> **`caracter_dato` no es adorno.** El fichero de MITECO se titula «DATOS
> PROVISIONALES A FECHA 27/11/2025» y eso se publica tal cual. Un provisional que
> se calla se lee como definitivo.
>
> **`categoria` es la tecnología dominante, y se comprueba.** Es un valor derivado
> de los números del propio registro, o sea la doble fuente de verdad que D3
> descartó — salvo que se pueda verificar, y aquí se puede: `validar.py` exige que
> `categoria` sea **exactamente el argmax** de las ocho tecnologías, y un
> dominante que no cuadre con sus propias cifras rompe el CI. No es regla R nueva:
> R1–R9 son doctrina de todo el atlas y esto es mecánica de una capa, del mismo
> rango que las prohibiciones `"not": {}` de los esquemas.
>
> **La geometría va generalizada y la ficha lo dice.** Los límites son del IGN
> (Orden FOM/2807/2015, compatible con CC BY 4.0), pero la respuesta completa son
> 1.188.710 vértices y 186 MB. Se publican simplificados (Douglas–Peucker, ~200 m),
> así que **el polígono ya no es el del IGN** y su `geo_precision` es
> `ilustrativa` — permitida en capa `verificado` desde la 1.11, y obligada aquí
> por §6.6: en un mapa gana lo que se ve, y un borde afinado afirmaría una
> exactitud que la simplificación ya no tiene. La generalización **no puede borrar
> islas**: la tolerancia se aplica a la escala de cada anillo, no plana.

**centros-datos** *(1.15)* (`actividad`, puntos, verificado): `promotor` (✔) ·
`codigo_promotor` · `consumo_gwh_anio` (+`__v`,`__f`) · `superficie_ha` ·
`fase` · `instrumento` · `municipio` (✔) · `provincia` (✔) · `claves[]`

> **Regla de entrada, y es toda la capa:** un centro de datos entra **si y solo si
> un acto administrativo lo nombra**. Sirven la evaluación o autorización
> ambiental, la autorización de su acometida eléctrica y la resolución de un
> concurso de capacidad de demanda. **No sirve nada más**, y eso deja fuera cosas
> que a primera vista parecen mejores: España **no tiene registro público de
> centros de datos**, la base europea del artículo 12 de la Directiva 2023/1791
> se publica **agregada por Estado miembro** —ni instalación ni ubicación—, y las
> cifras de mercado que todo el mundo repite (439 MW instalados, 2.537 para 2030)
> las publica la patronal: `corporativa`, y R3 no la admite.
>
> **Los tres solicitantes del concurso NO son registros de esta capa**, aunque
> sean lo único que el BOE nombra: CPD4GREEN, Benbros DC y ACS DC Infra pidieron
> capacidad en Brazatortas, Francolí y Nuevo Vigo, y los tres fueron excluidos.
> Esa resolución define **una solicitud de capacidad en un nudo**, no un centro
> de datos en un sitio: no hay emplazamiento, ni superficie, ni más coordenada
> que la de una subestación, que es otro objeto. Es exactamente el límite que
> §6.6 fijó cuando un derecho minero no pudo ascender a mina. El hecho se
> registra en el changelog; el mapa no lo inventa.
>
> **`consumo_gwh_anio` es lo que el acto declara, no lo que el centro consume.**
> Un campus autorizado todavía no consume nada: la cifra es la demanda prevista a
> plena capacidad que el promotor declaró y el órgano ambiental evaluó. Va con su
> `fase` al lado para que no se lean como lo mismo.
>
> **`codigo_promotor`** guarda el nombre interno con el que el acto identifica
> cada emplazamiento (CAR, VDG1, VDG2, WQA, BDE). No es adorno: es la única
> manera de seguir un centro concreto a través de los sucesivos expedientes,
> porque el nombre comercial no aparece y el municipio se repite.

**hidrogeno-red** *(1.16)* (`actividad`, **mixta**, verificado, `ambito: mundo`):
`promotor` (✔) · `pci_codigo` (✔) · `estado_pci` (✔) ·
`puesta_en_servicio_prevista` (+`__v`,`__f`) · `fase` · `longitud_km`
(+`__v`,`__f`) · `diametro_mm` (+`__v`,`__f`) · `capacidad_mt_anio`
(+`__v`,`__f`) · `potencia_mw` (+`__v`,`__f`) · `volumen_util_gwh`
(+`__v`,`__f`) · `claves[]`

> **La capa se llamaba `h2med` y se renombra**, porque el nombre habría sido
> inexacto desde el primer día: de sus 3.268 km, **2.634 son la red troncal
> española**, que no es el H2Med. §8 protege los ids que han publicado registros,
> y este no había publicado ninguno — el mismo caso de `renovable-provincia`.
>
> **El perímetro de la capa lo fija un acto español, no el gusto del atlas.** El
> Acuerdo del Consejo de Ministros de 30 de julio de 2024 (BOE-A-2024-19047)
> habilita a Enagás para **cinco** proyectos, y esos cinco son la capa: 9.1.2
> (CelZa), 9.1.3 (red troncal), 9.1.4 (BarMar) y los almacenamientos 9.24.1 y
> 9.24.2. Los dos últimos son el hallazgo silencioso: **el relato público del
> H2Med no los menciona nunca**, y son dos cavernas de sal en Cantabria y en la
> cuenca vasco-cantábrica.
>
> **Un registro por objeto que la fuente define, no por tramo dibujado** (§6.6).
> La plataforma trocea la troncal en 14 polilíneas por conveniencia de dibujo;
> el objeto que el reglamento define es **un** proyecto, así que va como un
> `MultiLineString`. Las estaciones de compresión sí son objetos aparte —la
> descripción técnica las nombra una a una— y por eso tienen registro propio.
>
> **`estado_pci` va aparte de `fase`, y no es redundancia.** Es la palabra
> literal de la plataforma (`Permitting`, `Under consideration`). Aplanarla a
> `fase` borraría la única diferencia que la fuente marca entre los dos
> almacenamientos: uno está en tramitación y el otro «en consideración», que no
> es ninguno de los cinco valores de `fase` y no se va a fingir que lo sea.
>
> **`longitud_km` es la que declara la prosa de la fuente, jamás la que mide el
> atlas.** El servicio publica un campo `SHAPE.LEN` que **está en metros de Web
> Mercator**, inflados por la latitud entre un 26 % y un 38 %: BarMar «mide» 518
> km ahí y 382 sobre el elipsoide, contra los «~400 km» que declara su propia
> ficha técnica. Ese campo no entra nunca. La medición del atlas sirve para
> **contrastar**, y de ahí sale **R10** (§6.4): si lo declarado y lo dibujado se
> separan más de un 15 %, alguien ha confundido unidad o proyección.
>
> **Los cinco tramos que el reglamento excluye no se dibujan** —Coruña-Zamora,
> Huelva-Algeciras, Zamora-Haro, Guitiriz-Zamora y la conexión Castilla-La
> Mancha–Madrid, todos «inversiones que no reúnen los requisitos» del anexo—, y
> **tampoco los dibuja la Comisión**: se comprobó tramo a tramo contra la
> geometría publicada y ninguna de las cinco aparece. Las dos fuentes primarias
> concuerdan, y eso también es un dato.
>
> **Los cinco electrolizadores españoles quedan fuera** (9.15.4 a 9.15.8), aunque
> la misma plataforma los sirve con geometría y promotor. Son **producción, no
> red**, y de promotores distintos; el acto que da el perímetro de esta capa no
> habilita a Enagás para ellos. Cuando entren, entrarán en capa propia.

**hidrogeno-produccion** *(1.17)* (`actividad`, puntos, verificado): `promotor`
(✔) · `pci_codigo` (✔) · `estado_pci` (✔) · `puesta_en_servicio_prevista`
(+`__v`,`__f`) · `fase` · `potencia_mw` (+`__v`,`__f`) · `produccion_t_anio`
(+`__v`,`__f`) · `claves[]`

> **Un registro por planta, y son siete, no cinco.** La lista de la Unión tiene
> cinco proyectos españoles de electrólisis, pero dos de ellos **nombran y sitúan
> dos plantas cada uno**: el valle asturiano (Aboño y el futuro centro de Soto de
> Ribera) y ValdoEume (Mugardos y As Pontes). La plataforma dibuja siete puntos,
> uno por planta. Es §6.6 otra vez: el registro es del objeto que la fuente
> define, y aquí define plantas.
>
> **Las dos distancias que la fuente declara cuadran con sus propios puntos**, y
> por eso el emparejamiento planta↔punto no es una conjetura: Aboño y Soto están
> a 29,3 km en línea recta y la ficha dice «unos 40 km» —que es distancia por
> carretera—; Mugardos y As Pontes, a 28,0 km, unidos según la ficha por un
> hidroducto de 36 km. Un tubo mide más que la recta; si midiera menos, habría
> algo que revisar.
>
> **`potencia_mw` es la del proyecto definido, nunca la de la ambición** (§6.1,
> enmienda 1.17). Lo que publica cada registro y lo que se queda en `claves`:
>
> | Registro | `potencia_mw` | A `claves`, no al campo |
> |---|---|---|
> | Huelva (Moeve) | 1.000 | Las tres fases: 400 MW en 2028, 200 y 400 en 2030 |
> | Aboño (EDP) | **150** | El «1 GW de ambición **si las condiciones de mercado son favorables**», y los 350 MW que le añadiría una segunda fase |
> | Soto de Ribera (EDP) | — **hueco** | Sus 500 MW son los de un «futuro centro»: no hay proyecto definido que sostenga un número |
> | Mugardos (Triskelion) | 77 | — |
> | As Pontes (H2Pole) | 100 | La ampliación del valle «hasta 500 MW» en 2035 |
> | Catalina | 500 | La ampliación futura «hasta 2 GW» |
> | ErasmoPower2X | 650 | — |
>
> **Y una suma de la fuente que no cierra, publicada como tal.** El valle
> asturiano dice que su segunda fase «aportará 1 GW» y la desglosa en 350 MW
> (Aboño) + 500 MW (Soto), que son 850. Con los 150 de la primera fase el total
> sí da 1.000. El atlas no elige cuál de las dos lecturas vale: transcribe el
> párrafo y señala que no cuadra, como ya hizo con los provinciales de MITECO y
> con las dos superficies del centro de datos de Zaragoza.
>
> **`inversion_meur` y `empleos` están prohibidos** en el esquema. La plataforma
> no publica coste, y las cifras que circulan son de nota de prensa; el empleo es
> siempre previsión del promotor. Misma prohibición, y por el mismo motivo, que
> ya lleva `centros-datos`.

**perte** *(1.18)* (`actividad`, puntos, verificado): `beneficiario` (✔) ·
`titulo_plan` (✔) · `cif` (✔) · `codigo_plan` (✔) · `instrumento` (✔) · `comision_verificacion` (✔) ·
`fase` · `municipio` (✔) · `provincia` (✔) · `presupuesto_financiable`
(+`__v`,`__f`) · `gasto_subvencionable` (+`__v`,`__f`) · `subvencion_propuesta`
(+`__v`,`__f`) · `prestamo_propuesto` (+`__v`,`__f`) · `claves[]`

> **Qué acota «acotado».** La capa venía declarada desde la demo con esa palabra
> y sin decidir qué recorta. Decide: **acota lo que un documento público sitúa**.
> El PRTR publica mucho dinero y casi nada de geografía — la lista de los 100
> mayores perceptores, obligatoria por el artículo 25 bis del Reglamento MRR, da
> nombre, NIF e importe **y ninguna ubicación**; el mapa del PRTR de MITECO sí
> sitúa, pero es un Power BI incrustado y no publica conjunto de datos alguno. El
> listado del **PERTE VEC — Sección B, convocatoria 2024** sí trae **provincia y
> municipio en cada fila**, y por eso es esta capa. Cuando otra convocatoria
> publique el suyo con municipio, entra aquí como registros nuevos: **el id no se
> renombra**.
>
> **El documento no es una tabla, y confundirlo cuesta cuatro registros falsos.**
> Es un registro por **comisiones de verificación** —seis, de mayo a octubre de
> 2025— y un expediente puede aparecer en más de una: **la posterior revisa a la
> anterior**. Contar códigos da 61; los vigentes son **57**. Que esa lectura es la
> buena lo demuestran los TOTALES del propio documento, que **cuadran al céntimo
> en las seis comisiones** — las tres primeras imprimen acumulado y las tres
> últimas el total de su comisión. La prueba fina: un expediente pasa de 447.269 €
> a 626.177 € de subvención entre dos comisiones, y el acumulado sube exactamente
> esos 178.908 €.
>
> **`comision_verificacion` no es adorno**: es la fecha de la comisión en la que
> el expediente quedó como está. Sin ella, dos registros con cifras distintas del
> mismo programa no se pueden ordenar en el tiempo.
>
> **La geometría es `municipio` y no puede ser otra cosa.** El documento da el
> municipio por su nombre, sin coordenada, así que el punto sale del Nomenclátor
> del IGN. Dos avisos que costaron encontrarse: pedir el municipio **por nombre**
> a `administrativeunit` devuelve **0 para Valladolid, Elgoibar o Abadiño**, que
> existen; y la consulta por recuadro **topa en silencio** (199 de 219 municipios
> en Álava con `limit=3000`), así que hay que paginar y comprobar contra
> `numberMatched` antes de dar nada por completo.
>
> **`subvencion` a secas está prohibida en el esquema**, igual que `empleos`. La
> primera, para que una propuesta no se convierta en concesión borrando un
> adjetivo (§6.1, enmienda 1.18); la segunda, por lo mismo que en `centros-datos`.

**idioma** *(1.19)* (`dotacion`, puntos, **analisis**, ámbito **mundo**):
`estatuto` (+`__v`,`__f`) · `norma` (✔) · `norma_fecha` · `norma_cita` (✔) ·
`nombre_en_la_norma` (✔) · `pais` · `sede` · `claves[]`

> **La capa cartografía el ESTATUTO del idioma, no su demografía**, y la causa es
> una licencia, no el gusto (§6.1, enmienda 1.19). Lo que publica es dónde el
> español es lengua oficial, **por qué norma**, y en qué organizaciones
> internacionales es lengua de trabajo. Cada registro cita su artículo **literal**
> y archiva el texto entero del que sale.
>
> **`nombre_en_la_norma` no es un sinónimo, es el hallazgo.** Los textos no
> coinciden en cómo se llama la cosa: España, Colombia, Perú, Bolivia, Ecuador,
> Venezuela y Paraguay dicen **«castellano»**; Costa Rica, Guatemala, Honduras,
> Panamá, Nicaragua, Cuba, R. Dominicana y Guinea Ecuatorial dicen **«español»**.
> En un texto constitucional esa palabra la eligió alguien —en el caso español,
> discutida desde 1978 porque «castellano» sitúa la lengua ENTRE las españolas en
> vez de por encima—. Normalizar las dos formas a una borraría lo único que ese
> artículo decidió, así que va a campo propio y no a nota al pie.
>
> **Un negativo se publica archivando el texto en el que la cosa NO está.**
> Argentina, Chile y Uruguay no nombran la lengua en su constitución, y México la
> declara «nacional» sin declararla oficial. Decirlo de palabra no vale: entran
> las constituciones **enteras**, para que el lector compruebe la ausencia él
> mismo. Y se comprueba con **control positivo** —que el texto traiga sus tildes y
> sus eñes, y que encuentre palabras que sí tienen que estar— porque leer un
> ISO-8859-1 como UTF-8 rompe la ñ de «español» y fabrica un cero falso.
>
> **Un negativo también se fabrica leyendo bien un texto viejo.** El PDF que sirve
> hoy la Cámara de Diputados chilena da la respuesta correcta y está fechado en
> **2003**, con la numeración anterior a la reforma de 2005. Antes de publicar una
> ausencia hay que mirar la fecha del documento: metadatos del PDF, ley de reforma
> más reciente citada, y si la numeración de artículos cuadra con la vigente.
>
> **`hablantes`, `hablantes_nativos`, `estudiantes` y `poblacion` están prohibidos
> en el esquema, por su nombre.** No es una carencia pendiente de rellenar: es el
> cortafuegos de la licencia que dio origen a la capa, y tiene que doler
> intentar saltárselo.
>
> **Lo que falta, dicho:** la OEA y la Unión Africana —donde el español es lengua
> oficial por el Protocolo de Enmiendas al Acta Constitutiva— **no entran
> todavía**. `oas.org` devuelve 403 a toda captura automática y el protocolo de la
> UA se sirve como escaneo sin capa de texto. Se sabe lo que dicen y no se
> publican: citar de memoria un artículo que no se ha podido leer sería
> exactamente lo que esta capa existe para no hacer.

**agua-embalsada** *(1.21)* (`dotacion`, puntos, verificado): `demarcacion` (✔) ·
`capacidad_hm3` (✔, +`__v`,`__f`) · `agua_actual_hm3` (+`__v`,`__f`) ·
`fecha_dato` (✔) · `hidroelectrico` · `claves[]`
**En `atlas.conjunto`** *(1.41)*: `fecha_dato` (✔) · `energia_almacenada_gwh` ·
`energia_capacidad_gwh` · `produccion_semana_gwh` · `produccion_ano_gwh` ·
`produccion_ano_anterior_gwh` · `periodo_inicio` · `periodo_fin` — todos con
`__v` y `__f`.

> **Publica el AGUA, no el vaso**, y esa distinción es toda la capa. La ruta
> obvia —el shapefile del Inventario de Presas y Embalses del SNCZI— está tras un
> **ALTCHA**, un CAPTCHA de prueba de trabajo que el Ministerio puso a propósito y
> que no se salta. Cinco vías más se probaron y fallaron (URLs viejas a 404, no
> hay WFS de embalses, el ArcGIS REST del Ministerio no sirve esa capa, el PDF
> resumen agrega por cuenca). **La sexta fue mirar mejor la pregunta:** «agua
> embalsada» no es la geometría del vaso, es el agua que hay dentro, y eso el
> MITECO lo publica en abierto y sin formulario en el histórico del **Boletín
> Hidrológico Semanal** — un parte por embalse y semana desde 1988 (más de setecientos mil puntos, y unos cuantos cientos más con cada refresco: la cifra exacta la cuenta el validador, no este párrafo).
>
> **La base no lleva coordenadas**, así que la geometría se cose por nombre contra
> el Nomenclátor del IGN, y de ahí sale la disciplina de esta capa. Un nombre de
> embalse **no es único en España**, de modo que un emparejamiento por nombre
> —aunque salga uno solo— puede estar señalando el embalse equivocado. Cada punto
> se verifica preguntando al servicio del propio Ministerio **en qué demarcación
> cae**, y se compara con la que declara el Boletín. El que no cuadra no se
> publica.
>
> **La normalización de nombres es de cuatro lenguas, y las reglas salieron de
> mirar el nomenclátor, no de suponerlo:** nueve prefijos —`Embalse`, `Pantà`,
> `Presa`, `Pantano`, `Encoro`, `Balsa`, `Charca`, `Embassament`, `Bassa`— y el
> sufijo vasco **`urtegia`** con su genitivo (`Añarbeko urtegia` → Añarbe). Más el
> artículo pospuesto (`Barca, La`), que es la lección que dejó `perte`.
>
> **`porcentaje_llenado` está prohibido en el esquema por DERIVADO**, igual que
> `activo` en R7: sale de dividir las dos cifras que la capa ya publica, y
> escribirlo sería la doble fuente de verdad que D3 descartó. `superficie_ha`
> también, porque ese dato vive en el shapefile que esta capa no usa y mide el
> vaso lleno, no el agua.
>
> **Hay embalses cuyo último parte es de 2003.** No son actuales: van a
> `estado_registro: historico`, que es la regla de que nada se borra aplicada a
> una serie temporal que dejó de alimentarse.
>
> **`hidroelectrico` es del Boletín, no una deducción** *(1.41)*. La marca vive
> en la propia base (`ELECTRICO_FLAG`), es **constante en los 38 años** y reparte
> los 401 en 108 hidroeléctricos y 293 de uso consuntivo. El Ministerio publica
> la reserva de cada familia por separado, así que el reparto no es una lectura
> del atlas: **sumando por esta marca salen sus mismas cifras**, comprobado al
> dígito contra el boletín n.º 32/2026 (11.908 hm³ / 69,1 % y 26.195 / 67,5 %).
> Lo que la marca **no** dice —y la página lo escribe— es a qué se dedicó el
> agua: el uso hidroeléctrico **no consume**, y el desembalse por usos no lo
> publica nadie.
>
> **La energía del conjunto sale del PDF semanal** *(1.41)*, no del histórico
> (§4, `atlas.conjunto`). Es la misma operación estadística del mismo emisor,
> pero el Boletín publica el agua en una base descargable desde 1988 y la energía
> **solo en el parte de cada semana**: por eso no hay serie (§4.1) y por eso el
> PDF **se acumula** en `fuentes/` en vez de reemplazarse. Prohibidos en el
> bloque, por derivados, los porcentajes de llenado energético; y **prohibida
> cualquier equivalencia en hm³** de los GWh, que exigiría el salto de cada
> central — y el salto no es la altura de la presa.

**red-electrica** *(1.22)* (`dotacion`, **mixta**, verificado):
`tension_kv` (✔) · `n_tramos` (✔) · `longitud_medida_km` · `claves[]`

> **La capa se llama por lo que la fuente sostiene, y no por lo que uno querría
> que dijera.** El título fue «Red eléctrica (transporte)» hasta el día de
> publicarla, y ese título afirmaba una **categoría jurídica**: pertenecer a la
> red de transporte lo decide la regulación, no un mapa. Lo que el IGN certifica
> es otra cosa, más pequeña y del todo cierta: **que hay un tendido de esa clase
> de tensión sobre el terreno**. De ahí el título de hoy y de ahí que
> `red_transporte` esté prohibido por su nombre en el esquema. Tercera vez en la
> misma semana que la acotación honesta la impone la fuente y no el gusto:
> `cables-submarinos` registra aterrizajes y `agua-embalsada`, el agua.
>
> **Cómo cayó el muro de R3, que es lo que merece recordarse.** La capa llevaba
> desde el principio en gris con un motivo impecable —el mallado lo publica Red
> Eléctrica, `corporativa`, y R3 no la deja sostener un `confirmado`— y una
> premisa que nadie escribió: *que no lo publica nadie más*. El **IGN** lo publica,
> en la Base Topográfica Nacional, tema Energía, con licencia de la Orden
> FOM/2807/2015 «compatible con CC-BY 4.0» y sin puerta ninguna. **R3 no se
> esquiva discutiéndola: se esquiva cambiando de emisor.**
>
> **Qué clase de fuente es una carta topográfica** *(la novedad de fondo)*. Hasta
> hoy el IGN entraba en el atlas 456 veces y siempre como **Nomenclátor**, que es
> un *registro* y está en la lista de §6.1 con todas las letras. La BTN no es un
> registro: es **cartografía**. Sigue siendo `primaria`, y por el mismo motivo que
> el Nomenclátor —producción oficial de la agencia cartográfica del Estado— pero
> **con el alcance recortado**: sostiene lo que ha medido (que hay una línea aquí,
> de esta clase de tensión, y un recinto allá) y no sostiene nada de lo que no
> mide. **De quién es la línea, la BTN no dice una palabra**, y por eso `titular`
> y `propietario` están prohibidos: escribirlos sería sabérselo en vez de leerlo,
> y el único que lo publica es el operador — o sea, de vuelta al muro.
>
> **Por qué son DOS registros de tendido y no 1.784.** Porque las 18.505 líneas de
> la BTN traen `nombre` a nulo, **todas**. Un tramo no es un objeto con identidad:
> es el trozo que quedó entre dos hitos de captura. Nombrarlos por sus extremos
> habría fabricado 1.784 nombres que nadie ha dado nunca. Lo que la fuente sí
> distingue es la **clase de tensión**, y eso es lo que hay: dos cosas. `n_tramos`
> conserva el recuento, que es un hecho de la fuente y se puede volver a contar
> sobre el extracto archivado.
>
> **El filtro de subestaciones no es criterio del atlas: es la norma de captura
> del IGN.** «Las líneas eléctricas deben finalizar en transformador, subestación
> eléctrica, central eléctrica, vértice de otra línea eléctrica o torre de alta
> tensión.» Así que se pregunta lo único que se puede preguntar sin interpretar:
> **¿cae un extremo de línea de 220 o 400 kV dentro de este recinto?** De las
> 3.548 subestaciones de la BTN, **718 lo cumplen y 657 tienen nombre**; las 61
> restantes se quedan fuera porque `nombre` es obligatorio, y quedan dichas aquí y
> en el manifiesto en vez de desaparecer. Sin el filtro entrarían las 2.766
> nombradas, entre ellas las de tracción de Adif — que no son red de alta tensión
> por el hecho de existir. Dos de Adif **sí** pasan el filtro, y está bien que
> pasen: la tracción ferroviaria engancha a 220 kV de verdad.
>
> **`longitud_km` va `parcial` a propósito, y es la parte más fácil de hacer mal.**
> El IGN **no publica ninguna longitud**. El número lo mide el atlas sobre la
> geometría original, así que detrás no hay fuente que lo sostenga y un
> `confirmado` incumpliría R2 aunque la geometría sí sea primaria. **Medir sobre
> un dato primario no convierte la medida en primaria.**
>
> **La geometría publicada va simplificada, y por eso es `generalizada`** (§6.6,
> el caso de 1.14). La BTN captura «un vértice en la base de cada una de las
> torres»: un tramo recto de cuarenta torres trae cuarenta vértices y una sola
> forma. Con 25 m de tolerancia se van el **85 % de los vértices** y cuesta el
> **0,017 % de la longitud** — 31.154,2 km pasan a 31.148,9. Las subestaciones NO
> se simplifican: son el perímetro del objeto mismo y se quedan en `exacta`.
>
> **La BTN separa con `#` los nombres alternativos de un mismo recinto** y no
> siempre es el par euskera/castellano: «Subestación Eléctrica Guadame#Subestación
> Eléctrica Guadalquivir Medio» son dos nombres de lo mismo. No se elige uno —eso
> sería tirar un dato de la fuente—: se publican los dos unidos por « / », y una
> clave dice que el separador es de la fuente y la barra, del atlas.

**puertos** *(1.25)* (`dotacion`, polígonos, verificado): `puerto` (✔) ·
`autoridad_portuaria` (✔) · `darsena` · `acto_delimitacion` · `fecha_acto` ·
`superficie_declarada_m2` · `claves[]`

> **Abre la rama `transporte`**, que el árbol no tenía, y tapa el hueco más
> grande que le quedaba al atlas: por los puertos de interés general pasa la
> mayor parte del comercio exterior español.
>
> **UN PUERTO NO ES UN REGISTRO.** El texto refundido de la Ley de Puertos le
> delimita una zona de servicio **terrestre** y **dos de aguas** —la I abrigada,
> donde se opera; la II exterior, de espera y maniobra—, y a veces cada dársena
> aparte. Por eso 43 puertos dan **164 recintos**, y por eso en el mapa un puerto
> ocupa mucho más mar que tierra. Las gestionan **28 Autoridades Portuarias**, así
> que el nombre de la autoridad NO identifica al puerto.
>
> **La decisión delicada, y cómo se resolvió sin suponer nada.** El servicio
> rotula cada recinto con un `act` que vale «DEUP» o «Desafectacion», y **no
> documenta qué distingue**. No es un matiz: desafectar es **sacar** suelo del
> dominio público portuario, y son 48 de 164 — si esos polígonos fueran el suelo
> retirado, publicarlos como puerto diría lo contrario de la verdad. La duda es
> real y viene de la norma, donde una misma orden ministerial aprueba «la
> delimitación de espacios y usos portuarios … y la desafectación de determinados
> espacios», y hay espacios desafectados que luego se **reincorporan**. Lo
> resuelve **el propio publicador**: el conjunto se titula «Zonas de servicio
> portuarias de España» y declara contener la zona terrestre y las zonas I y II.
> Todo lo que hay dentro es zona de servicio **según quien lo publica**. El campo
> va **verbatim** y el atlas no lo interpreta. **Cuando la fuente no explica un
> campo que cambia el sentido del dato, se publica el campo y se declara la
> abstención.**
>
> **Se descartan 24 astillas** —partes que tras redondear a 5 decimales quedan con
> menos de un metro cuadrado, casi siempre exactamente cero—. Entre todas suman
> **1,89 m² de 2.200 km²**. Las cazó §7.4 al no poder decidirles el sentido de
> giro, que es lo que le pasa a un polígono sin superficie.
>
> **Y una lección de orden de operaciones**, que costó una tanda: simplificar →
> redondear → tirar astillas → **orientar**. Orientar antes de redondear no vale,
> porque el redondeo a 5 decimales puede **voltear el signo** del área de un
> anillo casi degenerado. **Se orienta lo que se publica, no lo que se calcula.**
>
> **Y otra lección, de la 1.46 y más cara**: §7.4 miraba el **sentido** del
> anillo y no que el anillo fuera **simple**. Un anillo que se cruza a sí mismo
> no delimita nada —RFC 7946 §3.1.6 lo prohíbe—, y sin esa comprobación
> `zonas-defensa` publicó una estrella de cincuenta kilómetros con el contrato
> en verde.
>
> **Y la corrección de esa lección, en la 1.47**, que es la parte que importa:
> lo que separa un defecto de un artefacto **no son los metros del cruce** —eso
> creyó la 1.46— sino el **signo de los dos lóbulos** en que el cruce parte el
> anillo. Si giran igual, el anillo se **estrangula**: encierra lo que debe, la
> superficie sale correcta y lo que falla es la forma. Si giran al revés, un
> trozo se cuenta restando y **el recinto publicado deja de ser el del papel**.
> Los metros no lo distinguen, y se comprobó que mienten en los dos casos
> mayores del atlas: un cruce de 79 m entre lados separados por 207 vértices es
> un estrangulamiento intacto, y uno de 713 m entre lados contiguos es un
> artefacto del 0,005 %. **Bloquea** el trozo del revés que pasa a la vez del
> **1 % del recinto** y de **media hectárea** —las dos puertas, porque una
> astilla de treinta metros cuadrados da porcentajes enormes de casi nada—, y
> **avisa** en todo lo demás. El error se mide contra la **suma de los dos
> lóbulos** y nunca contra el área firmada del anillo: en una pajarita los
> lóbulos se anulan, el área sale cero y el peor defecto posible se colaría
> como un 0,000 %.

**rte-t** *(1.25)* (`dotacion`, puntos, verificado): `nodo_urbano` (✔) ·
`municipio` · `aeropuerto` (✔) · `puerto_maritimo` (✔) · `puerto_interior` (✔) ·
`terminal_ff_carretera` (✔) · `claves[]`

> Los **77 nodos españoles** del Anexo II del Reglamento (UE) 2024/1679: 49 nodos
> urbanos, 38 aeropuertos, 42 puertos marítimos, 1 puerto interior —Sevilla, el
> único fluvial del país— y 28 terminales ferrocarril-carretera. Cada modo va
> declarado de la red **básica** (a terminar en 2030) o **global** (2050): no es
> una escala de importancia, es un calendario con fuerza legal.
>
> **De dónde sale la tabla, que fue la mitad del trabajo.** El PDF del DOUE **no
> se puede parsear**: el modo `layout` avisa de «rotated text» y devuelve
> incompleto, igual que con el PERTE. Y **el texto plano no vale**, que es lo que
> hay que entender: aplasta las columnas, y «A Coruña X Global Básica» no dice
> cuál de los dos valores es el aeropuerto y cuál el puerto. Con cinco columnas
> posibles eso no es un detalle, es ambigüedad fatal. Lo resuelve el **espejo del
> BOE**, que sirve el mismo documento en HTML con la tabla en `<td>` de verdad.
> Misma lección que en `cables-submarinos`: cuando EUR-Lex no se deja, el BOE
> tiene el DOUE.
>
> **Cuadre**, y sin él no se publicaba: 77 filas entre el primer «ES» y el «FR»
> siguiente, **las 77 con sus siete celdas**, sin nombres repetidos y ninguna sin
> modo marcado.
>
> **La geometría es el municipio, y 35 de 77 necesitaron una equivalencia
> DECLARADA una a una**: siete «Área Metropolitana de …», una parroquia (San
> Cibrao, en Cervo), un nodo que son **dos** municipios (Tarragona-Reus), una isla
> entera (El Hierro, que se sitúa en Valverde) y las formas oficiales bilingües
> que el Reglamento abrevia — **«Elche/Elx» no existe en el IGN; existe
> «Elx/Elche»**. Cada equivalencia va en `claves` con su motivo, para poder
> discutirse una a una en vez de esconderse dentro de un emparejador «listo».
>
> **Dos avisos del IGN que esta capa deja pagados.** El primero: **un cero del IGN
> no prueba ausencia** — el servicio devuelve 200 con la colección vacía cuando se
> le aprieta, y en el primer barrido «Albacete» y «Santander» salieron como no
> encontrados. Un vacío se reintenta antes de creérselo. El segundo, más fino:
> **la media de los vértices de un municipio no está dentro del municipio.**
> Castelló de la Plana incluye las **islas Columbretes**, a 50 km mar adentro, y
> el promedio se va al agua; Alicante, igual. Es §6.6 —«el centroide de un derecho
> multiparte puede caer donde no hay derecho ninguno»— aplicado a un municipio. Se
> toma un punto de la parte mayor, garantizado dentro, y se comprueba volviendo a
> preguntar al IGN en qué municipio cae.

**ferrocarril** *(1.25)* (`dotacion`, líneas, verificado): `codigo_linea` (✔) ·
`n_tramos` (✔) · `longitud_medida_km` · `claves[]`

> **326 líneas y 24.136 km** de la red de titularidad estatal, del servicio WFS
> INSPIRE de **Adif**, versión 2026/01. Adif es entidad pública empresarial y su
> metadato declara «sin limitaciones al acceso público» y «no se aplican
> condiciones de acceso y uso», con atribución: compatible con CC BY 4.0.
>
> **El registro es la LÍNEA porque es lo único que la fuente nombra** —el tramo es
> el trozo que queda entre dos hitos—, exactamente como en `red-electrica`. Y el
> nombre es el **técnico** de Adif, no el comercial: «ALTSASU-CASTEJON DE EBRO».
>
> **El error que estuvo a punto de colarse, y que merece quedar escrito.** El
> vínculo entre línea y tramo está en el GML **en los dos sentidos, y no son
> equivalentes**. La lista `net:link` de las líneas reclama **188 tramos por
> duplicado** —a alguno lo reclaman **siete** líneas—, así que coser por ahí daba
> **47.357 km** de red. Cada tramo, en cambio, declara **una sola** línea en su
> `inNetwork`. Se cose por el lado que no puede contar dos veces, y salen 24.136
> km con los **1.689 tramos usados exactamente una vez**. **Lo delató el total, no
> el código**: la red de Adif no llega a 25.000 km, y 47.357 era una cifra que no
> había que creerse. Cuando una capa nueva da un número contrastable con lo que
> uno ya sabe del mundo, hay que contrastarlo.
>
> **Y una trampa de CRS que habría sido peor**: el GML declara
> `urn:ogc:def:crs:EPSG::4258`, y esa forma de nombrarlo —la URN— obliga al orden
> de ejes de la autoridad, que para el ETRS89 geográfico es **latitud primero**.
> Copiar las coordenadas tal cual habría puesto la red ferroviaria española en el
> golfo de Guinea.
>
> **Lo que se queda fuera, dicho:** 29 líneas de las 355 que no tienen ningún
> tramo que las declare; y las **2.682 estaciones y bifurcaciones** del mismo
> servicio, que mezclan estaciones de viajeros con nudos técnicos («BIF. CANAL DEL
> DUERO») y piden criterio propio. El esquema prohíbe además `ancho_via`,
> `electrificada`, `alta_velocidad` y `n_vias`: **existen en el servicio, en capas
> que esta pasada no lee**, y escribirlos de memoria sería inventar los datos más
> citables de la capa.

*(Capas futuras entran por §8 con su apartado aquí y su esquema en
`pipeline/esquemas/`.)*

---

## 11 · Ejemplo canónico completo

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
    "tipo_proyecto": ["extraccion"],
    "municipio": "Monesterio",
    "provincia": "Badajoz",
    "promotor": "Río Narcea Recursos",
    "promotor__v": "parcial",
    "promotor__f": "f2",
    "fase": "desarrollo",
    "fase__v": "parcial",
    "fase__f": "f1",
    "estado_proyecto": "Reactivación en curso",
    "estado_proyecto__v": "parcial",
    "estado_proyecto__f": "f1",
    "estado_proyecto_fecha": "2025-03-25",
    "claves": [],
    "fuentes": [
      { "id": "f1", "tipo": "primaria",
        "titulo": "Comisión Europea — Decisión de la 1ª lista de Proyectos Estratégicos CRMA, con su anexo",
        "fecha": "2025-03-25" },
      { "id": "f2", "tipo": "prensa",
        "titulo": "elEconomista — Quién está detrás de los 7 proyectos",
        "fecha": "2025-03-31" }
    ],
    "nota": "La inclusión en la lista CRMA es un hecho oficial.",
    "debate_url": "https://www.eltercioviejo.com/bandera/hac/hilo/…"
  }
}
```

**Este ejemplo valida.** Es literalmente el fixture `pipeline/pruebas/valido.geojson`
que el CI pasa en verde — no una ilustración aproximada. Si el contrato y el
fixture se separan alguna vez, el error está en el contrato.

*(Las dos fuentes van **sin `url` y sin `archivo`**, y es deliberado: este
documento no cementa una URL que nadie ha verificado todavía. Localizar la
decisión de la Comisión **con su anexo** —no la nota de prensa que la resume— y
archivarla en `fuentes/` es trabajo de la fase F1, que existe exactamente para
eso. Escribir aquí un enlace plausible mientras tanto sería el fallo que el
principio 1 prohíbe, cometido en el ejemplo que enseña a no cometerlo.)*

*(Obsérvese `promotor__v: parcial` con `promotor__f: f2`. La fuente f2 es prensa,
y por **R3** no puede sostener un `confirmado`: elevar ese campo exigiría
localizar fuente primaria del promotor —registro mercantil, catastro minero—, no
reescribir el estado. `fase: desarrollo` también queda en `parcial` por lo mismo.
Un dato solo sube de rango cuando sube su evidencia.)*

*(La geometría va en `municipio`, así que **R9 no le pide fuente cartográfica**:
el registro no promete una precisión que no tiene. El día que la coordenada salga
del catastro minero, `geo_precision` sube a `exacta` y con ella llegan
`geo_fuente__f` y la fuente archivada — las dos cosas a la vez, que es lo que R9
comprueba.)*

---

## 12 · Decisiones de diseño registradas

1. **Propiedades planas** (no anidadas) salvo `fuentes` y `claves` → interop GIS.
2. **Nombres de campo en español** → coherencia de proyecto; coste asumido.
3. **Sufijos `__v`/`__f`** como espacio de nombres de metadato por campo →
   verificación por campo sin romper el modelo plano.
4. **Doctrina como validación de CI**, no como prosa → §6.4/§7.
5. **La app lee releases etiquetadas**, nunca la rama viva.
6. **`vigilar.py` avisa y jamás escribe** → el criterio humano firma; la máquina
   instruye (compatible con el futuro pipeline de expedientes). Construido en la
   1.5.0, y avisa **fallando**: abrir issues habría costado permiso de escritura
   sobre el repo (§7).
7. **Nada se borra**: `estado_registro` + historial Git.
8. **`activo` es derivado, no escrito** *(1.1)* → una sola fuente de verdad (D3).
   Y el campo del que se deriva, `fase`, es **controlado**: un filtro no puede
   colgar de texto libre sin adivinar.
9. **Las reglas de doctrina van numeradas** *(1.1)* → un error de CI nombra la
   regla y manda al contrato. Una violación de doctrina que se reporta como
   error de esquema no enseña nada a quien la comete.
10. **El horizonte se declara en el manifiesto** *(1.1)* → `en_preparacion`
    convierte «lo que falta» en dato consultable en vez de en una promesa suelta
    en un README (D4).
11. **La geometría cita como cualquier otro dato** *(1.3)* → `geo_fuente` con
    `__v`/`__f`, y R9 atándola a la precisión declarada (§6.6). Era el único
    campo cuya procedencia no se podía comprobar, y el único que el mapa
    contradice solo con dibujarse.

---

## 13 · Historial del contrato

| Versión | Fecha | Qué cambió |
|---|---|---|
| **1.61.0** | 2026-08-19 | **Aditiva, y saca a `espacios-maritimos` del expediente canario.** La capa prometía en su resumen «mar territorial, zona contigua, ZEE y plataforma continental» y publicaba cuatro registros, todos alrededor de Canarias. Entran las cuatro líneas que un instrumento publica punto a punto: las **dos únicas delimitaciones marítimas que España tiene cerradas por tratado en vigor** —plataforma continental con Francia en el golfo de Vizcaya (BOE-A-1975-14608: Q, Q1–Q13, R y T) y con Italia entre Baleares y Cerdeña (BOE-A-1978-29664: A–L)— y **las dos ZEE declaradas y enfrentadas del Mediterráneo**: la española del RD 236/2013 (54 puntos, «DATUM WGS 84» impreso sobre el cuadro) y la argelina del decreto presidencial 18-96 (los 62 puntos numéricos de su anexo, WGS84, JORADP n.º 18 vía el depósito M.Z.N.135.2018.LOS). **El hallazgo que las dos tablas regalan:** el punto 2 argelino y el punto que el artículo 1 español sitúa a 46 millas de Cabo de Gata son EL MISMO, minuto por minuto — las dos declaraciones arrancan del mismo lugar; el solapamiento que sigue no lo afirma el atlas, lo afirma España en su nota verbal de 27-07-2018 («coordenadas claramente exorbitantes respecto a la línea media equidistante»), archivada junto a la italiana de 28-11-2018 y las respuestas argelinas de 2019. §6.4 gana **`limite_acordado`** — el único trazo del tablero que no acredita una posición sino un acuerdo — y su regla operativa la guarda el esquema de la capa: **un acordado sin `instrumento` no existe**. **Lo que NO entra, con su porqué:** el convenio del mar territorial con Francia no publica UNA coordenada (define M, P y Q por referencias geográficas y una carta anexa — digitalizarlo sería calcular, no copiar); con Portugal los dos convenios de 1976 figuran en la tabla de DOALOS firmados y **sin constancia de entrada en vigor**; y Alborán, Ceuta, Melilla y las líneas de base del RD 2510/1977 quedan como huecos declarados en PROCEDENCIA. Los convenios de 1974-78 no declaran datum, y cada `geo_fuente` lo dice en vez de disimularlo. Pruebas **70 → 71**. **No nace ninguna regla `R*`.** |
| **1.60.0** | 2026-08-18 | **Aditiva, y nace de una renuncia prematura.** La comunicación portuguesa de 1 de abril de 2015 sobre la presentación española ante la CLCS la publica la ONU **escaneada** —una página, una imagen, cero fuentes tipográficas—, ningún extractor saca texto de ella, y el atlas dio su contenido por incitable: hueco declarado, clave «de la nota portuguesa solo se puede citar la fecha» y un párrafo entero de la historia de Tropic construido sobre esa imposibilidad. Duró doce días. **«No se puede extraer» no es «no se puede leer»**: la página estaba en el PDF como bitmap, y descomprimirla y leerla devolvió la nota entera — incluido el párrafo que dice que **Portugal no se opone** a que la Comisión examine la presentación española, siempre que sus recomendaciones no prejuzguen la presentación portuguesa de 2009 ni la delimitación entre ambos. §6.1 gana por tanto **`transcripcion`**: la ruta al fichero de `fuentes/` donde el atlas publica, verbatim y diciendo cómo la obtuvo, lo que leyó en un documento sin capa de texto. No es una fuente nueva —la fuente sigue siendo el escaneo— sino **la lectura, puesta donde se pueda desmentir**; §7.7 exige que exista, y esta parte **bloquea**, porque lo que falta cuando falta una transcripción es el respaldo del `confirmado`. Lo que el campo NO autoriza queda escrito: ni resumir, ni traducir, ni **tomar prestada la lectura de un tercero** — un análisis ajeno de un documento ilegible es fuente secundaria y el hueco se queda hueco. **No nace ninguna regla `R*`.** |
| **1.59.0** | 2026-08-17 | **Aditiva, y quita once párrafos de las fichas.** Arturo mira una tarjeta y pregunta si hace falta pintar ahí que el atlas dibujaba mal ese registro. No hace falta: §6.3 define `claves` como «afirmaciones sueltas» **sobre el sujeto**, y «estuvo dibujada entera en Madrid, y su fuente nunca dijo eso» no es un hecho de la instalación — es **biografía del atlas**, escrita once veces casi igual. Su sitio es el CHANGELOG, que existe textualmente para «lo que un lector externo necesita saber para confiar en una versión de los datos»; contarlo además en el dato es la **segunda verdad** que descartó D3. §6.3 gana la prueba corta —**si el texto habla del atlas en vez de la cosa, no es una clave**— y su excepción, que importa tanto como la regla: cuando la corrección **viene de la fuente** y trae hechos con ella (el convenio del GTC nombrando sus sedes a nivel del mar), lo que se publica son esos hechos y no el arrepentimiento. Por eso la clave del telescopio se queda y estas once se van. **Nota sobre el motivo:** no se retiran porque el sitio aún no tenga visitas —eso valdría para volver a ponerlas cuando las tenga— sino porque están en el documento equivocado. **No nace ninguna regla `R*`.** |
| **1.58.0** | 2026-08-17 | **Aditiva, y la pide una cifra que no cuadraba en pantalla.** Con las once ICTS ya repartidas, Arturo mira la ficha de MARHIS y ve **catorce vecinos bajo un punto de Tenerife que dice «3»**. Ninguno de los tres números estaba mal —Tenerife tiene 2 vecinos, y los catorce son la suma de sus CINCO sedes—, pero **juntos no cuadran para quien mira, que en una pantalla es lo mismo que estar mal**: la lista aplanaba cinco emplazamientos en uno. La ficha pasa a **separar los vecinos por sede**, con su recuento al lado para que cuadre con el del mapa. Para eso el dato tiene que decir **qué sitio es cada vértice**, y nace **`sedes[]`** (§10): las comunidades del Anexo I en el MISMO orden que los puntos del `MultiPoint`. Es la forma estructurada de lo que `localizacion` ya dice en prosa, y existe por el mismo motivo que `nodos_del_mapa` es un entero y no una frase — **la prosa no la lee un consumidor**. De paso arregla el otro efecto del mismo hueco: la lista de once coordenadas **anónimas**, que ahora lleva su nombre en cada línea. La alineación la comprueba **§10 y no el esquema**, porque es una correspondencia entre una propiedad y la GEOMETRÍA: cada mitad es válida por su cuenta, y desalinearlas no rompe nada — solo pone cada laboratorio en la comunidad de al lado con toda la seguridad del mundo. **Y un descuido propio, cazado al repetir:** el enriquecedor no era idempotente en el reparto —a la segunda corrida `coordinates[:2]` ya no eran dos números sino dos vértices—, la trampa que `ya_tiene` evita en las fuentes y que a la geometría le faltaba. **No nace ninguna regla `R*`.** |
| **1.57.0** | 2026-08-17 | **Aditiva, y saca de Madrid once cosas que no están en Madrid.** Lo vio Arturo mirando el mapa, y es la objeción del Gran Telescopio Canarias aplicada once veces: **doce registros de `icts` se dibujaban en el mismo punto de la capital**, y un punto en un mapa **afirma**. Al comprobarlo aparece que era peor que una convención tosca — era `pais` usado **fuera de su propia definición**, que exige que la fuente «no sitúe nada dentro» del Estado. Y la fuente sí sitúa: el campo `localizacion`, verbatim del Anexo I, dice «Cataluña y Madrid», «Canarias, Cantabria, Cataluña, Madrid y País Vasco»… El atlas lo tenía copiado desde la 1.31 y lo **confesaba por escrito** en su `geo_fuente` —«sitúa el sujeto, no el objeto»—, o sea la ficha honesta y el mapa afirmando otra cosa. §6.6 gana la regla que faltaba: **primero cuántos lugares nombra la fuente, después con cuánto detalle nombra cada uno**; varios lugares → `MultiPoint` con un vértice por lugar. Las once pasan a `autonomia` con un vértice en cada capital autonómica —**no se estrena vocabulario**: `autonomia` existe desde la 1.31 y significa exactamente esto—, y las comunidades **se parsean del propio registro**, no de una lista en el guion: así `res` se prueba sola, porque su localización dice «Once comunidades autónomas» y de los catorce nodos de su clave salen **once** distintas. **`rediris` se queda en `pais`**, y es el único que lo merece: «todas las comunidades autónomas» sí es un hecho de un Estado entero. **Lo que NO arregla, dicho sin adorno:** el punto de Madrid no desaparece —nueve de las once tienen sede allí de verdad—, pero pasa de significar «había que ponerlo en algún sitio» a significar lo que dice el Anexo I. Y **Canarias tiene dos capitales por estatuto**: se queda con la que la capa ya usaba y ya tenía archivada, porque elegir la otra «porque el laboratorio está en Gran Canaria» sería el relleno por verosimilitud del principio 1 — para el nodo canario de la RES el Anexo no dice la isla. **El agujero que el arreglo abría, tapado en el mismo commit:** tres controles contaban **rasgos** y no vértices —el aviso de apilados de §7.4, el contador del visor y los vecinos «También en este emplazamiento», los tres nacidos en la 1.55— y se habrían quedado ciegos justo donde más apilamiento hay. **Y al comprobarlo sobre el mapa vivo aparece que el contador del visor NUNCA había dibujado:** sus rasgos van en fuente propia y solo llevan `n`, sin `slug`, así que el filtro general de las capas los descartaba a todos desde el día que nació — 27 puntos apilados de 9 capas sin su número, y una release anunciándolo. Pruebas **67 → 68**. **No nace ninguna regla `R*`.** |
| **1.56.0** | 2026-08-17 | **Aditiva, y pone por escrito lo que una auditoría hecha en otra máquina ya había puesto en el código.** Dos reglas que el validador aplicaba sin que el contrato las nombrara, y un dato que había caducado en cuatro días. **Uno: el manifiesto estrena esquema** (`manifest.schema.json`) y deja de ser el único documento de `datos/` sin uno. Se notó por la puerta de atrás: `cadencia_revision_dias` viaja a un atributo `title` del visor y nada garantizaba que fuera un número, así que hubo que escaparlo **por si acaso** — y un «por si acaso» donde se escribe HTML es una deuda, no una defensa. El esquema cierra tipos y valores, incluidos **cinco enums que solo leía el código**: un `geometria: "puntoss"` no rompía nada visible, simplemente **dejaba de dibujar la capa en silencio**, y un dedazo en `ambito` relajaba el recuadro de plausibilidad de §7.4 al rango legal de WGS84. **Reparto explícito:** el esquema hace tipos y valores, la comprobación 8 sigue haciendo la doctrina — y por eso el esquema **no** exige `resumen` ni `id`: fallar con «is a required property» no enseña nada. **Dos: la ruta de la página.** La `pagina` de una capa apunta a este sitio, o sea empieza por «/» y **no por «//»**, que es un dominio ajeno con el protocolo omitido. Era el único hueco que no cerraba ninguna de las dos barreras del atlas —`escapar` no mira destinos y `urlSegura` lo habría aprobado, porque resuelve contra el propio dominio y saca un `https:` de buena fe—, así que un enlace de fuera se habría presentado como «la página de esta capa». **Y tres, el dato:** `otear.yml` llevaba seis días en rojo, que es **su forma de hablar**, y entre sus hallazgos estaba la **Orden TED/864/2026** — publicada el 14 de agosto, **un día después** de que la capa `nuclear` se verificara. Su dispositivo tercero da validez a **ambas** unidades de Almaraz **hasta el 8 de junio de 2030**, y el primero **revoca la Orden TED/773/2020**, que era justo la fuente que la capa citaba. Mover las dos fechas obligó a corregir tres frases que quedaban falsas alrededor —Almaraz II ya no tiene «un año más», Almaraz I ya no es el más próximo «en singular», y la clave decía que la resolución «NO consta»— y a **estrechar** el hueco `f4`, que pedía dos documentos y ahora solo le falta uno. La orden revocada **se conserva** como fuente, diciendo que lo está: es el acto bajo el que la central operó. Pruebas **65 → 67**. **No nace ninguna regla `R*`.** |
| **1.55.0** | 2026-08-17 | **Aditiva, y sale de una regresión que causó la 1.54.** Al llevar el Gran Telescopio Canarias a su paraje correcto quedó **en la misma coordenada exacta que `oocc`** —el telescopio está dentro de ese observatorio, así que es el dato y no una aproximación—, y en el mapa **dejó de pintarse**: un punto encima del otro se dibuja como uno. Lo vio Arturo. Al medirlo aparece que no era un caso suelto: **70 registros del atlas se apilan en 27 puntos de 9 capas**, y el peor son **trece a la vez** en el punto de Madrid de `icts` —los que el Mapa sitúa «en todo el país»—. El dossier ya sabía resolverlo desde hacía tiempo («También en este emplazamiento», con sus vecinos pinchables), pero **nadie podía saber que tenía que pinchar ahí**. Dos piezas: el visor dibuja **el número de registros que guarda cada punto** —en una fuente aparte, no como propiedad de los registros, que acabaría pintada como un dato más en la ficha—, y §7.4 **AVISA** con cuántos comparten cada coordenada. Avisa y no bloquea porque **no es un defecto del dato**: `pais` y `autonomia` son convenciones declaradas y dos cosas pueden estar de verdad en el mismo paraje; lo que se estaba perdiendo era saberlo. Dos fixtures de «registro repetido» se separan unos metros para seguir violando **una sola** regla. **No nace ninguna regla `R*`.** |
| **1.54.0** | 2026-08-16 | **Correctiva, y la corrección es de criterio.** La 1.52 dejó al **Gran Telescopio Canarias dibujado en Santa Cruz de Tenerife** —otra isla, a 163 km del telescopio— y lo defendió como disciplina: `autonomia` es la convención declarada para lo que el Mapa de ICTS solo sitúa por comunidad, y no se encontró fuente primaria que lo situase. **El razonamiento tenía un agujero y lo señaló Arturo:** un punto en el mapa **AFIRMA**, y ese afirmaba la isla equivocada — mientras que el mismo día, con el IRAM 30m, se había escrito que estar en la capital «era honesto y era inútil» y se había movido. La convención no puede amparar un punto que dice algo falso. Y al buscar de verdad, la fuente aparece: el **convenio de financiación publicado en el BOE** (Resolución de 18 de noviembre de 2024, BOE-A-2024-24663) dice literalmente «el Gran Telescopio Canarias **en el Observatorio del Roque de los Muchachos (La Palma)**», y ese observatorio **sí** es topónimo del Nomenclátor — el mismo punto que ya sostiene a `oocc`, porque el telescopio está dentro. Pasa de `autonomia` a **`paraje`** moviéndose **162.689 m**, con municipio Garafía. El mismo convenio deja claro que la capital **no era ni siquiera una de sus tres sedes**: las de nivel del mar son La Laguna y Breña Baja. **La regla que queda escrita:** antes de conformarse con `autonomia` hay que **agotar la búsqueda del acto**, y una búsqueda que se detiene en el gazetteer no la ha agotado. **No nace ninguna regla `R*`.** |
| **1.53.0** | 2026-08-16 | **Aditiva, y el dato es que dos cuentas oficiales no cuadran.** Tercero y último de los enriquecimientos de `icts`. La **Red Española de Supercomputación** es una ICTS distribuida y su registro ya listaba los **catorce nodos** del Anexo I del acuerdo del CPCTI, de octubre de 2025. Al ir a desglosar sus máquinas aparece algo mejor: la **propia red**, en agosto de 2026, sigue escribiendo en su página que está «formada por 14 nodos» **y abre diecisiete fichas de nodo** — las catorce del acuerdo, una a una, más **Magerit (UPM), Correfoc (UPF) y TalaIA (UIB)**. La red ha crecido y el número redondo se ha quedado atrás **en los dos sitios a la vez**. Entran `nodos_del_mapa` (14, confirmado sobre el acuerdo) y `nodos_publicados` (17, **`parcial`** porque lo sostiene la web de la propia red, corporativa, y R3 no deja que confirme nada), y la clave nombra las diecisiete máquinas una a una — con el aviso de que **una ficha nombra dos**, Xula y Turgalium en el CIEMAT, así que los superordenadores son más que los nodos. **No se toca la geometría:** la ICTS es distribuida y su punto sigue en `pais`. **Y se corrige un descuido de la 1.52:** sus cuatro campos de `proteccion_*` se declararon en §10 y **no llegaron al esquema** —una tanda abortó a medias y no se repitió esa mitad—; el esquema de `icts` no lleva `additionalProperties: false`, así que nada chistó. Entran ahora, con los dos nuevos. **No nace ninguna regla `R*`.** |
| **1.51.0** | 2026-08-16 | **Aditiva, y saca a una ICTS de donde no estaba.** El Mapa de ICTS sitúa cada instalación **por comunidad autónoma y nada más**, así que la capa nació con doce registros en `pais` y diez en `autonomia`, cada uno en el punto de su capital — y eso dejaba al **Radiotelescopio IRAM 30m, una antena en el pico Veleta, dibujado en Sevilla a 233 km**. Era honesto, porque su `geo_precision` lo decía, y era inútil. Lo arregla una fuente que el Mapa no es: **dos de los radiotelescopios tienen un acto que los protege por su posición**, y para poder protegerlos tiene que decir dónde están — la Orden TDF/102/2025 para Yebes (que deroga la CTE/1444/2003) y la Orden ITC/1679/2009 para el IRAM 30m (que deja sin efecto la Resolución de 2006). Sus coordenadas son las de la resolución que autoriza la instalación, o sea **`exacta` por §6.6**: Yebes pasa de `paraje` a `exacta` moviéndose 166 m, y el IRAM 30m de `autonomia` a `exacta` moviéndose **233 km**. **Lo que NO se dibuja, y es lo que más importa:** las dos servidumbres se definen por **distancias desde un punto** —«a más de 1.000 metros», «a más de 3.000»— y **ninguna trae un perímetro**, así que las distancias entran como **campos** (`servidumbre_acto`, `servidumbre_distancia_minima_m`, `servidumbre_distancia_mayor_m`, más `altitud_m`) y no como círculos: dibujarlos sería el atlas inventando geometría que su fuente no da. El enriquecedor comprueba que **el acto archivado siga diciendo la coordenada que se publica** antes de tocar nada. **No nace ninguna regla `R*`.** |
| **1.50.0** | 2026-08-16 | **Correctiva, y la encontró Arturo mirando la página.** §4.2 comprobaba las claves de un documento de conjunto con R2 y R3 —que estén sostenidas por una fuente primaria— pero **no que fueran claves**: nada exigía una `k` y una `v` con texto. `reservas-estrategicas` se publicó con sus seis claves escritas como `{titulo, texto}` en vez de `{k, v}`, y la página las pintó como **seis filas vacías con su punto rojo** de «sin verificar». Lo peor no es el fallo sino por qué nadie lo vio: el bucle de R2/R3 **salta la clave entera cuando no declara `verif`**, así que equivocar las cuatro llaves a la vez la volvía invisible — la misma forma del agujero de la 1.48, donde una capa sin entrada en el vocabulario apagaba su propio control. **BLOQUEA.** Y de paso, una lección sobre `fecha_dato`: el conjunto habla a DOS fechas —las existencias son del cierre de 2025 y la obligación en vigor, de junio de 2026— y la portada estampaba diciembre de 2025, con lo que la cifra que el conjunto existe para corregir parecía vieja justo donde importa. Se pone **la más reciente en la portada** y las demás **llevan su fecha en el rótulo**, que es la única manera honesta de fechar campo a campo mientras el esquema del conjunto admita una sola fecha para todo. Pruebas **60 → 62**. **No nace ninguna regla `R*`.** |
| **1.49.0** | 2026-08-16 | **Aditiva.** Nace el tercer documento suelto de `datos/conjuntos/` (§4.2): **`reservas-estrategicas`**, los días de combustible que España guarda por ley. Es conjunto y no capa por la razón de siempre, y esta vez la fuente lo dice con todas las letras: CORES reparte sus reservas en **cinco zonas** —Norte, Centro, Sur, Levante y Canarias— y **ni una instalación**, porque están **arrendadas** a logísticas y refinerías y se almacenan «de manera indiferenciada», mezcladas con el producto que esas empresas mueven a diario. Un punto en el mapa sería inventado. **Lo que el conjunto publica y casi nadie tiene bien son dos distinciones.** La primera: **los 92 días que repite todo el mundo son el RÉGIMEN del artículo 2 del Real Decreto 1716/2004, no lo vigente** — a la fecha de la Memoria 2025, publicada en junio de 2026, la obligación es de **88 días** (46 de la industria y 42 de CORES), porque el Consejo de Ministros autorizó el 17 de marzo de 2026 liberar hasta 12,3 días —los 11,5 millones de barriles con que España concurre a la mayor acción coordinada de la AIE de su historia, por el bloqueo de Ormuz— y en una primera fase se bajaron 4 días a la industria. La segunda: **obligación y existencias no son lo mismo** — a 31/12/2025 había **106,3 días** guardados (43,1 de CORES y 63,2 de la industria), y cuando en julio de 2026 se lee que «España supera los 100 días» se habla de estas y no de aquella. Se publican **las tres obligaciones** y no solo la del petróleo: **GLP, 20 días** que mantiene íntegramente la industria, y **gas natural**, que desde la Orden TED/72/2023 **ya no es una cifra fija** sino los objetivos europeos de llenado convertidos en días, de 23,4 el 1 de febrero de 2025 a 38,6 el 1 de noviembre. **CORES no guarda ni GLP ni gas.** **Lo que NO se interpreta:** los días de CORES y de la industria se suman porque la fuente los da en la misma unidad, pero **los volúmenes no** —CORES publica metros cúbicos y la industria toneladas—, así que van los dos como vienen; convertirlos pedía una densidad por producto que la fuente no da. El extractor lleva **catorce centinelas** sobre el PDF archivado: si CORES reescribe la memoria y una cifra cambia, el guion para en vez de publicar la de ayer. **No nace ninguna regla `R*`**, y el conjunto no lleva ficha de PROCEDENCIA por lo de siempre: §7.9 bloquea una ficha cuyo titular nombre una capa que no existe. |
| **1.48.0** | 2026-08-16 | **Aditiva, y tapa el agujero que el propio atlas se había apuntado.** Una capa que declara `categoria` **sin entrada en `vocabularios.json`** desactivaba en silencio sus dos controles: §7.6 se saltaba el enum porque el conjunto de valores admitidos salía vacío, y §9 no podía cruzar el color contra nada. **La capa más desprotegida era la que menos aviso daba**, que es exactamente al revés de lo que un validador debe hacer. Tres capas de la tanda del 2026-08-16 llevaban así: `red-carreteras`, `red-geodesica` y `red-sismica`, **819 registros y nueve valores sin que nada los mirara**, y las tres pintándose con el gris de reserva `#6E6B60` — indistinguibles entre sí sobre el mapa, que es el mismo fallo que ya había entrado por esta puerta tres veces. Ahora **BLOQUEA**, y no avisa como decía el apunte que dejó el hallazgo: un valor suelto fuera del vocabulario ya bloqueaba, y una capa entera fuera no puede costar menos. Entran las **tres entradas con sus nueve valores y colores**, y con ellas una decisión de mapa que estaba sin tomar: los siete de `red-carreteras` van en **rampa por capacidad** —de la autopista de peaje a la carretera convencional— y no en orden alfabético, con `clase_mixta` **fuera de la rampa** en un gris de la misma familia, porque no es un escalón sino la constancia de que el catálogo reparte esa carretera en tramos de clases distintas. Es la rampa más larga del atlas —siete valores donde ninguna otra capa pasa de cuatro—, y eso obligó a medir la paleta entera antes de elegir: los escalones contiguos quedan en ΔE 10-13, algo por debajo del 11,5 que es lo más justo que conviven las demás, y se acepta porque en una rampa secuencial **lo que se confunde son las clases vecinas**, mientras que la distinción que un mapa tiene que decir de un vistazo —gran capacidad contra convencional— queda a **ΔE 54**. La medida también corrigió un prejuicio: el atlas **reutiliza colores entre capas a propósito** —ocho parejas idénticas, y la mediana al vecino de otra capa es 5,8—, así que lo que hay que cuidar es el escalón DENTRO de una capa y no la unicidad global. **Y un valor mal formado, corregido:** `autovía` era el único de los 99 fuera de `[a-z0-9_]`, y no lo escribió nadie — lo fabricaba un `.lower().replace(" ", "_")` sobre el rótulo de la fuente. Se arregla en el extractor (`sin_tildes`) y en los 113 registros, **sin tocar la prosa**, que conserva su tilde donde debe; y §7.6 estrena la comprobación de forma del valor para que no vuelva. Pruebas **53 → 60**. **No nace ninguna regla `R*`.** |
| **1.47.0** | 2026-08-16 | **Correctiva, y corrige a la 1.46 del día anterior: la comprobación era buena y el criterio con el que la conté, falso.** La 1.46 escribió que los cruces del atlas son «pellizcos de decenas de metros entre lados contiguos, herencia de la simplificación o de la propia fuente», y que el anillo mal ordenado se delata por la **magnitud**. Medido de verdad, las tres cosas fallan. **Primera: no son 118 sino 123 anillos y 271 cruces** — el validador imprimía una línea por anillo y saltaba los de más de 900 vértices, de los que el atlas tiene **dieciséis**, uno de 9.011, con **cinco cruces escondidos**; el tope se justificaba por coste, y el coste era de la implementación: una **rejilla sobre las cajas de los lados** barre el atlas entero en 1,6 s frente a los 19 s de comparar todos contra todos, y coincide **exactamente** con la fuerza bruta en los 14.588 anillos donde ambas miran. **Segunda: no son «herencia de la fuente», los fabrica el atlas.** El anillo de Palma llega del WFS con 4.954 vértices, **cero cruces** y 105,59 ha; redondearlo a cinco decimales mete pellizcos de 37-40 m; el cruce grande lo pone **Douglas-Peucker a 2 m, del propio atlas**, como el registro ya declaraba en su `geo_fuente`. Y el reparto no admite excepción: los **41** anillos que cuentan algo del revés están **todos** en capas que el atlas generaliza, y las tres que declaran «no se simplifica: aquí el contorno es el dato» tienen **cero**. **Tercera, y la que cambia la regla: lo que separa un defecto de un artefacto es el SIGNO de los dos lóbulos, no los metros.** Con el criterio de la 1.46, los dos casos mayores se leían al revés: 79 m con lados separados por 207 vértices era «mal ordenado» y es un estrangulamiento con la superficie intacta; 713 m entre lados contiguos era «mal ordenado» y es un artefacto del 0,005 %. Ahora §7.4 **BLOQUEA** el trozo contado del revés que pasa a la vez del **1 %** del recinto y de **media hectárea**, y avisa en todo lo demás. Los dos números están medidos contra los dos extremos: los polígonos rotos de `zonas-defensa` iban del 5,8 % al 85 % sobre 2,2-14.674 ha, y de lo vivo que pasa el suelo de media hectárea el peor es **0,038 %** — 26 veces por debajo. **La regla nueva habría parado la release .71**, con sus doce anillos rotos y la estrella del Retín entre ellos, que tuvo que ver una persona mirando el mapa. El error se mide contra la **suma de los dos lóbulos** y no contra el área firmada del anillo, y eso lo enseñó el propio fixture de la 1.46: en una pajarita simétrica los lóbulos se anulan, el área sale cero y 293.265 ha del revés pasaban como «0,000 %». Pruebas **51 → 53**: las dos caras en fixtures separados, y la guardia nueva con la suya. **Y de propina, una guardia que faltaba:** §7.8 comprueba que el `schema_version` del manifiesto es el del contrato — la 1.46 subió el contrato y dejó el manifiesto en 1.45, y la biblioteca lleva un día anunciando una versión que ya no rige. **Ningún dato cambia**, solo el validador y el papel: los 123 avisos son los mismos hechos, mejor contados. **No nace ninguna regla `R*`.** |
| **1.46.0** | 2026-08-16 | **Aditiva, y nace de un fallo que llegó a producción.** §7.4 comprobaba el **sentido** de cada anillo y no que el anillo fuera **simple**, así que `zonas-defensa` publicó 135 polígonos —contrato en verde, 50 pruebas en verde— con dos de ellos dibujando **una estrella de rayos de cincuenta kilómetros** y **un pincho de noventa y ocho**. Lo vio una persona mirando el mapa, que es exactamente lo que este contrato existe para no tener que hacer. Entra la comprobación del **anillo que se cruza a sí mismo** (RFC 7946 §3.1.6 lo prohíbe: un anillo que se cruza no delimita nada). **AVISA y no bloquea**, y la decisión está medida: el barrido de las once capas con polígonos encuentra cruces en **siete**, y al medirlos resulta que **no son el mismo fallo** — los del atlas son pellizcos de **decenas de metros entre lados contiguos**, herencia de la simplificación o de la propia fuente, mientras que el anillo mal ordenado se delata por la **magnitud**: lados de kilómetros separados por doce vértices. Bloquear por los primeros pararía el CI sin que nadie pueda arreglarlo; por eso el aviso **imprime los metros y la separación**, para que la diferencia se lea de un vistazo. Se ignoran los cruces por debajo de **25 m** (ruido del redondeo a 5 decimales) y los anillos de más de **900 vértices** (el coste es cuadrático, y esas fronteras vienen del IGN y no de una transcripción). **No nace ninguna regla `R*`:** esto es geometría, y su sitio es §7.4 con las demás. |
| **1.45.0** | 2026-08-15 | **Aditiva, y quita un techo que nadie puso a propósito.** §4.1 declaraba desde la 1.35 que una serie es la película de **un registro**, y §7.11 lo hacía verdad: *«una serie sin ficha es huérfana»*. Esa frase no era doctrina sobre el tiempo — era el retrato de un momento en que **la única película posible era la de un registro**, porque no existía nada más que pudiera tener historia. Con §4.2 (1.44) sí existe: un conjunto publica hechos de un sistema, y esos hechos **tienen historia igual que un embalse** — los dos VIP llevaban 95 y 140 meses publicándose y no había dónde guardarlos. La identidad de una serie pasa a ser **`capa` + `slug` O `conjunto`**, excluyentes y una obligatoria: una película tiene un dueño, y sin dueño no hay contra qué cuadrar. **R11 no cambia ni una coma** — sigue comparando el último punto con la foto de quien sea; lo único que cambia es que el mensaje nombra al dueño que toca en vez de decir «la ficha» siempre. La ruta sigue siendo la identidad: `datos/series/conjuntos/<id>.json`. Lo estrena la película de `sistema-gasista-entradas`, **269 meses desde 2004**. **No nace ninguna regla `R*`.** |
| **1.44.0** | 2026-08-15 | **Aditiva, y le da casa a una cautela que llevaba tres días escrita sin sitio donde alojar lo que describía.** Al nacer `atlas.conjunto` (1.41) quedó anotado que *un hecho del conjunto se refiere a ALGÚN conjunto, y no tiene por qué ser el que la capa publica* — y no se dijo dónde vive ese hecho cuando **ninguna capa** es la suya. §4.2 estrena **`datos/conjuntos/<id>.json`**, con el mismo aparato que una ficha. **El caso que lo pide se puede medir:** en mayo de 2026 entraron a España 31.312,6 GWh de gas y el atlas solo podía dar cuenta de 29.997,6 — los **1.314,9 que faltaban, el 4,2 %**, entraron por los dos **VIP**, que la normativa europea creó en 2014 como puntos VIRTUALES de mercado y que **no tienen coordenada ni la tendrán**. Meterlos en una capa exigiría inventarles una geometría, que es el dato fabricado que R2 persigue; meterlos en el manifiesto los dejaría sin `__v`, `__f` ni `fuentes`, o sea incitables — el mismo argumento que ya cerró esas dos puertas en 1.41. Campos propios: **`sobre`**, que es la cautela convertida en dato (el conjunto declara de qué conjunto habla, en vez de dejarlo a quien lo hospede), y **`capas`**, que señala dónde están las piezas del sistema que sí tienen lugar — enlaza en vez de duplicar, que es D3. **R7 rige igual**: prohibido escribir el total, que es suma de lo publicado y lo calcula quien lo pinte. `comprobar_conjunto()` se generaliza para servir a los dos casos en vez de escribir la misma doctrina dos veces. Pruebas **46 → 50**. **No nace ninguna regla `R*`.** |
| **1.43.0** | 2026-08-14 | **Aditiva, y de las que solo se ven cuando alguien intenta USAR el atlas entero de una vez.** §3 estrena **`resumen`**: una línea por capa que dice **qué contiene**, obligatoria en toda capa con `fichero`. Sale de intentar montar un catálogo de las 31 capas y descubrir que **no se podía escribir**: el manifiesto sabía cómo se llama cada capa, de qué rama cuelga, cuántos registros tiene y qué licencia obliga — y **no sabía decir qué es**. Se buscó el texto donde debería estar y no estaba: las notas `_` del manifiesto **son prosa de taller** —explican decisiones («Era `recurso-eolico`, y se renombra sin coste porque…»), no contenido— y **diez de las treinta y una no tenían ninguna**; `fuentes/PROCEDENCIA.md` contesta de dónde sale, que es otra pregunta; y el `titulo` es un rótulo de tres palabras. La consecuencia estaba a la vista y nadie la había mirado: **una capa llamada «Conducciones de combustible» con dos registros no le dice nada a nadie**, ni en un catálogo, ni en el panel del mapa, ni en su propio índice de fichas. **No es un dato y no lleva aparato de verificación**, exactamente igual que `titulo`: es cómo la casa presenta su capa, se escribe a mano y no se deriva de nada — de ahí que §7.8 solo pueda exigir tres cosas comprobables (que exista, que quepa en 140 caracteres y que no sea el título otra vez), y que la cuarta, que diga algo verdadero, la sostenga quien lo escribe. Pruebas **41 → 46**, y una existe solo para garantizar que **una rama en gris no lo exige** — todavía no contiene nada que contar. **No nace ninguna regla `R*`**: no es doctrina sobre los datos, es el mínimo para que el atlas pueda presentarse a sí mismo. |
| **1.42.0** | 2026-08-14 | **Aditiva, y cierra un hueco que llevaba abierto desde la 1.35 por una razón que conviene retener: no faltaba la comprobación, faltaba **el dato que la hace decidible**. §4.1 declaraba huérfana a la serie sin ficha, pero nadie declaraba nada de la **ficha sin serie**, así que perder un fichero de película pasaba el CI en verde y solo lo cazaba una guarda del generador de `/agua/` —que vive en `app/` y no en el contrato—. La regla obvia era imposible de escribir porque es **falsa**: «toda capa con `series` las tiene todas» rompe `gas-interconexiones`, que publica 6 registros y 2 series a propósito. §3 gana por eso **`series_completas`**, que dice cuál de los dos casos es cada capa, y §4.1 gana la regla en su reverso, que bloquea. Lo destapó la auditoría exhaustiva del 2026-08-14; se había descartado una vez por imposible, y lo imposible era la regla, no el cierre. **No nace ninguna regla `R*`.** |
| **1.41.0** | 2026-08-14 | **Aditiva, y estrena una CLASE de dato.** Hasta hoy una capa solo podía publicar hechos de sus registros; §4 le da **`atlas.conjunto`**, para los hechos que la fuente publica **del conjunto** y no de ninguno de ellos. El caso que lo pide: el Boletín Hidrológico da el agua embalse a embalse y da además, en el mismo parte, la **energía hidroeléctrica almacenada** en todos ellos — que no es de Alcántara ni de Buendía, es de los 401 a la vez. Lleva **el mismo aparato que una ficha** (`__v`, `__f`, `fuentes` propias, `fecha_dato`) porque un hecho del conjunto no es más blando que uno de un registro, y **R7 rige igual**. Se descartaron las dos salidas obvias: un **registro nacional** obligaría a una capa que el panel enseñaría con una geometría que no significa nada, o a meterlo entre los 401 y corromper el recuento que la capa declara; y el **manifiesto** es un registro de capas, no datos — sin `__v`, `__f` ni `fuentes`, una cifra escrita ahí no se podría citar. La cautela que nace con el mecanismo: **un hecho del conjunto se refiere a ALGÚN conjunto, y no tiene por qué ser el que la capa publica** — la producción hidroeléctrica del mismo parte incluye centrales fluyentes ajenas a la capa, y se publica diciéndolo. §10 le da a `agua-embalsada` sus siete campos de conjunto, y anota que **`hidroelectrico` es del Boletín y no una deducción**: constante en 38 años, reparte los 401 en 108 y 293, y sumando por ella salen **las mismas cifras que publica el Ministerio**, comprobado al dígito. Prohibida en el bloque cualquier **equivalencia en hm³** de los GWh: exigiría el salto de cada central, y el salto no es la altura de la presa. **No nace ninguna regla `R*`.** *(De paso: el encabezado del documento se había quedado en 1.39.0 cuando §13 ya registraba la 1.40.0 — corregido aquí.)* |
| **1.40.0** | 2026-08-14 | **Aditiva, y de navegación.** §3 estrena `pagina` en la entrada de capa: dónde vive la página que cuenta esa capa entera, si la tiene. Nace de un fallo real de descubribilidad — `/agua/` llevaba un día publicada y **desde la portada del atlas no había manera de llegar**: se alcanzaba desde Método, desde el índice de la capa y desde el bloque sin JavaScript, que es como decir desde ningún sitio. La alternativa era un enlace por página en la barra del visor, que con tres capas convierte un instrumento en un menú. Al declararlo el manifiesto, el enlace sale **en el panel de la capa** —donde el lector ya ha mostrado interés por ella— sin que el código conozca capas por su nombre, que es la misma razón por la que `series` vive ahí desde la 1.35. De paso muere una tabla escrita a mano en `generar-fichas.mjs` que hacía este trabajo contradiciendo esa regla. **No nace ninguna regla `R*`.** |
| **1.39.0** | 2026-08-13 | **Aditiva, y cierra el último filón abierto del segundo horizonte.** Nace `conducciones-combustible` (§10): **11.112 km de gasoducto y 4.106 de oleoducto**, de la Base Topográfica Nacional, en **dos registros y no 3.106** — la BTN trae `nombre` a NULL en todas sus conducciones y bautizarlas por sus extremos fabricaría nombres que nadie ha dado, que es la misma decisión que hizo que el tendido eléctrico fueran dos y no 1.784. **Lo que más vale de esta capa es lo que estuvo a punto de no existir.** El filón se dio por VIABLE leyendo las especificaciones del IGN, y al medir los DATOS resultó falso: la **BTN100** traía 1.390 km de gasoducto y no llegaba ni a Huelva (233 km), ni a Bilbao, ni a cinco de las seis interconexiones — una muestra fragmentaria que publicada como «la red» habría sido una afirmación falsa con cartografía oficial detrás. Se cerró el filón con su medida y se pidió la **BTN Continua**, que sí la tiene: 11.116 km que cuadran con la red de transporte española y que pasan **a menos de 5 km de las siete plantas de GNL y de las seis interconexiones** que el atlas ya publica. La lección queda escrita porque volverá: **una especificación dice lo que el fichero PUEDE contener, no lo que contiene** — y la diferencia se mide, no se supone. §10 estrena `n_tramos` (cuántos objetos hay detrás de una ficha agregada) y `longitud_medida_km`, que se llama así porque el IGN no publica longitudes: la mide el atlas, va `parcial` por R2 y **mide sobre la geometría ya simplificada**, para que la ficha no diga una cifra que el mapa no dibuja. La simplificación va a **5 m y no a los 25** del tendido, elegida por lo que cuesta y no por lo que ahorra: a 25 m se comía el 0,33 % de la longitud —veinte veces más que en el tendido, porque estas conducciones curvan más que una línea recta entre torres— y a 5 m se queda en el 0,035 %, tirando aun así el 87 % de los vértices. El esquema existe sobre todo para **prohibir**: `titular`, `propietario`, `operador`, `presion_bar`, `diametro_mm` y `fase` — todo eso lo publica el operador, corporativo, y no se sustituye un dato por su parecido. **No nace ninguna regla `R*`.** |
| **1.38.0** | 2026-08-13 | **Aditiva, y sale de una mordedura que estuvo a punto de publicarse.** La segunda película del atlas —el flujo mensual de las interconexiones gasistas— reveló que el dibujante de gráficas estaba **cableado a la primera**: rotulaba «hm³», «agua embalsada, capacidad» y «partes semanales» **viniera lo que viniera**. Una serie de gas habría salido publicada, leyenda incluida, **midiendo GWh en hectómetros cúbicos**. §4.1 gana por tanto tres descriptores que el dato declara y la gráfica obedece —`unidades`, `etiquetas` y `paso`—, con la regla de que **si la serie no los declara, la gráfica calla en vez de rellenarlos**. Gana además **`magnitud`**, que es doctrina y no adorno: `estado` es una lectura en un instante (el agua de ese día: se compara, no se suma) y `flujo` es lo acumulado en un período (los GWh de ese mes: se suma, y su fecha es el PRIMER día del período que resume, no un instante en que se midiera nada). Dos series de la misma forma con sentidos distintos son una invitación a sumar lo que no se suma. Y `fuente.archivo` **admite lista**: sigue habiendo UNA fuente —un emisor, una operación estadística— pero su materialización archivada puede venir partida porque el emisor la publica así (CORES saca entradas y salidas en dos libros, y la película del Magreb necesita los dos para enseñar el flujo en ambos sentidos); lo prohibido sigue siendo empalmar emisores u operaciones distintas para cubrir tramos distintos del tiempo. Las **369 series de `agua-embalsada` se reescriben** con sus descriptores, en el formato de un punto por línea que el generador ya usaba: **siete líneas añadidas por fichero y ni una tocada**. **No nace ninguna regla `R*`.** |
| **1.37.0** | 2026-08-12 | **Aditiva, y cierra un hueco que llevaba abierto desde la release `.9`.** Nace `gas-interconexiones` (§10): las **seis conexiones físicas** de gas de España con el exterior. Lo que la hace posible es de dónde sale el perímetro: la **metodología estadística de CORES** —Plan Estadístico Nacional, luego primaria y no corporativa— enumera los puntos de entrada y salida del sistema, y esa lista ES el perímetro. **Es exactamente lo que `electricidad-interconexiones` no pudo hacer**: su hueco `f9` dice desde hace un mes que las interconexiones ya en servicio no están «porque no se ha localizado un instrumento que las inventaríe con sus extremos; el que lo publica es Red Eléctrica, fuente corporativa». En gas ese instrumento existe. **El hallazgo que la capa publica y que casi nadie tiene claro: el gasoducto Magreb-Europa no está parado, está INVERTIDO.** Leído mes a mes en la serie oficial: octubre de 2021 fue el último con importación (4.314,8 GWh), noviembre es un cero limpio — y el mismo mes Medgaz sube de 7.236 a 8.132 GWh —, mientras que por ese mismo tubo España **exportó 10.375 GWh a Marruecos en 2025** y sigue haciéndolo en 2026. De ahí la categoría propia `flujo_invertido`: «en servicio» a secas escondería el hecho, y «parado» sería falso. §10 estrena tres campos con doctrina: **`nombre_estadistico`**, porque el mismo tubo se llama «Zahara de los Atunes» en la estadística, «interconexión de Tarifa» en el regulador y «Magreb-Europa» en el BOE, y cruzar por el nombre fabricaría duplicados en silencio; **`codigo_entsog`**, que publica el IDENTIFICADOR y nada más —los datos de ENTSOG prohíben expresamente redistribuirse y derivarse, pero un identificador es un hecho y citarlo no arrastra licencia—; y **`municipio` que admite null**, que es el caso de Larrau, un paso de montaña en el límite jurisdiccional que ningún acto asigna a término municipal. **Los dos VIP no son registros**: son puntos virtuales de mercado sin ubicación, y su existencia obliga a declarar en cada ficha que **desde octubre de 2014 no hay dato oficial de flujo por punto físico** para Francia y Portugal — el cero de Badajoz o Tuy significa «se cuenta en otro sitio», no «no pasa nada». Y queda anotado un **«no existe» con nombres**: ningún conjunto de ámbito estatal con licencia abierta sitúa estos puntos (ENTSOG prohíbe derivar y sus campos de coordenadas son lienzo de su esquema, no geografía; el SIG de la CNMC va por certificado y VPN; Enagás es todos los derechos reservados; OSM es ODbL), así que la geometría sale del **DERA andaluz** para las dos del sur y del **Nomenclátor** para las otras cuatro, con la precisión declarada registro a registro. **No nace ninguna regla `R*`.** |
| **1.36.0** | 2026-08-12 | **Aditiva, y la primera capa del segundo horizonte.** Nace `residuos-radiactivos` (§10): las instalaciones del ciclo del combustible que **no** son reactores — los seis ATI en servicio, los cuatro ATI-100 autorizados y sin construir, el almacén previsto en Vandellós I, El Cabril, la fábrica de Juzbado y el **ATC de Villar de Cañas, que entra como histórico**. Es la mitad del ciclo que `nuclear` no contaba, y **el registro de una cancelación es su pieza central**: el 7.º PGRR declara literalmente que «se considera inviable disponer de una instalación de dicha naturaleza», y tres actos distintos la entierran — el plan, el Acuerdo que deja sin efecto la designación de 2011 (`BOE-A-2024-806`) y la Orden TED/547/2024 que declara conclusos los procedimientos. Publicar ese almacén como vivo habría sido el error que el atlas existe para no cometer; omitirlo, el contrario. **La lección que la capa deja escrita, y que vale para cualquier instalación futura: autorizar no es existir.** Los ATI se autorizan como modificación de diseño de su central, en **dos pasos** —ejecución y montaje primero, puesta en servicio después— y **casi nunca llega el segundo al BOE**: los cuatro ATI-100 tienen acto de 2024-25 y van en `desarrollo`, con hueco declarado sobre si ya operan (el plan los esperaba para 2026). Por lo mismo, **las fechas de operación de los seis ATI en servicio son las que declara el plan, no las de un acto archivado**, y cada ficha lo dice. **`capacidad` nace como TEXTO** y no como número: Trillo mide en contenedores, José Cabrera en posiciones de losa y El Cabril en celdas y metros cúbicos — un campo común obligaría a convertir entre unidades que no lo son sin suponer. **Un ATD no es un registro**: el plan lo define como el ATI de su central más una instalación complementaria, así que darle ficha propia contaría dos veces el mismo edificio. Y dos hallazgos de la fuente que ningún resumen traía: **la autorización de El Cabril no caduca por fecha sino por volumen** de celdas («hasta que se complete el volumen disponible»), y **su propio acto no la llama El Cabril** ni cita el municipio, sino «instalación nuclear de almacenamiento de residuos radiactivos sólidos de sierra Albarrana». **No nace ninguna regla `R*`.** |
| **1.35.0** | 2026-08-10 | **Aditiva, y la primera que cambia la CLASE de lo que el atlas publica.** Nacen las **series temporales** (§4.1): la película de un registro junto a su foto. Un fichero por registro en `datos/series/<capa>/<slug>.json` —el troceo es el visor estático: la gráfica pide UN fichero—, con tres reglas que son doctrina: **solo hay película donde hay negativo** (la serie exige su histórico completo en una fuente primaria archivada; nada de reconstruir ni empalmar), **los huecos se quedan huecos** (la interpolación es el dato inventado con mejor coartada), y **R11 — la foto y la película no se contradicen** (§7.11, bloquea): el último punto debe cuadrar con el campo de la ficha que la serie declara, y la última fecha con su `fecha_dato` — la comprobación que impide que el dossier diga una cifra y la gráfica termine en otra. La capacidad viaja EN la serie y no como constante, porque cambia (Contreras, 874→361 hm³ en 2019). La primera serie es la reserva semanal de `agua-embalsada` desde 1988, cuyo histórico ya estaba en `fuentes/` desde la release `.18`. **No releva a la ficha**: los campos instantáneos siguen en la capa con su verificación, y R7 sigue prohibiendo derivados también en la gráfica. |
| **1.34.0** | 2026-08-09 | **Aditiva.** `cables-submarinos` crece de 6 a 9 aterrizajes y su `emplazamiento` **admite `null`**: el esquema exigía playa o puerto porque todos los actos conocidos la nombraban, y han aparecido dos que no — el anuncio del BOC de **Canalink Base 6** (Tenerife-El Hierro) sitúa por términos municipales, y el de **Sagunto** (CNC02/25/46/0013) también. Cuando el acto no baja de ahí, `emplazamiento` va a `null` y `geo_precision` a `municipio`, que es exactamente lo que la precisión existe para declarar. El amarre herreño del Base 6 sí tiene playa —el proyecto básico de la propia información pública la nombra («Playa de El Salto de Tamaduste», «Playa del Salto» en el Nomenclátor)— y entra en `paraje` con el mismo trato que el nombre de Grace Hopper en Sopela. **Primer expediente canario de la capa**: en Canarias el DPM-T lo tramita el Gobierno canario y su anuncio no lleva código CNC — la referencia es la del propio BOC. **No nace ninguna regla `R*`.** |
| **1.33.0** | 2026-08-09 | **Aditiva, y la primera que no protege el dato sino a quien lo lee.** Nace la comprobación **§7.10** (bloquea): toda `url` de fuente y todo `debate_url` han de ser `http`/`https`. Sale de una auditoría de ataques sobre el propio visor, no de un incidente: se comprobó que un `url` con esquema `javascript:` **atravesaba las dos defensas que parecían cubrirlo** —el `"format": "uri"` del esquema lo acepta porque `javascript:alert(1)` es una URI perfectamente válida, y el escapado convierte comillas pero no toca el esquema de una URL— y llegaba intacto al `href` de la ficha, que desde la 1.29 no es solo un panel sino **4.548 páginas HTML servidas por el dominio del atlas**. §9 gana la otra mitad del mismo hallazgo, como **aviso**: el `color` de una categoría tiene forma comprobada (hex de 3, 4, 6 u 8 dígitos), porque un valor con un `;` dentro viaja hasta un atributo `style` y allí abre una declaración nueva. **Ningún registro cambia** y ningún dato publicado incumplía ninguna de las dos: los 8.658 enlaces del atlas son http/https y sus 61 colores, `#RRGGBB`. **No nace ninguna regla `R*`:** no es doctrina sobre el dato, es higiene de lo que se publica con él. |
| **1.32.0** | 2026-08-09 | **Aditiva.** `desaladoras` crece de 6 a 10 registros y pasa a llamarse por lo que ya es: **las IDAM de interés general del Estado con acto localizado**. Entran las cuatro de la **Mancomunidad de los Canales del Taibilla** — organismo autónomo adscrito a MITECO, cuya web oficial recibe el mismo trato que la ficha de centrales de MITECO en `nuclear` —, y entran **con mejor geometría que las de Acuamed**: el Nomenclátor nombra las dos de San Pedro del Pinatar, y las dos de Alicante van al topónimo del paraje de **Agua Amarga** que la propia MCT declara («ubicadas en el paraje de Aguamarga, en el término municipal de Alicante») — paraje las cuatro, mientras las seis de Acuamed siguen en municipio con su hueco. §10 estrena **`capacidad_m3_dia`**: la MCT y la DIA del Bajo Almanzora publican en m³/día, y un campo no cambia de unidad según el registro — conviven dos campos de capacidad, cada acto en su unidad, **sin conversión** (exigiría suponer días de operación); la cifra del Bajo Almanzora se muda de `claves` al campo nuevo. `demarcacion` deja de ser obligatoria: ningún acto la declara para las de la MCT. **No nace ninguna regla `R*`.** |
| **1.31.0** | 2026-08-09 | **Aditiva, y con ella EL HORIZONTE DE CAPAS QUEDA COMPLETO.** Nace `icts` (§10): las **28 ICTS del Mapa 2025-2028**, cuyo perímetro es el Anexo I del acuerdo del Consejo de Política Científica, Tecnológica y de Innovación — el «documento a documento desde el Mapa» que el plan preveía resultó innecesario: el acuerdo ES el documento, con tipología, titular y localización de las 28 (y sus 64 infraestructuras, que van en claves verbatim). **Estrena dos piezas de vocabulario, ninguna por capricho.** El árbol **`ciencia`**, séptimo del atlas, añadido al final para no mover la vista de arranque del visor. Y la precisión **`autonomia`** (§5, §6.6), hermana intermedia entre `municipio` y `pais`: el Mapa sitúa por comunidad y nada más dentro de ella, y **adivinar el municipio por notoriedad —el GTC «se sabe» que está en el Roque de los Muchachos— es el relleno por verosimilitud que el principio 1 prohíbe**: donde el Nomenclátor sí nombra la instalación hay `paraje` (Roque de los Muchachos, Calar Alto, Yebes, Doñana); donde no, `autonomia` con su hueco. Las Bases Antárticas van en `ilustrativa` sobre la isla Livingston que las fuentes nombran, con la capa en `ambito: mundo` — primera vez que el atlas publica un punto en la Antártida. IDISOM entra en `desarrollo` porque el propio acuerdo la declara «a constituir» (nota iv): **el Mapa también publica lo que aún no existe, y la fase lo dice**. **No nace ninguna regla `R*`.** |
| **1.30.0** | 2026-08-09 | **Aditiva.** Nace `desaladoras` (§10), y nace **derribando el último «sin inventario único» que tenía salida**: el plan daba la capa por bloqueada porque nadie publica el censo de la desalación, pero la **Orden TED/157/2023** nombra las seis IDAM de interés general del Estado operativas y encomendadas a Acuamed, y ese acto ES el perímetro — el mismo movimiento que desbloqueó `red-electrica` (la premisa oculta «nadie lo publica» era falsa) aplicado esta vez a un acto y no a una cartografía. **La capa no afirma el censo**: las cuatro de la Mancomunidad de los Canales del Taibilla, las autonómicas, las canarias y las privadas quedan declaradas como ampliación pendiente, con las dos de San Pedro del Pinatar ya capturadas por el barrido del Nomenclátor. Cada capacidad lleva **la fecha de su acto** — Carboneras retrata 1999, Torrevieja 2022 — y Bajo Almanzora no lleva campo de capacidad porque su DIA la publica en m³/día (la lección del Musel: un campo no cambia de unidad según el registro). **Y una trampa nueva que queda escrita: el punto de municipio también puede estar mal.** La primera pasada de geometría ancló «Águilas», «Carboneras» y «El Ejido» en homónimos de Madrid, Huesca y León — el barrido archivado conserva la pasada descartada, y desde ahora los municipios ancla se filtran por `tipo=Municipio` y se validan contra un recuadro de la provincia. **No nace ninguna regla `R*`.** |
| **1.29.0** | 2026-08-09 | **Aditiva, y la segunda mayor tras la del transporte: tres capas de una tanda** — `gas-almacenamiento`, `bases-eeuu` y `seguimiento-espacial` (§10), las tres que quedaban del horizonte con acto alcanzable. **La primera trae la primera geometría de concesión publicada vértice a vértice desde el propio BOE**: los anexos de los reales decretos de Gaviota (ocho vértices, 4.229 ha) y Castor (cuatro, 6.519 ha) definen el polígono `exacta`, en horario en el acto y reorientado a RFC 7946 al migrar, como los dominios mineros. Su perímetro lo fijan dos clases de acto: la **resolución anual de capacidad de la DGPEM** (los cuatro básicos, con sus GWh — y resultó que eran cuatro: Marismas está en la resolución con 831 GWh, contra la lista de tres que traía el plan) y los actos propios de **Castor**, cuya ficha registra el expediente entero: concesión (2008) → sismicidad, extinción e hibernación (RDL 13/2014) → desmantelamiento (2019) → sellado de pozos autorizado (2025). **La segunda pone el tablero donde le tocaba**: las dos bases del anejo 2 del Convenio de Cooperación para la Defensa de 1988, con cada despliegue en `claves` y su protocolo — y la doctrina dicha en §10: **se registra el régimen, no la guarnición**. Sin `fase` por esquema. **La tercera entra por la doctrina de `centros-datos`** — la estación que un instrumento nombra y sitúa —, con Maspalomas publicada `parcial` y su ficha diciendo por qué es el registro más flojo: la sostiene una licitación del INTA, no un tratado. **Desaladoras e ICTS quedan fuera con motivo escrito**: sin inventario único no hay perímetro que un acto sostenga. **No nace ninguna regla `R*`.** |
| **1.28.0** | 2026-08-09 | **Aditiva.** Nace `refinerias` (§10): los **diez complejos de refino de petróleo** del país, la primera capa nueva desde que la 1.27 dejó escrito que leer una licencia es leer **cómo obliga a citar** — y la primera en pagarlo por adelantado: la atribución de CORES es de fórmula fija, «Fuente CORES (www.cores.es)», y así va en el manifiesto desde el primer día. **El perímetro lo fija un código de actividad y no el criterio del atlas**: entra lo que el PRTR-España —registro obligado por el Reglamento (CE) 166/2006, primaria por la doctrina de la enmienda 1.16— clasifica como actividad **1.a.i con CNAE 19.20**, exactamente diez, coincidentes uno a uno con la serie de capacidad de CORES; sin ese código, «refinería» se cuela en todo, empezando por las de aluminio y las de mantecas del mismo registro. **La coordenada es la del registro** (`geo_precision: exacta`), corroborada en Muskiz y Tarragona por topónimos del Nomenclátor a menos de un kilómetro — en los otros ocho el IGN no nombra la instalación, y el barrido por recuadro que lo demuestra queda archivado, porque **un cero del IGN no prueba ausencia** si no se confirma por bbox. La suma de las diez capacidades se cuadró contra el total nacional de la propia serie antes de publicar (79.200 kt en 2025). **Tenerife entra en `parado` y no se omite**: su propia fuente la mantiene en la serie con estatus legal y sin permisos para arrancar, y esa distancia —capacidad que figura, planta que no opera— es la clase de hecho que este atlas existe para registrar. La `fase` de las otras nueve va `parcial` con hueco declarado (f9): ninguna fuente la publica instalación a instalación. **No nace ninguna regla `R*`.** |
| **1.27.0** | 2026-08-08 | **Aditiva, y corrige un incumplimiento real que la 1.26 acababa de destapar.** §3 estrena la fila de **`atribucion`**, que hasta hoy era un campo sin doctrina: se rellenaba a gusto y **no lo pintaba nadie**. Las dos cosas estaban mal. La licencia del IGN no solo concede el uso —eso se había comprobado bien—: **fija la forma del reconocimiento**, y para obra derivada exige el literal «Obra derivada de \<producto\> \<fecha\> CC-BY 4.0 \<productores\>», que además obliga a repetir en los metadatos. Adif exige «© Administrador de infraestructuras ferroviarias». **Comprobar que una fuente es compatible no es lo mismo que leer cómo obliga a citarla**, y durante veintidós capas se hizo lo primero y no lo segundo. Se corrigen **15 atribuciones**: tres de BTN, ocho de NGBE, dos de BDLJE, la de Adif y la de Puertos del Estado, que ahora nombra su licencia. **Cuatro de ellas ni siquiera mencionaban al IGN**, lo que es peor que mencionarlo con la fórmula equivocada. Y la atribución **se ve**: viaja con la FUENTE de MapLibre y no con el pie, así que aparece solo mientras la capa está encendida —exactamente lo que la licencia pide, «visible junto con los datos, a pie de mapa»—; un crédito fijo en el pie afirmaría que el atlas usa la BTN incluso con esa capa apagada. **No nace ninguna regla `R*`:** la forma correcta de cada emisor la dicta un documento externo y no se puede derivar de los datos, así que vive en `fuentes/PROCEDENCIA.md` y no en una comprobación. |
| **1.26.0** | 2026-08-08 | **Aditiva, y de las que no traen capa: el atlas se aplica a sí mismo lo que exige a sus fuentes.** Nace `fuentes/PROCEDENCIA.md` (§2), una ficha por capa que contesta **de dónde sale, con qué licencia y qué obliga, y qué hay que saber antes de citarla**. La información existía entera y **repartida en cinco sitios ordenados por criterios distintos** — el manifiesto por capa, los `__f` por registro, §10 por campo, el changelog **por release** y `fuentes/` por fecha de captura —, de modo que la pregunta más natural que se le puede hacer a un dato («¿de dónde sale esto y qué me obliga?») se contestaba cruzando 1.831 líneas de changelog con el manifiesto. **Lo que se añade es la síntesis, no el hecho**: la licencia autoritativa sigue siendo la del manifiesto (§3) y la ficha enlaza en vez de copiar, que es D3 aplicada a la documentación. El documento lleva **dos lectores en dos secciones separadas**: la ficha, para quien reutiliza; y el **cuaderno de obtención**, para quien mantiene — el endpoint exacto, el formato, el CRS y la trampa, que hasta hoy solo vivían en la narración de una release y se encuentran cuando ya no hacen falta. **§7 estrena la comprobación 9, que BLOQUEA:** toda capa con `fichero` tiene su ficha, y toda ficha su capa. Se separa a propósito de la 7, que avisa siendo también «de archivo»: en una cita cabe el retraso —llega tarde el PDF, no el hecho— y en la procedencia no, porque quien publica la capa lo sabe en ese momento o no debía publicarla. **Comprueba que la ficha existe, no que diga la verdad**, y es suficiente: el fallo real no es la ficha mentirosa sino la que se escribe «luego» y nunca se escribe. Sin fixture GeoJSON —no mira dentro de una colección, compara el manifiesto con un documento en prosa—: se ejercita importando la función pura, como ya se hace con `vigilar.py`, y una de las cinco pruebas nuevas existe solo para garantizar que **una rama en gris no exige procedencia**, que si no el horizonte de §3 sería inhabitable. Pruebas **26 → 31**. Y queda medido, al escribirlo, algo que nadie había comprobado: las **8.497 citas con URL de las 22 capas están archivadas, el 100 %** — §7.7 no tiene un solo aviso pendiente. **No nace ninguna regla `R*`**: no es doctrina sobre los datos, es higiene del repositorio, del mismo rango que §7.8. |
| **1.25.0** | 2026-08-07 | **Aditiva, y la mayor desde la 1.1: nace la rama `transporte`**, que el árbol no tenía, con tres capas — `puertos`, `rte-t` y `ferrocarril` (§10). Tapa el hueco más grande que le quedaba al atlas: por los puertos de interés general pasa la mayor parte del comercio exterior español y hasta hoy no había nada. **Tres lecciones que valen más que las capas.** PRIMERA, de `puertos`: el servicio rotula cada recinto con un campo que vale «DEUP» o «Desafectacion» y **no documenta qué distingue**, siendo que desafectar es SACAR suelo del dominio público —48 de 164 recintos—. No se supone: lo resuelve el propio publicador, que titula el conjunto «Zonas de servicio portuarias de España», y el campo va **verbatim** con la abstención declarada. **Cuando la fuente no explica un campo que cambia el sentido del dato, se publica el campo y se dice que no se interpreta.** SEGUNDA, de `rte-t`: el PDF del DOUE **no se puede parsear** —«rotated text», como en el PERTE— y el texto plano **no vale**, porque aplasta las columnas y «A Coruña X Global Básica» no dice cuál valor es el aeropuerto y cuál el puerto; lo resuelve el **espejo del BOE**, que sirve la tabla en `<td>` de verdad. TERCERA, de `ferrocarril`: el vínculo entre línea y tramo está en el GML **en los dos sentidos y no son equivalentes** —la lista de la línea reclama 188 tramos por duplicado, a alguno siete líneas—, así que coser por el lado equivocado daba **47.357 km** de red donde hay 24.136. **Lo delató el total, no el código**: la red de Adif no llega a 25.000 km. §6.5 les da una fila a las tres, con `activo` **no aplica** por tres motivos distintos que no deben fundirse. Y quedan pagados dos avisos del IGN: **un cero suyo no prueba ausencia** (devuelve 200 vacío cuando se le aprieta, y «Albacete» salió como inexistente) y **la media de los vértices de un municipio no está dentro del municipio** — Castelló de la Plana incluye las islas Columbretes y el promedio se va al mar. **No nace ninguna regla `R*`.** |
| **1.24.0** | 2026-08-07 | **Aditiva, y de las que no traen capa: una regla vieja gana diente.** §9 exige el `color` de cada categoría **desde la 1.9** y nadie lo comprobaba nunca — que es literalmente lo que §8 llama «prosa disfrazada de garantía». El precio se pagó otra vez y en la misma semana: `cables-submarinos` nació con sus dos categorías **sin color** y estuvo **una release entera** pintándose con el color de reserva, indistinguible de cualquier otra capa, sin que nada lo dijera. Es la **tercera** vez que el mismo fallo entra por la misma puerta: la primera la cuenta `app/src/mapa.js` («Cuatro capas, indistinguibles»). Ahora `validar.py` lo **AVISA y no lo bloquea**, a propósito — el dato es correcto y lo único que se pierde es distinguir la capa; bloquear pararía la publicación de un registro bueno. Se comprueba **una vez por categoría y no por registro**, porque 1.382 avisos idénticos son la manera más fácil de que un aviso deje de leerse. Y se mira lo que se **usa**, no lo declarado: `cables-submarinos:trazado` sigue **sin color a propósito**, porque el color es «con el que el mapa la pinta» y una categoría que no pinta nada no tiene color que declarar — el aviso saltará el día que alguien la use, que es cuando hace falta. Ese es además el fixture que ejercita la comprobación: pruebas **25 → 26**. |
| **1.23.0** | 2026-08-07 | **Aditiva.** `recurso-eolico` y `recurso-solar` dejan de existir y nacen `parques-eolicos` y `plantas-solares` (§10). **No es un renombrado: es un cambio de OBJETO**, y decirlo así es el contenido de la enmienda. «Recurso» es cuánto sopla el viento — un **campo continuo** que solo existe como ráster, de modo que convertirlo en zonas lo tendría que hacer el atlas. La salida que el plan daba por buena, la zonificación ambiental del MITECO «en shapefile y vectorial», **resultó falsa al comprobarla**: dentro del ZIP hay dos GeoTIFF y un léeme que dice «los ráster clasificados». Lo que sí existe es la INSTALACIÓN, y la trae la misma BTN que desbloqueó `red-electrica`: `0713S Central eléctrica`, geometría de superficie, capturada «por el contorno exterior de su recinto». **Los dos cambios que pesan más que el id:** de `dotacion` a `actividad` —el viento es una condición permanente del territorio, pero **un parque se desmantela**— y de `ilustrativo` a `verificado` —eran trazos imaginados a mano y son perímetros de fuente primaria—. Cambiar solo el título habría dejado el mismo error escrito de otra forma. §8 estrena la regla que ya se había usado dos veces sin escribirla: **un id se puede renombrar mientras no haya publicado un registro**, porque lo que §8 protege es la estabilidad de las citas y a un id sin datos no lo cita nadie. **Ninguna de las dos capas añade un campo**, y sus esquemas existen para PROHIBIR: `potencia_mw` la primera, que es la cifra que cualquiera espera de un parque eólico y **no está en la fuente** (y es también por lo que los ids no son `eolica-instalada`/`solar-instalada`). `superficie_ha` queda prohibida **por derivada**, como `porcentaje_llenado` en `agua-embalsada`; estuvo a punto de colarse como `superficie_recinto_ha`, así que ese nombre también se cierra — **rebautizar un derivado no lo deja de derivar**. La geometría **no** se simplifica, al revés que el tendido: allí quitar vértices costaba el 0,017 % de la longitud, aquí costaría el 0,23 % de superficie y **dejaría 29 parques convertidos en cuadrados**. Alcance con las dos cifras siempre juntas: eólica 1.382 de 1.389 (**100 % de la superficie**), termosolar 44 de 45, fotovoltaica 1.206 de 3.165 (**76 % de la superficie**, porque las anónimas son las pequeñas). **No nace ninguna regla `R*`.** |
| **1.22.0** | 2026-08-07 | **Aditiva.** Nace `red-electrica` (§10), y nace derribando un bloqueo que llevaba desde el primer día y que estaba **bien razonado y mal concluido**. El motivo escrito era impecable —el mallado lo publica Red Eléctrica, `corporativa`, y R3 no la deja sostener un `confirmado`— pero descansaba en una premisa que nadie llegó a escribir: *que no lo publica nadie más*. Lo publica el **IGN**, en la Base Topográfica Nacional, tema Energía, con licencia de la Orden FOM/2807/2015 «compatible con CC-BY 4.0» y sin CAPTCHA ni modal. **R3 no se discute: se cambia de emisor.** De ahí la lección que §10 deja anotada — una frase que da por cerrado el mundo tiene que decir dónde miró. **La novedad de fondo es qué clase de fuente es una carta topográfica:** el IGN entraba ya 456 veces en el atlas y siempre como **Nomenclátor**, que es un *registro* y está en la lista de §6.1; la BTN es **cartografía**, sigue siendo `primaria` por ser producción oficial de la agencia del Estado, pero **con el alcance recortado a lo que mide** — de quién es la línea no dice nada, y por eso `titular` y `propietario` están prohibidos en el esquema. **El título también cambió el día de publicar:** «Red eléctrica (transporte)» afirmaba una categoría JURÍDICA que ningún mapa certifica, y pasó a «Tendido de alta tensión (220 y 400 kV)», que es lo que la fuente sostiene — tercera vez en la misma semana que la acotación la impone la fuente y no el gusto (`cables-submarinos` registra aterrizajes; `agua-embalsada`, el agua). Son **dos registros de tendido y no 1.784** porque las 18.505 líneas de la BTN traen `nombre` a nulo y bautizarlas por sus extremos habría fabricado nombres que nadie ha dado; y **657 subestaciones de las 718** en las que termina un tramo de 220/400 kV, con el filtro sacado de la propia norma de captura del IGN y las 61 sin nombre declaradas en vez de omitidas. `longitud_km` va **`parcial` a propósito**: el IGN no publica ninguna longitud, la mide el atlas, y **medir sobre un dato primario no convierte la medida en primaria** — un `confirmado` ahí incumpliría R2. La geometría del tendido va `generalizada` por simplificada a 25 m: el 85 % de los vértices por el 0,017 % de la longitud, porque la BTN captura un vértice por torre y un tramo recto de cuarenta torres no tiene cuarenta formas. §6.5 le da su fila: `activo` **no aplica**, y aquí por un motivo que conviene retener — la fuente **no dice si el tendido está energizado**, y un `false` por falta de dato es justo la mentira que R7 evita. **No nace ninguna regla `R*`.** |
| **1.21.0** | 2026-08-07 | **Aditiva.** Nace `agua-embalsada` (§10), y nace **por una pregunta mejor formulada**. La ruta obvia —el shapefile del Inventario de Presas y Embalses del SNCZI— está tras un **ALTCHA**, un CAPTCHA de prueba de trabajo que el Ministerio puso a propósito y que no se salta; y otras cinco vías fallaron (URLs viejas a 404, no hay WFS de embalses, el ArcGIS REST del Ministerio no sirve esa capa, el PDF resumen agrega por cuenca). **La sexta fue darse cuenta de que el shapefile no era el dato:** «agua embalsada» no es la geometría del vaso, es el agua que hay dentro, y eso el MITECO lo publica en abierto y sin formulario en el histórico del **Boletín Hidrológico Semanal** — un parte por embalse y semana desde 1988 (más de setecientos mil puntos, y unos cuantos cientos más con cada refresco: la cifra exacta la cuenta el validador, no este párrafo). Se publican **308 embalses de los 401** del Boletín, el **86 % de la capacidad embalsada de España**, y los 93 restantes se declaran uno a uno en el manifiesto. La base **no lleva coordenadas**: la geometría se cose por nombre contra el Nomenclátor del IGN, con una normalización de **cuatro lenguas** —nueve prefijos (`Embalse`, `Pantà`, `Presa`, `Pantano`, `Encoro`, `Balsa`, `Charca`, `Embassament`, `Bassa`) y el sufijo vasco `urtegia` con su genitivo— y **cada punto se verifica** preguntando al servicio del propio Ministerio en qué demarcación cae. Esa vuelta cazó seis emparejamientos que casaban de nombre y señalaban un embalse de otra cuenca, entre ellos un «San Lorenzo» del Ebro que era el de Tenerife. §6.5 le da su fila: `activo` **no aplica**, porque un embalse es una reserva y no una instalación que se explote. El esquema prohíbe `porcentaje_llenado` **por derivado**, igual que R7 con `activo`: sale de dividir las dos cifras que la capa ya publica, y escribirlo sería la doble fuente de verdad que D3 descartó. |
| **1.20.0** | 2026-08-07 | **Aditiva.** Nace `cables-submarinos` (§10), y nace **distinta de su propio boceto**: el contrato la imaginaba `mixta`, con `sistemas[]`, `destinos[]` y un trazado que dibujar. Las fuentes obligan a otra cosa. **El recorrido de un cable submarino no tiene fuente compatible** —TeleGeography es CC BY-NC-SA, vetada por `datos/LICENCIA-DATOS.md`— y lo que sí publica una fuente primaria es **dónde toca tierra**, porque ocupar dominio público marítimo-terrestre exige un acto administrativo. Un registro por **aterrizaje**, en puntos, con los arrays convertidos en campos planos; la categoría `trazado` (§9) queda declarada y **sin usar**. La acotación no la elige el gusto: los actos de Costas cubren TODO cable que ocupe el dominio, incluidos uno atado al puente de Txatxarramendi y dos que cruzan las rías del Bidasoa y de Oriñón, así que **entra el que une territorios separados por mar** y no el cruce de una ría. Y un cable que atraviesa aguas españolas **sin aterrizar aquí no entra**: lo decidió el Europe India Gateway, 15.000 km por Galicia, el Estrecho y Alborán que tocan tierra en **Gibraltar** (BOE-A-2010-2040) — se archiva, se cita y se queda fuera, como la subasta IF24. `sistema` **admite hueco a propósito**: un acto de Costas autoriza una ocupación, no bautiza un cable, y el expediente de Santander no nombra el sistema; poner ahí un nombre de la prensa sería justo lo que la capa evita, así que va con fuente `tipo: hueco` y R4 lo baja a `parcial`. §6.5 le da su fila, con el aviso de que la `fase` es la del cable y no la de la playa. |
| **1.19.0** | 2026-08-07 | **Aditiva.** Nace `idioma` (§10), la última casilla del horizonte y **la primera capa `analisis` del atlas**. Nace además cambiada de significado por una licencia: «El idioma como activo» pedía demolingüística, y la del español la publica el Instituto Cervantes bajo un aviso legal que dice que el acceso «no otorga a los usuarios ningún derecho» —sin conjunto de datos en `datos.gob.es`—, así que republicarla bajo CC BY 4.0 es lo que `datos/LICENCIA-DATOS.md` prohíbe. Tercer muro de licencia del atlas, tras el ShareAlike de la CNMC y el NonCommercial de TeleGeography. §6.1 gana la enmienda que faltaba, y no discute autoridad sino **copia**: **un texto legal no tiene dueño** —art. 13 del TRLPI, que excluye de la propiedad intelectual las disposiciones legales y los actos de los organismos públicos—, así que constituciones y tratados se archivan enteros y se republican sin permiso. La capa pasa a cartografiar el **ESTATUTO** del idioma, y desmiente el mapa de un solo color: **México no declara idioma oficial** (es «lengua nacional» por ley, a la par que las indígenas) y **Argentina, Chile y Uruguay no nombran la lengua**. §9 estrena `estatuto`, **nueve valores** porque hay nueve arquitecturas distintas y ninguna se inventó de antemano. Nace `geo_precision: pais` (§5, §6.6), hermano de `municipio` una escala más arriba y **fuera de R9** por lo mismo: el objeto es el Estado entero y el punto solo existe para poder pinchar el registro; se rechaza con él la tentación de los polígonos de países, que habrían metido al atlas en cada disputa fronteriza del planeta. Y nace **§6.7**, la sección que define por fin qué sella `analisis`: **marca la TESIS, no rebaja la prueba** — reverso exacto de `ilustrativo` (R5), que baja el listón de la evidencia y no toca la interpretación. Declarado sin adorno: §6.7 es **doctrina sin CI**, porque `validar.py` no comprueba nada sobre `analisis` ni `debate_url`. |
| **1.18.0** | 2026-08-06 | **Aditiva.** Nace `perte` (§10), y con ella se decide qué acota la palabra «acotado» que la capa arrastraba desde la demo: **acota lo que un documento público sitúa**. Se descartan por el camino la lista de los 100 mayores perceptores del PRTR (obligatoria por el art. 25 bis del Reglamento MRR, y **sin ubicación**) y el mapa del PRTR de MITECO (un Power BI incrustado: no hay conjunto de datos que citar). Queda el listado de la Propuesta de Resolución Definitiva del **PERTE VEC — Sección B 2024**, que trae **provincia y municipio fila a fila**. §6.1 gana la tercera enmienda de su familia: **una propuesta de resolución es documento oficial y no es el acto** — sostiene un confirmado sobre lo que PROPONE, no sobre la concesión, y el matiz va dentro del nombre de los campos (`subvencion_propuesta`) porque un asterisco no lo lee nadie. Con un aviso que no es de esta capa sino de cualquiera: **hay documentos oficiales que no son una tabla aunque lo parezcan**. Este es un registro por comisiones de verificación donde una aparición posterior REVISA a la anterior; contar filas da 61 y los expedientes vigentes son 57. Lo demuestran sus propios TOTALES, que cuadran al céntimo en las seis comisiones. §6.5 le da su fila: `activo` **no aplica**, porque un plan de inversión es dinero comprometido, no una instalación. §9, un vocabulario de un solo valor (`plan_inversion`). |
| **1.17.0** | 2026-08-06 | **Aditiva.** Nace `hidrogeno-produccion` (§10): las siete plantas de electrólisis españolas de la lista de la Unión — **siete, no cinco**, porque dos de los cinco proyectos nombran y sitúan dos plantas cada uno. §6.1 gana la consecuencia práctica de la enmienda 1.16, y esta cambia **cómo se redacta una ficha**, no si la fuente vale: **un registro obliga a publicar, no a certificar**. Cuando quien declara es una empresa, su texto trae tres cosas mezcladas —el proyecto, la ambición y el argumento de venta— y solo la primera llega a un campo numérico; la ambición va a `claves` **verbatim y con su condicional intacto**, y la evaluación promocional no se publica. El caso que lo obligó: el valle asturiano declara **1 GW de ambición y 150 MW de proyecto en el mismo párrafo**, y la cifra que circula por ahí es la primera. §9 estrena un vocabulario de **un solo valor** (`electrolizador`), como ya hacía `recurso-eolico`. §6.5 le da su fila, con el aviso de que aquí `fase: produccion` es el peldaño del expediente y no «producir hidrógeno» en abstracto. **No nace ninguna regla `R*`**: las que hacen falta ya existen, y añadir una por no romper la racha sería exactamente la prosa disfrazada de garantía que §8 prohíbe. |
| **1.16.0** | 2026-08-06 | **Aditiva.** Nace `hidrogeno-red` (§10) —la capa que se llamaba `h2med` y no podía seguir llamándose así: de sus 3.268 km, **2.634 son la red troncal española**, que no es el H2Med—. El perímetro no lo elige el atlas: lo fija el Acuerdo del Consejo de Ministros de 30-07-2024 (BOE-A-2024-19047), que habilita a Enagás para **cinco** proyectos, dos de ellos —las cavernas de sal 9.24.1 y 9.24.2— que el relato público del H2Med **no menciona nunca**. §6.1 gana el reverso de la enmienda 1.15: si aquella dijo que el comunicado de un gobierno no es primario, esta dice que **un registro que una norma OBLIGA a publicar sí lo es**, aunque viva en una web — la plataforma de transparencia PCI-PMI existe por el **artículo 23 del Reglamento (UE) 2022/869**, que enumera de la a) a la g) lo que debe contener, empezando por la información geográfica. Con dos cautelas que vienen con ella: la obligación **no alcanza a lo que se sirve junto** (la capa PLATTS del mismo visor es de S&P Global y no entra), y un registro **puede publicar y advertir a la vez**. Esa advertencia —«la representación GIS no prejuzga y puede no coincidir con el trazado final»— obliga a estrenar un valor de `geo_precision`: **`proyectada`** (§5, §6.6, §9), dentro de **R9**. Ninguno de los cinco anteriores servía, y por el mismo motivo que hizo nacer `generalizada` en la 1.14: `ilustrativa` habría hecho mentir a la ficha —«trazado a mano alzada»— sobre cartografía que nadie dibujó a mano. La distinción que conserva es de **tiempo**, no de detalle: las otras cuatro dicen cuánto se afina un contorno; `proyectada` dice que **el terreno todavía no puede desmentirlo**. Y nace **R10**: en una capa con lineales, `longitud_km` cuadra con su propia geometría al 15 %. Sale de una trampa real — el servicio publica un `SHAPE.LEN` en metros de **Web Mercator**, inflado por la latitud hasta un 38 %, con el que BarMar «mide» 518 km en vez de 382. La regla no persigue un decimal: persigue un cambio de unidad o de proyección. |
| **1.15.0** | 2026-08-06 | **Aditiva.** Nace `centros-datos` (§10) con una regla de entrada estrecha y explícita: **entra el centro que un acto administrativo nombra**, y nada más. La casilla obligó a decidirlo porque **España no tiene registro público de centros de datos** —la base europea del art. 12 de la Directiva 2023/1791 se publica agregada por Estado miembro, MITECO no lleva censo y las cifras de mercado son de la patronal—. §6.1 gana la enmienda que faltaba: **una nota de prensa de una administración no es `primaria`**; lo primario es el acto, no su anuncio. La escribió el caso catalán, con sus «26 proyectos y 2.000 MW» sin un solo expediente detrás: hasta ahora el atlas solo había tenido que rechazar fuentes privadas, y la trampa pública es peor porque parece oficial. §10 deja además fuera a los tres solicitantes de centros de datos que el concurso de capacidad de demanda **sí nombra** —CPD4GREEN, Benbros DC y ACS DC Infra, los tres excluidos—: esa resolución define una solicitud en un nudo, no un centro en un sitio, que es el límite de §6.6 aplicado por segunda vez. §6.5 y §9 dan su fila y sus tres categorías. |
| **1.14.0** | 2026-08-06 | **Aditiva.** Nace `generacion-electrica-provincia` (§10), la primera **coropleta** del atlas: 52 provincias con su mezcla de generación por tecnología. Nace **de una casilla imposible** — el horizonte pedía potencia INSTALADA por provincia y no la sostiene nadie con licencia compatible: MITECO desagrega generación, no potencia; **la CNMC publica potencia pero bajo CC BY-SA**, ShareAlike, vetada por `datos/LICENCIA-DATOS.md`; REE llega a provincia y es `corporativa` (R3). Que el atlas se detenga ante la **licencia de un organismo público** es lo nuevo: hasta hoy solo le había pasado con fuente privada. §3 estrena `fondo`, marca de manifiesto para la capa que cubre el territorio entero y **cede el clic** a las que tiene encima — sin ella el visor tendría que conocerla por su nombre. §6.5 le da su fila: «no aplica», porque una provincia no es una instalación. §9 sus ocho categorías, que son la **tecnología dominante** y por eso se comprueban contra el argmax de las cifras del propio registro: un derivado solo se escribe si el CI puede desmentirlo. La geometría del IGN va **generalizada** —186 MB no se publican— y eso obliga a estrenar un valor de `geo_precision`: **`generalizada`** (§6.6, §9), dentro de **R9**. Se intentó con `ilustrativa` y la ficha quedó mintiendo, porque ese valor está definido como «trazado a mano alzada» y el límite de una provincia no lo es. De dónde sale un borde y cuánto se ha tocado son dos preguntas distintas. |
| **1.13.0** | 2026-08-06 | **Aditiva.** Nace `electricidad-interconexiones` (§10): los enlaces eléctricos que cruzan una frontera, con su punto en el extremo español y el de fuera **nombrado y sin coordenada** — un enlace tiene dos extremos y el atlas solo puede situar uno, y eso se dice en vez de disimularlo con una recta. §6.5 le da su fila (`activo` cuando `en_servicio`), §9 su categoría. Deja escrito por qué la red de transporte NO entra: la publica Red Eléctrica, que es sociedad cotizada, y no hay cartografía del mallado bajo licencia compatible con CC BY 4.0 — la misma frontera que marcó Enagás en la capa de gas. |
| **1.12.0** | 2026-08-06 | **Aditiva.** Nace `minerales-derechos` (§10): los derechos del Catastro Minero cuyo titular es un promotor que el atlas ya registra, con su perímetro y **el primer `geo_precision: exacta` del atlas**. §6.6 gana la enmienda que obligó a escribir la propia fuente: «del objeto mismo» quiere decir **del objeto que la fuente define y de ningún otro** — el catastro define DERECHOS, no minas, y un proyecto que tiene un derecho no hereda su geometría ni su precisión. Por eso `minerales-proyectos` **no** pasa de punto a polígono, contra lo que PLAN.md preveía: elegir cuál de los cincuenta derechos de TOLSA «es» el proyecto de sepiolita sería una atribución sin fuente. Las dos capas se solapan en el mapa y el lector ve el solape, que sí es un hecho. Y §10 deja escrito que `superficie_declarada` va verbatim porque **no concuerda con el perímetro que la misma fuente dibuja**. |
| **1.11.0** | 2026-08-06 | **Aditiva.** Nace `espacios-maritimos` (§10), la capa del mar del tablero, con su `categoria` (§9) y su fila de §6.5 —«no aplica», como el resto del tablero—. Estrena el `ambito: mundo` para geometría real: la plataforma continental más allá de las 200 millas **cae fuera del recuadro de §7.4 por definición**, así que se declara el ámbito de la capa y **no se ensancha el recuadro**, que habría debilitado la comprobación de las otras seis. Deja escrito, donde ya confundió una vez, que **R5 va de la capa hacia la geometría y no al revés**: una capa `verificado` puede contener un registro `geo_precision: ilustrativa`, y eso es lo que permite dibujar la zona sin delimitación acordada sin dictar ninguna frontera (D5). |
| **1.10.0** | 2026-08-06 | **Aditiva, y cierra el único renglón en el que este documento no se sostenía a sí mismo.** Nace la capa `minerales-dominios` (§10) y con ella **R8 gana su diente**: entra en la tabla de §6.4, se retira la nota de estado de §6.5 y §8 deja de citarla como el ejemplo vivo de regla sin implementar. Desde hoy **ninguna regla del contrato es prosa**. La capa unifica el `caracter` de §10 con el `categoria` del núcleo, que archivaban los MISMOS cinco valores en dos campos: renombrado nominalmente mayor por §8, gratis de hecho porque la capa no tenía datos publicados — el mismo argumento con el que la 1.1 introdujo `fase`. Los cinco valores estrenan `color` (§9). |
| **1.9.0** | 2026-08-06 | **Aditiva.** Cada categoría de §9 lleva ahora su **`color`**. Lo destapó tener cuatro capas encendidas a la vez: nuclear, gas y el tablero se pintaban del MISMO gris, porque la paleta vivía cableada en el visor y solo conocía las tres categorías de `minerales-proyectos`. Es el mismo vicio —código que conoce las capas de antemano— que ya se había quitado del panel y de la ficha. Consecuencia asumida: el color es dato, así que cambiarlo exige una release. |
| **1.8.0** | 2026-08-06 | **Aditiva.** Entra `gas-regasificacion` (§10) con su `categoria` (§9) y su fila en la tabla de `activo` (§6.5). Trae dos campos —`capacidad_almacenamiento_m3` y `capacidad_emision_nm3h`— que **nacen vacíos a propósito**: al abrir la capa se comprobó que ni la CNMC ni los operadores publican en documento accesible la capacidad de las siete terminales, que es la cifra que todo el mundo repite. El campo existe para que el hueco tenga dónde alojarse. Queda escrito además, porque no lo estaba, que **Enagás es una sociedad cotizada** y por tanto fuente `corporativa`: lo primario aquí es el BOE y la CNMC. |
| **1.7.0** | 2026-08-06 | **Aditiva.** Entra `limites-soberania` (§10), la capa del tablero, con la doctrina **D5 puesta en datos**: dos campos simétricos —`administrado_por` y `reclamado_por`— con los que Gibraltar y Ceuta se describen con la misma estructura, y una `categoria` de dos valores (§9) que dice **quién reclama, no quién tiene razón**. Los instrumentos que cada parte invoca van en `claves[]`, atribuidos, de modo que una posición sin documento se ve como lo que es. No toca §6.5: el tablero ya figuraba como «no aplica», y esta es la primera capa que ejercita esa rama — su `activo` es `null` y el filtro de explotación no la esconde nunca. |
| **1.6.1** | 2026-08-06 | **Corrección.** §7.5 da **un día de tolerancia** a la comprobación de fechas futuras. Lo destapó el propio CI al publicar la capa `nuclear`: los registros se fecharon a las 00:47 hora española, y el runner —que corre en **UTC**— aún estaba en el día anterior, así que veía toda la capa fechada en el futuro y bloqueaba. No era un dato mal puesto: era una regla que decía «el futuro» sin decir de quién es el ahora, y una fecha ISO no lleva huso. La comprobación sigue cazando un 2027 escrito donde iba 2017; deja de arbitrar un desfase de dos horas. |
| **1.6.0** | 2026-08-06 | **Aditiva.** Entra la capa `nuclear` (§10), la primera que estrena el mecanismo sin ser la primera capa del atlas: `grupo`, `potencia_mw`, `tecnologia`, `titulares[]`, `fase` y **dos campos de fecha** —`autorizacion_hasta`, de la orden del BOE, y `cierre_acordado`, del calendario de 2019—, que son hechos distintos y en España no coinciden. Su `categoria` en §9 y su fila en la tabla de `activo` de §6.5, sin la cual un reactor no respondería al filtro de explotación, que es justo la pregunta que sí se le hace. La regla de un registro **por reactor** aunque compartan emplazamiento, y por qué comparten coordenada, queda escrita en §10. |
| **1.5.0** | 2026-08-05 | **`vigilar.py` existe.** Se retira la declaración de pendiente que puso la 1.4.0: la guardia semanal está construida, con su `vigilar.yml`. §7 se reescribe con lo que la implementación obligó a decidir y a admitir. Decidido: **avisa fallando, no abriendo issues** —eso habría costado permiso de escritura sobre un repositorio público—, y **«muerta» es solo 404 y 410**, porque un vigilante que grita por el 403 anti-bot de un ministerio acaba apagado. Admitido, y esto es lo que más importa: **EUR-Lex y el IGME devuelven 200 para documentos que no existen**. Donde la URL promete formato el engaño se detecta; donde no, **no hay comprobación posible** y la guardia lo imprime cada vez que corre. Con esto el contrato no tiene ninguna pieza sin implementar salvo **R8**, que sigue esperando a `minerales-dominios` (§6.5). |
| **1.4.0** | 2026-08-05 | **Aditiva, y sobre todo correctora.** Lo importante no es lo que añade sino lo que **deja de afirmar**: seis lugares de este repo daban por construido `pipeline/vigilar.py` —y su `vigilar.yml`— en presente y sin matizar, incluido el README público. No existen. §7 gana su bloque de estado, redactado como el de R8 en §6.5, y §2, §3 y §12.6 dejan de darlo por hecho. Mientras no exista, **nadie vigila la caducidad de una capa ni la muerte de una URL**, y eso ahora está dicho donde se afirma en vez de descubrirse por su ausencia — que es la regla que §8 se impone a sí mismo. Lo que se añade: `pipeline/consultar.py` en §2 (consulta al IGN y al catastro, contrasta, **nunca escribe**), `.cache/` con su distinción entre copia de trabajo y cita, y en §6.6 el **contraste de municipio**, que es la comprobación que R9 no puede hacer porque exige salir a la red. La regla de estructura pasa a «valida, vigila y consulta; nunca genera datos». |
| **1.3.0** | 2026-08-05 | **Aditiva.** La geometría entra en la doctrina. `geo_fuente` admite `__v`/`__f` (§5); nuevo §6.6 con la tabla de qué precisión concede cada clase de fuente, el CRS como parte de la cita, y la regla **R9** (§6.4), que exige fuente primaria a toda `geo_precision` de `exacta` o `paraje` — con su implementación en `validar.py` y sus dos fixtures, no declarada y pendiente. §9: `paraje` y `exacta` se redefinen para distinguir la fuente del **nombre del lugar** de la del **objeto**; ningún registro publicado usaba ninguno de los dos, así que no hay nada que migrar. §8: sufijo `.N` para una segunda release en el mismo mes. Salió de la deuda de geometría de F1: once puntos honestos, pero con la única procedencia del atlas que nadie podía comprobar. **§6.6 lleva además una lección aprendida tocando la fuente**, no escribiendo el contrato: un punto representativo no hereda la precisión de su polígono, así que `exacta` es inalcanzable mientras la capa sea de puntos. |
| **1.2.0** | 2026-08-05 | **Aditiva.** Campo opcional `nombre_oficial` (+`__v`,`__f`) en `minerales-proyectos` (§10). Salió de la propia F1: el nombre oficial del documento que reconoce un proyecto difiere del corriente en cinco de los siete españoles, y sin él la ficha no se puede contrastar contra el DOUE. Ningún consumidor de la 1.1 se rompe: es opcional. |
| **1.1.0** | 2026-08-05 | **Aditiva.** Manifiesto: `arbol`, `ambito`, `en_preparacion`, `registro: analisis` (§3). Reglas de doctrina numeradas R1–R5 y ampliadas con **R6** (metadato huérfano), **R7** (`activo` no se escribe) y **R8** (dominio que contradice a la mina que contiene, sin diente hasta F3) (§6.4). Nuevo §6.5: el campo derivado `activo` y su tabla de mapeo, cerrando el matiz abierto de D3. Nuevo campo controlado `fase` en `minerales-proyectos` (§10) y su vocabulario (§9). §7: bbox según `ambito`, fechas no futuras, comprobación del manifiesto, y separación explícita entre avisar y bloquear. §11: el ejemplo canónico pasa a **validar de verdad** y es el fixture del CI. |
| **1.0.0** | 2026-07-22 | Contrato inicial: GeoJSON RFC 7946 WGS84, manifiesto de capas, propiedades planas, campos en español, sufijos `__v`/`__f`, fuentes tipadas, doctrina como validación de CI, releases etiquetadas, nada se borra. |

**Compatibilidad 1.0.0 → 1.1.0.** Ningún campo se renombró ni cambió de
semántica; todo lo nuevo es opcional salvo `fase`, que es obligatorio en una capa
—`minerales-proyectos`— que **todavía no tiene datos publicados**. No hay nada
que migrar: la 1.1 llega antes que el primer dato, que era exactamente el momento
de hacerla.
