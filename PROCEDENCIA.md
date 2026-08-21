# La procedencia de cada capa

De dónde sale cada dato, **con qué condiciones se puede usar** y qué hay que
saber antes de citarlo. Una ficha por capa publicada, y al final un cuaderno de
obtención para quien tenga que volver a la fuente.

Existe porque el atlas le exige a cada dato una cita con fuente y fecha, y no se
lo exigía a sí mismo: la información estaba entera, pero repartida en cinco
sitios ordenados por criterios distintos —el manifiesto por capa, los `__f` por
registro, el contrato por campo, el changelog **por release** y este directorio
por fecha de captura—. La pregunta más natural que se le puede hacer a un
dato, «¿de dónde sale esto y qué me obliga?», se contestaba cruzando el
changelog entero con el manifiesto.

## Qué NO es este documento

**Lo que se añade aquí es la síntesis, no el hecho.** Cada dato sigue teniendo
una sola fuente de verdad, y no es esta:

| Si buscas | Manda | Y no esto |
|---|---|---|
| La licencia y la atribución de una capa | `datos/manifest.json` (contrato §3) | — |
| Qué campos tiene y por qué | `CONTRATO-DATOS.md` §10 | — |
| La cita exacta de un campo concreto | el `__f` de ese registro (§6.2) | — |
| Cómo se construyó y qué costó | `CHANGELOG-DATOS.md`, por release | — |
| El documento original | el fichero archivado en este directorio | la URL, que se pudre |

Esa disciplina es `DECISIONES.md` D3 aplicada a la documentación: donde este
documento repitiera un dato en vez de enlazarlo, crearía una segunda verdad que
se desincronizaría a la primera corrección.

**Y no dice lo que no sabe.** Donde el emisor no publica sus condiciones, aquí
pone que no las publica — no una suposición verosímil.

## Cómo se lee

Un encabezado de nivel 2 en kebab-case (`## puertos`) **es una ficha de capa**;
los de prosa llevan espacios. No es cosmética: `pipeline/validar.py` comprueba
por esa forma que **ninguna capa publica datos sin su ficha, y ninguna ficha
sobrevive a su capa** (§7.9, bloquea el CI).

---

# Lo que vale para todas las capas

## La licencia de salida

Todo lo que el atlas publica va bajo **CC BY 4.0**, con la atribución sugerida
que fija `datos/LICENCIA-DATOS.md`. Cada capa declara además la suya en el
manifiesto, y **si alguna difiriera, mandaría la del manifiesto**.

Esa elección obliga a algo que se nota en el contenido: **no entra ningún
conjunto con licencia contagiosa** (*ShareAlike* o *NonCommercial*). No es
teoría. Ha dejado fuera tres fuentes que habrían sido la vía obvia:

| Fuente | Licencia | Qué se perdió |
|---|---|---|
| **TeleGeography** | CC BY-NC-SA 3.0 | El trazado de los cables submarinos. La capa se reconstruyó desde actos de Costas |
| **CNMC** | CC BY-SA | La potencia eléctrica instalada por provincia. La capa publica generación |
| **Instituto Cervantes** | aviso legal restrictivo, sin conjunto en `datos.gob.es` | La demolingüística del español. La capa cartografía el **estatuto** |

## Los emisores transversales

Cuatro emisores sostienen la mayor parte del atlas. Sus condiciones van aquí una
vez, y las fichas remiten a esta sección.

### Instituto Geográfico Nacional (IGN) y CNIG

**Presente en 23 de las 34 capas.** Licencia **CC-BY 4.0**, establecida por la
**Orden FOM/2807/2015, de 18 de diciembre** (BOE de 26-12-2015), cuyo artículo 4
dice que el uso «tendrá carácter libre y gratuito, siempre que se mencione el
origen y propiedad de los datos».

**Pero la licencia fija la FORMA del reconocimiento, y no es la habitual.** Su
punto 4, para obra derivada —que es exactamente lo que hace este atlas—:

> «Obra derivada de \<identificador del producto\> \<fecha\> CC-BY 4.0
> \<atribución de productores\>»

Los identificadores exactos, de la tabla de productos del propio SCNE:

| Lo que usa el atlas | Fórmula exigida |
|---|---|
| Base Topográfica Nacional | `Obra derivada de BTN Continua CC-BY 4.0 ign.es` |
| Nomenclátor Geográfico Básico | `Obra derivada de NGBE Continua CC-BY 4.0 ign.es` |
| Límites municipales y provinciales | `Obra derivada de BDLJE Continua CC-BY 4.0 ign.es` |
| Red de estaciones permanentes GNSS | `Obra derivada de ERGNSS 2025 CC-BY 4.0 ign.es` |
| Redes de Transporte (nodos de aeródromo) | `Obra derivada de IGR-RT 2026 CC-BY 4.0 scne.es` |

Ojo con la última: su atribución es **`scne.es`** y no `ign.es`, porque el
producto está coproducido (IGN, Gobierno Vasco y Generalitat Valenciana). El
propio servicio lo confirma por su cuenta, declarando `AccessConstraints: CC BY
4.0 scne.es` en sus capacidades. Copiar la fórmula de otra fila sería atribuir
mal.

Y su punto 5 añade una obligación que casi nadie cumple: quien genere **un
conjunto nuevo modificando el original** debe incluir esas expresiones **también
en los metadatos** — en el resumen, en el linaje y en las restricciones de
acceso.

> **Encontrado y corregido el 2026-08-08.** El manifiesto atribuía «Instituto
> Geográfico Nacional · Atlas Estratégico de España», que **no es la fórmula que
> la licencia exige** —y **cuatro capas no nombraban al IGN en absoluto**, que es
> peor—. La licencia se había comprobado antes de extraer, como manda
> `datos/LICENCIA-DATOS.md`, y el veredicto era correcto: CC-BY 4.0, compatible.
> Lo que no se hizo fue leer **cómo** obliga a citar. **Comprobar que una fuente
> es compatible no es lo mismo que leer cómo obliga a citarla.**
>
> Las 13 capas de entonces llevan ya su fórmula —y las que entraron después
> nacen con ella—, y **el visor la muestra**: la atribución
> viaja con la fuente de MapLibre, así que aparece mientras la capa está
> encendida y desaparece al apagarla — que es lo que pide el punto 4, «visible
> junto con los datos, a pie de mapa». Un crédito fijo en el pie afirmaría que el
> atlas usa la BTN incluso con esa capa apagada.

- Archivado: [`2026-08-08_cnig_licencia-uso-productos-ign-fom-2807-2015.pdf`](2026-08-08_cnig_licencia-uso-productos-ign-fom-2807-2015.pdf)
  · [`2026-08-08_scne_tabla-de-productos-atribucion.html`](2026-08-08_scne_tabla-de-productos-atribucion.html)
  · [`2026-08-08_cnig_condiciones-de-uso-centro-de-descargas.html`](2026-08-08_cnig_condiciones-de-uso-centro-de-descargas.html)

### BOE y DOUE — los textos legales

**Un texto legal no tiene dueño.** El artículo 13 del TRLPI excluye de la
propiedad intelectual las disposiciones legales y los actos de los organismos
públicos, así que leyes, órdenes, reglamentos y tratados se archivan enteros y
se citan sin pedir permiso ni declarar licencia.

Eso vale para el **texto**. No vale para las bases de datos, buscadores o
ediciones anotadas que los sirven, que sí tienen sus propias condiciones — por
eso lo que se archiva es siempre el documento, no la página que lo indexa.

El BOE cumple además una función que conviene conocer: **es espejo del DOUE**, y
sirve en HTML con tablas reales lo que EUR-Lex publica en PDF inmaquetable.

### Comisión Europea

Política de reutilización de la **Decisión 2011/833/UE**: **CC BY 4.0**. Cubre la
plataforma de transparencia PCI-PMI, que no es divulgación sino un registro que
existe por obligación del **artículo 23 del Reglamento (UE) 2022/869**.

**La obligación no alcanza a lo que se sirve al lado:** el mismo visor ofrece una
capa `PLATTS`, de S&P Global, que es de tercero y no entra.

- Archivado: [`2026-08-06_ce_aviso-legal-reutilizacion-documentos.html`](2026-08-06_ce_aviso-legal-reutilizacion-documentos.html)
  · [`2026-08-06_ce_pci-transparencia-aviso-y-terminos.js`](2026-08-06_ce_pci-transparencia-aviso-y-terminos.js)

### MITECO y el Catastro Minero

**Régimen general de reutilización de la Ley 37/2007**, con atribución y sin
ShareAlike ni NonCommercial. Cubre el Catastro Minero, el Boletín Hidrológico,
la estadística eléctrica y los anuncios de Costas.

> **El ALTCHA del Inventario de Presas y Embalses, y cómo se cruzó** *(.44)*.
> Durante seis releases esta ficha decía que el Inventario estaba tras un
> **ALTCHA** —un CAPTCHA de prueba de trabajo puesto a propósito— y que **no se
> salta**; la capa de agua embalsada existe porque se encontró otra puerta
> abierta, no porque se forzara esa. Sigue sin saltarse: **lo descargó Arturo
> con un navegador**, que es lo que el ALTCHA pide y lo que ningún guion de este
> repositorio hace. Camino, por si vuelve a hacer falta: la página de descargas
> del IDE (`inventario-presas-embalses.html`) enlaza a
> `gis.miteco.gob.es/descargas/app/DescargaFichero?f=`, y la prueba de trabajo
> se resuelve sola antes del botón. Por guion, esa URL devuelve la página del
> ALTCHA con un **200** — un 404 disfrazado de éxito, la trampa que esta casa ya
> tiene fichada.

## El archivo está completo

**Las 10.930 citas con URL de las 34 capas y del conjunto tienen su documento
archivado aquí: el 100 %.** Son 208 documentos distintos. No queda un solo aviso
pendiente de §7.7 —la comprobación que avisa cuando una cita no está
archivada—, y eso se midió, no se supuso.

En el directorio hay algunos más que citas los reclaman, y no son huérfanos: son
las **pruebas de licencia** que sostienen este mismo fichero —el aviso legal de
un emisor, los términos de reutilización de un portal—, los **boletines que se
acumulan** en vez de reemplazarse, cada uno con una cifra que ningún otro
documento repite, y —desde la release `.117`— los **actos de expedientes
VIGILADOS que todavía no tienen ficha**. El primero de esta tercera clase es la
información pública de la ocupación para el «Proyecto del sistema submarino de
telecomunicaciones **Canalink Base 4 y Base 5**» (BOC-A-2025-176-3176): nombra
el sistema y a su promotora, pero sitúa solo por **provincia**, y sin punto de
amarre no hay aterrizaje que registrar. Se archiva porque su plazo de
información pública ya cerró y el proyecto que llevaba el trazado **ha
desaparecido de la web de la Consejería**; el día que llegue el otorgamiento,
la mitad del expediente ya está guardada. Un documento archivado de más es
archivo; uno de menos sería una cita rota, y de esos no hay.

## Lo que se decidió no obtener

Aparece aquí para que su ausencia se lea como una decisión y no se descubra por
el hueco:

- **El Catálogo Nacional de Infraestructuras Estratégicas y Críticas.** No es
  público y **no se persigue**. Cuidado con cómo se dice: se comprobó la Ley
  8/2011 y **no emplea la palabra «secreto»** — habla de datos «clasificados» y
  remite las condiciones a su Reglamento, que no se ha leído.
- **El shapefile del SNCZI**, por el CAPTCHA, dicho arriba.
- **La lista de los 100 mayores perceptores del PRTR** y el mapa Power BI de
  MITECO: la primera no lleva ubicación; el segundo no es un conjunto de datos
  que se pueda citar ni archivar.

---

# Las capas

## minerales-proyectos

**De dónde** · **Comisión Europea** — Decisión (UE) 2025/840, la lista de
proyectos estratégicos del Reglamento de Materias Primas Críticas · **IGME**,
Panorama Minero · **MITECO**, Catastro Minero · **IGN**, Nomenclátor.
**Licencia** · Decisión 2011/833/UE (CE) · Ley 37/2007 (MITECO, IGME) · IGN,
ver arriba.
**Qué hay que saber** · Los 7 proyectos estratégicos de la UE más 3 producciones
singulares y 1 en disputa. **El nombre del proyecto y el que lleva en el
documento no coinciden** en cinco de los siete: «La Parrilla» figura como *P6
Metals*. Por eso existe `nombre_oficial` — sin él, contrastar la ficha contra el
DOUE es imposible.
**Huecos** · 7 citas: inversión, empleo, capacidad, calendario y porcentajes de
demanda europea circulan como anuncio corporativo y **no se elevan a dato**.
~~Uno es más serio: el municipio de un registro dice «Gerena» y nunca tuvo
fuente; dos primarias apuntan a otros términos.~~ **Resuelto el 2026-08-09**:
el anuncio de la CHG (BOE-B-2020-25403) enumera «Gerena, Guillena y Salteras»
— los tres a la vez, que era lo que las fuentes decían por separado. Y el
expediente de Matamulas dejó de ser un hueco entero: la **DIA negativa** y la
**denegación de las tres concesiones** están archivadas del DOCM (2017/13014 y
2017/14349); solo el tramo judicial —sentencia del TSJ y casación— sigue
pendiente, y el CENDOJ rechaza la consulta programática (403): hay que sacarlo
a mano.
**Archivado** · 8 ficheros · **El resto** · CHANGELOG `datos-v2026.08` y `.34`
· §10

## minerales-dominios

**De dónde** · **Ninguna cartografía**. Es la única capa del atlas sin una sola
fuente con URL.
**Licencia** · Solo la de salida: la compilación es del atlas.
**Qué hay que saber** · **Las 16 son `registro: ilustrativo` y las 16 declaran
el hueco**: «el trazado es a mano alzada sobre el ámbito descrito, **no un
límite medido**». Sirven para situar una comarca minera en el mapa, **no para
medir sobre ellas**. Es la capa que hace verdad la regla R5.
**La investigación agotada** *(2026-08-19)* · Se buscó cartografía oficial que
sustituyera la mano alzada, y **el veredicto es que no existe como vector**. El
IGME publica DOS series metalogenéticas: el **Mapa previsor 1:1.500.000** (17
sustancias, serie de **1972**) que distingue «áreas metalíferas (límites y tipo
genético)» — pero se sirve como **JPG escaneado más memoria en PDF**, no como
geometría; y el **Metalogenético 1:200.000** (desde 1994), con cobertura
**incompleta por hojas** (la de muestra responde «No hay información
disponible»). Calcar del escaneo de 1972 daría una fuente, pero una de hace
medio siglo, a escala 1,5M, y sin hoja para varios dominios de esta capa
(litio, tierras raras, celestina). **La licencia del IGME, en cambio, quedó
verificada y archivada** (`2026-08-19_igme_licencia-uso-datos.pdf`):
reutilización gratuita, comercial y no comercial, con fórmula literal —
«Origen de los datos: "©Instituto Geológico y Minero de España (IGME)"» — y
ampara también los panoramas mineros que `minerales-proyectos` ya cita. **La
vía que queda anotada**: la BDMIN (indicios minerales georreferenciados, por
PUNTOS) permitiría anclar cada dominio con indicios oficiales — otra forma,
otro trabajo, dicho aquí para quien lo retome.
**Huecos** · 16 de 16, uno por registro — y tras la investigación se quedan
como están **a conciencia**: la mano alzada declarada es más honesta que un
calco de 1972 vestido de fuente.
**Archivado** · 1 fichero (la licencia del IGME)
**El resto** · CHANGELOG `datos-v2026.08.6` · §10

## minerales-derechos

**De dónde** · **MITECO — Catastro Minero**, descarga por provincia (shapefile
ETRS89 + CSV), 7 provincias.
**Licencia** · Ley 37/2007, con atribución. Manifiesto: «Catastro Minero
(MITECO) · Atlas Estratégico de España».
**Qué hay que saber** · **El catastro define DERECHOS, no minas.** Un proyecto
que tiene un derecho **no hereda su geometría**: por eso `minerales-proyectos`
sigue siendo de puntos y las dos capas se solapan en el mapa a la vista. Único
`geo_precision: exacta` en polígonos junto a las renovables.
**Qué NO se interpreta** · `superficie_declarada` va **verbatim** aunque **no
concuerde con el perímetro que la misma fuente dibuja**.
**Por qué el ZIP y el CSV** · El shapefile da la geometría; el CSV se archiva
porque **escribe con tildes** los campos de vocabulario que el shapefile deja sin
ellas.
**Archivado** · 14 ficheros (7 provincias × 2 formatos)
**El resto** · CHANGELOG `datos-v2026.08.8` · §10

## parques-eolicos

**De dónde** · **IGN — Base Topográfica Nacional**, tema Energía, objeto `0713S`
«Central eléctrica», atributo `TIPO_0713`.
**Licencia** · IGN, ver arriba · atribución exigida: `Obra derivada de BTN Continua CC-BY 4.0 ign.es`
**Qué hay que saber** · Son **recintos, no potencia**. La BTN captura el parque
«por el contorno exterior de su recinto», y de eso **no se deduce cuánta energía
produce**: A Coruña tiene 173 parques y genera menos que Zaragoza con 144.
**Qué NO trae la fuente** · Ni `potencia_mw`, ni número de aerogeneradores, ni
titular, ni fecha de servicio — el esquema los **prohíbe por su nombre** para que
nadie los escriba de memoria. `superficie_ha` también, por derivada.
**Alcance** · 1.382 de 1.389 (**100 % de la superficie**).
**Archivado** · 2 ficheros · **El resto** · CHANGELOG `datos-v2026.08.21` · §10

## plantas-solares

**De dónde** · **Dos clases de fuente, y la distinción es toda la capa.** La
GEOMETRÍA es siempre la BTN, el mismo objeto `0713S` (tipos 05 fotovoltaica y 08
termosolar). La IDENTIDAD y los atributos, donde los hay, los pone el **registro
de la administración que autorizó la planta** — desde la release `.115` (D17):
**IDENA** (Gobierno de Navarra, conjuntos «Plantas solares fotovoltaicas en
servicio» y «…en tramitación») y el **ICV** (Generalitat Valenciana, «ER
Fotovoltaicas: Vallado», por WFS).
**Licencia** · IGN, ver arriba · atribución exigida: `Obra derivada de BTN Continua CC-BY 4.0 ign.es` ·
IDENA **CC BY 4.0**, declarada en la ficha de datos.gob.es · ICV **CC BY 4.0
Generalitat**, declarada por el propio servicio en su `AccessConstraints`.
**Cómo se cruzan** · **Por SOLAPE GEOMÉTRICO y jamás por nombre.** Los nombres no
coinciden: la BTN llama «Huerta Solar Bárdenas Reales» a lo que IDENA llama
«VILLAFRANCA - CORRALIZA DE BARRENO». Un emparejador por parecido habría fallado
en silencio. Se exige que uno de los dos polígonos cubra al menos el 30 % del
otro, y la fracción exacta va escrita en la ficha para que se pueda juzgar.
**Qué hay que saber** · De las 3.165 fotovoltaicas de la BTN, **1.959 no llevan
nombre** — no es un defecto del IGN: cartografiar un recinto no es identificarlo.
La capa publica 1.286: las 1.206 que nombra la BTN (el **76 % de la superficie**,
porque las anónimas son las pequeñas) más **79 que nombra una comunidad**.
Termosolar, 44 de 45. Las cifras van siempre juntas porque contar plantas y medir
superficie dan respuestas distintas.
**Las tres trampas del cruce, y cómo se evitan** · (1) Una planta puede caer
sobre **varios recintos** —«FUSTIÑANA - CORRALIZA VECINAL» sobre seis—: ahí NO se
escribe potencia, porque la cifra es de la planta entera y repetirla en cada
hermano multiplicaría la potencia solar del país. (2) Un recinto puede contener
**dos plantas registradas** —tres casos—: tampoco lleva potencia, porque no es
ninguna de las dos por separado. (3) El registro valenciano escribe literalmente
**«-»** en el titular de las instalaciones viejas: eso es un hueco declarado, no
un titular. En los tres casos la ficha lo dice y R4 la baja a `parcial`.
**Qué NO trae la fuente** · La BTN, lo mismo que en eólica. Del registro
autonómico, `potencia_pico_mw`: **el campo existe y viene vacío**, y sigue
prohibido por eso.
**El hueco mayor, que es de capa** · La cobertura es **desigual por comunidad** y
está declarada en el manifiesto, no en las fichas —hablar de los recintos que NO
están no dice nada de los que sí—. Sondeadas el 2026-08-21: **Castilla y León
tiene la capa** (1.592 recintos con titular, potencia y fechas, por el WFS de
IDECyL) **y va bajo licencia IGCYL-NC, no comercial**, que
`datos/LICENCIA-DATOS.md` no admite; su conjunto abierto en CC BY 4.0 ES
(«Parques eólicos en funcionamiento», 279 filas) **no trae geometría**.
**Cataluña** publica 541 fotovoltaicas sin geometría. **Baleares** publica zonas
de APTITUD, que no son instalaciones. De **Andalucía, Castilla-La Mancha,
Extremadura, Galicia, Asturias, Cantabria, País Vasco, La Rioja, Murcia y
Canarias** no se encontró geoservicio en dos intentos (los errores exactos, en la
agenda). **Aragón** sí tiene registro eólico con geometría, pero su WFS **no
declara licencia**, y sin eso no se toca.
**Archivado** · 5 ficheros · **El resto** · CHANGELOG `datos-v2026.08.115` · §10

## gas-regasificacion

**De dónde** · **CNMC**, informe de supervisión del sistema gasista 2025 ·
**BOE**, cinco resoluciones y órdenes por planta · **CORES**, sus dos series
mensuales de entradas y salidas, que desde la `.57` dan **la película de cada
planta** · **IGN**, Nomenclátor, para las siete coordenadas.
**Licencia** · Textos legales sin dueño (BOE); el informe de la CNMC se **cita**,
no se copia su conjunto de datos · CORES, atribución de **fórmula fija** «Fuente
CORES (www.cores.es)» · IGN (NGBE), CC BY 4.0.
**Qué hay que saber** · **Enagás es sociedad cotizada**, o sea fuente
`corporativa`, y por R3 **no puede sostener un `confirmado`**. Lo primario aquí
es el BOE, la CNMC y CORES.
**El desglose por planta llevaba archivado y sin usar** · Los libros de CORES
que la `.41` bajó para `gas-interconexiones` tienen **cuatro hojas**, y aquella
release gastó una. La tercera reparte el gas **planta a planta** desde enero de
2004, y sus siete columnas cuadran una a una con estos siete registros. No hizo
falta bajar nada: hizo falta abrir el libro entero.
**El emparejamiento se declara, no se deduce** · Las columnas del libro
coinciden con los **slugs** y no con los nombres —«Bilbao» es Bahía de Bizkaia
Gas, «Sagunto» es Saggas, «Mugardos» es Reganosa—, así que donde se parecen es
casualidad. Cada ficha lleva su `nombre_estadistico` y `seriar-gas.py` revienta
si una columna no encuentra ficha o al revés. **Emparejar por parecido de
nombres es lo que más falla**, y en esta casa costó una release entera
aprenderlo con los embalses.
**Y las plantas exportan** · Recargas de buques, puestas en frío y suministro
directo a barcos consumidores. Poco al lado de lo que entra —1.449 GWh contra
19.632 en mayo de 2026— pero real, así que la serie lleva **dos columnas** y su
fuente son los **dos** libros.
**Huecos** · Los 7 registros declaran el mismo: **la capacidad de almacenamiento
en m³ y la de emisión en Nm³/h no las publica nadie en documento accesible** — y
son justo las cifras que todo el mundo repite. Los campos existen vacíos para que
el hueco tenga dónde alojarse. Y uno de la película: **Musel empieza en 2020**,
no en 2004, porque hasta entonces la estadística no le abre columna — la planta
no existía. Su serie tiene 77 puntos y no 269, que es lo que manda §4.1: el hueco
de un parte entero es la ausencia del punto, no una fila de nulos.
**Archivado** · 6 ficheros propios, más los **dos libros de CORES** que ya
archivó `gas-interconexiones`: la misma copia sirve a las dos capas, que es para
lo que se archiva.
**El resto** · CHANGELOG `datos-v2026.08.4` y `datos-v2026.08.57` · §10

## icts

**De dónde** · **Consejo de Política Científica, Tecnológica y de Innovación**:
el acuerdo que aprueba el Mapa de ICTS 2025-2028, con el Anexo I de
configuración (28 ICTS, 64 infraestructuras, tipología, titular y localización;
DA 30.ª de la Ley 14/2011) · **Ministerio de Ciencia** (Campaña Antártica del
Comité Polar) e **IGN** (presentación antártica), para las dos bases ·
**Secretaría del Tratado Antártico**, sistema EIES: la información permanente
que España deposita, con las coordenadas en cifra de sus dos bases ·
**IGN**, Nomenclátor, para toda la geometría peninsular y canaria.
**Licencia y qué obliga** · Documentos oficiales (Ley 37/2007); IGN, fórmula
NGBE de la Orden FOM/2807/2015; el EIES es el intercambio de información que
los artículos III y VII del Tratado Antártico obligan a hacer público — se
cita la fuente y la fecha, como con cualquier documento oficial.
**Qué hay que saber** · **El Mapa sitúa por comunidad autónoma y nada más**: de
ahí que la capa estrene la precisión `autonomia` y que solo haya `paraje` donde
el Nomenclátor nombra la instalación (Roque de los Muchachos, Calar Alto,
Yebes, Doñana). **No se adivinó ningún municipio por notoriedad** — eso habría
sido el relleno por verosimilitud. IDISOM va en `desarrollo` porque el propio
acuerdo la declara «a constituir» (nota iv). El acuerdo advierte además de que
las denominaciones de las redes pueden cambiar antes de su constitución.
Donde el Mapa se queda corto lo suple **un acto que sitúe la instalación para
poder protegerla**: las dos órdenes de servidumbre radioeléctrica (Yebes e IRAM
30m, que salió de Sevilla a 233 km), el convenio del BOE que pone al Gran
Telescopio Canarias en el Roque de los Muchachos —estuvo dibujado en otra
isla— y el Reglamento del cielo canario.
**Las once distribuidas van en `MultiPoint`** *(1.57)*, con un vértice en cada
capital de las comunidades que su Anexo I nombra. Antes iban en `pais`, o sea
las doce en el mismo punto de Madrid, que es lo que la fuente **no** dice:
`rediris` es la única que se queda ahí, porque de ella sí dice «todas las
comunidades autónomas». Los vértices siguen siendo capitales y no laboratorios.
**Huecos** · Las de sede única sin topónimo declaran la ubicación de la
instalación. **Canarias tiene
dos capitales por estatuto** y la capa usa Santa Cruz de Tenerife: el Anexo I
no dice la isla de sus nodos canarios, y elegirla por notoriedad sería el
relleno que esta capa evita en todo lo demás.
**Qué se corrigió** *(2026-08-19, release `.101`)* · **La tanda de sedes: cuatro
ICTS bajan de la capital autonómica a su sitio.** Es la lección del GTC aplicada
en serie —«antes de conformarse con la convención hay que agotar la búsqueda de
un acto»—: **ALBA** a Cerdanyola del Vallès (el convenio de constitución de
CELLS, BOE 1/1/2026, da domicilio y sitúa la ampliación «dentro del Parque del
Alba»), **CLPU** a Villamayor, Salamanca (su convenio con la AEAT, BOE 4/4/2026,
da la sede con señas completas — estaba dibujado en Valladolid, a 110 km),
**CENIEH** a Burgos (convenio propio, BOE 1/6/2026 — estaba en Valladolid, a
120 km) y el **OAJ de Javalambre** al Picón del Buitre, Arcos de las Salinas
(Teruel), en `paraje`: el convenio con RedIRIS (BOE 23/8/2021) lo dice sin
rodeos y el pico es topónimo del Nomenclátor — estaba en Zaragoza, a 180 km.
Los huecos no se cierran: se ESTRECHAN — la coordenada del edificio sigue sin
acto que la dé, y los cuatro siguen `parcial`.
**Qué se corrigió** *(2026-08-21, release `.106`)* · **La segunda tanda: cuatro
de los cinco que quedaban.** Las **bases antárticas** pasan de un trazo a mano
alzada a las coordenadas que **España misma deposita en el EIES del Tratado
Antártico** — multipunto `exacta` con las dos: la Juan Carlos I (Livingston,
1988) y la Gabriel de Castilla (Decepción, 1990); el trazo había quedado a 343
m de la primera, y la reescritura sexagesimal→decimal es de notación, no de
datum (por eso va `confirmado` donde el XYZ→GRS80 de red-geodesica va
`parcial`). La **PSA** baja de Sevilla capital (a más de 300 km) a su desierto:
el convenio CIEMAT-DLR del BOE la dice «ubicada en el Desierto de Tabernas», y
con ese acto la pista que la `.101` dejó anotada —el topónimo «Central Solar
de Almería» del Nomenclátor— se publica como equivalencia declarada, con sus
motivos en la clave. **ICAR** baja de Murcia capital a su puerto: el convenio
IEO-CARM del atún rojo (BOE 25/3/2008) sitúa la instalación «en el término
municipal del Puerto de Mazarrón». Y **OmicsTech** no se mueve un metro pero
deja de ser convención: los estatutos del consorcio CNAG (BOE 12/1/2023) fijan
el domicilio en Barcelona con todas las señas. **De propina, un remiendo a la
.101**: su captura NGBE de sedes nunca entró en las fichas —el dedupe del
enriquecedor comparaba solo por URL y todas las consultas al Nomenclátor la
comparten— y Javalambre atribuía su coordenada a un archivo que no contiene el
Picón del Buitre; el dedupe compara ahora URL y archivo, y las cinco fichas
citan la captura que de verdad las sitúa.
**Lo que queda, con el intento contado** · El **LNF**: el TJ-II solo pisa el
BOE en anuncios de contratación, y una formalización da la sede del
CONTRATANTE (Av. Complutense 40, Madrid) y un NUTS de comunidad — sitúa al
comprador, no al dispositivo, y con eso no se publica nada.
**Archivado** · 17 ficheros (el acuerdo y su Anexo II, las dos páginas
antárticas, el informe de estaciones del EIES, cuatro consultas al NGBE, siete
actos del BOE y la página de nodos de la RES).
**El resto** · CHANGELOG `datos-v2026.08.84`, `.101` y `.106` · §10

## desaladoras

**De dónde** · **BOE**, quince actos: la Orden TED/157/2023 (el perímetro de
las seis de Acuamed, con su demarcación), la DIA o el informe de ampliación de
cada planta, y para las de la Mancomunidad sus DIA de 2005 y el contrato de
explotación de San Pedro (2022) · **MCT** (organismo autónomo, MITECO), las
fichas oficiales de sus cuatro plantas — el mismo trato que la ficha de
centrales de MITECO en `nuclear` · **IGN**, Nomenclátor.
**Licencia y qué obliga** · Textos legales sin dueño (art. 13 TRLPI); las
fichas de la MCT, Ley 37/2007; IGN, fórmula NGBE de la Orden FOM/2807/2015.
**Qué hay que saber** · **Dos perímetros, los dos de acto**: las seis
encomendadas a Acuamed (la orden) y las cuatro que la MCT construye y explota
(sus DIA y sus fichas). Las de la MCT entran con **mejor geometría**: el
Nomenclátor nombra las dos de San Pedro del Pinatar, y las dos de Alicante van
al topónimo del paraje de Agua Amarga que la propia MCT declara. **Cada
capacidad retrata el momento de su acto y va en la unidad de su acto**:
`capacidad_hm3_anio` o `capacidad_m3_dia`, sin conversión — convertir exigiría
suponer días de operación.
**Canarias, y una corrección de doctrina** *(2026-08-21, release `.116`)* ·
La capa entra en el archipiélago con cuatro fichas —las tres del Cabildo
Insular de El Hierro (Los Cangrejos, El Golfo, La Restinga) y la Maspalomas I
de San Bartolomé de Tirajana— y **con precisión `exacta`, no `municipio`**. El
veredicto de la `.107` que se lee abajo sigue en pie **para los actos del
ESTADO**; los actos **insulares canarios** son otra cosa: escriben la coordenada
UTM en el cuerpo del anuncio, «coordenadas X: 215.215 Y: 3.080.415 Z: 31». El
huso NO lo dicen, y se deduce con la misma vara que en `zonas-defensa`: se
prueban los de España y se exige que **uno solo** deje el punto dentro del
municipio que el propio acto nombra. Los cuatro caen donde debían con el 28, y
ni el 27 ni el 29 caen siquiera en Canarias.
**Lo que NO entra de Canarias, que es casi todo** · El barrido del BOC sacó
**226 actos de desalación entre 2003 y 2026** y la inmensa mayoría son
PETICIONES de autorización de plantas privadas de autoabastecimiento —hoteles,
fincas, un parque acuático, la refinería de Santa Cruz—: sitúan por municipio y
**no acreditan que la instalación llegara a existir**. Las cuatro que entran
pasan dos varas: acto que sitúa con coordenada, y existencia que el propio acto
da por hecha, porque no se regulariza ni se amplía lo que no está. **La
capacidad NO se escribe en ninguna**: los actos dan la cifra de la AMPLIACIÓN,
no la de la planta, y va en clave. **Vía anotada para la siguiente tanda**, del
propio barrido: el Consejo Insular de Aguas de Lanzarote mantiene un **«Censo de
Plantas Desaladoras»** cuyas inscripciones publica en el BOC — un censo es
exactamente la clase de fuente que esta capa quiere.
**La relectura** *(2026-08-21, release `.107`)* · Los actos archivados de las
seis de Acuamed, releídos entero buscando emplazamiento. **El resultado
negativo es el que manda**: ninguna DIA publica la coordenada de la planta —
las únicas tablas UTM que traen son las estaciones de control de salinidad
**en el mar**, no la planta— y el Nomenclátor, repreguntado por etiqueta
planta a planta, sigue sin nombrar ninguna. Lo que sí publican son **linderos
y distancias** («entre la Central Térmica de ENDESA y la planta de cemento»,
«a 1.850 m de la línea de costa y a 1.400 m aguas arriba del río Almanzora»,
«entre la carretera N-332 y las lagunas de Torrevieja»), que ahora van
verbatim en clave en Carboneras, Bajo Almanzora y Torrevieja — **convertir un
lindero en coordenada sería fabricarla**, así que los seis puntos siguen
siendo de municipio. Para Águilas apareció además un acto nuevo: el anuncio
de la CHS de la competencia de proyectos de su concesión (CSR-0005/2024)
advierte de que la ampliación «hasta los 70 hm³ anuales» estaba **pendiente de
ejecutar** a enero de 2024 — la tercera cifra del expediente, con las tres
ahora en la ficha.
**El perímetro se reabre** *(2026-08-21, release `.113`, decisión D18)* · La capa se llamaba «Desaladoras de interés general del Estado» y **el nombre era el perímetro**: dejaba fuera a todas las demás por una figura jurídica que no les corresponde, no por falta de fuente. Ahora se llama **«Desaladoras»**, la condición estatal es una **categoría** —lo que las distingue al pintarlas— y entra la desaladora que **una fuente oficial nombre y sitúe**, sin criterio de tamaño: un umbral de capacidad lo tendría que fijar el atlas, y no es suyo. **Primeras en entrar por la puerta nueva:** las ocho de **ABAQUA** (Agència Balear de l'Aigua i de la Qualitat Ambiental, empresa pública del Govern balear), de su conjunto de datos abiertos con **CC BY declarada y verificada antes de incorporar nada**; en precisión **exacta**, con los ocho puntos comprobados punto-en-municipio contra el IGN. Las sostiene el conjunto del OPERADOR PÚBLICO —el mismo trato que las fichas de la MCT—, que da nombre y posición pero **ni capacidad ni acto**: por eso van `parcial`.
**Huecos** · Las seis de Acuamed declaran la coordenada de la planta (punto de
municipio, ahora con el lindero de su acto dicho en clave donde lo hay);
Águilas añade la capacidad actual tras su ampliación (40 evaluados, 60
previstos, 70 pendientes de ejecutar en 2024 — la que está en servicio no la
publica ningún acto). La capa sigue sin ser el censo: autonómicas, canarias y
privadas quedan como ampliación, cada una con sus actos, **y ese cambio de
perímetro lo decide Arturo** (AGENDA).
**Archivado** · 22 ficheros (dieciséis del BOE, las cuatro fichas de la MCT y
el barrido del NGBE — que conserva también la PRIMERA pasada, descartada por
caer en municipios homónimos de Madrid, Huesca y León: el error queda a la
vista para que se vea qué se comprobó).
**El resto** · CHANGELOG `datos-v2026.08.28`, `datos-v2026.08.30`,
`datos-v2026.08.107` y `datos-v2026.08.113` · §10

## gas-almacenamiento

**De dónde** · **BOE**, once actos: la resolución anual de capacidad de la
DGPEM (los básicos y sus GWh), las concesiones de Serrablo (1995), Yela (2007),
Gaviota (2007) y Marismas (2011), la cesión de tres de ellas a Enagás
Transporte (2013), la cesión de los yacimientos Marismas a Trinity (2022) y el
expediente entero de Castor: concesión (2008), extinción e hibernación (RDL
13/2014), desmantelamiento (2019) y sellado de pozos (2025) · **IGN**,
Nomenclátor, para los puntos de municipio de los almacenes de tierra.
**Licencia y qué obliga** · Textos legales sin dueño (art. 13 TRLPI); IGN, la
fórmula de la Orden FOM/2807/2015 (los puntos de municipio son NGBE).
**Qué hay que saber** · **El perímetro lo fijan dos clases de acto**: la
resolución anual (básicos — y son CUATRO, Marismas incluida con 831 GWh, no los
tres que se suelen citar) y los actos propios de Castor. **Los polígonos de
Gaviota y Castor salen vértice a vértice del anexo de su real decreto**, en
horario en el acto y reorientados a RFC 7946. La capacidad disponible es la de
un periodo (1-4-2026 a 31-3-2027), no una constante.
**Huecos** · Serrablo y Yela: la coordenada de la instalación no la publica
ningún acto localizado — punto de municipio, dicho en cada ficha. Marismas: el
titular del almacenamiento tras la cesión de 2022 de los yacimientos, que
ningún acto de los dos aclara, y su geometría (definida en los reales decretos
de yacimiento de 1988-1995, no reconstruida).
**Archivado** · 12 ficheros (once del BOE y las consultas al NGBE).
**El resto** · CHANGELOG `datos-v2026.08.27` · §10

## bases-eeuu

**De dónde** · **BOE**: el Convenio de Cooperación para la Defensa de 1988 con
sus anejos, y sus tres protocolos de enmienda (2002, 2012, 2015) más el
acuerdo de 2023 de los dos buques adicionales · **IGN**, Nomenclátor
(«Base Aeronaval de Rota», «Base Aérea de Morón»).
**Licencia y qué obliga** · Textos legales sin dueño; IGN, fórmula NGBE.
**Qué hay que saber** · **Se registra el régimen, no la guarnición**: lo que
los tratados publicados autorizan, con qué límites y desde cuándo. Nada que no
esté en ellos — ni capacidades, ni despliegues, ni recintos. Cada despliegue
autorizado va en `claves` con su protocolo.
**Huecos** · Ninguno declarado: todo lo afirmado tiene su instrumento.
**Archivado** · 6 ficheros (cinco del BOE y las consultas al NGBE).
**El resto** · CHANGELOG `datos-v2026.08.27` · §10

## seguimiento-espacial

**De dónde** · **BOE**: los acuerdos España-EEUU sobre la estación de la NASA
(2003 y 2024), los acuerdos España-ESA (Cebreros 2003, emplazamientos 2012),
el convenio INTA-Isdefe de operación de Robledo (2024) y una licitación del
INTA que nombra la estación de Maspalomas · **IGN**, Nomenclátor, que nombra
las tres.
**Licencia y qué obliga** · Textos legales sin dueño; IGN, fórmula NGBE.
**Qué hay que saber** · Entra la estación que un instrumento publicado nombra
y sitúa (la doctrina de `centros-datos`). **Maspalomas es el registro más
flojo y su ficha lo dice**: la sostiene una licitación, no un tratado. El
Nomenclátor trae TRES construcciones con la misma etiqueta en Maspalomas — el
punto es la más próxima al vértice geodésico «INTA Maspalomas», y la ficha lo
declara.
**Huecos** · Cebreros: ningún acto posterior a 2012 afirma expresamente que
siga operativa (los acuerdos siguen en vigor, y en eso se apoya la fase).
Maspalomas: el instrumento que defina su régimen — los acuerdos INTA-ESA del
Centro Espacial de Canarias no están en el BOE, o no se han localizado.
**Archivado** · 7 ficheros (seis del BOE y las consultas al NGBE).
**El resto** · CHANGELOG `datos-v2026.08.27` · §10

## refinerias

**De dónde** · **CORES** (corporación de derecho público adscrita a MITECO,
estadística oficial de hidrocarburos), serie de capacidad de refino por
refinería y unidad de proceso · **PRTR-España** (MITECO), el registro estatal
de emisiones que obliga el Reglamento (CE) 166/2006: complejos, titulares,
municipios y **las coordenadas** · **IGN**, Nomenclátor, solo como
corroboración en Muskiz y Tarragona.
**Licencia y qué obliga** · CORES autoriza el uso de su información original
con **atribución de fórmula fija**: «Fuente CORES (www.cores.es)», con la misma
calidad y tamaño tipográfico que el dato — así va en el manifiesto y la pinta
el visor. Prohíbe desnaturalizar el sentido y sugerir que CORES respalda al
reutilizador. El PRTR es información pública (Ley 37/2007; su propia descarga
pide citar la fuente). IGN, la de siempre (Orden FOM/2807/2015).
**Qué hay que saber** · **El perímetro lo fija un código, no el gusto**: entra
lo que el PRTR clasifica como refino de petróleo (actividad 1.a.i, CNAE 19.20)
— exactamente diez complejos, uno a uno los de CORES. Buscar «refinería» por
nombre en el mismo registro devuelve refinerías de aluminio, de aceites y de
mantecas. **Tenerife figura con capacidad y sin operar**, y lo dice la propia
serie de CORES: estatus legal intacto, sin permisos para arrancar — va en
`parado`, no se omite. La suma de las diez capacidades cuadra con el total
nacional de la misma serie (79.200 kt en 2025), comprobado antes de publicar.
**Huecos** · Los 10 registros declaran el mismo (f9): **ninguna fuente publica
instalación a instalación si la refinería está operando** — la fase de las
nueve activas se sostiene en la serie vigente y en que la única nota de
inactividad señala solo a Tenerife, y por eso va `parcial`. El acto por
instalación (autorización o AAI) queda pendiente de localizar y archivar.
**Archivado** · 14 ficheros (la serie de CORES y su aviso legal, el ZIP de
complejos del PRTR, las diez fichas con coordenada y el barrido del Nomenclátor).
**El resto** · CHANGELOG `datos-v2026.08.26` · §10

## nuclear

**De dónde** · **BOE**, las órdenes TED de renovación de autorización, una por
reactor · **MITECO**, ficha de centrales · **IGN**, Nomenclátor.
**Licencia** · Textos legales sin dueño · Ley 37/2007 · IGN.
**Qué hay que saber** · **Un reactor por registro, aunque compartan
emplazamiento**: Almaraz I y II tienen autorizaciones, fechas y potencias
distintas. Y **dos fechas que no son la misma cosa** — `autorizacion_hasta` la
fija una orden del BOE; `cierre_acordado` es el calendario pactado en 2019.
Vandellós II: autorizado hasta 2030, acordado para 2035.
**Huecos** · 8 citas. El **Protocolo de 2019 entre Enresa y los titulares es un
acuerdo privado sin documento público localizado**, así que `cierre_acordado` va
vacío. Pendientes también la resolución de la prórroga de Almaraz y una
discrepancia de un día entre la ficha del CSN y la orden del BOE, que **no
cambia el dato pero queda dicha**.
**Archivado** · 8 ficheros · **El resto** · CHANGELOG `datos-v2026.08.2` · §10

## conducciones-combustible

**De dónde** · **IGN — BTN Continua**, tema Energía, objeto `0701L Conducción
de combustible`, con su atributo `TIPO_0701` (01 oleoducto / 02 gasoducto).
**Licencia** · IGN, ver arriba · atribución exigida: `Obra derivada de BTN
Continua CC-BY 4.0 ign.es`
**Qué hay que saber** · **DOS registros y no 3.106.** La BTN trae el campo
`nombre` **a NULL en todas** sus conducciones, así que bautizarlas por sus
extremos fabricaría nombres que nadie ha dado — es la misma decisión que hizo
que el tendido eléctrico fueran dos registros y no 1.784. Se publica lo que la
fuente sí distingue, que es el tipo. **La cobertura se midió ANTES de construir
nada**, y esa medición tumbó primero a la BTN100: traía 1.390 km de gasoducto y
no llegaba ni a Huelva, ni a Bilbao, ni a cinco de las seis interconexiones —
era una muestra, no la red. La BTN Continua da **11.116 km** de gasoducto, que
cuadran con la red de transporte española, y pasa **a menos de 5 km de las
siete plantas de GNL y de las seis interconexiones** que el atlas ya publica.
**La geometría va simplificada a 5 m** y no a los 25 del tendido: se probaron
cuatro tolerancias y se eligió por lo que CUESTA, no por lo que ahorra — a 25 m
se comía el 0,33 % de la longitud, veinte veces más que en el tendido, porque
estas conducciones curvan más que una línea que va recta entre torres.
**Huecos** · Los dos registros declaran los mismos. **La BTN no publica
titular, presión, diámetro ni si la conducción está en servicio**: es una carta
topográfica y responde de dónde está el eje. Quien sí publica el mallado con
esos atributos es el operador, fuente corporativa que por R3 no sostiene un
confirmado — y no se sustituye un dato por su parecido. **Y no hay fecha única
de actualización**: vive en el `f_alta` de cada tramo (el grueso es de 2018,
con revisiones sueltas hasta 2024), así que publicar un año único fabricaría
una precisión temporal que la fuente no da.
**La longitud la mide el atlas** · El IGN no publica ninguna. Por eso el campo
se llama `longitud_medida_km`, va `parcial` y mide sobre la geometría **ya
simplificada**: si midiera la original, la ficha diría una cifra que el mapa no
dibuja.
**Archivado** · 2 ficheros · **El resto** · CHANGELOG `datos-v2026.08.42` · §10

## gas-interconexiones

**De dónde** · **CORES** — su metodología estadística fija el perímetro (los
puntos de entrada y salida del sistema) y sus series mensuales dan el flujo ·
**BOE**, los actos localizados de cada conexión · **IECA (Junta de Andalucía)**,
DERA G10, para la geometría de Medgaz y del Magreb · **IGN**, Nomenclátor, para
las otras cuatro.
**Licencia** · CORES, atribución de fórmula fija «Fuente CORES (www.cores.es)» ·
Textos legales sin dueño · Ley 37/2007 · IECA, CC BY 4.0 · IGN.
**Qué hay que saber** · **El perímetro no lo elige el atlas: lo fija la
estadística oficial.** Son seis conexiones físicas porque eso es lo que enumera
la metodología de CORES, que es Plan Estadístico Nacional y por tanto primaria —
no fuente corporativa. **Los dos VIP no son registros**: desde octubre de 2014 la
normativa europea agrupa las cuatro conexiones europeas en VIP Ibérico y VIP
Pirineos, que son puntos virtuales sin ubicación. Y esa agrupación tiene una
consecuencia que hay que leer antes de citar nada: **desde 2014 no existe dato
oficial de flujo por punto físico para Francia y Portugal** — los ceros de
Badajoz, Tuy, Irún y Larrau en la serie son de contabilidad, no de caudal.
**Dos emisores para la geometría, y por un motivo** · **No existe ningún
conjunto de ámbito estatal, con licencia abierta, que sitúe estos puntos.**
Comprobado uno a uno: ENTSOG prohíbe expresamente redistribuir y derivar, y sus
campos de coordenadas no son geografía sino lienzo de su esquema (Larrau saldría
en el Pacífico); la CNMC tiene un SIG georreferenciado de la red pero es de
acceso restringido por certificado y VPN; Enagás es «todos los derechos
reservados»; y OpenStreetMap, que los cubre todos, es ODbL y su contagio lo
descarta. Lo que sí hay: el **DERA andaluz** traza las dos conexiones del sur
—y su punto de Medgaz cae 1,7 km al este del aeropuerto de Almería, que cuadra
con la prosa del acto—, y el **Nomenclátor** da el resto.
**Huecos** · Los 6 registros declaran alguno. **Cuatro conexiones no tienen acto
propio localizado** (Larrau, Irún, Tuy y Badajoz): son anteriores a la Ley
34/1998 y en los BOE de aquellos años **la sección de anuncios no lleva
identificador por documento** — la información pública del tramo Villalba-Tuy de
1996 vive dentro de un registro agregado y no se puede citar por sí sola. Lo que
las sostiene es el perímetro estadístico y, donde los hay, actos posteriores
sobre la misma conducción. Además: **ninguna capacidad se publica** en fuente
vigente (la planificación que la traía es de 2008 y da Medgaz «en
construcción»), y **el municipio de Larrau va vacío** porque el paso está en el
límite jurisdiccional y ningún acto dice a qué término pertenece el cruce.
**Un identificador que se cita sin arrastrar licencia** · El `codigo_entsog`
(ITP-00018 Larrau, ITP-00033 Irún, ITP-00052 Tuy, ITP-00064 Badajoz) se publica
como el hecho que es: hace la capa cruzable con los datos europeos de capacidad
sin tocar el contenido que ENTSOG prohíbe redistribuir.
**Película** · Medgaz y el Magreb-Europa tienen serie mensual de flujo desde
2004 (269 partes). Las otras cuatro NO, y es deliberado: su columna está a cero
desde 2014 por la agrupación en VIP, y doce años de ceros contables se leerían
como doce años sin gas.
**Archivado** · 10 ficheros · **El resto** · CHANGELOG `datos-v2026.08.41` · §10

## residuos-radiactivos

**De dónde** · **MITECO**, el **7.º Plan General de Residuos Radiactivos**
(Acuerdo del Consejo de Ministros de 27 de diciembre de 2023) — de él salen el
perímetro, las fechas de operación y las capacidades · **BOE**, el acuerdo que
lo publica y los actos de autorización de cada instalación · **IGN**,
Nomenclátor.
**Licencia** · MITECO, reutilización citando la fuente, sin no-comercial ni
compartir-igual · Textos legales sin dueño · Ley 37/2007 · IGN.
**Qué hay que saber** · **Autorizado no es existente.** Los cuatro ATI-100
tienen acto que autoriza «la ejecución y montaje»; la autorización de PUESTA EN
SERVICIO es un paso posterior y distinto, y no se ha localizado ninguno. Por eso
van en fase `desarrollo` y no `produccion`: es el campo que impide leer un
permiso de obra como un edificio en pie. **Un ATD no es una instalación**: el
plan lo define como el ATI de su central más una instalación complementaria, así
que darle ficha propia contaría dos veces el mismo edificio. **Y la capacidad va
en palabras, no en cifra**: cada instalación la mide en lo suyo —contenedores,
posiciones, celdas, metros cúbicos— y forzar una unidad común obligaría a
convertir, es decir, a inventar.
**Huecos** · Los 14 registros declaran alguno. El estructural: **la puesta en
servicio de los ATI casi nunca llega al BOE** —se autorizan como modificación de
diseño de su central, en dos pasos— así que las fechas de operación son las que
declara el plan, no las de un acto archivado. Y si los ATI-100 han entrado ya
en servicio —el plan lo esperaba para 2026— a este atlas no le consta
(recomprobado el 2026-08-19, sin novedad).
**Qué se corrigió** *(2026-08-19, release `.103`)* · **Dos huecos de la ficha
resultaron tener acto esperando en el BOE.** El almacén de Vandellós I, que
«no tenía ningún acto», ganó dos en 2026: la declaración de impacto ambiental
(BOE n.º 81, 2-4-2026) y la autorización de ejecución y montaje (BOE n.º 140,
9-6-2026) — su fase sube de `tramitacion` a `desarrollo`, y el hueco se
estrecha a la puesta en servicio. Y la ampliación de El Cabril tenía su acto
**desde enero de 2025**: la resolución que autoriza la ejecución y montaje de
la **Plataforma Sureste**, 27 celdas de baja y media actividad (BOE n.º 31,
5-2-2025) — el hueco que decía «sin acto localizado» se cierra y nace el
honesto: la puesta en servicio de esas celdas no consta. La lección es la del
GTC otra vez: un hueco declarado no es un hueco eterno, hay que volver a
buscarlo de vez en cuando.
**Dos cosas que la fuente dice y sorprenden** · El acto de explotación de El
Cabril **no la llama El Cabril** («instalación nuclear de almacenamiento de
residuos radiactivos sólidos de sierra Albarrana») ni cita el municipio; y su
autorización **no caduca por fecha sino por volumen** de celdas ocupadas.
**Archivado** · 17 ficheros · **El resto** · CHANGELOG `datos-v2026.08.38` y
`.103` · §10

## electricidad-interconexiones

**De dónde** · **DOUE**, Reglamento Delegado (UE) 2026/764, lista de la Unión ·
**MITECO**, Plan de desarrollo de la red de transporte 2021-2026 · **IGN**,
Nomenclátor para el extremo español.
**Licencia** · CE · Ley 37/2007 · IGN.
**Qué hay que saber** · **Un enlace tiene dos extremos y el atlas solo puede
situar uno.** El de fuera va nombrado y sin coordenada: dibujar una recta entre
los dos sería inventar el trazado.
**Huecos** · Los 5 registros declaran dos. Primero: **el estado es el que dicen
los instrumentos de PLANIFICACIÓN, no un parte de obra**. Segundo, y más grande:
**las interconexiones YA EN SERVICIO con Francia, Portugal, Marruecos y Andorra
no están en esta capa** — quien las inventaría es Red Eléctrica, fuente
corporativa.
**Archivado** · 3 ficheros · **El resto** · CHANGELOG `datos-v2026.08.9` · §10

## red-electrica

**De dónde** · **IGN — BTN**, tema Energía, objetos `0710L` «Línea eléctrica»
(atributo `TENSI_0710`: 03 = 220 kV, 04 = 400 kV) y `0719S` «Transformación
eléctrica».
**Licencia** · IGN, ver arriba · atribución exigida: `Obra derivada de BTN Continua CC-BY 4.0 ign.es`
**Qué hay que saber** · **Es cartografía, no un registro de titularidad.** El
mapa dice dónde está el tendido; **de quién es no dice nada**, y por eso el
esquema prohíbe `titular` y `propietario`. Por lo mismo el título dice «Tendido
de alta tensión» y no «red de transporte», que es una categoría jurídica que
ningún mapa certifica.
**Por qué 2 registros de tendido y no 1.784** · Las 18.505 líneas de la BTN
traen el nombre a nulo; bautizarlas por sus extremos habría fabricado nombres que
nadie ha dado.
**Huecos** · 61 subestaciones sin nombre, declaradas en vez de omitidas.
**Ojo con `longitud_medida_km`** · Va `parcial` a propósito: **la mide el atlas**,
y medir sobre un dato primario no convierte la medida en primaria.
**Archivado** · 2 ficheros · **El resto** · CHANGELOG `datos-v2026.08.20` · §10

## generacion-electrica-provincia

**De dónde** · **MITECO**, Estadística de la Industria de la Energía Eléctrica
2024 (provisional a 27-11-2025) · **IGN**, unidades administrativas · **MITECO**,
registro **Electra**, para poder decir con precisión qué falta.
**Licencia** · Ley 37/2007 · IGN.
**Qué hay que saber** · Es **generación, no potencia instalada**, y la diferencia
la impuso una licencia. La `categoria` es la **tecnología dominante**, un derivado
que el CI comprueba contra el argmax de las cifras del propio registro.
**Huecos** · Los 52, el mismo, y desde la `.40` **mejor explicado**: la potencia
**sí se publica instalación por instalación** —el registro Electra de MITECO,
71.000 instalaciones con potencia neta y bruta, diario, licencia compatible—
pero su exportación **corta la geografía en comunidad autónoma**: sin provincia,
sin municipio, sin tecnología. Y la provincia **existe en el registro de
origen**, porque el buscador de Electra filtra por las 52. Es un dato
**publicado a medias**, no un dato que no exista — y sumar las instalaciones por
provincia exigiría asignarles una que la fuente no da, o sea fabricarla. Las
otras tres puertas siguen cerradas y se recomprobaron: la estadística provincial
da GWh; la **CNMC** es CC BY-SA en sus 204 conjuntos **sin una excepción** (y su
material más granular vive fuera del portal, sin licencia declarada); y **REE**
llega a provincia pero es corporativa **y prohíbe el uso comercial**.
**Qué habría que pedir** · A la Subdirección General de Energías Renovables del
MITECO: que la exportación de Electra lleve **provincia, municipio y
tecnología** — los tres campos por los que su propio buscador ya filtra. No es
un dato nuevo: es dejar de recortar el publicado.
**Geometría** · `generalizada`: los 186 MB del IGN no se publican tal cual.
**Archivado** · 3 ficheros · **El resto** · CHANGELOG `datos-v2026.08.40` · §10

## hidrogeno-produccion

**De dónde** · **DOUE**, Reglamento Delegado (UE) 2026/764 · **CINEA**,
plataforma de transparencia PCI-PMI · **Comisión Europea**, resultados de la
subasta IF24 del Banco Europeo del Hidrógeno.
**Licencia** · CE, Decisión 2011/833/UE.
**Qué hay que saber** · **Siete plantas, no cinco**: dos de los cinco proyectos
nombran y sitúan dos plantas cada uno. Y **un registro obliga a publicar, no a
certificar**: cuando quien declara es una empresa, su texto mezcla el proyecto,
la ambición y el argumento de venta, y **solo el primero llega a un campo
numérico**.
**Huecos** · 1: el valle asturiano declara **1 GW de ambición y 150 MW de
proyecto en el mismo párrafo**, y la cifra que circula por ahí es la primera. La
ambición queda en `claves`, verbatim y con su condicional intacto.
**Archivado** · 4 ficheros · **El resto** · CHANGELOG `datos-v2026.08.13` y
`.14` · §10

## agua-embalsada

**De dónde** · **MITECO**, histórico del **Boletín Hidrológico Semanal**
1988-2026 (Dirección General del Agua) · **IGN**, Nomenclátor · **MITECO**,
**Inventario de Presas y Embalses** del SNCZI (desde la `.44`) · **IECA (Junta
de Andalucía)**, DERA grupo 3 «Hidrografía», solo para identificar (`.46`) ·
**MITECO**, Red Oficial de Estaciones de Aforo, para situar los cinco sistemas
del Pirineo (`.48`).
**Licencia** · Ley 37/2007 · IGN · IECA, CC BY 4.0.
**Qué hay que saber** · **La capa registra el agua, no el vaso.** La geometría
del embalse está tras el CAPTCHA del SNCZI; el agua embalsada está en abierto y
sin formulario. **La base no lleva coordenadas**: el punto se cose por nombre
contra el Nomenclátor, normalizando nueve prefijos en cuatro lenguas y el sufijo
vasco `urtegia`, y **cada punto se verifica** preguntando al Ministerio en qué
demarcación cae. Esa vuelta cazó seis emparejamientos falsos.
**Alcance** · **los 401 del Boletín, el 100 %**, desde la `.48`. Ojo al leerlo:
el Boletín no cuenta todo lo embalsado de España, así que 401 de 401 **no es la
reserva nacional** — la del Ministerio es algo mayor. El barrido del
Nomenclátor es **doble**: tipo «Embalse» (2026-08-07) y su ampliación a «Masa de
agua» y «Conjunto de masas de agua» (2026-08-09) — los embalses que el Boletín
llama por su lago (los estanys e ibones pirenaicos regulados) viven en esos
tipos, no en «Embalse».
**Dos anclas, y cada ficha dice la suya** · Hasta la `.44` todos los puntos
venían del Nomenclátor (`geo_precision: paraje`: el topónimo es primario para el
NOMBRE del lugar, no para el perímetro). Hoy son **367 del Nomenclátor y 34
`exacta`**: 28 del Inventario de Presas y 6 de estación de aforo. **Ojo al
contar** *(.51)*: 28 no son «los 27 que entraron entre la `.44` y la `.47`» —
son esos 27 **más Las Cogotas**, que ya estaba publicada y se **re-ancló** allí
al descubrirse a 157 km. **Re-anclar no es entrar, y contar entradas no cuenta
anclas**; el mismo desfase se coló con los sistemas del Pirineo, ahí abajo. Los
del Inventario vienen
del **Inventario de Presas y Embalses**, que publica la coordenada de la presa:
eso es `exacta` (§6.6), y su `geo_fuente` avisa de que el punto es la presa y el
vaso se extiende aguas arriba. Cuando un embalse tiene varias presas
—principal, diques de collado, la vieja que quedó inundada bajo el
recrecimiento—, se ancla en **la más alta desde cimientos**, que es la principal
por construcción. **Del Inventario se archiva solo el fichero de presas**: el de
vasos se descartó porque su punto habría que calcularlo del polígono, y el
centro del recuadro de un embalse sinuoso cae en tierra.
**Un topónimo no separa lo que la fuente no separa** *(.52)*. El Nomenclátor
tiene UN «Embalse de Santolea» donde el Boletín publica TRES embalses, y lo
mismo con Retortillo y con La Breña: siete fichas se apilaban en tres puntos, y
el mapa enseñaba una y escondía las otras. El Inventario de Presas sí las separa
presa a presa, y **la capacidad dice cuál es cuál** — se re-anclaron cinco, una
de ellas (Derivación Retortillo) a **11,8 km** de donde estaba. Las dos que
quedan compartiendo punto lo **declaran**: el Inventario registra allí presas de
48 y 93,7 hm³ y una «Cañón de Santolea» en construcción con 0,082, y ninguna
cuadra con los 5 y los 82 del Boletín. Antes que elegir a ojo, se dice.

**Las anclas del Nomenclátor, repasadas una a una** *(.54)*. Era el hueco más
viejo de la capa: los puntos se cosieron **por nombre** y solo un error enorme
—Las Cogotas a 157 km— se caza a ojo. El repaso coteja cada ficha con la presa
que le corresponde en el Inventario, emparejando por **nombre y demarcación** y
confirmando la identidad con la **capacidad**. De 359 parajes se contrastaron
**343**: mediana **58 m**, p90 **1,9 km**.

**Dos estaban mal, y una es de las gordas.** `alcantara-tajo` —3.160 hm³, el
mayor del Tajo— se anclaba en la charca de 0,2 hm³ del pueblo de Mata de
Alcántara; su presa se llama **José María de Oriol** y no «Alcántara», así que
ningún emparejamiento por nombre podía dar con ella. Y `losmolinos-guadiana`
estaba **a 194 km**: es Los Molinos de Matachel, en Badajoz, con 34,0 hm³
exactos. Los dos van ahora `exacta`, con su clave.

**Veintidós están lejos y bien**, de 3 a 15,8 km: son vasos de cola kilométrica
—Riba-roja, Cijara, Orellana, Valdecañas— donde el topónimo rotula **el agua** y
la presa queda al final. Cada uno lo declara, porque una distancia así sin
explicación parece un fallo.

**Los doce últimos se cerraron buscando al revés** *(.56)*. Doce quedaron sin
contrastar porque **ningún emparejamiento por nombre podía encontrarlos**: el
Inventario castellaniza los topónimos gallegos (Chandreja/Chandrexa, San
Esteban/San Estevo, **Santa Eugenia/Santa Uxía**), cambia grafías (Sant
Ponç/Sant Pons, Covo/Cobo, Abraham/Abrahán), expande o se come partículas, y en
un caso **nombra el embalse por su río**: el Catllar es «GAIA».

La salida fue dejar el nombre de lado y **buscar por cercanía y capacidad** —qué
presa hay junto a este punto con esta capacidad—. Los doce aparecieron **entre
10 y 150 metros**, con tres indicios convergiendo: la distancia, la capacidad y
un nombre que, una vez encontrado, **se reconoce**. **Ninguno estaba mal
colocado**, y con ellos los **359 puntos del Nomenclátor tienen ya su segunda
comprobación**.

| el Boletín dice | el Inventario dice | por qué no casaba |
|---|---|---|
| Chandrexa | CHANDREJA | topónimo gallego castellanizado |
| San. Estevo | SAN ESTEBAN | ídem |
| Sta Uxia | SANTA EUGENIA | ídem — y aquí ni se parecen |
| Villagudín | VILAGUDIN | al revés: el Boletín castellaniza |
| Riocobo | RIO COVO | otra grafía |
| Sant Pons | SANT PONC | otra grafía |
| Torre de Abrahán | TORRE DE ABRAHAM | otra grafía |
| Catllar | GAIA | **lo nombra por su río** |
| Pto. Vallehermoso | PUERTO DE VALLEHERMOSO | abreviatura |
| Agavanzal, Nª Sª de | NUESTRA SEÑORA DEL AGAVANZAL | abreviatura y orden |
| Santa María de Belsué | SANTA MARIA BELSUE | sin la preposición |
| Conde Guadalhorce | CONDE DE GUADALHORCE | con la preposición |

> **La lección, para el próximo catálogo que haya que cruzar:** emparejar por
> nombre es lo primero que se intenta y lo que más falla, porque **dos organismos
> del mismo ministerio no escriben igual el mismo sitio**. Una coordenada y una
> magnitud bastan para identificar, y no dependen del idioma.

> **Tres trampas que este repaso dejó medidas**, porque cada una llegó a dar un
> resultado falso antes de verse: aplanar el nombre **antes** de quitarle el
> prefijo convierte «Embalse de **La**nuza» en «nuza»; sin tildes **«PENA» y
> «PEÑA» son la misma palabra**, y ordenar solo por capacidad llegó a elegir una
> presa a 188 km; y el SNCZI a veces **alarga** el nombre del Boletín («Montoro»
> → «MONTORO III») teniendo además otra presa con el nombre corto en la misma
> cuenca, así que buscar los extendidos solo cuando no hay exactos elige la
> equivocada. Y una cuarta, que costó publicar una afirmación falsa y hubo que
> corregir el mismo día *(.55)*: **el prefijo hay que quitarlo de los DOS
> lados**. Se le quitaba «Embalse de» al nombre del Boletín y no al del
> Inventario, que llama a estos vasos «Ibón de Ip», «Darnius Boadella» o
> directamente «Arcos». Cuatro de los dieciséis dados por incontrastables sí lo
> eran, y los cuatro confirmaban su punto.

**Tres salvedades de la propia base, que ningún papel decía** *(.53)*. Las
encontró la auditoría del 2026-08-14 y ninguna es un defecto del atlas: son
propiedades de la fuente que había que escribir.
**Primera: el histórico empieza en 1987**, no en 1988 como lo titula el propio
MITECO — dos semanas de octubre con **un solo embalse**, que la página descarta
por su umbral de panel y lo dice. **Segunda: el umbral de «más de 5 hm³»
describe la base, no la gobierna**; hoy informan Cornalbo (3) y Rioseco (4), y
la página los nombra en el parte donde salgan. **Tercera: hay partes viejos con
embalses que dan agua y no capacidad** —3.290 puntos en los ochenta, ninguno
desde 2005—, lo que infla su porcentaje de llenado; se publica tal cual (§4.1)
y el parte de esa fecha lo advierte, contándolos.

**`NMN_CAPAC` del Inventario NO está en una sola unidad** *(.52)*. Medido sobre
los registros ya anclados en él —identidad cierta, sin adivinar—: da
**8.136.000.000** para Soto Terroba y **8.085.000.000** para Las Fitas, que es
exactamente lo que sale de leer sus 8,136 y 8,085 hm³ como metros cúbicos.
Cualquier comparación masiva contra este campo tiene que guardarse de eso o
fabricará desacuerdos de miles de millones por ciento. Los desacuerdos reales
—Fresneda, Laverne, Víboras y Las Parras— van declarados en su ficha, con la
cifra de las dos fuentes y sin elegir por el lector: **la capa publica la del
Boletín**, que es su fuente para el agua y la única que permite comparar
capacidad y reserva entre sí.

**Un conjunto se sitúa por su estación, no por sus piezas** *(.48)*. Los **seis**
«Sistema…» del Pirineo agregan lagos regulados de un valle y **ninguna fuente
publica de cuáles**; se buscó en ocho sitios y se dieron por imposibles. La
pregunta estaba mal hecha: la **Red Oficial de Estaciones de Aforo** le asigna a
cada sistema una estación de embalse con su punto, su volumen y su río, y con
eso no hace falta saber qué agrega. Dos de esas fichas vienen SIN NOMBRE (9853 y
9834) y se identifican por río, término, titular y volumen — van `parcial`. El
punto es el de la estación, no el de un vaso, y las fichas lo dicen.
**El Boletín agregó ocho lagos en 2006, y la capa lo dice** *(.47)*. El 26 de
septiembre de 2006 se cierran los partes individuales de ocho lagos regulados
del Pirineo y la semana siguiente nacen **seis** filas con nombre de sistema que
los agregan (Escarra 5 hm³ → «Sistema Escarra» 5; Respomuso 18 → «Sistema Aguas
Limpias» 18). No dejaron de medirse: dejaron de publicarse por separado. Las
ocho fichas conservan su última cifra INDIVIDUAL y lo cuentan. **Los seis se
publican desde la `.48`**, anclados en su estación de aforo — este párrafo decía
lo contrario, «siguen sin publicarse», una release después de dejar de ser
verdad, y contradecía al párrafo de arriba en el mismo documento *(corregido en
la `.51`)*. Sigue en pie lo que sí sigue siendo cierto: **ninguna fuente dice de
qué lagos se compone cada uno**, y anclarlos en uno de ellos fingiría que un
valle entero cabe en un punto.
**Una fuente puede probar una identidad sin dar un dato** *(.46)*. Tres embalses
estaban fuera porque el Boletín y el Inventario los llaman distinto, y ninguna
búsqueda por nombre junta dos nombres que no se parecen. Los une una tercera
fuente: el **Nomenclátor** rotula «Presa de la Cabezuela» y «Embalse de Mari
Sánchez» a sesenta metros, y el **DERA** registra la presa de Huelva como
«SOTIEL / OLIVARGAS», con los dos nombres a la vez. Ninguna de las dos aporta
una cifra a la ficha; aportan lo que faltaba, que era la identidad — y van
citadas y archivadas como cualquier otra.
**Ojo** · El esquema prohíbe `porcentaje_llenado` **por derivado**: sale de
dividir las dos cifras que la capa ya publica. Y el **WFS de demarcaciones
que usó la primera tanda ya no existe** (404 con su URL registrada en
datos.gob.es, capabilities rotos en disco): la verificación de cuenca se hace
ahora contra el **ArcGIS REST público del mismo Ministerio**
(`wms.mapama.gob.es/arcgis/rest/services/25830/aguaHidroDemarcaciones`), que
devuelve 404 a ratos sobre URLs que existen — se reintenta, no se concluye.
**La energía viene del boletín de la semana, y por eso no tiene película**
*(.50)*. `atlas.conjunto` publica cuatro cifras del CONJUNTO —la energía
almacenada teórica, su capacidad, la producción de la semana y la del año— y las
cuatro salen del **resumen semanal en PDF**, no del histórico. Es una fuente
distinta del mismo emisor y la misma operación: el Boletín publica el agua en
una base descargable desde 1988 y **la energía solo en el parte de cada
semana**. De ahí que no haya serie (§4.1: solo hay película donde hay negativo)
y que el archivo **se acumule**, un PDF por semana, al revés que la base de
embalses, que se reemplaza.
**Dos cosas puestas al lado, no una explicando a la otra** · La energía
almacenada **sí** es de estos embalses: es su agua convertida a electricidad por
un cálculo teórico del Ministerio. La **producción** es la nacional y la firma
REE, a quien el propio Boletín cita: incluye **centrales fluyentes** que no
salen de ningún embalse de esta capa. La página lo dice con esas palabras.
**Refresco** · Es la única capa con parte semanal, y su archivo se **reemplaza**:
el histórico viene entero cada vez (11 MB, 1988-2026), así que la copia nueva
sustituye a la anterior en lugar de acumularse — las copias de ediciones pasadas
viven en su etiqueta de Git y en su depósito de Zenodo. **El PDF del boletín es
la excepción**: ese se añade, porque cada uno trae una energía que ningún otro
documento repite. Y cada ficha lleva **su** parte: 25 embalses dejaron de
informar hace años y conservan su fecha, que es lo único cierto de ellos.
**Archivado** · 4 ficheros · **El resto** · CHANGELOG `datos-v2026.08.18`,
`.32`, `.43` y `.50` · §10

## cables-submarinos

**De dónde** · **BOE** y **MITECO**, anuncios y concesiones de Costas ·
**Autoridad Portuaria de Santa Cruz de Tenerife** · **IGN**, Nomenclátor.
**Licencia** · Textos legales sin dueño · Ley 37/2007 · IGN.
**Qué hay que saber** · **Registra aterrizajes, no trazados.** El recorrido de un
cable no tiene fuente compatible —TeleGeography es CC BY-NC-SA— y lo que sí
publica una fuente primaria es **dónde toca tierra**, porque ocupar dominio
público marítimo-terrestre exige un acto administrativo. La categoría `trazado`
está declarada y **sin usar**.
**La acotación** · Entra el cable que **une territorios separados por mar**, no
el que cruza una ría. Y un cable que atraviesa aguas españolas **sin aterrizar
aquí no entra**: el Europe India Gateway toca tierra en Gibraltar — se archiva,
se cita y se queda fuera.
**El barrido histórico, y por qué se puede creer su negativo** *(2026-08-21, release `.114`)* · Los otorgamientos antiguos **no salen por búsqueda web**, y eso tenía el frente parado como «hay que mirarlo con navegador». No hacía falta: **la API de sumarios del BOE —la misma que usa `otear.py`— llega hasta 1997**. Se barrieron **7.015 sumarios entre 1994 y 2016** casando el título, y **antes de creerle a un cero se validó el método** sobre 2017, donde devuelve el otorgamiento de Marea que ya estaba en la capa. De ahí salió el aterrizaje de **Canalink África en Granadilla** (BOE-B-2015-789, concesión de 2014, veinticinco años), segundo en el mismo puerto y con otra concesionaria. Y dos veredictos: **Columbus-III y Atlantis-2 en Conil no están** en once años de sumarios —si se publicaron, no con ese nombre en el título— y **el EIG no es de esta capa**: su DIA de 2010 describe un cable que cruza aguas españolas sin amarrar en España (sus puntos de conexión son Reino Unido, Portugal, Gibraltar, Mónaco, Francia…). El rastro de **Melilla–Península** quedó a la vista en contratos de 2010, 2011 y 2015: nombran el cable y sus extremos, no sitúan el amarre.
**Huecos** · 2: **el acto autoriza una ocupación, no bautiza un cable.** Los
expedientes de Santander y Sagunto no nombran sistema ni destino. La Ley
11/2022 obliga a comunicarlos al Ministerio, pero **el Ministerio no publica la
lista**.
**Ojo (desde 2026-08-09)** · **En Canarias el DPM-T lo tramita el Gobierno
canario**, no las Demarcaciones estatales: sus anuncios salen en el **BOC** sin
código CNC, y la documentación vive en
`gobiernodecanarias.org/costas/informacion_publica`. Y una subvención de un
real decreto **no sitúa nada**: los dos RD de PENCAN-X y el del ramal de
Fuerteventura están archivados como comprobados-y-fuera.
**Qué se corrigió** *(2026-08-19, release `.98`)* · Una revisión externa señaló
que faltaba **Marea** (Sopela, 2017) — y tenía razón, aunque su dato exigía
comprobación: el acto existe, es el **otorgamiento por Orden Ministerial de 20
de abril de 2017** (anuncio BOE-B-2017-40592) y nombra sistema y destino con
todas las letras. Al buscarlo apareció además el **otorgamiento de Grace
Hopper** (BOE-B-2021-39502, Resolución de 8.09.2021, misma referencia
CNC02/21/48/0001 que la información pública ya archivada): el acto que POR FIN
nombra el sistema que el anuncio inicial no bautizaba — la clave que contaba esa
carencia se reescribió con el acto en la mano, y `sistema` pasó de campo sin
aparato a **confirmado**. De paso, `conecta` de Grace Hopper decía «con el Reino
Unido y los Estados Unidos» sin que ningún documento archivado sostuviera lo del
Reino Unido: ahora dice lo que dice su acto (dirección a Smith Point, Nueva
York). **Dos cables, un arenal**: Marea y Grace Hopper aterrizan en la misma
playa de Sopela — el décimo registro comparte punto con el primero, y el visor
los marca como apilados.
**Qué se añadió** *(2026-08-19, release `.103`)* · **El undécimo aterrizaje,
y era un asunto de la agenda**: el cable **La Palma–Tenerife**, cuyo anuncio de
información pública se esperaba desde que su proyecto asomó en la web de Costas
canaria. Salió en el BOC n.º 32 (17-2-2026, anuncio firmado el 15-12-2025):
Telefónica de España, S.A.U., amarre en la «Playa de El Socorro» de Los
Realejos — que el anuncio nombra él mismo, sin tener que ir al proyecto básico
como en Base 6. El Nomenclátor recoge una única «Playa del Socorro» en toda
España y de ahí sale el punto. El acto no bautiza el sistema pero sí dice qué
conecta, así que —a diferencia de Santander— no hay hueco: hay un cable sin
nombre comercial. El anuncio se archivó en sus dos formas oficiales (facsímil
PDF y texto HTML del BOC), porque el PDF esconde un tramo de texto a la
extracción —una fuente incrustada sin tabla ToUnicode— y el HTML lo completa.
**Qué se añadió** *(2026-08-20, release `.105`)* · Dos piezas del barrido de
Costas que encargó el relevo. **El otorgamiento de Santander**: la concesión
del cable de la Virgen del Mar se otorgó por Orden Ministerial de 30-7-2024
(BOE n.º 208) — 26.281 m², 10 años prorrogables a 30 — y el acto TAMPOCO
bautiza el sistema, así que la pista «Anjana» sigue siendo prensa y el hueco
declarado sigue en pie; la fase sube a `desarrollo`, no a `produccion`, porque
nada acredita que el cable opere. **Y el duodécimo aterrizaje: PENCAN-X, lado
Rota** — la información pública andaluza (BOJA n.º 80, de 28-4-2026, exp.
CNC02-26-CA-0002) nombra el sistema y los dos extremos en su propio título y
sitúa solo por término municipal; los dos reales decretos de su subvención,
archivados en la `.33` como comprobados-y-fuera porque una subvención no sitúa
nada, entran ahora a decir lo que sí dicen. El BOJA se archivó en sus dos
formas (facsímil PDF y texto web): el PDF esconde su texto a la extracción,
como el del BOC.
**Archivado** · 24 ficheros · **El resto** · CHANGELOG `datos-v2026.08.17`,
`.33`, `.98`, `.103` y `.105` · §10

**Qué mide esta capa, dicho antes de que nadie se confunda** *(release `.117`)*
· **No es el mapa de los cables submarinos de España**: es el mapa de los
ATERRIZAJES que un acto administrativo publicado nombra y sitúa. Faltan cables
que existen, por cuatro motivos que están en las fichas y, desde la `.117`,
también en la nota `_` de la capa: un cable tiene **dos extremos y cada uno se
tramita aparte**; los **cables viejos** no vuelven a un boletín salvo caducidad,
remodelación o legalización; **el Estado tiene la lista y no la publica**; y lo
que **cruza aguas españolas sin amarrar aquí** no entra. Se cuenta entero en la
historia «Cuatro cables sin nombre, y el Estado sabe cómo se llaman».
**La Ley 11/2022, y por qué está archivada** *(release `.117`)* · Dos fichas
—Santander y Sagunto— venían afirmando desde su alta que el Ministerio tiene la
lista de cables y no la publica, **sin citar nada**. Era una afirmación sin
papel. Ahora se archiva el texto consolidado y se cita con sus dos anclajes: el
**artículo 6.9**, que obliga a comunicar todo cable submarino que engancha en
territorio español, y la **disposición adicional vigésima tercera**, que da dos
meses de plazo y exige en su apartado f) el **trazado del cable y el lugar del
enganche** — las dos cosas que a esas fichas les faltan. Y con ella, un negativo
verificado con el método de la casa: **el reglamento que el artículo 6.10
mandaba aprobar en tres meses no existe**, barridos los 1.515 sumarios del BOE
desde la entrada en vigor de la ley.
**2Africa, y cómo apareció** *(2026-08-21, release `.116`)* · El aterrizaje
español de 2Africa llevaba dos pasadas buscándose **por Barcelona**, sin acto,
porque el DOGC no se deja leer por un cliente no interactivo. Estaba en
Canarias: el **BOC n.º 165, de 22-8-2023**, somete a información pública la
solicitud de Vodafone Enterprise Spain para ocupar el dominio público
marítimo-terrestre con el **segmento W3-EGO** en la **Playa de Salinetas
(Telde)**. Lo encontró un BARRIDO del boletín entero, no una búsqueda; y el
mismo hallazgo metió el BOC en `otear-autonomicos.py`, de modo que el
otorgamiento —si llega— ya no habrá que buscarlo. **Es además el único acto de
esta capa que BAUTIZA el sistema con su segmento**, cuando la norma es que un
acto de Costas autorice una ocupación sin nombrar el cable.

## centros-datos

**De dónde** · **INAGA (Gobierno de Aragón)**, declaración ambiental estratégica
del Plan de Interés General «Expansión Región AWS en Aragón» (BOA n.º 150) ·
**JCCM (Castilla-La Mancha)**, Proyecto de Singular Interés «Meta Data Center
Campus»: acuerdo de aprobación definitiva del Consejo de Gobierno (DOCM n.º 205,
de 22/10/2024) y declaración de impacto ambiental (DOCM n.º 59, de 22/03/2024),
descargados del expediente oficial en `urbanismo.castillalamancha.es` ·
**Gobierno de Aragón (BOA)**, PIGA «ACS DC La Puebla»: Orden PEJ/865/2025 con el
acuerdo de declaración de interés (BOA n.º 140) y anuncio de información
pública del plan aprobado inicialmente (BOA n.º 237) · **BOE**, anuncio de
información pública de la acometida estatal (BOE-B-2026-24883) ·
**IGN**, Nomenclátor.
**Licencia** · Ley 37/2007 (BOA, DOCM, BOE) · IGN.
**Qué hay que saber** · **Entra el centro que un acto administrativo nombra, y
nada más.** España **no tiene registro público de centros de datos**: la base
europea se publica agregada por Estado, MITECO no lleva censo y las cifras de
mercado son de la patronal. De ahí que sean 8 y no 60.
**Qué se añadió** *(2026-08-19, release `.100`)* · **El séptimo, y el primero
fuera de Aragón**: el campus de Meta en Talavera de la Reina (promotora Zarza
Networks, S.L. — «una expansión de la presencia de Meta en Europa», dice el
propio acuerdo). A diferencia de los cinco de AWS, aquí el Nomenclátor SÍ
nombra el polígono que el acto cita —«Polígono Industrial Torrehierro»— y la
precisión sube de `municipio` a `paraje`. Y la ficha NO publica consumo anual:
la DIA da 240 MVA de demanda máxima —potencia, no energía— y convertirla a
GWh exigiría inventar las horas; el dato va en su clave, con su unidad.
**Qué se añadió** *(2026-08-19, release `.102`)* · **El octavo, y es una
exclusión que se revierte con motivo**: ACS DC La Puebla (La Puebla de
Alfindén, Zaragoza). La release `.89` lo dejó fuera con razón — sus actos de
entonces eran un concurso de capacidad que define una solicitud en un nudo y
una acometida en OTRO municipio—; los actos que lo nombran, sitúan y
dimensionan aparecieron después en el BOA: la declaración de interés
autonómico con interés general (campus de 150 MW ampliable a otros 150,
ámbito de 255.504,60 m² en el sector SP-1) y la aprobación INICIAL del PIGA
con su información pública conjunta. Por eso estrena la categoría
`en_tramitacion`, que el vocabulario tenía prevista y ninguna ficha usaba:
sin aprobación definitiva no es `autorizado`, por muchos megavatios que
prometa. El BOE de julio de 2026 —el anuncio de la acometida, que en la .89
fue motivo de exclusión— entra ahora como cuarta fuente: su propio título
llama al proyecto «acometida del centro de datos ACS DC LA PUEBLA».
**La trampa que enseñó** · **Una nota de prensa de una administración no es
fuente primaria.** Lo primario es el acto, no su anuncio: los «26 proyectos y
2.000 MW» catalanes no traían un solo expediente detrás.
**Qué se añadió** *(2026-08-21, release `.108`)* · **El noveno, y el primero de
Madrid**: el Campus de Centros de Datos de Microsoft 7724 Spain, S.L.U. en el
polígono Las Matillas de Alcalá de Henares, con la aprobación INICIAL de su
Plan Especial (BOCM n.º 234, de 1/10/2025) como acto y sus cifras —98.693,19 m²
según la memoria, 57,6 MW de potencia TI y 86,25 MW de consumo total según el
análisis ambiental— dichas como lo que son: **documentos del promotor dentro
del expediente de información pública**, que sostienen claves en `parcial` y no
campos. El Nomenclátor no nombra el polígono (la «Isleta de Matillas» es un
paraje fluvial, no el polígono): punto de `municipio`, el caso de AWS. Ese
mismo día se recomprobó el PIGA de ACS: **sigue sin aprobación definitiva**.
**Qué se añadió** *(2026-08-21, release `.109`)* · **El décimo, el primero con
coordenada de acto**: el centro de procesamiento de datos de Merlin Edged, SL
en Navalmoral de la Mata — Decreto 92/2026 (PREMIA) más el anuncio de su AAI
(expediente AAI25/032), que publica **el centro geométrico de la parcela I-64
en UTM** con su referencia catastral: precisión `exacta`, contrastada
punto-en-municipio contra el IGN. El anuncio imprime además la potencia TI (16
salas de 12 MW) y la maquinaria que de verdad activa la AAI: 104 generadores
diésel de 7,9 MW térmicos. Todo es decreto de interés más SOLICITUD en
información pública: tercer `en_tramitacion`. Y el decreto está **recurrido**
(TSJ de Extremadura, agosto de 2026, admitido a trámite): consta en la ficha
con su origen de prensa, porque los autos no se publican en boletín.
**Qué se añadió** *(2026-08-21, release `.110`)* · **El undécimo, con la
cadena de actos más madura**: el centro de Merlin en Arasur (Ribabellosa,
Ribera Baja/Erriberabeitia, Álava) — AAI **concedida** en 2023 al Edificio 3 y
DIA favorable de 2024 con la AAI modificada para el Edificio 2 (BOPV n.º 4 de
8/1/2025, archivado). El acto dimensiona por edificio (23.566 y 32.697 m²;
31.000 y 70.000 kW instalados) y publica **la coordenada UTM de cada foco de
emisión, motor a motor** — segunda `exacta` de la capa, con el huso **deducido**
a la manera de `zonas-defensa` (el acto no lo declara: se probaron los tres y
solo el 30 deja el punto en el municipio que el acto nombra).
**Qué se añadió** *(2026-08-21, release `.112`, contrato 1.67.0)* · **El duodécimo, y lo trajo el vigía nuevo**: el campus «Zaragoza-WIND» de Merlin en Botorrita, que `otear-autonomicos.py` encontró en su segunda corrida —un acto del BOA de hacía una semana que una jornada de búsqueda a mano se había dejado—. Entra en `paraje`: el acuerdo nombra el polígono industrial San Antonio y el Nomenclátor tiene ese paraje en Botorrita, comprobado punto-en-municipio. **Y con él cae la prohibición de `potencia_it_mw`**: el acuerdo afirma «una potencia total de 144 MW IT» en su propia descripción, así que el motivo de la prohibición —«ningún acto la da»— dejó de ser verdad. El campo vuelve con una vara en su lugar: solo lo llena un acto que AFIRME la cifra; memoria recitada, solicitud o nota corporativa siguen yendo a claves.
**Huecos** · 8 + los de los cuatro últimos. **La potencia TI en MW no la certifica
ningún acto** — la dan la patronal y los operadores (R3); el acto de ACS la
roza (20-30 MW POR SALA), el expediente de Alcalá la publica en documentación
del promotor, el anuncio de Navalmoral la IMPRIME entera (16 salas × 12 MW)
como solicitud, y la AAI resuelta de Arasur da potencia eléctrica instalada,
no TI: la prohibición del esquema aguanta, y el día que una resolución recoja
la cifra habrá que releer su motivo. Las aprobaciones pendientes de los
`en_tramitacion` (ACS, Microsoft y la AAI/DIA de Merlin Navalmoral) y la AAI
original de Arasur de 2023 (citada por el acto archivado, sin publicación
propia localizada) quedan de guardia en AGENDA: ni el BOA, ni el BOCM, ni el
DOE, ni el BOPV los vigila nadie automático.
**Qué se añadió** *(2026-08-21, release `.111`)* · **La Región Microsoft de
Aragón, con sus tres campus** (La Muela, Villamayor de Gállego y Zaragoza —
este último, «Puerto Venecia» según el anuncio): cada uno con su declaración
de interés autonómico citada con su BOA, y los tres colgando de la Orden
FOM/1520/2025 (PIGA aprobado INICIALMENTE, BOA n.º 223 de 18/11/2025) y del
anuncio conjunto de información pública del mismo boletín — ambos archivados,
con las superficies por ámbito, los expedientes de AAI por centro y las
acometidas «DAY 1» a 132 kV. Tres `en_tramitacion` más, sin un megavatio
publicado en acto: los que circulan son de prensa y no entran.
**Archivado** · 24 ficheros · **El resto** · CHANGELOG `datos-v2026.08.11`,
`.100`, `.102`, `.108`, `.109`, `.110`, `.111` y `.112` · §10

## hidrogeno-red

**De dónde** · **DOUE**, Reglamentos (UE) 2026/764 y 2022/869 · **CINEA**,
plataforma PCI-PMI · **BOE**, Acuerdo del Consejo de Ministros de 30-07-2024 que
habilita a Enagás.
**Licencia** · CE, Decisión 2011/833/UE · textos legales sin dueño.
**Qué hay que saber** · **No es el H2Med**: de sus 3.268 km, **2.634 son la red
troncal española**. El perímetro lo fija el Acuerdo del Consejo de Ministros, que
habilita **cinco** proyectos —dos de ellos, las cavernas de sal, que el relato
público del H2Med **no menciona nunca**.
**Lo que la fuente advierte** · Su geometría «no prejuzga y puede no coincidir
con el trazado final». Por eso `geo_precision: proyectada`, que no es un sinónimo
elegante de `ilustrativa`: dice que **el terreno todavía no puede desmentirla**.
**Sobre una geometría proyectada no se mide.**
**Huecos** · 3 estaciones de compresión que la fuente nombra y no dimensiona.
**Archivado** · 5 ficheros, incluida la lista **derogada** de 2024 —se conserva
porque la comparación entre las dos es un dato.
**El resto** · CHANGELOG `datos-v2026.08.12` · §10

## puertos

**De dónde** · **Puertos del Estado** — «Zonas de servicio portuarias de
España», servicio **WFS INSPIRE** (`geoserver.puertos.es`).
**Licencia** · **CC BY 4.0**, y esta vez está verificada en el metadato INSPIRE
del propio organismo, que dice literalmente: «No se aplican condiciones de acceso
y uso. **CC BY 4.0 Puertos del Estado**».
> **Ojo con leerlo en el sitio equivocado.** El `GetCapabilities` del WFS
> devuelve `Fees: NONE` y `AccessConstraints: NONE` con `ProviderName: OSGeo` —
> son los **valores por defecto de GeoServer**, plantilla sin tocar, no una
> declaración de Puertos del Estado. La licencia buena está en el registro CSW.

**Qué hay que saber** · **Un puerto no es un registro.** La ley delimita a cada
uno una zona de servicio **terrestre** y **dos de aguas** —la I abrigada, la II
de espera—, así que **43 puertos dan 164 recintos**, y en el mapa un puerto ocupa
mucho más mar que tierra.
**Qué NO se interpreta** · El servicio rotula cada recinto «DEUP» o
«Desafectación» y **no documenta qué distingue**. No es un matiz: desafectar es
**sacar** suelo del dominio público, y son **48 de 164**. Lo resuelve el propio
publicador, que titula el conjunto «Zonas de servicio portuarias de España». **El
campo va verbatim y el atlas declara que no lo interpreta.**
**Huecos** · 24 astillas descartadas: partes que tras redondear a 5 decimales
quedan bajo el metro cuadrado. Entre todas, **1,89 m² de 2.200 km²**.
**Archivado** · 1 fichero + el metadato de licencia
**El resto** · CHANGELOG `datos-v2026.08.23` · §10

## rte-t

**De dónde** · **Reglamento (UE) 2024/1679**, Anexo II — leído en el **espejo
HTML del BOE** · **IGN**, unidades administrativas.
**Licencia** · Texto legal sin dueño · IGN.
**Qué hay que saber** · **La red básica no es «más importante» que la global.**
Son los dos plazos del Reglamento: **2030** y **2050**. Un calendario con fuerza
legal, no una escala de prestigio.
**Lo que se hizo a mano** · **35 de los 77 nodos llevan una equivalencia
declarada** entre el nombre del Reglamento y el municipio del IGN. **No la ha
hecho un emparejador**: va una a una con su motivo, para poder discutirse.
**Verificación** · Los **77 de 77** puntos vuelven al municipio que declaran,
preguntando al IGN de vuelta.
**Archivado** · 2 ficheros · **El resto** · CHANGELOG `datos-v2026.08.23` · §10

## ferrocarril

**De dónde** · **Adif** — Red de Transporte Ferroviario, IDE de Adif
(`ideadif.adif.es`), servicio **WFS INSPIRE**, versión 2026/01.
**Licencia** · Verificada en el metadato INSPIRE de Adif, que exige una fórmula
literal: «Se permite cualquier uso si se menciona la autoría de ADIF del
siguiente modo: **© Administrador de infraestructuras ferroviarias**». Es
atribución sola, sin ShareAlike ni NonCommercial: compatible.
> **Corregido el 2026-08-08:** el manifiesto usaba «Administrador de
> Infraestructuras Ferroviarias (Adif)» y ahora lleva el literal con su símbolo.
> Y ojo con dónde se busca: **el `GetCapabilities` de Adif no trae `Fees` ni
> `AccessConstraints`** — no declara nada. La licencia está en el CSW.

**Qué hay que saber** · 326 líneas y **24.136 km** de titularidad estatal. Desde
la **segunda pasada** (2026-08-19, release `.96`): ancho de vía, electrificación,
vías, velocidad de diseño y uso — leídos de las **capas de propiedades** del
mismo servicio, un objeto por tramo con el id del tramo (1.689 en cada una,
misma edición 2026/01 que los tramos archivados; el enriquecedor lo comprueba).
**Tres erratas de la fuente, anotadas y no corregidas en silencio:**
`NominalTrackGauge` no sale en el `GetCapabilities` (se pide por su nombre
INSPIRE y responde); el ancho viene con `uom="m"` y valor `1668.0` — son
milímetros, y el campo se llama `ancho_via_mm` para que la unidad no dependa de
la fuente; y `RailwayUse` escribe «pasagens» donde el vocabulario dice
`passengers` (138 tramos), leído como viajeros.
**Lo que la segunda pasada CONFIRMÓ que no se puede publicar** ·
`alta_velocidad`. La capa que el esquema señalaba como su futura fuente,
`RailwayType`, dice `train` en los 1.689 tramos: no distingue la alta velocidad,
y el enriquecedor comprueba en cada corrida que siga siendo así. Los 300 km/h de
diseño están publicados a la vista; la etiqueta la pondrá un acto, no este atlas.
**Lo que el dato nuevo retrata solo** · Las seis líneas «FUERA DE SERVICIO EJE
1-6» declaran **cero vías**, y los «CAMBIADOR» de ancho llevan el ancho
`notApplicable` — que es literalmente la respuesta correcta en un cambiador.
Cinco ramales (Maliaño-Raos, Llovio-Ribadesella…) declaran **0 km/h** de diseño
y se publican tal cual: corregirlos a un número «razonable» sería inventar.
**Huecos** · Las 29 líneas de 355 sin ningún tramo **quedaron explicadas el
2026-08-20, y el hueco es de la fuente**: las 29 —y solo ellas, ninguna de las
326— llevan una «C» como tercer carácter del código (`11C10`, `13C30`…), una
familia aparte del inventario cuyos nombres leen como corredores y conexiones
de alta velocidad («MADRID - VALLADOLID - F. FRANCESA», «RAMAL CONEXIÓN
ALICANTE-MURCIA», «Conexión Ancho Estándar Corredor Mediterráneo»…), y Adif las
publica con la lista de tramos **vacía**: su `net:link` va sin contenido y los
1.689 tramos del servicio pertenecen todos a las otras 326. Una llega a duplicar
el nombre exacto de una línea dibujada (PALENCIA-SANTANDER). El servicio vivo se
volvió a preguntar ese día y sigue sirviendo 355 líneas y 1.689 tramos: **no hay
geometría que incorporar sin inventarla** — si una edición futura les diera
tramos, el cruce por prefijo los encontraría. Los 2.682 nodos
que esta ficha declaraba pendientes de criterio **ya no son hueco**: viven en su
propia capa, `ferrocarril-nodos`, clasificados con la Declaración sobre la Red
(release `.97`).
**Archivado** · 2 ficheros + el metadato de licencia
**El resto** · CHANGELOG `datos-v2026.08.96` · §10

## ferrocarril-nodos

**De dónde** · **Adif** — los mismos `tn-ra:RailwayStationNode` del WFS INSPIRE
archivado para la capa de líneas (2.682 nodos con nombre, código y posición,
edición 2026/01) · **Adif** — Declaración sobre la Red 2026 (ed. 12/12/2025),
Catálogo 1: «Relación de instalaciones de servicio», el documento que el art. 32
de la Ley 38/2015 obliga a publicar — primaria por la misma doctrina que la
plataforma PCI-PMI (contrato 1.16).
**Licencia** · La de Adif (atribución con fórmula literal, ver `ferrocarril`).
**Cómo se obtuvo el catálogo, y es parte de la procedencia** · adif.es sirve
**403 a todo cliente no interactivo** (curl, Playwright con Chromium headless);
la página respondió a un navegador Edge real, que dio los enlaces vigentes, y el
PDF se descargó de la **captura del Internet Archive del 2026-04-14 de esa misma
URL** — bit a bit el documento que adif.es publica hoy en
`20251212_04_DR_Adif_Relac.IISS_2026.pdf`. El libro completo de la DR (13,5 MB)
también se consultó; las capturas del archivo de sus ediciones de marzo y julio
de 2026 están **truncadas a 5 MiB en origen** y no valen como copia.
**Qué hay que saber** · El criterio de clasificación NO podía salir del WFS: sus
atributos INSPIRE están rellenos con constantes (`formOfNode` = «railway stop» y
CERO andenes en los 2.682 nodos, **hasta en Madrid-Atocha**). Clasifica el
CRUCE con el catálogo, por nombre —el catálogo no trae códigos—, y el cruce
está acotado a las filas de titularidad **Adif / Adif AV**: las secciones de
cargaderos privados, talleres (RENFE y privados) y puertos llevan otro titular
y nombran UBICACIONES, no identidades — quedan fuera, y la categoría negativa
lo dice con precisión. Los homónimos no se casan (45 nodos `sin_clasificar`,
cada uno con su nota), salvo cuando hay tantas entradas como nodos y todas
dicen lo mismo (los dos «MENDEZ ALVARO»). **31 equivalencias de grafía se
resolvieron una a una** con su motivo en el extractor — erdia=centro (euskera),
B/V vasca, valenciano/castellano («XILXES»=«CHILCHES»), abreviaturas del WFS
(«MADRID-P. DE ATOCHA») y, para las dudosas, las coordenadas del nodo contra la
provincia de la cabecera del catálogo. Una errata del WFS quedó a la vista:
«SAM ROQUE DEL ACEBAL».
**Qué certifica cada campo** · `tipo_dr` y `categoria_estacion_dr` (la del canon
del art. 98.5, 1-6) son literales del catálogo; `codigo` es el id del nodo en la
explotación de Adif, confirmado por `tn-ra:RailwayStationCode`; la posición es
la del WFS a 5 decimales (§4).
**Huecos** · 2. **47 instalaciones del catálogo no tienen nodo en el WFS**
(Madrid-Abroñigal, Vitoria-Mercancías, Ciñera, apeaderos-cargadero…): el WFS no
modela todas las instalaciones de servicio, y el atlas no les inventa posición.
Y **el número de viajeros por estación no existe en ninguna de las dos
fuentes** — cuando haya estadística oficial por estación, entrará con su cita.
**Archivado** · 2 ficheros (el GML compartido con `ferrocarril` y el catálogo)
**El resto** · CHANGELOG `datos-v2026.08.97` · §10

## limites-soberania

**De dónde** · **DOUE**, Decisión (UE) 2026/1732 sobre Gibraltar · **BOE**,
Estatutos de Autonomía de Ceuta y Melilla · **MAEC**, posición oficial de España
· **IGN**, Nomenclátor.
**Licencia** · Textos legales sin dueño · IGN.
**Qué hay que saber** · **El atlas registra que la reclamación existe y quién la
sostiene; no dicta veredicto** (D5). Por eso hay exactamente dos campos
simétricos —quién administra y quién reclama— y Gibraltar y Ceuta se describen
con la misma vara. **Un tratado acredita la posición de una parte, no la razón de
nadie.**
**Huecos** · 10 citas, y son los más elocuentes del atlas: **el Tratado de
Utrecht (1713) no está archivado** de emisor autorizado, siendo el instrumento
que ambas partes citan; **no hay ningún instrumento oficial marroquí archivado**
que formule la reclamación sobre Ceuta o Melilla —se registra como existente, no
como acreditada—; y **el Nomenclátor del IGN no nombra Gibraltar**, comprobado
por etiqueta y por recuadro sobre el Peñón.
**Archivado** · 5 ficheros · **El resto** · CHANGELOG `datos-v2026.08.3` · §10

## espacios-maritimos

**De dónde** · **ONU**, el expediente de la presentación española n.º 77: su
resumen ejecutivo, **las cinco comunicaciones** que recibió —de Marruecos, de
Portugal y dos de la propia España— y la tabla de presentaciones de la Comisión ·
**Reino de Marruecos**,
Boletín Oficial n.º 6870 (leyes 37-17 y 38-17, traducción oficial) · **BOE**, RD
2510/1977, Ley 44/2010, convenios de delimitación con Francia (BOE-A-1975-14608
y 14263) e Italia (BOE-A-1978-29664) y RD 236/2013 (ZEE del Mediterráneo) ·
**ONU (DOALOS)**, decreto presidencial argelino 18-96 (JORADP n.º 18, copia
depositada), notas verbales de España (2018) e Italia (2018), respuestas
argelinas (2019) y páginas de Estado de España y Argelia · **GEBCO**, gazetteer
submarino.
**Licencia** · Textos legales y documentos de organismos internacionales.
**Qué hay que saber** · La misma doctrina D5, en el mar. **En aguas disputadas no
se dibuja frontera**: se dibuja la zona sin delimitación acordada, y va
`geo_precision: ilustrativa` a propósito. `ambito: mundo` porque la plataforma
más allá de las 200 millas **cae fuera del recuadro de España por definición**
—los puntos de la presentación española llegan a 24,7° W—.
**Qué se corrigió** *(2026-08-18)* · La ficha decía «Quién objetó: Marruecos y
Portugal», **confirmado**, citando la nota MARROQUÍ — que no puede acreditar lo
que hizo Portugal. Al ir al expediente aparecen **cinco comunicaciones de tres
Estados**, la ONU las llama «comunicaciones recibidas» y ni la marroquí pide que
no se examine: pide que se tenga en cuenta **al** examinar. Se corrigió también
la cita del estado jurídico, que afirmaba el presente de 2026 apoyándose en el
resumen ejecutivo **de 2014**: ahora la sostiene la tabla de la Comisión, donde
las columnas de subcomisión y recomendaciones siguen vacías.
**Qué se corrigió** *(2026-08-18, segunda pasada)* · El hueco de la comunicación
portuguesa **no era un hueco**: era una renuncia. El PDF que sirve la ONU es una
página, una imagen y cero fuentes tipográficas, y de ahí a «no se puede citar»
hay un paso que no había que dar — **«no se puede extraer» no es «no se puede
leer»**. Se descomprimió el XObject de imagen (1704 × 2200 px, Separation/Black)
y se leyó a tamaño natural. La nota dice que Portugal **no se opone** a que la
Comisión examine la presentación española, con una sola salvaguarda; ese párrafo
llevaba doce días publicado como incitable. La transcripción va archivada al lado
del escaneo (`fuente.transcripcion`, contrato 1.60) para que se pueda contrastar.
De paso se leyeron **uno a uno los 448 renglones del Anexo 1** del resumen
español: de ahí salen el reparto por fórmulas, los dos extremos de la línea —PF‑1
en la equidistancia con Portugal, PF‑448 contra las 200 M de terceros Estados— y
la discrepancia del «FOS_30», que 61 puntos citan aunque el §7‑4 declare 29 pies
de talud.
**Qué se amplió** *(2026-08-19)* · La capa sale del expediente canario: entran
las **dos únicas delimitaciones cerradas por tratado en vigor** —plataforma
continental con Francia (golfo de Vizcaya, 16 puntos Q–R–T) y con Italia
(Baleares–Cerdeña, 10 puntos A–L)— y las **dos ZEE declaradas y enfrentadas del
Mediterráneo**: la española del RD 236/2013 (54 puntos, WGS84 declarado) y la
argelina del decreto 18-96 (62 puntos, WGS84 declarado). Las cuatro son la
tabla de su acto, pasada a decimal con 5 decimales — nada más. El punto 2
argelino y el punto inicial español son **el mismo, minuto por minuto**, y el
solapamiento no lo dice el atlas: lo dice la nota verbal española de
27-07-2018, archivada con la italiana y las respuestas argelinas. Los convenios
de 1974-78 **no declaran datum** y cada `geo_fuente` lo dice. *(Segunda tanda,
mismo día)*: la **zona especial Z1–Z4** del artículo 3 del convenio con Francia
—cuatro vértices exactos y un régimen de «reparto a partes iguales de sus
recursos» (anexo II)— y el **corredor Canarias–Madeira sin delimitar**, gemelo
del marroquí: perímetro ilustrativo con su hueco, sostenido por las notas
España–Portugal de 2015 ya archivadas y por la tabla de DOALOS. *(Tercera
tanda, mismo día)*: las **líneas de base rectas del RD 2510/1977** — 154
puntos en 31 tramos, once registros multilínea con el reparto del propio
anexo. La tabla HTML del BOE conserva el entrelazado a dos columnas del
facsímil y traía un bloque corrido y dos celdas perdidas: se recompuso con
costura explícita **validada por el encadenamiento de topónimos del anexo**,
se restauró del facsímil (archivado, con su corrección de errores de
20-10-1977, que solo toca el preámbulo) y se contrastó punto a punto contra el
litoral provincial. La discrepancia de punta Grieta —impresa 32 km mar
adentro— se dibuja como está publicada y se cuenta en su clave. *(Cuarta
tanda, mismo día)*: la **ZEE francesa del Mediterráneo** (décret 2012-1148 vía
su copia depositada, M.Z.N.94.2013; solo sus loxodromias — los tramos que el
anexo remite a las aguas territoriales no se dibujan) con la **protesta
española de 23-10-2012 archivada y citada**; la **zona de protección pesquera**
de 1997/2000 con los 58 puntos de su depósito (M.Z.N.34.2000, «Datum Postdam»
sic — el único límite español con datum pre-WGS84 declarado); y el corredor de
**Alborán** sin delimitar, que se detiene al oeste de la isla a propósito.
**Huecos** · 2. **Ningún instrumento dibuja la zona sin delimitar**: trazarla con
precisión sería dictar la delimitación que los dos Estados dejan a un acuerdo.
Y las cifras de telurio y cobalto del monte Tropic vienen de campañas científicas
que este atlas no ha archivado. *(2026-08-19)* · El **convenio del mar
territorial con Francia** (BOE-A-1975-14263) no publica una sola coordenada
—define sus puntos M, P y Q por referencias geográficas y una carta anexa—, así
que su línea no se dibuja: digitalizarla sería calcular, no copiar. Con
**Portugal** los dos convenios de 1976 figuran en la tabla de DOALOS firmados y
sin constancia de entrada en vigor: el frente Canarias–Madeira tiene desde la
segunda tanda su registro `sin_delimitar` (perímetro ilustrativo con hueco);
los del **Miño y el Guadiana** siguen sin registro que dibujar. **Alborán, Ceuta y
Melilla**: sin instrumento que publique línea alguna — y el anexo del RD
2510/1977 **tampoco traza líneas de base para las plazas**: ese silencio es
del acto. *(2026-08-19, tercera tanda)* · Las líneas de base ya NO están
pendientes: son once registros. España **no las ha depositado ante la ONU**
(el M.Z.N.19.1998 que lo parecía es la zona de protección pesquera del RD
1315/1997, «geodetic system Potsdam», sustituido por el M.Z.N.34.2000; la nota
francesa de 1998 responde a esa zona). La zona de pesca, la ZEE
francesa y el corredor de Alborán dejaron de ser candidatas en la cuarta
tanda: son registros. *(Quinta tanda, mismo día)*: **Gibraltar** — la
discontinuidad de las líneas de base en la bahía de Algeciras deja de parecer
un dato que falta: el registro `aguas-gibraltar` dibuja las siete polilíneas
del fichero oficial del **UKHO** (OGL v3.0, fórmula de atribución literal en
el manifiesto; tres tramos etiquetados por el propio fichero «median line in
absence of agreed maritime boundary») y cita enfrente la **Ley 10/1977**
(disposición final primera, Utrecht), la posición del MAEC sobre las aguas
adyacentes y la salvaguarda del acuerdo UE–Reino Unido de 2026. España no
publica coordenadas de su posición, y por eso no se dibuja ninguna geometría
española. *(Sexta tanda, mismo día)*: las siete polilíneas de Gibraltar se
**reparten en tres registros según el campo Feature del propio UKHO** — mar
territorial, medianas «in absence of agreed maritime boundary» (categoría
nueva `linea_media_sin_acuerdo`, trazo continuo) y líneas de cierre del puerto
(categoría técnica `linea_cierre`: sistema de líneas de base, no límite
exterior) —, porque con una sola simbología el mapa las leía como dos límites
exteriores. Ni una coordenada cambió: la auditoría casó cada parte punto por
punto con su feature de origen. Candidata que queda anotada: la **presentación conjunta
Francia–Irlanda–España–Reino Unido ante la CLCS (2006)** por el golfo de
Vizcaya, que asoma en el expediente francés de DOALOS.
**Licencia (añadido de la quinta tanda)** · El fichero del UKHO es **Open
Government Licence v3.0** y exige fórmula de atribución literal, que viaja en
la atribución de la capa — el mismo trato que la fórmula del IGN.
**Archivado** · 34 ficheros · **El resto** · CHANGELOG `datos-v2026.08.89` · §10

## perte

**De dónde** · **Ministerio de Industria y Turismo**, listado de solicitudes
estimadas de la **Propuesta de Resolución Definitiva del PERTE VEC — Sección B,
convocatoria 2024** · **IGN**, Nomenclátor de municipios.
**Licencia** · Ley 37/2007 · IGN.
**Qué hay que saber** · **Es una propuesta de resolución, no la resolución.** La
final se notifica por registro electrónico y no es públicamente citable. Por eso
los campos se llaman `subvencion_propuesta` y `prestamo_propuesto` **con la
palabra dentro** —un asterisco no lo lee nadie— y el esquema prohíbe `subvencion`
a secas.
**La trampa que enseñó** · **Hay documentos oficiales que no son una tabla aunque
lo parezcan.** Es un registro por comisiones de verificación donde **una
aparición posterior REVISA a la anterior**: contar filas da 61 y los expedientes
vigentes son **57**. Lo demuestran sus propios totales, que cuadran al céntimo.
**Archivado** · 2 ficheros · **El resto** · CHANGELOG `datos-v2026.08.15` · §10

## idioma

**De dónde** · **22 textos constitucionales y legales** de sus respectivos
Estados, más el Reglamento de la Asamblea General de la ONU y los Tratados de la
UE · **Natural Earth** para el punto de cada capital.
**Licencia** · **Un texto legal no tiene dueño** (art. 13 TRLPI): las
constituciones se archivan enteras y se republican sin permiso. Natural Earth es
**dominio público**.
**Qué hay que saber** · **Es la única capa `registro: analisis` del atlas**: eso
**marca la tesis, no rebaja la prueba** (§6.7). Cartografía el **estatuto** del
idioma, no la demolingüística —que se cayó por la licencia del Instituto
Cervantes—, y **desmiente el mapa de un solo color**: México no declara idioma
oficial (es «lengua nacional», a la par que las indígenas) y Argentina, Chile y
Uruguay no nombran la lengua.
**Ojo con Natural Earth** · Va declarada **`corporativa`**, no primaria, aunque
sea de dominio público: el tipo de fuente dice **quién responde del dato**, no si
se puede copiar.
**Archivado** · 23 ficheros · **El resto** · CHANGELOG `datos-v2026.08.16` · §10

## red-geodesica

**De dónde** · **IGN**, tabla de coordenadas de las estaciones de la Red
Geodésica Nacional de Estaciones de Referencia GNSS (ERGNSS): 123 estaciones con
sus coordenadas geocéntricas, geográficas y UTM y su altitud elipsoidal. **La
fuente ES la geometría** — no hay que geocodificar nada ni pedirle un topónimo
al Nomenclátor, que es lo raro en este atlas.
**Licencia y qué obliga** · **CC-BY 4.0** del IGN (Orden FOM/2807/2015), con
fórmula literal. La tabla de productos del SCNE —a la que la propia licencia
remite— da a esta red el identificador **`ERGNSS`**, la fecha **2025** y la
atribución `ign.es`, así que la obra derivada obliga a **«Obra derivada de
ERGNSS 2025 CC-BY 4.0 ign.es»**. Es el **cuarto producto** del IGN con fórmula
propia en este atlas, junto a BTN, NGBE y BDLJE.
**Qué hay que saber** · **Son DOS marcos de referencia, no uno**: el IGN sirve
la Península, Baleares, Ceuta y Melilla en **ETRS89** (107 estaciones) y las
Canarias en **REGCAN95** (16), en dos tablas separadas. Ninguno de los dos ES
WGS84, que es lo que exige RFC 7946: la diferencia es de decímetros y no cambia
un píxel del mapa, pero **cada registro declara el suyo** en
`marco_referencia` en vez de callarlo. La latitud y la longitud vienen
**partidas en celdas** —grados, minutos y segundos cada uno en su `<td>`, y el
hemisferio en otro—: una fila son 16 celdas, no 6.
**Cómo se sabe que siguen emitiendo** · La tabla de coordenadas **no publica
estado**, y en la primera pasada eso se declaró como hueco y dejó los 123
registros en `parcial`. Buscando más hondo aparece que **el propio IGN sirve los
datos crudos por día** en `datos-geodesia.ign.es/ERGNSS/diario_30s/AAAA/AAAAMMDD/`,
un fichero RINEX por estación: aparecer ahí **no es un indicio de que la estación
funcione, es el fichero que produjo ese día**. Comprobado sobre cuatro días
repartidos de julio y agosto de 2026, **las 123 emiten**, y el extractor
**revienta** si una publicada no entregó fichero. Con eso la vigencia deja de ser
hueco y los registros pasan a `confirmado`.
**Qué se corrigió** *(2026-08-19, release `.99`)* · **Las tres que emitían sin
fila entran en la capa: 123 → 126.** La posición salió de lo que el PROPIO IGN
sirve por otras puertas: `TAR2` tiene **site log IGS** en `ERGNSS/log/`
(posición ITRF completa: Tarifa, Cádiz, DOMES 19350M003) y las tres llevan
`APPROX POSITION XYZ` en la cabecera de sus RINEX diarios. **El cruce que
calibra**: el site log y la cabecera de TAR2 difieren en ~10 centímetros — dos
puertas del mismo IGN, una posición, y el extractor se para si divergen más de
medio metro. `TAR2` entra `confirmado`; `JADR` (Jadraque, DOMES 15031M001) y
`MOTI` (Motilla del Palancar, DOMES 15030M001) entran **`parcial`**: su única
posición publicada es la cabecera, convertida por el atlas de XYZ a
geográficas (GRS80) — convertir sobre primaria no la hace primaria. El
municipio de las tres se comprobó **punto-en-municipio contra el IGN** con
`consultar.py`.
**Huecos** · **La tabla oficial sigue publicando 123.** `JADR` y `MOTI` siguen
sin fila en la tabla de coordenadas y sin site log: su posición de tabla, con
marco ETRS89 declarado, sigue siendo del IGN el publicarla.
**Lo que se ve al contar** · Hay **132 fichas** de estación en el servidor, **117
site logs** en formato IGS, **123** filas con coordenadas y **126** emitiendo. Las
9 que tienen ficha y no coordenadas **tampoco emiten**: eso confirma que **la
tabla de coordenadas ES la red vigente**, y no una lista cualquiera.
**Lo que NO trae esta capa, y por qué** · La **Red Sísmica Nacional** iba en la
misma propuesta. Su listado web publica solo código y nombre, pero **el dato
completo SÍ existe**: el enrutador EIDA revela que el IGN sirve FDSN en
`fdsnws.sismologia.ign.es` —otro dominio, no `www.ign.es`, donde da 404— con
**303 estaciones, coordenadas, elevación y fechas de alta y baja** (227 activas,
76 dadas de baja). **Y se puede usar**, aunque NO por la vía de las otras
capas del IGN: la Orden FOM/2807/2015 cubre solo los productos geográficos del
SCNE, donde no hay ninguno sísmico, así que la fórmula «Obra derivada de … CC-BY
4.0 ign.es» **no aplica y usarla sería reclamar una licencia que no es**. Lo que
sí aplica es el **régimen general de la Ley 37/2007**, que el propio aviso legal
del IGN desarrolla en su punto RISP: permite reutilizar sus documentos citando la
fuente y la fecha, sin desnaturalizar el sentido y sin insinuar patrocinio, y
**sin ShareAlike ni NonCommercial**. Es el mismo régimen sobre el que este atlas
publica ya seis capas. La atribución, por tanto, es **«Instituto Geográfico
Nacional»** con su fecha, no la fórmula del SCNE.
**Archivado** · 3 ficheros propios (la tabla de coordenadas, el listado de datos
diarios del 2026-08-10 que prueba la vigencia, y un site log IGS de muestra); la
licencia y la tabla de productos del SCNE se reutilizan de la `.26`.
**El resto** · CHANGELOG `datos-v2026.08.62` y `.63` · §10

## red-sismica

**De dónde** · **IGN**, servicio **FDSN** de estaciones de la red sísmica `ES`
(*Spanish Digital Seismic Network*): coordenadas en WGS84, elevación,
denominación del emplazamiento y **fechas de alta y de baja**, de una sola
petición. La red tiene además DOI propio, `10.7914/SN/ES`.
**Dónde está, que costó encontrarlo** · El portal del IGN publica un buscador
que da **solo código y nombre**, sin coordenadas, y `www.ign.es/fdsnws/…`
responde **404** — lo que hace pensar que el IGN no sirve FDSN. **Sí lo sirve,
en otro dominio:** `fdsnws.sismologia.ign.es`. Se llega preguntándole al
**enrutador de EIDA**, la federación europea, que sabe qué nodo atiende cada
red: `orfeus-eu.org/eidaws/routing/1/query?network=ES&service=station`.
**Licencia y qué obliga — OJO, NO es la de las demás capas del IGN** · La Orden
FOM/2807/2015, de donde sale la fórmula «Obra derivada de *producto* CC-BY 4.0
ign.es», cubre **solo los productos geográficos de la tabla del SCNE, y ahí no
hay ninguno sísmico**. Usarla aquí sería reclamar una licencia que no aplica.
Lo que sí aplica es el **régimen general de la Ley 37/2007**, que el propio
aviso legal del IGN desarrolla en su punto RISP: reutilización permitida
citando la fuente y la fecha, sin desnaturalizar el sentido, sin insinuar
patrocinio y conservando los metadatos — **sin ShareAlike ni NonCommercial**.
Atribución en el manifiesto: «Instituto Geográfico Nacional».
**Qué hay que saber** · **Las bajas son la mitad del valor**: 76 de las 303
estaciones tienen fecha de cierre y se publican como `historico` en vez de
esconderse. Una red de vigilancia sin su historia no dice **cuándo se dejó de
mirar un sitio**, que es justo lo que interesa. Y **el portal va atrasado
respecto al servicio**: su pestaña de activas todavía lista cuatro que el FDSN
da de baja en 2026 (E1601, E1602, E1603 y EBAJ). Manda el servicio, que es lo
que el IGN mantiene para la federación internacional. Aquí, al contrario que en
`red-geodesica`, **no hay lío de datums**: el formato FDSN publica en WGS84, que
es lo que pide RFC 7946.
**Qué se añadió** *(2026-08-20, release `.104`, contrato 1.66.0)* · **La
segunda pasada: qué mide cada estación.** El hueco decía «otra consulta y otro
volumen», y la consulta se hizo — el nivel de canal del mismo servicio, 2.328
épocas. Cada ficha gana `canales[]` (los códigos verbatim: los abiertos si
vive, todos los que tuvo si es histórica) e `instrumentacion[]`, leída por la
**norma de identificadores de la propia FDSN** (archivada): H/B banda ancha,
E/S corto periodo en la primera letra; H sismómetro, N acelerómetro en la
segunda. El reparto: 180 estaciones con velocímetro de banda ancha, 98 con
acelerómetro, 48 de corto periodo. **El cruce que sella las dos consultas**:
las estaciones con canal abierto son exactamente las 227 sin fecha de baja —
ni una más ni una menos — y el extractor se planta si un día divergen. Las
cadenas de instrumento del servicio («NmxTrillium40s…») van verbatim en la
clave de cada ficha, no como campo: son concatenaciones por épocas, no
modelos.
**El perímetro, averiguado el 2026-08-20** · El hueco decía «la red `ES` no es
toda la sismología del IGN» sin poder decir qué más había. Ya se puede, y son
cuatro hechos: (1) **el nodo FDSN del IGN sirve exactamente DOS redes** — la
`ES` (303 estaciones, permanente) y la **`4L`**, «Tenerife-Gran Canaria Seismic
Network (GUANCHE_INTEGRAL)», **13 estaciones en Gran Canaria, todas dadas de
baja** entre diciembre de 2024 y junio de 2025; su DOI (`10.7914/k0b6-a232`) la
declara **campaña temporal** de investigación, firmada por sismólogos del IGN
**y del CSIC**, no red de vigilancia. (2) **La vigilancia volcánica SÍ está en
la capa**: `ES` tiene **80 estaciones en Canarias** —La Palma, Tenerife,
Lanzarote, La Gomera, El Hierro—, así que no es cierto que las volcánicas del
IGN vayan por otro lado. (3) **Las antárticas nunca fueron del IGN**: las
estaciones de Decepción (`DCP`), Livingston (`LVN`) y Cierva Cove (`CCV`) son
de la red **`B6`, «Bransfield Strait Seismic Network»**, sirvieron de 2008 a
**2015** y las sirve EarthScope/IRIS, no el nodo español — antes hubo `XB`
(`DECP`, 1997-1999). (4) Y la que sí es permanente y NO es del IGN es la
**`C7`, «Red Sísmica Canaria»** (2016-), de otro operador.
**Huecos** · El de la capa, ahora con nombre y apellidos: **la `4L` queda
fuera** porque el atlas publica la red de vigilancia y esa es una campaña
científica cerrada; se dice aquí para que conste que existe y que su dato es
del mismo nodo. Ninguna estación de `ES` cae en el hemisferio sur.
**Ámbito** · Va como `mundo` por **una sola estación**: `VPORT`, en Vila do
Porto (Santa María, Azores), Portugal. El ámbito describe la cobertura, no la
mayoría.
**Archivado** · 4 ficheros (las dos consultas al FDSN —estación y canal—, el
aviso legal que sostiene la licencia, y la norma de identificadores de la
FDSN).
**El resto** · CHANGELOG `datos-v2026.08.64` y `.104` · §10

## red-carreteras

**De dónde** · **Ministerio de Transportes y Movilidad Sostenible**, archivos de
geometrías del **Catálogo de la Red de Carreteras del Estado 2025**: los 7.072
tramos con su carretera, provincia, clase, puntos kilométricos y longitud, en
shapefile ETRS89/UTM 30N.
**Licencia y qué obliga** · La más explícita del atlas. El aviso legal del
ministerio autoriza «la reproducción total o parcial, modificación, distribución
y comunicación, **para usos comerciales y no comerciales**», con tres
obligaciones: **no desnaturalizar** el contenido, **citar la fuente** y
**mencionar la fecha de la última actualización** — que aquí es el 31-12-2025,
la del propio catálogo. Régimen de la Ley 37/2007.
**Cuál NO es la fuente, y es la trampa** · Las tres investigaciones que
propusieron esta capa apuntaron al producto *Redes de Transporte* del CNIG.
**Ése no vale**: su WFS INSPIRE declara **943.679** entidades `tn-ro:Road` y
**9.879.089** `tn-ro:RoadLink` — el viario entero de España con calles urbanas.
Lo que hace red a esta red es la **titularidad estatal**, y quien la fija es el
catálogo del ministerio: 26.564 km de los 165.756 del país, con el 53 % del
tráfico total y el 65,7 % del pesado.
**Qué hay que saber** · **Viene proyectado**, en ETRS89/UTM 30N, así que hay que
reproyectar a WGS84 para el GeoJSON; la conversión se hace en el pipeline sin
`pyproj`, y está comprobada contra puntos conocidos —el meridiano central del
huso sale a `-3,00000` exacto—. El resultado cae donde debe: lon -8,78 a 3,17,
lat 35,27 a 43,69. **Canarias no aparece, y no es un fallo**: su red no es del
Estado. **El registro es la CARRETERA y no el tramo**: los 7.072 tramos se
agrupan en las **393** carreteras que ellos mismos nombran — agrupar aquí no es
fabricar, al contrario que en `red-electrica`, donde las líneas de la BTN venían
sin nombre.
**La geometría se simplifica, y se dice** · 1.420.848 vértices no caben en una
página web. Douglas-Peucker a **10 m** deja el 8 %, y **la tolerancia se afina
sola** carretera a carretera hasta bajar del 5 % de desvío: a 10 m fijos,
**noventa carreteras cortas** se pasaban, porque quitar 10 m de un ramal de 400 m
es proporcionalmente brutal. De ahí `geo_precision: generalizada` (§6.6) y su
`geo_fuente` diciendo qué se simplificó, como exige R9.
**Por qué la longitud no se llama `longitud_km`** · Porque ese nombre lo mira
**R10**, que compara lo declarado con lo dibujado, y aquí serían **dos medidas
distintas bajo el mismo nombre**: la del catálogo es la **administrativa, por
puntos kilométricos**, y la del trazado es la del eje. No es un rodeo a la regla
— lo que R10 persigue **queda comprobado y no ocurre**: en el conjunto de la red
las dos concuerdan al **-0,34 %** (26.563,5 km declarados contra 26.473,3
dibujados) y la mediana por clase no pasa del 1,5 %. Donde se separan es en
**ramales de menos de tres kilómetros**, y esa diferencia **la trae la fuente**:
se mantiene aunque no se simplifique nada. Cada registro lo declara en una clave.
**Cuadre publicado** · La suma de las longitudes de las 393 da **26.563,5 km**
contra los **26.564** que publica el ministerio en su propia página. Y el
catálogo cuadra consigo mismo: su geometría sin tocar mide 26.542,8 km, un
0,08 % de su campo de longitud.
**Archivado** · 2 ficheros (el ZIP del catálogo, 24 MB, y el aviso legal que
sostiene la licencia).
**El resto** · CHANGELOG `datos-v2026.08.65` · §10

---

## aeropuertos

**De dónde** · El perímetro, de **tres actos del BOE**; la geometría, del
**Instituto Geográfico Nacional** — producto *Información Geográfica de
Referencia · Redes de Transporte* (IGR-RT), servicio WFS INSPIRE, del que salen
los 1.796 nodos de aeródromo de España con su coordenada ETRS89, su indicador
de lugar OACI y su designador IATA.
**Licencia y qué obliga** · Dos regímenes, y no se mezclan. Los actos: **un
texto legal no tiene dueño** (art. 13 TRLPI), sin obligación de atribución. La
geometría: IGN, ver arriba · atribución exigida `Obra derivada de IGR-RT 2026
CC-BY 4.0 scne.es` — con `scne.es`, no `ign.es`, por ser producto coproducido.
**El perímetro no lo da una lista, lo dan tres actos** · Es lo que costó el día
y lo que explica la cifra:
1. **Real Decreto 1150/2011**, cuyo anexo trae **42 entradas** (40 aeropuertos y
   2 helipuertos). Cuidado con el rótulo del anexo, que **no** dice «los
   calificados de interés general» sino «Aeropuertos y helipuertos gestionados
   por *Aena Aeropuertos, S.A.*»; quien califica es su **disposición adicional
   primera**. Modificaciones posteriores: **ninguna**, y no es una suposición —
   el análisis del propio BOE solo lista como referencia posterior la corrección
   de errores.
2. **Real Decreto 1167/1995**, artículo 1, redacción **vigente desde el
   26-07-2025**: su apartado 2 nombra los **8 aeródromos de utilización
   conjunta** civil-militar, y su apartado 1 las **5 bases aéreas abiertas al
   tráfico civil** (Talavera la Real, Matacán, Villanubla, León y Albacete), que
   **no** están calificadas de interés general.
3. **Orden FOM/1510/2006**, que sostiene a **Ciudad Real**, único de titularidad
   no estatal — el caso que el RD de 2011 preserva sin nombrarlo: «igualmente
   conservarán dicha calificación los aeropuertos de titularidad no estatal
   actualmente calificados de interés general».
**Por qué salen 48 y no lo que enseña el mapa de Aena** · Porque esas **5 bases
aéreas son exactamente el hueco**, y se publican para que se vea: una base
abierta al tráfico civil sigue siendo militar —su jefe lo es «de todo el
conjunto» (art. 5) y Aena solo designa un delegado para la zona civil (art. 9)—,
así que no está en el anexo de 2011 ni se puede llamar aeropuerto de interés
general. **San Javier estaba y salió en 2025** (Orden PJC/808/2025), tras
cerrarse al tráfico civil el 14-01-2019: la capa lo refleja porque lee la
redacción vigente, no por criterio propio.
**Dos cuadres que el guion comprueba en vez de suponer** · Los **ocho**
paréntesis «(aeródromo utilización conjunta)» del anexo de 2011 son los **ocho**
del artículo 1.2 del RD de 1995 — dos actos independientes diciendo lo mismo, y
eso es lo que sostiene el `confirmado` de ese dato. Y la **corrección de errores**
de 26-11-2011 se aplica **leyéndola**, no a mano. Ahí saltó una rareza: la
corrección **se cita a sí misma mal**, escribe «(aeródromo **de** utilización
conjunta)» y la página corregida no lleva ese «de», así que un reemplazo literal
no habría encontrado nada y la corrección se habría aplicado en silencio.
**El emparejamiento con la geometría, declarado uno a uno** · Casar por nombre
**no vale**: siete casillas salían ambiguas y una se llevó por delante una
suposición — Logroño-Agoncillo tiene **dos** nodos, el aeropuerto `LERJ` y un
helipuerto `LELO` a novecientos metros, y el helipuerto es el que gana por
parecido de nombre. Lo mismo con Ceuta (`GECE`, con IATA, y `GECT` sin él),
Melilla, Tenerife Norte y Santiago. Por eso la tabla va escrita a mano y el guion
exige que cada código salga **exactamente una vez** en el archivo. De propina:
el fichero del IGN trae **once códigos OACI repetidos** (LEBP, LECD, LECX, LEDE,
LEHI, LELI, LELM, LEOA, LEPZ, LETA, LETT), siempre entre aeródromos privados y
helipuertos de hospital o empresa; **ninguno es de los 48**, y eso se comprueba,
no se cree. Cuando el IGN llama a un sitio distinto que el acto —«Josep
Tarradellas Barcelona-El Prat», «Aeròdrom de Son Bonet»—, **manda el nombre del
acto**: la capa publica el perímetro jurídico.
**Comprobación de la geometría** · Cada uno de los 48 puntos cae dentro de la
provincia que su nombre implica, contrastado contra los polígonos provinciales
que ya publica el atlas. Única excepción, y es del instrumento: el helipuerto de
Ceuta queda 348 m fuera del contorno de Ceuta **porque ese contorno está
generalizado** a 33 vértices. Los puntos del IGN coinciden con el punto de
referencia que publica el AIP dentro de unos treinta metros.
**Huecos declarados** · La capa publica el **régimen**, no la operación: no dice
si un aeródromo tiene tráfico comercial regular —Huesca, Burgos, Córdoba o Son
Bonet están calificados y apenas lo tienen—, ni pistas, ni superficie, ni
servidumbres aeronáuticas. Y la calificación de Ciudad Real es de **alcance
acotado** por su propio acto, «a los exclusivos efectos de reservar al Estado la
gestión directa de los servicios aeronáuticos y aeroportuarios estatales»: va
citado verbatim en su ficha.
**Archivado** · 8 ficheros: los **seis actos del BOE** —los tres que fijan el
perímetro, la corrección de errores, la orden de 2025 y el RD 2858/1981, que es
la norma bajo la que se califica—, la respuesta del WFS y sus capacidades. La
licencia del IGN y la tabla del SCNE ya estaban archivadas.
**El resto** · CHANGELOG `datos-v2026.08.66` · §10

---

## frontera-schengen

**De dónde** · El censo, de la **Comisión Europea**: el «List of border crossing
points», **Anexo 4** del *Practical Handbook for Border Guards*, edición de
**10-08-2026**, páginas 25 a 27 para España. Se cita además la **actualización
del DOUE C 332/07, de 24-09-2014**, en español, que es la publicación legal de
la misma lista y la que fija **cómo España nombra cada paso**. La geometría, del
**IGN**: nodos de aeródromo (IGR-RT), topónimos del Nomenclátor y unidades
administrativas.
**Licencia y qué obliga** · Dos regímenes. La Comisión: su política de
reutilización se aplica por la **Decisión de 12 de diciembre de 2011** y su
contenido propio va bajo **CC BY 4.0**, «provided appropriate credit is given
and changes are indicated». El IGN: ver arriba · atribución exigida `Obra
derivada de IGR-RT 2026 CC-BY 4.0 scne.es`.
**Dónde está el censo, que no es donde parecía** · El artículo 2.8 del Código de
Fronteras Schengen define el paso fronterizo y el 39 obliga a cada Estado a
notificar los suyos. La Comisión los publica de **dos maneras distintas**, y
confundirlas es el primer error posible: las **actualizaciones del DOUE son
incrementales** —cada una toca solo a los Estados que han notificado cambios, y
tomar una por la lista entera daría un censo cojo—, mientras que el **Anexo 4 es
el consolidado**. Esta capa usa el consolidado.
**El acto nacional no existe como lista** · España habilita sus pasos **uno por
uno, por orden ministerial**: Lleida-Alguaire en 2011, Badajoz y Burgos en 2014,
Logroño-Agoncillo en 2018, Región de Murcia en 2019. Y el **Código de Fronteras
que compila el propio BOE, 421 páginas, no nombra ni un puesto** — comprobado
buscándolo dentro. O sea que **no hay segunda fuente española con la que cruzar
el censo**: el `confirmado` se sostiene en el documento de la Comisión, que es
primario, y esto queda dicho en vez de insinuar una doble verificación que no
existe. *Ojo:* una nota anterior de `PLAN.md` daba por acto nacional la **Orden
PRA/1267/2017** — es falso: esa orden trata de «instrucciones para la
tramitación de convenios».
**Tres precisiones geográficas, a propósito** · `exacta` los 43 aéreos (el nodo
del aeródromo, del IGN); `paraje` los 33 marítimos con topónimo (primaria para
el NOMBRE del puerto, no para su recinto); `municipio` los 4 terrestres y La
Línea marítima, porque el paso real está en un punto del término —el Tarajal,
Beni Enzar, la Farga de Moles— que **la fuente no sitúa**. Publicar los cuatro
terrestres como si fueran la coordenada de una garita sería fingir precisión.
**Lo que solo esta capa puede decir** · 72 de los 81 se enlazan con un registro
que el atlas ya publica, y **el enlace se comprueba** contra `aeropuertos` y
`puertos`: si alguno dejara de existir, la capa no se construye. De ahí salen
tres hechos: las **cinco bases aéreas abiertas al tráfico civil y Ciudad Real
son pasos fronterizos** —la lista es la prueba operativa del preámbulo del RD
1150/2011, que quiso desligar el tráfico internacional de la calificación de
interés general—; **cuatro pasos aéreos son aeropuertos autonómicos**
(Castellón, Lleida-Alguaire, Región de Murcia y Teruel), no calificados de
interés general; y **diez puertos de interés general no son frontera exterior**.
**El registro que va `parcial`, y por qué** · La lista marítima dice «San
Sebastián» a secas, y hay **dos** puertos de interés general que podrían serlo:
**Pasaia** (Guipúzcoa) y **San Sebastián de La Gomera**. Se publica Pasaia por
la regla que el propio documento aplica sin excepción —todo puerto canario cuyo
nombre no diga su isla la lleva entre paréntesis: «Arrecife (Lanzarote)»,
«Puerto del Rosario (Fuerteventura)», «Puerto de Santa Cruz de La Palma (La
Palma)»— y porque la lista nombra **ciudades y no puertos**: «Gijón» por El
Musel, «Bilbao» por un puerto que no está en Bilbao. Ninguna fuente alcanzable
lo desambigua, así que el registro va `parcial` con su hueco declarado.
**Dos trampas del servicio del IGN, medidas** · La primera es nueva y es la peor
clase de fallo: **el parámetro `q=` del nomenclátor NO filtra**. Devuelve los
veinte primeros rasgos de la colección entera con cara de resultado — un barrido
que se fiara habría situado los 34 puertos de España en **Cabo Ortegal**. El que
filtra es `etiqueta=`, exacto. La segunda: **`nameunit=` no encuentra los
municipios con apóstrofo** —«la Seu d'Urgell» devuelve cero en todas sus
formas—; hay que barrer la provincia por `codnut3` y filtrar en casa.
**Una rareza de `puertos` que este cruce destapó** · Tres puertos y una villa
llevan un **guion blando (U+00AD) donde va la tilde**: «Ferrol y su ri‑a»,
«Sevilla y su ri‑a», «Vigo y su ri‑a», «Vilagarci‑a». Se comprobó que **viene de
Puertos del Estado** —22 veces en el ZIP archivado— y `puertos` lo copia
verbatim, que es su doctrina. Se deja como está y se anota: el nombre se muestra
sin tilde y no casa con una búsqueda por «ría».
**Huecos declarados** · La capa dice **dónde se cruza, no cómo**: no publica
horarios de apertura, ni si el paso admite todo tipo de tráfico, ni si tiene
puesto de control sanitario o veterinario, que son otro régimen. Y las
**excepciones que el propio Código de Fronteras prevé** —navegación de recreo,
pesca costera, marinos en tránsito— no se cartografían.
**Archivado** · 5 ficheros (el Anexo 4, la actualización del DOUE en español, el
aviso legal de la Comisión, los topónimos de puerto y las unidades
administrativas); los nodos de aeródromo del IGN y la tabla del SCNE ya estaban.
**El resto** · CHANGELOG `datos-v2026.08.67` · §10

---

## montes-catalogo

**De dónde** · **Ministerio para la Transición Ecológica y el Reto Demográfico**,
*Inventario Español de Patrimonios Forestales · Catálogo de Montes de Utilidad
Pública*, distribución **KMZ** (63 MB): 73.452 recintos con su monte, su tipo de
afección, su superficie, su provincia y los datos de la resolución que los
declaró y de su deslinde. Más la página del ministerio que publica la cifra
oficial, y las unidades administrativas del **IGN** para la geometría.
**Licencia y qué obliga** · MITECO, régimen de reutilización de la Ley 37/2007 y
el RD 1495/2011: citar la fuente y no desnaturalizar. IGN: ver arriba ·
atribución exigida `Obra derivada de BDLJE Continua CC-BY 4.0 ign.es`.
**Por qué esta capa no son los montes, sino el estado de su catálogo** · Está
medido, no supuesto. El subconjunto de utilidad pública son **3.265.353
vértices**; la curva de simplificación da 3,09 M a 11 m, 1,21 M a 56 m y
**760.911 a 111 m** — cuando la capa mayor del atlas, `red-carreteras`, tiene
**114.299**. Y 111 m no es admisible: la fuente trae **884 recintos de 0,01 ha**,
de cien metros cuadrados, que a esa tolerancia desaparecen. Publicado saldría
entre **63 y 113 MB**, más que las 37 capas del atlas juntas (58,8 MB).
**Y no hay distribución más ligera, agotado puerta por puerta** · El bucket del
IEPNB se listó **entero** (140 objetos, sin truncar): para montes hay **cuatro**
ficheros y **ninguno generalizado** —el Mapa Forestal vecino sí publica MFE200 y
MFE400—. La página del MITECO sirve tres, **nacionales y sin partir por
provincia** (KMZ 63 MB, shapefile 229 MB, GeoJSON 329 MB, los tres del
25-06-2025). En `datos.gob.es` el conjunto nacional tiene **una sola
distribución**, el XML del metadato. Y el **WMS y el WFS** del ministerio
responden con una **excepción .NET** (`System.NullReferenceException`), el mismo
fallo y el mismo servidor que dejó fuera al PRTR.
**El cuadre, que es lo que sostiene el filtro** · Sumando solo los recintos
marcados «Montes catalogados de Utilidad Pública» salen **11.178 montes y
7.231.178 ha**, contra los «**11.359** montes» y «más de **7,18 millones** de
hectáreas» que el ministerio publica en su página de política forestal **sin
decir a qué fecha**. Concuerdan al **1,6 %** y al **0,7 %**. Eso valida el
filtro y, sobre todo, **permite fechar una cifra oficial que no lleva fecha**:
la del atlas se mide sobre un fichero cuya fecha consta.
**El hallazgo, y el límite de la capa** · El campo que dice **qué acto declaró
cada monte** de utilidad pública está relleno en **La Rioja (100 %)** y en el
**País Vasco (97,3 %)**, y **vacío en las otras quince comunidades**. No es un
campo que suela faltar: es **binario**. El Catálogo lo llevan las comunidades
autónomas monte a monte (Ley 43/2003, art. 16) y la recopilación nacional **no
arrastra los actos**, así que **esta capa no puede decir qué resolución declaró
el 93 % del dominio público forestal del Estado** — y eso es precisamente lo que
publica, medido, en `pct_con_acto`. El deslinde va por el mismo camino: consta en
el **11,7 %**, y de forma muy desigual (Cuenca 74 %, Valencia 57 %, y 0 % en
León, Huesca, Navarra, Burgos, Asturias, Lleida y Soria).
**Ojo con R4, que se cobró una pasada** · No hay fuente `hueco` por ficha, a
conciencia. Que el campo del acto esté vacío **no es una falta de evidencia del
registro**: es un hecho que la fuente confirma, contado recinto a recinto. Un
hueco por ficha habría degradado 46 provincias a `parcial` por afirmar algo que
sí está comprobado. El límite es **de la capa** y vive aquí. Es la **tercera
vez** que esta distinción —hueco de capa contra hueco de registro— se cobra un
intento.
**La geometría sale de la capa hermana, a propósito** · `generacion-electrica-
provincia` ya publica las 52 provincias generalizadas por el atlas desde el
servicio del IGN. **Dos corocromáticas del mismo territorio tienen que encajar
vértice a vértice**, y volver a la fuente con otra tolerancia lo rompería. La
derivación **se comprueba**: el recuadro envolvente de cada provincia se contrasta
con el que archiva `2026-08-06_ign_unidades-administrativas-provincias.json`,
que existe justo para esto y lo dice con estas palabras: «si no cae, la
generalización movió territorio y eso es un fallo, no un detalle».
**Tres rarezas de la fuente, dichas y no corregidas** · Escribe **«Caceres» sin
tilde**; mezcla formas —«Bizkaia» y «Gipuzkoa» en euskera, pero «Alicante»,
«Castellón» y «Valencia» en castellano, donde el IGN usa las bilingües—; y en
Canarias y Baleares **pone islas donde debería poner provincias** (Mallorca,
Ibiza y Formentera, Gran Canaria, Fuerteventura, Tenerife, La Palma, La Gomera y
El Hierro). Son **54 valores para 50 provincias con montes**, y la equivalencia
va declarada una a una en el pipeline.
**Huecos declarados** · **Ceuta y Melilla salen con cero**, y se dice en su ficha
que el cero de una recopilación no prueba una ausencia. La capa **no publica los
recintos**: quien necesite el contorno de un monte concreto tiene que ir a la
fuente. Y **la mitad del inventario queda fuera** por no ser de utilidad pública
—29.126 recintos «Sin datos», 6.793 montes privados—: esta capa habla solo del
Catálogo.
**Archivado** · 3 ficheros (el KMZ del inventario, la página con la cifra oficial
y la de descargas); las unidades administrativas del IGN ya estaban.
**El resto** · CHANGELOG `datos-v2026.08.68` · §10

## csur

**De dónde** · **Ministerio de Sanidad**, *Relación de centros, servicios y
unidades de referencia (CSUR) del Sistema Nacional de Salud designados…*,
edición de **agosto de 2026**, y su catálogo hermano de *Patologías o
procedimientos CSUR*. Más el **Catálogo Nacional de Hospitales 2025** del mismo
ministerio (nombre oficial, municipio, provincia, camas y dependencia funcional)
y el geocodificador de **CartoCiudad** del IGN para el punto de cada centro. El
marco es el **Real Decreto 1302/2006** (BOE-A-2006-19626), en vigor y **sin una
sola modificación en veinte años**.
**Licencia y qué obliga** · Sanidad, aviso legal del portal: reutilización
autorizada **para usos comerciales y no comerciales**, con tres condiciones —
no desnaturalizar el contenido, citar la fuente y **mencionar la fecha de la
última actualización**—; por eso `fecha_dato` no es cortesía aquí, es la
condición de la licencia. El RD es texto legal sin dueño (art. 13 TRLPI). IGN:
ver arriba · atribución exigida `Obra derivada de CartoCiudad 2026 CC-BY 4.0
ign.es`.
**La primera capa leída de un PDF, y por qué se cruzó esa raya** · El atlas
venía esquivando el PDF: cuando una fuente solo se publicaba así, o había otra
distribución o la capa se paraba. Aquí **no hay otra**: ni CSV, ni Excel, ni
servicio, ni conjunto en `datos.gob.es` — 25 páginas de tablas y nada más. La
alternativa era teclear 420 filas a mano, que es exactamente lo que este atlas
no hace. El lector vive en `pipeline/leer_pdf.py`, no tiene dependencias y sirve
solo para PDF de texto: **no hay OCR y no lo habrá**. Reconstruye cada tabla
desde las **reglas** que la dibujan —los rectángulos finos que Word pinta por
celda—, y no adivinando columnas por sangrías, que es como se cuelan los errores
que nadie ve.
**Tres mordeduras del formato, cada una de una pasada** · (1) **Un espacio puede
no ser un carácter**: Word coloca algunas palabras por posición y no escribe el
espacio, así que hay que **medir** el avance de cada cadena con los anchos reales
de la fuente; pegando sin medir sale «Hospital U.La Paz». (2) **Y al revés**:
cuando ajusta el interletraje parte una palabra en varios fragmentos, y meter un
espacio entre cada uno da «H ospital» y «Comple x o». (3) **Un tipo de letra
distinto es texto invisible**: el apóstrofo tipográfico de «Vall d’Hebrón» obligó
a Word a cambiar de fuente, y esa fuente escribe en códigos propios que solo el
`/ToUnicode` traduce — sin resolverlo esa celda sale **vacía y sin error**, que
es el peor fallo posible.
**Tres números, y solo dos cuadran** · La portada dice «**420 CSUR en 53 centros
para 94 patologías**». Las patologías salen **exactas**, y se comprueban además
contra el **otro** documento: el catálogo lista **116**, de las que 94 tienen
centro, **11 tienen los criterios retirados** y **11 están declaradas «No CSUR»**
— y el pipeline exige que toda catalogada sin designación diga por qué, o para
la construcción. Los «53 centros» salen exactos **pero no son 53 hospitales**:
son **53 unidades designadas**, y trece de ellas son **alianzas de dos centros**,
así que hospitales distintos hay **46**. Y de las **420 filas rayadas**, dos son
la **continuación de una fila partida por un salto de página**: designaciones hay
**418**. Las dos se comprueban una a una —han de continuar una fila completa— y
por eso la diferencia se afirma en vez de sospecharse.
**Por qué el nombre del centro va en tabla declarada** · Por tres cosas medidas
sobre el documento. El **Vall d’Hebrón** aparece escrito de **seis maneras**
(apóstrofo tipográfico, acento agudo, apóstrofo recto, con y sin espacio, con D
mayúscula). **«Hospital U. Reina Sofía» (Córdoba) y «Hospital General U. Reina
Sofía» (Murcia)** son dos hospitales a quinientos kilómetros que una palabra
separa: cualquier casado por parecido los funde. Y partir las alianzas por
« y » rompe **«Ramón y Cajal»** y **«y Politécnico La Fe»**. Son **66 grafías →
53 unidades → 46 centros**, declaradas una a una en `pipeline/tablas_csur.py`.
**La coordenada NO sale del domicilio, y hay un caso que lo prueba** · El primer
intento fue geocodificar la dirección del Catálogo Nacional de Hospitales. Ese
registro le da al **Ramón y Cajal** la calle de Ayala 38, en el centro de Madrid,
cuando el hospital está en la carretera de Colmenar Viejo, **a 3,7 km**. El punto
sale del **topónimo del propio centro** en CartoCiudad, cuya capa de centros
sanitarios (identificadores `SEIG_C_*`) los nombra igual que el CNH. El
identificador va **fijado y comprobado uno a uno**, porque buscar por nombre
devuelve helipuertos, aparcamientos, bancos de sangre, sedes secundarias y, en
dos casos, **otro hospital distinto**. Precisión `paraje`, que es lo que §6.6
concede a un topónimo de nomenclátor oficial: sitúa el centro, no dibuja su
recinto.
**El hallazgo** · Trece territorios tienen CSUR y **seis no tienen ninguno**:
Aragón, Canarias, Extremadura, La Rioja, Ceuta y Melilla. Dentro de los trece,
**siete hospitales reúnen más de la mitad** de las participaciones. Concentrar es
el objetivo declarado del programa —el RD 1302/2006 existe para eso—, y a la vez
la Ley 16/2003 promete el acceso «en condiciones de igualdad efectiva y con
independencia del lugar del territorio nacional». Las dos cosas son ciertas a la
vez, y solo se ven juntas en un mapa.
**Ojo con R4, cuarta vez** · No hay fuente `hueco` por ficha, a conciencia. Lo
que el registro no publica —**cuántos pacientes atiende cada CSUR, con qué
medios y con qué resultados**— no es un campo vacío de estas 46 fichas: es otra
cosa, que no se publica en ningún sitio. Un hueco por registro las habría
degradado a `parcial` por no traer un dato que ninguna de ellas afirma. El
límite es **de la capa** y vive aquí.
**Huecos declarados** · La capa dice **dónde** está designado cada centro y
**para qué**, y nada sobre **actividad ni resultados**: el ministerio no publica
casos atendidos por CSUR. Tampoco publica **por qué** un centro fue designado y
otro no; los informes del Comité de Designación no son públicos. Las **once
patologías catalogadas y declaradas «No CSUR»** no traen fecha de designación
prevista. Y el **SEM** —el único CSUR que no es un hospital— sale **sin camas ni
dependencia funcional**, porque el Catálogo Nacional de Hospitales solo cataloga
hospitales.
**Dos rarezas de la fuente, dichas y no corregidas** · La lista sigue llamando
**«Complejo Hospitalario de Toledo»** a un complejo que ya no existe: la unidad
está en el Hospital Universitario de Toledo, abierto en 2021. Y el Catálogo
Nacional de Hospitales escribe **«Otras Entidades u o rganismos públicos»**, con
la palabra partida; `dependencia` lo copia literal, que es lo que permite volver
a la fila y encontrarla.
**Archivado** · 6 ficheros (los dos PDF de Sanidad, el aviso legal del portal,
el RD consolidado del BOE, el Excel del Catálogo Nacional de Hospitales y las 46
respuestas de CartoCiudad).
**El resto** · CHANGELOG `datos-v2026.08.69` · §10

## zonas-defensa

**De dónde** · **Boletín Oficial del Estado**, acto a acto: los que señalan
zonas de seguridad de instalaciones militares (órdenes ministeriales) y los que
declaran zonas de interés para la Defensa Nacional (reales decretos). El marco
lo ponen la **Ley 8/1975, de 12 de marzo** (BOE-A-1975-5292) y su **Reglamento,
RD 689/1978** (BOE-A-1978-9612), los dos consolidados y archivados.
**Licencia y qué obliga** · Textos legales **sin dueño**: art. 13 del TRLPI
excluye de la propiedad intelectual las disposiciones legales y los actos de los
organismos públicos. Se archivan enteros y se republican sin permiso, como en
`idioma` y en `aeropuertos`.
**No existe el fichero oficial, y la vía se agotó puerta por puerta** · El
ministerio anuncia una capa —«**Zonas de uso prioritario para la Defensa
Nacional**», cartografiada por el CEDEX con datos del Instituto Hidrográfico de
la Marina y del Ministerio de Defensa— y no hay manera de bajarla: (1) su **WMS**
responde con una **excepción .NET** (`System.NullReferenceException`), el **mismo
servidor y el mismo fallo** que ya dejó fuera al PRTR y al inventario de montes
—**tercera vez**—; (2) el **GeoServer** que hay detrás (`gis.miteco.gob.es`) no
contesta desde fuera; (3) el **ZIP** que anuncia `datos.gob.es` da **404**; y (4)
la **API OGC** del propio ministerio publica treinta colecciones y ninguna es
esta. La excepción queda archivada como prueba. Y aunque funcionara, **no sería
esta capa**: nace del plan de ordenación del espacio **marítimo** y mezcla zonas
de ejercicios en la mar con las ZIDN. Fuera del ministerio tampoco hay nada:
ni conjunto en `datos.gob.es`, ni capa en las IDE autonómicas más allá de un
«zonas militares» andaluz de instalaciones, ni recopilación de terceros.
**El barrido, y de cuánto es esta parte** · Búsqueda por frase exacta en el
título, secciones I y III: «zona de seguridad» da **803** actos, **768** del ramo
de Defensa —**598 señalamientos**, 71 supresiones, 53 modificaciones y 44
correcciones—; «interés para la Defensa Nacional» da **76**, con **58
declaraciones**. De esos 826 actos, **97 publican coordenadas legibles por
máquina** y **72 verifican**. Los que no, **casi todos son de los años ochenta**
—417 de los 768 lo son— y el BOE **solo los conserva escaneados**: su XML viene
con el cuerpo vacío. No es que no tengan perímetro; es que no hay texto que
leer.
**Cómo se comprueba cada polígono, que es lo que decide qué se publica** ·
(0) **El anillo tiene que ser un anillo.** Veintinueve perímetros salen
**cruzándose a sí mismos**, que es lo que RFC 7946 prohíbe y lo que en un mapa
se ve como una estrella de rayos: no es que el acto esté mal, es que **el orden
en que sus vértices aparecen en el texto no es el orden del anillo** —tablas a
dos columnas, tablas partidas, numeraciones que el BOE aplana al publicar—. El
atlas **no los reordena**: inventar el orden sería dibujar un perímetro que
nadie ha publicado. Se descartan. Y dos más se van por una **errata de
coordenada**: la orden de «El Teleno» imprime una Y de 4600525 donde las otras
cuatro de su tabla rondan 4699000, y eso manda un vértice **noventa y ocho
kilómetros** al sur; tampoco se corrige, se descarta.
**Cómo se comprueba cada polígono, que es lo que decide qué se publica** ·
(1) **El huso no se cree, se deduce.** Casi ningún acto anterior a 2018 dice en
qué huso UTM están sus coordenadas: se prueban los **cinco de España** (27 a 31)
y se exige que **exactamente uno** deje el polígono dentro de la provincia que el
acto nombra. Si ninguno o varios encajan, ese perímetro **no se publica** —14
cayeron ahí—. (2) **Y cuando el acto lo dice, tampoco se cree.** Dos actos
declaran un huso que llevaría su polígono a cientos de kilómetros: la **Orden
371/2000** (Torregorda, Cádiz) dice «huso 30» y es el **29**, y el **RD 237/2018**
(Sant Climent Sescebes, Girona) dice «huso 30» y es el **31**. (3) Las
**correcciones de errores se aplican**, no se publican al lado: la Orden
DEF/182/2024 publica una X de **siete cifras** donde una coordenada UTM tiene
seis, y su corrección la arregla; sin aplicarla salían tres «Conde de Humanes»,
uno de ellos imposible.
**La vigencia, que era el trabajo duro** · **El BOE no analiza estas órdenes**:
su bloque de referencias posteriores está **vacío** incluso cuando el propio
texto dice «queda sin efecto la Orden X». Así que el grafo se levanta de dos
maneras y las dos hacen falta: leyendo las **derogaciones de la prosa** de cada
acto, y resolviendo por **identidad** —una instalación no puede tener dos veces
la misma figura viva, así que cuando dos actos la señalan, manda el nuevo—. Esa
segunda regla existe porque los títulos dicen «se suprime la zona de seguridad
vigente y se señala nueva zona» **sin citar el número** del acto anterior.
**Qué se registra y qué no** · El **régimen**, no la guarnición: qué acto creó
cada perímetro, qué figura es, desde cuándo y cuánto ocupa. **Ni una palabra** de
misión, dotación, medios o vulnerabilidades — la misma doctrina con la que
`bases-eeuu` registra el convenio y no lo que hay dentro. Todo lo que la capa
publica lo publicó antes el Estado en su boletín oficial; lo que hace el atlas es
**juntarlo y situarlo**.
**Huecos declarados** · **La capa no dice cuántas zonas hay en España**, y no
puede: publica las que verifican de los actos con texto legible, y son una parte.
El grueso de lo que falta son los **actos de los ochenta**, solo escaneados.
Tampoco entra la tercera figura de la Ley 8/1975, la **zona de acceso restringido
a la propiedad por parte de extranjeros**, que se delimita por otro camino. Y la
transformación **ED50 → ETRS89** de los actos anteriores a 2008 se hace con
**tres parámetros**, no con la rejilla NTv2 del IGN: deja un resto de orden
métrico, invisible en una franja de cientos de metros pero real, y va dicho en
cada ficha que lo usa.
**Ojo con R4, quinta vez** · No hay fuente `hueco` en las fichas, a conciencia.
Que el Estado no publique un fichero de estas zonas **no es una falta de
evidencia de cada registro**: la evidencia de cada uno es su acto, y está entera.
El límite es **de la capa** y vive aquí.
**Archivado** · 4 ficheros (los 97 actos con su texto íntegro en un solo
documento, la Ley y el Reglamento consolidados, y la excepción .NET del WMS del
ministerio como prueba de que esa vía no existe).
**El resto** · CHANGELOG `datos-v2026.08.72` · §10

---

# Cuaderno de obtención

Para quien tenga que volver a la fuente. El endpoint, el formato y **la trampa**
— lo que cuesta horas descubrir dos veces.

### El IGN y su servicio OGC API-Features

`https://api-features.ign.es/collections/namedplace/items` (topónimos) y
`.../administrativeunit` (municipios y provincias). Lo citan **17 capas**: es el
que más geometría de referencia pone en el atlas.

- **Un cero suyo NO prueba ausencia.** Bajo carga devuelve **HTTP 200 con la
  colección vacía**. En un barrido salieron como inexistentes «Albacete» y
  «Santander». Hay que **reintentar ante colección vacía** con espera creciente y
  dejar medio segundo entre peticiones.
- **`limit` tiene un tope silencioso.** Pedir más no da más, y no avisa: si el
  recuento importa, hay que confirmarlo por recuadro (`bbox`).
- **Las consultas exactas por `nameunit` exigen la forma oficial bilingüe
  completa**: «Elx/Elche», no «Elche/Elx». El orden importa.
- **La media de los vértices de un municipio no está dentro del municipio.**
  Castelló de la Plana incluye las **islas Columbretes**, a 50 km mar adentro, y
  el promedio se va al agua. Hay que tomar la parte mayor, comprobar que el punto
  cae dentro y, si no, barrer en horizontal.

### El CNIG y la Base Topográfica Nacional

Descarga en dos pasos: `initDescargaDir?secuencial=<id>` devuelve
`{"muestraLic":"NO"…}` y después un POST a `descargaDir` con `secDescDirLA=<id>`.

- **El GeoPackage es SQLite**: se lee con el `sqlite3` de Python, **sin GDAL**.
  Cabecera con magia `GP`, banderas en el byte 3 y el tamaño de la envolvente en
  `(flags>>1)&7`.
- **La BTN es 3D**: los tipos WKB van en el rango de los 1000 (1002 =
  `LineStringZ`). Quien espere 2 se queda sin geometría.
- **El tema Transportes no se puede bajar entero**: son tres ficheros de ~1 GB y
  **llegan truncados** (declara 1.343.613.228 comprimidos y entrega 1.089.384.737).
  Por eso el ferrocarril salió del WFS de Adif, que además es el emisor correcto.

### Adif — IDEADIF

`https://ideadif.adif.es/services/wfs`, GML INSPIRE.

- **El GML viene en LAT-LON.** El CRS se declara en forma URN
  (`urn:ogc:def:crs:EPSG::4258`) y eso **obliga al orden de ejes de la
  autoridad**. Copiar las coordenadas tal cual pone la red ferroviaria española
  en el golfo de Guinea.
- **El vínculo línea↔tramo está escrito en los dos sentidos y NO son
  equivalentes.** La lista de la línea (`net:link`) reclama **188 tramos por
  duplicado**, a alguno **siete** líneas, y coser por ahí da **47.357 km** donde
  hay 24.136. Hay que coser desde el `inNetwork` de cada tramo. **Lo delató el
  total, no el código.**
- La licencia **no está en el `GetCapabilities`**: está en el CSW de
  `ideadif.adif.es/catalog/srv/spa/csw`.

### Puertos del Estado

`https://geoserver.puertos.es/geoserver/wfs`.

- **Los anillos vienen al revés** de lo que pide RFC 7946: 570 incumplimientos de
  §7.4 hasta orientarlos.
- **El orden de operaciones importa y no es el intuitivo:** simplificar →
  redondear → tirar astillas → **orientar**. Orientar antes de redondear no vale,
  porque **el redondeo a 5 decimales puede voltear el signo del área** de un
  anillo casi degenerado. Se orienta lo que se publica, no lo que se calcula.
- La licencia está en el CSW de `idee.es`, **no** en el `GetCapabilities`.

### La plataforma PCI-PMI de CINEA

- **Exige cabecera `Referer`**; sin ella no responde.
- **Su campo de longitud miente**: sirve `SHAPE.LEN` en metros de **Web
  Mercator**, inflados por la latitud entre un 26 % y un 38 %. BarMar «mide» 518
  km donde mide 382. De ahí nació la regla **R10**, y el esquema prohíbe
  `shape_len` por su nombre.
- Hay que acotar la captura a la capa `ENERGY/PCI`: la vecina `PLATTS` es de S&P
  Global.

### DOUE, EUR-Lex y el BOE

- **El PDF del DOUE no se puede parsear.** La extracción por *layout* avisa de
  «rotated text» y devuelve vacío; el texto plano **aplasta las columnas**, y en
  una tabla de cinco columnas «A Coruña X Global Básica» no dice cuál valor es el
  aeropuerto y cuál el puerto. Ambigüedad fatal.
- **La salida es el espejo del BOE**, que sirve la misma tabla en `<td>` de
  verdad. Vale también cuando EUR-Lex está tras el reto de su WAF.
- **EUR-Lex y el IGME devuelven HTTP 200 para documentos que no existen**,
  sirviendo una página de error. Si la URL termina en `.pdf` el engaño se
  detecta, porque responder `text/html` delata el enlace roto; si no, un
  *soft-404* es indistinguible del documento. Por eso `vigilar.py` **cuenta
  cuántas citas no puede comprobar de verdad**.

### CORES y el PRTR-España

- La serie de capacidad de CORES es un **xlsx** en URL fija
  (`cores.es/sites/default/files/archivos/estadisticas/refinery-capacity.xlsx`)
  que se **reescribe en el sitio** con cada actualización (la vigente, del
  30-07-2026, lo dice en su propia hoja). Sin `openpyxl`: es un ZIP de XML y se
  lee con `zipfile` + `sharedStrings.xml`, que para una tabla así sobra.
- El PRTR sirve la **descarga completa de complejos** en
  `prtr-es.miteco.gob.es/informes/descargas/PRTR_Espana_MITECO_Complejos.zip`
  (XML, ~9.400 complejos) — con actividad, CNAE, municipio y provincia, pero
  **sin coordenadas**. Las coordenadas están en la ficha web de cada complejo.
- **La trampa de la ficha: `Id_Complejo` NO es el `CodigoPRTR`.** Son dos
  numeraciones distintas (el complejo 1528 vive en la ficha 1358). No hay
  mapeo publicado: se resuelve buscando la ficha por nombre en un buscador
  externo o sondeando ids vecinos —van casi paralelos— y comprobando el
  `<title>`. El dominio bueno es `prtr-es.miteco.gob.es`; `prtr-es.es` devuelve
  404 en rutas que el otro sirve.

### El BOE como fuente de geometría

- Los reales decretos de concesión de almacenamiento **traen los vértices de la
  superficie en su anexo**, en grados-minutos-segundos referidos a Greenwich
  (Gaviota: 8 vértices; Castor: 4). Todos caen en minutos redondos, así que la
  conversión a decimal es exacta a 5 decimales. **Vienen en sentido horario**:
  RFC 7946 exige el exterior antihorario — reorientar al migrar, como los
  dominios mineros.
- La **resolución anual de capacidad de la DGPEM** (enero, «capacidad asignada
  y disponible en los almacenamientos subterráneos básicos») es el ancla viva
  de la capa: nombra los básicos del año y sus GWh. Buscarla por
  «almacenamientos subterráneos básicos» + año.
- El descriptor de un tratado en el BOE («Aplicación provisional…») se
  encuentra antes buscando el emplazamiento (Cebreros, Robledo) que el nombre
  del organismo.
- **El punto de municipio del Nomenclátor también puede estar mal.** Pedir
  `etiqueta=Águilas` y tomar el primer punto devuelve un BARRIO de Madrid;
  «Carboneras» cae en Huesca y «El Ejido» en León. Filtrar SIEMPRE por
  `tipo=Municipio` y validar la coordenada contra un recuadro de la provincia
  esperada antes de usarla como ancla — la primera pasada de `desaladoras`
  barrió tres recuadros equivocados por esto, y su cero no valía nada.

### Un PDF que la máquina no puede leer

Un escaneo sin capa de texto **no es un documento ilegible**: es un documento cuyo
texto viaja como imagen. Vale la pena escribir el procedimiento porque la primera
vez el atlas se rindió, y publicó durante doce días un hueco donde había una cita.

1. **Diagnosticar antes de rendirse.** Contar en el PDF `/Font` y `/Image`. Cero
   fuentes y una imagen es un escaneo: no hay nada que extraer y no lo habrá por
   mucho que se cambie de extractor.
2. **Sacar la imagen, no el texto.** El XObject de la página se descomprime tal
   cual (`pypdf` + `PIL`). Ojo al espacio de color: el de la nota portuguesa venía
   en `Separation`/`Black`, donde **0 es papel y 255 es tinta** — al revés que un
   gris, así que hay que invertir o sale una página negra.
3. **Leer por bandas y a tamaño natural.** Una página de 1704 × 2200 reducida
   entera se vuelve ilegible; partida en cuatro franjas, cada una entra a su
   resolución. Los párrafos que se van a **citar** se releen a 2×, palabra por
   palabra. La página completa se recorre una vez de arriba abajo, para que el
   sello o el manuscrito de un margen no se queden fuera.
4. **Publicar la lectura, no solo el resultado.** La transcripción se archiva
   verbatim junto al escaneo, diciendo cómo se obtuvo y marcando entre corchetes
   lo manuscrito. La fuente sigue siendo la imagen; la transcripción es lo que el
   atlas creyó leer, puesto donde alguien pueda desmentirlo (contrato 1.60,
   `fuente.transcripcion`).

Lo que este procedimiento **no** autoriza: tomar prestada la lectura de un
tercero. Si el contenido se conoce por un análisis ajeno, eso es fuente
secundaria y el hueco se queda hueco hasta que el atlas lea el original.

### Lo que no se salta

El **ALTCHA del SNCZI** es un CAPTCHA de prueba de trabajo puesto a propósito por
el Ministerio. No se elude. Cuando una puerta está cerrada a conciencia, la
salida es **preguntarse si el dato que se busca está detrás de otra** — que es
como se construyó `agua-embalsada`.
