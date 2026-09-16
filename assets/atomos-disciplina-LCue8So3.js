var e={archivo:`kb/atomos-disciplina.json`,dominio:`Ética, conducta, régimen disciplinario y orientación preventiva`,clave_dominio:`etica_conducta_disciplina`,nombre_dominio:`Ética, conducta, régimen disciplinario y orientación preventiva`,descripcion:`Base de conocimiento del consultor virtual de RR.HH. (VERA) para orientar al colaborador ANTES de actuar («¿puedo hacer esto?»), explicar el Código de Ética y el Reglamento Interno, y describir el régimen disciplinario, el debido proceso, los derechos de defensa, la línea ética, la protección contra represalias y los deberes de quien supervisa.`,empresa:`Corporación Vertiente S.A. (VERTIENTE)`,consultor:`VERA — Consultor Virtual de Recursos Humanos`,version:`1.0.0`,fecha_vigencia:`2026-09-16`,fecha_vigencia_larga:`16 de septiembre de 2026`,fecha_corte_simulacion:`2026-09-16`,rango_ids:`KB-200 a KB-294`,total_atomos:95,atomos_orientacion_preventiva:53,subdominios:[`Efectivo, cobranza y crédito`,`Regalos, atenciones y soborno`,`Producto, merma e inventario`,`Conflicto de interés y actividades externas`,`Convivencia, respeto y trato`,`Vehículos, conducción y tránsito`,`Ruta, visitas y turnos`,`Asistencia, marcación y permisos`,`Seguridad y salud en el trabajo`,`Inocuidad y planta FRUTAL`,`Información, sistemas y redes sociales`,`Ética: marco general`,`Debido proceso y derechos de defensa`,`Faltas y escala de sanciones`,`Antecedentes, reincidencia y prescripción`,`Visto bueno y terminación`,`Línea Ética y denuncias`,`Protección contra represalias`,`Deberes de quien supervisa`],zonas:{verde:83,ambar:6,roja:6},semilla:20260916,generado_por:`scripts/generar-kb-disciplina.mjs`,documentos_fuente:[`docs/01-codigo-de-etica.md`,`docs/02-reglamento-interno-trabajo.md`,`docs/08-politica-disciplina-debido-proceso.md`,`docs/09-alcance-consultor-virtual.md`,`datos/catalogo-faltas.json`,`datos/parametros-legales.json`],fuentes:[`docs/01-codigo-de-etica.md`,`docs/02-reglamento-interno-trabajo.md`,`docs/08-politica-disciplina-debido-proceso.md`,`docs/09-alcance-consultor-virtual.md`,`datos/catalogo-faltas.json`],regla_de_precedencia:`Ante cualquier contradicción entre docs/08 y docs/02 manda el Reglamento Interno de Trabajo (docs/02), conforme a datos/catalogo-faltas.json → inconsistencias_detectadas. Por eso estos átomos publican 3 días laborables de descargo prorrogables a 5 (Art. 109), prescripción de 30/60/90 días calendario (Art. 112) y caducidad del antecedente de 6/12/24 meses por nivel de falta (Art. 111), y NO publican la suspensión disciplinaria, que el Art. 106 no contempla.`,convencion_zonas:{verde:`VERA responde y resuelve: qué dice la norma sobre una conducta que TODAVÍA no ocurrió, cómo funciona el procedimiento, qué derechos tiene quien es investigado, qué es un antecedente y cuándo caduca, a quién acudir y en qué plazo.`,ambar:`Hecho propio ya ocurrido sin proceso abierto, o límite de una potestad de jefatura con una persona detrás. VERA explica el procedimiento y los derechos de defensa en abstracto, NUNCA anticipa la sanción, y deriva al rol humano con plazo comprometido.`,roja:`VERA no opina sobre el fondo: acuse empático, piso informativo del procedimiento y de los derechos, canal humano por rol, plazo comprometido y registro del caso. Acoso, discriminación, violencia, represalia, proceso abierto, despido, sindical, salud mental en crisis y consulta instrumental de una jefatura sobre una persona identificada.`},regla_de_oro:`VERA explica la norma; nunca prejuzga un caso concreto. La frontera es el tiempo verbal (docs/09 §5.10): antes del hecho responde con la norma y el código de falta; después del hecho jamás cita un código de falta ni anticipa una sanción, ni siquiera para tranquilizar. Están prohibidas por igual «te van a sancionar» y «no te preocupes, eso no es nada»: la segunda es peor, porque le quita al colaborador la razón para preparar su descargo.`,regla_del_descargo:`En toda consulta sobre un hecho propio ya ocurrido, VERA incluye siempre que ninguna medida disciplinaria se aplica sin requerimiento escrito previo, sin plazo para presentar descargos y justificativos, y sin derecho a acompañamiento. Decirlo no es tomar partido: es el procedimiento de la propia empresa.`,regla_de_cifras:`Ninguna cifra legal se escribe a mano en este archivo. Toda cifra normativa proviene de datos/parametros-legales.json y se cita por la clave listada en parametros_usados. Los parámetros marcados verificar_antes_de_produccion arrastran esa duda al átomo que los usa.`,campo_volumen_consulta:`volumen_consulta_estimado_mensual (y su alias volumen_consultas_mes_estimado) es una ESTIMACIÓN DE SIMULACIÓN para ordenar la recuperación por presión real de consulta. No proviene de una medición.`,reglas_de_uso:[`La respuesta_corta es la que VERA envía por WhatsApp: responde en la primera línea, sin preámbulo y sin pedirle a nadie que lea un documento.`,`La respuesta_extendida es el desarrollo para el portal web, en Markdown.`,`Toda respuesta cierra citando el documento y la sección de fuente, con su fecha de vigencia.`,`VERA nunca disuade a un colaborador de ejercer un derecho ni minimiza un mínimo legal. Si el mínimo legal y la política interna difieren, manda el más favorable al colaborador y así lo dice.`,`VERA nunca valora si una conducta ya ocurrida constituye falta, ni anticipa qué sanción correspondería a un caso concreto.`,`Los átomos de tipo_atomo = "orientacion_preventiva" responden la pregunta «¿puedo hacer esto?» ANTES de que la persona actúe: dicen si está permitido, con qué norma, qué hacer en su lugar, a quién acudir y qué riesgo corre.`,`Preguntar antes de actuar es el escalón 0 de la escala disciplinaria: no es sanción y no genera ningún antecedente. Ninguna consulta a VERA se registra en el expediente de nadie.`],aviso_datos_simulados:`DATOS SIMULADOS. Corporación Vertiente S.A., la marca FRUTAL, sus instalaciones y las personas que aparecen en los ejemplos son ficticias y NO corresponden a personas, empresas ni marcas reales. Las referencias legales son parámetros y citas de simulación y no constituyen asesoría legal: deben verificarse contra la norma vigente del Ministerio del Trabajo y del IESS antes de cualquier uso real.`},t=[{id:`KB-200`,titulo:`¿Me llevo la cobranza a la casa si el banco ya cerró?`,dominio:`etica_conducta_disciplina`,subdominio:`Efectivo, cobranza y crédito`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:96,volumen_consultas_mes_estimado:96,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo guardar en mi casa el efectivo de la cobranza hasta el siguiente día hábil?`,variantes_pregunta:[`me quedo con la plata de la cobranza hasta el lunes?`,`el banco ya cerro, me llevo la recaudacion a la casa`,`puedo guardar el efectivo de la ruta en mi casa`,`no alcance a depositar, que hago con la plata`,`deposito el lunes y no pasa nada?`,`donde dejo la cobranza si ya cerraron`],respuesta_corta:`No, el efectivo de la cobranza no se lleva a la casa por ningún motivo. Deposite en el punto autorizado o entréguelo hoy mismo al liquidador de su CD con recibo firmado; si ya no alcanza el horario, avise al supervisor zonal y déjelo bajo acta en bodega.`,respuesta_extendida:`### La regla, sin excepciones

El dinero de la empresa **no pasa la noche fuera de un punto autorizado**. Hay exactamente tres destinos válidos al cierre de la ruta:

| Destino | Cuándo | Qué le queda a usted |
|---|---|---|
| Punto de recaudación autorizado | Dentro del horario bancario | Comprobante de depósito |
| Liquidador del centro de distribución | El mismo día, si no alcanzó el banco | Recibo firmado por el liquidador |
| Bodega del CD bajo acta | Solo si no hay ninguna de las dos anteriores y con el supervisor avisado | Acta firmada con dos personas |

### Por qué importa tanto

Depositar con retraso, **sin faltante**, es falta grave (FAL-029, Art. 104 literal g). Pero si aparece un faltante, el hecho deja de ser un retraso y se lee como apropiación, que es falta muy grave (FAL-050, Art. 105 literal d). La diferencia entre las dos cosas la marca, sobre todo, que el dinero haya estado o no bajo custodia registrada.

Y hay una razón que no es normativa: **llevar efectivo de la empresa en el bolso o en la casa lo expone a usted**. VERTIENTE no quiere a nadie de su fuerza de ventas caminando con recaudación encima.

### Si ya se le pasó el horario

Llame al supervisor zonal **antes** de salir del punto, no al día siguiente. Un aviso previo convierte un problema en una novedad registrada.

Fuente: Reglamento Interno de Trabajo, Art. 104 literal g y Art. 105 literal d; Código de Ética, Capítulo II. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`vendedor de ruta (autoventa)`,`prevendedor`,`administrativo`],condiciones:[`Aplica a todo colaborador que reciba dinero de un cliente, aunque no sea su función habitual.`,`El punto de recaudación autorizado y el horario del liquidador los fija cada centro de distribución.`],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas y sanciones`,articulo:`Art. 104, literal g`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si ya es tarde y no tiene dónde depositar, llame ahora al supervisor zonal o al jefe de su centro de distribución y deje el dinero bajo acta. ¿Quiere que le indique a quién corresponde en su sede?`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`cobranza`,`efectivo`,`deposito`,`ruta`,`orientacion preventiva`,`falta grave`],errores_frecuentes:[`Creer que si el monto es pequeño no aplica la regla: la regla es sobre la custodia, no sobre el monto.`,`Pensar que avisar al día siguiente equivale a avisar antes.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-201`,titulo:`¿Puedo usar plata de la cobranza y reponerla después?`,dominio:`etica_conducta_disciplina`,subdominio:`Efectivo, cobranza y crédito`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:71,volumen_consultas_mes_estimado:71,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo tomar dinero de la cobranza para una emergencia personal si lo repongo antes del cierre?`,variantes_pregunta:[`puedo coger algo de la cobranza y reponer el viernes`,`necesito plata urgente, tomo de la recaudacion y la devuelvo`,`si repongo el mismo dia hay problema?`,`prestarme de la cobranza un ratito`,`agarrar plata de la ruta para una emergencia`],respuesta_corta:`No. Usar la cobranza para un gasto personal es falta muy grave desde el primer dólar, aunque usted reponga después. Si necesita dinero, pida el anticipo por el canal formal de Nómina y Compensaciones: para eso existe.`,respuesta_extendida:`### Qué dice la norma

No depositar la cobranza, usarla para fines personales o cubrir un cobro con otro está tipificado como **falta muy grave** (FAL-050, Art. 105 literal d). La reposición posterior es un **atenuante** —reparación espontánea— pero no borra la falta.

### La alternativa que sí existe

VERTIENTE tiene un anticipo de remuneración formal (parámetro \`anticipo_quincenal_tope\`). Se pide a la Jefatura de Nómina y Compensaciones, se descuenta del rol y no compromete a nadie. **Pedirlo no tiene ninguna consecuencia disciplinaria ni afecta su evaluación.**

### Y si el apuro es hoy mismo

Hable con Trabajo Social de RR.HH. Existen además el préstamo quirografario del IESS (parámetro \`iess_prestamo_quirografario_descuento\`) y el acompañamiento de bienestar. Ninguna de esas vías pasa por el efectivo de la ruta.

> **Preguntar antes de actuar es el escalón 0 de la escala disciplinaria: no es sanción y no genera antecedente.** Esta consulta no queda en su expediente.

Fuente: Reglamento Interno de Trabajo, Art. 105 literal d y Art. 47; Política de Disciplina y Debido Proceso, sección 18. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`vendedor de ruta (autoventa)`,`prevendedor`,`administrativo`],condiciones:[],parametros_usados:[`anticipo_quincenal_tope`,`iess_prestamo_quirografario_descuento`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal d`},calculadora:null,datos_requeridos:[],siguiente_paso:`Solicite el anticipo a la Jefatura de Nómina y Compensaciones. Si el apuro es de salud o familiar, Trabajo Social de RR.HH. atiende el mismo día.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`cobranza`,`anticipo`,`apropiacion`,`falta muy grave`,`orientacion preventiva`],errores_frecuentes:[`Creer que reponer el dinero antes del arqueo hace que la falta no exista.`,`Pensar que el supervisor puede adelantar efectivo de la operación: no puede, y hacerlo lo expone a él también.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-202`,titulo:`¿Puedo poner plata mía para tapar un cobro del cliente?`,dominio:`etica_conducta_disciplina`,subdominio:`Efectivo, cobranza y crédito`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:44,volumen_consultas_mes_estimado:44,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo cubrir con mi propio dinero el pago de un cliente que se atrasó, para que no me salga cartera vencida?`,variantes_pregunta:[`pongo la plata yo mientras el tendero me paga`,`puedo cubrir el cobro del cliente con mi dinero`,`jineteo de cartera es malo?`,`tapar un cobro con otro para no tener vencida`,`el cliente me paga la otra semana, cubro yo`],respuesta_corta:`No lo haga, ni con la mejor intención. Cubrir un cobro con dinero suyo o con el de otro cliente es jineteo de cartera y el Reglamento lo trata como falta muy grave. Reporte el plazo al supervisor zonal el mismo día y tramite el crédito por su flujo.`,respuesta_extendida:`### Por qué una buena intención termina mal

Cuando usted pone dinero propio, la cartera de la empresa queda **falseada**: el sistema dice que el cliente pagó y no pagó. El día que el cliente no le devuelve, el faltante aparece a su nombre, sin un solo documento que respalde lo que realmente ocurrió.

El Art. 105 literal d tipifica expresamente «cubrir un cobro con otro» como falta muy grave (FAL-050).

### Lo que sí se hace

1. Registre el crédito como lo que es, con el plazo real.
2. Reporte la novedad al supervisor zonal **el mismo día**.
3. Si el cliente necesita plazo, se tramita por el flujo de crédito con la Jefatura de Crédito y Cobranzas. Para eso existe la política de crédito.

Una cartera vencida reportada a tiempo es un dato de gestión. Una cartera vencida tapada es un problema disciplinario.

Fuente: Reglamento Interno de Trabajo, Art. 105 literal d; Código de Ética, Capítulo I.2. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal d`},calculadora:null,datos_requeridos:[],siguiente_paso:`Reporte hoy el plazo al supervisor zonal y pida que Crédito y Cobranzas evalúe la extensión del plazo del cliente.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`cartera`,`jineteo`,`credito`,`cobranza`,`orientacion preventiva`],errores_frecuentes:[`Creer que como no hay pérdida para la empresa no hay falta: lo que se sanciona es falsear la cartera.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-203`,titulo:`¿Le recibo un cheque posfechado a un cliente de años?`,dominio:`etica_conducta_disciplina`,subdominio:`Efectivo, cobranza y crédito`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:27,volumen_consultas_mes_estimado:27,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo aceptar un cheque posfechado de un cliente de confianza?`,variantes_pregunta:[`me quiere dar cheque a fecha, le recibo?`,`acepto cheque posfechado del tendero`,`cliente de años me da cheque, esta bien?`,`puedo recibir cheque en la ruta`],respuesta_corta:`Consulte al supervisor zonal y a Crédito y Cobranzas antes de recibirlo: depende de la política de crédito vigente para ese cliente. Si lo recibe fuera de política y no se hace efectivo, la responsabilidad queda en quien lo aceptó.`,respuesta_extendida:`### Está condicionado, no prohibido

Recibir un cheque no es una falta en sí misma. Lo que genera el problema es recibirlo **fuera de la política de crédito** del cliente: forma de pago autorizada, cupo, plazo y estado de bloqueo.

| Antes de recibirlo, verifique | Con quién |
|---|---|
| Que la forma de pago esté autorizada para ese cliente | Jefatura de Crédito y Cobranzas |
| Que el cliente no esté bloqueado | Sistema y supervisor zonal |
| Que el cupo alcance | Crédito y Cobranzas |

### El riesgo concreto

Un cheque aceptado fuera de política que rebota se convierte en un **faltante de su ruta** y en un procedimiento disciplinario perfectamente evitable, encuadrado en el Art. 104 literal u (desatender una instrucción legítima de trabajo).

Una llamada de dos minutos al supervisor antes de recibirlo lo deja a usted cubierto.

Fuente: Política de crédito y cobranza; Reglamento Interno de Trabajo, Art. 104 literal u. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`administrativo`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 18 — Matriz de orientación preventiva`,articulo:`Art. 104, literal u`},calculadora:null,datos_requeridos:[],siguiente_paso:`Llame al supervisor zonal antes de recibir el cheque; si él lo autoriza, pida que quede registrado en el sistema.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`cheque`,`credito`,`cobranza`,`orientacion preventiva`,`condicionado`],errores_frecuentes:[`Suponer que la antigüedad del cliente reemplaza la autorización de crédito.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-204`,titulo:`¿Le dejo mercadería a un cliente bloqueado si promete pagarme?`,dominio:`etica_conducta_disciplina`,subdominio:`Efectivo, cobranza y crédito`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:38,volumen_consultas_mes_estimado:38,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo entregar producto a crédito a un cliente que está bloqueado en el sistema?`,variantes_pregunta:[`el cliente esta bloqueado pero me insiste, le dejo?`,`puedo dejar mercaderia a cliente bloqueado`,`me paga despues, le entrego igual?`,`desbloquear cliente para dejarle producto`],respuesta_corta:`No. Un cliente bloqueado no recibe mercadería a crédito, por más segura que parezca la promesa. Pida el desbloqueo por el flujo de crédito y, si el cliente reclama, derívelo a Servicio al Cliente.`,respuesta_extendida:`### Qué pasa si igual la entrega

La entrega queda **a su nombre** y el saldo impago se le atribuye a su ruta. Si además se altera un registro para justificarla —una nota, una guía, un canje inventado— el caso escala de falta grave a falta muy grave por falseamiento (Art. 105 literal h).

### La vía correcta

1. Pida el desbloqueo a la Jefatura de Crédito y Cobranzas; existe un flujo y tiene plazos.
2. Si el cliente quiere reclamar el bloqueo, Servicio al Cliente lo atiende: no es una discusión que a usted le toque sostener en la puerta de la tienda.
3. Mientras el bloqueo esté vigente, la venta de contado sí es posible si la política del cliente lo permite. Confírmelo con su supervisor.

Fuente: Política de crédito y cobranza; Reglamento Interno de Trabajo, Art. 104 literal u. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`administrativo`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 18 — Matriz de orientación preventiva`,articulo:`Art. 104, literal u`},calculadora:null,datos_requeridos:[],siguiente_paso:`Solicite el desbloqueo a Crédito y Cobranzas y derive el reclamo del cliente a Servicio al Cliente.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`credito`,`cliente bloqueado`,`ruta`,`orientacion preventiva`],errores_frecuentes:[`Creer que la promesa verbal del cliente sustituye el desbloqueo formal.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-205`,titulo:`¿Puedo aceptar una propina del tendero por guardarle producto?`,dominio:`etica_conducta_disciplina`,subdominio:`Regalos, atenciones y soborno`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:41,volumen_consultas_mes_estimado:41,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo recibir dinero de un cliente por asignarle más producto, mejor cupo o entrega prioritaria?`,variantes_pregunta:[`el tendero me ofrece una propina por guardarle cajas`,`me quieren dar algo por darle mas producto`,`puedo cobrar por conseguirle cupo al cliente`,`me dan plata por el frente de percha, acepto?`,`una colaboracion del cliente por el cupo`],respuesta_corta:`No. Cobrar al cliente por darle cupo, descuento, exhibición o entrega prioritaria es un pago indebido y es falta muy grave desde la primera vez. Si falta producto, repórtelo a su supervisor: el producto escaso se asigna por criterio comercial, nunca por un pago.`,respuesta_extendida:`### Ninguna cantidad es «pequeña»

El Código de Ética es explícito: **dinero en efectivo, transferencia o recarga telefónica no se acepta nunca, en ningún monto**, y el ofrecimiento se reporta a la Línea Ética dentro de 24 horas. En el Reglamento Interno la conducta encuadra en el Art. 105 literal c y literal f.

### Dónde está la línea con la cortesía normal

| Situación | ¿Se puede? |
|---|---|
| Una cola, un café o un almuerzo sencillo en la tienda, de vez en cuando | Sí, ocasionalmente. No se pide y no se vuelve costumbre |
| Regalo material: licor, canasta, electrodoméstico, ropa | No. Se agradece y se explica el Código. Si no se puede devolver sin ofender, se entrega a RR.HH. del CD con acta |
| Dinero, transferencia o recarga, en cualquier monto | Nunca. Reporte obligatorio a la Línea Ética en 24 horas |
| Descuento personal en la tienda por ser de VERTIENTE | No, si no está abierto a cualquier consumidor |

### Qué hacer con el ofrecimiento

Declínelo en el momento, sin discusión, y repórtelo. **Reportar un ofrecimiento no le genera a usted ninguna consecuencia**: lo protege de que el mismo cliente lo cuente después de otra manera.

Fuente: Código de Ética, Capítulo I.1 y Línea Ética; Reglamento Interno de Trabajo, Art. 105 literales c y f. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`mercaderista`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo I — El tendero y el punto de venta, I.1`,articulo:`Art. 105, literal c`},calculadora:null,datos_requeridos:[],siguiente_paso:`Reporte el ofrecimiento a su supervisor zonal y a la Línea Ética (1800 837 843 opción 4, o linea.etica@vertiente.com.ec) dentro de 24 horas. Si falta producto, pida a su supervisor el criterio de asignación.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`soborno`,`propina`,`regalos`,`cliente`,`falta muy grave`,`orientacion preventiva`],errores_frecuentes:[`Creer que aceptar una sola vez no configura la falta: basta una.`,`Pensar que si el cliente insiste mucho, aceptar es una cortesía obligada.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-206`,titulo:`¿Puedo recibir un regalo de un proveedor?`,dominio:`etica_conducta_disciplina`,subdominio:`Regalos, atenciones y soborno`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:33,volumen_consultas_mes_estimado:33,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo aceptar un obsequio, una caja de cortesía o un almuerzo caro de un proveedor con el que negocio?`,variantes_pregunta:[`el proveedor me quiere dejar una caja de cortesia`,`me invitan a un almuerzo caro, acepto?`,`regalo de fin de año del proveedor`,`puedo recibir atenciones de proveedores`,`canasta navideña de un proveedor`],respuesta_corta:`Consulte el umbral del Código de Ética antes de aceptar y deje constancia escrita a su jefe inmediato. Con una negociación abierta, lo correcto es agradecer y declinar. Dinero en efectivo, transferencia o recarga no se acepta nunca, en ningún monto.`,respuesta_extendida:`### La regla

VERTIENTE no prohíbe la cortesía comercial normal. Prohíbe que la cortesía **compre una decisión**. Por eso el criterio no es el gusto de cada quien, sino tres preguntas:

1. ¿Tengo una negociación, adjudicación o evaluación abierta con este proveedor? Si sí, se declina.
2. ¿Supera el umbral del Código de Ética? Si sí o no lo sé, se consulta antes.
3. ¿Lo aceptaría si mi jefe y el resto de proveedores lo vieran? Si no, ya tiene la respuesta.

### Si ya se lo dejaron

No lo guarde en silencio. Informe por escrito a su jefe inmediato y a la Jefatura de Legal y Cumplimiento. Si devolverlo ofende al proveedor, se entrega a RR.HH. de la instalación para destino social, **con acta**. Eso cierra el tema y lo deja a usted limpio.

### Lo que nunca

Dinero en efectivo, transferencia o recarga telefónica: **nunca, en ningún monto**, y con reporte obligatorio a la Línea Ética dentro de 24 horas.

Fuente: Código de Ética, Capítulo V — Compras y proveedores, y Capítulo I.1. Vigencia 2026-09-16.`,aplica_a:[`administrativo`,`comercial`,`direccion`],condiciones:[`El umbral de valor de obsequios y atenciones lo fija el Código de Ética; consúltelo con Legal y Cumplimiento antes de aceptar si tiene cualquier duda.`],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo V — Compras y proveedores, V.2`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Antes de aceptar, escriba a su jefe inmediato y consulte el umbral con la Jefatura de Legal y Cumplimiento. Si la negociación está abierta, decline.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`regalos`,`proveedores`,`compras`,`conflicto de interes`,`orientacion preventiva`],errores_frecuentes:[`Creer que como el regalo llegó sin pedirlo no hay nada que informar: lo que se informa es la recepción.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-207`,titulo:`¿Puedo llevarme producto golpeado o próximo a vencer?`,dominio:`etica_conducta_disciplina`,subdominio:`Producto, merma e inventario`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:88,volumen_consultas_mes_estimado:88,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo llevarme producto de merma, golpeado o próximo a vencer que igual se va a botar?`,variantes_pregunta:[`me llevo unas gaseosas golpeadas de la jaba`,`el producto se vence la otra semana, me lo puedo llevar`,`igual lo van a botar, puedo cogerlo?`,`producto de merma para la casa`,`las cajas dañadas del anden me las llevo`,`puedo tomar producto de la linea si esta malo`],respuesta_corta:`No. Aunque esté golpeado o por vencer, el producto sigue siendo de la empresa hasta que se da de baja con acta. Registre la merma y entréguela en el CD. Si quiere producto para su casa, use el comisariato.`,respuesta_extendida:`### Por qué es tan serio algo de tan poco valor

Lo que se sanciona **no es el monto: es tomar un bien sin autorización**. Consumir o apropiarse de producto de la línea, de muestras o de la carga está tipificado en el Art. 105 literales b y c (FAL-048 y FAL-049), entre las faltas muy graves.

Además, el producto próximo a vencer tiene un procedimiento de baja o destrucción que exige **acta y testigo**, y un riesgo sanitario real que la empresa no puede trasladarle a usted ni a su familia.

### Lo que sí se hace

| Situación | Procedimiento |
|---|---|
| Producto golpeado o averiado | Acta de merma con foto y firma; entrega en el CD |
| Producto próximo a vencer | Procedimiento de baja o destrucción, con acta y testigo |
| Quiere producto para su hogar | Comisariato, en las condiciones del beneficio (parámetro \`comisariato_umbral\`) |

### El matiz que sí atenúa

En un caso resuelto de la propia política, un ayudante de venta con cuatro años sin antecedentes consumió producto de una jaba dañada creyendo que «no contaba», lo admitió de inmediato y ofreció pagarlo: la resolución proporcional fue amonestación escrita con instrucción sobre el procedimiento de merma, más una campaña preventiva, porque el caso reveló un vacío de comunicación. Eso no convierte la conducta en permitida: muestra que **reconocer y reparar atenúa**, y que ocultar agrava.

Fuente: Reglamento Interno de Trabajo, Art. 105 literales b y c; Código de Ética, Capítulo IV; Política de Disciplina, sección 11.4. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`logistica`,`produccion`,`estibador`,`ayudante de venta (perchador)`],condiciones:[],parametros_usados:[`comisariato_umbral`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal b`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registre la merma en el acta correspondiente y entréguela en su CD. Si quiere producto para su hogar, consulte las condiciones del comisariato con el Analista de Compensaciones y Beneficios.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`merma`,`producto`,`inventario`,`apropiacion`,`orientacion preventiva`],errores_frecuentes:[`Creer que el valor bajo del producto hace que no sea falta.`,`Suponer que si el supervisor «hace la vista gorda» la conducta está autorizada: solo un acta de baja autoriza.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-208`,titulo:`¿Puedo comprar en el comisariato para revender?`,dominio:`etica_conducta_disciplina`,subdominio:`Producto, merma e inventario`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:24,volumen_consultas_mes_estimado:24,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo comprar volumen en el comisariato de la empresa para revenderlo por mi cuenta?`,variantes_pregunta:[`puedo comprar harto en el comisariato y revender`,`el comisariato sirve para mi negocio?`,`compro al por mayor en comisariato`,`revender producto del comisariato en mi barrio`],respuesta_corta:`El comisariato es para consumo propio y del hogar, no para reventa. Si quiere volumen para un negocio, se compra como cliente por el canal comercial, con las condiciones de cualquier cliente.`,respuesta_extendida:`### El límite del beneficio

El comisariato es un beneficio de consumo interno (parámetro \`comisariato_umbral\`). Usarlo para abastecer un negocio propio desvirtúa el beneficio y, si ese negocio compite con la ruta de VERTIENTE, puede configurar la falta muy grave de usar la cartera o el portafolio para negocio propio (Art. 105 literal f).

### La vía limpia

Si usted o su familia tienen una tienda, pueden **comprar como cliente** por el canal comercial. Eso es legítimo y frecuente. Lo que corresponde entonces es **declarar el conflicto de interés** (Capítulo VIII y sección 14.7 de la política de disciplina): usted no decide sobre crédito, precio, cupo ni atención de ese cliente.

Declararlo no se sanciona nunca. Ocultarlo sí.

Fuente: Código de Ética, Capítulo X; Política de Disciplina, sección 14.7; Reglamento Interno, Art. 49. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`comisariato_umbral`],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo X — Uso de los activos de la empresa`,articulo:`Art. 49`},calculadora:null,datos_requeridos:[],siguiente_paso:`Consulte las condiciones vigentes con el Analista de Compensaciones y Beneficios. Si tiene un negocio que compra a VERTIENTE, declare el conflicto de interés a Legal y Cumplimiento.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`comisariato`,`beneficios`,`reventa`,`conflicto de interes`,`orientacion preventiva`],errores_frecuentes:[`Creer que el beneficio es un cupo de compra mayorista.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-209`,titulo:`¿Puedo pasar un daño de estiba como devolución del cliente?`,dominio:`etica_conducta_disciplina`,subdominio:`Producto, merma e inventario`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:31,volumen_consultas_mes_estimado:31,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo registrar como devolución del cliente un producto que se dañó en el camión?`,variantes_pregunta:[`se me daño producto en el camion, lo paso como devolucion`,`puedo registrar la averia como devolucion del cliente`,`como justifico el producto roto de la estiba`,`cambio el registro para que cuadre el inventario`],respuesta_corta:`No. Registrar la avería como otra cosa es falsear un registro y eso es falta muy grave. Registre el daño como lo que es: el daño por estiba se analiza como causa de proceso y reportarlo bien casi nunca termina en sanción.`,respuesta_extendida:`### La diferencia entre un problema y una falta

| Qué hace | Cómo se lee |
|---|---|
| Registra la avería como avería, con acta | Incidencia operativa. Se analiza la causa: carga, ruta, empaque, procedimiento de estiba |
| La pasa como devolución del cliente | Falseamiento de registros: falta muy grave, Art. 105 literal h (FAL-054) |

Un registro falseado convierte un problema operativo menor —que probablemente ni siquiera era suyo— en una causal de visto bueno por falsedad documental. Es el peor cambio de categoría que existe en el catálogo.

### Qué hacer

Levante el acta de avería con el jefe de centro de distribución y avise a Control Interno para la baja. Si las averías se repiten en su ruta, eso es una señal de proceso y dispara una revisión, no una cacería: la política es explícita en que tres o más faltantes menores en un trimestre **disparan revisión de proceso**, no sanciones.

Fuente: Reglamento Interno de Trabajo, Art. 105 literal h; Política de Disciplina, secciones 14.2 y 17.4. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`logistica`,`estibador`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal h`},calculadora:null,datos_requeridos:[],siguiente_paso:`Levante el acta de avería con el jefe de su centro de distribución hoy mismo y pida que Control Interno registre la baja.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`averia`,`registros`,`falseamiento`,`inventario`,`orientacion preventiva`],errores_frecuentes:[`Creer que «cuadrar» el inventario por otra vía es ordenar; es falsear.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-210`,titulo:`¿Puedo cambiarle producto vencido al cliente sin registrar el canje?`,dominio:`etica_conducta_disciplina`,subdominio:`Producto, merma e inventario`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:22,volumen_consultas_mes_estimado:22,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo cambiar producto vencido de un cliente con producto de mi carga sin hacer el trámite de canje?`,variantes_pregunta:[`le cambio el producto vencido de la carga sin papeles`,`puedo hacer el cambio sin registrar nada`,`canje sin documento, hay problema?`,`le doy producto bueno y no hago tramite`],respuesta_corta:`El cambio sí corresponde —es un derecho del cliente— pero se tramita por el procedimiento de canje con su documento. Sin documento, el producto que falta en su carga aparece como faltante suyo.`,respuesta_extendida:`### El fondo está bien, la forma no

Canjear producto vencido es correcto y el cliente tiene derecho. El problema es hacerlo **sin registro**: descuadra el inventario y, si además se altera un documento para justificarlo, se lee como falseamiento (Art. 105 literal h).

### El procedimiento

1. Levante el documento de canje en el punto de venta.
2. Retire el producto vencido con el acta correspondiente.
3. Entregue el reemplazo contra ese documento.
4. Descargue el canje en su liquidación del día.

Si el procedimiento le toma demasiado tiempo en ruta, ese es un tema que se plantea al supervisor zonal y al Analista de Reclamos y Devoluciones para simplificarlo, no una razón para saltárselo.

Fuente: Reglamento Interno de Trabajo, Art. 103 literal u y Art. 105 literal h. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas`,articulo:`Art. 103, literal u`},calculadora:null,datos_requeridos:[],siguiente_paso:`Tramite el canje con su documento en el punto de venta y descárguelo en la liquidación del día. Consulte dudas con el Analista de Reclamos y Devoluciones.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`canje`,`devoluciones`,`registro`,`orientacion preventiva`],errores_frecuentes:[`Creer que hacer el favor rápido al cliente evita el trámite: deja el faltante a su nombre.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-211`,titulo:`¿Puedo darle un descuento especial a la tienda de mi cuñado?`,dominio:`etica_conducta_disciplina`,subdominio:`Conflicto de interés y actividades externas`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:29,volumen_consultas_mes_estimado:29,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo atender comercialmente a un familiar que es cliente y autorizarle condiciones especiales?`,variantes_pregunta:[`mi cuñado tiene tienda y yo le atiendo, esta mal?`,`puedo darle descuento a mi familiar cliente`,`atiendo a mi hermano que tiene tienda`,`tengo un pariente en mi ruta, que hago`],respuesta_corta:`Atender a un familiar exige declararlo antes; autorizarle un descuento usted mismo, no se puede. Declare el parentesco y pida que otro vendedor atienda a ese cliente con las condiciones estándar. Declarar nunca se sanciona; ocultar sí.`,respuesta_extendida:`### La regla de oro del conflicto de interés

> **La falta no es tener un conflicto de interés. La falta es no declararlo.**

Un familiar que es cliente, proveedor o competidor es una situación frecuente y perfectamente manejable. Lo que no se puede es **decidir sobre él**: crédito, precio, cupo, exhibición, atención de reclamos.

### Qué hacer, en orden

1. **Declare** el parentesco por escrito a su jefatura y a Legal y Cumplimiento, dentro de los 5 días hábiles desde que la situación surge o se conoce.
2. **Abstente** de participar en cualquier decisión sobre ese cliente.
3. La empresa **reasigna** la atención a otro vendedor, con las condiciones estándar del segmento.

### Qué pasa si no lo declara

El conflicto oculto **con beneficio propio** se trata como falta muy grave (MG-09 en la política de disciplina; Art. 105 literal f cuando hay beneficio propio), con agravante de abuso de confianza si su cargo decide sobre crédito, cupos o contratación.

Fuente: Código de Ética, Capítulo VIII.4 y Declaración anual de conflicto de interés; Política de Disciplina, sección 14.7. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`administrativo`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.7 — Conflicto de interés`,articulo:`Art. 76`},calculadora:null,datos_requeridos:[],siguiente_paso:`Presente la declaración de conflicto de interés a su jefatura y a la Jefatura de Legal y Cumplimiento, y pida la reasignación del cliente al supervisor zonal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`conflicto de interes`,`familiar`,`cliente`,`declaracion`,`orientacion preventiva`],errores_frecuentes:[`Creer que declarar el parentesco puede perjudicarlo: declarar de buena fe nunca genera sanción.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-212`,titulo:`¿Puedo recomendar a un familiar para una vacante?`,dominio:`etica_conducta_disciplina`,subdominio:`Conflicto de interés y actividades externas`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:26,volumen_consultas_mes_estimado:26,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo recomendar a un pariente para una vacante en mi propio equipo?`,variantes_pregunta:[`hay vacante en mi equipo y quiero recomendar a mi primo`,`puedo meter a un familiar a trabajar aqui`,`se puede contratar a un pariente`,`mi hermano quiere entrar de estibador, puedo ayudarle`],respuesta_corta:`Sí puede recomendarlo, declarando el parentesco antes de que empiece el proceso. Lo que no puede es participar en la decisión ni quedar como su jefe directo: la vacante se publica, se concursa y él compite en igualdad de condiciones.`,respuesta_extendida:`### Nepotismo: qué está y qué no está prohibido

Contratar a un familiar **no está prohibido**. Lo que está prohibido es:

- Participar en su selección, entrevista, evaluación, fijación de remuneración, sanción o ascenso.
- Que quede bajo su línea de reporte, directa o indirecta.
- Que la vacante no se publique ni se concurse.

### Lo que hace la persona correcta

El Código de Ética resuelve este caso con un ejemplo del propio negocio: un jefe de CD con un hermano que cumple el perfil **declara la vinculación por escrito antes de cualquier paso**, se aparta del proceso completo y no participa en la entrevista ni en la decisión. Si el hermano gana en igualdad de condiciones, puede ser contratado siempre que no quede bajo su línea de reporte.

> La razón no es sospechar de nadie: es que la decisión sea **verificable**. Si usted decide, ningún otro postulante ni su propio equipo podrá creer que el proceso fue limpio.

Fuente: Código de Ética, Capítulo VIII.4 y Caso CE-17; Política de Reclutamiento y Selección. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo VIII.4 — Vinculación familiar en la nómina`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Declare el parentesco por escrito a la Jefatura de Reclutamiento y Selección antes de que el proceso inicie, y apártese de toda decisión.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`nepotismo`,`familiar`,`vacante`,`seleccion`,`orientacion preventiva`],errores_frecuentes:[`Creer que recomendar y entrevistar son la misma cosa: recomendar se puede, decidir no.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-213`,titulo:`¿Puedo trabajar los fines de semana en otro lado?`,dominio:`etica_conducta_disciplina`,subdominio:`Conflicto de interés y actividades externas`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:47,volumen_consultas_mes_estimado:47,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo tener un segundo trabajo o un negocio propio fuera de mi jornada en VERTIENTE?`,variantes_pregunta:[`puedo trabajar en otra parte los sabados`,`tengo un trabajito de medio tiempo, aviso o no`,`se puede trabajar en otra distribuidora los fines de semana`,`puedo tener mi propio negocio aparte`,`hay problema si trabajo en una ferreteria el finde`],respuesta_corta:`Depende de dónde: en una empresa que compite con VERTIENTE, no —es competencia desleal y falta muy grave—. En una actividad que no compite, no usa recursos de la empresa y no interfiere con su jornada ni su descanso, normalmente sí: solo tiene que declararla.`,respuesta_extendida:`### La línea es la competencia, no el segundo ingreso

| Actividad | ¿Se puede? |
|---|---|
| Trabajar para otra distribuidora de consumo masivo o un competidor | **No.** Competencia desleal, Art. 105 literal f (FAL-052) |
| Vender o transportar producto ajeno al portafolio durante su ruta | **No.** Misma falta muy grave |
| Trabajo o negocio que no compite (ferretería, taller, servicios), fuera de jornada | **Sí**, declarándolo |
| Tienda propia que le compra a VERTIENTE | **Sí**, declarándolo y absteniéndose de decidir sobre ese cliente |

### Lo que hay que cuidar además

Que la actividad **no interfiera con su jornada ni con su descanso**. El descanso no es un formalismo: llegar sin dormir a manejar un camión o a operar una línea es un riesgo para usted y para otros.

### Cómo se declara

Por escrito a su jefatura y a la Jefatura de Legal y Cumplimiento, dentro de los 5 días hábiles desde que la situación surge. Declarar de buena fe nunca genera sanción.

Fuente: Reglamento Interno de Trabajo, Art. 76 y Art. 105 literal f; Política de Disciplina, sección 14.7. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XI — Prohibiciones generales`,articulo:`Art. 76`},calculadora:null,datos_requeridos:[],siguiente_paso:`Presente la declaración a su jefatura y a Legal y Cumplimiento. Si necesita ingresos adicionales, Trabajo Social de RR.HH. puede orientarlo sobre alternativas.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`segundo empleo`,`competencia desleal`,`conflicto de interes`,`declaracion`,`orientacion preventiva`],errores_frecuentes:[`Creer que lo que se hace fuera de la jornada nunca le importa a la empresa: importa solo si compite o si interfiere.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-214`,titulo:`¿Puedo prestarle plata con interés a un compañero?`,dominio:`etica_conducta_disciplina`,subdominio:`Convivencia, respeto y trato`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:21,volumen_consultas_mes_estimado:21,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo prestar dinero con interés a un compañero de trabajo?`,variantes_pregunta:[`presto plata a un compañero y le cobro interes`,`se puede hacer chulco entre compañeros`,`puedo cobrarle un interesito a mi compañero`,`prestamos entre compañeros de trabajo`],respuesta_corta:`No se admite: prestar con interés entre compañeros afecta la convivencia y termina en presión o cobranza dentro del trabajo. Si su compañero necesita apoyo, oriéntelo a Trabajo Social de RR.HH. o al préstamo quirografario del IESS.`,respuesta_extendida:`### Por qué la empresa se mete en esto

No es por el préstamo en sí: es por lo que viene después. Los cobros entre compañeros terminan en conflictos, amenazas, descuentos informales y presión dentro del turno, **y eso sí constituye falta disciplinaria** (Art. 76, prohibiciones generales; y Art. 105 literal m si hay amenaza).

### Las vías que existen

| Necesidad | Canal |
|---|---|
| Adelanto de sueldo | Anticipo formal de Nómina y Compensaciones (parámetro \`anticipo_quincenal_tope\`) |
| Préstamo mayor | Préstamo quirografario del IESS (parámetro \`iess_prestamo_quirografario_descuento\`) |
| Emergencia familiar o de salud | Trabajo Social de RR.HH. |

Orientar a un compañero hacia esos canales es ayudarlo de verdad y no lo pone a usted en riesgo.

Fuente: Código de Ética, Capítulo VIII; Reglamento Interno de Trabajo, Art. 76. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`anticipo_quincenal_tope`,`iess_prestamo_quirografario_descuento`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 18 — Matriz de orientación preventiva`,articulo:`Art. 76`},calculadora:null,datos_requeridos:[],siguiente_paso:`Oriente a su compañero a Trabajo Social de RR.HH. o a la Jefatura de Nómina y Compensaciones para el anticipo formal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`prestamos`,`convivencia`,`compañeros`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-215`,titulo:`¿Puedo pedirle al supervisor que me adelante plata en efectivo?`,dominio:`etica_conducta_disciplina`,subdominio:`Efectivo, cobranza y crédito`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:25,volumen_consultas_mes_estimado:25,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Mi supervisor puede adelantarme dinero en efectivo antes de fin de mes?`,variantes_pregunta:[`le pido al supervisor que me adelante en efectivo`,`el jefe me puede prestar de la caja`,`adelanto de sueldo con el supervisor`,`necesito plata antes de fin de mes, quien me adelanta`],respuesta_corta:`Por esa vía no: ningún supervisor maneja dinero de la empresa para adelantos. El anticipo se solicita por el canal formal de Nómina y Compensaciones y es un derecho que se tramita, no un favor.`,respuesta_extendida:`### Por qué no por el supervisor

Un adelanto informal sale del dinero de la operación y puede terminar tratado como uso indebido de fondos, con perjuicio **para usted y para el supervisor**. Nadie sale ganando.

### El canal que sí funciona

El anticipo de remuneración está previsto en el Art. 47 del Reglamento Interno, con un tope (parámetro \`anticipo_quincenal_tope\`) y un descuento ordenado en el rol. Se pide a la Jefatura de Nómina y Compensaciones.

**Pedir un anticipo no tiene ninguna consecuencia disciplinaria, no afecta su evaluación y no se comenta con su jefatura más allá de lo operativo.**

Fuente: Reglamento Interno de Trabajo, Art. 47; Manual de Nómina y Beneficios. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`anticipo_quincenal_tope`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VI — Remuneración`,articulo:`Art. 47`},calculadora:null,datos_requeridos:[],siguiente_paso:`Solicite el anticipo a la Jefatura de Nómina y Compensaciones por el canal formal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`anticipo`,`sueldo`,`supervisor`,`orientacion preventiva`],errores_frecuentes:[`Creer que el supervisor tiene caja chica para adelantos de sueldo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-216`,titulo:`¿Puedo usar el camión para un encargo personal?`,dominio:`etica_conducta_disciplina`,subdominio:`Vehículos, conducción y tránsito`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:39,volumen_consultas_mes_estimado:39,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo usar el vehículo de la empresa fuera de ruta para un asunto personal?`,variantes_pregunta:[`termine la ruta temprano, llevo un encargo en el camion`,`puedo usar el camion para algo personal`,`sacar el vehiculo de la empresa fuera de ruta`,`me queda de paso, uso el camion`,`puedo llevar algo mio en el furgon`],respuesta_corta:`No sin autorización escrita del jefe de su centro de distribución. Fuera de la ruta autorizada no hay cobertura de seguro: un choque o un robo quedan sin respaldo y el caso se abre como falta grave.`,respuesta_extendida:`### La regla del activo

El vehículo se usa para **rutas, tareas y traslados autorizados**, con conductor habilitado y licencia vigente. Todo lo demás requiere autorización escrita previa del jefe de CD (Art. 81; falta grave del Art. 104 literal c).

### Lo que realmente está en juego

No es solo la sanción. Fuera de la ruta autorizada **el seguro no responde**. Si hay un siniestro, usted queda personalmente expuesto, y también la persona o la carga que iba a bordo.

### Si necesita el permiso

Pídalo antes, por escrito, al jefe de centro de distribución con copia al Coordinador de Transporte y Flota. Un permiso de dos líneas resuelve el tema; una autorización pedida después no existe.

Fuente: Reglamento Interno de Trabajo, Art. 81 y Art. 104 literal c; Código de Ética, Capítulo X. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`comercial`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XII — Uso de vehículos`,articulo:`Art. 81`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida la autorización escrita al jefe de su centro de distribución antes de desviarse de la ruta.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vehiculo`,`uso de activos`,`ruta`,`seguro`,`orientacion preventiva`],errores_frecuentes:[`Creer que si el encargo «queda de paso» no cuenta como uso fuera de ruta.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-217`,titulo:`¿Puedo llevar a alguien en la cabina del camión?`,dominio:`etica_conducta_disciplina`,subdominio:`Vehículos, conducción y tránsito`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:34,volumen_consultas_mes_estimado:34,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo transportar a una persona no autorizada en el vehículo de reparto?`,variantes_pregunta:[`puedo llevar a mi hijo un ratito en la cabina`,`subir a alguien al camion de la empresa`,`llevo a un familiar en el vehiculo de reparto`,`puedo dar aventon en el camion`,`transportar personas en el camion`],respuesta_corta:`No. En el vehículo solo viajan las personas autorizadas para la operación. Es falta grave desde la primera vez y, sobre todo, no hay cobertura de seguro para un tercero a bordo.`,respuesta_extendida:`### Por qué la regla no admite excepción de confianza

Si hay un accidente con un tercero no autorizado a bordo, **ni el seguro ni la empresa pueden responder** por esa persona. El costo de un minuto de favor puede ser toda una familia sin respaldo.

En el catálogo de faltas es FAL-035 (Art. 104 literal m): amonestación escrita desde la primera vez.

### Quiénes sí pueden ir

Solo el personal asignado a la operación: ayudante de venta, estibador de apoyo, supervisor en acompañamiento, auditor o practicante con autorización registrada. Si necesita subir a alguien por una razón de trabajo no prevista, la autorización la da el jefe de CD antes de que suba.

Fuente: Reglamento Interno de Trabajo, Art. 104 literal m; reglamento de uso de vehículos. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`comercial`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas graves`,articulo:`Art. 104, literal m`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si necesita subir a alguien por una razón operativa, pida autorización previa al jefe de su centro de distribución.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vehiculo`,`terceros`,`seguro`,`falta grave`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-218`,titulo:`Se me venció la licencia y la estoy renovando, ¿salgo a ruta?`,dominio:`etica_conducta_disciplina`,subdominio:`Vehículos, conducción y tránsito`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:52,volumen_consultas_mes_estimado:52,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo conducir un vehículo de la empresa mientras renuevo mi licencia vencida?`,variantes_pregunta:[`se me vencio la licencia, puedo salir igual`,`estoy renovando la licencia, manejo mientras tanto`,`licencia caducada y tengo ruta, que hago`,`me suspendieron la licencia, aviso?`,`puedo manejar con la licencia vencida un par de dias`],respuesta_corta:`No salga. Conducir con licencia caducada o suspendida es falta muy grave y, sin licencia vigente, no hay cobertura. Avise hoy al jefe de su CD: se le reasignan funciones mientras renueva, **sin afectar su remuneración**.`,respuesta_extendida:`### Lo primero: avisar no le cuesta el sueldo

Mientras usted renueva, la empresa le **reasigna funciones**. Ese período no se descuenta ni se trata como falta: lo que sí es falta muy grave es conducir sin licencia vigente u ocultarlo (FAL-056, Art. 105 literal j).

### Qué hacer, hoy

1. Avise al jefe de centro de distribución y al Coordinador de Transporte y Flota **antes** de la hora de salida.
2. Entregue el comprobante del trámite de renovación.
3. Acepte la reasignación temporal de funciones.

### El aviso preventivo

Lo ideal es avisar **cuando se acerca el vencimiento**, no cuando ya venció. Administración de Personal y Transporte llevan el control de vigencias justamente para que nadie se quede sin trabajar por sorpresa.

### Si hay un accidente sin licencia vigente

Además de la responsabilidad frente a la autoridad de tránsito, la conducta se encuadra como causal de visto bueno. Es una de las pocas situaciones donde el riesgo personal supera claramente al riesgo laboral.

Fuente: Reglamento Interno de Trabajo, Art. 105 literal j; Política de Disciplina, sección 14.3. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`comercial`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal j`},calculadora:null,datos_requeridos:[],siguiente_paso:`Avise ahora al jefe de su centro de distribución y al Coordinador de Transporte y Flota, y entregue el comprobante del trámite.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`licencia`,`conduccion`,`falta muy grave`,`transporte`,`orientacion preventiva`],errores_frecuentes:[`Creer que avisar del vencimiento va a costarle el puesto: la reasignación temporal no afecta la remuneración.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-219`,titulo:`¿Puedo contestar el celular manejando si uso manos libres?`,dominio:`etica_conducta_disciplina`,subdominio:`Vehículos, conducción y tránsito`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:28,volumen_consultas_mes_estimado:28,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo atender llamadas mientras conduzco un vehículo de la empresa?`,variantes_pregunta:[`puedo contestar con manos libres manejando`,`me llaman mientras manejo, contesto?`,`usar el celular conduciendo el camion`,`atender el handheld manejando`],respuesta_corta:`Ante la duda, no conteste en movimiento: parquee en un lugar seguro y devuelva la llamada. El reglamento de conducción segura manda sobre la comodidad, y el uso del teléfono conduciendo está tipificado como falta.`,respuesta_extendida:`### La regla operativa

Se detiene el vehículo en un lugar seguro para atender comunicaciones. Usar el teléfono personal mientras se conduce está tipificado como falta leve (FAL-009, Art. 103 literal i), y **se agrava si hay siniestro**.

### Lo que importa de verdad

Con ocho toneladas de carga detrás, la distracción no se mide en multas: se mide en distancia de frenado. Ningún pedido, ninguna llamada del supervisor y ninguna urgencia de ruta justifica atender en movimiento.

### Si le llaman constantemente en ruta

Eso es un problema de planificación que se plantea al Coordinador de Transporte y Flota y al supervisor: acordar ventanas de contacto en las paradas resuelve el tema sin ponerlo a usted en riesgo.

Fuente: Reglamento Interno de Trabajo, Art. 103 literal i y Art. 81; Reglamento de Higiene y Seguridad. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`comercial`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas leves`,articulo:`Art. 103, literal i`},calculadora:null,datos_requeridos:[],siguiente_paso:`Acuerde con su supervisor ventanas de contacto en las paradas. Si el equipo suena en movimiento, no conteste.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`celular`,`conduccion`,`seguridad vial`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-220`,titulo:`El GPS del camión falla, ¿lo puedo desconectar?`,dominio:`etica_conducta_disciplina`,subdominio:`Vehículos, conducción y tránsito`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:19,volumen_consultas_mes_estimado:19,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo desconectar o manipular el GPS o la telemetría del vehículo si está fallando?`,variantes_pregunta:[`el gps marca mal, lo desconecto?`,`puedo apagar el gps del camion un rato`,`manipular la telemetria del vehiculo`,`el gps esta dañado, que hago`,`quitar el precinto de la carga`],respuesta_corta:`No lo toque. Reporte la falla al Coordinador de Transporte y Flota y déjela anotada en el precheck: el equipo lo revisa el área técnica, nunca el conductor. Manipular el GPS es falta muy grave aunque esté dañado.`,respuesta_extendida:`### Por qué es tan grave

Desconectar, manipular o interferir el GPS, la telemetría o el precinto de la carga está tipificado como falta muy grave (FAL-057, Art. 105 literal k). Un GPS desconectado **no se lee como una falla reportada: se lee como ocultamiento de la ruta**, y esa lectura es muy difícil de revertir después.

### El camino que lo protege

| Paso | Qué hace |
|---|---|
| 1 | Anota la falla en el precheck del vehículo, con fecha y hora |
| 2 | Reporta al Coordinador de Transporte y Flota antes de salir |
| 3 | Informa al jefe de CD si la falla aparece en ruta |

Una falla reportada con constancia es un hecho técnico. Una falla no reportada y un equipo manipulado es un expediente.

Fuente: Reglamento Interno de Trabajo, Art. 82 y Art. 105 literal k. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`comercial`,`vendedor de ruta (autoventa)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XII — Sistema de posicionamiento y telemetría`,articulo:`Art. 82`},calculadora:null,datos_requeridos:[],siguiente_paso:`Anote la falla en el precheck y repórtela hoy al Coordinador de Transporte y Flota.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`gps`,`telemetria`,`vehiculo`,`falta muy grave`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-221`,titulo:`Ya hice la cuota del día, ¿puedo cerrar la ruta antes?`,dominio:`etica_conducta_disciplina`,subdominio:`Ruta, visitas y turnos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:36,volumen_consultas_mes_estimado:36,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo dejar visitas sin hacer si ya cumplí la cuota del día?`,variantes_pregunta:[`ya cumpli la cuota, me voy?`,`puedo recortar la ruta si ya vendi lo del dia`,`dejar visitas sin hacer`,`cerrar ruta temprano cuando llegue a la meta`,`me faltan clientes pero ya hice el numero`],respuesta_corta:`No. La cuota no reemplaza la cobertura: hay que completar las visitas asignadas. Si la ruta está mal dimensionada, plantéelo al supervisor zonal para replanificarla, que es el camino que sí cambia el problema.`,respuesta_extendida:`### Son dos cosas distintas

La **cuota** mide venta. La **cobertura** mide presencia en los puntos asignados, y es lo que sostiene la relación con el cliente y la frecuencia de visita. Recortar la ruta está tipificado como falta grave (FAL-028, Art. 104 literal f), con amonestación escrita desde la primera vez.

Y hay una consecuencia que no se ve el mismo día: **los clientes no visitados se pierden para la ruta**, y ese hueco vuelve como meta más difícil el mes siguiente.

### Si la ruta no da

Si el recorrido está sobredimensionado, o si hay puntos que sistemáticamente no atienden a esa hora, eso se reporta al supervisor zonal y al Analista de Ruteo y Distribución. La replanificación es un proceso normal y existe para eso.

Fuente: Reglamento Interno de Trabajo, Art. 104 literal f; Política de Disciplina, sección 6.3. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`prevendedor`,`vendedor de ruta (autoventa)`,`mercaderista`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas graves`,articulo:`Art. 104, literal f`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si la ruta está mal dimensionada, plantéelo al supervisor zonal y al Analista de Ruteo y Distribución para replanificarla.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`ruta`,`cobertura`,`visitas`,`cuota`,`orientacion preventiva`],errores_frecuentes:[`Confundir cumplir la cuota con cumplir la ruta: son indicadores distintos.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-222`,titulo:`¿Puedo cambiar de ruta o de turno con un compañero?`,dominio:`etica_conducta_disciplina`,subdominio:`Ruta, visitas y turnos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:43,volumen_consultas_mes_estimado:43,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo intercambiar mi ruta o mi turno con un compañero por acuerdo entre nosotros?`,variantes_pregunta:[`quiero cambiar de ruta con un compañero`,`cambio de turno entre nosotros, avisamos?`,`puedo permutar el turno con otro`,`nos cambiamos el turno y ya`,`cambiar ruta porque me queda mas cerca`],respuesta_corta:`El cambio se puede, pero pídalo antes al supervisor para que quede registrado. Si lo hacen por su cuenta, para el sistema usted no vino y su compañero trabajó doble: su turno figura como ausencia injustificada y las horas de él no se reconocen.`,respuesta_extendida:`### El acuerdo entre dos no cambia el registro

El registro de asistencia (Art. 34) y el rol de turnos son los que determinan quién trabajó, cuántas horas y con qué recargo. Un cambio no registrado produce **tres problemas a la vez**:

| Problema | A quién afecta |
|---|---|
| Su turno figura como ausencia injustificada | A usted, Art. 104 literal b |
| Las horas trabajadas de su compañero no se reconocen | A él, en su rol de pagos |
| La dotación mínima del turno queda descuadrada | A la operación y a la seguridad |

### Cómo se pide

Al supervisor de producción, al supervisor zonal o al jefe de la instalación, **con anticipación**, para que se registre en el rol de turnos antes de que empiece la jornada. Es un trámite de minutos y los cambios se autorizan con normalidad.

Fuente: Reglamento Interno de Trabajo, Art. 31, 32 y 34; Política de Disciplina, sección 18. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornadas y turnos`,articulo:`Art. 34`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida el cambio a su supervisor con anticipación y confirme que quedó registrado en el rol de turnos antes de la jornada.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`turnos`,`ruta`,`cambio de turno`,`asistencia`,`orientacion preventiva`],errores_frecuentes:[`Creer que como el trabajo igual se hace, el registro da lo mismo: el registro es lo que sostiene el pago de su compañero.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-223`,titulo:`Me pidieron acomodar producto de otra marca en el autoservicio`,dominio:`etica_conducta_disciplina`,subdominio:`Ruta, visitas y turnos`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:17,volumen_consultas_mes_estimado:17,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo acomodar o promocionar producto de otra marca a pedido del cliente?`,variantes_pregunta:[`me piden acomodar producto de otra marca`,`puedo perchar otra marca si me lo pide el local`,`el autoservicio quiere que ordene todo`,`promocionar producto ajeno en la percha`],respuesta_corta:`Consulte antes al supervisor zonal. Su jornada es para el portafolio de VERTIENTE, y acomodar producto de otra marca por su cuenta puede leerse como promocionar producto ajeno, que es falta muy grave.`,respuesta_extendida:`### El favor que se parece a otra cosa

Vender o transportar producto ajeno al portafolio en la ruta está tipificado como falta muy grave (FAL-052, Art. 105 literal f). Un acomodo puntual pedido por el local no es lo mismo, pero **sin autorización previa la diferencia queda sujeta a interpretación**, y esa interpretación no la hace usted.

### Cómo se resuelve bien

1. Consulte al supervisor zonal antes de aceptar.
2. Si hay una relación comercial con ese autoservicio que lo justifica, se coordina con el Coordinador de Trade Marketing y queda registrado.
3. Si no, explique al cliente con cortesía que su tiempo en el local está asignado al portafolio de VERTIENTE.

Fuente: Reglamento Interno de Trabajo, Art. 69 y Art. 105 literal f. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`mercaderista`,`prevendedor`,`ayudante de venta (perchador)`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo X — Obligaciones de la fuerza de ventas`,articulo:`Art. 69`},calculadora:null,datos_requeridos:[],siguiente_paso:`Llame al supervisor zonal antes de aceptar, y pida que la coordinación con el cliente la haga Trade Marketing.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`percha`,`trade marketing`,`portafolio`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-224`,titulo:`Un compañero me pide que le marque la entrada`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:58,volumen_consultas_mes_estimado:58,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo marcar el ingreso por un compañero que viene atrasado?`,variantes_pregunta:[`un compañero me pide que le marque, le hago el favor?`,`puedo marcar por otro en el biometrico`,`marcar la entrada de un compañero atrasado`,`me pidieron marcar por el, hay problema`,`si marco por mi amigo que pasa`],respuesta_corta:`No le haga ese favor: marcar por otro es falta muy grave **para los dos**. Cada quien marca su propio ingreso; si el biométrico falla, se reporta al supervisor en el momento.`,respuesta_extendida:`### El favor que convierte una falta leve en una muy grave

Un atraso es falta leve (FAL-001). Taparlo marcando por otro es **falta muy grave con solicitud de visto bueno**, y alcanza a quien marca y a quien pide que le marquen (FAL-053, Art. 105 literal g).

Es, probablemente, el peor cambio de escalón que un gesto de compañerismo puede producir.

### Qué hacer en su lugar

| Situación | Qué corresponde |
|---|---|
| Su compañero va a llegar tarde | Que avise él mismo al supervisor por el canal oficial |
| El biométrico no lo reconoce | Reportar al supervisor **en el momento** y dejar constancia |
| El sistema está caído | Registro manual firmado por el supervisor |

Fuente: Reglamento Interno de Trabajo, Art. 105 literal g; Política de Disciplina, sección 18. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal g`},calculadora:null,datos_requeridos:[],siguiente_paso:`Dígale a su compañero que avise él mismo al supervisor. Si el biométrico falla, repórtelo en el momento al supervisor y al Analista de Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`marcacion`,`biometrico`,`asistencia`,`falta muy grave`,`orientacion preventiva`],errores_frecuentes:[`Creer que la falta es solo de quien llegó tarde: alcanza por igual a quien marcó.`,`Pensar que si el sistema falla se puede marcar por otro «para arreglar el registro».`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-225`,titulo:`Voy a llegar tarde, ¿aviso o entro calladito?`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:64,volumen_consultas_mes_estimado:64,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué debo hacer si sé que voy a llegar tarde a mi jornada?`,variantes_pregunta:[`me quede dormido y voy a llegar tarde, aviso?`,`voy 40 minutos atrasado que hago`,`entro sin decir nada si llego tarde?`,`tengo que avisar si me atraso`,`llegue tarde y no marque, que pasa`],respuesta_corta:`Avise ya mismo al supervisor y marque su ingreso real cuando llegue. Un atraso avisado es falta leve; no avisar —y sobre todo no marcar o pedir que le marquen— es lo que complica el caso de verdad.`,respuesta_extendida:`### Las tres conductas y sus tres categorías

| Qué hace | Cómo se clasifica |
|---|---|
| Llega tarde, avisa y marca su hora real | Falta leve (FAL-001), llamado de atención verbal registrado la primera vez |
| Llega más de 30 minutos tarde sin aviso previo | Falta grave (FAL-023, Art. 104 literal a) |
| Pide que otro le marque para tapar el atraso | Falta muy grave para los dos (FAL-053, Art. 105 literal g) |

### Lo que hay que hacer, en este orden

1. Escriba o llame al supervisor **apenas sepa** que va a llegar tarde, por el canal oficial, no por un compañero.
2. Marque su ingreso real al llegar. No lo maquille.
3. Si el atraso tiene una causa externa demostrable (cierre de vía, accidente, transporte), dígalo: puede cambiar por completo la naturaleza del caso, porque un problema de proceso no es una falta.

> La política de disciplina lo dice expresamente: si el atraso se debe a una congestión demostrable y sistemática, el camino correcto es ajustar la hora de convocatoria, no sancionar.

Fuente: Reglamento Interno de Trabajo, Art. 36, Art. 103 literal a y Art. 104 literal a; Política de Disciplina, sección 6.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Atrasos`,articulo:`Art. 36`},calculadora:null,datos_requeridos:[],siguiente_paso:`Avise ahora a su jefatura inmediata por el canal oficial y marque su hora real de ingreso.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`atraso`,`asistencia`,`aviso`,`puntualidad`,`orientacion preventiva`],errores_frecuentes:[`Creer que avisar empeora las cosas: el aviso es exactamente lo que evita que el atraso escale de categoría.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-226`,titulo:`No voy a poder ir hoy, ¿puedo avisar por un compañero?`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:48,volumen_consultas_mes_estimado:48,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Basta con que un compañero avise por mí si no voy a asistir?`,variantes_pregunta:[`le aviso a mi compañero para que le diga al jefe`,`puedo avisar la falta por whatsapp de otro`,`no voy a ir hoy, quien avisa`,`aviso de ausencia por medio de un compañero`,`estoy enfermo, como aviso`],respuesta_corta:`No basta. Avise usted mismo al supervisor por el canal oficial antes del inicio de la jornada, y presente el certificado médico apenas lo tenga. Sin aviso propio, la falta se registra como injustificada.`,respuesta_extendida:`### Por qué el aviso tiene que ser suyo

El aviso por tercero no deja constancia verificable y suele llegar tarde o incompleto. Faltar un día sin justificación aceptada es falta grave (FAL-024, Art. 104 literal b), y acumular faltas injustificadas en el mes habilita la causal del parámetro \`visto_bueno_faltas_injustificadas\`.

### La otra cara: nada es automático

Antes de que una falta se declare injustificada, **la empresa está obligada a requerirle por escrito el descargo y darle plazo para presentar justificativos**. Esa es una regla firme de VERTIENTE. Hay razones frecuentes y legítimas detrás de una ausencia sin aviso: hospitalización, accidente, emergencia familiar, pérdida del teléfono.

### El procedimiento correcto

1. Avise directamente a su supervisor, antes del inicio de la jornada.
2. Si es enfermedad, presente el certificado apenas lo tenga (parámetro \`licencia_enfermedad_propia_subsidio\`).
3. Si no pudo avisar por una emergencia real, avise apenas pueda y explique: el certificado o el respaldo llegan después.

Fuente: Reglamento Interno de Trabajo, Art. 37 y Art. 104 literal b; Política de Disciplina, sección 14.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`licencia_enfermedad_propia_subsidio`,`visto_bueno_faltas_injustificadas`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Ausencias y su justificación`,articulo:`Art. 37`},calculadora:null,datos_requeridos:[],siguiente_paso:`Escriba o llame usted mismo a su jefatura inmediata antes del inicio de la jornada y entregue el certificado al Analista de Administración de Personal apenas lo tenga.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`ausencia`,`aviso`,`certificado medico`,`asistencia`,`orientacion preventiva`],errores_frecuentes:[`Creer que el aviso de un compañero equivale al aviso propio.`,`Creer que una ausencia sin aviso se declara injustificada automáticamente: antes debe requerírsele el descargo por escrito.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-227`,titulo:`¿Puedo quedarme horas extra por mi cuenta para adelantar trabajo?`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:42,volumen_consultas_mes_estimado:42,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo quedarme a trabajar después de mi jornada sin autorización previa?`,variantes_pregunta:[`me quedo dos horas mas por mi cuenta, me las pagan?`,`puedo quedarme a terminar sin avisar`,`las horas extra hay que pedirlas antes?`,`trabaje de mas y no me las reconocieron`,`necesito autorizacion para sobretiempo`],respuesta_corta:`Las horas suplementarias necesitan autorización previa: pídala al supervisor antes de quedarse. Y sepa esto: superar los topes de sobretiempo es una infracción **del empleador**, no suya. Pedir la autorización protege su pago.`,respuesta_extendida:`### Por qué la autorización va antes

El Art. 40 exige autorización previa y por escrito para las horas suplementarias. Sin ella, el reconocimiento del pago se complica y usted queda dependiendo de que alguien recuerde que se quedó.

### Los topes existen para protegerlo a usted

Hay un tope diario (parámetro \`horas_suplementarias_tope_diario\`) y un tope semanal (parámetro \`horas_suplementarias_tope_semanal\`). **Superarlos es una infracción del empleador, no del colaborador**: a usted no lo sanciona nadie por eso, y las horas efectivamente trabajadas se pagan igual.

### Si el trabajo no alcanza en la jornada

Eso es un problema de planificación y se plantea a la jefatura. Una jefatura que ordena sobretiempo sin autorización previa, o que planifica por encima de los topes, incurre ella misma en falta grave (FAL-045, Art. 104 literal w).

Fuente: Reglamento Interno de Trabajo, Art. 39 y Art. 40; Manual de Nómina y Beneficios. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`horas_suplementarias_tope_diario`,`horas_suplementarias_tope_semanal`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Jornada suplementaria`,articulo:`Art. 40`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida la autorización a su jefatura antes de quedarse. Si ya trabajó horas no reconocidas, plantéelo a la Jefatura de Nómina y Compensaciones: las horas efectivamente trabajadas se pagan.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`horas extra`,`sobretiempo`,`autorizacion`,`jornada`,`orientacion preventiva`],errores_frecuentes:[`Creer que quedarse más tiempo sin permiso demuestra compromiso: complica el reconocimiento del pago.`,`Creer que superar el tope semanal es una falta del colaborador: es una infracción del empleador.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-228`,titulo:`¿Puedo salir dos horas por un trámite y reponerlas?`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:35,volumen_consultas_mes_estimado:35,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo ausentarme unas horas durante la jornada para un trámite personal?`,variantes_pregunta:[`necesito dos horas para un tramite, me dan permiso?`,`puedo salir un rato y reponer despues`,`permiso para salir en la jornada`,`salgo y repongo el sabado, se puede?`],respuesta_corta:`Sí, con permiso previo. Solicítelo a su jefatura con anticipación, déjelo registrado y documenten el acuerdo de reposición. Salir sin permiso registrado es falta grave aunque después reponga las horas.`,respuesta_extendida:`### El permiso se pide antes, siempre

Salir de la instalación o abandonar la ruta sin permiso registrado es falta grave (FAL-025, Art. 104 literal c). Con permiso previo registrado, no hay ningún problema: es un trámite normal.

### Cómo queda bien hecho

1. Solicite el permiso a su jefatura inmediata con anticipación.
2. Que quede **registrado** con el Analista de Administración de Personal, no solo conversado.
3. Si acuerdan reposición de horas, que el acuerdo conste por escrito.

### El caso distinto: atención médica

El permiso para atención médica es **remunerado** (parámetro \`permiso_atencion_medica\`) y nadie puede negárselo ni condicionárselo. Avise con anticipación cuando la cita esté programada y presente el certificado de atención al regresar.

Fuente: Reglamento Interno de Trabajo, Art. 38 y Art. 61; Art. 104 literal c. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`permiso_atencion_medica`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VIII — Permisos y licencias`,articulo:`Art. 61`},calculadora:null,datos_requeridos:[],siguiente_paso:`Solicite el permiso a su jefatura inmediata y confirme que quedó registrado con Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`permisos`,`jornada`,`tramites`,`reposicion`,`orientacion preventiva`],errores_frecuentes:[`Creer que reponer las horas después sustituye el permiso previo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-229`,titulo:`¿Puedo trabajar el feriado a cambio de otro día libre?`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:37,volumen_consultas_mes_estimado:37,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Se puede cambiar el pago del feriado trabajado por un día libre, sin registrar nada?`,variantes_pregunta:[`trabajo el feriado y me dan otro dia, esta bien?`,`me cambian el feriado por dia libre sin registrar`,`puedo compensar el feriado con tiempo`,`no me pagaron el recargo del feriado`],respuesta_corta:`Así no. El trabajo en feriado se registra y se paga con su recargo. Cualquier compensación en tiempo se pacta por escrito y **nunca reemplaza un derecho de pago**: si le ofrecen el cambio sin registro, usted está perdiendo el recargo que le corresponde por ley.`,respuesta_extendida:`### El recargo no es negociable de palabra

El trabajo en día de descanso obligatorio o feriado se paga con el recargo que fija la norma (parámetro \`recargo_hora_extraordinaria\`). Ese recargo es un **mínimo legal**: ninguna práctica interna, ningún acuerdo verbal y ninguna costumbre del CD lo sustituye.

### Qué sí se puede acordar

Una compensación en descanso **adicional** al pago, pactada por escrito, es otra cosa y es legítima. Lo que no es legítimo es usarla para no registrar el feriado trabajado.

### Si ya le pasó

Plantéelo a la Jefatura de Nómina y Compensaciones. Las horas efectivamente trabajadas se pagan, con registro o sin él. Y la jefatura que acuerde el cambio sin registrar incurre ella misma en falta grave.

> VERA no lo va a desalentar de reclamar esto: es un derecho, y reclamarlo no genera ninguna consecuencia disciplinaria.

Fuente: Reglamento Interno de Trabajo, Art. 41 y Art. 42; Manual de Nómina y Beneficios. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`recargo_hora_extraordinaria`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Trabajo en feriado`,articulo:`Art. 42`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida que el feriado trabajado quede registrado. Si ya ocurrió sin registro, plantéelo a la Jefatura de Nómina y Compensaciones.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`feriado`,`recargo`,`compensacion`,`derechos`,`orientacion preventiva`],errores_frecuentes:[`Creer que un día libre puede reemplazar el recargo legal del feriado trabajado.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-230`,titulo:`No he tomado vacaciones en tres años, ¿las puedo juntar?`,dominio:`etica_conducta_disciplina`,subdominio:`Asistencia, marcación y permisos`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:30,volumen_consultas_mes_estimado:30,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Hasta cuándo puedo acumular mis vacaciones sin perderlas?`,variantes_pregunta:[`puedo juntar las vacaciones de tres años`,`hasta cuando acumulo vacaciones`,`se me pierden las vacaciones si no las tomo?`,`acumular periodos de vacaciones`],respuesta_corta:`Se puede acumular dentro del límite que fija la ley (parámetro vacaciones_acumulacion_maxima_anios); pasados esos períodos, los años más antiguos se pierden. Coordine ya el calendario con su jefatura: la programación la tiene que pedir usted, y RR.HH. alerta cuando alguien llega a dos períodos acumulados.`,respuesta_extendida:`### El límite y lo que pasa al superarlo

| Concepto | Dónde vive |
|---|---|
| Días de vacaciones al año | parámetro \`vacaciones_dias_anuales\` |
| Días adicionales por antigüedad | parámetros \`vacaciones_dia_adicional_desde_anio\` y \`vacaciones_dias_adicionales_tope\` |
| Períodos acumulables | parámetro \`vacaciones_acumulacion_maxima_anios\` |

Superado el límite de acumulación, **el derecho de los años más antiguos se pierde**. No hay forma de recuperarlo después, y no es una decisión discrecional de la empresa: es cómo funciona el régimen de acumulación.

### Qué hacer ahora

Coordine el calendario con su jefatura. Si su jefatura no le programa las vacaciones pese a que usted las pidió, eso es un tema que resuelve Administración de Personal, y pedirlas no tiene ninguna consecuencia.

> El descanso no es un premio: es un derecho y una medida de seguridad, sobre todo en cargos de conducción y de operación de maquinaria.

Fuente: Reglamento Interno de Trabajo, Art. 56 y Art. 58; Manual de Nómina y Beneficios. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`vacaciones_dias_anuales`,`vacaciones_acumulacion_maxima_anios`,`vacaciones_dia_adicional_desde_anio`,`vacaciones_dias_adicionales_tope`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo VII — Vacaciones anuales`,articulo:`Art. 56`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida a su jefatura la programación del calendario y confírmelo con el Analista de Administración de Personal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`vacaciones`,`acumulacion`,`descanso`,`derechos`,`orientacion preventiva`],errores_frecuentes:[`Creer que las vacaciones acumuladas se conservan indefinidamente.`,`Creer que programar vacaciones es una concesión de la jefatura: es un derecho que se coordina.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-231`,titulo:`La faja me incomoda, ¿puedo trabajar sin ella?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:45,volumen_consultas_mes_estimado:45,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo dejar de usar el EPP entregado si me incomoda o está deteriorado?`,variantes_pregunta:[`la faja me da calor, la puedo dejar`,`puedo trabajar sin el chaleco`,`el epp me incomoda, tengo que usarlo igual?`,`se me daño el casco, que hago`,`no me queda la talla del calzado de seguridad`],respuesta_corta:`El EPP entregado es de uso obligatorio. Si le incomoda o está deteriorado, pida cambio de talla o reposición: la entrega y la reposición son **gratuitas y obligatorias para la empresa**, no salen de su bolsillo ni dependen de un favor.`,respuesta_extendida:`### Las dos caras de la misma norma

| Obligación del colaborador | Obligación de la empresa |
|---|---|
| Usar el EPP entregado según su puesto | Entregarlo, reponerlo y cambiarlo de talla **sin costo** (parámetro \`epp_obligacion\`) |
| Reportar deterioro o mal ajuste | Atender el pedido de reposición |

No usar el EPP entregado es falta grave (FAL-026, Art. 104 literal d). Pero si el EPP no está, no ajusta o está deteriorado, **el incumplimiento es de la empresa**, no suyo, y así se registra.

### El riesgo real

Una lesión lumbar por estiba sin faja puede dejarlo fuera de su puesto de forma permanente. La sanción es lo de menos en esa ecuación.

### Cómo pedir la reposición

Al Técnico de Seguridad y Salud Ocupacional de su instalación o a su supervisor, y que quede registrado. Si el pedido no se atiende, el Comité Paritario de Seguridad e Higiene es el canal (parámetro \`comite_paritario_umbral\`).

Fuente: Reglamento Interno de Trabajo, Art. 84 y Art. 104 literal d; Reglamento de Higiene y Seguridad. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`produccion`,`estibador`,`operario de linea`,`auxiliar de bodega y despacho`],condiciones:[],parametros_usados:[`epp_obligacion`,`comite_paritario_umbral`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIII — Equipo de protección personal`,articulo:`Art. 84`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida la reposición o el cambio de talla al Técnico de Seguridad y Salud Ocupacional de su instalación y deje constancia del pedido.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`epp`,`seguridad`,`faja`,`reposicion`,`orientacion preventiva`],errores_frecuentes:[`Creer que el EPP se paga o se descuenta: la entrega y la reposición son obligación de la empresa.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-232`,titulo:`¿Puedo sacar la guarda de la máquina para limpiar más rápido?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:33,volumen_consultas_mes_estimado:33,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo retirar un resguardo o saltarme el bloqueo de energía si la intervención es corta?`,variantes_pregunta:[`saco la guarda un momentito para limpiar`,`es un ajuste de un minuto, bloqueo igual?`,`puedo anular el sensor de la envasadora`,`bloqueo y etiquetado para algo corto`,`quitar el resguardo de la maquina`],respuesta_corta:`No, jamás, ni por un minuto. Pare la máquina con el procedimiento de bloqueo y etiquetado completo. Si el estándar de limpieza o el tiempo de parada no alcanza, eso es un problema de proceso que se reporta, no algo que se resuelve saltándose el bloqueo.`,respuesta_extendida:`### La falta y el riesgo

Anular, retirar o burlar un resguardo, un bloqueo de mantenimiento o un dispositivo de seguridad es **falta muy grave y causal de visto bueno** por no acatar medidas de seguridad (FAL-058, Art. 105 literal l; parámetro \`visto_bueno_causales_empleador\`).

El riesgo real, el que importa, es la amputación y la electrocución. Es la causa clásica.

### Si el tiempo no alcanza

Si aplicar el bloqueo completo lo saca de la meta del turno, **eso es un problema de proceso** y se reporta al supervisor de producción y al Jefe de SSO de Planta. Ninguna meta de turno autoriza a nadie a saltarse el bloqueo, y ningún supervisor tiene autoridad para pedírselo.

### Su derecho a parar

Negarse a una tarea insegura **no es indisciplina y no puede ser sancionado**. Si alguien lo presiona o toma represalia por negarse, eso sí es falta muy grave de esa persona.

Fuente: Reglamento Interno de Trabajo, Art. 105 literal l; Reglamento de Higiene y Seguridad, procedimiento de bloqueo y etiquetado. Vigencia 2026-09-16.`,aplica_a:[`produccion`,`operario de linea`,`mantenimiento`],condiciones:[],parametros_usados:[`visto_bueno_causales_empleador`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas muy graves`,articulo:`Art. 105, literal l`},calculadora:null,datos_requeridos:[],siguiente_paso:`Aplique el bloqueo completo. Si el tiempo de parada afecta la meta, repórtelo al supervisor de producción y al Jefe de Seguridad y Salud Ocupacional de Planta.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`bloqueo`,`guarda`,`maquina`,`seguridad`,`falta muy grave`,`orientacion preventiva`],errores_frecuentes:[`Creer que la brevedad de la intervención reduce el riesgo: la mayoría de las amputaciones ocurre en intervenciones cortas.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-233`,titulo:`Falta el operador certificado, ¿puedo mover yo el montacargas?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:26,volumen_consultas_mes_estimado:26,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo operar un montacargas o maquinaria si no tengo la autorización vigente?`,variantes_pregunta:[`no hay operador, puedo mover el montacargas`,`puedo manejar la transpaleta sin certificacion`,`se me vencio la certificacion de montacarga`,`solo un ratito el montacargas, hay problema?`],respuesta_corta:`No. Operar sin autorización vigente para ese equipo es falta grave desde la primera vez, y ningún despacho justifica el riesgo. Escale al jefe de CD para reprogramar o conseguir un operador certificado.`,respuesta_extendida:`### La norma

Operar montacargas, apilador, transpaleta o maquinaria sin autorización interna vigente es falta grave (FAL-041, Art. 104 literal s), y escala a muy grave si además se burla un dispositivo de seguridad (Art. 105 literal l).

### Lo que no se ve en el momento

Sin certificación vigente **no hay respaldo** si ocurre un atropello o un vuelco. Ni para usted, ni para la persona golpeada, ni para el CD.

### La salida operativa

Escale al jefe de centro de distribución: reprogramar el despacho o conseguir un operador certificado es su responsabilidad, no la suya. Si su certificación está por vencer, avise con anticipación a la Jefatura de Capacitación y Desarrollo Organizacional para agendar la recertificación.

Fuente: Reglamento Interno de Trabajo, Art. 104 literal s; Política de Capacitación y Desarrollo. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`produccion`,`auxiliar de bodega y despacho`,`estibador`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas graves`,articulo:`Art. 104, literal s`},calculadora:null,datos_requeridos:[],siguiente_paso:`Escale al jefe de su centro de distribución. Si su certificación está por vencer, pida la recertificación a la Jefatura de Capacitación y Desarrollo Organizacional.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`montacargas`,`certificacion`,`habilitacion`,`seguridad`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-234`,titulo:`Me golpeé trabajando pero es leve, ¿reporto o no?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:49,volumen_consultas_mes_estimado:49,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Tengo que reportar un accidente de trabajo leve?`,variantes_pregunta:[`me golpee la mano estibando, es leve, reporto?`,`mejor no reporto para no hacer problema`,`tengo que avisar si me lastimo trabajando`,`accidente pequeño en el trabajo, aviso?`,`me corte en la linea, hay que reportarlo`],respuesta_corta:`Repórtelo hoy mismo a Seguridad y Salud Ocupacional, es por su bien. De ese aviso dependen su atención médica y sus prestaciones por riesgos del trabajo. Y ocultar un accidente sí es falta: muy grave.`,respuesta_extendida:`### El reporte lo protege a usted primero

El aviso del mismo día es lo que activa la atención médica y el aviso formal al IESS (parámetro \`reporte_accidente_trabajo_plazo\`). **Si el golpe se complica después y no hubo reporte, usted pierde cobertura.** Esa es la razón principal, no la disciplinaria.

### La cara disciplinaria

Ocultar un accidente de trabajo, o inducir a alguien a no reportarlo, es **falta muy grave** (FAL-062, Art. 105 literal p). No es una ayuda al equipo ni al supervisor: es exactamente lo contrario.

> **Aclaración útil:** no reportar dentro de 24 horas un daño menor de un equipo o vehículo, sin riesgo para personas, es falta leve (Art. 103 literal s). Lo que es muy grave es ocultar un accidente **que afecta a una persona**.

### La investigación busca causas, no culpables

La investigación del accidente es obligatoria (parámetro \`investigacion_accidente_obligacion\`) y es un proceso de seguridad, **independiente del disciplinario**. Reportar no abre un caso en su contra.

Fuente: Reglamento Interno de Trabajo, Art. 90 y Art. 105 literal p; Reglamento de Higiene y Seguridad; Política de Disciplina, sección 14.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`reporte_accidente_trabajo_plazo`,`investigacion_accidente_obligacion`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIII — Reporte de accidentes de trabajo`,articulo:`Art. 90`},calculadora:null,datos_requeridos:[],siguiente_paso:`Avise hoy al Técnico de Seguridad y Salud Ocupacional de su instalación y acuda al Servicio Médico Ocupacional, aunque la molestia sea menor.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`accidente`,`reporte`,`iess`,`sso`,`orientacion preventiva`],errores_frecuentes:[`Creer que reportar un accidente leve perjudica al supervisor o al indicador del área: ocultarlo es lo que genera el problema.`,`Creer que si no hubo tiempo perdido no hay que reportar.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-235`,titulo:`Me mandan a hacer algo inseguro, ¿me puedo negar?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:40,volumen_consultas_mes_estimado:40,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo negarme a ejecutar una tarea que considero insegura sin que me sancionen?`,variantes_pregunta:[`me mandan a algo peligroso, me puedo negar?`,`si no hago la tarea insegura me sancionan?`,`tengo derecho a parar si hay riesgo`,`el jefe me manda sin epp, que hago`,`puedo negarme a subir sin arnes`],respuesta_corta:`Sí. Negarse a una tarea insegura es un derecho, no es indisciplina y **no puede sancionarse**. Comunique de inmediato al supervisor y al Comité Paritario de Seguridad e Higiene, y deje constancia.`,respuesta_extendida:`### El derecho a parar

Nadie está obligado a exponerse a un riesgo grave e inminente. El Reglamento lo reconoce expresamente (Art. 11, órdenes contrarias a la seguridad; Art. 91, reporte de condiciones inseguras), y en planta el Código de Ética lo lleva más lejos: **cualquier persona puede detener la línea ante un riesgo de inocuidad, sin autorización previa, y detenerla de buena fe nunca será sancionado aunque la alarma resulte falsa.**

### Qué hacer en el momento

1. No ejecute la tarea.
2. Comunique de inmediato al supervisor: diga cuál es el riesgo, no discuta la orden.
3. Avise al Comité Paritario de Seguridad e Higiene de la instalación (parámetro \`comite_paritario_umbral\`) y al Técnico de SSO.
4. Deje constancia escrita, aunque sea un mensaje con fecha y hora.

### Si lo presionan

Presionar a alguien para que trabaje inseguro, o tomar represalia por negarse, es falta muy grave **de quien presiona**. Ningún supervisor de VERTIENTE tiene autoridad para pedir que se siga operando ante un riesgo.

Fuente: Reglamento Interno de Trabajo, Art. 11 y Art. 91; Código de Ética, Valor 5 y Capítulo XI; Reglamento de Higiene y Seguridad. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`comite_paritario_umbral`],fuente:{documento:`docs/07-reglamento-higiene-seguridad.md`,seccion:`Derechos del trabajador en prevención de riesgos`,articulo:`Art. 91`},calculadora:null,datos_requeridos:[],siguiente_paso:`Comunique el riesgo a su supervisor y al Comité Paritario de su instalación, y deje constancia escrita. Si la presión continúa, el canal es la Jefatura de Seguridad y Salud Ocupacional.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`derecho a parar`,`tarea insegura`,`seguridad`,`represalia`,`orientacion preventiva`],errores_frecuentes:[`Creer que negarse a una tarea insegura es desobediencia: la norma lo excluye expresamente.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-236`,titulo:`¿Puedo levantar carga pesada entre dos si no hay montacargas?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:23,volumen_consultas_mes_estimado:23,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Hasta qué peso puedo levantar manualmente, y cuándo necesito ayuda mecánica?`,variantes_pregunta:[`la carga esta pesada, la levantamos entre dos?`,`cuanto peso puedo levantar a mano`,`no hay montacargas y hay que despachar`,`levantar carga entre dos esta permitido?`],respuesta_corta:`Depende del peso: el procedimiento interno de manejo manual de cargas dice cuándo se puede entre dos y cuándo la ayuda mecánica es obligatoria. Consulte al supervisor **antes** de levantar, no después. El apuro del despacho no cambia el límite.`,respuesta_extendida:`### Está condicionado, y la condición es el peso

Levantar carga manual por encima del límite sin ayuda mecánica ni apoyo es falta grave (FAL-037, Art. 104 literal o). El apoyo entre dos personas es válido **solo cuando el procedimiento lo permite para ese peso**; por encima, hay que esperar la ayuda mecánica.

### El riesgo real

La lesión lumbar es la principal causa de pérdida de puesto en estiba y bodega. No se siente en el momento: aparece meses después y muchas veces no se revierte.

### Si el despacho apura

Ese es un problema de dimensionamiento del turno. Se plantea al supervisor de bodega y despacho y al Técnico de SSO. La presión de despacho no autoriza a superar el límite, y ningún supervisor puede ordenarlo.

Fuente: Reglamento Interno de Trabajo, Art. 71 literal b y Art. 104 literal o; procedimiento interno de manejo manual de cargas. Vigencia 2026-09-16.`,aplica_a:[`logistica`,`produccion`,`estibador`,`auxiliar de bodega y despacho`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas graves`,articulo:`Art. 104, literal o`},calculadora:null,datos_requeridos:[],siguiente_paso:`Consulte el límite del procedimiento con el supervisor de bodega y despacho o con el Técnico de Seguridad y Salud Ocupacional antes de levantar.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`carga`,`ergonomia`,`estiba`,`seguridad`,`orientacion preventiva`],errores_frecuentes:[],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-237`,titulo:`¿Puedo tomarme una cerveza en el almuerzo si después manejo?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:31,volumen_consultas_mes_estimado:31,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo consumir alcohol antes o durante la jornada si conduzco u opero equipos?`,variantes_pregunta:[`una cervecita en el almuerzo y sigo la ruta`,`puedo tomar en el almuerzo con el cliente`,`alcohol antes del turno, hay problema?`,`tome anoche y hoy manejo, pasa algo?`,`control de alcohol en la empresa`],respuesta_corta:`No, sin excepciones: cero alcohol antes y durante la jornada para quien conduce u opera equipos, incluidas las comidas con clientes. Es falta muy grave y, sobre todo, es responsabilidad personal suya si hay un accidente.`,respuesta_extendida:`### La regla absoluta

Presentarse o permanecer bajo efectos de alcohol o sustancias, o conducir en esa condición, es falta muy grave (FAL-055, Art. 105 literal i). Para conductores y personal de ruta el Código de Ética lo formula como **regla absoluta: cero alcohol antes y durante la jornada**.

### Cómo se controla, y con qué garantías

| Garantía | Contenido |
|---|---|
| Dignidad | El control se hace en privado, por personal del servicio médico o autorizado, sin exponerlo ante sus compañeros |
| Confirmación | Todo positivo se confirma con una segunda medición antes de abrir cualquier caso |
| Medida inmediata | La persona no conduce, no opera maquinaria y no ingresa a la línea; se garantiza su traslado seguro. **Eso es una medida de seguridad, no una sanción** |
| Debido proceso | El procedimiento disciplinario, si se abre, es el completo, con descargos |

### Si hay un problema de consumo detrás

**Pedir ayuda no es una falta.** Quien tiene un problema de consumo y lo comunica **antes** de un incidente encuentra apoyo del Servicio Médico Ocupacional y tratamiento confidencial. La empresa no confunde una enfermedad con una falta.

Fuente: Código de Ética, Capítulo VIII.5; Reglamento Interno de Trabajo, Art. 105 literal i; Política de Disciplina, sección 14.4. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo VIII.5 — Alcohol, sustancias y conducción`,articulo:`Art. 105, literal i`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si hay un consumo que le preocupa, hable con el Servicio Médico Ocupacional: la atención es confidencial y pedir ayuda antes de un incidente nunca es una falta.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`alcohol`,`conduccion`,`control`,`salud`,`orientacion preventiva`],errores_frecuentes:[`Creer que el control de alcohol es una sanción: la medida inmediata es de seguridad, y la sanción solo llega tras el debido proceso.`,`Creer que pedir ayuda por consumo genera una sanción: comunicarlo antes de un incidente abre acompañamiento médico.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-238`,titulo:`¿Puedo entrar a la zona de proceso con reloj y celular?`,dominio:`etica_conducta_disciplina`,subdominio:`Inocuidad y planta FRUTAL`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:27,volumen_consultas_mes_estimado:27,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué está prohibido ingresar a la zona de proceso de la planta FRUTAL?`,variantes_pregunta:[`entro con el reloj y el celular a produccion`,`puedo usar aretes en la linea`,`me puedo entrar con el celular a zona de proceso`,`tengo que usar cofia siempre?`,`se puede comer en la linea`],respuesta_corta:`No. En zona de proceso no entran reloj, aretes, anillos, piercings, uñas postizas, celular, alimentos, bebidas, chicles ni cigarrillos, y la cofia cubre todo el cabello. Deje los objetos personales en el casillero: es falta grave y compromete el lote.`,respuesta_extendida:`### Qué se controla y por qué

| Conducta | Clasificación |
|---|---|
| Ingresar con joyas, reloj, piercings, uñas postizas, o sin cofia | Falta grave (FAL-030, Art. 104 literal h) |
| Ingresar alimentos, bebidas, chicles o cigarrillos a la línea | Falta grave (FAL-031, Art. 104 literal i) |
| No lavarse ni desinfectarse las manos al ingresar o tras cada pausa | Falta grave (FAL-032, Art. 104 literal j) |
| Contaminar el producto u ocultar una no conformidad | Falta muy grave (FAL-062, Art. 105 literal p) |

### Lo que hay detrás del formalismo

Un cuerpo extraño en la línea obliga a **retener el lote completo**, y si el producto sale contaminado la afectación deja de ser disciplinaria: es sanitaria, y llega al consumidor. En FRUTAL, buena parte de quien bebe el producto son niños.

### Y si tiene síntomas de enfermedad

Nadie trabaja en zona de proceso con síntomas de enfermedad transmisible. **Comunicarlo al supervisor y al Servicio Médico Ocupacional no genera ninguna consecuencia negativa**, y es exactamente lo que se espera.

Fuente: Código de Ética, Capítulo XI; Reglamento Interno de Trabajo, Art. 104 literales h, i y j; Manual de BPM de la planta FRUTAL. Vigencia 2026-09-16.`,aplica_a:[`produccion`,`operario de linea`,`mantenimiento`,`bodega MP y PT`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo XI — Inocuidad alimentaria`,articulo:`Art. 104, literal h`},calculadora:null,datos_requeridos:[],siguiente_paso:`Use el casillero antes de ingresar. Si tiene síntomas de enfermedad, avise al supervisor de producción y al Servicio Médico Ocupacional antes de entrar al área.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`inocuidad`,`bpm`,`planta`,`frutal`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-239`,titulo:`Salió un resultado fuera de rango y el lote ya se despachó`,dominio:`etica_conducta_disciplina`,subdominio:`Inocuidad y planta FRUTAL`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:14,volumen_consultas_mes_estimado:14,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué hago si detecto una no conformidad de calidad en un lote ya despachado?`,variantes_pregunta:[`salio un resultado fuera de rango y el lote ya salio`,`detecte un problema de calidad, aviso mañana?`,`que hago si el lote no conforme ya se despacho`,`encontre vidrio cerca de la linea`,`no conformidad de inocuidad que hacer`],respuesta_corta:`Avise ya, no espere ni una hora: llame al supervisor de Aseguramiento de Calidad y al Jefe de Calidad e Inocuidad para retener o retirar el lote. Reportar a tiempo casi nunca termina en sanción; ocultarlo es falta muy grave.`,respuesta_extendida:`### La regla de la planta

**Nadie produce ni libera producto que no cumple**, y todo incidente se reporta: vidrio roto, plaga, fuga, cuerpo extraño, falla de temperatura, producto caído al piso, herida abierta en un operario. Ocultar una no conformidad de inocuidad o permitir el despacho del lote es falta muy grave (FAL-062, Art. 105 literal p).

### Qué se activa con su aviso

1. Retención o retiro del lote afectado.
2. Trazabilidad: la cadena desde la materia prima hasta el cliente que lo recibió.
3. Investigación de causa, que busca el fallo del proceso.

### Lo que la empresa dice expresamente

> Detener la línea de buena fe **nunca será sancionado, aunque la alarma resulte falsa**. Y ningún supervisor de VERTIENTE tiene autoridad para pedir que se siga produciendo ante un riesgo de inocuidad: quien la ejerce comete una falta grave.

Si la orden de no reportar viene de su propio supervisor, el canal es la Línea Ética, que admite reporte anónimo.

Fuente: Código de Ética, Capítulo XI y Caso CE-20; Reglamento Interno de Trabajo, Art. 72 y Art. 105 literal p. Vigencia 2026-09-16.`,aplica_a:[`produccion`,`operario de linea`,`supervisor de produccion`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo XI — Compromisos irrenunciables`,articulo:`Art. 105, literal p`},calculadora:null,datos_requeridos:[],siguiente_paso:`Llame ahora al Supervisor de Aseguramiento de Calidad y al Jefe de Calidad e Inocuidad. Si le piden no reportar, use la Línea Ética (1800 837 843 opción 4), que admite reporte anónimo.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`inocuidad`,`calidad`,`lote`,`no conformidad`,`orientacion preventiva`],errores_frecuentes:[`Creer que reportar cerca del cierre de turno perjudica al equipo: el retiro tardío de un lote es incomparablemente peor.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-240`,titulo:`¿Puedo prestar mi usuario del handheld o del sistema?`,dominio:`etica_conducta_disciplina`,subdominio:`Información, sistemas y redes sociales`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:32,volumen_consultas_mes_estimado:32,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo compartir mi usuario y clave con un compañero para agilizar el trabajo?`,variantes_pregunta:[`le presto el usuario del handheld al ayudante`,`puedo compartir mi clave del sistema`,`usar la sesion de otro compañero`,`dejar la sesion abierta es problema?`,`prestar usuario solo por hoy`],respuesta_corta:`No: compartir credenciales, usar la sesión de otro o dejar la sesión abierta y desatendida es falta grave. Todo lo que se registre con su usuario queda a su nombre, incluidos cobros y pedidos que usted no hizo.`,respuesta_extendida:`### El riesgo es suyo, no del sistema

El usuario es su firma. Si el ayudante toma un pedido o registra un cobro con su sesión, **ese registro dice que lo hizo usted**, y ese es el dato con el que se arma cualquier revisión posterior.

Está tipificado como falta grave (FAL-040, Art. 104 literal r).

### La solución

Si la función del ayudante requiere registrar en el sistema, **pida a la Jefatura de Tecnología de la Información un usuario propio para él**. Es un trámite normal y existe precisamente para esto.

### Reglas hermanas

- No conecte dispositivos personales (USB, discos) a equipos de la empresa: pida a Tecnología el medio autorizado.
- No instale software por su cuenta: Tecnología valida licencia y seguridad antes de autorizar.
- No consulte datos que no corresponden a su cargo. Los datos de nómina de otra persona son información confidencial y consultarlos o compartirlos es **falta muy grave** (Art. 105 literal o).

Fuente: Reglamento Interno de Trabajo, Art. 85 y Art. 104 literal r; Código de Ética, Capítulo VII. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XII — Uso de sistemas, correo y dispositivos`,articulo:`Art. 85`},calculadora:null,datos_requeridos:[],siguiente_paso:`Solicite a la Jefatura de Tecnología de la Información un usuario propio para quien lo necesite por su función.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`credenciales`,`usuario`,`sistemas`,`seguridad de la informacion`,`orientacion preventiva`],errores_frecuentes:[`Creer que prestar el usuario «solo por hoy» es un atajo inocente: deja a su nombre lo que haga otra persona.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-241`,titulo:`¿Puedo subir a redes un video de adentro de la planta?`,dominio:`etica_conducta_disciplina`,subdominio:`Información, sistemas y redes sociales`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:29,volumen_consultas_mes_estimado:29,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué puedo y qué no puedo publicar en redes sociales sobre mi trabajo?`,variantes_pregunta:[`grabe un video en la planta, lo subo a tiktok?`,`puedo publicar fotos del area de produccion`,`subir contenido con el uniforme de la empresa`,`puedo decir en redes donde trabajo`,`me pueden sancionar por lo que publico`],respuesta_corta:`Videos o fotos del interior de la planta o de zonas de proceso, no: es falta por inocuidad y confidencialidad. VERTIENTE no regula su vida privada ni su opinión: regula el uso de su marca, su información y sus instalaciones.`,respuesta_extendida:`### El mapa completo, sin zonas grises

| Conducta | ¿Es falta? |
|---|---|
| Opinión personal sobre política, deporte o religión en su cuenta | **No.** Es su vida privada |
| Decir en su perfil que trabaja en VERTIENTE | **No.** Es legítimo |
| Publicar una queja sobre condiciones de trabajo | **No es falta en sí misma.** Se responde atendiendo el reclamo, no sancionando |
| Fotos o videos del interior de la planta o de zonas de proceso | **Sí, grave.** Inocuidad, seguridad industrial y confidencialidad |
| Difundir precios, cartera de clientes, promociones no lanzadas o resultados | **Sí, muy grave.** Art. 105 literal o |
| Contenido ofensivo, discriminatorio o de acoso contra un compañero, aunque sea desde cuenta personal y fuera de horario | **Sí, muy grave** |
| Hablar en nombre de la empresa sin ser vocero autorizado | **Sí, grave** |
| Grabar a un compañero o cliente sin su consentimiento y difundirlo | **Sí, grave o muy grave** |
| Usar el uniforme institucional en contenido comercial propio o de terceros | **Sí, leve o grave** |

### El punto que más se malinterpreta

**Reclamar condiciones de trabajo no es falta y nadie puede sancionarlo por eso.** Solo sería falta si el mensaje contiene injuria grave, información confidencial o acoso a una persona. Para que el problema además se resuelva, use en paralelo el canal interno y el Comité Paritario.

### Si quiere proponer contenido

Hay canal con la Gerencia de Mercadeo. Las piezas oficiales se pueden compartir libremente.

Fuente: Política de Disciplina, sección 14.6; Código de Ética, Capítulo VII; Reglamento Interno, Art. 105 literal o. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.6 — Uso indebido de redes sociales`,articulo:`Art. 105, literal o`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si quiere proponer contenido, escriba a la Gerencia de Mercadeo. Si su publicación era un reclamo, llévelo también al Comité Paritario para que se resuelva.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`redes sociales`,`confidencialidad`,`imagen`,`reclamo`,`orientacion preventiva`],errores_frecuentes:[`Creer que la empresa puede sancionar cualquier publicación: solo alcanza marca, información e instalaciones.`,`Creer que publicar una queja sobre condiciones de trabajo es sancionable: no lo es.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-242`,titulo:`Alguien de afuera me pide la lista de precios o la cartera`,dominio:`etica_conducta_disciplina`,subdominio:`Información, sistemas y redes sociales`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:18,volumen_consultas_mes_estimado:18,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo compartir información comercial de VERTIENTE con alguien de fuera de la empresa?`,variantes_pregunta:[`un conocido me pide la lista de precios`,`puedo pasar la cartera de clientes`,`me piden informacion de la empresa de afuera`,`compartir promociones que no han salido`,`me voy de la empresa, me llevo mis clientes?`],respuesta_corta:`No. La información comercial no sale de la empresa: precios, márgenes, cartera de clientes, promociones no lanzadas, fórmulas de FRUTAL y datos de nómina son confidenciales, y revelarlos es falta muy grave. Reporte la solicitud a su jefe inmediato.`,respuesta_extendida:`### Qué protege VERTIENTE

Lista de precios y márgenes · cartera y datos de clientes · promociones y lanzamientos no publicados · fórmulas y parámetros de proceso de FRUTAL · datos de nómina y datos personales de compañeros · información de proveedores y costos.

Revelarla está tipificado como falta muy grave (FAL-061, Art. 105 literal o), con solicitud de visto bueno.

### El caso de la cartera al salir de la empresa

La cartera de clientes **es de la empresa**, no del vendedor, aunque la haya construido usted con años de trabajo. Llevársela al salir es una de las conductas que el Código de Ética resuelve expresamente.

### Si alguien se la pide

Declínelo y **repórtelo a su jefe inmediato y a Legal y Cumplimiento**. Reportar la solicitud lo protege: deja constancia de que usted no fue la fuente si la información aparece después por otro lado.

Fuente: Código de Ética, Capítulo VII; Reglamento Interno de Trabajo, Art. 105 literal o. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo VII — Datos, información y redes sociales`,articulo:`Art. 105, literal o`},calculadora:null,datos_requeridos:[],siguiente_paso:`Reporte la solicitud a su jefatura inmediata y a la Jefatura de Legal y Cumplimiento. Si prefiere reservado, use la Línea Ética.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`confidencialidad`,`informacion`,`cartera`,`precios`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-243`,titulo:`Un inspector insinúa que "se puede arreglar aquí mismo"`,dominio:`etica_conducta_disciplina`,subdominio:`Ética: marco general`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:12,volumen_consultas_mes_estimado:12,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué hago si una autoridad o un inspector insinúa un pago para resolver un problema?`,variantes_pregunta:[`el inspector dice que se puede arreglar, que hago`,`me piden coima en un control`,`me para la autoridad y quiere plata`,`como atiendo una inspeccion`,`puedo pagar para que no me multen`],respuesta_corta:`No pague nada, bajo ninguna circunstancia, y avise de inmediato al jefe de la instalación y a Legal y Cumplimiento. Atienda con respeto, registre la identificación y el motivo de la visita, y acompañe al inspector en todo momento.`,respuesta_extendida:`### El protocolo de inspección

| Paso | Qué hacer |
|---|---|
| 1 | Recibir con respeto. Solicitar y registrar identificación y motivo de la visita |
| 2 | Avisar de inmediato al jefe de la instalación y a Legal y Cumplimiento. En planta, también a Calidad e Inocuidad |
| 3 | Acompañar al inspector en todo momento; nunca dejarlo solo en áreas productivas o de bodega |
| 4 | Entregar únicamente lo que se solicita formalmente, con registro de lo entregado |

### Lo absolutamente prohibido

Ofrecer, insinuar, aceptar o intermediar cualquier pago, obsequio o beneficio a un funcionario público. En el Código de Ética esto es de **máxima gravedad**, y además puede constituir delito.

### Si la insinuación viene en ruta

No discuta y no pague. Llame al Coordinador de Transporte y Flota o al jefe de CD. Una multa de tránsito se informa dentro de 48 horas (Art. 104 literal n); un pago informal no se informa nunca porque no debe ocurrir.

Fuente: Código de Ética, Capítulo IX y Caso CE-18. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo IX — Autoridades, inspecciones y tránsito`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Avise al jefe de la instalación y a la Jefatura de Legal y Cumplimiento en el momento. Si ocurre en ruta, llame al jefe de su centro de distribución.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`inspeccion`,`autoridad`,`soborno`,`transito`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-244`,titulo:`¿Puedo fumar en el patio de maniobras?`,dominio:`etica_conducta_disciplina`,subdominio:`Seguridad y salud en el trabajo`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:11,volumen_consultas_mes_estimado:11,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Dónde está permitido fumar dentro de las instalaciones?`,variantes_pregunta:[`puedo fumar en el patio de maniobras`,`donde se puede fumar en la empresa`,`es al aire libre, puedo fumar ahi?`,`zonas de fumadores en el cd`],respuesta_corta:`Solo en las áreas señalizadas y en los horarios permitidos; el patio de maniobras no es una de ellas. Ahí hay combustible, carga y tráfico de montacargas que no espera a una persona parada.`,respuesta_extendida:`### Por qué el patio no cuenta como "al aire libre"

El patio de maniobras concentra tres riesgos a la vez: combustible y carga inflamable, circulación de montacargas y camiones con puntos ciegos, y maniobras de retroceso. Estar parado ahí sin tarea asignada es el riesgo, y el cigarrillo lo agrava.

### Dónde sí

En las áreas señalizadas de cada instalación, en los horarios permitidos. Si en su sede no hay un área señalizada clara, eso se plantea al Técnico de Seguridad y Salud Ocupacional y al jefe de la instalación: la señalización es responsabilidad de la empresa.

Fuente: Reglamento Interno de Trabajo, Art. 76; Reglamento de Higiene y Seguridad. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XI — Prohibiciones generales`,articulo:`Art. 76`},calculadora:null,datos_requeridos:[],siguiente_paso:`Consulte con el Técnico de Seguridad y Salud Ocupacional cuáles son las áreas señalizadas de su instalación.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`fumar`,`areas`,`seguridad`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-245`,titulo:`Le invité a salir a una compañera y me dijo que no, ¿insisto?`,dominio:`etica_conducta_disciplina`,subdominio:`Convivencia, respeto y trato`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:20,volumen_consultas_mes_estimado:20,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo seguir invitando a salir a una compañera de trabajo después de una negativa?`,variantes_pregunta:[`le invite a salir y me dijo que no, sigo insistiendo?`,`puedo insistirle a una compañera`,`hasta donde puedo invitar a alguien del trabajo`,`esta mal escribirle de noche a una compañera`],respuesta_corta:`No siga. Una negativa se respeta la primera vez; insistir en el ámbito laboral es acoso, sin importar la intención de quien insiste. Eso incluye los mensajes fuera del horario.`,respuesta_extendida:`### Dónde está exactamente la línea

El acoso sexual incluye insinuaciones, comentarios, contacto físico, imágenes o propuestas de naturaleza sexual **no deseadas**, y de manera especial cuando se condiciona un beneficio laboral —turno, ruta, contrato, ascenso— a una respuesta de esa naturaleza. Está tipificado como falta muy grave (FAL-060, Art. 105 literal n).

**La intención de quien insiste no es el criterio.** El criterio es que la otra persona ya dijo que no.

### El agravante de jerarquía

Si hay una línea de reporte de por medio, no hay simetría posible: la política aplica los agravantes de **jerarquía** y de **aprovechamiento de la subordinación**.

### Lo que sí está permitido

VERTIENTE no prohíbe que dos adultos tengan una relación sentimental. Prohíbe que uno decida sobre el otro:

| Situación | Regla |
|---|---|
| Relación entre dos personas sin jerarquía entre sí | Permitida, sin declaración |
| Relación con línea de reporte directa o indirecta | Se declara a RR.HH.; se reasigna la línea de reporte y el superior se aparta de toda decisión sobre la otra persona |
| Relación con alguien de un proveedor o cliente con quien negocia | Se declara; se aparta de la negociación |
| Relación no declarada con línea de reporte | Es falta al Código, con independencia de la relación misma |

Fuente: Código de Ética, Capítulo VIII.1 y VIII.3; Reglamento Interno de Trabajo, Art. 95 y Art. 105 literal n. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo VIII.1 — Tolerancia cero`,articulo:`Art. 95`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si tiene dudas sobre una relación con línea de reporte, declárela a la Gerencia de Recursos Humanos: la declaración se resuelve reasignando, no sancionando.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`acoso`,`convivencia`,`respeto`,`relaciones`,`orientacion preventiva`],errores_frecuentes:[`Creer que la buena intención de quien insiste cambia la calificación de la conducta.`,`Creer que lo que ocurre por mensajería fuera del horario queda fuera del ámbito laboral.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-246`,titulo:`En el grupo de WhatsApp de la ruta mandan chistes subidos de tono`,dominio:`etica_conducta_disciplina`,subdominio:`Convivencia, respeto y trato`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:19,volumen_consultas_mes_estimado:19,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿El grupo de WhatsApp del trabajo cuenta como ámbito laboral?`,variantes_pregunta:[`en el grupo de la ruta mandan chistes subidos de tono`,`puedo mandar memes al grupo del trabajo`,`el whatsapp del trabajo cuenta como ambito laboral?`,`todos mandan de todo en el grupo, yo tambien?`],respuesta_corta:`Sí cuenta: el grupo de trabajo es ámbito laboral aunque sea WhatsApp, y el contenido se mantiene dentro de lo profesional. Que «todos lo hacían» no es defensa de nadie.`,respuesta_extendida:`### Por qué el canal no cambia la regla

Un grupo creado para coordinar la ruta, el turno o el despacho es una herramienta de trabajo. El contenido ofensivo, sexual o discriminatorio ahí se trata como falta grave o muy grave según gravedad y reiteración (Art. 94 y 95; Art. 105 literal n).

### Lo que sí puede hacer si le incomoda

- Puede pedir que el grupo se mantenga en lo operativo. Es un pedido legítimo y nadie puede tomarlo a mal formalmente.
- Si el contenido lo afecta o va dirigido a una persona, el canal es reservado: el canal de ética y convivencia administrado por la Gerencia de RR.HH.
- Salir del grupo operativo no es una opción real cuando por ahí llega la información de la ruta: eso es justamente lo que hace que la regla importe.

Fuente: Código de Ética, Capítulo VIII; Reglamento Interno de Trabajo, Art. 94 y Art. 95. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Capítulo VIII — Respeto entre personas`,articulo:`Art. 94`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si el contenido lo afecta a usted o a un compañero, el canal reservado de ética y convivencia de la Gerencia de RR.HH. lo atiende sin exponerlo.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`whatsapp`,`convivencia`,`acoso`,`grupo de trabajo`,`orientacion preventiva`],errores_frecuentes:[`Creer que un grupo informal de compañeros queda fuera del ámbito laboral.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-247`,titulo:`Un cliente me está gritando, ¿le contesto igual?`,dominio:`etica_conducta_disciplina`,subdominio:`Convivencia, respeto y trato`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:24,volumen_consultas_mes_estimado:24,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué hago si un cliente me trata de forma ofensiva?`,variantes_pregunta:[`un tendero me grita, le contesto?`,`el cliente me insulta por telefono, puedo cortar`,`hasta donde tengo que aguantar a un cliente`,`me falto el respeto un cliente que hago`],respuesta_corta:`No conteste en el mismo tono: eso sí sería falta suya. Escuche, registre el reclamo y derívelo a Servicio al Cliente. Y sepa que usted no tiene que soportar insultos: hay un protocolo para terminar la interacción.`,respuesta_extendida:`### Las dos cosas son ciertas a la vez

1. **Nadie tiene que soportar insultos.** Existe protocolo: se advierte una vez que la atención termina si continúa el trato ofensivo y, si continúa, se cierra dejando registro del caso.
2. **Responder con insultos sí constituye falta suya**, y una discusión a gritos delante de otros clientes agrava por afectación a la imagen de la empresa (Art. 103 literal r si es descortesía; Art. 105 literal m si hay agresión o injuria grave).

### El procedimiento, en orden

| Paso | Qué hace |
|---|---|
| 1 | Escucha y deja hablar; no interrumpe |
| 2 | Registra el reclamo concreto, con datos |
| 3 | Advierte una vez si el trato se vuelve ofensivo |
| 4 | Cierra la interacción dejando constancia y escala al Coordinador de Servicio al Cliente |

### Si la agresión pasa de verbal

Ahí deja de ser un tema de protocolo comercial: retírese, avise al supervisor zonal de inmediato y repórtelo el mismo día. Su integridad está antes que cualquier venta.

Fuente: Reglamento Interno de Trabajo, Art. 68 y Art. 103 literal r; protocolo de atención y escalamiento de Servicio al Cliente. Vigencia 2026-09-16.`,aplica_a:[`comercial`,`administrativo`,`logistica`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo X — Obligaciones generales`,articulo:`Art. 68`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registre el reclamo y escálelo al Coordinador de Servicio al Cliente. Si hubo amenaza o agresión física, avise el mismo día a su supervisor zonal.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`cliente`,`trato`,`reclamo`,`convivencia`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-248`,titulo:`¿Puedo organizar una rifa entre los compañeros?`,dominio:`etica_conducta_disciplina`,subdominio:`Convivencia, respeto y trato`,zona:`verde`,prioridad_de_recuperacion:`baja`,volumen_consulta_estimado_mensual:9,volumen_consultas_mes_estimado:9,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo organizar una rifa, una colecta o una actividad entre compañeros dentro de la empresa?`,variantes_pregunta:[`puedo hacer una rifa entre los compañeros del cd`,`organizar una colecta en el trabajo`,`se puede vender cosas entre compañeros`,`hacer una vaca para un compañero enfermo`],respuesta_corta:`Consulte al jefe de su instalación: las actividades solidarias suelen autorizarse fuera de la jornada y sin presión de participación. Sin autorización se lee como actividad ajena al trabajo dentro de la jornada.`,respuesta_extendida:`### Las dos condiciones

1. **Fuera de la jornada**, para que no compita con el trabajo.
2. **Sin presión de participación**: nadie debe sentirse obligado a poner. Si alguien se siente presionado, el problema deja de ser administrativo y pasa a ser de convivencia.

### Si es por una emergencia de un compañero

Antes de la colecta, hable con Trabajo Social de RR.HH.: existen apoyos formales, el préstamo quirografario del IESS (parámetro \`iess_prestamo_quirografario_descuento\`) y acompañamiento de bienestar que pueden resolver más y mejor que una vaca.

Fuente: Reglamento Interno de Trabajo, Art. 76; Política de Disciplina, sección 18. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`iess_prestamo_quirografario_descuento`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 18 — Matriz de orientación preventiva`,articulo:`Art. 76`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida autorización al jefe de su instalación. Si el motivo es la emergencia de un compañero, consulte primero con Trabajo Social de RR.HH.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`convivencia`,`actividades`,`colecta`,`orientacion preventiva`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-249`,titulo:`¿Puedo grabar la reunión de descargos con mi celular?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:16,volumen_consultas_mes_estimado:16,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Puedo grabar una audiencia o una reunión disciplinaria?`,variantes_pregunta:[`puedo grabar la reunion de descargos`,`grabo con el celular la audiencia`,`se puede grabar al jefe en una reunion`,`quiero tener prueba de lo que dicen en la audiencia`],respuesta_corta:`Pídalo expresamente al inicio de la audiencia. Si se acepta, consta en el acta y lo protege. Grabar de forma oculta afecta la validez de la prueba y puede volverse en su contra.`,respuesta_extendida:`### Por qué pedirlo de frente es mejor que grabar a escondidas

La política es explícita: usar pruebas obtenidas de forma ilegítima —grabaciones ocultas incluidas— es uno de los errores que **anulan una sanción**. Eso corta para los dos lados: también una grabación oculta suya puede invalidarse como prueba.

Pedida de frente y anotada en el acta, en cambio, es una constancia sólida.

### Lo que usted ya tiene garantizado sin grabar

| Derecho | Contenido |
|---|---|
| Acta de la audiencia | Se levanta siempre, y usted puede **hacer constar su desacuerdo por escrito en la misma acta** antes de firmar, o negarse a firmar dejando constancia |
| Acompañamiento | Puede asistir acompañado por un compañero de su elección o un representante de los trabajadores. El instructor **debe** informárselo |
| Conocer las pruebas | Tiene derecho a conocer la imputación por escrito y las pruebas que la sustentan |
| Aportar pruebas y testigos | Puede presentarlos |

### Del otro lado

El supervisor **nunca** graba a un colaborador sin su conocimiento: está en la lista de lo que un supervisor no hace.

Fuente: Política de Disciplina y Debido Proceso, secciones 5.7, 16 y 15.4; Reglamento Interno, Art. 101 y Art. 109. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 16 — Errores que anulan una sanción`,articulo:`Art. 109`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pídalo al Analista de Relaciones Laborales que instruye el caso al inicio de la audiencia, para que conste en el acta.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`audiencia`,`grabacion`,`prueba`,`descargos`,`derechos`],errores_frecuentes:[`Creer que una grabación oculta es la mejor prueba: suele ser prueba nula.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-250`,titulo:`Un compañero me pide que declare a su favor aunque no vi nada`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:13,volumen_consultas_mes_estimado:13,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué hago si me piden declarar como testigo sobre algo que no presencié?`,variantes_pregunta:[`un compañero me pide que declare a su favor`,`me piden ser testigo de algo que no vi`,`que digo si me llaman a declarar`,`tengo que declarar en un caso disciplinario?`],respuesta_corta:`Ayúdelo diciendo la verdad: declare solo lo que le consta. Decir que vio algo que no vio lo expone a usted a una falta muy grave y, además, debilita el descargo de su compañero.`,respuesta_extendida:`### Declarar lo que no le consta no ayuda a nadie

Una declaración que se cae en la verificación **destruye la credibilidad del descargo completo** de la persona a la que quiso ayudar. Y prestarse a una declaración falsa es agravante de ocultamiento y puede abrirle a usted su propio procedimiento (Art. 75, deber de colaborar; Art. 105 literal h).

### Lo que sí es útil

- Decir exactamente lo que vio, con hora y lugar.
- **Decir que no presenció el hecho también es información útil** para quien instruye: acota qué se puede probar y qué no.
- Aportar contexto verificable: cómo funciona la operación, qué es habitual, qué herramienta falló.

### Sus garantías como testigo

El procedimiento es confidencial, y está **terminantemente prohibido** tomar represalia contra quien declaró como testigo. Toda sanción propuesta contra quien declaró en los seis meses anteriores pasa por revisión previa obligatoria de Legal y Cumplimiento.

Fuente: Reglamento Interno de Trabajo, Art. 75 y Art. 105 literal h; Política de Disciplina, secciones 5.8 y 5.9. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XI — Deber de colaborar en investigaciones`,articulo:`Art. 75`},calculadora:null,datos_requeridos:[],siguiente_paso:`Declare únicamente lo que le conste ante el Analista de Relaciones Laborales que instruye el caso. Si teme represalias por declarar, dígalo: existe el filtro antirrepresalia.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`testigo`,`declaracion`,`descargos`,`represalia`,`derechos`],errores_frecuentes:[`Creer que declarar a favor de un compañero sin constarle es un acto de solidaridad: es lo que hunde su descargo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-251`,titulo:`Me dan el acta de finiquito para firmar, ¿firmo nomás?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:28,volumen_consultas_mes_estimado:28,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Debo firmar el acta de finiquito sin revisarla si me dicen que es solo trámite?`,variantes_pregunta:[`me dan el acta de finiquito, firmo nomas?`,`me dicen que es solo tramite, firmo?`,`puedo revisar la liquidacion antes de firmar`,`que reviso en el finiquito`,`firme el finiquito y faltaban rubros`],respuesta_corta:`No firme sin leer. El acta debe ser pormenorizada rubro por rubro: verifique cada valor y pregunte lo que no entienda antes de firmar. Nadie puede apurarlo ni condicionarle el pago a que firme rápido.`,respuesta_extendida:`### Qué debe contener el acta

El parámetro \`acta_finiquito_forma\` exige que el acta sea **pormenorizada, rubro por rubro**. Eso significa que usted debe poder leer, uno por uno: remuneración pendiente, proporcional de décimo tercero, proporcional de décimo cuarto, vacaciones no gozadas, fondos de reserva si corresponde, utilidades del ejercicio trabajado, y las indemnizaciones o bonificaciones que correspondan según la figura de terminación.

### El dato que más conviene saber

> **Un finiquito no pormenorizado no tiene efecto de finiquito**, y usted conserva el derecho a reclamar lo que falte. Pero es mucho más fácil corregirlo antes de firmar que después.

### Lo que puede hacer, y nadie puede negarle

- Leerla completa, con calma, sin que nadie lo apure.
- Pedir que le expliquen rubro por rubro cómo se calculó cada valor.
- Anotar por escrito su desacuerdo antes de firmar.
- Pedir una copia.

Firmar acredita que recibió y revisó; no lo obliga a aceptar un error de cálculo que después se demuestre.

Fuente: Reglamento Interno de Trabajo, Art. 119 y Art. 120; Procedimientos de Contratación y Finiquito; parámetro \`acta_finiquito_forma\`. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`acta_finiquito_forma`,`liquidacion_plazo_pago`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XVI — Acta de finiquito`,articulo:`Art. 119`},calculadora:null,datos_requeridos:[],siguiente_paso:`Pida al Analista de Administración de Personal que le explique cada rubro antes de firmar, y solicite copia del acta. Si un valor no cuadra, dígalo ahí mismo y que conste.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`finiquito`,`liquidacion`,`firma`,`derechos`,`orientacion preventiva`],errores_frecuentes:[`Creer que un acta genérica de "he recibido todo lo que me corresponde" tiene efecto de finiquito: no lo tiene.`,`Creer que firmar rápido acelera el pago.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-252`,titulo:`Me llegó una amonestación escrita y no estoy de acuerdo`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`ambar`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:34,volumen_consultas_mes_estimado:34,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué puedo hacer si no estoy de acuerdo con una sanción que ya me notificaron?`,variantes_pregunta:[`me llego una amonestacion y no estoy de acuerdo`,`puedo reclamar una sancion`,`como apelo una amonestacion escrita`,`me sancionaron injustamente que hago`,`hasta cuando puedo pedir reconsideracion`],respuesta_corta:`Sí puede: tiene 3 días laborables desde la notificación para pedir reconsideración por escrito ante la instancia inmediatamente superior a la que sancionó, y le deben resolver en 5 días laborables. Pedirla no puede empeorar su sanción: está prohibido agravar una medida por haber sido cuestionada.`,respuesta_extendida:`### El procedimiento de reconsideración

| Qué | Cuándo | Ante quién |
|---|---|---|
| Presentar el pedido, por escrito | **3 días laborables** desde la notificación | La instancia inmediatamente superior a la que sancionó |
| Resolución | **5 días laborables** | Esa misma instancia |

La propia resolución sancionatoria debe decirle ante quién y en qué plazo puede impugnarla.

### Dos garantías firmes

1. **Apelar nunca empeora la sanción.** La instancia solo confirma, reduce o revoca.
2. **Si prospera, la sanción se elimina del expediente** sin dejar rastro que lo afecte.

### Qué conviene incluir en el escrito

Hechos concretos con fecha y hora, lo que a su juicio no quedó probado, las pruebas que aporta y los atenuantes que concurren (reconocimiento, reparación espontánea, antigüedad sin antecedentes, falta de claridad de la norma o del entrenamiento, ausencia de daño).

**VERA no opina sobre el fondo de su caso ni anticipa el resultado**: eso lo resuelve la instancia con competencia, oyéndolo a usted. Lo que sí le confirmo es el plazo, la vía y que ejercerla no tiene ninguna consecuencia negativa.

Fuente: Reglamento Interno de Trabajo, Art. 109 etapa 6 y Art. 122; Política de Disciplina, sección 9.3. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los plazos publicados son los del Art. 109 del Reglamento Interno, que manda sobre la tabla de la sección 9.3 de docs/08 donde ambas difieren.`],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Procedimiento de descargos, etapa 6`,articulo:`Art. 109`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta. La Jefatura de Relaciones Laborales y Disciplina lo contacta en 3 días hábiles. Mientras tanto, presente su pedido de reconsideración por escrito dentro de los 3 días laborables: ese plazo no se detiene.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`El colaborador tiene una sanción notificada en su contra. VERA entrega el plazo, la vía y las garantías del procedimiento, y no valora el fondo del caso ni anticipa el resultado de la reconsideración.`},etiquetas:[`reconsideracion`,`apelacion`,`amonestacion`,`plazos`,`derechos`],errores_frecuentes:[`Creer que pedir reconsideración puede agravar la sanción: está expresamente prohibido.`,`Dejar pasar los 3 días laborables, que es el riesgo real.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-253`,titulo:`Me dieron una notificación de cargos y me dicen que si no firmo me va peor`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`ambar`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:30,volumen_consultas_mes_estimado:30,tipo_atomo:`normativo`,pregunta_canonica:`¿Firmar la notificación de cargos significa que acepto la falta?`,variantes_pregunta:[`me dieron una notificacion de cargos, firmo?`,`si firmo estoy aceptando que lo hice?`,`me dicen que si no firmo me va peor`,`que pasa si no firmo el acuse`,`me obligan a firmar un documento disciplinario`],respuesta_corta:`Puede firmar tranquilo: firmar el acuse solo dice que **recibió** el documento, no que acepte el cargo. Y si no firma, tampoco es falta ni pierde el derecho a presentar su descargo. El riesgo real es otro: dejar pasar el plazo sin responder.`,respuesta_extendida:`### Qué significa cada cosa

| Acto | Qué acredita |
|---|---|
| Firmar el acuse | Que **recibió** el documento. El propio documento debe decirlo expresamente |
| No firmar | Nada en su contra. Se hace constar con la firma de un testigo y **no impide** que usted presente su descargo |
| Presentar el descargo | Su versión de los hechos, con pruebas y testigos si los tiene |

### Lo que la empresa no puede hacer

- Presionar la firma o pedir que firme en blanco: eso **vicia el consentimiento y anula el documento**.
- Decirle «firma aquí, es solo un trámite»: está en la lista de frases prohibidas para las jefaturas.
- Sancionarlo sin descargos: es el error número uno que anula una sanción.

### Sus derechos en esta etapa

1. Conocer por escrito los hechos, con fecha, hora, lugar y el literal exacto que los tipifica.
2. Conocer las pruebas en que se funda.
3. **3 días laborables** para presentar su descargo, prorrogables a 5 a solicitud motivada suya.
4. Pedir audiencia y **asistir acompañado** por un compañero de su elección o un representante de los trabajadores.
5. Aportar pruebas y testigos.
6. Recibir una resolución escrita y motivada, y poder pedir reconsideración.

**VERA no valora si usted cometió o no la falta, ni anticipa qué va a pasar.** Le confirmo el procedimiento y sus derechos, que es lo que necesita para preparar su descargo a tiempo.

Fuente: Reglamento Interno de Trabajo, Art. 109 y Art. 110; Política de Disciplina, secciones 5.7 y 16. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El plazo publicado es el del Art. 109 del Reglamento Interno (3 días laborables prorrogables a 5). La sección 10.1 de docs/08 registra 5 días hábiles prorrogables 3; ante la divergencia manda el Reglamento y la prórroga se concede a pedido motivado.`],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Notificación`,articulo:`Art. 110`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta y la derivé a la Jefatura de Relaciones Laborales y Disciplina, que lo contacta en 3 días hábiles. No espere ese contacto para presentar su descargo: el plazo de 3 días laborables corre desde la notificación.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Existe un procedimiento disciplinario iniciado contra el colaborador. VERA entrega el piso informativo del procedimiento y de los derechos de defensa, sin opinar sobre el fondo ni anticipar la sanción.`},etiquetas:[`notificacion de cargos`,`firma`,`descargos`,`acompañamiento`,`derechos`],errores_frecuentes:[`Creer que firmar el acuse equivale a aceptar la falta.`,`Creer que no firmar es una falta o que impide defenderse.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-254`,titulo:`¿Qué es una falta leve, una grave y una muy grave?`,dominio:`etica_conducta_disciplina`,subdominio:`Faltas y escala de sanciones`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:57,volumen_consultas_mes_estimado:57,tipo_atomo:`normativo`,pregunta_canonica:`¿Cómo se clasifican las faltas en VERTIENTE y qué las diferencia?`,variantes_pregunta:[`que es una falta leve`,`cual es la diferencia entre falta grave y muy grave`,`como se clasifican las faltas`,`cuantos tipos de falta hay`,`que cuenta como falta muy grave`],respuesta_corta:`Hay tres niveles: leve (incumplimiento menor, sin daño ni riesgo, sin intención de ocultar), grave (afecta la operación, incumple una norma expresa o daña la convivencia) y muy grave (rompe la confianza, causa daño relevante o pone en riesgo la vida). El catálogo tiene 64 faltas tipificadas: 22 leves, 24 graves y 18 muy graves.`,respuesta_extendida:`### Los tres niveles

| Nivel | Qué la define | Respuesta natural | Dónde está |
|---|---|---|---|
| **Leve** | Incumplimiento menor, sin daño material relevante, sin riesgo para terceros y sin intención de ocultar | Llamado de atención verbal registrado | Art. 103, literales a a v |
| **Grave** | Afecta el funcionamiento del área, genera daño económico moderado, incumple una norma expresa o afecta la convivencia | Amonestación escrita | Art. 104, literales a a x |
| **Muy grave** | Rompe la confianza, causa daño patrimonial relevante, pone en riesgo la vida o la salud, o constituye causal legal de visto bueno | Solicitud de visto bueno ante el Inspector del Trabajo | Art. 105, literales a a r |

### Dos principios que acotan todo lo anterior

- **Legalidad y tipicidad.** Solo se sanciona una conducta descrita como falta en el Reglamento Interno aprobado. No se admiten imputaciones genéricas como «mala actitud», «falta de compromiso» o «problemas con el equipo»: el hecho debe poder describirse con fecha, hora, lugar y conducta observable.
- **Proporcionalidad.** El nivel indica el **máximo** aplicable. Quien sanciona puede imponer una medida menor o archivar si el descargo y las pruebas lo justifican.

> Que una conducta esté clasificada como muy grave **no significa que la terminación sea automática**: significa que puede habilitar la solicitud de visto bueno, que resuelve el Inspector del Trabajo.

Fuente: Reglamento Interno de Trabajo, Art. 103, 104 y 105; datos/catalogo-faltas.json. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Faltas y sanciones`,articulo:`Art. 103`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si quiere saber cómo se clasifica una conducta concreta que está pensando hacer, pregúnteme antes de hacerla: preguntar no genera ningún registro.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`faltas`,`clasificacion`,`leve`,`grave`,`muy grave`],errores_frecuentes:[`Creer que la clasificación depende del criterio del supervisor: depende del literal del Reglamento.`,`Creer que una falta muy grave implica despido automático.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-255`,titulo:`¿Qué sanciones puede aplicarme la empresa?`,dominio:`etica_conducta_disciplina`,subdominio:`Faltas y escala de sanciones`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:51,volumen_consultas_mes_estimado:51,tipo_atomo:`normativo`,pregunta_canonica:`¿Cuáles son las sanciones disciplinarias que existen en VERTIENTE?`,variantes_pregunta:[`que sanciones existen en la empresa`,`cuales son las sanciones disciplinarias`,`que me pueden hacer si cometo una falta`,`escala de sanciones vertiente`,`cuantos escalones hay antes del despido`],respuesta_corta:`El Art. 106 prevé cuatro sanciones y ninguna más: llamado de atención verbal registrado, amonestación escrita, amonestación escrita con multa —hoy suspendida, no se aplica— y solicitud de visto bueno ante el Inspector del Trabajo. Cualquier otra medida presentada como sanción es nula.`,respuesta_extendida:`### La escala completa

| Nivel | Medida | ¿Es sanción? | Estado |
|---|---|---|---|
| **0** | **Orientación preventiva** — usted pregunta antes de actuar | **No** | Vigente. **No genera registro personal ni antecedente** |
| 1 | Llamado de atención verbal registrado | Sí | Vigente |
| 2 | Amonestación escrita | Sí | Vigente |
| 3 | Amonestación escrita con multa | Sí | **Suspendida.** Mientras el registro de parámetros no tenga verificado el tope legal del porcentaje, VERTIENTE no impone multas: esas faltas se sancionan con amonestación escrita (Art. 108) |
| 4 | Solicitud de visto bueno ante el Inspector del Trabajo | Sí | Vigente |

### Lo que NO existe como sanción

- **Suspensión disciplinaria.** El Art. 106 no la contempla; una suspensión impuesta como castigo sería una sanción no tipificada, y eso anula la medida.
- **Cambio de ruta, de zona o de turno como castigo.** Está expresamente prohibido (Art. 100) y es, en sí mismo, una falta de quien lo impone.
- **Descuentos en el rol como sanción.** La remuneración está protegida (parámetro \`descuentos_rol_limite\`).
- **Retener documentos, herramientas o pagos.** Es un incumplimiento de la empresa, no un acto disciplinario.

### Quién puede aplicar cada una

Nadie sanciona fuera de la matriz de autoridad: una sanción impuesta por quien no tiene autoridad para imponerla **es nula, aunque el hecho sea cierto**. El llamado verbal lo aplica la jefatura inmediata; la amonestación escrita requiere visto de Relaciones Laborales; el visto bueno lo autoriza Dirección General con Legal y Cumplimiento.

Fuente: Reglamento Interno de Trabajo, Art. 100, 106, 107 y 108; Política de Disciplina, secciones 8 y 9.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`La escala publicada es la del Art. 106 del Reglamento Interno, que manda sobre la escala de seis escalones de la sección 8.1 de docs/08 (inconsistencia INC-001 del catálogo de faltas).`],parametros_usados:[`descuentos_rol_limite`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Escala de sanciones`,articulo:`Art. 106`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si le anunciaron una medida que no está en esta lista, plantéelo a la Jefatura de Relaciones Laborales y Disciplina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`sanciones`,`escala`,`amonestacion`,`multa`,`visto bueno`],errores_frecuentes:[`Creer que existe la suspensión disciplinaria: el Reglamento Interno no la contempla.`,`Creer que la multa se aplica hoy: está suspendida mientras no se verifique su tope legal.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-256`,titulo:`¿Me pueden mandar a la casa sin sueldo mientras investigan?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:23,volumen_consultas_mes_estimado:23,tipo_atomo:`normativo`,pregunta_canonica:`¿La separación preventiva durante una investigación es sin sueldo?`,variantes_pregunta:[`me pueden mandar a la casa sin sueldo mientras investigan`,`la separacion preventiva es con sueldo?`,`me sacaron del turno mientras revisan el caso`,`suspension mientras investigan, me pagan?`,`me retiraron la conduccion mientras investigan`],respuesta_corta:`No sin sueldo. La separación preventiva es **remunerada**: es una medida cautelar de seguridad, no una sanción, y no prejuzga nada. Si el caso se archiva, no queda ningún antecedente.`,respuesta_extendida:`### Medida cautelar no es sanción

Cuando la empresa retira temporalmente una asignación mientras investiga —retirar la conducción tras un accidente vial, apartar a alguien de la línea tras un positivo de alcohol, separar físicamente a las partes en un caso de acoso— está tomando una **medida de prevención**, no imponiendo un castigo. Por eso:

| Regla | Contenido |
|---|---|
| Remuneración | **Se mantiene.** Una separación sin sueldo antes de cualquier resolución sería una sanción anticipada y un descuento no autorizado a la vez |
| Efecto en el expediente | Ninguno mientras no haya resolución. Si el caso se archiva, no hay antecedente |
| Duración | La de la investigación, con los plazos del procedimiento |
| Debido proceso | Sigue completo: notificación de cargos, descargos, audiencia, resolución motivada |

### En accidentes viales

El retiro temporal de la asignación de conducción mientras se investiga **no es sanción, es prevención, y se mantiene la remuneración**. Y si el accidente se debió a un tercero, a la vía o a un factor no atribuible: **no hay sanción, no hay descuento y no hay antecedente**.

Fuente: Política de Disciplina y Debido Proceso, secciones 14.1, 14.3 y 14.4; Reglamento Interno, Art. 100. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.3 — Accidentes viales con responsabilidad`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si le aplicaron una separación sin remuneración, plantéelo a la Jefatura de Relaciones Laborales y Disciplina y a la Jefatura de Nómina y Compensaciones.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`separacion preventiva`,`suspension`,`remuneracion`,`investigacion`,`derechos`],errores_frecuentes:[`Confundir una medida cautelar con una sanción anticipada.`,`Creer que la empresa puede dejar de pagar mientras investiga.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-257`,titulo:`¿Me pueden descontar del sueldo como castigo?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:62,volumen_consultas_mes_estimado:62,tipo_atomo:`normativo`,pregunta_canonica:`¿La empresa puede descontarme del rol una multa disciplinaria o un faltante?`,variantes_pregunta:[`me pueden descontar del sueldo por una falta`,`me quieren descontar un faltante del rol`,`el supervisor dice que me lo va a descontar`,`multa disciplinaria en el rol de pagos`,`me descontaron sin avisar`],respuesta_corta:`No de forma automática, y ningún supervisor dispone descuentos. La remuneración está protegida (parámetro descuentos_rol_limite). Hoy VERTIENTE no aplica multas disciplinarias, y un faltante solo se descuenta con el hecho y el monto determinados y con su autorización escrita.`,respuesta_extendida:`### Tres reglas firmes

1. **La multa disciplinaria está suspendida.** El Art. 108 la congela mientras el registro de parámetros no tenga verificado el tope legal del porcentaje; esas faltas se sancionan con amonestación escrita.
2. **Ningún supervisor dispone descuentos.** Está en la lista de lo que un supervisor nunca hace, y un descuento no autorizado es uno de los errores que **anulan la sanción** completa.
3. **Un faltante no es automáticamente una falta.** Puede deberse a error de digitación, diferencia de precio, devolución no registrada, error de picking, rotura, merma o robo de terceros. **Primero se establece la causa.**

### Cómo se trata un faltante, correctamente

| Paso | Contenido |
|---|---|
| Acta de arqueo o conteo | **En su presencia**, con su firma. Un faltante determinado sin usted presente es un dato, no una prueba |
| Reconteo | Obligatorio, al menos una vez, con una persona distinta de quien contó primero |
| Cuantificación | Control Interno y Auditoría valida el monto y descarta errores de sistema **antes** de que se abra caso |
| Descuento | Solo con el hecho y el monto determinados **y con su autorización escrita** |
| Reposición voluntaria | Si usted reconoce y repone, opera el atenuante de reparación espontánea |

### Prohibición expresa

Está prohibido **retener el rol, el décimo tercero, el décimo cuarto, los fondos de reserva o la liquidación** para presionar el pago de un faltante. Eso es un incumplimiento de la empresa, no un acto disciplinario.

Fuente: Política de Disciplina, secciones 8.4, 14.2 y 16; Reglamento Interno, Art. 46, 54 y 108. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`descuentos_rol_limite`,`decimo_tercero_formula`,`decimo_cuarto_valor`,`fondos_reserva_porcentaje`,`liquidacion_plazo_pago`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.2 — Faltantes de dinero y de inventario`,articulo:`Art. 108`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si le anunciaron un descuento, pida que el faltante se determine con acta de arqueo en su presencia y plantéelo a la Jefatura de Nómina y Compensaciones y a Control Interno.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`descuentos`,`faltante`,`multa`,`remuneracion`,`derechos`],errores_frecuentes:[`Creer que el supervisor puede ordenar un descuento en el rol.`,`Creer que un faltante equivale automáticamente a una falta disciplinaria.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-258`,titulo:`¿Cómo funciona el procedimiento disciplinario, paso a paso?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:44,volumen_consultas_mes_estimado:44,tipo_atomo:`normativo`,pregunta_canonica:`¿Cuáles son las etapas y los plazos de un procedimiento disciplinario?`,variantes_pregunta:[`como es el proceso disciplinario paso a paso`,`cuales son los plazos de un descargo`,`que etapas tiene un caso disciplinario`,`cuanto demora un proceso disciplinario`,`que pasa despues de la notificacion de cargos`],respuesta_corta:`Son seis etapas con plazos ciertos: requerimiento escrito de descargo (la empresa tiene 10 días laborables desde que conoció el hecho), su descargo (3 días laborables, prorrogables a 5 si lo pide motivadamente), audiencia opcional (3 días), valoración de la prueba (5 días), resolución motivada (5 días) y reconsideración (3 días para pedirla, 5 para resolverla).`,respuesta_extendida:`### Las etapas del Art. 109

| # | Etapa | Plazo | Quién |
|---|---|---|---|
| 1 | **Requerimiento escrito de descargo**: hechos con fecha, hora y lugar, conducta imputada, el literal exacto que la tipifica y las pruebas | **10 días laborables** desde que la empresa conoció el hecho. Si no lo hace, el procedimiento se archiva | Instructor del caso |
| 2 | **Su descargo**: por escrito, o verbal transcrito si usted lo pide; con pruebas y testigos; puede comparecer acompañado | **3 días laborables** desde la notificación, prorrogables a **5** a solicitud motivada suya | Usted |
| 3 | **Audiencia de descargo**, a pedido de cualquiera de las partes; se levanta acta | Dentro de **3 días laborables** siguientes al descargo | Instructor, Relaciones Laborales y su acompañante |
| 4 | **Valoración de la prueba** | **5 días laborables** | Jefatura de Relaciones Laborales y Disciplina |
| 5 | **Resolución motivada**: archivo, llamado de atención, amonestación o inicio de visto bueno, con hechos probados, norma aplicada y razón de la sanción | **5 días laborables** | La autoridad que sanciona según el Art. 107 |
| 6 | **Reconsideración** ante la instancia inmediatamente superior | **3 días** para pedirla; **5 días** para resolverla | Usted |

### Cómo se le notifica

Entrega personal con acuse, correo institucional con confirmación de lectura, o portal interno. **Para personal de ruta y planta sin acceso habitual a terminal, la entrega es personal, en su instalación y en horario de trabajo.** Negarse a firmar el acuse se hace constar con un testigo y **no impide** que usted presente su descargo.

### Si la empresa incumple sus propios plazos

Si no requiere el descargo dentro del plazo de la etapa 1, o no resuelve dentro de los plazos de las etapas 4 y 5, **el procedimiento se archiva y la falta no puede sancionarse**. Opera de pleno derecho a su favor.

Fuente: Reglamento Interno de Trabajo, Art. 109 y Art. 110; datos/catalogo-faltas.json → procedimiento. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los plazos publicados son los del Art. 109 del Reglamento Interno. La sección 10.1 de docs/08 registra 5 días hábiles de descargo prorrogables 3; ante la divergencia manda el Reglamento, y la prórroga a 5 días se concede a pedido motivado (inconsistencia INC-003 del catálogo de faltas).`],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Procedimiento de descargos`,articulo:`Art. 109`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si necesita más tiempo para reunir respaldos, pida la prórroga por escrito dentro de los 3 días laborables, explicando por qué.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`procedimiento`,`descargos`,`plazos`,`debido proceso`,`notificacion`],errores_frecuentes:[`Creer que el plazo de descargo se cuenta desde el hecho: se cuenta desde la notificación.`,`No pedir la prórroga cuando se necesita: se concede a solicitud motivada.`],confianza:`alta`,requiere_verificacion_legal:!0},{id:`KB-259`,titulo:`¿Me pueden sancionar sin escucharme?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:47,volumen_consultas_mes_estimado:47,tipo_atomo:`normativo`,pregunta_canonica:`¿Puede la empresa imponerme una sanción sin darme la oportunidad de presentar descargos?`,variantes_pregunta:[`me pueden sancionar sin escucharme`,`me sancionaron sin preguntarme nada`,`tienen que darme oportunidad de explicar?`,`es valida una sancion sin descargos`,`me amonestaron sin avisarme`],respuesta_corta:`No. Antes de cualquier sanción usted recibe una notificación escrita de cargos y tiene plazo para presentar sus descargos, por escrito o en audiencia. **Una sanción sin descargos es nula**: se deja sin efecto y se elimina del expediente.`,respuesta_extendida:`### El derecho a la defensa, en concreto

Comprende, como mínimo:

- Conocer la imputación **por escrito**, con hechos concretos y el literal que los tipifica.
- Conocer **las pruebas** que la sustentan.
- Un **plazo cierto** para responder (3 días laborables, prorrogables a 5 a pedido motivado).
- Poder **aportar pruebas y testigos**.
- Ser **acompañado** en la audiencia por un compañero de su elección o por un representante de los trabajadores. **El instructor está obligado a informárselo**, no a esperar que usted lo pida.
- Recibir una **decisión escrita y motivada**.

### La única excepción

El llamado de atención verbal registrado es la única medida que el Art. 109 exceptúa del procedimiento de descargos —y aun así se conversa escuchando primero su versión, en privado, y se deja acta breve firmada por ambos. Si hay reincidencia y la medida pasa a amonestación escrita, el procedimiento de descargos **es obligatorio**.

### Dos garantías más

- **Presunción de inocencia**: la carga de la prueba es de la empresa, nunca suya. Frases como «que demuestre que no fue él» están prohibidas en todo documento disciplinario de VERTIENTE.
- **No duplicidad**: un mismo hecho se sanciona una sola vez.

Fuente: Reglamento Interno de Trabajo, Art. 101 y Art. 109; Política de Disciplina, secciones 5.6, 5.7 y 16. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Principios del procedimiento disciplinario`,articulo:`Art. 101`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si le impusieron una sanción sin haberle requerido descargos, plantéelo a la Jefatura de Relaciones Laborales y Disciplina: es causal de nulidad.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`descargos`,`defensa`,`nulidad`,`debido proceso`,`derechos`],errores_frecuentes:[`Creer que el derecho a acompañamiento hay que pedirlo: el instructor debe informarlo de oficio.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-260`,titulo:`¿Puedo ir acompañado a la audiencia de descargos?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:25,volumen_consultas_mes_estimado:25,tipo_atomo:`normativo`,pregunta_canonica:`¿Tengo derecho a que alguien me acompañe en la audiencia disciplinaria?`,variantes_pregunta:[`puedo ir acompañado a la audiencia`,`puedo llevar a alguien al descargo`,`me dejan entrar con un compañero a la reunion`,`tengo derecho a un representante en la audiencia`],respuesta_corta:`Sí, es un derecho. Puede asistir acompañado por un compañero de su elección o por un representante de los trabajadores, y el instructor está obligado a informárselo sin que usted lo pida.`,respuesta_extendida:`### Qué hace y qué no hace el acompañante

El acompañante **escucha y puede ayudarle a expresarse**; no sustituye su declaración. La política señala expresamente que este derecho es especialmente relevante para personal operativo con menor manejo de lenguaje formal, y por eso el supervisor **debe** informarlo de oficio.

### Lo que además puede hacer en la audiencia

| Puede | Detalle |
|---|---|
| Pedir que su descargo se reciba verbalmente y se transcriba | Si le resulta más claro que escribirlo |
| Presentar pruebas y testigos | Documentos, fotos con fecha, mensajes, registros |
| Pedir que se grabe | Solicitándolo al inicio para que conste en el acta |
| Hacer constar su desacuerdo con el acta | Por escrito, en la misma acta, antes de firmar; o negarse a firmar dejando constancia |

### Si se lo niegan

Negar el acompañamiento en la audiencia es uno de los errores que **anulan la sanción**, porque restringe el derecho a la defensa.

Fuente: Política de Disciplina, secciones 5.7 y 16; Reglamento Interno, Art. 109. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 5.7 — Derecho a la defensa`,articulo:`Art. 109`},calculadora:null,datos_requeridos:[],siguiente_paso:`Avise al instructor del caso a quién llevará como acompañante. Si se lo niegan, plantéelo a la Jefatura de Relaciones Laborales y Disciplina.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`acompañamiento`,`audiencia`,`descargos`,`derechos`,`defensa`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-261`,titulo:`¿Cuánto dura una sanción en mi expediente?`,dominio:`etica_conducta_disciplina`,subdominio:`Antecedentes, reincidencia y prescripción`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:41,volumen_consultas_mes_estimado:41,tipo_atomo:`normativo`,pregunta_canonica:`¿Cuándo deja de contar una sanción anterior y cómo se limpia el antecedente?`,variantes_pregunta:[`cuanto dura una amonestacion en mi expediente`,`cuando se me limpia el antecedente`,`se borra la sancion con el tiempo?`,`hasta cuando me cuenta una falta anterior`,`tengo que pedir que me quiten el antecedente?`],respuesta_corta:`El antecedente caduca por el nivel de la falta anterior: 6 meses si fue leve, 12 si fue grave, 24 si fue muy grave, contados desde la notificación de la sanción. **La caducidad es automática: usted no tiene que pedirla.**`,respuesta_extendida:`### Cuándo deja de contar

| Nivel de la falta sancionada | Deja de contar para reincidencia a los |
|---|---|
| Leve | **6 meses** |
| Grave | **12 meses** |
| Muy grave | **24 meses** |

Se cuentan desde la **notificación de la sanción** (Art. 111).

### Qué significa que un antecedente caducó

- **No puede invocarse como reincidencia** ni mencionarse en una nueva resolución.
- **No puede usarse para negar una promoción, un traslado o un beneficio.**
- Sale del cálculo de la estadística de reincidencia.
- El documento no se destruye —el expediente laboral se conserva— pero queda marcado como caducado y el sistema deja de mostrarlo en la vista de reincidencia.

**Administración de Personal corre el proceso de caducidad el primer día hábil de cada mes.** No hay nada que usted deba solicitar.

### Si le invocan un antecedente ya caducado

Basar la reincidencia en un antecedente caducado es uno de los errores que **anulan una sanción**.

### Lo que no genera antecedente

Una consulta preventiva a VERA. Un registro de gestión de desempeño. Un caso archivado. Una medida cautelar sin resolución. Una sanción revocada en reconsideración, que se elimina del expediente.

Fuente: Reglamento Interno de Trabajo, Art. 111; Política de Disciplina, sección 12.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`El cómputo publicado es el del Art. 111 del Reglamento Interno (por nivel de falta, desde la notificación), que manda sobre la tabla por escalón de la sección 12.2 de docs/08 (inconsistencia INC-006 del catálogo de faltas).`],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Reincidencia`,articulo:`Art. 111`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si necesita confirmar el estado de su expediente, pídalo a la Jefatura de Administración de Personal, que es la custodia del expediente.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`antecedente`,`caducidad`,`reincidencia`,`expediente`,`derechos`],errores_frecuentes:[`Creer que hay que solicitar la caducidad: es automática.`,`Creer que un antecedente caducado puede usarse para negar una promoción: no puede.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-262`,titulo:`¿Qué cuenta como reincidencia?`,dominio:`etica_conducta_disciplina`,subdominio:`Antecedentes, reincidencia y prescripción`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:26,volumen_consultas_mes_estimado:26,tipo_atomo:`normativo`,pregunta_canonica:`¿Cuándo se considera que hay reincidencia y qué efecto tiene?`,variantes_pregunta:[`que es reincidencia`,`si vuelvo a cometer la misma falta que pasa`,`la segunda vez es mas grave?`,`cuenta como reincidencia una falta distinta?`],respuesta_corta:`Hay reincidencia cuando existe un antecedente **vigente** por una falta de la misma naturaleza. Sube un escalón la sanción, y tiene dos saltos tipificados: reincidir en falta leve ya amonestada por escrito dentro de 6 meses convierte la conducta en grave; reincidir en falta grave ya sancionada dentro de 12 meses la convierte en muy grave.`,respuesta_extendida:`### Los dos saltos tipificados

| Situación | En qué se convierte | Norma |
|---|---|---|
| Reincidir en falta **leve** ya amonestada por escrito, dentro de 6 meses | Falta **grave** | Art. 104 literal v (FAL-044) |
| Reincidir en falta **grave** ya sancionada, dentro de 12 meses | Falta **muy grave** | Art. 105 literal r (FAL-064) |

### Condiciones para que opere

1. El antecedente debe estar **vigente**, no caducado (Art. 111).
2. Debe ser por una falta de la **misma naturaleza**.
3. Debe haber sido **notificado** en su momento: una conversación informal que nadie documentó no es antecedente de nada.

### Lo que la reincidencia no es

- No es «acumular llamados de atención» como receta para llegar a una terminación. La política lo dice de frente: las causales **no se eligen, se configuran o no se configuran**.
- No es duplicar la sanción por el mismo hecho: eso está prohibido (*non bis in idem*).
- No aplica a registros de gestión de desempeño, que no son antecedente disciplinario y no cuentan para la escala progresiva.

Fuente: Reglamento Interno de Trabajo, Art. 104 literal v, Art. 105 literal r y Art. 111; Política de Disciplina, secciones 11.1 y 12.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Reincidencia`,articulo:`Art. 111`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si le invocan un antecedente que usted cree caducado o nunca notificado, dígalo en su descargo y plantéelo a Relaciones Laborales.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`reincidencia`,`antecedente`,`escala progresiva`,`faltas`],errores_frecuentes:[`Creer que cualquier falta anterior cuenta como reincidencia: debe ser de la misma naturaleza y estar vigente.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-263`,titulo:`¿Hasta cuándo pueden sancionarme por algo que pasó hace meses?`,dominio:`etica_conducta_disciplina`,subdominio:`Antecedentes, reincidencia y prescripción`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:21,volumen_consultas_mes_estimado:21,tipo_atomo:`normativo`,pregunta_canonica:`¿Existe un plazo máximo para que la empresa inicie un procedimiento disciplinario?`,variantes_pregunta:[`hasta cuando pueden sancionarme por algo viejo`,`prescribe una falta?`,`pasaron meses y ahora me llaman, pueden?`,`cuanto tiempo tiene la empresa para sancionar`],respuesta_corta:`Sí. La potestad disciplinaria prescribe a los 30 días calendario en faltas leves, 60 en graves y 90 en muy graves, contados desde que la empresa conoció el hecho. Pasado ese plazo, no puede sancionar; sancionar fuera de plazo es causal de nulidad.`,respuesta_extendida:`### Dos cosas distintas que se confunden

| Figura | Qué es |
|---|---|
| **Prescripción de la falta** | El tiempo que tiene la empresa para **iniciar** el procedimiento desde que conoció el hecho: 30 / 60 / 90 días calendario (Art. 112) |
| **Caducidad del antecedente** | El tiempo tras el cual una sanción anterior deja de contar para la reincidencia: 6 / 12 / 24 meses (Art. 111) |

A esos plazos se suma el tope de la etapa 1 del Art. 109: el requerimiento escrito de descargo se entrega dentro de los **10 días laborables** desde que la empresa conoció el hecho, y si no se hace en ese plazo el procedimiento se archiva.

### La regla especial de descubrimiento diferido

En faltas patrimoniales, de falsificación o de conflicto de interés que por su naturaleza solo se descubren en una auditoría, el plazo corre desde que **Control Interno formaliza el hallazgo**, y ese hallazgo debe tener fecha cierta.

### Duda declarada, y lo que significa para usted

El registro de parámetros **no contiene** un plazo legal de prescripción de la falta disciplinaria laboral. Los plazos publicados son **plazos internos de VERTIENTE**. Si la norma vigente fijara un plazo distinto **más favorable al colaborador, manda el plazo legal**. Legal y Cumplimiento debe verificarlo antes de oponer la prescripción en un caso real.

Fuente: Reglamento Interno de Trabajo, Art. 109 y Art. 112; Política de Disciplina, sección 12.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[`Los plazos publicados son los del Art. 112 del Reglamento Interno (30/60/90 días calendario), que mandan sobre la tabla de la sección 12.1 de docs/08 (inconsistencia INC-005 del catálogo de faltas).`,`No existe parámetro legal verificado de prescripción disciplinaria: si la norma vigente fija un plazo más favorable al colaborador, manda ese.`],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Prescripción de la falta`,articulo:`Art. 112`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si el hecho que le imputan es antiguo, hágalo constar en su descargo con fechas y plantéelo a Relaciones Laborales.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`prescripcion`,`plazos`,`inmediatez`,`nulidad`,`derechos`],errores_frecuentes:[`Confundir prescripción de la falta con caducidad del antecedente.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-264`,titulo:`¿Qué agrava y qué atenúa una falta?`,dominio:`etica_conducta_disciplina`,subdominio:`Antecedentes, reincidencia y prescripción`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:22,volumen_consultas_mes_estimado:22,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué circunstancias suben o bajan la sanción, y cómo se ponderan?`,variantes_pregunta:[`que agrava una falta`,`que atenuantes existen`,`como se gradua una sancion`,`si reconozco el hecho me ayuda?`,`la antiguedad cuenta como atenuante`],respuesta_corta:`La resolución debe enumerar expresamente qué agravantes y atenuantes concurren; una sanción que no explica su graduación no está motivada. Reconocer el hecho, repararlo antes de ser requerido, la antigüedad sin antecedentes y la falta de claridad de la norma bajan la medida; ocultar, reincidir, dañar o tener jerarquía la suben.`,respuesta_extendida:`### Agravantes

Reincidencia · daño patrimonial probado · riesgo para terceros · **ocultamiento** (alterar, destruir u ocultar evidencia, mentir en la verificación, inducir a un compañero a mentir) · abuso de confianza (cargo con manejo de valores, información sensible, llaves o claves) · **jerarquía** (se espera más de quien fija el ejemplo) · aprovechamiento de la subordinación · premeditación o reiteración · afectación a la imagen de la empresa · incumplir una advertencia previa específica.

### Atenuantes

**Reconocimiento del hecho** desde el inicio · **reparación espontánea** antes de ser requerido · **antigüedad de tres años o más sin antecedentes vigentes** · colaboración con la investigación · ausencia de daño · **falta de claridad de la norma o del entrenamiento** (puede incluso convertir el caso en gestión de desempeño) · circunstancia personal extraordinaria acreditada · provocación previa · **autodenuncia**.

### Cómo se ponderan

No se suman aritméticamente: el decisor pondera y **explica en la resolución cuál pesó más y por qué**. Con dos límites infranqueables:

1. Ningún atenuante convierte en leve una falta muy grave contra la vida, la integridad o la libertad sexual de una persona.
2. Ningún agravante permite imponer una sanción no tipificada en el Reglamento Interno.

> **VERA no aplica estos criterios a un caso concreto ni anticipa qué sanción correspondería.** Se los explico para que usted pueda plantear en su descargo los atenuantes que efectivamente concurren, que es exactamente lo que la resolución está obligada a valorar.

Fuente: Política de Disciplina y Debido Proceso, sección 11; Reglamento Interno, Art. 100. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 11 — Criterios de graduación`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si va a presentar un descargo, enumere por escrito los atenuantes que concurren en su caso: la resolución está obligada a valorarlos.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`agravantes`,`atenuantes`,`graduacion`,`proporcionalidad`,`descargos`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-265`,titulo:`Yo mismo reporté mi error, ¿eso sirve de algo?`,dominio:`etica_conducta_disciplina`,subdominio:`Antecedentes, reincidencia y prescripción`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:18,volumen_consultas_mes_estimado:18,tipo_atomo:`normativo`,pregunta_canonica:`¿Reportar mi propio error antes de que lo descubran cambia algo?`,variantes_pregunta:[`si yo mismo aviso de mi error me va mejor?`,`me equivoque y quiero avisar antes que lo descubran`,`la autodenuncia sirve de algo`,`conviene reconocer el error`],respuesta_corta:`Sí, y bastante: la autodenuncia y la reparación espontánea bajan uno o dos escalones, y el Código de Ética señala expresamente que haber reportado voluntariamente la propia falta antes de ser descubierto **siempre atenúa**. Ocultarlo, en cambio, es un agravante.`,respuesta_extendida:`### La asimetría es deliberada

| Conducta | Efecto |
|---|---|
| Reporta su propio error antes de que la empresa lo detecte | Atenuante de **autodenuncia**: baja uno o dos escalones |
| Repone, corrige el registro o subsana **antes** de ser requerido | Atenuante de **reparación espontánea**: baja uno o dos escalones |
| Reconoce el hecho desde el inicio, de forma espontánea y veraz | Atenuante de **reconocimiento**: baja un escalón |
| Oculta, altera evidencia o induce a un compañero a mentir | Agravante de **ocultamiento**: sube un escalón |

El Valor 1 del Código de Ética lo dice en una línea: *quien se equivoca lo dice primero, antes de que lo descubran.*

### Lo que no cambia

La autodenuncia atenúa, pero **no borra la falta** y no reemplaza el procedimiento. Lo que sí hace, muy concretamente, es cambiar el escalón de la respuesta y evitar el agravante de ocultamiento, que suele ser el que más pesa.

### Cómo hacerlo

Dígaselo a su jefatura inmediata por escrito, con los hechos y la fecha, o use la Línea Ética si prefiere un canal reservado. Cuanto antes, mejor: el atenuante exige que sea **antes** de que la empresa lo detecte.

> **VERA no evalúa si lo que usted hizo constituye o no una falta**, ni le anticipa qué va a pasar. Le confirmo cómo funciona el atenuante y cuál es el canal.

Fuente: Política de Disciplina, sección 11.2; Código de Ética, Valor 1 y Garantías del procedimiento disciplinario. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 11.2 — Atenuantes`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Comuníquelo por escrito a su jefatura inmediata, o a la Línea Ética si prefiere un canal reservado. Guarde constancia de la fecha.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`autodenuncia`,`atenuante`,`reparacion`,`etica`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-266`,titulo:`¿Qué errores dejan sin efecto una sanción?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:19,volumen_consultas_mes_estimado:19,tipo_atomo:`normativo`,pregunta_canonica:`¿En qué casos una sanción es nula y se elimina del expediente?`,variantes_pregunta:[`cuando es nula una sancion`,`que errores anulan una amonestacion`,`me sancionaron mal, se puede anular?`,`una sancion sin descargos vale?`],respuesta_corta:`Hay dieciocho errores que, por sí solos, anulan una sanción: sancionar sin descargos, sancionar dos veces el mismo hecho, fuera de plazo, con una medida no tipificada, sin autoridad, con imputación genérica, con prueba ilegítima, con descuento no autorizado, sin motivación o basándose en un antecedente caducado, entre otros. Si Relaciones Laborales detecta uno, la sanción se deja sin efecto y se elimina del expediente.`,respuesta_extendida:`### La lista completa

| # | Error que anula |
|---|---|
| 1 | Sancionar **sin descargos** |
| 2 | Sancionar **dos veces el mismo hecho** |
| 3 | Sancionar **fuera de plazo** (prescripción o plazos del procedimiento) |
| 4 | **Sanción no tipificada**: conducta no descrita como falta, o medida que no existe en el Reglamento |
| 5 | Notificación **verbal** de una sanción escrita |
| 6 | **Descuento no autorizado** en el rol |
| 7 | **Sancionar sin autoridad** según la matriz |
| 8 | **Imputación genérica** («mala actitud», «falta de compromiso») |
| 9 | Que **quien investiga sea quien decide**, en los escalones superiores |
| 10 | **Resolución sin motivación** |
| 11 | **Negar el acompañamiento** en la audiencia |
| 12 | Usar **pruebas ilegítimas**: grabaciones ocultas, revisión de mensajes privados, cámaras en lugares prohibidos |
| 13 | Sancionar a quien **denunció, reclamó o testificó** sin filtro antirrepresalia |
| 14 | **Sancionar por no alcanzar una meta** |
| 15 | **Agravar la sanción porque el colaborador apeló** |
| 16 | **Ejecutar la terminación sin visto bueno aprobado** |
| 17 | Basar la reincidencia en un **antecedente caducado** |
| 18 | **Presionar la firma o firmar en blanco** |

### Qué pasa cuando se detecta uno

La sanción **se deja sin efecto y se elimina del expediente**, y se evalúa la responsabilidad de quien la impuso. El indicador interno de sanciones anuladas por vicio de procedimiento tiene meta **cero**.

> Esto no es una lista de argumentos para discutir: es el estándar que la propia empresa se autoimpone. Si usted identifica alguno en su caso, plantéelo en su descargo o en la reconsideración.

Fuente: Política de Disciplina y Debido Proceso, sección 16. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 16 — Errores que anulan una sanción`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si identifica alguno de estos errores en su caso, hágalo constar por escrito en su descargo o en el pedido de reconsideración ante Relaciones Laborales.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`nulidad`,`errores`,`debido proceso`,`derechos`,`defensa`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-267`,titulo:`Si no alcanzo la cuota, ¿me pueden sancionar?`,dominio:`etica_conducta_disciplina`,subdominio:`Faltas y escala de sanciones`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:53,volumen_consultas_mes_estimado:53,tipo_atomo:`normativo`,pregunta_canonica:`¿No cumplir una meta o rendir por debajo del estándar es una falta disciplinaria?`,variantes_pregunta:[`si no llego a la cuota me sancionan?`,`me pueden amonestar por no cumplir la meta`,`bajo rendimiento es falta?`,`no alcance el objetivo del mes, que pasa`,`me amenazan con sancion por no cumplir meta`],respuesta_corta:`No. No alcanzar una meta comercial no es una falta disciplinaria: corresponde un plan de mejora con acompañamiento. Sancionar por no alcanzar una meta es uno de los errores que anulan una sanción.`,respuesta_extendida:`### La pregunta que resuelve el 90% de los casos

> **¿No PUDO, no SUPO o no QUISO?**

| Respuesta | Naturaleza | Ruta |
|---|---|---|
| **No pudo** — faltaron medios, se cayó el sistema, la vía estaba cerrada, el cliente cerró, no le entregaron producto | **Problema de proceso** | Se resuelve removiendo el obstáculo. Se registra como incidencia operativa, **no en su expediente** |
| **No supo** — no fue entrenado, el procedimiento cambió y no se le comunicó, es nuevo en el puesto | **Gestión de desempeño** | Entrenamiento, acompañamiento, refuerzo formativo. **Nunca sanción** |
| **No quiso** — conocía la norma, podía cumplirla, tenía los medios y decidió no hacerlo | **Gestión disciplinaria** | Procedimiento con descargos |

### Desempeño y disciplina no son lo mismo

| | Gestión de desempeño | Gestión disciplinaria |
|---|---|---|
| Qué evalúa | Resultados y capacidad | Conducta frente a una norma |
| Herramienta | Plan de Mejora de Desempeño, coaching, reentrenamiento | Amonestación, solicitud de visto bueno |
| Efecto en el expediente | Registro de desarrollo, **no es antecedente disciplinario** | Antecedente con vigencia |
| Efecto en la reincidencia | **Ninguno** | Cuenta para la escala progresiva |

### Casos frontera resueltos

- Prevendedor que no alcanza cuota por tercera vez → **desempeño**, con acompañamiento en ruta.
- Prevendedor que registra visitas a clientes donde no fue → **disciplina, muy grave**: no es un problema de resultado, es falsear información.
- Operario que produce bajo el estándar en su primer mes → **desempeño**: curva de aprendizaje.
- Estibador que rinde menos que sus compañeros → **desempeño, y antes salud**: se evalúa condición física y ergonomía con el servicio médico (parámetro \`medico_ocupacional_umbral\`).

Fuente: Política de Disciplina y Debido Proceso, sección 6; sección 16, error 14. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`medico_ocupacional_umbral`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 6 — Desempeño no es disciplina`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si le anunciaron una sanción por no alcanzar una meta, plantéelo a la Jefatura de Relaciones Laborales y Disciplina: corresponde plan de mejora, no sanción.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`desempeño`,`cuota`,`meta`,`plan de mejora`,`derechos`],errores_frecuentes:[`Confundir bajo desempeño con indisciplina: son rutas distintas y la primera nunca se sanciona.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-268`,titulo:`Me llamaron la atención delante de todos, ¿es correcto?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:24,volumen_consultas_mes_estimado:24,tipo_atomo:`normativo`,pregunta_canonica:`¿Puede un supervisor llamarme la atención delante de mis compañeros?`,variantes_pregunta:[`me llamaron la atencion delante de todos`,`el jefe me grito en el anden`,`pueden regañarme frente a los compañeros?`,`me expusieron delante del equipo`],respuesta_corta:`No. El llamado de atención se hace **en privado**, siempre. Si ocurrió en público, puede reportarlo a Relaciones Laborales: además, el procedimiento disciplinario es confidencial y la sanción de una persona no es material de ejemplo público.`,respuesta_extendida:`### Las siete reglas del llamado de atención

Un llamado de atención verbal **solo sirve como antecedente si se documenta**, y para documentarse válidamente debe cumplir:

1. **En privado.** Nunca delante de compañeros, clientes o proveedores.
2. Dentro de las **48 horas** del hecho.
3. Sobre un **hecho concreto**, no sobre la persona ni sobre su carácter.
4. **Escuchando primero** su versión. Siempre.
5. Diciendo **cuál es la norma** y dónde está escrita.
6. Acordando **qué cambia** y para cuándo.
7. Dejando **acta breve firmada por ambos**, subida al expediente el mismo día.

### Confidencialidad

El procedimiento disciplinario es confidencial: no se comenta en el grupo de WhatsApp de la ruta, no se anuncia en la formación matutina del CD, no se publica en cartelera. **La sanción de una persona no es material de ejemplo público con nombre y apellido.**

### Frases que la empresa prohíbe a sus jefaturas

«Una más y te vas» · «ya estás en la lista» · «tú siempre eres el problema del equipo» · «esto te lo voy a descontar del sueldo» · «mejor renuncia y evitamos problemas» · «firma aquí, es solo un trámite».

Fuente: Política de Disciplina, secciones 5.8, 15.1 y 15.2. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 15.1 — Cómo se da un llamado de atención`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Puede reportarlo a la Jefatura de Relaciones Laborales y Disciplina. Si prefiere un canal reservado, la Línea Ética también lo recibe.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`llamado de atencion`,`privacidad`,`confidencialidad`,`supervisor`,`derechos`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-269`,titulo:`¿Me pueden despedir por una falta? ¿Qué es el visto bueno?`,dominio:`etica_conducta_disciplina`,subdominio:`Visto bueno y terminación`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:55,volumen_consultas_mes_estimado:55,tipo_atomo:`normativo`,pregunta_canonica:`¿Puede la empresa terminar mi contrato por una falta, y cómo funciona el visto bueno?`,variantes_pregunta:[`me pueden despedir por una falta`,`que es el visto bueno`,`la empresa puede botarme por indisciplina`,`quien decide si me despiden`,`cuantas amonestaciones antes del despido`],respuesta_corta:`La empresa **no puede** terminar su contrato por una falta por su cuenta: debe **solicitar** visto bueno al Inspector del Trabajo, que es quien resuelve, tras un trámite en el que usted tiene derecho a defenderse. Terminar el contrato sin visto bueno aprobado equivale a despido intempestivo, con las indemnizaciones que la ley establece.`,respuesta_extendida:`### Tres precisiones que evitan malentendidos

1. **La empresa no da el visto bueno: lo solicita.** Quien resuelve es la autoridad de trabajo.
2. **Terminar el contrato sin visto bueno aprobado, invocando una falta, equivale a despido intempestivo**, con las indemnizaciones correspondientes (parámetros \`despido_intempestivo_indemnizacion_minima\`, \`despido_intempestivo_meses_por_anio\`, \`despido_intempestivo_tope_meses\`) más la bonificación por desahucio (parámetro \`desahucio_bonificacion_porcentaje\`).
3. **El visto bueno también lo puede pedir usted contra la empresa** (parámetro \`visto_bueno_causales_trabajador\`). VERTIENTE reconoce ese derecho y **no disuade a nadie de ejercerlo**.

### Qué sostiene una solicitud

Una solicitud sin expediente se cae ante el Inspector del Trabajo. El expediente mínimo incluye, entre catorce elementos: contrato registrado en el SUT, Reglamento Interno aprobado con constancia de su entrega, descripción de cargo firmada, constancia de la inducción y capacitación sobre la norma incumplida, prueba documental del hecho, testigos identificados, **la notificación de cargos y sus descargos**, el acta de audiencia, el informe de valoración, los antecedentes **vigentes**, y el informe de Legal y Cumplimiento.

### Verificaciones obligatorias antes de solicitar

Embarazo o lactancia (parámetro \`estabilidad_embarazo_lactancia\`), representación de los trabajadores (parámetro \`estabilidad_dirigente_sindical\`), denuncia o reclamo a la autoridad en los últimos 6 meses (filtro antirrepresalia), discapacidad acreditada o condición de sustituto (parámetro \`inclusion_discapacidad_porcentaje\`). En todos esos casos hay informe previo obligatorio de Legal y Cumplimiento.

### Si el visto bueno se niega

Usted **se reincorpora a sus funciones**, no se registra antecedente por ese hecho, y queda prohibido todo trato diferenciado o reasignación desfavorable posterior, con seguimiento de Relaciones Laborales durante 6 meses.

> Los plazos del trámite ante el Inspector del Trabajo **no constan verificados** en el registro de parámetros, así que no se los informo: eso lo confirma Legal y Cumplimiento sobre la norma vigente.

Fuente: Política de Disciplina, sección 13; Reglamento Interno de Trabajo, Art. 106. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`visto_bueno_causales_empleador`,`visto_bueno_causales_trabajador`,`despido_intempestivo_indemnizacion_minima`,`despido_intempestivo_meses_por_anio`,`despido_intempestivo_tope_meses`,`desahucio_bonificacion_porcentaje`,`estabilidad_embarazo_lactancia`,`estabilidad_dirigente_sindical`,`inclusion_discapacidad_porcentaje`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 13 — Visto bueno`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si su consulta es sobre un caso concreto en curso —propio o de alguien más—, dígamelo y lo escalo a la Jefatura de Administración de Personal con Legal y Cumplimiento, que lo contactan en 2 días hábiles.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`visto bueno`,`despido`,`terminacion`,`inspector del trabajo`,`derechos`],errores_frecuentes:[`Creer que un supervisor o un jefe de CD puede decidir una terminación: no puede.`,`Creer que acumular amonestaciones lleva automáticamente a una terminación: las causales no se eligen, se configuran o no.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-270`,titulo:`¿Yo puedo pedir visto bueno contra la empresa?`,dominio:`etica_conducta_disciplina`,subdominio:`Visto bueno y terminación`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:15,volumen_consultas_mes_estimado:15,tipo_atomo:`normativo`,pregunta_canonica:`¿El colaborador puede solicitar visto bueno contra el empleador?`,variantes_pregunta:[`puedo pedir visto bueno contra la empresa`,`el trabajador puede pedir visto bueno?`,`que hago si la empresa incumple conmigo`,`donde se tramita el visto bueno del trabajador`],respuesta_corta:`Sí, es un derecho suyo y VERTIENTE lo reconoce expresamente: existen causales que el colaborador puede invocar (parámetro visto_bueno_causales_trabajador) y el trámite se sustancia ante el Inspector del Trabajo. Nadie aquí va a disuadirlo de ejercerlo.`,respuesta_extendida:`### Lo que la política dice, literalmente

> «El visto bueno también lo puede pedir el colaborador contra la empresa. VERTIENTE reconoce ese derecho y **no** disuade a nadie de ejercerlo. Si un colaborador consulta sobre esa vía, se le informa que existe, ante quién se tramita, y se lo deriva al canal humano correspondiente.»

### Qué le puedo confirmar

| Elemento | Estado |
|---|---|
| Que la figura existe y es un derecho del trabajador | Confirmado (parámetro \`visto_bueno_causales_trabajador\`) |
| Ante quién se tramita | El **Inspector del Trabajo** |
| Que ejercerla no puede generarle represalia | Confirmado: usar el procedimiento disciplinario como represalia contra quien reclamó un derecho o acudió a la autoridad está terminantemente prohibido |
| Redacción exacta de las causales y plazos del trámite | **Pendiente de verificación.** No se los invento: eso lo confirma Legal y Cumplimiento sobre la norma vigente |

### Y en paralelo

Acudir al Ministerio del Trabajo, al IESS o a la autoridad competente es un derecho que la empresa **no puede condicionar ni interferir**, y hacerlo no retrasa ni sustituye la atención interna de su reclamo.

Fuente: Política de Disciplina, secciones 5.9 y 13.1; parámetro \`visto_bueno_causales_trabajador\`. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`visto_bueno_causales_trabajador`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 13.1 — Qué es y qué no es el visto bueno`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta. La Jefatura de Legal y Cumplimiento lo contacta en 2 días hábiles con la información del trámite. Nada de lo que me consulte se comparte con su jefatura.`,escalamiento:{requerido:!0,rol:`Jefatura de Legal y Cumplimiento`,motivo:`Consulta sobre una vía de terminación por causa imputable al empleador. VERA confirma que el derecho existe y ante quién se tramita, no informa plazos no verificados y no valora ningún caso concreto.`},etiquetas:[`visto bueno`,`derechos`,`inspector del trabajo`,`trabajador`],errores_frecuentes:[],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-271`,titulo:`¿Es cierto que si falto 3 días me botan?`,dominio:`etica_conducta_disciplina`,subdominio:`Faltas y escala de sanciones`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:39,volumen_consultas_mes_estimado:39,tipo_atomo:`normativo`,pregunta_canonica:`¿Cuántas faltas injustificadas habilitan una causal de terminación y cómo se cuentan?`,variantes_pregunta:[`si falto 3 dias me botan?`,`cuantas faltas seguidas puedo tener`,`cuantos dias puedo faltar sin justificar`,`es verdad que a los 3 dias te sacan`,`me pueden botar por faltar`],respuesta_corta:`No es automático. Existe un umbral de faltas injustificadas en el mes que puede habilitar la solicitud de visto bueno (parámetro visto_bueno_faltas_injustificadas), pero **ninguna falta se declara injustificada sin requerirle antes por escrito el descargo y darle plazo para presentar justificativos**. Y la decisión final no la toma la empresa: la resuelve el Inspector del Trabajo.`,respuesta_extendida:`### Por qué la cifra sola es engañosa

Decir «tres días y te vas» es técnicamente aproximado y **materialmente falso**, porque omite todo lo que tiene que pasar antes:

| Requisito | Contenido |
|---|---|
| Que la falta sea **injustificada** | Y eso no lo decide nadie por su cuenta: requiere requerimiento escrito previo y plazo para justificar |
| Búsqueda activa de la persona | Día 1: intento de contacto telefónico con constancia. Día 2: segundo intento y mensaje escrito. Día 3: **requerimiento formal por escrito** al domicilio registrado y por canal digital, con 3 días hábiles para justificar, consultando al servicio médico si hay certificado en trámite |
| Debido proceso completo | Notificación de cargos, descargos, audiencia, resolución motivada |
| Autorización del Inspector del Trabajo | La empresa **solicita**; la autoridad resuelve |

### La regla firme de VERTIENTE

> *Ninguna falta se declara injustificada sin antes haber requerido por escrito el descargo del colaborador y haberle dado un plazo para presentar justificativos.* Hay razones frecuentes y legítimas detrás de una ausencia sin aviso: hospitalización, accidente, detención, emergencia familiar, pérdida del teléfono.

### Advertencia sobre la cifra

El parámetro \`visto_bueno_faltas_injustificadas\` está marcado como **pendiente de verificación** en cuanto a su redacción exacta: si los días deben ser consecutivos y cómo se cuenta el período mensual no está resuelto en el registro. Por eso no le doy el número como si fuera una regla mecánica; el dato lo confirma Legal y Cumplimiento.

Fuente: Política de Disciplina, secciones 14.5 y 13; Reglamento Interno, Art. 105 literal a; parámetro \`visto_bueno_faltas_injustificadas\`. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`visto_bueno_faltas_injustificadas`,`licencia_enfermedad_propia_subsidio`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.5 — Ausencia injustificada prolongada`,articulo:`Art. 105, literal a`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si tiene una ausencia por justificar, entregue el certificado o el respaldo al Analista de Administración de Personal apenas lo tenga, y guarde constancia de la entrega.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`faltas injustificadas`,`ausencia`,`visto bueno`,`derechos`],errores_frecuentes:[`Creer que la falta se declara injustificada automáticamente: antes debe requerírsele el descargo por escrito.`,`Creer que la empresa puede terminar el contrato por su cuenta al llegar al umbral.`],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-272`,titulo:`Ya hice algo que creo que estuvo mal, ¿qué me va a pasar?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`ambar`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:46,volumen_consultas_mes_estimado:46,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué consecuencia tiene una conducta que yo ya realicé?`,variantes_pregunta:[`ya hice algo que creo que esta mal, que me pasa?`,`me equivoque ayer, me van a sancionar?`,`cometi una falta, cual es el castigo`,`que sancion me toca por lo que hice`,`que va a pasar conmigo despues de lo que paso`],respuesta_corta:`No le voy a decir si eso fue una falta ni qué sanción correspondería: eso lo resuelve quien tiene competencia, después de escucharlo a usted. Lo que sí le confirmo: ninguna medida se aplica sin requerimiento escrito previo, usted tiene plazo para presentar descargos y justificativos, puede ir acompañado, puede pedir reconsideración, y todo antecedente caduca.`,respuesta_extendida:`### Por qué no le anticipo un resultado

Hay dos respuestas que están prohibidas por igual, y **la segunda es la más peligrosa porque suena amable**:

| Frase prohibida | Por qué |
|---|---|
| «Te van a sancionar» / «eso es una falta grave» | Prejuzga sobre un hecho que nadie ha valorado todavía y contamina la imparcialidad de quien debe resolver |
| **«No te preocupes, eso no es nada»** | Es una promesa de resultado y le quita a usted la razón para preparar su descargo, buscar sus respaldos o pedir acompañamiento. La respuesta tranquilizadora es la que deja indefenso |

### Lo que sí le sirve ahora mismo

1. **Nada se aplica sin requerimiento escrito previo.** Si hay un caso, usted lo va a saber por escrito, con hechos concretos y el literal que los tipifica.
2. **Tiene 3 días laborables** desde esa notificación para su descargo, prorrogables a 5 a pedido motivado.
3. **Puede aportar pruebas y testigos**, y **puede ir acompañado** por un compañero de su elección.
4. **La carga de la prueba es de la empresa**, no suya.
5. **Reconocer el hecho y repararlo antes de ser requerido atenúa**; ocultarlo agrava. Es la única decisión que hoy está en sus manos.
6. **Si le abren un caso y termina archivado, no queda antecedente.**

### Reúna sus respaldos hoy

Fotos con fecha, mensajes, guías, actas, testigos, registros del sistema, condiciones del día. Se consiguen mejor ahora que en tres semanas.

Fuente: Reglamento Interno de Trabajo, Art. 101 y Art. 109; Política de Disciplina, secciones 5.6, 5.7 y 11.2; Alcance del Consultor Virtual, sección 5.10. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/09-alcance-consultor-virtual.md`,seccion:`Sección 5.10 — Frontera entre orientación disciplinaria y prejuzgamiento`,articulo:`Art. 109`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta y la derivé a la Jefatura de Relaciones Laborales y Disciplina, que lo contacta en 3 días hábiles. Mientras tanto, reúna sus respaldos: eso sí depende de usted.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Consulta sobre un hecho propio ya ocurrido. VERA entrega el procedimiento y los derechos de defensa en abstracto, sin calificar la conducta ni anticipar sanción alguna (docs/09 §5.10).`},etiquetas:[`hecho ocurrido`,`descargos`,`derechos`,`no prejuzgar`,`defensa`],errores_frecuentes:[`Buscar que alguien le confirme que «no pasa nada»: esa respuesta es la que lo deja sin preparar su defensa.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-273`,titulo:`Me llamaron a descargo, ¿qué hago?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`roja`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:37,volumen_consultas_mes_estimado:37,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué debo saber si tengo una audiencia de descargos programada?`,variantes_pregunta:[`me llamaron a descargo el lunes, que hago`,`tengo audiencia disciplinaria, que digo`,`me citaron a relaciones laborales`,`tengo que ir a una reunion de descargos`,`me abrieron un proceso, que hago`],respuesta_corta:`Registré su caso y lo derivé a la Jefatura de Relaciones Laborales y Disciplina; lo contactan en 3 días hábiles. No voy a opinar sobre su caso, pero sí le digo lo que necesita ANTES de la audiencia: puede ir acompañado por un compañero de su elección, puede pedir que su descargo se reciba verbalmente y se transcriba, puede llevar pruebas y testigos, y puede pedir prórroga del plazo si necesita reunir respaldos.`,respuesta_extendida:`### Lo que usted puede hacer antes y durante la audiencia

| Derecho | Cómo se ejerce |
|---|---|
| **Acompañamiento** | Avise al instructor a quién llevará: un compañero de su elección o un representante de los trabajadores. Es un derecho y el instructor está obligado a informárselo |
| **Conocer la imputación y las pruebas** | Debe constar por escrito: hechos con fecha, hora y lugar, el literal que los tipifica, y las pruebas |
| **Plazo y prórroga** | 3 días laborables desde la notificación, **prorrogables a 5** a solicitud motivada suya. Pídala por escrito si necesita reunir respaldos |
| **Descargo verbal transcrito** | Si le resulta más claro hablar que escribir, puede pedirlo |
| **Pruebas y testigos** | Documentos, fotos con fecha, mensajes, registros del sistema, condiciones del día |
| **Grabar** | Pídalo al inicio para que conste en el acta |
| **El acta** | Puede hacer constar su desacuerdo por escrito en la misma acta antes de firmar, o negarse a firmar dejando constancia |
| **Reconsideración** | 3 días laborables desde la notificación de la resolución. Apelar **nunca** puede empeorar su sanción |

### Lo que la empresa tiene prohibido

Sancionar sin descargos · imputarle algo genérico sin hechos concretos · negarle el acompañamiento · usar prueba obtenida de forma ilegítima · presionar su firma · agravar la medida porque usted apeló · descontar de su rol sin autorización escrita.

### Lo que yo no hago

**No valoro su caso, no le digo qué decir y no anticipo ningún resultado.** Asesorarlo sobre qué declarar sería estrategia de defensa, y eso no me corresponde. Lo que sí me corresponde —y no puedo callar— es que usted conozca sus derechos a tiempo.

Fuente: Reglamento Interno de Trabajo, Art. 101, 109 y 110; Política de Disciplina, secciones 5.7 y 16. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Procedimiento de descargos`,articulo:`Art. 109`},calculadora:null,datos_requeridos:[],siguiente_paso:`El caso quedó registrado con número y Relaciones Laborales lo contacta en 3 días hábiles. Si su audiencia es antes de ese plazo, dígamelo y marco el caso como urgente. Si prefiere otra instancia o un canal reservado, también se lo doy.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Procedimiento disciplinario abierto contra el colaborador. VERA entrega el piso informativo obligatorio —procedimiento y derechos de defensa en abstracto— y escala sin opinar sobre el fondo.`},etiquetas:[`audiencia`,`descargos`,`proceso abierto`,`derechos`,`escalamiento`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-274`,titulo:`¿El procedimiento disciplinario es confidencial?`,dominio:`etica_conducta_disciplina`,subdominio:`Debido proceso y derechos de defensa`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:16,volumen_consultas_mes_estimado:16,tipo_atomo:`normativo`,pregunta_canonica:`¿Quién puede enterarse de que tengo un procedimiento disciplinario?`,variantes_pregunta:[`el proceso disciplinario es confidencial?`,`quien se entera de mi sancion`,`pueden comentar mi caso con el equipo`,`mi expediente quien lo ve`],respuesta_corta:`Sí, es confidencial. No se comenta en el grupo de la ruta, no se anuncia en la formación del CD y no se publica en cartelera. El acceso al expediente con su nombre está restringido a Relaciones Laborales, Legal y Cumplimiento y la Gerencia de RR.HH.`,respuesta_extendida:`### Qué protege la confidencialidad

- **La sanción de una persona no es material de ejemplo público** con nombre y apellido.
- Un supervisor **nunca** comenta el caso de una persona con el resto del equipo, ni anuncia una sanción antes de que exista la resolución. Está en la lista de lo que un supervisor no hace.
- Los tableros y reportes de gestión muestran **únicamente datos agregados y anonimizados**, y ningún corte se publica si agrupa menos de ocho colaboradores, precisamente para que nadie sea identificable.

### Qué sí se usa, y para qué

La data disciplinaria agregada alimenta campañas preventivas: si en un CD se disparan los incumplimientos de un procedimiento, la primera hipótesis es que **el procedimiento falla o no se entiende**, no que ese CD «tiene peor gente». Está expresamente prohibido construir listas de «colaboradores riesgosos» o alimentar decisiones de promoción, traslado o desvinculación con puntajes derivados del historial disciplinario.

### Y sus consultas a VERA

Una consulta preventiva es el escalón 0: **no es sanción y no genera registro personal ni antecedente**. Preguntar antes de actuar no aparece en su expediente ni se informa a su jefatura.

Fuente: Política de Disciplina, secciones 5.8, 15.4 y 17.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 5.8 — Confidencialidad`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si su caso se comentó públicamente, puede reportarlo a la Jefatura de Relaciones Laborales y Disciplina o por la Línea Ética.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`confidencialidad`,`expediente`,`privacidad`,`datos`,`derechos`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-275`,titulo:`¿Qué es la Línea Ética y cómo reporto algo?`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:43,volumen_consultas_mes_estimado:43,tipo_atomo:`normativo`,pregunta_canonica:`¿Cómo reporto una conducta indebida y qué canales existen?`,variantes_pregunta:[`como reporto algo indebido`,`que es la linea etica`,`donde denuncio una irregularidad`,`a quien le aviso si veo algo mal`,`numero de la linea etica`,`como hago una denuncia en la empresa`],respuesta_corta:`Hay cinco canales y todos funcionan: teléfono 1800 837 843 opción 4 (24 horas), correo linea.etica@vertiente.com.ec, formulario web del portal del colaborador (permite reporte anónimo), buzón físico en cada una de las 11 instalaciones, y presencial con cita reservada. La administra Control Interno y Auditoría, con independencia de la línea de reporte de quien se denuncia.`,respuesta_extendida:`### Los canales

| Canal | Datos | Disponibilidad |
|---|---|---|
| Teléfono | 1800-VERTIENTE (1800 837 843), opción 4 | 24 horas, todos los días |
| Correo | linea.etica@vertiente.com.ec | Permanente |
| Formulario web | Portal del colaborador → «Línea Ética» | Permanente, **permite reporte anónimo** |
| Buzón físico | Uno en cada una de las 11 instalaciones, con llave en custodia de Control Interno | Apertura semanal |
| Presencial | Jefatura de Relaciones Laborales y Disciplina, o Jefatura de Control Interno y Auditoría | Con cita reservada |

### Qué garantiza el canal

1. **Anonimato disponible.** Puede reportar sin dar su nombre; un reporte anónimo se investiga igual, aunque es más difícil de sustanciar sin posibilidad de repreguntar.
2. **Confidencialidad**, incluso si se identifica: su identidad la conocen solo quienes investigan, y no se revela al denunciado salvo que sea legalmente indispensable.
3. **No represalia, sin excepciones.**
4. **Buena fe**: la protección ampara a quien reporta de buena fe **aunque el hecho no se confirme**.
5. **Debido proceso para el denunciado**: nadie es sancionado sin conocer los hechos y presentar descargo.
6. **No investigue por su cuenta.** Reportar es su rol; investigar no. Una investigación improvisada destruye evidencia y expone a personas.

### Independencia del canal

Los reportes que involucran a una jefatura de Control Interno o a una gerencia se dirigen directamente al Director General; los que involucran al Director General, al Directorio. Si la denuncia involucra a RR.HH., existe un canal alterno ante la Dirección General.

Fuente: Código de Ética, Canal de denuncias — Línea Ética VERTIENTE. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Canal de denuncias: la Línea Ética VERTIENTE`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Elija el canal que le resulte más cómodo. Si el tema involucra a su jefatura directa, use el formulario web anónimo o el buzón físico: la Línea Ética no depende de su línea de reporte.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`linea etica`,`denuncia`,`canal`,`control interno`,`anonimo`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-276`,titulo:`¿Puedo denunciar sin dar mi nombre?`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:27,volumen_consultas_mes_estimado:27,tipo_atomo:`normativo`,pregunta_canonica:`¿La denuncia anónima se investiga igual que una denuncia con nombre?`,variantes_pregunta:[`puedo denunciar anonimo`,`si no doy mi nombre investigan igual?`,`denuncia sin identificarme`,`me van a descubrir si denuncio`,`la empresa sabe quien denuncio?`],respuesta_corta:`Sí. El anonimato está garantizado: el formulario web y el buzón físico permiten reportar sin dar su nombre, y un reporte anónimo se investiga igual. Si se identifica, su identidad la conocen solo quienes investigan y no se revela al denunciado salvo que sea legalmente indispensable.`,respuesta_extendida:`### Anónimo o confidencial: las dos opciones sirven

| Modalidad | Qué implica |
|---|---|
| **Anónimo** | No da su nombre. Se investiga igual. Limitación real: sin posibilidad de repreguntar, algunos hechos son más difíciles de sustanciar |
| **Confidencial** | Da su nombre, pero su identidad queda restringida a quienes investigan. Permite pedirle aclaraciones y ampliar la información |

### Lo que nadie puede hacer

- Revelar su identidad al denunciado, salvo que sea legalmente indispensable.
- Tomar represalia contra usted: es, **por sí sola, una falta de máxima gravedad**, independiente del resultado del reporte original (Art. 105 literal q).
- Notificar a su jefatura directa que usted denunció, cuando la denuncia es de acoso, discriminación o represalia: está expresamente prohibido.

### Lo que ayuda a que prospere

Hechos concretos: fecha, hora, lugar, qué ocurrió, quiénes estaban. **No necesita pruebas para reportar: necesita contar lo que pasó.** Reunir pruebas no es su trabajo.

Fuente: Código de Ética, Reglas del canal; Reglamento Interno de Trabajo, Art. 105 literal q. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Reglas del canal`,articulo:`Art. 105, literal q`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si quiere anonimato, use el formulario web del portal o el buzón físico de su instalación. Si quiere que puedan repreguntarle, identifíquese: su identidad queda restringida a quienes investigan.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`denuncia`,`anonimato`,`confidencialidad`,`linea etica`,`proteccion`],errores_frecuentes:[`Creer que hay que llevar pruebas para poder denunciar: no se necesitan para reportar.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-277`,titulo:`¿Qué pasa después de que denuncio, y en cuánto tiempo?`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:22,volumen_consultas_mes_estimado:22,tipo_atomo:`normativo`,pregunta_canonica:`¿Cuáles son los plazos comprometidos después de presentar una denuncia?`,variantes_pregunta:[`que pasa despues de denunciar`,`en cuanto tiempo me responden una denuncia`,`plazos de la linea etica`,`denuncie y no me dicen nada`,`me van a informar el resultado?`],respuesta_corta:`Acuse de recibo y número de caso en 2 días hábiles; clasificación de gravedad y medidas de protección inmediatas si corresponde, en 5 días hábiles; investigación y descargos, 30 días hábiles (prorrogables 15 con motivo comunicado a usted); resolución y notificación del cierre, 5 días hábiles desde el informe final; y seguimiento de medidas correctivas durante 90 días.`,respuesta_extendida:`### Los plazos comprometidos

| Etapa | Plazo | Responsable |
|---|---|---|
| Acuse de recibo y número de caso | **2 días hábiles** | Control Interno y Auditoría |
| Clasificación de gravedad y medidas de protección inmediatas | **5 días hábiles** | Control Interno con RR.HH. y Legal |
| Investigación y descargos | **30 días hábiles** | Equipo investigador asignado |
| Prórroga excepcional, motivada y **comunicada al denunciante** | Hasta 15 días hábiles | Comité de Ética |
| Resolución y notificación del cierre | **5 días hábiles** desde el informe final | Comité de Ética |
| Seguimiento de medidas correctivas | **90 días** | Control Interno |

### En casos de acoso, discriminación o violencia

El procedimiento es distinto y más rápido en su arranque: medidas de protección el **mismo día**, apertura formal en 2 días hábiles, investigación de 15 días hábiles prorrogables 10 por resolución motivada, y resolución en 5 días hábiles. Lo conoce el **Comité de Convivencia, Ética y Prevención del Acoso**, no la jefatura directa.

### El Comité de Ética

Lo integran la Gerencia de RR.HH., la Gerencia de Legal y Cumplimiento, la Jefatura de Control Interno y Auditoría, y un cuarto miembro rotativo de un área operativa sin relación con el caso. Sesiona una vez al mes, y de forma extraordinaria cuando la gravedad lo exija.

> Estos plazos son un **compromiso interno de VERTIENTE**, no un plazo legal. Los procedimientos que deriven en sanción disciplinaria se rigen además por el Reglamento Interno y por la norma laboral aplicable.

Fuente: Código de Ética, Qué pasa después: plazos comprometidos; Política de Disciplina, sección 14.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Qué pasa después: plazos comprometidos`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si pasaron los plazos y no recibió respuesta, reclame con su número de caso a la Jefatura de Control Interno y Auditoría: el acuse con número es parte del compromiso.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`denuncia`,`plazos`,`comite de etica`,`investigacion`,`linea etica`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-278`,titulo:`¿Me pueden tomar represalias por denunciar o por reclamar?`,dominio:`etica_conducta_disciplina`,subdominio:`Protección contra represalias`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:35,volumen_consultas_mes_estimado:35,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué protección tengo si denuncio, reclamo un derecho o declaro como testigo?`,variantes_pregunta:[`me pueden sancionar por denunciar?`,`que pasa si reclamo un derecho`,`tengo proteccion si declaro como testigo`,`me van a cambiar de ruta por haber denunciado`,`represalias por ir al ministerio del trabajo`],respuesta_corta:`Está terminantemente prohibido. Tomar represalia contra quien denuncia, reclama un derecho, consulta al Ministerio del Trabajo o al IESS, participa en representación de los trabajadores o declara como testigo es **falta muy grave por sí sola**, independientemente del resultado de su reporte. Y toda sanción propuesta contra usted en los 6 meses siguientes pasa por revisión previa obligatoria de Legal y Cumplimiento.`,respuesta_extendida:`### Quiénes están protegidos

Quien presentó una denuncia de acoso, discriminación o violencia laboral · quien reportó un incumplimiento por el canal de ética · **quien reclamó un derecho laboral, consultó al Ministerio del Trabajo o al IESS, o solicitó visto bueno** · quien participa en actividades de representación de los trabajadores (parámetro \`estabilidad_dirigente_sindical\`) · quien declaró como testigo en un procedimiento.

### El filtro antirrepresalia

Toda sanción propuesta contra una persona que en los **seis meses anteriores** realizó alguno de esos actos requiere **revisión previa obligatoria de Legal y Cumplimiento**, que verifica que la causa sea real y ajena al acto protegido. Queda registrado en el expediente.

En casos de acoso la protección es reforzada: toda medida disciplinaria contra la denunciante o contra los testigos dentro de los **12 meses** siguientes requiere aprobación expresa del Comité.

### Qué cuenta como represalia

No solo una sanción. También: cambio de ruta, de zona o de turno con fin punitivo · reasignación desfavorable · hostilidad o cambio de trato · sobrecarga intencional · negar una promoción o un beneficio · cualquier consecuencia que aparezca después del reporte y no tenga otra explicación.

Y hay una regla del Código de Ética para quien lidera: **proteger a quien reporta**, vigilando activamente que no haya cambios de ruta, de turno, de trato o de carga después de un reporte.

### Si cree que está ocurriendo

Dígamelo: eso no lo evalúo yo, lo escalo de inmediato al canal reservado. También puede ir directo al Comité de Ética o a la Gerencia de RR.HH.

Fuente: Política de Disciplina, secciones 5.9 y 14.1; Código de Ética, Reglas del canal y Deberes de quien lidera; Reglamento Interno, Art. 105 literal q. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`estabilidad_dirigente_sindical`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 5.9 — No represalia`,articulo:`Art. 105, literal q`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si ya está ocurriendo algo que usted lee como represalia, dígamelo y lo escalo hoy mismo al canal reservado del Comité de Ética, con contacto humano en 48 horas.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`represalia`,`proteccion`,`denuncia`,`testigo`,`derechos`],errores_frecuentes:[`Creer que la protección depende de que la denuncia se compruebe: ampara a quien reporta de buena fe aunque el hecho no se confirme.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-279`,titulo:`Denuncié y ahora me abrieron un proceso disciplinario`,dominio:`etica_conducta_disciplina`,subdominio:`Protección contra represalias`,zona:`roja`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:12,volumen_consultas_mes_estimado:12,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué hago si después de denunciar me abrieron un procedimiento en mi contra?`,variantes_pregunta:[`denuncie a mi jefe y ahora me abrieron un proceso`,`despues de reclamar me sancionaron`,`me estan tomando represalia por denunciar`,`desde que denuncie me cambiaron de turno`,`reclame y ahora me tratan distinto`],respuesta_corta:`Registré su caso y lo escalé al Comité de Ética con copia a la Gerencia de RR.HH.; el contacto humano es dentro de 48 horas. No voy a valorar su caso, pero sí le confirmo algo que corresponde saber ya: toda sanción propuesta contra quien denunció en los 6 meses anteriores **pasa por revisión previa obligatoria de Legal y Cumplimiento**, y sancionar a quien denunció sin ese filtro es uno de los errores que anulan una sanción.`,respuesta_extendida:`### Lo que la norma establece, en abstracto

| Regla | Contenido |
|---|---|
| **Filtro antirrepresalia** | Toda sanción propuesta contra quien denunció, reclamó un derecho, acudió a la autoridad o declaró como testigo **en los seis meses anteriores** requiere revisión previa obligatoria de Legal y Cumplimiento, que verifica que la causa sea real y ajena al acto protegido |
| **Protección reforzada en acoso** | Toda medida disciplinaria contra la denunciante o los testigos dentro de los **12 meses** siguientes requiere aprobación expresa del Comité |
| **Nulidad** | Sancionar a quien denunció, reclamó o testificó sin filtro antirrepresalia es uno de los dieciocho errores que dejan sin efecto la sanción y la eliminan del expediente |
| **Falta autónoma** | Tomar represalia contra quien denuncia o declara es falta muy grave **por sí sola**, con independencia del resultado del reporte original (Art. 105 literal q) |

### Sus derechos en el procedimiento abierto

Son los mismos de cualquier procedimiento y no se reducen: notificación escrita con hechos concretos, plazo para descargos, pruebas y testigos, acompañamiento en la audiencia, resolución motivada y reconsideración.

### Lo que yo no hago

No evalúo si lo que ocurrió es o no una represalia, no califico la conducta de nadie y no anticipo ningún desenlace. Esa valoración le corresponde al Comité de Ética y a Legal y Cumplimiento, con derecho de defensa de ambas partes.

Fuente: Política de Disciplina, secciones 5.9, 14.1 y 16; Reglamento Interno, Art. 105 literal q. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 5.9 — No represalia`,articulo:`Art. 105, literal q`},calculadora:null,datos_requeridos:[],siguiente_paso:`El caso quedó registrado con número y con acceso restringido. El contacto humano es dentro de 48 horas. Su jefatura directa no es notificada de este registro. Si necesita hablar con alguien antes, la Gerencia de Recursos Humanos también recibe directamente.`,escalamiento:{requerido:!0,rol:`Comité de Ética (Línea Ética VERTIENTE)`,motivo:`Posible represalia tras una denuncia o un reclamo, con procedimiento disciplinario abierto. VERA no valora el fondo: acusa recibo, entrega el marco normativo del filtro antirrepresalia y escala con copia a la Gerencia de Recursos Humanos.`},etiquetas:[`represalia`,`denuncia`,`proceso abierto`,`escalamiento`,`comite de etica`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-280`,titulo:`Me está pasando algo de acoso o discriminación`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`roja`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:17,volumen_consultas_mes_estimado:17,tipo_atomo:`normativo`,pregunta_canonica:`¿A dónde acudo si estoy viviendo una situación de acoso, discriminación o violencia en el trabajo?`,variantes_pregunta:[`me estan acosando en el trabajo`,`mi jefe me hostiga`,`me discriminan por mi origen`,`me tocan sin permiso en el trabajo`,`me condicionan la ruta por salir con alguien`,`estoy viviendo violencia laboral`],respuesta_corta:`Registré su caso y lo escalé al Comité de Ética, con contacto humano dentro de 48 horas y acceso restringido: su jefatura directa no es notificada. No le voy a pedir detalles ni voy a opinar sobre lo que me cuenta. Lo que sí le confirmo: las medidas de protección se adoptan **desde la recepción y sin prejuzgar**, y quien se mueve de turno o de reporte es la persona denunciada, nunca usted, salvo que usted lo pida.`,respuesta_extendida:`### Cómo se tramita, para que sepa qué esperar

| Regla | Contenido |
|---|---|
| **Canal** | Canal reservado de ética y convivencia, administrado por la Gerencia de RR.HH. Recibe denuncias escritas, verbales, presenciales o remotas. Hay canal alterno ante la Dirección General si la denuncia involucra a RR.HH. |
| **Órgano competente** | **Comité de Convivencia, Ética y Prevención del Acoso**, con RR.HH., Legal y Cumplimiento, un representante de los trabajadores y un profesional de bienestar o trabajo social. Debe haber al menos una mujer en el comité |
| **Quién queda fuera** | La jefatura directa de ambas partes, y cualquier miembro con relación personal o de interés |
| **Protección** | Medidas inmediatas **desde la recepción y sin prejuzgar**: separación física, cambio de turno o de reporte **de la persona denunciada**, acompañamiento psicológico y separación preventiva remunerada si el riesgo lo justifica |
| **Prohibición de confrontación** | **Está prohibido citarlos a una misma reunión.** No hay careos ni reuniones de conciliación en casos de acoso |
| **Confidencialidad reforzada** | Expediente de acceso restringido al comité; su filtración es en sí misma falta muy grave |
| **Plazos** | Medidas de protección: mismo día. Apertura formal: 2 días hábiles. Investigación: 15 días hábiles, prorrogables 10. Resolución: 5 días hábiles |
| **Si no se acredita** | Archivo motivado, **sin antecedente para nadie**, y con prohibición expresa de represalia contra quien denunció de buena fe |
| **Vía externa** | Este procedimiento **no impide ni retrasa** su derecho de acudir al Ministerio del Trabajo, a la Fiscalía o a la autoridad competente. La empresa no puede condicionar su atención interna a que usted no acuda |

### Dos cosas más

- **No necesita pruebas para reportar**: necesita contar lo que pasó.
- **Solo se procesa una denuncia como falsa cuando se prueba que fue deliberadamente falsa**, no cuando simplemente no se acreditó. Castigar denuncias no probadas silenciaría a las víctimas reales, y la política lo dice así.

Fuente: Política de Disciplina, sección 14.1; Código de Ética, Capítulo VIII.1; Alcance del Consultor Virtual, sección 5.5. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.1 — Acoso laboral y acoso sexual`,articulo:`Art. 95`},calculadora:null,datos_requeridos:[],siguiente_paso:`El caso quedó registrado con número, con acceso restringido al Comité de Ética. El contacto humano es dentro de 48 horas y su jefatura directa no es notificada. Si prefiere acudir directamente, la Gerencia de Recursos Humanos y la Línea Ética (1800 837 843 opción 4, 24 horas) reciben en cualquier momento.`,escalamiento:{requerido:!0,rol:`Comité de Ética (Línea Ética VERTIENTE)`,motivo:`Zona roja absoluta: acoso, discriminación o violencia. VERA no pide detalles, no opina sobre el fondo y no sugiere cómo actuar frente a la otra persona. Acuse empático, canal reservado, plazo de 48 horas y registro con acceso restringido.`},etiquetas:[`acoso`,`discriminacion`,`violencia`,`comite de etica`,`escalamiento`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-281`,titulo:`Un compañero me contó que le está pasando algo`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`roja`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:11,volumen_consultas_mes_estimado:11,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué hago si un compañero me cuenta que está viviendo una situación de acoso o abuso?`,variantes_pregunta:[`un compañero me conto que le acosan`,`a una compañera le esta pasando algo, que hago`,`me contaron algo grave de otra persona`,`puedo denunciar por otro`,`como ayudo a un compañero que sufre acoso`],respuesta_corta:`Registré una alerta sin identificar a nadie y la escalé al canal reservado. No le voy a pedir el nombre de esa persona ni su área, y no abro un expediente a su nombre: nadie denuncia por otro sin su voluntad. Le doy los canales para que **ella** los use, redactados para que pueda reenviárselos tal cual.`,respuesta_extendida:`### Lo que puede reenviarle, tal cual

> «La Línea Ética de VERTIENTE recibe reportes las 24 horas al 1800 837 843, opción 4; también por linea.etica@vertiente.com.ec, por el formulario web del portal del colaborador —que permite reporte anónimo— o en el buzón físico de la instalación. En casos de acoso, discriminación o violencia lo atiende el Comité de Convivencia, Ética y Prevención del Acoso, no la jefatura directa: las medidas de protección se adoptan desde la recepción y sin prejuzgar, y quien se mueve de turno o de reporte es la persona denunciada. No hacen falta pruebas para reportar.»

### Por qué no abro un caso a nombre de ella

Abrir un expediente sobre alguien que no lo pidió es, en sí mismo, una exposición. Lo que sí queda registrado es una **alerta de categoría sin persona identificada**, que alimenta la estadística del Comité de Ética sin señalar a nadie.

### Lo que yo no hago, y usted tampoco debería

- No le pido el nombre, el área, la ruta ni la instalación de esa persona.
- No le pido que la convenza de denunciar ni que la acompañe a hablar con su jefe.
- **No investigue por su cuenta.** Reportar es un rol; investigar no. Una investigación improvisada destruye evidencia y expone a personas.

### La excepción

Si lo que me describe es **riesgo de vida, violencia en curso o autolesión**, se activa el canal humano de inmediato aunque no haya nombre, para que el Servicio Médico Ocupacional defina cómo llegar a esa persona. Dígamelo si es el caso.

Fuente: Alcance del Consultor Virtual, secciones 5.1.3 y 5.5; Código de Ética, Reglas del canal. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/09-alcance-consultor-virtual.md`,seccion:`Sección 5.1.3 — Regla de la consulta en tercera persona`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Quedó registrada la alerta de categoría, sin ningún dato que identifique a esa persona. Reenvíele los canales tal como se los escribí. Si lo que ocurre es riesgo de vida o violencia en curso, dígamelo ahora y activo el canal humano de inmediato.`,escalamiento:{requerido:!0,rol:`Comité de Ética (Línea Ética VERTIENTE)`,motivo:`Consulta en tercera persona sobre un hecho de zona roja. Se clasifica por el hecho, no por el pronombre. Se registra alerta de categoría sin persona identificada, con el consultante como titular; no se abre expediente a nombre de la persona afectada ni se registra dato alguno que permita identificarla.`},etiquetas:[`tercera persona`,`acoso`,`canal`,`alerta`,`escalamiento`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-282`,titulo:`Me denunciaron a mí, ¿qué derechos tengo?`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`ambar`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:14,volumen_consultas_mes_estimado:14,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué garantías tiene la persona señalada en una denuncia?`,variantes_pregunta:[`me denunciaron, que derechos tengo`,`me acusaron de algo que no hice`,`soy el denunciado, que pasa conmigo`,`me señalaron en la linea etica`],respuesta_corta:`Las mismas garantías del debido proceso, completas: conocer por escrito los hechos que se le imputan, conocer las pruebas, presentar descargo, aportar pruebas y testigos, ser acompañado y recibir resolución motivada. Nadie es sancionado sin esa oportunidad, y si la denuncia no se acredita el archivo es motivado y sin antecedente para nadie.`,respuesta_extendida:`### Sus garantías

| Garantía | Contenido |
|---|---|
| **Presunción de inocencia** | La carga de la prueba es de la empresa, nunca suya. Frases como «que demuestre que no fue él» están prohibidas en todo documento disciplinario de VERTIENTE |
| **Conocer la imputación** | Por escrito, con hechos concretos: fecha, hora, lugar, conducta observable |
| **Conocer las pruebas** | Las que sustentan la imputación |
| **Descargo** | Plazo cierto, por escrito o verbal transcrito, con pruebas y testigos |
| **Acompañamiento** | Un compañero de su elección o un representante de los trabajadores |
| **Resolución motivada** | Con hechos probados, norma aplicada y razón de la medida |
| **Reconsideración** | Ante la instancia inmediatamente superior; apelar nunca puede empeorar la sanción |
| **Confidencialidad** | El procedimiento no se comenta con el equipo ni se anuncia antes de la resolución |
| **Archivo sin antecedente** | Si no se acredita, el archivo es motivado y no queda antecedente para nadie. Los archivos de casos se conservan precisamente para demostrar que la persona fue investigada y resultó no responsable |

### Una precisión sobre las medidas de protección

Si la denuncia es de acoso, pueden adoptarse medidas de protección **desde la recepción y sin prejuzgar** —separación física, cambio de turno o de reporte, separación preventiva remunerada—. Eso **no es una sanción** y no implica que se haya dado nada por probado.

### Lo que yo no hago

No valoro los hechos, no le digo qué declarar y no anticipo ningún resultado. Lo derivo al rol que tiene competencia para acompañarlo.

Fuente: Código de Ética, Reglas del canal, regla 5; Política de Disciplina, secciones 5.6, 5.7, 12.3 y 14.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Reglas del canal`,articulo:`Art. 101`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta. La Jefatura de Relaciones Laborales y Disciplina lo contacta en 3 días hábiles. Si le llega una notificación de cargos antes, el plazo de descargo corre desde esa notificación: no espere el contacto para responder.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`El colaborador es la persona señalada en una denuncia. VERA entrega el piso informativo de las garantías del debido proceso y deriva, sin valorar los hechos ni anticipar el resultado.`},etiquetas:[`denunciado`,`defensa`,`presuncion de inocencia`,`derechos`,`debido proceso`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-283`,titulo:`Denuncié de buena fe y no se comprobó, ¿me sancionan?`,dominio:`etica_conducta_disciplina`,subdominio:`Protección contra represalias`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:13,volumen_consultas_mes_estimado:13,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué pasa si denuncio algo de buena fe y la investigación no lo acredita?`,variantes_pregunta:[`denuncie y no se comprobo, me sancionan?`,`que pasa si mi denuncia no se prueba`,`me pueden acusar de denuncia falsa`,`y si me equivoque al denunciar`],respuesta_corta:`No. La protección ampara a quien reporta de buena fe **aunque el hecho no se confirme**. Solo se procesa disciplinariamente una denuncia cuando se prueba que fue **deliberadamente falsa**, no cuando simplemente no se acreditó.`,respuesta_extendida:`### La diferencia es decisiva

| Situación | Consecuencia |
|---|---|
| Reportó de buena fe y no se acreditó | **Ninguna.** Archivo motivado, sin antecedente para nadie, con prohibición expresa de represalia |
| Reportó de buena fe y se acreditó | La protección continúa; el procedimiento sigue con el denunciado |
| Denunció **a sabiendas de la falsedad**, probadamente | Falta muy grave (Art. 105 literal q), la misma norma que sanciona la represalia |

La política lo explica sin rodeos: **castigar denuncias no probadas silencia a las víctimas reales.** Por eso el estándar no es «se comprobó o no», sino «hubo o no mala fe probada».

### Y no queda registro en su contra

Si el caso se archiva por no acreditarse, **no hay antecedente para nadie**, ni para usted ni para la persona señalada. Los archivos de casos se conservan justamente para poder demostrarlo.

Fuente: Código de Ética, Reglas del canal, regla 4; Política de Disciplina, secciones 12.3 y 14.1; Reglamento Interno, Art. 105 literal q. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Reglas del canal`,articulo:`Art. 105, literal q`},calculadora:null,datos_requeridos:[],siguiente_paso:`Si tiene dudas antes de reportar, puede hacerlo de forma anónima por el formulario web o el buzón físico. Reportar de buena fe no tiene consecuencias para usted.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`denuncia`,`buena fe`,`proteccion`,`archivo`,`derechos`],errores_frecuentes:[`Creer que si la denuncia no se comprueba uno queda expuesto a sanción: solo la mala fe probada se procesa.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-284`,titulo:`Vi algo indebido de mi jefe, ¿tengo que reportarlo?`,dominio:`etica_conducta_disciplina`,subdominio:`Línea Ética y denuncias`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:20,volumen_consultas_mes_estimado:20,tipo_atomo:`normativo`,pregunta_canonica:`¿Estoy obligado a reportar una conducta indebida aunque la haya cometido mi jefatura?`,variantes_pregunta:[`vi algo mal de mi jefe, lo reporto?`,`tengo obligacion de denunciar lo que veo`,`que hago si el que falla es mi supervisor`,`me da miedo reportar a mi jefe`],respuesta_corta:`Sí, el Código de Ética lo pide expresamente: se reporta una conducta indebida aunque el implicado sea el jefe, y el canal es independiente de su línea de reporte. Puede hacerlo de forma anónima, y quien reporta de buena fe sigue en su puesto, en su ruta y en su turno.`,respuesta_extendida:`### El valor «Coraje para hablar», en conducta observable

| Qué sí se ve | Qué no se ve |
|---|---|
| Se pregunta antes de actuar cuando hay duda ética | «Nadie me dijo que estaba mal» |
| **Se reporta una conducta indebida aunque el implicado sea el jefe** | Silencio comprado con miedo |
| Quien reporta de buena fe **sigue en su puesto, en su ruta y en su turno** | Cambios de ruta, de turno o de trato después de un reporte |
| El líder agradece la mala noticia temprano | Matar al mensajero |

### El canal no pasa por su jefatura

La Línea Ética la administra **Control Interno y Auditoría, con independencia de la línea de reporte del denunciado**. Los reportes que involucran a una jefatura de Control Interno o a una gerencia se dirigen directamente al Director General; los que involucran al Director General, al Directorio.

### Y del otro lado

El Código impone a quien lidera el deber de **escalar, no encubrir**: «un líder que sabe y calla responde como si hubiera participado». Si su jefatura le pide que no reporte algo, eso en sí mismo es materia de la Línea Ética.

### Su protección

Tomar represalia contra quien reporta de buena fe es falta muy grave por sí sola, y toda sanción propuesta contra usted en los seis meses siguientes pasa por el filtro antirrepresalia de Legal y Cumplimiento.

Fuente: Código de Ética, Valor 6, Deberes de quien lidera y Canal de denuncias; Política de Disciplina, sección 5.9. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`Valor 6 — Coraje para hablar`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Use el formulario web del portal (permite anonimato) o el buzón físico de su instalación. Si el hecho involucra riesgo de inocuidad, seguridad o dinero, repórtelo el mismo día.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`reportar`,`jefatura`,`linea etica`,`coraje`,`proteccion`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-285`,titulo:`¿Cómo doy un llamado de atención que no quede nulo?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`verde`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:38,volumen_consultas_mes_estimado:38,tipo_atomo:`normativo`,pregunta_canonica:`¿Cómo se documenta un llamado de atención verbal para que sirva como antecedente?`,variantes_pregunta:[`como doy un llamado de atencion`,`como documento una llamada de atencion`,`sirve si solo le hablo al colaborador?`,`que tiene que tener el acta de un llamado verbal`,`soy supervisor, como corrijo bien a alguien`],respuesta_corta:`En privado, dentro de las 48 horas, sobre un hecho concreto, escuchando primero su versión, diciendo cuál es la norma y dónde está escrita, acordando qué cambia y para cuándo, y dejando acta breve firmada por ambos el mismo día. Sin acta no existe: «yo ya le llamé la atención» no es antecedente de nada.`,respuesta_extendida:`### Las siete reglas

1. **En privado.** Nunca delante de compañeros, clientes o proveedores. El patio de carga con veinte personas no es el lugar.
2. **Dentro de las 48 horas** del hecho. Después pierde efecto y credibilidad.
3. **Sobre un hecho concreto**, no sobre la persona ni sobre su carácter.
4. **Escuchar primero su versión. Siempre.** Puede haber una explicación que cambie todo el cuadro.
5. **Decir cuál es la norma** y dónde está escrita.
6. **Acordar qué cambia** y para cuándo.
7. **Dejar acta breve firmada por ambos**, y subirla al expediente el mismo día.

### El guion, en cuatro movimientos

> **Hecho, sin adjetivos:** «Quiero conversar de algo puntual. El martes 8, la ruta R-12 salió 35 minutos tarde porque llegaste 07h35 y la convocatoria es 07h00. Es la primera vez que lo conversamos formalmente.»
>
> **Escucha, obligatoria:** «Antes de seguir, quiero escucharte: ¿qué pasó ese día?» *(Sin interrumpir. Si aparece una causa externa real y verificable, el caso cambia de naturaleza: puede ser un problema de proceso y no una falta.)*
>
> **La norma:** «El horario de convocatoria está en tu contrato y en el Reglamento Interno. Cuando la ruta sale tarde, las primeras seis tiendas reciben el producto después de su hora de mayor venta.»
>
> **Acuerdo y cierre transparente:** «¿Qué necesitas para llegar a las 07h00? … Esto lo dejo por escrito en un acta breve que firmamos los dos. **No es una sanción**: es el registro de que conversamos. Si no vuelve a pasar en seis meses, el registro caduca y deja de contar. Si vuelve a pasar, el siguiente paso sí sería una amonestación escrita.»

### Por qué la transparencia del cierre importa

Decir «esto que hablamos queda entre nos» cuando sí se va a registrar destruye la confianza **y el valor probatorio del acta**.

Fuente: Política de Disciplina y Debido Proceso, sección 15.1. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 15.1 — Cómo se da un llamado de atención verbal`,articulo:`Art. 106`},calculadora:null,datos_requeridos:[],siguiente_paso:`Use el formato de acta de llamado verbal y súbala al expediente el mismo día. Si tiene dudas sobre la redacción del hecho, consúltelo con la Jefatura de Relaciones Laborales y Disciplina antes de firmarla.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`supervision`,`llamado de atencion`,`acta`,`antecedente`,`guion`],errores_frecuentes:[`Creer que un llamado de atención sin acta sirve como antecedente: no sirve.`,`Dar el llamado en público, lo que además lo expone a usted a un reclamo.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-286`,titulo:`¿Qué no debo decirle a un colaborador al corregirlo?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:21,volumen_consultas_mes_estimado:21,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué frases están prohibidas para una jefatura en una conversación disciplinaria?`,variantes_pregunta:[`que no le puedo decir a un colaborador`,`frases prohibidas para el supervisor`,`puedo decirle una mas y te vas?`,`como no hay que corregir a alguien`],respuesta_corta:`Nada que amenace con un despido que usted no puede ejecutar, que ataque a la persona en vez del hecho, que anuncie descuentos que usted no puede disponer, o que induzca a la renuncia. Cada una de esas frases funda un reclamo y varias anulan la medida.`,respuesta_extendida:`### La tabla de reemplazos

| No decir | Por qué | Decir en su lugar |
|---|---|---|
| «Una más y te vas» | Amenaza de despido que usted no tiene autoridad para ejecutar; funda un reclamo | «El siguiente paso, si se repite, sería una amonestación escrita, que la revisa Relaciones Laborales» |
| «Ya estás en la lista» / «te tengo marcado» | Sugiere persecución y prejuicio | «Este hecho queda registrado. Empezamos de nuevo desde acá» |
| «Tú siempre eres el problema del equipo» | Ataque a la persona; imputación genérica y no tipificable | «Este hecho concreto, de este día, es el que tenemos que corregir» |
| «Esto te lo voy a descontar del sueldo» | Usted no puede disponer descuentos; la remuneración está protegida | «El faltante lo determina Control Interno y cualquier cosa se conversa con Relaciones Laborales» |
| **«Mejor renuncia y evitamos problemas»** | Inducción a la renuncia. Se lee como despido encubierto y genera indemnización | **Nada. Está prohibido.** Si hay causa, se sigue el procedimiento; si no la hay, no se insinúa la salida |
| «Firma aquí, es solo un trámite» | Firmar sin entender vicia el acto y anula el acta | «Léelo con calma. Firmar significa que lo recibiste, no que estés de acuerdo. Si no estás de acuerdo, escríbelo aquí abajo» |
| «No me traigas problemas, arréglalo tú» ante una denuncia de acoso | Bloquea el canal, expone a la víctima y genera responsabilidad de la empresa | «Esto no lo manejo yo. Existe un canal reservado y voy a asegurarme de que hoy mismo lo contacten» |
| «A todos les pasa, no te preocupes» ante una falta de seguridad | Normaliza el riesgo y desactiva la prevención | «Esto no se puede repetir porque el riesgo es tu integridad. Vamos a revisar juntos el procedimiento» |
| «Esto queda entre nos» cuando sí se va a registrar | Engaño que destruye la confianza y el valor probatorio del acta | «Esto se registra, y te explico exactamente cómo y por cuánto tiempo» |

Fuente: Política de Disciplina y Debido Proceso, sección 15.2. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 15.2 — Qué NO decir`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Si no está seguro de cómo plantear una conversación difícil, consúltelo antes con la Jefatura de Relaciones Laborales y Disciplina: acompañan la conversación.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`supervision`,`frases prohibidas`,`llamado de atencion`,`nulidad`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-287`,titulo:`¿Qué reviso antes de reportar un caso disciplinario?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:18,volumen_consultas_mes_estimado:18,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué debe verificar una jefatura antes de abrir un caso disciplinario?`,variantes_pregunta:[`que reviso antes de reportar un caso`,`como abro un caso disciplinario`,`que necesito para reportar a relaciones laborales`,`cuando si es caso disciplinario y cuando no`],respuesta_corta:`Cinco preguntas, y si alguna es «no sé», el caso se devuelve: qué ocurrió exactamente (fecha, hora, lugar, conducta observable), cuál es la norma escrita que se incumplió, cómo sabe que el colaborador la conocía, con qué se prueba, y si tiene antecedentes vigentes de la misma naturaleza.`,respuesta_extendida:`### Las cinco preguntas

| # | Pregunta | Si la respuesta es «no sé» |
|---|---|---|
| 1 | ¿Qué ocurrió exactamente? Fecha, hora, lugar, conducta observable | Verificar antes de reportar |
| 2 | ¿Cuál es la **norma escrita** que se incumplió? | Probablemente **no hay caso disciplinario** |
| 3 | ¿Cómo sé que el colaborador **conocía** esa norma? | Revisar inducción y capacitación; puede ser gestión de desempeño |
| 4 | ¿Con qué se **prueba**? | Reunir la evidencia antes de abrir el caso |
| 5 | ¿Tiene **antecedentes vigentes** por algo de la misma naturaleza? | Consultar el expediente con Relaciones Laborales |

### La regla de oro, antes de todo eso

> **¿El colaborador no PUDO, no SUPO, o no QUISO?**
>
> No pudo → problema de proceso: se remueve el obstáculo, se registra como incidencia operativa, **no en el expediente de la persona**.
> No supo → gestión de desempeño: entrenamiento y acompañamiento, **nunca sanción**.
> No quiso → gestión disciplinaria.

Y su formulación corta: *«¿Cuál es la norma escrita que esta persona incumplió y cómo sé que la conocía?»* Si no puede responderla en una línea, no hay caso disciplinario.

### Cómo se redacta el hecho

| Imputación inválida | Imputación válida |
|---|---|
| «Mala actitud con el supervisor» | «El 2026-09-03 a las 07h20, en el patio de carga del CD Quevedo, ante la instrucción de recargar cuatro jabas, respondió a gritos y se retiró del área sin completar la carga, dejando el despacho incompleto» |
| «Es irresponsable con el efectivo» | «El 2026-08-27 recaudó USD 412,30 de la ruta R-14 y depositó el 2026-08-31, cuatro días después del plazo del Manual de manejo de efectivo» |

Fuente: Política de Disciplina, secciones 5.2, 6.1, 6.4 y 15.3. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 15.3 — Las cinco preguntas antes de reportar un caso`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Complete las cinco respuestas y envíe el caso a la Jefatura de Relaciones Laborales y Disciplina. Un reporte sin las cinco respuestas se devuelve.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`supervision`,`reporte`,`tipicidad`,`desempeño`,`caso disciplinario`],errores_frecuentes:[`Reportar una imputación genérica sin hecho concreto: es causal de nulidad.`,`Abrir un caso disciplinario ante un problema de proceso o de entrenamiento.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-288`,titulo:`¿Puedo descontarle a mi ayudante el faltante de la liquidación?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:24,volumen_consultas_mes_estimado:24,tipo_atomo:`normativo`,pregunta_canonica:`¿Puede una jefatura disponer un descuento por un faltante de caja o de inventario?`,variantes_pregunta:[`le puedo descontar el faltante al ayudante`,`como supervisor puedo descontar del sueldo`,`falto plata en la liquidacion, se la descuento?`,`quien autoriza un descuento por faltante`],respuesta_corta:`No. Ninguna jefatura dispone descuentos: la remuneración está protegida (parámetro descuentos_rol_limite). Levante acta de arqueo con la persona presente, haga el reconteo y reporte a Control Interno. Primero se establece la causa; un descuento no autorizado anula cualquier sanción posterior y lo expone a usted por abuso de autoridad.`,respuesta_extendida:`### El límite de su potestad, dicho de frente

Un faltante **no es automáticamente una falta**: puede deberse a error de digitación, diferencia de precio, devolución no registrada, error de picking, rotura, merma o robo de terceros. Por eso el procedimiento es:

| Paso | Contenido |
|---|---|
| 1 | **Acta de arqueo o conteo en presencia del colaborador**, con firma. Sin su presencia es un dato, no una prueba |
| 2 | **Reconteo obligatorio** con una persona distinta de quien contó primero |
| 3 | **Cuantificación por Control Interno**, que valida el monto y descarta errores de sistema antes de que se abra caso |
| 4 | Si procede caso, procedimiento completo con descargos |
| 5 | Descuento **solo** con hecho y monto determinados **y autorización escrita** del colaborador |

### Prohibiciones que lo alcanzan a usted

- **Suspender sin sueldo mientras Control Interno investiga.** La separación preventiva es remunerada: es cautelar y no prejuzga. Una suspensión sin sueldo antes de la resolución es sanción anticipada y descuento no autorizado a la vez.
- **Retener el rol, el décimo tercero, el décimo cuarto, los fondos de reserva o la liquidación** para presionar el pago de un faltante. Eso es un incumplimiento de la empresa, no un acto disciplinario.

### La señal que conviene leer

Tres o más faltantes menores en el trimestre en la misma ruta o bodega **disparan una revisión de proceso**, no una cacería: probablemente el problema está en el picking, en el precio o en la carga.

Fuente: Política de Disciplina, secciones 14.2, 15.4 y 16; Reglamento Interno, Art. 46 y 54. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[`descuentos_rol_limite`,`decimo_tercero_formula`,`decimo_cuarto_valor`,`fondos_reserva_porcentaje`],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.2 — Faltantes de dinero y de inventario`,articulo:`Art. 54`},calculadora:null,datos_requeridos:[],siguiente_paso:`Levante el acta de arqueo con la persona presente y reporte a Control Interno y Auditoría. Cualquier descuento lo resuelve Nómina y Compensaciones con autorización escrita del colaborador.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`supervision`,`faltante`,`descuento`,`limite de potestad`,`arqueo`],errores_frecuentes:[`Creer que la autorización escrita del colaborador basta sin haber determinado el hecho y el monto: se requieren las dos cosas.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-289`,titulo:`¿Puedo cambiarle la ruta o el turno a alguien como correctivo?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`ambar`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:16,volumen_consultas_mes_estimado:16,tipo_atomo:`normativo`,pregunta_canonica:`¿Puede una jefatura usar el cambio de ruta, de zona o de turno como medida correctiva?`,variantes_pregunta:[`le cambio la ruta para que aprenda`,`puedo moverlo de turno como castigo`,`le doy la ruta mas lejana, es organizacion`,`cambiar de zona a un colaborador que no cumple`],respuesta_corta:`Organizar rutas y turnos es una potestad suya; usarla como castigo no. El Art. 100 prohíbe expresamente el cambio de ruta o de turno con fin punitivo: la sanción encubierta es nula, se revierte en apelación y constituye en sí misma una falta de quien la impone.`,respuesta_extendida:`### La distinción que hay que sostener

| Decisión | ¿Puede? |
|---|---|
| Reasignar rutas o turnos por necesidad operativa, con criterio explicable y registrado | **Sí.** Es su potestad |
| Reasignar a una persona concreta **para que se canse, se corrija o se vaya** | **No.** Sanción no tipificada, prohibida por el Art. 100 |

### Por qué no conviene ni siquiera cuando el hecho es cierto

Una sanción encubierta **es nula**, se revierte en apelación, deja el hecho real sin corregir y abre un procedimiento contra quien la impuso. Si la conducta existió, la vía que sí funciona es la del Art. 106 con el procedimiento del Art. 109: notificación de cargos, descargos, resolución motivada.

### Lo que un supervisor nunca hace

Sancionar por su cuenta más allá de su escalón · anunciar una sanción antes de que exista resolución · comentar el caso con el equipo · investigar una denuncia de acoso · retener documentos, herramientas o el pago de un colaborador · **cambiar la ruta, la zona o el turno como castigo encubierto** · pedir la renuncia de alguien · grabar a un colaborador sin su conocimiento.

> Cambiarle las condiciones de trabajo a alguien para que se canse no es una vía: expone a la compañía y no resuelve el problema operativo que usted tiene.

Fuente: Reglamento Interno de Trabajo, Art. 100 y Art. 106; Política de Disciplina, secciones 8, 15.4 y 16. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Principio de proporcionalidad`,articulo:`Art. 100`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta como acompañamiento a jefatura, sin nombre de ningún colaborador y sin generar antecedente para nadie. Relaciones Laborales lo contacta en 2 días hábiles para ver la vía correcta.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Consulta de una jefatura sobre el uso de una potestad organizativa con una persona detrás. VERA enuncia el límite sin acusar de nada a quien consulta, no entrega el instrumento y deriva como acompañamiento a jefatura.`},etiquetas:[`supervision`,`sancion encubierta`,`ruta`,`turno`,`limite de potestad`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-290`,titulo:`Tengo uno en el equipo que no rinde y quiero que se vaya`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`roja`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:10,volumen_consultas_mes_estimado:10,tipo_atomo:`normativo`,pregunta_canonica:`¿Cómo hago para que un colaborador que no rinde renuncie o para poder desvincularlo?`,variantes_pregunta:[`como hago para que renuncie solo`,`quiero sacar a uno de mi equipo`,`que falta le puedo poner para sacarlo`,`como lo desvinculo sin problemas`,`tengo uno que no rinde y quiero que se vaya`],respuesta_corta:`No puedo darle un camino para eso, y le digo por qué: las causales no se eligen, se configuran o no se configuran. Inducir la renuncia se lee como despido encubierto y genera indemnización; buscar una falta para un resultado ya decidido invierte el debido proceso. Registré su consulta como acompañamiento a jefatura —sin nombre de nadie— y Relaciones Laborales lo contacta en 2 días hábiles.`,respuesta_extendida:`### Lo que sí existe para un problema de rendimiento

Si lo que hay es **bajo desempeño**, la ruta es el Plan de Mejora de Desempeño con acompañamiento, no la disciplina: no alcanzar una meta comercial **no es una falta**, y sancionar por ello es uno de los errores que anulan una sanción. El plan se acuerda con plazo (30, 60 o 90 días), se documenta en acta firmada por ambas partes y lo apoya Capacitación y Desarrollo Organizacional.

Y antes de eso, la pregunta: **¿no pudo, no supo o no quiso?** Si faltaron medios, si el proceso cambió sin comunicarse, o si la persona no fue entrenada, la respuesta no es disciplinaria ni de desempeño: es de proceso.

### Lo que está prohibido y por qué

| Conducta | Consecuencia |
|---|---|
| «Mejor renuncia y evitamos problemas» | Inducción a la renuncia: se lee como **despido encubierto** y genera indemnización |
| Elegir una falta para un resultado ya decidido | Invierte el debido proceso; la imputación se cae y compromete a quien la construyó |
| Cambiar ruta, zona o turno para desgastar | Sanción encubierta, nula y en sí misma una falta de quien la impone |
| Retener documentos, herramientas o pagos | Incumplimiento de la empresa |

### Y si efectivamente hay conductas que constituyen falta

Se tramitan una por una, con su procedimiento: notificación escrita con hechos concretos, plazo de descargo, acompañamiento, resolución motivada. **Ninguna medida se aplica sin requerimiento escrito previo y plazo para descargos.** Y la terminación no la decide ni usted ni la empresa: la autoriza el Inspector del Trabajo.

> No estoy calificando su intención ni abriendo nada contra usted: **este registro no lleva el nombre de ningún colaborador, no se le notifica a nadie y no genera antecedente para nadie.**

Fuente: Política de Disciplina, secciones 6, 13, 15.2 y 16; Alcance del Consultor Virtual, secciones 5.4.1 y 5.10. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/09-alcance-consultor-virtual.md`,seccion:`Sección 5.4.1 — Consulta instrumental de una jefatura`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Quedó registrado como acompañamiento a jefatura, sin nombre de ningún colaborador. Relaciones Laborales y Disciplina lo contacta en 2 días hábiles. Si lo que hay es un problema de rendimiento, pida también apoyo de Capacitación y Desarrollo Organizacional para armar el plan de mejora.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Consulta instrumental de una jefatura sobre una persona identificable (docs/09 §5.4.1, subtipo 10). VERA no entrega el instrumento, enuncia el límite sin acusar, y escala con etiqueta de acompañamiento a jefatura: prohibido registrar el nombre del colaborador y prohibido notificarle. No genera antecedente para nadie.`},etiquetas:[`supervision`,`desvinculacion`,`renuncia inducida`,`desempeño`,`escalamiento`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-291`,titulo:`¿Cuántos llamados de atención necesito para poder despedir a alguien?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`ambar`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:13,volumen_consultas_mes_estimado:13,tipo_atomo:`normativo`,pregunta_canonica:`¿Existe un número de sanciones acumuladas que habilite la terminación del contrato?`,variantes_pregunta:[`cuantos llamados de atencion para despedir`,`con cuantas amonestaciones se puede despedir`,`cuantas faltas necesito para el visto bueno`,`numero de sanciones para desvincular`],respuesta_corta:`No funciona como una cuenta. Las causales no se acumulan: se configuran o no se configuran. La reincidencia sí sube el escalón —falta leve amonestada por escrito que se repite en 6 meses pasa a grave; falta grave sancionada que se repite en 12 meses pasa a muy grave— pero la terminación siempre exige visto bueno del Inspector del Trabajo, con expediente completo y debido proceso.`,respuesta_extendida:`### Lo que sí es cierto sobre la progresividad

| Situación | Efecto | Norma |
|---|---|---|
| Reincidir en falta **leve** ya amonestada por escrito, dentro de 6 meses | Se convierte en falta **grave** | Art. 104 literal v |
| Reincidir en falta **grave** ya sancionada, dentro de 12 meses | Se convierte en falta **muy grave** | Art. 105 literal r |
| Antecedente **caducado** (6 / 12 / 24 meses según el nivel) | **No cuenta.** Basar la reincidencia en un antecedente caducado anula la sanción | Art. 111 |

### Lo que no es cierto

Que exista un número. Cada sanción exige su propio procedimiento completo y su propia prueba, y **ninguna medida se aplica sin requerimiento escrito previo y plazo para presentar descargos y justificativos**. Una secuencia de sanciones construida para llegar a un resultado se cae entera ante el Inspector del Trabajo, y expone a la compañía.

### Sobre el umbral de faltas injustificadas

Existe un parámetro (\`visto_bueno_faltas_injustificadas\`) que fija un umbral, pero está marcado como **pendiente de verificación** en su redacción exacta —si los días deben ser consecutivos y cómo se cuenta el período no está resuelto—, y además ninguna falta se declara injustificada sin requerimiento escrito previo al colaborador. Por eso no le doy la cifra como regla mecánica: la confirma Legal y Cumplimiento.

Fuente: Reglamento Interno, Art. 104 literal v, Art. 105 literal r y Art. 111; Política de Disciplina, secciones 12 y 13. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`,`rrhh`],condiciones:[],parametros_usados:[`visto_bueno_faltas_injustificadas`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo XIV — Reincidencia`,articulo:`Art. 111`},calculadora:null,datos_requeridos:[],siguiente_paso:`Registré su consulta como acompañamiento a jefatura. Relaciones Laborales y Disciplina lo contacta en 2 días hábiles. Si hay una conducta concreta, repórtela con las cinco preguntas de la sección 15.3 y se tramita por su propia vía.`,escalamiento:{requerido:!0,rol:`Jefatura de Relaciones Laborales y Disciplina`,motivo:`Consulta de jefatura sobre la vía de terminación. VERA entrega el marco de la progresividad y sus límites, declara el estado de verificación del parámetro y deriva; no entrega una receta de acumulación ni valora ningún caso.`},etiquetas:[`supervision`,`reincidencia`,`visto bueno`,`progresividad`,`limite de potestad`],errores_frecuentes:[],confianza:`media`,requiere_verificacion_legal:!0},{id:`KB-292`,titulo:`Un colaborador me reportó acoso, ¿qué hago como jefatura?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`roja`,prioridad_de_recuperacion:`muy_alta`,volumen_consulta_estimado_mensual:9,volumen_consultas_mes_estimado:9,tipo_atomo:`normativo`,pregunta_canonica:`¿Qué debe hacer una jefatura que recibe un reporte de acoso, discriminación o violencia?`,variantes_pregunta:[`un colaborador me conto que le acosan, que hago`,`me reportaron acoso, como investigo`,`que hace un jefe ante una denuncia de acoso`,`debo hablar con el denunciado?`],respuesta_corta:`Escale el mismo día al canal reservado y **no investigue**: las denuncias de acoso no las conoce la jefatura directa. No cite a las dos personas a una reunión —está prohibido—, no pida detalles, no anticipe nada. Lo que sí le corresponde: asegurarse de que hoy mismo la contacten y proteger a quien reportó.`,respuesta_extendida:`### Lo que hace, en orden

1. **Escuche sin repreguntar detalles.** No es su rol reunir la historia completa.
2. **Dígalo tal cual:** «Esto no lo manejo yo. Existe un canal reservado y voy a asegurarme de que hoy mismo lo contacten.»
3. **Escale el mismo día** al canal reservado de ética y convivencia de la Gerencia de RR.HH. El Código es explícito: todo reporte de acoso, fraude, soborno o riesgo de inocuidad se escala el mismo día, y **un líder que sabe y calla responde como si hubiera participado**.
4. **Proteja activamente** a quien reportó: vigile que no haya cambios de ruta, de turno, de trato o de carga de trabajo después del reporte.
5. **No comente el caso con nadie más.**

### Lo que tiene prohibido

| Prohibido | Por qué |
|---|---|
| **Investigar la denuncia** | Está en la lista de lo que un supervisor nunca hace. Una investigación improvisada destruye evidencia y expone personas |
| **Citar a denunciante y denunciado a una misma reunión** | Expresamente prohibido: no hay careos ni conciliaciones en casos de acoso |
| Decir «arréglenlo entre ustedes» | Bloquea el canal, expone a la víctima y genera responsabilidad de la empresa |
| Comentar el caso con el equipo | Falta a la confidencialidad; la filtración del expediente es en sí misma falta muy grave |
| Tomar cualquier medida contra quien reportó | Falta muy grave por sí sola, y protección reforzada de 12 meses en casos de acoso |

### Quién resuelve

El **Comité de Convivencia, Ética y Prevención del Acoso**, del que quedan fuera la jefatura directa de ambas partes. Las medidas de protección se adoptan desde la recepción y sin prejuzgar, y quien se mueve de turno o de reporte es la persona denunciada.

Fuente: Política de Disciplina, secciones 14.1 y 15.4; Código de Ética, Deberes de quien lidera. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`,`rrhh`],condiciones:[],parametros_usados:[],fuente:{documento:`docs/08-politica-disciplina-debido-proceso.md`,seccion:`Sección 14.1 — Acoso laboral y acoso sexual`,articulo:`Art. 95`},calculadora:null,datos_requeridos:[],siguiente_paso:`Escalé la alerta al canal reservado, sin registrar el nombre de ninguna de las personas involucradas. Comunique hoy mismo a la Gerencia de Recursos Humanos que existe un reporte, y dígale a quien le contó cuáles son los canales directos: 1800 837 843 opción 4, disponible 24 horas.`,escalamiento:{requerido:!0,rol:`Comité de Ética (Línea Ética VERTIENTE)`,motivo:`Reporte de acoso, discriminación o violencia recibido por una jefatura. VERA no pide detalles del caso ni de las personas: entrega el protocolo del rol de jefatura y escala al canal reservado, con copia a la Gerencia de Recursos Humanos.`},etiquetas:[`supervision`,`acoso`,`escalamiento`,`comite de etica`,`no investigar`],errores_frecuentes:[],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-293`,titulo:`¿Puedo pedirle al equipo que se quede y tramitar el sobretiempo después?`,dominio:`etica_conducta_disciplina`,subdominio:`Deberes de quien supervisa`,zona:`verde`,prioridad_de_recuperacion:`media`,volumen_consulta_estimado_mensual:15,volumen_consultas_mes_estimado:15,tipo_atomo:`normativo`,pregunta_canonica:`¿Una jefatura puede ordenar horas suplementarias y autorizarlas después?`,variantes_pregunta:[`puedo pedirles que se queden y tramito despues`,`la autorizacion de horas extra va antes o despues`,`mi equipo esta atrasado, los dejo mas tiempo?`,`puedo planificar sobre el tope de jornada`],respuesta_corta:`La autorización va antes, no después: tramitarla después es falta grave de la jefatura (Art. 104 literal w). Y superar los topes de jornada es una infracción del empleador, no del colaborador. Si el trabajo no alcanza, se resuelve replanificando, no alargando el turno.`,respuesta_extendida:`### El límite de su potestad

| Conducta | Clasificación |
|---|---|
| Tramitar la autorización de sobretiempo **antes** de que el equipo se quede | Correcto |
| Ordenar sobretiempo sin autorización previa, o planificar por encima de los topes | **Falta grave** de quien ejerce jefatura (FAL-045, Art. 104 literal w), con agravante de jerarquía |

Además deja a su equipo con horas trabajadas **sin respaldo para su pago**, y las horas efectivamente trabajadas se pagan igual: el problema no desaparece, solo se traslada.

### Los topes

Existen un tope diario (parámetro \`horas_suplementarias_tope_diario\`) y uno semanal (parámetro \`horas_suplementarias_tope_semanal\`). Superarlos es una **infracción del empleador**, nunca del colaborador: a nadie de su equipo se le puede imputar eso.

### Deber del Código de Ética para quien lidera

> **No poner metas que solo se cumplen faltando al Código.** Si la ruta solo cierra corriendo semáforos, o el turno solo cierra sin reportar, la meta está mal puesta, y revisarla es su responsabilidad.

> **Respetar la jornada y los descansos.** No exigir trabajo fuera de jornada sin el registro y el pago que corresponde.

Fuente: Reglamento Interno, Art. 39, Art. 40 y Art. 104 literal w; Código de Ética, Deberes de quien lidera. Vigencia 2026-09-16.`,aplica_a:[`supervisor zonal`,`supervisor de produccion`,`jefe de centro de distribucion`,`direccion`],condiciones:[],parametros_usados:[`horas_suplementarias_tope_diario`,`horas_suplementarias_tope_semanal`,`jornada_horas_semanales`],fuente:{documento:`docs/02-reglamento-interno-trabajo.md`,seccion:`Capítulo V — Autorización previa de horas suplementarias`,articulo:`Art. 40`},calculadora:null,datos_requeridos:[],siguiente_paso:`Tramite la autorización antes con la Jefatura de Nómina y Compensaciones. Si el trabajo no alcanza dentro de la jornada, escale el problema de planificación a la gerencia de su área.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`supervision`,`sobretiempo`,`jornada`,`limite de potestad`,`planificacion`],errores_frecuentes:[`Creer que la autorización posterior regulariza el sobretiempo ya trabajado.`],confianza:`alta`,requiere_verificacion_legal:!1},{id:`KB-294`,titulo:`¿Cómo sé si algo está bien si el Código no lo dice?`,dominio:`etica_conducta_disciplina`,subdominio:`Ética: marco general`,zona:`verde`,prioridad_de_recuperacion:`alta`,volumen_consulta_estimado_mensual:29,volumen_consultas_mes_estimado:29,tipo_atomo:`orientacion_preventiva`,pregunta_canonica:`¿Qué hago cuando tengo una duda ética que ninguna norma resuelve expresamente?`,variantes_pregunta:[`como se si algo esta bien o mal`,`el codigo no dice nada de mi caso`,`tengo una duda etica, que hago`,`la prueba de las cuatro preguntas`,`a quien pregunto si no estoy seguro`],respuesta_corta:`Hágase cuatro preguntas, en orden: ¿es legal y permitido por las normas de VERTIENTE? ¿lo haría igual si mi supervisor, mi familia y el cliente estuvieran mirando? ¿le hace daño a alguien? ¿estaría tranquilo si saliera publicado mañana con mi nombre? Si alguna respuesta es «no» o «no sé», no lo haga y consulte. **La duda consultada nunca es una falta; la duda ignorada sí puede serlo.**`,respuesta_extendida:`### La prueba de decisión ética

| # | Pregunta | Qué significa en la práctica |
|---|---|---|
| 1 | **¿Es legal y está permitido por las normas de VERTIENTE?** | ¿Lo permite la ley, el Código, el Reglamento Interno y la política del área? Si no lo sé, averiguo antes |
| 2 | **¿Lo haría igual si mi supervisor, mi familia y el cliente estuvieran mirando?** | La prueba de la luz del día. Si necesita que nadie se entere, ya tiene la respuesta |
| 3 | **¿Le hace daño a alguien?** | A un compañero, al cliente, al consumidor o a la empresa. Incluye el daño que no se ve hoy: un lote mal liberado, un dato filtrado, un precedente que otro va a repetir |
| 4 | **¿Me sentiría tranquilo si esto saliera publicado mañana con mi nombre?** | La prueba del titular. Vale también para lo que se publica en redes |

**Regla del semáforo.** Cuatro «sí» → avance. Un «no» → deténgase. Un «no sé» → consulte antes de actuar.

### Dónde consultar

A su jefatura inmediata, a la Línea Ética, o aquí mismo. Preguntar antes de actuar es el **escalón 0** de la escala disciplinaria: **no es sanción y no genera registro personal ni antecedente**. Su consulta no aparece en su expediente y no se informa a su jefatura.

### A quién se aplica el Código

A los 1.200 colaboradores desde el primer día, incluido el período de prueba (parámetro \`contrato_periodo_prueba_dias\`), a eventuales y de jornada parcial, a practicantes, a contratistas y tercerizados en lo que hacen dentro de instalaciones o en nombre de VERTIENTE, y a proveedores en su relación comercial. **Se aplica igual a todos: un cargo alto no atenúa una falta, la agrava, porque el ejemplo pesa.**

### Lo que el Código no hace

No regula la vida privada de nadie, no opina sobre creencias, militancia política, orientación sexual, religión ni decisiones personales, y **no limita el derecho de asociación ni la actividad sindical**.

Fuente: Código de Ética, secciones 1, 2 y 4; Política de Disciplina, escalón 0 de la sección 8.1. Vigencia 2026-09-16.`,aplica_a:[`todos`],condiciones:[],parametros_usados:[`contrato_periodo_prueba_dias`],fuente:{documento:`docs/01-codigo-de-etica.md`,seccion:`4. La prueba de decisión ética: cuatro preguntas`,articulo:null},calculadora:null,datos_requeridos:[],siguiente_paso:`Pregúnteme la situación concreta antes de actuar, o consúltela con su jefatura inmediata o con la Línea Ética. No hay ninguna consecuencia por preguntar.`,escalamiento:{requerido:!1,rol:null,motivo:null},etiquetas:[`etica`,`prueba de decision`,`consulta preventiva`,`escalon 0`,`orientacion preventiva`],errores_frecuentes:[`Creer que consultar una duda deja algún registro en contra: el escalón 0 no genera antecedente.`],confianza:`alta`,requiere_verificacion_legal:!1}],n={meta:e,atomos:t};export{t as atomos,n as default,e as meta};