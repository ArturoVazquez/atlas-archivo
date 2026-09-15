# Licencia de los datos

Los datos de este directorio (`datos/`) se publican bajo
**[Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es)**.

Puedes copiarlos, redistribuirlos, transformarlos y construir sobre ellos, con
cualquier finalidad, **incluida la comercial**, siempre que cites la
procedencia.

**Atribución sugerida:**

> Atlas Estratégico de España — <https://atlas.eltercioviejo.com> — CC BY 4.0

Cada capa declara además su propia `licencia` y `atribucion` en
`datos/manifest.json`. Si alguna capa futura llevara una licencia
distinta a esta, mandaría la del manifiesto y se anotaría aquí.

> **La licencia de ENTRADA de cada capa —la de su emisor, y qué obliga— está en
> [`fuentes/PROCEDENCIA.md`](../fuentes/PROCEDENCIA.md).** Este documento cubre
> la salida: bajo qué condiciones se reutiliza lo que publica el atlas. Son dos
> preguntas distintas y conviene no confundirlas: que una fuente sea compatible
> con CC BY 4.0 **no significa que baste con citarla de cualquier manera**. La
> del IGN, por ejemplo, exige una fórmula literal para la obra derivada.

---

## Por qué CC BY 4.0 y no algo más restrictivo

El argumento entero del atlas es la **citabilidad**. Un dato que no se puede
reutilizar libremente no sirve a un periodista con un cierre a las ocho ni a un
investigador que necesita adjuntarlo a un paper. La licencia más permisiva
compatible con exigir atribución es la que hace el trabajo útil.

## Lo que esa elección obliga: nada de datos con licencia contagiosa

CC BY 4.0 **no es compatible** con incorporar fuentes bajo licencias
*ShareAlike* o *NonCommercial*. Eso no es una limitación teórica: afecta a una
capa concreta del plan.

**Cables submarinos.** El mapa de TeleGeography —la referencia obvia, con sus
rutas y puntos de aterrizaje en GeoJSON— está bajo **CC BY-NC-SA 3.0**. El
*NonCommercial* y el *ShareAlike* se contagiarían a todo lo derivado. Por eso la
capa de cables **no se deriva de ese mapa**: se reconstruye desde fuentes
primarias propias (permisos y autorizaciones de aterrizaje, resoluciones
administrativas, anuncios de operadores), que es exactamente lo que ya declaraba
la demo de referencia.

La regla general, para cualquier capa futura:

> Antes de incorporar un dataset externo se comprueba su licencia. Si no es
> compatible con CC BY 4.0, **no entra**: o se reconstruye el dato desde fuente
> primaria, o se cita como fuente sin copiar su geometría, o la capa espera.

## Las imágenes de los cotejos

Un cotejo de imagen (`datos/cotejos/`) publica lo que una persona vio al
comparar dos imágenes oficiales fechadas. El cotejo es dato del atlas y va bajo
CC BY 4.0. Las imágenes son copias archivadas en `fuentes/` y conservan la
licencia de su emisor, con su propia atribución bajo cada una.

Las ortofotos del PNOA son CC BY 4.0 y se atribuyen con la fórmula del IGN,
`Obra derivada de PNOA <año> CC-BY 4.0 scne.es`.

Las escenas de Sentinel-2 son datos del programa Copernicus. Su uso lo regula
el Reglamento Delegado (UE) 1159/2013, y la Comisión Europea lo resume en un
aviso legal archivado en `fuentes/copernicus/2026/`. Ese aviso no es una
licencia Creative Commons. Dice que el acceso es libre, completo y abierto, y
admite la reproducción, la distribución, la comunicación al público y la
adaptación de los datos, sin condición no comercial ni de compartir igual. A
cambio exige avisar del origen con el año. Cuando los datos se han modificado,
como en un recorte, la fórmula es `Contains modified Copernicus Sentinel data
<año>`. Por eso es compatible con CC BY 4.0, con una condición para quien
reutilice una de esas imágenes: conservar el aviso con su año.

Por la regla de arriba, tres clases de imagen no entran:

- Los mosaicos Sentinel-2 cloudless de EOX desde la edición de 2018, publicados
  bajo CC BY-NC-SA 4.0. Tampoco dicen de qué día es cada píxel.
- Las imágenes SPOT que sirve el IGN. Su metadato dice «© CNES (2005-2014),
  Distribution Spot Image S.A., Francia, todos derechos reservados», y no
  tienen fila en la tabla de atribuciones del Sistema Cartográfico Nacional.
- La imagen comercial, como la de Google, Maxar o Planet, y también la de
  Melilla que sirve la ortofoto de máxima actualidad del IGN, que es Pléiades
  Neo © Airbus DS. Ninguna tiene una licencia compatible leída y archivada, y
  sin eso no entra.

## Las fuentes citadas conservan su propia licencia

`fuentes/` guarda copias de documentos de terceros (boletines oficiales,
decisiones, estadísticas) archivadas al citarlas, para que la referencia
sobreviva a la muerte de la URL. Esas copias **no cambian de licencia** por estar
aquí: cada una pertenece a su emisor y se conserva a efectos de cita y
verificación. Lo que este documento licencia es la **compilación** —la
estructura, los campos, la geometría y la curación—, no los documentos ajenos.
