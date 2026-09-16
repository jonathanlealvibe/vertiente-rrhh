var e=`# Auditoría de Coherencia Normativa — Corpus documental de VERTIENTE

| Campo | Contenido |
|---|---|
| **Código de documento** | VRT-AUD-COH-01 |
| **Objeto** | Auditoría adversarial de coherencia interna de \`docs/01\` a \`docs/10\` entre sí y contra \`datos/parametros-legales.json\` |
| **Fecha de la auditoría** | 2026-09-16 (fecha "hoy" de la simulación) |
| **Alcance** | 10 documentos normativos · ~214.000 palabras · 112 parámetros legales · 8 tablas de parámetros |
| **Fuentes de verdad usadas** | \`datos/parametros-legales.json\` v1.0.0 · \`datos/cargos.json\` · \`datos/sedes.json\` · \`CONVENCIONES.md\` |
| **Método** | Extracción automática de claves de parámetro y de estados de verificación; recálculo con Node de **todos** los ejemplos numéricos resueltos; cruce manual de plazos, roles de escalamiento y escalas de sanción entre documentos |
| **Respaldo previo a las correcciones** | Copia íntegra de \`docs/\` en el directorio de trabajo temporal de la sesión |

---

## 1. Resumen ejecutivo

Se revisaron **122 afirmaciones numéricas o normativas verificables** y **24 hallazgos** de coherencia.
El corpus está, en general, **muy por encima del estándar**: la disciplina de "no inventar cifras" se
cumple casi sin excepciones —**ningún documento cita un número de artículo de una ley externa**, y las
cifras no parametrizadas se declaran como criterio interno con su pendiente de verificación—. La
aritmética del manual de nómina es sólida: de **90 operaciones recalculadas en \`docs/05\`, 89 son
exactas**.

Dicho eso, la auditoría encontró **defectos graves de tres tipos**:

1. **Un error de cálculo que subpaga trabajo real.** El ejemplo 6 de \`docs/05\` liquidaba al factor 1,50
   una hora que cae en la franja nocturna y debe pagarse al factor 2,00, contradiciendo la tabla de la
   sección 4.1 del propio manual. VERA lo habría repetido.
2. **Tres pasajes que pueden hacer que un colaborador crea que perdió un derecho que no perdió**:
   la "pérdida" de las vacaciones acumuladas (afirmada en \`docs/05\` y \`docs/08\`, y usada literalmente
   por \`docs/09\` como *ejemplo de premisa falsa que VERA debe corregir*), la frase "sin aprobación
   registrada, la hora no se liquida" (\`docs/05\`), y la descripción de la indemnización por despido
   como "1 mes por año **desde el cuarto**" (\`docs/05\` y \`docs/06\`), que leída al pie de la letra
   convierte 6 meses de indemnización en 3.
3. **Contradicciones de proceso entre documentos que el mismo consultor virtual cita como fuente**:
   dos escalas de sanción incompatibles, dos plazos de prescripción disciplinaria, cuatro respuestas
   distintas a "¿a quién denuncio un acoso?" y dos casos de negocio del producto con cifras que
   difieren 2,8 veces.

**Se intervinieron 19 de los 24 hallazgos** con ediciones puntuales: **15 quedaron plenamente corregidos**
y **4 corregidos en parte** (se eliminó la contradicción operativa o se declaró la divergencia, pero el
fondo exige una decisión que no puede tomar un auditor). **Quedan 5 hallazgos sin intervenir**: uno de
severidad alta, uno de media y tres de baja.

### Distribución

| Severidad | Total | Corregidos | Corregidos en parte | Sin intervenir |
|---|---|---|---|---|
| **Alta** | 10 | 6 (H-01 a H-05, H-08) | 3 (H-07, H-09, H-10) | 1 (H-06) |
| **Media** | 10 | 8 | 1 (H-12) | 1 (H-20) |
| **Baja** | 4 | 1 (H-21) | — | 3 (H-22, H-23, H-24) |
| **TOTAL** | **24** | **15** | **4** | **5** |

| Tipo | Total |
|---|---|
| Contradicción entre documentos o dentro de uno | 14 |
| Riesgo de inducción a error | 5 |
| Aritmética incorrecta | 2 |
| Cifra no parametrizada o mal parametrizada | 2 |
| Cita dudosa / parámetro citado para lo que no dice | 1 |

---

## 2. Tabla de hallazgos

| # | Sev. | Tipo | Documento(s) | Problema en una línea | Corregido |
|---|---|---|---|---|---|
| H-01 | **Alta** | Aritmética / inducción a error | \`docs/05\` §4.4 ej. 6 | Dos horas tras el turno nocturno liquidadas ambas al factor 1,50; la de 05h00–06h00 es suplementaria **nocturna**, factor 2,00 | **Sí** |
| H-02 | **Alta** | Contradicción / inducción a error | \`docs/05\` §19 · \`docs/06\` §14.3 | Indemnización por despido descrita como "1 mes por año **desde el cuarto**"; el parámetro y la tabla dicen "por **cada** año de servicio" | **Sí** |
| H-03 | **Alta** | Inducción a error | \`docs/05\` §8.4 · \`docs/08\` §18 | "El derecho de los años más antiguos **se pierde**" — \`docs/09\` §5.1.4 usa esa misma frase como **premisa falsa** que VERA debe corregir | **Sí** |
| H-04 | **Alta** | Contradicción interna / inducción a error | \`docs/05\` §4.3 | "Sin aprobación registrada, la hora no se liquida" contradice el cierre de la misma sección | **Sí** |
| H-05 | **Alta** | Contradicción interna | \`docs/02\` Art. 40 | "Ninguna hora … **se paga** sin autorización previa" contradice la regla de protección del mismo artículo | **Sí** |
| H-06 | **Alta** | Contradicción de proceso | \`docs/02\` Art. 106/108 · \`docs/08\` §8.1/8.4 | Dos escalas de sanción incompatibles: una con multa y sin suspensión, otra con suspensión y sin multa | No |
| H-07 | **Alta** | Contradicción de proceso | \`docs/02\` Art. 109 · \`docs/08\` §10.1 | Plazos del procedimiento disciplinario distintos (descargos 3 días vs 5+3) | **Parcial** |
| H-08 | **Alta** | Contradicción de proceso | \`docs/02\` Art. 112 · \`docs/08\` §12.1 | Dos plazos de prescripción de la falta: 30/60/90 días calendario vs 15/30/60 días hábiles | **Sí** |
| H-09 | **Alta** | Contradicción de proceso | \`docs/01\`, \`02\`, \`04\`, \`05\`, \`07\`, \`08\`, \`09\`, \`10\` | Cuatro órganos distintos para denuncias de acoso; el Manual Organizacional no reconoce a dos de ellos | **Parcial** |
| H-10 | **Alta** | Contradicción de proceso | \`docs/01\` §Línea Ética · \`docs/02\` Art. 97 · \`docs/04\`/\`07\`/\`09\` · \`docs/08\` §14.1 | Cuatro plazos de acuse/contacto para acoso: 2 días hábiles, 24 h hábiles, 24 h, 48 h | **Parcial** |
| H-11 | Media | Contradicción | \`docs/05\` §13.2 · \`docs/06\` §14.3 | Fondos de reserva acumulados: uno dice que **no** salen en el acta, el otro que **sí** | **Sí** |
| H-12 | Media | Contradicción | \`docs/09\` §1.5 · \`docs/10\` §12.5–12.6 | Caso de negocio del producto: 1.485 consultas/mes y 70,2% vs 4.140/mes y 88,9% | **Parcial** |
| H-13 | Media | Aritmética | \`docs/09\` §1.5 | "≈0,94 FTE" — con el divisor de la propia §11.4 son **0,90** | **Sí** |
| H-14 | Media | Cifra no contrastada | \`docs/10\` §12.5 | "61 % de la plantilla (734 colaboradores)"; \`datos/cargos.json\` da **1.025 (85 %)** | **Sí** |
| H-15 | Media | Contradicción | \`docs/02\` Art. 111 · \`docs/08\` §12.2 | Caducidad del antecedente por falta grave: 12 meses vs 18 meses | **Sí** |
| H-16 | Media | Contradicción | \`docs/05\` §3.1/§11.2 · \`docs/02\` Art. 108 · \`docs/08\` §8.4 | La multa figura como descuento posible del rol cuando la compañía la tiene suspendida | **Sí** |
| H-17 | Media | Cifra mal parametrizada | \`docs/03\` §pendientes, fila 8 | Atribuye a \`inclusion_discapacidad_umbral_trabajadores\` un "cupo de sustitutos" que no contiene | **Sí** |
| H-18 | Media | Contradicción interna | \`docs/07\` §13.4 y §22.2 | "Falta gravísima" en vocabulario disciplinario; el RIT solo tiene leve/grave/muy grave, y §13.4 la llamaba "grave" | **Sí** |
| H-19 | Media | Contradicción | \`docs/05\` §18 · \`docs/09\` §5.5 | Salud mental en crisis escalada a Gerencia de RR.HH. vs Servicio Médico Ocupacional (2 h, 24/7) | **Sí** |
| H-20 | Media | Contradicción | \`docs/01\` §Comité de Ética · \`docs/10\` §gobierno | Composición y periodicidad del Comité de Ética distintas | No |
| H-21 | Baja | Imprecisión | \`docs/09\` §1.5 fila 16 | "3,75% del total" — es 3,75% de la **nómina**, no del total de consultas | **Sí** |
| H-22 | Baja | Omisión | \`docs/05\` §11.2 | La "tabla de descuentos" se presenta como taxativa y omite dos descuentos que el propio manual crea | No |
| H-23 | Baja | Cita dudosa | \`docs/02\` Art. 16 | Atribuye a \`jornada_parcial_recargo\` un ámbito ("sábados, domingos y descanso obligatorio") que el parámetro no enuncia | No |
| H-24 | Baja | Contradicción | \`docs/02\` Art. 37 · \`docs/04\` §12.1 | Justificativo médico: "tres días laborables" vs "72 horas" | No |

---

## 3. Detalle de los hallazgos

### H-01 — ALTA · Una hora nocturna liquidada como diurna (\`docs/05\` §4.4, ejemplo 6)

**Texto original:**

> Si además de su turno nocturno Marlon se quedara dos horas más, de 05h00 a 07h00, esas dos horas serían
> **suplementarias diurnas** (factor 1,50, porque están entre 06h00 y 24h00 en la parte que corresponde) y
> se liquidarían por separado.

**Por qué es el defecto más grave de la auditoría.** La tabla de la sección 4.1 del **mismo manual**, y el
parámetro \`recargo_hora_suplementaria_nocturna\`, definen la hora suplementaria nocturna como la trabajada
**entre las 24h00 y las 06h00**, con factor 2,00. La hora de 05h00 a 06h00 cae íntegramente en ese rango.
El manual la pagaba al 1,50. El paréntesis ("en la parte que corresponde") reconoce el problema y no lo
resuelve: deja escrita una conclusión incorrecta.

**Efecto económico sobre el colaborador**, con los datos del propio ejemplo (Marlon, USD 500,00 de
remuneración fija, divisor 240):

| Hora | Como lo decía el manual | Como corresponde | Diferencia |
|---|---|---|---|
| 05h00–06h00 | 1 × 2,083333 × 1,50 = **3,13** | 1 × 2,083333 × 2,00 = **4,17** | +1,04 |
| 06h00–07h00 | 1 × 2,083333 × 1,50 = **3,13** | 1 × 2,083333 × 1,50 = **3,13** | 0,00 |
| **Total** | **6,26** | **7,30** | **+1,04 (17 %)** |

Sobre una hora aislada es un dólar; sobre el turno nocturno de la línea de FRUTAL, repetido mes a mes y
propagado por VERA a cada operario que pregunte, es un error sistemático de nómina en contra del
colaborador.

**Corrección aplicada.** Se reemplazó el párrafo por una tabla que separa las dos franjas, con el cálculo
resuelto de cada una (USD 4,17 + USD 3,13 = USD 7,30), una advertencia explícita de que **no** es correcto
liquidar ambas al 1,50, y la conservación de la regla válida (no se acumulan el 25 % nocturno y el recargo
suplementario sobre la misma hora).

---

### H-02 — ALTA · "1 mes por año desde el cuarto" (\`docs/05\` §19 · \`docs/06\` §14.3)

**Textos originales:**

- \`docs/05\` §19: \`\` \`despido_intempestivo_meses_por_anio\` \`\` | **1 mes por año desde el cuarto** | verificado
- \`docs/06\` §14.3: "Piso de 3 meses hasta 3 años de servicio; **desde el cuarto año, 1 mes por año**; tope de 25 meses"

**Por qué está mal.** El parámetro dice literalmente *"1 mes de remuneración por cada año de servicio"*, y la
tabla \`indemnizacion_despido\` resuelve un ejemplo que no admite dos lecturas: *"Chofer con 6 años … 6 años ×
1 mes × 620,00 = USD 3.720,00"*. La redacción "1 mes por año desde el cuarto" admite la lectura de que solo
se cuentan los años **posteriores al tercero**: con 6 años de servicio daría 3 meses en lugar de 6.

**Efecto:** en el caso del propio ejemplo de la tabla de parámetros, USD 1.860,00 menos para el
colaborador. Es exactamente el tipo de frase que VERA repetiría literalmente ante la pregunta "¿cuánto me
toca si me despiden?".

**Corrección aplicada.** En ambos documentos se reescribió el enunciado como "1 mes de remuneración por
**cada año de servicio**", explicitando el piso de 3 meses y el tope de 25, y en \`docs/06\` se añadió el
ejemplo desambiguador ("6 años = 6 meses, no 3").

---

### H-03 — ALTA · "Las vacaciones acumuladas se pierden" (\`docs/05\` §8.4 · \`docs/08\` §18)

Este es el hallazgo con mayor carga de **inducción a error** del corpus, porque el propio sistema
documental ya lo había identificado como falso y dos documentos lo siguen afirmando.

| Documento | Qué dice |
|---|---|
| \`docs/09\` §5.1.4 (Regla de la premisa falsa) | Lista *"ya que las vacaciones se pierden si no las tomo…"* como **ejemplo canónico de premisa falsa que VERA está obligada a corregir antes de responder** |
| \`docs/05\` §8.4 (original) | "Si no las toma, el derecho de los años más antiguos **se pierde**" |
| \`docs/08\` §18, fila 35 (original) | "Pasados los períodos acumulables el derecho de los años más antiguos **se pierde**" |
| \`docs/05\` §13.2 | Vacaciones no gozadas: se pagan **"Siempre"** en el acta de finiquito |
| \`docs/06\` §14.3 | Vacaciones no gozadas: **"Siempre"**, según kárdex, incluidos los adicionales por antigüedad |
| Nota de la tabla \`vacaciones_por_antiguedad\` | "El empleador puede negar hasta 15 días … y acumularlos, pero **nunca suprimir el derecho**" |

Es decir: el corpus afirma a la vez que el derecho se pierde y que se paga siempre. Un colaborador con tres
períodos acumulados que lea \`docs/05\` puede concluir razonablemente que no vale la pena reclamarlos.

**Corrección aplicada.** En ambos documentos se sustituyó la afirmación por la distinción correcta: lo que
se pierde al pasar el tope de acumulación es la posibilidad de **gozar juntos** los períodos más antiguos,
**no el derecho**, que se liquida en dinero al terminar la relación laboral. En \`docs/05\` se añadió además
la cita expresa de la nota de la tabla de parámetros y la frase "si alguien le dice que sus vacaciones
viejas ya se perdieron, le está informando mal".

---

### H-04 — ALTA · "Sin aprobación registrada, la hora no se liquida" (\`docs/05\` §4.3)

La sección 4.3 describía el procedimiento de autorización previa de sobretiempo y en su paso 2 decía
textualmente *"Sin aprobación registrada, la hora no se liquida"*. Siete líneas más abajo, la misma sección
dice *"Las horas trabajadas sin autorización previa **no se pierden**: se liquidan igual si el control de
asistencia demuestra que se trabajaron"*.

Las dos frases no pueden ser ciertas a la vez. La primera es la que un supervisor citaría para no pagar, y
la que aparece en una tabla numerada de procedimiento —el formato que un sistema de recuperación tiende a
extraer como respuesta corta.

**Corrección aplicada.** El paso 2 ahora dice que la aprobación registrada es la vía **normal** de
liquidación y que su ausencia **nunca extingue el derecho al pago** de una hora efectivamente trabajada,
con remisión al cierre de la sección y al Art. 40 del Reglamento Interno.

---

### H-05 — ALTA · El encabezado del Art. 40 del Reglamento Interno (\`docs/02\`)

Mismo defecto, en el documento de mayor jerarquía: *"Ninguna hora suplementaria ni extraordinaria se
trabaja **ni se paga** sin autorización previa, expresa y por escrito"*, seguido en el mismo artículo de la
"Regla de protección del colaborador" que ordena pagarlas igual.

**Corrección aplicada.** El encabezado ahora dice "no se **solicita ni se trabaja**" y añade que la
autorización es un requisito que obliga a la jefatura y que su ausencia nunca es causa para dejar de pagar
una hora efectivamente trabajada.

---

### H-06 — ALTA · Dos escalas de sanción incompatibles — **NO CORREGIDO**

| | \`docs/02\` Art. 106 (Reglamento Interno) | \`docs/08\` §8.1 (Política de Disciplina) |
|---|---|---|
| Niveles | 4 | 6 (escalones 0 a 5) |
| Orientación preventiva | — | Escalón 0 |
| Llamado verbal | Nivel 1 | Escalón 1 |
| Amonestación escrita | Nivel 2 | Escalón 2 |
| Amonestación con compromiso | — | Escalón 3 |
| **Amonestación con multa** | **Nivel 3** | **Prohibida** (§8.4: "VERTIENTE no aplica multas ni descuentos como sanción disciplinaria") |
| **Suspensión disciplinaria** | **No existe** | **Escalón 4** |
| Visto bueno | Nivel 4 | Escalón 5 |

El problema no es solo la divergencia: es que **\`docs/08\` §8.3 se invalida a sí mismo**. Dice que la
suspensión "solo puede aplicarse si está **expresamente tipificada en el Reglamento Interno aprobado**, con
su duración máxima". El Reglamento Interno no la tipifica, y su Art. 100 prohíbe expresamente "imponer
sanciones no previstas en este Reglamento". El escalón 4 de \`docs/08\` es, hoy, inaplicable por su propia
regla — y aun así \`docs/08\` §8.6 y §9.1 lo asignan como consecuencia normal de una falta grave con
antecedente.

**Por qué no se corrigió.** Resolverlo exige decidir cuál es la escala vigente de la compañía y, si se
adopta la suspensión, reformar el Reglamento Interno (que es el instrumento sujeto a aprobación de la
autoridad). Eso es una decisión de gobierno, no una corrección de redacción.

**Corrección sugerida.** Unificar en una sola escala, declarada en \`docs/02\` como el instrumento tipificante
y reproducida en \`docs/08\`; mientras el Reglamento Interno no tipifique la suspensión, \`docs/08\` debe decir
que el escalón 4 **está suspendido** y que la falta grave reiterada se sanciona en el escalón 3.

---

### H-07 — ALTA · Plazos del procedimiento disciplinario — **CORREGIDO EN PARTE**

| Etapa | \`docs/02\` Art. 109 (original) | \`docs/08\` §10.1 |
|---|---|---|
| Requerimiento / notificación de cargos | Dentro de **10 días laborables** de conocido el hecho | Cadena de pasos 1–4: 2 + 5 (+5) + 2 + 3 = **12 a 17 días hábiles** |
| **Descargo del colaborador** | **3 días laborables**, prorrogables a 5 con solicitud **motivada** | **5 días hábiles**, prorrogables **3 más** sin necesidad de justificar |
| Suspensión del plazo por licencia/vacaciones | No prevista | Prevista |
| Audiencia | Dentro de 3 días laborables del descargo | Dentro de 3 días hábiles del **vencimiento** del plazo |
| Valoración / resolución | 5 + 5 días laborables | 5 + 5 días hábiles (más 3 de revisión legal) |
| Impugnación | "Reconsideración": 3 días para pedir, 5 para resolver | "Apelación" escalonada por escalón: 3–5 días para apelar, 5–10 para resolver |

El plazo de descargo es el que importa: es el plazo del **derecho a la defensa**. Un colaborador de ruta al
que se notifica un cargo tiene, según qué documento lea, 3 días o 8.

**Corrección aplicada.** Se armonizó la etapa 2 del Art. 109 al plazo de \`docs/08\` —5 días hábiles,
prorrogables 3 más a simple pedido, con suspensión del plazo durante certificado médico, vacaciones o
licencia—, por ser el **más favorable al colaborador** conforme al Art. 6 del propio Reglamento y al
principio 5 de \`CONVENCIONES.md\`.

**Queda abierto:** la divergencia entre "reconsideración" (\`docs/02\`) y "apelación escalonada" (\`docs/08\`),
y el desfase entre el plazo único de 10 días laborables para requerir el descargo y la cadena de pasos 1–4
de \`docs/08\`. Ver riesgos residuales.

---

### H-08 — ALTA · Dos plazos de prescripción de la falta disciplinaria — CORREGIDO

| Nivel | \`docs/02\` Art. 112 (original) | \`docs/08\` §12.1 |
|---|---|---|
| Leve | 30 días **calendario** | 15 días **hábiles** (≈21 calendario) + tope de 3 meses desde la ocurrencia |
| Grave | 60 días calendario | 30 días hábiles (≈42 calendario) + tope de 6 meses |
| Muy grave | 90 días calendario | 60 días hábiles (≈84 calendario) + tope de 12 meses |

Ambos se declaran "plazos internos". Que existan dos tablas distintas del mismo plazo interno es un defecto
en sí mismo: la prescripción es la defensa del colaborador frente a una imputación tardía, y él no puede
saber cuál rige.

**Corrección aplicada.** Se reemplazó la tabla del Art. 112 por la de \`docs/08\` §12.1 —que es la más
favorable al colaborador en los tres niveles— incluyendo la columna de plazo máximo desde la ocurrencia y
la regla de descubrimiento diferido, con remisión expresa a \`docs/08\`. Se conservó intacta la salvaguarda
final del artículo (estos plazos no alteran los del trámite de visto bueno).

---

### H-09 — ALTA · Cuatro órganos distintos para una denuncia de acoso — **CORREGIDO EN PARTE**

| Documento | A quién se denuncia un acoso |
|---|---|
| \`docs/01\` Código de Ética | Línea Ética VERTIENTE → **Comité de Ética** |
| \`docs/02\` Art. 96–97 | **Comité de Convivencia Laboral** (o Jefatura de Relaciones Laborales) |
| \`docs/04\` §y \`docs/07\` §22 | Línea Ética VERTIENTE → **Comité de Ética** |
| \`docs/05\` §18 (original) | **Gerencia de Recursos Humanos y Legal y Cumplimiento** |
| \`docs/08\` §14.1 | **Comité de Convivencia, Ética y Prevención del Acoso** |
| \`docs/09\` §5.5 y §10.2 | **Comité de Ética** |
| \`docs/10\` (Manual Organizacional) | Lista el **Comité de Ética** en el cuadro de gobierno. **No menciona ningún Comité de Convivencia** |

El Manual Organizacional es la fuente del organigrama y **no reconoce la existencia** del "Comité de
Convivencia Laboral" (\`docs/02\`) ni del "Comité de Convivencia, Ética y Prevención del Acoso" (\`docs/08\`).
Dos documentos normativos mandan a una víctima de acoso a un órgano que, según el manual de la
organización, no existe. Además \`docs/08\` §14.1 define para ese órgano una composición mixta con
representante de los trabajadores y profesional de bienestar que **no coincide** con la del Comité de Ética
de \`docs/01\` ni con la de \`docs/10\`.

**Corrección aplicada.** Se corrigió \`docs/05\` §18, que era el caso más claro y más divergente: su tabla de
escalamiento se reemplazó por una reproducción de la matriz vinculante de \`docs/09\` §5.5, con la nota de
que ante cualquier diferencia manda aquella.

**No corregido:** la unificación del órgano en \`docs/02\` y \`docs/08\`. Requiere decidir si existe un solo
Comité de Ética con composición ampliada para acoso o dos órganos distintos, y luego reflejarlo en el
Manual Organizacional. Es una decisión de gobierno.

---

### H-10 — ALTA · Cuatro plazos comprometidos para el acuse de una denuncia — **CORREGIDO EN PARTE**

| Documento | Plazo comprometido |
|---|---|
| \`docs/01\` (Línea Ética, cualquier reporte) | Acuse en **2 días hábiles** |
| \`docs/02\` Art. 97 (acoso) | Acuse en **24 horas hábiles**; medidas de protección en 48 horas hábiles |
| \`docs/04\` y \`docs/07\` (acoso) | **48 horas** para acuse |
| \`docs/08\` §14.1 (guardarraíl del consultor virtual) | Contacto comprometido en **24 horas hábiles**; medidas de protección el **mismo día** |
| \`docs/09\` §5.5 y §10.2 (matriz de VERA) | Acuse inmediato de VERA; **contacto humano en 48 horas** |

El conflicto operativo concreto está entre \`docs/08\` (24 horas hábiles) y \`docs/09\` (48 horas), porque
ambos describen **el mismo acto**: lo que el consultor virtual promete a quien denuncia. Prometer 24 y
cumplir 48 es peor para la víctima que prometer 48.

**Corrección aplicada.** Se armonizó \`docs/08\` §14.1 a **48 horas**, con cita explícita a \`docs/09\` §5.5
como fuente, y se conservó el "acuse empático inmediato".

**No corregido:** los plazos de \`docs/01\` (2 días hábiles) y \`docs/02\` Art. 97 (24 horas hábiles).
Ver riesgos residuales: si la compañía prefiere comprometerse a 24 horas, lo correcto es apretar \`docs/04\`,
\`docs/07\` y \`docs/09\`, no relajar los demás.

---

### H-11 — MEDIA · Fondos de reserva acumulados en el acta de finiquito — CORREGIDO

- \`docs/05\` §13.2 y §7.3: si el colaborador eligió **acumulado**, sus fondos de reserva **no aparecen en el
  acta de finiquito**, porque están en su cuenta individual del IESS. \`docs/05\` lo llama "una de las
  confusiones más dolorosas en las salidas".
- \`docs/06\` §14.3 (original): "Fondos de reserva pendientes | **Si no se pagaron mensualizados** y hay más
  de un año de servicio".

La redacción de \`docs/06\` dice justamente lo contrario: que lo acumulado sí se liquida en el acta.

**Corrección aplicada.** \`docs/06\` §14.3 ahora reproduce la regla de \`docs/05\`: solo si estaban
mensualizados y quedó algún mes sin acreditar; si estaban acumulados, se cobran en el IESS.

---

### H-12 — MEDIA · Dos casos de negocio del consultor virtual — **CORREGIDO EN PARTE**

| | \`docs/09\` §1.5 | \`docs/10\` §12.5–12.6 |
|---|---|---|
| Consultas mensuales a RR.HH. | **1.485** | **4.140** |
| Consultas/año | ≈17.800 | ≈49.700 |
| Atendible por el consultor virtual | **70,2 %** (techo estructural) | **88,9 %** |
| Origen de la cifra | Estimación de abajo hacia arriba, familia por familia, declarada como supuesto | Presentada como "la medición", por unidad de RR.HH. |

Las dos son internamente consistentes —se recalcularon todas sus sumas y porcentajes y **todos cuadran**—
pero difieren en un factor de 2,8 y se presentan ambas como el caso de negocio del mismo producto.
\`docs/10\` además la presenta como una medición, cuando nada en el corpus la respalda como tal.

**Corrección aplicada.** Se insertó en ambos documentos una **divergencia declarada** cruzada, que nombra
la otra cifra, explica la hipótesis más probable (que \`docs/10\` cuente trámites y correos como consulta),
prohíbe usar cualquiera de las dos en una presentación de caso de negocio antes de reconciliarlas con una
definición única de "consulta", y remite a la recalibración del mes 3. En \`docs/10\` se cambió además
"la medición clasificó" por "la clasificación —que es una estimación, no una medición auditada—".

**No corregido:** la reconciliación misma. Exige decidir qué cuenta como consulta.

---

### H-13 — MEDIA · Error de conversión a equivalentes de tiempo completo (\`docs/09\` §1.5) — CORREGIDO

El documento decía: *"156 horas-persona al mes, cerca de **0,94** equivalentes a tiempo completo sobre una
jornada de 40 horas semanales"*.

Su propia sección 11.4 usa el divisor correcto: \`122,5 ÷ 173,3 ≈ 0,71 FTE\`. Aplicando ese mismo divisor:

\`\`\`
156,3 h/mes ÷ 173,33 h/mes = 0,902 FTE
1.875,6 h/año ÷ 2.080 h/año = 0,902 FTE
\`\`\`

**Corrección aplicada.** "≈0,90 equivalentes a tiempo completo", con el divisor explicitado (173,3 h/mes) y
la remisión a §11.4 para que las dos secciones usen visiblemente el mismo método.

---

### H-14 — MEDIA · "734 colaboradores" no sale de los datos (\`docs/10\` §12.5) — CORREGIDO

El argumento central del caso de negocio decía: *"El **61 %** de la plantilla (los **734** colaboradores de
ruta, bodega y planta en turno) tiene una jornada que no coincide con el horario de atención"*.

\`datos/cargos.json\` es fuente de verdad y tiene el campo \`jornada\` por cargo. Agregado sobre los 128 cargos:

| Jornada | Personas |
|---|---|
| \`campo_fuerza_de_ventas\` (ruta) | 596 |
| \`madrugada_bodega\` | 238 |
| \`rotativa_planta\` | 191 |
| **Subtotal no administrativo** | **1.025 (85,4 %)** |
| \`diurna_administrativa\` | 175 |
| **TOTAL** | **1.200** |

734 no es derivable de ninguna combinación de los datos. El número real **refuerza** el argumento del
documento, no lo debilita.

**Corrección aplicada.** "85 % de la plantilla (los 1.025 colaboradores …)", con el desglose por tipo de
jornada y la cita de \`datos/cargos.json\`.

---

### H-15 — MEDIA · Caducidad del antecedente por falta grave — CORREGIDO

\`docs/02\` Art. 111 fija la reincidencia en falta grave en **12 meses** (y sus Art. 104 literal v y 105
literal r repiten 6 y 12 meses). \`docs/08\` §12.2 fijaba la caducidad del antecedente del escalón 3 —el que
sanciona precisamente las faltas graves— en **18 meses**. Seis meses extra de antecedente vigente, en
contra del colaborador.

Los demás escalones sí coinciden (1 → 6 meses ≙ leve; 2 → 12 ≙ grave de bajo impacto; 4 → 24 ≙ muy grave).

**Corrección aplicada.** Escalón 3 de \`docs/08\` §12.2 → **12 meses**, con la justificación escrita en la
propia celda.

---

### H-16 — MEDIA · La multa disciplinaria, suspendida en un documento y vigente en otro — CORREGIDO

- \`docs/02\` Art. 108: *"Mientras ese parámetro no exista y esté verificado, **VERTIENTE no impone multas**"*.
- \`docs/08\` §8.4: *"**VERTIENTE no aplica multas ni descuentos como sanción disciplinaria**"*, sin condición.
- \`docs/05\` §3.1 (anatomía del rol) y §11.2 (tabla de descuentos): la multa figuraba como un egreso posible
  del rol, "solo con proceso disciplinario concluido", con el tope "que fija el Reglamento Interno".

El manual de nómina es el documento que un colaborador consulta cuando ve un descuento que no entiende. Tal
como estaba, legitimaba una línea de rol que la compañía tiene prohibida.

**Corrección aplicada.** Ambas filas de \`docs/05\` ahora dicen que la multa está **suspendida**, citan el
Art. 108 y la §8.4, y añaden: *"Si a un colaborador le aparece una multa en el rol, es un error y debe
reversarse"*.

---

### H-17 — MEDIA · Parámetro citado para algo que no contiene (\`docs/03\`) — CORREGIDO

La tabla de pendientes de verificación atribuía a \`inclusion_discapacidad_umbral_trabajadores\` la fijación
de un "cupo máximo de sustitutos computables en la cuota de inclusión". Ese parámetro registra otra cosa
enteramente: el umbral de **25 trabajadores** a partir del cual nace la obligación de inclusión. No existe
ningún parámetro sobre sustitutos.

Es una violación de la sección 4 de \`CONVENCIONES.md\` en su forma más peligrosa: una clave real citada como
respaldo de una afirmación que no respalda, en un documento que el propio corpus usa para saber qué está
verificado y qué no.

**Corrección aplicada.** La fila 8 ahora dice *(parámetro inexistente)*, como las filas 16 y 17 de la misma
tabla, y explica qué registra realmente la clave que se citaba.

---

### H-18 — MEDIA · "Falta gravísima" (\`docs/07\`) — CORREGIDO

\`docs/07\` §22.2 define una escala **de seguridad** propia —leve / grave / **gravísima**— y §22.1 aclara
correctamente que este Reglamento "clasifica la conducta" mientras el Reglamento Interno "tipifica la falta".
Pero fuera de esa sección el documento usaba la palabra "falta gravísima" —vocabulario disciplinario— en
cuatro lugares, incluidas dos preguntas frecuentes dirigidas a colaboradores operativos. El régimen
disciplinario de \`docs/02\` Art. 102 y de \`docs/08\` §7 solo conoce **leve, grave y muy grave**: un colaborador
al que se le dice que cometió una "falta gravísima" no puede encontrar esa categoría ni su sanción en
ninguna parte, y el Art. 101 literal a) del Reglamento Interno exige tipicidad estricta.

Había además una inconsistencia interna: la sección 13.4 calificaba de "**falta grave**" operar un
montacargas sin licencia, mientras §22.2 la lista como **gravísima**.

**Corrección aplicada.** Las cuatro ocurrencias ahora dicen "incumplimiento **gravísimo** en la clasificación
de seguridad de la sección 22.2", y en los dos pasajes operativos se añadió la tipificación disciplinaria
real del Reglamento Interno (Art. 104 literal s para el montacargas; Art. 105 literal l para la anulación de
un enclavamiento), con la aclaración de que la sanción la determina el procedimiento del RIT con descargo
previo.

---

### H-19 — MEDIA · Roles de escalamiento divergentes (\`docs/05\` §18 vs \`docs/09\` §5.5) — CORREGIDO

Además del acoso (H-09), la tabla de \`docs/05\` §18 divergía de la matriz vinculante de VERA en otros dos
puntos, ambos sensibles:

| Situación | \`docs/05\` §18 (original) | \`docs/09\` §5.5 |
|---|---|---|
| **Salud mental en crisis** | Gerencia de Recursos Humanos, "con activación del protocolo de apoyo" | **Servicio Médico Ocupacional**, con Trabajo Social; **2 horas, 24/7, sin esperar día hábil** |
| Despido, visto bueno, terminación individual | Legal y Cumplimiento | Jefatura de Administración de Personal, con copia a Legal; 2 días hábiles, o 24 h si hay protección reforzada |

En una crisis de salud mental, la diferencia entre "Gerencia de RR.HH." y "Servicio Médico Ocupacional con
guardia 24/7 y contacto en 2 horas" no es de forma.

**Corrección aplicada.** La tabla de \`docs/05\` §18 se reemplazó por la reproducción de la matriz de
\`docs/09\` §5.5, con rol receptor primario, copia y **plazo comprometido de contacto humano** en cada fila,
y una nota de que ante cualquier diferencia manda la matriz de \`docs/09\`.

---

### H-20 — MEDIA · Composición del Comité de Ética — **NO CORREGIDO**

| | \`docs/01\` (Código de Ética) | \`docs/10\` (Manual Organizacional) |
|---|---|---|
| Composición | Gerencia de RR.HH. · Gerencia de Legal y Cumplimiento · **Jefatura de Control Interno y Auditoría** · un cuarto miembro rotativo de un área operativa sin relación con el caso | **2 miembros del Directorio** · Gerente de RR.HH. · Jefe de Legal y Cumplimiento |
| Periodicidad ordinaria | **Mensual** | **Bimestral** |

Son dos órganos distintos con el mismo nombre. \`docs/10\` además asigna a Legal y Cumplimiento la
"Secretaría del Comité de Ética", lo que es compatible con ambas versiones y no desempata.

**Por qué no se corrigió.** Definir si el Comité de Ética incluye o no representación del Directorio es una
decisión de gobierno corporativo. La composición de \`docs/01\` es más coherente con el flujo operativo que
el propio \`docs/01\` describe (Control Interno recibe y clasifica los reportes); la de \`docs/10\` es más
coherente con el nivel de un comité de Directorio. Debe decidirlo la Dirección General.

---

### H-21 — BAJA · "3,75 % del total" (\`docs/09\` §1.5) — CORREGIDO

La fila 16 justificaba las 45 consultas mensuales de zona roja como "estimación conservadora de 3,75 % del
total". 3,75 % de las 1.485 consultas serían 56, no 45. El 45 sale de 3,75 % de la **nómina** (1.200 × 3,75 %
= 45), que es el criterio correcto y el que produce el número. Como porcentaje del total de consultas es el
3,0 %.

**Corrección aplicada.** Se explicitó la base de cálculo y se añadió la equivalencia sobre el total.

---

### H-22 — BAJA · Tabla de descuentos presentada como taxativa (\`docs/05\` §11.2) — NO CORREGIDO

\`docs/05\` §11.1 establece el principio correcto ("ningún descuento sin título: obligación legal, orden
judicial o autorización escrita") y §11.2 presenta "la tabla de descuentos". Pero el mismo manual crea dos
descuentos que no figuran en ella:

- §12.5: del almuerzo subsidiado, "el 30 % restante se descuenta por rol".
- §12.3: en el nivel N2, "el dependiente se descuenta por rol".

Ambos son legítimos (son consumos con autorización escrita del colaborador), pero su ausencia de la tabla
hace que un colaborador que los vea en su rol no encuentre su fundamento donde el manual le dice que lo
busque.

**Corrección sugerida.** Añadir dos filas a la tabla de §11.2 ("Alimentación subsidiada — copago del 30 %" y
"Dependiente adicional del seguro médico"), ambas con habilitante "autorización escrita del colaborador".
No se aplicó por ser de severidad baja y tocar el diseño de una tabla que pertenece al autor del documento.

---

### H-23 — BAJA · Ámbito inventado para \`jornada_parcial_recargo\` (\`docs/02\` Art. 16) — NO CORREGIDO

El Art. 16 dice: *"El recargo aplicable a la jornada parcial pactada **en sábados, domingos y días de
descanso obligatorio** consta en el parámetro \`jornada_parcial_recargo\`"*. El parámetro registra solamente
"35 % de recargo" con fundamento en el capítulo de la jornada parcial permanente del Código del Trabajo; no
enuncia esa restricción de ámbito. Es una precisión añadida por el documento sin respaldo en el registro.

**Corrección sugerida.** Eliminar la enumeración de días y dejar "El recargo aplicable a la jornada parcial
permanente consta en el parámetro \`jornada_parcial_recargo\`, marcado para verificación también en cuanto a
su ámbito de aplicación". No se aplicó porque toca la redacción de un artículo del Reglamento Interno y la
lectura del documento podría ser deliberada.

---

### H-24 — BAJA · Plazo de entrega del justificativo médico — NO CORREGIDO

\`docs/02\` Art. 37: el justificativo se presenta "dentro de los **tres días laborables** siguientes al
retorno". \`docs/04\` §12.1: certificado médico "dentro de las **72 horas**". Tres días laborables tras un fin
de semana son cinco días calendario; 72 horas son tres. Los ámbitos son distintos —ausencia al trabajo vs
inasistencia a un curso— pero el colaborador no hace esa distinción, y el más exigente es el del documento
de menor jerarquía.

**Corrección sugerida.** Alinear \`docs/04\` §12.1 a "tres días laborables" por remisión expresa al Art. 37
del Reglamento Interno.

---

## 4. Lo que se revisó y salió limpio

Para que conste que cada documento fue mirado de verdad, y no solo aquellos donde hubo hallazgos:

### Verificaciones automáticas ejecutadas sobre los 10 documentos

| Verificación | Resultado real |
|---|---|
| Claves de parámetro citadas que **no existen** en \`datos/parametros-legales.json\` | **0** en los 10 documentos (los únicos falsos positivos fueron \`verificar_antes_de_produccion\`, que es un estado, y ocho nombres de campo de un esquema JSON en \`docs/08\`) |
| **Números de artículo de leyes externas** citados con precisión no respaldada (Código del Trabajo, Ley de Seguridad Social, Constitución, Ley Orgánica de Discapacidades, reglamentos de SSO) | **0 ocurrencias en todo el corpus.** Los "Art. N" de \`docs/02\` son artículos del propio Reglamento Interno, no de una ley externa. **No hay ningún hallazgo del tipo "cita dudosa por falsa precisión de artículo"** |
| Tabla de 85 parámetros de \`docs/05\` §19: cada \`estado_verificacion\` contra el JSON | **85 filas revisadas, 0 discrepancias** |
| Referencias internas a secciones inexistentes ("sección X.Y") | **0** en los 10 documentos |
| Recálculo de todos los ejemplos numéricos y sumas del corpus | **122 comprobaciones, 121 exactas**; la única diferencia es un redondeo de presentación (70,17 % impreso como 70,2 %) |

### Verificaciones sobre \`datos/parametros-legales.json\` (no modificado)

| Tabla | Resultado |
|---|---|
| \`dias_habiles_2026\` | 12 meses, **0 filas inconsistentes**; suma 251 = 261 días L-V − 10 feriados hábiles; coincide con \`total_anual\`; y 2026 tiene efectivamente **261 días de lunes a viernes** |
| \`feriados_nacionales_2026\` | **11 de 11** fechas con el día de la semana correcto |
| \`recargos_jornada\` | Factores 1,00 / 1,25 / 1,50 / 2,00 / 2,00 coherentes con los parámetros de recargo; 470 ÷ 240 = 1,958333 → 1,96 correctamente declarado como redondeo de presentación |
| \`vacaciones_por_antiguedad\` | Escala 15 → 30 días coherente con \`vacaciones_dia_adicional_desde_anio\` (año 6) y \`vacaciones_dias_adicionales_tope\` (15) |
| \`indemnizacion_despido\` | Ejemplo resuelto correcto (6 × 620 = 3.720; 0,25 × 620 × 6 = 930; total 4.650) |

### Documento por documento

**\`docs/01\` — Código de Ética.** Revisados: los 27 parámetros citados (todos existen y se usan
correctamente), los 15 casos CE, el capítulo de respeto entre personas, la Línea Ética y sus plazos, el
cuadro de 12 pendientes de verificación, y la articulación con el Reglamento Interno. Es el documento más
disciplinado del corpus en materia de no inventar precisión: cinco veces declara expresamente que **no cita
artículos ni cuantías** porque no tiene certeza (competencia, datos personales, acoso, cohecho, normativa
sanitaria). **Único hallazgo: H-20**, la composición del Comité de Ética contra \`docs/10\`.

**\`docs/02\` — Reglamento Interno de Trabajo.** Revisados: los 131 artículos, las 109 claves de parámetro
citadas (todas válidas), los límites de las modalidades temporales (Art. 14, coincide con
\`contrato_eventual_duracion_maxima\` 180, \`contrato_ocasional_duracion_maxima\` 30 y los recargos del 35 %),
el período de prueba (Art. 26), las licencias (Art. 59 y 60, todas por remisión a parámetro, sin cifra
suelta), los recargos de hora (Art. 41, coherentes con la tabla \`recargos_jornada\`), y los Capítulos XII a
XVII. **Hallazgos: H-05, H-07, H-08, H-09, H-10, H-23.** El Art. 108 (multa) es un ejemplo modelo de
honestidad documental: se niega a enunciar el porcentaje y suspende la sanción hasta que exista el
parámetro.

**\`docs/03\` — Política de Reclutamiento y Selección.** Revisados: las 32 claves citadas, el bono de
referidos expresado siempre como porcentaje de un SBU parametrizado (nunca en dólares sueltos), la cuota de
inclusión (4 % de 1.200 = 48 personas, **correcto**), la edad mínima, las prohibiciones de la entrevista, el
acompañamiento del período de prueba y la tabla de 17 pendientes de verificación. **Único hallazgo: H-17.**

**\`docs/04\` — Política de Capacitación y Desarrollo.** Revisados: las 25 claves citadas, el tratamiento de
las horas de formación fuera de jornada (coherente con los tres parámetros de recargo y con los topes
suplementarios), la cláusula de permanencia y devengación —cuyos seis límites absolutos están bien
construidos y explícitamente protegen la liquidación y el acta de finiquito—, y el canal de derivación de
la encuesta de clima. No se encontró ninguna cifra legal sin parámetro. **Único hallazgo: H-24 (baja).**

**\`docs/05\` — Manual de Nómina, Compensación y Beneficios.** Revisado **íntegro, línea por línea**, con
recálculo de los 16 ejemplos resueltos y de todos los cuadros auxiliares: 90 operaciones, **89 exactas**.
Se verificaron la comisión de la fuerza de ventas (factores, umbrales y la lectura accionable de "le
faltaron 8 clientes de 290"), los dos roles de pagos completos con su líquido, los tres ejemplos de horas
extra, el décimo tercero con y sin prorrateo, la décima cuarta completa y proporcional con el divisor de
360 y su comparación honesta con 365, los fondos de reserva, las vacaciones de un comisionista con la
comprobación por la vigésima cuarta parte, el reparto de utilidades con sus dos bolsas, los aportes al
IESS, el cupo del comisariato, el bono de escolaridad y la liquidación completa en sus dos escenarios.
También se comprobó la tabla de 85 parámetros de la §19 contra el JSON (0 discrepancias) y la coherencia de
la §20 (9 + 14 = 23 pendientes, que es lo que declara el control de cambios). **Hallazgos: H-01, H-02,
H-03, H-04, H-09, H-11, H-16, H-19, H-22.** La sección 20 de este manual es lo mejor del corpus: declara 23
dudas reales en vez de disimularlas.

**\`docs/06\` — Procedimientos de Contratación y Finiquito.** Revisados: las 76 claves citadas, la tabla de
licencias (§, coincide **exactamente** con los ocho parámetros de licencia, incluidos los estados de
verificación), la plantilla de acta de finiquito, los 10 rubros de la liquidación y sus egresos admisibles,
y el cuadro de pendientes. Este documento no resuelve ejemplos numéricos —usa plantillas con marcadores—,
lo que es una buena decisión de diseño y elimina una fuente entera de error. **Hallazgos: H-02, H-11.**

**\`docs/07\` — Reglamento de Higiene y Seguridad.** El documento más extenso (40.440 palabras) y el más
riguroso en declaración de incertidumbre: **cinco veces** declara expresamente que el registro de
parámetros no contiene la cifra que haría falta y se niega a inventarla (altura de trabajo en altura,
límites de peso en manipulación manual de cargas, distancias de seguridad eléctrica, frecuencia legal de
simulacros, pruebas de alcohol y drogas), marcando en cada caso el valor usado como **criterio interno de
VERTIENTE**. Revisados además: las 36 claves citadas, la matriz de riesgos por familia de cargo, los
umbrales de organización preventiva (todos por remisión a parámetro y todos correctamente descritos: más de
100, más de 15, desde 50, desde 100), el plazo de aviso de accidente (10 días laborables, citado
exactamente), la nota metodológica del factor 200.000 de los índices de frecuencia y gravedad —declarado
como convención y no como cifra normativa— y el régimen de incumplimientos de la sección 22.
**Único hallazgo: H-18.**

**\`docs/08\` — Política de Disciplina y Debido Proceso.** Revisados: las 47 claves citadas (más ocho nombres
de campo de esquema, que no son parámetros), los principios rectores, la tipificación, la matriz de
autoridad, la tabla maestra de 14 pasos con plazos, los criterios de graduación, el procedimiento separado
de acoso, los siete casos especiales y la matriz de orientación preventiva de 35 filas. Sus secciones 8.3
(suspensión) y 12.1 (prescripción) declaran sus dudas correctamente. **Hallazgos: H-03, H-06, H-07, H-08,
H-09, H-10, H-15.**

**\`docs/09\` — Alcance del Consultor Virtual (VERA).** Revisados: las 88 claves citadas, el catálogo completo
de intenciones por dominio, las tres zonas de guardarraíl con sus cuatro reglas especiales, la matriz de
escalamiento de zona roja, los ocho principios de conducta, los 15 casos límite resueltos, la política de
datos personales y las 18 métricas. Es el documento normativamente más sólido del corpus y el único que
enuncia expresamente la **regla del piso informativo obligatorio** y el error de "evasión informativa": es
decir, reconoce que responder de menos también daña. Sus respuestas de ejemplo declaran el estado de
verificación de cada parámetro que citan. **Hallazgos: H-12, H-13, H-21.** Sus cifras de guardarraíl son
además la vara con la que se detectaron H-03, H-09, H-10 y H-19 en otros documentos.

**\`docs/10\` — Manual Organizacional.** Revisados: las 65 claves citadas, la estructura de gobierno, las
fichas de los cargos operativos (todas con "remuneración fija no inferior al SBU" por parámetro, ninguna con
cifra suelta), el cuadro de umbrales legales por headcount, la carga de trabajo de RR.HH. y el caso de
negocio. Todas las sumas y porcentajes de sus tablas de carga **cuadran exactamente** (4.140 = suma de las
seis unidades; 159,2 consultas por persona; 7,6 por día hábil; subtotal de las diez consultas frecuentes
2.662 = 64,3 %; clasificación 2.620 + 810 + 460 + 250 = 4.140 y 88,9 % = 100 − 11,1). **Hallazgos: H-12,
H-14, H-20.**

---

## 5. Correcciones aplicadas

19 ediciones puntuales sobre 8 documentos, sin reescribir ninguno. \`docs/01\` y \`docs/04\` no fueron
modificados: sus dos hallazgos (H-20 y H-24) requieren criterio ajeno a la auditoría.

| # | Archivo | Ubicación | Cambio |
|---|---|---|---|
| 1 | \`docs/05-manual-nomina-beneficios.md\` | §4.4, cierre del ejemplo 6 | Párrafo reemplazado por tabla de dos franjas con cálculo resuelto (4,17 + 3,13 = 7,30) y advertencia de que no procede el factor 1,50 para la hora de 05h00–06h00 |
| 2 | \`docs/05\` | §4.3, paso 2 | "Sin aprobación registrada, la hora no se liquida" → la ausencia de aprobación nunca extingue el derecho al pago |
| 3 | \`docs/05\` | §8.4, acumulación | "El derecho se pierde" → se pierde la posibilidad de gozarlos juntos, no el derecho, que se liquida en el finiquito |
| 4 | \`docs/05\` | §3.1, anatomía del rol | La línea "Multa del Reglamento Interno" pasa a declararse suspendida |
| 5 | \`docs/05\` | §11.2, tabla de descuentos | Ídem, con la instrucción de reversar la multa que aparezca |
| 6 | \`docs/05\` | §18, tabla de escalamiento | Reemplazada por la matriz vinculante de \`docs/09\` §5.5, con rol primario, copia y plazo comprometido |
| 7 | \`docs/05\` | §19, tabla de parámetros | \`despido_intempestivo_meses_por_anio\`: "1 mes por año desde el cuarto" → "por cada año de servicio", con el piso de 3 meses |
| 8 | \`docs/06-procedimientos-contratacion-finiquito.md\` | §14.3, rubro de indemnización | Misma corrección, con el ejemplo desambiguador "6 años = 6 meses, no 3" |
| 9 | \`docs/06\` | §14.3, rubro de fondos de reserva | Alineado con \`docs/05\` §13.2: los acumulados no constan en el acta, se cobran en el IESS |
| 10 | \`docs/02-reglamento-interno-trabajo.md\` | Art. 40, encabezado | "ni se paga" → "ni se trabaja", con la aclaración de que la falta de autorización no impide el pago |
| 11 | \`docs/02\` | Art. 109, etapa 2 | Descargo: 3 días prorrogables a 5 → **5 días hábiles prorrogables 3 más sin justificar**, con suspensión del plazo por licencia (armonizado con \`docs/08\` §10.1) |
| 12 | \`docs/02\` | Art. 112, tabla | Prescripción 30/60/90 días calendario → **15/30/60 días hábiles** más plazo máximo desde la ocurrencia, armonizado con \`docs/08\` §12.1 |
| 13 | \`docs/08-politica-disciplina-debido-proceso.md\` | §12.2, escalón 3 | Caducidad del antecedente 18 → **12 meses** |
| 14 | \`docs/08\` | §14.1, guardarraíl del consultor | Contacto comprometido 24 horas hábiles → **48 horas**, citando \`docs/09\` §5.5 |
| 15 | \`docs/08\` | §18, fila 35 | "El derecho de los años más antiguos se pierde" → corregido igual que en \`docs/05\` |
| 16 | \`docs/09-alcance-consultor-virtual.md\` | §1.5 | Nota de **divergencia declarada** con \`docs/10\`; corrección de 0,94 → **0,90 FTE**; base de cálculo del 3,75 % explicitada |
| 17 | \`docs/10-manual-organizacional.md\` | §12.5–12.6 | 61 % / 734 colaboradores → **85 % / 1.025**, con desglose desde \`datos/cargos.json\`; nota de divergencia declarada con \`docs/09\`; "la medición" → "la clasificación, que es una estimación" |
| 18 | \`docs/07-reglamento-higiene-seguridad.md\` | §12.1.3, §17 tabla P-02, §13.4 y FAQ 8 y 9 | "Falta gravísima" → "incumplimiento gravísimo (sección 22.2)", con la tipificación disciplinaria real del RIT en los dos pasajes operativos |
| 19 | \`docs/03-politica-reclutamiento-seleccion.md\` | Tabla de pendientes, fila 8 | \`inclusion_discapacidad_umbral_trabajadores\` → *(parámetro inexistente)*, con la explicación de qué registra realmente esa clave |

*(19 ediciones para 17 hallazgos: H-02, H-03 y H-09 requirieron tocar dos documentos cada uno.)*

**Ningún archivo de \`datos/\` fue modificado.** \`parametros-legales.json\`, \`cargos.json\`, \`sedes.json\` y
\`organizacion.json\` se usaron exclusivamente como fuente de verdad.

### Revalidación posterior a las correcciones

Ejecutada después de aplicar las 19 ediciones:

\`\`\`
doc05 sec19 filas 85 problemas 0
CLAVE INEXISTENTE: (ninguna en los 10 documentos)
SECCION INEXISTENTE: (ninguna interna; las 3 detectadas son
  referencias explícitas a secciones de otros documentos, con su código)
COMPROBACIONES OK: 121
COMPROBACIONES FALLIDAS: 1
  FALLA -> 09 % contencion: calculado 70.17 / documento 70.2
\`\`\`

La única "falla" es la tolerancia del verificador: 70,17 % redondeado a una decimal es 70,2 %, que es lo
que el documento imprime. El script de verificación queda en el directorio de trabajo temporal de la sesión
como \`verificar.mjs\` y es reejecutable.

---

## 6. Riesgos residuales — lo que un revisor humano debe mirar

Ordenados por lo que más cuesta si nadie los mira.

### 6.1 Decisiones de gobierno pendientes (bloquean la coherencia del corpus)

1. **¿Cuál es la escala de sanción vigente de VERTIENTE?** (H-06). Hoy hay dos incompatibles. Y la
   suspensión disciplinaria que \`docs/08\` usa como escalón 4 es inaplicable por su propia regla, porque el
   Reglamento Interno no la tipifica. **Riesgo concreto:** una suspensión aplicada hoy sería anulable, y
   \`docs/08\` §16 ("errores que anulan una sanción") lo dice sin darse cuenta de que se aplica a sí mismo.
   Decide: Gerencia de RR.HH. con Legal y Cumplimiento; si se adopta la suspensión, hay que reformar y
   volver a aprobar el Reglamento Interno.

2. **¿Qué órgano recibe una denuncia de acoso, y existe realmente?** (H-09). Tres nombres distintos en
   \`docs/01\`/\`docs/02\`/\`docs/08\`, uno de los cuales el Manual Organizacional no reconoce. Una víctima que
   lea el Reglamento Interno será enviada a un comité que no aparece en el organigrama. **Este es el riesgo
   residual más grave del corpus**, porque falla justo en el momento en que una persona vulnerable busca el
   canal. Decide: Dirección General, y debe reflejarse simultáneamente en \`docs/01\`, \`docs/02\`, \`docs/08\` y
   \`docs/10\`.

3. **¿A qué plazo se compromete la compañía en acoso?** (H-10). Se armonizó \`docs/08\` con \`docs/09\` en 48
   horas, pero \`docs/01\` dice 2 días hábiles y \`docs/02\` Art. 97 dice 24 horas hábiles. **Si la compañía
   quiere comprometerse a 24 horas —que es mejor para la víctima— lo correcto es apretar \`docs/04\`,
   \`docs/07\` y \`docs/09\`, no relajar los otros dos.** La corrección aplicada eligió el consenso mayoritario,
   no el óptimo; revísese esa elección.

4. **¿Cuál es la cifra canónica del caso de negocio?** (H-12). 1.485 o 4.140 consultas al mes; 70 % o 89 %
   de automatización. Se declaró la divergencia en ambos documentos, pero la reconciliación exige una
   definición única de "consulta" (¿un correo de trámite cuenta? ¿una visita a ventanilla que termina en un
   formulario?). Decide: Gerencia de RR.HH. con Control Interno, en la recalibración del mes 3.

5. **¿Quién integra el Comité de Ética?** (H-20). \`docs/01\` y \`docs/10\` describen dos órganos distintos con
   el mismo nombre y distinta periodicidad.

### 6.2 Coherencia de proceso que quedó parcialmente resuelta

6. **Reconsideración vs apelación escalonada** (resto de H-07). \`docs/02\` Art. 109 etapa 6 prevé una
   "reconsideración" ante la instancia inmediatamente superior, con 3 días para pedirla y 5 para
   resolverla. \`docs/08\` §9.3 prevé una "apelación" con plazos distintos según el escalón (3–5 días para
   apelar, 5–10 para resolver) y reglas adicionales valiosas que el Reglamento no recoge: la apelación
   suspende la ejecución del escalón 4, y **apelar nunca puede empeorar la sanción**. Esa última garantía
   debería estar en el Reglamento Interno, que es el instrumento oponible.

7. **El plazo para requerir el descargo.** \`docs/02\` Art. 109 etapa 1 da 10 días laborables desde que se
   conoce el hecho; la cadena de pasos 1 a 4 de \`docs/08\` §10.1 suma de 12 a 17 días hábiles hasta la
   notificación de cargos. Un caso tramitado según \`docs/08\` puede quedar fuera del plazo de \`docs/02\` y
   ser archivado por aplicación del último párrafo del Art. 109. Debe unificarse el punto de partida y el
   plazo.

### 6.3 Dudas de fondo que ningún documento puede cerrar solo

8. **Todo cálculo de este corpus depende de un SBU que casi con seguridad está subestimado.** El parámetro
   \`sbu\` arrastra el valor de 2025 y su propia nota lo declara. Afecta la décima cuarta de los 1.200
   colaboradores, el tope de utilidades, los recargos de eventual y ocasional, y el piso de todas las
   bandas salariales. **Esta auditoría verificó que la aritmética es correcta dado el parámetro; no puede
   verificar el parámetro.** Es lo primero que hay que cerrar en enero.

9. **El divisor de 360 días para prorratear beneficios no tiene parámetro** y se usa en al menos cinco
   cálculos de \`docs/05\` y \`docs/06\` (décima cuarta proporcional, vacaciones, valor del día de vacación).
   \`docs/05\` §6.3 lo declara honestamente y justifica 360 por ser más favorable. Si se resolviera que el
   divisor correcto es 365, **todos los proporcionales del corpus cambian**, siempre a la baja. Crear el
   parámetro es la acción de mayor impacto pendiente.

10. **El divisor de 240 horas y la base del valor de la hora.** \`docs/05\` §4.2 declara un segundo pendiente,
    más delicado que el divisor: VERTIENTE calcula el valor de la hora sobre la remuneración **fija**, sin
    los componentes variables. Para un prevendedor cuya comisión es un tercio de su ingreso, eso reduce el
    valor de cada hora extra. El propio manual reconoce que "existe criterio de que los componentes
    variables habituales deberían integrar la base". **Si ese criterio se confirma, hay un pasivo
    retroactivo.** Ninguna corrección de esta auditoría lo toca, porque es una cuestión de derecho, no de
    coherencia documental.

11. **Los feriados locales de las once ciudades no existen en el registro** y sí generan recargo de hora
    extraordinaria para el personal de cada localidad. \`docs/05\` §20.2 lo declara. Mientras no estén, toda
    liquidación de recargo por feriado en Cuenca, Ambato, Manta, Machala, Santo Domingo, Loja, Quevedo o
    Ibarra está incompleta.

### 6.4 Hallazgos de severidad baja no corregidos

12. H-22 (\`docs/05\` §11.2): dos descuentos que el manual crea y que su tabla de descuentos no lista.
13. H-23 (\`docs/02\` Art. 16): ámbito atribuido a \`jornada_parcial_recargo\` que el parámetro no enuncia.
14. H-24 (\`docs/02\` Art. 37 vs \`docs/04\` §12.1): tres días laborables vs 72 horas para el justificativo.

### 6.5 Sobre el alcance de esta auditoría

- **No se auditó \`datos/colaboradores.json\`, \`datos/catalogo-faltas.json\` ni \`kb/\`.** El encargo era el
  corpus de \`docs/\` contra los parámetros. Los datos generados podrían contener incoherencias propias
  (por ejemplo, antigüedades que no cuadren con las fechas de ingreso, o faltas tipificadas que no existan
  en \`docs/02\`). **\`datos/catalogo-faltas.json\` en particular debería auditarse contra los Art. 103, 104 y
  105 del Reglamento Interno**, porque el Art. 101 literal a) exige tipicidad estricta y una falta de
  catálogo sin correlato en el Reglamento no es sancionable.
- **No se verificó ninguna cifra contra la norma ecuatoriana real.** La auditoría es de coherencia interna.
  Los 112 parámetros conservan sus estados de verificación y **58 de ellos siguen marcados
  \`verificar_antes_de_produccion\`**; esa verificación sigue pendiente y ninguna corrección de este informe
  la sustituye.
- **Se hicieron dos ediciones sobre el Reglamento Interno de Trabajo** (Art. 40, 109 y 112). Es un
  instrumento sujeto a aprobación de la autoridad: los cambios de plazo de descargo y de prescripción deben
  pasar por Legal y Cumplimiento antes de considerarse vigentes, aunque ambos amplían garantías del
  colaborador y ninguno restringe un derecho.

---

*Auditoría de simulación sobre Corporación Vertiente S.A. (VERTIENTE), empresa ficticia. Personas, marcas,
cédulas, RUC y montos son ficticios y no corresponden a personas reales. Fuente única de cifras normativas:
\`datos/parametros-legales.json\` v1.0.0, fecha de corte 2026-09-16. Fecha de la auditoría: 16 de septiembre
de 2026.*
`;export{e as default};