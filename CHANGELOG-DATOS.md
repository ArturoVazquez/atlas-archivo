# CHANGELOG de datos

Una entrada por **release de datos** (etiqueta Git `datos-vAAAA.MM`, con sufijo
`.N` si hay más de una en el mismo mes).
Cada entrada dice **qué cambió, por qué y con qué evidencia**.

Esto no es un registro de commits: es el registro de lo que un lector externo
necesita saber para confiar en una versión de los datos, o para desconfiar de la
anterior con motivo.

> Las entradas citan a veces el contrato de datos por sus secciones («§6.6»),
> sus reglas de doctrina («R3») o su edición («1.42.0»), con la numeración
> vigente el día de la release. El
> contrato se reorganizó en agosto de 2026 en una edición más breve: esas
> referencias describen su momento y no se reescriben.

**Formato de cada entrada:**

```
## datos-vAAAA.MM — título

### Añadido
- capa/registro — qué entra, con su fuente

### Corregido
- capa:slug · campo — valor viejo → valor nuevo, y la fuente que lo obliga

### Retirado
- capa:slug — a `estado_registro: retirado`, y por qué. (Nunca borrado.)

### Huecos
- lo que sigue sin fuente primaria, dicho en voz alta
```

La sección **Huecos** no es opcional ni decorativa. Una release que no declara lo
que no sabe está afirmando que lo sabe todo.

---

## datos-v2026.08.139 — tres registros que salieron de arreglar un vigía ciego

**La edición empieza con una avería.** El guion que vigila el boletín canario
escribía el número de boletín sin rellenar con ceros, y el BOC lo numera a tres
dígitos: pedía una dirección que responde **404**, y un 404 esta guardia lo
cuenta como día sin diario. Resultado: **los boletines 1 a 99 de cada año —de
enero a mediados de mayo— no los miraba nadie**, desde que la guardia nació. De
junio en adelante el número pasa de 99, la dirección vuelve a ser buena y el
boletín parece sano.

**Se vio contando, no leyendo.** Un barrido de doce meses leyó 156 sumarios
donde el índice anual del propio boletín declaraba 252. El parte de una guardia
enseña hallazgos, nunca ausencias: la avería solo aparece cruzando lo leído con
lo que la fuente dice que hay. El rebarrido del tramo ciego, de 2024 a 2026,
devolvió **292 sumarios, 5.202 actos y 23 avisos que nadie había visto**. Uno de
ellos crea registro aquí.

### Añadido

- **`desaladoras:gran-tarajal`** — la **EDAM de Gran Tarajal**, en Tuineje
  (Fuerteventura), que explota el **Consorcio de Abastecimiento de Aguas a
  Fuerteventura**. Es la primera planta de la isla en el atlas. Su acto no la
  crea: somete a información pública un **módulo nuevo de ósmosis inversa de
  2.500 m³/día** destinado a riego agrícola, y al hacerlo acredita que la planta
  existe, dónde está y quién la explota. Por eso su fase va como parcial, igual
  que la del Llobregat. Ese acto se publicó el **2 de enero de 2026** — el número
  1 del año, justo el tramo que la avería ocultaba.
- **`centros-datos:tillion-villamayor`** — el campus **«Tillion Aragón»**, en
  Villamayor de Gállego (Zaragoza), promovido por Tillion Aragón, SL. Su Plan de
  Interés General se aprobó inicialmente por orden publicada el 7 de julio de
  2026. **Cuatro edificios de 75 MW cada uno, 300 MW de campus**, sobre un ámbito
  de 799.072,63 m² a 1,8 km del núcleo urbano, con subestación propia de
  400/66/20 kV y línea de 400 kV hasta la subestación Peñaflor.
- **`centros-datos:data-riocaya-badajoz`** — centro de procesamiento de datos de
  **Data Riocaya, SL** en la plataforma logística del Suroeste europeo, en
  Badajoz: dos edificios de módulos de 15 MW, **demanda total de 170 MW de los
  que 110 son carga crítica**, y funcionamiento continuo declarado de 8.760
  horas al año. Es **el único registro de la capa cuyo acto publica su propia
  coordenada**; los demás sitúan por término municipal o por calle.

### Corregido

- **`centros-datos:merlin-arasur`** — **se cierra el hueco que la ficha
  declaraba desde su alta.** Decía que la autorización ambiental integrada
  original, de 11 de septiembre de 2023, estaba citada por el acto de 2024 pero
  «no se localizó por buscador». **Estaba publicada**: en el número 243 del
  boletín vasco, de 22 de diciembre de 2023. No apareció buscando y apareció
  barriendo el sumario número a número. El hueco pasa a ser la fuente.
  Y un segundo hueco **se estrecha**: la ampliación del centro deja de constar
  solo en prensa —hay información pública de un proyecto técnico y su estudio de
  impacto ambiental, de 24 de junio de 2026—, pero ese anuncio no dice qué
  edificios son, así que la correspondencia con los «edificios 4 y 5» sigue sin
  acreditarse y el hueco no se cierra.
- **`centros-datos:acs-dc-la-puebla`** — entra el acto de **levantamiento de
  actas previas con efectos de ocupación** de las fincas expropiadas, de 10 de
  julio de 2026. El plan sigue en aprobación inicial y **la fase no se mueve**:
  levantar actas previas es un paso del expediente, no una aprobación
  definitiva. Pero el suelo ya se está ocupando, y la ficha lo dice.

### Huecos

- **Ninguno de los dos centros nuevos publica potencia informática, y por
  motivos distintos.** El acto de Tillion da capacidad **eléctrica** por edificio
  y no escribe «IT» en ningún sitio. El de Badajoz sí escribe «10 MW IT», pero
  **por módulo**, y no dice cuántos módulos hay. Las dos cifras van a las claves
  de sus fichas con lo que abarcan.
- **El ámbito de Tillion no se ha resuelto a geometría.** El acto lo delimita por
  24 referencias catastrales —23 del polígono 46 y una del 31— y por límites
  descritos en prosa, sin publicar el polígono. Su punto es el paraje
  «Malvaseda», uno de los tres que el catastro asigna a esas parcelas: el
  centroide de 24 parcelas no sería la coordenada de nada.
- **La capacidad de la EDAM de Gran Tarajal y su año de servicio no constan.** El
  acto solo publica los 2.500 m³/día del módulo que se añade.
- **El acto propio de esa planta —su autorización original— no se ha
  localizado.** La sostiene un acto sobre su ampliación.

### Y tres preguntas contestadas que no cambian ningún dato

Se preguntó a los sumarios, y las tres respuestas son negativas **con medida**,
que es lo que las separa de un «no lo encuentro»:

- **Ningún almacén temporal individualizado de residuos radiactivos ha ganado su
  puesta en servicio en el BOE.** Barrido de junio de 2025 a agosto de 2026:
  **393 sumarios y 90.867 actos**, y ni una aparición de la expresión.
- **El lado canario del sistema de cables PENCAN-X no ha salido en el boletín
  canario**, ni en la ventana normal ni en el tramo que la avería ocultaba.
- **El gasoducto Magreb-Europa sigue sin importar.** La estadística de CORES,
  actualizada al 17 de agosto de 2026 y con datos hasta junio, da **0,0 en todos
  los meses** en su punto de entrada. La categoría `flujo_invertido` se sostiene.

---

## datos-v2026.08.138 — se revisan los descartes, y uno estaba mal

**Una edición sin registros nuevos.** Se releyeron los cuatro documentos que la
`.137` descartó, y el ejercicio devolvió tres confirmaciones y **una
corrección**: un acto apartado por «redundante» era el que decía en qué punto
está de verdad la desaladora de la Tordera 2.

### Corregido

- **`desaladoras:tordera-2` · `fase`** — `tramitacion` → **`desarrollo`**. El
  acuerdo de ocupación urgente del Gobierno catalán, de 14 de mayo de 2024,
  afirma que el director de ATL aprobó el proyecto básico el **8 de noviembre de
  2023** y que esa aprobación «lleva implícita la declaración de utilidad
  pública y la necesidad de ocupación de los bienes y los derechos afectados».
  La relación definitiva de bienes afectados quedó aprobada el **8 de enero de
  2025**. La planta no está pendiente de decidirse: está pendiente de
  construirse. *`activo` no cambia* —sigue en `false`, porque no está en
  explotación—, pero la ficha ya no dice de menos.
  Entran además dos claves nuevas y el acto como fuente propia.

- **Changelog de la `.137` · errata.** Su apartado de huecos hablaba de «un
  centro de datos en Algete». **No consta que lo esté.** «Algete» era el primer
  municipio de la lista de la línea eléctrica que ha de alimentarlo, no una
  afirmación sobre el centro; el acto solo lo sitúa en el «Polígono Industrial
  SAU-8 Los Ardales». Y las dos bases oficiales que nombran lugares coinciden en
  que **Los Ardales es un poblado de San Agustín del Guadalix**, con su propio
  camino: el Nomenclátor del Instituto Geográfico Nacional no registra ningún
  «Ardales» en Algete ni en su entorno, y CartoCiudad tampoco. La entrada
  publicada lleva su errata dentro; el registro sigue sin crearse, porque
  deducir el municipio del topónimo sería el mismo error al revés.

### Huecos

- **Sigue sin saberse de qué municipio es el SAU-8 «Los Ardales».** Lo que se
  descartó al buscarlo: el informe de impacto ambiental **no se publica en el
  boletín** —el acto solo anuncia que existe y remite al portal ambiental de la
  Comunidad de Madrid—, y el buscador de ese portal no devuelve nada por
  proyecto, promotor ni municipio. La puerta que queda es el planeamiento
  urbanístico del sector, que es de un ayuntamiento concreto.
- **Las expropiaciones de la Tordera 2 no sitúan la planta**, y ese descarte se
  confirma: sus anexos son la traza de las conducciones —parcelas rústicas del
  polígono 6 de Blanes— y van con el nombre de cada propietario particular. El
  atlas no necesita esa geometría ni publica esos nombres.
- **La acería de acero verde de Puertollano sigue fuera de `hidrogeno-produccion`,
  y ahora contra el acto bueno.** El descarte anterior se hizo sobre una
  rectificación de anexos; se ha leído la resolución que declara el proyecto de
  singular interés, diez mil caracteres, y **no menciona ni una vez electrólisis,
  hidrógeno ni potencia**. Una acería consume hidrógeno; esta capa registra a
  quien lo produce.
- **El marco estratégico catalán de centros de datos no crea registro**, y se
  confirma tras leerlo entero: diez páginas de política, sin un solo
  emplazamiento ni un listado de instalaciones. Lo único aprovechable es un
  criterio suyo — para acogerse a él, un proyecto debe tener «una dimensión
  mínima de potencia energética de 20 MW».

---

## datos-v2026.08.137 — siete registros que nadie buscó

**Los dos barridos que ayer parecían caros costaron veinticuatro minutos.** El
diario de la Generalitat y el de la Comunidad de Madrid entraron hacia atrás
hasta enero de 2023: **139.818 actos leídos en 1.808 sumarios**, y de ahí salen
las **cuatro primeras desaladoras catalanas** del atlas y **tres centros de
datos de Madrid**. Ninguno se buscó: todos estaban en el camino de una guardia
que ya corre sola los miércoles.

**La cifra que casi lo impide era mía y era falsa.** El parte decía que barrer
el BOCM costaba ocho horas y 3 GB. Medido: **0,91 s por día**. El error venía de
cronometrar el barrido con el lector de sumarios averiado, que casaba 3.570
títulos diarios en vez de 84. Una medida tomada sobre un sistema roto mide la
avería, no el sistema — y esa cifra, escrita, habría disuadido para siempre de
un trabajo de veinte minutos.

### Añadido

- **`desaladoras:tordera-1`** — el **ITAM del delta de la Tordera**, en Blanes:
  la primera desaladora de Cataluña, **en servicio desde 2003** y con **20
  hm³/año** desde su ampliación de 2010-2011. Es el registro más raro de la
  capa, porque **no lo sostiene ningún acto suyo**: lo acredita la declaración
  de impacto ambiental de la planta que se va a construir a su lado, que lo
  describe en sus antecedentes con sus fechas, sus caudales y sus dos
  promotores — la Agencia Catalana del Agua el original, ACUAMED la ampliación.
- **`desaladoras:tordera-2`** — la segunda planta del mismo delta, **60 hm³/año
  (180.000 m³/día)**, con declaración de impacto ambiental de julio de 2023 y
  **sin construir**. Su parcela mide 67.100 m² y está pegada a la primera. Con
  las dos en marcha, el delta produciría hasta 80 hm³/año.
- **`desaladoras:foix`** — en **Cubelles**, **30 hm³/año** finales y 20 en una
  primera fase, con declaración de impacto ambiental de junio de 2025. Su
  captación suma 5.068 metros y su emisario 3.738, la mitad de cada uno bajo el
  mar.
- **`desaladoras:llobregat`** — en **El Prat de Llobregat**, explotada por ATL.
  Entra por la puerta más estrecha de las cuatro: un anuncio de obras de
  protección costera de la tubería de su captación, que la nombra, la sitúa y
  dice quién la explota, pero no publica ni capacidad ni año de servicio.
- **`centros-datos:cyrusone-alcobendas`** — centro de datos de **CyrusOne Madrid
  1, S.L.U.** en la **calle Nevero, 2, de Valdelacasa (Alcobendas)**, por la
  información pública de su **autorización ambiental integrada**, que es el acto
  más fuerte que esta capa puede tener: el permiso único que exige la ley de
  prevención y control integrados de la contaminación.
- **`centros-datos:cignus-daganzo`** — centro de datos de **Cignus P2DC, S.L.**
  en **Daganzo de Arriba**, sobre cinco parcelas del polígono 1 entre la calle
  Pedro Duque y la M-100. Su autorización ambiental integrada va **con
  evaluación de impacto ambiental**, un escalón más que la de Alcobendas.
- **`centros-datos:quetta-tres-cantos`** — nave destinada a centro de datos en
  la **Ronda de Valdecarrizo, 12 (Tres Cantos)**, promovida por **Quetta Tres
  Cantos, S.L.** Entra por el acto de su acometida: la ocupación de tres vías
  pecuarias para tender la línea de 20 kV que ha de alimentarla.

### Corregido

- **`centros-datos`** — la vara de la `.89` se afina sin cambiar de sitio. Decía
  «la eléctrica sola no sitúa el centro», y se estaba leyendo como si excluyera
  todo acto eléctrico. **Excluye los que no sitúan**: el de Tres Cantos da calle
  y número, que es más de lo que dan la mitad de los registros de esta capa; el
  de Villalbilla sigue fuera porque su acto es el de una subestación y nombra el
  centro sin decir dónde está.
- **`desaladoras`** — la capa estrena **registros que no están en explotación**.
  Hasta hoy sus veintitrés plantas iban todas en `produccion`, no por doctrina
  sino porque todos sus actos reconocían una explotación en marcha. Una
  declaración de impacto ambiental retrata un momento anterior, y el filtro «en
  explotación» tiene que dejar fuera a Tordera 2 y al Foix. El contrato lo dice
  ahora en su §6.5, que hablaba de «las seis» cuando ya eran veintitrés.

### Huecos

- **Un centro de datos del SAU-8 «Los Ardales» que NO entra, y con la medida
  hecha.** Dos actos distintos lo dan por en construcción en ese polígono
  industrial y uno nombra a su promotora, Data4 Infrastructure Spain, S.L.U.
  Pero **ninguno dice en qué término municipal está**: los municipios que
  enumeran son los que cruza su línea eléctrica. Y el único topónimo «Los
  Ardales» de la zona cae en **San Agustín del Guadalix**, comprobado
  contrastando la coordenada contra los municipios del IGN. Registrarlo habría
  sido elegir municipio por parecido de nombre.

  > **Errata corregida el mismo día.** Este apartado decía «un centro de datos
  > en Algete». No consta que lo esté: «Algete» era el primer municipio de la
  > lista de la línea eléctrica, no una afirmación sobre el centro. La edición
  > siguiente cuenta cómo se vio.
- **Ninguno de los tres centros de Madrid publica potencia informática.** Sus
  actos no la dan: la documentación técnica que someten a información pública no
  se publica en el boletín, sino en el Portal de Transparencia de la Comunidad.
- **Las dos declaraciones de impacto ambiental propias del ITAM de la Tordera**
  —DOGC de 2001 y BOE de 2005— no se han localizado ni archivado. Lo que esta
  ficha publica sale de cómo las resume la declaración de su hermana.
- **La capacidad y el año de servicio de la desaladora del Llobregat**: ningún
  acto localizado los publica.
- **Las cinco parcelas catastrales del centro de Daganzo** no se han resuelto a
  geometría, así que su punto es el de una de las dos vías que las delimitan.

---

## datos-v2026.08.136 — el primer centro de datos catalán, y lo trajo la guardia

**Cataluña era el hueco grande de esta capa y llevaba meses buscándose a mano.**
El diario de la Generalitat entra en la guardia semanal de boletines
autonómicos, y un barrido hacia atrás de 60.937 actos saca en la primera pasada
el expediente ambiental de un centro de datos en Barcelona. Se buscaba en el
boletín provincial, donde se suponía que estaría su licencia municipal; el acto
que lo acredita estaba en el diario autonómico.

**Y el mismo día, dos boletines más entran a vigilancia** —el de Castilla-La
Mancha y el de Cataluña—, con lo que la guardia pasa de cuatro diarios
autonómicos a seis.

### Añadido
- **`centros-datos:zona-franca-barcelona`** — actividad de almacenamiento,
  procesamiento y distribución de datos informáticos en Barcelona, promovida por
  **Parc Logístic de la Zona Franca, S.A.** El acto no la autoriza por primera
  vez: la somete a información pública porque ampliar sus grupos electrógenos de
  6 a 13 lleva la potencia total a **108,251 MW** y supera el umbral de 50 MW,
  lo que la saca del anexo II de la Ley catalana 20/2009 y la mete en el anexo I.
  El anuncio afirma en presente que la actividad «dispone de licencia ambiental»,
  así que el centro **ya opera**: por eso entra en `produccion` y no en
  tramitación. *(DOGC de 19/05/2026, exp. FUE-2024-03943745.)*
  **Los 108 MW no son potencia TI y la ficha lo dice**: son potencia de
  emergencia, un umbral de clasificación ambiental. Confundirlas inflaría el
  centro varias veces, y por eso la cifra va en una clave y no en
  `potencia_it_mw`, que sigue vacío.

### Corregido
- **`centros-datos:meta-talavera`** — sube el siguiente peldaño de su
  expediente: la **aprobación definitiva del proyecto de reparcelación** del
  Proyecto de Singular Interés, de 7 de agosto de 2026. Con ella entran tres
  hechos que ningún acto anterior daba: que **el suelo ya es de la promotora**
  —la reparcelación solo se tramita una vez adquirido, y se solicitó el 16 de
  abril de 2025—, que la transformación jurídica del suelo está cerrada tras
  información pública y alegaciones del Ayuntamiento de Talavera y de la EATIM
  de Gamonal, y la **primera cifra económica que un acto publica sobre este
  campus**: una garantía de **1.089.554,00 €** por la monetización del 49 % del
  aprovechamiento urbanístico. *La `fase` NO se mueve* y sigue en `desarrollo`:
  reparcelar no es construir.

### Huecos
- **El emplazamiento exacto del centro de la Zona Franca.** El acto lo sitúa en
  «el término municipal de Barcelona» y no dice más: ni dirección, ni parcela,
  ni polígono. El nombre de la promotora apunta al Parc Logístic, pero eso es su
  razón social y no una afirmación del acto, así que el punto se queda en el
  municipio — la precisión que ya llevan nueve de los diecisiete registros de
  esta capa. La licencia ambiental original que el anuncio cita es de anexo II y
  la otorga el Ayuntamiento de Barcelona, así que se publica en el boletín
  provincial y no en el autonómico.
- **La potencia TI y la fecha de entrada en servicio de ese centro**: el acto no
  las da. La única potencia que publica es la de los grupos electrógenos.
- **Un centro de datos en Algete (Madrid) sigue sin registro, y ya tiene acto
  cerca.** El informe de impacto ambiental de una línea subterránea de 66 kV
  hasta la STR Los Ardales dice, en su propio título, que es «para suministro a
  data center sito en el SAU-8 “Los Ardales”». Sitúa el centro, pero no lo
  nombra ni lo dimensiona, y el objeto del acto es la línea: es el caso de Ignis
  Data Beta II, y la vara de la `.89` sigue en pie. Falta el acto DEL CENTRO.

---

## datos-v2026.08.135 — un aterrizaje sin nombre lo gana desde el expediente de otro

**El hueco más citado de esta casa se estrecha, y no por donde se esperaba.**
El aterrizaje de la Virgen del Mar (Santander) llevaba desde su alta declarando
que ningún acto bautizaba a su cable. Se llama **Anjana**, y el nombre no ha
salido de la lista que la Ley 11/2022 obliga al Estado a tener: ha salido del
**proyecto que Google presentó para instalar OTRO cable en la misma playa**.

**Cómo.** El 28 de agosto el BOE publicó la información pública de la solicitud
de concesión del cable **SOL** en Santander. Su expediente trae 41 MB de
documentación técnica, y el proyecto básico, al describir la infraestructura que
piensa reutilizar, dice: «el BMH se encuentra en el parking de la playa Virgen
del Mar (Latitud N43 28.6140 y Longitud W003 52.6230), ya que fue construido en
2024 para permitir la conexión a tierra del cable de fibra óptica **Anjana**».

**La identificación junta dos actos y se escribe entera para que se pueda
discutir:** la concesión de esa ficha, otorgada por Orden Ministerial de 30 de
julio de 2024 para un cable con inicio en esa playa, y este documento, que dice
que el único amarre que allí existe se construyó en 2024 y es de Anjana. Encajan
por lugar, año y objeto. Si algún día apareciera un segundo amarre, esa unión
sería lo primero que habría que revisar.

**No es la primera vez, y por eso el esquema lo dice ahora.** El nombre de Grace
Hopper también constaba solo en el proyecto que acompañaba a su expediente, no
en el acto. Que un aterrizaje sin nombre lo gane años después y desde el
expediente de un tercero es el curso normal de esta capa.

**Y el hueco NO se cierra: se estrecha.** Sigue sin haber fuente primaria que
diga adónde va Anjana, y el registro sigue en `parcial`. Lo que este episodio
demuestra es lo que la ficha llevaba diciendo desde el principio: el Estado
tiene el dato desde 2022 y no lo publica — tanto, que el nombre acabó
sabiéndose por el proyecto de un competidor.

### Añadido

- `cables-submarinos:sol-virgen-del-mar` — el aterrizaje **solicitado** para el
  cable **SOL**: unos 7.500 km entre los Estados Unidos y España con ramales a
  Bermudas y las Azores, de los que **858,85 km** cruzan aguas españolas.
  Promotor **Google** por su filial **Cardinal Fish Infrastructure, S.L.**,
  tendido por SubCom. Fase **en tramitación**: lo publicado es la apertura del
  plazo de alegaciones, del 31 de agosto al 28 de septiembre de 2026, no una
  concesión.
- Tres documentos en `fuentes/` — el anuncio del BOE, la página del expediente
  y el **proyecto básico** completo, que es el que sostiene tanto el nombre de
  Anjana como las dos coordenadas.

### Cambiado

- `cables-submarinos:virgen-del-mar-santander` pasa a llamarse **«Anjana —
  Playa de la Virgen del Mar (Santander)»** y estrena el campo `sistema`, que
  hasta hoy estaba vacío en este registro por falta de acto.
- **Su coordenada deja de ser una aproximación.** Venía del Nomenclátor del IGN
  —que no recoge esa playa, así que se usaba la ISLA que la delimita— y pasa a
  la posición exacta de la arqueta por donde el cable entra en tierra, unos
  **250 m** al sur. La precisión sube de `paraje` a `exacta`.
- Los dos registros comparten punto **a propósito**: comparten arqueta, igual
  que Grace Hopper y Marea en Sopela.
- La descripción del campo `sistema` en el esquema de la capa ya no pone de
  ejemplo un hueco que acaba de cerrarse.

### Huecos

- **Adónde va Anjana.** Ninguna fuente primaria lo dice. El hueco conserva
  entera su explicación: la Ley 11/2022 obliga a comunicar al Ministerio el
  trazado y el punto de enganche, esa lista existe y no se publica, y el
  reglamento que el artículo 6.10 mandaba aprobar en tres meses no consta en el
  BOE cuatro años después.

### Sin cambios

Ninguna otra capa se mueve, y el contrato se queda en **1.80.0**: no hay
vocabulario nuevo ni regla nueva. El campo `sistema` y la fase `tramitacion` ya
existían y estaban esperando un caso como este.

## datos-v2026.08.134 — dónde mide el tiempo el Estado

**Nace `estaciones-meteorologicas`: 970 estaciones de AEMET.** Es la primera
capa del atlas que no sale de un inventario, sino del **cruce de dos**.

**AEMET publica dos redes que se solapan y no coinciden, y ninguna es «la
red».** El inventario del Banco de Datos Nacional de Climatología lista **926**
—las que tienen serie climatológica— y la observación convencional **854** —las
que emiten en tiempo real—, con **810 en común**. Entra la unión, y la
`categoria` de cada registro dice a qué red pertenece. Eso no es una etiqueta de
conveniencia: **es un hecho que ninguna de las dos fuentes afirma por separado**
y que solo existe al cruzarlas.

**La duda se midió antes de decidir.** La observación es un flujo horario, así
que sus 44 estaciones exclusivas podían ser un artefacto de haber mirado a una
hora concreta. No lo son: **el 93 % de esas 44 entregó las doce lecturas de la
ventana archivada, frente al 63 % de las 810 del núcleo** — son más regulares
que la red principal, y ese 63 % es ruido de transmisión, no ausencia. De las
116 que solo están en el censo se comprobó **una a una** que no emiten.
Publicar un solo inventario habría dejado fuera Madrid-Barajas RS, Rota Base
Naval, Igeldo y tres estaciones de Picos de Europa sabiendo dónde están.

**Y la coordenada se comprueba contra sí misma.** El censo la escribe en
grados-minutos-segundos pegados (`394924N`) y la observación en decimal, así que
las 810 comunes contrastan la conversión contra un dato independiente **del
mismo emisor**: peor desviación **0,0014°**, unos 155 m, que es justo lo que
deja el redondeo al segundo de arco, y ni un formato ilegible. No es una
comprobación de una vez: el extractor la rehace en cada pasada y se detiene si
algún día se aparta más.

### Añadido

- `estaciones-meteorologicas` — **970 registros**, todos `confirmado`, en el
  dominio de ciencia y capacidades avanzadas junto a la red sísmica y la
  geodésica. Cada uno con su indicativo de AEMET, nombre, altitud y —cuando la
  fuente lo da— provincia e indicativo sinóptico de la OMM. Reparto: **810** en
  las dos redes, **116** solo climatológicas, **44** solo automáticas.
- Tres valores de categoría en `vocabularios.json`, con sus colores medidos:
  ninguno se confunde con otro de la capa ni bajo deuteranopía.
- `fuentes/aemet/2026/` — los dos inventarios tal como los devolvió la API, sus
  metadatos y la nota legal.

### Huecos

- **El TIPO de estación** —automática, manual, principal— y su instrumentación.
  Ninguno de los dos inventarios lo publica. **Ojo a no leer la categoría como
  si lo dijera:** habla de a qué RED pertenece la estación, no de qué aparato
  es.
- **La fecha de instalación** y **si la estación sigue activa**. Una que hubiera
  cerrado seguiría figurando en el inventario sin decirlo.
- **La red especial de radiación**, que es una tercera red de AEMET y se miró:
  publica medidas por estación pero **no publica coordenadas**, así que no sitúa
  nada y no entra.

### Sin cambios

Ninguna otra capa se mueve. El contrato pasa a **1.80.0** por el vocabulario
nuevo; no nace ninguna regla `R*`.

> **Sobre la licencia, que estaba mal apuntada.** El aparato de trabajo del
> atlas daba por hecho que el conjunto de AEMET era CC BY 4.0. **No lo es:** su
> nota legal es el **régimen general de la Ley 37/2007** —reutilización
> comercial y no comercial permitida, citando a AEMET y sin desnaturalizar el
> sentido, sin ShareAlike ni NonCommercial—. Es compatible con publicar el
> derivado bajo CC BY 4.0, que es lo que esta casa ya hace con el MITECO y el
> IGN, pero la fuente no dice lo que se creía y queda corregido.

## datos-v2026.08.133 — la energía del agua vuelve a estar al día, y se sabe por qué se había parado

**La reserva de agua estaba al día desde el 26 de agosto; su energía no.** La
capa de embalses sirve el parte del 25 de agosto, pero las cifras de energía
—que el Boletín Hidrológico publica solo en el resumen semanal en PDF, y no en
ninguna base histórica— se habían quedado dos partes atrás, en el del 11. La
edición `.123` lo declaró como hueco en voz alta en vez de callarlo. Este hueco
se cierra.

**Por qué se había parado, que es lo que faltaba por saber.** La ruta directa
del PDF dejó de responder y se dio por caducada: los cuatro intentos de agosto
daban 404, incluido el de un boletín que sí estaba archivado, así que la
conclusión razonable fue que el patrón había cambiado. **No había cambiado.** El
fichero sigue exactamente donde estaba; lo que pasa es que el Ministerio dejó de
servirlo directo y ahora lo entrega a través de un cargador
(`accion/cargador_archivo.htm?file=…&mimetype=application/pdf`), que responde a
una petición simple sin sesión ni navegador. Un negativo bien anotado tenía la
puerta exacta apuntada, y por eso se ha podido volver a llamar a ella.

**La transcripción se comprobó contra lo ya publicado antes de creerse nada:**
leído el PDF del boletín 32 con el mismo procedimiento, las ocho cifras salen
idénticas a las que esta capa ya publicaba desde la `.50`. Y de paso el control
cazó la trampa del documento: la página de totales trae dos filas
«CAPACIDAD TOTAL», la del agua embalsada en hm³ (56.043) y la de la energía en
GWh (23.011). Tomar la primera habría publicado hectómetros cúbicos como
gigavatios hora.

### Cambiado

- `agua-embalsada` · conjunto — la energía pasa del **Boletín Hidrológico
  Semanal n.º 32** (parte del 11 de agosto) al **n.º 34** (parte del 25 de
  agosto), el mismo al que la capa ya iba:
  - energía almacenada — 13.983 → **13.094 GWh** sobre la misma capacidad de
    23.011 GWh, que no cambia: del 60,8 % al 56,9 % de llenado energético.
  - producción de la semana — 474,4 → **470,6 GWh**.
  - producción acumulada del año — 25.903 → **26.902 GWh**, frente a los
    **28.515** del mismo periodo del año anterior (eran 27.404 en el parte
    anterior): la diferencia interanual se mantiene en torno a los −1.600 GWh.
  - periodo del dato — del 3–9 de agosto al **17–23 de agosto**.
- `puertos` · nota de capa — se declara una rareza de la fuente que se
  investigó y no se corrige. El campo con el nombre del puerto se contradice
  consigo mismo en las tildes: cuatro de sus 43 valores pierden la que les toca
  («Marin y Ria de Pontevedra», «Gijon-Musel», «Malaga», «San Sebastian de la
  Gomera») mientras otros doce sí la llevan («Almería», «Alcúdia», «A Coruña»),
  así que no es la codificación del fichero sino el dato. En tres de esos cuatro
  la fuente se contradice **dentro de un mismo registro**: el nombre de la
  autoridad portuaria acentúa lo que el del puerto no. Los dos van transcritos,
  cada uno a su campo. Enmendarle la ortografía a un dato transcrito es
  cambiarlo sin decirlo.

### Añadido

- `fuentes/miteco/2026/` — los resúmenes semanales **n.º 33 y n.º 34** de 2026.
  Se acumulan en vez de reemplazar al anterior: cada semana trae una energía que
  ningún otro documento repite, y el n.º 33 se archiva aunque hoy no sostenga
  ninguna cifra publicada, porque su semana no está en ninguna otra parte.

### Huecos

- **La energía sigue siendo semanal y de una sola semana.** El Boletín la
  publica solo en el resumen de cada martes, así que 2.016 de las 2.017 páginas
  de parte no la llevan, y no es un olvido: se dice en cada una.
- **El parte n.º 35 aún no existe.** Se comprobó el 30 de agosto: su ruta
  responde 200 con el cuerpo vacío, que es la forma que tiene esta sede de decir
  «todavía no». Sale el martes.
- Sigue abierto todo lo que la `.123` ya declaraba de esta capa: los 27 embalses
  que ya no informan por separado conservan su fecha vieja, y los GWh no se
  convierten en hm³ porque haría falta un dato que el Boletín no publica.

## datos-v2026.08.132 — el atlas se aplica la ortografía que le exige a sus fuentes

**Ni un registro, ni una geometría, ni una cifra cambian.** Cambian dieciséis
textos que se escribieron sin tildes y el nombre de un documento del archivo.

**Lo primero lo destapó publicarlo.** Cada capa declara desde hace poco por qué
la vigila o no la vigila un boletín oficial, y ese motivo pasó a leerse en la
página de la capa. Al verlo en pantalla se vio lo que un campo interno esconde:
estaba escrito sin una sola tilde. No eran erratas sueltas —hay notas enteras
con todas sus tildes y notas enteras sin ninguna—, así que se midió el corpus
completo antes de tocar nada.

**Y la medida trajo su propia leccion sobre qué NO tocar.** De la prosa publicada
del atlas, lo único que se corrige es lo que el atlas ESCRIBE: doce motivos de
vigilancia y cuatro notas de doctrina del manifiesto. **Todo lo demás se queda
como está, y a propósito**: los titulares del Catastro Minero, los títulos de
proyecto del PERTE y los nombres de estación de Adif vienen en mayúsculas y sin
acentos porque así los publica su registro, y el atlas transcribe. Corregirlos
sería mejorar la letra de una fuente, que es la forma educada de falsear una
transcripción. Tampoco se tocan los identificadores —`energia`, `red-electrica`,
`montes-catalogo`—, que no son palabras mal escritas sino rutas y claves.

> La nota de `montes-catalogo` lleva meses diciendo, con razón, que su fuente
> «escribe *Caceres* sin tilde». Tres notas del propio manifiesto hacían lo
> mismo.

Una sola corrección no es de tilde y va dicha aparte: la nota de
`gas-interconexiones` llamaba **«Nomenclatur»** al callejero del IGN, que se
llama **Nomenclátor**.

### Cambiado

- `manifest.json` · 16 textos — tildes en los `porque` de doce capas
  (`agua-embalsada`, `conducciones-combustible`, `frontera-schengen`,
  `generacion-electrica-provincia`, `idioma`, `minerales-dominios`,
  `montes-catalogo`, `parques-eolicos`, `plantas-solares`, `puertos`,
  `red-electrica`, `red-geodesica`) y en cuatro notas de doctrina
  (`_vigilancia` y las de `conducciones-combustible`, `gas-interconexiones` y
  `gas-regasificacion`). Ni una palabra cambia de significado.
- `gas-interconexiones` · nota — «Nomenclatur» → «Nomenclátor», que es como se
  llama el callejero del IGN.
- `gas-interconexiones` · 6 citas — `archivo` pasa de
  `fuentes/ign/2026/2026-08-12_geometria-interconexiones-gasistas.json` a
  `fuentes/ign/2026/2026-08-12_ign_geometria-interconexiones-gasistas.json`.
  **El fichero es el mismo byte a byte**; lo que gana es el emisor en el nombre,
  que la regla del archivo pide y este era el único documento que no lo llevaba.
  Un acta con DOS emisores —dos geometrías del IECA andaluz y cuatro del
  Nomenclátor del IGN— se nombra por su estante: el nombre es etiqueta de
  estante, no registro de procedencia, y la procedencia va dentro, con su emisor
  declarado consulta a consulta.

### Sin cambios

Ninguna cifra, ningún vértice, ninguna fecha de dato, ninguna URL y ningún
estado de verificación. Quien haya descargado una capa antes de hoy tiene
exactamente los mismos datos; lo que cambia es cómo están escritas cuatro frases
suyas y dónde apunta una ruta de archivo.

## datos-v2026.08.131 — lo que el atlas promete se lee sin saber nada del atlas

**Ni un registro cambia.** Lo que cambia es que el contrato adquiere una
garantía que antes solo era una costumbre: **las rutas que el atlas promete se
sirven sin precomprimir**, y quien no pida compresión recibe texto plano.

**Por qué hacía falta escribirlo, y no es una precaución teórica.** El día
anterior, los ficheros que el visor usa para dibujar pasaron a servirse ya
comprimidos desde el origen —un 44 % menos por el cable en las ocho capas más
pesadas, de 3.801.680 a 2.140.536 bytes—. Al probarlo apareció algo que conviene
saber de la plataforma que sirve este sitio: **no respeta la cabecera con la que
un cliente pide que NO le compriman**. A un fichero servido así le manda los
bytes comprimidos aunque se le haya pedido lo contrario.

Llevar esa optimización a las capas, al manifiesto, a los vocabularios, a las
series o a los conjuntos habría roto a quien los descarga con una herramienta
que no sepa descomprimir brotli —`curl` sin banderas, un script sin la
librería, un SIG de escritorio—. **Y los habría roto en silencio**: respuesta
correcta, cabeceras correctas y un cuerpo ilegible. Un fallo así no se descubre
leyendo un mensaje de error; se descubre semanas más tarde, cuando alguien dice
que el fichero «viene mal».

Así que la línea que el contrato ya trazaba entre **lo que promete** y **lo que
es órgano interno del visor** gobierna ahora también cómo viajan los bytes. Lo
interno va comprimido y puede cambiar sin aviso; lo prometido, no, y eso ya no
depende de que nadie se acuerde.

**Qué NO cambia:** ni un registro, ni una geometría, ni un campo, ni una fuente.
Quien haya descargado una capa antes de hoy tiene exactamente los mismos datos.

Contrato **1.79.0**.

## datos-v2026.08.130 — todas las ediciones publicadas se pueden recuperar enteras

**Ni un registro cambia.** Esta edición corrige la anterior, del mismo día, en
dos cosas que solo se supieron al medirla ya publicada.

### Lo que la `.129` decía mal

La `.129` estrenó el **paquete de datos** adjunto a cada release —lo único con
lo que alguien de fuera puede obtener una edición pasada entera— pero lo puso
**solo de esa edición en adelante**, y lo justificó así: que un adjunto añadido
después no entraría en un DOI ya acuñado.

Al comprobar qué había depositado el archivo de esa misma edición, la razón
resultó falsa. **El depósito archiva el paquete del repositorio, y nunca los
ficheros adjuntos a la release** — ni los puestos antes ni los puestos después.
El paquete de datos no toca ningún DOI, tampoco el de su propia edición.

### Lo que cambia: cae el suelo

Caída la razón, cae el corte. **Las 87 ediciones que tienen release pasan a
tener su paquete**, de la `.41` —donde empieza el archivo público— en adelante.
Cualquier edición que se haya citado desde el 12 de agosto se puede ahora
descargar entera, con sus capas, sus series, sus conjuntos y su manifiesto tal
como se publicaron.

### Y una precisión que faltaba

El contrato dice ahora **por separado** qué ampara cada cosa: el **DOI** archiva
el aparato de citación —fuentes, procedencia, contrato, registro de cambios— y
el **paquete** trae las capas. Las dos sirven para fijar una edición, porque el
adjunto cuelga de una etiqueta que no se mueve jamás, pero no son la misma cosa.
Darlas por una sola es prometer un depósito que no existe, y de esa confusión
salió justamente el suelo de la `.129`.

### Cómo se llama el paquete

Se llamaba `datos-<etiqueta>.tar.gz`, y como la etiqueta ya empieza por `datos-`
salía tartamudeando. Ahora se llama **como su etiqueta**: `<etiqueta>.tar.gz`.
Una sola regla, sin excepciones que describir. El de la `.129` se renombró el
mismo día, porque un adjunto no forma parte de la etiqueta y dejarlo habría
obligado al contrato a explicar dos convenciones para siempre.

### Huecos

- Las ediciones **anteriores a la `.41` siguen sin paquete**, y no es una
  decisión revisable: el archivo público empieza ahí y no guarda ningún estado
  que sea el de las anteriores. Fecharlas sería mentir.
- La **`.88` tampoco lo tiene**, por lo mismo que no tiene release: se publicó
  una hora después de la que la sustituye y el archivo saltó por encima de ella.

### Contrato

**1.78.0 — correctiva y aditiva.** §8.1 pierde el suelo, gana la distinción
entre lo que ampara el DOI y lo que ampara el paquete, y fija el nombre del
adjunto.

**Ni un registro, ni una geometría, ni un campo de dato cambian.**

## datos-v2026.08.129 — el atlas dice por fin qué promete a quien lo lea a máquina

**Ni un registro cambia.** Esta edición no añade datos: pone por escrito una
promesa que el atlas llevaba tiempo cumpliendo sin haberla dado, y tapa un hueco
que un atlas de trazabilidad no podía seguir teniendo abierto.

### Lo que ya pasaba y nadie había dicho

Los datos se sirven estáticos y **abiertos a cualquier origen** desde que existe
el sitio: el catálogo, los vocabularios, las cuarenta capas, las series y los
conjuntos. Cualquiera podía construir encima —y alguien podía estar
haciéndolo— sobre rutas que **nadie había prometido** y que un cambio interno
podía mover sin que se enterase nadie.

### Añadido: §10.1, el contrato de acceso

Cinco rutas quedan **prometidas** —el manifiesto, los vocabularios, las capas,
las series y los conjuntos— y las gobiernan las mismas garantías de evolución
que ya regían los datos: un identificador no se recicla jamás, un registro
retirado cambia de estado y no desaparece, y renombrar un campo exige versión
mayor y guía de migración.

**Y tres quedan declaradas INTERNAS**, que es la mitad del valor de la sección:
`representacion/`, `detalle/` e `indice-busqueda.json` no son datos, son órganos
del visor —existen porque bajar el expediente completo de cada registro para
dibujar un punto costaba casi setenta megas— y **cambiarán sin aviso**.
Prometerlas habría sido congelar una optimización; callar habría sido dejar que
alguien se apoyara en ellas sin saberlo.

### Lo que de verdad cambia: una edición pasada se puede recuperar

Hasta hoy el sitio servía **solo la edición viva**, en rutas sin versión, y el
DOI amparaba el aparato de cita —fuentes, contrato, changelog— pero **no los
datos**. Una cifra citada hoy era irrecuperable mañana: se podía nombrar la
edición `.128` y no obtenerla.

Desde esta edición, **cada release del archivo público lleva adjunto su paquete
de datos** —`datos-<etiqueta>.tar.gz`, la carpeta de datos entera de esa
etiqueta—, y lo pone una guardia automática que se repara sola: mira qué
releases no lo tienen y se lo pone. **La `.129` es la primera que lo lleva.**

### Huecos

- Las ediciones **anteriores a la `.129` no llevan paquete**, y no se les puede
  poner: el depósito recoge lo que ve al publicar, y un adjunto añadido después
  no entra en un DOI ya acuñado. Colgarlo igualmente daría una apariencia de
  completitud que el DOI no respalda. Se dice en vez de disimularlo.

### Contrato

**1.77.0 — aditiva.** Nace §8.1: qué rutas se prometen, cuáles son internas, qué
edición se obtiene y cómo se fija una. La cabecera que abre los datos a
cualquier origen pasa además a la configuración del despliegue: hasta hoy ese
valor llegaba por un ajuste por defecto de la plataforma, y **prometer sin
sostener es la garantía sin diente que este contrato existe para no dar**.

**Ni un registro, ni una geometría, ni un campo de dato cambian.**

## datos-v2026.08.128 — las dos capas que no se vigilan solas dejan de estar calladas

**Ni un registro cambia.** Esta edición separa dos cosas que la anterior había
metido en el mismo saco, y le da voz a la guardia semanal sobre ellas.

### Lo que la edición anterior no distinguía

La `.127` hizo que cada capa dijera si le corresponde vigilancia de boletín
oficial y, si no, por qué. Eso bastaba para saber **que** no la vigila un
boletín, pero no para distinguir dos situaciones que no se parecen en nada:

- **La red de carreteras** se transcribe del inventario del Instituto Geográfico
  Nacional. No la vigila un boletín porque su disparador es otro: que el IGN
  publique edición nueva. Pero **eso se puede mirar**, y se mira.
- **Los pasos de la frontera Schengen** salen del Manual Schengen y de su
  actualización en el Diario Oficial de la Unión Europea. **La presencia
  institucional del español** sale de constituciones y leyes lingüísticas de
  veintiún Estados. Detrás de estas dos **no hay nada**: ninguna guardia del
  atlas barre el DOUE ni las gacetas nacionales. Su única red es que una persona
  se acuerde.

Las tres decían lo mismo —«no le toca vigía de boletín»— y el riesgo era muy
distinto.

### Añadido

- **La marca `revision: "humana"`** en el catálogo de capas, para las capas cuya
  **fuente no vigila nadie**. Hoy la llevan `frontera-schengen` e `idioma`, y
  **pueden ser más**: cualquier capa futura que se apoye en fuente europea o
  extranjera cae aquí.

### Lo que de verdad cambia: la guardia habla

La guardia semanal **las nombra ahora en cada pasada** —con cuántos días llevan
sin revisar y cuál es su cadencia—, antes de dar el resultado y **aunque no haya
ninguna alarma**. Hasta ahora solo avisaba cuando una capa pasaba de su cadencia,
que llega tarde y, sobre todo, no dice el motivo.

Es la misma doctrina con la que esa guardia ya informa de cuántas direcciones
responden «correcto» sin poder comprobarse de verdad: un «sin alarmas» que se
leyera como «todo está vigilado» sería exactamente la garantía falsa que este
atlas existe para no dar.

### Huecos

- Los dos de la edición anterior siguen abiertos, y ahora están **marcados en los
  datos** además de dichos aquí: nadie barre el DOUE ni las gacetas de otros
  Estados por cuenta del atlas. Lo que cambia no es la cobertura, es que ya no
  se puede olvidar.

### Contrato

**1.76.0 — aditiva.** Nace `vigilancia.revision` (§3), comprobada en §7.13: la
marca solo puede acompañar a una capa que declare que no le toca vigía de
boletín. Si un boletín la barre, su fuente sí tiene guardia y la marca mentiría —
y una mentira ahí es peor que la ausencia, porque la guardia semanal decide a
quién nombrar leyendo justo eso.

**Ni un registro, ni una geometría, ni un campo de dato cambian.**

## datos-v2026.08.127 — cada capa dice quién la vigila, y cuatro estrenan vigía

**Ni un registro cambia en esta edición.** Lo que cambia es que el catálogo deja
de callar sobre una cosa que hasta hoy solo se podía averiguar leyendo el código
de las guardias: **a qué capas les corresponde vigilancia de boletín oficial, y
por qué a las demás no.**

### El silencio que se cierra

El atlas comprueba dos cosas distintas y por eso tiene dos clases de guardia:
que un dato esté bien sostenido **el día que entra** —eso lo juzga la validación
del contrato, sobre toda capa y en cada cambio— y que **siga estándolo** —eso lo
mira la guardia semanal de caducidad y enlaces muertos, también sobre todas—.

Lo que **no** se aplica a todas es la vigilancia de los boletines oficiales, que
barre cada semana el BOE y cuatro boletines autonómicos buscando actos que toquen
al atlas. De las 40 capas, la mitad tenía expresiones curadas y la otra mitad no,
y **no había forma de saber cuáles estaban sin vigilar a propósito**.

Al clasificarlas apareció que no era un descuido: **el atlas tiene dos mecánicas
de actualización y hasta hoy solo una tenía guardia**.

- **Capas de expediente** — cada registro tiene su acto administrativo, y el
  disparador de un cambio es que salga uno nuevo en un boletín.
- **Capas de conjunto transcrito** — la capa entera se toma de una edición de un
  conjunto oficial, y **los mismos documentos sostienen todos sus registros**.
  Su disparador no es un acto: es que el organismo publique edición nueva. Sobre
  estas, un vigía de boletín no encuentra nada, y ponerlo solo añade ruido — y un
  vigía que grita cada semana acaba apagado.

Se midió con evidencia y no con criterio: en las capas sin vigilancia, los mismos
documentos respaldan todos los registros — 120 de 120 en las zonas de defensa,
48 de 48 en los aeropuertos, 46 de 46 en los centros de referencia del SNS, 81 de
81 en los pasos de la frontera Schengen.

### Añadido

- **`vigilancia` en el catálogo de capas** — toda capa declara ahora si le
  corresponde vigilancia de boletín y cuál, o, si no le corresponde, **por qué**.
  Ese porqué es obligatorio: una capa que dice que no la vigila nadie sin decir
  el motivo es un hueco sin declarar, y este atlas no los admite en sus datos ni
  en su propia vigilancia.

- **Cuatro capas estrenan vigilancia: `zonas-defensa`, `aeropuertos`, `csur` y
  `perte`.** Las cuatro transcriben una **norma** publicada en el BOE —la Ley
  8/1975 y su reglamento, el Real Decreto 1150/2011, el Real Decreto 1302/2006,
  las resoluciones de concesión—, y si esa norma se modifica **la capa entera
  queda desfasada sin que salte ninguna alarma**. Las expresiones se ciñen al
  número de la norma, no al tema, y esa decisión está medida sobre **3.339
  títulos del BOE de 25 días**: las cuatro dan cero falsos positivos, mientras
  que las versiones amplias que se descartaron daban 26 y 9. Cero coincidencias
  no es una guardia muerta — una reforma normativa es rara, y es precisamente la
  que hoy no vería nadie.

Con esto, la vigilancia de boletín pasa de **20 a 24 capas**.

### Huecos

- **`frontera-schengen` e `idioma` quedan con un hueco declarado, no con una
  ausencia decidida.** La primera se sostiene en el Manual Schengen y en su
  actualización en el Diario Oficial de la Unión Europea; la segunda, en textos
  legales de veintiún Estados. **Ninguna guardia del atlas cubre todavía el DOUE
  ni las gacetas nacionales**, así que las dos dependen de la revisión humana
  periódica. Queda dicho aquí para que quien las use sepa exactamente qué las
  respalda y qué no.

- El catálogo de designaciones de centros de referencia del SNS **no se publica
  en el BOE**: es un documento en la web del Ministerio de Sanidad. La nueva
  vigilancia caza la norma y las designaciones publicadas como acto, no el
  catálogo — ese sigue siendo revisión a mano.

### Contrato

**1.75.0 — aditiva.** Nace el campo `vigilancia` en el catálogo de capas (§3),
obligatorio en toda capa publicada y comprobado por la verificación **§7.13**. Un
segundo control cruza en cuatro direcciones lo que el catálogo declara con lo que
las guardias hacen de verdad, para que las dos no puedan separarse en silencio:
la capa que se cree vigilada y no lo está, la que dice que no le toca y sí la
vigilan, la que nombra un boletín y la vigila otro, y el identificador mal escrito
en una expresión. Una rama declarada y todavía sin datos queda fuera de la regla:
no hay nada que vigilar hasta que nace.

**Ni un registro, ni una geometría, ni un campo de dato cambian.**

## datos-v2026.08.126 — las fechas se leen, y un resumen ya no puede citar la que no es

**Dos cosas, y la segunda nace de mirar la primera.**

### Las fechas se le enseñan al lector como las lee una persona

Los datos guardan las fechas en formato internacional (`2026-08-25`) y así se
quedan: ordenan bien y no admiten confusión entre países. Pero eso no es lo que
se le enseña a nadie. Desde esta edición, en todo el sitio:

- **en prosa**, «25 de agosto de 2026» — la descripción de un registro, las
  frases de una página;
- **como valor**, «25/08/2026» — la celda de una tabla, el pie de una ficha, la
  fecha de una cita, el rótulo de una gráfica.

La segunda ocupa exactamente lo mismo que la fecha que sustituye, así que
ninguna columna se descuadra.

Se quedan en formato internacional las **direcciones de los partes**
(`/agua/2026-08-25/` es un enlace permanente y romperlo rompería las citas) y
todo lo que hay dentro de los ficheros de datos, que es lo que descarga quien
los usa.

### Corregido

- `agua-embalsada` · descripción de los 401 registros — la fecha del parte pasa
  a escribirse «25 de agosto de 2026». Ningún dato cambia.

### Contrato

**1.74.0 — nace R12: un resumen no puede citar una fecha que su registro no
sostiene.**

La edición anterior corrigió 374 embalses cuyo resumen contaba un parte de dos
semanas antes. Esta edición mira si eso puede pasarle a otra capa, y en vez de
dejarlo anotado lo convierte en una comprobación que bloquea.

**Lo que se midió primero.** De las 40 capas, solo dos tienen un guion que
reescriba su fichero, y la otra —la red sísmica— compone su descripción cada
vez, así que no puede envejecer. Pero **dieciséis capas repiten en prosa una
cifra que también vive en un campo**, y basta con que alguien mueva el campo y
no el texto.

**La regla.** Toda fecha que la descripción de un registro nombre tiene que
estar sostenida por el propio registro: por uno de sus campos de fecha, por su
nota, o por la fecha de una de sus citas. Comprobado contra la capa tal como
estaba antes de corregirla: **habría bloqueado los 374**.

**Lo que la regla deja fuera, y por qué.** Las claves de un registro citan
hechos ajenos —un tramo de la serie histórica, un acto de otra fecha— con su
propia fuente; incluirlas señalaba 106 casos y los 106 eran correctos. Y la
**nota** queda fuera, y además sirve de respaldo: es donde el atlas cita y
razona. La nota de un reactor de Almaraz reproduce una orden oficial con dos
fechas que ya no rigen, y la de Ascó II explica que su fuente cuenta diez años
desde una fecha sin decir cuál es el último día. Las dos son el atlas siendo
escrupuloso, y una regla que las persiguiera castigaría lo que se le pide.

La comprobación reconoce la fecha escrita de las **dos maneras** —internacional
y en prosa—, porque si solo mirara una dejaría de servir en cuanto un texto
cambiara de forma. Que es exactamente lo que pasa en esta misma edición.

**Ni un campo ni un esquema cambian.**

---

## datos-v2026.08.125 — la ficha de un embalse deja de contar el parte de antes

**El defecto se veía al pinchar un embalse en el mapa.** El texto que abre su
ficha decía «Capacidad de 1.118 hm³ y 831 hm³ embalsados según el parte de
2026-08-11», y tres líneas más abajo, en la tabla de datos del mismo registro,
la cifra de agua embalsada decía **818**, del parte del 25 de agosto.

**Cuántos, medido:** de los 401 embalses publicados, **374 citaban un parte de
dos semanas antes**, y **248 de ellos daban una cifra distinta de la que
publicaba su propio campo**. Los 27 restantes estaban bien: son los embalses
que dejaron de informar hace años, y su texto nunca envejeció porque su fecha
nunca se movió.

**Por qué importa más de lo que parece.** Ese texto no vive solo dentro de la
ficha: es también la descripción que ve un buscador y la que aparece al
compartir el enlace. Durante dos semanas, la cifra que el atlas enseñaba fuera
no era la que el atlas publicaba dentro.

**La causa.** La actualización semanal movía la cifra de agua, su fecha, la
cita del Boletín y la fecha de verificación — y no el texto, que se había
escrito a mano al nacer la capa. Cada semana el dato avanzaba y la prosa se
quedaba.

**Lo corregido.** El texto pasa a **componerse de los campos del registro** en
la misma pasada que los escribe, así que ya no puede separarse de ellos. La
frase es la misma que había: se comprobó reproduciendo con ella los 27
registros que seguían cuadrando, y salieron idénticos carácter a carácter. Y la
actualización avisa ahora cuando un texto cambia sin que su parte se haya
movido, que es la señal que no existía y por la que el desfase vivió dos
semanas.

### Corregido
- `agua-embalsada` · descripción de 374 registros — el parte citado y la cifra
  de agua pasan a ser los del registro. Sin tocar ni un dato: los campos ya
  decían lo correcto.

### Contrato
**1.73.0 — el filtro «en explotación» dejaba pasar lo que no lo está.**

La sección del contrato que dice, capa por capa, cuándo un registro cuenta como
«en explotación» **no nombraba a dos capas que sí publican el campo del que eso
se deriva**. Un contrato callado no equivale a «no aplica»: el visor no inventa,
así que las dejaba pasar enteras.

- **`residuos-radiactivos`** — aquí sí se veía. Bajo «en explotación» se
  enseñaban los **cinco almacenes individuales ATI-100 todavía sin construir**
  y el **Almacén Temporal Centralizado de Villar de Cañas**, que está cancelado
  y figura como histórico. Ahora la capa deriva de su fase: **ocho de catorce**
  están en explotación —los seis almacenes que custodian combustible gastado
  hoy, El Cabril y la fábrica de Juzbado— y los otros seis aparecen como
  latentes, que es donde tenían que estar.
- **`gas-interconexiones`** — aquí no se veía, porque sus seis conexiones están
  en servicio. Se decide igualmente, y por el campo correcto: la conexión con
  Marruecos figura con el flujo invertido —dejó de importar en 2021 y hoy
  exporta—, y clasificarla por su categoría la habría dado por parada. La
  categoría dice en qué sentido va el gas; la fase, si va.

Ninguna de las dos filas inventa doctrina: aplican la que la sección ya tenía
escrita para un almacén, para una instalación autorizada y sin construir, y
para una conexión en servicio. **Ni un campo, ni un esquema, ni un registro
cambian**: cambia qué esconde el filtro.

---

## datos-v2026.08.124 — los montes bajan al suelo

**Ni un registro cambia: cambia dónde se pinta una capa.** El «Catálogo de
Montes de Utilidad Pública» publica las 52 provincias, y su geometría es
*exactamente* la misma que la de «Generación eléctrica por provincia» — se toma
de ella a propósito, para que dos mapas del mismo territorio encajen vértice a
vértice. Es, por definición, una capa que cubre España entera; y nació sin
decirlo.

**Qué provocaba.** El manifiesto tiene una marca, `fondo`, para la capa que
cubre el territorio completo: la dibuja debajo de todo y le hace ceder el clic
a cualquier registro que tenga encima. Sin esa marca, los montes se colocaban
entre las capas normales y, por su sitio en el manifiesto —la 38.ª de 40—, se
pintaban por encima de casi todas. Medido sobre el visor publicado, con los
montes y los parques eólicos encendidos: un clic **dentro** del parque eólico
El Segredal, en Asturias, no abría el parque. Abría «Asturias». Lo mismo le
pasaba a las otras siete capas de polígonos que quedan por debajo —derechos
mineros, plantas solares, recintos portuarios, subestaciones…—: seguían
dibujadas, pero dejaban de ser pinchables allí donde los montes las tapaban.

**Qué cambia.** La capa declara `fondo` y vuelve al suelo. Cede el clic, y su
relleno pasa del 22 % al 46 % de opacidad, que es la densidad de una capa que
ya no tapa nada. No afecta a la primera pantalla del visor: el arranque
enciende el primer grupo del primer dominio —los minerales—, y los montes no
están en él.

**Y una regla nueva de contrato, porque ahora hay dos.** Hasta hoy el atlas
tenía una sola capa de fondo y la pregunta no existía. Con dos encendidas a la
vez cubren el mismo territorio, sus rellenos se suman y lo que se ve no es la
tinta de ninguna de las dos: con las dos al 46 %, dos tercios de la de arriba y
un tercio de la de abajo. La edición 1.72.0 del contrato escribe qué manda —
**el orden del manifiesto: la última nombrada queda encima**—, de modo que
quien repinte una release desde los datos obtenga el mismo mapa que el atlas
publica. Ninguna capa se apaga sola: las enciende el lector. El visor lo dice
en la leyenda de la que queda debajo.

### Corregido
- `montes-catalogo` — el manifiesto le añade `fondo: true`. Ni la geometría ni
  ningún campo de ningún registro cambian.

### Huecos
- El aviso **no impide la mezcla**, la nombra. Dos coropletas encendidas a la
  vez siguen sumando tinta; si en uso resulta que confunde, el paso siguiente
  sería que encender una apagara la otra, y eso es apagarle una capa al lector
  por detrás.
- Sigue abierto lo declarado en la edición anterior: las cuatro cifras de
  energía embalsada del parte semanal continúan fechadas el 11 de agosto,
  porque su resumen en PDF se publica aparte y su punto de acceso público no ha
  respondido.

---

## datos-v2026.08.123 — dos partes del Boletín

**El agua embalsada avanza dos semanas: entran los partes del 18 y del 25 de
agosto.** Es el refresco de rutina de la única capa del atlas que cambia de
cifra cada semana, y esta vez llega al día siguiente del parte.

**Lo que dice el parte del 25.** Los 374 embalses que hoy informan por separado
suman **36.370 hm³ de una capacidad de 56.043**, el **64,9 %**. Dos semanas
antes, en el parte del 11, eran 38.103 hm³ y el **68,0 %**: la reserva baja
**1.733 hm³** en quince días, que es lo que suele hacer la segunda mitad de
agosto. La cifra no es la reserva nacional —el Boletín no cuenta todo lo
embalsado de España—, y por eso se publica siempre con su denominador.

**Veintisiete registros no traen cifra nueva, y conservan su fecha.** Son los
que dejaron de publicarse por separado —ocho de ellos porque el Boletín los
agregó en 2006, y el resto en fechas repartidas entre 2009 y 2017—: su serie
termina donde la fuente la dejó. A esos solo se les mueve la fecha de
verificación, porque lo comprobado hoy es que la fuente **sigue** sin decir
nada nuevo de ellos. Escribirles la fecha del parte del 25 sería atribuirle a
la fuente un dato que no publica.

**Las cifras de energía se quedan en su semana, y esto es un hueco declarado.**
Las cuatro magnitudes energéticas del conjunto —agua embalsada en GWh,
capacidad, producción de la semana y del año— no salen de esta base sino del
resumen semanal en PDF, que se lee a mano. Su punto de acceso público no ha
respondido en esta edición, así que **siguen siendo las del parte del 11 de
agosto y lo dicen con su fecha**: no se arrastran a un parte que no es el suyo.
El agua avanza sin ellas porque son magnitudes distintas de fuentes distintas,
y mezclarlas en una sola fecha sería el error que este atlas se prohíbe.

### Cambiado

- `agua-embalsada` · **374 registros** — `agua_actual_hm3` y `fecha_dato` pasan
  al parte del **2026-08-25**. Los 27 restantes conservan el suyo.
- `agua-embalsada` · **401 citas** — la fuente del Boletín actualiza su `fecha`
  a la del dato que sostiene y su `archivo` a la copia recién depositada. Los
  401 registros mueven `fecha_verificacion` a **2026-08-26**.
- **401 series temporales** — **748 puntos nuevos** (720.845 en total), los dos
  partes de estas dos semanas para los embalses que informan.
- `fuentes/` — el histórico de embalses del Boletín (1988-2026) se **reemplaza**
  por la descarga del 2026-08-26. Es una base que se reescribe entera cada
  semana: no se acumula una copia por parte, se guarda la vigente.

### Huecos

- **Las cuatro cifras de energía siguen fechadas el 2026-08-11**, dos partes por
  detrás del agua, por lo dicho arriba. Quedan a la vista con su fecha en vez de
  envejecer en silencio.
- Los huecos declarados en ediciones anteriores siguen igual: esta edición no
  añade, no retira y no reinterpreta ningún registro — solo trae la cifra que la
  fuente publicó esta semana.

---

## datos-v2026.08.122 — la paleta se mide

**Ni un registro cambia: cambian 32 de las 111 tintas con las que el mapa
distingue las categorías de cada capa.** El color es dato publicado —el
vocabulario lo dice de sí mismo: quien descargue una release puede repintar el
atlas sin usar su visor—, y por eso una corrección de color viaja como
cualquier otra corrección: con su medida delante.

**Lo que la medida encontró.** Nueve tintas quedaban por debajo de **2:1** de
contraste sobre la mesa oscura del mapa: no es que se leyeran mal, es que no se
veían. Diez capas tenían una pareja de categorías que una persona con
deuteranopía ve como el mismo color. Dos capas tenían dos categorías a **ΔE
menor de 10**, indistinguibles para cualquiera.

**Cómo se eligió cada sustituta.** Por búsqueda con restricciones, no a ojo y
no por una regla mecánica: para cada tinta señalada, **el color más parecido al
original** que a la vez alcanza 3:1 de contraste sobre la mesa oscura, mantiene
ΔE ≥ 12 con las demás categorías de su capa —también tras simular deuteranopía
y protanopía— y ΔE ≥ 10 con las capas de su mismo dominio, que son las que se
encienden juntas. Las tres estrategias mecánicas que se habían ensayado antes
—llevar toda la paleta a una banda de luminancia, o elevar solo las oscuras—
corregían el contraste **destruyendo la separación**, y por eso se
descartaron. Las tintas se mueven poco: la mediana del desplazamiento es de ΔE
15.

**Dos cosas que NO se han tocado, y decirlo es parte de la corrección.** Que
ocho parejas de capas distintas compartan el mismo hex es **deliberado** desde
la 1.48.0, y sigue siéndolo: lo que hay que cuidar es el escalón dentro de una
capa, no la unicidad global. Y en una **rampa** —una escala ordenada, como las
clases de vía por capacidad o los estados de un centro de datos— los escalones
contiguos se parecen **por definición**: lo que un mapa tiene que decir de un
vistazo es la distinción de fondo, y esa sigue abierta de par en par (ΔE 36
entre gran capacidad y convencional).

**Y un límite que conviene saber.** Las **siete** clases de la Red de
Carreteras del Estado no caben en color: separarlas por matiz hunde la
distancia bajo deuteranopía a ΔE 4, y estirarlas por claridad hasta que todas
alcancen 3:1 deja la carretera convencional siendo lo más brillante de un mapa
oscuro, al revés de lo que significa. La rampa se ha vuelto a tender dentro de
la banda legible, y **la jerarquía la lleva ahora también el grosor del
trazo**, como en cualquier mapa de carreteras. Eso último es cosa del visor y
no del dato: el vocabulario sigue diciendo solo de qué clase es cada tramo.

### Cambiado

- 32 categorías de 16 capas · `color` — nuevo valor hexadecimal. Las nueve que
  no se veían: `red-carreteras:autopista_de_peaje`,
  `centros-datos:en_servicio`, `espacios-maritimos:limite_declarado`,
  `refinerias:refino`, `minerales-derechos:vigente`, `puertos:zona_terrestre`,
  `seguimiento-espacial:espacio_profundo`, `csur:polo_nacional` y
  `ferrocarril:linea`. El resto sale de las parejas confundibles bajo
  daltonismo y de las dos capas con categorías indistinguibles.
- `puertos` · las tres zonas — se re-tienden **como conjunto**: subir la más
  oscura al mínimo la metía encima de su vecina, así que la escala entera se
  desplaza. Quedan a ΔE 18 o más entre sí.
- `red-carreteras` y `centros-datos` · las dos rampas — re-tendidas dentro de
  la banda que sirve tanto a la mesa oscura como a la clara, conservando su
  orden y su camino de matiz.

### Huecos

- **La mesa clara sigue peor servida que la oscura.** Con la paleta nueva, 29
  tintas quedan por debajo de 3:1 sobre el fondo oscuro y 21 sobre el claro. La
  corrección ha atendido primero lo que era invisible; lo que se lee con
  esfuerzo sigue esperando, y se dice en voz alta en vez de darlo por bueno.
- Los huecos de datos declarados en la `.121` siguen exactamente igual: esta
  edición no añade, no retira y no corrige ni un solo registro.

---

## datos-v2026.08.121 — el archivo cierra su raíz

**Ni un dato cambia: cambian las señas de un solo documento, el último que
quedaba fuera de estante.** La `.120` ordenó 369 ficheros por organismo y
año y dejó uno en la raíz a propósito: el acta de captura de la geometría de
las seis interconexiones gasistas internacionales, escrita por el atlas a
partir de DOS servicios (el IGN pone cuatro de los seis puntos, el IECA los
otros dos). Se quedó fuera porque parecía pedir una regla nueva para los
documentos con varios emisores. No la pedía: el archivo ya guardaba tres
documentos de dos emisores, cada uno bajo el que lo sirvió y con el otro
nombrado — y veintiuna actas de captura ya vivían bajo el organismo que
consultaron.

### Cambiado

- `gas-interconexiones` · 6 citas — `archivo` pasa de
  `fuentes/2026-08-12_geometria-interconexiones-gasistas.json` a
  `fuentes/ign/2026/2026-08-12_geometria-interconexiones-gasistas.json`. El
  fichero es el mismo byte a byte; la carpeta es archivo, no atribución: la
  legal sigue en `atribucion` y nombra a los dos emisores.
- `fuentes/README.md` — la raíz de `fuentes/` no admite documentos: solo
  `README.md` y `PROCEDENCIA.md`. La regla existía en la práctica desde la
  `.120`; ahora está escrita y la comprueba la sincronización del archivo
  público, que se planta ante cualquier fichero suelto.

### Huecos

- Ninguno nuevo y ninguno cerrado: los 334 huecos declarados en 277 registros
  de la `.120` siguen tal cual. El propio acta explica el suyo: no existe
  ningún conjunto de ámbito estatal, bajo licencia abierta, que sitúe los
  puntos de conexión gasista de España — por eso hubo que componerlo de dos
  servicios.

---

## datos-v2026.08.120 — el archivo gana su estantería

**Ni un dato cambia: cambian las señas de los documentos que los sostienen.**
Los 369 ficheros del archivo dejan el directorio plano y pasan a
`fuentes/<organismo>/<año del documento>/` — 62 organismos, 125 carpetas, los
nombres intactos. El acto de 1978 vive en `boe/1978/` aunque se archivara en
2026: el año de carpeta es el del documento (el del campo `fecha` de su cita),
y la fecha de captura sigue siendo la primera palabra del nombre.

### Cambiado

- ~20.000 citas y menciones reescritas de una vez — capas, conjuntos, las 415
  series, guiones internos y casos de prueba. La validación automática hizo de
  red: los 175 avisos de línea base, exactos.
- `fuentes/README.md` documenta la estantería: la regla del año, la de la
  serie recurrente (la tercera captura del mismo organismo-descripción gana
  carpeta propia) y por qué NO se organiza por capa ni dominio — quince
  fuentes sostienen varias capas y treinta y dos no pertenecen a ninguna.

### Sabido

- **Las entradas anteriores de este changelog no se reescriben**: donde una
  diga `fuentes/X`, léase `fuentes/<organismo>/<año>/X`. La historia cuenta lo
  que se hizo con las señas de entonces.

## datos-v2026.08.119 — siete dominios, y cada sección con su nombre

**Ni un registro cambia en esta edición: cambia el mueble, no lo que guarda.**
El panel pasa de siete árboles heredados a **siete dominios pensados** —
Recursos y territorio · Energía · Transporte y logística · Conectividad ·
Ciencia y capacidades avanzadas · Soberanía y seguridad · Economía y
proyección — y la pareja genérica «Lo que tiene» / «Lo que se trabaja» se
retira: la sustituyen **24 subgrupos temáticos** que rotulan las secciones
(«Sistema eléctrico», «Renovables», «Fronteras»…).

### Cambiado

- Siete capas cambian de dominio: las tres de minerales y las dos de agua
  fundan **Recursos y territorio** junto a los montes; `hidrogeno-red` se
  reúne con su hermana de producción en Energía (estaban partidas entre dos
  árboles desde su alta); `csur` y `seguimiento-espacial` entran en **Ciencia
  y capacidades avanzadas**; `perte` e `idioma` comparten **Economía y
  proyección**. Las 40 ganan subgrupo con nombre propio.
- «El tablero» deja de ser rótulo de navegación: el dominio se llama
  **Soberanía y seguridad**, que dice qué hay dentro. El término sobrevive en
  la doctrina y las historias, que es donde nació.
- Contrato **1.71.0**: §3 estrena la **regla de crecimiento** — ningún dominio
  nace con una sola capa; el subgrupo pre-dibuja la escisión y se promueve a
  dominio al juntar 3–4 capas.

### Sabido y asumido

- El primer dominio del arranque en frío pesa ahora 7,57 MB crudos (los
  montes, 5,87) contra 0,55 del anterior — comprimido, en torno a un quinto.
  Si duele, la palanca es la política de arranque del visor, no la taxonomía.

## datos-v2026.08.118 — el vigía caza dos, y ninguna entra por donde parecía

La primera edición cuyos dos registros los encuentra **una máquina y no una
búsqueda**: el vigía de los boletines autonómicos puso en rojo su barrido del 2026-08-23 con
dos hallazgos, uno del BOC y otro del BOA, y los dos acabaron en la capa. Pero
ninguno entró por el acto que el vigía señaló, y ese es el aprendizaje de la
tanda: **el vigía indica el día, no acredita el hecho.** El contrato sube a
**1.70.0** por una categoría nueva.

### Añadido

- **`desaladoras:edam-playa-de-mogan`** — la EDAM del **Ayuntamiento de Mogán**
  (Gran Canaria), quinta canaria de la capa y **primera que entra por
  vigilancia**. Su acto —la información pública de la prórroga y modificación
  del vertido de salmuera, Expte. VM-211-LP— la nombra y la sitúa **solo por
  término municipal**. Se persiguió la coordenada hasta agotar las vías: el
  **expediente completo se descargó y se leyó** (7,7 MB, y su visor JSF exige
  navegador) y no hay en él una sola coordenada geográfica — las 35 menciones de
  «coordenadas» son del modelo del chorro de salmuera, cartesiano y con origen
  en la boquilla; y el **Nomenclátor no la nombra**, comprobado por RECUADRO y
  no solo por etiqueta, que es la diferencia entre un hueco declarado y un cero
  sin comprobar. Va en `municipio`, con la coordenada y la capacidad declaradas
  como huecos.
- **`centros-datos:rhodes-calatorao`** — el **campus data center «Rhodes»** de
  Calatorao (Zaragoza), decimosexto de la capa: 224 ha de ámbito (sector
  S.U.I.-4), primera etapa de unas 80 ha, hasta 7.500 M€ de inversión
  potencial, promovido por Calanza Inmuebles, SL —**controlada por fondos de
  Blackstone**, con **QTS** como promotora delegada y futura gestora, y el acto
  lo dice—. En `municipio`: los actos sitúan por término municipal y por sector
  urbanístico, que no es un topónimo.

### El contrato · 1.70.0

- **Nace la categoría `municipal` de `desaladoras`.** La EDAM de Mogán la
  explota un **ayuntamiento**, y las tres categorías existentes eran «de interés
  general del Estado», «de una administración autonómica o insular» y «de un
  titular privado». La salida fácil era ensanchar `autonomica`; se descartó
  porque esa etiqueta se llama por lo que cubre, y estirarla hasta un
  ayuntamiento la habría convertido en mentira. **No reclasifica ninguno de los
  22 registros anteriores.**

### La lección: el vigía señala el día, no acredita el hecho

- El acto del BOA que disparó el aviso —la redelimitación del PIGA— **nunca dice
  que «Rhodes» sea un centro de datos**: habla de los centros de datos en
  abstracto para justificar la urgencia de la expropiación, y luego de
  «proyectos de estas características». Con eso solo, el registro no entraba.
  Lo que lo sostiene es el acto que él mismo cita, **la Orden PEJ/1229/2024, que
  lo bautiza en su propio título**: «el proyecto “Rhodes” de construcción de un
  campus data center». Mismo patrón que PENCAN-X en la `.105`.
- Y el mismo día, el Nomenclátor volvió a hacer su truco: **`Calatorao` por
  etiqueta devolvió CERO** para un municipio que existe, y por recuadro aparece
  con sus tres entradas. El aviso que la casa lleva escrito desde la `.25` se
  cobró su pieza.

### Huecos

- La coordenada y la capacidad de la EDAM de Mogán, y la resolución de su
  expediente.
- La potencia TI del campus Rhodes, y su PIGA aprobado.
- Los de siempre en las dos capas.

---

## datos-v2026.08.117 — la capa dice por fin qué NO es

Una lectura externa de `cables-submarinos` llegó a una conclusión correcta e
incómoda: **la capa no mapea los cables submarinos de España**, mapea los
aterrizajes que un acto administrativo publicado nombra y sitúa. Faltan cables
que existen, y las fichas lo explican **una por una** — pero hasta hoy eso no se
decía en ningún sitio donde se leyera de una vez. Esta edición lo arregla por los
dos lados: la **doctrina** entra en la nota de la capa, y el **relato** en una
historia nueva.

### Añadido
- `manifest.json` · `cables-submarinos` — **la regla de perímetro, declarada**.
  La nota de la capa dice ahora, de frente, qué es y qué no es, con los **cuatro
  motivos** por los que falta gente: que un cable tiene dos extremos y cada uno se
  tramita aparte (PENCAN-X está por Rota y no por Las Palmas; Canalink Base 6 sí
  está por los dos); que los cables viejos no vuelven a un boletín salvo caducidad,
  remodelación o legalización (que es por lo que entró PENBAL-4); que **el Estado
  tiene la lista y no la publica**; y que lo que cruza aguas españolas sin amarrar
  aquí no entra (el Europe India Gateway, que toca tierra en Gibraltar).
- `cables-submarinos:virgen-del-mar-santander` y `:sagunto` — **la Ley 11/2022,
  archivada y citada**. Las dos fichas venían afirmando desde su alta que el
  Ministerio tiene la lista de cables y no la publica, **y ninguna fuente lo
  sostenía**: era una afirmación sin papel, justo lo que este atlas le exige a
  cualquier otra. Ahora entra el texto consolidado con sus dos anclajes exactos —
  el **artículo 6.9**, que obliga a comunicar todo cable que engancha en territorio
  español, y la **disposición adicional vigésima tercera**, que da dos meses de
  plazo y exige en su apartado f) «una exposición sucinta del trazado del cable
  submarino […] y, en particular, del lugar en el que se produce el enganche».
  Es decir: **el Ministerio tiene desde 2022 las dos cosas que a esas fichas les
  faltan**.
- Y con la ley, un negativo verificado: **el reglamento que el propio artículo
  6.10 mandaba aprobar «en un plazo máximo de tres meses» no existe**. Barridos
  los **1.515 sumarios** del BOE desde la entrada en vigor de la ley hasta hoy, no
  aparece.
- **Historia nueva**: «Cuatro cables sin nombre, y el Estado sabe cómo se llaman»
  (`/historias/cables-el-mapa-de-los-actos/`). Como todas, **no escribe ni una
  cifra**: las saca de la release y extrae sus citas literales de las fichas, así
  que el día que una se reescriba el build se planta.

### Corregido
- **Contrato 1.69.0** — §4.2 cierra la puerta que le faltaba. Argumentaba con
  cuidado por qué un conjunto **no es una capa** y por qué **no es el manifiesto**,
  y no decía nada de por qué **no es una historia**, por un motivo que se puede
  fechar: §4.2 se escribió el 2026-08-15 y las Historias nacieron el 2026-08-18.
  La puerta abierta dejó pasar a alguien. Queda escrito que las dos condiciones de
  un conjunto son **acumulativas**: no basta con que el hecho no tenga lugar,
  **tiene que ser una cifra**.

### Huecos
- **Los cuatro aterrizajes sin nombre de sistema siguen sin él**, y ahora se sabe
  a quién le falta: al Ministerio no, que lo tiene por ley desde 2022.
- **El amarre canario de PENCAN-X sigue sin acto.** Su concesión es del Gobierno
  canario y no consta en el BOC. Ya no hay que buscarlo: el vigía lo espera.
- **El ramal de Canalink Base 4 al sur de Fuerteventura no entra.** El Real
  Decreto 973/2025 lo subvenciona y lo nombra, pero una subvención **no sitúa un
  amarre**: dice a qué isla va, no a qué playa. Entrará con su acto de ocupación.
- **El recorrido de los cables sigue sin dibujarse.** No hay fuente con licencia
  compatible, y trazarlo a ojo sería inventarlo.

---

## datos-v2026.08.116 — Canarias deja de estar a oscuras

El archipiélago con más desalación de España no tenía **ni un registro**, y el
aterrizaje español de 2Africa llevaba dos pasadas sin aparecer. Las dos cosas se
resuelven de una vez y por la misma vía: **leer el boletín entero en vez de
buscar en él**.

El Boletín Oficial de Canarias va por NÚMERO de boletín y no por fecha —la misma
trampa que dejó fuera al BOJA—, y por eso no estaba vigilado. Se salva barato:
su **índice anual** lista los ~200 números del año con su fecha en una sola
lectura. Con eso, un barrido de 2003 a 2026 devolvió **226 actos de desalación y
el acto que nadie encontraba**, y el BOC entró en el vigía autonómico, donde
seguirá sin costar nada.

### Añadido
- `cables-submarinos:2africa-telde` — **el primer aterrizaje español de 2Africa
  que un acto administrativo nombra y sitúa**: segmento **W3-EGO**, Playa de
  Salinetas, término municipal de Telde (Gran Canaria), instado por Vodafone
  Enterprise Spain. Información pública del artículo 74 de la Ley de Costas
  (BOC n.º 165, de 22-8-2023). El atlas llevaba dos pasadas buscándolo por
  Barcelona, donde el DOGC no se deja leer.
- `desaladoras` — **las cuatro primeras de Canarias**: las tres del Cabildo
  Insular de El Hierro (**Los Cangrejos** en Valverde, **El Golfo** en La
  Frontera y **La Restinga** en El Pinar) y la **Planta Desaladora Maspalomas I**
  en San Bartolomé de Tirajana. La capa pasa de 18 a 22.
- `vocabularios.json` · `desaladoras` — categoría **`privada`**, la tercera de
  las que la reapertura del perímetro abrió. La vara no es de quién es la planta: es si un acto la
  nombra y la sitúa.

### Corregido
- **Un veredicto de la release `.107` se afina.** Aquella dio por sentado que
  «los actos sitúan por linderos, no por coordenadas». Era verdad de los actos
  del **Estado**. Los actos **insulares canarios** escriben la coordenada UTM en
  el cuerpo del anuncio —«coordenadas X: 215.215 Y: 3.080.415 Z: 31»—, y por eso
  las cuatro fichas nuevas van en precisión **`exacta`** y no en `municipio`. El
  huso no lo dice el acto: se dedujo probando los de España y exigiendo que **uno
  solo** dejara el punto dentro del municipio que el propio acto nombra. Los
  cuatro caen donde debían y ni el 27 ni el 29 caen siquiera en Canarias.

### Huecos
- **La capacidad de las cuatro plantas canarias NO se escribe.** Los actos dan la
  cifra de la **ampliación** —«ampliación de producción de 600 m³/día», «una
  línea de 6.000 m³/día»—, que es lo que se añade y no lo que la planta produce.
  Va en `claves`, en su sitio, y el campo queda con su hueco declarado.
- **Los cientos de peticiones canarias que quedan fuera, y por qué.** El barrido
  sacó 226 actos de desalación en veintitrés años, y **casi todos son PETICIONES
  de autorización de plantas privadas de autoabastecimiento** — hoteles, fincas,
  un parque acuático, una refinería. Sitúan por municipio y no acreditan que la
  instalación llegara a existir. Las cuatro que entran pasan dos varas: acto que
  sitúa con coordenada, e instalación cuya existencia el propio acto da por
  hecha (no se regulariza ni se amplía lo que no está).
- **El otorgamiento de 2Africa y la resolución de los cuatro expedientes
  canarios.** Lo archivado son informaciones públicas de solicitudes. Si se
  resolvieron, sus actos no constan localizados. Ya no hay que buscarlos: el
  vigía del BOC los espera.
- **Sigue sin haber ni un registro de Tenerife, Gran Canaria capital, Lanzarote
  ni Fuerteventura**, que son las islas de más desalación. Vía anotada, y salió
  del propio barrido: el Consejo Insular de Aguas de Lanzarote mantiene un
  **«Censo de Plantas Desaladoras»** cuyas inscripciones publica en el BOC. Un
  censo es exactamente la clase de fuente que esta capa quiere.

---

## datos-v2026.08.115 — la BTN deja de estar muda donde una comunidad la nombra

De las 3.165 plantas fotovoltaicas que la Base Topográfica Nacional cartografía,
**1.959 no llevan nombre**. No es un defecto del IGN: cartografiar un recinto no
es identificarlo, y el atlas las dejaba fuera porque `nombre` es obligatorio.
Esta edición las empieza a rescatar — no inventando el nombre,
sino cruzando con quien sí lo tiene: **el registro de la administración que
autorizó cada planta**.

**El cruce va por SOLAPE GEOMÉTRICO, nunca por nombre**, y esa no es una
preferencia de método: es el hallazgo. Los nombres NO coinciden. Donde la BTN
dice «Huerta Solar Bárdenas Reales», IDENA dice «VILLAFRANCA - CORRALIZA DE
BARRENO». Un emparejador por parecido habría fallado en silencio, que es la peor
manera de fallar.

**La geometría sigue siendo siempre la del IGN** y no se toca un vértice. El
registro autonómico aporta identidad y atributos; la forma, una sola fuente para
toda España.

### Añadido
- `plantas-solares` — **80 recintos que la BTN publica mudos**, identificados por
  solape: **41 por IDENA** (Gobierno de Navarra, CC BY 4.0) y **39 por el ICV**
  (Generalitat Valenciana, CC BY 4.0, declarada en el `AccessConstraints` de su
  propio servicio). La capa pasa de 1.250 a 1.330 registros.
- `plantas-solares` — **tres campos que estaban prohibidos por su nombre desde
  que la capa nació**: `titular`, `potencia_mw` y `anio_servicio` (contrato
  1.68.0). Las prohibiciones no se borran: **se sustituyen por una vara**, la
  misma doctrina que levantó `potencia_it_mw` en la `.112`. Los llena el registro
  autonómico y jamás la fuente cartográfica.
- `plantas-solares` — **33 registros ya publicados ganan esos atributos** sin que
  cambie su nombre, su slug ni su geometría: la BTN ya los nombraba y cambiarles
  el nombre rompería las citas de las ediciones anteriores. Su clave nueva dice
  cómo se llaman en el registro autonómico.

### Corregido
- `plantas-solares` · **20 registros bajan de `confirmado` a `parcial`**, y no es
  una degradación: **bajan porque dicen más**. Al entrar los campos nuevos,
  declaran también lo que NO tienen —el titular que el registro deja en «-», la
  potencia que el atlas se niega a repartir— y R4 hace exactamente su trabajo.
  En total la capa queda con 1.247 `confirmado` y 83 `parcial`.
- `manifest.json` · alcance de `plantas-solares` — la nota decía «solo 1.206
  llevan nombre» y esa cifra la dejó vieja este mismo cruce. Ahora dice las dos:
  las que nombra la BTN y las que nombra una comunidad.

### Huecos
- **La potencia de 18 plantas repartidas en varios recintos NO se escribe.** Es
  la trampa central de esta edición y merece decirse entera: una planta del
  registro puede caer sobre varios recintos de la BTN —«FUSTIÑANA - CORRALIZA
  VECINAL» cae sobre seis—, y la cifra que el registro publica es de la **planta
  entera**. Escribirla en cada hermano multiplicaría la potencia solar del país.
  Va en `claves`, dicha entera y con cuántos recintos la comparten, y cada ficha
  declara su hueco.
- **Tres recintos contienen DOS plantas registradas cada uno** (CÁSEDA 1 y 2;
  Huerto Solar El Realengo I y III; y dos vallados de la PFV Sueras/Suera).
  Tampoco llevan potencia: el recinto no es ninguna de las dos por separado.
- **La cobertura es DESIGUAL POR COMUNIDAD, y es un hueco de la capa entera.**
  Va en el manifiesto y no en las 80 fichas, y el motivo importa: ponerlo en cada
  registro las habría bajado a `parcial` por algo que no dice nada de ellas
  —habla de los recintos que NO están—. Hoy solo dos comunidades publican su
  registro con geometría y con licencia usable. **Castilla y León tiene la capa
  —1.592 recintos de instalación renovable con titular, potencia y fecha— y va
  bajo licencia IGCYL-NC, no comercial**, que `datos/LICENCIA-DATOS.md` no
  admite; su conjunto abierto en CC BY no trae geometría. **Cataluña** publica
  541 fotovoltaicas sin geometría. Un recinto de Soria no es un dato peor que
  uno de Tudela: es un dato que solo tiene medio país.
- **`potencia_pico_mwp` sigue prohibida**, y no cae con las otras dos: el
  registro valenciano tiene el campo y **lo publica vacío**. Un campo que la
  fuente no rellena no es un dato que el atlas tenga.
- **`parques-eolicos` no cambia.** La BTN solo deja 7 recintos eólicos mudos —ya
  publica el 100 % de la superficie— y no hay todavía un registro eólico con
  geometría y con licencia verificada: el WFS de IDEAragon, que tiene 349
  polígonos y 1.774 aerogeneradores con detalle, **no declara licencia ninguna**
  en su servicio, y sin eso no se toca.

---

## datos-v2026.08.114 — el frente que pedía navegador resulta ser una API

El barrido de cables llevaba dos pasadas atascado en «esto hay que mirarlo con
un navegador»: los otorgamientos de los noventa **no salen por búsqueda web**.
Resulta que no hacía falta ningún navegador — **la API de sumarios del BOE que
usa el vigía semanal llega hasta 1997**, y lo que era un frente manual es un
barrido de veinte minutos.

**El contrato no se mueve: sigue en 1.67.0.**

### El método, y su control

Se barrieron **7.015 sumarios del BOE entre 1994 y 2016** casando el título
contra «cable submarino» y sus variantes. Y antes de creerle a un resultado
negativo, **se validó el método sobre un año con respuesta conocida**: en 2017
devuelve el otorgamiento de Marea, que ya estaba en la capa. Un cero sin control
es una garantía falsa.

### Añadido

- **`cables-submarinos:canalink-africa-granadilla`** — la Autoridad Portuaria de
  Santa Cruz de Tenerife otorgó en sesión de 13/11/2014 concesión a **Canalink
  África, S.L.U.** sobre la Zona II de aguas del **Puerto de Granadilla** «al
  objeto de instalar un cable submarino de telecomunicaciones», veinticinco años
  y 575,16 € de tasa anual (BOE-B-2015-789). **Segundo aterrizaje documentado en
  el mismo puerto**: el de 2013 lo tiene Canarias Submarine Link, S.L. Dos
  actos, dos concesionarias, dos fichas al mismo punto — la doctrina que la capa
  ya tenía escrita («un cable con dos amarres documentados da dos registros»), y
  el visor los marca apilados.

### Dos veredictos que cierran frentes abiertos

- **Columbus-III y Atlantis-2 en Conil: no están.** Once años de sumarios
  (1994-2004) sin un solo acto con «cable submarino» en el título. Con el método
  validado, el negativo vale: si esas concesiones se publicaron, no fue con ese
  nombre en el título del BOE. **El frente se cierra** y deja de figurar como
  pendiente de navegador.
- **El EIG no es de esta capa.** La DIA de 2010 sobre el «Cable submarino fibra
  óptica Europe India Gateway, segmento 2 (aguas españolas)» describe un cable
  de 15.000 km que **cruza aguas españolas sin amarrar en España**: sus puntos
  de conexión son Reino Unido, Portugal, **Gibraltar**, Mónaco, Francia, Libia,
  Egipto… y el aterrizaje del tramo es el de Gibraltar. Sale de la lista de
  candidatos con motivo, no por olvido.

### Huecos

- **Melilla–Península** sigue sin acto de Costas, pero el barrido dejó su rastro
  administrativo: la Ciudad Autónoma licitó el tendido en 2010 y lo adjudicó en
  2011, y Red.es formalizó en 2015 la fibra terrestre para conectarlo. Son
  contratos: nombran el cable y sus extremos, **no sitúan el amarre**. La
  concesión, si existe, está en el BOME o en el BOJA.
- Los de siempre: Santander y Sagunto sin sistema ni destino, y la lista que la
  Ley 11/2022 obliga a comunicar al Ministerio, sin publicar.

---

## datos-v2026.08.113 — la capa deja de llamarse por una figura jurídica: «Desaladoras»

Una capa llamada **«Desaladoras de interés general del Estado»** tenía el
perímetro en el nombre, y ese perímetro dejaba fuera a todas las demás **por una
figura jurídica que no les corresponde, no por falta de fuente**. La decisión
de curaduría: «es información que se deja fuera».

**El contrato no se mueve: sigue en 1.67.0.**

### Cambiado

- **La capa pasa a llamarse «Desaladoras»**, y la condición de **interés
  general del Estado** —que es una figura que un acto declara, no un adjetivo—
  pasa a ser una **categoría**, que es lo que la distingue al pintarla. Las diez
  que ya estaban se recategorizan a `interes_general_estado` sin tocar un solo
  dato suyo.
- **La condición del cambio, y va escrita en el manifiesto**: no hay criterio
  de tamaño ni umbral de capacidad. Eso lo tendría que fijar el atlas, y no es
  suyo. Entra la desaladora que **una fuente oficial nombre y sitúe**.

### Añadido

- **Las ocho de ABAQUA en les Illes Balears** — Badia de Palma, Andratx,
  Eivissa, Sant Antoni, Ciutadella, Alcúdia, Santa Eulària y Formentera—, las
  primeras que el perímetro viejo excluía. Vienen del conjunto de datos abiertos
  de la **Agència Balear de l'Aigua i de la Qualitat Ambiental**, la empresa
  pública del agua del Govern balear, **CC BY** declarada y verificada antes de
  incorporar nada. Entran en **precisión exacta**: la fuente publica la posición
  de cada una, y los ocho puntos se comprobaron **punto-en-municipio contra el
  IGN**, uno a uno.
- La capa pasa de **10 a 18** registros y su ámbito, de una figura estatal, a la
  geografía real de la desalación española — que sigue incompleta, y lo dice.

### Qué sostiene las ocho, y qué no

El conjunto del **operador público** — el mismo trato que ya recibían las fichas
de la Mancomunidad de los Canales del Taibilla en las cuatro de Murcia y
Alicante. Da nombre y punto; **no da capacidad ni acto**, así que los ocho
registros van `parcial`, sin cifra de producción, y su `fase` no la certifica
ningún acto localizado. La cifra que circula en prensa y en memorias
corporativas no entra.

### Huecos

- **Canarias**, que es el archipiélago con más desalación de España, sigue sin
  un solo registro: sus censos viven en los consejos insulares de aguas y en el
  plan hidrológico de cada isla, y hay que ir a buscarlos.
- **Cataluña**: sus dos grandes —ITAM Tordera (Blanes) e ITAM Llobregat— están
  identificadas por el conjunto de volúmenes diarios de la Generalitat, que es
  una serie y no un censo: da el nombre, no la posición.
- La **capacidad** de las ocho baleares, y el **acto** que declara cada una.
- Los de las diez estatales siguen igual: la coordenada de las seis de Acuamed
  y la capacidad en servicio de Águilas.

---

## datos-v2026.08.112 — el vigía nuevo trae su primera pieza, y con ella cae una prohibición

Lo encontró **el vigía de los boletines autonómicos en su segunda corrida**, horas después de
nacer: un acto publicado en el BOA hace una semana que una jornada entera de
búsqueda a mano se había dejado. Vigilar cuesta una vez; buscar cuesta cada vez.

**Contrato 1.66.0 → 1.67.0** (aditiva: `centros-datos` recupera un campo que
estaba prohibido, y el motivo se reescribe en vez de borrarse).

### Añadido

- **`centros-datos:merlin-zaragoza-wind`** — el «Campus de Centros de Datos
  Zaragoza-WIND» de **Merlin Properties Socimi, SA** en **Botorrita**
  (Zaragoza), declarado inversión de interés autonómico con interés general de
  Aragón por Acuerdo de 22/7/2026 (**Orden ECE/1195/2026**, BOA n.º 157 de
  14/8/2026, archivada). El acuerdo dimensiona: un edificio de **156.301 m²
  construidos** y 41.868 de ocupación en planta, ámbito de **28,8 ha** en el
  polígono industrial San Antonio, y **144 MW IT**.
- Y entra en **`paraje`**, no en municipio: el acuerdo sitúa el ámbito «en el
  polígono industrial San Antonio […] en el citado término municipal de
  Botorrita», y el Nomenclátor tiene un paraje **«San Antonio»** que se
  comprobó punto-en-municipio contra el IGN y cae en Botorrita — el patrón que
  subió el OAJ al Pico del Buitre en la `.101`.

### La prohibición que cae, y la vara que la sustituye

`potencia_it_mw` estaba **prohibido por su nombre** desde que la capa nació, con
este motivo: «ningún acto administrativo la da: la publican la patronal y los
operadores, que por R3 no sostienen un `confirmado`». **Dejó de ser cierto**
cuando el Acuerdo escribió «contará con una potencia total de 144 MW IT» en su
propia descripción del proyecto que declara.

El campo vuelve, pero la prohibición no se borra: **se sustituye por una vara**
escrita en el esquema, que hace su mismo trabajo sin cegar el dato. Solo lo
llena un **acto que AFIRME** la cifra. No lo llenan una nota corporativa, ni la
memoria del promotor recitada por el acto («según la información facilitada por
la promotora»), ni un proyecto en información pública: todo eso sigue yendo a
`claves`, como en ACS, Alcalá y Navalmoral. **De quince registros lo llena
uno** — y eso retrata la capa mejor que un campo inexistente: un registro sin él
no está incompleto, es un centro cuya potencia TI no ha publicado nadie con
autoridad.

### Lo que el acto cuenta y no entra

El acuerdo sitúa el proyecto en la red del grupo —«tres centros de datos que
suman 64 MW IT (Barcelona-PLZF, Bilbao-Arasur y Madrid-Getafe)» en operación y
una segunda fase de 254 MW—. Es contexto, no registros: Bilbao-Arasur sí está
(entró en la `.110` con su propia AAI), y los demás esperan a que un acto los
nombre, sitúe y dimensione. La previsión de empleo (5.040 puestos) sigue fuera
por la prohibición de `empleos`, que nadie ha falsificado.

### Huecos

- El **PIGA** — el propio acuerdo lo llama «futuro PIGA» y nombra a Merlin
  promotora definitiva. Cuando se apruebe, la categoría sube: lo vigila
  el vigía autonómico, que es quien encontró esto.
- El consumo eléctrico anual y el de agua: el acuerdo no los publica.

---

## datos-v2026.08.111 — la Región Microsoft de Aragón entra con sus tres campus

La capa dobla su Aragón: a los cinco de AWS y al de ACS se suman **los tres
campus del PIGA «Implantación de la Región Microsoft en Aragón»** — La Muela,
Villamayor de Gállego y Zaragoza—, cada uno con su declaración de interés
autonómico y el plan conjunto aprobado inicialmente. La capa pasa de 11 a
**14**.

**El contrato no se mueve: sigue en 1.66.0.**

### Añadido

- **`centros-datos:microsoft-la-muela`** — declarado el 20/12/2023 (Orden
  EEI/1979/2023; BOA n.º 6, de 9/1/2024): la Fase 5 del polígono Centrovía,
  sector de ~146,12 ha con la actividad concentrada en **93,69 ha**.
- **`centros-datos:microsoft-villamayor-de-gallego`** — declarado el 3/7/2024
  (Orden PEJ/564/2024; BOA n.º 141) y con el ámbito **modificado en 2025**
  (Orden PEJ/546/2025; BOA n.º 100, **archivada** con sus tablas catastrales):
  sector nuevo de 74,16 ha y parcela neta de **54,89 ha**, con la conexión
  eléctrica soterrada hacia La Puebla de Alfindén en dos líneas de 4.370 y
  4.442 m.
- **`centros-datos:microsoft-zaragoza`** — declarado el 28/2/2025 (Orden
  PEJ/285/2025; BOA n.º 57): sector nuevo de 55,27 ha en el área 88/3 y
  parcela neta de **43,11 ha**. El anuncio conjunto lo llama «centro de datos
  de Puerto Venecia».
- Los tres cuelgan de la **Orden FOM/1520/2025** (BOA n.º 223, de 18/11/2025,
  archivada), que aprueba INICIALMENTE el PIGA y describe los tres ámbitos, y
  del **anuncio conjunto de información pública** del mismo BOA (archivado),
  que da el expediente de AAI de cada centro (INAGA/500301/02/2025/11185,
  11186 y 11187) y sus acometidas «DAY 1» a 132 kV (AT 2025/276, 277 y 278).

### La honestidad de las fichas

- **Tres `en_tramitacion`**: el PIGA tiene aprobación inicial, no definitiva —
  la misma vara que ACS y que el Microsoft de Alcalá. La capa lleva ya seis
  registros en esa categoría y ninguno la adelanta.
- **Ni un megavatio**: los actos archivados son urbanísticos y de tramitación
  (superficies, sectores, líneas y expedientes) y no publican potencia — la
  que circula es de prensa y no entra. El hueco lo dice en cada ficha.
- **Puntos de municipio los tres**: ni «Puerto Venecia» ni «Centrovía» están
  en el Nomenclátor. El de Zaragoza comparte punto con `aws-car-zaragoza` y el
  visor los marca apilados, que es la lectura honesta de dos campus situados
  por el mismo municipio.
- Las tres **órdenes de declaración** están citadas con su BOA por los actos
  archivados pero sin archivo propio todavía: hueco en cada ficha y asunto en
  la agenda.

### Huecos

- La aprobación definitiva del PIGA «Región MSFT»; las tres órdenes de
  declaración por archivar; y los megavatios que ningún acto publica. Madrid
  sigue con un solo registro y Cataluña con ninguno: la campaña continúa.

---

## datos-v2026.08.110 — el undécimo centro de datos: el primero con la autorización resuelta fuera del PIGA

La campaña sigue por el norte, y Álava da el registro con la cadena de actos
más madura hasta ahora: **el centro de procesos de datos de Merlin en Arasur**
(Ribabellosa, Ribera Baja/Erriberabeitia), con su autorización ambiental
integrada **concedida** — resoluciones, no solicitudes.

**El contrato no se mueve: sigue en 1.66.0.**

### Añadido

- **`centros-datos:merlin-arasur`** — la AAI del Edificio 3 se concedió por
  Resolución de 11/9/2023 del Viceconsejero de Sostenibilidad Ambiental, y la
  Resolución de 1/11/2024 (**BOPV n.º 4, de 8/1/2025**, archivada) formula la
  **DIA favorable del Edificio 2** de ampliación y modifica aquella AAI. El
  acto dimensiona con grado de resolución: Edificio 3 de 23.566 m² construidos
  y «una potencia total instalada de unos 31.000 kW» con 11 generadores de
  gasóleo de 7,9 MWt; Edificio 2 de 32.697 m² y «unos 70.000 kW» con 27
  focos. Promotor: Merlín Logística, S.L.U. — la sociedad logística del grupo.

### La coordenada, de la tabla de focos — y el huso, deducido

El anexo de la AAI publica **la coordenada UTM de cada foco de emisión, motor
a motor**. El punto del atlas es el foco 01 del Edificio 3 (X=507.335 ·
Y=4.727.345); el acto **no declara el huso**, y se aplicó la doctrina de
`zonas-defensa`: se prueban los tres husos de España y se exige que
exactamente uno deje el punto en el municipio que el acto nombra — el 29 lo
manda a Boiro (Galicia), el 31 al mar, y **el 30 a Ribera Baja**. Segunda
precisión `exacta` de la capa.

### Huecos

- La **puesta en servicio** y los **edificios 4 y 5** que la prensa atribuye
  al campus: sin acto localizado — la fase se queda en `desarrollo` y se
  registra lo actuado.
- La **carga TI**: el acto da potencia eléctrica instalada por edificio, no
  TI — la prohibición del esquema sigue con su motivo.
- La resolución de 2023 (la AAI original) está citada y descrita por el acto
  archivado, pero su publicación propia en el BOPV no se localizó por
  buscador: cuando aparezca, se archiva.

---

## datos-v2026.08.109 — el décimo centro de datos trae coordenada, y un acto imprime la potencia TI

La campaña sigue y el frente extremeño da la pieza mayor: **el centro de
procesamiento de datos de Merlin Edged en Navalmoral de la Mata**, el primer
registro de la capa que entra con precisión **exacta** — porque su acto publica
la coordenada.

**El contrato no se mueve: sigue en 1.66.0.**

### Añadido

- **`centros-datos:merlin-navalmoral`** — declarado **Proyecto Empresarial de
  Interés Autonómico** por el **Decreto 92/2026** (DOE n.º 93, de 18/5/2026):
  parcela I-64 del Parque Industrial Norte de Extremadura, 206.752 m², «un
  volumen de inversión previsto superior a 1.600 millones de euros y una
  creación de empleo de 250 UTA». Y con su **AAI y su estudio de impacto en
  información pública** (expediente AAI25/032, DOE n.º 97, de 22/5/2026): dos
  edificios, demanda crítica de 192 MW, demanda total de 288 MW — y el anuncio
  publica **el centro geométrico de la parcela en UTM** (ETRS89 huso 30,
  X=285.012,242 · Y=4.420.592,338, con su referencia catastral), que el atlas
  convierte y contrasta punto-en-municipio contra el IGN. Tercer
  `en_tramitacion` de la capa: todo esto es un decreto de interés y una
  solicitud, no una resolución.

### La cifra prohibida, impresa por primera vez en un acto

El anuncio de la AAI enumera «Salas técnicas completas 12 MW IT (Data hall):
16» — dieciséis salas de 12 MW de carga TI, los 192 MW de la demanda crítica.
**Es la primera vez que un acto de esta capa imprime la potencia TI.** El campo
del esquema sigue prohibido, porque lo impreso es la SOLICITUD del promotor en
información pública, no una resolución que la certifique — pero el día que la
AAI resuelva con la cifra dentro, el motivo de la prohibición habrá que
releerlo. Queda dicho aquí y en la propia ficha.

### Los dos números que no cuadran, dichos

El decreto mide la parcela en 206.752 m²; el anuncio de la AAI, con el catastro
delante, en 206.753. Un metro cuadrado de diferencia entre dos actos del mismo
expediente: se publican los dos, cada uno con su fuente, y la superficie del
campo sale del que cita el catastro.

### El decreto, ante la sala

El TSJ de Extremadura admitió a trámite en agosto de 2026 el recurso de
Ecologistas en Acción contra el Decreto 92/2026. La admisión no anula nada,
pero el instrumento del registro está judicialmente en revisión, y la ficha lo
cuenta — con su origen de prensa declarado (`prensa`, `parcial`), porque los
autos del TSJ no se publican en boletín.

### Huecos

- La **resolución** de la AAI y la DIA: no constan. El DOE no lo vigila nadie
  automático — a la agenda.
- La ampliación «hasta unos 1.500 MW» que circula en prensa: **ningún acto la
  recoge**. Se registra lo actuado, no lo anunciado.
- Cataluña sigue sin un solo acto en la capa; la campaña continúa.

---

## datos-v2026.08.108 — el noveno centro de datos, y el primero de Madrid

La campaña por boletines autonómicos que la agenda dejaba como siguiente da su
primera pieza — y es la que el hueco grande de la capa pedía: **Madrid entra en
la capa**, con la misma vara con la que nacieron los ocho anteriores.

**El contrato no se mueve: sigue en 1.66.0.**

### Añadido

- **`centros-datos:microsoft-alcala`** — el Campus de Centros de Datos de
  **Microsoft 7724 Spain, S.L.U.** en el solar del Sector 26 del polígono
  industrial **Las Matillas** (avenida de Madrid, 15, Alcalá de Henares), el
  segundo `en_tramitacion` de la capa. Su acto: la **aprobación inicial del
  Plan Especial de Ordenación** por la Junta de Gobierno Local (5/9/2025),
  publicada con su información pública y su suspensión de licencias en el
  **BOCM n.º 234, de 1/10/2025**. Y sus cifras, con la honestidad de dónde
  salen: la memoria del plan («un Campus de Centros de Datos sobre un área de
  unos 98.693,19 m²», entre la M-300 y las avenidas de Madrid y Roma — y su
  propio plano topográfico midiendo 98.306,4 m²) y el análisis ambiental
  (**57,6 MW de potencia nominal para los equipos de IT** y 86,25 MW de
  consumo total) son **documentos del promotor dentro del expediente**:
  sostienen claves en `parcial`, no campos en `confirmado`.
- Cuatro fuentes archivadas: el anuncio del BOCM (facsímil y XML, la primera
  fuente en lista de esta capa), la memoria y el análisis ambiental del
  expediente de información pública, y la consulta al Nomenclátor.

### La cifra prohibida, rozada por segunda vez — y el motivo aguanta

El esquema prohíbe `potencia_it_mw` porque «ningún acto administrativo la da».
El análisis ambiental de Alcalá la DA — pero es documentación del promotor
sometida a información pública, no un acto que la certifique: la prohibición
sigue en pie y la cifra va en clave, en `parcial`, con su procedencia contada.
El día que una DIA o una aprobación definitiva la recite, tocará releer el
motivo — está dicho aquí para que ese día no pille de nuevas.

### La honestidad de la geometría

El Nomenclátor **no nombra el polígono Las Matillas**: la búsqueda nacional da
69 «Las Matillas» y ninguno en Alcalá, y el barrido por recuadro solo trae la
«Isleta de Matillas», un paraje fluvial del Henares que NO es el polígono —
casarlo por parecido sería el relleno que esta capa evita. Punto de
`municipio`, el caso de los cinco de AWS.

### Huecos

- La **aprobación definitiva** del Plan Especial no consta: cuando llegue, la
  categoría podrá subir. El BOCM no lo vigila nadie automático — va a la
  agenda, junto al PIGA de ACS (que también se recomprobó hoy: **sigue sin
  definitiva**).
- Ningún acto administrativo dimensiona el campus: superficie y potencia son
  del expediente del promotor, en claves.
- Los **demás** centros de Madrid y todos los de Cataluña siguen sin acto en
  la capa: la campaña continúa.

---

## datos-v2026.08.107 — los actos sitúan por linderos, y ahora se dice

La relectura que la agenda dejaba señalada como siguiente: los actos **ya
archivados** de las seis desaladoras de Acuamed, releídos entero buscando el
emplazamiento que las fichas no contaban, y la capacidad de Águilas tras su
ampliación, perseguida en el BOE.

**El contrato no se mueve: sigue en 1.66.0.** Ni un registro ni un campo
nuevos: la capa sube de parche (1.1.2).

### Corregido

- **`desaladoras:aguilas` — el hueco de la capacidad se estrecha con un acto
  nuevo**: el anuncio de la CHS de la competencia de proyectos de la concesión
  de sus volúmenes (CSR-0005/2024, BOE de 12/2/2024, archivado) advierte de
  que para disponer de todo el volumen «es necesario que esté ejecutada la
  ampliación de la desaladora hasta los 70 hm³ anuales». Es la tercera cifra
  del expediente —40 evaluados en 2006, 60 previstos en la misma DIA, 70 en el
  anuncio— y la constancia oficial de que a enero de 2024 la ampliación **no
  estaba ejecutada**. La capacidad en servicio sigue sin acto que la publique,
  y el hueco ahora lo cuenta con las tres cifras delante.
- **Tres fichas ganan el «dónde» de su acto, verbatim y en clave**: Carboneras
  («en una parcela de 45.000 metros cuadrados […] a 2 kilómetros de la
  localidad de Carboneras en línea de costa, entre la Central Térmica de
  ENDESA y la planta de cemento»), Bajo Almanzora («a 1.850 m de la línea de
  costa y a 1.400 m aguas arriba del río Almanzora», en la parcela de la
  antigua Confederación Hidrográfica del Sur — y con historia: no era el
  emplazamiento proyectado, Acuamed aceptó el traslado en la información
  pública) y Torrevieja («entre la carretera N-332 y las lagunas de
  Torrevieja», del informe de 2022).

### Lo que la relectura confirmó que NO hay

- **Ni una coordenada de planta.** Las únicas tablas UTM de las DIA son las
  estaciones de control de salinidad **en el mar** (E1–E5), no la planta. Los
  actos sitúan por linderos y distancias; convertir un lindero en coordenada
  sería fabricarla, así que los seis puntos siguen siendo de municipio — con
  el lindero dicho en cada ficha, que es lo que cambia.
- El Nomenclátor sigue sin nombrar ninguna de las seis: se repreguntó por
  etiqueta, planta a planta, sobre el barrido archivado y contra el servicio.
- Valdelentisco y Campo de Dalías: sus actos no sueltan más que «la parcela de
  la actual planta». Nada que añadir sin inventar.

### Huecos

- El de la capacidad de Águilas y los seis de coordenada **se estrechan, no se
  cierran** — cada uno dice ahora exactamente qué publica su acto y qué no. Y
  la decisión de perímetro de la capa (si entran las autonómicas, canarias y
  privadas) sigue pendiente de decisión.

---

## datos-v2026.08.106 — la segunda tanda de sedes: la Antártida en cifra y la PSA en su desierto

La investigación de sedes ICTS que el relevo dejó encargada, con sus ángulos
nuevos — cuatro de los cinco, saldados. **El contrato no se mueve: sigue en
1.66.0.**

### Corregido

- **`icts:baes`** — las bases antárticas pasan del trazo a mano alzada
  (`ilustrativa`) a **multipunto `exacta`** con las coordenadas que **España
  misma deposita en el sistema de intercambio de información del Tratado
  Antártico (EIES)**: la Juan Carlos I en 62º 39´ 47´´ S, 60º 23´ 19.9´´ W
  (Livingston, 1988, 51 plazas) y la Gabriel de Castilla en 62º 58´ 37.908´´ S,
  60º 40´ 32.682´´ W (Decepción, 1990, 28 plazas). El hueco que pedía «las
  coordenadas en cifra» se cierra con la fuente que las publica, y la ficha
  sube a `confirmado`. El trazo había quedado a **343 m** de la Juan Carlos I —
  y la clave lo deja dicho. La reescritura sexagesimal→decimal es de notación,
  no de datum: por eso va `confirmado` donde el XYZ→GRS80 de `red-geodesica`
  va `parcial`.
- **`icts:psa`** — de Sevilla capital (a más de 300 km) a su desierto, en
  `paraje`: el **convenio CIEMAT-DLR** (BOE n.º 149, de 23/6/2022) dice que la
  Plataforma está «ubicada en el Desierto de Tabernas» y recita su condición
  de ICTS. Con ese acto, la pista que la `.101` dejó anotada sin publicar —el
  topónimo «Central Solar de Almería» del Nomenclátor, en Tabernas— entra como
  **equivalencia declarada con sus motivos**: está dentro del desierto que el
  convenio nombra, es la única instalación solar del Nomenclátor en él, y
  «Solar de Almería» solo nombra una instalación en España.
- **`icts:icar`** — de Murcia capital (a unos 35 km) a su puerto, en `paraje`:
  el **convenio IEO-CARM del atún rojo** (BOE n.º 73, de 25/3/2008) sitúa la
  instalación del IEO «en el término municipal del Puerto de Mazarrón» — el
  acto es el propio proyecto sobre el que una década después se declaró la
  ICTS.
- **`icts:omicstech`** — no se mueve un metro y deja de ser convención: los
  **estatutos del consorcio CNAG** (BOE n.º 10, de 12/1/2023) fijan su
  domicilio en Barcelona con todas las señas (C/ Baldiri Reixac 4, Parque
  Científico); la precisión sube de `autonomia` a `municipio` y la dirección
  queda dicha, no geocodificada.
- **El remiendo a la `.101`, de propina** — su captura NGBE de sedes **nunca
  entró en las fichas**: el dedupe del enriquecedor comparaba solo por URL, y
  todas las consultas al Nomenclátor la comparten, así que la captura quedó
  huérfana en `fuentes/` y **Javalambre atribuía su coordenada a un archivo
  que no contiene el Picón del Buitre**. El dedupe compara ahora URL y
  archivo, y las cinco fichas de la `.101` citan la captura que de verdad las
  sitúa.

### La ronda que no movió nada, dicha en voz alta

- **El LNF**: el TJ-II solo pisa el BOE en anuncios de contratación, y una
  formalización da la sede del CONTRATANTE (Av. Complutense 40, Madrid) más
  un NUTS de comunidad entera — sitúa al comprador, no al dispositivo, y con
  eso no se publica nada. El intento queda contado en la agenda con las vías
  aún no agotadas.

### Huecos

- La coordenada de los edificios de PSA, ICAR y las sedes de la `.101` sigue
  sin acto que la dé: los huecos se estrechan, no se cierran.
- El LNF sigue en `autonomia`, que es la verdad del Mapa.

---

## datos-v2026.08.105 — el barrido de Costas: PENCAN-X toca tierra y Santander gana su otorgamiento

La primera de las cuatro investigaciones que el relevo del 2026-08-20 dejó
encargadas — el barrido de otorgamientos e informaciones públicas de DPMT
para cables — pasada por sus frentes. Dos verificados y en la capa; el estado
de los demás, escrito en el relevo para la segunda pasada. **El contrato no
se mueve: sigue en 1.66.0.**

### Añadido

- **`cables-submarinos:pencan-x-rota`** — el duodécimo aterrizaje, y era un
  asunto de la agenda: la información pública andaluza del **cable PENCAN-X
  entre Rota y Las Palmas de Gran Canaria** (BOJA n.º 80, de 28-4-2026;
  expediente CNC02-26-CA-0002; Telefónica de España, S.A.U.). El acto
  **bautiza el sistema y nombra los dos extremos en su propio título** — al
  contrario que los expedientes de Santander y Sagunto — y sitúa solo por
  término municipal: geometría en `municipio` hasta que un acto nombre el
  punto. Los dos reales decretos de su subvención (RD 1124/2024 y RD
  268/2026), archivados en la `.33` como comprobados-y-fuera porque una
  subvención no sitúa nada, entran como fuentes de lo que sí dicen: por qué
  existe el cable, según el Estado. El lado canario (la prensa dice Las
  Canteras) sigue sin acto en el BOC, y así lo declara una clave.

### Corregido

- **`cables-submarinos:virgen-del-mar-santander`** · `fase` — `tramitacion` →
  **`desarrollo`**: la concesión se otorgó por **Orden Ministerial de 30 de
  julio de 2024** (BOE n.º 208, de 28-8-2024) — 26.281 m², 10 años
  prorrogables hasta 30, canon de 6,92 €/m²/año. El otorgamiento **tampoco
  bautiza el sistema** ni nombra el otro extremo, así que el hueco declarado
  sigue en pie y la pista de prensa («Anjana») sigue sin publicarse. La fase
  sube a `desarrollo` y no a `produccion` a conciencia: la concesión autoriza
  la instalación, y que el cable opere no lo dice ningún acto.

### La ronda que no movió nada, dicha en voz alta

- **Medusa** (AFR-IX; Atlanterra y Torreguadiaro): los buscadores refieren una
  información pública del BOJA que el barrido no consiguió abrir como acto —
  queda encargada la vía del buscador propio de eBOJA y de la aplicación de
  resoluciones DPMT de la Junta.
- **2Africa / Barcelona CLS** (Sant Adrià de Besòs): la concesión la tramitó
  la Generalitat y el DOGC no la suelta por buscador general.
- **Columbus-III y Atlantis-2** (Conil), **Tetuán–Estepona**,
  **Almería–Melilla**, **Baleares** y **Ceuta y Melilla**: sin acto localizado
  en esta pasada; quedan de guardia.

### Huecos

- El sistema del cable de Santander y el de Sagunto siguen sin nombre de acto.
- El amarre canario de PENCAN-X, sin acto en el BOC.
- Los de siempre en la capa.

---

## datos-v2026.08.104 — qué mide cada estación: la red sísmica gana sus canales

El primer hueco declarado de `red-sismica` decía, desde su nacimiento en la
`.64`: «qué mide cada estación […] el servicio lo publica a nivel de canal,
que es otra consulta y otro volumen». La consulta se hizo. **Contrato
1.65.0 → 1.66.0** (aditiva: la capa estrena su esquema §10).

### Añadido

- **`red-sismica` · `canales[]` e `instrumentacion[]` en las 303 fichas** —
  del nivel de canal del mismo servicio FDSN del IGN (2.328 épocas de canal).
  `canales` publica los códigos **verbatim** (los abiertos si la estación
  vive; todos los que tuvo, si es histórica) e `instrumentacion` su lectura
  por la **norma de identificadores de la propia FDSN**, archivada como
  fuente: la primera letra es la banda (H/B banda ancha, E/S corto periodo) y
  la segunda el instrumento (H sismómetro, N acelerómetro). El reparto: **180
  estaciones con velocímetro de banda ancha, 98 con acelerómetro, 48 de corto
  periodo**. Cada ficha gana además la clave «Qué mide, leído de sus canales»
  con las cadenas de instrumento del servicio, verbatim.
- **La comprobación que sella las dos consultas**: las estaciones con canal
  abierto son **exactamente** las 227 sin fecha de baja — ni una más ni una
  menos. El extractor se planta si un día divergen, y también ante una letra
  de canal que el mapa no cubra: una banda nueva la lee una persona con la
  norma delante, no un `else`.
- **El esquema de la capa** (`red-sismica.schema.json`), probado en
  adversario antes de publicar: tres defectos sembrados (un canal ilegal, un
  valor fuera del enum, una vigente con `fecha_baja`), tres BLOQUEA. Nacen
  dos prohibiciones con nombre: `magnitud_maxima` (sería un cálculo del atlas
  vestido de dato) y `sensor_modelo` (la descripción del servicio es una
  concatenación por épocas, no un modelo — va en la clave, no como campo que
  invite a filtrar).

### Por qué `instrumentacion` va `confirmado` y no `parcial`

Leer «HN → acelerómetro» es **traducir un código por el diccionario de quien
lo emite** — como leer el catálogo de la DR 2026 en `ferrocarril-nodos` — y
no convertir una medida, que es lo que degrada a `parcial` (la doctrina de
las conversiones XYZ→GRS80 de `red-geodesica`). La distinción queda escrita
en el §10 del contrato.

### Corregido

- **El visor** — el rótulo de `codigo` decía «Código de la dependencia» desde
  la `.97` para TODAS las capas: el apellido era de Adif y vestía mal a las
  estaciones sísmicas y geodésicas, que comparten campo. Ahora «Código» a
  secas (el propio comentario del código pedía eso y decía otra cosa), y los
  dos campos nuevos ganan su rótulo.

### Huecos

- **El que queda es de la capa**: la red `ES` no es toda la sismología del
  IGN — las antárticas y algunas volcánicas van con otro código de red.
- La fecha de verificación de las 303 fichas pasa a 2026-08-20; su
  `fecha_alta` se queda en la de su alta real, que es lo que ese campo dice.

---

## datos-v2026.08.103 — la ronda de la agenda: un cable esperado y dos huecos con acto

La ronda manual de los asuntos pendientes —lo que ninguna guardia automática
cubre— pasada asunto a asunto. Tres piezas entran; lo que no se movió queda dicho
abajo, porque una ronda que solo cuenta sus aciertos no es una ronda.

**El contrato no se mueve: sigue en 1.65.0.**

### Añadido

- **`cables-submarinos:la-palma-tenerife-el-socorro`** — el undécimo
  aterrizaje, y el asunto de la agenda que esperaba su anuncio: la información
  pública de la concesión del **cable La Palma–Tenerife** salió en el **BOC
  n.º 32** (17-2-2026; anuncio firmado el 15-12-2025). Telefónica de España,
  S.A.U.; amarre en la «Playa de El Socorro» de **Los Realejos** — nombrada
  por el propio anuncio, sin ir al proyecto básico como en Base 6; el
  Nomenclátor tiene una única «Playa del Socorro» en toda España y de ahí el
  punto (`paraje`). El acto no bautiza el sistema pero sí dice qué conecta:
  sin hueco — un cable sin nombre comercial. Archivado en sus dos formas
  oficiales (PDF y HTML del BOC): el facsímil esconde un tramo de texto a la
  extracción (fuente incrustada sin ToUnicode) y el HTML lo completa.

### Corregido

- **`residuos-radiactivos:at-vandellos-i`** · `fase` — `tramitacion` →
  **`desarrollo`**: el registro que «no tenía ningún acto, solo la previsión
  del plan» ganó dos en 2026 — la **declaración de impacto ambiental** (BOE
  n.º 81, de 2/4/2026) y la **autorización de ejecución y montaje** (BOE
  n.º 140, de 9/6/2026, con informe favorable del CSN de 27/5/2026). La clave
  que declaraba la carencia se reescribió con los actos en la mano y el hueco
  se estrecha a lo que sigue siendo verdad: la puesta en servicio no consta y
  2027 sigue siendo la previsión del plan.
- **`residuos-radiactivos:el-cabril`** · hueco f6 — **el acto existía desde
  enero de 2025 y la búsqueda del alta no lo encontró**: la Resolución de 17
  de enero de 2025 (BOE n.º 31, de 5/2/2025) autoriza la ejecución y montaje
  de la **Plataforma Sureste**, una nueva plataforma de almacenamiento
  definitivo de baja y media actividad con **27 celdas**, con DIA de 19/2/2024
  e informe favorable del CSN de 19/12/2024. El hueco se cierra y nace el
  honesto: la puesta en servicio de esas celdas no consta, y la fecha de 2028
  del plan sigue siendo previsión.

### La ronda que no movió nada, dicha en voz alta

- **Los cuatro ATI-100** (Vandellós II, Ascó, Cofrentes, Almaraz): ninguna
  resolución de puesta en servicio en el BOE. Siguen en `desarrollo`, que es
  la verdad.
- **El DOCM** («Neodimio», «monacita», «tierras raras»): sin resultados — el
  anuncio de información pública del PI de tierras raras sigue sin salir. De
  propina, una mordedura anotada en la agenda: el buscador del DOCM devuelve
  un **500** a las consultas que SÍ tienen resultados cuando pregunta un
  cliente no interactivo.
- **PENCAN-X**: sin acto de Costas ni en el BOJA ni en el BOC. (El PENBAL-4
  de Valencia que asomó en el barrido ya estaba en la capa: el circuito de
  guardia lo había cazado en su día.)
- **El Magreb-Europa y el Boletín Hidrológico**: no tocaban — el gas se
  refrescó el 12 de agosto y el agua el 14, y CORES no publica mes nuevo en
  una semana.

### Huecos

- Los de siempre en las tres capas tocadas, más los dos honestos que nacen
  hoy: la puesta en servicio del AT de Vandellós I y la de las celdas de la
  Plataforma Sureste.

---

## datos-v2026.08.102 — el octavo centro de datos: la exclusión que se revierte con motivo

La release `.89` dejó fuera el centro de datos de ACS con razón: sus actos de
entonces eran un concurso de capacidad que define una solicitud en un nudo
(Nuevo Vigo 220, y además excluida) y la acometida de «La Puebla» en OTRO
municipio (Villamayor de Gállego). La regla de la capa es que entra el centro
que un acto **nombra, sitúa y dimensiona** — y los actos que hacen las tres
cosas aparecieron después, en el BOA. Esta release lo trae, sin tocar la regla
que lo excluyó: lo que cambió son los actos, no la vara.

**El contrato no se mueve: sigue en 1.65.0.** Entra un registro con el esquema
que la capa ya tenía.

### Añadido

- **`centros-datos:acs-dc-la-puebla`** — el octavo de la capa y el primero
  `en_tramitacion`: campus de centro de procesamiento de datos de **150 MW,
  ampliable a otros 150**, en el sector SP-1 de **La Puebla de Alfindén**
  (Zaragoza), promovido por **ACS DC Infra La Puebla, S.L.** Cuatro fuentes:
  - la **Orden PEJ/865/2025** (BOA n.º 140, de 23/7/2025), que publica el
    Acuerdo del Gobierno de Aragón de 27/6/2025 declarando el proyecto
    inversión de interés autonómico con interés general — y que en su propio
    texto da el ámbito (**255.504,60 m²**, siete parcelas de la reparcelación
    unidas en una), las dos fases (la I con permiso de acceso y conexión de
    REE en Peñaflor 400 kV desde el 5/9/2024; la II pendiente) y el diseño de
    las salas (20.000-30.000 kW de carga TI cada una);
  - el **anuncio conjunto de información pública** (BOA n.º 237, de
    9/12/2025): el PIGA aprobado INICIALMENTE por Orden de 1/12/2025, la
    autorización ambiental integrada (INAGA/500301/02/2025/11189) y las
    instalaciones eléctricas autonómicas (AT 2025/258 — línea soterrada de
    220 kV de ~13.500 m y SET CD Campus con 4×120 MVA);
  - el **BOE-B-2026-24883** (22/7/2026), la información pública de la
    acometida estatal — el mismo anuncio que en la `.89` fue motivo de
    exclusión entra ahora como fuente, porque su título llama al proyecto
    «acometida del centro de datos ACS DC LA PUEBLA»;
  - y el **Nomenclátor** para el punto del municipio.

### La honestidad de la ficha

- **Estrena la categoría `en_tramitacion`**, que el vocabulario tenía prevista
  desde el nacimiento de la capa y ninguna ficha usaba: el PIGA tiene
  aprobación inicial, no definitiva, y la información pública de la acometida
  estatal seguía abierta en julio de 2026. Llamarlo `autorizado` sería
  adelantar el expediente.
- **Sin consumo anual, otra vez**: los 150 MW son potencia, no energía — la
  misma doctrina que los 240 MVA de Meta. El dato va en las claves con su
  unidad.
- **La potencia TI, rozada y no publicada**: el acto da el diseño POR SALA
  (20-30 MW de carga TI) pero no el total con el que se compara el sector. La
  prohibición del esquema queda como estaba, y el hueco lo cuenta.
- **La inversión y el calendario van `parcial`**: los >1.250 M€ y la puesta en
  marcha «antes de septiembre de 2029» los recoge el acto «según la
  información facilitada por la promotora» — previsión del promotor recitada,
  no cifra verificada por nadie.
- La geometría se queda en `municipio` (§6.6): el acto sitúa por el sector
  SP-1 del planeamiento, que el Nomenclátor no nombra — el mismo caso que los
  cinco de AWS, no el de Meta (cuyo polígono sí tiene topónimo).

### Corregido

- **`datos/manifest.json`, la nota de la capa** — decía «por ahora el único
  localizado que hace las tres cosas es el PIGA de AWS» desde antes de la
  `.100`: dejó de ser verdad al entrar Meta y nadie la movió. Reescrita para
  que no lleve recuentos, que es la clase de texto que envejece aparte del
  dato. Y la atribución de la capa gana los emisores que le faltaban desde la
  `.100` (JCCM) y esta release (BOE).

### Huecos

- **La potencia TI en MW** — sigue sin publicarla ningún acto (ver arriba).
- **La aprobación definitiva del PIGA** — cuando llegue, la categoría sube a
  `autorizado`. El vigía semanal solo lee el BOE y este acto saldrá en el
  BOA: queda como asunto de revisión mensual a mano, junto al DOCM, por el
  mismo motivo.
- **Los centros de datos de Madrid y Cataluña**, que son la mayoría del parque
  español y siguen sin un solo acto archivado en esta capa.
- Siguen abiertos los de releases anteriores.

---

## datos-v2026.08.101 — la tanda de sedes: cuatro ICTS bajan de la capital

La lección del GTC —que estuvo dibujado en la isla que no era porque el Mapa
de ICTS sitúa por comunidad autónoma— decía: «antes de conformarse con la
convención hay que agotar la búsqueda de un acto». Esta release la aplica en
serie: cuatro búsquedas agotadas, cuatro convenios del BOE encontrados,
cuatro ICTS en su sitio.

### Corregido

- **ALBA** — de Barcelona capital a **Cerdanyola del Vallès**: el convenio de
  constitución del consorcio CELLS (BOE n.º 1, de 1/1/2026) fija su domicilio
  en el Carrer de la Llum 2-26 y sitúa la ampliación «dentro del Parque del
  Alba en el término municipal de Cerdanyola del Vallès».
- **CLPU** — de Valladolid (a ~110 km) a **Villamayor, Salamanca**: su
  convenio con la AEAT (BOE n.º 83, de 4/4/2026) da la sede con señas
  completas — calle Adaja 8, Edificio M5 del Parque Científico de la USAL.
- **CENIEH** — de Valladolid (a ~120 km) a **Burgos**: un convenio del propio
  consorcio (BOE n.º 133, de 1/6/2026) da su domicilio en el paseo de la
  Sierra de Atapuerca 3.
- **OAJ (Javalambre)** — de Zaragoza (a ~180 km) al **Picón del Buitre, Arcos
  de las Salinas (Teruel)**, y este sube a `paraje`: el convenio con RedIRIS
  (BOE n.º 201, de 23/8/2021) dice sin rodeos que el observatorio está en el
  Pico del Buitre, y ese pico es topónimo del Nomenclátor — con su vértice
  geodésico «Buitre» al lado.

Los tres primeros quedan en `municipio` y no más allá a conciencia: los
convenios dan la DIRECCIÓN, pero geocodificarla sería una coordenada fabricada
por el atlas. La dirección queda dicha en cada clave. **Los huecos no se
cierran: se estrechan** — la coordenada del edificio sigue sin acto que la dé,
y los cuatro siguen `parcial`.

### Añadido

- Cuatro convenios del BOE archivados, cada uno con sus centinelas en el
  enriquecedor (si el texto archivado dejara de decir lo que se publica, el
  guion se para), y la captura del Nomenclátor de la tanda — cuatro consultas
  con su URL y su respuesta íntegra.

### La pista que queda anotada, y por qué no se publica

Para la **PSA** el Nomenclátor trae una «Central Solar de Almería» en el
desierto de Tabernas que casi seguro ES la Plataforma — pero identificarla
exige un acto que sitúe la PSA en Tabernas y no apareció: las licitaciones del
CIEMAT dan el NUTS de Madrid (la sede contratante) y su Estatuto no la nombra.
Antes que casar por memoria, la pista queda en PROCEDENCIA. LNF, OmicsTech e
ICAR siguen igual.

### Sin cambio de contrato

Sigue 1.65.0: ni un campo nuevo, ni una regla.

## datos-v2026.08.100 — el séptimo centro de datos, y el primero fuera de Aragón

`centros-datos` pasa de 6 a **7**. La capa nació con la doctrina más estricta
del atlas —«entra el centro que un acto administrativo nombra, y nada más»— y
por eso eran seis y no sesenta. El séptimo llega con la misma vara: no una
nota de prensa, sino **el acuerdo del Consejo de Gobierno** que lo aprueba.

### Añadido

- **`meta-talavera`** — el Proyecto de Singular Interés «Meta Data Center
  Campus», **aprobado definitivamente por Acuerdo del Consejo de Gobierno de
  Castilla-La Mancha de 14/10/2024** (DOCM n.º 205, de 22/10/2024): promotora
  **Zarza Networks, S.L.**, ámbito de **191 ha** en Torrehierro-Fase 2
  (Talavera de la Reina, Toledo), campus en parcela discontinua de **102 ha**
  con **72.705 m²** de edificabilidad, obras a iniciar en 12 meses desde que
  sea legalmente posible y construcción máxima de 10 años. Y la conexión con
  Meta no es de prensa: **el propio acuerdo** lo describe como «una expansión
  de la presencia de Meta en Europa».
- La **declaración de impacto ambiental** (DOCM n.º 59, de 22/03/2024) aporta
  las magnitudes: **demanda máxima global de 240 MVA** desde dos líneas de
  220 kV, fotovoltaica aneja (1,09 MWp in situ + planta de 24,3 MW nominales)
  y **40.600 m³/año de agua** (600 industriales de refrigeración, 40.000
  potable, <1 contra incendios).
- Tres fuentes archivadas: los dos actos del DOCM —descargados del expediente
  oficial en `urbanismo.castillalamancha.es`— y el topónimo del Nomenclátor.

### Dos diferencias con los cinco de AWS, y las dos son mejoras

- **La precisión sube a `paraje`**: el Nomenclátor SÍ nombra el polígono que
  el acto cita («Polígono Industrial Torrehierro»); en Aragón no nombraba
  ninguno y los cinco quedaron en `municipio`.
- **La ficha NO publica consumo anual, y el motivo queda escrito**: la DIA da
  **potencia** (240 MVA), no energía, y convertirla a GWh exigiría inventar
  las horas de uso. El dato va en su clave, con su unidad — el campo
  `consumo_gwh_anio` se queda para los actos que sí lo den, como los de AWS.

### Sin cambio de contrato

Ni un campo nuevo: 240 MVA y el agua van en claves. Sigue 1.65.0. El registro
entra `parcial` por el mismo hueco que los seis de AWS: la potencia TI en MW
no la publica ningún acto (R4).

### Huecos

El de la capa, intacto y ahora sobre 7: la potencia TI la dan la patronal y
los operadores, que son corporativos (R3). Y España sigue sin registro
público de centros de datos.

## datos-v2026.08.99 — las tres estaciones que emitían sin fila

`red-geodesica` pasa de 123 a **126**. Desde su primera pasada la capa
declaraba el hueco en voz alta: el día de prueba entregaron datos 126
estaciones y la tabla oficial de coordenadas publica 123 — `JADR`, `MOTI` y
`TAR2` emitían sin posición publicada. La posición estaba: **en lo que el
propio IGN sirve por otras puertas.**

### Añadido

- **`TAR2` (Tarifa, Cádiz)** — entra **`confirmado`**: el IGN sirve su **site
  log IGS** en `ERGNSS/log/` (sitio Tarifa, DOMES 19350M003, posición
  aproximada ITRF completa y elevación). **El cruce que calibra:** el site log
  y la cabecera `APPROX POSITION XYZ` de su RINEX difieren en **~10
  centímetros** — dos puertas del mismo IGN, una posición — y el extractor se
  para si algún día divergen más de medio metro.
- **`JADR` (Jadraque, Guadalajara, DOMES 15031M001)** y **`MOTI` (Motilla del
  Palancar, Cuenca, DOMES 15030M001)** — entran **`parcial`**, y el matiz es
  la honestidad de la capa: sin fila en la tabla y sin site log, su única
  posición publicada es la cabecera de sus propios ficheros RINEX, que el
  atlas convierte de XYZ a geográficas (GRS80) — **convertir sobre primaria no
  la hace primaria**, la misma doctrina que `longitud_medida_km`. El municipio
  de las tres se comprobó **punto-en-municipio contra el IGN** ,
  el mismo contraste que verificó los 77 nodos de rte-t.
- Cuatro ficheros archivados: el site log de TAR2 y los tres RINEX diarios del
  2026-08-17 — estos como **una fuente con `archivo` en lista** (contrato
  1.38): un emisor, una operación, tres piezas.

### Dos remiendos que destapó el archivo-lista

El primer `archivo` en lista de una CAPA (las series ya los usaban) tumbó el
validador con un `TypeError` y reveló que **el esquema núcleo seguía exigiendo
string**: la enmienda 1.38 se escribió para las series y el núcleo no se
enteró. Arreglados los dos — `comprobar_archivo_fuentes` recorre la lista como
ya hacía el comprobador de series, y `nucleo.schema.json` admite las dos
formas con la historia contada en su descripción.

### Sin cambio de contrato

La regla del archivo-lista existe desde 1.38: esto es alinear validador y
esquema con lo que el contrato ya decía. Se queda en 1.65.0.

### Huecos

El de la capa **se estrecha pero no se cierra**: la tabla oficial sigue
publicando 123, y `JADR` y `MOTI` siguen sin fila y sin site log — su posición
de tabla, con marco ETRS89 declarado, sigue siendo del IGN el publicarla.

## datos-v2026.08.98 — dos cables, un arenal

El décimo aterrizaje de `cables-submarinos`, y una mejora del primero. Una
revisión externa señaló que faltaba **Marea** — y tenía razón; su dato («el BOE
publicó la concesión de 20 de abril de 2017») se comprobó contra el BOE antes
de escribir nada, que es la regla de la casa.

### Añadido

- **`marea-sopela`**: el cable transatlántico de 2017, en el mismo arenal de
  Sopela que Grace Hopper. Su acto es el **otorgamiento por Orden Ministerial
  de 20 de abril de 2017** (anuncio BOE-B-2017-40592, BOE núm. 154): titular
  Telxius Cable España SLU, **27.861,24 m²** de dominio público
  marítimo-terrestre, **25 años**, canon de 1,2391 €/m²/año — y, al contrario
  que otros expedientes de la capa, **nombra sistema y destino con todas las
  letras**: «cable de fibra óptica submarino "Marea" … en dirección a la playa
  de Virginia Beach». Registro `confirmado`, sin huecos.
- `fuentes/2026-08-19_boe_otorgamiento-concesion-cable-marea-sopela.html` y
  `…-grace-hopper-sopela.html` — los dos otorgamientos, archivados.

### Corregido

- **`grace-hopper-sopela` citaba solo la información pública**, que autorizaba
  «un cable submarino de fibra óptica» sin bautizarlo — la ficha lo contaba en
  una clave, y `sistema` iba sin aparato de verificación. Al buscar el acto de
  Marea apareció el **otorgamiento de Grace Hopper** (BOE-B-2021-39502,
  Resolución de 8.09.2021, la misma referencia CNC02/21/48/0001): nombra el
  sistema con todas las letras, y `sistema` pasa a **confirmado**. La clave se
  reescribió con el acto en la mano: el nombre tardó cuatro meses en llegar al
  acto, y llegó. Entra también «Lo que otorga el acto»: 34.162,44 m², 15 años
  prorrogables hasta 25, canon de 50.843,19 €/año.
- `conecta` de Grace Hopper decía «España con el Reino Unido y los Estados
  Unidos» — y **ningún documento archivado sostenía lo del Reino Unido** (es
  del sistema global, no de este aterrizaje). Ahora dice lo que dice su acto:
  Estados Unidos (dirección a Smith Point, Nueva York).

### Sin cambio de contrato

Ni un campo nuevo, ni una regla: la release es de datos y el contrato se queda
en 1.65.0.

### Huecos

Los dos de la capa siguen: los expedientes de Santander y Sagunto no nombran
sistema ni destino, y la lista de cables que la Ley 11/2022 obliga a comunicar
al Ministerio sigue sin publicarse. El visor marca como **apilados** los dos
aterrizajes de Sopela, que comparten topónimo y punto.

## datos-v2026.08.97 — la red ferroviaria gana sus nodos

La capa 40. Los 2.682 nodos con nombre de la IDE de Adif llevaban desde la
release `.23` archivados y declarados como hueco: «mezclan estaciones de
viajeros con nudos técnicos y piden criterio propio». Este es el criterio — y
no es del atlas: es el cruce de dos primarias.

### Por qué el criterio no podía salir del WFS

Sus atributos INSPIRE están rellenos con constantes: `formOfNode` dice «railway
stop» y `numberOfPlatforms` dice **CERO en los 2.682 nodos, hasta en
Madrid-Atocha**. Por eso `n_andenes` queda PROHIBIDO por su nombre en el
esquema: un campo relleno con una constante no es un dato.

### Añadido

- **`ferrocarril-nodos`**: 2.682 registros. **1.446 estaciones de viajeros**
  (con el tipo literal del catálogo y la categoría 1-6 del canon del art. 98.5
  — Atocha y Sants son 1), **131 instalaciones de mercancías**, **30
  bifurcaciones**, **30 cambiadores de ancho** y **46 agujas o puntos
  kilométricos** (estas tres clases, por lo que su propio nombre declara),
  **954 sin instalación de servicio catalogada** y **45 sin clasificar**.
- `fuentes/2026-08-19_adif_dr2026_relacion-instalaciones-servicio.pdf` — el
  Catálogo 1 de la **Declaración sobre la Red 2026** de Adif (ed. 12/12/2025):
  la relación de instalaciones de servicio con nombre, titularidad, tipo y
  categoría. Es el documento que el art. 32 de la Ley 38/2015 obliga a
  publicar: primaria por la doctrina 1.16. Obtenido de la captura del Internet
  Archive de la URL viva de adif.es, que sirve 403 a clientes no interactivos
  — el camino entero está en PROCEDENCIA.

### Las reglas del cruce, que es donde una capa así puede mentir

Por NOMBRE, porque el catálogo no trae códigos. **Un homónimo no se casa**: los
45 `sin_clasificar` llevan cada uno su nota (salvo el caso resuelto a medias:
dos «MENDEZ ALVARO», dos entradas del mismo tipo — no se sabe cuál es cuál,
pero lo afirmado vale para ambos). **31 equivalencias de grafía, una a una con
su motivo** en el extractor: erdia=centro (el WFS nombra en euskera lo que la
DR nombra en castellano), B/V vasca, valenciano/castellano
(«XILXES»=«CHILCHES»), abreviaturas («MADRID-P. DE ATOCHA») y, para las
dudosas, las coordenadas del nodo contra la provincia del catálogo. **El
negativo va acotado**: el cruce cubre solo las filas de titularidad Adif/Adif
AV — cargaderos privados, talleres y puertos llevan otro titular y nombran
ubicaciones, no identidades.

### Lo que el cruce dejó a la vista

- El WFS abrevia, castellaniza a medias y tiene al menos una errata: **«SAM
  ROQUE DEL ACEBAL»**.
- **47 instalaciones del catálogo no tienen nodo en el WFS**
  (Madrid-Abroñigal, Vitoria-Mercancías, Ciñera…): el servicio no modela todas
  las instalaciones, y el atlas no les inventa posición.
- 13 parejas de nodos comparten coordenada exacta (una estación y su aguja):
  puntos apilados legítimos que el visor ya marca.

### Contrato

Sube a **1.65.0**. En el esquema quedan prohibidos por su nombre `n_andenes`
(la constante), `municipio` (ninguna fuente lo da por fila), `operador` (cambia
por meses y no lo dice ninguna) y `viajeros_anuales` — el dato que más se echa
en falta: cuando haya estadística oficial por estación, entrará con su cita.

### Huecos

Los de la capa nueva: las 47 instalaciones sin nodo, y el número de viajeros
por estación. El hueco de `ferrocarril` que pedía criterio para los nodos
**queda cerrado** con esta release.

## datos-v2026.08.96 — el ferrocarril dice de qué está hecho

La capa nació con las prohibiciones más elocuentes del atlas: ancho,
electrificación, vías y velocidad, vetados POR SU NOMBRE en el esquema porque
«existen en el servicio, en capas que esta pasada no lee» — y escribirlos de
memoria habría sido inventar los datos más citables de la red. Esta es la
pasada que los lee.

### Añadido

- `fuentes/2026-08-19_adif_atributos-tramos-wfs-inspire.zip` — las seis capas
  de propiedades del WFS INSPIRE de Adif (`NominalTrackGauge`,
  `RailwayElectrification`, `NumberOfTracks`, `DesignSpeed`, `RailwayUse`,
  `RailwayType`), un objeto por tramo con el id del tramo: 1.689 en cada una,
  exactamente los tramos archivados el 2026-08-07, **misma edición 2026/01**
  (el enriquecedor lo comprueba antes de cruzar nada). Una no sale en el
  `GetCapabilities` — `NominalTrackGauge` se descubrió pidiéndola por su
  nombre INSPIRE.
- Cinco campos nuevos en las 326 líneas, cada uno con su **regla de agregación
  tramo→línea declarada** en el esquema, porque ahí es donde una capa así
  puede mentir:
  - **`ancho_via_mm`** (315 líneas: 240 ibéricas, 51 estándar, 24 métricas;
    **cero mixtas**). Las 11 sin el campo no lo declaran — entre ellas los
    **cambiadores de ancho**, donde `notApplicable` es literalmente la
    respuesta correcta, y las «FUERA DE SERVICIO».
  - **`electrificacion`** total / parcial / ninguna (208 / 29 / 89). No es un
    booleano a propósito: 29 líneas están a medias y un true/false las
    obligaría a mentir. Las parciales llevan **`tramos_electrificados`**; la
    fracción la divide quien la quiera (R7).
  - **`n_vias_max`** — máximo y no «el» número: 59 líneas mezclan vía única y
    doble. El **cero** de las líneas fuera de servicio se publica tal cual.
  - **`velocidad_diseno_kmh`** — resultó **uniforme en las 326 líneas** y el
    enriquecedor SE PARA si una edición futura lo rompe, en vez de elegir en
    silencio. Once líneas a 300; **cinco a 0** (ramales portuarios como
    Maliaño-Raos), publicados tal cual.
  - **`uso`** mixto / mercancías / viajeros, solo cuando es uniforme entre los
    tramos (223 líneas): resumir usos distintos en una palabra sería
    clasificar por nuestra cuenta.

### Tres erratas de Adif, anotadas y no corregidas en silencio

El ancho viene con `uom="m"` y valor `1668.0` — son milímetros, y el campo
lleva la unidad en el nombre para no depender de la fuente. `RailwayUse`
escribe **«pasagens»** donde el vocabulario INSPIRE dice `passengers` (138
tramos). Y el `GetCapabilities` no anuncia una de sus propias capas.

### La prohibición que se queda, con el motivo corregido

`alta_velocidad` esperaba a que se leyera `RailwayType`. **Se leyó: dice
`train` en los 1.689 tramos** — no distingue la alta velocidad, y el
enriquecedor comprueba en cada corrida que siga siendo así. Los 300 km/h de
diseño están a la vista de cualquiera; la etiqueta la tendrá que poner un
acto, no este atlas deduciéndola.

### Contrato

Sube a **1.64.0** (los cinco campos y sus reglas). `operador` sigue prohibido:
Adif administra la infraestructura, quién presta servicio es otra cosa y no lo
dice esta fuente.

### Huecos

Los mismos dos de la capa, sin cambio: 29 líneas de 355 sin ningún tramo que
las declare, y las 2.682 estaciones y bifurcaciones —cuyo GML sigue archivado—
pendientes de un criterio de clasificación propio. Son la siguiente pasada.

## datos-v2026.08.95 — un registro dibujado, una semántica

La revisión visual de la `.94` detectó que las siete polilíneas de Gibraltar,
con una sola simbología, se leían como **dos límites exteriores distintos**. La
auditoría confirmó que la geometría es literalmente la del UKHO —cada parte
casa punto por punto con su feature, sin costuras; las contigüidades a 0,0°
las publica el propio UKHO— así que el problema era de representación, y la
representación se gobierna por categoría.

### Corregido

- `espacios-maritimos:aguas-gibraltar` queda **solo con el mar territorial
  reclamado** (la polilínea de 2.334 puntos). Ni una coordenada cambia: se
  reparte.

### Añadido

- `espacios-maritimos:gibraltar-lineas-medianas` — los tres tramos «Median
  line in absence of agreed maritime boundary», con la categoría nueva
  **`linea_media_sin_acuerdo`** (familia visual del `sin_delimitar`, en trazo
  **continuo**: el discontinuo de esta casa significa «no verificado», y estas
  coordenadas están verificadas — lo que no está es acordado).
- `espacios-maritimos:gibraltar-lineas-cierre` — las tres bocanas del puerto,
  con la categoría técnica nueva **`linea_cierre`**: una línea de cierre
  pertenece al sistema de líneas de base, no a los límites exteriores, y
  vestirla de límite la haría mentir. Miden 100–200 metros: a escala nacional
  son subpíxel y solo se aprecian acercándose, sin necesidad de maquinaria de
  zoom.
- El reparto regala el hover que faltaba: tres registros son tres tooltips, y
  cada tramo dice lo que es al pasar el cursor.

### Sin cambios

- Las cuatro afirmaciones de la `.94` siguen en las tres fichas: la geometría
  procede del fichero oficial del UKHO; España no la reconoce como
  delimitación acordada; no existe delimitación España–Reino Unido; y no se
  dibuja posición española porque España no publica coordenadas de la suya.

---

## datos-v2026.08.94 — Gibraltar: la discontinuidad deja de parecer un dato que falta

La revisión externa de la capa señaló lo que el mapa dejaba mudo: entre punta
del Acebuche y punta Carbonera las líneas de base españolas se interrumpen, y
esa discontinuidad **es un hecho geopolítico, no un hueco de datos**. Alrededor
de Gibraltar no hay delimitación marítima España–Reino Unido, y las posiciones
de las dos partes son incompatibles. Esta edición lo convierte en registro.

### Añadido

- `espacios-maritimos:aguas-gibraltar` — las **siete polilíneas que el fichero
  oficial de límites del Reino Unido (UKHO) etiqueta como Gibraltar**: el mar
  territorial que reivindica, tres líneas de cierre y tres tramos cuyo campo
  Feature dice, literalmente, «Median line **in absence of agreed maritime
  boundary**» — la ausencia de acuerdo, declarada por quien dibuja. El aviso de
  licencia del propio conjunto añade «Not prejudicial to delimitation». Se
  dibuja la posición británica atribuida al Reino Unido y la española va
  en claves con sus papeles: la disposición final primera de la **Ley 10/1977**
  («no puede ser interpretado como reconocimiento de cualesquiera derechos o
  situaciones relativos a los espacios marítimos de Gibraltar, que no estén
  comprendidos en el artículo diez del Tratado de Utrecht»), la posición del
  MAEC («las aguas adyacentes […] no fue[ron] cedida[s] por España»), la
  salvaguarda expresa del **acuerdo UE–Reino Unido de 2026** («no implica
  modificación alguna de la posición jurídica de España en lo que atañe a la
  soberanía y la jurisdicción») y la tabla de DOALOS, que no lista delimitación
  alguna con el Reino Unido.
- Dos fuentes nuevas archivadas: el **shapefile oficial del UKHO** (Open
  Government Licence v3.0, con su fórmula de atribución literal — que entra en
  la atribución de la capa, porque la licencia manda) y la **Ley 10/1977**
  sobre mar territorial, que además sostiene desde ahora la regla general: 12
  millas y, frente a costas vecinas o enfrentadas, «salvo mutuo acuerdo», la
  línea media (artículo cuarto).

### Auditado, sin cambios

- La revisión preguntaba si el atlas confunde **líneas de base** con **límites
  exteriores del mar territorial**. No: los once registros se llaman «Líneas de
  base rectas — …» y sus fichas dicen desde la `.92` que «no son una frontera —
  son el cero desde el que se miden el mar territorial y las demás zonas». El
  atlas no dibuja ningún límite exterior de mar territorial porque ningún acto
  español lo publica punto a punto: generarlo exigiría un buffer de 12 millas,
  que es exactamente el cálculo que esta capa tiene prohibido.

### Huecos

- España **no publica coordenadas** de su posición sobre las aguas en torno a
  Gibraltar: sus instrumentos la formulan sin dibujarla. Por eso el registro
  dibuja la reclamación británica —etiquetada como tal— y no una geometría
  española que no existe.

---

## datos-v2026.08.93 — el tercer frente del Mediterráneo, y la zona con datum propio

Cuarta y última tanda marítima del día. Con ella, el tablero registra **todos
los límites marítimos alrededor de España que un instrumento publica punto a
punto** — y declara, con nombre y motivo, los que no existen.

### Añadido

- `espacios-maritimos:zee-mediterraneo-francia` — las loxodromias del decreto
  francés 2012-1148 (JORF, WGS84, vía su copia depositada en la ONU:
  M.Z.N.94.2013.LOS), en dos partes separadas por Córcega. **España protestó
  por nota verbal de 23-10-2012**, archivada y citada con sus palabras:
  límites «claramente exorbitantes en relación a la línea equidistante», y
  «ninguna de las coordenadas incluidas en el mencionado decreto puede ser
  considerada en modo alguno como límite de separación». Los tramos que el
  anexo remite a la límite exterior de las aguas territoriales **no se
  dibujan**: el acto no publica sus coordenadas. Con el punto 0 francés a
  cinco millas y media del punto 54 español, el golfo de León queda registrado
  como el tercer frente abierto del Mediterráneo, con el argelino y el
  marroquí.
- `espacios-maritimos:zona-pesca-mediterraneo` — los 58 puntos de la zona de
  protección pesquera de 1997 (retocada en 2000: «descontadas esas 12 millas,
  la amplitud […] ha de ser forzosamente de 37 millas», dice el propio RD
  431/2000), tal como España los depositó ante la ONU (M.Z.N.34.2000.LOS) —
  «referidos al Datum Postdam» *(sic)*: el único límite marítimo español con
  datum declarado antes del WGS84, y lo declara con errata. Se dibuja del
  depósito y no del decreto, porque el decreto define el tramo oriental con la
  fórmula «línea equidistante» sin publicar puntos: los publicó España al
  depositarlos, y el atlas copia — no calcula.
- `espacios-maritimos:aguas-alboran` — el tercer frente sin delimitación
  acordada con Marruecos, ilustrativo y con su hueco, sostenido por los
  instrumentos de las dos partes (la nota española de 2015, la ley marroquí
  38-17). El esquema **se detiene al oeste de la isla de Alborán a propósito**:
  incluirla habría hecho decir al dibujo algo sobre el efecto de la isla en una
  delimitación futura, que ningún documento dice.

### Huecos

- Los tramos de la ZEE francesa definidos «por la límite exterior de las aguas
  territoriales» quedan sin dibujar, con el motivo en la propia ficha.
- El perímetro de Alborán es un esquema con fuente `tipo: hueco`, como sus dos
  gemelos.
- Candidata anotada para el futuro: la **presentación conjunta
  Francia–Irlanda–España–Reino Unido ante la CLCS (2006)** por el golfo de
  Vizcaya y el mar Céltico, que aparece en el expediente francés de DOALOS.

---

## datos-v2026.08.92 — el cero desde el que se mide el mar

Tercera tanda marítima del día, y la más gorda: las **líneas de base rectas del
Real Decreto 2510/1977** — el punto cero desde el que se miden el mar
territorial, la zona contigua, la ZEE y la plataforma. 154 puntos en 31 tramos,
transcritos del anexo, validados por el encadenamiento de topónimos del propio
acto y contrastados punto a punto contra el litoral y contra el facsímil de la
gaceta a 400 píxeles por pulgada.

### Añadido

- Once registros `lineas-base-*`, uno por fachada o grupo insular — el reparto
  del propio anexo: costa norte y noroeste, suroeste, sur y este; Mallorca y
  Cabrera, Menorca, Ibiza y Formentera; Gran Canaria, Tenerife, El Hierro, La
  Palma y el grupo Lanzarote–Fuerteventura. Cada uno es una multilínea: entre
  tramo y tramo la costa sigue con su línea de bajamar, y eso también lo dice
  cada ficha.
- Dos fuentes nuevas archivadas: el **facsímil de la gaceta** (BOE núm. 234,
  30-09-1977) y la **corrección de errores** de tres semanas después
  (BOE-A-1977-25293) — que no toca ni una coordenada: cambia «Ministerio de
  Marina» por «Ministro de Defensa». Un decreto que nació de una fe de erratas,
  con la suya propia.

### Lo que el papel dice y no cuadra, contado

- «Pta. Grieta (Alegranza), 29°42′,50» cae **32 kilómetros mar adentro**, al
  norte de la isla, cuando su vecina de anexo («Pta. Delgada (Alegranza)»,
  29°24′,10) la pisa. Todo huele a errata de imprenta — ¿42 por 24? — pero la
  corrección de 1977 no la tocó y ningún acto posterior modifica el anexo: el
  atlas dibuja lo que el decreto publica y la clave del registro cuenta la
  discrepancia. Es la doctrina del FOS_30, en el mar.
- El trazado **deja fuera la bahía de Algeciras**: la sección atlántica muere
  en punta del Acebuche y la mediterránea nace en punta Carbonera. El anexo no
  lo explica; simplemente no dibuja ahí.

### Huecos

- **Ceuta y Melilla no aparecen en el anexo** del RD 2510/1977: sin líneas de
  base rectas declaradas para las plazas. El silencio es del acto y se declara
  aquí.
- El decreto **no declara sistema geodésico**: sus posiciones salen de cartas
  del Instituto Hidrográfico con ediciones de 1952 a 1972, que el propio anexo
  enumera. Cada `geo_fuente` lo dice.
- España **no ha depositado las líneas de base ante la ONU**. El depósito
  M.Z.N.19.1998 que lo parecía resulta ser la **zona de protección pesquera del
  Mediterráneo** (RD 1315/1997, «geodetic system Potsdam» según el propio
  depósito), sustituido por el M.Z.N.34.2000 — y la nota francesa de 1998
  responde a esa zona, no a las líneas de base. La zona de pesca queda anotada
  como candidata a registro: tiene acto, coordenadas y hasta datum declarado.

---

## datos-v2026.08.91 — el reparto al cincuenta por ciento y el gemelo del norte

La segunda tanda marítima del día. Dos registros que la `.90` dejó anunciados:
uno estaba anotado en una clave («queda anotado en vez de trazado») y el otro,
declarado como hueco con nombre propio.

### Añadido

- `espacios-maritimos:zona-especial-golfo-vizcaya` — el recinto Z1–Z4 que el
  artículo 3 del convenio España–Francia de 1974 define **a caballo de la línea
  divisoria**, con el régimen del anexo II: las Partes «favorecerán la
  explotación de la zona con miras a un **reparto a partes iguales de sus
  recursos**». Una zona de recursos al cincuenta por ciento, pactada en 1974 y
  en vigor desde 1975 — cuatro vértices exactos del propio tratado.
- `espacios-maritimos:aguas-canarias-madeira` — el gemelo septentrional del
  corredor Canarias–Marruecos: las aguas entre el archipiélago y Madeira, **sin
  delimitación acordada en vigor**, dicho por las dos partes en el expediente de
  la CLCS (España, 7-04-2015: delimitará «de acuerdo con Portugal… tan pronto
  como la Comisión haya examinado sus presentaciones»; Portugal, 1-04-2015: su
  salvaguarda sobre «la delimitación de la plataforma continental entre
  Portugal y España») y por la tabla de DOALOS, donde los dos convenios firmados
  en 1976 siguen sin fecha de entrada en vigor. Perímetro ilustrativo trazado a
  mano, con su hueco declarado — la misma regla que su gemelo del sur.

### Corregido

- `espacios-maritimos:delimitacion-francia-plataforma` · la clave «La zona
  especial que este registro no dibuja» pasa a «La zona especial, en su propio
  registro»: lo que la `.90` anotó en prosa es ahora un registro con geometría,
  y una clave que dijera «no se dibuja» habría quedado falsa en la misma
  pantalla que lo dibuja.
- `vocabularios` · la definición de `limite_acordado` dice ahora «límite o
  recinto»: la escribimos por la mañana pensando solo en líneas y por la tarde
  el propio convenio de 1974 enseñó que también publica recintos.

### Huecos

- Los del frente portugués se ESTRECHAN pero no se cierran: el corredor
  Canarias–Madeira ya tiene registro; los frentes del **Miño y del Guadiana**
  siguen sin nada que dibujar, con los mismos convenios de 1976 firmados y sin
  constancia de vigor.
- El perímetro del corredor nuevo es lo único de su registro que no sostiene un
  documento, y lleva su fuente `tipo: hueco` — trazarlo con precisión sería
  dictar la delimitación que ambos Estados dejan a un acuerdo.
- Siguen pendientes de la `.90`: el mar territorial con Francia (sin
  coordenadas publicadas), Alborán, Ceuta y Melilla (sin instrumento que
  dibuje) y las líneas de base del RD 2510/1977.

---

## datos-v2026.08.90 — el mar deja de acabarse en Canarias

«Espacios marítimos» prometía en su resumen mar territorial, zona contigua, ZEE
y plataforma continental, y publicaba cuatro registros — todos alrededor de
Canarias. Esta release la saca del expediente canario con la única regla que la
capa admite: **se dibuja lo que un instrumento publica punto a punto, y ni un
vértice más**. Ninguna de las cuatro líneas nuevas la ha trazado el atlas: las
cuatro son la tabla de su acto, pasada a grados decimales.

### Añadido

- `espacios-maritimos:delimitacion-francia-plataforma` — la línea Q–R–T del
  convenio de París de 29 de enero de 1974 (BOE-A-1975-14608, en vigor desde
  1975): 16 puntos en el golfo de Vizcaya. Con la de Italia, una de las **dos
  únicas delimitaciones marítimas que España tiene cerradas por tratado en
  vigor**. Estrena la categoría `limite_acordado` (contrato 1.61.0): el único
  trazo del tablero que no acredita una posición sino un acuerdo.
- `espacios-maritimos:delimitacion-italia-plataforma` — los diez puntos A–L del
  convenio de Madrid de 19 de febrero de 1974 (BOE-A-1978-29664, en vigor desde
  1978), entre Baleares y Cerdeña. El criterio lo declara el propio tratado:
  «la equidistancia de las líneas de base respectivas» — la equidistancia la
  publica el convenio, no la calcula el atlas.
- `espacios-maritimos:zee-mediterraneo-espana` — los 54 puntos del cuadro del
  Real Decreto 236/2013, con «DATUM WGS 84» impreso encima: el límite que
  España declaró en el Mediterráneo noroccidental, depositado ante la ONU en
  2018 (M.Z.N.139.2018.LOS). Su artículo 2 deja dicho que podrá modificarse por
  acuerdo: es una declaración a la espera de acuerdos que aún no existen.
- `espacios-maritimos:zee-argelia` — los 62 puntos numéricos del anexo del
  decreto presidencial argelino 18-96 (JORADP n.º 18, 2018; M.Z.N.135.2018.LOS).
  Registrarla no es cortesía: la doctrina exige cada posición atribuida a
  quien la sostiene, y dibujar solo la línea española habría convertido al atlas en
  parte. **El hallazgo que las dos tablas regalan:** el punto 2 argelino y el
  punto que el artículo 1 español sitúa a 46 millas de Cabo de Gata son el
  mismo, minuto por minuto — las dos declaraciones arrancan del mismo lugar. El
  solapamiento que sigue no lo dice el atlas: lo dice la nota verbal española
  de 27 de julio de 2018 («coordenadas claramente exorbitantes respecto a la
  línea media equidistante»), archivada junto a la protesta italiana y las
  respuestas argelinas de 2019.
- Once fuentes primarias archivadas: cinco del BOE (los tres convenios de
  1974-78, el RD 236/2013 en facsímil con su cuadro y el gemelo del mar
  territorial) y seis de la ONU (el decreto argelino depositado, las notas
  verbales de España e Italia, la respuesta argelina y las páginas de Estado
  de DOALOS).

### Huecos

- El **convenio del mar territorial con Francia** (BOE-A-1975-14263) no publica
  una sola coordenada: define sus puntos M, P y Q por referencias geográficas y
  una carta náutica anexa. Su línea no se dibuja — digitalizarla sería
  calcular, no copiar.
- Con **Portugal** no hay nada que dibujar: los dos convenios de delimitación
  de 1976 figuran en la tabla de DOALOS firmados y **sin constancia de entrada
  en vigor**. Tres frentes (Miño, Guadiana y Canarias–Madeira) siguen sin
  delimitación en vigor.
- **Alborán, Ceuta y Melilla**: ningún instrumento localizado publica línea
  alguna que dibujar ni declaración conjunta que registrar.
- Los convenios de los años setenta **no declaran datum**; cada `geo_fuente` lo
  dice en vez de disimularlo.
- Las **líneas de base rectas del RD 2510/1977** —cientos de puntos, datum de
  la época— quedan pendientes de digitalizar como tarea propia.

---

## datos-v2026.08.89 — la nota que no se podía leer, leída

La release anterior cerró con un hueco declarado: la comunicación portuguesa de 1
de abril de 2015 la publica la ONU **escaneada**, sin capa de texto, así que el
atlas acreditaba que existía, de quién era y de qué día — **no lo que decía**. Se
publicó así, con una clave que lo explicaba y un párrafo entero de la historia de
Tropic construido sobre esa imposibilidad.

Duró doce días. **«No se puede extraer» no es «no se puede leer»:** la página
estaba dentro del PDF como mapa de bits (1704 × 2200, `Separation`/`Black`). Se
descomprimió y se leyó, banda a banda, con doble pasada sobre los párrafos que se
citan. La transcripción va archivada verbatim al lado del escaneo.

### Corregido

- `espacios-maritimos:plataforma-continental-canarias` · **desaparece el hueco
  `f12`** («el contenido de la comunicación portuguesa no se puede citar»). El
  registro sube de `verif: parcial` a **`confirmado`**: R4 lo retenía por ese
  hueco y ya no hay ninguno.
- La clave «De la nota portuguesa solo se puede citar la fecha» se sustituye por
  **«Lo que dice Portugal»**, con la cita literal: el Gobierno portugués **«no
  objeta»** a que la Comisión examine la presentación española y formule
  recomendaciones, con una sola salvaguarda — que no prejuzguen ni el límite
  exterior de la presentación portuguesa de 11 de mayo de 2009 ni la delimitación
  entre ambos. Es lo contrario de lo que sostenía la ficha antes de la `.88`.
- El título de `f8` deja de describir un documento mudo y dice qué documento es.

### Añadido

- `fuentes/2026-08-18_onu_nota-verbal-portugal-plataforma-canarias.transcripcion.txt`
  — la nota entera, verbatim, con el procedimiento de lectura por delante y lo
  manuscrito entre corchetes. **No es la fuente**: la fuente sigue siendo el
  escaneo archivado al lado; esto es la lectura, puesta donde se pueda desmentir.
- Clave **«La ONU publica esta nota escaneada»**: de dónde sale la cita, para que
  nadie tenga que fiarse de que salió de un texto.
- Tres claves que salen de leer **uno a uno los 448 renglones del Anexo 1** del
  resumen ejecutivo español, que hasta ahora solo se había leído por encima:
  - **«El primer punto lo fija Portugal; el último, terceros Estados»** — el PF‑1
    está calculado en la equidistancia de las 200 M entre España y Portugal, a
    partir del Roque de Santo Domingo (La Palma) y la **Ponta do Pargo (Madeira)**,
    y para calcularlo España usó **la línea de costa oficial portuguesa**. El
    PF‑448 cierra contra «las 200 M de terceros Estados». Los dos extremos de la
    línea son los dos vecinos que después escribieron a la Comisión.
  - **«Tres fórmulas para 448 puntos»** — 1 equidistancia, 191 Hedberg (60 M del
    pie del talud), 253 a 350 M de las líneas de base y 3 Gardiner (1 % de espesor
    de sedimentos). El reparto que enumera la prosa (§7‑5 a 7‑7) y el que se
    obtiene renglón a renglón del anexo coinciden **punto por punto**.
  - **«29 pies de talud, y sin embargo existe un FOS_30»** — el §7‑4 declara 29, y
    61 puntos fijos (del PF‑388 al PF‑448) citan un «FOS_30»; el anexo llega a
    nombrar 12 pies de talud distintos, porque los demás no generan ningún punto
    del límite. Esa apariencia de contradicción ha llevado a literatura jurídica
    posterior a escribir 30. **El atlas escribe 29**, que es lo que dice el
    documento que España entregó, y publica la discrepancia en vez de taparla.

### Contrato

Sube a **1.60.0**. `fuente` gana **`transcripcion`**: la ruta al fichero de
`fuentes/` donde se archiva la lectura verbatim de un documento sin capa de
texto. §7.7 comprueba que exista, y **esa parte bloquea** — un `archivo` que
falta deja una cita sin respaldo archivado, pero una transcripción que falta deja
sin respaldo la lectura misma que sostiene el `confirmado`. Lo que el campo no
autoriza queda escrito: ni resumir, ni traducir, ni **tomar prestada la lectura
de un tercero** (eso es fuente secundaria, y el hueco se queda hueco). Prueba
nueva, `invalido-77-transcripcion-fantasma`: 70 en verde.

### Huecos

Quedan **dos** en esta capa, los mismos de siempre y ninguno nuevo: ningún
instrumento dibuja la zona sin delimitar entre Canarias y África —trazarla sería
dictar el acuerdo que los dos Estados se reservan—, y las cifras de telurio y
cobalto del monte Tropic vienen de campañas científicas que este atlas no ha
archivado.

## datos-v2026.08.88 — Portugal no objetó, y la nota que lo diría no se puede leer

> **Sobre la `.87`.** Existe una etiqueta `datos-v2026.08.87` en el repositorio,
> empujada una hora antes que esta y **superada por ella**: llevaba este mismo
> trabajo sin la corrección de la espera ni la clave del artículo 76.10. No se
> movió de sitio —una etiqueta publicada no se mueve— ni llegó a tener release ni
> DOI. Lo que se cita es esta.
>
> **Y sobre esta edición, anotado el 2026-08-26.** La `.88` **tampoco tiene
> depósito propio en el archivo público**, y hay que decirlo justo aquí, donde
> la línea de arriba manda citarla: la sincronización del archivo saltó de la
> `.86` a la `.89`, y las cinco fuentes nuevas de esta edición viajaron dentro
> de aquella. Quien las cite, cita la `.89`, que las contiene enteras — están
> en su depósito y en su DOI. **No se ha fabricado después una etiqueta con el
> nombre de la `.88`**, y el motivo es el mismo que rige todo lo demás aquí: el
> archivo no guarda ningún estado que sea el de esta edición, así que ponerle
> hoy su nombre a otro contenido sería una cita falsa, y un DOI no se corrige
> nunca. Es la única edición desde la `.41` sin depósito propio; desde hoy, la
> comprobación de la sincronización se planta si vuelve a faltar uno.

Una revisión externa señaló que la historia de Tropic describía a Portugal como
objetor. Al ir al expediente de la ONU, el problema estaba en **el dato**, y era
mayor.

### Corregido

- `espacios-maritimos:plataforma-continental-canarias` · la clave **«Quién
  objetó»** afirmaba, como **confirmado**, que Marruecos y Portugal objetaron —
  y citaba `f2`, que es **la nota marroquí**. Un documento de Marruecos no puede
  acreditar lo que hizo Portugal. La nota portuguesa **no estaba archivada**.
- El mismo registro citaba a `f1` —el resumen ejecutivo español **de 2014**— para
  sostener que la Comisión no se ha pronunciado, que es un hecho **de 2026**. Un
  documento no puede sostener lo que pasó después de escribirse. Ahora lo
  sostiene la tabla de presentaciones de la Comisión.
- Los «objetores» se derivaban del campo `partes`, que dice a quién **concierne**
  la presentación, no quién escribió. De ahí salía el «dos» del titular.

### Lo que hay de verdad en el expediente 77

**Cinco comunicaciones de tres Estados**, y la ONU las llama «comunicaciones
recibidas», no objeciones: Marruecos (10 de marzo y 31 de julio de 2015),
Portugal (1 de abril) y **España, que respondió dos veces** (7 y 22 de abril).

Y ninguna pide que no se examine. La marroquí objeta el fondo —sostiene que la
presentación recae sobre espacios no delimitados— pero **pide a la Comisión que
lo tenga en cuenta EN SU EXAMEN**. Con Portugal lo que consta es lo contrario de
un bloqueo: España comunica que delimitará lateralmente **«de acuerdo con
Portugal»** en cuanto la Comisión haya examinado ambas presentaciones.

### Añadido

- Cinco fuentes primarias del expediente de la ONU: la página de la presentación
  n.º 77 (que enumera las cinco comunicaciones), la nota portuguesa, la respuesta
  española a Portugal, la segunda nota marroquí y la **tabla de presentaciones**
  de la Comisión.
- Un **hueco nuevo**, y de los raros: **el contenido de la comunicación portuguesa
  no se puede citar**. La ONU la publica escaneada —una imagen, cero fuentes
  tipográficas—, así que consta que existe, de quién es y de qué día; lo que dice,
  no. El registro baja a `parcial` por R4, que es exactamente lo que R4 existe
  para hacer.

### Y un dato mejor que el que había

En la tabla de la Comisión, la fila 77 trae la fecha y la referencia CLCS/90, y
después nada: **«Subcommission established» y «Recommendations adopted on» están
vacías**. No es solo que no haya recomendación — es que **once años después no se
ha constituido el órgano que debe examinarla**.

### Segunda revisión, el mismo día

Una segunda pasada externa —hecha, dicho por ella, **sin poder cargar la página**—
confirmó lo corregido y señaló dos cosas más. Una era suya y era buena; la otra
se había roto al reescribir la historia.

- **La espera estaba redondeada al alza.** Se calculaba restando años
  (`release − depósito`), y de un depósito del **17 de diciembre de 2014** salían
  «12 años» en agosto de 2026. Son **once años y ocho meses**. Ahora se mide de
  fecha a fecha, con el mes de la RELEASE como «ahora» —así la cifra viaja con el
  dato y no con el día en que se compiló—. Un atlas que redondea al alza en su
  propio titular no puede exigirle precisión a nadie.
- **Se había perdido «un límite depositado no es un límite reconocido»**, que
  vivía en la clave que sustituí. Vuelve, y mejor sostenida: la clave nueva **«Lo
  que la Comisión NO hace»** cita el artículo 76.10 desde la propia nota
  marroquí — las reglas del límite exterior «no prejuzgan la cuestión de la
  delimitación... entre Estados con costas adyacentes o situadas frente a
  frente». La Comisión dice hasta dónde llega la plataforma; **no reparte
  fronteras**, y confundirlo es el error más fácil de esta historia.

**Lo que NO se incorporó, y por qué.** La revisión aporta un matiz atractivo —que
el anexo del resumen ejecutivo usa un `FOS_30` pese a declarar 29 puntos de pie
de talud, y que literatura secundaria escribió «30» por eso—. **No entra**: el
lector de PDF de la casa no consigue extraer texto de ese resumen, así que no se
puede comprobar contra el primario archivado. Tampoco entra el contenido de la
nota portuguesa que la revisión cita de un análisis jurídico de 2025: es fuente
secundaria, y el hueco declarado dice exactamente eso.

### Huecos

- El contenido de la nota portuguesa, dicho arriba.
- Sigue sin archivarse la comunicación marroquí de 31 de julio en su versión
  francesa; se archiva la inglesa, que es la que publica la ONU en texto.

---

## datos-v2026.08.86 — La ficha habla de la cosa, no del atlas

**Contrato 1.59.0.**

### Retirado

- `icts` · la clave **«Estuvo dibujada entera en Madrid»** de las once
  distribuidas. La escribió la `.84` para contar su propio arreglo, once veces
  casi igual, y no es un hecho de la instalación: es **biografía del atlas**.

Se vio sobre la ficha publicada, y la pregunta obligada era si hacía falta pintarlo ahí.
No hacía falta. §6.3 define `claves` como «afirmaciones sueltas» **sobre el
sujeto**, y el sitio de un arreglo es este documento, que existe textualmente
para «lo que un lector externo necesita saber para confiar en una versión de los
datos, o para desconfiar de la anterior con motivo». Contarlo **además** en el
dato sería una segunda copia de la verdad: dos copias que se desincronizan a la
primera corrección.

**El motivo no es que el sitio aún no tenga visitas** — eso valdría para volver a
ponerlas cuando las tenga. Es que estaban en el documento equivocado.

La ficha no pierde nada: dónde está cada registro lo dicen `sedes` y
`geo_fuente`, y qué promete esa precisión lo explica el bloque de precisión
geográfica, que el visor pinta entero.

### Añadido al contrato

§6.3 gana la prueba corta —**si el texto habla del atlas en vez de la cosa, no es
una clave**— y su excepción, que importa tanto como la regla: cuando la
corrección **viene de la fuente** y trae hechos con ella (el convenio del BOE
nombrando las sedes a nivel del mar del Gran Telescopio Canarias), lo que se
publica son esos hechos y no el arrepentimiento. Por eso la clave del telescopio
se queda y estas once se van.

### Huecos

- Los de la `.84` siguen abiertos: los vértices son capitales y no laboratorios,
  y Canarias se queda con una de sus dos capitales por estatuto.

---

## datos-v2026.08.85 — Catorce vecinos bajo un punto que decía «3»

Cierra el defecto que la `.84` dejó a la vista. **Contrato 1.58.0.**

### Lo que no cuadraba

Con las once ICTS ya repartidas, la ficha de MARHIS listaba **catorce vecinos**
mientras el punto de Tenerife, en el mapa, decía **«3»**.

Ninguno de los tres números estaba mal. Tenerife tiene 2 vecinos (3 contando a
MARHIS); los catorce son la suma de sus **cinco** sedes. Pero la lista aplanaba
cinco emplazamientos en uno, y **juntos no cuadraban para quien mira — que en
una pantalla es lo mismo que estar mal**.

### Añadido

- `icts` · **`sedes[]`** en las once distribuidas: las comunidades que nombra el
  Anexo I, en el **mismo orden** que los vértices de su `MultiPoint`. Es la
  forma estructurada de lo que `localizacion` ya decía en prosa, y existe por el
  mismo motivo por el que `nodos_del_mapa` es un entero y no una frase: **la
  prosa no la puede leer un consumidor**.

### Corregido

- La ficha **separa los vecinos por sede**, con su recuento al lado, para que
  cuadre con el número que el mapa pinta sobre ese punto.
- La lista de emplazamientos deja de ser **coordenadas anónimas**: cada línea
  lleva su comunidad. Once cifras sin nombre no dicen dónde está nada.
- El enriquecedor **no era idempotente** en el reparto: a la segunda corrida
  `coordinates[:2]` ya no eran dos números sino dos vértices, y reventaba. Es la
  trampa que `ya_tiene` evita en las fuentes y que a la geometría le faltaba.

### La comprobación nueva

Que haya **tantas sedes como vértices** lo mira **§10 y no el esquema**, porque
es una correspondencia entre una propiedad y la **geometría**: cada mitad es
válida por su cuenta. Desalinearlas no rompe nada — solo pone cada laboratorio
en la comunidad de al lado con toda la seguridad del mundo, que es la avería
silenciosa de esta capa. Pruebas **68 → 69**.

### Huecos

- Los de la `.84` siguen abiertos: los vértices son capitales y no
  laboratorios, y Canarias se queda con una de sus dos capitales por estatuto.

---

## datos-v2026.08.84 — Once cosas que no estaban en Madrid

La release anterior puso un número al montón de puntos apilados sobre la
capital. Esta quita el montón. **Contrato 1.57.0.**

### El defecto: `pais` usado fuera de su propia definición

Doce registros de `icts` se dibujaban en el **mismo punto de Madrid**. Se vio
mirando el mapa, y la objeción era la del Gran Telescopio Canarias
aplicada once veces más: **un punto en un mapa afirma**, y ninguna de esas doce
instalaciones está en Madrid. Son redes repartidas por España.

Al comprobarlo aparece que no era una convención tosca sino un incumplimiento.
§6.6 define `pais` como «el hecho es de un Estado entero **y la fuente no sitúa
nada dentro de él**», y la fuente sí sitúa: el campo `localizacion`, verbatim
del Anexo I del acuerdo del CPCTI, dice «Cataluña y Madrid», «Murcia, Galicia,
Cataluña y Baleares», «Canarias, Cantabria, Cataluña, Madrid y País Vasco»…

El atlas lo tenía copiado desde la 1.31 y además lo **confesaba por escrito**:
el `geo_fuente` de los doce decía «sitúa el sujeto, no el objeto». O sea la
ficha honesta y el mapa afirmando otra cosa — exactamente el patrón del
telescopio. Una ficha sincera no absuelve a un punto falso, porque quien mira el
mapa no está leyendo la ficha.

### Corregido

- `icts` · **once registros** pasan de `pais` (un punto en Madrid) a
  `autonomia` con geometría **`MultiPoint`**: un vértice por cada comunidad que
  el Anexo I nombra, en el punto de su capital autonómica según el Nomenclátor
  del IGN. `res` 11 · `nanbiosis` 7 · `marhis` 5 · `flota` 4 · `elecmi` 4 ·
  `micronanofabs` 3 · `redib` 3 · `r-lrb` 3 · `idisom` 2 · `rlasb` 2 · `iaba` 2.
- `icts:rediris` — **se queda en `pais`**, y es el único que lo merece: su
  localización dice «Todas las comunidades autónomas», que sí es un hecho de un
  Estado entero.

No se estrena vocabulario: `autonomia` existe desde la 1.31 y significa
exactamente esto. Las comunidades **se parsean del propio registro**, no de una
lista escrita en el guion, así que el reparto no puede desviarse de lo que la
capa publica — y `res` se prueba sola: su localización dice «Once comunidades
autónomas» y de los catorce nodos de su clave salen **once** distintas.

### Añadido

- `fuentes/2026-08-17_ign_ngbe-capitales-autonomicas.json` — captura del
  Nomenclátor con las siete capitales que faltaban (Palma, València, Mérida,
  Santiago de Compostela, Pamplona, Vitoria-Gasteiz y Santander). Las
  coordenadas **no se escriben en el guion**: se leen de esta captura archivada.
  Santander va por recuadro porque la consulta por etiqueta devuelve `0` en
  silencio — el fallo del que avisa la propia consulta de contraste, cazado aquí por
  seguir su doctrina.

### Lo que este arreglo NO hace, dicho sin adorno

**El punto de Madrid no desaparece.** Nueve de las once tienen sede allí de
verdad, así que la capital sigue acumulando registros — de trece a once. Lo que
cambia es que ahora es **cierto**: antes significaba «había que ponerlo en algún
sitio», ahora significa lo que dice el Anexo I. Y cada una aparece **además** en
las otras comunidades donde la fuente la sitúa.

El vértice sigue siendo la **capital**, no el laboratorio. Es lo que `autonomia`
significa y declara, y son entre 300 y 1.700 km menos de error.

### El agujero que el arreglo abría, tapado en el mismo commit

Tres controles contaban **rasgos** y no vértices, los tres nacidos en la 1.55, y
se habrían quedado ciegos justo donde más apilamiento hay: el aviso de §7.4, el
contador del visor y los vecinos «También en este emplazamiento». Pruebas
**67 → 68**, con un caso nuevo que lo prueba por construcción — un punto suelto y
una red repartida que comparte con él **solo uno** de sus dos vértices.

### Y una confesión: el contador del visor nunca había dibujado

Al ir a comprobar sobre el mapa vivo que el «11» de Madrid aparecía, no
aparecía. **La release `.82` anunció un contador que en producción no se veía, y
nadie lo miró.** El motivo: sus rasgos viven en una fuente propia y solo llevan
`n`, sin `slug`, así que el filtro general de las capas —«estar en la lista de
permitidos», que se compara por `slug`— los descartaba a todos, siempre. La capa
se añadía, pedía sus glifos y no pintaba nada.

Eran **27 puntos apilados de 9 capas** sin su número, no solo los de `icts`. Ya
se ve: «11» sobre Madrid, «2» sobre Almaraz. Y el número **se recalcula con el
filtro**, porque tiene que contar lo que se dibuja y no lo que existe:
comprobado poniendo el filtro en «latente», donde el 11 desaparece en vez de
quedarse mintiendo.

Esto se descubre **después** de cortar la etiqueta `datos-v2026.08.84`, y no la
mueve: `datos/` no cambia ni un byte, el defecto era del visor. Queda dicho aquí
para que el registro no herede la afirmación falsa de la `.82`.

### Huecos

- **Canarias tiene dos capitales por estatuto.** Se queda con la que la capa ya
  usaba y ya tenía archivada, Santa Cruz de Tenerife. Elegir la otra «porque el
  laboratorio está en Gran Canaria» sería el relleno por verosimilitud que
  prohíbe el principio 1: para el nodo canario de la RES el Anexo I dice
  «Canarias» y nada más.
- Ninguno de estos vértices es el laboratorio: son capitales. Situarlos de
  verdad pediría, para cada sede, un acto que la sitúe — la vía que sacó al
  IRAM 30m de Sevilla y al telescopio de Tenerife.
- Sigue sin localizar el informe del CSN de julio de 2026 sobre Almaraz, y sin
  leer los dos hallazgos pendientes del vigía.

---

## datos-v2026.08.83 — El vigía llevaba seis días en rojo, y tenía razón

Cierra la auditoría hecha en otra máquina: sus diez arreglos ya estaban en el
código y **aquí entra lo que faltaba en el papel**, más un dato que había
caducado en cuatro días. **Contrato 1.56.0.**

### Almaraz: la prórroga a 2030, que el atlas había predicho y no tenía

El vigía del BOE llevaba en rojo desde el 11 de agosto. **Su rojo
es su forma de hablar**, no una avería: así está diseñado. Entre sus
hallazgos:

> **Orden TED/864/2026, de 12 de agosto**, por la que se concede la renovación de
> la autorización de explotación de la Central Nuclear Almaraz, Unidades I y II.
> BOE del **14** de agosto.

La capa `nuclear` se había verificado el **13**. Un día antes.

Y la ficha ya decía exactamente qué esperar: *«La resolución del ministerio NO
consta: mientras no exista, lo autorizado sigue siendo el 1 de noviembre de
2027»*. Ya existe.

| | antes | ahora |
|---|---|---|
| Almaraz I | 2027-11-01 | **2030-06-08** |
| Almaraz II | 2028-10-31 | **2030-06-08** |

Lo dice su **dispositivo tercero** —«validez para ambas Unidades hasta el 8 de
junio de 2030, inclusive»— y no su preámbulo, que es donde está la trampa: el
preámbulo repite las fechas viejas y recoge lo que la central *pidió*. Su
dispositivo **primero revoca la Orden TED/773/2020**, que era justo la fuente que
esta capa citaba.

**Mover una fecha deja mentiras alrededor si no se miran.** Tres, aquí:

- Almaraz II decía tener «un año más de autorización» que su gemelo. Ya no: las
  dos expiran el mismo día.
- Almaraz I decía ser «el reactor» con la autorización más próxima a expirar de
  todo el parque. Sigue siéndolo —por siete semanas sobre Vandellós II— pero **ya
  no en singular**. El guion lo comprueba contra el propio fichero, así que si
  algún día otro reactor expira antes, para en vez de dejar la frase mintiendo.
- El **hueco `f4`** pedía dos documentos: la resolución y el informe del CSN. Se
  **estrecha**, no se cierra — la resolución entra archivada, el informe sigue sin
  localizar. Y la orden revocada **se conserva** como fuente, diciendo que lo
  está: es el acto bajo el que la central operó hasta agosto de 2026.

`verif` sigue en `parcial`: queda el otro hueco, el protocolo de Enresa.

### El manifiesto estrena esquema

Era **el único documento de `datos/` sin uno**, y se notó por la puerta de atrás:
`cadencia_revision_dias` viaja a un atributo `title` del visor y nada garantizaba
que fuera un número, así que la auditoría tuvo que escaparlo **por si acaso**. Un
«por si acaso» donde se escribe HTML es una deuda, no una defensa.

`manifest.schema.json` cierra tipos y valores, incluidos **cinco enums que solo
leía el código**:

- un `geometria: "puntoss"` no rompía nada visible: **dejaba de dibujar la capa,
  en silencio**;
- un dedazo en `ambito` relajaba el recuadro de plausibilidad de §7.4 al rango
  legal de WGS84, y dejaba pasar una coordenada en el Índico;
- uno en `registro` devolvía a una capa ilustrativa el aspecto de medida.

**Reparto explícito:** el esquema hace **tipos y valores**; la comprobación 8
sigue haciendo la **doctrina**. Por eso el esquema **no** exige `resumen` ni
`id` — fallar con «is a required property» no enseña nada, y la comprobación 8 sí
explica para qué sirve cada uno.

### Y la regla que ya se aplicaba sin estar escrita

§7.8: la **ruta de la página** de una capa es de este sitio — empieza por «/» y
**no por «//»**. Lo segundo cumple la regla al pie de la letra y es un dominio
ajeno con el protocolo omitido. Era el único hueco que no cerraba ninguna de las
dos barreras del atlas: `escapar` no mira a dónde apunta un enlace, y `urlSegura`
lo habría **aprobado**, porque resuelve contra el propio dominio y saca un
`https:` de buena fe.

Pruebas **65 → 67**, con un caso por agujero tapado.

### Huecos

- El informe del CSN de julio de 2026 sobre Almaraz sigue sin localizar.
- Los otros dos hallazgos del vigía quedan por leer: un convenio ENRESA-CSIC
  (BOE-A-2026-17700) y **un falso positivo** — una convocatoria de plaza del
  Ayuntamiento de Trillo, que despierta al emparejador por el nombre del pueblo.
- El esquema del manifiesto comprueba la forma de `pagina`, no que la página
  exista. Que la ruta lleve a algún sitio no lo mira nadie todavía.

---

## datos-v2026.08.82 — Trece registros en un punto, y ninguno lo decía

Arreglar la isla del Gran Telescopio Canarias lo hizo **desaparecer del mapa**:
al llevarlo a su paraje quedó en la coordenada exacta de `oocc` —está dentro de
ese observatorio— y un punto encima de otro se dibuja como uno.
**Contrato 1.55.0.**

### No era un caso suelto

| capa | puntos compartidos | registros | el peor |
|---|---|---|---|
| `icts` | 4 | 19 | **13** |
| `perte` | 8 | 21 | 6 |
| `red-sismica` | 5 | 10 | 2 |
| `residuos-radiactivos` | 3 | 6 | 2 |
| y cinco capas más | 7 | 14 | 2 |
| **total** | **27** | **70** | |

Trece registros de `icts` comparten el punto de Madrid: son los que el Mapa
sitúa «en todo el país». En el mapa eran **un solo círculo**.

### Lo que faltaba no era el mecanismo

El dossier ya sabía resolverlo: al abrir un registro muestra **«También en este
emplazamiento»** con sus vecinos pinchables. Lo que faltaba es que **nadie podía
saber que ahí había que pinchar**.

- **El visor dibuja el número** de registros que guarda cada punto. Va en una
  fuente aparte y no como propiedad de los registros: un campo `apilados`
  colado en las propiedades acabaría pintado como un dato más en la ficha, y no
  es un dato del registro sino del dibujo.
- **§7.4 avisa** con cuántos registros comparten cada coordenada, para que la
  cifra se lea entre tandas y no dependa de que alguien mire el mapa.

**Avisa y no bloquea, y no es rebaja:** no es un defecto del dato. `pais` y
`autonomia` son convenciones declaradas, y dos cosas pueden estar de verdad en
el mismo paraje — el telescopio está dentro del observatorio. Lo que se estaba
perdiendo era saberlo.

### Huecos

- **La convención `pais` sigue poniendo trece cosas en Madrid.** Ahora se ve que
  son trece, que es mejor que antes, pero un punto en la capital sigue
  afirmando algo que la fuente no dice. La salida honesta —que un registro de
  ámbito nacional no se dibuje como punto— es un cambio de esquema y de mapa
  que no toca hoy.
- El contador **no se pincha**: el clic sigue siendo del punto de debajo, que es
  el que abre la ficha y ofrece a sus vecinos.

---

## datos-v2026.08.81 — El telescopio se va a su isla

La release anterior dejó al **Gran Telescopio Canarias dibujado en Santa Cruz de
Tenerife**, a 163 km del telescopio y en otra isla, y lo defendió como
disciplina. **Contrato 1.54.0.**

### El razonamiento tenía un agujero

`autonomia` es la convención declarada para lo que el Mapa de ICTS solo sitúa
por comunidad autónoma. Pero **un punto en el mapa afirma**, y ese afirmaba la
isla equivocada. El mismo día, con el IRAM 30m, había escrito que estar en la
capital «era honesto y era inútil» — y lo moví. La convención no puede amparar un
punto que dice algo falso.

### Y al buscar de verdad, la fuente aparece

El **convenio de financiación publicado en el BOE** —Resolución de 18 de
noviembre de 2024, `BOE-A-2024-24663`— dice literalmente:

> «el diseño, especificaciones y las fases de la construcción del **Gran
> Telescopio Canarias en el Observatorio del Roque de los Muchachos (La
> Palma)**»

Y ese observatorio **sí** es topónimo del Nomenclátor: es el mismo punto que ya
sostenía a `oocc`, porque el telescopio está dentro.

| | antes | ahora |
|---|---|---|
| precisión | `autonomia` | **`paraje`** |
| punto | Santa Cruz de Tenerife | Observatorio del Roque de los Muchachos |
| municipio | — | **Garafía** |
| | | se mueve **162.689 m** |

El mismo convenio deja claro que la capital **no era ni siquiera una de sus tres
sedes**: las de nivel del mar son La Laguna (Tenerife) y Breña Baja (La Palma).

### La regla que queda escrita

Antes de conformarse con `autonomia` hay que **agotar la búsqueda del acto**. Una
búsqueda que se detiene en el gazetteer no la ha agotado: el Nomenclátor no tiene
topónimo del telescopio, y de ahí concluí que no había fuente. La había, en el
BOE, a una búsqueda de distancia.

### Lo que la misma pasada buscó y NO encontró

Se fue a buscar salida para los otros tres huecos declarados. Dos siguen
cerrados, y ahora con prueba en vez de suposición:

- **La zona del cielo protegido canario existe como geodato**: el IAC publica un
  KMZ con **24 polígonos** de la zona de Tenerife con visión directa desde La
  Palma. **No se puede usar:** su aviso legal prohíbe expresamente el uso
  comercial y alterar los contenidos, y no ofrece ninguna licencia de
  reutilización. Es el mismo muro que tumbó a TeleGeography.
- **Las servidumbres de Yebes e IRAM no tienen perímetro publicado.** El
  Ministerio publica la relación de instalaciones protegidas, no sus zonas. Y
  hay una razón mejor para no dibujar el círculo que «no hay fuente»: **el acto
  no impone un disco**. Impone distancias distintas según el elemento —1.000 m a
  una industria, 3.000 a un aerogenerador— y una regla de ángulo para la altura.
  Un círculo dibujaría una prohibición uniforme que no existe.
- **El recuento de máquinas de la RES sí es alcanzable**, pero leyendo las 17
  fichas de nodo una a una. La fuente lo dice; no lo dice de una vez. Queda
  apuntado como trabajo, no como imposible.

### Huecos

- **`gtc` y `oocc` comparten punto exacto.** No es un error: el BOE dice que el
  telescopio está EN ese observatorio, y fingir un desplazamiento sería inventar.
- Siguen **19 registros** situados por comunidad o por país. A cada uno le falta
  su acto, y ahora se sabe que puede existir.

---

## datos-v2026.08.80 — El Mapa dice catorce nodos, y la red lista diecisiete

Tercero y último de los enriquecimientos de `icts`, y el dato es que **dos
cuentas oficiales no cuadran**. **Contrato 1.53.0.**

Iba a desglosar las máquinas de la Red Española de Supercomputación. Al contarlas
apareció algo mejor.

| | dice | de cuándo |
|---|---|---|
| Anexo I del acuerdo del CPCTI | **14 nodos** | octubre de 2025 |
| la propia RES, en su prosa | **14 nodos** | agosto de 2026 |
| la propia RES, en su listado | **17 fichas de nodo** | agosto de 2026 |

Las diecisiete son las catorce del acuerdo, una a una, más **Magerit (UPM)**,
**Correfoc (UPF)** y **TalaIA (UIB)**. La red ha crecido y el número redondo se
ha quedado atrás **en los dos sitios a la vez**.

El listado completo, por máquina y centro: MareNostrum 5 (BSC), LaPalma (IAC),
Altamira (UC), Picasso (UMA), Tirant (UV), Agustina (BIFI), FinisterraeIII
(CESGA), Pirineus III (CSUC), Caléndula (SCAYLE), LUSITANIA III (COMPUTAEX),
Cibeles (UAM), Urederra (Nasertic), Xula y Turgalium (CIEMAT), Port d'Informació
Científica (PIC/UAB), Magerit (UPM), Correfoc (UPF) y TalaIA (UIB).

**Ojo al contar máquinas:** una de esas fichas nombra **dos** —Xula y Turgalium,
las dos en el CIEMAT—, así que los superordenadores son más que los nodos. Por
eso el atlas publica los dos recuentos de NODOS y no un recuento de máquinas que
la fuente no da cerrado.

### Añadido

- `nodos_del_mapa` (14, **confirmado** sobre el acuerdo, que es primaria) y
  `nodos_publicados` (17, **`parcial`** porque lo sostiene la web de la propia
  red, que es corporativa y R3 no deja que confirme nada).
- La clave que los nombra uno a uno.

**No se toca la geometría:** la ICTS es distribuida y su punto sigue en `pais`.

### Corregido

Los cuatro campos `proteccion_*` de la `.79` se declararon en §10 y **no
llegaron al esquema**: una tanda abortó a medias y no repetí esa mitad. El
esquema de `icts` no lleva `additionalProperties: false`, así que nada chistó.
Entran ahora, con los dos nuevos.

### Huecos

- **El recuento de máquinas queda sin publicar.** La fuente lista nodos, no
  máquinas, y una ficha nombra dos: contar 18 sería del atlas, no de la fuente.
- Los 17 son **lo que la red publica hoy**, no un acto: por eso van `parcial`.
  El Mapa se actualiza cada cuatro años y la red, cuando quiere.

---

## datos-v2026.08.79 — Una ley para el cielo, y un telescopio que se queda en la isla que no es

Segundo de los tres enriquecimientos de `icts`. Su mitad más útil es un hueco
dicho en voz alta. **Contrato 1.52.0.**

### Los Observatorios de Canarias tienen una ley para su cielo

Es **el único régimen de su clase en España**, y no protege un recinto: protege
**dos islas enteras**.

- **La Palma:** «la totalidad de la isla».
- **Tenerife:** la isla completa para estaciones radioeléctricas e industrias
  contaminantes, y «la parte que tiene visión directa desde la isla de La Palma»
  para el alumbrado exterior.
- Por encima de **1.500 m** de altitud no pueden instalarse en ninguna de las dos
  industrias, actividades o servicios potencialmente contaminadores de la
  atmósfera (art. 21).
- Quedan fuera del concepto las instalaciones a más de **15 km** en línea recta
  de los observatorios de La Palma y **25 km** de los de Tenerife, medidos en
  plano horizontal (art. 22.b).
- Y hay un **capítulo entero, el IV, para las rutas aéreas**: cuenta como
  interferencia la formación de nubes por condensación de los gases de escape de
  los aviones.

Como en la `.78`, **no se dibuja nada**: «la isla entera» no es una zona que
delimitar, y la «visión directa» no la delimita ningún acto.

### El Gran Telescopio Canarias está en la isla que no es, y se queda

El GTC está en el Roque de los Muchachos, en Garafía (La Palma). El atlas lo
pinta en **Santa Cruz de Tenerife — otra isla, a unos 165 km** — porque el Mapa
de ICTS sitúa por comunidad autónoma y su `geo_precision` es `autonomia`, que
significa exactamente eso.

**No se mueve, y esa es la decisión.** R9 reserva `paraje` a una fuente
primaria; el Nomenclátor del IGN **no tiene topónimo del telescopio** —se
consultó por tres etiquetas distintas y las tres respuestas archivadas dicen
`numberMatched: 0`—; y lo único que publica su posición es la web del propio
telescopio, que es **corporativa**. Lo que sí se puede hacer es **decirlo**, y el
registro estrena una clave que lo dice. Es la diferencia entre un dato pobre y
un dato pobre y callado.

### Lo que el validador cazó por el camino

La clave del GTC nació declarada `confirmado` sobre esa fuente corporativa, y
**R3 la paró en el primer intento**. Va como `parcial`, que es lo que la
doctrina permite. Y el guardián de `schema_version` que estrenó la `.75` cazó un
desfase real entre el manifiesto y el contrato en esta misma tanda.

### Añadido

- Cuatro campos en `oocc`: `proteccion_acto`,
  `proteccion_altitud_industrias_m`, `proteccion_radio_la_palma_km` y
  `proteccion_radio_tenerife_km`.
- El enriquecedor se vuelve **repetible**: antes añadía la fuente y la clave a
  ciegas, así que solo se podía correr una vez en la vida. Ahora reconoce lo que
  ya escribió y lo reescribe en vez de duplicarlo.

### Huecos

- **El GTC sigue en Tenerife.** Se arreglará el día que una fuente primaria lo
  sitúe; hasta entonces, su clave lo advierte.
- **Siguen 20 registros por comunidad o por país**, que es todo lo que el Mapa
  de ICTS da.
- Los radios de 15 y 25 km **no son el alcance de la protección**, que es la
  isla entera: son el límite más allá del cual una instalación deja de contar
  como contaminadora a estos efectos.

---

## datos-v2026.08.78 — El radiotelescopio estaba dibujado en Sevilla

El **IRAM 30m** es una antena de treinta metros en el pico Veleta, a 2.904 m de
altitud. El atlas lo pintaba en **Sevilla, a 233 km**. **Contrato 1.51.0.**

Y no era un descuido: el **Mapa de ICTS sitúa cada instalación por comunidad
autónoma y nada más**, así que la capa nació poniendo cada registro en el punto
de su capital y declarándolo `autonomia`. Honesto, y de poco servicio.

### Lo que lo arregla no es el Mapa

Dos de los radiotelescopios tienen algo que el Mapa no da: **un acto que los
protege por su posición** — y para poder protegerlos, tiene que decir dónde
están.

| | acto | precisión | se mueve |
|---|---|---|---|
| `iram-30m` | Orden ITC/1679/2009 | `autonomia` → **`exacta`** | **232.860 m** |
| `yebes` | Orden TDF/102/2025 | `paraje` → **`exacta`** | 166 m |

Son coordenadas de la resolución que autoriza la instalación, que es
literalmente lo que §6.6 admite como `exacta`. Cada orden deroga a la anterior:
la de Yebes a la Orden CTE/1444/2003, y la del IRAM a la Resolución de 10 de
marzo de 2006.

### Lo que NO se dibuja, y es lo que más importa

Las dos servidumbres se definen por **distancias desde un punto** —«a más de
1.000 metros», «a más de 3.000»— y **ninguna de las dos trae un perímetro**.

Dibujar círculos sería el atlas inventando geometría que su fuente no da. Las
distancias entran como **campos**:

- **Yebes:** por debajo de 1.000 m limita la altura de lo que se construya;
  1.000 m a industrias, líneas de alta tensión, plantas fotovoltaicas y
  ferrocarril electrificado; **3.000 m** a aeródromos, plantas solares,
  aerogeneradores y plantas de hidrógeno.
- **IRAM 30m:** 1.000 m a industrias, alta tensión y ferrocarril; de **1 a 5 km**
  a los transmisores, según su potencia y su banda.

### Añadido

- Una comprobación nueva: **el acto archivado tiene que seguir diciendo la
  coordenada que se publica** antes de tocar nada.
- Cuatro campos en §10, y **solo en los dos registros que tienen acto**:
  `altitud_m`, `servidumbre_acto`, `servidumbre_distancia_minima_m` y
  `servidumbre_distancia_mayor_m`.
- Una clave por registro contando de dónde sale su posición.

### Huecos

- **Siguen 21 registros situados por comunidad o por país.** Esto arregla dos,
  los dos que tienen acto propio; para el resto el Mapa es lo que hay.
- **La orden del IRAM da los segundos ENTEROS**, que sobre el terreno son unos
  30 m. Es `exacta` porque §6.6 mira de dónde sale la coordenada y no cuántos
  decimales trae, pero la clave del registro lo dice.
- `servidumbre_distancia_mayor_m` **no es un radio dibujable**: es la mayor
  separación que impone el acto, y en cada uno se aplica a cosas distintas.

---

## datos-v2026.08.77 — Seis filas vacías con un punto rojo

La `.76` publicó `reservas-estrategicas` con sus **seis claves en blanco**:
estaban escritas como `{titulo, texto}` cuando la página espera `{k, v}`. Se vio
en la página publicada. **Contrato 1.50.0.**

### Lo peor no es el fallo, es por qué nadie lo vio

§4.2 comprobaba las claves con R2 y R3 —que estén sostenidas por una fuente
primaria— pero **no que fueran claves**. Y el bucle que lo hace empieza así:

```python
if clave.get("verif") != "confirmado":
    continue
```

Equivocar las cuatro llaves a la vez quitaba también `verif`, así que la clave
**se saltaba entera**. Es la misma forma del agujero de la `.75`: el registro
más roto era el que menos aviso daba.

Ahora **BLOQUEA** si una clave no trae `k` y `v` con texto, y el mensaje dice
qué llaves trajo en su lugar. Pruebas **60 → 62**.

### Y una lección sobre `fecha_dato`

La portada del conjunto decía «diciembre de 2025» — la fecha del cierre de
existencias. Pero el documento habla a **dos fechas**, y la cifra que existe
para corregir —la obligación en vigor, 88 días y no 92— es de **junio de 2026**.
Estampar diciembre la hacía parecer vieja justo donde importa.

Se pone **la más reciente en la portada**, y las cifras de existencias llevan
**su fecha en el rótulo** (`Existencias de CORES (31/12/2025)`). Es la única
manera honesta de fechar campo a campo mientras el esquema del conjunto admita
una sola fecha para todo el documento.

### Huecos

- El esquema del conjunto sigue admitiendo **una sola `fecha_dato`**. Ponerla
  por campo sería lo correcto, y es un cambio de esquema que no toca hoy.
- La comprobación nueva exige que la clave **tenga texto**, no que el texto sea
  bueno. Eso sigue siendo criterio de quien la escribe.

---

## datos-v2026.08.76 — Los 92 días que todo el mundo repite no son los de hoy

Nace **`reservas-estrategicas`**, el tercer documento suelto de
`datos/conjuntos/`: los días de combustible que España guarda por ley.
**Contrato 1.49.0.**

Y nace corrigiendo la cifra que sale en toda la prensa.

### Dos distinciones que casi nadie hace

**Una · 92 días es el régimen, no lo vigente.** Es el artículo 2 del Real
Decreto 1716/2004. Pero la Memoria 2025 de CORES, publicada en junio de 2026,
dice que a su fecha la obligación es de **88 días** — 46 de la industria y 42 de
CORES. La rebaja viene del bloqueo del estrecho de Ormuz: el Consejo de
Ministros autorizó el 17 de marzo de 2026 liberar hasta **12,3 días**, los 11,5
millones de barriles con que España concurre a la mayor acción coordinada de la
Agencia Internacional de la Energía de su historia, y en una primera fase se
bajaron **4 días** a la industria. Los 8,3 restantes siguen sobre la mesa.

**Dos · obligación y existencias no son lo mismo.** La obligación es el suelo
que impone la ley; las existencias, lo que de hecho hay guardado:

| a 31/12/2025 | días |
|---|---|
| existencias de CORES | 43,1 |
| existencias de la industria | 63,2 |
| **total guardado** | **106,3** |
| obligación entonces | 92 |
| obligación hoy | 88 |

Cuando en julio de 2026 se lee que «España supera los 100 días», se habla de las
existencias y no de la obligación.

### Las tres obligaciones, no solo la del petróleo

- **Productos petrolíferos:** 92 días de régimen, repartidos 42 CORES / 50
  industria. El artículo 14 permite a los sujetos obligados pedir a CORES que
  amplíe las existencias constituidas a su favor hasta el 100 % de su obligación.
- **GLP:** 20 días, **íntegramente de la industria**. CORES no guarda GLP.
- **Gas natural:** desde la Orden TED/72/2023 **ya no es una cifra fija** — los
  objetivos europeos de llenado se convierten en días, y por eso **cambia a lo
  largo del año**: en 2025 fue de 23,4 días el 1 de febrero, 22,7 el 1 de mayo,
  27,4 el 1 de julio, 34,3 el 1 de septiembre y 38,6 el 1 de noviembre. CORES
  tampoco guarda gas, aunque la Ley 8/2015 dejó la puerta abierta.

### Por qué es conjunto y no capa

Esta vez lo dice la fuente con todas las letras. CORES reparte sus reservas en
**cinco zonas** —Norte, Centro, Sur, Levante y Canarias— y **ni una instalación**:
están **arrendadas** a empresas logísticas y refinerías, y se almacenan «de
manera indiferenciada», mezcladas con el producto que esas empresas mueven a
diario y rotando con él. Un punto en el mapa sería inventado.

La única excepción que la propia fuente señala es el **crudo**, que «se almacena
exclusivamente en las refinerías ubicadas en el territorio nacional» — las diez
de la capa `refinerias` — sin decir en cuáles ni cuánto.

### Lo que NO se interpreta

Los días de CORES y los de la industria **se suman**, porque la fuente los da en
la misma unidad. **Los volúmenes no**: CORES publica metros cúbicos y la
industria toneladas, y van los dos como vienen. Convertirlos pedía una densidad
por producto que la fuente no da.

Otra pareja que tampoco es la misma cosa: el **nivel físico** de las reservas de
CORES a cierre de 2025 era de 6,6 Mm³, y lo **computable** para la obligación,
5.648.140 m³.

### Y un dato que no sabía nadie fuera del sector

Tras el apagón peninsular del **28 de abril de 2025**, CORES puso reservas a
disposición del mercado **por primera vez en su historia**. La obligación bajó 3
días a la industria y 4 a CORES —solo en gasolinas y destilados medios— y se
restableció el 31 de mayo de 2025 la de CORES y el 1 de enero de 2026 la de la
industria.

### Huecos

- **Ni una instalación, y no por falta de búsqueda.** Están arrendadas y el
  producto se guarda mezclado; ni la fuente lo sabe registro a registro.
- **La obligación vigente se mueve.** Los 88 días son los de junio de 2026 y los
  8,3 días restantes podrían liberarse en cualquier momento. El campo va fechado
  y el conjunto lo dice; no hay serie porque CORES no publica una.
- **Las cifras de existencias son a 31/12/2025**, que es como la fuente las
  cierra. Las de la memoria son promedios de 2025 y no se mezclan con aquellas.
- El extractor lleva **catorce centinelas** sobre el PDF archivado: si CORES
  reescribe la memoria y una cifra cambia, el guion **para** en vez de publicar
  la de ayer.

---

## datos-v2026.08.75 — La capa más desprotegida era la que menos aviso daba

El atlas se había apuntado este agujero al construir `aeropuertos` y lo dejó
esperando su propia pasada. Es esta. **Contrato 1.48.0.**

Una capa que declara `categoria` **sin entrada en `vocabularios.json`**
desactivaba en silencio sus dos controles: §7.6 se saltaba el enum porque el
conjunto de valores admitidos salía vacío, y §9 no tenía color contra el que
cruzar. Justo al revés de lo que un validador debe hacer.

**Tres capas llevaban así desde el 2026-08-16**, con **819 registros y nueve
valores** sin que nada los mirara — y las tres pintándose con el gris de reserva
`#6E6B60`, indistinguibles entre sí sobre el mapa:

| capa | registros | valores |
|---|---|---|
| `red-carreteras` | 393 | siete clases de carretera |
| `red-sismica` | 303 | `estacion_sismica` |
| `red-geodesica` | 123 | `gnss_permanente` |

### Añadido

- La validación · §7.6 **BLOQUEA** la capa que usa `categoria` y no tiene entrada
  en el vocabulario. Bloquea y no avisa —que es lo que decía el apunte— por
  simetría: un valor suelto fuera del vocabulario ya bloqueaba, así que una capa
  entera fuera no puede costar menos.
- La validación · §7.6 comprueba la **forma del valor**: `[a-z0-9_]`, como el
  color ya tenía la suya desde la 1.33. Un valor de enum no es prosa — viaja a
  una clave de estilo del mapa y a una URL de filtro.
- Las **tres entradas del vocabulario**, con sus nueve valores, etiquetas,
  definiciones y colores. Pruebas **53 → 60**.

### Corregido

`autovía` era el **único de los 99 valores del atlas** fuera de `[a-z0-9_]`, y
no lo escribió nadie: lo fabricaba un `.lower().replace(" ", "_")` sobre el
rótulo de la fuente. Arreglado en el extractor (`sin_tildes`) y en los 113
registros — **sin tocar la prosa**, que conserva su tilde donde debe. Sobrevivió
porque su capa era justamente una de las tres que nada miraba.

### La decisión de mapa que estaba sin tomar

Los siete valores de `red-carreteras` van en **rampa por capacidad** —de la
autopista de peaje a la carretera convencional— y no en orden alfabético, con
`clase_mixta` **fuera de la rampa**, en un gris de la misma familia: no es un
escalón, es la constancia de que el catálogo reparte esa carretera en tramos de
clases distintas (74 de las 393).

Es la rampa más larga del atlas —siete valores donde ninguna otra capa pasa de
cuatro—, así que antes de elegir se midió la paleta entera. Dos cosas salieron
de ahí:

- **El atlas reutiliza colores entre capas a propósito**: ocho parejas idénticas
  y una mediana de ΔE 5,8 al vecino más cercano de otra capa. Lo que hay que
  cuidar es el escalón DENTRO de una capa, no la unicidad global — que era el
  prejuicio con el que empecé.
- **Dentro de una capa, lo más justo que conviven hoy son ΔE 11,5.** Seis
  escalones ordenados no caben ahí: los contiguos quedan en **10-13**. Se acepta
  porque en una rampa secuencial lo que se confunde son las clases **vecinas**,
  que es donde el error cuesta menos — a dos escalones ya hay ΔE 22, y la
  distinción que un mapa tiene que decir de un vistazo, gran capacidad contra
  convencional, queda a **ΔE 54**.

`red-sismica` se pinta en violeta y no en verde por una razón de mapa: en verde
quedaba a ΔE 6 de los montes catalogados, y son puntos que se posan sobre esos
polígonos.

### Huecos

- La comprobación nueva exige que la entrada **exista**, no que sus etiquetas y
  definiciones sean buenas. Eso sigue siendo criterio de quien las escribe.
- Los colores se eligen por distancia perceptual (ΔE76 sobre CIELab), que es una
  aproximación: no modela ni el grosor de la línea ni la base del mapa, y una
  línea fina se distingue peor que un polígono del mismo color.

---

## datos-v2026.08.74 — Lo que separa un pellizco de una estrella es el signo, no los metros

La `.73` puso a §7.4 a mirar si un anillo se cruza. La comprobación era buena;
**el criterio con el que conté lo que encontró, falso**. Escribí que los cruces
del atlas son «pellizcos de decenas de metros, herencia de la simplificación o
de la propia fuente», y que el anillo mal ordenado se delata por la **magnitud**
del cruce. Medido de verdad, las tres cosas fallan. **Contrato 1.47.0.**

**Ningún dato cambia.** Los 123 avisos son los mismos hechos, mejor contados.

### Uno · No eran 118

El validador **imprimía** 118 porque escribe una línea por anillo y saltaba los
de más de 900 vértices. Lo que hay son **123 anillos y 271 cruces**.

El tope se justificaba por coste, y el coste era de la implementación: comparar
todos los lados contra todos. Una **rejilla sobre sus cajas** barre el atlas
entero en **1,6 s** frente a **19 s**, y coincide **exactamente** con la fuerza
bruta en los 14.588 anillos donde ambas miran — 118 = 118, cero discrepancias.
Así que el tope no compraba nada: quitarlo sale **doce veces más barato** y ve
**cinco anillos** que llevaban un día escondidos, uno de ellos con un trozo
contado del revés.

Y no era un riesgo futuro, como decía la entrada anterior. El atlas tiene **dieciséis** anillos
por encima de 900 vértices ahora mismo, en cuatro capas. `puertos` llega a
**9.011**.

### Dos · No son «herencia de la fuente». Los fabrica el atlas

El anillo de la zona de servicio de **Palma**, reconstruido desde el WFS
archivado:

| | vértices | cruces | superficie |
|---|---|---|---|
| como llega de Puertos del Estado | 4.954 | **0** | 105,59 ha |
| solo redondeado a 5 decimales (§4) | 4.516 | 3, de 37-40 m | 105,56 ha |
| como lo publica el atlas | 1.156 | el grande | 105,49 ha |

Lo que hay entre la segunda fila y la tercera es **Douglas-Peucker a 2 m**, del
propio atlas — como el registro ya declaraba en su `geo_fuente` desde el primer
día. Y el reparto no admite excepción:

| | anillos con cruce | con un trozo del revés |
|---|---|---|
| provincias y montes *(generaliza el atlas, ~200 m)* | 21 | **18** |
| puertos *(generaliza el atlas, 2 m)* | 28 | **4** |
| red eléctrica *(generaliza el atlas, 25 m)* | 10 | **1** |
| eólicos, solares y minerales *(«no se simplifica»)* | 43 | **0** |

Los **41** anillos que cuentan algo del revés están **todos** en capas que el
atlas generaliza. Las tres que declaran que el contorno es el dato tienen
**cero**: sus cruces los pone el redondeo, y son estrangulamientos.

### Tres · Lo que distingue un defecto de un artefacto es el signo

Un cruce parte el anillo en dos lóbulos. **Si giran igual**, el anillo se
estrangula: encierra lo que debe, la superficie es correcta y lo que falla es la
forma — **82 de los 123**. **Si giran al revés**, un trozo se cuenta restando y
el recinto publicado deja de ser el del papel — **41**.

Los metros no lo distinguen, y con el criterio de la `.73` los dos casos mayores
se leían al revés:

- **Palma**, 79 m con los lados separados por 207 vértices: «mal ordenado» según
  aquella regla. Es un estrangulamiento, y su superficie es la buena.
- **Lugo**, 713 m entre lados contiguos: «mal ordenado» también. Es un artefacto
  del **0,005 %**.

### Añadido

- La validación · §7.4 **BLOQUEA** el trozo contado del revés que pasa a la vez
  del **1 % del recinto** y de **media hectárea**, y avisa en todo lo demás. El
  aviso dice ahora si el anillo está **estrangulado** o **del revés**, y cuántas
  hectáreas van mal contadas.
- La validación · §7.8 comprueba que el `schema_version` del manifiesto es el del
  contrato. La `.73` subió el contrato a 1.46 y dejó el manifiesto en 1.45, así
  que la biblioteca lleva un día anunciando una versión que ya no rige.
- Dos casos de prueba donde había uno: el anillo del revés bloquea y el
  anillo estrangulado avisa. Más la prueba de la guardia del
  manifiesto. La batería pasa de **51 a 53**.

### Por qué esos dos números, que están medidos contra los dos extremos

| | deformación | superficie |
|---|---|---|
| los 12 polígonos rotos de `zonas-defensa` en la `.71` | 5,8 % – 85 % | 2,2 – 14.674 ha |
| lo vivo hoy que pasa el suelo de media hectárea | **0,038 %** | hasta 44,6 ha |
| lo vivo hoy con deformación alta | 48 % – 64 % | **0,003 – 0,005 ha** |

Las dos puertas hacen falta porque cada extremo se escapa por una. **La regla
habría parado la release `.71`** con sus doce anillos rotos, la estrella del
Retín entre ellos —3.390 ha, 53,8 %—, que tuvo que ver una persona mirando el
mapa. Y no bloquea nada de lo vivo, con **26 veces** de margen en el porcentaje
y **166** en las hectáreas.

El error se mide contra la **suma de los dos lóbulos**, nunca contra el área
firmada del anillo. Lo enseñó el caso de prueba de la `.73` al pasar por la regla
nueva: en una pajarita simétrica los lóbulos se anulan, el área sale cero y
**293.265 ha del revés pasaban como «0,000 %»**.

### Huecos

- **Los 123 cruces siguen ahí**, ahora contados y clasificados. Quitarlos pide
  rehacer la generalización **conservando topología**, que es otra obra: hoy el
  atlas simplifica cada anillo por su cuenta y sin mirar si el resultado sigue
  siendo simple.
- La comprobación mira **anillos**, no polígonos: dos anillos distintos que se
  solapen, o un hueco que se salga de su exterior, no los ve nadie.
- El error en hectáreas es **aproximado**: se calcula sobre una proyección
  local, buena para decidir si algo pasa del 1 % y de media hectárea, no para
  publicarla como superficie.

---

## datos-v2026.08.73 — Que lo mire el validador y no una persona

La `.72` arregló dos polígonos rotos. Esta arregla **por qué nadie los vio**:
§7.4 comprobaba el **sentido** de cada anillo y no que el anillo fuera
**simple**, así que 135 polígonos pasaron el contrato entero con dos dibujando
estrellas. **Contrato 1.46.0.**

### Añadido

- La validación · **§7.4 · el anillo que se cruza a sí mismo**. RFC 7946 lo
  prohíbe, por la razón obvia: un anillo que se cruza no delimita nada. El aviso
  imprime **los metros del cruce y a cuántos vértices están los lados**.
- Su prueba, `aviso-74-anillo-que-se-cruza.geojson`. La batería pasa de **50 a
  51**.

### Por qué AVISA y no bloquea, que estaba medido antes de decidirlo

Se barrieron **las once capas con polígonos** del atlas. Hay cruces en **siete**,
y al medirlos resulta que **no son el mismo fallo**:

| | cruce típico | lados separados por |
|---|---|---|
| El de `zonas-defensa` (la estrella) | **4.000 m** | **12 vértices** |
| `generacion-electrica-provincia` y `montes-catalogo` | 417 m | 2-3 vértices |
| `puertos` | 39 m | 2 vértices |
| `parques-eolicos`, `plantas-solares`, `red-electrica` | 45-70 m | 2 vértices |

Los del atlas son **pellizcos**: un lado que roza al de al lado tras la
simplificación, o que ya venía así de la fuente. Sobre una provincia de miles de
kilómetros cuadrados es una centésima del contorno. Bloquear por eso pararía el
CI sin que nadie pueda arreglarlo — hay que rehacer la generalización con
topología, y eso es otra obra.

El anillo **mal ordenado**, en cambio, se delata por la **magnitud**. Por eso el
aviso no dice «se cruza» y calla: dice **cuánto** y **dónde**, que son los dos
números con los que se distingue un pellizco de una estrella.

### Dos afinados, para que el aviso no mienta

- **Cruces por debajo de 25 m: ignorados.** Las coordenadas se guardan a cinco
  decimales (≈1 m), y dos lados cortísimos que casi se tocan pueden salir
  cruzados sin que el perímetro lo esté. Distinguirlo recuperó cuatro perímetros
  buenos en `zonas-defensa`.
- **Anillos de más de 900 vértices: no se comprueban.** El coste es cuadrático, y
  esas fronteras vienen del IGN, no de una transcripción. Van contados aparte.

### Huecos

- **118 avisos vivos**, en siete capas. No son mentiras del dato: son pellizcos
  de topología que quedan **dichos en voz alta** en cada corrida del CI.
  Arreglarlos de verdad exige una generalización que conserve la topología, y
  eso no entra aquí.
- **Los anillos de más de 900 vértices no se miran.** Si un día una capa
  transcribe a mano una frontera de esa talla, esta comprobación no la cubre.

---

## datos-v2026.08.72 — Un anillo que se cruza a sí mismo no delimita nada

Corrige la geometría de **`zonas-defensa`**, que salió mal en la `.71`. La capa
baja de **135 zonas a 120** y de 92 actos a 72, y lo que se va **no es dato
perdido: era dibujo falso**.

### Qué se veía, y qué era

Sobre el mapa, dos formas imposibles: una **estrella de rayos** de cincuenta
kilómetros en la sierra del Retín y un **pincho de noventa y ocho kilómetros**
que bajaba de El Teleno hasta Miranda de Duero. Ninguna de las dos era un
perímetro. Detrás había **cuatro fallos distintos**, y los cuatro son míos por
no haber mirado las formas antes de publicar.

1. **Tablas fundidas.** La orden de «El Teleno» publica **ocho parcelas
   seguidas** —zona de caída, A-3, A-7, A-10…— separadas por rótulos de pocas
   palabras. El corte por distancia en el texto las unía en un solo polígono.
   Ahora se corta también **cuando entre dos puntos aparece una palabra** que no
   sea mobiliario de tabla (el datum, el huso, la banda, que algunos actos
   repiten en cada fila).
2. **Numeraciones que se reinician.** Otros actos encadenan tablas bajo un
   rótulo hecho solo de mobiliario («Denominación punto X Y»), y ahí no hay
   palabra que delate el corte. Se corta también **cuando el acto vuelve a
   numerar desde el principio**: que renumere es el propio acto diciendo dónde
   acaba un perímetro.
3. **Anillos que se cruzan a sí mismos.** Quedan **29**, y son los que producían
   la estrella. No es que el acto esté mal: es que **el orden en que sus
   vértices aparecen en el texto no es el orden del anillo** —tablas a dos
   columnas, tablas partidas por un salto de página, numeraciones que el BOE
   aplana al publicar—. **No se reordenan**: inventar el orden sería dibujar un
   perímetro que nadie ha publicado. Se descartan y se dice cuántos. Con
   tolerancia para los cruces **micro**, por debajo de 25 m, que son ruido del
   redondeo y no del orden: distinguirlos recupera cuatro perímetros buenos.
4. **Erratas de coordenada.** **Dos**. La orden de «El Teleno» imprime una Y de
   **4600525** donde las otras cuatro de su tabla rondan 4699000 — cien
   kilómetros de diferencia en un dígito. Tampoco se corrige: enmendar una
   coordenada es inventarla. Se descarta el perímetro y se cuenta.

### Cómo queda

- **120 zonas** de **72 actos**: 63 de interés para la Defensa Nacional, 50
  zonas de seguridad próximas y 7 lejanas. **5.132 vértices**, **59.874
  hectáreas**, **0,82 MB**.
- Los descartes van todos contados en el conjunto y en la ficha de procedencia:
  29 anillos que se cruzan, 14 sin huso que encaje, 5 degenerados, 4 con varios
  husos posibles, 3 correcciones aplicadas al acto que corrigen, 2 con errata de
  coordenada y 2 sustituidos por un acto posterior.

### La lección, que no es sobre Defensa

**El validador no mira las formas.** Comprueba el sentido del anillo (§7.4) y no
que el anillo sea simple, así que 135 polígonos pasaron el contrato con dos de
ellos dibujando estrellas. Las comprobaciones que ahora deciden qué se publica
—anillo simple, vértice fugado, superficie mínima— viven en la construcción de esta
capa; **si vuelve a hacer falta en otra, su sitio es la validación común**, y entonces
será una regla del contrato y no una manía de un guion.

### Huecos

- **La capa publica menos que antes y sabe más**: de los 97 actos con
  coordenadas legibles, **25 no dan ni un perímetro utilizable**. La mayoría, por
  el orden de sus vértices.
- Lo anterior **no se puede arreglar leyendo mejor**: haría falta la tabla
  original con su maquetación, y el BOE publica el texto ya aplanado.

---

## datos-v2026.08.71 — El anillo que la Defensa dibuja sobre el suelo de otros

Entra **`zonas-defensa`**: los **135 perímetros** que la Ley 8/1975 traza
alrededor de instalaciones militares y que limitan lo que un particular puede
hacer **con su propio terreno**. Reconstruidos **vértice a vértice** desde los
actos del BOE que los crean, porque no existe el fichero.

Es la capa que llevaba parada desde que se dibujó el horizonte, esperando una
decisión que no era técnica.

### Añadido

- `zonas-defensa` — **135 zonas de 92 actos**, con **10.539 vértices** y
  **180.034 hectáreas**. Tres figuras: **68** zonas de interés para la Defensa
  Nacional (la propiedad militar, por real decreto), **58** zonas de seguridad
  próximas y **9** lejanas (las franjas de alrededor, por orden ministerial).
  Pesa **1,43 MB**.
- Un conjunto con el alcance del barrido, para que se pueda medir de cuánto es
  esta parte.

### Qué se registra, y qué no

El **régimen**, no la guarnición: qué acto creó cada perímetro, qué figura es,
desde cuándo y cuánto ocupa. **Ni una palabra** de misión, dotación, medios ni
vulnerabilidades — la misma doctrina con la que `bases-eeuu` registra el
convenio y no lo que hay dentro.

Todo lo que la capa publica **lo publicó antes el Estado en su boletín oficial**.
Lo que hace el atlas es juntarlo y situarlo: hoy esos perímetros viven repartidos
en decenas de BOE sueltos y solo los conoce quien tropieza con el suyo.

### No existe el fichero oficial, y la vía se agotó puerta por puerta

El ministerio anuncia una capa —«Zonas de uso prioritario para la Defensa
Nacional», del CEDEX— y no hay manera de bajarla:

1. Su **WMS** responde con una **excepción .NET**
   (`System.NullReferenceException`) — el **mismo servidor y el mismo fallo** que
   ya dejó fuera al PRTR y al inventario de montes. **Tercera vez.**
2. El **GeoServer** que hay detrás (`gis.miteco.gob.es`) no contesta desde fuera.
3. El **ZIP** que anuncia `datos.gob.es` da **404**.
4. La **API OGC** del propio ministerio publica treinta colecciones y ninguna es
   esta.

Y aunque funcionara, **no sería esta capa**: nace del plan de ordenación del
espacio **marítimo**. La excepción queda archivada como prueba.

### El barrido, y de cuánto es esta parte

Búsqueda por frase exacta en el título del BOE: «zona de seguridad» da **803**
actos, **768** del ramo de Defensa —**598 señalamientos**—; «interés para la
Defensa Nacional» da **76**, con **58 declaraciones**. De esos **826** actos,
**97 publican coordenadas** legibles por máquina y **92 verifican**.

Los que no, casi todos son **de los años ochenta** —417 de los 768— y el BOE
**solo los conserva escaneados**: su XML viene con el cuerpo vacío. No es que no
tengan perímetro; es que no hay texto que leer.

### Tres comprobaciones deciden qué se publica

1. **El huso no se cree, se deduce.** Casi ningún acto anterior a 2018 dice en
   qué huso UTM están sus coordenadas. Se prueban los cinco de España y se exige
   que **exactamente uno** deje el polígono dentro de la provincia que el acto
   nombra. **Catorce perímetros no lo consiguen y no se publican.**
2. **Y cuando el acto lo dice, tampoco se cree.** Dos actos declaran un huso que
   llevaría su polígono a cientos de kilómetros: la **Orden 371/2000**
   (Torregorda, Cádiz) dice «huso 30» y es el **29**; el **RD 237/2018** (Sant
   Climent Sescebes, Girona) dice «huso 30» y es el **31**.
3. **Las correcciones de errores se aplican, no se publican al lado.** La Orden
   DEF/182/2024 imprime una X de **siete cifras** donde una coordenada UTM tiene
   seis; su corrección la arregla. Sin aplicarla salían tres «Conde de Humanes»,
   uno de ellos imposible.

### La vigencia era el trabajo duro, y lo fue

**El BOE no analiza estas órdenes.** Su bloque de referencias posteriores está
**vacío** incluso cuando el propio texto dice «queda sin efecto la Orden X». El
grafo se levanta de dos maneras, y hacen falta las dos: leyendo las
**derogaciones de la prosa** de cada acto, y resolviendo por **identidad** —una
instalación no puede tener dos veces la misma figura viva, así que cuando dos
actos la señalan, manda el nuevo—. La segunda existe porque los títulos dicen
«se suprime la zona de seguridad vigente y se señala nueva zona» **sin citar el
número** del acto anterior.

### Huecos

- **La capa no dice cuántas zonas hay en España**, y no puede. Publica las que
  verifican de los actos con texto legible, y son una parte. El grueso de lo que
  falta son los actos de los ochenta, solo escaneados.
- **Falta la tercera figura de la Ley 8/1975**: la zona de acceso restringido a
  la propiedad por parte de extranjeros, que se delimita por otro camino.
- **La transformación ED50 → ETRS89** de los actos anteriores a 2008 se hace con
  **tres parámetros**, no con la rejilla NTv2 del IGN. Deja un resto de orden
  métrico, invisible en una franja de cientos de metros pero real, y va dicho en
  cada ficha que lo usa.
- **R4, quinta vez.** Que el Estado no publique un fichero de estas zonas no es
  una falta de evidencia de cada registro —la evidencia de cada uno es su acto, y
  está entera—. El límite es **de la capa** y vive en `fuentes/PROCEDENCIA.md`.

---

## datos-v2026.08.70 — El Estado las cuenta y no las nombra

Entra **`no-proliferacion-adm`**, el segundo documento suelto de
`datos/conjuntos/` (§4.2): los **recuentos de instalaciones sensibles** que el
Estado publica de sí mismo en la **Estrategia Nacional contra la Proliferación
de Armas de Destrucción Masiva** —acordada por el Consejo de Seguridad Nacional
el 16 de diciembre de 2025— **sin identificar ni una sola**.

### Añadido

- `no-proliferacion-adm` (§4.2) — **89 laboratorios NBS-3** (57 de investigación
  y salud humana, 27 de sanidad animal, 5 de sanidad vegetal), **ningún NBS-4** y
  tres previstos; **131 instalaciones químicas** con actividades de declaración
  obligatoria y **53 operadores comerciales**; **1.259 instalaciones
  radiactivas** (2 de primera categoría, 925 de segunda, 332 de tercera); y
  **7 reactores en operación**.

### Por qué es un conjunto y no una capa

Ninguna de esas cifras tiene coordenada, y **buscarles una sería lo contrario de
lo que este atlas hace**. El documento cuenta y no identifica: no es un descuido,
es la forma en que un Estado habla de esto en un boletín oficial. Intentar
«completarlo» buscando empresas sería exactamente el relleno por verosimilitud
que el primer principio prohíbe.

La única instalación que el texto nombra **todavía no existe**: uno de los tres
laboratorios NBS-4 previstos irá al Instituto de Salud Carlos III.

Y no entra ni una palabra sobre medidas de protección, vulnerabilidades o
procedimientos —el documento las trata largamente— por la misma doctrina con la
que `bases-eeuu` registra el régimen y no la guarnición.

### Dos cruces con lo que el atlas ya publicaba

1. **Cuadra.** «Hay 7 reactores en operación», dice la Estrategia. La capa
   `nuclear` publica exactamente 7, levantada de sus propias fuentes y sin
   conocer este documento. La construcción lo comprueba y **para si dejan de
   coincidir**.
2. **Y cierra un hueco declarado.** La Estrategia afirma que todas las centrales
   en operación tienen ya su almacén de combustible gastado en el emplazamiento
   «**salvo una**», y no dice cuál. Se deduce sin margen: de los cinco
   emplazamientos con reactor en marcha, `residuos-radiactivos` sitúa cuatro
   almacenes en operación —2002, 2013, 2018 y 2021— y para **Vandellós II** solo
   un ATI-100 **en desarrollo**. La que falta es esa. Y de paso, la frase —de
   diciembre de 2025— responde por el otro lado al hueco que esa capa llevaba
   declarado: su entrada en servicio, que el 7.º PGRR preveía para 2026, **aún no
   se había producido**.

### Corregido

- `manifest.json` · `_estado` — decía «**VEINTIOCHO capas**» cuando ya eran
  treinta y ocho, y lo dijo durante diez releases. Deja de dar el recuento: vive
  en la lista, que es donde se puede contar. La propia nota se lo había avisado a
  sí misma, a propósito de otra frase que envejeció aparte del dato.
- El extractor del documento — el separador de miles volvió a comerse las comas de
  la prosa, el mismo fallo que se documentó en `montes-catalogo`. El ayudante
  de los miles está ahora también aquí, con la nota de que ha pasado dos veces.
- **La página de conjunto sabía de gas y no lo sabía.** Con un solo conjunto
  publicado, la página de conjunto escribía « GWh» detrás de toda cifra y
  enlazaba siempre «el parte del gas de esa fecha»: los 89 laboratorios NBS-3
  salieron pintados como **«89,0 GWh»**. La unidad se deduce ahora del sufijo del
  campo (`_gwh`, `_ha`, `_km`…), que es la convención del atlas y no una lista de
  campos conocidos; el entero se pinta entero; y el enlace al parte solo aparece
  cuando las capas señaladas tienen serie mensual, que es la razón por la que ese
  parte existe. De paso, los rótulos: «vip iberico» pasa a **VIP Ibérico**.

### Huecos

- **Ninguna de las instalaciones contadas está identificada**, y no consta a este
  atlas ningún registro público que lo haga. Es el hueco central de este
  documento y va declarado como tal.
- **Los recuentos son de diciembre de 2025** y el documento no dice cada cuánto
  se revisan. No hay serie: hay una foto.
- **Un conjunto no tiene ficha en `fuentes/PROCEDENCIA.md`**, igual que el
  primero: §7.9 comprueba capas, y una ficha con nombre de capa inexistente
  bloquearía el CI. Su procedencia vive en sus propias `fuentes`, con la copia
  archivada.

---

## datos-v2026.08.69 — Seis territorios sin una sola referencia nacional

Entra **`csur`**: los **46 hospitales** donde el Estado concentra la atención
sanitaria de altísima especialización — **418 designaciones** para **94
patologías o procedimientos**. Y, en el mismo mapa, **los seis territorios que
no tienen ninguna**.

Es la **primera capa del atlas leída de un PDF**, y no por gusto.

### Añadido

- `csur` — **46 centros**, con sus designaciones, la lista de patologías de cada
  uno, sus fechas de designación, sus camas y su dependencia funcional. Pesa
  **0,38 MB**.
- **Un conjunto** (§4.2) con los totales nacionales, el reparto entre patologías
  catalogadas y designadas, y el cuadre contra la portada del documento.
- Un lector de PDF propio, **sin dependencias**, con posiciones y
  reglas de tabla. Sirve para PDF de texto; **no hay OCR y no lo habrá**.

### Por qué se cruzó la raya del PDF

El atlas venía esquivándolo: cuando una fuente solo se publicaba así, o había
otra distribución o la capa se paraba. Aquí **no hay otra**. El Ministerio de
Sanidad publica este registro en **25 páginas de tablas en PDF** y en ningún
otro sitio: ni CSV, ni Excel, ni servicio, ni conjunto en `datos.gob.es`. La
alternativa era teclear **420 filas a mano**, que es exactamente lo que este
atlas no hace.

El lector reconstruye cada tabla desde las **reglas que la dibujan** —los
rectángulos finos que Word pinta por celda—, no adivinando columnas por
sangrías. Tres mordeduras del formato costaron una pasada cada una, y quedan
resueltas para la próxima fuente que llegue así:

1. **Un espacio puede no ser un carácter.** Word coloca algunas palabras por
   posición y no escribe el espacio: hay que **medir** el avance de cada cadena
   con los anchos reales de la fuente. Sin medir sale «Hospital U.La Paz».
2. **Y al revés.** Cuando ajusta el interletraje parte una palabra en varios
   fragmentos; meter un espacio entre cada uno da «H ospital» y «Comple x o».
3. **Un tipo de letra distinto es texto invisible.** El apóstrofo tipográfico de
   «Vall d'Hebrón» obligó a Word a cambiar de fuente, y esa fuente escribe en
   códigos propios que solo el `/ToUnicode` traduce. Sin resolverlo esa celda
   sale **vacía y sin dar error**, que es el peor fallo posible.

### Tres números en la portada, y solo dos cuadran

El documento dice de sí mismo: «**420 CSUR en 53 centros para 94 patologías o
procedimientos**».

- Las **94 patologías** salen exactas. Y se comprueban contra el **otro**
  documento del ministerio: el catálogo lista **116**, de las que 94 tienen
  centro, **11 tienen los criterios retirados** y **11 están declaradas «No
  CSUR»** —diez de ellas «pendientes de proceso de designación», sin fecha—. La
  extracción **exige que toda catalogada sin designación diga por qué**, o para la
  construcción.
- Los **53 centros** salen exactos **y no son 53 hospitales**: son 53 **unidades
  designadas**, y trece de ellas son **alianzas de dos centros**. Hospitales
  distintos hay **46**.
- Las **420 filas rayadas** están, pero **dos de ellas son la continuación de
  una fila partida por un salto de página**. Designaciones hay **418**. Las dos
  se comprueban una a una —han de continuar una fila completa—, y por eso la
  diferencia se afirma en vez de sospecharse.

### El hallazgo

Trece territorios tienen CSUR y **seis no tienen ninguno**: **Aragón, Canarias,
Extremadura, La Rioja, Ceuta y Melilla**. Dentro de los trece, **siete
hospitales reúnen más de la mitad** de las participaciones: Vall d'Hebrón (54),
La Paz (43), Sant Joan de Déu (42), Virgen del Rocío (34), La Fe (32), Clínic
(28) y Gregorio Marañón (25).

Concentrar es el objetivo declarado del programa —el RD 1302/2006 existe para
eso—, y a la vez la Ley 16/2003 promete el acceso «en condiciones de igualdad
efectiva y con independencia del lugar del territorio nacional». Las dos cosas
son ciertas a la vez, y solo se ven juntas en un mapa.

### Por qué el nombre del centro va en tabla declarada

Por tres cosas medidas sobre el documento, no supuestas:

- El **Vall d'Hebrón** aparece escrito de **seis maneras**.
- **«Hospital U. Reina Sofía»** (Córdoba) y **«Hospital General U. Reina Sofía»**
  (Murcia) son dos hospitales a quinientos kilómetros que una palabra separa.
- Partir las alianzas por « y » rompe **«Ramón y Cajal»** y **«y Politécnico La
  Fe»**.

Son **66 grafías → 53 unidades → 46 centros**, declaradas una a una.

### La coordenada no sale del domicilio, y hay un caso que lo prueba

El primer intento fue geocodificar la dirección del **Catálogo Nacional de
Hospitales**. Ese registro le da al **Ramón y Cajal** la calle de Ayala 38, en el
centro de Madrid, y el hospital está en la carretera de Colmenar Viejo, **a 3,7
km**.

El punto sale del **topónimo del propio centro** en **CartoCiudad** (IGN), cuya
capa de centros sanitarios los nombra igual que el CNH. El identificador va
**fijado y comprobado uno a uno**: buscar por nombre devuelve helipuertos,
aparcamientos, bancos de sangre, sedes secundarias y, en dos casos, **otro
hospital**. Precisión `paraje`, que es lo que §6.6 concede a un topónimo de
nomenclátor oficial.

### Dos rarezas de la fuente, dichas y no corregidas

- La lista sigue llamando **«Complejo Hospitalario de Toledo»** a un complejo que
  ya no existe: la unidad está en el Hospital Universitario de Toledo, de 2021.
- El Catálogo Nacional de Hospitales escribe **«Otras Entidades u o rganismos
  públicos»**, con la palabra partida. `dependencia` lo copia literal, que es lo
  que permite volver a la fila y encontrarla.

### Huecos

- **Actividad y resultados: nada.** El ministerio no publica cuántos pacientes
  atiende cada CSUR, con qué medios ni con qué resultados. La capa dice **dónde**
  y **para qué**, y calla lo demás.
- **Por qué un centro y no otro, tampoco.** Los informes del Comité de
  Designación no son públicos.
- **Las once patologías catalogadas y declaradas «No CSUR»** no traen fecha
  prevista de designación. Diez dicen «pendiente de proceso de designación» y no
  dicen desde cuándo.
- **El SEM sale sin camas ni dependencia funcional.** Es el único CSUR que no es
  un hospital —es la empresa pública del transporte sanitario urgente de
  Cataluña, referencia nacional para el transporte en ECMO neonatal y pediátrico
  desde julio de 2025— y el Catálogo Nacional de Hospitales solo cataloga
  hospitales.
- **R4, cuarta vez.** Nada de lo anterior va como fuente `hueco` por ficha: no es
  una falta de evidencia de estos 46 registros, es un límite **de la capa**, y
  vive en `fuentes/PROCEDENCIA.md`.

---

## datos-v2026.08.68 — El Estado no sabe con qué acto declaró su bosque

Entra **`montes-catalogo`**: el **Catálogo de Montes de Utilidad Pública** por
provincia — **11.178 montes y 7.231.178 hectáreas** de dominio público forestal.
Y, en el mismo mapa, **en cuántos consta el acto que los declaró**.

Esta capa **no son los montes**. Iba a serlo, y las cuentas lo impidieron; lo
que salió al buscar la salida vale más que los polígonos.

### Añadido

- `montes-catalogo` — **52 provincias**, con sus montes, sus recintos, su
  superficie y el porcentaje que trae la resolución que lo declaró y el
  deslinde. Pesa **5,9 MB**.
- **Un conjunto** (§4.2) con el total nacional y el cuadre contra la cifra
  oficial.

### Por qué no son los polígonos

Medido: el subconjunto de utilidad pública son **3.265.353 vértices**, y ni
simplificando a **111 m** baja de **760.911** — cuando la capa mayor del atlas
tiene **114.299**. A esa tolerancia desaparecen los **884 recintos de 0,01 ha**
que la propia fuente trae. Publicado saldría entre **63 y 113 MB**: más que las
37 capas del atlas juntas.

Y no hay versión ligera, agotado puerta por puerta: el bucket del IEPNB listado
**entero** (140 objetos) tiene cuatro ficheros de montes y **ninguno
generalizado**; la página del MITECO sirve tres, nacionales y sin partir por
provincia; `datos.gob.es` tiene **una sola distribución**, el XML del metadato; y
el **WMS y el WFS revientan con una excepción .NET**, el mismo servidor que dejó
fuera al PRTR.

### El cuadre, que es lo que sostiene el filtro

| | medido por el atlas | publicado por el ministerio |
|---|---|---|
| montes | **11.178** | 11.359 |
| hectáreas | **7.231.178** | «más de 7,18 millones» |

Concuerdan al **1,6 %** y al **0,7 %**. Eso valida el filtro y hace algo más
útil: **permite fechar una cifra oficial que se publica sin fecha**. La del
atlas se mide sobre un fichero cuya fecha consta, el **25-06-2025**.

### El hallazgo

El campo que dice **qué resolución declaró cada monte** de utilidad pública:

| comunidad | recintos | con su acto |
|---|---|---|
| **La Rioja** | 927 | **100 %** |
| **País Vasco** | 1.876 | **97,3 %** |
| Castilla y León | 8.512 | 0,0 % |
| Aragón | 8.243 | 0,0 % |
| …las otras trece | | **0,0 %** |

No es un campo que suela faltar: es **binario**. Dos administraciones lo
rellenaron y quince no. El Catálogo nace del **Real Decreto de 22 de enero de
1862**, sigue vivo, y **el Estado no puede decir con qué acto declaró el 93 % de
su propio dominio público forestal**. El deslinde va por el mismo camino: consta
en el **11,7 %**, con Cuenca al 74 % y León, Huesca, Navarra, Burgos, Asturias,
Lleida y Soria a cero.

Por eso el mapa se pinta **por el estado del expediente** y no por la superficie:
la superficie está en el campo y se lee en la ficha, pero lo que un mapa puede
decir de un vistazo, y nadie más dice, es dónde consta el papel y dónde no.

### R4, por tercera vez

No hay fuente `hueco` por ficha, a conciencia. Que el campo del acto esté vacío
**no es una falta de evidencia del registro**: es un hecho que la fuente
confirma, contado recinto a recinto, y es justo lo que la capa publica. Un hueco
por ficha habría degradado 46 provincias a `parcial` por afirmar algo que sí está
comprobado. **El límite es de la capa**, y vive en `PROCEDENCIA.md`.

### La geometría se comprueba contra su propio archivo

Sale de `generacion-electrica-provincia` a propósito —dos corocromáticas del
mismo territorio tienen que **encajar vértice a vértice**—, y la derivación se
verifica: el recuadro de cada provincia se contrasta con el que archiva el
fichero del IGN, que existe justo para eso y lo dice así: «si no cae, la
generalización movió territorio y eso es un fallo, no un detalle».

### Huecos

- **Ceuta y Melilla salen con cero**, y su ficha dice que el cero de una
  recopilación no prueba una ausencia.
- **No se publican los recintos**: quien necesite el contorno de un monte
  concreto tiene que ir a la fuente.
- **La mitad del inventario queda fuera** por no ser de utilidad pública —29.126
  recintos «Sin datos» y 6.793 montes privados—: esta capa habla solo del
  Catálogo.
- El portal del IEPNB anuncia «actualizado el 30-04-2026» y los tres ficheros
  del servidor son del **25-06-2025**. Manda el fichero, que es lo que se lee.

### Tres rarezas de la fuente, dichas y no corregidas

Escribe **«Caceres» sin tilde**; mezcla «Bizkaia» y «Gipuzkoa» en euskera con
«Alicante», «Castellón» y «Valencia» en castellano; y en Canarias y Baleares
**pone islas donde debería poner provincias**. Son 54 valores para 50 provincias
con montes, y la equivalencia va declarada una a una.

---

## datos-v2026.08.67 — Dónde se cruza la frontera exterior

Entra **`frontera-schengen`**: los **81 pasos** por los que se cruza legalmente
la frontera exterior del espacio Schengen en España — **43 aéreos, 34 marítimos
y 4 terrestres**. No es una lista de instalaciones: es dónde empieza y acaba el
territorio en el que se circula sin control.

### Añadido

- `frontera-schengen` — **81 pasos fronterizos**, cada uno con el nombre
  literal con que España lo notifica, su medio y su enlace comprobado al
  registro que el atlas ya publica.

### El censo no estaba donde parecía

El artículo 39 del Código de Fronteras Schengen obliga a cada Estado a
**notificar sus pasos a la Comisión**, y la Comisión los publica de **dos
maneras que no son la misma**: las **actualizaciones del DOUE son
incrementales** —cada una toca solo a los Estados que han notificado cambios—,
y el **Anexo 4 del manual de guardias de fronteras es el consolidado**. Tomar
una actualización por la lista entera habría dado un censo cojo. Se usa el
consolidado, edición de **10-08-2026**, y se cita además la actualización del
DOUE de 2014 **en español**, que es la que fija cómo España nombra cada paso.

### Y el acto nacional no existe como lista

España habilita sus pasos **uno por uno, por orden ministerial**
—Lleida-Alguaire en 2011, Badajoz y Burgos en 2014, Logroño-Agoncillo en 2018,
Región de Murcia en 2019—, y el **Código de Fronteras que compila el propio
BOE, 421 páginas, no nombra ni un puesto**. Comprobado buscándolo dentro. O sea
que **no hay segunda fuente española que cruzar**, y la capa lo dice en vez de
insinuar una doble verificación que no existe.

*De paso queda corregida una nota vieja:* el acto nacional que `PLAN.md` daba
por bueno, la **Orden PRA/1267/2017**, no es — trata de «instrucciones para la
tramitación de convenios».

### Lo que solo esta capa puede decir

**72 de los 81 se enlazan con un registro que el atlas ya publica**, y el enlace
**se comprueba**: si alguno dejara de existir, la capa no se construye. De ahí
salen tres hechos que ninguna de las capas por separado enseñaba:

- Las **cinco bases aéreas abiertas al tráfico civil** y **Ciudad Real** —las que
  la release anterior publicó como el hueco entre el atlas y el mapa de Aena—
  **son pasos fronterizos**. La lista es la prueba operativa del preámbulo del
  RD 1150/2011, que quiso desligar el tráfico internacional de la calificación
  de interés general.
- **Cuatro pasos aéreos son aeropuertos autonómicos** —Castellón,
  Lleida-Alguaire, Región de Murcia y Teruel—, que no están calificados de
  interés general y entran al atlas por esta puerta.
- **Diez puertos de interés general no son frontera exterior.**

### Tres precisiones geográficas, a propósito

`exacta` los 43 aéreos, `paraje` los 33 marítimos con topónimo y `municipio`
los terrestres, porque el paso real está en un punto del término —el Tarajal,
Beni Enzar, la Farga de Moles— que **la fuente no sitúa**. Publicarlos como si
fueran la coordenada de una garita sería fingir precisión.

### Una trampa nueva del nomenclátor del IGN

**El parámetro `q=` no filtra.** Devuelve los veinte primeros rasgos de la
colección entera con cara de resultado: un barrido que se fiara habría situado
los 34 puertos de España en **Cabo Ortegal**. El que filtra es `etiqueta=`,
exacto. Y `nameunit=` no encuentra los municipios con apóstrofo —«la Seu
d'Urgell» devuelve cero en todas sus formas—; hay que barrer la provincia.

### Huecos

- **Un registro va `parcial`**: la lista dice «San Sebastián» a secas y hay dos
  puertos de interés general que podrían serlo, **Pasaia** y **San Sebastián de
  La Gomera**. Se publica Pasaia razonando desde la regla que el propio
  documento aplica sin excepción —todo puerto canario cuyo nombre no diga su
  isla la lleva entre paréntesis— y desde que la lista nombra ciudades y no
  puertos. Es un razonamiento, no una certeza, y va con su hueco declarado.
- La capa dice **dónde se cruza, no cómo**: sin horarios de apertura, sin tipo
  de tráfico admitido, sin los puestos de control sanitario o veterinario, que
  son otro régimen.
- Las **excepciones que el propio Código prevé** —navegación de recreo, pesca
  costera, marinos en tránsito— no se cartografían.
- **Sin segunda fuente**: el censo se sostiene en un solo documento, primario.

### Anotado, no cambiado

Tres puertos y una villa de `puertos` llevan un **guion blando (U+00AD) donde va
la tilde** —«Ferrol y su ri‑a», «Sevilla y su ri‑a», «Vigo y su ri‑a»,
«Vilagarci‑a»—, así que se muestran sin tilde y no casan con una búsqueda por
«ría». Lo destapó el cruce de esta capa. **Viene de Puertos del Estado** (22
veces en el ZIP archivado) y `puertos` lo copia verbatim, que es su doctrina: se
deja como está y se anota.

---

## datos-v2026.08.66 — Los aeropuertos, y por qué no son una lista

Entra **`aeropuertos`**: los **43 aeropuertos y helipuertos calificados de
interés general** y las **5 bases aéreas abiertas al tráfico civil**. Es el
hermano que le faltaba a `puertos` y el complemento de la carretera y el
ferrocarril — pero sobre todo es la capa que enseña que **un perímetro jurídico
no siempre cabe en una lista**.

### Añadido

- `aeropuertos` — **48 aeródromos**, cada uno con el acto que lo pone ahí, su
  indicador de lugar OACI, su designador IATA cuando lo tiene, y su régimen:
  34 de interés general, 8 de utilización conjunta civil-militar, 1 de interés
  general no estatal y 5 bases aéreas abiertas al tráfico civil.

### El perímetro lo dan tres actos, no uno

Fue el trabajo del día. **RD 1150/2011**, cuyo anexo trae 42 entradas — y
cuidado, porque el rótulo del anexo **no** dice «los calificados de interés
general» sino «gestionados por *Aena Aeropuertos, S.A.*»: quien califica es su
disposición adicional primera. **RD 1167/1995**, artículo 1, en su redacción
vigente desde el **26-07-2025**, que nombra los 8 aeródromos de utilización
conjunta y las 5 bases abiertas al tráfico civil. Y la **Orden FOM/1510/2006**,
que sostiene a **Ciudad Real**, el único de titularidad no estatal — el caso que
el RD de 2011 preserva sin nombrarlo, y cuya cadena hay que leer entera porque
el BOE no la enlaza: la Orden FOM/3237/2002, de título idéntico, quedó **sin
efecto** por el apartado Cuarto de la de 2006.

### Por qué salen 48 y el mapa comercial de Aena enseña otra cosa

Porque esas **5 bases aéreas son exactamente el hueco**, y se publican para que
se vea, en vez de dejar la capa pareciendo incompleta. Una base abierta al
tráfico civil sigue siendo militar: su jefe lo es «de todo el conjunto» y Aena
solo designa un delegado para la zona civil. Por eso no está en el anexo de 2011
y por eso no puede llamarse aeropuerto de interés general.

**San Javier estaba en esa lista y salió en 2025**, tras cerrarse al tráfico
civil el 14-01-2019. La capa lo refleja porque lee la redacción vigente, no por
criterio propio: la relación está viva.

### Dos cuadres, comprobados y no supuestos

Los **ocho** paréntesis «(aeródromo utilización conjunta)» del anexo de 2011 son
los **ocho** que nombra el artículo 1.2 del RD de 1995. Dos actos independientes
diciendo lo mismo es lo que sostiene ese `confirmado`, y el guion lo exige: si un
día dejan de coincidir, la capa no se construye.

Y la **corrección de errores** de 26-11-2011 se aplica **leyéndola**. Ahí saltó
una rareza que merece quedar escrita: la corrección **se cita a sí misma mal** —
dice «donde dice: *(aeródromo **de** utilización conjunta)*» y la página
corregida no lleva ese «de»—, así que un reemplazo literal no habría encontrado
nada y la corrección se habría aplicado en silencio.

### El emparejamiento con la geometría, declarado uno a uno

La geometría son los nodos de aeródromo del IGN (producto **IGR-RT**), que caen
dentro de unos treinta metros del punto de referencia que publica el AIP. Casar
por **nombre no vale**: siete casillas salían ambiguas y una se llevó por delante
una suposición — **Logroño-Agoncillo tiene dos nodos**, el aeropuerto `LERJ` y un
helipuerto `LELO` a novecientos metros, y el helipuerto gana por parecido de
nombre. Lo mismo con Ceuta, Melilla, Tenerife Norte y Santiago.

De propina, el archivo del IGN trae **once códigos OACI repetidos** entre
aeródromos privados y helipuertos de hospital. Ninguno es de los 48 — y eso el
guion lo comprueba en lugar de creérselo.

### Comprobación publicada

Los 48 puntos caen dentro de la provincia que su nombre implica, contrastados
contra los polígonos provinciales que el atlas ya publica. Única excepción, y es
del instrumento: el helipuerto de Ceuta queda 348 m fuera **porque ese contorno
está generalizado a 33 vértices**.

### Huecos

- La capa publica el **régimen, no la operación**: no dice si un aeródromo tiene
  tráfico comercial regular. Huesca, Burgos, Córdoba y Son Bonet están
  calificados y apenas lo tienen — calificación jurídica y tráfico son cosas
  distintas.
- **Sin pistas, sin superficie y sin servidumbres aeronáuticas**: el atlas
  publica un punto por aeródromo, no su recinto. Al contrario que `puertos`,
  aquí no hay un acto que delimite zona de servicio en la misma fuente.
- La calificación de **Ciudad Real** es de **alcance acotado** por su propio
  acto, «a los exclusivos efectos de reservar al Estado la gestión directa de los
  servicios aeronáuticos y aeroportuarios estatales». Va citado verbatim en su
  ficha, no resumido.
- **Los helipuertos de interés general son solo dos** (Algeciras y Ceuta), los
  que nombra el anexo. La red de helipuertos españoles es mucho mayor y no es
  competencia estatal.

---

## datos-v2026.08.65 — Las carreteras del Estado, por fin

Entra **`red-carreteras`**: las **393 carreteras de titularidad estatal**,
**26.564 km** de los 165.756 que tiene España, por donde va el **53 % del tráfico
total y el 65,7 % del pesado**. Era **el hueco conceptual mayor del atlas** — con
puertos, ferrocarril y nodos transeuropeos publicados, la carretera estaba
entera vacía, y no se había mencionado ni una vez en toda la historia del
proyecto.

### Añadido

- `red-carreteras` — **393 carreteras** agrupadas de los **7.072 tramos** del
  catálogo, con su clase, sus provincias y su longitud. Fuente: archivos de
  geometrías del Catálogo de la RCE 2025 del ministerio.

### La fuente que parecía y no era

Las tres investigaciones que propusieron esta capa apuntaron al producto *Redes
de Transporte* del CNIG. **Ése no vale, y se midió**: su WFS INSPIRE declara
**943.679** entidades `Road` y **9.879.089** `RoadLink` — el viario entero del
país, calles urbanas incluidas. Lo que hace red a esta red es la **titularidad
estatal**, y quien la fija es el catálogo del ministerio.

### La geometría se simplifica, y se dice

1.420.848 vértices no caben en una página web. Douglas-Peucker a **10 m** deja el
8 % — y **la tolerancia se afina sola** carretera a carretera hasta bajar del 5 %
de desvío, porque a 10 m fijos **noventa carreteras cortas** se pasaban: quitar
10 m de un ramal de 400 m es proporcionalmente brutal. De ahí `geo_precision:
generalizada` y su `geo_fuente` diciendo qué se simplificó, como exige R9.

También hubo que reproyectar: el catálogo viene en **ETRS89/UTM 30N**, no en
latitud y longitud. La conversión se hace en la construcción de la capa **sin añadir
dependencias** —tiene una sola a propósito— y está comprobada contra puntos
conocidos: el meridiano central del huso sale a `-3,00000` exacto.

### Por qué la longitud no se llama `longitud_km`

Porque ese nombre lo mira **R10**, que compara lo declarado con lo dibujado, y
aquí serían **dos medidas distintas bajo el mismo nombre**: la del catálogo es la
**administrativa, por puntos kilométricos**; la del trazado es la del eje.

No es un rodeo a la regla, y se comprobó: **lo que R10 persigue no ocurre**. En
el conjunto de la red las dos concuerdan al **-0,34 %** (26.563,5 km declarados
contra 26.473,3 dibujados) y la mediana por clase no pasa del 1,5 %. Donde se
separan es en **ramales de menos de tres kilómetros**, y esa diferencia **la trae
la fuente**: se mantiene aunque no se simplifique nada. Cada registro lo declara
en una clave.

### Cuadre publicado

La suma de las 393 da **26.563,5 km** contra los **26.564** que publica el
ministerio. Y el catálogo cuadra consigo mismo: su geometría sin tocar mide
26.542,8 km, un 0,08 % de su propio campo de longitud.

### Huecos

- **Canarias no está**, y no es un fallo: su red de carreteras no es de
  titularidad estatal. La capa cubre península, Ceuta y Melilla, que es
  exactamente lo que el catálogo del Estado contiene.

## datos-v2026.08.64 — Dónde se escuchan los terremotos, y desde cuándo

Entra **`red-sismica`**: las **303 estaciones** de la Red Sísmica Nacional, con
sus coordenadas, su altitud y **las dos fechas que importan** — desde cuándo
vigila cada punto y, en 76 casos, hasta cuándo lo vigiló.

Ayer esta capa se dio por bloqueada por licencia. **No lo estaba**, y la
respuesta estaba publicada en dos sitios; el segundo, dentro de este mismo
repositorio.

### Añadido

- `red-sismica` — **303 estaciones: 227 vigentes y 76 históricas**, con fecha de
  instalación, fecha de baja donde la hay, elevación y coordenadas de la propia
  estación.

### Dónde estaba el dato

El portal del IGN publica un buscador que da **solo código y nombre**, sin
coordenadas, y `www.ign.es/fdsnws/…` responde **404** — de ahí la conclusión
apresurada de que el IGN no sirve FDSN. **Sí lo sirve, en otro dominio**:
`fdsnws.sismologia.ign.es`. Se llega preguntándole al **enrutador de EIDA**, la
federación europea, que sabe qué nodo atiende cada red. Una sola petición
devuelve las 303 con todo.

### La licencia no es la de las demás capas del IGN

Y confundirlas habría sido reclamar un permiso que no se tiene. La Orden
FOM/2807/2015 —de donde sale «Obra derivada de *producto* CC-BY 4.0 ign.es»—
cubre **solo los productos geográficos de la tabla del SCNE, y ahí no hay
ninguno sísmico**.

Lo que sí aplica es el **régimen general de la Ley 37/2007**, que el propio
aviso legal del IGN desarrolla: reutilización permitida citando la fuente y la
fecha, sin desnaturalizar el sentido ni insinuar patrocinio, **sin ShareAlike ni
NonCommercial**. Es el mismo régimen sobre el que este atlas ya publicaba seis
capas. La atribución es **«Instituto Geográfico Nacional»**, y no la fórmula del
SCNE — el error de las quince atribuciones mal puestas, esta vez por exceso.

### Las bajas son la mitad del valor

76 estaciones tienen fecha de cierre y se publican como `historico` en vez de
esconderse. **Una red de vigilancia sin su historia no dice cuándo se dejó de
mirar un sitio**, que es justo lo que interesa saber.

Y hay una consecuencia práctica: **el portal web va atrasado respecto al
servicio**. Su pestaña de estaciones activas todavía lista cuatro que el FDSN da
de baja en 2026 — E1601, E1602, E1603 y EBAJ. Manda el servicio, que es lo que
el IGN mantiene para la federación internacional.

### Huecos

Los dos son **de la capa, no de cada registro**, así que se declaran en la
procedencia y no en las 303 fichas: meterlos ahí las degradaría a
«parcialmente verificadas» por algo que no dicen.

- **Qué mide cada estación.** La consulta a nivel de estación no devuelve los
  canales, así que la capa no distingue banda ancha, corto periodo o
  acelerógrafo.
- **La red `ES` no es toda la sismología del IGN.** Las antárticas (Decepción,
  Livingston) y algunas volcánicas que el portal sí lista **no están en esta
  red**: van con otro código, y ninguna estación de `ES` cae en el hemisferio
  sur.

La capa va como ámbito `mundo` por **una sola estación**: `VPORT`, en Vila do
Porto (Santa María, Azores). El ámbito describe la cobertura, no la mayoría.

## datos-v2026.08.63 — El hueco que no existía

La `.62` publicó las 123 estaciones geodésicas **con un hueco declarado**: la
tabla de coordenadas del IGN no trae columna de estado, así que la posición
estaba confirmada y **que la estación siguiera emitiendo, no**. Los 123
registros salieron como «parcialmente verificados» por eso.

Buscando más hondo, el hueco **no existía**. El mismo IGN sirve los **datos
crudos por día** en `datos-geodesia.ign.es/ERGNSS/diario_30s/AAAA/AAAAMMDD/`, un
fichero RINEX por estación. Aparecer ahí no es un indicio de que la estación
funcione: **es el fichero que produjo ese día**.

### Corregido

- `red-geodesica` — los **123 registros pasan de `parcial` a `confirmado`**.
  Comprobado sobre **cuatro días** repartidos de julio y agosto de 2026: las 123
  emiten. Y el extractor **revienta** si una estación publicada no entregó
  fichero, para que la afirmación no pueda envejecer en silencio.

### El hueco de verdad era otro

**La red emite más de lo que sitúa.** El día de prueba entregaron datos **126**
estaciones y la tabla de coordenadas publica **123**: `JADR`, `MOTI` y `TAR2`
emiten y el IGN no publica su posición, así que el atlas **no puede situarlas y
no se las inventa**.

Va declarado en la procedencia y **no en las 123 fichas**, porque es un hueco del
**perímetro de la capa** y no de cada registro: meterlo ahí las habría degradado
a `parcial` por algo que no dicen. Es la lección de la primera pasada aplicada al
revés.

### Una confirmación de propina

Contando las cuatro cosas que el IGN publica de esta red —**132** fichas de
estación, **117** *site logs* en formato IGS, **123** filas con coordenadas y
**126** emitiendo— sale que las **9 que tienen ficha y no coordenadas tampoco
emiten**. Eso confirma que la tabla de coordenadas **es la red vigente**, y no
una lista cualquiera que alguien dejó de actualizar.

### Huecos

- **La sismología apareció entera, y la para la licencia.** El enrutador EIDA
  revela que el IGN **sí sirve FDSN**, en `fdsnws.sismologia.ign.es` —otro
  dominio, no el del portal, donde da 404—: **303 estaciones con coordenadas,
  elevación y fechas de alta y baja** (227 activas, 76 dadas de baja), en una
  sola petición. Todo lo que la capa necesitaba. **Pero la política de datos del
  IGN se declara aplicable a «los productos y servicios de datos geográficos
  definidos en» la Orden FOM/2807/2015, y la sismología no está entre ellos**: no
  hay producto sísmico en la tabla del SCNE ni conjunto en `datos.gob.es`. Darlo
  por CC-BY 4.0 «porque también es del IGN» sería repetir el error de las quince
  atribuciones mal puestas. Queda como **consulta al CNIG**, con el buzón que la
  propia licencia da para esto.

## datos-v2026.08.62 — Los 123 puntos desde los que se mide España

Entra **`red-geodesica`**: las estaciones permanentes GNSS de la Red Geodésica
Nacional (ERGNSS), que son las que materializan el sistema de referencia oficial
del país. Es la infraestructura más discreta del atlas y la que sostiene a todas
las demás — **cuando una ficha de este atlas dice «41,7002 N», lo dice respecto
a estos puntos**.

Es la primera capa del tercer horizonte, y se eligió por ser la de menos
incógnitas: **la fuente ES la geometría**. El IGN publica las coordenadas ya
calculadas, así que por una vez no hay que geocodificar nada ni pedirle un
topónimo al Nomenclátor.

### Añadido

- `red-geodesica` — **123 estaciones**, con su código, su altitud elipsoidal y
  su marco de referencia. Fuente: tabla de coordenadas ERGNSS del IGN, archivada
  el día de citarla.

### Son DOS marcos de referencia, y se dice

El IGN no sirve una tabla, sirve **dos**: la Península, Baleares, Ceuta y
Melilla en **ETRS89** (107 estaciones) y las Canarias en **REGCAN95** (16).
**Ninguno de los dos es WGS84**, que es lo que exige RFC 7946 para un GeoJSON.
La diferencia es de decímetros y no mueve un píxel en el mapa, pero cada
registro **declara el suyo** en `marco_referencia` en vez de callarlo. Es la
lección ya aprendida con los datums sin declarar de los Planes Directores de los
PENEX: mezclar marcos sin decirlo sale barato hasta el día que no.

### La fórmula de atribución, buscada hasta la fuente

La licencia del IGN no concede a secas: **fija la forma del reconocimiento**, y
remite a la tabla de productos del SCNE para el identificador exacto. Allí la
Red ERGNSS figura con identificador **`ERGNSS`**, fecha **2025** y atribución
`ign.es`, de donde sale la obligación literal: **«Obra derivada de ERGNSS 2025
CC-BY 4.0 ign.es»**. Es el **cuarto producto** del IGN con fórmula propia en el
atlas, junto a BTN, NGBE y BDLJE. No se dedujo por parecido con las otras tres:
se abrió la tabla, que es donde ya se aprendió la lección de las quince
atribuciones mal puestas.

### Huecos

- **Los 123 registros declaran el mismo, y por eso van `parcial`**: la tabla del
  IGN **no publica estado**. No hay columna de vigencia ni fechas de alta o baja,
  así que **la posición está confirmada y que la estación siga en servicio hoy no
  lo está**. Declarar el hueco y marcarlos «confirmado» a la vez es exactamente
  lo que R4 prohíbe — y el validador lo dijo antes que nadie.
- **La Red Sísmica Nacional se queda fuera**, aunque venía en la misma propuesta.
  Su listado publica **solo código y nombre**; las coordenadas viven detrás de un
  POST por estación y el IGN **no sirve FDSN** (`/fdsnws/station/1/query`
  responde 404). Es otra capa y otro trabajo, y decirlo es más honesto que
  publicar 140 puntos geocodificados por su nombre.

Queda además desmentido, por si vuelve a proponerse: las estaciones sísmicas
**dadas de baja no están mezcladas** con las activas — viven en su propia
pestaña.

## datos-v2026.08.61 — Por dónde entró el gas, mes a mes desde 2004

**El atlas contesta una pregunta que hasta hoy no podía**: por dónde entró el
gas a España en un mes cualquiera de los últimos veintidós años. Necesitaba las
tres piezas que se han ido construyendo estos días —las siete plantas de GNL,
las seis conexiones con el exterior y el conjunto de las entradas sin lugar— y
con cualquiera de menos, **la suma salía corta y no lo decía**.

### Lo que faltaba, medido

De los 269 meses del libro de CORES, el atlas solo podía reconstruir **140**.
Los **129 anteriores a octubre de 2014** salían por debajo, hasta un **15,7 %**.
Faltaba el gas de **Badajoz, Tuy, Irún y Larrau**.

### Se revierte una decisión de la `.41`, y por qué

Aquella release **no publicó** las películas de esas cuatro conexiones porque
desde 2014 están planas en cero, y cuatro líneas muertas mienten. **El motivo
era bueno y era ciego a la mitad de la historia**: hasta esa fecha llevaban gas
de verdad — Larrau, 3.852 GWh en su último parte.

Lo que ha cambiado no es el criterio: es que **ahora existe el conjunto**, así
que el acantilado tiene dónde explicarse. El gas no desapareció en 2014, se fue
a los VIP, y los VIP ya se publican. Publicar las cuatro deja de ser dibujar una
mentira y pasa a ser **la única forma de que el histórico cuadre**.

### Añadido

- **Las cuatro películas que faltaban**, y con ellas `series_completas` en
  `gas-interconexiones`: **6 registros, 6 películas**. Es la capa que hizo nacer
  ese campo en la 1.42 justamente por ser el caso contrario.
- **`/gas/`, `/gas/AAAA-MM/` y `/gas/partes/`** — 271 páginas. Cada parte
  reparte el gas en sus **cuatro caminos** y dice **qué parte está situada en el
  mapa y qué parte no**, que es lo único que este atlas puede decir y la
  estadística no.
- **El cuadre del sistema entero, permanente.** Cada hoja ya se comprobaba contra su total, y eso **no dice nada
  del sistema** — las plantas podían cuadrar, las conexiones también, y el total
  nacional seguir corto porque faltaba un camino. Ahora **los 269 meses cuadran**
  con los totales del propio libro.

### Una asimetría de la fuente, publicada tal cual

Badajoz, Irún y Tuy siguen trayendo un **cero** cada mes hasta hoy; **Larrau
deja de traer nada** —celda en blanco— después de septiembre de 2014. Por eso su
`fecha_dato` es de entonces: es la última vez que la estadística dijo algo de
él, y fingir otra cosa sería inventarse doce años.

### La mordedura, y quién la vio

**Los slugs son únicos dentro de una capa, no entre capas.** El parte enlazaba
cada entrada a su ficha por el slug, y hay un «sagunto» y un «cartagena» en los
nodos de la red transeuropea y un «barcelona» en la generación por provincia:
tres de las seis mayores entradas apuntaban a la ficha equivocada — **la planta
de Saggas llevaba a un nodo portuario**. Un enlace que se veía perfectamente
correcto. La clave lleva ahora la capa, y **se vio mirando la página**, no el
código.

### Huecos

- **Es el gas que ENTRA, no el que se consume.** Lo que sale del sistema no lo
  publica esta estadística por punto y aquí no se deduce.
- **La cadencia es mensual y con desfase**: el último parte es de mayo.

## datos-v2026.08.60 — Un conjunto también tiene historia

**La release de ayer le dio casa a las cifras sin lugar y las dejó sin pasado.**
El conjunto de las entradas de gas publicaba su foto —tres cifras de mayo de
2026— y detrás había **veintidós años** que no se veían en ninguna parte: VIP
Ibérico lleva publicándose desde marzo de 2013 y VIP Pirineos desde octubre de
2014.

### Por qué no estaba, y no era un límite técnico

§4.1 decía desde la 1.35 que una serie es la película de **un registro**, y
§7.11 lo hacía verdad: *«una serie sin ficha es huérfana»*. **Esa frase no era
doctrina sobre el tiempo**: era el retrato de un momento en el que la única
película posible era la de un registro, porque no existía nada más que pudiera
tener historia. Desde la `.59` existe.

### Añadido

- **Contrato 1.44.0 → 1.45.0.** La identidad de una serie pasa a ser **`capa` +
  `slug` O `conjunto`** — excluyentes, y una de las dos obligatoria: una
  película tiene un dueño, y sin dueño no hay contra qué cuadrar.
- **La película de `sistema-gasista-entradas`**: **269 meses**, de enero de 2004
  a mayo de 2026, con las tres columnas —los dos VIP y las cisternas— y su
  gráfica en la página del conjunto, dibujada por el mismo dibujante que las
  4.666 fichas.
- **El extractor de las series sabe extraerla**, con las mismas guardas de siempre: revienta
  si el libro deja de traer una columna, y un mes enteramente nulo no es un
  punto.

### Lo que NO cambia, y conviene decirlo

**R11 no cambia ni una coma.** Sigue comparando el último punto con la foto de
su dueño y sigue bloqueando: se comprobó alterando el último punto de VIP
Ibérico a mano — el validador para y nombra el campo. Lo único que se tocó es
el mensaje, que decía «la ficha» siempre y ahora nombra al dueño que toca.

### Huecos

- **La película empieza donde empieza el dato, no donde empieza el sistema.** El
  primer punto es de enero de 2004 porque es donde arranca el libro de CORES;
  los VIP no existían entonces y sus columnas están vacías hasta 2013 y 2014.
  Los huecos se ven como huecos, que es lo que manda §4.1.
- **Sigue sin haber hemeroteca de conjuntos**, y a diferencia del agua no hace
  falta: la del agua existe porque `/agua/` es un parte que cambia cada semana y
  se cita: aquí la página es una ficha, y una ficha con película enseña su
  gráfica, como las otras 410 del atlas.

## datos-v2026.08.59 — Casa para las cifras que no son de ningún sitio

**Al nacer `atlas.conjunto` quedó escrita una cautela y no se le dio casa a lo
que describía:** *un hecho del conjunto se refiere a ALGÚN conjunto, y no tiene
por qué ser el que la capa publica*. Esta release construye esa casa, y de paso
**el atlas pasa a poder decir por dónde entra todo el gas**, que hasta hoy no
podía.

### El hueco, medido

En mayo de 2026 entraron a España **31.312,6 GWh** de gas natural y el atlas
solo podía dar cuenta de **29.997,6**. Los **1.314,9 que faltaban —el 4,2 %—**
entraron por los dos **VIP**, puntos virtuales que la normativa europea creó en
2014 para agrupar comercialmente varias conexiones físicas. **No tienen
coordenada ni la tendrán**: su sitio es un acuerdo, no un tubo.

### Añadido

- **§4.2 del contrato *(1.43.0 → 1.44.0)*: `datos/conjuntos/<id>.json`.** Un
  documento de conjunto, con **el mismo aparato que una ficha** — `fecha_dato`,
  `fuentes` propias, `__v` y `__f` en cada cifra, y `claves`. Campos propios:
  **`sobre`**, que es la cautela convertida en dato —el conjunto declara de qué
  conjunto habla, en vez de dejarlo a quien lo hospede—, y **`capas`**, que
  señala dónde está situado lo que él no puede situar.
- **El primero: `sistema-gasista-entradas`.** Los dos VIP y las cisternas, con
  seis claves que cuentan lo que no cabe en una cifra.
- **`/conjunto/sistema-gasista-entradas/`**, su página, y **«Los conjuntos»** en
  la biblioteca.

### Lo que el dato no escribe y la página sí calcula

**El total de gas entrado no está en ningún fichero.** Es la suma de este
documento y de las series de las dos capas que señala, y **R7 prohíbe escribir
lo que se deriva de lo publicado**: la calcula la página, que además dice de qué
piezas sale. Es la única cifra del atlas que no existe escrita en ninguna parte
y que, sin embargo, contesta la pregunta entera.

### Corregido

- **`comprobar_conjunto()` se generaliza** en vez de duplicarse: la misma
  doctrina —R2, R3, R6, §6.2 y la guarda de fechas futuras— sirve al
  `atlas.conjunto` de una capa y al documento suelto. Escribirla dos veces es la
  manera de que un día solo se corrija una.
- **El validador ahora nombra los conjuntos en su parte final.** Una carpeta que
  no se mirase pasaría por revisada: el silencio y el verde se leen igual.

Pruebas **46 → 50**, con los tres fallos que la regla caza —no decir sobre qué
habla, una cifra sin verificación, señalar una capa fantasma— y el caso válido.

### Huecos

- **El conjunto publica la foto, no la película.** VIP Ibérico tiene 95 meses de
  historia y VIP Pirineos 140, y la serie pediría tocar el esquema de series,
  que hoy exige `capa` y `slug`. Queda para su release.
- **La producción hidroeléctrica nacional sigue en `agua-embalsada`**, que es el
  caso que inspiró la cautela. Se queda porque **tiene casa y declara su
  alcance**: el hueco de verdad eran las cifras que no tenían dónde estar.

> **Nota a la release `.57`, del 2026-08-15.** Aquella entrada listaba las
> cisternas entre sus huecos diciendo que no tenían «capa donde vivir», como si
> fuera un impedimento estructural. **No lo era**: `atlas.conjunto` existía desde
> la `.53` y el mecanismo para cifras sin lugar estaba inventado — lo que
> faltaba era la casa, que llega ahora. Y la razón de fondo tampoco se dijo
> entonces porque no se había medido: las cisternas son **1.319 GWh en 22 años,
> el 0,025 %**, y **no aparecen desde diciembre de 2022** sin que ninguna fuente
> diga si dejaron de circular o dejaron de contarse. Todo eso se publica ahora
> en `sistema-gasista-entradas`, con su hueco declarado.

## datos-v2026.08.58 — El atlas aprende a decir qué contiene cada capa

**Sale de intentar montar un catálogo de las 31 capas y descubrir que no se
podía escribir.** El manifiesto sabía cómo se llama cada capa, de qué rama
cuelga, cuántos registros tiene y qué licencia obliga — y **no sabía decir qué
es**. Se buscó ese texto donde debería estar y no estaba en ningún sitio.

### Añadido

- **`resumen` en las 31 capas** *(contrato §3, 1.43.0)*: una línea que dice qué
  contiene, obligatoria en toda capa con `fichero`. La más larga mide **97
  caracteres** de los 140 que caben.
- **`/biblioteca/`**, el catálogo de todo lo publicado: las 31 capas con sus
  registros, su reparto de verificación, sus huecos y su película; los partes; y
  el archivo público. Es una página del visor, **no un dato**, y **ninguna de
  sus cifras está escrita a mano**: todas se cuentan al construir, desde esta
  release. La lección de la `.51` aplicada a una página que es toda recuentos.

### Por qué no valía nada de lo que ya había

- Las **notas `_` del manifiesto son apuntes internos**: explican decisiones
  —«Era `recurso-eolico`, y se renombra sin coste porque…»— y **diez de las
  treinta y una no tenían ninguna**.
- **`fuentes/PROCEDENCIA.md`** contesta de dónde sale una capa, que es otra
  pregunta.
- Y el **`titulo`** es un rótulo de tres palabras.

La consecuencia estaba a la vista y nadie la había mirado: **«Conducciones de
combustible · 2 registros» no le dice nada a nadie**, ni en un catálogo, ni en
el panel del mapa, ni en su propio índice de fichas.

### Qué clase de campo es, y qué se le puede exigir

**No es un dato y no lleva aparato de verificación**, exactamente igual que
`titulo`: es cómo la casa presenta su capa, se escribe a mano y no se deriva de
nada. Por eso §7.8 solo puede exigir **tres cosas comprobables** —que exista,
que quepa y que no sea el título otra vez— y la cuarta, que diga algo
verdadero, la sostiene quien lo escribe. Pruebas **41 → 46**, con una que existe
solo para garantizar que **una rama en gris no lo exige**: todavía no contiene
nada que contar.

### Huecos

- **El catálogo enseña seis columnas y hay una séptima que no está**: cuándo
  toca revisar cada capa. El manifiesto declara `cadencia_revision_dias` y hoy
  **no lo mira nadie**; ponerlo en la biblioteca exige decidir qué se hace
  cuando una vence, y esa decisión no se toma en la misma release que estrena
  la página.
- **El marco de las páginas estáticas está ahora en tres sitios.** Cada
  generador se trae su propia cabecera y su pie, y con la biblioteca ya son
  tres copias. Se asume a sabiendas —extraerlo obligaba a tocar los dos
  generadores existentes en mitad de una release— y queda anotado para la
  cuarta página, o para el día que el marco cambie de verdad.

## datos-v2026.08.57 — La segunda película sale del libro que ya estaba en casa

**El atlas tenía 31 capas y una sola con película semanal.** Buscando si alguna
otra podía tenerla, resultó que **el dato llevaba archivado en el repo desde el
12 de agosto, sin usar**: los libros de CORES que la `.41` bajó para
`gas-interconexiones` tienen **cuatro hojas** y aquella release gastó una. La
tercera reparte el gas **planta a planta** desde enero de 2004, y sus siete
columnas cuadran una a una con los siete registros de `gas-regasificacion`.

No hizo falta bajar nada. Hizo falta abrir el libro entero.

### Añadido

- **`gas-regasificacion` estrena película**: el **flujo mensual** de las siete
  plantas de GNL, con **entradas y salidas**, hasta mayo de 2026. Cada una trae
  su propia historia, que es la de su puesta en servicio — Barcelona, Bilbao,
  Cartagena y Huelva desde el primer mes; Sagunto desde 2006-02; Mugardos desde
  2007-05; **Musel solo desde 2020**, con 77 puntos.
- **Los campos que la sostienen**: `importacion_mes_gwh`, `exportacion_mes_gwh`
  y su `fecha_dato`, más las dos fuentes de CORES (una por libro, como ya hace
  la capa hermana). **Los valores no se copiaron a mano**: se leen del último
  punto de cada serie, así que R11 cuadra por construcción.
- **`nombre_estadistico` en los siete**, que declara **en el dato** cuál es su
  columna del libro. Las columnas coinciden con los *slugs* y no con los
  nombres —«Bilbao» es Bahía de Bizkaia Gas, «Sagunto» es Saggas—, así que donde
  se parecen es casualidad y no contrato.
- **`series_completas`** en el manifiesto: las siete la tienen, luego una que
  faltara es un defecto y no una omisión legítima. Probado escondiendo la de
  Musel — el validador bloquea.
- **El extractor de las series.** Lee los `.xlsx` con la biblioteca
  estándar y trae dos guardas: **el propio libro hace de juez** (la suma de lo
  extraído tiene que dar su columna de total en los 269 meses y en los dos
  libros) y el emparejamiento columna→ficha **revienta** en vez de adivinar.
- **Y las dos series de la `.41` dejan de ser irreproducibles.** Aquella release
  no dejó guion: el dato estaba en el repo y la forma de sacarlo, en ningún
  sitio. Este extractor las regenera **idénticas**, campo a campo y los 269
  puntos — que es además la prueba de que lee bien el libro *antes* de escribir
  siete series nuevas. La comparación cazó un detalle que se habría colado: el
  título de la fuente cambia según la serie use un libro o los dos.

### Corregido

- **`gas-regasificacion` no atribuía el Nomenclátor.** Las siete coordenadas
  derivan del NGBE del IGN (CC BY 4.0) y la atribución de la capa no lo decía
  desde que nació. Es obligación de licencia, no cortesía.
- **Las siete fichas fechaban su verificación en 2026-08-06** mientras el
  manifiesto pasaba a 2026-08-14: la capa afirmaba una verificación que ninguna
  ficha respaldaba. Ahora la respaldan — se les ha añadido dato confirmado de
  fuente primaria, que es verificar.

### La mordedura, y quién la vio

**La serie de Musel publicaba 192 meses de nada**: de enero de 2004 a diciembre
de 2019, una fecha y dos nulos. La estadística no le abre columna hasta 2020
porque la planta no existía, y publicar esos puntos era afirmar que aquellos
meses salió un parte vacío. §4.1 lo dice con todas las letras: **el hueco de un
parte entero es la ausencia del punto, no un punto de nulos.**

No lo vio el código ni el validador. Lo vio **mirar la gráfica construida**, que
se anunciaba como «2020-2026 · 77 partes mensuales» cuando el fichero decía 269.
Es la misma comprobación que salvó la `.41` —donde el dibujante rotulaba «hm³»
viniera lo que viniera— y por segunda vez encuentra lo que no encuentra nadie
más. Un valor nulo **suelto** sí es un punto legítimo: ahí el parte existe y le
falta una cifra, que es otra cosa.

### Contrato

**Sin cambios: sigue en 1.42.0.** Todo lo que hacía falta ya existía —
`magnitud` y `fuente.archivo` como lista (1.38), `series_completas` (1.42). Una
release que estrena película sin tocar el contrato es la señal de que el
contrato se escribió bien.

### Huecos

- **El gas entra a España por cuatro caminos y el atlas publica dos.** Estas
  siete plantas y, en la capa hermana, los dos gasoductos africanos. Faltan las
  **cisternas** —gas por carretera, con columna propia en el mismo libro y
  ninguna capa donde vivir— y el reparto por punto físico de Francia y Portugal,
  que desde octubre de 2014 se imputa a los VIP. Se declaran; no se inventa una
  capa para alojarlos.
- **La cadencia es mensual y con desfase.** CORES publicó el 13 de julio de 2026
  los datos hasta **mayo**. Quien cite «el último mes» está citando mayo.
- **No hay página del gas.** Esta release publica el dato; el parte mensual es
  una decisión de diseño que se toma viéndolo vivo, y todavía no se ha tomado.
  Las siete películas se ven hoy en sus fichas.
- **Observado y no tocado**, dos cosas que aparecieron trabajando aquí y que no
  son de esta release: `minerales-proyectos` y `cables-submarinos` tienen fichas
  verificadas **después** de la fecha que declara su manifiesto —va al revés que
  el defecto corregido arriba—, y la nota `_estado` del manifiesto sigue
  empezando por «VEINTIOCHO capas» cuando son **31**. Lo segundo es justo lo que
  la `.51` aprendió a evitar: una cifra en prosa que envejece aparte del dato, y
  cuya salida no es actualizarla sino **dejar de nombrarla**.

## datos-v2026.08.56 — Los doce últimos, encontrados buscando al revés

**Cierra el último hueco de la capa.** Doce embalses tenían su posición
comprobada una sola vez porque **ningún emparejamiento por nombre podía
encontrarlos** en el Inventario de Presas. Están los doce, y **ninguno estaba
mal colocado**: aparecen entre **10 y 150 metros** de donde el atlas los sitúa.

### Por qué el nombre no servía

Los dos catálogos son del mismo ministerio y **no escriben igual el mismo
sitio**:

| el Boletín dice | el Inventario dice | qué pasa |
|---|---|---|
| Chandrexa · San. Estevo · **Sta Uxia** | CHANDREJA · SAN ESTEBAN · **SANTA EUGENIA** | castellaniza el topónimo gallego |
| Villagudín | VILAGUDIN | al revés: aquí el que castellaniza es el Boletín |
| Sant Pons · Riocobo · Torre de Abrahán | SANT PONC · RIO COVO · TORRE DE ABRAHAM | otra grafía |
| **Catllar** | **GAIA** | **lo nombra por su río** |
| Pto. Vallehermoso · Agavanzal, Nª Sª de | PUERTO DE VALLEHERMOSO · NUESTRA SEÑORA DEL AGAVANZAL | abreviaturas y orden |
| Santa María de Belsué · Conde Guadalhorce | SANTA MARIA BELSUE · CONDE DE GUADALHORCE | la preposición, que sobra o falta |

«Santa Uxía» y «Santa Eugenia» no se parecen en nada, y el Catllar aparece con
el nombre de un río. **Ninguna normalización de texto salva eso.**

### Lo que sí funcionó

**Dejar el nombre de lado y buscar por cercanía y capacidad**: qué presa hay
junto a este punto con esta capacidad. Los doce salieron a la primera, y cada
uno lo confirma con **tres indicios a la vez** —la distancia, la capacidad y un
nombre que, una vez encontrado, se reconoce—.

> **La lección, y vale para cualquier catálogo que haya que cruzar:** emparejar
> por nombre es lo primero que se intenta y lo que más falla. Una coordenada y
> una magnitud identifican igual de bien y **no dependen del idioma**.

### Añadido

- **Los 359 puntos del Nomenclátor tienen ya su segunda comprobación.** Cero sin
  contrastar, desde 12 en la `.55` y 16 en la `.54`.
- **Dos desacuerdos de capacidad más**, que solo se veían al encontrarlos: Conde
  de Guadalhorce (66 del Boletín contra 84) y Santa Uxía (18 contra 13,6). Como
  los otros: la capa publica la del Boletín y declara la diferencia.
- La **tabla de equivalencias de nombres** queda en `PROCEDENCIA.md`, que era lo
  que la auditoría pedía para poder repetir el cruce.

### Huecos

De la auditoría del 2026-08-14 **no queda ninguno**. Sigue en pie solo lo que la
fuente no permite: la energía de los partes viejos, la verificación de cuenca en
vivo, la elección de presa donde el catálogo trae la altura corrupta, y de qué
lagos se compone cada uno de los seis sistemas del Pirineo.

---

## datos-v2026.08.55 — Cuatro de los dieciséis sí se podían contrastar

**Corrige a la `.54`, publicada hace unas horas.** Aquella dijo que 16 anclas
«no se habían podido contrastar» con el Inventario de Presas. **De cuatro era
falso**, y las cuatro confirman su punto:

| ficha | en el Inventario | capacidad | distancia |
|---|---|---|---|
| `arcosdelafrontera-guadaletebarba` | «ARCOS» | 14 / 14 | 0 km |
| `boadella-cuencasinterna` | «DARNIUS BOADELLA» | 60,18 / 61 | 0 km |
| `ip-ebro` | «IBON DE IP» | 5 / 5 | 0,5 km |
| `sanmartino-minosil` | «SAN MARTIN» | 9,6 / 10 | 0 km |

**El fallo era del emparejamiento, no de los datos:** quitaba «Embalse de» al
nombre del Boletín pero **no quitaba el prefijo del Inventario**, que a estos
vasos los llama «Ibón de…», «Darnius…» o directamente por el pueblo. Es la
**cuarta** trampa de este método, y de la misma familia que las tres que la
`.54` dejó escritas: el error nunca estuvo en el nombre del embalse, sino en lo
que se le quita antes de compararlo.

Las cuatro fichas lo cuentan —**no se borra que se dijo**— y quedan **12**
anclas realmente sin contrastar, cada una con su clave.

### Por qué esto sale en una release y no en una corrección silenciosa

Publicar «esto no se ha podido comprobar» sobre algo que sí se podía es
exactamente el tipo de afirmación que esta capa lleva tres días persiguiendo. Se
corrige igual que se corrigió la prosa ajena: **diciendo qué se dijo, por qué
era falso y qué se hizo**.

---

## datos-v2026.08.54 — El repaso de las anclas, y Alcántara en una charca

Cierra **el hueco más viejo de la capa**: los 359 puntos cosidos por nombre
contra el Nomenclátor, que solo delataban un error si era enorme. El repaso
coteja cada ficha con su presa en el Inventario —emparejando por **nombre y
demarcación**, confirmando con la **capacidad**— y contrasta **343 de 359**:
mediana **58 m**, p90 **1,9 km**.

### Corregido — dos anclas equivocadas, y una es de las gordas

- **`alcantara-tajo`**, 3.160 hm³, **el mayor del Tajo y de los mayores de
  España**, se anclaba en el «Embalse de Mata de Alcántara»: la charca de **0,2
  hm³** del pueblo homónimo. Su presa se llama **José María de Oriol**, no
  «Alcántara», así que **ningún emparejamiento por nombre podía dar con ella**;
  la identifica su capacidad —3.162 hm³— y su cauce. Se mueve solo 7,7 km, y esa
  es la lección: el pueblo está cerca del vaso, **así que la distancia no
  delataba nada**.
- **`losmolinos-guadiana`** estaba **a 194,5 km**. Es Los Molinos de Matachel,
  en Badajoz, y el Inventario le da **34,0 hm³ exactos** contra los 34 del
  Boletín. Los dos topónimos empiezan por «los Molinos» y están en el Guadiana:
  ni el nombre ni la cuenca bastaban. Lo dijo la capacidad.

Con estos son **cuatro** los emparejamientos falsos cazados por el mismo método
—Las Cogotas (157 km, `.44`), el Lago Negro (50 km, `.52`) y estos dos—.

### Añadido — lo que está lejos y bien, y lo que no se pudo mirar

- **22 anclas entre 3 y 15,8 km lo declaran**: son vasos de cola kilométrica
  —Riba-roja, Cijara, Orellana, Valdecañas— donde el topónimo rotula **el agua**
  y la presa queda al final. `geo_precision: paraje` ya lo dice, pero una
  distancia así sin explicación parece un fallo.
- **16 no se pudieron contrastar** y lo dicen: el Inventario no registra presa
  que case con su nombre en su demarcación (Chandrexa, Sant Pons, Villagudín,
  Sta Uxia, San Estevo…). **No hay motivo para dudar de esos puntos** —son
  topónimos verificados contra su cuenca al darlos de alta—; lo que les falta es
  la segunda opinión que sí tienen los demás.
- **30 fichas declaran su desacuerdo de capacidad** con el Inventario, con las
  dos cifras. La capa **sigue publicando la del Boletín**, que es su fuente para
  el agua. De Contreras sí se sabe cuál está viejo: los 852 del Inventario son
  anteriores a la revisión a la baja de 2019, que la propia serie registra.

### Tres trampas del método, medidas y escritas

Ninguna es del atlas: son del emparejamiento, y **las tres dieron un resultado
falso antes de verse**. Quedan en PROCEDENCIA para el próximo que lo intente.

- Aplanar el nombre **antes** de quitarle el prefijo convierte «Embalse de
  **La**nuza» en «nuza» — y deja fuera a Lanuza, Limonero y Llauset.
- **Sin tildes, «PENA» y «PEÑA» son la misma palabra**, y ordenar solo por
  capacidad llegó a elegir una presa **a 188 km**. La distancia tiene que entrar
  en el criterio.
- El SNCZI a veces **alarga** el nombre del Boletín («Montoro» → «MONTORO III»)
  **y** tiene otra presa con el nombre corto en la misma cuenca, así que buscar
  los extendidos solo cuando no hay exactos elige la equivocada.

### Huecos

- Los **16 sin contrastar**, ya declarados uno a uno.
- Lo no auditable de siempre: la energía de los partes viejos, la verificación
  de cuenca en vivo, la elección de presa donde `ALT_CIMIEN` viene corrupto y la
  composición de los seis sistemas del Pirineo.
- **Con esto, la auditoría del 2026-08-14 queda cerrada entera.**

---

## datos-v2026.08.53 — El cerrojo que faltaba, y las salvedades que nadie escribía

Cierra **todo lo que quedaba de la auditoría del 2026-08-14** salvo lo que pide
juicio caso a caso. Ninguna cifra de agua cambia.

### Añadido — `series_completas`, y por qué el hueco estuvo abierto *(contrato 1.42.0)*

§4.1 vigilaba en **un solo sentido** desde la 1.35: una serie sin ficha era
huérfana, pero **la ficha sin serie no era nada**. Perder un fichero de película
pasaba el CI en verde, y lo único que lo cazaba era una guarda del generador de
`/agua/` — es decir, **la completitud 401/401 la sostenía el sitio web, no los
datos**.

Yo había **rechazado** este hallazgo, y el rechazo era correcto: la regla que el
informe proponía —«toda capa con `series` tiene serie en todos sus registros»—
**es falsa**, porque `gas-interconexiones` publica 6 registros y 2 series a
propósito. Lo que la conclusión erraba es que el problema no era la
comprobación: era que **faltaba el dato que la hace decidible**.

§3 gana **`series_completas`**, que dice cuál de los dos casos es cada capa, y
§4.1 gana la regla en su reverso. Probado en negativo: escondiendo una serie el
validador **bloquea**, restaurándola vuelve al verde, y `gas-interconexiones`
sigue intacta en las dos pasadas. **41 pruebas.**

### Corregido — cifras de prosa, y una acusación que no se sostenía

- La `.44` arrancaba en «683.892 partes» cuando la `.43` ya lo había dejado en
  **684.236**. Se **anota, no se reescribe** (precedente de la `.31`).
- **La otra mitad de ese hallazgo era falsa.** El informe decía que la `.43`
  erraba en «184 bajan, 18 suben, 142 se quedan, −898». Reproducido contra la
  etiqueta: **es exacto**. Comparó un diff entre releases con una frase que
  describe **la semana del parte** — y la primera lectura de aquí repitió su error antes de verlo. Queda
  escrito: **un informe también se audita**.
- El esquema decía «por eso `geo_precision` es `paraje`» con 40 de 401 ya en
  `exacta`. Ahora dice que es el ancla **por defecto** y no fija el reparto.
- **«719.725 partes»** sale del contrato §10 y de la nota del manifiesto: no se
  actualiza a 720.099, **se deja de nombrar**. Igual que el recuento de anclas
  de las notas de trabajo, que bailó entre 368 y 369, se corrigió a 367 y dos días después ya
  eran 361.
- Una decisión antigua decía «faltan 32 embalses», superada por la `.48`. No
  se reescribe: se anota — y la nota recuerda que **la prohibición que aquella
  decisión impuso sigue vigente por un motivo que el número nunca tocó**.

### Añadido — lo que la fuente es y no decía nadie

Contado desde el dato y **por fecha**, así que cada parte dice lo suyo:

- **El umbral de «más de 5 hm³» describe la base, no la gobierna:** hoy la
  contradicen Cornalbo (3) y Rioseco (4); en el parte de 1990, Cornalbo y
  Proserpina. La página los nombra donde salgan.
- **En los partes viejos hay embalses que dan agua sin declarar capacidad**, lo
  que **infla el llenado**: 60 en el parte del 2 de enero de 1990, ninguno desde
  2005. El parte de esa fecha lo advierte.
- **El histórico empieza en 1987**, no en 1988 como lo titula el propio MITECO.
  → PROCEDENCIA.

### Añadido — las rachas, con el criterio bien puesto

El informe decía **63** series congeladas y la `.52` declaró **20**. No sale
ninguno de los dos: son criterios distintos. Quietas **ahora** son 20 —ya
declaradas—; con alguna racha de ≥100 semanas **en su historia**, muchas más.
Entran **104 declaraciones nuevas**, cada una con su duración y sus fechas.

**Un renglón que habría mentido:** en cinco históricos la racha más larga llega
al **último** parte, así que «y después volvió a moverse» era falso. Esos cinco
dicen ahora que la racha no terminó — **terminó el parte**.

### Cambiado — el corte de huecos de la gráfica

Se calcula sobre la serie **completa** y no sobre la ya submuestreada. **Con los
datos de hoy no cambia un píxel**, y está medido: los tres huecos reales de más
de 45 días se cortaban igual. Lo que quita es la dependencia del alineamiento —
y una rotura futura: en cuanto una serie pase de unos 5.000 puntos, el paso de
submuestreo supera por sí solo los 45 días y el código viejo cortaría **todos**
los tramos.

### Huecos

Queda abierto **solo lo que pide juicio caso a caso**, y va en su propia
release: las **25 anclas a más de 3 km**, los **11 parajes incontrastables por
nombre** y los **desacuerdos de capacidad** en registros de identidad no cierta
(Contreras, Lanuza, Águeda…). Y lo que sigue sin poder auditarse: la energía de
los partes viejos, la verificación de cuenca en vivo, la elección de presa donde
`ALT_CIMIEN` viene corrupto y la composición de los seis sistemas del Pirineo.

---

## datos-v2026.08.52 — Seis puntos que estaban donde no era, y veinte líneas rectas

La tanda que la auditoría dejó abierta: lo que exigía **juicio**, no barrido.
Ninguna cifra de agua cambia — **cambia dónde se dibujan seis embalses** y lo
que veinte fichas dicen de sí mismas.

### Corregido — el Lago Negro estaba a 50 km

`negrolago-ebro` se anclaba en el «Ibón Negro» del Nomenclátor, en el valle de
Chistau (Huesca). La guarda que caza estos fallos —emparejar por nombre **y**
demarcación— no pudo: **los dos candidatos están en el Ebro**.

Lo cazó el contraste con el Inventario de Presas, y con **cuatro indicios que
convergen y de los que ninguno vale solo**: un «LAGO NEGRO» represado en Espot
(Lleida) con 6,6 hm³ contra los 6 del Boletín; misma demarcación; a menos de
cinco kilómetros de Tort, Mar y Saburo —los otros tres lagos que el Boletín
cerró el mismo día de 2006—; y **represado**, que es lo que hace que un lago
aparezca en el Boletín. Está además a unos setecientos metros del punto donde
este atlas sitúa el «Sistema Lagos Espot».

El desempate entre sus **dos presas** resultó no necesitar regla nueva: están a
250 m una de otra y su altura desde cimientos —11 m contra 3— **no viene
corrupta**, así que la regla de la `.44` (la más alta, que es la principal por
construcción) resuelve el caso sola.

### Corregido — siete fichas apiladas en tres puntos

El Nomenclátor tiene **un** topónimo donde el Boletín publica varios embalses,
así que siete fichas compartían tres coordenadas: el mapa enseñaba una y
**escondía las otras**. El Inventario de Presas sí las separa presa a presa, y
**la capacidad dice cuál es cuál**. Se re-anclan cinco:

| ficha | se mueve |
|---|---|
| `derivacionretortillo-guadalquivir` | **11,8 km** |
| `puentedesantolea-ebro` | 3,6 km |
| `retortillo-guadalquivir` | 1,1 km |
| `brenaiila-guadalquivir` | 222 m |
| `brenala-guadalquivir` | 104 m |

Las **dos que siguen compartiendo punto lo declaran**: el Inventario registra
allí presas de 48 y 93,7 hm³ y una «Cañón de Santolea» en construcción con
0,082, y **ninguna cuadra** con los 5 y los 82 del Boletín. Antes que elegir a
ojo, se dice.

### Añadido — veinte líneas rectas que nadie explicaba

**20 embalses vigentes llevan más de dos años publicando la misma cifra**, y
suman 167 hm³ del parte semanal. El más quieto es **San José (Duero): 2.015
partes, la serie ENTERA**, treinta y ocho años sin variar una vez — y esa cifra
es exactamente su capacidad. Le siguen Rábanos (1.627) y Villagonzalo (1.414).

Cada uno lo declara ahora en su ficha, **sin interpretarlo**: ninguna fuente
dice si el vaso está de verdad estable, si la lectura se arrastra o si el dato
entra por convenio. Lo único afirmable es que **la gráfica sale recta porque la
fuente lo es**, no porque el atlas la haya suavizado — eso lo prohíbe R7.

El parte lo dice también, y **calculado por fecha**: la página de 1995 informa
de sus 25 embalses y 388 partes, no de los de hoy. Sale gratis, del mismo
recorrido que ya hacía.

### Añadido — las lápidas que faltaban, y las que envejecían

Tres históricos (`brenala`, `catllar`, `guillena`) no tenían **la clave que
explica su silencio**, aunque sí otras. Y la fórmula que usaban los demás
llevaba dentro «la serie llega a agosto de 2026»: **14 fichas dejan de nombrar
el mes**, porque eso envejece con cada refresco.

Las ocho lápidas de los lagos del Pirineo decían «nacen **cinco** filas nuevas»
donde nacieron **seis**, todas el 3 de octubre de 2006. Es el mismo error de
recuento que la `.51` corrigió en la prosa, alcanzando ahora a los datos.

### Añadido — los desacuerdos de capacidad que sí son ciertos

Comparando **solo los registros ya anclados en el Inventario** —identidad
cierta, sin adivinar— salen seis desacuerdos, y **dos son basura de la fuente**:
`NMN_CAPAC` da **8.136.000.000** para Soto Terroba y **8.085.000.000** para Las
Fitas, que es exactamente leer sus 8,136 y 8,085 hm³ como metros cúbicos. **El
campo no está en una sola unidad**, y queda anotado en PROCEDENCIA:
un barrido masivo que no se guarde de eso fabricará desacuerdos de miles de
millones por ciento.

Los cuatro reales van declarados en su ficha con las dos cifras (Fresneda ya lo
estaba; entran **Laverne** 38/43,9, **Víboras** 17/19,11 y **Las Parras**
5/5,8). **La capa sigue publicando la del Boletín**, que es su fuente para el
agua y la única que permite comparar capacidad y reserva entre sí.

### Huecos

- **Sigue abierto** lo que de verdad pedía juicio caso a caso y no se ha tocado:
  las **25 anclas a más de 3 km** (casi todas embalses de cola kilométrica), los
  **11 parajes incontrastables por nombre**, y los desacuerdos de capacidad en
  los registros cuya identidad **no** es segura (Contreras, Lanuza, Águeda).
- **Las dos Santolea** que siguen compartiendo punto, ya declarado.
- Las anclas del Nomenclátor bajan de 367 a **361**; las `exacta` suben a **40**.

---

## datos-v2026.08.51 — Lo que decían los papeles, y lo que no miraba nadie

**Ni un dato cambia, y esa es justo la noticia.** Sale de una **auditoría
exhaustiva de todo lo tocante a embalses**, encargada con el mandato de
reproducirlo todo desde la fuente cruda —incluido lo ya verificado— y de buscar
sobre todo lo que nadie había pensado en comprobar.

**Los datos aguantaron la reproducción completa.** Las 401 series son copia fiel
del MDB (cotejo punto a punto de los 720.097 puntos, cero diferencias); las seis
cifras del reparto hidroeléctrico y las cuatro de la energía salen igual
sumando desde cero; son 401 de 401 y el ZIP archivado es byte a byte el que
MITECO sirve hoy; R11 cuadra en las 401; las 401 descripciones cuadran con sus
campos; y toda la geometría traza a fuente archivada (367 parajes, 6 estaciones
a ≤1 m, 28 presas a ≤0,7 m).

Lo que no aguantó fue **lo escrito alrededor de los datos**.

### Corregido — cifras de prosa que envejecieron aparte del dato

- **El README decía «308 embalses».** Son **401** desde la `.48`. Es la primera
  tabla del escaparate público y se quedaba corta en 93 registros, un 23 %.
- **`CITATION.cff` estaba clavado en la `.42`**: versión, fecha y DOI de edición
  **ocho ediciones** viejos, con Zenodo ya en la `.50`. Un aparato de cita que
  envejece solo es peor que no tenerlo: quien cite se lleva una edición que no
  es.
- **Las dos discrepancias de recuento resultan ser la misma**, y esa es la parte
  que vale la pena: **re-anclar no es entrar, y contar entradas no cuenta
  anclas.** Son **28** anclas del Inventario —los 27 que entraron entre la `.44`
  y la `.47` **más Las Cogotas**, que ya estaba publicada y se re-ancló allí al
  descubrirse a 157 km— y **seis** «Sistema…» del Pirineo, porque Escarra ya
  estaba en la `.47` anclado en su topónimo y la `.48` metió los otros cinco
  re-anclándolo a él. Comprobado contra las etiquetas: la `.47` tenía 1 y la
  `.48` tiene 6. **«Entran los cinco» del changelog de la `.48` es correcto y no
  se toca**; lo que estaba mal era describir el conjunto.
- **`PROCEDENCIA.md` se contradecía a sí mismo** —esto no lo vio la auditoría—:
  un párrafo decía que los sistemas se publican desde la `.48` y el de debajo,
  escrito en la `.47`, seguía diciendo «siguen sin publicarse».
- Las anclas del Nomenclátor son **367**, no las «368» ni «369» que las notas
  de trabajo decían en el mismo punto. Y una nota pedía que las pruebas
  «siguieran dando 16/16» cuando ya iban 40; ahora no escribe la cifra, porque
  **una cifra al lado del guion que la calcula solo puede envejecer**.

### Cambiado — el ritual pasa de cuatro gestos a seis

Entran **`release.json`** y **`CITATION.cff`**. Los dos porque los dos se
olvidaron, y los dos comparten la propiedad peligrosa: **no rompen nada al
olvidarse**. Sin `release.json` la web publica los datos de la edición anterior
sin dar un solo error (pasó en la `.43`); sin `CITATION.cff` la cita apunta a
otra edición (ocho ediciones, de la `.42` a la `.50`).

### Cambiado — tres guardias que no miraban donde el contrato había crecido

Tres agujeros y una sola causa: **cada comprobación nació recorriendo
`features`** y el contrato creció por debajo.

- **La guardia semanal solo vigilaba registros.** Ni el PDF del conjunto ni las
  fuentes de las 401 series estaban vigiladas por nadie: si esas URLs se
  pudrían, la guardia semanal seguía en verde.
- **§7.7 y §7.10 no alcanzaban a las series**, donde la fuente es **suya** y
  puede no ser la de su ficha — en `agua-embalsada` no lo es. Un `javascript:`
  ahí acaba en un `href` servido por el dominio del atlas.
- **`comprobar_conjunto` admitía una cifra desnuda**, sin `__v`: R2 y R3 solo
  miran lo que ya se declara confirmado y R6 solo persigue metadatos huérfanos,
  así que un número sin nada detrás no lo reclamaba nadie. Y una fecha del
  futuro bloqueaba en cualquier ficha y pasaba aquí.

**Ninguno es doctrina nueva** —§4 ya exigía `__v` y `__f` en el conjunto, y
§7.5, §7.7 y §7.10 ya existían—, así que **el contrato no se mueve**: era
alcance que faltaba, no reglas que faltaran.

### Corregido — el error silencioso que más preocupaba

El ayudante de los hm³ del extractor hacía `.replace(".", "")` **a ciegas**, dando por hecho
que el punto siempre separa miles. El día que MITECO publique «8.5» a la
inglesa, eso devuelve **85**: el histórico entero multiplicado por diez, en
silencio, **cuadrando consigo mismo y pasando R11 en verde** porque la serie y
la ficha saldrían del mismo error. Ninguna comprobación aguas abajo puede cazar
eso.

Adivinar tampoco vale —«1.234» es mil doscientos treinta y cuatro con una
convención y uno coma dos con la otra, y nada en la celda dice cuál—, así que no
adivina: **para**. Probado contra las **1.440.198 celdas** del MDB: cero
rechazos, y revienta ante «8.5», «12.34» y «1,234.5».

### Pruebas: 37 → 40

Tres casos de prueba nuevos, porque una regla que nadie ejercita se pudre sin
que se note. Y los tres casos de las series dejaban de
citar un fichero **que no existe**: ahora se atan al archivo real,
así que §7.7 avisará si un refresco del Boletín se deja alguna atrás. Red, en
vez de tarea.

### Un hallazgo del informe que NO se sostiene

Decía que «una ficha sin serie pasa el CI en verde» y proponía cerrarlo.
**Comprobado: `gas-interconexiones` tiene 6 registros y 2 series**, así que una
ficha sin serie es **legítima** y una regla que bloqueara rompería esa capa. La
completitud de `agua-embalsada` la garantiza la guarda del build de `/agua/`,
que sí revienta. Una regla general exigiría que el manifiesto distinguiera
«series para todos» de «series para algunos», y eso es una decisión de contrato,
no un remiendo.

### Huecos

- **Lo que la auditoría no pudo auditar**, dicho en voz alta: la energía de los
  2.016 partes viejos (los PDF anteriores a ~2 años devuelven 200 con cero
  bytes), la verificación por demarcación en vivo (el ArcGIS del Ministerio es
  intermitente), la elección de presa en los embalses con varias (el
  `ALT_CIMIEN` del SNCZI viene corrupto), y Firefox/WebKit.
- **Queda abierto, y ahora mejor descrito:** el juicio humano sobre
  las **25 anclas a más de 3 km** (casi todas embalses de cola kilométrica), los
  **11 parajes incontrastables por nombre** y los **~15 desacuerdos de capacidad
  Boletín↔Inventario**, de los que solo Fresneda lo declara en su ficha.
- **Sin resolver, para su propia release:** un ancla casi con seguridad
  equivocada —`negrolago-ebro`, a unos 50 km, el patrón Cogotas—, los tres
  «Santolea» compartiendo coordenada sin clave que lo explique, dos históricos
  sin lápida, y **27 series congeladas** cuyo valor no se mueve desde hace más de
  cien semanas (San José, en el Duero, lleva **la serie entera**: 2.015 partes
  diciendo 6,0 hm³) sin que ninguna ficha lo advierta.

---

## datos-v2026.08.50 — Las dos mitades del agua, y la electricidad que guarda

**Ningún embalse cambia de cifra.** Esta release sale de una pregunta:
si el parte podía decir cuánta de la bajada semanal se fue en producir
electricidad. **No podía, y no por falta de datos**: el uso hidroeléctrico es
*no consuntivo* —el agua pasa por la turbina y sigue río abajo, casi siempre
hasta otro embalse que también cuenta— y el desembalse por usos no lo publica
nadie. Restarlo arriba contaría dos veces la misma agua. Buscándolo aparecieron
dos cosas que el Boletín **sí** publica, en el mismo parte que el agua.

### Lo que ya estaba escrito y no usaba nadie

`hidroelectrico` llevaba desde la `.21` **declarada en el esquema, escrita en
§10 y poblada en los 401 registros**. El Boletín marca cada embalse como
hidroeléctrico o de uso consuntivo, la marca es **constante en los 38 años** y
reparte los 401 en **108 y 293**. El parte estrena su tabla.

**No es una lectura del atlas: es la partición del Ministerio**, y sumando por
ella salen sus mismas cifras. Comprobado al dígito contra el boletín n.º
32/2026, seis de seis:

| | atlas | boletín |
|---|---|---|
| Hidroeléctricos | 11.908 hm³ · 69,1 % · −285 | 11.908 · 69,1 % · −285 |
| Uso consuntivo | 26.195 hm³ · 67,5 % · −627 | 26.195 · 67,5 % · −627 |

Vale para **los 2.017 partes**, no solo el último: la marca no cambia en 38
años, así que el reparto se dibuja desde 1988.

### Añadido

- **contrato 1.40.0 → 1.41.0, §4: `atlas.conjunto`.** Los hechos que la fuente
  publica **del conjunto** y no de ningún registro. El caso que lo pide: la
  energía hidroeléctrica almacenada **no es de Alcántara ni de Buendía, es de
  los 401 a la vez**. Lleva el mismo aparato que una ficha —`__v`, `__f`,
  `fuentes` propias, `fecha_dato`—, porque un hecho del conjunto no es más
  blando que uno de un registro, y **R7 rige igual**.
- **`agua-embalsada` 1.5.0 → 1.6.0** estrena el bloque con cuatro cifras del
  boletín del 11 de agosto: **13.983 GWh almacenados** sobre 23.011 de
  capacidad, **474,4 GWh producidos** del 3 al 9 de agosto, y **25.903 GWh en
  el año** frente a 27.404 en el mismo período del anterior.

### Las dos salidas que se descartaron, y por qué

- **Un registro nacional** —una capa 32 con un punto en Madrid— obligaba a
  enseñar en el panel del mapa una geometría que no significa nada, o a meterlo
  entre los 401 y **corromper el recuento que la capa declara**.
- **El manifiesto** es un registro de capas, **no datos**: sin `__v`, `__f` ni
  `fuentes`, una cifra escrita ahí no se podría citar. Y toda cifra que el atlas
  imprima tiene que poder citarse.

### De dónde sale la energía, y por qué no hay película

Del **Boletín**, no de la API de REE. REE daría quince años de serie semanal en
JSON ligero —y cuadra al 0,24 % con el Ministerio (1.396,2 GWh frente a
1.399,6 en la semana del 2 al 8 de febrero, que es *Hidráulica* + *turbinación
de bombeo*)—, pero obligaría a declarar `primaria` una fuente que este atlas
tiene por **`corporativa`** (§6.1): enmienda de contrato con precedente para las
treinta y una capas. El Boletín es `primaria` sin discusión y ya es la fuente
del agua.

Su precio, aceptado: **MITECO no publica ningún histórico de energía** —solo la
base de embalses— y los boletines viejos no llegan más allá de 2025. Así que
**no hay serie** (§4.1: solo hay película donde hay negativo), la energía sale
en el parte de su semana y los otros 2.016 llevan **su hueco declarado**. El PDF
**se acumula** en `fuentes/`, al revés que la base de embalses, que se
reemplaza: cada semana trae una energía que ningún otro documento repite.

### Los dientes

`comprobar_conjunto()` aplica R2, R3 y R6 al bloque nuevo. **Qué campos caben**
lo cierra el esquema de la capa con su `additionalProperties: false` — una regla
escrita en dos sitios se corrige en uno solo. Y `bloques_con_fuentes()` tapa lo
que casi se escapa: **§7.7 y §7.10 solo recorrían `features`**, así que un
bloque de conjunto podía publicar un `javascript:` o una cita sin archivar por
la puerta de atrás.

Dos casos de prueba nuevos, **35 pruebas → 37**. La primera es el error que el
mecanismo invita a cometer: la cifra del conjunto apunta a un id que existe en
las fuentes de la **ficha**. Las del conjunto son suyas, precisamente porque
salen de otro documento.

### Lo que no se hace, y la página lo dice

- **GWh → hm³**: no. Exige el salto de cada central, y **el salto no es la
  altura de la presa** (una central de derivación tiene saltos muchísimo
  mayores). Prohibido en el esquema, con nombre, para que rebautizarlo no valga.
- **La producción no explica la bajada.** Es la cifra **nacional**, que el
  Boletín toma de REE, e incluye **centrales fluyentes** ajenas a esta capa. Se
  publican **al lado**, no una explicando a la otra — y de ahí nace la cautela
  que §4 deja escrita para cualquier futuro bloque de conjunto: *un hecho del
  conjunto se refiere a ALGÚN conjunto, y no tiene por qué ser el que la capa
  publica*.
- **El desembalse por usos** no existe publicado. La tabla dice **dónde está**
  el agua, nunca a qué se dedicó.
- **El desglose de energía por demarcación**, que el boletín sí trae, pediría 16
  geometrías de cuenca que el atlas no tiene archivadas. Anotado.

### Huecos

- Los mismos de siempre, más el de la energía en los 2.016 partes anteriores.
- **Las 368 anclas del Nomenclátor siguen sin repasar** contra el Inventario de
  Presas.
- De paso: el encabezado del contrato se había quedado en **1.39.0** cuando §13
  ya registraba la 1.40.0. Corregido.

---

## datos-v2026.08.49 — Una capa puede tener página, y lo dice el manifiesto

**Ningún registro cambia.** Esta release existe por un fallo de descubribilidad
que se vio al día siguiente de publicar `/agua/`: la página llevaba veinticuatro
horas viva y **desde la portada del atlas no había manera de llegar**. Se
alcanzaba desde Método, desde el índice de la capa y desde el bloque sin
JavaScript — o sea, desde ningún sitio para quien abre el mapa.

### Añadido

- **contrato 1.39.0 → 1.40.0, §3: el campo `pagina`** en la entrada de capa.
  Dónde vive la página que cuenta esa capa entera, si la tiene:

  ```json
  "pagina": { "ruta": "/agua/", "titulo": "El parte semanal" }
  ```

  Hoy solo la declara `agua-embalsada`. **No nace ninguna regla `R*`**, pero §7.8
  gana un diente pequeño: una `pagina` a medias —sin ruta o sin título— bloquea,
  porque produce un enlace roto o sin rótulo que nadie ve hasta que lo pulsa.

### Por qué en el manifiesto y no en el código

Es la misma razón por la que `series` vive ahí desde la 1.35: **el visor ofrece
el enlace sin conocer capas por su nombre**. Al declararlo el manifiesto, la
acción aparece sola en el panel de cualquier capa que lo traiga.

Y de paso muere una contradicción que duró un día: el generador de fichas tenía
una **tabla escrita a mano** con `agua-embalsada` dentro para poner ese mismo
enlace en el índice de la capa. Funcionaba y contradecía la regla de la casa
—«añadir una capa es añadir su entrada, sin tocar código de panel»—. Ahora los
dos sitios leen el mismo campo.

### Dónde aparece el enlace, y por qué ahí

- **En el panel de la capa**, junto a *Encuadrar · Solo esta · GeoJSON*. Es donde
  el lector ya ha mostrado interés por esa capa, funciona en teléfono y **no
  cuesta un píxel de cromo a las otras treinta**.
- **En la barra del visor**, para quien llega a la portada sin saber que existe.
  Hoy apunta directo a `/agua/`.
- Y donde ya estaba: Método, el índice de la capa y la portada sin JavaScript.

**La barra no crece con las capas.** El día que haya una segunda página, ese
enlace pasará a apuntar a un índice en vez de sumarse otro: con tres, la barra
del visor deja de ser un instrumento y se convierte en un menú. Queda escrito
aquí y en §3 para que nadie añada el tercero.

### Lo que esta release no arregla

**En teléfono los enlaces de la barra están ocultos** —lo estaban ya para Método
y El Tercio, por sitio— así que desde un móvil a la portada se sigue llegando
solo por el panel de la capa. Cambiar esa regla es otra decisión y toca el visor
en algo que hoy funciona; no se ha tocado.

### Huecos

- Los mismos: ninguno de cobertura en `agua-embalsada`, y 401 de 401 **no es la
  reserva de España** porque el Boletín cubre solo los embalses peninsulares de
  más de 5 hm³ — así lo describe el Ministerio, y así lo dice ahora la página.
- **Las 368 anclas del Nomenclátor siguen sin repasar** contra el Inventario de
  Presas.

---

## datos-v2026.08.48 — Los 401, y la pregunta que estaba mal hecha

`agua-embalsada` pasa de 396 a **401 registros: todos los del histórico del
Boletín Hidrológico**. Entran los cinco «Sistema…» del Pirineo, que llevaban
seis releases declarados como hueco y que ayer mismo se estudiaron y se dieron
por imposibles **con la pregunta equivocada**.

### La pregunta estaba mal hecha

El estudio del día anterior (en `PLAN.md`) buscó en ocho sitios **de qué lagos
se compone cada sistema**, no lo encontró en ninguno, y concluyó que sin eso no
había geometría honesta. Todo cierto. Y todo irrelevante:

> **No hace falta saber qué agrega un conjunto si la administración le asigna
> una coordenada al conjunto.**

Y se la asigna. El modelo de datos de la propia BD-Embalses —un PDF de dos
páginas que acompaña al histórico— remite al **Anuario de Aforos**; el parte
semanal de la Confederación del Ebro da a cada sistema un **código de estación**;
y la **Red Oficial de Estaciones de Aforo** publica cada estación con su punto,
su volumen, su río y su término municipal. Los cinco están ahí.

### Añadido

| Sistema | Boletín | Estación ROEA | Volumen | Cómo se identificó |
|---|---|---|---|---|
| Capdella | 50 hm³ | 9854 | 50,0 | «CAPDELLA ( SISTEMA )» |
| Valle de Arán | 22 | **9853** | 22,0 | sin nombre — ver abajo |
| Aguas Limpias | 18 | 9833 | 17,8 | «AGUAS LIMPIAS ( SISTEMA )» |
| Alto Caldarés | 18 | **9834** | 17,5 | sin nombre — ver abajo |
| Lagos Espot | 10 | 9855 | 10,0 | «ESPOT ( SISTEMA )» |

**Dos fichas del ROEA vienen sin nombre**, y su identificación se apoya en todo
lo demás y va con `geo_fuente__v: parcial`:

- **9853 → Valle de Arán.** Estación de embalse de la C.H. Ebro sobre el **río
  Ruda** —en pleno valle—, término de **Alto Aneu**, de **ENDESA**, con 22,0 hm³
  contra los 22 del Boletín, el mismo período de medición (1958-1995) y el mismo
  sistema de explotación «Segre - Noguera Pallaresa» que sus vecinas Capdella y
  Espot, que sí llevan nombre.
- **9834 → Alto Caldarés.** Estación de embalse sobre el **río Caldarés**,
  término de **Panticosa** —que es exactamente lo que nombra el Boletín—, de
  **EASA**, con 17,5 hm³ contra 18.

**El punto es el de la estación, no el de un vaso**, y cada ficha lo dice en su
primera clave. Un sistema son varios lagos repartidos por un valle: ninguno de
ellos es «el» sitio, y el conjunto sí tiene uno oficial.

**Y una salvedad que también va escrita:** las fichas del ROEA de estas cinco
figuran como **BAJA**, con medición terminada en 1995, mientras el Boletín
publica su reserva cada semana. Es el estado de la ficha del Anuario, no del
embalse — el punto y el volumen que da siguen siendo los del conjunto y
coinciden con los que el Boletín publica hoy.

### Cambiado

- **`sistemaescarra-ebro` se muda a su estación** (la 9832, «ESCARRA
  ( SISTEMA )») y pasa de `paraje` a `exacta`. Con eso **deja de estar encima de
  «Embalse de Escarra»**: hasta ayer los dos compartían coordenada exacta y
  parecían un error; ahora hay cien metros entre el lago y la estación del
  sistema, y la clave de cada uno explica que son la misma agua en dos filas de
  la fuente. El duplicado que la `.47` decidió no deshacer se ha deshecho solo,
  y por el lado correcto: publicando mejor, no borrando.
- **`/agua/` se queda sin sección de ausentes.** La lista está vacía por primera
  vez y la sección no se pinta; su guarda sigue en pie para el día que el Boletín
  estrene una fila que el atlas no sepa situar.

### Lo que esta release deja como método

**Cuando un objeto no se puede describir, pregúntale a quién lo mide.** Se
buscaron ocho fuentes que dijeran de qué se compone un sistema y ninguna lo
decía; la que resolvió no describe el objeto en absoluto — solo dice dónde está
el aparato que lo mide. Era la pregunta más fácil y se hizo la última.

De propina, la estación **9861 «SAN LORENZO MONGAY»** confirma por su cuenta la
identificación que la `.47` había hecho por evidencia negativa unas horas antes.

### Huecos

- **Ninguno de cobertura**: por primera vez, todo lo que el Boletín publica está
  en el mapa. **Pero 401 de 401 no es la reserva de España** — el Boletín no
  cuenta todo lo embalsado del país, y la cifra del Ministerio es algo mayor.
  La página lo dice donde se lee el total.
- **La composición de los cinco sistemas sigue sin publicarse.** Ahora se sabe
  dónde están; sigue sin saberse qué lagos agregan. Si alguna vez aparece, la
  ficha ganará esa lista y no cambiará el punto.
- **Las 368 anclas del Nomenclátor siguen sin repasar** contra el Inventario de
  Presas — lo único que queda vivo de toda esta tanda.

---

## datos-v2026.08.47 — Ocho lagos que no se habían callado

`agua-embalsada` **394 → 396** y el **99,9 % de la capacidad embalsada**. Entran
los dos que llevaban tres releases descritos como «hay candidato y la evidencia
lo desmiente». Pero lo que esta release corrige de verdad no son dos ausencias:
es **una afirmación falsa que el atlas llevaba publicando desde la `.18`**.

### Corregido: el parte no se cerró, se agregó

Ocho fichas decían, cada una en su clave, «este parte dejó de alimentarse». Las
ocho traían la misma fecha: **26 de septiembre de 2006**. Y la semana siguiente,
el **3 de octubre de 2006**, el Boletín estrena cinco filas nuevas con nombre de
sistema.

No es una coincidencia y dos de las correspondencias son exactas:

| Deja de publicarse | | Empieza a publicarse | |
|---|---|---|---|
| Escarra | 5 hm³ | **Sistema Escarra** | 5 hm³ |
| Respomuso | 18 hm³ | **Sistema Aguas Limpias** | 18 hm³ |

Respomuso está sobre el **río Aguas Limpias**. Los otros seis —Mar, Saburó,
Bachimaña, Tort, Negro y Bramatuero Alto— son lagos regulados de la Vall Fosca,
Espot y el alto Caldarés, y sus valles dan nombre a los otros tres sistemas.

**El Boletín no dejó de medirlos: dejó de publicarlos por separado.** La clave
de las ocho fichas pasa a decir eso, que es lo que ocurrió. Cada una conserva su
última cifra **individual**, que es lo último que se supo de ese vaso por su
cuenta, y ahora dice también que su agua se sigue midiendo dentro de su sistema.

Un dato que llevaba veinte años siendo cierto y una explicación que llevaba tres
semanas siendo engañosa: **el error no estaba en la cifra, estaba en el porqué**.

### Añadido

- **Fresneda** (19 hm³, Ciudad Real). El Nomenclátor tiene **exactamente dos**
  «Embalse de la Fresneda» en España, y por eso la `.32` lo dejó fuera: uno en
  la cuenca del Ebro y otro sobre el Jándula. **Lo que los separa es la
  demarcación**, que el Boletín sí da — dice Guadalquivir, y el Jándula
  desemboca en el Guadalquivir. El Inventario corrobora con una presa a ocho
  metros del topónimo. **Desacuerdo declarado y no tapado:** el Inventario le da
  13,2 hm³ y el Boletín 19; se publica la del Boletín, que es quien mide el agua
  cada semana.
- **San Lorenzo** (10 hm³, Lleida). El Boletín castellaniza el nombre y ahí se
  perdía. **La evidencia que decide es NEGATIVA:** alrededor de la presa riojana
  del Cárdenas, el Nomenclátor devuelve 174 topónimos y **ni un embalse** — el
  Inventario la registra como proyecto y sobre el terreno no hay vaso. Alrededor
  de la de Lleida hay un racimo entero: «Pantà de Sant Llorenç de Montgai», su
  central hidroeléctrica, su apeadero y su pueblo. El parte semanal de la
  Confederación del Ebro la lista además entre los embalses catalanes, junto a
  Camarasa y Terradets.

**Que una fuente no diga nada donde debería decirlo es una prueba**, y es la
primera vez que este atlas la usa para decidir una identidad.

### Sobre el duplicado de Escarra, y por qué no se deshace

El atlas publica **dos registros en la misma coordenada**: «Embalse de Escarra»,
histórico con su cifra de 2006, y el sistema que lo sustituyó, vivo con la de
esta semana. Es la misma agua dos veces, y entró así porque el emparejador de la
`.32` trató el nombre nuevo como un registro nuevo.

Deshacerlo pedía una de dos cosas, y ninguna se hace:

- **Borrar uno.** El atlas no borra registros, y ninguno de los dos es falso:
  son dos filas de la fuente y cada una dice algo distinto y cierto.
- **Empalmarlos en una sola serie.** Habría que afirmar que la fila «Escarra» y
  la fila «Sistema Escarra» son la misma película, y eso es una inferencia del
  atlas, no un dato de nadie. §4.1 prohíbe empalmar para cubrir tramos distintos del
  tiempo, y aunque aquí el emisor y la operación son los mismos, la decisión
  seguiría siendo del atlas.

Lo que sí se hace: el agregado **deja de llamarse «Embalse de Sistema Escarra»**
—que era un nombre fabricado por el prefijo automático— y pasa a «Sistema
Escarra»; y **cada uno de los dos explica en su ficha por qué comparten punto**.
Un mapa más limpio a costa de una verdad no es un trato que este atlas haga.

### Huecos

**Quedan 5 de los 401 del Boletín, 118 hm³ — el 0,21 % de la capacidad**, y
todos por el mismo motivo: son los cinco «Sistema…» del Pirineo.

**Se estudió añadirlos y la respuesta es no, por geometría.** Un sistema es un
conjunto de lagos repartidos por un valle, y **ninguna fuente publica de cuáles
se compone cada uno**. Anclarlo en uno de sus lagos y llamar a eso `paraje`
sería ascender de rango sin que ascienda la evidencia (§6.6) — funciona con
Sistema Escarra porque ese es un sistema de uno, y no funcionaría con Capdella,
que agrega varios.

*Lo que los sacaría del hueco:* que la Confederación del Ebro, o cualquier acto
de concesión hidroeléctrica, publique la composición de cada sistema. Entonces
la geometría honesta existiría y habría que decidir cómo se dibuja un conjunto.

- **Las 368 anclas del Nomenclátor siguen sin repasar** contra el Inventario de
  Presas. La `.44` cazó a Las Cogotas a 157 km de donde debía; tres kilómetros
  no los caza nadie.

---

## datos-v2026.08.46 — Tres embalses que se llamaban de otra manera

`agua-embalsada` **391 → 394** y del 99,6 % al **99,8 % de la capacidad
embalsada**. Los tres que entran son los que la `.45` dejó anotados como «sin
candidato», y el motivo de que no lo tuvieran era siempre el mismo: **el Boletín
y el Inventario los llaman de forma distinta**, y ninguna búsqueda por nombre
puede juntar dos nombres que no se parecen. Lo que hace falta es una tercera
fuente que los nombre a los dos.

### Añadido

- **La Cabezuela** (43 hm³, Ciudad Real) — y la puente la pone el **Nomenclátor**,
  que rotula las dos cosas **a sesenta metros una de otra**: «Presa de la
  Cabezuela» y «Embalse de Mari Sánchez». El Boletín nombra el embalse por su
  presa; el Inventario, por el embalse, y lo registra como «MARISANCHEZ» con
  42,84 hm³ sobre el Jabalón.
- **Olivargas** (29 hm³, Huelva) — el Boletín la llama Olivargas y el Inventario
  del Ministerio, «SOTIEL». La prueba de que son la misma presa **no la da
  ninguno de los dos**: la da el **DERA de la Junta de Andalucía**, que la
  registra con los dos nombres en el mismo rótulo, «SOTIEL / OLIVARGAS».
- **Hornachuelos** (12 hm³, Córdoba, histórico: mudo desde 2012) — la
  identificación más débil de las tres, y por eso se cuenta entera. **Ninguna
  fuente lo llama Hornachuelos**: el Boletín lo nombra por su municipio, como ya
  hacía con Catllar («Pantà del Gaià», release `.32`). Lo que sostiene la
  identidad es la convergencia: el azud de derivación del Bembézar tiene 12,01
  hm³ contra los 12 del Boletín, está en el término de Hornachuelos, y el
  embalse del Bembézar propiamente dicho ya se publica aparte con sus 347 —
  así que no hay confusión posible entre los dos.

Los tres van con `geo_fuente__v: parcial` y su clave contando la evidencia
entera, que es lo que la `.32` hizo con las once identificaciones no literales
de entonces.

### Dos fuentes nuevas, y las dos por lo mismo

Entran al archivo el **DERA grupo 3 «Hidrografía»** del IECA (CC BY 4.0,
declarada en las restricciones del propio servicio WFS) y una captura acotada
del **Nomenclátor** sobre los tres recuadros. Ninguna de las dos aporta un dato
de la ficha: aportan **la identidad**, que es el dato que faltaba.

Y con eso queda dicho algo que este atlas no había necesitado escribir todavía:
**una fuente puede servir para probar que dos nombres son la misma cosa, sin
aportar ni una cifra.** Es tan cita como cualquier otra y va con su copia
archivada.

### Por qué el Nomenclátor no los tenía, y sí los tenía

La `.32` barrió el Nomenclátor por los tipos «Embalse», «Masa de agua» y
«Conjunto de masas de agua» y declaró estos tres como sin topónimo. Era cierto
para lo que buscó: **el IGN rotula la presa de la Cabezuela bajo el tipo
«Construcción/instalación abierta»**, que no estaba en la lista. Y Olivargas sí
figura como «Embalse», pero con la etiqueta desnuda —«Olivargas», sin «Embalse
de»— y a 1,7 km de su presa.

La lección, que vale para cualquier capa: **un barrido por tipos es un barrido
por lo que el emisor decidió llamar a cada cosa**, y eso no siempre coincide con
lo que la cosa es.

### Cambiado

- **`/agua/` pasa de contar 10 ausentes a contar 7**, 129 hm³. Y se cae uno de
  los tres motivos de la tabla: ya no queda ningún embalse «sin candidato».

### Huecos

**Quedan 7 de los 401 del Boletín, 129 hm³ — el 0,23 % de la capacidad**, y
ahora por solo dos motivos:

| Motivo | Cuántos | Quiénes |
|---|---|---|
| No son un embalse: el Boletín suma varios vasos bajo un nombre de sistema | 5 | Capdella, Valle de Arán, Aguas Limpias, Alto Caldarés, Lagos Espot |
| Hay candidato y la evidencia lo desmiente | 2 | Fresneda, San Lorenzo |

- **Los cinco «Sistema…» no van a entrar** mientras el Boletín los publique
  sumados: no hay una presa que les corresponda porque no son un objeto.
- **Fresneda y San Lorenzo siguen fuera y siguen siendo la mejor explicación de
  la regla.** En San Lorenzo el nombre apunta a una presa de La Rioja que el
  Inventario da como proyecto, y la capacidad y el estar en explotación apuntan
  a «San Lorenzo Mongay», en Lleida. Dos evidencias que señalan a sitios
  distintos no son una identificación.
- **Las 368 anclas del Nomenclátor siguen sin repasar** contra el Inventario.
  Sigue valiendo lo que dijo la `.44` cuando Las Cogotas apareció a 157 km de
  donde debía: una desviación de tres kilómetros no la caza nadie.

---

## datos-v2026.08.45 — Cuatro más, y los diez que faltan dejan de ser un porcentaje

Continuación directa de la `.44`, y sale de una pregunta: **¿se puede hacer algo
con los catorce que quedaban fuera?** Con cuatro sí, y el motivo de que no
entraran antes era **del emparejador, no de la fuente**.

### Añadido

- **`agua-embalsada` 387 → 391 registros** (1.1.0 → 1.2.0), del 99,5 % al
  **99,6 % de la capacidad embalsada**. Entran **Lechago** (18 hm³, Teruel),
  **Nagore** (5, Navarra), **San Antón** (5, Navarra) y **Las Fitas** (9,
  Huesca), con sus cuatro películas.

### El emparejador comparaba cadenas donde tenía que comparar palabras

Los cuatro estaban en el Inventario desde el primer día. No se vieron por dos
motivos, y los dos son de método:

- **La `.44` emparejó contra el fichero de VASOS y ancla en el de PRESAS.** Son
  dos ficheros distintos del mismo Inventario y **no tienen los mismos
  registros**: Nagore y San Antón están en el de presas y no en el de vasos.
  Buscar en un sitio y publicar desde otro es la clase de descuido que no avisa.
- **El artículo invertido y el paréntesis.** El Boletín dice «Las Fitas» y el
  Inventario «Fitas, Las»: como cadenas normalizadas, `lasfitas` ≠ `fitaslas`.
  Y Lechago figura como «RIO JILOCA (REGULACION) **(LECHAGO)**», porque el
  Inventario nombra la presa por su función y deja el embalse entre paréntesis.
  Comparando **juegos de palabras** —sin artículos, sin orden— los dos casan.

Las tres primeras se confirman solas: la capacidad del Inventario cuadra con la
del Boletín (18,16 contra 18; 4,71 contra 5; 5,09 contra 5). **Las Fitas** entra
por el precedente de Terroba: nombre y cauce cuadran y su capacidad viene
corrupta en la fuente (8.085.000.000), así que no hay con qué contrastar y se
dice en su ficha.

Y un aviso que el filtro de demarcación se ganó otra vez: **hay dos «San
Antón»**, uno en el Cantábrico Oriental y otro en el Guadalquivir. Sin ese
filtro, la elección habría sido a cara o cruz.

### Los diez que quedan, contados en vez de resumidos

Hasta hoy la ausencia se decía en porcentaje —«el 99,5 % de la capacidad»—, que
es una manera educada de no decirlo. **Ahora `/agua/` los nombra uno a uno**,
con su demarcación, su capacidad y el motivo, y suma lo que falta: **231 hm³**.
De ellos se sabe el agua —la publica el Boletín cada semana, igual que la de los
demás— y **no se sabe dónde están**.

| Motivo | Cuántos | Quiénes |
|---|---|---|
| No son un embalse: el Boletín suma varios vasos bajo un nombre de sistema | 5 | Capdella, Valle de Arán, Aguas Limpias, Alto Caldarés, Lagos Espot |
| Ninguna presa del Inventario casa con su nombre ni con su cauce | 3 | La Cabezuela, Olivargas, Hornachuelos |
| Hay candidato y la evidencia lo desmiente | 2 | Fresneda, San Lorenzo |

**No entran como registros sin geometría, y conviene decir por qué.** Un atlas
es un mapa: un registro que no se puede pintar rompe lo que la capa promete. Y
para contarlos no hace falta publicarlos — hace falta declararlos, que es
exactamente lo que esta casa hace con todo lo que le falta.

La página lleva **dos guardas** para que esa cuenta no pueda pudrirse sola: si
alguno de los diez llegara a publicarse y se olvidara sacarlo de la lista,
revienta el build; y si publicados más ausentes no suman los **401** del
histórico, también — que es la única manera de perder uno en silencio.

**San Lorenzo sigue siendo el caso que enseña la regla.** El nombre apunta a una
presa de La Rioja que el Inventario da como proyecto; la capacidad y el estar en
explotación apuntan a «San Lorenzo Mongay», en Lleida. Dos evidencias que
señalan a sitios distintos no son una identificación: son una historia creíble.

### Huecos

- **Los diez de la tabla**, 231 hm³, el 0,41 % de la capacidad. Cinco no
  entrarán nunca mientras el Boletín los publique sumados.
- **La vía no está agotada para tres de ellos.** La Cabezuela, Olivargas y
  Hornachuelos son de cuencas cuyas **Confederaciones Hidrográficas** publican
  sus propios listados y geoportales, y una Confederación es organismo público
  — fuente primaria. No se ha mirado.
- **Las 368 anclas del Nomenclátor siguen sin repasar** contra el Inventario. Lo
  que dijo la `.44` sigue valiendo: Las Cogotas salió porque estaba a 157 km, y
  una desviación de tres kilómetros no la caza nadie.

---

## datos-v2026.08.44 — La puerta que llevaba seis releases cerrada, y un punto que estaba a 157 km

`agua-embalsada` pasa de **369 a 387 registros** y del 98,4 % al **99,5 % de la
capacidad embalsada de España**. No hay dato nuevo del agua: el Boletín publica
la de estos dieciocho desde hace años. **Lo que faltaba era el punto.**

### La puerta

Desde la release `.18`, la ficha de procedencia de esta capa decía —seis
releases seguidas— que el **Inventario de Presas y Embalses** del SNCZI estaba
tras un **ALTCHA**, un CAPTCHA de prueba de trabajo puesto a propósito, y que
**no se salta**. Sigue sin saltarse: **se descargó a mano, con un navegador**,
que es exactamente lo que el ALTCHA pide y lo que ningún guion de este repo
hace.

Queda escrito el camino, porque volverá a hacer falta: la página de descargas
del IDE enlaza a `gis.miteco.gob.es/descargas/app/DescargaFichero?f=`, y la
prueba de trabajo se resuelve sola antes del botón. **Por guion, esa misma URL
devuelve la página del ALTCHA con un `200`** — un 404 disfrazado de éxito. Se
descubrió mirando los primeros bytes: `<!DO`, no `PK`.

**Licencia comprobada antes que los datos**, como manda la lección de la `.25`:
el aviso legal de MITECO invoca la **Ley 37/2007** y el **RD 1495/2011 art. 7**,
el mismo régimen con el que esta casa ya publica el Boletín, el Catastro Minero,
Electra y los anuncios de Costas.

### Añadido

- **18 embalses**, uno histórico (Villafranca, mudo desde 2008), **268 hm³ de
  capacidad**: Arenoso (167), San Salvador (137), Villar del Rey (131), Enciso,
  Laverné, Castro, Casasola, Víboras, Sequeiros, Santa Eulalia, Llerena, Ibiur,
  Villafranca, Algar, Valdepatao, Las Parras, Urdiceto y Terroba. Con ellos, las
  **18 películas** que les faltaban: la capa pasa de 369 a 387 series y de
  683.892 a 704.036 partes.

  > **Nota del 2026-08-14:** ese «683.892» es la cifra de la `.32`, no la de la
  > release anterior. La `.43` había dejado el histórico en **684.236** —lo dice
  > su propia entrada— al añadir el parte del 11 de agosto. El final sí es
  > exacto (684.236 + 19.800 de las 18 series nuevas = 704.036, medido sobre las
  > etiquetas), y ninguna serie está mal: lo que se arrastró fue el punto de
  > partida de una frase. El registro no se reescribe, se anota.
- **Una segunda clase de ancla, y cada ficha dice la suya.** Los 369 anteriores
  se anclan en el Nomenclátor (`paraje`: un topónimo es primario para el NOMBRE
  del lugar, no para el perímetro). Estos 18 se anclan en la **coordenada de la
  presa** que publica el Inventario, y eso es `exacta` por §6.6 — con su
  `geo_fuente` diciendo qué se está señalando: *el punto es la presa; el vaso se
  extiende aguas arriba*.
- **Cuando un embalse tiene varias presas**, se ancla en **la más alta desde
  cimientos**. Un dique de collado es más bajo que la presa principal por
  construcción, no por casualidad, y lo mismo vale para la presa vieja que quedó
  «Inundada» bajo su recrecimiento. Seis de los dieciocho lo necesitaron.
  Cuando el Inventario no publica esa altura —viene corrupta en algún
  registro—, decide cuál está en explotación; y si ninguna de las dos cosas
  resuelve, el guion revienta en vez de elegir.

### Corregido

- **`agua-embalsada:castrodelascogotas-duero` · geometría —
  `[-6,16302, 41,58087]` → `[-4,69719, 40,72453]`.** El embalse de Las Cogotas
  está en Ávila, sobre el Adaja, y la ficha lo situaba **a 157 km, en Zamora**,
  encima del embalse de Castro, que es otro. El ancla venía de un topónimo del
  Nomenclátor y nadie lo había desmentido porque **no había con qué**: hasta
  ahora la única fuente de geometría de esta capa era esa. El contraste con el
  Inventario lo cazó en la primera pasada — misma demarcación, 58,6 hm³ que
  cuadran con los 58 del Boletín, y la presa de bóveda en el sitio correcto.
  La ficha conserva el error contado en una clave: **un dato corregido sin
  decir qué decía antes no es una corrección, es un borrado**.

### Lo que enseña esta release sobre emparejar por nombre

Es la segunda vez en el mismo día. Emparejando los 401 embalses del Boletín con
las 3.208 presas del Inventario **solo por el nombre**, salieron **siete parejas
falsas**: «La Cierva» con «La Cierva» a 442 km, «Bárcena» con «Bárcena» a 214.
Filtrando además por **demarcación** —que las dos fuentes declaran— caen tres, y
las que quedan lejos resultan ser las de verdad: Alcántara a 33 km, Cedillo a
28, Mequinenza a 26, que son embalses de decenas de kilómetros de cola donde el
centro del agua y la presa están genuinamente lejos.

La comprobación que da derecho a publicar esto: reproyectados los 272 embalses
que ambas fuentes comparten, la distancia **mediana entre las dos anclas es de
2,34 km**, con 209 por debajo de 5 km. No es cero y no debía serlo — el
Nomenclátor rotula un lugar y el Inventario sitúa una presa.

### Huecos

**Quedan 14 de los 401 del Boletín, 268 hm³ — el 0,47 % de la capacidad.** Ni
uno en silencio, y ahora por dos motivos distintos:

| Motivo | Cuántos | Quiénes |
|---|---|---|
| No son una presa: el Boletín agrega varios vasos bajo un nombre de sistema | 5 | Capdella, Valle de Arán, Aguas Limpias, Alto Caldarés, Lagos Espot |
| No casan con ninguna presa del Inventario sin adivinar la identidad | 9 | La Cabezuela, Olivargas, Fresneda, Lechago, Hornachuelos, San Lorenzo, Las Fitas, Nagore, San Antón |

- **El caso que mejor explica la regla es San Lorenzo** (Ebro, 10 hm³). El
  Inventario trae dos candidatos: «San Lorenzo» en La Rioja, de 8,5 hm³, que
  registra como **proyecto**; y «San Lorenzo Mongay» en Lleida, de 9,51, en
  explotación. El Boletín dice 10 y lleva informando desde 2017. Cualquiera de
  los dos sería una historia creíble, y por eso no entra ninguno: **la
  verosimilitud no es una fuente**.
- **Sigue sin publicarse el vaso**, solo el agua y ahora la presa. El fichero de
  vasos del Inventario se descargó y **se descartó a conciencia**: su punto
  habría que calcularlo del polígono, y el centro del recuadro de un embalse
  sinuoso cae en tierra.
- **Los 369 anclados en el Nomenclátor no se han revisado uno a uno.** Las Cogotas
  salió porque estaba a 157 km; una desviación de tres kilómetros no la caza
  este contraste, y tampoco la caza nadie. Repasar la capa entera contra el
  Inventario es trabajo de otra release.

---

## datos-v2026.08.43 — El primer refresco de la película, y lo que cuesta una semana

**Nada nuevo entra y no cambia una sola regla**: es el primer **refresco
rutinario** de `agua-embalsada` desde que la capa tiene serie, y sirve para
comprobar que la foto y la película se mueven juntas. El parte del **11 de
agosto** del Boletín Hidrológico Semanal, contra el del 4 que la capa venía
publicando.

### Corregido

- **`agua-embalsada` (1.0.0 → 1.0.1, parche: corrección de valores).** 344 de
  las 369 fichas traen cifra nueva; **ninguna capacidad cambia**. La reserva de
  esos 344 pasa de **38.435 a 37.537 hm³** —898 menos en siete días, sobre una
  capacidad de 55.135—: 184 embalses bajan, 18 suben y 142 se quedan donde
  estaban. Las caídas gordas son las de siempre en agosto y todas del oeste:
  Almendra −58, Alcántara −56, Valdecañas −42, La Serena −36.
- **Las 369 series ganan su parte**, 344 con punto nuevo y 25 sin él. El
  histórico pasa de **683.892 a 684.236 partes**, y **R11 cuadra a la primera**:
  la última cifra de cada película es la que dice su ficha.

### Los 25 embalses mudos, que son el detalle que importa

Veinticinco fichas **no se tocan**, y no por descuido: esos embalses dejaron de
informar al Boletín hace años —algunos en 2003, 2006, 2011— y su `fecha_dato` se
quedó anclada a su última cifra. **Un embalse mudo no hereda la fecha de los que
sí hablan.** Habría sido cómodo estampar el 11 de agosto en las 369 y publicar
un parte redondo; sería falso en veinticinco de ellas, y la ficha de Escarra
seguiría diciendo lo que el Ministerio dijo en 2006 con fecha de esta semana.

Lo que sí cambia en las veinticinco es `fecha_verificacion`: **se comprobó que
siguen calladas**, y eso es una pasada de verificación con su resultado —el
mismo dato de antes, confirmado hoy—, no un dato sin revisar.

### El archivo se REEMPLAZA, y conviene decirlo

El histórico del Boletín se archiva entero cada vez (11,3 MB, 1988-2026), así
que la copia nueva **sustituye** a la vieja en `fuentes/` en lugar de acumularse:
guardar una copia semanal de la misma base engordaría el repositorio en medio
giga al año para conservar lo que la copia nueva ya contiene. La copia de cada
edición anterior **no se pierde**: vive en su etiqueta de Git y en su depósito de
Zenodo, que es exactamente para lo que sirven.

**Y el refresco toca cuatro sitios, no dos** —queda escrito porque volverá cada
mes—: la capa, las 369 series, la fuente archivada y **el `archivo` que citan
los casos de prueba**, que si no se mueve deja tres pruebas en rojo
por §7.7 (fichero archivado inexistente). Las tres cayeron en esta tanda y así se
descubrió.

### Huecos

- Los mismos de siempre, y ninguno se ha movido: **32 embalses del Boletín
  siguen sin ficha** (sin topónimo en el Nomenclátor, o agrupaciones sin vaso
  propio), y la capa registra **el agua, no el vaso** — la geometría de la presa
  sigue tras el CAPTCHA del SNCZI.
- **El porcentaje de llenado se sigue sin publicar**, y esta entrada lo cita en
  prosa a conciencia: sale de dividir dos cifras que la capa ya da, y R7 prohíbe
  el campo derivado, no el comentario.

---

## datos-v2026.08.42 — La red que no estaba en el fichero que se dejaba bajar

Última capa del **segundo horizonte**, y la que más se resistió. No por los
datos: por el portal que los guarda.

### Añadido

- **Nace `conducciones-combustible`** (31 capas), rama `energia`: **11.112 km de
  gasoducto y 4.106 km de oleoducto**, del levantamiento de la **Base
  Topográfica Nacional** del IGN, objeto `0701L Conducción de combustible`.
- **Dos registros y no 3.106.** La BTN trae el campo `nombre` **a NULL en todas**
  sus conducciones. Bautizarlas por sus extremos fabricaría nombres que nadie ha
  dado, así que se publica lo que la fuente sí distingue —el tipo— agregando sus
  tramos. Es la misma decisión que hizo que el tendido eléctrico fueran dos
  registros y no 1.784, y el campo `n_tramos` dice cuántos objetos hay detrás
  para que la agregación se lea como decisión y no como descuido.

### Lo que más vale de esta capa es que estuvo a punto de no existir

El filón se había dado por **viable** leyendo las especificaciones del IGN: el
objeto existe, el atributo que separa gas de petróleo existe, la licencia es la
que el atlas ya usa. Todo cierto. Y al medir **los datos**, falso:

- La **BTN100** —la versión que se podía descargar sin navegador— traía **1.390
  km** de gasoducto. La red de transporte española ronda los 11.000.
- Se midió su distancia a las instalaciones que el atlas ya publica: la planta
  de Huelva a **233 km**, el Magreb-Europa a **282**, Medgaz a **191**, Bilbao a
  **117**, Barcelona a **87**. No era una red incompleta: era una **muestra
  fragmentaria**.
- Publicarla como «los gasoductos de España» habría sido una afirmación falsa
  **con cartografía oficial detrás**, que es la peor clase.

Se cerró el filón con su medida y se pidió la **BTN Continua**, que no se deja
descargar por guion: hizo falta un navegador. Esa sí tiene la red — **11.116 km**
que cuadran con la red de transporte, y que pasan **a menos de 5 km de las siete
plantas de GNL y de las seis interconexiones** que el atlas publica.

**La lección, escrita porque volverá:** una especificación dice lo que un fichero
**puede** contener, no lo que contiene. La diferencia se mide.

### Lo que esta capa NO dice, y por qué

- **Ni titular, ni presión, ni diámetro, ni si conduce hoy.** La BTN es una carta
  topográfica: mide dónde está el eje y de eso responde. Quien publica el mallado
  con esos atributos es el operador —fuente corporativa, que por R3 no sostiene
  un confirmado—, y **no se sustituye un dato por su parecido**. El esquema los
  prohíbe explícitamente, igual que `fase`: un «no está en servicio» por falta de
  dato es justo la mentira que R7 evita.
- **Casi toda la red va enterrada** — el 99 % de los tramos se declara
  subterráneo. Es una red que se dibuja y no se ve.
- **No hay una fecha única de actualización.** El IGN actualiza «por objeto
  geográfico y/o capa» y la fecha vive en cada tramo: el grueso es de 2018, con
  revisiones sueltas hasta 2024. Publicar un año único fabricaría una precisión
  temporal que la fuente no da.

### La longitud, y por qué se llama como se llama

`longitud_medida_km`, no `longitud_km`: **el IGN no publica ninguna longitud**.
La mide el atlas, y por eso va «parcialmente verificada» — medir sobre un dato
primario no convierte la medida en primaria. Y **mide sobre la geometría ya
simplificada**, no sobre la original: si midiera la original, la ficha diría una
cifra que el mapa no dibuja.

La simplificación va a **5 metros**, no a los 25 del tendido eléctrico, y se
eligió por lo que **cuesta**, no por lo que ahorra. Se probaron cuatro
tolerancias:

| Tolerancia | Vértices que caen | Longitud que se pierde |
|---|---|---|
| 5 m | 87 % | **0,035 %** |
| 10 m | 90 % | 0,094 % |
| 15 m | 91 % | 0,166 % |
| 25 m | 93 % | 0,333 % |

A 25 m la pérdida era veinte veces mayor que la que costó simplificar el
tendido, porque **estas conducciones curvan más que una línea de alta tensión**,
que va recta entre torres. A 5 m la pérdida vuelve al mismo orden.

### Contrato

- **1.38.0 → 1.39.0** (aditiva). §10 estrena `n_tramos` y `longitud_medida_km`,
  y un esquema que existe sobre todo para **prohibir**: `titular`, `propietario`,
  `operador`, `presion_bar`, `diametro_mm` y `fase`. **No nace ninguna regla
  `R*`.**

### Huecos

- Los dos registros declaran los mismos, y son los de arriba: **sin titular, sin
  presión, sin diámetro, sin servicio y sin fecha única**.
- **Lo que esta capa NO cierra:** el atlas no puede decir qué parte de estos
  11.112 km es red de transporte y cuál de distribución. La BTN no lo distingue,
  y quien sí lo hace es el operador.

## datos-v2026.08.41 — La segunda película, y la gráfica que rotulaba el gas en hectómetros

El atlas llevaba desde la `.36` con **una sola película**: la reserva semanal de
los embalses. Esta release estrena la segunda, y es la que hace **visible** el
hallazgo de la `.39` — el gasoducto del Magreb no está parado, está al revés.
Ahora se ve en una gráfica: la línea de importación cayendo a cero en 2021 y la
de exportación levantándose después.

### Añadido

- **`gas-interconexiones` estrena serie**: el **flujo mensual** de Medgaz y del
  Magreb-Europa, **269 partes cada una desde enero de 2004**, de la estadística
  de CORES ya archivada. La del Magreb lleva **dos columnas** —importación y
  exportación— porque una sola contaría media historia.
- **Los campos que la sostienen**: `importacion_mes_gwh` y, donde aplica,
  `exportacion_mes_gwh`, con su `fecha_dato`. R11 los ata a la gráfica: el
  último punto y el campo de la ficha no pueden decir cifras distintas, y se
  comprobó por contraste —alterando el último punto a mano, el CI bloquea.

### La mordedura que estuvo a punto de publicarse

El dibujante de gráficas estaba **cableado a la primera película**. Rotulaba
**«hm³»**, **«agua embalsada · capacidad»** y **«partes semanales»** viniera lo
que viniera, porque la única serie que existía era de embalses. La película del
gas habría salido publicada afirmando, en su leyenda y en su descripción
accesible, que Medgaz importó **10.365 hectómetros cúbicos** en mayo.

No se descubrió leyendo el código sino **mirando la página construida antes de
publicarla**. De ahí que el contrato gane tres descriptores que el dato declara
y la gráfica obedece —`unidades`, `etiquetas` y `paso`— con una regla que vale
para lo que venga: **si la serie no lo declara, la gráfica calla en vez de
rellenarlo**.

### Y una distinción que el contrato no hacía: estado o flujo

El agua embalsada es un **estado**: una lectura en un instante, que se compara
entre fechas pero **no se suma**. El gas que entra en un mes es un **flujo**: se
suma, y su fecha es el **primer día del período que resume**, no un instante en
que se midiera nada. Dos series con la misma forma y sentidos distintos son una
invitación a sumar lo que no se suma, así que ahora cada una lo dice en
`magnitud`.

### Contrato

- **1.37.0 → 1.38.0** (aditiva). §4.1 gana `magnitud`, `unidades`, `etiquetas` y
  `paso`; y `fuente.archivo` **admite lista** — sigue habiendo UNA fuente (un
  emisor, una operación estadística) pero su materialización puede venir partida
  porque el emisor la publica así: CORES saca entradas y salidas en dos libros.
  Lo prohibido sigue igual: **empalmar emisores u operaciones distintas para
  cubrir tramos distintos del tiempo**. Las **369 series del agua se reescriben**
  con sus descriptores — siete líneas añadidas por fichero, ni una tocada.
  **No nace ninguna regla `R*`.**

### Huecos

- **Cuatro de las seis interconexiones NO tienen película, y es deliberado.**
  Badajoz, Tuy, Irún y Larrau tienen su columna a cero desde octubre de 2014
  porque su flujo se imputa al VIP. Una gráfica de doce años de ceros contables
  **se leería como doce años sin gas**, que es falso — y en un dibujo gana lo que
  se ve. Solo tienen serie las dos conexiones cuyo dato mensual sigue siendo
  real. Cada una de las cuatro lo declara en su ficha.
- **La exportación empieza en 2010**, no en 2004: la estadística de salidas
  arranca ahí. Los años anteriores van con la columna a `null` — hueco, no cero.

## datos-v2026.08.40 — El dato que sí existe, publicado a medias

Ninguna capa nueva: esta release **corrige lo que el atlas afirmaba sobre lo
que no se puede saber**. El hueco «potencia instalada por provincia» lleva
declarado desde la `.10` en las 52 fichas de `generacion-electrica-provincia`,
y su primer motivo escrito era que **MITECO desagrega generación y no
potencia**. Eso ha dejado de ser cierto.

### Corregido

- **`generacion-electrica-provincia` · el hueco de potencia, reescrito en las
  52 fichas.** MITECO **sí** publica la potencia instalación por instalación:
  el registro **Electra** —exportación del registro administrativo de
  instalaciones de producción— trae potencia **neta y bruta** de más de 71.000
  instalaciones, se actualiza a diario y su licencia de reutilización es
  compatible (Ley 37/2007: citar la fuente, sin no-comercial ni
  compartir-igual). Lo que no trae es **la geografía**: corta en **comunidad
  autónoma**, sin provincia, sin municipio y sin tecnología.
- **Y la provincia existe en el registro de origen**: el propio buscador de
  Electra filtra por las 52. Es un dato **publicado a medias**, no un dato que
  no exista — y esa distinción cambia qué hay que pedir y a quién.
- **`nuclear` · qué potencia es la que publica el atlas.** Los siete reactores
  ganan una clave: la cifra es la **bruta**. Electra publica las dos y su bruta
  coincide con la del atlas **al kilovatio** —Ascó I 1.032.500 kW contra
  1.032,5 MW, Cofrentes 1.092.020 contra 1.092,02—; la **neta**, que descuenta
  el consumo de la propia central, es entre 30 y 60 MW menor. Dos números que
  se llaman «la potencia» y no son el mismo.
- **`nuclear:trillo-i` · dos fuentes del mismo ministerio no dicen lo mismo.**
  La ficha de centrales de MITECO da **1.066,0 MW**; su registro Electra,
  **1.067,49**. **1,49 MW** de diferencia, y es el único de los siete donde
  discrepan. El atlas no elige: mantiene la cifra que venía citando, publica el
  desacuerdo y **baja `potencia_mw` a «parcialmente verificado»** — la misma
  doctrina que ya se aplicó cuando el Catastro Minero se contradijo consigo
  mismo.

### Lo que sigue sin poder hacerse, y por qué

**Sumar las instalaciones de Electra por provincia exigiría asignarles una que
la fuente no da.** Eso sería fabricar el dato, no obtenerlo. Las otras tres
puertas siguen cerradas, y se volvieron a comprobar una a una:

- La estadística provincial de MITECO **desagrega generación en GWh**, no
  potencia.
- La **CNMC** da potencia, pero solo por comunidad autónoma y bajo **CC BY-SA
  4.0**, licencia que este atlas no puede aceptar. Comprobado de nuevo sobre su
  catálogo entero: **los 204 conjuntos la llevan, sin una sola excepción**. Su
  material más granular (el libro de cuadros mensual) vive fuera del portal de
  datos, **sin licencia declarada** y bajo un «Reservados todos los derechos»:
  peor, no mejor.
- **Red Eléctrica** llega a provincia y es corporativa — y su aviso legal
  **prohíbe expresamente el uso comercial**, así que falla por partida doble.

### Qué habría que pedir, y a quién

Lo que falta son **tres columnas que ya existen en la base de datos de
origen**, y ese es el argumento: no se pide un dato nuevo, se pide que se deje
de recortar el publicado. A la **Subdirección General de Energías Renovables**
del MITECO, titular del registro: que la exportación de Electra incorpore
**provincia, municipio y tecnología** —los tres campos por los que su propio
buscador ya filtra— y que se rellene `IdInstalacion`, hoy vacía, que es lo que
impide unir sus dos hojas por algo más firme que el nombre. Queda anotado
como asunto pendiente.

### Una nota de método, porque el error fue propio

El primer cruce emparejó las centrales **por prefijo del nombre**, y eso
asignó la potencia de Almaraz I a Almaraz II y la de Ascó I a Ascó II:
aparecieron **cuatro desacuerdos donde solo hay uno**. Lo delató el propio
resultado —tres discrepancias sospechosamente redondas— y se rehízo el
emparejamiento a mano, reactor a reactor, con la cifra medida al lado. En
Electra hay además homónimos que no son la central: «ALMARAZ» a secas son
huertos solares de 10 a 100 kW. **Casar por nombre es exactamente como se
fabrica un dato falso que parece razonable**, que es el peor fallo que este
proyecto puede cometer.

### Huecos

- **Sin cambios en los demás.** El de la potencia sigue abierto: mejor
  explicado, no cerrado.
- **PRETOR**, el registro público que sí promete listados por provincia
  exportables a Excel, está **tras un captcha** y no se ha podido verificar.
  Queda anotado como comprobación manual.

## datos-v2026.08.39 — El Magreb no está parado: está al revés

Segunda capa del **segundo horizonte**, y la que **cierra un hueco que su
hermana declaraba desde la release `.9`**. `electricidad-interconexiones` dice
en cada una de sus fichas que las interconexiones ya en servicio no están en el
atlas «porque no se ha localizado un instrumento que las inventaríe con sus
extremos; el que lo publica es Red Eléctrica, fuente corporativa». En gas ese
instrumento existe, y es estadística oficial.

### Añadido

- **Nace `gas-interconexiones`** (30 capas), rama `energia`. Las **seis
  conexiones físicas** de gas con el exterior: Medgaz (Argelia), Magreb-Europa
  (Marruecos), Larrau e Irún (Francia), Tuy y Badajoz (Portugal).
- **El perímetro no lo elige el atlas**: la metodología estadística de **CORES**
  —Plan Estadístico Nacional, por tanto primaria y no corporativa— enumera los
  puntos de entrada y salida del sistema, y esa lista es el perímetro. Seis
  conexiones físicas, ni una más.
- **10 fuentes nuevas archivadas**: la metodología y las dos series mensuales de
  CORES, seis actos del BOE y la geometría de los seis puntos.

### El hallazgo: el gasoducto del Magreb no está parado

Se repite en todas partes que el Magreb-Europa «cerró» en 2021. La serie oficial
dice otra cosa, y se lee mes a mes:

- **Octubre de 2021 fue el último con importación**: 4.314,8 GWh. En
  **noviembre, cero** — y cero todos los meses desde entonces.
- **El mismo mes, Medgaz absorbe el desplazamiento**: de 7.236,3 GWh en octubre
  a 8.131,6 en noviembre.
- **Y por ese mismo tubo España exporta a Marruecos**: **10.375 GWh en 2025**, y
  sigue en 2026 (822 GWh en enero, 780,8 en mayo, el último publicado).

De ahí que la capa le dé **categoría propia, `flujo_invertido`**: llamarlo «en
servicio» a secas escondería lo más importante que tiene, y llamarlo «parado»
sería sencillamente falso. Lo que el atlas **no** publica es POR QUÉ dejó de
importar: ninguna fuente archivada aquí lo dice, y esa explicación se debate en
El Tercio, no se registra como dato.

### Lo que esta capa NO afirma, y por qué

- **Los dos VIP no son registros.** Desde octubre de 2014 la normativa europea
  agrupa las cuatro conexiones europeas en VIP Ibérico y VIP Pirineos, que son
  puntos **virtuales**: un acuerdo de mercado, no un tubo. Darles geometría
  sería inventarla.
- **Y por eso mismo, desde 2014 no hay dato oficial de flujo por punto físico
  para Francia y Portugal.** El cero de Badajoz, Tuy, Irún o Larrau en la serie
  significa «se cuenta en otro sitio», **no** «no pasa nada». Cada ficha lo
  dice.
- **Ninguna capacidad se publica.** La única planificación vinculante que la
  traía es la de **2008-2016**, cuyos datos son de enero de 2008 — allí Medgaz
  figura «en construcción». Usarla sería publicar una cifra caducada con aspecto
  de vigente.

### La geometría, o un «no existe» con nombres

**No hay ningún conjunto de ámbito estatal, con licencia abierta, que sitúe los
puntos de conexión gasista de España.** Comprobado uno a uno, y queda escrito
para que nadie repita la búsqueda:

- **ENTSOG** prohíbe expresamente redistribuir y derivar — y sus campos
  `pointTpMapX`/`pointTpMapY`, que parecen coordenadas, son el lienzo de su
  esquema: **Larrau saldría en el Pacífico**.
- **La CNMC sí tiene** un SIG georreferenciado de la red de gas, pero es de
  acceso restringido por certificado digital y VPN.
- **Enagás** es «todos los derechos reservados», y además corporativa.
- **OpenStreetMap** los cubre los seis y es **ODbL**: su contagio lo hace
  incompatible con la licencia de salida de este atlas. Es la tentación
  evidente, y por eso se dice en voz alta que no se usa.

Lo que sí hay: el **DERA de la Junta de Andalucía** (CC BY 4.0) traza las dos
conexiones del sur — y su punto de Medgaz cae **1,7 km al este del aeropuerto de
Almería**, que cuadra con la prosa del acto: dos fuentes oficiales
independientes de acuerdo. Para las otras cuatro, el **Nomenclátor del IGN**,
con la precisión que eso permite y no más.

**Y un hallazgo pequeño que resolvió Larrau**: el BOE no habla de «la
interconexión de Larrau» sino del **«gasoducto Puerto de Larrau-Villar de
Arnedo»**, y el Nomenclátor tiene «Puerto de Larrau» como paso de montaña. El
punto sale del nombre que le da su propio acto.

### Contrato

- **1.36.0 → 1.37.0** (aditiva). §10 estrena `nombre_estadistico` (el mismo tubo
  tiene tres nombres oficiales distintos, y cruzar por el nombre fabricaría
  duplicados **en silencio**), `codigo_entsog` (se publica el identificador y
  nada más: los datos de ENTSOG no se pueden redistribuir, pero un identificador
  es un hecho) y `municipio` **que admite null**. **No nace ninguna regla `R*`.**

### Huecos

- **Cuatro conexiones no tienen acto propio localizado** — Larrau, Irún, Tuy y
  Badajoz. Son anteriores a la Ley 34/1998, y en los BOE de aquellos años **la
  sección de anuncios no lleva identificador por documento**: la información
  pública del tramo Villalba-Tuy de 1996 vive dentro de un registro agregado y
  no se puede citar por sí sola. Lo que las sostiene es el perímetro estadístico
  y, donde los hay, actos posteriores sobre la misma conducción.
- **El municipio de Larrau va vacío**: el paso está en el límite jurisdiccional
  y ningún acto dice a qué término pertenece el cruce. Los actos sitúan
  posiciones del gasoducto (Gallués, Lumbier), no el cruce mismo.
- **Ninguna capacidad**, por lo dicho arriba.
- **Por qué el Magreb dejó de importar en noviembre de 2021** no lo dice ninguna
  fuente archivada. El atlas registra el hecho; la causa, no.

## datos-v2026.08.38 — La otra mitad del ciclo: dónde va lo que las centrales dejan

Primera capa del **segundo horizonte**, el banco de filones que quedó verificado
contra el acto el mismo día. `nuclear` contaba los siete reactores en operación;
lo que se hace con su combustible cuando sale de la piscina no lo contaba nadie.
Ahora sí: catorce instalaciones, de las cuales **ocho existen, cinco no existen
todavía y una no existirá nunca** — y esa última es la pieza que explica la
forma de todas las demás.

### Añadido

- **Nace `residuos-radiactivos`** (29 capas), rama `energia`, hermana de
  `nuclear`. El perímetro y los datos salen del **7.º Plan General de Residuos
  Radiactivos**, aprobado por Acuerdo del Consejo de Ministros de 27 de
  diciembre de 2023 (`BOE-A-2024-440`), con cada acto de autorización
  localizado archivado en la ficha que lo cita. **14 documentos nuevos en
  `fuentes/`**: el plan completo de MITECO y trece del BOE.
- **Los seis ATI en servicio** — Trillo (2002, un edificio de hormigón para
  hasta 80 contenedores, el primero de España y el único que no es una losa a
  la intemperie), José Cabrera (2009, **16 posiciones y todas ocupadas**: el
  único lleno), Ascó (2013, ampliado en 2022 de 16 a 18 contenedores por losa),
  Santa María de Garoña (2018), Almaraz (2018, 20 contenedores) y Cofrentes
  (2021, 24).
- **El Cabril**, el único almacén DEFINITIVO del país, con lo que queda libre a
  31 de diciembre de 2022: las celdas de baja y media actividad al **82,11 %**.
- **La fábrica de elementos combustibles de Juzbado**, el otro extremo del
  ciclo, cuya autorización se renovó el mes pasado (Orden TED/775/2026, en vigor
  desde el 5 de julio de 2026 y por diez años) — **el acto más reciente de toda
  la capa**.
- **Los cuatro ATI-100** de Vandellós II, Ascó, Cofrentes y Almaraz, en fase
  `desarrollo` y no `produccion`: ver más abajo.
- **El almacén previsto en Vandellós I** (2027), para los residuos que hoy
  siguen en Francia procedentes del reproceso de esa central.
- **El ATC de Villar de Cañas, como registro HISTÓRICO.** Designado por Acuerdo
  de Consejo de Ministros de 30 de diciembre de 2011 y **abandonado** por el de
  27 de diciembre de 2023: el plan dice literalmente que «se considera inviable
  disponer de una instalación de dicha naturaleza» ante «la falta del consenso
  social, político e institucional». Su muerte tiene **tres actos, no uno** — el
  plan, la resolución que deja sin efecto la designación (`BOE-A-2024-806`) y la
  **Orden TED/547/2024**, que declara conclusos los procedimientos de
  autorización previa y de construcción. Y una nota que casi nadie tiene clara:
  allí **sí se construyó algo** —terrenos comprados, viveros de empresas,
  oficinas y naves industriales—, y el acuerdo insta a Enresa a cederlo gratis
  al Estado, a Castilla-La Mancha o a entidades locales de Cuenca.

### Lo que esta capa NO afirma, y por qué

- **Autorizar no es existir, y aquí la distancia es de años.** Los ATI se
  autorizan como *modificación de diseño* de su central, en **dos pasos**:
  ejecución y montaje primero, puesta en servicio después. **Al BOE llega casi
  siempre solo el primero.** Por eso los cuatro ATI-100 —con acto de 2024 y
  2025— van en fase `desarrollo`: lo que está archivado autoriza la obra, no
  declara la instalación en pie. El plan esperaba que operasen en 2026; si ha
  ocurrido, a este atlas no le consta, y su ficha lo dice en vez de suponerlo.
- **Y por lo mismo, las fechas de operación de los seis ATI en servicio son las
  que declara el plan, no las de un acto.** Cada ficha lleva ese hueco escrito.
- **Un ATD no es una instalación nueva.** Tras caer el ATC, el plan crea un
  «Almacén Temporal Descentralizado» en cada uno de los siete emplazamientos —
  pero lo define como «su ATI, al que se le añade una instalación complementaria,
  así como medidas adicionales». Darles ficha propia habría contado **dos veces
  el mismo edificio**: son siete nombres para seis almacenes que ya están en la
  capa y uno que no existe.
- **La web del CSN se equivoca, y manda el plan.** Su página de almacenamiento
  temporal individualizado lista Vandellós II —que **no tiene ninguno**, y el
  propio plan la señala como «la única central que actualmente no dispone de
  almacenamiento en seco»— y omite Almaraz, que sí. La capa sigue al 7.º PGRR.

### Dos cosas que dice la fuente y sorprenden

- **La autorización de El Cabril no caduca por fecha, sino por volumen.** La
  orden de 2001 dice que vale «hasta que se complete el volumen disponible para
  el almacenamiento en las celdas». No hay vencimiento que anotar.
- **Y esa misma orden no la llama El Cabril**, ni cita el municipio: la nombra
  «instalación nuclear de almacenamiento de residuos radiactivos sólidos de
  sierra Albarrana». Que está en Hornachuelos (Córdoba) lo dice el plan, no su
  propia autorización.

### Contrato

- **1.35.0 → 1.36.0** (aditiva). §10 estrena la ficha de la capa, con tres
  decisiones anotadas: `fase` como el campo que separa lo autorizado de lo
  existente, `capacidad` **como texto y no como número** (Trillo mide en
  contenedores, José Cabrera en posiciones, El Cabril en celdas y m³: un campo
  común obligaría a convertir entre unidades que no lo son sin suponer), y el
  ATD que no es registro. **No nace ninguna regla `R*`.**

### Huecos

- **Estructural, y es el de arriba**: la puesta en servicio de los ATI no se
  publica sistemáticamente. Las fechas vienen del plan.
- **La ampliación de El Cabril** —el propio plan concluye que las 28 celdas
  actuales obligan a tener nuevas en **2028**, doce en una primera fase y unas
  quince después— **no tiene acto de autorización localizado**. Se registra la
  necesidad declarada, no una obra autorizada.
- **El almacén de Vandellós I no tiene ningún acto**: ni previa, ni
  construcción, ni puesta en servicio. Lo único que lo sostiene es la previsión
  del plan, y por eso su fase es `tramitacion` y no `desarrollo` — que haya obra
  en curso no consta.
- **Cuatro actos antiguos no aparecen en el BOE** pese a buscarlos: los que
  autorizaron los ATI de Trillo (2002), José Cabrera (2009) y Ascó (2013), y la
  puesta en servicio del de Garoña (2018).
- **La geometría de El Cabril no es la de la instalación.** El Nomenclátor del
  IGN no nombra el centro de ENRESA: se toma el barrio homónimo que le da nombre
  y sobre el que se asienta, con la precisión declarada en `paraje` — y los
  otros ocho «El Cabril» del país descartados por recuadro. El ATC va en
  `municipio` por el motivo más simple: **nunca se construyó, así que no hay
  nada que el Nomenclátor pueda nombrar**.
- Los ATI heredan la coordenada de su central, y en Ascó, Almaraz y Cofrentes el
  ATI y su ATI-100 comparten punto: son dos instalaciones en el mismo recinto y
  el Nomenclátor no las separa (§6.6, el mismo trato que Almaraz I y II).

## datos-v2026.08.37 — El vigía cobra su primera pieza: la concesión de Valdelentisco

**Primera release del circuito de guardia completo**: el vigía del BOE señaló
el acto en su barrido semanal (1 hallazgo sobre 8 sumarios y 1.440 actos), la
curación lo juzgó y entra. Y la fuente nueva se sincroniza a este archivo, que
es donde las fichas citan.

### Añadido
- `desaladoras:valdelentisco` — fuente f5 (BOE-B-2026-26187, 2026-08-05:
  anuncio de la CHS de información pública de la concesión de las aguas
  desaladas de la IDAM, 37 hm³/año con destino agrícola, expediente
  CSR-0008/2018, 309 solicitudes de aprovechamiento evaluadas) y clave «La
  concesión de sus aguas, en información pública». Ningún campo cambia: `fase`
  sigue en `produccion` y la capacidad no se toca — el acto es un trámite
  abierto y se registra como tal, el mismo molde de la ampliación de
  Torrevieja. La capa pasa a **1.1.1** (parche: enriquecimiento de un
  registro; ni registro ni campo nuevo — §3 no tiene fila exacta para este
  caso y se elige el peldaño menor, dicho aquí).

### Huecos
- La concesión en sí: una información pública no otorga nada. Cuando el BOE
  traiga el otorgamiento (o su denegación), ese acto actualizará la clave — y
  el vigía, que ya barre `desaladoras`, debería cantarlo solo.
- Los de la capa siguen donde estaban: la coordenada de las plantas (el punto
  es el del municipio, f9 de cada registro) y el censo completo de la
  desalación española, que esta capa no es y lo dice.

## datos-v2026.08.36 — La foto gana su película: las series temporales

**Ningún registro cambia y nace una clase nueva de artefacto** (contrato
**1.35.0**, §4.1): las **series temporales** — la película de un registro
junto a su foto. La primera es `agua-embalsada`: **369 series con 683.892
partes semanales desde 1988**, extraídas del histórico del Boletín Hidrológico
que ya estaba archivado en `fuentes/` desde la release `.18`, por el mismo
emparejamiento que la `.32`.

### Añadido

- **`datos/series/agua-embalsada/` — un fichero por embalse**, con fecha, agua
  y capacidad de cada parte. La capacidad viaja EN la serie, no como
  constante: Contreras pasó de 874 a 361 hm³ en 2019 y una capacidad fija
  mentiría sobre tres décadas. Un punto por línea: el refresco mensual será
  una línea de diff por fichero.
- **Tres reglas de doctrina, todas con diente en CI (§7.11)**: solo hay
  película donde hay negativo (una fuente primaria archivada con el histórico
  completo — nada de reconstruir ni empalmar); los huecos se quedan huecos
  (sin interpolación, y la gráfica corta la línea donde faltan partes); y
  **R11** — el último punto de la serie debe cuadrar con el campo de la ficha
  que la serie declara, y la última fecha con su `fecha_dato`. R11 pasó sobre
  las 369 a la primera, lo que además re-verifica la extracción de la `.32`
  por una vía independiente.
- **La gráfica, en la ficha**: SVG dibujado a mano por `graficaSerie()` en
  `expediente.js` — un solo dibujante para el dossier del visor (que trae la
  serie por fetch) y las páginas pre-renderizadas (que la incrustan en el
  build, porque su CSP es `script-src 'none'` y allí no hay JS). El eje X es
  el tiempo, no el índice: los huecos se VEN. La capacidad va fina y sólida,
  no discontinua — el discontinuo aquí significa «no verificado», y la
  capacidad es un hecho. Sin porcentajes: los prohíbe R7 también dibujados.
- **El manifiesto declara qué capas tienen serie** (`series:
  "reserva-semanal"`, §3): el visor pide la película sin conocer capas por su
  nombre y sin sembrar 404 en las que no la tienen.
- **La herramienta de extracción**: escribe solo donde se le diga, sin ganar
  dependencias, y quien la corre firma. Método gana la sección «La foto y la película» (03), en las
  dos lenguas.

### Huecos

- **32 embalses del Boletín siguen sin serie** — los mismos 32 sin ficha de la
  `.32`: una serie sin ficha es huérfana por contrato.
- **La ampliación natural** (generación por provincia, anual) queda para
  cuando esta se haya usado: generalizar antes de usar es infraestructura sin
  usuario.

---

## datos-v2026.08.35 — El manifiesto dice por fin su propio nombre

**Ningún registro cambia en esta release, y existe por un fallo de
procedimiento que conviene dejar escrito.** Las releases `.32`, `.33` y `.34`
salieron sin actualizar los dos campos que el manifiesto declara de sí mismo:
`release` (seguía diciendo `2026.08.31`) y `schema_version` (seguía en 1.33.0
cuando el contrato ya iba por 1.34.0). Lo cazó **la guarda del propio
despliegue** — «declarada: datos-v2026.08.34 · servida: datos-v2026.08.31» —
que existe exactamente para esto, y funcionó.

La etiqueta publicada **no se mueve ni se reescribe** (§8), y menos con un DOI
apuntándole: la corrección es esta release, cuyo manifiesto declara
`2026.08.35` y `1.34.0`. Las tres anteriores quedan como están, con sus datos
correctos y su nombre interno equivocado — este párrafo es su fe de erratas.

**La lección, para el procedimiento:** publicar una release de datos es TRES
gestos, no dos — la entrada del changelog, los campos del manifiesto
(`release` y, si el contrato se movió, `schema_version`), y la etiqueta. El
que falte cualquiera lo dirá el despliegue en rojo.

---

## datos-v2026.08.34 — El expediente de Matamulas y el municipio de Las Cruces, saldados

Ningún registro entra ni sale: **dos registros de `minerales-proyectos` pagan
sus deudas documentales**, las que F1 dejó declaradas el 2026-08-05.

### Corregido

- **`minerales-proyectos:matamulas` sube de `no_verificado` a `parcial`** — ya
  no es el único «no verificado» global de la capa. El expediente
  administrativo está archivado del DOCM: la **DIA negativa** (Resolución de
  26-10-2017 de la Viceconsejería de Medio Ambiente, DOCM n.º 215, ref.
  2017/13014 — que además sostiene qué es el yacimiento: monacita gris, fosfato
  de tierras raras con alto contenido en europio y neodimio) y la
  **denegación de las tres concesiones** (Matamulas-F1, Rematamulas 1.ª y 2.ª,
  49 cuadrículas en Torrenueva y Torre de Juan Abad; resoluciones de
  14-11-2017, DOCM n.º 235, ref. 2017/14349). Promotor, materias y tipo de
  proyecto pasan a `confirmado`; la `fase` queda `parcial` a conciencia: leer
  «parado» o «cerrado» depende del tramo judicial, que es lo único que sigue
  sin fuente primaria — la sentencia del TSJ (17-12-2020, según secundarias) y
  la casación. El CENDOJ rechaza la consulta programática (403): se saca a
  mano o no se saca.
- **`minerales-proyectos:las-cruces` resuelve su conflicto de municipio** por
  la vía que pedía su propio hueco: un acto que enumere los términos. El
  anuncio de la **Confederación Hidrográfica del Guadalquivir**
  (BOE-B-2020-25403, información pública del artículo 4.7 de la Directiva
  Marco del Agua para la mina interior y refinería polimetalúrgica) sitúa el
  proyecto «en los términos municipales de **Gerena, Guillena y Salteras**» —
  los tres a la vez, que era exactamente lo que el topónimo del IGN (Guillena),
  la concesión multiparte del catastro (Salteras) y la ficha de la Comisión
  (Gerena) venían diciendo por separado sin que ninguno mintiera. El campo
  `municipio` enumera ahora los tres. Sigue `parcial`: la `fase` continúa sin
  fuente.

### Huecos

- **Matamulas, el tramo judicial**: texto de la sentencia y estado de la
  casación (ver arriba).
- **Pista nueva, sin acto**: la prensa y la web del promotor sitúan un nuevo
  permiso de investigación de Quantum Minería («Neodimio», solicitado en
  2022, sobre Santa Cruz de Mudela, Torrenueva y Valdepeñas, 292 cuadrículas,
  en consultas). Sin anuncio localizado en el DOCM no entra; queda en PLAN.md.

---

## datos-v2026.08.33 — Las tres pistas de cables, saldadas: entran dos amarres y Sagunto

`cables-submarinos` pasa de **6 a 9 aterrizajes** (contrato **1.34.0**). Las tres
pistas que dejó abiertas la release `.17` están comprobadas — y la comprobación
dio lo que la capa temía: dos de los tres documentos **financian sin situar**.

### Añadido

- **Canalink Base 6, los dos amarres del cable Tenerife-El Hierro** — primer
  expediente canario de la capa: en Canarias el dominio público
  marítimo-terrestre lo tramita el **Gobierno canario**, no las Demarcaciones
  estatales, y su anuncio no lleva código CNC (la referencia es la del BOC,
  `boc-a-2026-091-1583`, información pública de 13-05-2026).
  - **Playa del Salto, Tamaduste (Valverde, El Hierro)** — `paraje`: la playa
    la nombra el **proyecto básico de la propia información pública**
    (perforación dirigida bajo la playa), el mismo trato que el nombre de
    Grace Hopper en Sopela. El Nomenclátor la rotula «Playa del Salto».
  - **Candelaria (Tenerife)** — `municipio`: el acto no baja del término
    municipal en este lado, y el registro lo dice en vez de adivinar la playa.
- **Aterrizaje en Sagunto (Valencia)** — `parcial` y `municipio`: el expediente
  CNC02/25/46/0013 (Valencia Digital Port Conect, S.L., información pública de
  19-01-2026) no nombra sistema, ni destino, ni playa. Mismo perfil y mismo
  trato que la Virgen del Mar de Santander.
- **El esquema aprende el caso**: `emplazamiento` admite `null` cuando el acto
  sitúa solo el término municipal (contrato 1.34.0, §13).

### Corregido

- **`penbal-4-valencia`** gana clave y fuente: su expediente de legalización
  (CNC02/17/46/0009) **volvió a información pública el 26-05-2026**
  (BOE-B-2026-17288). El cable sigue en servicio; lo que se tramita es la
  concesión que lo legaliza.

### Huecos

- **PENCAN-X (Península-Gran Canaria) NO entra, y queda dicho por qué**: sus
  dos reales decretos (RD 1124/2024 y RD 268/2026, archivados) son
  **subvención pura** — ni playa, ni municipio, ni coordenada. La prensa sitúa
  los amarres (playa de la Ballena en Rota, Las Canteras en Las Palmas) pero
  **no se ha localizado el acto de Costas** que lo sostenga; cuando aparezca
  —BOJA para el lado de Cádiz, BOC para el canario—, el registro es media
  tarde.
- **El ramal de Canalink a Fuerteventura tampoco**: el RD 973/2025 (archivado)
  financia «un nuevo ramal que conecte con el sur de Fuerteventura» y no baja
  de ahí — ni término municipal siquiera.
- **Pista nueva, localizada al comprobar estas**: la web de Costas canaria
  publica el proyecto de un cable **La Palma-Tenerife con amarre en la playa
  de El Socorro (Los Realejos)**. Le falta encontrar su anuncio de información
  pública; queda apuntada en PLAN.md.

---

## datos-v2026.08.32 — Los 93 embalses que faltaban: entran 61, y los 32 dicen por qué no

`agua-embalsada` pasa de **308 a 369 registros** y del 86 % al **98,4 % de la
capacidad embalsada de España** (55.554 de 56.480 hm³). Es la deuda que dejó
declarada la release `.18`: «ampliar el barrido a los otros tipos y lenguas,
desambiguar por punto-en-polígono contra las demarcaciones, y declarar como
hueco lo que siga sin casar». Eso exactamente es esta release.

### Añadido

- **61 embalses** (52 vigentes, 9 históricos; 24 de uso hidroeléctrico), 6.317
  hm³ de capacidad y 4.587 embalsados en su último parte. Entre ellos los
  grandes que faltaban: **Ricobayo** (1.145 hm³), **El Grado** (400),
  **Itoiz**… ya estaba; **Puente Nuevo**, **Guadalhorce-Guadalteba**,
  **Camarasa**, **Riba-roja**.
- **El barrido del Nomenclátor se amplía a dos tipos nuevos**, archivados
  enteros: «Masa de agua» (6.395 topónimos) y «Conjunto de masas de agua» (21),
  paginados y cerrados contra `numberMatched`. Ahí viven los embalses que el
  Boletín llama por su lago: los estanys e ibones pirenaicos regulados (Mar,
  Negro, Saburó, Tort, Bachimaña, Certascan).
- **Cada punto nuevo está verificado contra su demarcación**, como los 308
  anteriores. El emparejador ahora conserva la **ñ** (Pena de Beceite y La Peña
  del Gállego son dos embalses, y la normalización de tildes los fundía),
  compara sin espacios (Riba-roja), y admite equivalencias declaradas caso a
  caso: Chandrexa→Chandreja, Eúgui→Eugi, Sichar→Sitjar, Ciurana→Siurana,
  Ullivarri→Uribarri-Ganboa, Sant Pons→Sant Ponç, Riocobo→Río Covo,
  Villagudín→Vilagudín, Bao→Vao, Cornalbo→Cornalvo.
- **Once identificaciones no son literales y lo dicen**: llevan
  `geo_fuente__v: parcial` y una clave con el motivo. Las tres de nombre
  oficial distinto (Tremp/Talárn es el «Pantà de Sant Antoni», Cortes II es
  «Cortes de Pallás», Catllar es el «Pantà del Gaià»), las de escalera u
  homonimia resueltas por la cifra del propio Boletín (Montoro III por sus 105
  hm³, El Grado I por sus 400, Pena por sus 18, el contraembalse de Guillena
  por sus 5), el salto que rotula a su presa (Guijo de Granadilla), la presa
  vieja bajo su recrecimiento (La Breña, histórica, anclada al vaso de Breña
  II) y el lago sin apellido (Bachimaña, al ibón regulado Alto).
- **Cuatro partes que nombran dos presas colindantes** se anclan a la primera
  del nombre y citan a las dos: Guadalhorce-Guadalteba, Alsa-Mediajo,
  Torrejón Tajo-Tiétar; y los dobles rótulos de Ricobayo y Azután se declaran.

### Corregido

- Nada: ningún registro existente cambia.

### Huecos

**De los 401 embalses del Boletín quedan 32 sin publicar**, 926 hm³ — el 1,6 %
de la capacidad. Ninguno en silencio:

| Motivo | Cuántos | Quiénes |
|---|---|---|
| Agrupaciones sin vaso propio (ya declaradas en `.18`) | 5 | los cinco «Sistema …» del Pirineo |
| Sin topónimo en el NGBE, ampliación incluida | 24 | entre ellos presas recientes que el Nomenclátor aún no rotula (Enciso, Lechago, San Salvador, Terroba) y las balsas de Monegros (Las Fitas, Laverné, Valdepatao) |
| Homónimos en cuenca sin discriminador | 3 | Castro (tres lagunas homónimas y el embalse sin rotular), Fresneda (dos embalses homónimos), Las Parras |

- **El servicio de demarcaciones cambió de casa y nadie lo dijo.** El WFS que
  usó la `.18` (y que registra datos.gob.es) responde 404, y su endpoint
  `wfs.aspx` delata capabilities rotos en disco. La verificación de cuenca se
  hace ahora contra el **ArcGIS REST público del mismo Ministerio**
  (`aguaHidroDemarcaciones/MapServer`), que sirve los mismos 25 polígonos —
  y que devuelve 404 intermitentes sobre URLs que existen: se reintenta antes
  de concluir nada.

---

## datos-v2026.08.31 — Un enlace de una ficha ya no puede ejecutar nada

**Ningún registro cambia en esta release, y por eso existe.** Sale de una
auditoría de ataques al visor —pedida, no provocada por ningún incidente— y lo
único que mueve es `schema_version`, que vive en el manifiesto y por tanto obliga
a etiquetar. Lo que trae es un diente nuevo y dos remiendos en el visor.

### Añadido
- **contrato §7.10 (bloquea)** — toda `url` de fuente y todo `debate_url` han de
  ser `http` o `https`. Lo que se descubrió al intentar romper el atlas: un `url`
  con esquema `javascript:` **atraviesa las dos defensas que parecían cubrirlo**.
  El esquema JSON no lo ve, porque su `"format": "uri"` acepta
  `javascript:alert(1)` — es, literalmente, una URI válida. Y el escapado
  tampoco, porque convierte comillas y no toca el esquema de una URL. Llegaba
  intacto al `href` de la ficha, y desde la .29 la ficha no es solo un panel:
  son **4.548 páginas HTML servidas por el dominio del atlas**.
- **contrato §9 (avisa)** — el `color` de una categoría tiene ahora forma
  comprobada. Es la otra mitad del mismo hallazgo: el color viaja hasta un
  atributo `style`, y allí un `;` dentro del valor abre una declaración nueva.

### Corregido
- **`nuclear` · el rótulo de `grupo`** — las siete fichas nucleares decían
  «**Grupo empresarial: I**», y el dato no es ningún grupo empresarial: es el
  reactor dentro de su emplazamiento, como dice su propio esquema. El fallo no
  estaba en el dato sino en la tabla de rótulos del visor, que rotula por nombre
  de campo sin saber de qué capa viene — y `refinerias` había estrenado `grupo`
  con el otro sentido, el de Grupo Repsol. El campo se queda **sin rótulo fijo**
  y sale como «Grupo», que es verdad en las dos capas. Se barrieron los 28
  ficheros buscando más homónimos: es el único.
- **el rótulo de `titular`** — decía «Titular del expediente» en cuatro capas y
  solo en una hay expediente: en `gas-almacenamiento` es el de una concesión, en
  `icts` la entidad del Anexo I y en `minerales-derechos` quien figura en el
  catastro. Pasa a «Titular».

### Retirado
- nada.

### Huecos
- **Sin cambios respecto a la .30**: esta release no toca un solo registro, así
  que los huecos declarados siguen exactamente donde estaban — las seis
  desaladoras de Acuamed en `municipio`, las coordenadas en cifra de las BAES,
  la prórroga de Almaraz sin resolución, y los demás que cada ficha declara.
- **Lo que esta release NO cierra, dicho aquí porque se comprobó y no se puede
  arreglar desde el repositorio:** el atlas se sirve desde GitHub Pages, que no
  admite cabeceras propias. La política de contenido va por tanto en un `<meta>`,
  y eso deja fuera `frame-ancestors`: **cualquier página puede seguir metiendo el
  atlas en un iframe**. No es un descuido; es el precio del alojamiento, y el
  atlas ofrece un incrustable propio de todos modos.
  > **Nota del 2026-08-11:** este límite murió con la mudanza a Vercel (release
  > .37, que ya sí admite cabeceras). `frame-ancestors 'none'` va desde entonces
  > como cabecera real en todas las rutas menos `incrustar.html`, que existe
  > para ser incrustado. La entrada de arriba se queda como estaba: el registro
  > no se reescribe, se anota.

## datos-v2026.08.30 — Las cuatro del Taibilla, con mejor geometría que las seis que ya estaban

### Añadido

- **`desaladoras` crece de 6 a 10** y pasa a llamarse por lo que ya es:
  «Desaladoras de interés general del Estado». Entran las cuatro de la
  **Mancomunidad de los Canales del Taibilla** — San Pedro del Pinatar I y II
  (65.000 m³/día cada una, en el paraje de El Mojón) y Alicante I y II (60.000
  tras su ampliación, y 65.000, en el paraje de Agua Amarga) — con sus DIA de
  2005, el contrato de explotación de San Pedro (2022) y las fichas oficiales
  del organismo.
- **Las nuevas entran con mejor geometría que las viejas**: el Nomenclátor
  nombra las dos de San Pedro (la ampliación de desaladoras que el barrido de
  la release .28 dejó capturada de propina), y las dos de Alicante van al
  topónimo del paraje que la propia MCT declara. Paraje las cuatro; las seis
  de Acuamed siguen en municipio con su hueco.
- **Nace `capacidad_m3_dia`** (contrato 1.32.0): la MCT y la DIA del Bajo
  Almanzora publican en m³/día, y un campo no cambia de unidad según el
  registro. Conviven dos campos de capacidad, cada acto en su unidad, sin
  conversión — convertir exigiría suponer días de operación.

### Corregido

- `desaladoras:bajo-almanzora` — la producción de proyecto (60.000 m³/día) se
  muda de `claves` al campo nuevo, con la fecha de su DIA. La cifra no cambia;
  cambia dónde vive.

### Huecos

- La capa sigue sin ser el censo de la desalación española: autonómicas,
  canarias y privadas quedan como ampliación, cada una con sus actos.
- Para San Pedro I ningún acto localizado atribuye la planta a un único
  término municipal: la MCT la sitúa en el paraje de El Mojón y nombra tanto
  San Pedro del Pinatar como Pilar de la Horadada — el registro no lleva
  municipio y su descripción lo cuenta.

---

## datos-v2026.08.29 — Las 28 ICTS, y el horizonte de capas queda completo

### Añadido

- **`icts` — 28 registros**, las Infraestructuras Científicas y Técnicas
  Singulares del **Mapa 2025-2028** aprobado por el Consejo de Política
  Científica, Tecnológica y de Innovación (20-10-2025). El plan preveía sacar
  la capa «documento a documento» del Mapa; resultó que **el acuerdo del
  Consejo ES el documento**: su Anexo I trae las 28 con tipología, entidad
  titular y localización, y las 64 infraestructuras que agrupan van en claves,
  verbatim. Del Gran Telescopio Canarias al cultivo del atún rojo, pasando por
  el sincrotrón ALBA, Doñana, el láser de petavatio del CLPU y las dos bases
  antárticas — **la primera vez que el atlas publica un punto en la Antártida**.
- **Estrena el árbol `ciencia`** (séptimo, añadido al final para no mover la
  vista de arranque del visor) **y la precisión `autonomia`**, hermana
  intermedia entre `municipio` y `pais`.

### La lección

**El Mapa sitúa por comunidad autónoma, y fingir más precisión sería relleno.**
El GTC «se sabe» que está en el Roque de los Muchachos — pero ningún acto
localizado lo dice, así que va en `autonomia` con su hueco, mientras que los
Observatorios de Canarias, Calar Alto, Yebes y Doñana sí tienen topónimo del
Nomenclátor y van en `paraje`. La escalera entera de la capa —paraje, municipio,
autonomia, pais, ilustrativa— es la fuente mandando sobre el mapa, no al revés.

### Huecos

- Nueve ICTS de sede única declaran la ubicación de su instalación: el Mapa
  solo da la comunidad, el Nomenclátor no las nombra (consultas archivadas) y
  ningún otro acto localizado las sitúa.
- Las **coordenadas en cifra de las dos bases antárticas**: las páginas
  oficiales las sitúan por isla (Livingston y Decepción) y ninguna archivada da
  el número. El punto va `ilustrativa` sobre la isla, y lo dice.
- **IDISOM está en el Mapa y aún no existe**: el propio acuerdo la declara «a
  constituir» — va en fase `desarrollo`, no se esconde ni se finge operativa.

---

## datos-v2026.08.28 — Las desaladoras: el «sin inventario único» tenía una salida, y era un acto

### Añadido

- **`desaladoras` — 6 registros.** Las IDAM de interés general del Estado
  operativas y encomendadas a Acuamed que nombra la **Orden TED/157/2023**:
  Torrevieja (80 hm³/año, la mayor de Europa), Valdelentisco (70), Águilas-
  Guadalentín (40 de proyecto), Carboneras (44 previstos en 1999), Campo de
  Dalías (30) y Bajo Almanzora. El plan daba la capa por bloqueada «sin
  inventario único»; la orden resultó ser el perímetro — el mismo movimiento
  que desbloqueó `red-electrica`, esta vez con un acto en lugar de una
  cartografía. Cada planta lleva además su DIA o su informe de ampliación, que
  es quien la sitúa y le da capacidad.

### La lección

**El punto de municipio también puede estar mal.** La primera pasada de
geometría ancló «Águilas», «Carboneras» y «El Ejido» en homónimos de **Madrid,
Huesca y León** — el primer punto que devuelve el Nomenclátor no es el
municipio, y un barrido centrado en el sitio equivocado produce un cero que no
vale nada. Se rehízo filtrando por `tipo=Municipio` y validando contra la
provincia, y el barrido archivado **conserva la pasada descartada**: el error
queda a la vista para que se vea qué se comprobó.

### Huecos

- **La capa no es el censo de la desalación española y no lo afirma.** Las
  cuatro de la Mancomunidad de los Canales del Taibilla (dos ya capturadas por
  el barrido: San Pedro del Pinatar I y II), las autonómicas, las canarias y
  las privadas son ampliación pendiente, cada una con sus actos.
- Las seis declaran la coordenada de la planta como hueco: ningún acto la
  publica y el Nomenclátor no las nombra — punto de municipio.
- Águilas: la capacidad actualmente en servicio tras la ampliación prevista en
  su propia DIA. Bajo Almanzora: la capacidad en hm³/año (su DIA la da en
  m³/día, y va en claves para no cambiar la unidad de un campo).
- **ICTS es lo único que queda del horizonte**, y sigue fuera porque ahí de
  verdad no hay acto que sostenga un perímetro — todavía.

---

## datos-v2026.08.27 — Tres capas de una tanda: el gas bajo tierra, las dos bases y las antenas del espacio

Con esta release, **del horizonte de capas apuntado en PLAN.md solo quedan las
dos sin inventario único** (desaladoras e ICTS). Las tres de hoy comparten
método: el perímetro lo fija un acto, cada afirmación lleva el suyo, y lo que
ningún acto sostiene se declara en vez de rellenarse.

### Añadido

- **`gas-almacenamiento` — 5 registros.** Los **cuatro básicos** que nombra la
  resolución anual de capacidad de la DGPEM —Serrablo (9.730 GWh), Gaviota
  (18.340), Marismas (831) y Yela (7.025)— **y Castor**. El plan decía «Yela,
  Serrablo, Gaviota»; la resolución dice cuatro: **Marismas estaba en la lista
  oficial y no en la que todo el mundo repite.** Las concesiones marinas se
  publican como **polígono vértice a vértice del anexo de su real decreto**
  (Gaviota 8 vértices y 4.229 ha; Castor 4 y 6.519 ha) — la primera geometría
  del atlas que sale del propio BOE. La ficha de Castor registra el expediente
  entero: concesión (2008) → sismicidad, extinción e hibernación (RDL 13/2014)
  → desmantelamiento (2019) → **sellado de pozos autorizado en 2025**. Es la
  historia que este atlas cuenta mejor que nadie, y ahora está contada con sus
  cinco actos archivados.
- **`bases-eeuu` — 2 registros.** Rota y Morón, las bases de utilización
  conjunta del anejo 2 del Convenio de Cooperación para la Defensa de 1988.
  Cada despliegue autorizado va en claves con su instrumento: los cuatro
  destructores AEGIS (Segundo Protocolo, 2012), la fuerza de respuesta a
  crisis (Tercer Protocolo, 2015), los dos buques adicionales (2023). **Se
  registra el régimen, no la guarnición**: nada que no esté en los tratados.
- **`seguimiento-espacial` — 3 registros.** El complejo de espacio profundo de
  la NASA en Robledo de Chavela (acuerdo renovado en 2024 por quince años), la
  antena de espacio lejano de la ESA en Cebreros, y la estación del INTA en
  Maspalomas — esta última publicada `parcial` y con su ficha diciendo por qué
  es el registro más flojo: la sostiene una licitación, no un tratado.

### La lección

**La lista que todo el mundo repite no es la lista del acto.** Tres veces en
una tanda: los básicos eran cuatro y no tres; las refinerías de la release
anterior eran diez y no «ocho o nueve»; y Maspalomas, que siempre se cita junto
a Robledo y Cebreros, resultó no tener tratado en el BOE que la sostenga.

### Huecos

- **Serrablo y Yela**: la coordenada de la instalación no la publica ningún
  acto localizado — van como punto de municipio, dicho en cada ficha.
- **Marismas**: qué titular quedó para el almacenamiento tras la cesión de los
  yacimientos a Trinity Capital (2022) no lo dice ninguno de los dos actos; y
  su geometría vive en los reales decretos de yacimiento de 1988-1995, no
  reconstruida en esta pasada.
- **Cebreros**: ningún acto posterior a 2012 afirma con fecha que siga
  operativa; la fase se apoya en que sus dos acuerdos siguen en vigor.
- **Maspalomas**: el instrumento que defina su régimen (los acuerdos INTA-ESA
  del Centro Espacial de Canarias no están en el BOE, o no se han localizado).
- **Desaladoras e ICTS siguen fuera**, y no por olvido: sin inventario único no
  hay perímetro que un acto sostenga. Son las dos últimas del horizonte.

---

## datos-v2026.08.26 — Las diez refinerías: el perímetro lo fija un código, no el gusto

Primera capa nueva desde la rama del transporte, y primera del bloque que el
horizonte de PLAN.md llamaba «refinerías y almacenamiento de gas primero». El
plan viejo decía «ocho o nueve, autorizaciones en el BOE»; la realidad salió
mejor: **diez, y con dos fuentes que se reparten el trabajo** sin necesidad de
ir acto por acto.

### Añadido

- **`refinerias` — 10 registros**, los diez complejos de refino de petróleo del
  país. El perímetro no lo eligió el atlas: es lo que el **PRTR-España** —el
  registro estatal de emisiones que obliga el Reglamento (CE) 166/2006, fuente
  primaria por la misma doctrina que la plataforma PCI-PMI (contrato §6.1,
  enmienda 1.16)— clasifica como **actividad 1.a.i con CNAE 19.20**. Buscar
  «refinería» por nombre en el mismo registro devuelve refinerías de aluminio,
  de aceites y de mantecas: sin el código, la capa habría nacido contaminada.
- **CORES** (corporación de derecho público adscrita a MITECO, estadística
  oficial de hidrocarburos) sostiene la capacidad de destilación de crudo del
  último año cerrado, el grupo empresarial, el año de inicio de cada una y la
  única nota de inactividad. **La suma de las diez cuadra con el total nacional
  de la propia serie: 79.200 kt en 2025** — se comprobó antes de publicar, que
  es la lección del PERTE.
- **La coordenada es la del registro** (`geo_precision: exacta`, la ficha PRTR
  de cada complejo). En Muskiz y Tarragona la corrobora el Nomenclátor del IGN
  con un topónimo a menos de un kilómetro («Petronor SA errefinategia», «la
  Refineria»); en los otros ocho el IGN no nombra la instalación, y el barrido
  por recuadro que lo demuestra está archivado — un cero del IGN no prueba
  ausencia si no se confirma por bbox.
- **Tenerife entra en `parado`, no se omite.** La primera refinería de España
  (1930) figura en la serie de CORES con 4.500 kt de capacidad y una nota:
  mantiene su estatus legal y no tiene los permisos para arrancar. Esa
  distancia —capacidad que figura, planta que no opera— es la clase de hecho
  que este atlas existe para registrar.

### La lección

**La 1.27 se estrenó a la primera oportunidad.** La atribución de CORES es de
fórmula fija —«Fuente CORES (www.cores.es)», con la misma calidad tipográfica
que el dato— y esta vez se leyó ANTES de publicar, no veintidós capas después.

### Huecos

- **Ninguna fuente localizada dice, instalación a instalación, si una
  refinería está operando.** La `fase` de las nueve activas se sostiene en la
  serie vigente de CORES y en que su única nota de inactividad señala solo a
  Tenerife — por eso va `parcial` en las nueve, con el hueco f9 pidiendo el
  acto administrativo (la autorización o la AAI de cada complejo).
- El PRTR publica el complejo, no sus unidades: qué procesos tiene cada
  refinería (vacío, coquización, hidrocraqueo) está en la serie de CORES y **no
  se publica en esta pasada** — cabría como campos si alguna vez hace falta.
- Del **almacenamiento subterráneo de gas** —la otra mitad del bloque del
  horizonte— no entra nada todavía: sigue en la cola, acto por acto como
  `cables-submarinos`, con Castor incluido.

---

## datos-v2026.08.25 — Citar bien no es citar a quien toca, es citarlo como pide

La release anterior encontró el problema y lo dejó anotado. Esta lo arregla.

### La lección, primero

**Comprobar que una fuente es compatible no es lo mismo que leer cómo obliga a
citarla.** El atlas llevaba veintidós capas haciendo lo primero —bien, y por
escrito— y ninguna haciendo lo segundo.

La licencia del IGN (Orden FOM/2807/2015) no se limita a conceder el uso: su
punto 4 **fija la forma del reconocimiento**, y para obra derivada exige el
literal «Obra derivada de \<producto\> \<fecha\> CC-BY 4.0 \<productores\>».
Su punto 5 obliga además a repetirlo **en los metadatos**. Adif exige «©
Administrador de infraestructuras ferroviarias».

### Corregido

**15 atribuciones**, con los identificadores sacados de la tabla de productos del
propio SCNE:

| Producto | Capas | Fórmula |
|---|---|---|
| Base Topográfica Nacional | 3 | `Obra derivada de BTN Continua CC-BY 4.0 ign.es` |
| Nomenclátor Geográfico Básico | 8 | `Obra derivada de NGBE Continua CC-BY 4.0 ign.es` |
| Límites administrativos | 2 | `Obra derivada de BDLJE Continua CC-BY 4.0 ign.es` |
| Adif | 1 | `© Administrador de infraestructuras ferroviarias` |
| Puertos del Estado | 1 | ahora nombra su licencia, `CC BY 4.0` |

**Cuatro de las trece no mencionaban al IGN en absoluto** —`minerales-proyectos`,
`nuclear`, `electricidad-interconexiones` y `limites-soberania`—, que es peor que
mencionarlo con la fórmula equivocada. Se sitúan por topónimo del Nomenclátor y
su atribución no lo decía.

**Lo de cada emisor se conserva.** La licencia pide que su fórmula **esté**, no
que esté sola: `agua-embalsada` sigue citando al MITECO y `rte-t` a la Unión
Europea, con la del IGN dentro.

### Y ahora se ve

El campo `atribucion` existía desde la primera release y **no lo pintaba nadie**.
Ahora viaja con la **fuente** de MapLibre, no con el pie: aparece mientras la
capa está encendida y desaparece al apagarla — que es literalmente lo que pide el
punto 4, «visible junto con los datos, de forma legible y a pie de mapa».

Atarlo al pie habría sido más fácil y habría dicho una mentira pequeña: que el
atlas usa la BTN incluso con las tres capas de la BTN apagadas.

### La trampa que hizo falta para encontrar todo esto

**`npm run build` desde la raíz del repositorio construía otro proyecto.** La raíz
no tenía `package.json`, así que npm **subía por el árbol de directorios** hasta
el primero que encontrase —en la máquina donde se escribió esto, uno del perfil
del usuario— y compilaba un proyecto React ajeno mientras imprimía «✓ built en
3,5 s». Un verde que no verificaba **nada** del atlas, y con el que se dio por
buena la release anterior.

Se destapó al comprobar que el cambio de la atribución llegaba al bundle: no
llegaba, y el hash del fichero no cambiaba nunca. Tapado con un `package.json` en
la raíz que no construye nada y solo delega en el del visor. **La raíz ahora responde
por sí misma o falla**, que es lo que tenía que haber hecho desde el principio.

---

## datos-v2026.08.24 — El atlas no se aplicaba a sí mismo lo que exige a sus fuentes

**Ningún registro cambia.** Cambia poder contestar, de una capa cualquiera, la
pregunta más natural que se le puede hacer a un dato: **¿de dónde sale esto y qué
me obliga?**

Se contestaba, pero cruzando cinco sitios ordenados por criterios distintos —el
manifiesto por capa, los `__f` por registro, el contrato por campo, el changelog
**por release** y `fuentes/` por fecha de captura—. Ahora hay una ficha por capa.

### Añadido

- **`fuentes/PROCEDENCIA.md`.** Una ficha por cada una de las 22 capas: de dónde
  sale, con qué licencia y qué obliga, qué hay que saber antes de citarla, qué
  hueco declara y qué fichero la sostiene. Al final, un **cuaderno de obtención**
  para quien tenga que volver a la fuente: el endpoint, el formato, el CRS y la
  trampa.
- **§7.9 del contrato, que BLOQUEA:** toda capa con datos tiene su ficha, y toda
  ficha su capa. Comprueba que **existe**, no que diga la verdad — eso no lo sabe
  una máquina, y no hace falta: el fallo real no es la ficha mentirosa, es la que
  se escribe «luego» y nunca se escribe. Pruebas **26 → 31**.

**Lo que se añade es la síntesis, no el hecho.** La licencia autoritativa sigue
siendo la del manifiesto, los campos siguen en §10 y el relato en este changelog;
la ficha enlaza en vez de copiar: una sola fuente de verdad, también en la
documentación.

### Lo que salió al escribirlo

Un documento así se escribe para ordenar lo que ya se sabe. Este destapó tres
cosas que no se sabían.

**Primera: de las condiciones de uso solo había TRES archivadas** —la Comisión,
la plataforma PCI y la CNMC—. Las del **IGN, Puertos del Estado y Adif** se
afirmaban en el changelog **sin una sola cita**. Ya están las cuatro.

**Segunda, y es una deuda: la licencia del IGN fija la FORMA del reconocimiento,
no solo la libertad de uso.** La Orden FOM/2807/2015 es CC-BY 4.0 —eso estaba
bien comprobado— pero su punto 4 exige, para obra derivada, la fórmula literal
**«Obra derivada de BTN Continua CC-BY 4.0 ign.es»**, y su punto 5 obliga a
repetirla **en los metadatos**. El manifiesto de las **13 capas** que citan al
IGN dice otra cosa. **Adif** exige igualmente un literal: **«© Administrador de
infraestructuras ferroviarias»**. Queda anotado en la ficha, pendiente de
corregir, y dicho aquí en vez de callado. La licencia se comprobó antes de
extraer, como manda `datos/LICENCIA-DATOS.md`; lo que no se hizo fue leer **cómo**
obliga a citar.

**Tercera: el archivo guardaba 34 citas reescritas.** La regla de finales de
línea del repositorio protegía el PDF y el ZIP y **dejaba pasar el HTML, el XML y
el JSON**, que son la mitad de `fuentes/`. Un servidor que sirve CRLF y un git que
lo normaliza a LF producen un fichero **que ya no es el que se descargó**: el
metadato de Puertos del Estado se servía con 39.516 bytes y el repositorio
guardaba 38.775. Se lee igual y no cuadra byte a byte, que en un archivo de citas
es la diferencia entre una copia y **la** cita. Sus bytes verdaderos sobrevivían
solo en la copia de trabajo: quien clonara se los llevaba alterados. Con
`fuentes/** -text`, los 61 ficheros no binarios vuelven a cuadrar.

### Dónde NO se lee una licencia

Dos avisos que costaron media tarde y volverán:

- El **`GetCapabilities` de Puertos del Estado** dice `Fees: NONE` y
  `AccessConstraints: NONE`… con `ProviderName: OSGeo`. Es la **plantilla de
  GeoServer sin tocar**, no una declaración del organismo. La licencia buena está
  en el registro CSW, y dice «No se aplican condiciones de acceso y uso. CC BY 4.0
  Puertos del Estado».
- El **`GetCapabilities` de Adif** no trae ninguno de los dos campos. Su licencia
  también está en el CSW.

### Corregido

- **Un número propio, en el documento que existe para eso.** Las citas con URL
  del atlas son **8.497**, no 5.693: el recuento anterior se quedaba en el array
  `fuentes` y no bajaba a los `__f` ni a `claves[].fuente`. **Las 8.497 están
  archivadas** — §7.7 no tiene un solo aviso pendiente, y ahora está medido.

---

## datos-v2026.08.23 — El atlas tenía el transporte entero vacío

Tres capas y **una rama nueva del árbol**. Era el hueco más grande que quedaba:
por los puertos de interés general pasa la mayor parte del comercio exterior
español, y hasta hoy no había nada.

### Añadido

- **`puertos` — 164 registros.** Las zonas de servicio de **43 puertos de interés
  general**, gestionados por 28 Autoridades Portuarias, del WFS INSPIRE de
  Puertos del Estado (**CC BY 4.0** declarado por el propio servicio).
- **`rte-t` — 77 registros.** Los nodos españoles del **Anexo II del Reglamento
  (UE) 2024/1679**: 49 nodos urbanos, 38 aeropuertos, 42 puertos marítimos, 1
  puerto interior y 28 terminales ferrocarril-carretera.
- **`ferrocarril` — 326 registros, 24.136 km.** La red de titularidad estatal,
  del WFS INSPIRE de **Adif**, versión 2026/01.

**Un puerto no es un registro.** La Ley de Puertos le delimita una zona de
servicio **terrestre** y **dos de aguas** —la I abrigada, donde se opera; la II
exterior, de espera y maniobra—, así que 43 puertos dan 164 recintos. Y por eso
en el mapa un puerto ocupa mucho más mar que tierra.

**La red básica no es «más importante» que la global.** Son los dos plazos del
Reglamento: **2030** y **2050**. Un calendario con fuerza legal, no una escala.

### Lo que se decidió no interpretar

El servicio de puertos rotula cada recinto con un campo que vale «DEUP» o
«Desafectacion» y **no documenta qué distingue**. No es un matiz: desafectar es
**sacar** suelo del dominio público portuario, y son **48 de 164** — si esos
polígonos fueran el suelo retirado, publicarlos como puerto diría lo contrario
de la verdad. La duda viene de la propia norma, donde una orden ministerial
aprueba a la vez «la delimitación … y la desafectación», y hay espacios
desafectados que después se **reincorporan**.

Lo resuelve el publicador y no una suposición del atlas: el conjunto se titula
«Zonas de servicio portuarias de España». **El campo va verbatim y el atlas
declara que no lo interpreta.**

### Tres trampas técnicas, contadas porque volverán

- **El PDF del DOUE no se puede parsear** («rotated text», el mismo muro del
  PERTE) y **el texto plano tampoco vale**: aplasta las columnas, y «A Coruña X
  Global Básica» no dice cuál valor es el aeropuerto y cuál el puerto. Con cinco
  columnas eso es ambigüedad fatal. Lo resuelve el **espejo del BOE**, que sirve
  la tabla en `<td>` de verdad.
- **El vínculo línea↔tramo de Adif está escrito en los dos sentidos y no son
  equivalentes.** La lista de la línea reclama **188 tramos por duplicado** —a
  alguno lo reclaman **siete** líneas—, y coser por ahí daba **47.357 km** de red
  donde hay 24.136. **Lo delató el total, no el código**: la red de Adif no llega
  a 25.000 km.
- **El GML de Adif viene en LAT LON.** El CRS se declara como URN
  (`urn:ogc:def:crs:EPSG::4258`), y eso obliga al orden de ejes de la autoridad.
  Copiarlas tal cual habría puesto la red ferroviaria española en el golfo de
  Guinea.

### Corregido

- **Dos avisos del IGN quedan pagados.** Un **cero suyo no prueba ausencia**: el
  servicio devuelve 200 con la colección vacía cuando se le aprieta, y en el
  primer barrido «Albacete» y «Santander» salieron como no encontrados. Y **la
  media de los vértices de un municipio no está dentro del municipio**: Castelló
  de la Plana incluye las **islas Columbretes**, a 50 km mar adentro, y el
  promedio se va al agua. Es §6.6 —«el centroide de un derecho multiparte puede
  caer donde no hay derecho ninguno»— aplicada a un municipio.
- **Orden de operaciones en la geometría de puertos:** simplificar → redondear →
  tirar astillas → **orientar**. Orientar antes de redondear no vale, porque el
  redondeo a 5 decimales puede **voltear el signo** del área de un anillo casi
  degenerado. Se orienta lo que se publica, no lo que se calcula.
- **El patrón de `codigo_linea` nació sin admitir letras.** De las 326 líneas hay
  exactamente una, «0613G». La cazó §7.1: un patrón que solo describe el caso
  mayoritario es una comprobación que miente.

### Huecos

- **48 recintos portuarios** llevan un acto que el atlas no interpreta, dicho
  arriba y en cada ficha.
- **24 astillas descartadas** en `puertos`: partes que tras redondear a 5
  decimales quedan con menos de un metro cuadrado. Entre todas, **1,89 m² de
  2.200 km²**.
- **29 líneas de Adif** de las 355 no tienen ningún tramo que las declare y
  quedan fuera.
- **Las 2.682 estaciones y bifurcaciones de Adif NO entran**: mezclan estaciones
  de viajeros con nudos técnicos («BIF. CANAL DEL DUERO») y piden criterio
  propio. Su GML **sí queda archivado**, para que levantarlas no exija volver a
  pedirlo.
- **Ni ancho de vía, ni electrificación, ni alta velocidad, ni número de vías.**
  Existen en el servicio de Adif, en capas que esta pasada no lee, y el esquema
  los prohíbe por su nombre: escribirlos de memoria sería inventar los datos más
  citables de la capa.
- **35 de los 77 nodos RTE-T llevan una equivalencia declarada** entre el nombre
  del Reglamento y el municipio del IGN. No la ha hecho un emparejador: va una a
  una con su motivo, para poder discutirse.

---

## datos-v2026.08.22 — Una capa entera se pintaba del color de reserva

Corrección. **Ninguna capa cambia de registros**; lo que cambia es que dos de
ellos se puedan ver.

### Corregido

- **`cables-submarinos`** — sus dos categorías nacieron **sin `color`** en la
  release del 08.17, así que los seis aterrizajes llevaban **una release entera**
  pintándose con el color de reserva, indistinguibles de cualquier otra capa.
  `aterrizaje` ya tiene el suyo, de la familia teal de la rama `conectividad` y
  separado de los violetas de `centros-datos` y los azules de `hidrogeno-red`.

### Añadido

- **La validación comprueba el color** (§9, **avisa y no bloquea**). La exigencia
  estaba escrita **desde la 1.9** y nadie la verificaba nunca, que es exactamente
  lo que §8 llama «prosa disfrazada de garantía» — y el precio se pagó tres veces:
  la primera dejó cuatro capas indistinguibles en el visor, la
  última fue esta.
  - **Avisa y no bloquea** a propósito: el dato es correcto y lo único que se
    pierde es distinguir la capa. Bloquear pararía la publicación de un registro
    bueno.
  - **Una vez por categoría, no por registro.** Una capa de 1.382 parques daría
    1.382 avisos idénticos, que es la manera más fácil de que un aviso deje de
    leerse.
  - **Mira lo que se USA, no lo declarado.** `cables-submarinos:trazado` sigue
    **sin color, y es deliberado**: el color es «con el que el mapa la pinta», y
    una categoría que ningún registro usa no pinta nada — elegirlo hoy sería
    decidir un diseño para algo que no existe. El aviso saltará el día que alguien
    la use, que es cuando hace falta.
  - Pruebas **25 → 26**, con el caso de prueba que ejercita justo eso.

### Huecos

- Los de la 08.21 siguen abiertos y sin cambios: las **1.959 fotovoltaicas** que
  la BTN no nombra, y que **por esa fuente no habrá potencia** de ningún parque.

---

## datos-v2026.08.21 — Un recurso es un campo; una instalación, un recinto

Capas dieciocho y diecinueve. Con ellas **el manifiesto se queda sin ninguna
rama en gris por primera vez** desde que existe.

### Añadido

- **`parques-eolicos` — 1.382 registros.** Los recintos que la BTN del IGN
  clasifica como TIPO 07 «PARQUE EÓLICO», con nombre y contorno.
- **`plantas-solares` — 1.250 registros.** 1.206 fotovoltaicas (TIPO 05) y 44
  termosolares (TIPO 08), en una capa con dos categorías.

### Retirado

- **`recurso-eolico` y `recurso-solar`** dejan de existir. Nunca publicaron un
  registro, así que renombrarlas salió gratis: **§8 protege los ids con datos**,
  y a un id sin datos no lo cita nadie. Precedente exacto: `h2med` →
  `hidrogeno-red`. Esa regla, usada ya dos veces sin estar escrita, entra en §8.

**No es un renombrado: es un cambio de objeto.** «Recurso» es cuánto sopla el
viento — un **campo continuo**, que existe como ráster y no como registros.
Convertirlo en zonas lo tendría que hacer el atlas. Y la salida que el propio
plan daba por buena, la zonificación ambiental del MITECO «en shapefile y
vectorial», **resultó falsa al comprobarla**: dentro del ZIP hay dos GeoTIFF y un
léeme que dice «los ráster clasificados». La vía de escape tenía el mismo defecto
que la vía original.

**Los dos cambios que pesan más que el id.** De `dotacion` a **`actividad`**: el
viento es una condición permanente del territorio, pero **un parque se
desmantela**. Y de `ilustrativo` a **`verificado`**: eran trazos imaginados a
mano y son perímetros de fuente primaria, en `geo_precision: exacta`. Cambiar
solo el título habría dejado el mismo error escrito de otra forma.

**Evidencia independiente.** Los **2.632 recintos caen dentro de una provincia
española, ni uno fuera**, contrastando los polígonos del IGN contra los de
`generacion-electrica-provincia`. Y el reparto cuadra con la generación que
publica el MITECO: **cinco de las seis provincias punteras en eólica coinciden**,
cuatro de seis en solar. Las diferencias son las que deben salir — A Coruña tiene
**173 parques y genera menos que Zaragoza con 144** —, porque recintos no es
potencia. Que es justo lo que el esquema prohíbe escribir.

**La geometría NO se simplifica**, al revés que el tendido de la release
anterior, y el contraste enseña cuándo simplificar sale gratis. Allí la BTN pone
un vértice por torre y quitarlos costó el **0,017 %** de la longitud. Aquí el
contorno **es** el dato: a 25 m se ahorraría el 61 % de los vértices, pero
costaría el **0,23 %** de superficie y **dejaría 29 parques convertidos en
cuadrados**.

### Corregido

- **Desambiguador de slugs** — lo cazó el propio validador por §7.2. Usaba un
  contador por nombre, así que el sufijo «-2» que inventa chocaba con **«Planta
  Solar Fede 2», que se llama así de verdad**. Ahora comprueba contra el conjunto
  de lo realmente usado. `red-electrica` se regeneró y sale **byte a byte
  idéntico**: allí el fallo estaba latente y nunca disparó, así que su release no
  necesita reedición.
- `manifest.json` — la nota `_registro_por_adelantado` hablaba de «cinco capas en
  preparación» y ya no queda ninguna. Se conserva como nota histórica, porque su
  motivo sigue siendo bueno y la puerta sigue abierta.

### Huecos

- **Fotovoltaica: 1.206 de 3.165 recintos.** Parece un desastre y es el **76 % de
  la superficie**, porque las anónimas son las pequeñas. Las 1.959 que faltan no
  llevan nombre en la BTN y `nombre` es obligatorio. **Cuando el hueco es de censo
  y no de magnitud hay que decir las dos cifras**, porque una sola engaña en la
  dirección que le convenga a quien la elija.
- **Eólica: 7 recintos sin nombre** quedan fuera. Son el 0 % de la superficie.
- **Termosolar: 1 de 45.**
- **No hay potencia, y no la habrá por esta fuente.** `potencia_mw` está prohibido
  en los dos esquemas: es la primera cifra que cualquiera espera de un parque
  eólico y la BTN no la da. Quien la publica es el promotor (`corporativa`, R3) o
  un registro administrativo de instalaciones, que sería otra fuente y otra capa.
- **Tampoco titular, ni fecha de puesta en servicio.** La BTN trae `f_alta`, que
  es cuándo el IGN capturó el recinto y no cuándo la planta arrancó.
- **Sigue sin publicarse el RECURSO**, y esta release no lo resuelve: lo cambia de
  pregunta. Si algún día alguien quiere el campo de viento, sigue siendo ráster.

---

## datos-v2026.08.20 — R3 no se discute: se cambia de emisor

Decimoséptima capa. `red-electrica` llevaba en gris desde el primer día por un
motivo **impecable y aun así equivocado**, y eso es lo que esta release cuenta.

### Añadido

- **`red-electrica` — 659 registros.** Dos de tendido y 657 de subestación, todo
  de la **Base Topográfica Nacional del IGN**, tema Energía (GeoPackage nacional,
  descarga directa, licencia de la Orden FOM/2807/2015 «compatible con CC-BY
  4.0»).
  - **Tendido de 400 kV** — 553 tramos, **14.904,9 km**.
  - **Tendido de 220 kV** — 1.231 tramos, **16.249,3 km**.
  - **657 subestaciones** de las 718 en las que termina un tramo de esa tensión.

**Por qué se levantó el bloqueo.** El motivo escrito era cierto entero: el
mallado lo publica Red Eléctrica, que es `corporativa`, y **R3** no la deja
sostener un `confirmado`. Debajo había una premisa que nadie llegó a escribir —
*que no lo publica nadie más*—, y esa era falsa. **Una frase que da por cerrado
el mundo tiene que decir dónde miró.**

**Por qué son DOS tendidos y no 1.784.** Las 18.505 líneas de la BTN traen
`nombre` a nulo, **todas**. Un tramo no es un objeto con identidad: es el trozo
que quedó entre dos hitos de captura. Nombrarlos por sus extremos habría
fabricado 1.784 nombres que nadie ha dado nunca.

**El filtro de subestaciones sale de la fuente, no del atlas.** La norma de
captura del IGN obliga a que «las líneas eléctricas deben finalizar en
transformador, subestación eléctrica, central eléctrica, vértice de otra línea
eléctrica o torre de alta tensión». Así que la pregunta es la única que no
interpreta: **¿cae un extremo de línea de 220 o 400 kV dentro de este recinto?**
Sin el filtro entrarían las 2.766 nombradas, incluida la tracción de Adif.

**Evidencia independiente, para que cualquiera la repita.** Las cinco
interconexiones de `electricidad-interconexiones` están construidas desde
documentos del **MITECO**, no del IGN, y las cinco caen sobre la subestación que
les toca: Adrall a **0,5 km** con el nombre idéntico, Gatika a **1,6 km**, Beariz
a 3,1, Orcoyen a 6,5. Y el «Puerto de la Cruz» cuya ficha advertía «es el LUGAR
que el instrumento nombra, **no la subestación**» resulta tener su subestación a
**0,7 km**, llamada igual que el paso de montaña de Cádiz.

**La geometría del tendido va simplificada a 25 m**, y por eso es
`generalizada`: 117.306 vértices pasan a 17.034 (**–85 %**) y la longitud pierde
el **0,017 %** (31.154,2 → 31.148,9 km). La BTN captura un vértice por torre, y
un tramo recto de cuarenta torres no tiene cuarenta formas. Las subestaciones no
se simplifican: son el perímetro del objeto y se quedan en `exacta`.

### Corregido

- `PLAN.md` — afirmaba que la **zonificación ambiental para renovables** del
  MITECO está «en shapefile» y «es vectorial». **No lo es.** Comprobado
  descargando el ZIP: dentro vienen `Clas_ISA_eol_c.tiff` y `Clas_ISA_eol_pb.tiff`,
  y el propio léeme del Ministerio dice «los **ráster clasificados**». La que el
  plan daba por salida honesta para `recurso-eolico`/`recurso-solar` tenía el
  mismo defecto que la vía que venía a sustituir.
- `PLAN.md` — el epígrafe seguía diciendo «las **cinco** ramas que siguen en
  gris» cuando ya eran tres, y ahora dos.

### Huecos

- **61 subestaciones** cumplen el criterio y **se quedan fuera porque la BTN no
  las nombra**, y `nombre` es obligatorio. No se omiten en silencio: van dichas
  aquí, en el manifiesto y en §10.
- **`longitud_medida_km` va `parcial`, no `confirmado`.** El IGN no publica
  ninguna longitud: el número lo mide el atlas. **Medir sobre un dato primario no
  convierte la medida en primaria** — un `confirmado` ahí incumpliría R2.
- **La BTN no dice de quién es cada línea**, y el esquema prohíbe `titular` y
  `propietario` por su nombre. Ese dato solo lo publica el operador, que es
  `corporativa`: escribirlo devolvería la capa al muro por la puerta de atrás.
- **La BTN no dice si el tendido está energizado.** Por eso `activo` **no
  aplica** en §6.5: un `false` por falta de dato es la mentira que R7 evita.
- **`recurso-eolico` y `recurso-solar` siguen en gris**, y tras esta pasada con
  **más** motivo, no menos. La alternativa que sí existe —los recintos de 1.389
  parques eólicos, 3.165 fotovoltaicas y 45 termosolares, que la misma BTN trae
  como polígono— no es recurso sino instalación, y renombrar la rama es decisión
  de producto.

---

## datos-v2026.08.19 — La cabecera del manifiesto decía ser de otra release

Corrección sin cambios en los datos. **Ninguna capa se toca**; lo que se arregla
es lo que el manifiesto decía de sí mismo.

### Corregido

- `manifest.json` — la cabecera se había quedado tres releases atrás:
  `schema_version` decía **1.18.0** con el contrato en la **1.21.0**, y `release`
  decía **2026.08.15** estando ya en la 08.18. El campo `_estado` era peor:
  hablaba de «doce capas con datos y siete en preparación» cuando son **dieciséis
  y tres**. En un fichero cuyo propio comentario dice que un manifiesto que
  anunciara capas inexistentes «sería la primera mentira del atlas, y sería sobre
  sí mismo», esa era justo la avería que no podía tener.
- La preparación de datos del visor — **guarda nueva**: compara la release que el
  manifiesto declara con la etiqueta que está sirviendo y **avisa** si no cuadran.
  No rompe, porque el dato servido es el de la etiqueta y está bien; lo que está
  mal es la cabecera, y eso se corrige, no se bloquea.

**De dónde salió el fallo:** de actualizar la entrada de cada capa una a una y
nunca la cabecera, tres releases seguidas. Es la tercera vez en el mismo día que
la lección se repite —la herramienta que ya tiene los dos números delante es la
que debe notar que no coinciden—, después del `Content-Type` de un HEAD en
la guardia de URLs y del «ningún municipio» en el contraste de municipio.

---

## datos-v2026.08.18 — El agua embalsada no es el vaso, es lo que hay dentro

Entra **`agua-embalsada`**, la decimosexta capa. **308 embalses** con su capacidad
y su reserva, verificados uno a uno contra la cuenca que les corresponde:
**49.237 hm³ de capacidad y 34.092 embalsados** en el parte del 4 de agosto de
2026.

**La capa existe porque la pregunta estaba mal formulada.** La ruta obvia era el
shapefile del Inventario de Presas y Embalses del SNCZI, y está tras un
**ALTCHA** —un CAPTCHA de prueba de trabajo que el Ministerio puso a propósito y
que no se salta—. Otras cinco vías fallaron: URLs viejas a 404, no existe WFS de
embalses, el ArcGIS REST del Ministerio no sirve esa capa, el PDF resumen agrega
por cuenca. **La sexta fue darse cuenta de que el shapefile no era el dato:**
«agua embalsada» no es la geometría del vaso, es el agua que hay dentro, y eso el
MITECO lo publica en abierto y sin formulario en el histórico del **Boletín
Hidrológico Semanal** — 719.725 partes desde 1988.

### Añadido

- **`agua-embalsada`** — 308 embalses (292 vigentes, 16 históricos), 73 de uso
  hidroeléctrico declarado.
- **Cada punto está verificado contra su demarcación.** El Boletín no lleva
  coordenadas: la geometría se cose por nombre contra el Nomenclátor del IGN, y
  como un nombre de embalse **no es único en España**, se le pregunta al servicio
  del propio Ministerio en qué cuenca cae cada punto. Esa vuelta cazó **seis
  emparejamientos falsos**, el mejor de ellos un «San Lorenzo» del Ebro que
  resultaba ser el de Tenerife.
- **La normalización de nombres es de cuatro lenguas**, y sus reglas salieron de
  mirar las etiquetas reales: nueve prefijos (`Embalse`, `Pantà`, `Presa`,
  `Pantano`, `Encoro`, `Balsa`, `Charca`, `Embassament`, `Bassa`) y el sufijo
  vasco **`urtegia`** con su genitivo (`Añarbeko urtegia` → Añarbe).
- **Tres embalses rescatados de un falso descarte.** Aldeadávila, Saucelle y
  Cedillo caían fuera de toda demarcación española porque **el cauce que embalsan
  es la frontera con Portugal**. Se comprobó mirando la vecindad y entran con su
  clave explicándolo.

### Huecos

**De los 401 embalses del Boletín se publican 308.** Los 93 que faltan suman
**7.243 hm³ — el 13 % de la capacidad** — y no se omiten en silencio:

| Motivo | Cuántos |
|---|---|
| Sin correspondencia en el Nomenclátor del IGN | 58 |
| Casan con más de un topónimo y no se puede decidir | 29 |
| Casaban de nombre con un embalse de **otra cuenca** | 6 |

Los mayores que quedan fuera, para que se vea qué falta:

| Embalse | hm³ | Motivo |
|---|---|---|
| Ricobayo | 1.145 | ambiguo |
| Grado, El | 400 | sin topónimo |
| Puente Nuevo | 281 | ambiguo |
| Guadalhorce-Guadalteba | 279 | ambiguo |
| Aguilar | 247 | sin topónimo |
| Bao | 238 | sin topónimo |

- **Dieciséis registros son `historico`, no vigentes:** su último parte es
  anterior a 2026 y la serie llega a agosto. Un dato que dejó de alimentarse no
  es una lectura de hoy — y no se borra, se marca.
- **La superficie del vaso no se publica**, y está prohibida en el esquema: vive
  en el shapefile que esta capa no usa y mide el vaso lleno, no el agua.
- **`porcentaje_llenado` está prohibido por derivado**, igual que `activo` en R7.
  Lo calcula quien lo pinte.

---

## datos-v2026.08.17 — Los cables no se pueden dibujar; los aterrizajes sí

Entra **`cables-submarinos`**, la decimoquinta capa. **Seis aterrizajes**, cada
uno con el acto administrativo que lo autoriza y su topónimo del IGN.

**Nace distinta de su propio boceto.** El contrato la imaginaba `mixta`, con
`sistemas[]`, `destinos[]` y un trazado que dibujar. Las fuentes obligan a otra
cosa: **el recorrido de un cable submarino no tiene fuente con licencia
compatible** —el mapa de TeleGeography, la referencia obvia, está bajo
CC BY-NC-SA y `datos/LICENCIA-DATOS.md` lo veta—, y lo que sí publica una fuente
primaria es **dónde toca tierra**, porque ocupar dominio público
marítimo-terrestre exige un acto administrativo. Un registro por aterrizaje, en
puntos. La categoría `trazado` queda declarada y **sin usar**.

### Añadido

- **`cables-submarinos`** — seis aterrizajes:

  | Sistema | Titular | Dónde | Acto |
  |---|---|---|---|
  | Grace Hopper | Telxius | Playa Atxabiribil, **Sopela** | CNC02/21/48/0001 |
  | *(sin nombre en el acto)* | Edge Network | Isla de la Virgen del Mar, **Santander** | CNC02/23/39/0009 |
  | Cádiz–Ceuta | GTD | Playa de Benítez, **Ceuta** | BOE-B-2024-12549 |
  | PENBAL-4 | Telefónica | Platja de la Malva-rosa, **València** | CNC02/17/46/0009 |
  | Canalink | Canarias Submarine Link | Puerto de **Santa Cruz de la Palma** | BOE-B-2011-23242 |
  | Canalink | Canarias Submarine Link | Puerto de **Granadilla** | BOE-B-2013-3436 |

- **La acotación no la elige el gusto, la obliga lo encontrado.** Los actos de
  Costas cubren TODO cable que ocupe dominio público marítimo-terrestre, y ahí
  dentro hay un cable de fibra atado al puente de Txatxarramendi y
  canalizaciones que cruzan las rías del Bidasoa y de Oriñón. Sin criterio, la
  capa se llena de cruces de ría. El que separa sale del propio acto: **entra el
  aterrizaje de un cable que une territorios separados por mar**.

- **Un cable que cruza aguas españolas y no aterriza aquí no entra.** Lo decidió
  el **Europe India Gateway**: su resolución de impacto ambiental
  (BOE-A-2010-2040) describe 15.000 km por aguas de Galicia, el Estrecho y el mar
  de Alborán… y toca tierra en **Gibraltar**. Se archiva, se cita y se queda
  fuera.

### Corregido

- El contraste de municipio — **no caer en ningún municipio no es lo mismo que
  caer en otro.** Lo segundo es una contradicción; lo primero es que no hay
  segundo dato con el que comparar, y en la costa es lo normal: el IGN sitúa la
  etiqueta de una playa en la orilla y los polígonos municipales acaban en la
  costa. Sin esta guarda, esta capa daría dos falsos «¡REVISAR!» en cada pasada.

### Huecos

- **Esta capa no puede afirmar que están todos, y lo dice en su manifiesto.** La
  Ley 11/2022 obliga a los titulares a comunicar sus cables al Ministerio de
  Transformación Digital, pero **el Ministerio no publica la lista**: su punto de
  contacto único solo ofrece el formulario. No existe registro contra el que
  cuadrar, así que se publica lo que un acto administrativo nombra y sitúa.
- **El aterrizaje de Santander no tiene sistema.** El expediente autoriza la
  ocupación y no bautiza el cable: sin nombre y sin destino en todo el anuncio.
  Va con fuente `tipo: hueco` y R4 baja el registro a `parcial`. Poner ahí un
  nombre sacado de la prensa sería justo lo que esta capa evita.
- **Tres pistas localizadas y sin comprobar:** PENCAN-X, Península–Gran Canaria
  (RD 1124/2024, modificado por RD 268/2026); el ramal de Canalink Base 4 a
  Fuerteventura (RD 973/2025); y el aterrizaje de Sagunto (CNC02/25/46/0013). Los
  tres son subvenciones o solicitudes: hay que comprobar si **sitúan** el
  aterrizaje o solo lo financian.
- **El lado peninsular del cable Cádiz–Ceuta.** El acto archivado es el de la
  parte de Ceuta; el de Cádiz será otro expediente.

---

## datos-v2026.08.16 — El idioma, y el mapa de un solo color era falso

Entra **`idioma`**, la decimocuarta capa y la última del horizonte acordado.
**22 registros**: veinte Estados y dos organizaciones internacionales, cada uno
con su artículo citado **literal** y el texto entero archivado.

**No es lo que su nombre sugiere, y la causa es una licencia.** «El idioma como
activo» pedía demolingüística —los seiscientos millones de hablantes, país por
país— y esa ruta está cerrada: el informe del Instituto Cervantes dejó de
publicarse con ese nombre en 2024, no hay conjunto de datos suyo en
`datos.gob.es`, y el aviso legal de `cervantes.org` dice que el acceso «no otorga
a los usuarios ningún derecho» sobre los contenidos, solo «uso exclusivo y
personal». Republicar esa tabla bajo CC BY 4.0 con permiso comercial es lo que
`datos/LICENCIA-DATOS.md` prohíbe. Tercer muro de licencia del atlas, tras el
ShareAlike de la CNMC y el NonCommercial de TeleGeography.

Lo que sí se puede republicar es el **texto legal**: el artículo 13 del TRLPI
excluye de la propiedad intelectual las disposiciones legales y los actos de los
organismos públicos. Una constitución no tiene dueño. Así que la capa cartografía
el **estatuto jurídico** del idioma: dónde es lengua oficial, por qué norma, y en
qué organizaciones internacionales es lengua de trabajo.

### Añadido

- **`idioma`** — 22 registros. El reparto, que es el hallazgo:

  | Estatuto | Cuántos | Quiénes |
  |---|---|---|
  | Oficial por la Constitución | 7 | Colombia, Costa Rica, Guatemala, El Salvador, Honduras, Panamá, Cuba, R. Dominicana |
  | Cooficialidad acotada | 6 | España, Perú, Ecuador, Venezuela, Nicaragua |
  | **Sin norma que la nombre** | **3** | **Argentina, Chile, Uruguay** |
  | Oficial con remisión a la ley | 2 | Guinea Ecuatorial, Unión Europea |
  | Cooficialidad estatal plena | 1 | Bolivia (castellano + 36 lenguas indígenas) |
  | Bilingüe | 1 | Paraguay (con el guaraní) |
  | **Lengua nacional, no oficial** | **1** | **México** |
  | Lengua oficial y de trabajo | 1 | ONU |

- **Cuatro de los veinte países** que cualquier mapa pinta de un solo color no
  dicen lo que ese color afirma. **México** —el país con más hispanohablantes del
  mundo— **no declara idioma oficial**: el español es «lengua nacional», a la par
  que las indígenas y «con la misma validez», por el art. 4 de la Ley General de
  Derechos Lingüísticos de 2003. **Argentina, Chile y Uruguay** no nombran la
  lengua en absoluto.

- **La lengua no se llama igual en todas partes.** Once textos dicen «el
  **español**» y ocho dicen «el **castellano**». Va en campo propio
  (`nombre_en_la_norma`), no en nota al pie: en un documento constitucional esa
  palabra la eligió alguien, y en el caso español lleva discutida desde 1978
  porque «castellano» sitúa la lengua entre las españolas en vez de por encima.

- **Guinea Ecuatorial no nombra el portugués.** La frase que circula en todas
  partes —«sus lenguas oficiales son español, francés y portugués»— no está en su
  Ley Fundamental, que dice «el Español, el Francés **y las que la Ley
  determine**». El portugués es oficial por ley ordinaria de 2007. Diferencia de
  rango, conservada.

### Cómo se publica un negativo

Archivando **el texto en el que la cosa NO está**, para que el lector compruebe
la ausencia él mismo. Los tres registros mudos citan su constitución entera y
cuentan cómo se comprobó:

- **Con control positivo sobre los acentos.** El fichero argentino viene en
  ISO-8859-1 y leerlo como UTF-8 rompe la ñ de «español» y fabrica un cero falso.
  Leído bien trae 47 ñ y 606 ó, encuentra «Nación» 132 veces y «Constitución» 43
  — y aun así, cero menciones a la lengua.
- **Mirando la fecha del documento.** El PDF que sirve hoy la Cámara de Diputados
  chilena da la respuesta correcta y está fechado en **2003**, con la numeración
  anterior a la reforma de 2005. Un negativo se puede fabricar de dos maneras:
  leyendo mal el texto, o leyendo bien un texto viejo.

### Corregido

- La guardia de URLs — el detector de soft-404 usaba el `Content-Type` de un **HEAD**, y
  ese no es de fiar: el servidor del Tribunal Supremo de Elecciones de Costa Rica
  responde `text/html` al HEAD y `application/pdf` al GET de la misma URL. La
  guardia acusaba a una fuente sana. Ahora confirma con GET antes de acusar.

### Huecos

- **El `debate_url` de la capa.** `analisis` se define «enlazada al hilo de El
  Tercio donde se defiende» y ese hilo **no existe todavía**. No se inventa: el
  atlas es autosuficiente y la capa se publica igual.
- **La OEA y la Unión Africana**, donde el español es lengua oficial, **no
  entran**. `oas.org` devuelve 403 a toda captura automática y el Protocolo de
  Enmiendas al Acta Constitutiva de la UA se sirve como escaneo sin capa de
  texto. Se sabe lo que dicen y no se publican.
- **Tres ediciones anteriores a una reforma que no toca el artículo citado**, y se
  dice: Venezuela (PDF de 2005, sin la enmienda de 2009), El Salvador (2014) y
  República Dominicana (2015, sin la reforma de 2024).
- **La captura de Nicaragua se hizo saltando la verificación TLS.** Toda la
  infraestructura oficial nicaragüense está caída y la única copia accesible se
  sirve desde un dominio del Estado con el certificado caducado. Lo que sostiene
  la cita es que el documento se identifica solo: «LA GACETA DIARIO OFICIAL,
  Managua, Martes 18 de Febrero de 2025», Ley n.º 1234, número 32.
- **La geometría no está confirmada, y no puede estarlo.** Los puntos son
  capitales de Natural Earth: dominio público y excelente, pero una compilación
  cartográfica, no un emisor oficial. Su fuente va tipada `corporativa` a
  propósito, para que **R3 impida por sí sola** que nadie la marque nunca como
  confirmada.

---

## datos-v2026.08.15 — Cincuenta y siete planes, y un documento que no era una tabla

Entra **`perte`**: los planes de inversión del PERTE que un documento público
sitúa. Decimotercera capa, **57 registros**, **1.134,7 M€** de presupuesto
financiable y **269,1 M€** de subvención propuesta.

### Qué acota «acotado»

La capa venía declarada con esa palabra desde el primer día y **nadie había
decidido qué recorta**. Recorta esto: **entra lo que un documento público
sitúa**, y el PRTR publica muchísimo dinero y casi nada de geografía.

| Descartado | Por qué |
|---|---|
| Lista de los **100 mayores perceptores** (obligatoria por el art. 25 bis del Reglamento MRR) | Nombre, NIF e importe. **Sin ubicación** |
| **Mapa del PRTR de MITECO** | Sitúa, pero es un **Power BI incrustado**: no publica conjunto de datos que citar |
| **BDNS** | Concesiones sin ubicación de la inversión |

Queda el listado de la Propuesta de Resolución Definitiva del **PERTE VEC —
Sección B, convocatoria 2024**, que trae **provincia y municipio fila a fila**.

### El hallazgo: el documento no es una tabla

Parece una tabla de doce columnas y es **un registro por comisiones de
verificación** — seis, de mayo a octubre de 2025. Un expediente puede aparecer en
más de una, y **la aparición posterior REVISA a la anterior**. Contar filas da
61; los expedientes vigentes son **57**. Publicar 61 habría puesto cuatro
fábricas fantasma en el mapa y sumado su dinero dos veces.

**Que esa lectura es la buena no es una interpretación: lo demuestran los TOTALES
del propio documento, que cuadran al céntimo en las seis comisiones** (las tres
primeras imprimen acumulado; las tres últimas, el total de su comisión). La
prueba fina: BeePlanet pasa de 447.269 € a 626.177 € de subvención entre dos
comisiones, y el acumulado del documento sube **exactamente esos 178.908 €**.

### Añadido

- `perte` — 57 registros, del plan de **343 M€ de Stellantis en Figueruelas** al
  de **1,3 M€ de una fábrica de motos en Utrera**. Sin recortes por tamaño: un
  corte por importe sería una opinión disfrazada de criterio.
- Dos fuentes archivadas: el PDF del Ministerio y el registro de procedencia de
  los 44 puntos municipales del Nomenclátor.
- Una comprobación nueva en el CI: **`codigo_plan` no se repite** (23 pruebas).

### Dos trampas que habrían falseado dinero, y cómo se cazaron

**El extractor de PDF mete espacios dentro de los números** —«1.653.242 ,00» y
«1.157. 269,00»— y coserlos con grupos de captura no basta: `re.sub` consume el
dígito que la siguiente coincidencia necesita, así que reparaba un separador y
dejaba el otro roto. Efecto: la fila de HIMOINSA **desaparecía y sus importes se
los quedaba la fila de al lado** — peor que perderla, porque nada se ve vacío. Lo
delató el cuadre contra los totales, no la vista.

**Y pedir municipios por nombre al IGN devuelve cero** para Valladolid, Elgoibar
o Abadiño, que existen. La vía buena es por recuadro de provincia filtrando
`tipo=Municipio`, y **hay que paginar**: con `limit=3000` el servicio devolvió
199 de 219 municipios en Álava **sin avisar**. La guarda que compara lo devuelto
con `numberMatched` saltó y evitó publicar una capa con municipios que faltaban.

### Lo que encontró la verificación, y no la lectura del código

Dos cosas, y las dos aparecieron *después* de dar la capa por hecha.

**`beneficiario` no era el beneficiario.** El PDF imprime la razón social y el
título del plan **pegados, sin separador**, y el campo los llevaba juntos: un
campo que no significaba lo que decía. Lo enseñó la ficha abierta en el
navegador, no el validador. Lo único que los delimita es la forma societaria al
final del nombre de la empresa —cubre 54 de 57, y las otras tres son variantes
raras del propio listado («SOCIEDAD LIMITADA», «S .L.» con espacio,
«S.L.UNIPERSONAL»)—. Ahora son 57 de 57, y nace `titulo_plan`.

**Y el municipio se escribe de tres maneras distintas.** El contraste devolvió
los 57 puntos al callejero del IGN y **tres no caían en el municipio que
declaraban**. No eran puntos malos: eran formas del mismo nombre. El Ministerio
usa la variante del INE con el artículo pospuesto («Porriño, O»,
«Hospitalet de Llobregat, L'»); el Nomenclátor rotula el punto de otra forma
(«Sagunto», «Oltza Zendea»); y el nombre canónico —el del **polígono**— es un
tercero («Sagunt/Sagunto», «Cendea de Olza/Oltza Zendea»). Se publica el del
polígono, que es contra el que se comprueba, y la forma del listado queda dicha
en la ficha de cada registro afectado.

### Huecos

- **La resolución de concesión, que no es esta.** El documento se titula
  «Propuesta de Resolución **Definitiva**» y aun así **no concede**: la resolución
  se notifica por el registro electrónico, que exige identificación y no es
  públicamente citable. Por eso los campos se llaman `subvencion_propuesta` y
  `prestamo_propuesto`, y el esquema **prohíbe** `subvencion` a secas.
- **El punto es el del municipio, no el de la fábrica.** El listado sitúa por
  nombre de municipio y no publica coordenada. `geo_precision: municipio`, que
  es exactamente lo que es.
- **Dos municipios no casan de nombre entre las dos fuentes.** El Ministerio
  escribe «Cendea de Olza/Oltza Zendea» y «Sagunto/Sagunt»; el Nomenclátor,
  «Oltza Zendea» y «Sagunto». Van emparejados **a mano y por escrito**, con su
  motivo, en vez de adivinados por parecido.
- **Ninguna cifra de empleo**, prohibida en el esquema como en las otras dos
  capas donde aparecía: es previsión del solicitante y nadie la comprueba
  después.
- **Las demás convocatorias del PERTE siguen fuera** —VEC sección A, Chip, ERHA—
  mientras no publiquen su listado con municipio. No es desinterés: es la regla
  de entrada.

---

## datos-v2026.08.14 — La subasta que España ganó y no firmó

Ninguna capa nueva. Entra **una fuente** —los resultados de la subasta IF24 del
Banco Europeo del Hidrógeno— y con ella dos claves en el registro de Huelva de
`hidrogeno-produccion`. Es una release pequeña con un hallazgo que no lo es.

### El hallazgo

De **61 ofertas** evaluadas, la Comisión invitó a firmar a **15** el 20 de mayo
de 2025. Al exigírseles una **garantía de finalización**, varias renunciaron;
CINEA fue llamando a la lista de reserva por estricto orden de precio. El 20 de
enero de 2026 firmaron **seis**, por 270,6 millones.

En la tabla final hay **25 proyectos invitados en algún momento, y 16 son
españoles**. De esos 16:

- **firmaron 3** — H2CRI (Green Devco), NOON (Iberdrola Clientes) y GH2Move-VLC
  (Diverxia): **155 MWe** entre los tres;
- **se retiraron 13**: **1.191 MWe**.

Sobrevivió el **12 %** de la capacidad española invitada. Y **las dos ofertas más
baratas de toda Europa eran españolas** —0,20 y 0,25 €/kg, VILLAMARTIN H2 y
PUERTO SERRANO H2, ambas de Galena Renovables— y **las dos se retiraron**.

**Uno de los retirados toca una capa de este atlas.** «Tharsis-ELY-1», coordinado
por *Cepsa Sustainable Fuels, S.L.* —Cepsa es el nombre anterior de Moeve—,
ofertó 80 MWe a 0,80 €/kg y figura como retirado. THARSIS es como la ficha del
PCI 9.15.4 llama a su Fase 2. El registro de Huelva lo dice ahora en su ficha.

### Añadido

- Fuente: los resultados oficiales de la subasta IF24, archivados.
- `hidrogeno-produccion:huelva-moeve` — dos claves nuevas y su fuente. Capa a
  **1.1.0**.

### Lo que esta release NO hace, y es la decisión más importante

**La subasta no se convierte en capa, y no por falta de calidad de la fuente.**
Es primaria, oficial, completa y trae hasta la capacidad ofertada en MWe de cada
proyecto. Lo que no trae es **dónde está cada uno**: publica nombre de proyecto,
coordinador, país y cifras, y nada más.

Varios nombres invitan a adivinar —VILLAMARTIN, PUERTO SERRANO, TORDESILLASH2,
ARANDAH2, Arteixo, Los Barrios— y **adivinar es exactamente lo prohibido**. Ya se
comprobó en esta misma casa lo que cuesta: los tres parajes llamados «El
Espartal» del nomenclátor están en La Rioja y Navarra, a 120 km del centro de
datos que los mencionaba. Un mapa no se construye con topónimos deducidos de un
nombre comercial.

Así que es la primera vez que el atlas se topa con una fuente **excelente y no
cartografiable**. Se archiva, se cita desde donde toca y se deja escrito por qué
no hay capa. Si algún día una resolución sitúa esos proyectos, la fuente ya está
guardada.

### Huecos

- **Dónde está cada proyecto de la subasta.** Ver arriba: la fuente no lo publica.
- **A qué parte del proyecto de Huelva corresponde la oferta retirada.** El
  emparejamiento entre «Tharsis-ELY-1» (80 MWe) y la Fase 2 del PCI (200 MW) lo
  hace el atlas por nombre y promotor, no la fuente, y las capacidades no
  coinciden. La clave va como `parcial`: **la retirada es un hecho firme; su
  encaje exacto en este proyecto, no**.
- **Por qué se retiró cada uno.** La página nombra la garantía de finalización
  como causa general y no desglosa proyecto por proyecto. No se atribuye motivo a
  ninguno en particular.

---

## datos-v2026.08.13 — Siete electrolizadores, y la diferencia entre un proyecto y una ambición

Entra **`hidrogeno-produccion`**: las plantas de electrólisis españolas que están
en la lista de la Unión. Duodécima capa. **Siete registros, no cinco**, y esa es
la primera cosa que hay que explicar.

### El hallazgo

**Un registro obliga a publicar, no a certificar.** La plataforma de
transparencia PCI-PMI es fuente primaria —lo fijó la release anterior: existe por
el artículo 23 del TEN-E— pero lo que publica de cada proyecto lo redacta **su
promotor**. En la capa anterior eso apenas se notaba, porque el promotor era
Enagás bajo mandato del Consejo de Ministros. Aquí son empresas privadas, y su
texto trae tres cosas mezcladas: **el proyecto, la ambición y el argumento de
venta**.

El caso que obligó a escribir la regla cabe en un párrafo:

> «El grupo EDP tiene la **ambición** de desarrollar **1 GW** de electrólisis en
> la región de Asturias para 2030, **si las condiciones de mercado son
> favorables**. El proyecto Asturias H2 Valley comprende un electrolizador de
> **150 MW** en su fase inicial.»

La cifra que circula es la primera. **La que publica el atlas es la segunda**, y
la primera está en su ficha, entera y con su «si». Es la enmienda 1.17 del
contrato: al campo numérico va la cifra del proyecto definido; la ambición y la
ampliación futura van a `claves` verbatim y con su condicional intacto; la
evaluación promocional —«un impacto positivo significativo en el empleo», «el
38 % del mercado español»— **no se publica en absoluto**.

**Y son siete plantas, no cinco proyectos.** Dos de los cinco nombran y sitúan
dos plantas cada uno: el valle asturiano (Aboño y el futuro centro de Soto de
Ribera) y ValdoEume (Mugardos, 77 MW, y As Pontes, 100 MW). La plataforma dibuja
siete puntos, uno por planta, y el registro es del objeto que la fuente define
(§6.6).

### Añadido

- `hidrogeno-produccion` — siete registros: Huelva (Moeve, 1.000 MW), Aboño
  (EDP, 150), Soto de Ribera (EDP, sin cifra), Mugardos (Triskelion, 77), As
  Pontes (H2Pole, 100), Catalina (500) y ErasmoPower2X (650). **2.477 MW
  publicados.**
- Una fuente nueva archivada: la captura de los cinco proyectos 9.15.x en la
  plataforma PCI-PMI.

### Lo que se comprobó, y salió bien

**Las dos distancias que la fuente declara cuadran con sus propios puntos**, y
eso es lo que confirma qué planta es cada punto: Aboño y Soto están a **29,3 km**
en línea recta contra los «unos 40 km» que declara la ficha —distancia por
carretera—; Mugardos y As Pontes, a **28,0 km**, unidas según la ficha por un
hidroducto de 36 km. Un tubo mide más que la recta.

Esa comprobación deshizo además un falso hallazgo. El punto de Ribera de Arriba
parecía contradecir a su propia ficha, que sitúa el proyecto «en Carreño y
Gijón». Con los dos puntos a la vista se ve que uno **es** Aboño (cae en Gijón) y
el otro es Soto de Ribera, que la misma descripción nombra. **No había
contradicción: había una consulta mal acotada.**

### Corregido

- Nada de releases anteriores. La enmienda 1.17 **describe** cómo se leía ya
  `hidrogeno-red`; no la enmienda, porque allí no había ambiciones que separar.

### Huecos

- **La potencia de Soto de Ribera.** Sus 500 MW son los de un «futuro centro» de
  una segunda fase, no los de un proyecto definido. Es el primer hueco del atlas
  que **crea una regla de redacción y no la ausencia de la fuente**: la cifra
  existe, está en su clave, y no se escribe donde diría otra cosa.
- **La producción del valle ValdoEume.** La ficha da 27.000 t/año para la primera
  fase de las **dos** plantas juntas. Repartirla sería inventarla; escribirla
  entera en cada una la duplicaría. Se queda en clave y el campo se omite.
- **La producción de ErasmoPower2X se publica como techo**, porque así la declara
  la fuente: «hasta 80.000 toneladas». El campo va como `parcial`.
- **Ninguna cifra de inversión ni de empleo**, y no por descuido: los dos campos
  están **prohibidos** en el esquema. El artículo 23 permite no publicar coste
  por sensibilidad comercial, y las cifras que circulan —245 M€ para
  ErasmoPower2X— son de nota de prensa.
- **Dos sumas de la propia fuente que no cierran.** El valle asturiano dice que
  su segunda fase «aportará 1 GW» y la desglosa en 350 + 500 = 850. Y la ficha de
  Huelva tiene una frase a medio corregir en el original, con la decisión de
  inversión a la vez «prevista» y «tomada». Se transcriben tal cual: son la
  prueba de qué clase de texto es una ficha de registro.
- **Un punto que no cae en ningún término municipal**: el de Mugardos queda en la
  ría, a 1,34 km de la villa — y a 1,5 km de la planta de Reganosa que este mismo
  atlas publica en `gas-regasificacion`, del mismo grupo promotor.

---

## datos-v2026.08.12 — La red de hidrógeno, y el trazado de lo que aún no existe

Entra **`hidrogeno-red`** con diez registros y **3.268 km dibujados**. Undécima
capa. Sustituye a la casilla que el horizonte llamaba «H2Med», y el renombre es
la primera cosa que hay que explicar.

### El hallazgo

**El H2Med es la parte pequeña.** De los 3.268 km, **2.634 son la red troncal
española** —dos ejes, de Gijón a Barcelona por el norte y de Gijón a Huelva por
el oeste— que no es el H2Med y que casi nadie nombra. BarMar son 382 y CelZa
252. Llamar «Corredor H2Med» a esta capa habría sido inexacto desde el primer
día, así que el id se cambió antes de publicar nada.

**Y el corredor tiene dos piezas que el relato público olvida.** El Acuerdo del
Consejo de Ministros de 30 de julio de 2024 habilita a Enagás para **cinco**
proyectos, no tres: los dos últimos son **cavernas de sal** para almacenamiento
estacional, una en Cantabria (272 GWh útiles en 2030) y otra en la cuenca
vasco-cantábrica (164 GWh en 2032). Ninguna nota de prensa del H2Med las
menciona; las nombra el BOE, con su número de proyecto.

**La exclusión española creció de uno a cinco entre las dos listas de la Unión.**
La primera lista (2024/1041) dejaba fuera del PIC un solo tramo interior:
Guitiriz–Zamora. La vigente (2026/764) deja fuera cinco: Coruña-Zamora,
Huelva-Algeciras, Zamora-Haro, Guitiriz-Zamora y la conexión Castilla-La
Mancha–Madrid. Son dos hechos con fuente y ninguna conclusión: el atlas los
registra y el debate va a El Tercio.

### Añadido

- `hidrogeno-red` — diez registros: los tres hidroductos (9.1.2 CelZa, 9.1.3 red
  troncal, 9.1.4 BarMar), las cinco estaciones de compresión que la ficha técnica
  nombra y los dos almacenamientos (9.24.1 y 9.24.2).
- Cuatro fuentes nuevas archivadas: el Acuerdo del Consejo de Ministros
  (BOE-A-2024-19047), el Reglamento TEN-E 2022/869, la consulta a la plataforma
  de transparencia PCI-PMI y los términos de reutilización de esa plataforma.

### La fuente, y por qué se puede usar

La geometría sale de la **plataforma de transparencia PCI-PMI** de la Comisión,
que **no es una web de divulgación**: existe por el **artículo 23 del TEN-E**,
que obliga a publicar «información general actualizada, por ejemplo,
**información geográfica**, para cada proyecto de la lista de la Unión». Es el
registro, no la nota sobre el registro.

**Y por una vez la licencia sale verde.** La política de reutilización de la
Comisión (Decisión 2011/833/UE) es CC BY 4.0. Después de que la licencia matara
la potencia instalada de la CNMC (CC BY-SA) y el mallado de Red Eléctrica, esta
vez la puerta estaba abierta. Se acotó la captura a la capa `ENERGY/PCI`: el
mismo visor sirve una capa `PLATTS`, de S&P Global, que es de tercero y no entra.

### Lo que la fuente advierte, y lo que obligó a cambiar

La plataforma dice de su propia geometría que **«no prejuzga y puede no coincidir
con el trazado final del proyecto»**. Ninguno de los cinco valores de
`geo_precision` decía eso, así que nace **`proyectada`** (contrato 1.16.0). No es
un sinónimo elegante de `ilustrativa`: la distinción es de **tiempo**, no de
detalle. Las otras dicen cuánto se ha afinado un contorno; esta dice que **el
terreno todavía no puede desmentirlo**, porque el tubo no está construido. Sobre
una geometría `proyectada` no se mide.

### La trampa que casi entra

La plataforma sirve un campo de longitud (`SHAPE.LEN`) **en metros de Web
Mercator**, inflados por la latitud entre un 26 % y un 38 %. Ahí BarMar «mide»
518 km; sobre el elipsoide mide 382, coherente con los «unos 400 km» que declara
su propia ficha técnica. De ahí sale la regla **R10**: lo declarado cuadra con lo
dibujado al 15 %, medido sobre el elipsoide. El esquema prohíbe además
`shape_len` por su nombre. Las tres longitudes publicadas cuadran: 7,0 %, 5,9 % y
4,6 %.

### Corregido

- `espacios-maritimos:plataforma-continental-canarias` — **su ficha no se podía
  abrir**, y llevaba así desde que se publicó. El visor solo cableaba el clic
  sobre puntos y rellenos, nunca sobre trazados, y esa era la única línea del
  atlas. No lo destapó una revisión del código: lo destapó preguntarse si la capa
  nueva funcionaría. Los datos no cambian; lo que cambia es que ahora se pueden
  leer.

### Huecos

- **La potencia de tres de las cinco estaciones de compresión.** La ficha técnica
  las nombra (Villar de Arnedo, Tivissa, Zamora) y no las dimensiona. Solo llevan
  cifra las dos de los interconectores: 30 MW en Zamora y 60 MW en Barcelona.
- **El coste de los proyectos.** El artículo 23 obliga a publicarlo «excepto toda
  información sensible desde el punto de vista comercial», y en la práctica la
  plataforma no lo da. Las cifras que circulan son de nota de prensa, que R3 no
  admite. El campo está **prohibido** en el esquema, no simplemente ausente.
- **Qué estación es cuál, en la red troncal.** La plataforma publica esos tres
  puntos como «otros activos de hidrógeno», sin nombre propio. Los nombres salen
  de la descripción del proyecto —que nombra exactamente tres— y el
  emparejamiento es del atlas: Villar de Arnedo cae en su propio municipio y los
  otros dos quedan por eliminación. Los tres registros van `parcial` y lo dicen en
  su ficha.
- **Dos nombres no coinciden con su municipio, y se publica el desacuerdo.** La
  fuente sitúa una compresora «en Zamora» y otra «de Tivissa»; sus puntos caen en
  **Coreses** y en **Móra la Nova** (y el tercero, en **Molacillos**). Se conserva
  el nombre de la fuente —es el único con el que identifica cada estación— y cada
  ficha dice dónde cae su punto, contrastado contra el callejero del IGN.
- **Un punto para tres provincias.** La fuente describe 9.24.2 sobre «la cuenca
  vasco-cantábrica, incluyendo Burgos, Guipúzcoa y Álava» y publica una sola
  coordenada, en Amurrio. El punto sitúa el proyecto; no delimita la caverna.
- **«Under consideration» no cabe en el vocabulario.** El estado que la Comisión
  da a 9.24.2 es anterior al de los otros cuatro y no es ninguno de los cinco
  valores de `fase`. Se deja en `tramitacion` marcada como parcial y la palabra
  literal se conserva en `estado_pci`, para no fingir una precisión que el
  vocabulario no tiene.
- **Los cinco electrolizadores españoles no entran** (9.15.4 a 9.15.8: Huelva,
  Asturias, ValdoEume, Catalina y ErasmoPower2X), aunque la misma fuente los
  sirve con geometría y promotor. Son producción, no red, y de promotores
  distintos; el acto que da el perímetro de esta capa no habilita a Enagás para
  ellos. Es trabajo ya localizado para otra capa, no un olvido.

---

## datos-v2026.08.11 — Seis centros de datos, y por qué no puede haber más

Entra **`centros-datos`**: la capa más pequeña del atlas, con seis registros.
Décima capa.

### El hallazgo

**España no tiene registro público de centros de datos.** No es que cueste
encontrarlo: no existe.

- La **base europea** del artículo 12 de la Directiva 2023/1791 obliga a reportar
  a todo centro de ≥500 kW — y se publica **agregada por Estado miembro**. Ni
  instalación, ni ubicación.
- **MITECO** no lleva censo propio: remite a reportar a esa base europea.
- Las cifras que cita toda la prensa —439 MW instalados en 2025, 2.537 previstos
  para 2030, «25 GW solicitados de los que solo 3 son reales»— las publica
  **SpainDC, la patronal**: `corporativa` por §6.1, y R3 no la admite.

Así que la capa se levanta con lo único que nombra, sitúa y dimensiona centros
concretos: **actos administrativos**. Y de ahí sale su tamaño.

### La cifra

Los cinco centros del PIGA «Expansión Región AWS en Aragón» declaran, según el
propio acto, **10.848,2 GWh/año** a plena capacidad. Contra la capa de generación
por provincia de la release anterior —las dos cifras primarias, ninguna
interpretada— eso equivale al **48 % de todo lo que Aragón generó en 2024** y al
**71 % de lo que generó la provincia de Zaragoza**.

El atlas pone los dos números en el mismo mapa y no concluye nada. Para eso está
el hilo de El Tercio.

### Añadido

- `centros-datos` — seis registros, todos del mismo acto (INAGA, resolución de 16
  de julio de 2025, BOA n.º 150): **CAR** (Zaragoza, 143,2 ha, 3.279,7 GWh/año),
  **VDG1** y **VDG2** (Villanueva de Gállego, 13,1 y 83,3 ha, 756,9 y 2.775),
  **WQA** (Huesca, Parque Tecnológico Walqa, 56,7 ha, 2.270,6), **BDE** (El Burgo
  de Ebro, 43,7 ha, 1.766) y el centro **ya existente** de El Burgo de Ebro, que
  el acto menciona al situar el proyectado a 400 m de él.

### Lo que el lector tiene que saber antes de usar estas cifras

- **Ninguno de los cinco consume nada todavía.** Es la demanda declarada a plena
  capacidad de centros que no existen: van con `fase: tramitacion` y la nota lo
  dice antes que el número.
- **El sexto solo tiene nombre.** Del centro existente el acto dice que existe y
  nada más: superficie, consumo y fecha de servicio son hueco declarado. Se
  registra igual — el atlas prefiere un registro con tres huecos a callar lo que
  sabe que está ahí.
- **La geometría se queda en `municipio`**, que §6.6 reconoce como resultado
  legítimo. El acto sitúa por polígono industrial —«Empresarium», «Walqa», «El
  Espartal»— y el Nomenclátor del IGN no nombra ninguno de los tres: los únicos
  «El Espartal» que existen están en La Rioja y Navarra, a 120 km.

### Lo que se dejó fuera, y por qué

- **Los 26 proyectos de centros de datos de Cataluña** (unos 2.000 MW, siete
  polos). Los anunció la Generalitat en **nota de prensa**, no en un acto: no
  están autorizados ni localizados por expediente alguno. Obligó a escribir la
  enmienda de §6.1 del contrato — **el comunicado de un gobierno no es fuente
  primaria; lo es el acto**. Es la primera vez que el atlas tiene que rechazar
  una fuente pública, y la trampa es peor que la privada porque parece oficial.
- **Los tres solicitantes que el BOE sí nombra.** El primer concurso de capacidad
  de acceso de demanda desanonimiza sus códigos en la última tabla:
  **CPD4GREEN, SAU** (nudo Brazatortas 400), **Benbros DC, SL** (Francolí 220) y
  **ACS DC Infra, SLU** (Nuevo Vigo 220). **Los tres, excluidos.** Los 928 MW
  fueron a acero verde (Hydnum, 500 MW), cobre, gases industriales, Stellantis y
  Moeve — ni un megavatio a un centro de datos, porque el criterio principal
  puntúa CO₂ evitado por MW. No entran en la capa: esa resolución define una
  solicitud en un nudo, no un centro en un sitio.
- **La acometida de ACS DC LA PUEBLA** (BOE-B-2026-24883), por lo mismo: ese acto
  define una línea de 400 kV en Villamayor de Gállego, y el centro se llama «La
  Puebla», que es otro municipio.

### Huecos

- **La potencia TI en MW** — la cifra con la que se compara el sector. Ningún acto
  la publica; el esquema la **prohíbe** para que no entre un día desde un informe
  de mercado.
- **Todo lo que no sea el nombre**, en el centro existente de El Burgo de Ebro.
- **Los centros de datos de Madrid y Cataluña**, que son la mayoría del parque
  español y hoy no tienen en esta capa un solo acto archivado.
- Siguen abiertos los de releases anteriores: red de transporte, interconexiones
  en servicio, potencia instalada renovable por provincia.

---

## datos-v2026.08.10 — La generación por provincia, y una casilla que no se podía cumplir

Entra **`generacion-electrica-provincia`**: las 52 provincias con su mezcla de
generación eléctrica de 2024, ocho tecnologías en producción neta. Es la primera
**coropleta** del atlas y llega con nueve capas en total.

### El hallazgo

La casilla del horizonte decía «renovable **instalada** por provincia», y ese
dato **no lo sostiene ninguna fuente primaria con licencia compatible**. Las tres
puertas, y las tres cerradas por motivos distintos:

- **MITECO** desagrega por provincia la **generación** (GWh), no la potencia (MW).
  Es primaria y sirve — para otra cosa que la que la casilla prometía.
- **La CNMC** publica potencia instalada y es **el regulador**, o sea primaria de
  manual. Queda fuera igualmente por dos razones independientes: solo llega a
  **comunidad autónoma**, y sus **204 conjuntos, sin una excepción, van bajo
  CC BY-SA 4.0** — ShareAlike, contagiosa, prohibida por `datos/LICENCIA-DATOS.md`.
- **Red Eléctrica** llega a provincia y es sociedad cotizada: `corporativa` por
  §6.1, y R3 no la deja sostener un `confirmado`.

Hasta hoy el atlas solo había chocado con una licencia contagiosa en fuente
**privada** (TeleGeography, en los cables submarinos). **También pasa con las
públicas**, y por eso la respuesta del catálogo de la CNMC se archiva como prueba
y no como recuerdo.

### Añadido

- `generacion-electrica-provincia` — 52 registros, uno por provincia, con
  `nuclear_gwh` · `eolica_gwh` · `solar_fv_gwh` · `solar_termica_gwh` ·
  `mareomotriz_gwh` · `combustibles_gwh` · `cogeneracion_gwh` · `hidraulica_gwh`
  y su `total_gwh`, todos `confirmado` sobre la Estadística de la Industria de la
  Energía Eléctrica 2024 de MITECO (operación 23103 del IOE).
- Geometría de límites provinciales del **Instituto Geográfico Nacional**
  (Orden FOM/2807/2015, compatible con CC BY 4.0), generalizada por el atlas.

### Lo que el lector tiene que saber antes de usar estas cifras

- **Son provisionales, y lo dicen.** El propio fichero de MITECO se titula «DATOS
  PROVISIONALES A FECHA 27/11/2025». Va en el campo `caracter_dato`, no en una
  nota al pie.
- **Los 52 no suman el total nacional de la misma publicación:** 270.400,35 GWh
  netos frente a los 279.398,17 de su hoja «Nacional», y 8.700,38 de la
  diferencia son de solar fotovoltaica. **No es un fallo del emparejamiento**: las
  cinco provincias extrapeninsulares cuadran al céntimo con la hoja
  «Extrapeninsular», así que el hueco es peninsular. La fuente no lo explica y el
  atlas no lo suple: se publica lo que hay por provincia, sin repartir el resto
  entre nadie. Va escrito en las 52 fichas.
- **Con estas cifras no se puede calcular la cuota renovable.** La fuente no
  desglosa biomasa ni residuos: van dentro de «Combustibles» y «Cogeneración».
  Por eso el atlas no publica ninguna, y el esquema **prohíbe** un campo
  `renovable_gwh`.
- **El borde de cada provincia está simplificado.** La respuesta del IGN son
  1.188.710 vértices y 186 MB; se publican 63.501. Estrena `geo_precision:
  generalizada` (contrato 1.14), que existe precisamente para no llamar «trazado
  a mano alzada» a cartografía oficial afinada. **No sirve para medir**; su
  procedencia, sí. Ni un solo anillo se perdió: 5.236 de origen, 5.236
  publicados.

### Cómo se comprobó que cada cifra está en su provincia

- La **nuclear sale mayor que cero en exactamente cuatro provincias** —Cáceres,
  Guadalajara, Tarragona y Valencia—, que es el mapa de los reactores en
  servicio. La eólica encabeza en Zaragoza, la hidráulica en Ourense y Salamanca,
  la termosolar en Badajoz y Sevilla.
- Los **33 puntos del atlas que declaran provincia** caen todos dentro del
  polígono de la suya. Es el primer cruce que dos capas del atlas pueden hacerse.
- El recuadro de cada provincia publicada queda **dentro de la tolerancia** del
  que el IGN dio: la peor desviación es 0,00139° en Badajoz, con 0,002 de margen.

### Huecos

- **Potencia instalada por provincia** — declarada como hueco en las 52 fichas,
  con sus tres motivos. Sigue sin fuente primaria de licencia compatible.
- **Biomasa y residuos** — no desglosados por la fuente; se quedan dentro de
  «Combustibles» y «Cogeneración».
- **Los 8.997,82 GWh que faltan** para cuadrar con la hoja nacional. Sin explicar
  por la fuente y sin repartir por el atlas.
- Siguen abiertos los de la release anterior: la **red de transporte** (licencia)
  y las **interconexiones ya en servicio** (solo las publica REE).

---

## datos-v2026.08.9 — Las interconexiones eléctricas, y la mitad que no se sitúa

Entra **`electricidad-interconexiones`**: cinco enlaces que cruzan una frontera,
con Portugal, Francia (dos), Andorra y Marruecos. Ocho capas.

### El hallazgo

**La lista de proyectos de interés común que se cita en todas partes está
derogada.** El Reglamento Delegado (UE) 2024/1041 lo sustituye el **Reglamento
Delegado (UE) 2026/764, de 1 de diciembre de 2025**, publicado en el DOUE el 9 de
abril de 2026 y en vigor desde el 29.

Se archivan las dos y se comparan sobre las copias: para España la lista **sí
cambia** —sale «LOS GUAJARES», entran «CHR IRENE» y «PSP CONSO II»—. Las cuatro
interconexiones eléctricas siguen igual en ambas, así que **el contenido de esta
capa no habría cambiado**; lo que habría cambiado es el instrumento citado. Se
cita el vigente y la derogada se archiva con ese nombre.

### La decisión de geometría

**Un enlace tiene dos extremos y el atlas solo puede situar uno.** Ningún
instrumento publica el trazado, y la subestación de enfrente —Cantegrit, Beni
Harchane, la frontera andorrana— está en un país cuyo nomenclátor este atlas no
ha comprobado. Una recta entre las dos sería un esquema; una recta hasta una
coordenada extranjera que no se puede citar sería inventar la mitad.

Así que el registro es **un punto en el extremo español** y el de fuera va
**nombrado y sin coordenada**, en un campo obligatorio para que la mitad que
falta se lea en la ficha.

Y el punto no es la subestación: es **el lugar que el instrumento nombra**. En
cuatro de los cinco casos la subestación todavía no existe, así que la precisión
es `paraje`, no `exacta`.

### Añadido

- **`electricidad-interconexiones` — 5 registros**, todos `proyectada`.
- El **Reglamento Delegado (UE) 2026/764**, su antecesor derogado y un extracto
  del **Plan de desarrollo de la red de transporte 2021-2026** (MITECO, Acuerdo
  de Consejo de Ministros), más la copia del NGBE que sitúa los cinco puntos.
- Contrato **1.13.0**.

### Corregido

- **El municipio de Olza.** El contraste con el IGN cazó que su nombre oficial es
  «Cendea de Olza/Oltza Zendea». Se usa la forma del IGN.
- **Un punto mal elegido, antes de publicarse.** La búsqueda por recuadro devolvía
  «Cortijo del Puerto de la Cruz» —una edificación a 600 m del paso de montaña que
  da nombre a la subestación— porque la coincidencia era por subcadena. Así se
  elige mal un punto sin enterarse; la captura exige ahora etiqueta exacta.

### Huecos

- **Las interconexiones YA EN SERVICIO no están en esta capa.** El plan las nombra
  de pasada —habla de un «tercer eje» con Marruecos, y sus tablas citan Arkale,
  Hernani-Argia y Baixas-Vic— pero no las inventaría con sus extremos. Quien
  publica ese inventario es **Red Eléctrica, sociedad cotizada**, y por R3 no
  sostiene un confirmado. Declaradas, no omitidas.
- **El estado de ejecución no se sabe.** Lo que se publica es lo que dicen los
  instrumentos de planificación, no un parte de obra: ninguna fuente archivada
  acredita en qué punto está hoy cada enlace. Las cinco van `proyectada` y
  ninguna pasa de `parcial`.
- **La red de transporte sigue sin publicarse, y es por licencia.** El mallado lo
  publica Red Eléctrica y no hay cartografía compatible con CC BY 4.0.
  `red-electrica` se retitula «Red eléctrica (transporte)» y sigue declarada y
  vacía.
- **Fontefría no se sitúa.** El NGBE no nombra ese lugar y la subestación no
  existe; el registro del enlace con Portugal se sitúa en Beariz, que sí está
  nombrado, y lo dice.
- **La capacidad de intercambio no se publica.** Ni la de cada enlace ni el
  famoso porcentaje de interconexión: la cifra la da Red Eléctrica y esta tanda
  no ha archivado ninguna fuente reguladora que la sostenga.

### Y una nota sobre el archivo

El Plan de desarrollo de la red de transporte son **535 páginas y 355 MB**. No
cabe en GitHub y no tiene sentido guardarlo entero, así que se archiva un
**extracto de las catorce páginas que sostienen la cita**, sin retocar, con las
páginas y la URL del completo dichas dentro del propio fichero. Son 27 MB porque
las fichas de actuación llevan sus mapas embebidos. Recortarlo más habría sido
citar algo que nadie puede comprobar.

---

## datos-v2026.08.8 — Los derechos mineros, y el punto → polígono que NO se hace

Entra **`minerales-derechos`**: 106 derechos del Catastro Minero con su
perímetro. Es la **primera capa del atlas con `geo_precision: exacta`**, y lo es
por un motivo estrecho — la geometría *es* el derecho que la fuente define.

### El hallazgo, y es feo

**La exportación en CSV del Catastro Minero trunca las coordenadas a 424
caracteres.** De los 106 derechos que interesan, **38 vienen cortados** y en
**29 lo que se pierde es una esquina real**, no el vértice de cierre —
comprobado comparando el fragmento truncado contra el primer vértice.

Un polígono al que le falta una esquina **cierra igual y parece correcto**. Es
el peor fallo que este atlas puede cometer, y lo sirve la fuente.

El mismo endpoint con `extension=SHP` devuelve el shapefile completo, y su
`.prj` declara **ETRS89 con TOWGS84 a ceros** — confirmando por la fuente lo
que F1 dedujo midiendo 2.426 vértices. **Toda la geometría de esta capa sale del
shapefile; ninguna del CSV**, y está comprobado registro a registro.

### Lo que NO se hace, y por qué

PLAN.md preveía subir `minerales-proyectos` de punto a polígono con este mismo
catastro. **No se hace.** El catastro define *derechos*, no minas, y qué derecho
«es» un proyecto no lo contesta ningún documento: **TOLSA tiene 54 derechos solo
en Madrid**, Solvay seis en Granada, Iberian Resources cuatro entre Badajoz y
Cáceres. Elegir uno sería una atribución sin fuente.

Se publican las dos capas, se solapan en el mapa, y **el lector ve el solape**,
que sí es un hecho.

### Añadido

- **`minerales-derechos` — 106 registros**: 55 vigentes, 17 en tramitación,
  **34 extinguidos**. Regla de selección mecánica y declarada: los derechos cuyo
  titular es un promotor que el atlas ya registra.
- **Ocho shapefiles provinciales** archivados en `fuentes/`.
- Contrato **1.12.0**, con la enmienda de §6.6: «del objeto mismo» quiere decir
  del objeto que la fuente define **y de ningún otro**.

### Corregido

- **Nueve registros con el anillo exterior al revés**, cazados por §7.4 antes de
  publicarse. Agrupé los anillos por índice; el shapefile los distingue por
  **orientación** (exterior horario, hueco antihorario — al revés que RFC 7946).
  Con eso bien, «LA MONAGUERA» resulta ser **tres piezas disjuntas** y «DEMASÍA A
  CARABAÑA» tiene **un hueco de verdad**.
- **Mojibake silencioso.** El `.dbf` trae la página de códigos sin declarar
  (0x00) y el contenido en UTF-8: leerlo como latin-1 —lo que manda el formato de
  1998— convierte «CARABAÑA» en «CARABAÃ‘A» sin lanzar un solo error.
- **Ortografía.** La exportación en shapefile **quita las tildes agudas** de los
  campos de vocabulario y de parte de los nombres («Concesion de Explotacion»,
  «SANTA LUCIA»), aunque conserva la eñe. La prosa se toma del CSV, que las
  escribe bien; la geometría, solo del shapefile. Cada exportación sirve para lo
  que hace bien, y las dos se citan en cada ficha.

### Lo que apareció al cruzar las dos exportaciones

**El catastro se contradice consigo mismo en dos derechos.** «DON PEPE» figura
como *Trámite/otorgamiento* en el CSV y como *Otorgado* en el shapefile; «UGENA
1 (3365-TO)», como *Otorgado* en uno y **Caducado** en el otro. No es un fallo de
lectura: son dos exportaciones del mismo registro, descargadas el mismo día.

Los dos bajan a `situacion__v: parcial` y lo dicen en su ficha. **El atlas
registra el desacuerdo; no lo resuelve** — y no lo habría visto nunca leyendo una
sola de las dos copias.

### Huecos

- **`superficie_declarada` no concuerda con el perímetro, y se publica igual.**
  Cada unidad vale ~0,30 km² con el código «C» y ~0,22 km² con el código «H»,
  que el catastro rotula «hectáreas» (0,01 km²). El atlas **no elige** entre dos
  datos de la misma fuente: publica el perímetro, que es el que esa fuente
  dibuja, y deja el campo verbatim, sin `__v`, con su desacuerdo dicho.
- **Solo ocho provincias**, las que tienen proyectos registrados. TOLSA o Solvay
  pueden tener derechos en otras; no se insinúa que no los tengan.
- **Un derecho no dice que haya mina.** Por eso `activo` figura como «no aplica»
  en §6.5: se puede tener una concesión décadas sin abrir nada.
- **Qué derecho corresponde a cada proyecto sigue sin saberse**, y esta release
  no lo insinúa: no hay ningún campo que los enlace.

---

## datos-v2026.08.7 — Las aguas sin delimitar, y las dos leyes que no dibujan nada

Entra **`espacios-maritimos`** y con ella **se cierra F3**. Seis capas
publicadas.

### El hallazgo

**Ni la ley marroquí 37-17 ni la 38-17 contienen una sola coordenada.** Se
comprobó sobre el texto íntegro del Boletín Oficial marroquí n.º 6870, ahora
archivado: la 37-17 fija el mar territorial en 12 millas «desde las líneas de
base» y remite sus coordenadas a un reglamento posterior; la 38-17, en su
artículo 11, manda delimitar la zona económica exclusiva «a fin de alcanzar un
resultado equitativo, en particular con los Estados cuyas costas son adyacentes
o están frente a las del Reino de Marruecos» — contempla **acuerdo**, no
trazado unilateral.

Seis años de titulares dicen que Marruecos dibujó una línea sobre aguas
canarias. Los instrumentos no dibujan ninguna línea. Va en la ficha, con la cita.

### Añadido

- **`espacios-maritimos` — 4 registros.** La zona sin delimitación acordada
  Canarias–Marruecos (ilustrativa), el límite exterior de la plataforma
  continental al oeste de Canarias (448 puntos fijos), el contorno perimetral de
  las aguas canarias (Ley 44/2010) y el Monte Tropic.
- **Siete fuentes primarias**, todas archivadas: el BO marroquí, la nota verbal
  marroquí ante la ONU, la respuesta española, el resumen ejecutivo de la CLCS,
  la Ley 44/2010, el RD 2510/1977 y el gazetteer GEBCO/SCUFN.
- Contrato **1.11.0**: la capa en §10, su `categoria` en §9, su fila en §6.5 y
  el primer `ambito: mundo` con geometría real.

### Corregido

- **`espacios-maritimos:contorno-aguas-canarias` · geometría** — el anillo del
  Anexo I recorre el archipiélago en sentido **horario**; RFC 7946 pide
  antihorario para el exterior. Invertido al construirlo.
- **Una suposición de la tanda anterior**, que estaba escrita en dos sitios: se
  dio por hecho que un polígono ilustrativo obligaría a la capa entera a ser
  `ilustrativo` por R5. **No es así** — R5 va de la capa hacia la geometría y no
  al revés. Por eso esta capa es `verificado` y contiene una zona `ilustrativa`.
- **La otra suposición**: se dio por perdido cualquier instrumento marroquí.
  Estaba en `sgg.gov.ma`.

### Huecos

- **El perímetro de la zona sin delimitar.** Ningún instrumento lo dibuja. Lo
  que se publica es un **esquema del corredor** entre el archipiélago y la costa
  africana, con su fuente `hueco`: **no delimita el alcance de la superposición
  de derechos**, que se extiende mucho más al suroeste. Trazar una línea mediana
  sería dictar el resultado que los dos Estados dejan a un acuerdo.
- **Las leyes de las costras del Monte Tropic.** Las cifras de telurio y cobalto
  que circulan vienen de campañas científicas que este atlas no ha archivado, y
  **no se publican**. Del monte se registra su nombre y su posición, con la
  autoridad que lo nombra.
- **La Comisión no ha emitido recomendaciones** sobre la presentación española
  de 2014. Un límite depositado no es un límite reconocido, y la ficha lo dice.
- **Marruecos y España no discuten dónde va una línea, sino qué instrumento
  aplica.** Marruecos funda su objeción en la Ley 44/2010; España responde que
  «no define líneas de base y no ha sido en modo alguno empleada» y remite al RD
  2510/1977. El desacuerdo queda registrado, no resuelto.
- **Los dos ficheros grandes se archivan enteros.** El BO marroquí (165 páginas)
  y el resumen ejecutivo (40) pesan 4,5 MB cada uno. Un boletín recortado a las
  tres páginas que interesan deja de ser el boletín.

---

## datos-v2026.08.6 — Dieciséis dominios, y la última regla que era solo prosa

Entra la capa **`minerales-dominios`** y, con ella, **R8 deja de ser una regla
sin diente**. Desde el contrato 1.10 no queda ninguna: las nueve reglas de §6.4
las comprueba el CI.

### Añadido

- **`minerales-dominios` — 16 dominios**, migrados de la demo v4. Primera capa
  de polígonos del atlas. Faja Pirítica · Estaño–litio de Galicia · Wolframio
  del oeste · Litio–wolframio de Extremadura · Ossa-Morena · Oro del noroeste ·
  Fluorita de Asturias · Zinc cantábrico · Magnesita de Eugui · Potasas del
  Bages · Mercurio de Almadén · Wolframio de Alcudia · Tierras raras del Campo
  de Montiel · Celestina de Granada · Arcillas especiales del Tajo · Sierra de
  Cartagena.
- **R8 con diente.** Un dominio `desarrollo` o `historico` no puede contener una
  mina en producción. Es la **única regla que compara dos capas**, así que vive
  fuera de la validación por fichero: se comprueba cuando ambas entran en la
  misma pasada, que es siempre en CI.
- Contrato **1.10.0**: R8 entra en la tabla de §6.4, `caracter` y `categoria`
  dejan de ser dos campos con los mismos cinco valores, y §9 estrena los colores
  de la capa.

### Corregido

- **`oro-del-noroeste` · geometría** — el anillo venía en sentido **horario**
  desde la demo. RFC 7946 pide antihorario para el exterior, y hay visores que
  pintan del revés lo que reciben así. Invertido al migrar.

### Huecos

- **Los dieciséis perímetros, todos.** Ninguno tiene cartografía de fuente
  primaria: son trazados a mano alzada, cada uno con su fuente `tipo: hueco`
  diciéndolo, y por R4 ninguno pasa de `no_verificado`. **La capa entera es el
  hueco declarado**, no un adorno con una nota al pie.
- **El ascenso a cartografía del IGME no se ha hecho**, y no se puede hacer de
  uno en uno: R5 es regla de **capa**, no de registro, así que verificar la Faja
  Pirítica obligaría a verificar las quince restantes o a partir la capa en dos.
  Queda pendiente y dicho.
- **Los `distritos` son nombres, no coordenadas.** Riotinto, Tharsis o Reocín
  figuran como texto; quien quiera su posición la busca en `minerales-proyectos`
  o en el nomenclátor. Enumerarlos sin coordenada es honesto; fabricársela, no.
- **«Mina Circular» no cae dentro de ningún dominio.** No incumple nada —R8
  gobierna lo que un dominio SÍ contiene— pero es el choque entre un trazado a
  mano alzada y un centroide municipal en el mismo mapa, y queda anotado antes
  de que parezca un dato.

---

## datos-v2026.08.5 — El color deja de vivir en el código

Release **solo de vocabulario**: ningún registro cambia. Cada categoría de §9
lleva ahora su **`color`**, y con eso el mapa deja de pintar tres capas del
mismo gris.

### Corregido

- **`vocabularios.json` · `categoria`** — las diez categorías de las cuatro
  capas publicadas ganan `color`. Lo destapó tener cuatro capas encendidas a la
  vez: la paleta vivía cableada en el visor y solo conocía las tres categorías
  de `minerales-proyectos`, así que nuclear, gas y el tablero caían todos en el
  gris de reserva. Cuatro capas, indistinguibles en el mapa.

El color es **dato**, no decisión del programa, por el mismo motivo que el
rótulo y el orden: el vocabulario dice de sí mismo que el visor «no reordena, no
traduce y no elige colores». Consecuencia asumida: **cambiar un color exige una
release**, como cualquier cambio de vocabulario.

### Contrato

Sube a **1.9.0**: §9 documenta el campo `color` y su consecuencia.

---

## datos-v2026.08.4 — Gas y regasificación, y la cifra que nadie publica

Cuarta capa. Con ella **F3 cumple su criterio de hecho**: las tres capas que
pedía por su nombre —límites y soberanía, nuclear, gas y regasificación— están
publicadas, y ninguna ficha tiene prensa sosteniendo un confirmado.

### Añadido

- **`gas-regasificacion`** — las siete plantas de GNL del sistema gasista:
  Barcelona, Cartagena, Huelva, Bilbao, Sagunto, Mugardos y El Musel.

### Huecos

El hallazgo de esta tanda es lo que **no se pudo escribir**:

- **La capacidad de almacenamiento en m³ de GNL no está en ninguna fuente
  alcanzable.** Es la cifra que aparece en cualquier artículo sobre las
  terminales españolas, y no la publica ni el informe de supervisión del sistema
  gasista de la CNMC —descargado y revisado entero— ni las páginas de los
  operadores. Los dos campos de capacidad se declaran en el contrato y **nacen
  vacíos**, con su hueco en las siete fichas.
- **Enagás es una sociedad cotizada.** PLAN.md decía «fuentes Enagás/CNMC» sin
  notarlo: por §6.1 lo que Enagás publica sobre sí misma es `corporativa` y por
  **R3** no puede sostener un confirmado. Queda escrito en §10.

### Lo que sí quedó acreditado, y no lo compila nadie

- **Los topes de El Musel**, el único cuya capacidad está fijada por
  instrumento: 45 GWh/día (Orden TED/578/2023) y 11.744 GWh/año (resolución de
  26 de julio de 2024). Por eso su categoría es `logistica_gnl`: se construyó
  como regasificadora, se hibernó y opera como centro logístico.
- **Los días de 2025 por debajo del mínimo técnico**, planta a planta: Musel 27,
  Huelva 17, Mugardos 15, Barcelona 9, Cartagena 5, y **cero** en Bilbao y
  Sagunto.
- **Dos municipios que la prensa redondea:** la planta «de Huelva» está en
  **Palos de la Frontera** y la «de Bilbao» en **Zierbena**, y lo acredita en
  ambos casos una resolución del BOE.

### Geometría

Precisión de **municipio** en las siete, dicho en cada ficha: **el Nomenclátor
del IGN no nombra ninguna terminal**. Se barrieron los siete puertos —67
topónimos en Barcelona, 648 en la ría de Ferrol— y las únicas coincidencias eran
palabras que contienen «gas» por casualidad: *Pocilgas*, *Refradigas*, *Arangas*.

El contraste geográfico cazó de paso que el municipio se llama oficialmente
**«Sagunt/Sagunto»**, no «Sagunto» a secas.

### Contrato

Sube a **1.8.0**: §10 con el apartado de la capa, §9 con su `categoria` y §6.5
con su fila en la tabla de `activo`.

---

## datos-v2026.08.3 — El tablero: ocho territorios, ningún veredicto

Tercera capa, y la que da al atlas su carácter. El árbol **El tablero** estaba
vacío desde F0.

La doctrina quedó fijada hace tiempo: *el atlas registra que la reclamación existe y
quién la sostiene; no dicta veredicto*. Esta capa es esa frase convertida en
datos, con **dos campos simétricos** —`administrado_por` y `reclamado_por`— con
los que Gibraltar y Ceuta se describen con la misma estructura, y una
`categoria` de dos valores que dice **quién reclama, no quién tiene razón**.

### Añadido

- **`limites-soberania`** — ocho registros: `gibraltar`, `ceuta`, `melilla`,
  `penon-velez-gomera`, `penon-alhucemas`, `islas-chafarinas`, `perejil` y
  `olivenza`.

Es además la primera capa del árbol `tablero`, y por tanto la primera que
ejercita la rama «no aplica» de §6.5: su `activo` es `null` y el filtro de
explotación no la esconde nunca.

### Huecos

Esta capa es, sobre todo, un inventario de argumentos sin documento:

- **Ninguno de los tratados que se citan está archivado.** Utrecht (1713),
  Badajoz (1801) y el artículo 105 del Acta Final de Viena (1815) aparecen en
  cada discusión sobre Gibraltar y Olivenza, y no se ha localizado texto de
  **emisor autorizado** de ninguno. Van como huecos, y lo que sostienen queda
  `no_verificado`.
- **Tampoco hay instrumento marroquí archivado** para las reclamaciones sobre
  Ceuta, Melilla, las plazas de soberanía o Perejil. Se registra que la
  reclamación existe; no que esté acreditada.
- **La lista de Territorios No Autónomos de la ONU no se pudo archivar**: el
  servidor responde 202 sin contenido a las descargas automáticas.
- **Las plazas de soberanía no tienen estatuto que citar**, a diferencia de
  Ceuta y Melilla. Su régimen concreto queda pendiente.
- **`perejil` es el único `no_verificado` global** de la capa. De la isla lo
  único documentado es dónde está: quién la administra, con qué título y qué se
  acordó en 2002 no tienen texto público localizable.
- **Las aguas sin delimitar quedan fuera de esta tanda** —Canarias–Marruecos y
  su cruce con el monte Tropic—: piden polígono `ilustrativo`, activan **R5**
  sobre la capa y merecen su propia discusión cartográfica.

### Lo que sí quedó acreditado

Los **Estatutos de Autonomía de Ceuta y Melilla** (LO 1/1995 y 2/1995, texto
consolidado del BOE), la **posición oficial española sobre Gibraltar** (MAEC) y
la **Decisión (UE) 2026/1732 del Consejo** — que responde lo que F3 pedía
verificar sobre el acuerdo UE–Reino Unido: **firmado el 14 de julio de 2026 y en
aplicación provisional desde el 15, sin ratificar**, y sin alterar la posición
de ninguna parte sobre la soberanía. Comprobado sobre la copia archivada.

### Dos hallazgos de geometría

- **El Nomenclátor del IGN no nombra Gibraltar.** Tres resultados por etiqueta,
  todos falsos amigos en Huelva y Badajoz; 69 topónimos en el recuadro del
  Peñón, ninguno es Gibraltar. Su punto va puesto a mano y declarado
  `ilustrativa`: es la única coordenada de la capa sin fuente cartográfica.
- **«Melilla» estuvo a punto de quedarse en Huelva.** La consulta por nombre
  devuelve primero un homónimo onubense. Se eligió por posición — es la clase de
  error que no da ningún aviso y deja el dato a 400 km con aspecto de correcto.

### Contrato

Sube a **1.7.0**: §10 con el apartado de `limites-soberania` y §9 con su
`categoria`. No toca §6.5, que ya declaraba el tablero como «no aplica».

---

## datos-v2026.08.2 — Nuclear: siete reactores, y un calendario sin documento

Segunda capa del atlas, y la primera que estrena el mecanismo **sin ser la
primera**: `nuclear` entró por el manifiesto y apareció en el visor sin tocar
una línea de código de panel, que era el criterio con el que se cerró F2.

Ocho documentos nuevos en `fuentes/`: las **seis órdenes ministeriales del BOE**
que renuevan la autorización de explotación de cada central, la ficha de
**MITECO** con potencia, tecnología y titulares, y los topónimos del **IGN** que
sostienen la geometría.

### Añadido

- **`nuclear`** — siete registros, uno **por reactor** y no por central:
  `almaraz-i`, `almaraz-ii`, `asco-i`, `asco-ii`, `cofrentes`, `vandellos-ii` y
  `trillo-i`. Cada grupo tiene su propia autorización, su fecha y su potencia:
  son siete hechos, no cinco.

Los dos reactores de un mismo emplazamiento **comparten coordenada**, y se dice
en la ficha: separarlos exigiría una fuente que sitúe cada edificio y no la hay.
Los siete pasan el contraste de municipio contra los límites del IGN.

### Huecos

Esta capa es, sobre todo, un inventario de lo que se da por sabido sin documento:

- **El «calendario de cierre de 2019» no tiene fuente pública.** Se cita en todas
  partes como un hecho —Almaraz 2027 y 2028, Ascó 2030 y 2032, Cofrentes 2030,
  Vandellós II y Trillo 2035— pero procede de un **Protocolo de intenciones
  privado** entre Enresa y los titulares, y lo único localizable son notas de
  prensa. Así que **`cierre_acordado` va vacío en cinco de los siete**, con su
  hueco declarado, en lugar de rellenarse con la fecha que circula.
- **Solo dos lo llevan confirmado**, y por una razón concreta: sus propias
  órdenes llaman a la fecha de expiración «fecha de cese definitivo de
  explotación». Cofrentes lo dice literalmente y Ascó I también.
- **Tres órdenes no dan fecha de expiración**: dicen «validez de diez años» desde
  una fecha. Ascó II, Vandellós II y Trillo I llevan por eso su
  `autorizacion_hasta` como **`parcial`**, con una clave que reproduce el texto:
  es aritmética, no es una cita, y ni siquiera consta si el último día es el 1 o
  el 2 de octubre de 2031.
- **La prórroga de Almaraz no mueve ninguna fecha.** El CSN informó
  favorablemente en julio de 2026, pero **MITECO no ha resuelto**: lo autorizado
  sigue siendo el 1 de noviembre de 2027 para el grupo I y el 31 de octubre de
  2028 para el II. Queda como clave `no_verificado` con su hueco, y por **R4**
  eso impide el confirmado global de ambos. El «efecto dominó» sobre Ascó I y
  Cofrentes que anticipan los titulares es previsión en prensa: no toca nada.
- **El CSN y el BOE discrepan en un día** sobre Ascó I —2 de octubre de 2030
  frente al 1—. Se publica la de la orden, que es el instrumento, y la
  discrepancia queda escrita en la ficha.
- **Las centrales cerradas quedan fuera de esta tanda**: Garoña (2017),
  Vandellós I (1989) y Zorita (2006) necesitan su propia pasada de archivo
  —fecha de cese, estado de desmantelamiento, ENRESA— y meterlas a medias sería
  peor que no meterlas.

### Contrato

Sube a **1.6.0**. §10 da su apartado a `nuclear` con **dos campos de fecha**
—`autorizacion_hasta`, de la orden del BOE, y `cierre_acordado`, del calendario—
porque son hechos distintos y en España no coinciden: Vandellós II está
autorizado hasta 2030 y su cierre acordado se cita en 2035. Con un solo campo
habría que elegir cuál es «la» fecha, y quien mire el mapa no sabría cuál ve.
§9 añade su vocabulario de categoría y §6.5 su fila en la tabla de `activo`.

---

## datos-v2026.08.1 — La geometría deja de ser una promesa

La release anterior declaró su propia deuda: los once puntos eran aproximación
al municipio **sin fuente cartográfica primaria**, y ninguna coordenada servía
para medir. Esta la salda hasta donde la evidencia da, y dice dónde no da.

Dos documentos entran en `fuentes/`: la respuesta del **Nomenclátor Geográfico
Básico de España** (IGN) para los ocho topónimos usados, y un extracto del
**Catastro Minero** (MITECO) con los 23 derechos que corroboran dónde cae cada
cosa. Se archiva la respuesta del servicio con su URL de consulta, no un resumen:
la coordenada tiene que poder comprobarse sin fiarse de nadie.

**Segunda release del mismo mes**, de ahí el sufijo `.1` que estrena el contrato
en §8. `datos-v2026.08` no se mueve ni se reescribe.

### Corregido

Ocho registros pasan de `geo_precision: municipio` a **`paraje`**, con la
coordenada del topónimo del IGN, su `geo_fuente__f` a la fuente archivada y el
CRS declarado en `geo_fuente`:

- **`aguablanca`** — −6.2708, 38.0805 → **−6.1767, 37.9541**. *Paraje
  «Aguablanca». **Se movía 16,2 km**: el punto viejo caía sobre un portal del
  casco urbano de Monesterio. Corrobora el catastro, con la reserva «AGUA
  BLANCA» de Río Narcea Recursos S.A., el promotor que reconoce el DOUE.*
- **`p6-metals`** — −6.0491, 39.1836 → **−6.10629, 39.07752**. *Vértice
  geodésico «La Parrilla», 12,7 km al sur. Tres concesiones de wolframio de
  Iberian Resources Spain S.L. a menos de dos kilómetros.*
- **`matamulas`** — −3.363, 38.638 → **−3.2633, 38.61987**. *Montaña «Cerro de
  Matamulas», 8,9 km. Los permisos «MATAMULAS» y «REMATAMULAS-2» (este, de
  tierras raras) de Quantum Minería caen ahí.*
- **`escuzar`** — −3.749, 37.087 → **−3.80218, 37.0517**. *«Minas de Escúzar»,
  6,1 km. La concesión de estroncio «CARBONERO 2» de Solvay Minerales, a 150 m.*
- **`las-navas`** — −6.3927, 39.7896 → **−6.37231, 39.8385**. *«Mina las Navas»,
  5,7 km. Único de los ocho sin corroboración en el catastro.*
- **`montevives`** — −3.66, 37.11 → **−3.69098, 37.10274**. *Vértice geodésico
  «Montevives», 2,9 km. Tres concesiones de estroncio a menos de 300 m.*
- **`mina-doade`** — −8.2846, 42.4665 → **−8.31852, 42.46576**. *Lugar de Doade,
  2,8 km. Es el sitio que da nombre al proyecto, no la labor minera.*
- **`sepiolita-madrid`** — −3.6083, 40.4043 → **−3.59808, 40.4129**. *«Sepiolita»,
  1,3 km. El Grupo Minero Victoria son seis concesiones de TOLSA en ese entorno.*

Los once puntos —también los tres que no se movieron— se comprobaron por
punto-en-polígono contra los límites administrativos del IGN: **los once caen
dentro del municipio que la ficha declaraba**.

### Degradado

- **`las-cruces` baja de `confirmado` a `parcial`.** No es un cambio de
  geometría: es lo que la pasada de geometría descubrió. El topónimo «Las
  Cruces» del IGN cae en **Guillena** y la concesión «LAS CRUCES» de Cobre las
  Cruces S.A. es **multiparte** y toca **Salteras**; la ficha dice **Gerena**, y
  ese campo nunca tuvo fuente. No se elige entre los tres términos ni se inventa
  la lista: se declara el hueco, y **R4** hace el resto. Se sabe lo mismo que
  ayer; lo que hay hoy es constancia de que algo está sin resolver.

### Huecos

- **La geometría de tres registros sigue en `municipio`**, y ahora se sabe por qué:
  - **`circular`** — es una planta industrial, no una mina. Ni derecho minero en
    el emplazamiento ni topónimo: 179 revisados en el entorno, ninguno pertinente.
  - **`el-moto`** — **957 topónimos barridos** en 30×25 km alrededor de Abenójar,
    ni uno dice «Moto». Existe la concesión «SOL I (EL MOTO)» (wolframio,
    otorgada, en Abenójar), pero es un perímetro de 4,3×3,7 km: un punto sacado de
    ahí no sería mejor dato, solo mejor vestido.
  - **`las-cruces`** — el conflicto de municipio de arriba. Falta la autorización
    ambiental o la resolución de la Junta que enumere los términos afectados.
- **`matamulas` sigue `no_verificado` global** pese a ganar sus dos primeras
  fuentes primarias. Lo que le falta es el expediente —resolución de la Junta,
  sentencia del TSJ, casación— y el catastro no lo sustituye.
- **Señales levantadas, no resueltas.** Tres promotores donde la ficha y el
  catastro no coinciden: `montevives` (la ficha dice Canteras Industriales; las
  concesiones están a nombre de particulares de la familia Fajardo Álvarez),
  `el-moto` (Abenojar Tungsten en el DOUE; Mining Hill's en el catastro) y
  `mina-doade` (Recursos Minerales de Galicia en el DOUE; el permiso de litio
  colindante es de Solid Mines España). Titular y operador pueden ser distintos;
  hoy no está verificado. Y los tres permisos de `matamulas` figuran
  **caducados**, dato que no se traslada a `fase`: un permiso caducado no dice
  por sí solo si el proyecto está parado o cerrado.

### Contrato

Sube a **1.3.0**. `geo_fuente` admite `__v`/`__f` (§5) y la geometría deja de ser
el único dato del atlas cuya procedencia no se podía comprobar. Nuevo **§6.6**
con la tabla de qué precisión concede cada clase de fuente, y nueva regla **R9**:
una `geo_precision` de `exacta` o `paraje` exige fuente primaria. Entra con
diente y con dos casos de prueba —18 pruebas—, no declarada y pendiente.

Dos cosas del contrato salieron de tocar la fuente, no de escribirlo:

- **El CRS, resuelto por evidencia.** La malla legal de cuadrículas mineras de
  20″ (Ley 22/1973, art. 76) está confeccionada en **ED50**, y los 2.426 vértices
  de los 306 derechos de sección C de Badajoz caen a un desfase mediano de
  −4,45″ en latitud y +4,84″ en longitud de esa malla —137 m y 118 m—, que es
  exactamente la transformación ED50→ETRS89. Luego lo que publica el MITECO **ya
  está en ETRS89**, igual que el NGBE. No había reproyección que hacer, y ese era
  el riesgo de 200 m con el que se abrió la tanda.
- **Un punto representativo no hereda la precisión de su polígono** (§6.6). La
  reserva «AGUA BLANCA» son 95 cuadrículas (~28 km²) y la concesión «LAS CRUCES»
  tiene cuatro piezas disjuntas: su centroide cae donde no hay concesión.
  Consecuencia dicha entera: **mientras la capa sea de puntos, `exacta` es
  inalcanzable por construcción**. Se llega ascendiendo a polígono, no
  reetiquetando el punto — y eso es F3.

Licencias comprobadas **antes** de extraer, como ordena `datos/LICENCIA-DATOS.md`:
IGN bajo licencia declarada compatible con CC BY 4.0; catastro minero bajo el
régimen de reutilización de la Ley 37/2007, con atribución y sin ShareAlike ni
NonCommercial.

---

## datos-v2026.08 — Minerales críticos: la primera colección

Primera release del atlas. Migra los registros de la demo de referencia al
formato canónico, **con una pasada de verificación documental que corrigió
bastante de lo que la demo daba por bueno**.

Tres documentos entran en `fuentes/`, y son los que sostienen todo lo demás:
la **Decisión (UE) 2025/840** de la Comisión (DOUE de 30.4.2025) con su anexo,
y dos volúmenes del **Panorama Minero del IGME** (Estroncio 2021 y Arcillas
especiales 2021).

### Añadido

- **`minerales-proyectos`** — 11 registros: los 7 proyectos españoles de la
  primera lista CRMA, 3 de producción singular y 1 en disputa.
- **`minerales-proyectos:escuzar`** — registro NUEVO. No existía en la demo.

### Corregido

- **`el-moto` · promotor** — hueco → **Abenojar Tungsten S.L.** El anexo del
  DOUE lo nombra sin ambigüedad. *Uno de los cuatro huecos de partida, cerrado
  con fuente primaria y no con una atribución plausible.*
- **`montevives` · municipio** — Escúzar → **Las Gabias y Alhendín**. El IGME
  sitúa Montevives ahí y describe Escúzar como un yacimiento **distinto**, a
  7 km, con otro titular (Solvay Minerales S.A.). La demo fundía los dos en una
  ficha; aquí se separan en dos registros.
- **`sepiolita-madrid` · nombre** — «Sepiolita de Vicálvaro» → **Sepiolita de
  Madrid**. El informe del IGME no menciona Vicálvaro en ningún momento: habla
  del Grupo Minero Victoria.
- **`p6-metals` · nombre y materias** — el proyecto se llama oficialmente
  **P6 Metals**; «La Parrilla» es la mina, y la demo los tenía al revés. El
  anexo reconoce **solo wolframio**: el estaño no figura.
- **`las-cruces` · materias y latitud** — el anexo reconoce **solo cobre** (no
  zinc, plomo ni plata). La latitud pasa de 37,7275 a **37,5275**: la de la demo
  caía unos 22 km al norte del municipio.
- **`circular` · materias** — el anexo reconoce cobre, níquel y PGM. **Oro,
  plata y estaño no figuran** y salen del registro.
- **`aguablanca`, `mina-doade`, `las-navas` · promotor** — confirmados con la
  razón social exacta del DOUE. La vinculación de Doade con el Grupo Samca, que
  circula en prensa, **no está en el anexo** y no se recoge.

### Degradado

- **Cinco registros bajan de `confirmado` a `parcial`** (`circular`,
  `mina-doade`, `p6-metals`, `montevives`, `sepiolita-madrid`). No es un cambio
  de datos: es la regla **R4** haciendo su trabajo la primera vez que toca datos
  reales. Los cinco declaran un hueco, y un hueco reconocido impide el
  confirmado global. `confirmado` queda reservado a lo que tiene primaria **y
  nada declarado como pendiente**.

### Huecos

Se publican como huecos, no como rellenos:

- **`matamulas` — el registro entero.** Único sin una sola fuente primaria, y
  por eso el único `no_verificado` global. Falta la resolución de la Junta que
  deniega la autorización, la sentencia del TSJ de Castilla-La Mancha y el
  estado del recurso de casación ante el Tribunal Supremo.
- **«España, único productor de estroncio de la UE»** y **«único productor de
  sepiolita a escala industrial en la UE»** — dos afirmaciones de cabecera de la
  demo que **la fuente primaria consultada NO sostiene**. El IGME habla de
  «posición prominente como país productor» y no compara con la Unión Europea.
  Quedan registradas como claves no verificadas, con su hueco.
- **«Mayor yacimiento del mundo»** (sepiolita) y **«25 % de la demanda europea»**
  (P6 Metals) — repetidas en prensa, sin fuente técnica localizada.
- **Las cifras de CirCular** (410 M€ · 350 empleos · 60.000 t/año) y **el
  calendario de Doade** (2027-2028, 500.000 t/año) — anuncios del promotor.
- **La geometría de los 11 registros.** `geo_precision: municipio` con
  `geo_fuente` que lo dice: aproximación al municipio, **sin fuente cartográfica
  primaria**. Sustituirla por el catastro minero o el Nomenclátor del IGN es
  trabajo pendiente, y hasta entonces ninguna coordenada sirve para medir.

### Contrato

Sube a **1.2.0**: campo opcional `nombre_oficial`. Salió de esta misma pasada —
el nombre oficial difiere del corriente en cinco de los siete proyectos
españoles, y sin él una ficha no se puede contrastar contra el DOUE.
