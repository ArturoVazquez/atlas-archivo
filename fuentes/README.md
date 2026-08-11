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
