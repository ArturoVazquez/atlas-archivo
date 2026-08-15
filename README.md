# Atlas Estratégico de España — el archivo

La parte pública del **[Atlas Estratégico de España](https://atlas.eltercioviejo.com)**:
el archivo documental que sostiene cada dato, la doctrina que gobierna su
formato y las licencias que obligan. El atlas es una capa de inteligencia
geoespacial sobre los activos estratégicos de España: **minerales críticos**,
**energía**, **conectividad**, **transporte**, **ciencia** y **el tablero de
límites y soberanía**.

No es un mapa bonito. Es una herramienta de lectura del territorio donde **cada
dato lleva fuente, fecha y estado de verificación** — y donde lo que no se sabe
aparece como hueco, no como relleno.

> El atlas registra hechos con fuente y marca lo que no sabe. Un anuncio de
> empresa o una noticia se registran con su origen, pero **solo una fuente
> primaria sostiene un dato confirmado** — y la validación automática lo
> comprueba en cada cambio.

## Por dónde empezar

Este repositorio es el aparato de citación. El atlas se lee en el visor:

- **[La biblioteca](https://atlas.eltercioviejo.com/biblioteca/)** — el índice de
  todo lo publicado: cada capa con cuántos registros tiene, qué verifica y qué
  declara no saber, más los partes y el catálogo de documentos archivados.
- **El método** ([es](https://atlas.eltercioviejo.com/metodo.html) ·
  [en](https://atlas.eltercioviejo.com/method.html)) — cómo se lee un dato, cómo
  se corrige y **qué no puede garantizar**.
- **Los partes**, las dos capas que se mueven solas:
  [el agua embalsada](https://atlas.eltercioviejo.com/agua/), semanal, con serie
  desde 1988, y [las entradas de gas](https://atlas.eltercioviejo.com/gas/),
  mensual, desde 2004.
- **Las releases** se anuncian por
  [RSS](https://atlas.eltercioviejo.com/feed.xml) y se cuentan una a una en
  [`CHANGELOG-DATOS.md`](CHANGELOG-DATOS.md).

## Cómo se lee un dato

Cada registro declara su estado de verificación, y también lo hacen sus campos
sensibles por separado. En el mapa, la marca lo dice sin leer la ficha:

| Estado | Qué significa | Marca |
|---|---|---|
| **Confirmado** | Sostenido por al menos una fuente **primaria** archivada | Relleno sólido |
| **Parcialmente verificado** | Hay fuente, pero no primaria, o cubre solo parte del registro | Relleno tenue, borde discontinuo |
| **No verificado** | Registrado con su origen (prensa, anuncio corporativo), sin ascender a hecho | Hueco, borde discontinuo |

Las fuentes se clasifican por tipo: `primaria` (BOE, DOUE, decisiones,
resoluciones, registros, estadística oficial), `prensa`, `corporativa` y `hueco`
—la fuente que falta y se declara como tal—. **Solo `primaria` puede sostener un
confirmado.** Cuando una fuente se cita, se archiva en `fuentes/`: las URLs se
pudren; el archivo no.

## Qué hay aquí

```
CONTRATO-DATOS.md    el formato de los datos y la doctrina. Manda sobre el código
CHANGELOG-DATOS.md   una entrada por release de datos: qué cambió, y qué sigue sin saberse
CITATION.cff         cómo citar el atlas y sus datos
fuentes/             archivo documental de todo lo citado — cada ficha del visor enlaza aquí su copia
  README.md          cómo se nombra y se archiva un documento, y por qué nada se sustituye
  PROCEDENCIA.md     de dónde sale cada capa, qué obliga su licencia y qué saber
datos/
  LICENCIA-DATOS.md  CC BY 4.0, y qué obliga (licencias contagiosas)
```

**No hay un `LICENSE` en la raíz, y es deliberado:** este repositorio no tiene
una sola licencia. Lo que publica el atlas es CC BY 4.0
([`datos/LICENCIA-DATOS.md`](datos/LICENCIA-DATOS.md)); los documentos de
`fuentes/` pertenecen cada uno a su emisor y **no cambian de licencia por estar
archivados aquí**. Un `LICENSE` único diría que todo es CC BY 4.0, y eso sería
falso.

Los datos son **curación humana con fuente primaria**: el atlas nunca genera
datos, y nunca archiva una fuente por su cuenta.

## El taller

El visor, el pipeline de validación y la construcción del atlas se desarrollan
en privado. Este repositorio es su cara documental: lo que cualquier lector
necesita para comprobar de dónde sale un dato, con qué doctrina se publicó y
qué puede hacer con él.

El atlas es obra de una sola persona: lo cura y lo mantiene **Arturo David
Vázquez Paumard**.

## Cómo citar

El atlas tiene DOI: **[10.5281/zenodo.21918595](https://doi.org/10.5281/zenodo.21918595)**.
Es el «de concepto» — resuelve siempre a la última edición depositada—, y cada
release recibe además el suyo propio.

**Para citar el atlas** —cualquier edición, que es lo normal:

> Vázquez Paumard, A. D. *Atlas Estratégico de España*.
> https://doi.org/10.5281/zenodo.21918595 — datos CC BY 4.0.

**Para citar una edición concreta**, cuando importa qué decían los datos ese día,
se añade la release y su DOI propio. Deliberadamente no se copian aquí: **la
edición vigente y su DOI viven en [`CITATION.cff`](CITATION.cff)**, que se
actualiza en cada release. Un número repetido en un README es un número que
envejece sin que nadie lo mire.

La forma legible por máquina está en [`CITATION.cff`](CITATION.cff) (de ahí sale
el botón «Cite this repository» de GitHub). Cada registro del atlas tiene además
**página y dirección propias** en el visor —`/ficha/<capa>/<registro>/`, con su
cita ya compuesta—, que es la manera de citar un dato concreto sin citar el
atlas entero.

**Y hay que decir de qué responde ese DOI**, porque un DOI promete permanencia:
lo que Zenodo archiva de cada edición es este repositorio —el **aparato de
citación**: fuentes archivadas, procedencia, contrato y changelog—, no las capas
de datos, que se sirven desde el visor y se descargan capa a capa.

## Si encuentras un error

Se agradece, y **las [issues](https://github.com/ArturoVazquez/atlas-archivo/issues)
están abiertas para eso**. Con dos cosas basta:

1. **El registro por su identificador** — `capa:registro`, por ejemplo
   `minerales-proyectos:aguablanca`. Cada ficha del visor lleva el suyo a la vista.
2. **La fuente que sostiene la corrección.** Es la única regla dura: una
   corrección sin fuente no se puede aplicar, porque el atlas entero está
   construido sobre que ningún dato entra sin ella.

No hay vía de *pull request* para los datos: viven en el taller privado y se
sirven ya construidos desde el visor. Lo que sí queda público es el resultado —
toda corrección aceptada se cuenta, con su evidencia y en su release, en
[`CHANGELOG-DATOS.md`](CHANGELOG-DATOS.md). **Nada se borra**: un registro que
deja de ser válido cambia de estado, y el cambio se explica.
