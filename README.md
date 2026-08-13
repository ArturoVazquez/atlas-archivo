# Atlas Estratégico de España — el archivo

La parte pública del **[Atlas Estratégico de España](https://atlas.eltercioviejo.com)**:
el archivo documental que sostiene cada dato, la doctrina que gobierna su
formato y las licencias que obligan. El atlas es una capa de inteligencia
geoespacial sobre los activos estratégicos de España: **minerales críticos**,
**energía**, **conectividad**, **transporte** y **el tablero de límites y
soberanía**.

No es un mapa bonito. Es una herramienta de lectura del territorio donde **cada
dato lleva fuente, fecha y estado de verificación** — y donde lo que no se sabe
aparece como hueco, no como relleno.

> El atlas registra hechos con fuente y marca lo que no sabe. Un anuncio de
> empresa o una noticia se registran con su origen, pero **solo una fuente
> primaria sostiene un dato confirmado** — y la validación automática lo
> comprueba en cada cambio.

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
  PROCEDENCIA.md     de dónde sale cada capa, qué obliga su licencia y qué saber
datos/
  LICENCIA-DATOS.md  CC BY 4.0, y qué obliga (licencias contagiosas)
```

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

> Vázquez Paumard, A. D. — *Atlas Estratégico de España*, release
> `datos-v2026.08.42`. https://doi.org/10.5281/zenodo.21918595 —
> https://atlas.eltercioviejo.com — datos CC BY 4.0.

La forma legible por máquina está en [`CITATION.cff`](CITATION.cff) (de ahí sale
el botón «Cite this repository» de GitHub). Cada registro del atlas tiene además
**página y dirección propias** en el visor —`/ficha/<capa>/<registro>/`, con su
cita ya compuesta—, que es la manera de citar un dato concreto sin citar el
atlas entero.

**Y hay que decir de qué responde ese DOI**, porque un DOI promete permanencia:
lo que Zenodo archiva de cada edición es este repositorio —el **aparato de
citación**: fuentes archivadas, procedencia, contrato y changelog—, no las capas
de datos, que se sirven desde el visor y se descargan capa a capa.
