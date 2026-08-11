# Licencia de los datos

Los datos de este directorio (`datos/`) se publican bajo
**[Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/deed.es)**.

Puedes copiarlos, redistribuirlos, transformarlos y construir sobre ellos, con
cualquier finalidad, **incluida la comercial**, siempre que cites la
procedencia.

**Atribución sugerida:**

> Atlas Estratégico de España — <https://atlas.eltercioviejo.com> — CC BY 4.0

Cada capa declara además su propia `licencia` y `atribucion` en
`datos/manifest.json` (contrato §3). Si alguna capa futura llevara una licencia
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

## Las fuentes citadas conservan su propia licencia

`fuentes/` guarda copias de documentos de terceros (boletines oficiales,
decisiones, estadísticas) archivadas al citarlas, para que la referencia
sobreviva a la muerte de la URL. Esas copias **no cambian de licencia** por estar
aquí: cada una pertenece a su emisor y se conserva a efectos de cita y
verificación. Lo que este documento licencia es la **compilación** —la
estructura, los campos, la geometría y la curación—, no los documentos ajenos.
