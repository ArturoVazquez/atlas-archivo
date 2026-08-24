# El archivo documental

Copia de cada documento citado por el atlas, guardada **en el momento de citarlo**
(contrato §2). Las URLs se pudren: un boletín se reorganiza, un ministerio migra
su web, una empresa retira una nota de prensa que ya no le conviene. Cuando eso
pasa, la cita sigue aquí.

> **Qué se llevó cada capa de aquí, y con qué condiciones: [`PROCEDENCIA.md`](PROCEDENCIA.md).**
> Este fichero explica cómo se archiva; aquel, de dónde sale cada capa, qué
> obliga su licencia y qué hay que saber antes de citarla. Ninguna capa publica
> sin su ficha — lo comprueba el CI (§7.9).

## Cómo se nombra un fichero

```
AAAA-MM-DD_emisor_titulo-corto.ext
```

- **`AAAA-MM-DD`** — la fecha de **captura**, no la del documento. La del
  documento vive en el campo `fecha` de la fuente. Son cosas distintas y
  confundirlas es perder la única señal de cuándo se miró.
- **`emisor`** — abreviatura corta y estable: `ce` (Comisión Europea), `boe`,
  `doue`, `miteco`, `ign`, `igme`, `cnmc`, `ree`, `csn`, `onu`…
- **`titulo-corto`** — kebab-case, lo justo para reconocerlo de un vistazo.

Ejemplo: `2026-07-22_ce_lista-crma-1.pdf`

## Dónde vive un fichero

```
fuentes/<organismo>/<año del documento>/<nombre>
fuentes/boe/1978/2026-08-20_boe_....pdf   ← «archivado en 2026, documento de 1978»
```

- **El organismo** es el mismo campo `emisor` del nombre — la carpeta no
  inventa nada.
- **El año es el del DOCUMENTO, no el de captura**: el que ya vive en el campo
  `fecha` de su cita, un juicio que el atlas ejerce y registra al citar. Una
  **instantánea de algo vivo** (captura WFS, catálogo, compilación) va por su
  año de captura — no es excepción sino coherencia: el «documento» de una
  instantánea es la foto de ese día. Un fichero **sin cita** toma el año
  reconocible de su descripción, y si no lo lleva, el de captura.
- **El nombre no cambia al mudarse.** La fecha de captura sigue siendo la
  primera palabra: para los documentos vivos es la identidad, y para los muertos
  no estorba. Una recaptura queda adyacente a su versión anterior, que es donde
  se aprecia la contradicción.
- **La regla de la serie** *(mismo espíritu que la regla de crecimiento de los
  dominios, D22)*: la TERCERA captura del mismo `(organismo, descripción)`
  convierte la clave en serie recurrente, y la serie gana carpeta propia —
  `fuentes/<organismo>/<descripción>/` — sin nivel de año hasta que engorde.
  Promoverla es mover dos ficheros y sus citas: un gesto, no una migración.
- **Por qué NO se organiza por capa ni por dominio**, medido el 2026-08-24:
  quince fuentes sostienen de dos a cuatro capas (una sostiene dos capas y un
  conjunto), treinta y dos no pertenecen a ninguna —licencias, negativos
  documentados, actos de expedientes vigilados—, y la taxonomía de dominios
  cambió esa misma mañana (D22). La ruta es identidad y se construye con
  propiedades estables; la vista por capa ya la dan las fichas y PROCEDENCIA,
  generadas del dato y nunca desfasadas.

## Reglas

- **Se archiva el documento, no la noticia sobre el documento.** Si una nota de
  prensa habla de una decisión, la fuente primaria es la decisión con su anexo.
  La nota, si se guarda, se guarda aparte y como `tipo: prensa`.
- **PDF cuando se pueda.** Si solo hay HTML, se imprime a PDF con la URL y la
  fecha visibles en el pie. Una captura de pantalla no es un archivo: no se puede
  buscar dentro ni comprobar si se manipuló.
- **Nada se sustituye.** Si un documento se actualiza, entra el nuevo con su
  fecha de captura y el viejo se queda. La contradicción entre dos versiones es
  un dato, y a veces el más interesante.
- **Este directorio jamás se ignora.** Es la cita.
- **Y jamás se normaliza.** `.gitattributes` saca a `fuentes/` entero de la
  regla de finales de línea del repositorio (`fuentes/** -text`). Se descubrió
  tarde: durante 34 documentos, un servidor que servía CRLF y un git que lo
  reescribía a LF guardaban un fichero **que ya no era el que se descargó** —el
  metadato de Puertos del Estado se servía con 39.516 bytes y el repositorio
  guardaba 38.775—. Se lee igual y no cuadra byte a byte, que aquí es la
  diferencia entre una copia y la cita.

## Lo que NO cambia de licencia por estar aquí

Cada documento pertenece a su emisor y se conserva a efectos de cita y
verificación. La licencia CC BY 4.0 del atlas cubre la **compilación** —la
estructura, los campos, la geometría y la curación—, no los documentos ajenos.
Ver `datos/LICENCIA-DATOS.md`.
