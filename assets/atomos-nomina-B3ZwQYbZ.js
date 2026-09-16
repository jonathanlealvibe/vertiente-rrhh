var e={dominio:`nomina_beneficios_tiempo_asistencia`,nombre_dominio:`Nómina, beneficios, tiempo y asistencia`,version:`1.0.0`,fecha_vigencia:`2026-09-16`,fecha_corte_simulacion:`2026-09-16`,empresa:`Corporación Vertiente S.A. (VERTIENTE)`,consultor:`VERA — Consultor Virtual de Recursos Humanos`,total_atomos:89,semilla:20260916,generado_por:`scripts/generar-kb-nomina.mjs`,fuentes:[`docs/05-manual-nomina-beneficios.md`,`docs/02-reglamento-interno-trabajo.md`,`docs/09-alcance-consultor-virtual.md`,`datos/parametros-legales.json`],convencion_zonas:{verde:`VERA responde y resuelve: información normativa, cálculo sobre datos propios, fechas, plazos y estado de trámite. No hay conflicto ni tercero identificado.`,ambar:`VERA entrega el marco general con su fuente, no indaga la situación personal, no recomienda una decisión financiera y deriva al rol humano correcto con plazo comprometido.`,roja:`VERA no opina sobre el fondo, acusa recibo con empatía, registra el caso y escala de inmediato al rol receptor de la matriz de escalamiento.`},regla_de_oro:`VERA nunca disuade a un colaborador de ejercer un derecho ni minimiza un mínimo legal. Si la política de VERTIENTE y el mínimo legal difieren, manda el más favorable al colaborador y así se dice expresamente.`,regla_de_cifras:`Ninguna cifra legal se escribe a mano en este archivo. Toda cifra normativa proviene de datos/parametros-legales.json y se cita por la clave listada en parametros_usados. Los parámetros marcados verificar_antes_de_produccion arrastran esa duda a los átomos que los usan.`,campo_volumen_consulta:`volumen_consulta_estimado_mensual es una ESTIMACIÓN DE SIMULACIÓN generada con el PRNG sembrado del proyecto para ordenar la recuperación por presión real de consulta. No proviene de una medición.`,aviso_datos_simulados:`DATOS SIMULADOS. Corporación Vertiente S.A., sus instalaciones, sus marcas y las personas que aparecen en los ejemplos (Jefferson Quimí, Wilson Chalá, Byron Lascano, Digna Macías, Marlon Zambrano, Édison Tenesaca, Narcisa Pilamunga) son ficticios y NO corresponden a personas, empresas ni marcas reales. Las cifras legales son parámetros de simulación y no constituyen asesoría legal: deben verificarse contra la norma vigente del Ministerio del Trabajo, el IESS y el SRI antes de cualquier uso real.`},t=[{id:`KB-001`,titulo:`¿Qué día me cae el sueldo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`rol_de_pagos`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:327,pregunta_canonica:`¿Cuándo se acredita mi sueldo cada mes?`,variantes_pregunta:[`¿qué día pagan?`,`a que hora cae el sueldo hoy`,`cuando me depositan el mes`,`ya pagaron? no me ha llegado nada`,`¿el pago es el 30 o el último día hábil?`,`sueldo cuando entra pofa`],respuesta_corta:`Tu sueldo se acredita el último día hábil del mes en tu cuenta bancaria personal. Si ese día cae sábado, domingo o feriado, se adelanta al día hábil anterior, nunca se atrasa.`,respuesta_extendida:`### Cuándo se paga

VERTIENTE acredita la remuneración **el último día hábil del mes** en la cuenta bancaria personal del colaborador. El pago es siempre en dinero: está prohibido pagar en producto, vales u órdenes de compra.

| Día del mes | Qué pasa |
|---|---|
| 15 | Se acredita el anticipo quincenal, si lo solicitaste |
| 20 | Corte de novedades: última fecha para que tu jefatura cargue horas extra, licencias y cambios |
| 23 | Cierre de nómina: los valores se congelan |
| Último día hábil | Acreditación del rol |
| Primeros 5 días hábiles del mes siguiente | Tu rol individual queda publicado para descarga |

### Si no te llegó

Primero revisa que tu cuenta bancaria registrada esté vigente y a tu nombre: VERTIENTE no acredita la remuneración en la cuenta de un tercero, ni siquiera de un familiar. Si la cuenta está bien y el valor no llegó al día siguiente hábil, repórtalo a Nómina y Compensaciones, que responde en un máximo de 3 días laborables.

Fuente: Reglamento Interno de Trabajo, Art. 43 y 44, y Manual de Nómina, sección 14.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El personal remunerado por jornadas o por obra puede tener periodicidad semanal (parámetro periodicidad_pago_remuneracion).`,`La cuenta debe estar a nombre del colaborador; no se acredita a terceros.`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 43`},calculadora:null,datos_requeridos:[],siguiente_paso:`Revisa tu rol en el portal interno los primeros 5 días hábiles del mes. Si el valor no llegó, abre un caso con Nómina y Compensaciones.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`pago`,`sueldo`,`fecha de pago`,`acreditacion`,`rol de pagos`,`calendario`],errores_frecuentes:[`Creer que el pago es siempre el día 30, sin considerar que se adelanta cuando cae en día no hábil.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-002`,titulo:`¿Qué significa cada línea de mi rol de pagos?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`rol_de_pagos`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:312,pregunta_canonica:`¿Cómo leo mi rol de pagos y qué es cada rubro?`,variantes_pregunta:[`no entiendo mi rol`,`que es cada cosa del rol de pagos`,`me pueden explicar los descuentos de mi rol`,`donde veo mi rol`,`que significa liquido a recibir`,`porq mi rol dice materia gravada`],respuesta_corta:`Tu rol tiene tres bloques: ingresos (lo que ganas), egresos (lo que se te descuenta) y el líquido a recibir, que es la resta de los dos. Al pie hay un bloque informativo de costo del empleador que NO se te descuenta.`,respuesta_extendida:`### Los tres bloques

| Bloque | Líneas típicas |
|---|---|
| Ingresos | Sueldo base del período, comisión o bono variable, horas suplementarias, horas extraordinarias, recargo de jornada nocturna, fondos de reserva mensualizados, décimos mensualizados, movilización o viáticos liquidados |
| Egresos | Aporte personal IESS, anticipo quincenal, préstamo del IESS, préstamo de la empresa, comisariato, pensión alimenticia por orden judicial, impuesto a la renta, multa con proceso disciplinario concluido |
| Informativo | Aporte patronal IESS: lo paga VERTIENTE además de tu sueldo y **no se te descuenta** |

### La línea que más confunde: materia gravada

La materia gravada es la parte de tus ingresos sobre la que se calculan los aportes al IESS. Son materia gravada el sueldo, las comisiones, los bonos de productividad y bodega, las horas suplementarias y extraordinarias y el recargo nocturno. **No** lo son los décimos, los fondos de reserva, las utilidades ni los viáticos.

Por eso tu aporte del 9,45% se calcula sobre un número menor que tu total de ingresos, y eso es correcto.

### Tu derecho

Tienes derecho a que se te explique cada rubro de tu rol, en lenguaje sencillo y en el tiempo que haga falta. Puedes preguntarme a mí, al liquidador de tu centro de distribución o a Nómina y Compensaciones, que responde en máximo 3 días laborables.

Fuente: Manual de Nómina, sección 3.1, y Reglamento Interno, Art. 44 y 45. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Las líneas de décimos y fondos de reserva mensualizados solo aparecen si elegiste esa modalidad.`],parametros_usados:[`iess_base_calculo`,`iess_aporte_personal`,`iess_aporte_patronal`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`3. El rol de pagos, línea por línea`,articulo:null},calculadora:`explicador_rol_de_pagos`,datos_requeridos:[`numero de colaborador`,`mes del rol a explicar`],siguiente_paso:`Dime qué línea de tu rol no te cuadra y te la explico con tus propios números.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`rol de pagos`,`ingresos`,`egresos`,`liquido a recibir`,`materia gravada`],errores_frecuentes:[`Sumar el total de ingresos y esperar que el aporte al IESS se calcule sobre ese total.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-003`,titulo:`¿Qué es "materia gravada" y por qué no todo lo que gano cuenta?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:132,pregunta_canonica:`¿Qué ingresos son materia gravada para el IESS y para mis beneficios?`,variantes_pregunta:[`que es materia gravada`,`mis viaticos suman para el decimo?`,`la comision cuenta para el IESS?`,`sobre que me calculan el aporte`,`el bono entra en la base de los fondos de reserva`,`porque el aporte no sale del total`],respuesta_corta:`Materia gravada es lo que te pagan POR TRABAJAR: sueldo, comisiones, bonos de productividad y bodega, horas extra y recargo nocturno. No son materia gravada los décimos, los fondos de reserva, las utilidades ni los viáticos.`,respuesta_extendida:`### La regla

Es materia gravada todo ingreso regular y susceptible de apreciación pecuniaria percibido como retribución del trabajo (parámetro iess_base_calculo).

| Rubro | ¿Materia gravada? |
|---|---|
| Sueldo base | Sí |
| Comisiones de la fuerza de ventas | Sí, toda la comisión del mes |
| Bono de productividad de planta y bono de bodega | Sí |
| Horas suplementarias y extraordinarias | Sí |
| Recargo de jornada nocturna | Sí |
| Décima tercera y décima cuarta | No, son beneficios sociales |
| Fondos de reserva | No |
| Utilidades | No |
| Viáticos, movilización y kilometraje sustentados | No (pendiente de verificación) |

### Por qué te conviene entenderlo

La misma base que paga tu aporte del 9,45% **también** construye tu décimo tercero, tus fondos de reserva y el valor de tus vacaciones. Cuando haces horas extra, sube tu aporte, pero suben los tres beneficios. No es un descuento perdido.

### Advertencia honesta

El parámetro iess_base_calculo está marcado para verificación justamente en los rubros de frontera de VERTIENTE: viáticos, movilización del prevendedor, bono de ruta y comisiones. Si la verificación concluye que alguno es gravado, se recalculan aportes y bases de beneficios a favor del colaborador.

Fuente: Manual de Nómina, secciones 2.1 y 10.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El tratamiento de viáticos y movilización está pendiente de verificación rubro por rubro con el IESS.`],parametros_usados:[`iess_base_calculo`,`iess_aporte_personal`,`fondos_reserva_porcentaje`,`decimo_tercero_formula`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`2.1 De qué se compone lo que usted gana`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si quieres, dime tu cargo y te digo qué rubros tuyos son materia gravada este mes.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`materia gravada`,`iess`,`base de calculo`,`viaticos`,`comisiones`],errores_frecuentes:[`Creer que los viáticos suben el décimo tercero.`,`Creer que las horas extra no suman para los beneficios.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-004`,titulo:`¿Cuánto puedo pedir de anticipo quincenal y cómo lo solicito?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`anticipos`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:380,pregunta_canonica:`¿Cómo pido el anticipo del 15 y cuál es el tope?`,variantes_pregunta:[`quiero pedir quincena`,`cuanto me pueden dar de anticipo`,`hasta que dia se pide la quincena`,`me pueden adelantar el sueldo`,`el anticipo se descuenta el mismo mes?`,`kiero adelanto porfa como hago`],respuesta_corta:`Puedes pedir hasta el 50% de lo que devengaste en la quincena (parámetro anticipo_quincenal_tope). Se solicita hasta el día 10, se acredita el 15 y se descuenta íntegro en el rol de ese mismo mes.`,respuesta_extendida:`### Cómo funciona

| Paso | Detalle |
|---|---|
| Solicitud | Hasta el día 10 de cada mes, por el portal interno o el formato físico de tu instalación |
| Acreditación | El día 15, o el hábil siguiente |
| Tope | Hasta el 50% de la remuneración devengada en la quincena (anticipo_quincenal_tope) |
| Descuento | Íntegro, en el rol del mismo mes, como línea identificada |

### Ejemplo

Un prevendedor con materia gravada de USD 793,00 en el mes devengó unos USD 396,50 en la quincena. Su tope de anticipo es 396,50 × 50% = **USD 198,25**. Si pide USD 190,00, entra. Si pide USD 200,00, Nómina debe rechazarlo.

### Advertencia honesta

Ese 50% es una **política interna razonable** de VERTIENTE, no un porcentaje que la ley enuncie con ese número; el parámetro está marcado para verificación. El principio legal que sí aplica es que el anticipo se descuenta del rol del mismo período y que los descuentos no pueden dejarte sin lo indispensable para vivir.

Fuente: Reglamento Interno, Art. 47, y Manual de Nómina, sección 3.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La solicitud debe presentarse hasta el día 10 del mes.`,`El tope se calcula sobre lo efectivamente devengado, no sobre el sueldo nominal.`],parametros_usados:[`anticipo_quincenal_tope`,`descuentos_rol_limite`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 47`},calculadora:`calculadora_anticipo_quincenal`,datos_requeridos:[`remuneracion devengada en la quincena`],siguiente_paso:`Presenta la solicitud de anticipo antes del día 10 en el portal interno. Si quieres, calculo tu tope con tu remuneración.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`anticipo`,`quincena`,`adelanto`,`tope`,`descuento`],errores_frecuentes:[`Pedir el anticipo después del día 10 y esperar que se acredite el 15.`,`Calcular el 50% sobre el sueldo mensual completo en vez de sobre lo devengado en la quincena.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-005`,titulo:`¿Cómo se calcula mi comisión de prevendedor o vendedor de ruta?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion_variable`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:413,pregunta_canonica:`¿Cómo se arma mi comisión mensual y por qué me salió ese valor?`,variantes_pregunta:[`porque me bajo la comision este mes`,`como se calcula la comision de preventa`,`cuanto es el pool de comision`,`que es drop size y cobertura`,`no llegue a cuota, igual cobro algo?`,`la comision es por porcentaje de venta?`],respuesta_corta:`Tu comisión no es un porcentaje suelto de la venta: es un pool objetivo (USD 280 prevendedor, USD 320 vendedor de ruta) repartido en cuatro componentes —cuota 55%, cobertura 20%, efectividad de visita 15% y drop size 10%—, cada uno con su factor de logro.`,respuesta_extendida:`### Los cuatro componentes (prevendedor)

| Componente | Peso | Qué mide | Valor objetivo |
|---|---|---|---|
| Cumplimiento de cuota | 55% | Venta neta facturada ÷ cuota de la ruta | USD 154,00 |
| Cobertura | 20% | Clientes que compraron ÷ clientes activos | USD 56,00 |
| Efectividad de visita | 15% | Pedidos tomados ÷ visitas del ruteo | USD 42,00 |
| Drop size | 10% | Valor promedio por pedido ÷ meta de la zona | USD 28,00 |

El factor **no es lineal**: por debajo del 85% de logro un componente no paga nada, y por encima del 110% ya no sube.

### Ejemplo resuelto

Jefferson Quimí, prevendedor de Guayaquil, septiembre 2026: cuota 104% (factor 1,00 → 154,00), cobertura 92,4% (factor 0,80 → 44,80), efectividad 87,9% (factor 1,00 → 42,00), drop size 109% (factor 1,15 → 32,20). **Total USD 273,00.** Su cobertura le costó USD 11,20: le faltaron 8 clientes de 290 para llegar al 95%.

### Reglas que evitan reclamos

1. La comisión se calcula sobre venta **neta facturada y no anulada**, no sobre pedido tomado.
2. La nota de crédito por devolución se descuenta de la base del mes en que se emite.
3. La comisión **es remuneración**: suma para décimo tercero, fondos de reserva, vacaciones e IESS.
4. El esquema se comunica por escrito y por anticipado, y no puede modificarse retroactivamente en tu perjuicio.
5. Si estuviste de vacaciones, con licencia o con reposo, la cuota se ajusta a los días efectivos de ruta. No se te penaliza por ejercer un derecho.

Fuente: Manual de Nómina, sección 2.3, y Reglamento Interno, Art. 51. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`supervisor zonal`],condiciones:[`Aplica solo a cargos con esquema de comisión variable.`,`La cuota se ajusta proporcionalmente si hubo vacaciones, licencia o reposo médico en el mes.`],parametros_usados:[`iess_base_calculo`,`decimo_tercero_formula`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`2.3 El esquema de comisiones de la fuerza de ventas`,articulo:null},calculadora:`calculadora_comision_fuerza_ventas`,datos_requeridos:[`cargo`,`cuota asignada`,`venta neta facturada`,`clientes activos y clientes que compraron`,`visitas y pedidos`,`drop size y meta de zona`],siguiente_paso:`Pide a tu supervisor zonal el detalle de la base de cálculo del mes: tienes derecho a verlo. Si quieres, simulo tu comisión con tus métricas.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`comision`,`preventa`,`autoventa`,`cuota`,`cobertura`,`drop size`,`variable`],errores_frecuentes:[`Creer que la comisión es un porcentaje fijo de la venta.`,`Creer que el pedido tomado ya genera comisión aunque el cliente lo rechace en la entrega.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-006`,titulo:`Hice la venta a fin de mes y no me la pagaron: ¿por qué?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion_variable`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:83,pregunta_canonica:`¿Hasta qué día cuenta la venta para la comisión de este mes?`,variantes_pregunta:[`hasta cuando cuenta la venta para la comision`,`vendi el 28 y no me pagaron`,`que es el ajuste de comision mes anterior`,`cuando es el corte comercial`,`mi comision salio incompleta`],respuesta_corta:`El corte de información comercial es el día 21. Lo facturado entre el 21 y el fin de mes entra en el rol del mes siguiente con la etiqueta "ajuste de comisión mes anterior": no se pierde, se atrasa un mes.`,respuesta_extendida:`### El ciclo

| Día | Hito |
|---|---|
| 20 | Corte de novedades: horas extra, licencias, cambios de cargo, ingresos y salidas |
| 21 | Cierre de información comercial: base de comisiones del mes |
| 22 y 23 | Prevalidación y cierre de nómina |
| Último día hábil | Acreditación |

### Qué pasa con lo que vendiste después del corte

Se liquida en el rol del mes siguiente, identificado como **ajuste de comisión mes anterior**, y con el detalle del mes al que corresponde. No se pierde ni se diluye.

La misma lógica aplica a la nota de crédito: si el cliente devolvió producto, ese descuento aparece en el mes en que se emite la nota, no retroactivamente.

### Si el valor no cuadra

Tienes derecho a ver la base de cálculo. La disputa sobre una liquidación de comisiones se presenta ante el Jefe Regional de Ventas y ante Nómina y Compensaciones, que responden por escrito en 5 días laborables.

Fuente: Manual de Nómina, secciones 2.3 y 14.1, y Reglamento Interno, Art. 51. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`supervisor zonal`],condiciones:[`Aplica a cargos con comisión variable.`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`14.1 El ciclo mensual`,articulo:null},calculadora:null,datos_requeridos:[`mes en disputa`,`ruta o zona`],siguiente_paso:`Solicita el detalle de la base de comisión al liquidador de tu CD. Si no cuadra, presenta el reclamo al Jefe Regional de Ventas y a Nómina: responden por escrito en 5 días laborables.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`comision`,`corte`,`dia 21`,`ajuste`,`nota de credito`],errores_frecuentes:[`Creer que la venta posterior al corte se pierde.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-007`,titulo:`¿Cómo se calcula mi bono de productividad en la planta FRUTAL?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion_variable`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:45,pregunta_canonica:`¿De qué depende el bono mensual de planta?`,variantes_pregunta:[`como sale el bono de planta`,`cuanto es el bono de produccion`,`porque me pagaron menos bono este mes`,`el bono de la linea entra para el decimo?`,`que mide la eficiencia de linea`],respuesta_corta:`El bono de planta es de hasta USD 80,00 al mes y se arma con tres componentes: plan de producción 50% (USD 40), eficiencia de línea 30% (USD 24) y merma bajo el límite 20% (USD 16). Es materia gravada, así que suma para tu décimo, tus fondos de reserva y tus vacaciones.`,respuesta_extendida:`### Los tres componentes

| Componente | Peso | Métrica | Valor objetivo |
|---|---|---|---|
| Cumplimiento del plan de producción | 50% | Cajas producidas ÷ plan del mes | USD 40,00 |
| Eficiencia de línea | 30% | Tiempo productivo ÷ tiempo programado | USD 24,00 |
| Merma bajo el límite | 20% | Merma real ÷ límite autorizado por Calidad | USD 16,00 |

### Ejemplo resuelto

Marlon Zambrano, operario de línea, septiembre 2026: plan 101% (factor 1,00 → 40,00), eficiencia 88% frente a meta de 90% (factor 0,75 → 18,00), merma 1,4% frente a límite de 1,8% (factor 1,00 → 16,00). **Total USD 74,00.**

### Lo importante

Este bono es un bono de eficiencia con carácter de remuneración (parámetro iess_base_calculo), de modo que entra en la base del IESS **y** en la del décimo tercero, los fondos de reserva y el valor de tus vacaciones.

Fuente: Manual de Nómina, sección 2.4. Vigencia 2026-09-16.`,aplica_a:[`produccion`,`operario de linea`,`mantenimiento`,`bodega MP y PT`],condiciones:[`Aplica al personal de la planta FRUTAL de Durán con esquema de bono de productividad.`],parametros_usados:[`iess_base_calculo`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`2.4 Bono de productividad de planta (FRUTAL, Durán)`,articulo:null},calculadora:`calculadora_bono_productividad_planta`,datos_requeridos:[`cajas producidas y plan del mes`,`tiempo productivo y programado`,`merma real y limite autorizado`],siguiente_paso:`Pide a tu supervisor de producción el reporte de los tres indicadores del mes. Si quieres, calculo tu bono con esos datos.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`bono`,`planta`,`frutal`,`productividad`,`merma`,`eficiencia`],errores_frecuentes:[`Creer que el bono de planta no suma para el décimo tercero.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-008`,titulo:`¿Cómo se gana el bono de bodega?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion_variable`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:48,pregunta_canonica:`¿De qué depende el bono mensual de estibadores y auxiliares de bodega?`,variantes_pregunta:[`cuanto es el bono de bodega`,`como gano el bono de despacho`,`que es la ventana de carga`,`me descontaron el bono por un error de picking`,`el bono de bodega suma para el decimo?`],respuesta_corta:`El bono de bodega es de hasta USD 55,00 al mes: 60% por cajas despachadas sin error de picking y 40% por cumplir la ventana de carga (que el camión salga a la hora comprometida). Es materia gravada y suma para tus beneficios.`,respuesta_extendida:`### Composición

| Componente | Peso | Qué mide |
|---|---|---|
| Despacho sin error de picking | 60% | Cajas despachadas correctamente sobre el total |
| Ventana de carga cumplida | 40% | Que el camión salga a la hora comprometida |

Ejemplo: Wilson Chalá, estibador del CD de Quito, alcanzó USD 45,00 en septiembre de 2026.

### Es remuneración

El bono de bodega es materia gravada (parámetro iess_base_calculo). Eso significa que sube tu aporte personal al IESS, pero también sube tu décimo tercero, tus fondos de reserva y el valor de tu día de vacación.

Fuente: Manual de Nómina, sección 2.5. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`estibador`,`auxiliar de bodega y despacho`],condiciones:[`Aplica al personal de bodega y despacho de los centros de distribución y la matriz.`],parametros_usados:[`iess_base_calculo`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`2.5 Bono de bodega`,articulo:null},calculadora:null,datos_requeridos:[`indicadores de picking y ventana de carga del mes`],siguiente_paso:`Pide al jefe de tu CD el reporte de picking y ventana de carga del mes para contrastar tu bono.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`bono`,`bodega`,`estibador`,`picking`,`despacho`],errores_frecuentes:[`Creer que el bono de bodega es discrecional del jefe: se liquida contra indicadores registrados.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-009`,titulo:`Mi rol tiene un error: ¿cómo lo reclamo y hasta cuándo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`rol_de_pagos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:160,pregunta_canonica:`¿Qué hago si un valor de mi rol de pagos está mal?`,variantes_pregunta:[`mi rol esta mal a quien reclamo`,`me pagaron de menos que hago`,`cuanto tiempo tengo para reclamar el rol`,`ya pasaron 30 dias puedo reclamar todavia`,`me descontaron algo que no reconozco`,`reclamo de rol cuanto se demoran`],respuesta_corta:`Repórtalo a Nómina indicando la línea exacta que crees equivocada: te responden por escrito en 5 días hábiles y, si el valor es a tu favor, se acredita en el rol del mes siguiente. El plazo interno de 30 días es de gestión: NO extingue tu derecho.`,respuesta_extendida:`### El procedimiento

| Paso | Qué hacer | Plazo |
|---|---|---|
| 1 | Revisa tu rol apenas se publique y compáralo con tus marcaciones, tu autorización de horas extra y tu liquidación de comisiones | Primeros 5 días hábiles del mes |
| 2 | Reporta el caso a Nómina o pregúntame a mí, indicando **la línea exacta** y por qué crees que está mal | Dentro de 30 días desde la acreditación (plazo interno de gestión) |
| 3 | Nómina revisa y responde por escrito | 5 días hábiles |
| 4 | Si hay valor a tu favor, se acredita en el rol siguiente o en pago extraordinario si el monto lo justifica | Según el monto |
| 5 | Si no estás de acuerdo, puedes elevar el caso a la Jefatura de Nómina y luego a la Gerencia de RR.HH. | — |

### Lo que nadie te puede decir

El plazo interno de 30 días existe para que el reclamo se resuelva rápido y con la información fresca. **No extingue tu derecho.** Los derechos laborales tienen un plazo de prescripción fijado por el Código del Trabajo, y este átomo no lo enuncia porque no existe un parámetro registrado que lo respalde. Nadie en VERTIENTE puede decirte que "ya pasaron los 30 días y perdiste tu derecho": eso sería falso.

Además, si se detecta un error a tu favor, se corrige en el rol del mes siguiente como máximo, **sin que tengas que insistir** (Reglamento Interno, Art. 45).

Fuente: Manual de Nómina, sección 15.4, y Reglamento Interno, Art. 45. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si el reclamo se convierte en un conflicto individual en curso con una jefatura, la consulta pasa a zona roja y se escala a Relaciones Laborales.`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`15.4 Qué hacer si su rol tiene un error`,articulo:null},calculadora:null,datos_requeridos:[`mes del rol`,`linea o rubro en disputa`,`motivo de la discrepancia`],siguiente_paso:`Dime qué línea de qué mes crees equivocada y abro el caso con Nómina y Compensaciones; te responden por escrito en 5 días hábiles.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`reclamo`,`error de rol`,`nomina`,`plazo`,`prescripcion`],errores_frecuentes:[`Creer que pasados 30 días ya no se puede reclamar.`,`Reclamar sin identificar la línea exacta, lo que alarga la revisión.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-010`,titulo:`¿Cómo cambio la cuenta donde me depositan el sueldo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`tramites`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:29,pregunta_canonica:`¿Qué necesito para actualizar mi cuenta bancaria de pago?`,variantes_pregunta:[`quiero cambiar mi banco`,`como actualizo mi cuenta bancaria`,`pueden pagarme en la cuenta de mi esposa`,`cambie de banco a quien aviso`,`hasta que dia puedo cambiar la cuenta`],respuesta_corta:`Presenta el formulario de actualización de datos bancarios firmado más un certificado bancario, antes del día 20. La cuenta debe estar a tu nombre: VERTIENTE no acredita el sueldo en la cuenta de un tercero, ni de un familiar.`,respuesta_extendida:`### Los cuatro pasos

1. Presenta el **formulario de actualización de datos bancarios** firmado.
2. Adjunta un **certificado bancario**, libreta o estado de cuenta donde consten tu nombre y el número de cuenta.
3. La cuenta debe estar **a tu nombre**. La remuneración se paga al trabajador: no se acredita a terceros, ni siquiera a un familiar (Reglamento Interno, Art. 43).
4. Preséntalo **antes del día 20** (corte de novedades). Si lo entregas después, el cambio aplica desde el rol del mes siguiente y este mes se acredita en la cuenta anterior.

Fuente: Manual de Nómina, sección 15.3, y Reglamento Interno, Art. 43. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Presentado después del día 20, el cambio aplica desde el mes siguiente.`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`15.3 Cómo actualizar su cuenta bancaria`,articulo:null},calculadora:null,datos_requeridos:[`numero de cuenta nueva`,`certificado bancario`],siguiente_paso:`Entrega el formulario y el certificado bancario en tu instalación antes del día 20 del mes.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`cuenta bancaria`,`tramite`,`actualizacion de datos`,`dia 20`],errores_frecuentes:[`Pedir el depósito en la cuenta del cónyuge o de un familiar.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-011`,titulo:`¿Pueden retenerme el sueldo mientras investigan un faltante?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:6,pregunta_canonica:`¿La empresa puede retener mi remuneración o mi liquidación por un faltante o un proceso disciplinario?`,variantes_pregunta:[`me quieren retener el sueldo por un faltante`,`pueden no pagarme hasta que devuelva el equipo`,`me congelaron el pago por una investigacion`,`me descuentan el faltante de cobranza?`,`pueden retener mi liquidacion`],respuesta_corta:`No. Está prohibido retener, diferir o condicionar el pago de tu remuneración, tus beneficios de ley o tu liquidación por cualquier motivo, incluido un proceso disciplinario en curso, un faltante en investigación o la falta de entrega de un bien.`,respuesta_extendida:`### La regla

El Art. 54 del Reglamento Interno lo dice sin matices: esos asuntos se resuelven por los procedimientos de uso de bienes y de régimen disciplinario, **nunca reteniendo dinero del colaborador**.

### Tampoco se descuenta un faltante por decisión unilateral

Está expresamente prohibido descontar del rol faltantes de inventario, de producto o de cobranza determinados de manera unilateral y sin procedimiento disciplinario previo (Art. 46). Un descuento así debe reversarse.

### Y si no devolviste un activo

La no devolución de un terminal de preventa, un lector o una credencial se gestiona como tema de custodia de activos por la vía que corresponda, **no** como descuento automático del finiquito.

Fuente: Reglamento Interno, Art. 46 y 54, y Manual de Nómina, sección 13.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si ya existe un proceso disciplinario abierto o un conflicto en curso, la consulta pasa a zona roja y se escala a Relaciones Laborales y Disciplina.`],parametros_usados:[`descuentos_rol_limite`,`liquidacion_plazo_pago`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 54`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si te retuvieron un pago, repórtalo a Nómina y Compensaciones de inmediato. Si además hay un proceso disciplinario en curso, te conecto con Relaciones Laborales.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`retencion`,`faltante`,`descuento indebido`,`liquidacion`,`derechos`],errores_frecuentes:[`Aceptar que se retenga el sueldo "hasta que se aclare" un faltante.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-012`,titulo:`¿Qué es el salario digno y me corresponde?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:14,pregunta_canonica:`¿Qué es la compensación por salario digno?`,variantes_pregunta:[`que es el salario digno`,`me toca compensacion de salario digno`,`cuanto es el salario digno 2026`,`como se calcula el salario digno`],respuesta_corta:`Si la empresa tuvo utilidades y tus ingresos anuales computables no alcanzan el umbral del salario digno, te corresponde la compensación económica. El valor exacto no lo puedo darte: el parámetro salario_digno no tiene valor cierto para 2026 y no invento cifras.`,respuesta_extendida:`### Qué es

El salario digno es un umbral anual de ingresos. Cuando la Compañía ha tenido utilidades y un colaborador no lo alcanza sumando todos sus ingresos anuales computables, se le paga una compensación económica que cubre la diferencia.

### Por qué no te doy el número

El parámetro salario_digno **no registra un valor cierto para 2026**, y el listado exacto de componentes computables tampoco está cerrado. VERTIENTE no enuncia una cifra que no puede respaldar: el cálculo se realiza contra el valor que publique la autoridad.

Esto no te quita nada. Si la compensación te corresponde, Nómina la calcula y la paga: no depende de que tú la reclames.

Fuente: Reglamento Interno, Art. 55. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Solo procede cuando la Compañía tuvo utilidades en el ejercicio.`,`El valor del umbral debe verificarse contra la publicación oficial.`],parametros_usados:[`salario_digno`,`sbu`,`utilidades_porcentaje_total`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 55`},calculadora:null,datos_requeridos:[`ingresos anuales computables`,`resultado del ejercicio`],siguiente_paso:`Consulta con Nómina y Compensaciones el cálculo del ejercicio. Si te corresponde, se paga sin que tengas que reclamarlo.`,escalamiento:{requerido:!1,rol:`Jefatura de Nómina y Compensaciones`,motivo:`El valor del umbral debe verificarse contra la publicación oficial antes de comunicarlo.`},etiquetas:[`salario digno`,`compensacion`,`utilidades`,`umbral`],errores_frecuentes:[`Confundir el salario digno con el Salario Básico Unificado: son cosas distintas.`],confianza:`baja`,requiere_verificacion_legal:!0},{id:`KB-013`,titulo:`¿Cuánto vale mi hora?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:244,pregunta_canonica:`¿Cómo se obtiene el valor de mi hora ordinaria?`,variantes_pregunta:[`cuanto vale mi hora`,`como sacan el valor de la hora`,`porque dividen para 240`,`valor hora con sueldo de 490`,`cual es mi valor hora ordinaria`,`kmo calculo mi hora`],respuesta_corta:`Valor de tu hora = remuneración mensual ÷ 240 (parámetro valor_hora_ordinaria_divisor). Con un sueldo de USD 490,00, tu hora ordinaria vale USD 2,0417. Dime tu remuneración mensual y te lo calculo exacto.`,respuesta_extendida:`### La fórmula

> Valor de la hora ordinaria = remuneración mensual ÷ 240

El divisor de 240 (parámetro valor_hora_ordinaria_divisor) sale de 30 días × 8 horas.

| Remuneración mensual | Valor hora ordinaria |
|---|---|
| USD 470,00 | 1,9583 |
| USD 490,00 | 2,0417 |
| USD 505,00 | 2,1042 |
| USD 512,00 | 2,1333 |
| USD 540,00 | 2,2500 |

En el cálculo real se opera con el valor sin redondear y se redondea solo el total del rubro.

### Dos advertencias honestas

1. El divisor 240 es una **convención de nómina**, no una cifra que la ley enuncie con ese número. Algunas empresas usan 240, otras 160 y otras el número real de horas del mes. El parámetro está marcado para verificación y VERTIENTE usa 240 en toda la operación para que los recargos sean reproducibles.
2. La base es la **remuneración fija** (sueldo base más rubros fijos del cargo), sin los componentes variables del mes. Esta es una política interna y **no hay parámetro que la respalde**: existe criterio de que los variables habituales deberían integrar la base, y está reportado como pendiente de verificación.

Fuente: Manual de Nómina, sección 4.2, y Reglamento Interno, Art. 41. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El divisor y la base de cálculo están pendientes de verificación.`],parametros_usados:[`valor_hora_ordinaria_divisor`,`jornada_horas_diarias`,`recargos_jornada`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`4.2 Cómo se obtiene el valor de la hora`,articulo:null},calculadora:`calculadora_valor_hora`,datos_requeridos:[`remuneracion mensual fija`],siguiente_paso:`Dime tu remuneración mensual y te doy tu valor hora y cuánto vale cada tipo de hora extra.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`valor hora`,`divisor 240`,`hora ordinaria`,`calculo`],errores_frecuentes:[`Dividir el sueldo para las horas realmente trabajadas en el mes en vez de usar el divisor de nómina.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-014`,titulo:`Me quedé después de mi turno: ¿cuánto me pagan esas horas?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:306,pregunta_canonica:`¿Cómo se pagan las horas suplementarias diurnas?`,variantes_pregunta:[`me quede 2 horas mas cuanto me pagan`,`cuanto es la hora extra diurna`,`el 50% de recargo como se calcula`,`trabaje hasta las 7 de la noche que me toca`,`hora suplementaria cuanto vale`,`me kede terminando la carga cuanto cobro`],respuesta_corta:`Se pagan con recargo del 50%: factor 1,50 sobre tu valor hora. Con sueldo de USD 490,00, dos horas suplementarias diurnas son 2 × (490 ÷ 240) × 1,50 = USD 6,13. Dime tu sueldo y cuántas horas y te lo calculo.`,respuesta_extendida:`### Cuándo una hora es suplementaria diurna

Cuando la trabajas **después de terminada tu jornada**, en día laborable, entre las 06h00 y las 24h00. Recargo del 50% (parámetro recargo_hora_suplementaria_diurna), factor de pago 1,50.

### Ejemplo resuelto

Wilson Chalá, estibador del CD de Quito, remuneración fija USD 490,00. El martes 15 de septiembre de 2026 se quedó de 17h00 a 19h00 para terminar la carga de un camión.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Valor hora | 490,00 ÷ 240 | 2,041666… |
| 2. Factor | Suplementaria diurna | 1,50 |
| 3. Cálculo | 2 × 2,041666… × 1,50 | **USD 6,13** |
| 4. Topes | 2 h ≤ 4 diarias y ≤ 12 semanales | Dentro de norma |

En su rol aparece como "horas suplementarias diurnas: 2,00 h — USD 6,13".

### Lo que suma a tu favor

Ese valor **es materia gravada**: sube tu aporte personal al IESS, pero también sube tu décimo tercero, tus fondos de reserva y el valor de tu día de vacación.

Fuente: Manual de Nómina, sección 4.4 (ejemplo 5), y Reglamento Interno, Art. 41. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`No aplica si la hora cae entre 24h00 y 06h00: esa es suplementaria nocturna al 100%.`,`No aplica en sábado, domingo, día de descanso o feriado: esa es hora extraordinaria al 100%.`],parametros_usados:[`recargo_hora_suplementaria_diurna`,`valor_hora_ordinaria_divisor`,`horas_suplementarias_tope_diario`,`horas_suplementarias_tope_semanal`,`iess_base_calculo`,`recargos_jornada`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`4.4 Tres ejemplos resueltos — ejemplo 5`,articulo:null},calculadora:`calculadora_horas_extra`,datos_requeridos:[`remuneracion mensual fija`,`numero de horas`,`fecha y rango horario en que se trabajaron`],siguiente_paso:`Dime tu sueldo, cuántas horas y en qué día y horario, y te calculo el valor exacto que debe aparecer en tu rol.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`horas suplementarias`,`recargo 50`,`sobretiempo`,`diurna`,`calculo`],errores_frecuentes:[`Llamar "hora extra" a todo: la suplementaria diurna paga 1,50 y la extraordinaria 2,00; no son lo mismo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-015`,titulo:`Trabajé de madrugada después de mi turno: ¿se paga distinto?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:174,pregunta_canonica:`¿Cómo se paga la hora suplementaria nocturna?`,variantes_pregunta:[`trabaje de madrugada cuanto me pagan`,`hora extra despues de medianoche`,`cargue camion a las 3am cuanto es`,`la suplementaria nocturna es el doble?`,`cuanto es el recargo de 24h00 a 06h00`],respuesta_corta:`Recargo del 100%: factor 2,00 sobre tu valor hora. Aplica a la hora trabajada después de tu jornada, en día laborable, entre las 24h00 y las 06h00. Con sueldo de USD 470,00 esa hora vale USD 3,92.`,respuesta_extendida:`### La regla

La hora suplementaria nocturna es la que trabajas **después de terminada tu jornada**, en día laborable, entre las 24h00 y las 06h00. Recargo del 100% (parámetro recargo_hora_suplementaria_nocturna), factor 2,00.

Es el caso típico de la carga de camiones de madrugada antes de la salida de ruta, cuando el colaborador ya cumplió su jornada ordinaria.

| Base | Valor hora | Hora suplementaria nocturna |
|---|---|---|
| USD 470,00 | 1,9583 | **3,92** |
| USD 490,00 | 2,0417 | **4,08** |

### No confundir con el recargo nocturno del 25%

Si tu jornada **ordinaria** ya está pactada de noche (turno C de planta, bodega de 02h00 a 10h00), no estás haciendo hora suplementaria: estás haciendo tu jornada normal con recargo del 25%. Son cosas distintas y **nunca se acumulan sobre la misma hora**.

Fuente: Manual de Nómina, sección 4.1, y Reglamento Interno, Art. 33 y 41. Vigencia 2026-09-16.`,aplica_a:[`todos`,`logistica`,`produccion`],condiciones:[`Solo si ya cumpliste tu jornada ordinaria ese día.`,`Si tu jornada ordinaria ya es nocturna, aplica el recargo del 25%, no este.`],parametros_usados:[`recargo_hora_suplementaria_nocturna`,`valor_hora_ordinaria_divisor`,`jornada_nocturna_rango`,`recargo_jornada_nocturna`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`4.1 Los conceptos, sin confundirlos`,articulo:null},calculadora:`calculadora_horas_extra`,datos_requeridos:[`remuneracion mensual fija`,`numero de horas`,`horario exacto trabajado`,`horario de tu jornada ordinaria`],siguiente_paso:`Dime tu horario de jornada y el horario que trabajaste, y te digo bajo qué concepto se paga cada hora.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`hora suplementaria nocturna`,`recargo 100`,`madrugada`,`bodega`],errores_frecuentes:[`Confundir la hora suplementaria nocturna (100%) con el recargo de jornada nocturna (25%).`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-016`,titulo:`Trabajé sábado, domingo o feriado: ¿cuánto me pagan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:287,pregunta_canonica:`¿Cómo se paga la hora extraordinaria en día de descanso o feriado?`,variantes_pregunta:[`trabaje el domingo cuanto me pagan`,`me llamaron el feriado cuanto es`,`la hora del sabado se paga doble?`,`inventario el domingo cuanto cobro`,`si el feriado cae domingo me pagan cuadruple?`,`trabaje el finde cuanto me toka`],respuesta_corta:`Recargo del 100%: factor 2,00 sobre tu valor hora. Seis horas un domingo con sueldo de USD 512,00 son 6 × (512 ÷ 240) × 2,00 = USD 25,60. Domingo y feriado NO se suman: una hora, un solo concepto.`,respuesta_extendida:`### Cuándo una hora es extraordinaria

Cuando la trabajas en **sábado, domingo, día de descanso obligatorio o feriado**, siendo esos tus días de descanso. Recargo del 100% (parámetro recargo_hora_extraordinaria), factor 2,00.

### Ejemplo resuelto

Digna Macías, auxiliar de bodega del CD de Manta, remuneración USD 512,00. Trabajó 6 horas el domingo 24 de mayo de 2026, que además es feriado nacional.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Valor hora | 512,00 ÷ 240 | 2,133333… |
| 2. Factor | Hora extraordinaria | 2,00 |
| 3. Cálculo | 6 × 2,133333… × 2,00 | **USD 25,60** |
| 4. No acumulación | Domingo + feriado = un solo concepto, factor 2,00 | Confirmado |

### La regla de no acumulación es absoluta

Una misma hora se paga bajo **un solo** concepto. Nunca se suman dos recargos sobre la misma hora. Un domingo que además es feriado se paga al factor 2,00, no al 4,00.

### Advertencia sobre feriados

La tabla feriados_nacionales_2026 está marcada para verificación: la regla de traslado de feriados y los **feriados locales** de cada ciudad no constan en ella y sí generan recargo para el personal de esa localidad. Antes de liquidar un recargo por feriado hay que verificar el calendario oficial de tu ciudad.

Fuente: Manual de Nómina, sección 4.4 (ejemplo 7), y Reglamento Interno, Art. 42. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Aplica solo si ese día era tu día de descanso. Si tu turno rotativo te asigna el domingo como día laborable, se rige por la programación del turno.`,`Los feriados locales de tu ciudad deben verificarse en el calendario oficial.`],parametros_usados:[`recargo_hora_extraordinaria`,`valor_hora_ordinaria_divisor`,`descanso_semanal_horas`,`feriados_nacionales_2026`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`4.4 Tres ejemplos resueltos — ejemplo 7`,articulo:null},calculadora:`calculadora_horas_extra`,datos_requeridos:[`remuneracion mensual fija`,`numero de horas`,`fecha trabajada`,`dia de descanso asignado`],siguiente_paso:`Dime la fecha y las horas que trabajaste y te calculo el recargo que corresponde.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`hora extraordinaria`,`domingo`,`feriado`,`recargo 100`,`dia de descanso`],errores_frecuentes:[`Creer que domingo y feriado suman recargos y se paga al 400%.`,`Creer que el feriado local no genera recargo.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-017`,titulo:`Trabajo de noche: ¿me pagan el doble?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`jornada_nocturna`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:134,pregunta_canonica:`¿Cómo se paga la jornada nocturna ordinaria?`,variantes_pregunta:[`el turno de noche se paga doble?`,`cuanto es el recargo nocturno`,`trabajo de 21 a 5 cuanto me toca`,`el 25% nocturno como se calcula`,`turno C de planta cuanto paga mas`,`x q me pagan solo 25% si trabajo de noche`],respuesta_corta:`No es el doble: es tu jornada normal con un recargo del 25% sobre esas horas (parámetro recargo_jornada_nocturna). Con sueldo de USD 500,00 y 96 horas nocturnas al mes, el recargo es 96 × (500 ÷ 240) × 0,25 = USD 50,00 adicionales a tu sueldo.`,respuesta_extendida:`### La regla

Se considera jornada nocturna la comprendida entre las 19h00 y las 06h00 (parámetro jornada_nocturna_rango). Cuando tu jornada **ordinaria** está pactada dentro de ese rango, se paga con un recargo del 25% sobre la remuneración de la jornada diurna (parámetro recargo_jornada_nocturna), factor 1,25.

### Ejemplo resuelto

Marlon Zambrano, operario de línea de FRUTAL en Durán, remuneración fija USD 500,00, jornada ordinaria de 21h00 a 05h00. En septiembre de 2026 cubrió 12 turnos nocturnos de 8 horas.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Horas nocturnas | 12 turnos × 8 h | 96 horas |
| 2. Valor hora | 500,00 ÷ 240 | 2,083333… |
| 3. Recargo | 96 × 2,083333… × 0,25 | **USD 50,00** |
| 4. Verificación | 96 × 2,083333… × 1,25 = 250,00, de los cuales 200,00 ya están en su sueldo | 200,00 + 50,00 = 250,00 |

En su rol aparece la línea "recargo de jornada nocturna: 96,00 h — USD 50,00", **adicional** a su sueldo base.

### Si además te quedas más horas

Si Marlon se quedara de 05h00 a 07h00, esas dos horas serían **suplementarias**, se liquidan por separado y nunca se suman el 25% nocturno y el 50% suplementario sobre la misma hora.

### Quién tiene horas nocturnas en VERTIENTE

El turno C de planta (22h00 a 06h00), la parte del turno B posterior a las 19h00, y las horas anteriores a las 06h00 de bodega y despacho de madrugada (jornadas de 02h00 a 10h00 y de 04h00 a 12h00).

Fuente: Manual de Nómina, sección 4.4 (ejemplo 6), y Reglamento Interno, Art. 31, 32 y 33. Vigencia 2026-09-16.`,aplica_a:[`produccion`,`logistica`,`operario de linea`,`estibador`,`auxiliar de bodega y despacho`],condiciones:[`Solo aplica a la jornada ordinaria pactada dentro del rango nocturno.`,`No se acumula con el recargo de hora suplementaria sobre la misma hora.`],parametros_usados:[`recargo_jornada_nocturna`,`jornada_nocturna_rango`,`valor_hora_ordinaria_divisor`,`recargos_jornada`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`4.4 Tres ejemplos resueltos — ejemplo 6`,articulo:null},calculadora:`calculadora_horas_extra`,datos_requeridos:[`remuneracion mensual fija`,`horario de la jornada`,`numero de horas dentro del rango nocturno en el mes`],siguiente_paso:`Dime tu horario de turno y cuántos turnos cubriste en el mes y te calculo el recargo nocturno que debe aparecer en tu rol.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`jornada nocturna`,`recargo 25`,`turno`,`planta`,`madrugada`],errores_frecuentes:[`Creer que trabajar de noche se paga al doble.`,`Sumar el 25% nocturno y el 50% suplementario sobre la misma hora.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-018`,titulo:`¿Cuántas horas extra puedo hacer como máximo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:116,pregunta_canonica:`¿Cuáles son los topes de horas suplementarias?`,variantes_pregunta:[`cuantas horas extra puedo hacer al dia`,`hay tope de horas extra a la semana`,`me hicieron pasar del tope que hago`,`puedo hacer 6 horas extra en un dia`,`el tope de 12 horas de quien es la culpa`],respuesta_corta:`Máximo 4 horas suplementarias al día y 12 a la semana (parámetros horas_suplementarias_tope_diario y horas_suplementarias_tope_semanal). Si se pasó del tope, la infracción es del empleador, no tuya, y las horas trabajadas se pagan igual.`,respuesta_extendida:`### Los topes

| Regla | Valor | Parámetro |
|---|---|---|
| Jornada máxima ordinaria diaria | 8 horas | jornada_horas_diarias |
| Jornada máxima ordinaria semanal | 40 horas | jornada_horas_semanales |
| Descanso semanal obligatorio | 48 horas seguidas | descanso_semanal_horas |
| Tope de horas suplementarias por día | 4 horas | horas_suplementarias_tope_diario |
| Tope de horas suplementarias por semana | 12 horas | horas_suplementarias_tope_semanal |

### De quién es el problema si se pasa

**Superar el tope es una infracción del empleador, no del colaborador.** Si llegas al tope semanal, el problema es de planificación de tu jefatura. El supervisor que planifique por encima del tope incurre en falta grave (Reglamento Interno, Art. 39).

Y una regla que protege directamente tu bolsillo: **nadie puede pedirte que "no registres" horas** para no pasarse del tope. Eso es una falta grave y se reporta a Relaciones Laborales.

### Ninguna meta puede exigir pasarse del tope

El Art. 51 del Reglamento Interno lo dice expresamente: ninguna meta comercial puede fijarse de modo que su cumplimiento exija trabajar por encima de los topes de jornada.

Fuente: Manual de Nómina, sección 4.3, y Reglamento Interno, Art. 39 y 51. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los adolescentes trabajadores tienen jornada máxima de 6 horas diarias y 30 semanales (parámetros jornada_adolescentes_horas_diarias y jornada_adolescentes_horas_semanales).`],parametros_usados:[`horas_suplementarias_tope_diario`,`horas_suplementarias_tope_semanal`,`jornada_horas_diarias`,`jornada_horas_semanales`,`descanso_semanal_horas`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 39`},calculadora:null,datos_requeridos:[`horas suplementarias acumuladas en la semana`],siguiente_paso:`Si tu programación te lleva por encima del tope, coméntalo con tu jefatura de instalación. Si te pidieron no registrar horas, dímelo: eso lo tiene que ver Relaciones Laborales.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`topes`,`horas extra`,`jornada`,`planificacion`,`infraccion`],errores_frecuentes:[`Creer que pasarse del tope es culpa del trabajador y que por eso esas horas no se pagan.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-019`,titulo:`Hice horas extra sin autorización previa: ¿me las pagan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:78,pregunta_canonica:`¿Se pagan las horas suplementarias que no tuvieron autorización previa?`,variantes_pregunta:[`me quede sin autorizacion me pagan?`,`mi jefe no tramito el sobretiempo`,`como se autorizan las horas extra`,`no firmaron mi autorizacion de horas`,`trabaje de mas y no lo registraron`],respuesta_corta:`Sí, se pagan igual. Si trabajaste horas adicionales por orden de tu jefatura y esa jefatura no tramitó la autorización previa, las horas se liquidan con el control de asistencia y la omisión se trata como falta de la jefatura, no tuya.`,respuesta_extendida:`### El procedimiento correcto

| Paso | Responsable | Cuándo |
|---|---|---|
| 1. Solicitud del sobretiempo con motivo, personas, fecha y horas | Jefatura inmediata | Antes de que ocurra |
| 2. Aprobación o negativa | Jefe de CD, Jefe de Planta o Gerente de área | Antes de que ocurra |
| 3. Marcación de entrada y salida real | Colaborador | En el momento |
| 4. Validación de horas realmente trabajadas | Jefatura inmediata | Dentro de 24 horas |
| 5. Liquidación en el rol del mes | Nómina y Compensaciones | Cierre de nómina |

La hora se paga sobre lo **marcado**, no sobre lo estimado.

### La regla que te protege

Las horas trabajadas sin autorización previa **no se pierden**: se liquidan igual si el control de asistencia demuestra que se trabajaron, y se abre un caso de gestión contra la jefatura que no cumplió el procedimiento. La formalidad protege al colaborador; no se usa en su contra.

VERTIENTE no usa el procedimiento interno como excusa para no pagar trabajo real.

Fuente: Manual de Nómina, sección 4.3, y Reglamento Interno, Art. 40. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Debe existir respaldo en el control de asistencia (biométrico, app o GPS del vehículo).`],parametros_usados:[`recargo_hora_suplementaria_diurna`,`recargo_hora_extraordinaria`,`horas_suplementarias_tope_diario`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 40`},calculadora:`calculadora_horas_extra`,datos_requeridos:[`fecha y horario trabajado`,`registro de marcacion`,`jefatura que ordeno el sobretiempo`],siguiente_paso:`Reporta las horas a Nómina indicando fecha, horario y quién te lo pidió. Con tu marcación, se liquidan.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`autorizacion previa`,`sobretiempo`,`horas no registradas`,`derechos`],errores_frecuentes:[`Creer que sin el formulario de autorización las horas se pierden.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-020`,titulo:`Hice horas extra el día 26 y no salieron en el rol`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:120,pregunta_canonica:`¿Por qué no me pagaron las horas extra de fin de mes?`,variantes_pregunta:[`no me pagaron mis horas extra`,`mis horas del 26 no salieron`,`porque no aparecen mis horas en el rol`,`cuando pagan las horas del fin de mes`,`se perdieron mis horas extra?`],respuesta_corta:`No se perdieron: el corte de novedades es el día 20, así que las horas del 21 en adelante se pagan en el rol del mes siguiente, con el detalle del mes al que corresponden.`,respuesta_extendida:`### La causa real

La causa número uno de "no me pagaron mis horas extra" no es un error de Nómina: es una novedad que la jefatura cargó después del día 20.

| Día | Hito |
|---|---|
| 20 | **Corte de novedades.** Último día para cargar horas extra, licencias, cambios de cargo, ingresos, salidas y comisiones |
| 23 | Cierre de nómina: los valores se congelan |
| Último día hábil | Acreditación |

### Qué debes verificar

1. Que tu jefatura haya validado las horas dentro de las 24 horas siguientes (Reglamento Interno, Art. 40, paso 4).
2. Que tu marcación esté registrada.

Si las horas son de antes del día 20 y aun así no aparecieron, eso sí es un caso para Nómina: te responden por escrito en 5 días hábiles y, si el valor es a tu favor, se acredita en el rol siguiente.

Fuente: Manual de Nómina, secciones 14.1 y 15.4. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si las horas son anteriores al día 20 y no aparecen, corresponde reclamo a Nómina.`],parametros_usados:[`recargo_hora_suplementaria_diurna`,`recargo_hora_extraordinaria`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`14.1 El ciclo mensual`,articulo:null},calculadora:null,datos_requeridos:[`fecha en que se trabajaron las horas`,`mes del rol revisado`],siguiente_paso:`Si las horas son posteriores al 20, espera el rol del mes siguiente. Si son anteriores, dímelo y abro el caso con Nómina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`horas extra`,`dia 20`,`corte de novedades`,`rol`],errores_frecuentes:[`Creer que las horas cargadas después del corte se pierden.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-021`,titulo:`Me pidieron no registrar las horas que trabajé`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`roja`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:11,pregunta_canonica:`¿Qué hago si mi jefatura me pide no marcar o no registrar horas trabajadas?`,variantes_pregunta:[`mi jefe me dijo que no marque las horas`,`me obligan a salir marcado y seguir trabajando`,`nos piden no reportar el sobretiempo`,`me dijeron que no ponga las horas para no pasarnos del tope`,`trabajamos sin registrar y no nos pagan`],respuesta_corta:`Registré tu caso y lo derivé a la Jefatura de Relaciones Laborales y Disciplina; te contactan en 3 días hábiles. No voy a opinar sobre lo que me cuentas, pero sí te digo una cosa cierta: las horas efectivamente trabajadas se pagan, con registro o sin él.`,respuesta_extendida:`### Por qué no lo resuelvo yo

Lo que describes involucra la conducta de una jefatura concreta. Eso lo ve una persona, no yo: no califico los hechos, no pido pruebas ni nombres, y no adelanto consecuencias.

### Lo que sí es información y te corresponde saber

- Pedir a un colaborador que no registre horas para no superar el tope es una **falta grave** según el Manual de Nómina, sección 4.3.
- Superar el tope de horas suplementarias es una infracción del **empleador**, no del colaborador (Reglamento Interno, Art. 39).
- Las horas trabajadas sin autorización previa **se pagan igual** si el control de asistencia demuestra que se trabajaron (Art. 40).

### Canal y plazo

| Rol receptor | Plazo comprometido |
|---|---|
| Jefatura de Relaciones Laborales y Disciplina | 3 días hábiles |
| Copia: Generalista de RR.HH. de tu zona | — |

Fuente: Manual de Nómina, sección 4.3; Reglamento Interno, Art. 39 y 40; Alcance del consultor virtual, matriz de escalamiento 5.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si además hay represalia, acoso o discriminación, el caso se deriva al Comité de Ética con contacto humano en 48 horas.`],parametros_usados:[`horas_suplementarias_tope_semanal`,`horas_suplementarias_tope_diario`,`recargo_hora_suplementaria_diurna`],fuente:{documento:`docs/09-alcance-consultor-virtual.md`,seccion:`5.5 Matriz de escalamiento de zona roja`,articulo:null},calculadora:null,datos_requeridos:[`instalacion`,`numero de caso generado`],siguiente_paso:`Quedó registrado con número de caso. Relaciones Laborales y Disciplina te contacta en 3 días hábiles. Si prefieres otra instancia o un canal reservado, dímelo y te lo doy.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Conflicto individual en curso con una jefatura e indicio de práctica irregular de registro de jornada. VERA no opina sobre el fondo.`},etiquetas:[`escalamiento`,`zona roja`,`registro de jornada`,`relaciones laborales`,`marcacion`],errores_frecuentes:[`Creer que si no quedó marcado, la hora no existe y no se puede pagar.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-022`,titulo:`¿Cómo sé si un día es feriado y me pagan recargo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`horas_extra`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:20,pregunta_canonica:`¿Qué días son feriado en 2026 y cómo se paga trabajar en feriado?`,variantes_pregunta:[`que feriados hay este año`,`el feriado de mi ciudad cuenta?`,`trabajar en feriado como se paga`,`con cuanto tiempo me avisan si trabajo feriado`,`los feriados locales dan recargo?`],respuesta_corta:`Los feriados nacionales están en la tabla feriados_nacionales_2026 y trabajar en feriado que es tu día de descanso se paga al factor 2,00. Ojo: los feriados LOCALES de tu ciudad no constan en esa tabla y sí generan recargo; hay que verificarlos en el calendario oficial.`,respuesta_extendida:`### Cómo se paga

El trabajo en feriado, cuando ese es tu día de descanso, se paga con el recargo de hora extraordinaria (parámetro recargo_hora_extraordinaria), factor 2,00.

La programación de trabajo en feriado se comunica con **al menos siete días de anticipación**, salvo emergencia operativa debidamente motivada (Reglamento Interno, Art. 42).

### La advertencia que importa

La tabla feriados_nacionales_2026 está marcada verificar_antes_de_produccion por tres cosas:

1. La **regla de traslado** de feriados que caen martes, miércoles, jueves, sábado o domingo.
2. Los feriados **adicionales o puentes** que declare el Ejecutivo.
3. Los **feriados locales** de Guayaquil, Durán, Quito, Cuenca, Ambato, Manta, Machala, Santo Domingo, Loja, Quevedo e Ibarra, que no constan en la tabla y **sí generan recargo** para el personal de esa localidad.

Por eso, antes de liquidar un recargo por feriado, hay que verificar el calendario oficial de la ciudad de tu instalación.

Fuente: Manual de Nómina, sección 4.4, y Reglamento Interno, Art. 42. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El recargo aplica cuando el feriado es tu día de descanso.`,`Los feriados locales deben verificarse en el calendario oficial de tu ciudad.`],parametros_usados:[`feriados_nacionales_2026`,`recargo_hora_extraordinaria`,`descanso_semanal_horas`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 42`},calculadora:`calculadora_horas_extra`,datos_requeridos:[`fecha trabajada`,`ciudad de la instalacion`,`dia de descanso asignado`],siguiente_paso:`Dime la fecha y tu instalación y reviso si es feriado nacional. Para el feriado local, confirma con tu jefe de CD el calendario oficial de la ciudad.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`feriado`,`recargo`,`calendario`,`feriado local`],errores_frecuentes:[`Suponer que el feriado local de la ciudad no da recargo porque no está en la tabla nacional.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-023`,titulo:`¿Cuánto me toca de décimo tercero y cuándo lo pagan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_tercero`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:235,pregunta_canonica:`¿Cómo se calcula mi décima tercera remuneración y en qué fecha se paga?`,variantes_pregunta:[`cuanto me toca de decimo tercero`,`cuando pagan el bono navideño`,`el decimo tercero es un sueldo?`,`como sacan el decimo tercero`,`kuanto cobro de decimo en diciembre`,`mi decimo incluye las comisiones?`],respuesta_corta:`Tu décimo tercero es un doceavo de TODO lo que percibiste como remuneración entre el 2025-12-01 y el 2026-11-30, incluidas comisiones, bonos y horas extra. Se paga hasta el 2026-12-24. Dime tus remuneraciones del período y te lo calculo.`,respuesta_extendida:`### La fórmula

> Décimo tercero = suma de todo lo percibido como remuneración en el período ÷ 12

| Dato | Valor | Parámetro |
|---|---|---|
| Fórmula | 1/12 de lo percibido por remuneraciones | decimo_tercero_formula |
| Período vigente | 2025-12-01 a 2026-11-30 | decimo_tercero_periodo |
| Fecha límite de pago | 2026-12-24 | decimo_tercero_fecha_pago |
| ¿Se puede mensualizar? | Sí, a tu elección | decimo_tercero_mensualizacion |
| ¿Paga aporte al IESS? | No | iess_base_calculo |

### Ejemplo resuelto

Jefferson Quimí, prevendedor de Guayaquil. En el período percibió USD 6.240,00 de sueldo base y USD 3.200,00 de comisiones: total **USD 9.440,00**.

> 9.440,00 ÷ 12 = **USD 786,67**

Su décimo tercero es **mayor** que su sueldo base de USD 520,00. Esa es exactamente la razón por la que se calcula sobre lo percibido y no sobre el sueldo nominal: **las comisiones cuentan**. Si alguien te dice que "el décimo tercero es un sueldo", te está informando mal.

### Qué entra y qué no

- **Entra:** sueldo base, comisiones, bono de productividad y de bodega, horas suplementarias y extraordinarias, recargo nocturno.
- **No entra:** décima cuarta, fondos de reserva, utilidades, viáticos que no sean remuneración.

Fuente: Manual de Nómina, secciones 5.1 y 5.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si ingresaste a mitad del período, la fórmula ya prorratea sola: no se vuelve a prorratear.`,`Si elegiste mensualización, lo recibes repartido mes a mes en lugar de un solo pago.`],parametros_usados:[`decimo_tercero_formula`,`decimo_tercero_periodo`,`decimo_tercero_fecha_pago`,`decimo_tercero_mensualizacion`,`iess_base_calculo`,`periodos_beneficios_2026`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`5. Décima tercera remuneración`,articulo:null},calculadora:`calculadora_decimo_tercero`,datos_requeridos:[`remuneraciones percibidas mes a mes entre 2025-12-01 y 2026-11-30`,`fecha de ingreso si es posterior al inicio del periodo`],siguiente_paso:`Dime tu cargo y tu fecha de ingreso y te proyecto tu décimo tercero con tus remuneraciones registradas.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo tercero`,`bono navideño`,`diciembre`,`comisiones`,`calculo`],errores_frecuentes:[`Calcularlo sobre el sueldo base y no sobre lo percibido.`,`Usar el año calendario (enero a diciembre) como período: el período va de diciembre a noviembre.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-024`,titulo:`Entré a mitad de año: ¿me toca décimo tercero completo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_tercero`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:100,pregunta_canonica:`¿Cómo se prorratea el décimo tercero de quien ingresó dentro del período?`,variantes_pregunta:[`entre en abril cuanto me toca de decimo`,`el decimo se prorratea?`,`tengo 5 meses aqui me dan decimo?`,`como sacan el decimo del que recien entro`,`me toca decimo si entre hace poco`],respuesta_corta:`Te toca la parte que corresponde, y la fórmula ya la calcula sola: sumas lo que percibiste desde tu ingreso hasta el 30 de noviembre y divides para 12. No se prorratea dos veces.`,respuesta_extendida:`### Ejemplo resuelto

Un estibador ingresó el 20 de abril de 2026 con remuneración fija de USD 490,00, sin variables.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Abril (del 20 al 30 = 11 días) | 490,00 × 11 ÷ 30 | USD 179,67 |
| 2. Mayo a noviembre (7 meses completos) | 490,00 × 7 | USD 3.430,00 |
| 3. Total percibido en el período | 179,67 + 3.430,00 | USD 3.609,67 |
| 4. Décimo tercero | 3.609,67 ÷ 12 | **USD 300,81** |

### El punto clave

No existe un "prorrateo adicional" que hacer. La fórmula *un doceavo de lo percibido* **ya prorratea sola**, porque quien trabajó menos meses percibió menos.

El error frecuente es calcular el décimo completo y luego volver a prorratearlo por meses trabajados: eso produce un valor menor al que corresponde y **perjudica al colaborador**. Si ves ese doble prorrateo en tu liquidación, recláma.

Fuente: Manual de Nómina, sección 5.3 (ejemplo 9). Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Aplica a cualquier tipo de contrato, incluido el período de prueba.`],parametros_usados:[`decimo_tercero_formula`,`decimo_tercero_periodo`,`decimo_tercero_fecha_pago`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`5.3 Ejemplo resuelto 9 — prorrateo de quien ingresó a mitad de período`,articulo:null},calculadora:`calculadora_decimo_tercero`,datos_requeridos:[`fecha de ingreso`,`remuneracion mensual`,`variables percibidas por mes`],siguiente_paso:`Dime tu fecha de ingreso y tu remuneración y te calculo el valor exacto que debe salir en diciembre.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo tercero`,`prorrateo`,`ingreso reciente`,`proporcional`],errores_frecuentes:[`Prorratear dos veces: calcular el décimo completo y luego multiplicarlo por meses trabajados sobre 12.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-025`,titulo:`¿Me conviene el décimo mensualizado o acumulado?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_tercero`,zona:`ambar`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:89,pregunta_canonica:`¿Qué diferencia hay entre recibir el décimo mensualizado o acumulado?`,variantes_pregunta:[`que es mejor mensualizar el decimo`,`me conviene cobrar mes a mes el decimo`,`como cambio a decimo acumulado`,`diferencia entre mensualizado y acumulado`,`si mensualizo pierdo plata?`,`kiero mensualizar mi decimo komo hago`],respuesta_corta:`Al año recibes exactamente lo mismo con las dos modalidades: cambia solo cuándo lo recibes. Esa decisión es tuya y no te la voy a recomendar; te conecto con Nómina y Compensaciones, que te explica el trámite y te contacta en 2 días hábiles.`,respuesta_extendida:`### Las dos modalidades

| Modalidad | Cómo se ve | Total anual |
|---|---|---|
| **Acumulado** | Un solo pago hasta el 2026-12-24 | El mismo |
| **Mensualizado** | Una línea en el rol de cada mes, igual a la remuneración de ese mes ÷ 12 | El mismo |

Ejemplo: Wilson Chalá tuvo materia gravada de USD 569,71 en septiembre; su décimo mensualizado de ese mes fue 569,71 ÷ 12 = **USD 47,48**. Si su remuneración de octubre es distinta, su décimo mensualizado de octubre también lo será.

### La única diferencia real

Es de **flujo de caja personal**. Elegir mensualizado no te da más dinero al año, ni acumulado tampoco: te da el mismo dinero repartido de otra forma. Por eso la decisión es tuya y yo no opino sobre cuál te conviene.

### Advertencia de verificación

El parámetro decimo_tercero_mensualizacion está marcado verificar_antes_de_produccion: la opción existe con certeza, pero el trámite exacto vigente en 2026 —en qué plataforma se registra, en qué plazo del año se declara y si requiere ratificación anual— debe confirmarse con Nómina y con el Ministerio del Trabajo antes de comunicarlo como procedimiento.

Fuente: Manual de Nómina, sección 5.4. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La misma lógica aplica al décimo cuarto (parámetro decimo_cuarto_mensualizacion), con la diferencia de que su valor mensual es constante.`],parametros_usados:[`decimo_tercero_mensualizacion`,`decimo_tercero_fecha_pago`,`decimo_cuarto_mensualizacion`,`decimo_tercero_formula`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`5.4 Mensualizado contra acumulado`,articulo:null},calculadora:`calculadora_decimo_tercero`,datos_requeridos:[`modalidad actual registrada`],siguiente_paso:`Registré tu consulta. Nómina y Compensaciones te contacta en 2 días hábiles con el trámite vigente para cambiar de modalidad.`,escalamiento:{requerido:!0,rol:`Jefatura de Nómina y Compensaciones`,motivo:`Decisión financiera personal del colaborador y trámite con plazo pendiente de verificación. VERA explica las dos opciones y no recomienda ninguna.`},etiquetas:[`decimo tercero`,`mensualizacion`,`acumulado`,`tramite`,`eleccion del colaborador`],errores_frecuentes:[`Creer que mensualizar reduce el total anual, o que acumular lo aumenta.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-026`,titulo:`¿Me descuentan IESS del décimo tercero?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_tercero`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:22,pregunta_canonica:`¿Los décimos y los fondos de reserva pagan aporte al IESS?`,variantes_pregunta:[`al decimo le sacan el iess?`,`me descuentan del decimo tercero`,`los decimos pagan aporte`,`porque mi decimo llega completo`,`al decimo cuarto le descuentan algo`],respuesta_corta:`No. La décima tercera, la décima cuarta, los fondos de reserva y las utilidades no son materia gravada, así que no se les descuenta aporte personal al IESS. Te llegan completos.`,respuesta_extendida:`### Por qué

El aporte al IESS se calcula sobre la **materia gravada**: lo que te pagan por trabajar (parámetro iess_base_calculo). Los décimos, los fondos de reserva y las utilidades son **beneficios sociales**, no pago del trabajo, y por eso quedan fuera de esa base.

| Rubro | ¿Aporte personal IESS? |
|---|---|
| Sueldo, comisiones, bonos, horas extra, recargo nocturno | Sí, 9,45% |
| Décima tercera | No |
| Décima cuarta | No |
| Fondos de reserva | No |
| Utilidades | No |

### Cómo verificarlo en tu rol

En el rol de Wilson Chalá, su aporte personal de USD 53,84 se calculó sobre USD 569,71 (materia gravada), **no** sobre los USD 703,82 de total de ingresos, porque los fondos de reserva y los décimos mensualizados que también aparecen ahí no son materia gravada.

Fuente: Manual de Nómina, secciones 3.3, 5.5 y 10.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`En el acta de finiquito, el aporte personal se calcula solo sobre el sueldo pendiente, no sobre los proporcionales de décimos ni vacaciones.`],parametros_usados:[`iess_base_calculo`,`iess_aporte_personal`,`fondos_reserva_porcentaje`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`10.2 Qué ingresos son aportables`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si en tu rol ves un descuento de IESS aplicado sobre un décimo, repórtalo: está mal y debe reversarse.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo tercero`,`iess`,`materia gravada`,`descuentos`],errores_frecuentes:[`Creer que a los décimos se les descuenta aporte personal.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-027`,titulo:`Renuncié antes de diciembre: ¿pierdo el décimo tercero?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_tercero`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:102,pregunta_canonica:`¿Qué pasa con el décimo tercero si salgo de la empresa antes de la fecha de pago?`,variantes_pregunta:[`si renuncio pierdo el decimo`,`me voy en octubre me pagan decimo`,`el decimo sale en la liquidacion?`,`salgo de la empresa y el bono navideño`,`perdi mi decimo por renunciar?`],respuesta_corta:`No lo pierdes. El derecho se gana día a día: tu décimo tercero proporcional se paga en el acta de finiquito, calculado sobre lo que percibiste desde el 1 de diciembre hasta tu último día.`,respuesta_extendida:`### Cómo se calcula al salir

Ejemplo real del manual: Byron Lascano, perchador del CD de Ambato, salió el 2026-09-15 con remuneración de USD 505,00.

| Sub-paso | Operación | Resultado |
|---|---|---|
| Diciembre 2025 a agosto 2026 (9 meses) | 505,00 × 9 | USD 4.545,00 |
| Septiembre 2026 (15 días) | 505,00 × 15 ÷ 30 | USD 252,50 |
| Total percibido en el período | 4.545,00 + 252,50 | USD 4.797,50 |
| **Décimo tercero proporcional** | 4.797,50 ÷ 12 | **USD 399,79** |

### Lo que siempre se paga en el finiquito

Sueldo pendiente, décimo tercero proporcional, décimo cuarto proporcional y vacaciones no gozadas y proporcionales. Esos cuatro rubros no dependen de cómo terminó la relación: se pagan siempre.

Fuente: Manual de Nómina, secciones 5.5 y 13.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si la salida está en curso o en disputa, la consulta pasa a zona roja y se escala a Administración de Personal y a Legal y Cumplimiento.`],parametros_usados:[`decimo_tercero_formula`,`decimo_tercero_periodo`,`acta_finiquito_forma`,`liquidacion_plazo_pago`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`13.2 Qué se paga siempre y qué se paga solo en ciertos casos`,articulo:null},calculadora:`calculadora_liquidacion_finiquito`,datos_requeridos:[`fecha de ingreso`,`fecha de salida`,`remuneraciones del periodo`],siguiente_paso:`Pide el desglose rubro por rubro antes de firmar el acta: tienes derecho a verlo.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo tercero`,`finiquito`,`renuncia`,`proporcional`],errores_frecuentes:[`Creer que quien sale antes de diciembre pierde el décimo tercero.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-028`,titulo:`¿Cuánto es el décimo cuarto y cuándo lo cobro?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_cuarto`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:192,pregunta_canonica:`¿Cuál es el valor de la décima cuarta remuneración y en qué fecha se paga?`,variantes_pregunta:[`cuanto es el decimo cuarto`,`cuando pagan el bono escolar`,`el que gana mas cobra mas decimo cuarto?`,`mi decimo cuarto es igual al del jefe?`,`cuando cae el decimo 4`,`bono escolar kuando pagan`],respuesta_corta:`Es un Salario Básico Unificado completo, USD 470,00, igual para todos: un estibador y un jefe de CD reciben lo mismo. La fecha depende de la región de tu instalación: Costa el 15 de marzo, Sierra el 15 de agosto.`,respuesta_extendida:`### El valor

Un SBU completo (parámetro decimo_cuarto_valor, equivalente a la clave sbu: **USD 470,00** en la simulación), o la parte proporcional al tiempo trabajado en el período. **No depende de cuánto ganes.**

### Las dos fechas de VERTIENTE

| Región | Instalaciones | Período de cálculo | Fecha límite |
|---|---|---|---|
| **Costa e Insular** | Matriz Guayaquil, planta FRUTAL Durán, CD Manta, Machala, Santo Domingo, Quevedo | 2025-03-01 a 2026-02-28 | **2026-03-15** |
| **Sierra y Amazonía** | CD Quito, Cuenca, Ambato, Loja, Ibarra | 2025-08-01 a 2026-07-31 | **2026-08-15** |

### La regla que evita el reclamo más común

Manda la **región del lugar de trabajo**, no la de tu domicilio. Un prevendedor domiciliado en Ambato pero asignado al CD de Manta cobra en marzo, no en agosto.

### Estado a hoy (2026-09-16)

Ambas décimas cuartas de 2026 **ya fueron pagadas**. El próximo pago de Costa vence el 2027-03-15 y el de Sierra el 2027-08-15.

Fuente: Manual de Nómina, sección 6.1, y Reglamento Interno, Art. 52. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si trabajaste menos que el período completo, se paga proporcional a los días trabajados.`,`En jornada parcial se paga proporcional a la jornada.`,`Si te trasladaste de instalación a mitad de período, Nómina liquida la parte proporcional de cada régimen y se revisa caso por caso.`],parametros_usados:[`decimo_cuarto_valor`,`sbu`,`decimo_cuarto_periodo_costa_galapagos`,`decimo_cuarto_fecha_pago_costa_galapagos`,`decimo_cuarto_periodo_sierra_amazonia`,`decimo_cuarto_fecha_pago_sierra_amazonia`,`periodos_beneficios_2026`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`6.1 Qué es y por qué en VERTIENTE hay dos fechas`,articulo:null},calculadora:`calculadora_decimo_cuarto`,datos_requeridos:[`instalacion asignada`,`fecha de ingreso`,`tipo de jornada`],siguiente_paso:`Dime en qué instalación trabajas y desde cuándo, y te digo tu fecha de cobro y si te corresponde completo o proporcional.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo cuarto`,`bono escolar`,`sbu`,`costa`,`sierra`,`region`],errores_frecuentes:[`Creer que el que gana más cobra más décimo cuarto.`,`Calcular la fecha por la región donde vive el colaborador y no por la de su instalación.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-029`,titulo:`Entré hace poco: ¿me toca décimo cuarto proporcional?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_cuarto`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:113,pregunta_canonica:`¿Cómo se calcula el décimo cuarto de quien no trabajó el período completo?`,variantes_pregunta:[`entre en enero cuanto me toca de decimo cuarto`,`el decimo cuarto se prorratea`,`tengo 6 meses me dan bono escolar`,`como sacan el proporcional del decimo cuarto`,`me toca decimo cuarto si no cumpli el año`],respuesta_corta:`Sí te toca, proporcional a los días trabajados dentro del período: 470,00 × días trabajados ÷ 360. Con 201 días son USD 262,42. Dime tu fecha de ingreso y tu instalación y te lo calculo.`,respuesta_extendida:`### Ejemplo resuelto

Narcisa Pilamunga, mercaderista del CD de Quito (Sierra), ingresó el 12 de enero de 2026. Su período fue el de Sierra, 2025-08-01 a 2026-07-31.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Días trabajados en el período | 20 (enero) + 28 + 31 + 30 + 31 + 30 + 31 | **201 días** |
| 2. Valor diario | 470,00 ÷ 360 | 1,3056 USD/día |
| 3. Proporcional | 470,00 × 201 ÷ 360 | **USD 262,42** |
| 4. Fecha de cobro | Hasta el 2026-08-15 | Ya pagada |

### Advertencia honesta sobre el divisor

VERTIENTE usa un año comercial de **360 días** para prorratear beneficios, porque es la convención más extendida en la práctica de nómina ecuatoriana y porque produce un resultado **más favorable al colaborador** que usar 365: con 365 el resultado sería USD 258,82, es decir USD 3,60 menos.

**No existe un parámetro que fije este divisor** en datos/parametros-legales.json. Está reportado como pendiente de verificación. Mientras no se verifique, VERTIENTE aplica el criterio más favorable al colaborador.

### Si tu período cruza dos años

El valor base es el SBU del año del período que se liquida. Para períodos anteriores se usa la serie histórica (tabla serie_sbu); el SBU de 2025 fue el mismo USD 470,00 (parámetro sbu_anterior), de modo que en 2026 no hay diferencia. El valor de 2026 es un supuesto de simulación que arrastra el de 2025 y debe verificarse contra el Acuerdo Ministerial del año.

Fuente: Manual de Nómina, sección 6.3 (ejemplo 11). Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El período aplicable depende de la región de tu instalación.`,`El divisor de 360 días es convención interna pendiente de verificación.`],parametros_usados:[`decimo_cuarto_valor`,`sbu`,`decimo_cuarto_periodo_sierra_amazonia`,`decimo_cuarto_periodo_costa_galapagos`,`serie_sbu`,`sbu_anterior`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`6.3 Ejemplo resuelto 11 — colaboradora de Quito (Sierra), período incompleto`,articulo:null},calculadora:`calculadora_decimo_cuarto`,datos_requeridos:[`fecha de ingreso`,`instalacion asignada`,`region del decimo cuarto de la sede`],siguiente_paso:`Dime tu fecha de ingreso y tu instalación y te calculo los días y el valor proporcional.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo cuarto`,`proporcional`,`prorrateo`,`ingreso reciente`,`360 dias`],errores_frecuentes:[`Pensar que no cobra décimo cuarto quien tiene menos de un año.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-030`,titulo:`Me cambiaron de CD: ¿en qué fecha cobro ahora el décimo cuarto?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_cuarto`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:62,pregunta_canonica:`¿Qué pasa con mi décimo cuarto si me trasladan de una instalación de Costa a una de Sierra?`,variantes_pregunta:[`me pasaron de manta a ambato cuando cobro el decimo cuarto`,`cambie de centro de distribucion y el bono escolar`,`si me traslado cambia mi fecha de decimo cuarto`,`trabajo en quito pero vivo en la costa cuando cobro`,`me mudaron de sede que pasa con el decimo 4`],respuesta_corta:`Manda la región de la instalación donde trabajas, no la de tu domicilio. Si te trasladaste a mitad de período, Nómina liquida la parte proporcional de cada régimen: eso se revisa caso por caso con tu registro de traslado.`,respuesta_extendida:`### La regla base

La región que determina la fecha de pago de la décima cuarta es la del **lugar de trabajo** (Reglamento Interno, Art. 52).

| Región de la sede | Instalaciones | Fecha límite |
|---|---|---|
| Costa e Insular | SED-01 Matriz Guayaquil, SED-02 Planta FRUTAL Durán, SED-06 Manta, SED-07 Machala, SED-08 Santo Domingo, SED-10 Quevedo | 15 de marzo |
| Sierra y Amazonía | SED-03 Quito, SED-04 Cuenca, SED-05 Ambato, SED-09 Loja, SED-11 Ibarra | 15 de agosto |

### Traslado a mitad de período

Nómina liquida la parte proporcional de cada régimen con base en los días efectivamente trabajados bajo cada uno. Es una situación que **se revisa caso por caso**, y por eso conviene que confirmes con Nómina la fecha de efecto de tu traslado.

Fuente: Manual de Nómina, sección 6.1, y Reglamento Interno, Art. 52. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Aplica cuando el traslado cruza entre regímenes de Costa y Sierra dentro de un mismo período.`],parametros_usados:[`decimo_cuarto_periodo_costa_galapagos`,`decimo_cuarto_periodo_sierra_amazonia`,`decimo_cuarto_fecha_pago_costa_galapagos`,`decimo_cuarto_fecha_pago_sierra_amazonia`,`decimo_cuarto_valor`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 52`},calculadora:`calculadora_decimo_cuarto`,datos_requeridos:[`sede anterior y sede actual`,`fecha de efecto del traslado`],siguiente_paso:`Confirma con Nómina y Compensaciones la fecha de efecto de tu traslado para que liquiden bien los dos tramos.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo cuarto`,`traslado`,`region`,`sede`,`costa`,`sierra`],errores_frecuentes:[`Suponer que la fecha la define el domicilio del colaborador.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-031`,titulo:`¿El décimo cuarto me lo pagan completo? Mensualización y jornada parcial`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`decimo_cuarto`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:55,pregunta_canonica:`¿El décimo cuarto se paga completo, y cómo queda en jornada parcial y mensualizado?`,variantes_pregunta:[`el decimo cuarto me lo pagan completo`,`me pagan completo el decimo cuarto si trabajo medio tiempo`,`cuanto es el decimo cuarto mensualizado`,`porque mi decimo cuarto mensual no cambia`,`los 39 dolares del rol que son`,`como se mensualiza el decimo 4`,`el decimo cuarto en jornada parcial cuanto es`,`el decimo cuarto mensual sube si hago horas extra?`],respuesta_corta:`El décimo cuarto se paga completo —un SBU, USD 470,00— cuando la jornada es completa. En jornada parcial permanente se paga proporcional a las horas semanales pactadas: la operación es USD 470,00 × horas semanales pactadas ÷ 40 (parámetro jornada_horas_semanales). Mensualizado, la línea del rol es la doceava parte de ese valor: 470,00 ÷ 12 = USD 39,17 en jornada completa.`,respuesta_extendida:`### Por qué el mensualizado es un valor fijo

La décima cuarta vale un SBU completo para todos (parámetro decimo_cuarto_valor = sbu). Como no depende de tu remuneración, su mensualización es siempre el mismo número: **470,00 ÷ 12 = USD 39,17**.

El décimo tercero mensualizado, en cambio, cambia cada mes, porque se calcula sobre la remuneración efectivamente percibida en ese mes.

### Jornada parcial: la operación, y por qué te pido confirmar tus horas

En jornada parcial permanente la décima cuarta **no se paga completa**: se paga proporcional a la jornada pactada. La operación es **USD 470,00 (parámetro sbu) × horas semanales pactadas ÷ 40 (parámetro jornada_horas_semanales)**.

| Horas semanales pactadas | Operación | Período completo | Mensualizado |
|---|---|---|---|
| 20 | 470,00 × 20 ÷ 40 | USD 235,00 | USD 19,58 |
| 24 | 470,00 × 24 ÷ 40 | USD 282,00 | USD 23,50 |
| 30 (tope) | 470,00 × 30 ÷ 40 | USD 352,50 | USD 29,38 |

Tus horas semanales pactadas **no constan en la ficha de personal**, así que antes de dar un valor definitivo necesito que las confirmes contra tu contrato registrado en el SUT. Con ese dato te entrego la cifra exacta.

La **jornada parcial permanente tiene un tope de 30 horas semanales** (parámetro jornada_parcial_tope_horas_semanales, marcado verificar_antes_de_produccion). Por encima de ese tope la modalidad deja de ser jornada parcial.

> **La proporcionalidad aplica al valor, no al derecho.** El derecho a la décima cuarta existe igual en jornada parcial: lo que se prorratea es el monto, nunca el derecho.

Fuente: Manual de Nómina, sección 6.4. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`En jornada parcial el décimo cuarto es proporcional a las horas semanales pactadas: USD 470,00 × horas semanales pactadas ÷ 40 (parámetro jornada_horas_semanales). Pedir confirmación de esas horas antes de dar un valor definitivo.`,`La jornada parcial permanente tiene tope de 30 horas semanales (parámetro jornada_parcial_tope_horas_semanales).`,`La línea mensualizada solo aparece si elegiste esa modalidad (parámetro decimo_cuarto_mensualizacion).`],parametros_usados:[`decimo_cuarto_valor`,`sbu`,`decimo_cuarto_mensualizacion`,`jornada_horas_semanales`,`jornada_parcial_tope_horas_semanales`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`6.4 Mensualización y jornada parcial`,articulo:null},calculadora:`calculadora_decimo_cuarto`,datos_requeridos:[`modalidad elegida`,`horas semanales de la jornada`],siguiente_paso:`Confírmame cuántas horas semanales tienes pactadas en tu contrato y te doy el valor exacto de tu décimo cuarto. Si quieres cambiar de modalidad, Nómina te indica el trámite vigente.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`decimo cuarto`,`mensualizacion`,`jornada parcial`,`proporcional`,`rol`],errores_frecuentes:[`Esperar que el décimo cuarto mensualizado suba cuando se hacen horas extra.`,`Leer "proporcional a la jornada" como "no me toca": el derecho es el mismo, lo proporcional es el monto.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-032`,titulo:`¿Por qué no me pagan fondos de reserva?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`fondos_de_reserva`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:288,pregunta_canonica:`¿Desde cuándo se generan los fondos de reserva?`,variantes_pregunta:[`no me pagan fondos de reserva`,`desde cuando me tocan los fondos`,`llevo 8 meses y no veo fondos de reserva`,`a mi compañero si le pagan fondos y a mi no`,`cuando empiezan los fondos de reserva`,`x q no sale el 8.33 en mi rol`],respuesta_corta:`Porque los fondos de reserva empiezan a generarse recién a partir del mes 13 de trabajo, es decir cuando cumples un año completo con la empresa (parámetro fondos_reserva_inicio). No es un error del rol.`,respuesta_extendida:`### La regla

Los fondos de reserva equivalen a **un mes de remuneración por cada año trabajado** con el mismo empleador. En el rol se ven como un 8,33% de la materia gravada del mes (parámetro fondos_reserva_porcentaje), que es 1 ÷ 12 expresado en porcentaje.

| Dato | Valor | Parámetro |
|---|---|---|
| Porcentaje | 8,33% de la materia gravada del mes | fondos_reserva_porcentaje |
| Desde cuándo | Desde el mes 13, cumplido un año completo | fondos_reserva_inicio |
| Modalidades | Mensualizado en el rol o acumulado en el IESS | fondos_reserva_modalidad |
| ¿Materia gravada? | No | iess_base_calculo |

### Cómo saber tu fecha

Si ingresaste en marzo de 2026, tus fondos empiezan a correr desde marzo de 2027. Un auxiliar que ingresó el 3 de noviembre de 2025 cumple su primer año el 3 de noviembre de 2026: su primera línea de fondos de reserva aparece en el rol de noviembre de 2026, por la parte proporcional de ese mes.

Fuente: Manual de Nómina, sección 7.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El derecho se cuenta por tiempo de servicio con el mismo empleador.`],parametros_usados:[`fondos_reserva_inicio`,`fondos_reserva_porcentaje`,`fondos_reserva_modalidad`,`iess_base_calculo`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`7.1 Qué son y desde cuándo`,articulo:null},calculadora:`calculadora_fondos_reserva`,datos_requeridos:[`fecha de ingreso`],siguiente_paso:`Dime tu fecha de ingreso y te digo el mes exacto en que aparecerá tu primera línea de fondos de reserva.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`fondos de reserva`,`8.33`,`primer año`,`antiguedad`],errores_frecuentes:[`Creer que la falta de fondos de reserva en el primer año es un descuido de Nómina.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-033`,titulo:`¿Cuánto me corresponde de fondos de reserva este mes?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`fondos_de_reserva`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:90,pregunta_canonica:`¿Cómo se calcula el 8,33% de fondos de reserva?`,variantes_pregunta:[`como se calculan los fondos de reserva`,`cuanto es el 8.33 de mi sueldo`,`las horas extra entran en los fondos de reserva`,`porque mis fondos cambian cada mes`,`los fondos se calculan sobre el sueldo o sobre todo`],respuesta_corta:`Es el 8,33% de tu materia gravada del mes, que incluye sueldo, comisiones, bonos y horas extra. Con materia gravada de USD 569,71, son USD 47,46. Si un mes haces más horas, tus fondos también suben.`,respuesta_extendida:`### Ejemplo resuelto

Wilson Chalá, estibador del CD de Quito, septiembre 2026.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Materia gravada del mes | Sueldo 490,00 + bono bodega 45,00 + suplementarias 18,38 + extraordinarias 16,33 | USD 569,71 |
| 2. Aplicar 8,33% | 569,71 × 0,0833 | **USD 47,46** |

### Lo que suma a tu favor

Las horas suplementarias y extraordinarias y el bono de bodega **sí** entran en la base: son remuneración. Si ese mes hubieras hecho más horas, tus fondos de reserva habrían sido mayores.

Y al revés: los fondos de reserva mismos **no** son materia gravada, así que no se les descuenta aporte al IESS.

Fuente: Manual de Nómina, sección 7.2 (ejemplo 12). Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Solo se genera a partir del mes 13 de trabajo.`],parametros_usados:[`fondos_reserva_porcentaje`,`iess_base_calculo`,`fondos_reserva_inicio`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`7.2 Ejemplo resuelto 12 — fondos de reserva de Wilson Chalá`,articulo:null},calculadora:`calculadora_fondos_reserva`,datos_requeridos:[`materia gravada del mes`,`fecha de ingreso`],siguiente_paso:`Dime tu materia gravada del mes y te calculo el valor exacto.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`fondos de reserva`,`calculo`,`8.33`,`materia gravada`],errores_frecuentes:[`Calcular el 8,33% solo sobre el sueldo base y no sobre toda la materia gravada.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-034`,titulo:`¿Cobro los fondos de reserva en el rol o los acumulo en el IESS?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`fondos_de_reserva`,zona:`ambar`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:145,pregunta_canonica:`¿Cómo elijo o cambio la modalidad de mis fondos de reserva?`,variantes_pregunta:[`como hago para que me paguen los fondos mes a mes`,`quiero acumular mis fondos de reserva`,`donde cambio la modalidad de fondos`,`si cambio hoy desde cuando lo veo en el rol`,`es mejor acumular o cobrar los fondos`],respuesta_corta:`La decisión es tuya, no de la empresa, y se registra en la plataforma del IESS; VERTIENTE solo ejecuta lo que el IESS notifica en la planilla. Desde cuándo surte efecto el cambio hay que verificarlo en el IESS: no te voy a dar una fecha inventada.`,respuesta_extendida:`### Las dos modalidades

| Modalidad | Qué pasa con el dinero | Ventaja | Desventaja |
|---|---|---|---|
| **Mensualizado** | Aparece como ingreso en el rol de cada mes | Liquidez inmediata | No se acumula un ahorro |
| **Acumulado en el IESS** | VERTIENTE lo transfiere con la planilla mensual y queda en tu cuenta individual | Se forma un fondo que puedes retirar según las reglas del IESS | No lo tienes disponible mes a mes |

### Quién decide

La decisión **es del colaborador** (parámetro fondos_reserva_modalidad) y se registra en la plataforma del IESS. Yo no te voy a recomendar una: son dos opciones legítimas y la consecuencia es de tu economía personal.

### Advertencia de verificación

El parámetro fondos_reserva_modalidad está marcado verificar_antes_de_produccion en un punto concreto: **con qué periodicidad el IESS permite cambiar de modalidad y con qué plazo el cambio surte efecto en la planilla.** Ante la pregunta "si cambio hoy, ¿desde cuándo lo veo en mi rol?", la respuesta correcta es verificarlo en la plataforma del IESS.

### Punto crítico para tu liquidación

Si eliges acumulado, tus fondos de reserva **no aparecen en el acta de finiquito**, porque ya están en el IESS y se cobran directamente allí. No es que te los quiten: es que están en otro lado.

Fuente: Manual de Nómina, sección 7.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Solo aplica a quien ya genera fondos de reserva (mes 13 en adelante).`],parametros_usados:[`fondos_reserva_modalidad`,`fondos_reserva_porcentaje`,`fondos_reserva_inicio`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`7.3 Mensualizado o acumulado: cómo se decide y cómo se cambia`,articulo:null},calculadora:null,datos_requeridos:[`modalidad actual segun la planilla del IESS`],siguiente_paso:`Registré tu consulta. Nómina y Compensaciones te contacta en 2 días hábiles para acompañarte con el trámite en la plataforma del IESS.`,escalamiento:{requerido:!0,rol:`Jefatura de Nómina y Compensaciones`,motivo:`Decisión financiera personal y plazo de efecto pendiente de verificación con el IESS. VERA explica ambas opciones sin recomendar ninguna.`},etiquetas:[`fondos de reserva`,`modalidad`,`iess`,`acumulado`,`mensualizado`],errores_frecuentes:[`Creer que la empresa decide la modalidad.`,`Creer que los fondos acumulados se perdieron porque no salen en el finiquito.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-035`,titulo:`Mis fondos acumulados no salieron en la liquidación: ¿dónde están?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`fondos_de_reserva`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:22,pregunta_canonica:`¿Por qué el acta de finiquito muestra fondos de reserva en cero?`,variantes_pregunta:[`mi finiquito dice fondos de reserva 0`,`donde estan mis fondos de reserva acumulados`,`no me pagaron los fondos en la liquidacion`,`como retiro mis fondos del iess`,`me robaron los fondos de reserva?`],respuesta_corta:`No se perdieron. Si los tenías acumulados, están en tu cuenta individual del IESS y se cobran directamente allí, no en el acta. Si los tenías mensualizados, ya los recibiste mes a mes en tu rol.`,respuesta_extendida:`### Las dos razones por las que la línea es USD 0,00

| Tu modalidad | Por qué el acta muestra cero | Dónde está tu dinero |
|---|---|---|
| **Mensualizada** | Ya los cobraste en cada rol, mes a mes | Ya lo recibiste |
| **Acumulada en el IESS** | VERTIENTE los transfirió con cada planilla | En tu cuenta individual del IESS |

En el ejemplo del manual, Byron Lascano los tenía mensualizados: su acta dice USD 0,00 **y así debe constar expresamente, con la nota de que fueron pagados mensualmente**. Si tu acta no trae esa nota, pídela: el acta debe ser pormenorizada.

### Si estaban acumulados

El trámite de retiro es **directamente con el IESS**, con tu cédula y tu aviso de salida registrado. Por eso VERTIENTE registra el aviso de salida el mismo día de la salida, sin usar el plazo de 3 días del parámetro iess_aviso_salida_plazo.

Fuente: Manual de Nómina, secciones 7.3 y 13.3 (paso 5). Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si la salida está en disputa, la consulta pasa a zona roja y se escala a Administración de Personal.`],parametros_usados:[`fondos_reserva_modalidad`,`iess_aviso_salida_plazo`,`acta_finiquito_forma`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`13.3 Ejemplo resuelto 16 — paso 5`,articulo:null},calculadora:null,datos_requeridos:[`modalidad de fondos registrada`,`fecha de salida`],siguiente_paso:`Verifica tu modalidad en la plataforma del IESS. Si estaban acumulados, el retiro se gestiona allí con tu cédula.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`fondos de reserva`,`finiquito`,`iess`,`acumulado`,`retiro`],errores_frecuentes:[`Creer que los fondos acumulados deben salir en el acta de finiquito.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-036`,titulo:`¿Cuántos días de vacaciones me tocan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`vacaciones`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:379,pregunta_canonica:`¿Cuántos días de vacaciones me corresponden según mi antigüedad?`,variantes_pregunta:[`cuantos dias de vacaciones tengo`,`son 15 dias habiles o corridos`,`con 8 años cuantos dias me tocan`,`cuando gano dias adicionales de vacaciones`,`cuantas vacaciones me quedan`,`kuantos dias de vaca me toka`],respuesta_corta:`Quince días calendario ininterrumpidos por año de servicio, y desde el sexto año se suma un día por año, con tope de 30 días. Son días corridos: incluyen sábados, domingos y feriados que caigan dentro.`,respuesta_extendida:`### Lo básico

| Dato | Valor | Parámetro |
|---|---|---|
| Vacaciones anuales | 15 días calendario ininterrumpidos | vacaciones_dias_anuales |
| Día adicional | Uno por año, desde el sexto año de servicio | vacaciones_dia_adicional_desde_anio |
| Tope de días adicionales | 15 adicionales (techo total de 30 días) | vacaciones_dias_adicionales_tope |
| Acumulación máxima | Hasta 3 años | vacaciones_acumulacion_maxima_anios |

### Escala por antigüedad

| Años cumplidos | Días | Años cumplidos | Días |
|---|---|---|---|
| 1 a 5 | 15 | 13 | 23 |
| 6 | 16 | 14 | 24 |
| 7 | 17 | 15 | 25 |
| 8 | 18 | 16 | 26 |
| 9 | 19 | 17 | 27 |
| 10 | 20 | 18 | 28 |
| 11 | 21 | 19 | 29 |
| 12 | 22 | 20 o más | 30 (tope) |

### Son días calendario, no hábiles

Es el malentendido más frecuente en bodega y en planta. Si sales el lunes 5 de octubre, tus 15 días terminan el lunes 19 y te reincorporas el martes 20.

Fuente: Manual de Nómina, sección 8.1, y Reglamento Interno, Art. 56 y 57. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El derecho nace después de un año completo de servicio; antes de eso se liquida proporcional solo al salir.`],parametros_usados:[`vacaciones_dias_anuales`,`vacaciones_dia_adicional_desde_anio`,`vacaciones_dias_adicionales_tope`,`vacaciones_acumulacion_maxima_anios`,`vacaciones_por_antiguedad`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`8.1 Cuántos días corresponden`,articulo:null},calculadora:`calculadora_vacaciones`,datos_requeridos:[`fecha de ingreso`,`periodos ya gozados`],siguiente_paso:`Dime tu fecha de ingreso y te digo cuántos días te corresponden y cuántos tienes pendientes.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`dias calendario`,`antiguedad`,`dias adicionales`],errores_frecuentes:[`Contar los 15 días como hábiles.`,`Creer que el día adicional corre desde el segundo año: corre desde el sexto.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-037`,titulo:`¿Cuánto me pagan cuando salgo de vacaciones si gano comisión?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`vacaciones`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:285,pregunta_canonica:`¿Sobre qué base se paga la remuneración de vacaciones de un comisionista?`,variantes_pregunta:[`cuanto me pagan en vacaciones si soy prevendedor`,`las vacaciones se pagan con el sueldo base?`,`pierdo plata si salgo de vacaciones`,`mis comisiones cuentan para las vacaciones`,`cuanto vale mi dia de vacacion`,`vaciones cuanto me depositan`],respuesta_corta:`No se paga con el sueldo base: se paga sobre TODO lo que percibiste como remuneración en tu año de servicio, comisiones y horas extra incluidas, dividido para 360 por cada día. Salir de vacaciones no te puede costar dinero.`,respuesta_extendida:`### La fórmula

> Valor del día de vacación = lo percibido como remuneración en el año de servicio ÷ 360
>
> Para los 15 días base, equivale a lo percibido ÷ 24 (la vigésima cuarta parte).

### Ejemplo resuelto

Édison Tenesaca, vendedor de ruta del CD de Cuenca, sueldo base USD 540,00. En su año de servicio (2025-09-01 a 2026-08-31) percibió USD 6.480,00 de sueldo, USD 4.972,50 de comisiones y USD 67,50 de horas suplementarias: **USD 11.520,00**.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Total percibido en el año | 6.480,00 + 4.972,50 + 67,50 | USD 11.520,00 |
| 2. Valor del día | 11.520,00 ÷ 360 | USD 32,00 |
| 3. Valor de 15 días | 32,00 × 15 | **USD 480,00** |
| 4. Comprobación | 11.520,00 ÷ 24 | USD 480,00 |

### La comparación que importa

Si su vacación se hubiera calculado solo sobre el sueldo base, habría recibido 540,00 × 12 ÷ 24 = **USD 270,00**. Con la fórmula correcta recibe **USD 480,00**: USD 210,00 más. **Quien te diga que "las vacaciones se pagan con el sueldo" te está perjudicando en esa diferencia.**

Con 8 años de servicio le tocarían 18 días y su vacación valdría 32,00 × 18 = USD 576,00.

### Advertencia honesta

El archivo de parámetros **no contiene un parámetro que fije esta fórmula ni su divisor**; el fundamento se cita en términos generales y está reportado como pendiente de verificación. Lo que no admite duda es el principio: la vacación se paga sobre lo efectivamente percibido en el año, no sobre el sueldo nominal.

Fuente: Manual de Nómina, secciones 8.2 y 8.3 (ejemplo 13). Vigencia 2026-09-16.`,aplica_a:[`todos`,`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`],condiciones:[`La fórmula y el divisor están pendientes de verificación; el principio de calcular sobre lo percibido no lo está.`],parametros_usados:[`vacaciones_dias_anuales`,`vacaciones_anticipo_pago`,`vacaciones_por_antiguedad`,`iess_base_calculo`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`8.3 Ejemplo resuelto 13 — vacaciones de un vendedor de ruta con comisiones variables`,articulo:null},calculadora:`calculadora_vacaciones`,datos_requeridos:[`remuneraciones percibidas mes a mes en el año de servicio`,`antiguedad`,`dias a gozar`],siguiente_paso:`Dime tu cargo y tu fecha de ingreso y te calculo el valor de tu día de vacación con tus remuneraciones del año.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`comisiones`,`valor del dia`,`pago anticipado`,`calculo`],errores_frecuentes:[`Pagar la vacación de un comisionista sobre el sueldo base.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-038`,titulo:`¿Cuándo me pagan la plata de las vacaciones, antes o después?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`vacaciones`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:149,pregunta_canonica:`¿En qué momento se acredita la remuneración del período de vacaciones?`,variantes_pregunta:[`me pagan las vacaciones antes de salir?`,`cuando cae la plata de mis vacaciones`,`salgo el lunes cuando me depositan`,`las vacaciones se pagan al volver?`,`vacaciones pago anticipado`],respuesta_corta:`Antes de salir. La remuneración del período de vacaciones se paga por anticipado (parámetro vacaciones_anticipo_pago) y en VERTIENTE se acredita a más tardar el último día laborable previo al inicio de tus vacaciones.`,respuesta_extendida:`### La regla

El parámetro vacaciones_anticipo_pago establece que la remuneración correspondiente al período de vacaciones se paga **por anticipado, antes de que el colaborador salga**.

La política interna de VERTIENTE concreta ese principio: se acredita **a más tardar el último día laborable previo** al inicio de las vacaciones (Reglamento Interno, Art. 58, numeral 4).

### Si te lo pagaron después

Pagar la vacación al retorno está mal y es uno de los errores frecuentes listados en el manual. Repórtalo a Nómina: te responden por escrito en 5 días hábiles.

### Nota de verificación

El plazo exacto de anticipación que fija la norma está marcado para verificación. Lo que no está en duda es que el pago es **anticipado**, no posterior.

Fuente: Manual de Nómina, sección 8.1, y Reglamento Interno, Art. 58. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El plazo exacto de anticipación está pendiente de verificación; el carácter anticipado del pago no lo está.`],parametros_usados:[`vacaciones_anticipo_pago`,`vacaciones_dias_anuales`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones, permisos y licencias`,articulo:`Art. 58`},calculadora:`calculadora_vacaciones`,datos_requeridos:[`fecha de inicio de las vacaciones`],siguiente_paso:`Confirma con tu jefatura la fecha de inicio registrada. Si la acreditación no llegó antes de salir, repórtalo a Nómina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`pago anticipado`,`acreditacion`],errores_frecuentes:[`Aceptar que la vacación se pague después del retorno.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-039`,titulo:`¿Hasta cuántos años puedo acumular vacaciones?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`vacaciones`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:41,pregunta_canonica:`¿Se pueden acumular las vacaciones y hasta cuándo?`,variantes_pregunta:[`puedo juntar mis vacaciones de varios años`,`hasta cuando puedo acumular vacaciones`,`tengo 3 periodos sin tomar que pasa`,`pierdo las vacaciones si no las tomo`,`me pueden obligar a tomar vacaciones`],respuesta_corta:`Hasta tres años (parámetro vacaciones_acumulacion_maxima_anios) y puedes gozarlas juntas en el cuarto. Si no las tomas, el derecho de los años más antiguos se pierde: por eso RR.HH. alerta por escrito al llegar a dos períodos acumulados.`,respuesta_extendida:`### La regla

Puedes acumular vacaciones hasta por **tres años** y gozarlas juntas en el cuarto. Pasado ese tope, el derecho de los años más antiguos se pierde.

### Las alertas de VERTIENTE

| Períodos acumulados | Qué pasa |
|---|---|
| 2 | Alerta automática por escrito a la jefatura y al colaborador |
| 3 | Alerta con copia a la Gerencia de Recursos Humanos |

El objetivo es que nadie pierda el derecho por falta de planificación de la instalación.

### El calendario anual

Recursos Humanos elabora el calendario anual de vacaciones por instalación y por ruta **antes del 30 de noviembre** de cada año, conciliando la necesidad operativa con tu preferencia. El calendario se publica y se comunica individualmente. Un cambio de fecha ya notificada requiere tu acuerdo o, en necesidad operativa extraordinaria, aviso con al menos 15 días de anticipación y reprogramación inmediata dentro del mismo período.

Fuente: Manual de Nómina, sección 8.4, y Reglamento Interno, Art. 58. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La acumulación por encima de 3 años hace perder el derecho de los años más antiguos.`],parametros_usados:[`vacaciones_acumulacion_maxima_anios`,`vacaciones_dias_anuales`,`vacaciones_por_antiguedad`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`8.4 Acumulación, negativa justificada y venta de vacaciones`,articulo:null},calculadora:`calculadora_vacaciones`,datos_requeridos:[`fecha de ingreso`,`periodos gozados y pendientes`],siguiente_paso:`Dime tu fecha de ingreso y reviso cuántos períodos tienes pendientes. Si tienes dos o más, conviene que agendes con tu jefatura ya.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`acumulacion`,`calendario`,`alerta`],errores_frecuentes:[`Acumular cuatro o cinco períodos "porque no hay gente".`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-040`,titulo:`Me negaron las vacaciones que pedí: ¿pueden hacerlo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`vacaciones`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:43,pregunta_canonica:`¿Puede la empresa negar o reprogramar mis vacaciones?`,variantes_pregunta:[`me negaron las vacaciones`,`mi jefe no me da vacaciones porque no hay gente`,`pueden cambiarme la fecha de vacaciones`,`me cancelaron las vacaciones ya aprobadas`,`que hago si no me dejan salir de vacaciones`],respuesta_corta:`Pueden diferir hasta 15 días por una causa operativa concreta y por escrito, pero NUNCA pueden suprimir tu derecho. "No hay gente" no es un motivo válido; un motivo escrito y concreto sí lo es, y debe venir con fecha alternativa propuesta.`,respuesta_extendida:`### Qué puede y qué no puede hacer la empresa

| Puede | No puede |
|---|---|
| Negar hasta 15 días de vacaciones en casos justificados y acumularlos | Suprimir el derecho |
| Reprogramar por necesidad operativa extraordinaria, con al menos 15 días de aviso | Cambiar la fecha sin acuerdo ni aviso |
| Pedir que el descanso se coordine con el calendario del CD | Dejar el período sin fecha alternativa |

### La forma es parte del derecho

En VERTIENTE la negativa debe constar **por escrito**, con motivo operativo concreto y con **fecha alternativa propuesta**. "No hay gente" no es un motivo escrito; "cierre de inventario anual del CD entre el 1 y el 12 de diciembre" sí lo es.

### Y durante las vacaciones

Está prohibido llamarte a trabajar mientras estás de vacaciones, salvo emergencia grave y con reprogramación inmediata de los días interrumpidos (Reglamento Interno, Art. 58, numeral 5).

Fuente: Manual de Nómina, sección 8.4, y Reglamento Interno, Art. 58. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si la negativa deriva en un conflicto individual con la jefatura, la consulta pasa a zona roja y se escala a Relaciones Laborales y Disciplina.`],parametros_usados:[`vacaciones_dias_anuales`,`vacaciones_acumulacion_maxima_anios`,`vacaciones_por_antiguedad`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`8.4 Acumulación, negativa justificada y venta de vacaciones`,articulo:null},calculadora:null,datos_requeridos:[`fechas solicitadas`,`motivo escrito de la negativa`],siguiente_paso:`Pide la negativa por escrito con el motivo y la fecha alternativa. Si no te la dan, dímelo y te conecto con el Generalista de RR.HH. de tu zona.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`negativa`,`reprogramacion`,`derechos`],errores_frecuentes:[`Aceptar una negativa verbal sin motivo ni fecha alternativa.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-041`,titulo:`¿Puedo vender mis vacaciones en vez de tomarlas?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`vacaciones`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:28,pregunta_canonica:`¿VERTIENTE paga las vacaciones en dinero sin que el colaborador descanse?`,variantes_pregunta:[`puedo vender mis vacaciones`,`que me paguen las vacaciones y sigo trabajando`,`me pagan en plata si no salgo de vacaciones`,`necesito la plata puedo no tomar vacaciones`,`cambiar vacaciones por dinero`],respuesta_corta:`No. VERTIENTE no compra vacaciones: el derecho es al descanso, no a un pago adicional. Las vacaciones no gozadas se pagan en dinero solo cuando termina la relación laboral, dentro del acta de finiquito.`,respuesta_extendida:`### Por qué no

El derecho a las vacaciones es un derecho al **descanso**. Cambiarlo por dinero contradice su finalidad: tu salud y tu descanso no son negociables. Por eso, si propones "que me las paguen y sigo trabajando", la respuesta es no, y la razón se explica sin rodeos.

### Cuándo sí se pagan en dinero

Solo al terminar la relación laboral. Las vacaciones no gozadas se liquidan en el acta de finiquito, con el detalle de los períodos y los días correspondientes (Reglamento Interno, Art. 64).

### Si el problema es económico

Eso es otra conversación y tiene otras vías: anticipo quincenal (hasta el 50% de lo devengado en la quincena), préstamo interno sin interés hasta 12 cuotas, o apoyo por calamidad. Dímelo y te conecto con Nómina y Compensaciones.

Fuente: Manual de Nómina, sección 8.4, y Reglamento Interno, Art. 64. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si la consulta viene de una dificultad económica personal, pasa a zona ámbar y se deriva a Nómina y Compensaciones.`],parametros_usados:[`vacaciones_dias_anuales`,`vacaciones_acumulacion_maxima_anios`,`anticipo_quincenal_tope`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`8.4 Acumulación, negativa justificada y venta de vacaciones`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si lo que necesitas es liquidez, dímelo: te explico el anticipo quincenal y el préstamo interno, y te conecto con Nómina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`venta de vacaciones`,`descanso`,`derecho irrenunciable`],errores_frecuentes:[`Creer que se pueden cambiar las vacaciones por dinero estando activo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-042`,titulo:`¿Cuánto me toca de utilidades y cuándo las pagan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`utilidades`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:284,pregunta_canonica:`¿Cómo se calculan y cuándo se pagan las utilidades?`,variantes_pregunta:[`cuanto me toca de utilidades`,`cuando pagan las utilidades`,`como se reparten las utilidades`,`las utilidades dependen del sueldo?`,`que es el 10 y el 5 de utilidades`,`utilidades kuando caen`],respuesta_corta:`Se reparte el 15% de las utilidades líquidas: 10% por días trabajados (igual para todos, sin importar el cargo) y 5% por cargas familiares. La fecha límite del ejercicio 2025 fue el 2026-04-15 y ya se pagaron.`,respuesta_extendida:`### Las dos bolsas

| Bolsa | Porcentaje | Cómo se reparte | Parámetro |
|---|---|---|---|
| Por tiempo trabajado | 10% de las utilidades líquidas | Por igual entre todos, en proporción a los **días trabajados**, sin distinción de cargo ni de sueldo | utilidades_porcentaje_por_trabajador |
| Por cargas familiares | 5% de las utilidades líquidas | En proporción al número de cargas familiares declaradas | utilidades_porcentaje_cargas_familiares |

### Ejemplo resuelto — ejercicio 2025

Utilidades líquidas USD 4.200.000,00 → 15% = USD 630.000,00 (bolsa del 10%: USD 420.000,00; bolsa del 5%: USD 210.000,00). Con 420.000 días-persona y 1.400 cargas validadas:

- Valor del día trabajado = 420.000,00 ÷ 420.000 = **USD 1,00**
- Valor de la carga familiar = 210.000,00 ÷ 1.400 = **USD 150,00**

| Colaborador | Días | Cargas | Cálculo | Total |
|---|---|---|---|---|
| Jefferson Quimí, prevendedor | 365 | 3 | 365,00 + 450,00 | **USD 815,00** |
| Digna Macías, auxiliar de bodega | 262 | 1 | 262,00 + 150,00 | **USD 412,00** |

### El punto que más sorprende

Tu **sueldo no influye**. Un operario de línea y un jefe regional que trabajaron los mismos días reciben exactamente lo mismo por la bolsa del 10%.

### Y el punto que más duele

Si la empresa no tuvo utilidades líquidas, **no hay reparto**. Las utilidades no son un bono garantizado ni un décimo quinto sueldo.

### Advertencia sobre la fecha

El parámetro utilidades_fecha_limite_pago está marcado para verificación: el plazo legal está redactado como un número de días contados desde la liquidación de utilidades, no como una fecha fija. Antes de comprometer una fecha hay que verificar con Financiero y con el Ministerio del Trabajo.

Fuente: Manual de Nómina, secciones 9.1 y 9.3 (ejemplo 14). Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Solo hay reparto si hubo utilidades líquidas en el ejercicio.`,`Las cargas familiares deben estar declaradas y documentadas antes del cierre del ejercicio.`,`Existe un tope individual de 24 SBU.`],parametros_usados:[`utilidades_porcentaje_total`,`utilidades_porcentaje_por_trabajador`,`utilidades_porcentaje_cargas_familiares`,`utilidades_fecha_limite_pago`,`utilidades_tope`,`periodos_beneficios_2026`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`9. Utilidades`,articulo:null},calculadora:`calculadora_utilidades`,datos_requeridos:[`dias trabajados en el ejercicio`,`numero de cargas familiares declaradas y validadas`,`valores unitarios del ejercicio publicados por Financiero`],siguiente_paso:`Dime tus días trabajados y tus cargas declaradas y te estimo el valor con los unitarios del último ejercicio.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`utilidades`,`15 por ciento`,`cargas familiares`,`dias trabajados`,`abril`],errores_frecuentes:[`Creer que el que gana más recibe más utilidades.`,`Suponer que las utilidades se pagan todos los años pase lo que pase.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-043`,titulo:`¿Quién cuenta como carga familiar para las utilidades?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`utilidades`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:146,pregunta_canonica:`¿Qué familiares cuentan como carga para el 5% de utilidades y hasta cuándo se declaran?`,variantes_pregunta:[`quienes son cargas familiares`,`mi hijo de 19 cuenta como carga`,`mi conviviente cuenta para utilidades`,`hasta cuando declaro mis cargas`,`que papeles necesito para declarar carga`,`mi hijo nacio en septiembre cuenta?`],respuesta_corta:`Cuentan el cónyuge o conviviente en unión de hecho reconocida, los hijos menores de 18 años y los hijos con discapacidad de cualquier edad. Deben estar declaradas y documentadas ante RR.HH. ANTES del cierre del ejercicio.`,respuesta_extendida:`### Quiénes cuentan

- El **cónyuge**, o el **conviviente** en unión de hecho legalmente reconocida.
- Los **hijos menores de 18 años**.
- Los **hijos con discapacidad**, de cualquier edad.

### La documentación

| Carga | Documento |
|---|---|
| Cónyuge | Acta de matrimonio |
| Conviviente | Inscripción de unión de hecho |
| Hijo menor de 18 | Partida de nacimiento o cédula |
| Hijo con discapacidad | Carné de discapacidad |

### El plazo, que es lo que más reclamos genera

Las cargas deben estar declaradas y documentadas **antes del cierre del ejercicio**. Si no se declaran a tiempo, **no se computan**. Esta es la causa número uno de reclamos de utilidades en VERTIENTE, y no es una formalidad burocrática: sin la declaración a tiempo, Nómina no tiene con qué calcular tu componente del 5%.

Es obligación del colaborador mantener actualizada la declaración e informar todo cambio dentro de los 30 días de producido, y obligación de la Empresa recordarlo por escrito al menos una vez al año, en noviembre (Reglamento Interno, Art. 53).

### Prorrateos

Un hijo que cumple 18 años durante el ejercicio deja de contar desde esa fecha y Nómina lo prorratea. Un hijo que nace en septiembre cuenta desde septiembre.

Fuente: Manual de Nómina, sección 9.2, y Reglamento Interno, Art. 53. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La carga debe estar declarada y documentada antes del cierre del ejercicio para computar en ese reparto.`],parametros_usados:[`utilidades_porcentaje_cargas_familiares`,`utilidades_porcentaje_total`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`9.2 Quién cuenta como carga familiar`,articulo:null},calculadora:`calculadora_utilidades`,datos_requeridos:[`composicion familiar`,`documentos de respaldo`,`fechas de nacimiento de los hijos`],siguiente_paso:`Si tienes una carga sin declarar, preséntala en RR.HH. con el documento de respaldo antes del cierre del ejercicio. Te abro el caso si quieres.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`utilidades`,`cargas familiares`,`declaracion`,`plazo`,`documentos`],errores_frecuentes:[`Declarar las cargas cuando ya se están pagando las utilidades.`,`Contar como carga a un hijo de 19 años sin discapacidad.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-044`,titulo:`Ya no trabajo en VERTIENTE: ¿me tocan las utilidades?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`utilidades`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:143,pregunta_canonica:`¿Los extrabajadores conservan el derecho a las utilidades del ejercicio en que trabajaron?`,variantes_pregunta:[`renuncie en junio me tocan utilidades`,`ya sali de la empresa me pagan utilidades`,`como cobro mis utilidades si ya no trabajo ahi`,`cuando convocan a los extrabajadores`,`perdi las utilidades por irme?`],respuesta_corta:`Sí te corresponden, por los días que trabajaste en ese ejercicio. El derecho no se pierde por haber salido (parámetro utilidades_extrabajadores). VERTIENTE convoca públicamente a los extrabajadores: acércate con tu cédula.`,respuesta_extendida:`### La regla

Quien trabajó durante el ejercicio conserva su derecho a la parte proporcional de utilidades **aunque ya no esté en la empresa al momento del pago** (parámetro utilidades_extrabajadores). VERTIENTE debe **convocar públicamente** a los extrabajadores para el cobro.

### Qué significa en la práctica

Si saliste en junio de 2026, te corresponden las utilidades del ejercicio 2026 por los días que trabajaste en ese año, y se pagarán en 2027 en la fecha general del reparto. No se pagan en tu acta de finiquito: se pagan con el resto de la nómina en la fecha del reparto.

### La respuesta correcta y la incorrecta

- Correcta: "sí le corresponden, por los días que trabajó en ese ejercicio; esté pendiente de la convocatoria pública y acérquese con su cédula".
- Incorrecta: "ya no le toca porque se fue".

Fuente: Manual de Nómina, secciones 9.5 y 13.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Se paga en la fecha general del reparto, no en el acta de finiquito.`,`Solo hay reparto si hubo utilidades líquidas en ese ejercicio.`],parametros_usados:[`utilidades_extrabajadores`,`utilidades_fecha_limite_pago`,`utilidades_porcentaje_total`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`9.5 Quien ya no trabaja en la empresa`,articulo:null},calculadora:`calculadora_utilidades`,datos_requeridos:[`fecha de salida`,`dias trabajados en el ejercicio`,`cargas declaradas antes del cierre`],siguiente_paso:`Mantén actualizado tu contacto con Administración de Personal y atiende la convocatoria pública. Lleva tu cédula el día del cobro.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`utilidades`,`extrabajador`,`convocatoria`,`proporcional`],errores_frecuentes:[`Creer que quien renunció pierde las utilidades del año en que trabajó.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-045`,titulo:`¿Hay un tope de utilidades que puedo recibir?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`utilidades`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:6,pregunta_canonica:`¿Cuál es el tope individual de utilidades y qué pasa con el excedente?`,variantes_pregunta:[`hay un maximo de utilidades`,`cuanto es el tope de utilidades`,`que pasa si me pasan del tope`,`los 24 sbu de utilidades que son`,`a donde va el excedente de utilidades`],respuesta_corta:`El tope individual es de 24 SBU (parámetro utilidades_tope), es decir USD 11.280,00 con el SBU de simulación. El excedente se transfiere al régimen de prestaciones solidarias de la seguridad social.`,respuesta_extendida:`### El tope

| Dato | Valor | Parámetro |
|---|---|---|
| Tope individual | 24 SBU | utilidades_tope |
| Equivalente con el SBU de simulación | 24 × 470,00 = USD 11.280,00 | utilidades_tope × sbu |
| Destino del excedente | Régimen de prestaciones solidarias de la seguridad social | utilidades_tope |

El tope se vuelve relevante en años de utilidad muy alta y en personal comercial de alta comisión. En el ejemplo del manual, ni Jefferson (USD 815,00) ni Digna (USD 412,00) se acercan.

### Advertencia de verificación

El parámetro utilidades_tope está marcado verificar_antes_de_produccion porque no se tiene certeza absoluta de si los 24 SBU aplican por igual a todos los trabajadores o si hay tramos distintos según el tipo de cargo, ni del mecanismo exacto de transferencia del excedente. Antes de liquidar utilidades de personal comercial de alta comisión, esto debe verificarse.

Fuente: Manual de Nómina, sección 9.4. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El tope y el mecanismo de transferencia del excedente están pendientes de verificación.`],parametros_usados:[`utilidades_tope`,`sbu`,`utilidades_porcentaje_total`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`9.4 El tope individual`,articulo:null},calculadora:`calculadora_utilidades`,datos_requeridos:[`valor individual de utilidades calculado`],siguiente_paso:`Si tu cálculo se acerca al tope, consulta con Nómina y Compensaciones antes de la liquidación del ejercicio.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`utilidades`,`tope`,`24 sbu`,`excedente`],errores_frecuentes:[`Suponer que el excedente sobre el tope se pierde sin destino.`],confianza:`baja`,requiere_verificacion_legal:!0},{id:`KB-046`,titulo:`¿Por qué me descuentan el 9,45% y adónde va?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`iess`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:359,pregunta_canonica:`¿Cuánto es el aporte personal al IESS y sobre qué se calcula?`,variantes_pregunta:[`cuanto me descuentan de iess`,`que es el 9.45 de mi rol`,`sobre que calculan mi aporte al iess`,`la empresa me quita el 11.15?`,`porque mi aporte cambia cada mes`,`aporte iess kuanto es`],respuesta_corta:`Te descuentan el 9,45% de tu materia gravada (parámetro iess_aporte_personal) y va a tu seguridad social. El 11,15% de aporte patronal NO se te descuenta: lo paga VERTIENTE además de tu sueldo.`,respuesta_extendida:`### Los dos aportes

| Aporte | Porcentaje | Quién lo paga | ¿Aparece en tu rol? | Parámetro |
|---|---|---|---|---|
| Personal | 9,45% de la materia gravada | El colaborador | **Sí**, como egreso | iess_aporte_personal |
| Patronal | 11,15% de la materia gravada | VERTIENTE | **No**, es costo del empleador | iess_aporte_patronal |

### Ejemplo resuelto

Jefferson Quimí, materia gravada de septiembre: sueldo 520,00 + comisiones 273,00 = **USD 793,00**.

| Paso | Operación | Resultado |
|---|---|---|
| Aporte personal (se le descuenta) | 793,00 × 9,45% | **USD 74,94** |
| Aporte patronal (lo paga la empresa) | 793,00 × 11,15% | **USD 88,42** |
| Total que ingresa al IESS por él | 74,94 + 88,42 | USD 163,36 |

### La pregunta que siempre aparece

Cuando alguien pregunta "¿por qué la empresa me quita el 11,15%?", la respuesta es que **no se lo quita**: lo pone la empresa además de su sueldo, y por eso ese valor aparece en el bloque informativo del rol y no en los egresos.

### Base mínima

No se aporta sobre menos del SBU en jornada completa (parámetro iess_base_minima_aportacion); en jornadas parciales legalmente registradas la base es proporcional a las horas efectivamente trabajadas.

Fuente: Manual de Nómina, sección 10.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`En jornada parcial registrada, la base mínima es proporcional a las horas trabajadas.`],parametros_usados:[`iess_aporte_personal`,`iess_aporte_patronal`,`iess_base_calculo`,`iess_base_minima_aportacion`,`sbu`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`10.1 Los dos aportes`,articulo:null},calculadora:`calculadora_aportes_iess`,datos_requeridos:[`materia gravada del mes`],siguiente_paso:`Dime tu materia gravada del mes y te calculo tu aporte personal y el patronal que pone la empresa.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`iess`,`aporte personal`,`aporte patronal`,`9.45`,`11.15`],errores_frecuentes:[`Creer que el aporte patronal se descuenta del sueldo del colaborador.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-047`,titulo:`¿Desde cuándo estoy afiliado al IESS?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`iess`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:168,pregunta_canonica:`¿Cuándo se registra el aviso de entrada al IESS y desde qué día estoy afiliado?`,variantes_pregunta:[`desde cuando estoy afiliado`,`cuando me afilian al iess`,`me afilian despues del periodo de prueba?`,`entre hace una semana ya estoy asegurado`,`aviso de entrada al iess plazo`],respuesta_corta:`Desde tu primer día de labor. La afiliación no espera al período de prueba ni al plazo de 15 días: ese plazo es solo para registrar el aviso, y VERTIENTE lo hace el mismo día de tu ingreso.`,respuesta_extendida:`### Los dos avisos

| Aviso | Plazo del parámetro | Política de VERTIENTE |
|---|---|---|
| Entrada | 15 días desde el inicio de la relación laboral (iess_aviso_entrada_plazo) | **El mismo día de ingreso**, sin usar el plazo |
| Salida | 3 días desde la terminación (iess_aviso_salida_plazo) | El mismo día de la salida |

### La distinción que importa

La afiliación debe hacerse **desde el primer día de labor**; el plazo es para registrar el aviso, no para empezar a afiliar. Si alguien te dice que "te afilian después de los tres meses de prueba", está mal: el período de prueba (parámetro contrato_periodo_prueba_dias, 90 días) no suspende la afiliación.

### Por qué el aviso de salida es crítico

De él dependen el seguro de desempleo, la cesantía y tu atención médica como extrabajador. Por eso VERTIENTE no usa el plazo de 3 días.

### Nota de verificación

Ambos parámetros están marcados verificar_antes_de_produccion: los plazos han cambiado por resolución del IESS en distintos momentos. Antes de informar un plazo a alguien que sale, hay que verificarlo en la plataforma del IESS.

Fuente: Manual de Nómina, sección 10.3, y Reglamento Interno, Art. 65. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los plazos de aviso están pendientes de verificación con el IESS.`],parametros_usados:[`iess_aviso_entrada_plazo`,`iess_aviso_salida_plazo`,`contrato_periodo_prueba_dias`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`10.3 Avisos de entrada y salida`,articulo:null},calculadora:null,datos_requeridos:[`fecha de ingreso`],siguiente_paso:`Verifica tu historia laboral en la plataforma del IESS con tu cédula. Si tu fecha de entrada no coincide con tu primer día, repórtalo a Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`iess`,`afiliacion`,`aviso de entrada`,`aviso de salida`,`periodo de prueba`],errores_frecuentes:[`Creer que la afiliación empieza después del período de prueba.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-048`,titulo:`¿Por qué me descuentan el préstamo del IESS y puedo cambiar la cuota?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`iess`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:134,pregunta_canonica:`¿Cómo funciona el descuento del préstamo quirografario en el rol?`,variantes_pregunta:[`me descuentan el quirografario del rol`,`puedo bajar la cuota del prestamo del iess`,`quiero precancelar mi quirografario`,`quien decide el dividendo del iess`,`la empresa me puede reducir la cuota del prestamo`],respuesta_corta:`El IESS notifica el dividendo mensual y VERTIENTE solo lo retiene y lo transfiere con la planilla: la empresa no lo decide ni lo puede modificar. Para cambiar el monto, refinanciar o precancelar, el trámite es directamente con el IESS.`,respuesta_extendida:`### Cómo llega ese descuento a tu rol

| Tipo | Mecanismo | ¿Puede la empresa modificarlo? |
|---|---|---|
| Préstamo quirografario | El IESS notifica el dividendo mensual al empleador; VERTIENTE lo retiene y lo transfiere con la planilla de aportes | **No** |
| Préstamo hipotecario | Mismo mecanismo | **No** |

En el rol de Jefferson (ejemplo del manual) el dividendo aparece como un egreso de USD 96,40.

### Qué sí puede hacer Nómina

Explicarte el mecanismo y mostrarte el valor notificado. Nada más: el empleador no negocia el dividendo con el IESS.

### Advertencia de verificación

El parámetro iess_prestamo_quirografario_descuento está marcado para verificación en cuanto al tope del dividendo respecto del ingreso del afiliado y al monto máximo prestable, que el IESS ajusta periódicamente. No registro esas cifras para no inventarlas.

Fuente: Manual de Nómina, sección 10.4, y Reglamento Interno, Art. 46. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los topes de dividendo y monto prestable dependen de la normativa vigente del IESS.`],parametros_usados:[`iess_prestamo_quirografario_descuento`,`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`10.4 Préstamos del IESS y su descuento`,articulo:null},calculadora:null,datos_requeridos:[`dividendo notificado por el IESS`],siguiente_paso:`Para refinanciar, precancelar o cambiar el dividendo, haz el trámite en la plataforma del IESS. Nómina te muestra el valor notificado si lo necesitas.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`iess`,`quirografario`,`prestamo`,`descuento`,`dividendo`],errores_frecuentes:[`Pedirle a Nómina que reduzca o suspenda el dividendo del IESS.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-049`,titulo:`Estoy con reposo médico: ¿cuánto voy a cobrar?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`iess`,zona:`ambar`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:147,pregunta_canonica:`¿Cómo afecta a mi rol un reposo por enfermedad con certificado del IESS?`,variantes_pregunta:[`estoy con certificado cuanto me pagan`,`me operaron cuanto cobro de subsidio`,`los dias de reposo me los descuentan`,`quien paga los primeros dias de enfermedad`,`llevo un mes con reposo que pasa con mi sueldo`],respuesta_corta:`El esquema es que los primeros días los asume el empleador y desde cierto día el IESS paga subsidio al afiliado. El número exacto de días y el porcentaje están pendientes de verificación, así que no te voy a dar una cifra inventada: te conecto con Nómina, que te contacta en 1 día hábil.`,respuesta_extendida:`### El mecanismo

El parámetro licencia_enfermedad_propia_subsidio establece el esquema general: los primeros días de enfermedad los asume el empleador y, a partir de cierto día, el IESS paga subsidio por enfermedad al afiliado que cumple los requisitos de aportación.

**Este parámetro está marcado verificar_antes_de_produccion en un punto muy sensible: el número exacto de días a cargo del empleador, el porcentaje del subsidio y el número mínimo de aportaciones exigidas.** Por eso no improviso un porcentaje.

### Cómo se ve en tu rol, con independencia de la cifra exacta

| Línea del rol | Qué pasa durante el reposo |
|---|---|
| Sueldo base | Se paga por los días a cargo del empleador; por los días de subsidio, la empresa registra el ajuste correspondiente |
| Subsidio IESS | El IESS acredita el subsidio al afiliado según su propio procedimiento |
| Aporte personal | Se sigue calculando sobre la materia gravada que corresponda al período |
| Comisiones | La cuota de ruta se ajusta a los días efectivamente trabajados: **no se penaliza el reposo** |

### Lo que sí es seguro

Que tu cuota comercial se ajusta y que no puedes ser sancionado, postergado ni excluido de comisiones por haber usado una licencia a la que tienes derecho (Reglamento Interno, Art. 63).

Fuente: Manual de Nómina, sección 10.5, y Reglamento Interno, Art. 60 y 63. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El certificado del IESS se acepta directamente; el de profesional particular requiere validación del médico ocupacional.`,`Los días a cargo del empleador y el porcentaje del subsidio están pendientes de verificación.`],parametros_usados:[`licencia_enfermedad_propia_subsidio`,`permiso_atencion_medica`,`iess_base_calculo`,`iess_aporte_personal`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`10.5 Subsidios por enfermedad y por maternidad, y su efecto en el rol`,articulo:null},calculadora:null,datos_requeridos:[`dias de reposo certificados`,`entidad que emitio el certificado`],siguiente_paso:`Registré tu consulta. Nómina y Compensaciones te contacta en 1 día hábil para revisar tu caso con la norma vigente. Presenta tu certificado dentro de los 3 días laborables siguientes al retorno.`,escalamiento:{requerido:!0,rol:`Jefatura de Nómina y Compensaciones`,motivo:`Situación personal de salud y cifra de subsidio pendiente de verificación. VERA entrega el marco y no indaga el diagnóstico.`},etiquetas:[`reposo`,`subsidio`,`enfermedad`,`iess`,`certificado medico`],errores_frecuentes:[`Creer que el reposo penaliza la cuota de comisión.`],confianza:`baja`,requiere_verificacion_legal:!0},{id:`KB-050`,titulo:`Licencia de maternidad: ¿cuántos días y cuánto cobro?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`licencias`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:168,pregunta_canonica:`¿Cuánto dura la licencia de maternidad y cómo se paga?`,variantes_pregunta:[`cuantos dias de maternidad tengo`,`la licencia de maternidad se paga completa`,`tuve gemelos cuantos dias mas`,`me pagan el 100% en maternidad`,`cuando vuelvo de maternidad que pasa con mi ruta`],respuesta_corta:`Son 84 días (12 semanas) con remuneración, más 10 días adicionales en parto múltiple. El IESS cubre parte del subsidio y VERTIENTE completa la diferencia hasta el 100% de tu remuneración, con el desglose visible en tu rol.`,respuesta_extendida:`### Duración

| Concepto | Días | Parámetro |
|---|---|---|
| Licencia de maternidad | 84 (12 semanas) | licencia_maternidad_dias |
| Adicionales por parto múltiple | 10 | licencia_maternidad_parto_multiple_adicional (marcado para verificación) |

### Cómo se paga

El IESS cubre una parte del subsidio y **el empleador completa la diferencia hasta el 100% de la remuneración**, siempre que la afiliación esté al día. En el rol ves tu remuneración completa, con el desglose entre subsidio y complemento patronal.

### Al volver

Te corresponde la jornada reducida por lactancia: 6 horas diarias sin reducción de remuneración (parámetro lactancia_jornada_horas) durante 12 meses contados **desde el parto**, no desde el retorno de la licencia (parámetro lactancia_duracion_meses).

### Protección

Ningún colaborador puede ser sancionado, postergado en su carrera, cambiado de ruta o turno en forma perjudicial ni excluido de comisiones o bonos por haber usado una licencia a la que tiene derecho (Reglamento Interno, Art. 63). Existe además protección reforzada durante el embarazo y los doce meses de lactancia (parámetro estabilidad_embarazo_lactancia).

Fuente: Manual de Nómina, sección 10.5, y Reglamento Interno, Art. 59 y 63. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El complemento hasta el 100% requiere afiliación al día.`,`Los días adicionales por parto múltiple están pendientes de verificación.`],parametros_usados:[`licencia_maternidad_dias`,`licencia_maternidad_parto_multiple_adicional`,`lactancia_jornada_horas`,`lactancia_duracion_meses`,`estabilidad_embarazo_lactancia`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones, permisos y licencias`,articulo:`Art. 59`},calculadora:null,datos_requeridos:[`fecha probable de parto o fecha de parto`,`certificado medico`],siguiente_paso:`Presenta la solicitud en el portal interno; para maternidad la respuesta es inmediata y la documentación puede completarse después.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`maternidad`,`licencia`,`subsidio`,`lactancia`,`proteccion`],errores_frecuentes:[`Creer que durante la maternidad se cobra solo el subsidio del IESS.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-051`,titulo:`¿Cuántos días de licencia por paternidad me dan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`licencias`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:161,pregunta_canonica:`¿Cuál es la duración de la licencia de paternidad y sus adicionales?`,variantes_pregunta:[`cuantos dias me dan por nacimiento de mi hijo`,`licencia de paternidad cuantos dias`,`fue cesarea me dan mas dias`,`mi bebe nacio prematuro cuantos dias tengo`,`paternidad se paga?`],respuesta_corta:`Diez días con remuneración (parámetro licencia_paternidad_dias), más 5 adicionales en cesárea o parto múltiple. Hay adicionales por nacimiento prematuro y por enfermedad grave del recién nacido, pero esos están pendientes de verificación.`,respuesta_extendida:`### La escala

| Situación | Días adicionales | Parámetro | Estado |
|---|---|---|---|
| Parto normal | 10 días base | licencia_paternidad_dias | verificado |
| Cesárea o parto múltiple | +5 | licencia_paternidad_cesarea_multiple_adicional | verificado |
| Nacimiento prematuro o con cuidados especiales | +8 | licencia_paternidad_prematuro_adicional | marcado para verificación |
| Enfermedad degenerativa, terminal, irreversible o discapacidad severa del recién nacido | +25 | licencia_paternidad_enfermedad_grave_adicional | marcado para verificación |

Los dos últimos están marcados para verificación en cuanto a la definición médica que los habilita y el certificado que los sustenta. Ante un caso real, RR.HH. consulta la norma vigente y **resuelve a favor del colaborador** mientras se aclara.

### Trámite

Se solicita por el portal interno o el formato físico de la instalación. Para paternidad la respuesta es **inmediata** y la documentación puede completarse después (Reglamento Interno, Art. 61).

Fuente: Reglamento Interno, Art. 59 y 61, y Manual de Nómina, sección 10.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los adicionales por prematuro y por enfermedad grave requieren certificado médico y están pendientes de verificación.`],parametros_usados:[`licencia_paternidad_dias`,`licencia_paternidad_cesarea_multiple_adicional`,`licencia_paternidad_prematuro_adicional`,`licencia_paternidad_enfermedad_grave_adicional`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones, permisos y licencias`,articulo:`Art. 59`},calculadora:null,datos_requeridos:[`fecha de nacimiento`,`tipo de parto`,`certificado medico si aplica adicional`],siguiente_paso:`Solicita la licencia en el portal interno; la respuesta es inmediata y puedes completar los documentos después.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`paternidad`,`licencia`,`nacimiento`,`dias`],errores_frecuentes:[`Creer que la licencia de paternidad se descuenta del sueldo.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-052`,titulo:`Jornada de lactancia: ¿me bajan el sueldo por salir dos horas antes?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`licencias`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:45,pregunta_canonica:`¿Cómo funciona la jornada reducida por lactancia y desde cuándo se cuenta?`,variantes_pregunta:[`las 2 horas de lactancia me descuentan`,`cuanto dura el permiso de lactancia`,`desde cuando cuentan los 12 meses de lactancia`,`puedo juntar las horas de lactancia`,`mi jefe dice que no se puede en mi ruta`],respuesta_corta:`No te bajan nada: la jornada es de 6 horas diarias sin reducción de remuneración (parámetro lactancia_jornada_horas), durante 12 meses contados desde el parto, no desde tu retorno de la licencia.`,respuesta_extendida:`### El derecho

| Dato | Valor | Parámetro |
|---|---|---|
| Jornada reducida | 6 horas diarias (2 horas menos que las 8 ordinarias) | lactancia_jornada_horas |
| Duración | 12 meses contados **desde el parto** | lactancia_duracion_meses |
| Efecto en el rol | **Ninguno.** La remuneración es la misma | lactancia_jornada_horas |

### Cómo se distribuyen las dos horas

Al inicio, al final o divididas: eso se acuerda con la jefatura atendiendo a la operación. **Pero el derecho a la reducción no es negociable.** En la fuerza de ventas se ajusta la frecuencia de la ruta; en planta se ajusta el turno. Nunca se resuelve pidiéndole a la colaboradora que renuncie a la reducción.

### Si te ponen problemas

Está prohibida toda represalia por usar una licencia o permiso al que tienes derecho, incluida la reducción por lactancia (Reglamento Interno, Art. 63). Si eso está ocurriendo, dímelo y lo derivo.

Fuente: Manual de Nómina, sección 10.5, y Reglamento Interno, Art. 59 y 63. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si la jefatura niega o condiciona el derecho, la consulta pasa a zona roja y se escala al Comité de Ética o a Relaciones Laborales según el caso.`],parametros_usados:[`lactancia_jornada_horas`,`lactancia_duracion_meses`,`estabilidad_embarazo_lactancia`,`jornada_horas_diarias`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones, permisos y licencias`,articulo:`Art. 59`},calculadora:null,datos_requeridos:[`fecha del parto`,`horario de jornada actual`],siguiente_paso:`Acuerda con tu jefatura cómo se distribuyen las dos horas y deja el acuerdo registrado por escrito.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`lactancia`,`jornada reducida`,`maternidad`,`derecho irrenunciable`],errores_frecuentes:[`Contar los 12 meses desde el retorno de la licencia en vez de desde el parto.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-053`,titulo:`Me descontaron el uniforme o el EPP: ¿pueden hacerlo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`descuentos`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:210,pregunta_canonica:`¿Puede la empresa descontar del rol el uniforme, el EPP o las herramientas de trabajo?`,variantes_pregunta:[`me descontaron el uniforme`,`me cobraron el casco de seguridad`,`me quieren cobrar la faja`,`el calzado de seguridad lo pago yo?`,`me descontaron el terminal de preventa`,`me kobraron los guantes esta bien?`],respuesta_corta:`No pueden. El uniforme, el EPP y las herramientas de trabajo son entrega gratuita obligatoria. Si te aparece ese descuento, está mal y debe reversarse: repórtalo a Nómina.`,respuesta_extendida:`### La regla, que no admite excepción

| Ítem | Qué obliga la norma | Parámetro |
|---|---|---|
| Ropa de trabajo | Al menos un vestido adecuado por año, **en forma completamente gratuita** | ropa_trabajo_frecuencia |
| EPP | Gratuito, obligatorio, en la cantidad y frecuencia que exija el riesgo, con capacitación de uso y **reposición inmediata por deterioro** | epp_obligacion |
| Útiles y herramientas | A cargo del empleador, en cantidad y calidad adecuadas, **sin costo para el colaborador** | utiles_herramientas_obligacion |
| Capacitación obligatoria | Dentro de la jornada y sin costo | capacitacion_obligacion_empleador |

El terminal de preventa, el lector de código y la transpaleta son **herramientas de la empresa**, no un beneficio del colaborador.

### Lo que VERTIENTE hace por encima del mínimo

Entrega **2 juegos completos de uniforme al año**, en marzo y en septiembre, más reposición por deterioro. El EPP se entrega contra la matriz de riesgos del puesto, con registro firmado y reposición inmediata sin trámite.

### Tampoco se descuenta

Ni los exámenes médicos ocupacionales, ni la capacitación obligatoria, ni faltantes de inventario, de producto o de cobranza determinados unilateralmente y sin procedimiento disciplinario previo (Reglamento Interno, Art. 46).

Fuente: Manual de Nómina, sección 11.3, y Reglamento Interno, Art. 46. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La no devolución de un activo al salir se gestiona como custodia de activos, nunca como descuento automático del finiquito.`],parametros_usados:[`ropa_trabajo_frecuencia`,`epp_obligacion`,`utiles_herramientas_obligacion`,`capacitacion_obligacion_empleador`,`examen_ocupacional_ingreso`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`11.3 Tres reglas que no admiten excepción`,articulo:null},calculadora:null,datos_requeridos:[`mes del rol`,`concepto exacto del descuento`],siguiente_paso:`Dime el mes y el concepto exacto del descuento y abro el caso con Nómina para que se reverse.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`descuentos`,`uniforme`,`epp`,`herramientas`,`descuento indebido`],errores_frecuentes:[`Aceptar el descuento del calzado de seguridad o de la faja como si fuera normal.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-054`,titulo:`¿Qué descuentos pueden aparecer legítimamente en mi rol?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`descuentos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:158,pregunta_canonica:`¿Cuáles son los únicos descuentos admisibles del rol de pagos?`,variantes_pregunta:[`que me pueden descontar del sueldo`,`cuales descuentos son legales`,`hay un limite de descuentos`,`me descontaron algo que no autorice`,`pueden descontarme sin avisarme`],respuesta_corta:`Solo diez: aporte IESS, préstamos del IESS, impuesto a la renta, pensión alimenticia por orden judicial, anticipos, préstamos internos con tu firma, comisariato con tu firma, cuotas de asociación con tu firma, tiempo no trabajado y multa con proceso disciplinario concluido. Ningún otro es admisible.`,respuesta_extendida:`### La lista taxativa

| # | Descuento | Qué lo habilita |
|---|---|---|
| 1 | Aporte personal al IESS | La ley (iess_aporte_personal) |
| 2 | Dividendo de préstamo quirografario o hipotecario del IESS | Lo notifica el IESS |
| 3 | Impuesto a la renta en relación de dependencia | Normativa tributaria |
| 4 | Pensión alimenticia | **Orden judicial**, nunca un acuerdo privado |
| 5 | Anticipo de remuneración efectivamente entregado | Tu solicitud |
| 6 | Préstamo interno de la empresa | Convenio escrito y firmado por ti |
| 7 | Comisariato | Tu firma en cada compra |
| 8 | Cuotas de asociación o sindicales | Tu autorización escrita |
| 9 | Tiempo no trabajado por ausencia injustificada o permiso personal no compensado | Reglamento Interno, Art. 36 y 38 |
| 10 | Multa disciplinaria | Proceso disciplinario concluido, con derecho a defensa |

**Ningún otro descuento es admisible.**

### El principio general

Ningún descuento se aplica sin título: o es una obligación legal, o es una orden judicial, o es una autorización escrita tuya.

### Advertencia honesta sobre el límite

El parámetro descuentos_rol_limite **no tiene un valor numérico registrado**: el archivo declara expresamente que no se tiene certeza del límite porcentual exacto ni del artículo aplicable. Por eso no enuncio un porcentaje máximo. Lo que sí afirmo es el principio: los descuentos no pueden dejarte sin lo indispensable para vivir, y en caso de duda Nómina resuelve a tu favor y difiere la cuota (Reglamento Interno, Art. 48).

Fuente: Manual de Nómina, secciones 11.1 y 11.2, y Reglamento Interno, Art. 46 y 48. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El límite porcentual de descuentos voluntarios no tiene valor registrado y está pendiente de verificación.`],parametros_usados:[`descuentos_rol_limite`,`iess_aporte_personal`,`iess_prestamo_quirografario_descuento`,`anticipo_quincenal_tope`,`comisariato_umbral`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 46`},calculadora:null,datos_requeridos:[`mes del rol`,`concepto del descuento en duda`],siguiente_paso:`Si ves un descuento que no está en esta lista, dímelo con el mes y el concepto y abro el caso con Nómina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`descuentos`,`rol de pagos`,`autorizacion escrita`,`limite`],errores_frecuentes:[`Aceptar descuentos verbales sin autorización escrita.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-055`,titulo:`Pensión alimenticia: ¿pueden bajarme o suspender el descuento?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`descuentos`,zona:`ambar`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:42,pregunta_canonica:`¿Puede Nómina modificar el descuento de pensión alimenticia?`,variantes_pregunta:[`quiero que me bajen la pension alimenticia del rol`,`mi hijo ya cumplio 18 pueden quitar el descuento`,`llegue a un acuerdo con la madre pueden bajarlo`,`me estan descontando de mas de pension`,`como suspendo la pension del rol`],respuesta_corta:`Nómina no puede reducirla, diferirla ni suspenderla: solo una nueva orden judicial modifica una orden judicial. Lo que sí te entregan es el respaldo de las retenciones efectuadas para el trámite que tú decidas seguir.`,respuesta_extendida:`### La regla

La pensión alimenticia se aplica exactamente por el monto y la periodicidad que ordena el juez. Nómina **no negocia, no reduce y no suspende**, aunque el colaborador lo pida, aunque presente un acuerdo con la otra parte, aunque alegue que el hijo ya cumplió la mayoría de edad.

Tiene además **prioridad sobre cualquier otro descuento voluntario**.

### Lo que sí puede hacer Nómina por ti

Entregarte el respaldo documentado de las retenciones efectuadas, para que lo uses en el trámite que quieras seguir ante la autoridad judicial.

### Por qué esto es así

Porque el empleador es solo el ejecutor de una orden que no emitió. Modificarla por su cuenta lo expondría a él y te expondría a ti.

Fuente: Manual de Nómina, secciones 11.2 y 11.3, y Reglamento Interno, Art. 46. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si el asunto involucra una notificación de autoridad o un abogado, pasa a zona roja y se escala a Legal y Cumplimiento en 24 horas.`],parametros_usados:[`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`11.3 Tres reglas que no admiten excepción`,articulo:null},calculadora:null,datos_requeridos:[`numero de caso judicial si lo tienes`],siguiente_paso:`Registré tu consulta. Nómina y Compensaciones te contacta en 2 días hábiles y te entrega el respaldo de las retenciones. El cambio del monto se tramita ante la autoridad judicial.`,escalamiento:{requerido:!0,rol:`Jefatura de Nómina y Compensaciones`,motivo:`Situación personal y familiar sensible con efecto económico. VERA entrega el marco, no indaga detalles y no promete un resultado.`},etiquetas:[`pension alimenticia`,`descuento`,`orden judicial`,`retencion`],errores_frecuentes:[`Creer que un acuerdo privado entre las partes basta para cambiar la retención.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-056`,titulo:`¿Cómo funciona el préstamo interno de la empresa?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`descuentos`,zona:`ambar`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:37,pregunta_canonica:`¿Puedo pedir un préstamo a VERTIENTE y en cuántas cuotas se paga?`,variantes_pregunta:[`la empresa da prestamos`,`cuantas cuotas tiene el prestamo interno`,`el prestamo de la empresa tiene interes`,`como pido un prestamo a la empresa`,`si pido licencia sin sueldo que pasa con mi prestamo`],respuesta_corta:`VERTIENTE da préstamos internos sin interés, hasta 12 cuotas, con convenio escrito y tu autorización de descuento. Es un beneficio, no un derecho exigible: lo resuelve Nómina y Compensaciones, que te contacta en 2 días hábiles.`,respuesta_extendida:`### Condiciones

| Condición | Detalle |
|---|---|
| Interés | Sin interés |
| Cuotas | Máximo 12 |
| Formalidad | Convenio escrito con monto, número de cuotas y valor de cada cuota, y autorización escrita del descuento |
| Durante licencia sin sueldo | Se suspende y se retoma al reintegro |

### Lo que hay que decir con claridad

Los préstamos concedidos por la Empresa son **un beneficio, no un derecho exigible** (Reglamento Interno, Art. 48). Yo no te puedo adelantar si será aprobado ni recomendarte que lo pidas: esa decisión es tuya y la aprobación es de Nómina.

### El límite que sí es un principio

La suma de todos los descuentos voluntarios no puede comprometer la parte de tu remuneración necesaria para tu subsistencia y la de tu familia. En caso de duda, Nómina resuelve a tu favor y difiere la cuota.

### Otras vías si el problema es puntual

Anticipo quincenal de hasta el 50% de lo devengado en la quincena, o apoyo por calamidad de hasta USD 800,00 no reembolsables por evento más anticipo sin interés de hasta 2 remuneraciones a 12 cuotas.

Fuente: Manual de Nómina, secciones 11.2 y 12.6, y Reglamento Interno, Art. 48. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El préstamo interno no es un derecho exigible; se sujeta al procedimiento de Nómina y Compensaciones.`],parametros_usados:[`descuentos_rol_limite`,`anticipo_quincenal_tope`,`licencia_sin_sueldo`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 48`},calculadora:null,datos_requeridos:[`monto solicitado`,`remuneracion mensual`,`descuentos vigentes`],siguiente_paso:`Registré tu consulta. Nómina y Compensaciones te contacta en 2 días hábiles con el procedimiento y la respuesta.`,escalamiento:{requerido:!0,rol:`Jefatura de Nómina y Compensaciones`,motivo:`Decisión económica personal y beneficio sujeto a aprobación. VERA no adelanta si será aprobado ni recomienda la decisión.`},etiquetas:[`prestamo interno`,`cuotas`,`descuento`,`beneficio`],errores_frecuentes:[`Creer que el préstamo interno es un derecho que la empresa debe conceder.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-057`,titulo:`¿Me pueden multar por una falta y descontármelo del rol?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`descuentos`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:61,pregunta_canonica:`¿Qué se requiere para que una multa disciplinaria se descuente del rol?`,variantes_pregunta:[`me multaron y me lo descontaron`,`mi supervisor me puso una multa`,`cuanto es el tope de la multa`,`me pueden multar sin avisarme`,`la multa se descuenta directo?`],respuesta_corta:`Solo con un proceso disciplinario concluido, con derecho a ser escuchado y resolución escrita y notificada. Una multa NO es una decisión de un supervisor en el momento: sin ese proceso, el descuento no procede.`,respuesta_extendida:`### Los requisitos

Una multa del Reglamento Interno requiere:

1. **Proceso disciplinario concluido**, no una decisión de momento.
2. **Derecho del colaborador a ser escuchado** (descargo previo).
3. **Resolución escrita y notificada**.

Sin esos tres elementos, el descuento no procede y debe reversarse.

### El tope

El Manual de Nómina **no enuncia el tope de la multa porque no existe un parámetro que lo registre**. El tope lo fija el Reglamento Interno de Trabajo legalmente aprobado: ese es el documento a consultar (Capítulo XIV, régimen disciplinario).

### Si tienes un proceso disciplinario en curso

Eso ya no es una consulta de nómina: es un caso individual. Dímelo y te conecto con la Jefatura de Relaciones Laborales y Disciplina, que te contacta en 3 días hábiles. Yo no opino sobre el fondo de un proceso disciplinario.

Fuente: Manual de Nómina, sección 11.3, y Reglamento Interno, Art. 46 y Capítulo XIV. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si existe un proceso disciplinario en curso o el colaborador discute la sanción, la consulta pasa a zona roja y se escala a Relaciones Laborales y Disciplina.`],parametros_usados:[`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`11.3 Tres reglas que no admiten excepción`,articulo:null},calculadora:null,datos_requeridos:[`resolucion disciplinaria notificada`,`mes del descuento`],siguiente_paso:`Pide copia de la resolución escrita que sustenta la multa. Si no existe, repórtalo a Nómina para que se reverse.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`multa`,`descuento`,`proceso disciplinario`,`debido proceso`],errores_frecuentes:[`Aceptar una multa impuesta verbalmente por un supervisor.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-058`,titulo:`¿Por qué me retienen impuesto a la renta y cómo se calcula?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`descuentos`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:45,pregunta_canonica:`¿Cómo funciona la retención mensual de impuesto a la renta en relación de dependencia?`,variantes_pregunta:[`porque me descuentan impuesto a la renta`,`cuando entrego el formulario de gastos personales`,`cuanto es la fraccion basica desgravada`,`puedo cambiar mi proyeccion de gastos`,`cuando me dan el certificado de retenciones`],respuesta_corta:`VERTIENTE actúa como agente de retención: proyecta tu impuesto anual y te retiene una parte cada mes para que no pagues una suma grande al final. No te puedo dar cifras tributarias: no hay ningún parámetro del SRI registrado y no invento números.`,respuesta_extendida:`### El ciclo interno de VERTIENTE

| Momento | Hito | Qué haces tú |
|---|---|---|
| Enero | Recepción del formulario de proyección de gastos personales | Declaras cuánto estimas gastar en el año en los rubros admitidos |
| Febrero a diciembre | Retención mensual en el rol | Ves la línea "impuesto a la renta" en tus egresos |
| A mitad de año o ante un cambio relevante | Reliquidación | Puedes rectificar tu proyección |
| Enero o febrero del año siguiente | Certificado de ingresos y retenciones | Recibes el documento con lo ganado y lo retenido |

### Advertencia de honestidad, importante

**El archivo datos/parametros-legales.json no contiene ningún parámetro tributario**: no registra la fracción básica desgravada, ni la tabla del impuesto a la renta, ni el tope de gastos personales deducibles, ni las fechas oficiales del SRI.

Por eso **no enuncio ninguna de esas cifras ni fechas oficiales**. Las fechas de enero y febrero de la tabla anterior son el **calendario interno de VERTIENTE**, no plazos legales. Antes de comunicar cualquier cifra tributaria, Nómina debe consultar la normativa vigente del SRI.

Fuente: Manual de Nómina, sección 14.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Aplica cuando el ingreso anual proyectado supera el umbral de la normativa tributaria.`,`Ninguna cifra tributaria está registrada en el archivo de parámetros.`],parametros_usados:[`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`14.3 Impuesto a la renta en relación de dependencia`,articulo:null},calculadora:null,datos_requeridos:[`proyeccion anual de ingresos`,`formulario de gastos personales presentado`],siguiente_paso:`Presenta o rectifica tu formulario de proyección de gastos personales con Nómina. Para cifras del SRI, consulta la normativa vigente.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`impuesto a la renta`,`retencion`,`gastos personales`,`sri`,`certificado`],errores_frecuentes:[`Esperar que VERA dé cifras de la tabla del impuesto a la renta: no están registradas y no se inventan.`],confianza:`baja`,requiere_verificacion_legal:!0},{id:`KB-059`,titulo:`¿Qué beneficios me da VERTIENTE además del sueldo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:165,pregunta_canonica:`¿Cuáles son los beneficios propios de VERTIENTE según mi nivel?`,variantes_pregunta:[`que beneficios tengo en la empresa`,`a que tengo derecho aparte del sueldo`,`los beneficios son iguales para todos`,`que me toca como operativo`,`tengo seguro medico?`,`q beneficios da la empresa`],respuesta_corta:`Seguro de asistencia médica, comisariato, alimentación subsidiada, uniformes y EPP, bono de escolaridad, apoyo por calamidad y viáticos según tarifario. El alcance varía por nivel: N1 operativo, N2 mandos medios, N3 jefaturas y gerencias.`,respuesta_extendida:`### Los niveles

| Nivel | Quiénes |
|---|---|
| **N1 — Operativo** | Estibadores, perchadores, auxiliares de bodega, operarios de línea, mercaderistas, choferes, prevendedores, vendedores de ruta |
| **N2 — Mandos medios** | Supervisores zonales y de producción, coordinadores, jefes de centro de distribución |
| **N3 — Jefaturas y gerencias** | Jefes regionales de ventas, jefaturas de planta y de áreas administrativas, gerencias |

### Tabla general

| Beneficio | N1 | N2 | N3 |
|---|---|---|---|
| Seguro de asistencia médica | Titular | Titular + cónyuge | Titular + cónyuge + hijos |
| Comisariato FRUTAL | Sí | Sí | Sí |
| Alimentación subsidiada | Sí | Sí | Sí |
| Refrigerio de turno nocturno | Sí (turno nocturno) | Sí (turno nocturno) | — |
| Transporte de turno de madrugada | Sí | Sí | — |
| Uniformes y EPP | 2 juegos al año | 2 juegos al año | Según puesto |
| Bono de escolaridad | Sí | Sí | Sí |
| Apoyo por calamidad | Sí | Sí | Sí |
| Celular corporativo | Solo preventa y autoventa (herramienta de trabajo) | Sí | Sí |
| Vehículo y cupo de combustible | — | Sí (supervisores zonales y jefes de CD) | Sí |
| Viáticos y movilización | Según tarifario | Según tarifario | Según tarifario |

### Cómo leer esta lista

Todo esto está **por encima del mínimo legal**: son beneficios que VERTIENTE otorga por decisión propia y que puede revisar anualmente. Cuando la ley sí obliga y VERTIENTE hace más de lo obligado (uniformes, comisariato), se cita el parámetro del mínimo.

Fuente: Manual de Nómina, secciones 12.1 y 12.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El alcance depende del nivel del cargo.`,`Son beneficios de decisión interna revisables anualmente, salvo los que la ley obliga.`],parametros_usados:[`comisariato_umbral`,`ropa_trabajo_frecuencia`,`epp_obligacion`,`guarderia_umbral`,`medico_ocupacional_umbral`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.2 Tabla general de beneficios por nivel`,articulo:null},calculadora:null,datos_requeridos:[`cargo`,`nivel`,`instalacion`,`turno`],siguiente_paso:`Dime tu cargo y tu instalación y te detallo exactamente qué beneficios te corresponden.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`beneficios`,`niveles`,`seguro medico`,`comisariato`,`transporte`],errores_frecuentes:[`Suponer que todos los niveles tienen el mismo alcance de seguro médico.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-060`,titulo:`¿Cómo funciona el comisariato y cuánto puedo consumir?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:162,pregunta_canonica:`¿Qué descuento y qué cupo tiene el comisariato de VERTIENTE?`,variantes_pregunta:[`cuanto es el descuento del comisariato`,`cual es mi cupo del comisariato`,`cuando me descuentan el comisariato`,`puedo revender el producto del comisariato`,`donde queda el comisariato`,`komisariato kuanto puedo comprar`],respuesta_corta:`Tienes 25% de descuento sobre el precio de venta al público y un cupo mensual de hasta el 12% de tu remuneración. Se descuenta en el rol del mes siguiente al consumo, en hasta 2 cuotas si superas el cupo de un mes.`,respuesta_extendida:`### Las reglas

| Regla | Detalle |
|---|---|
| Qué se puede comprar | Producto de la compañía: la línea FRUTAL de Durán y las marcas distribuidas que la compañía habilite |
| Descuento sobre PVP | 25% |
| Cupo mensual | Hasta el 12% de tu remuneración mensual |
| Forma de pago | Descuento por rol del mes siguiente al consumo; hasta 2 cuotas si supera el cupo |
| Puntos de atención | Matriz Guayaquil, planta FRUTAL Durán y los 9 centros de distribución |
| Prohibición | El producto es para consumo de tu hogar. **Revenderlo es falta grave** del Reglamento Interno |

### Ejemplo

Wilson Chalá, con remuneración de USD 569,71 en septiembre, tiene un cupo de 569,71 × 12% = **USD 68,37**. Su consumo del mes fue USD 62,30: dentro del cupo.

### Dos cosas importantes

1. La compra en comisariato es **voluntaria**: jamás puede imponerse, condicionarse ni usarse como forma de pago de la remuneración (Reglamento Interno, Art. 49).
2. Cada compra se firma y el descuento aparece **identificado** en tu rol.

VERTIENTE tiene más de 100 trabajadores, así que el comisariato es una obligación legal (parámetro comisariato_umbral), no solo un beneficio.

Fuente: Manual de Nómina, sección 12.4, y Reglamento Interno, Art. 49. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El cupo se calcula sobre la remuneración mensual del colaborador.`],parametros_usados:[`comisariato_umbral`,`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.4 Comisariato`,articulo:null},calculadora:`calculadora_cupo_comisariato`,datos_requeridos:[`remuneracion mensual`,`consumo del mes`],siguiente_paso:`Dime tu remuneración y te calculo tu cupo mensual del comisariato.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`comisariato`,`cupo`,`descuento 25`,`frutal`,`beneficio`],errores_frecuentes:[`Creer que el consumo se descuenta en el mismo mes.`,`Revender el producto del comisariato: es falta grave.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-061`,titulo:`¿Qué me cubre el seguro de asistencia médica?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:41,pregunta_canonica:`¿Cómo funciona el seguro médico complementario de VERTIENTE?`,variantes_pregunta:[`tengo seguro medico privado en la empresa`,`puedo meter a mi esposa al seguro`,`cuanto es el deducible del seguro`,`desde cuando entro al seguro medico`,`el seguro reemplaza al iess?`],respuesta_corta:`Es un seguro complementario al IESS, no un reemplazo. Entras al superar el período de prueba de 90 días. La cobertura depende de tu nivel: N1 titular, N2 titular más cónyuge, N3 titular más cónyuge e hijos.`,respuesta_extendida:`### Qué cubre

Consulta ambulatoria, medicina, hospitalización y emergencias en la red de prestadores del asegurador. **Es complementario al IESS**, no lo reemplaza: tu afiliación al IESS sigue siendo la base de tu seguridad social.

| Concepto | N1 | N2 | N3 |
|---|---|---|---|
| Cobertura | Titular | Titular + cónyuge | Titular + cónyuge + hijos menores de 25 años |
| Aporte del colaborador | Sin costo | Sin costo por el titular; el dependiente se descuenta por rol | Sin costo por titular y dependientes |
| Deducible por evento (USD) | 15,00 | 20,00 | 25,00 |
| Ingreso a la póliza | Al superar el período de prueba de 90 días (parámetro contrato_periodo_prueba_dias) | Igual | Igual |

### Dependientes adicionales

Los que tu nivel no cubre pueden incorporarse con descuento por rol, **autorizado por escrito por ti**, como todo descuento voluntario.

Fuente: Manual de Nómina, sección 12.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El ingreso a la póliza ocurre al superar el período de prueba.`,`Los dependientes adicionales requieren autorización escrita de descuento.`],parametros_usados:[`contrato_periodo_prueba_dias`,`medico_ocupacional_umbral`,`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.3 Seguro de asistencia médica`,articulo:null},calculadora:null,datos_requeridos:[`nivel del cargo`,`fecha de ingreso`,`dependientes a incorporar`],siguiente_paso:`Si quieres incorporar un dependiente, solicítalo en RR.HH. con la autorización escrita de descuento.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`seguro medico`,`deducible`,`dependientes`,`periodo de prueba`,`beneficio`],errores_frecuentes:[`Creer que el seguro privado reemplaza al IESS.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-062`,titulo:`¿Me dan transporte si entro de madrugada?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:27,pregunta_canonica:`¿Quién tiene derecho al transporte de madrugada y al refrigerio nocturno?`,variantes_pregunta:[`hay transporte para el turno de madrugada`,`entro a las 2am como llego`,`el refrigerio de la noche lo pago yo`,`el almuerzo de planta es gratis`,`hay recorrido para el turno nocturno`],respuesta_corta:`Sí, sin costo, si ingresas antes de las 05h00 o sales después de las 22h00: recorrido puerta a puerta o a punto de encuentro seguro. El refrigerio de turno nocturno también es sin costo.`,respuesta_extendida:`### Los tres beneficios de alimentación y transporte

| Beneficio | Quién | Detalle |
|---|---|---|
| Almuerzo subsidiado | Personal de planta FRUTAL y de los sitios con comedor | VERTIENTE subsidia el 70% del costo del menú; el 30% se descuenta por rol |
| Refrigerio de turno nocturno | Personal en turno entre 19h00 y 06h00 | **Sin costo** |
| Transporte de turno de madrugada | Quien ingresa antes de las 05h00 o sale después de las 22h00 | Recorrido puerta a puerta o a punto de encuentro seguro, **sin costo** |

### Quiénes usan el transporte de madrugada

Estibadores y auxiliares del CD de Quito y de la matriz que cargan camiones de madrugada (jornada de 02h00 a 10h00), y el turno nocturno de la línea de FRUTAL.

### Por qué no es un lujo

Es una **medida de seguridad**. Un colaborador que no tiene cómo llegar al CD a las 04h00 no debe resolverlo por su cuenta.

Fuente: Manual de Nómina, sección 12.5, y Reglamento Interno, Art. 32. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`produccion`,`estibador`,`auxiliar de bodega y despacho`,`operario de linea`],condiciones:[`Aplica a niveles N1 y N2 en turno nocturno o de madrugada.`],parametros_usados:[`jornada_nocturna_rango`,`recargo_jornada_nocturna`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.5 Alimentación, refrigerio y transporte de madrugada`,articulo:null},calculadora:null,datos_requeridos:[`horario de turno`,`instalacion`,`domicilio para el recorrido`],siguiente_paso:`Solicita tu inclusión en el recorrido al jefe de tu CD o de planta con tu dirección y tu horario de turno.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`transporte`,`madrugada`,`refrigerio`,`alimentacion`,`turno nocturno`],errores_frecuentes:[`Creer que el transporte de madrugada se descuenta del rol.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-063`,titulo:`¿Existe un bono de escolaridad y cuándo lo pagan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:24,pregunta_canonica:`¿Cuál es el bono de escolaridad de VERTIENTE y en qué se diferencia del décimo cuarto?`,variantes_pregunta:[`hay bono de utiles escolares`,`cuanto es el bono de escolaridad`,`el bono escolar reemplaza al decimo cuarto`,`cuantos hijos me cubren el bono de escolaridad`,`cuando pagan el bono escolar de la sierra`],respuesta_corta:`Sí: USD 60,00 por hijo en edad escolar, hasta 3 hijos. Se paga en el rol de marzo para el personal de Costa y en el de septiembre para el de Sierra. Es ADICIONAL al décimo cuarto, no lo sustituye.`,respuesta_extendida:`### El beneficio

| Dato | Detalle |
|---|---|
| Monto | USD 60,00 por hijo en edad escolar |
| Tope | Hasta 3 hijos |
| Cuándo se paga | Rol de marzo (personal de Costa) · Rol de septiembre (personal de Sierra) |
| Naturaleza | Beneficio interno de VERTIENTE. **No existe un mínimo legal de bono de escolaridad** |

### Ejemplo

Byron Lascano, perchador del CD de Ambato (Sierra), con 2 hijos en edad escolar, recibe 2 × 60,00 = **USD 120,00** en su rol de septiembre. Ese bono es **adicional** a su décima cuarta remuneración de USD 470,00 cobrada el 15 de agosto: no la sustituye.

### La distinción que hay que tener clara

| | Décima cuarta | Bono de escolaridad |
|---|---|---|
| Origen | Beneficio de ley | Beneficio interno de VERTIENTE |
| Monto | Un SBU completo, igual para todos | USD 60,00 por hijo, hasta 3 |
| Depende de tener hijos | No | Sí |

Fuente: Manual de Nómina, sección 12.6. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Requiere hijos en edad escolar declarados en RR.HH.`,`El mes de pago depende de la región de la instalación.`],parametros_usados:[`decimo_cuarto_valor`,`sbu`,`decimo_cuarto_fecha_pago_costa_galapagos`,`decimo_cuarto_fecha_pago_sierra_amazonia`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.6 Uniformes, EPP, bono de escolaridad y apoyo por calamidad`,articulo:null},calculadora:null,datos_requeridos:[`numero de hijos en edad escolar declarados`,`region de la instalacion`],siguiente_paso:`Verifica que tus hijos estén declarados en RR.HH. antes del rol de marzo o de septiembre según tu región.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`bono de escolaridad`,`hijos`,`beneficio interno`,`decimo cuarto`],errores_frecuentes:[`Confundir el bono de escolaridad con la décima cuarta remuneración.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-064`,titulo:`¿Hay ayuda si tengo una emergencia grave en casa?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`ambar`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:60,pregunta_canonica:`¿En qué consiste el apoyo por calamidad de VERTIENTE?`,variantes_pregunta:[`se me inundo la casa hay ayuda`,`fallecio mi papa hay algun apoyo`,`la empresa da ayuda por calamidad`,`cuanto es el apoyo por calamidad`,`necesito un adelanto por una emergencia familiar`],respuesta_corta:`Sí: aporte no reembolsable de hasta USD 800,00 por evento, más anticipo sin interés de hasta 2 remuneraciones a 12 cuotas. Además tienes la licencia de calamidad doméstica. Registré tu consulta y Trabajo Social te contacta en 1 día hábil.`,respuesta_extendida:`### El apoyo

| Componente | Detalle |
|---|---|
| Aporte no reembolsable | Hasta **USD 800,00 por evento** (siniestro grave en la vivienda, enfermedad grave o fallecimiento de familiar directo) |
| Anticipo sin interés | Hasta 2 remuneraciones, a 12 cuotas |
| Licencia de calamidad doméstica | 3 días (parámetro licencia_calamidad_domestica_dias, marcado para verificación) |
| Licencia por fallecimiento de cónyuge, conviviente o pariente hasta segundo grado | 3 días con remuneración completa (parámetro licencia_fallecimiento_familiar_dias) |

### Sobre la licencia de calamidad

El parámetro licencia_calamidad_domestica_dias está marcado para verificación: **no hay certeza del número de días ni de la definición cerrada en el sector privado**. Por eso VERTIENTE lo resuelve caso por caso y **siempre a favor del colaborador**. Y en el fallecimiento, VERTIENTE puede conceder más días por política interna, nunca menos.

### Lo que no voy a hacer

No te voy a pedir detalles de lo que está pasando ni voy a adelantar si el apoyo será aprobado. Eso lo conversas con quien puede revisar tu caso.

Fuente: Manual de Nómina, sección 12.6, y Reglamento Interno, Art. 60. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El monto del aporte es un beneficio interno revisable.`,`La duración de la licencia de calamidad está pendiente de verificación y se resuelve a favor del colaborador.`],parametros_usados:[`licencia_calamidad_domestica_dias`,`licencia_fallecimiento_familiar_dias`,`licencia_enfermedad_catastrofica_familiar_dias`,`anticipo_quincenal_tope`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.6 Uniformes, EPP, bono de escolaridad y apoyo por calamidad`,articulo:null},calculadora:null,datos_requeridos:[`tipo de evento`,`documentos de respaldo cuando existan`],siguiente_paso:`Registré tu consulta. Trabajo Social te contacta en 1 día hábil. Si necesitas la licencia de inmediato, avísale a tu jefatura hoy mismo: la documentación se completa después.`,escalamiento:{requerido:!0,rol:`Trabajo Social de Recursos Humanos`,motivo:`Situación personal y familiar sensible. VERA entrega el marco general, no indaga detalles y no adelanta aprobaciones.`},etiquetas:[`calamidad`,`apoyo`,`licencia`,`fallecimiento`,`emergencia`],errores_frecuentes:[`Creer que hay que esperar la aprobación del apoyo para poder ausentarse: la licencia se avisa de inmediato.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-065`,titulo:`¿Cuánto me pagan de viáticos y movilización y cómo los liquido?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`viaticos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:94,pregunta_canonica:`¿Cuál es el tarifario de viáticos y cuál el proceso de liquidación?`,variantes_pregunta:[`cuanto es la movilizacion diaria`,`cuanto me dan de viatico por pernoctar`,`cuanto pagan el kilometraje`,`hasta cuando presento las facturas del viaje`,`el viatico que me sobro es mio?`,`viaticos komo se liquidan`],respuesta_corta:`Movilización urbana de ruta USD 4,50 por día efectivo; viático integral con pernocte USD 22,00 por día; hospedaje USD 38,00 por noche contra factura; kilometraje USD 0,28. El informe de gasto se presenta dentro de 5 días hábiles del retorno.`,respuesta_extendida:`### Tarifario de VERTIENTE (decisión interna, no cifra legal)

| Concepto | Tarifa USD | Condición |
|---|---|---|
| Movilización urbana de prevendedor y mercaderista | 4,50 por día efectivo de ruta | Contra registro de visitas del día en el sistema de preventa |
| Alimentación en ruta fuera de la ciudad base, sin pernocte | 8,00 por día | Autorización previa del supervisor zonal |
| Viático integral por día con pernocte | 22,00 por día | Autorización previa del jefe de área |
| Hospedaje fuera de la ciudad base | 38,00 por noche | **Contra factura** a nombre de Corporación Vertiente S.A., RUC 0992847561001 |
| Kilometraje en vehículo propio autorizado | 0,28 por kilómetro | Solo con autorización escrita previa y licencia y matrícula vigentes registradas |
| Peajes y parqueaderos | Valor real | Contra comprobante |

### Los cinco pasos de la liquidación

1. **Solicitud previa** en el sistema, con destino, fechas, motivo y estimación. La aprueba tu jefatura directa.
2. **Anticipo**: VERTIENTE acredita hasta el 80% del viático estimado antes del viaje. **Nadie debe financiar con su propio dinero un viaje de trabajo.**
3. **Informe de gasto** dentro de los **5 días hábiles** siguientes al retorno, con las facturas a nombre de la compañía.
4. **Revisión** por Administración Comercial o por la jefatura del área.
5. **Cierre**: el saldo a tu favor se reembolsa en el siguiente rol; el saldo a favor de la empresa se descuenta en el siguiente rol.

### La regla de oro

El viático **cubre el gasto, no genera utilidad**. Si gastaste menos, devuelves la diferencia; si gastaste más con autorización y sustento, se te reembolsa.

### Advertencia obligatoria

Los viáticos y la movilización no son remuneración y por eso no suman para décimos, fondos de reserva ni vacaciones. Pero el parámetro iess_base_calculo está marcado para verificación **justamente por estos rubros de frontera**: si la verificación concluyera que alguno es materia gravada, habría que recalcular aportes y bases de beneficios.

Presentar comprobantes falsos, alterados o de gastos no realizados es falta muy grave (Reglamento Interno, Art. 50).

Fuente: Manual de Nómina, sección 12.7, y Reglamento Interno, Art. 50. Vigencia 2026-09-16.`,aplica_a:[`todos`,`comercial`,`prevendedor`,`mercaderista`,`supervisor zonal`],condiciones:[`El tarifario es decisión interna y puede revisarse.`,`El tratamiento como materia gravada está pendiente de verificación rubro por rubro.`],parametros_usados:[`iess_base_calculo`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.7 Viáticos, movilización y su liquidación`,articulo:null},calculadora:`calculadora_viaticos`,datos_requeridos:[`destino y fechas`,`dias efectivos de ruta`,`kilometros recorridos`,`comprobantes`],siguiente_paso:`Presenta tu informe de gasto con las facturas dentro de los 5 días hábiles del retorno. Si quieres, calculo lo que te corresponde con el tarifario.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`viaticos`,`movilizacion`,`kilometraje`,`hospedaje`,`liquidacion`,`facturas`],errores_frecuentes:[`Creer que el viático no utilizado se queda con el colaborador.`,`Presentar facturas a nombre propio en vez del RUC de la compañía.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-066`,titulo:`El celular y el vehículo que uso: ¿son beneficio o herramienta?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:12,pregunta_canonica:`¿El terminal de preventa, el celular y el vehículo asignado cuentan como ingreso?`,variantes_pregunta:[`el handheld me lo descuentan?`,`el celular corporativo es parte de mi sueldo`,`quien paga las multas de transito del carro de la empresa`,`tengo derecho a vehiculo asignado`,`el cupo de combustible como funciona`],respuesta_corta:`El terminal de preventa es herramienta de trabajo: no se descuenta ni se valora como ingreso. El celular corporativo y el vehículo asignado son beneficios de N2 y N3, con política de uso y contrato de responsabilidad.`,respuesta_extendida:`### La distinción

| Recurso | Quién lo recibe | Naturaleza |
|---|---|---|
| Terminal de preventa con plan de datos | Prevendedores y vendedores de ruta | **Herramienta de trabajo** (parámetro utiles_herramientas_obligacion). No se descuenta, no se valora como ingreso |
| Celular corporativo con plan de voz y datos | N2 y N3 | Beneficio, con política de uso razonable |
| Vehículo asignado | Supervisores zonales, jefes de CD y N3 | Beneficio, con contrato de uso y responsabilidad |
| Cupo de combustible | Igual que el vehículo | Cupo mensual definido por zona y kilometraje de la ruta |

### Multas de tránsito

Las multas por **infracción personal del conductor** son de cargo del colaborador; las de índole administrativa de la flota son de cargo de la empresa. El descuento de una multa personal requiere tu **autorización escrita**, como todo descuento voluntario.

Fuente: Manual de Nómina, sección 12.8. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`supervisor zonal`,`jefe de centro de distribucion`],condiciones:[`El descuento de una multa personal requiere autorización escrita del colaborador.`],parametros_usados:[`utiles_herramientas_obligacion`,`descuentos_rol_limite`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`12.8 Celular, vehículo y combustible`,articulo:null},calculadora:null,datos_requeridos:[`cargo`,`recurso asignado`],siguiente_paso:`Si te aparece un descuento por el terminal de preventa, repórtalo: es herramienta de trabajo y no se descuenta.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`herramienta de trabajo`,`celular`,`vehiculo`,`combustible`,`multas`],errores_frecuentes:[`Creer que el terminal de preventa es un beneficio valorable como ingreso.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-067`,titulo:`¿Qué me tienen que pagar en mi liquidación?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`finiquito`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:399,pregunta_canonica:`¿Qué rubros incluye el acta de finiquito?`,variantes_pregunta:[`que me pagan cuando salgo`,`que entra en la liquidacion`,`cuanto me toca de liquidacion`,`que rubros van en el acta de finiquito`,`me pagan las vacaciones no gozadas al salir`,`liquidacion q me toka`],respuesta_corta:`Siempre: sueldo pendiente, décimo tercero proporcional, décimo cuarto proporcional y vacaciones no gozadas y proporcionales. Además, según el caso: comisiones y horas pendientes, bonificación por desahucio, indemnizaciones y jubilación patronal.`,respuesta_extendida:`### Lo que se paga siempre

| Rubro | ¿Cuándo? |
|---|---|
| Sueldo pendiente de los días trabajados del mes | **Siempre** |
| Décimo tercero proporcional | **Siempre** |
| Décimo cuarto proporcional | **Siempre** |
| Vacaciones no gozadas y proporcionales | **Siempre** |

### Lo que depende del caso

| Rubro | Condición |
|---|---|
| Fondos de reserva pendientes | Solo si los tenías mensualizados y quedó algún mes sin pagar. Si los tenías acumulados, están en el IESS |
| Horas suplementarias y extraordinarias pendientes | Si existen y están registradas |
| Comisiones devengadas hasta la fecha de salida | Si existen (Reglamento Interno, Art. 51, regla 6) |
| Bonificación por desahucio | 25% de la última remuneración por año de servicio; se paga en el desahucio del trabajador **y también** en el despido intempestivo |
| Indemnización por despido intempestivo | Solo si hubo despido intempestivo |
| Jubilación patronal | Con 25 años de servicio; proporcional entre 20 y menos de 25 |
| Utilidades del ejercicio en curso | **No van en el acta**: se pagan en la fecha general del reparto |

### Ejemplo resuelto — Byron Lascano, perchador, 2 años 8 meses

| Rubro | Valor USD |
|---|---|
| Sueldo pendiente (1 al 15 de septiembre) | 252,50 |
| Décimo tercero proporcional | 399,79 |
| Décimo cuarto proporcional (46 días del nuevo período) | 60,06 |
| Vacaciones no gozadas y proporcionales | 420,83 |
| Fondos de reserva (los tenía mensualizados) | 0,00 |
| **Subtotal de proporcionales** | **1.133,18** |

Con desahucio del trabajador su total a favor sería USD 1.469,85 y, menos descuentos de USD 139,06, el líquido **USD 1.330,79**.

Fuente: Manual de Nómina, secciones 13.2 y 13.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Todo caso individual de despido, visto bueno o terminación en curso se escala a Legal y Cumplimiento: VERA no opina sobre el fondo.`],parametros_usados:[`decimo_tercero_formula`,`decimo_cuarto_valor`,`vacaciones_dias_anuales`,`desahucio_bonificacion_porcentaje`,`despido_intempestivo_indemnizacion_minima`,`jubilacion_patronal_anios`,`utilidades_extrabajadores`,`acta_finiquito_forma`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`13.2 Qué se paga siempre y qué se paga solo en ciertos casos`,articulo:null},calculadora:`calculadora_liquidacion_finiquito`,datos_requeridos:[`fecha de ingreso`,`fecha de salida`,`ultima remuneracion`,`periodos de vacaciones gozados`,`modalidad de fondos de reserva`,`region de la instalacion`],siguiente_paso:`Dime tus fechas de ingreso y salida y tu última remuneración y te simulo el desglose. Pide siempre el acta pormenorizada antes de firmar.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`liquidacion`,`finiquito`,`proporcionales`,`vacaciones no gozadas`,`desahucio`],errores_frecuentes:[`Creer que las utilidades del año en curso se pagan dentro del acta de finiquito.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-068`,titulo:`¿Cuándo me pagan la liquidación y puedo ver el desglose antes de firmar?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`finiquito`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:82,pregunta_canonica:`¿En qué plazo se paga la liquidación y qué derechos tengo sobre el acta?`,variantes_pregunta:[`cuando me pagan la liquidacion`,`puedo pedir el detalle antes de firmar el acta`,`el acta solo dice un numero es valido?`,`tengo que firmar el finiquito el mismo dia`,`en cuanto tiempo registran el acta en el SUT`],respuesta_corta:`El pago es inmediato a la terminación, en el mismo acto de suscripción del acta. Y el acta debe ser pormenorizada: tienes derecho a ver cada número y cómo se calculó antes de firmar.`,respuesta_extendida:`### Los datos

| Dato | Valor | Parámetro |
|---|---|---|
| Forma del acta | Pormenorizada, suscrita por ambas partes, ante Inspector del Trabajo o plataforma oficial del Ministerio | acta_finiquito_forma |
| Plazo de registro en el SUT | 30 días desde la terminación | acta_finiquito_plazo_registro (marcado para verificación) |
| Plazo de pago | Inmediato a la terminación, en el mismo acto de suscripción | liquidacion_plazo_pago (marcado para verificación) |
| Aviso de salida al IESS | 3 días desde la terminación; VERTIENTE lo hace el mismo día | iess_aviso_salida_plazo (marcado para verificación) |

### Qué significa "pormenorizada"

Que **tienes derecho a ver cada número y cómo se calculó**. Si el acta que te presentan dice solo "liquidación: USD 1.330,79", esa acta no cumple el requisito. Puedes pedir el desglose antes de firmar, y VERTIENTE debe entregártelo.

### Lo que no te pueden descontar

El uniforme, el calzado de seguridad, la faja ni la credencial: son entrega gratuita obligatoria. Si no devolviste un activo, eso se gestiona como custodia de activos, no como descuento automático.

### Y lo que te sigue correspondiendo después de salir

Las **utilidades del ejercicio en curso**, por los días que trabajaste ese año, que se pagan en la fecha general del reparto del año siguiente. Está pendiente de la convocatoria pública.

Fuente: Manual de Nómina, secciones 13.1 y 13.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los plazos de registro y pago están marcados para verificación.`,`Si la terminación está en disputa, el caso se escala a Legal y Cumplimiento.`],parametros_usados:[`acta_finiquito_forma`,`acta_finiquito_plazo_registro`,`liquidacion_plazo_pago`,`iess_aviso_salida_plazo`,`utilidades_extrabajadores`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`13.1 Qué es el acta de finiquito`,articulo:null},calculadora:`calculadora_liquidacion_finiquito`,datos_requeridos:[`fecha de terminacion`,`copia del acta propuesta`],siguiente_paso:`Pide el desglose rubro por rubro antes de firmar. Si no te lo entregan, dímelo y te conecto con Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`finiquito`,`acta pormenorizada`,`plazo de pago`,`sut`,`derechos`],errores_frecuentes:[`Firmar un acta que muestra solo el total sin desglose.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-069`,titulo:`¿Qué es la bonificación por desahucio y cuánto es?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`finiquito`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:60,pregunta_canonica:`¿Cómo se calcula la bonificación por desahucio?`,variantes_pregunta:[`que es el desahucio`,`cuanto es la bonificacion por desahucio`,`si renuncio me pagan desahucio`,`con cuanto tiempo aviso que renuncio`,`el desahucio se suma al despido?`],respuesta_corta:`Es el 25% de tu última remuneración mensual por cada año de servicio (parámetro desahucio_bonificacion_porcentaje). Se paga tanto si tú presentas el desahucio como, adicionalmente, si hubo despido intempestivo.`,respuesta_extendida:`### La fórmula

> Bonificación por desahucio = 0,25 × última remuneración mensual × años de servicio

Ejemplo: Byron Lascano, con 2 años 8 meses (2,6667 años) y remuneración de USD 505,00 → 0,25 × 505,00 × 2,6667 = **USD 336,67**.

### El preaviso

El desahucio es el aviso anticipado de que se quiere dar por terminado el contrato, con **15 días de anticipación** (parámetro desahucio_preaviso_dias, marcado para verificación en cuanto al plazo exacto y a la forma de notificación).

### Se suma, no se sustituye

La bonificación por desahucio se paga **además** de la indemnización por despido intempestivo cuando ese es el caso. No es una u otra.

### Advertencia honesta

El archivo de parámetros **no registra una regla sobre si la fracción de año se prorratea o se computa como año completo para esta bonificación** (sí lo hace para la indemnización por despido intempestivo, en la tabla indemnizacion_despido). Está reportado como pendiente de verificación.

Fuente: Manual de Nómina, sección 13.3 (pasos 7 y 8). Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El tratamiento de la fracción de año para esta bonificación está pendiente de verificación.`,`Todo caso individual de terminación se escala a Legal y Cumplimiento.`],parametros_usados:[`desahucio_bonificacion_porcentaje`,`desahucio_preaviso_dias`,`indemnizacion_despido`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`13.3 Ejemplo resuelto 16 — paso 7`,articulo:null},calculadora:`calculadora_liquidacion_finiquito`,datos_requeridos:[`ultima remuneracion mensual`,`años de servicio`],siguiente_paso:`Dime tu última remuneración y tus años de servicio y te calculo la bonificación. Si tu salida está en curso, te conecto con Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`desahucio`,`bonificacion`,`preaviso`,`finiquito`,`renuncia`],errores_frecuentes:[`Creer que la bonificación por desahucio no se paga cuando hubo despido intempestivo.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-070`,titulo:`Me van a despedir o me pidieron la renuncia`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`finiquito`,zona:`roja`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:45,pregunta_canonica:`¿Qué hago si me anuncian mi desvinculación o me piden renunciar?`,variantes_pregunta:[`me van a botar`,`me dijeron que hasta fin de mes`,`me pidieron la renuncia`,`me quieren liquidar cuanto me toca`,`firme la renuncia obligado`,`me kieren sacar q hago`],respuesta_corta:`Registré tu caso y lo derivé a la Jefatura de Administración de Personal, con copia a Legal y Cumplimiento; te contactan en 2 días hábiles. No voy a opinar sobre tu caso ni calcular tu liquidación aquí: eso lo tiene que ver una persona.`,respuesta_extendida:`### Por qué no lo resuelvo yo

Todo caso individual de despido, visto bueno o terminación se escala. Ni este contenido ni yo opinamos sobre el fondo de un caso individual, no calificamos los hechos, no pedimos pruebas ni nombres y no adelantamos consecuencias.

### Canal y plazo

| Rol receptor primario | Copia | Plazo comprometido |
|---|---|---|
| Jefatura de Administración de Personal | Jefatura de Legal y Cumplimiento | **2 días hábiles** |

Si estás embarazada, en período de lactancia o eres dirigente sindical, la notificación a Legal y Cumplimiento es **obligatoria e inmediata** (parámetros estabilidad_embarazo_lactancia y estabilidad_dirigente_sindical). Ninguna desvinculación de una colaboradora embarazada o en lactancia se ejecuta sin informe previo de Legal y Cumplimiento.

### Información general que sí te corresponde saber

- Existen tres figuras distintas: **visto bueno** (autorización del Inspector del Trabajo por una causal legal), **despido intempestivo** (terminación unilateral sin causa legal, que genera indemnización) y **despido ineficaz** (el de mujer embarazada o en lactancia, o de dirigente sindical: se considera no terminada la relación y procede reintegro más indemnización adicional).
- El acta de finiquito debe ser **pormenorizada**: tienes derecho a ver cada número antes de firmar.
- Los proporcionales de décimos y vacaciones se pagan siempre, cualquiera sea la causa de terminación.

Fuente: Manual de Nómina, sección 13.4; Alcance del consultor virtual, matriz de escalamiento 5.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si la persona está embarazada, en lactancia o es dirigente sindical, la notificación a Legal y Cumplimiento es inmediata.`],parametros_usados:[`despido_intempestivo_indemnizacion_minima`,`despido_intempestivo_meses_por_anio`,`despido_intempestivo_tope_meses`,`despido_ineficaz_indemnizacion_adicional`,`estabilidad_embarazo_lactancia`,`estabilidad_dirigente_sindical`,`visto_bueno_causales_empleador`,`acta_finiquito_forma`],fuente:{documento:`docs/09-alcance-consultor-virtual.md`,seccion:`5.5 Matriz de escalamiento de zona roja`,articulo:null},calculadora:null,datos_requeridos:[`instalacion`,`numero de caso generado`],siguiente_paso:`Quedó registrado con número de caso. Administración de Personal te contacta en 2 días hábiles. Si prefieres hablar con otra instancia o de forma reservada, dímelo y te doy el canal.`,escalamiento:{requerido:!0,rol:`Jefatura de Administración de Personal`,motivo:`Despido o desvinculación en curso. VERA no opina sobre el fondo, no califica los hechos y no calcula la liquidación del caso concreto.`},etiquetas:[`despido`,`zona roja`,`escalamiento`,`renuncia`,`visto bueno`,`legal`],errores_frecuentes:[`Esperar que el consultor virtual calcule la indemnización de un caso de despido en curso: no lo hace por diseño.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-071`,titulo:`¿Qué es la jubilación patronal y desde cuándo la genero?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`finiquito`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:14,pregunta_canonica:`¿Cuántos años de servicio se requieren para la jubilación patronal?`,variantes_pregunta:[`que es la jubilacion patronal`,`cuantos años necesito para jubilacion patronal`,`tengo 22 años me toca algo`,`la jubilacion patronal es del iess?`,`jubilacion de la empresa cuando`],respuesta_corta:`Se requieren 25 años de servicio con el mismo empleador (parámetro jubilacion_patronal_anios). Entre 20 y menos de 25 años procede la jubilación patronal proporcional cuando hay despido intempestivo.`,respuesta_extendida:`### Los dos supuestos

| Supuesto | Requisito | Parámetro |
|---|---|---|
| Jubilación patronal | 25 años de servicio con el mismo empleador | jubilacion_patronal_anios |
| Jubilación patronal proporcional | Entre 20 y menos de 25 años, por despido intempestivo | jubilacion_patronal_proporcional_rango |

### Lo que hay que distinguir

La **jubilación patronal** es una obligación del empleador y es distinta de la **pensión de jubilación del IESS**, que depende de tus aportes y de las reglas del propio IESS. Son dos cosas separadas y pueden coexistir.

### Si te acercas a ese tiempo de servicio

El cálculo individual lo hace Nómina y Compensaciones con tu historia laboral completa. Si tu caso involucra una terminación en curso, se escala a Legal y Cumplimiento.

Fuente: Manual de Nómina, sección 13.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El tiempo se cuenta con el mismo empleador.`,`Si hay una terminación individual en curso, el caso se escala a Legal y Cumplimiento.`],parametros_usados:[`jubilacion_patronal_anios`,`jubilacion_patronal_proporcional_rango`,`despido_intempestivo_indemnizacion_minima`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`13.2 Qué se paga siempre y qué se paga solo en ciertos casos`,articulo:null},calculadora:null,datos_requeridos:[`fecha de ingreso`,`años de servicio continuos`],siguiente_paso:`Si tienes 20 años o más de servicio, solicita a Nómina y Compensaciones el cálculo con tu historia laboral completa.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`jubilacion patronal`,`antiguedad`,`25 años`,`iess`],errores_frecuentes:[`Confundir la jubilación patronal con la pensión del IESS.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-072`,titulo:`¿Cuál es mi jornada y mi horario según mi cargo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`jornada`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:104,pregunta_canonica:`¿Qué horario me corresponde según mi familia de cargo e instalación?`,variantes_pregunta:[`a que hora entro y salgo`,`cual es mi horario de trabajo`,`la jornada de ruta a que hora empieza`,`el almuerzo cuenta dentro de la jornada`,`el traslado al primer cliente es tiempo de trabajo?`,`kual es mi jornada`],respuesta_corta:`Ocho horas diarias y 40 semanales, con 48 horas seguidas de descanso semanal. El horario concreto depende de tu cargo: administrativo 08h00/08h30 a 17h00/17h30, ruta 06h00 a 15h30, bodega de madrugada 02h00 o 04h00, planta por turnos rotativos.`,respuesta_extendida:`### La regla general

Jornada ordinaria de 8 horas diarias (parámetro jornada_horas_diarias) y 40 semanales (jornada_horas_semanales), distribuidas en cinco días, con descanso semanal obligatorio de 48 horas consecutivas (descanso_semanal_horas).

### Horarios por familia de cargo

| Familia | Horario tipo |
|---|---|
| Administrativos matriz Guayaquil | 08h30 a 17h30, almuerzo 13h00 a 14h00 (no computable) |
| Administrativos CD y planta | 08h00 a 17h00, almuerzo 12h30 a 13h30 |
| Fuerza de ventas y mercaderismo | Presentación en el CD 06h00, salida a ruta 06h40, retorno 14h30, liquidación hasta 15h30 |
| Bodega y despacho (Quito, Guayaquil, Cuenca, Santo Domingo) | 02h00 a 10h00 |
| Bodega y despacho (demás CD) | 04h00 a 12h00 |
| Planta FRUTAL | Turno A 06h00-14h00 · Turno B 14h00-22h00 · Turno C 22h00-06h00 |

### Dos detalles de la jornada de ruta

1. El tiempo de desplazamiento entre el CD y el primer punto de venta, y el de retorno al CD, **es tiempo de trabajo** y se computa dentro de la jornada.
2. El almuerzo es de una hora, se toma en el tramo acordado con el supervisor zonal y **no** se computa dentro de la jornada.

Fuente: Reglamento Interno, Art. 28 a 32. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los horarios pueden variar por acuerdo escrito distinto.`,`Los adolescentes trabajadores tienen jornada máxima de 6 horas diarias y 30 semanales.`],parametros_usados:[`jornada_horas_diarias`,`jornada_horas_semanales`,`descanso_semanal_horas`,`jornada_nocturna_rango`,`jornada_adolescentes_horas_diarias`,`jornada_adolescentes_horas_semanales`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 28 a 32`},calculadora:null,datos_requeridos:[`cargo`,`instalacion`,`turno asignado`],siguiente_paso:`Dime tu cargo y tu instalación y te confirmo tu horario tipo y si te corresponde recargo nocturno.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`jornada`,`horario`,`turnos`,`ruta`,`bodega`,`planta`],errores_frecuentes:[`Creer que el desplazamiento del CD al primer cliente no cuenta como tiempo de trabajo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-073`,titulo:`¿Cómo funcionan los turnos rotativos de la planta?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`jornada`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:39,pregunta_canonica:`¿Cuáles son las reglas de la rotación de turnos en la planta FRUTAL?`,variantes_pregunta:[`con cuanto tiempo publican la rotacion`,`cuantas horas hay entre un turno y otro`,`me cambiaron de turno de un dia para otro`,`cuando descanso si trabajo por turnos`,`el turno B paga recargo nocturno?`],respuesta_corta:`La rotación se publica con al menos 7 días calendario de anticipación, deben mediar al menos 12 horas entre el fin de un turno y el inicio del siguiente, y tienes 48 horas seguidas de descanso semanal, que pueden trasladarse a otros dos días previo acuerdo y registro.`,respuesta_extendida:`### Los tres turnos

| Turno | Horario | Carácter | Recargo |
|---|---|---|---|
| A (matutino) | 06h00 a 14h00 | Diurno | Sin recargo |
| B (vespertino) | 14h00 a 22h00 | Parcialmente nocturno desde las 19h00 | Recargo de jornada nocturna sobre las horas dentro del rango nocturno |
| C (nocturno) | 22h00 a 06h00 | Nocturno | Recargo de jornada nocturna (25%) |

### Las cuatro reglas de la rotación

1. La rotación se publica con al menos **siete días calendario de anticipación**, en la cartelera de planta y en el portal interno.
2. Entre el fin de un turno y el inicio del siguiente para el mismo colaborador deben mediar **al menos doce horas**.
3. Dispones de tus **48 horas de descanso semanal consecutivas**, que pueden trasladarse a dos días seguidos distintos del sábado y domingo por tratarse de una operación que no puede detenerse, **previo acuerdo y registro** (parámetro descanso_semanal_horas). No por decisión unilateral del jefe.
4. El relevo de turno se hace **en el puesto**, con entrega verbal y registro escrito del estado de la línea.

Fuente: Reglamento Interno, Art. 31, y Manual de Nómina, sección 4.4. Vigencia 2026-09-16.`,aplica_a:[`produccion`,`operario de linea`,`mantenimiento`,`supervisor de produccion`],condiciones:[`Aplica a la línea de embotellado de FRUTAL en Durán y a las áreas que operan por turnos.`],parametros_usados:[`descanso_semanal_horas`,`recargo_jornada_nocturna`,`jornada_nocturna_rango`,`jornada_horas_semanales`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 31`},calculadora:null,datos_requeridos:[`turno asignado`,`fecha de publicacion de la rotacion`],siguiente_paso:`Revisa la rotación publicada en la cartelera de planta. Si el cambio no cumplió los 7 días de aviso, coméntalo con tu supervisor de producción.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`turnos rotativos`,`planta`,`descanso`,`rotacion`,`relevo`],errores_frecuentes:[`Creer que el traslado del descanso semanal puede decidirlo el jefe unilateralmente.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-074`,titulo:`¿Dónde y cuándo tengo que marcar?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`asistencia`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:94,pregunta_canonica:`¿Cómo se registra la asistencia en cada familia de cargo?`,variantes_pregunta:[`donde marco mi entrada`,`tengo que marcar cada visita en la app`,`el biometrico no me tomo la huella que hago`,`puede marcar un compañero por mi`,`los choferes marcan con gps?`],respuesta_corta:`El registro es obligatorio, personal e intransferible. Administrativos, planta y bodega marcan en el biométrico; la fuerza de ventas marca en el biométrico del CD más cada visita en la app con geolocalización; los choferes suman el registro GPS del vehículo.`,respuesta_extendida:`### Los medios por familia

| Familia de cargos | Medio | Momentos de marcación |
|---|---|---|
| Administrativos, planta, bodega, despacho | Lector biométrico de huella | Entrada, salida a almuerzo, retorno, salida |
| Fuerza de ventas y mercaderismo | Biométrico del CD al inicio y cierre + app móvil con geolocalización | Entrada al CD, salida a ruta, cada visita, retorno al CD, salida |
| Choferes y transportistas | Biométrico del CD + GPS del vehículo | Entrada, salida del patio, retorno, salida |

### La marcación es personal e intransferible

Marcar por otro, o pedir que marquen por ti, es una falta. Y desactivar la geolocalización, forzar ubicaciones falsas o registrar una visita sin estar en el punto de venta es falta grave o muy grave según el Capítulo XIV del Reglamento Interno.

### Por qué te conviene marcar bien

Porque la hora extra **se paga sobre lo marcado**, no sobre lo estimado. Tu marcación es el respaldo que hace que se te pague lo que trabajaste, incluso si la jefatura no tramitó la autorización previa.

Fuente: Reglamento Interno, Art. 34 y 40. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si el biométrico falla, debe registrarse la incidencia con la jefatura el mismo día.`],parametros_usados:[`jornada_horas_diarias`,`recargo_hora_suplementaria_diurna`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 34`},calculadora:null,datos_requeridos:[`familia de cargo`,`instalacion`],siguiente_paso:`Si el biométrico no registró tu marcación, reporta la incidencia a tu jefatura el mismo día para que quede constancia.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`marcacion`,`biometrico`,`asistencia`,`app movil`,`gps`],errores_frecuentes:[`Dejar pasar una falla del biométrico sin reportarla el mismo día.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-075`,titulo:`¿Qué datos registra la app de ruta y para qué se usan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`asistencia`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:42,pregunta_canonica:`¿La empresa me rastrea con la aplicación móvil fuera de la jornada?`,variantes_pregunta:[`la app me rastrea todo el dia?`,`la empresa ve mi ubicacion fuera del trabajo`,`puedo pedir copia de mi registro de geolocalizacion`,`para que usan mi ubicacion`,`tengo que dejar prendido el gps del celular`],respuesta_corta:`La app registra tu ubicación únicamente durante la jornada y solo para verificar cumplimiento de ruta, tu seguridad y el respaldo de asistencia. Fuera de la jornada está prohibido usarla, y puedes pedir copia de tu propio registro.`,respuesta_extendida:`### Qué está permitido

La aplicación institucional de la fuerza de ventas registra la ubicación del dispositivo **únicamente durante la jornada de trabajo** y **únicamente** para:

1. Verificación de cumplimiento de ruta.
2. Seguridad del colaborador.
3. Respaldo del registro de asistencia.

### Qué está prohibido para la Empresa

Usar esos datos **fuera de la jornada** o para fines distintos de los indicados.

### Tus derechos

Conocer qué datos se registran y **solicitar copia de tu propio registro**.

### Tus obligaciones

Desactivar la geolocalización, forzar ubicaciones falsas o registrar una visita sin estar en el punto de venta es falta grave o muy grave (Reglamento Interno, Capítulo XIV).

Fuente: Reglamento Interno, Art. 35. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`mercaderista`,`ayudante de venta (perchador)`],condiciones:[`Aplica solo a la aplicación institucional durante la jornada.`],parametros_usados:[`jornada_horas_diarias`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 35`},calculadora:null,datos_requeridos:[`periodo del registro solicitado`],siguiente_paso:`Si quieres copia de tu registro de geolocalización, solicítala a Administración de Personal indicando el período.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`geolocalizacion`,`app`,`privacidad`,`ruta`,`asistencia`],errores_frecuentes:[`Suponer que la empresa puede consultar la ubicación fuera de la jornada.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-076`,titulo:`Llegué tarde: ¿qué pasa y me descuentan?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`asistencia`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:156,pregunta_canonica:`¿Cómo se tratan los atrasos y se descuentan del sueldo?`,variantes_pregunta:[`llegue 10 minutos tarde que pasa`,`cuantos atrasos puedo tener al mes`,`me descuentan por llegar tarde`,`hubo cierre de via y llegue tarde`,`me sancionan por el tercer atraso?`],respuesta_corta:`Hasta 15 minutos y hasta dos veces al mes es falta leve y recuperas el tiempo el mismo día. Desde el tercer atraso del mes es falta grave. El tiempo no se descuenta automáticamente: si no lo recuperas, el descuento aparece identificado en tu rol.`,respuesta_extendida:`### La escala

| Situación | Tratamiento |
|---|---|
| Atraso de hasta 15 minutos, hasta dos veces en el mes | Falta leve. Se registra y el tiempo se recupera el mismo día |
| Tercer atraso o más en el mismo mes | Falta grave |
| Atraso superior a 30 minutos sin aviso previo | Falta grave |
| Atraso superior a la mitad de la jornada sin justificación | Se computa como falta injustificada de medio día |
| Atraso por fuerza mayor comprobada (siniestro vial, cierre de vía, emergencia médica familiar) | **No se sanciona**. Avisa por el canal de tu jefatura apenas puedas y presenta el respaldo dentro de 48 horas |

### Sobre el descuento

El atraso **no se descuenta de forma automática ni encubierta**. Si el tiempo no se recupera, el descuento del tiempo no trabajado se detalla expresamente en el rol como rubro identificable. Si ves un descuento sin identificar, pregunta.

Fuente: Reglamento Interno, Art. 36. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La fuerza mayor comprobada no se sanciona, pero requiere aviso y respaldo dentro de 48 horas.`,`Si ya hay un proceso disciplinario en curso, la consulta pasa a zona roja.`],parametros_usados:[`jornada_horas_diarias`,`descuentos_rol_limite`,`visto_bueno_faltas_injustificadas`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 36`},calculadora:null,datos_requeridos:[`fecha y minutos del atraso`,`motivo y respaldo si aplica`],siguiente_paso:`Si el atraso fue por fuerza mayor, avisa a tu jefatura hoy y presenta el respaldo dentro de 48 horas.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`atraso`,`asistencia`,`falta leve`,`descuento`,`fuerza mayor`],errores_frecuentes:[`Creer que el atraso se descuenta automáticamente sin que se pueda recuperar el tiempo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-077`,titulo:`Falté: ¿cómo justifico la ausencia y hasta cuándo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`asistencia`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:168,pregunta_canonica:`¿Cuál es el procedimiento y el plazo para justificar una falta?`,variantes_pregunta:[`como justifico mi falta`,`hasta cuando entrego el certificado medico`,`me enferme y no avise a tiempo`,`cuantas faltas injustificadas son graves`,`mi certificado es de un medico particular sirve?`],respuesta_corta:`Avisa a tu jefatura y a RR.HH. antes del inicio de la jornada o, si no es posible, dentro de las primeras 4 horas. El justificativo se presenta dentro de los 3 días laborables siguientes a tu retorno.`,respuesta_extendida:`### El procedimiento

| Paso | Plazo |
|---|---|
| Avisar a la jefatura inmediata y a RR.HH. | Antes del inicio de la jornada o, si es imposible, dentro de las primeras 4 horas |
| Presentar el justificativo (certificado médico del IESS, citación de autoridad, partida de defunción u otro) | Dentro de los **3 días laborables** siguientes al retorno |

### Certificados médicos

Los emitidos por el **IESS se aceptan directamente**. Los de un profesional particular requieren validación del médico ocupacional de la Empresa, que verifica únicamente la coherencia clínica del reposo y **no accede a información diagnóstica que no quieras compartir**.

Presentar un certificado médico falso o alterado es falta muy grave.

### La garantía de debido proceso

Ninguna falta se declara injustificada sin que antes se te haya requerido **por escrito** el descargo y se te haya dado plazo para presentar justificativos (parámetro visto_bueno_faltas_injustificadas). Tres días de falta injustificada dentro de un mismo mes habilitan la causal de abandono o inasistencia.

Fuente: Reglamento Interno, Art. 37 y 62. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si ya se te notificó un descargo o hay un proceso disciplinario abierto, la consulta pasa a zona roja y se escala a Relaciones Laborales.`],parametros_usados:[`visto_bueno_faltas_injustificadas`,`licencia_enfermedad_propia_subsidio`,`permiso_atencion_medica`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 37`},calculadora:null,datos_requeridos:[`fecha de la ausencia`,`tipo de justificativo`,`fecha de retorno`],siguiente_paso:`Presenta tu justificativo en RR.HH. dentro de los 3 días laborables desde tu retorno. Si es del IESS, se acepta directamente.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`falta`,`justificacion`,`certificado medico`,`plazo`,`descargo`],errores_frecuentes:[`Dejar pasar los 3 días laborables para presentar el certificado.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-078`,titulo:`¿Cómo pido permiso para salir durante la jornada?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`permisos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:83,pregunta_canonica:`¿Qué reglas tiene el permiso para ausentarse durante la jornada?`,variantes_pregunta:[`como pido permiso para salir un rato`,`necesito salir a una cita medica`,`el permiso personal me lo descuentan`,`mi jefe no me contesto el permiso puedo salir`,`tengo que marcar si salgo con permiso`],respuesta_corta:`Se solicita por el portal interno o el formato físico, con anticipación salvo emergencia, y se concede o niega POR ESCRITO: el silencio no es autorización. Marcas salida y retorno. El permiso por atención médica con certificado es remunerado.`,respuesta_extendida:`### Las seis reglas

1. Se solicita **con anticipación**, salvo emergencia.
2. Se concede o se niega **por escrito**; el silencio **no** equivale a autorización.
3. Marcas tu salida y tu retorno.
4. El permiso por **atención médica propia** con certificado de atención es **remunerado** (parámetro permiso_atencion_medica).
5. El permiso personal sin justificativo se descuenta del tiempo trabajado **o se compensa, a tu elección**, y así se hace constar por escrito.
6. Salir de la instalación durante la jornada **sin permiso registrado** es falta grave.

### Nota de verificación

El parámetro permiso_atencion_medica está marcado para verificación en cuanto a la existencia de un cupo legal fijo de horas. Lo que no está en duda es que el permiso por atención médica con certificado es remunerado por el tiempo necesario.

Fuente: Reglamento Interno, Art. 38. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El permiso personal sin justificativo se descuenta o se compensa, a elección del colaborador.`],parametros_usados:[`permiso_atencion_medica`,`descuentos_rol_limite`,`jornada_horas_diarias`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas de trabajo, asistencia y horas adicionales`,articulo:`Art. 38`},calculadora:null,datos_requeridos:[`motivo del permiso`,`fecha y horas`,`certificado de atencion si aplica`],siguiente_paso:`Presenta la solicitud en el portal interno. Si es por atención médica, lleva el certificado de atención para que el permiso sea remunerado.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`permiso`,`salida`,`cita medica`,`autorizacion escrita`],errores_frecuentes:[`Salir asumiendo que el silencio del jefe equivale a una autorización.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-079`,titulo:`¿Qué licencias con sueldo existen además de vacaciones?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`licencias`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:36,pregunta_canonica:`¿Cuáles son las licencias y permisos remunerados y cuántos días dan?`,variantes_pregunta:[`cuantos dias me dan por fallecimiento`,`me caso cuantos dias tengo`,`hay licencia por adopcion`,`mi hijo esta grave cuantos dias me dan`,`que licencias existen con sueldo`,`dias por muerte de familiar`],respuesta_corta:`Fallecimiento de cónyuge o pariente hasta 2.º grado: 3 días con remuneración completa. Matrimonio o unión de hecho: 3 días. Calamidad doméstica: 3 días. Adopción: 15 días. Enfermedad catastrófica de hijo o cónyuge: 25 días.`,respuesta_extendida:`### Tabla de licencias

| Licencia | Días | Parámetro | Estado |
|---|---|---|---|
| Fallecimiento de cónyuge, conviviente o pariente hasta segundo grado | 3, con remuneración completa | licencia_fallecimiento_familiar_dias | verificado |
| Calamidad doméstica | 3 | licencia_calamidad_domestica_dias | marcado para verificación |
| Matrimonio o unión de hecho registrada | 3 | licencia_matrimonio_dias | marcado para verificación |
| Adopción | 15 | licencia_adopcion_dias | marcado para verificación |
| Enfermedad catastrófica o accidente grave de hija, hijo o cónyuge | 25 | licencia_enfermedad_catastrofica_familiar_dias | marcado para verificación |
| Atención médica propia | Tiempo necesario, contra certificado de atención | permiso_atencion_medica | remunerado |

### Cómo se leen los "marcados para verificación"

Que el número exacto o el fundamento están en revisión. En esos casos VERTIENTE **resuelve caso por caso y siempre a favor del colaborador** mientras se aclara, y puede conceder más días por política interna, nunca menos.

Si la licencia de matrimonio resultara ser un beneficio de este Reglamento y no un mínimo legal, se comunicará con esa claridad.

### Trámite

Se solicita por el portal interno o el formato físico, con el respaldo documental. RR.HH. responde por escrito en máximo **2 días laborables**; para maternidad, paternidad y fallecimiento la respuesta es **inmediata** y los documentos se completan después.

### Sin represalia

Nadie puede ser sancionado, postergado en su carrera, cambiado de ruta o turno en forma perjudicial ni excluido de comisiones o bonos por haber usado una licencia a la que tiene derecho (Art. 63).

Fuente: Reglamento Interno, Art. 60, 61 y 63. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Varios de estos parámetros están marcados para verificación; en la duda VERTIENTE resuelve a favor del colaborador.`],parametros_usados:[`licencia_fallecimiento_familiar_dias`,`licencia_calamidad_domestica_dias`,`licencia_matrimonio_dias`,`licencia_adopcion_dias`,`licencia_enfermedad_catastrofica_familiar_dias`,`permiso_atencion_medica`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones, permisos y licencias`,articulo:`Art. 60`},calculadora:null,datos_requeridos:[`tipo de licencia`,`documento de respaldo`,`fecha del hecho`],siguiente_paso:`Solicita la licencia en el portal interno con el respaldo. Para fallecimiento la respuesta es inmediata: avisa a tu jefatura hoy.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`licencias`,`permisos`,`fallecimiento`,`matrimonio`,`adopcion`,`calamidad`],errores_frecuentes:[`Esperar la aprobación formal antes de ausentarse por fallecimiento: la respuesta es inmediata y el documento se completa después.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-080`,titulo:`¿Puedo pedir licencia sin sueldo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`licencias`,zona:`ambar`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:41,pregunta_canonica:`¿Cómo funciona la licencia sin remuneración y qué pasa con mi IESS?`,variantes_pregunta:[`quiero pedir permiso sin sueldo`,`la licencia sin sueldo es un derecho`,`que pasa con mi afiliacion si pido licencia sin sueldo`,`me pueden negar la licencia sin sueldo`,`durante la licencia sin sueldo genero decimos?`],respuesta_corta:`No es un derecho exigible: procede solo por acuerdo escrito entre las dos partes. Durante su vigencia se suspenden la remuneración y la generación de beneficios, y debe definirse por escrito qué pasa con tu afiliación al IESS ANTES de que firmes.`,respuesta_extendida:`### Lo que hay que saber antes de pedirla

| Punto | Detalle |
|---|---|
| Naturaleza | Procede por **acuerdo escrito** entre empleador y colaborador. **No es un derecho exigible unilateralmente** (parámetro licencia_sin_sueldo) |
| Remuneración | Se suspende |
| Beneficios | Se suspende su generación durante la vigencia |
| Afiliación al IESS | Debe definirse **expresamente y por escrito antes de firmar** qué ocurre con ella |
| Préstamo interno | Se suspende y se retoma al reintegro |

### Lo que no voy a hacer

No te voy a adelantar si será aprobada ni a recomendarte que la pidas o que no. Es una decisión que afecta tu economía personal y su aprobación depende de un acuerdo.

### Lo que sí exige el Reglamento

Que se te informe por escrito el efecto sobre tu afiliación al IESS **antes** de que la firmes (Art. 60). Si te presentan el documento sin ese punto, pídelo.

Fuente: Reglamento Interno, Art. 60, y Manual de Nómina, sección 11.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Requiere acuerdo escrito de ambas partes.`,`El efecto sobre la afiliación al IESS debe constar por escrito antes de la firma.`],parametros_usados:[`licencia_sin_sueldo`,`iess_base_calculo`,`fondos_reserva_inicio`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones, permisos y licencias`,articulo:`Art. 60`},calculadora:null,datos_requeridos:[`periodo solicitado`,`motivo general`],siguiente_paso:`Registré tu consulta. La Jefatura de Administración de Personal te contacta en 2 días hábiles. Exige que el acuerdo diga por escrito qué pasa con tu afiliación al IESS antes de firmarlo.`,escalamiento:{requerido:!0,rol:`Jefatura de Administración de Personal`,motivo:`Situación personal y decisión con efecto económico y de seguridad social. No es un derecho exigible: VERA no adelanta la aprobación.`},etiquetas:[`licencia sin sueldo`,`acuerdo escrito`,`iess`,`suspension`],errores_frecuentes:[`Creer que la licencia sin sueldo se puede exigir unilateralmente.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-081`,titulo:`¿Qué es el día 20 y por qué todo el mundo lo menciona?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`calendario`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:279,pregunta_canonica:`¿Qué es el corte de novedades del día 20 y qué pasa si algo entra después?`,variantes_pregunta:[`que pasa el dia 20`,`hasta cuando cargan las novedades`,`entregue mi papel el 22 cuando aplica`,`porque todo es hasta el 20`,`corte de novedades que es`],respuesta_corta:`El día 20 es el corte de novedades: última fecha para que tu jefatura cargue horas extra, licencias, cambios de cargo, ingresos, salidas y cambios de cuenta bancaria. Lo que entra después se refleja en el rol del mes siguiente.`,respuesta_extendida:`### El ciclo mensual completo

| Día | Hito | Responsable |
|---|---|---|
| 15 | Acreditación del anticipo quincenal | Nómina |
| **20** | **Corte de novedades** | Jefaturas y supervisores |
| 21 | Cierre de información comercial (base de comisiones) | Administración Comercial |
| 22 | Prevalidación de nómina | Nómina y Compensaciones |
| 23 | Cierre de nómina: los valores se congelan | Nómina y Compensaciones |
| 24 al 26 | Revisión y aprobación (doble control) | Gerencia de RR.HH. y Gerencia Administrativa Financiera |
| 27 | Generación de la planilla del IESS y del archivo de pago | Nómina |
| Último día hábil | Acreditación del rol | Tesorería |
| Primeros 5 días hábiles del mes siguiente | Publicación del rol individual y atención de consultas | Nómina |

### Lo que hay que memorizar

La causa número uno de "no me pagaron mis horas extra" no es un error de Nómina: es una novedad cargada por la jefatura el día 24. Si hiciste horas extra el día 26, se te pagan en el rol del mes siguiente, **con el detalle del mes al que corresponden**. No se pierden.

Lo mismo aplica al cambio de cuenta bancaria, a una licencia y a un cambio de cargo.

Fuente: Manual de Nómina, sección 14.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Aplica a todas las novedades que afectan el rol del mes.`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`14.1 El ciclo mensual`,articulo:null},calculadora:null,datos_requeridos:[`fecha en que se presentó la novedad`],siguiente_paso:`Presenta cualquier novedad antes del día 20 del mes para que se refleje en ese rol.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`dia 20`,`corte de novedades`,`ciclo de nomina`,`calendario`],errores_frecuentes:[`Creer que lo cargado después del día 20 se pierde.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-082`,titulo:`¿Cuál es el calendario de pagos de beneficios del año?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`calendario`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:104,pregunta_canonica:`¿En qué fechas se pagan los décimos y las utilidades durante el año?`,variantes_pregunta:[`calendario de beneficios del año`,`cuando pagan cada cosa`,`que beneficio viene ahora`,`ya pagaron las utilidades de este año?`,`que falta por pagar en 2026`],respuesta_corta:`A hoy (2026-09-16) solo queda pendiente el décimo tercero, que vence el 2026-12-24. La décima cuarta de Costa se pagó el 15 de marzo, las utilidades del ejercicio 2025 el 15 de abril y la décima cuarta de Sierra el 15 de agosto.`,respuesta_extendida:`### Calendario anual

| Fecha límite | Beneficio | Alcance | Parámetro |
|---|---|---|---|
| **15 de marzo** | Décima cuarta — Costa e Insular | Matriz Guayaquil, planta Durán, CD Manta, Machala, Santo Domingo y Quevedo | decimo_cuarto_fecha_pago_costa_galapagos |
| **15 de abril** | Utilidades del ejercicio anterior | Toda la nómina que trabajó el ejercicio, incluidos extrabajadores | utilidades_fecha_limite_pago |
| **15 de agosto** | Décima cuarta — Sierra y Amazonía | CD Quito, Cuenca, Ambato, Loja e Ibarra | decimo_cuarto_fecha_pago_sierra_amazonia |
| **24 de diciembre** | Décima tercera | Toda la nómina | decimo_tercero_fecha_pago |

### Estado a hoy (2026-09-16)

| Beneficio | Estado |
|---|---|
| Décima cuarta Costa (período 2025-03-01 a 2026-02-28) | **Ya pagada** el 2026-03-15 |
| Utilidades del ejercicio 2025 | **Ya pagadas** el 2026-04-15 |
| Décima cuarta Sierra (período 2025-08-01 a 2026-07-31) | **Ya pagada** el 2026-08-15 |
| Décima tercera (período 2025-12-01 a 2026-11-30) | **Pendiente**, vence el 2026-12-24 |

### Advertencia sobre la fecha de utilidades

El parámetro utilidades_fecha_limite_pago está marcado para verificación porque el plazo legal está redactado como un número de días contados desde la liquidación de utilidades, **no como una fecha fija**, y porque hay reglas particulares para empresas con distinto período fiscal y para el pago a extrabajadores. Antes de comprometer una fecha hay que verificar con Financiero y con el Ministerio del Trabajo.

Fuente: Manual de Nómina, sección 14.2, y tabla periodos_beneficios_2026. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La fecha de décima cuarta depende de la región de tu instalación.`,`La fecha de utilidades está pendiente de verificación.`],parametros_usados:[`decimo_cuarto_fecha_pago_costa_galapagos`,`decimo_cuarto_fecha_pago_sierra_amazonia`,`utilidades_fecha_limite_pago`,`decimo_tercero_fecha_pago`,`periodos_beneficios_2026`,`dias_habiles_2026`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`14.2 El calendario anual de beneficios`,articulo:null},calculadora:null,datos_requeridos:[`instalacion asignada`],siguiente_paso:`Dime tu instalación y te digo exactamente qué beneficio te toca y cuándo.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`calendario`,`decimos`,`utilidades`,`fechas de pago`,`2026`],errores_frecuentes:[`Esperar la décima cuarta en agosto trabajando en una instalación de Costa.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-083`,titulo:`¿Cómo pido un certificado laboral y cuánto se demoran?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`tramites`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:86,pregunta_canonica:`¿Qué tipos de certificado laboral existen y cuál es el plazo de entrega?`,variantes_pregunta:[`necesito un certificado de trabajo`,`quiero certificado con sueldo para el banco`,`cuanto se demora el certificado laboral`,`certificado de tiempo de servicio para extrabajador`,`necesito certificado para la visa`,`komo pido certificado d trabajo`],respuesta_corta:`Pídelo por el autoservicio de RR.HH. o dímelo a mí y te abro el caso. Simple: 2 días hábiles. Con remuneración: 3. Con detalle de ingresos: 5. De tiempo de servicio para extrabajador: 5. Indica el tipo y a nombre de qué entidad se emite.`,respuesta_extendida:`### Los cuatro tipos

| Tipo | Qué dice | Para qué sirve | Plazo |
|---|---|---|---|
| Simple | Que trabajas en VERTIENTE, tu cargo y tu fecha de ingreso | Trámites generales | 2 días hábiles |
| Con remuneración | Lo anterior más tu remuneración mensual | Crédito bancario, arriendo | 3 días hábiles |
| Con detalle de ingresos de los últimos meses | Lo anterior más el desglose mensual | Crédito hipotecario, visa | 5 días hábiles |
| De tiempo de servicio para extrabajador | Cargo, fechas de ingreso y salida | Trámites posteriores a la salida | 5 días hábiles |

### Qué tienes que indicar

El **tipo** de certificado y **a nombre de qué entidad** se emite. Los plazos corren en días hábiles desde la solicitud completa: si falta uno de esos dos datos, el reloj no arranca.

Fuente: Manual de Nómina, sección 15.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El plazo corre desde que la solicitud está completa (tipo y entidad destinataria).`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`15.2 Cómo pedir un certificado laboral`,articulo:null},calculadora:null,datos_requeridos:[`tipo de certificado`,`entidad a la que se dirige`,`periodo de ingresos si aplica`],siguiente_paso:`Dime el tipo de certificado y a nombre de qué entidad lo necesitas y abro el caso ahora mismo.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`certificado laboral`,`tramite`,`plazos`,`banco`,`visa`],errores_frecuentes:[`Pedir el certificado sin indicar el destinatario, lo que retrasa la emisión.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-084`,titulo:`¿Cómo leo mi certificado de ingresos y retenciones?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`tramites`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:20,pregunta_canonica:`¿Qué contiene el certificado anual de ingresos y cómo lo verifico contra mis roles?`,variantes_pregunta:[`que es el certificado de ingresos y retenciones`,`cuando me dan el certificado anual`,`como verifico si mi certificado esta bien`,`porque mis decimos no salen en ingresos gravados`,`para que sirve el certificado de retenciones`],respuesta_corta:`Es el resumen anual de lo que ganaste y lo que se te retuvo. Para verificarlo, descarga tus 12 roles del año y suma la columna de materia gravada: ese total debe coincidir con los ingresos gravados del certificado.`,respuesta_extendida:`### Los bloques del certificado

| Bloque | Qué contiene | Con qué línea de tu rol se cruza |
|---|---|---|
| Identificación | Tus datos y los del empleador (Corporación Vertiente S.A., RUC 0992847561001) | — |
| Ingresos gravados | Suma anual de tu remuneración: sueldo, comisiones, bonos, horas extra, recargos | Suma de las materias gravadas de los 12 roles |
| Ingresos exentos | Décima tercera, décima cuarta, fondos de reserva | Líneas de beneficios sociales |
| Aporte personal al IESS | Suma anual de tus aportes | Suma de la línea "aporte personal IESS" |
| Gastos personales proyectados o declarados | Lo que informaste en tu formulario | — |
| Impuesto a la renta causado y retenido | Lo que se te retuvo en el año | Suma de la línea "impuesto a la renta" |

### Cómo verificarlo tú mismo

Descarga tus 12 roles del año y suma la columna de materia gravada. Ese total debe coincidir con los ingresos gravados del certificado. **Si no coincide, hay algo que revisar y debes reportarlo.**

Se entrega en enero o febrero del año siguiente (calendario interno de VERTIENTE, no plazo legal).

Fuente: Manual de Nómina, secciones 15.1 y 14.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Las fechas de entrega son calendario interno de VERTIENTE, no plazos oficiales del SRI.`],parametros_usados:[`iess_base_calculo`,`iess_aporte_personal`,`decimo_tercero_formula`,`decimo_cuarto_valor`,`fondos_reserva_porcentaje`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`15.1 Cómo leer su certificado de ingresos`,articulo:null},calculadora:null,datos_requeridos:[`año fiscal`,`roles mensuales del año`],siguiente_paso:`Descarga tus 12 roles del año y compara la suma de materia gravada con los ingresos gravados del certificado. Si no cuadra, repórtalo a Nómina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`certificado de ingresos`,`retenciones`,`impuesto a la renta`,`verificacion`],errores_frecuentes:[`Esperar que los décimos aparezcan dentro de los ingresos gravados: son ingresos exentos.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-085`,titulo:`¿A quién le pregunto si algo de mi nómina no me cuadra?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`tramites`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:24,pregunta_canonica:`¿Cuáles son los canales y plazos de respuesta en temas de nómina?`,variantes_pregunta:[`a quien le pregunto de mi sueldo`,`con quien hablo de nomina`,`cuanto se demora nomina en contestar`,`quiero hablar con una persona no con el bot`,`a quien reclamo si no me responden`],respuesta_corta:`Puedes preguntarme a mí, al liquidador de tu CD o directamente a Nómina y Compensaciones, que responde en máximo 3 días laborables. Si quieres hablar con una persona, dímelo y te coordino el contacto dentro de 2 días hábiles.`,respuesta_extendida:`### Los niveles de atención

| Nivel | Quién atiende | Qué resuelve | Tiempo |
|---|---|---|---|
| 0 — Autoservicio | VERA | Consultas informativas y cálculos sobre tus datos | Inmediato, 24/7 |
| 1 — Transaccional asistido | VERA + sistema | Certificados, solicitudes, actualización de datos | Inmediato a 48 horas |
| 2 — Especialista de RR.HH. | Jefaturas y analistas del área | Casos personales y lo que VERA no pudo resolver | 1 a 5 días hábiles |
| 3 — Instancias especializadas | Comité de Ética, Legal y Cumplimiento, Servicio Médico, Trabajo Social, Control Interno | Casos sensibles | 2 horas a 3 días hábiles |

### Tu derecho a entender tu rol

Todo colaborador tiene derecho a que se le explique cada rubro de su rol, **en lenguaje sencillo y en el tiempo que haga falta**. Nómina y Compensaciones responde en un plazo máximo de 3 días laborables. Y si se detecta un error a tu favor, se corrige en el rol del mes siguiente **sin que tengas que insistir** (Reglamento Interno, Art. 45).

### Si quieres hablar con una persona

Solo dímelo. Te coordino el contacto con el rol que corresponde dentro de 2 días hábiles. No tienes que convencerme de nada.

Fuente: Reglamento Interno, Art. 45; Manual de Nómina, sección 15.4; Alcance del consultor virtual, sección de niveles de atención. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los casos de conflicto, denuncia, despido o salud en crisis siguen la matriz de escalamiento de zona roja.`],parametros_usados:[`periodicidad_pago_remuneracion`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración, rol de pagos y rubros variables`,articulo:`Art. 45`},calculadora:null,datos_requeridos:[`materia de la consulta`],siguiente_paso:`Dime qué necesitas y te resuelvo o te conecto con el rol correcto, con plazo comprometido.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`canales`,`nomina`,`plazos`,`atencion`,`escalamiento`],errores_frecuentes:[`Creer que hay que insistir para que se corrija un error detectado a favor del colaborador.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-086`,titulo:`Ya no me alcanza el sueldo: ¿qué opciones tengo?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`beneficios_empresa`,zona:`ambar`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:5,pregunta_canonica:`¿Qué vías existen si tengo una dificultad económica?`,variantes_pregunta:[`ya no me alcanza el sueldo`,`tengo muchas deudas que puedo hacer`,`necesito plata urgente que me ofrece la empresa`,`me estan embargando el sueldo`,`hay ayuda economica en la empresa`],respuesta_corta:`Existen tres vías: anticipo quincenal de hasta el 50% de lo devengado, préstamo interno sin interés hasta 12 cuotas y apoyo por calamidad cuando hay un evento grave. No te voy a recomendar cuál te conviene: te conecto con Nómina, que te contacta en 1 día hábil.`,respuesta_extendida:`### Las vías disponibles

| Vía | Qué es | Condición |
|---|---|---|
| Anticipo quincenal | Hasta el 50% de lo devengado en la quincena | Se solicita hasta el día 10; se descuenta íntegro en el rol del mismo mes |
| Préstamo interno | Sin interés, máximo 12 cuotas | Convenio escrito. **Es un beneficio, no un derecho exigible** |
| Apoyo por calamidad | Hasta USD 800,00 no reembolsables por evento, más anticipo de hasta 2 remuneraciones a 12 cuotas | Solo ante siniestro grave, enfermedad grave o fallecimiento de familiar directo |

### El límite que te protege

La suma de todos los descuentos voluntarios **no puede comprometer la parte de tu remuneración necesaria para tu subsistencia y la de tu familia**. En caso de duda, Nómina resuelve a tu favor y difiere la cuota (Reglamento Interno, Art. 48).

El parámetro descuentos_rol_limite no tiene un valor numérico registrado, así que no enuncio un porcentaje: enuncio el principio.

### Lo que no voy a hacer

No te voy a pedir el monto de tu deuda, ni quién es tu acreedor, ni detalles de tu situación. Y no te voy a recomendar una decisión financiera: te explico las opciones y la decisión es tuya.

Fuente: Manual de Nómina, secciones 11.1, 11.2 y 12.6; Reglamento Interno, Art. 47 y 48. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si hay una retención judicial o un embargo notificado, el caso involucra a Legal y se escala en consecuencia.`],parametros_usados:[`anticipo_quincenal_tope`,`descuentos_rol_limite`,`licencia_calamidad_domestica_dias`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`11.1 El principio general`,articulo:null},calculadora:`calculadora_anticipo_quincenal`,datos_requeridos:[`remuneracion devengada`,`descuentos vigentes en el rol`],siguiente_paso:`Registré tu consulta. Nómina y Compensaciones te contacta en 1 día hábil para revisar tus opciones. No hace falta que me cuentes más por aquí.`,escalamiento:{requerido:!0,rol:`Jefatura de Nómina y Compensaciones`,motivo:`Dificultad económica personal. VERA entrega el marco de las opciones, no indaga detalles y no recomienda una decisión financiera.`},etiquetas:[`dificultad economica`,`anticipo`,`prestamo`,`apoyo`,`zona ambar`],errores_frecuentes:[`Creer que el préstamo interno es un derecho que la empresa debe conceder.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-087`,titulo:`¿Qué pasa con mi nómina si tengo un contrato eventual u ocasional?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`remuneracion`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:7,pregunta_canonica:`¿Cambian los beneficios o el pago según la modalidad de contrato?`,variantes_pregunta:[`tengo contrato eventual me toca decimo`,`el contrato ocasional paga mas por hora`,`cuanto dura un contrato eventual`,`en periodo de prueba tengo beneficios`,`jornada parcial cuantas horas son`],respuesta_corta:`Los beneficios de ley se pagan en toda modalidad, incluido el período de prueba: décimos, vacaciones, IESS y utilidades proporcionales. El contrato eventual y el ocasional además llevan un recargo del 35% sobre el valor hora del SBU.`,respuesta_extendida:`### Las modalidades vigentes

| Modalidad | Duración máxima | Recargo | Parámetro |
|---|---|---|---|
| Indefinido (regla general) | — | — | contrato_modalidades_vigentes |
| Período de prueba (al inicio del indefinido) | 90 días | — | contrato_periodo_prueba_dias |
| Eventual | 180 días dentro de 365 | **35%** sobre el valor hora del SBU | contrato_eventual_duracion_maxima, contrato_eventual_recargo |
| Ocasional | 30 días dentro de 365 | **35%** sobre el valor hora del SBU | contrato_ocasional_duracion_maxima, contrato_ocasional_recargo |
| Jornada parcial permanente | Hasta 30 horas semanales | 35% en sábados, domingos y días de descanso obligatorio | jornada_parcial_tope_horas_semanales, jornada_parcial_recargo |

### Lo que no cambia con la modalidad

Los beneficios de ley se pagan **siempre**: décimo tercero (proporcional a lo percibido), décimo cuarto (proporcional a los días y a la jornada), vacaciones, afiliación al IESS desde el primer día y utilidades proporcionales a los días trabajados. El período de prueba **no suspende** ninguno de esos derechos.

### Registro

Todo contrato debe registrarse en el SUT dentro de 15 días desde la suscripción (parámetro contrato_registro_sut_plazo).

Fuente: Reglamento Interno, Capítulo III, y Manual de Nómina, sección 5.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El recargo del 35% aplica a eventual y ocasional sobre el valor hora del SBU.`,`En jornada parcial los beneficios se prorratean a la jornada.`],parametros_usados:[`contrato_modalidades_vigentes`,`contrato_periodo_prueba_dias`,`contrato_eventual_duracion_maxima`,`contrato_eventual_recargo`,`contrato_ocasional_duracion_maxima`,`contrato_ocasional_recargo`,`jornada_parcial_tope_horas_semanales`,`jornada_parcial_recargo`,`contrato_registro_sut_plazo`,`sbu`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo III — Clases de trabajadores y modalidades de contratación`,articulo:null},calculadora:null,datos_requeridos:[`modalidad de contrato`,`fecha de suscripcion`,`horas semanales pactadas`],siguiente_paso:`Revisa tu contrato registrado en el SUT. Si tu modalidad no coincide con lo que haces, dímelo y te conecto con Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`contrato`,`eventual`,`ocasional`,`periodo de prueba`,`jornada parcial`,`recargo 35`],errores_frecuentes:[`Creer que en período de prueba no se generan décimos ni afiliación al IESS.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-088`,titulo:`Somos varios los del CD con el mismo reclamo de pago`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`escalamiento`,zona:`roja`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:7,pregunta_canonica:`¿Qué hace VERA si un grupo de colaboradores plantea un reclamo colectivo sobre pagos?`,variantes_pregunta:[`somos varios los que no cobramos las horas`,`estamos organizandonos por el tema del pago`,`todo el CD tiene el mismo problema`,`vamos a reclamar todos juntos`,`queremos negociar todos juntos las comisiones`],respuesta_corta:`Registré el caso y lo derivé a la Jefatura de Legal y Cumplimiento, con copia a la Gerencia de RR.HH.; te contactan en 3 días hábiles. No voy a opinar sobre el fondo ni voy a registrar nombres de tus compañeros.`,respuesta_extendida:`### Por qué no lo resuelvo yo

Una consulta que involucra acción colectiva, organización de trabajadores o negociación conjunta se escala por diseño. No califico los hechos, no pido pruebas ni nombres, no adelanto consecuencias y **no disuado a nadie de ejercer un derecho**.

### Canal y plazo

| Rol receptor primario | Copia | Plazo comprometido |
|---|---|---|
| Jefatura de Legal y Cumplimiento | Gerencia de Recursos Humanos | **3 días hábiles** |

El registro se hace **sin identificación de terceros**: está prohibido registrar nombres de compañeros involucrados (parámetro estabilidad_dirigente_sindical).

### Lo que sí puedo hacer por ti en paralelo

Si además tienes una duda concreta y personal sobre **tu propio** rol —cuánto vale tu hora extra, por qué no salió una línea, qué se paga en tu liquidación—, esa sí la respondo con tus datos, en términos generales, sin aplicarla al conflicto.

Fuente: Alcance del consultor virtual, secciones 5.4 y 5.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Si hay indicio de litigio o participación de autoridad o abogado, el plazo se acorta según la matriz de escalamiento.`],parametros_usados:[`estabilidad_dirigente_sindical`,`descanso_semanal_horas`,`horas_suplementarias_tope_semanal`],fuente:{documento:`docs/09-alcance-consultor-virtual.md`,seccion:`5.5 Matriz de escalamiento de zona roja`,articulo:null},calculadora:null,datos_requeridos:[`instalacion`,`numero de caso generado`],siguiente_paso:`Quedó registrado con número de caso. Legal y Cumplimiento te contacta en 3 días hábiles. Si prefieres otra instancia o un canal reservado, dímelo.`,escalamiento:{requerido:!0,rol:`Jefatura de Legal y Cumplimiento`,motivo:`Acción colectiva u organización de trabajadores. VERA no opina, no registra nombres de terceros y nunca disuade del ejercicio de un derecho.`},etiquetas:[`zona roja`,`accion colectiva`,`escalamiento`,`legal`,`reclamo grupal`],errores_frecuentes:[`Esperar que el consultor virtual medie o califique un reclamo colectivo: no lo hace por diseño.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-089`,titulo:`¿Qué significan las palabras raras de mi rol?`,dominio:`nomina_beneficios_tiempo_asistencia`,subdominio:`rol_de_pagos`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:4,pregunta_canonica:`¿Qué quieren decir los términos técnicos de nómina?`,variantes_pregunta:[`que significa prorrateo`,`que es un egreso en el rol`,`que quiere decir devengado`,`que es el SUT`,`glosario de terminos de nomina`,`q significa materia gravada y devengado`],respuesta_corta:`Aquí van las más usadas: materia gravada es la parte de tus ingresos sobre la que se calcula el IESS; devengado es lo que ya ganaste aunque no te lo hayan pagado; prorrateo es pagar solo la parte del tiempo trabajado.`,respuesta_extendida:`### Glosario mínimo

| Término | Qué significa |
|---|---|
| Rol de pagos | Documento mensual con tus ingresos, egresos y líquido a recibir |
| Materia gravada | La parte de tus ingresos sobre la que se calculan los aportes al IESS |
| Ingreso / egreso | Lo que suma / lo que resta en tu rol |
| Devengado | Lo que ya ganaste por el tiempo trabajado, aunque todavía no te lo hayan acreditado |
| Prorrateo o proporcional | Pagar solo la parte que corresponde al tiempo trabajado |
| Décimo tercero | Bono navideño: un doceavo de lo percibido en el período |
| Décimo cuarto | Bono escolar: un SBU igual para todos |
| Fondos de reserva | Un mes de remuneración por año trabajado, en forma de 8,33% mensual |
| Hora suplementaria | La trabajada después de la jornada, en día laborable |
| Hora extraordinaria | La trabajada en sábado, domingo, descanso obligatorio o feriado |
| Jornada nocturna | La jornada ordinaria pactada entre 19h00 y 06h00, con recargo del 25% |
| Aporte personal / patronal | Lo que aporta al IESS el colaborador / la empresa |
| Aviso de entrada / salida | El registro en el IESS del inicio / fin de la relación laboral |
| Desahucio | Aviso anticipado de que se quiere terminar el contrato |
| Visto bueno | Autorización del Inspector del Trabajo para terminar el contrato por causal legal |
| Acta de finiquito | Documento pormenorizado que cierra la relación y detalla lo que se paga |
| SUT | Sistema Único de Trabajo, la plataforma del Ministerio del Trabajo |
| Preventa / autoventa | El prevendedor toma el pedido y otro entrega después / el vendedor de ruta vende y entrega en el mismo acto |
| Drop size / cobertura | Valor promedio de cada pedido / porcentaje de clientes de la ruta que compraron |
| Comisariato | Punto donde compras producto de la compañía a precio preferencial |
| Viáticos / movilización | Reembolso del gasto de viaje / del gasto de desplazamiento en ruta |

Fuente: Manual de Nómina, sección 17, y tabla glosario_terminos. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`glosario_terminos`,`iess_base_calculo`,`fondos_reserva_porcentaje`,`recargo_jornada_nocturna`],fuente:{documento:`docs/05-manual-nomina-beneficios.md`,seccion:`17. Glosario mínimo`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si hay un término de tu rol que no está aquí, dímelo y te lo explico con tu propio número.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`glosario`,`terminos`,`rol de pagos`,`definiciones`],errores_frecuentes:[`Confundir "total de ingresos" con "materia gravada" al revisar el aporte al IESS.`],confianza:`alta`,requiere_verificacion_legal:!1}],n={meta:e,atomos:t};export{t as atomos,n as default,e as meta};