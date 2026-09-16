var e=`# Manual de Nómina, Compensación y Beneficios

| Campo | Contenido |
|---|---|
| **Código de documento** | VRT-RRHH-NOM-05 |
| **Título** | Manual de Nómina, Compensación y Beneficios |
| **Versión** | 1.0 |
| **Fecha de vigencia** | 2026-09-16 |
| **Ámbito de aplicación** | Corporación Vertiente S.A. (VERTIENTE) — matriz Guayaquil, planta FRUTAL Durán y los 9 centros de distribución. Aplica a los 1.200 colaboradores, sin excepción de área, nivel ni tipo de contrato. |
| **Elaborado por** | Jefatura de Nómina y Compensaciones (Recursos Humanos) |
| **Revisado por** | Gerencia de Recursos Humanos · Jefatura de Legal y Cumplimiento · Contraloría (Control Interno y Auditoría) |
| **Aprobado por** | Gerencia Administrativa Financiera |
| **Fuente de todas las cifras legales** | \`datos/parametros-legales.json\`, versión 1.0.0, fecha de corte 2026-09-16 |
| **Periodicidad de revisión** | Anual, y de forma extraordinaria cada vez que cambie el Salario Básico Unificado o se publique una reforma laboral |
| **Documento relacionado** | Reglamento Interno de Trabajo · Manual de Contratación y Administración de Personal · Política de Viáticos y Movilización |

> **Advertencia obligatoria.** Este es un documento de una empresa de simulación. Todas las personas,
> marcas, rutas, cédulas y montos de negocio que aparecen aquí son ficticios. Las cifras normativas
> provienen del archivo \`datos/parametros-legales.json\` y muchas de ellas están marcadas como
> \`verificar_antes_de_produccion\`: eso significa que existe una duda declarada y real sobre el valor,
> el plazo o el artículo aplicable. **Ningún cálculo de este manual debe usarse para pagar un rol real,
> firmar un acta de finiquito o presentar una planilla sin verificar antes el parámetro contra la norma
> vigente.** Donde un parámetro no existe, este manual lo dice en voz alta y redacta la frase sin la
> cifra, en lugar de inventar un número.

---

## Tabla de contenidos

1. [Cómo leer este manual](#1-cómo-leer-este-manual)
2. [Estructura de la remuneración en VERTIENTE](#2-estructura-de-la-remuneración-en-vertiente)
3. [El rol de pagos, línea por línea](#3-el-rol-de-pagos-línea-por-línea)
4. [Horas suplementarias y extraordinarias](#4-horas-suplementarias-y-extraordinarias)
5. [Décima tercera remuneración](#5-décima-tercera-remuneración)
6. [Décima cuarta remuneración](#6-décima-cuarta-remuneración)
7. [Fondos de reserva](#7-fondos-de-reserva)
8. [Vacaciones](#8-vacaciones)
9. [Utilidades](#9-utilidades)
10. [Aportes al IESS y prestaciones](#10-aportes-al-iess-y-prestaciones)
11. [Descuentos que pueden aparecer en su rol](#11-descuentos-que-pueden-aparecer-en-su-rol)
12. [Beneficios propios de VERTIENTE](#12-beneficios-propios-de-vertiente)
13. [Liquidación y acta de finiquito](#13-liquidación-y-acta-de-finiquito)
14. [Calendario anual de nómina](#14-calendario-anual-de-nómina)
15. [Trámites del colaborador](#15-trámites-del-colaborador)
16. [Errores frecuentes, en una sola tabla](#16-errores-frecuentes-en-una-sola-tabla)
17. [Glosario mínimo](#17-glosario-mínimo)
18. [Qué responde el consultor virtual y qué escala a un humano](#18-qué-responde-el-consultor-virtual-y-qué-escala-a-un-humano)
19. [Parámetros legales citados en este manual](#19-parámetros-legales-citados-en-este-manual)
20. [Pendientes de verificación](#20-pendientes-de-verificación)
21. [Control de cambios](#21-control-de-cambios)

---

## 1. Cómo leer este manual

Este manual está escrito para que lo entienda cualquier persona de VERTIENTE: un estibador del CD de
Quito que quiere saber por qué le descontaron un valor, un prevendedor de Guayaquil que no entiende
cómo se calculó su comisión, una jefa de centro de distribución que arma el presupuesto de su
instalación, o el Gerente Administrativo Financiero que necesita el detalle exacto de un rubro.

Tres convenciones para leerlo sin perderse:

**Primera: los términos técnicos se explican la primera vez que aparecen.** Cuando este manual dice
*rol de pagos*, se refiere al documento mensual donde consta todo lo que usted ganó (los **ingresos**)
y todo lo que se le descontó (los **egresos**), y cuya diferencia es lo que se le acredita en el banco.
Cuando dice *materia gravada*, se refiere a la parte de sus ingresos sobre la cual se calculan los
aportes al IESS. Cuando dice *proporcional* o *prorrateo*, se refiere a pagar solo la parte que
corresponde al tiempo que usted efectivamente trabajó.

**Segunda: cada cifra legal viene con la clave del parámetro entre paréntesis.** Por ejemplo,
"quince días de vacaciones (parámetro \`vacaciones_dias_anuales\`)". Esa clave le permite a usted, a
Nómina o a un auditor ir al archivo \`datos/parametros-legales.json\` y verificar el valor, su
fundamento normativo y su estado de verificación. Si una cifra no tiene clave entre paréntesis, es
porque **no es una cifra legal sino una decisión interna de VERTIENTE**, y así se dice expresamente.

**Tercera: los ejemplos son de personas ficticias, pero la aritmética es real.** Cada ejemplo numérico
de este manual está resuelto paso a paso y fue verificado operación por operación. Usted puede tomar
una calculadora y repetirlo. Si al repetirlo le da otro resultado, el error puede estar en el manual:
repórtelo por el canal de Nómina que se indica en la sección 15.

### 1.1 Los personajes que aparecen en los ejemplos

Para que los ejemplos se entiendan como situaciones del negocio y no como ejercicios de aritmética,
este manual usa siempre las mismas nueve personas ficticias.

| Persona (ficticia) | Cargo | Instalación | Región para décima cuarta | Remuneración fija mensual (simulación) |
|---|---|---|---|---|
| Jefferson Quimí | Prevendedor | Matriz Guayaquil | Costa | USD 520,00 + comisiones |
| Wilson Chalá | Estibador | CD Quito | Sierra | USD 490,00 + bono de bodega |
| Marlon Zambrano | Operario de línea, turno nocturno | Planta FRUTAL, Durán | Costa | USD 500,00 + bono de productividad |
| Digna Macías | Auxiliar de bodega y despacho | CD Manta | Costa | USD 512,00 |
| Byron Lascano | Ayudante de venta (perchador) | CD Ambato | Sierra | USD 505,00 |
| Édison Tenesaca | Vendedor de ruta (autoventa) | CD Cuenca | Sierra | USD 540,00 + comisiones |
| Narcisa Pilamunga | Mercaderista de trade marketing | CD Quito | Sierra | USD 510,00 |
| Aracely Bone | Supervisora zonal | CD Machala | Costa | USD 1.250,00 |
| Fabián Quinteros | Jefe de centro de distribución | CD Ambato | Sierra | USD 1.680,00 |

---

## 2. Estructura de la remuneración en VERTIENTE

### 2.1 De qué se compone lo que usted gana

Lo que un colaborador de VERTIENTE recibe cada mes no es un solo número. Se arma de piezas que la ley
trata de forma distinta, y entender esa diferencia es lo que resuelve el 80% de las consultas que
llegan a Nómina.

| Pieza | Qué es | ¿Es "remuneración"? | ¿Entra en la base de décimo tercero, fondos de reserva, vacaciones e IESS? |
|---|---|---|---|
| Sueldo base | El valor fijo mensual pactado en el contrato | Sí | Sí |
| Comisiones de la fuerza de ventas | La parte variable que se gana por resultado comercial | Sí | Sí |
| Bono de productividad de planta | Variable mensual por cumplimiento de plan, eficiencia y merma | Sí | Sí |
| Bono de bodega | Variable mensual por despacho sin error y ventana de carga cumplida | Sí | Sí |
| Horas suplementarias y extraordinarias | El pago recargado por trabajar fuera de la jornada | Sí | Sí |
| Recargo de jornada nocturna | El 25% adicional de quien trabaja de noche por turno | Sí | Sí |
| Décima tercera y décima cuarta remuneración | Beneficios sociales de ley | No | No |
| Fondos de reserva | Beneficio de seguridad social | No | No |
| Utilidades | Participación en el resultado del ejercicio | No | No |
| Viáticos, movilización y kilometraje | Reembolso de un gasto en que usted incurrió por trabajo | No | No (sujeto a verificación, ver 12.7) |
| Alimentación subsidiada, transporte de madrugada, comisariato | Beneficios en servicio, no en dinero de libre disposición | No | No |

La regla que hay detrás de esa tabla la fija el parámetro \`iess_base_calculo\`: es materia gravada
*todo ingreso regular y susceptible de apreciación pecuniaria percibido como retribución del trabajo*.
Es decir, lo que a usted le pagan **por trabajar**. No son materia gravada la décima tercera, la
décima cuarta, los fondos de reserva ni las utilidades, porque son beneficios sociales, no pago del
trabajo. Este parámetro está marcado como \`verificar_antes_de_produccion\` justamente para los rubros
de frontera de VERTIENTE —viáticos, movilización del prevendedor, bono de ruta y comisiones— y por eso
la sección 12.7 trata ese punto con especial cuidado.

### 2.2 Bandas de sueldo base

Las bandas de sueldo base son una **decisión interna de VERTIENTE**, no una cifra legal. El único piso
legal es que ningún colaborador con jornada completa puede ganar menos del Salario Básico Unificado,
que en la simulación es de USD 470,00 mensuales (parámetro \`sbu\`). Todas las bandas de VERTIENTE están
por encima de ese piso.

| Banda | Cargos que agrupa | Sueldo base mensual (USD, simulación) | Variable al 100% de cumplimiento |
|---|---|---|---|
| O-1 | Ayudante de venta (perchador), estibador | 480,00 – 505,00 | Bono de bodega o de percha, hasta 55,00 |
| O-2 | Auxiliar de bodega y despacho, mercaderista, operario de línea | 500,00 – 515,00 | Bono de productividad, hasta 80,00 |
| O-3 | Chofer/transportista, operario de mantenimiento | 600,00 – 660,00 | Bono de ruta cumplida, hasta 70,00 |
| C-1 | Prevendedor, vendedor de ruta (autoventa) | 520,00 – 560,00 | Comisión variable, hasta 280,00 – 320,00 |
| A-1 | Liquidador, back office comercial, asistente administrativo | 620,00 – 780,00 | No aplica |
| M-1 | Supervisor zonal, coordinador, supervisor de producción | 1.150,00 – 1.400,00 | Bono trimestral por zona, hasta 25% del sueldo base |
| M-2 | Jefe de centro de distribución, jefe de área | 1.550,00 – 2.100,00 | Bono trimestral, hasta 30% del sueldo base |
| D-1 | Jefe regional de ventas, jefaturas de planta | 2.200,00 – 2.900,00 | Bono anual por resultado |
| D-2 | Gerencias | Por definición de la Dirección General | Bono anual por resultado |

El piso legal de USD 470,00 (parámetro \`sbu\`) arrastra una advertencia importante: ese parámetro está
marcado \`verificar_antes_de_produccion\` porque el Salario Básico Unificado de cada año se fija por
Acuerdo Ministerial publicado a fines de diciembre del año anterior, y el valor de la simulación
arrastra el de 2025. Si el SBU real de 2026 resultara mayor, **todas** las bandas deben revisarse para
que ninguna quede por debajo del piso, y deben recalcularse la décima cuarta remuneración y el tope de
utilidades, que se expresan en SBU.

### 2.3 El esquema de comisiones de la fuerza de ventas

La comisión del prevendedor y del vendedor de ruta no es un porcentaje suelto sobre la venta: es un
**pool variable objetivo** que se reparte en cuatro componentes, cada uno con su propia métrica y su
propio factor de pago. El pool objetivo del prevendedor en la simulación es de USD 280,00 mensuales;
el del vendedor de ruta, USD 320,00.

| Componente | Peso | Qué mide exactamente | Valor objetivo del componente (prevendedor) |
|---|---|---|---|
| Cumplimiento de cuota | 55% | Venta neta facturada del mes ÷ cuota asignada a la ruta | USD 154,00 |
| Cobertura | 20% | Clientes de la ruta con al menos una compra en el mes ÷ clientes activos de la ruta | USD 56,00 |
| Efectividad de visita | 15% | Pedidos tomados ÷ visitas realizadas según el ruteo | USD 42,00 |
| Drop size | 10% | Valor promedio por pedido ÷ meta de valor promedio de la zona | USD 28,00 |
| **Total** | **100%** | | **USD 280,00** |

Cada componente se paga según una escala de logro. El factor no es lineal: hay un umbral por debajo
del cual el componente no paga nada, y un techo por encima del cual ya no sube.

| Logro alcanzado | Factor de cumplimiento de cuota | Factor de cobertura | Factor de efectividad de visita | Factor de drop size |
|---|---|---|---|---|
| Menos de 85% | 0,00 | 0,00 | 0,00 | 0,00 |
| 85% a 89,9% | 0,00 | 0,60 | 1,00 | 0,80 |
| 90% a 94,9% | 0,70 | 0,80 | 1,00 | 0,90 |
| 95% a 99,9% | 0,90 | 1,00 | 1,00 | 1,00 |
| 100% a 104,9% | 1,00 | 1,00 | 1,00 | 1,00 |
| 105% a 109,9% | 1,15 | 1,00 | 1,00 | 1,10 |
| 110% o más | 1,30 (tope) | 1,00 (tope) | 1,00 (tope) | 1,15 (tope) |

#### Ejemplo resuelto 1 — comisión de Jefferson Quimí, prevendedor de Guayaquil, septiembre de 2026

Resultados del mes de Jefferson:

| Métrica | Resultado | Logro | Factor | Cálculo | Comisión |
|---|---|---|---|---|---|
| Cuota | Vendió USD 41.600 sobre una cuota de USD 40.000 | 104,0% | 1,00 | 154,00 × 1,00 | **154,00** |
| Cobertura | 268 clientes compraron, de 290 activos en la ruta | 92,4% | 0,80 | 56,00 × 0,80 | **44,80** |
| Efectividad de visita | 1.020 pedidos sobre 1.160 visitas | 87,9% | 1,00 | 42,00 × 1,00 | **42,00** |
| Drop size | USD 43,60 promedio sobre una meta de USD 40,00 | 109,0% | 1,15 | 28,00 × 1,15 | **32,20** |
| | | | | **Total comisiones** | **USD 273,00** |

Verificación: 154,00 + 44,80 + 42,00 + 32,20 = **USD 273,00**.

Lo que Jefferson debe entender de este cálculo: su cobertura le costó USD 11,20 (56,00 − 44,80). Le
faltaron 8 clientes de 290 para llegar al 95% y cobrar el componente completo. Ese es el dato accionable
de su comisión, y es el que su supervisor zonal debe conversar con él, no el número final.

**Reglas de la comisión que evitan reclamos:**

1. La comisión se calcula sobre **venta neta facturada y no anulada**, no sobre pedido tomado. Si el
   cliente rechaza el pedido en la entrega, esa venta sale de la base.
2. La comisión de un mes se paga en el rol de ese mismo mes, con corte de información comercial al día
   20 (ver la sección 14). Lo facturado entre el 21 y el fin de mes entra en la liquidación del mes
   siguiente, con la etiqueta "ajuste de comisión mes anterior" en el rol.
3. La nota de crédito por devolución se descuenta de la base de comisión del mes en que se emite.
4. La comisión **es remuneración**. Entra en la base del décimo tercero, de los fondos de reserva, de
   las vacaciones y de los aportes al IESS. Esto favorece al colaborador y es la razón por la que el
   décimo tercero de un prevendedor es mayor que su sueldo base.
5. Si el colaborador estuvo de vacaciones, con licencia de maternidad o paternidad o con reposo médico
   parte del mes, la cuota se ajusta en proporción a los días efectivos de ruta. No se le penaliza por
   ejercer un derecho.

### 2.4 Bono de productividad de planta (FRUTAL, Durán)

Los 110 operarios de línea, los 22 de mantenimiento y los 12 de bodega de materia prima y producto
terminado de la planta FRUTAL tienen un bono mensual de hasta USD 80,00, con tres componentes.

| Componente | Peso | Métrica | Valor objetivo |
|---|---|---|---|
| Cumplimiento del plan de producción | 50% | Cajas producidas ÷ plan de producción del mes | USD 40,00 |
| Eficiencia de línea | 30% | Tiempo productivo ÷ tiempo programado de la línea | USD 24,00 |
| Merma bajo el límite | 20% | Merma real ÷ límite de merma autorizado por Calidad | USD 16,00 |

#### Ejemplo resuelto 2 — bono de Marlon Zambrano, operario de línea, septiembre de 2026

| Componente | Resultado | Factor | Cálculo | Bono |
|---|---|---|---|---|
| Plan de producción | 101% del plan | 1,00 | 40,00 × 1,00 | **40,00** |
| Eficiencia de línea | 88% frente a una meta de 90% | 0,75 | 24,00 × 0,75 | **18,00** |
| Merma | 1,4% frente a un límite de 1,8% | 1,00 | 16,00 × 1,00 | **16,00** |
| | | | **Total bono** | **USD 74,00** |

Verificación: 40,00 + 18,00 + 16,00 = **USD 74,00**. Este bono es materia gravada
(parámetro \`iess_base_calculo\`, que menciona expresamente los *bonos de eficiencia con carácter de
remuneración*), por lo que suma para IESS, décimo tercero, fondos de reserva y vacaciones.

### 2.5 Bono de bodega

Los 85 estibadores y los 50 auxiliares de bodega y despacho tienen un bono de hasta USD 55,00
mensuales, con dos componentes: 60% por cajas despachadas sin error de picking y 40% por cumplimiento
de la ventana de carga (que el camión salga a la hora comprometida). Wilson Chalá, estibador del CD de
Quito, alcanzó USD 45,00 en septiembre de 2026. También es materia gravada.

---

## 3. El rol de pagos, línea por línea

### 3.1 Anatomía del rol

El rol de pagos de VERTIENTE tiene siempre la misma estructura: un bloque de **ingresos**, un bloque de
**egresos**, y un **líquido a recibir** que es la resta de los dos. Además, al pie, un bloque
informativo de **costo del empleador**, que **no se descuenta** y que existe solo para que usted sepa
cuánto invierte la empresa en su plaza más allá de lo que recibe.

| Bloque | Línea | Qué significa | ¿Es materia gravada? |
|---|---|---|---|
| Ingresos | Sueldo base del período | Los días efectivamente devengados del mes | Sí |
| Ingresos | Comisión / bono variable | Lo ganado por resultado, según las secciones 2.3 a 2.5 | Sí |
| Ingresos | Horas suplementarias | Horas después de la jornada en día laborable | Sí |
| Ingresos | Horas extraordinarias | Horas en sábado, domingo, día de descanso o feriado | Sí |
| Ingresos | Recargo de jornada nocturna | El 25% adicional de quien trabaja de noche por turno | Sí |
| Ingresos | Fondos de reserva mensualizados | Solo si usted eligió recibirlos mes a mes | No |
| Ingresos | Décimo tercero mensualizado | Solo si usted eligió la mensualización | No |
| Ingresos | Décimo cuarto mensualizado | Solo si usted eligió la mensualización | No |
| Ingresos | Movilización / viáticos liquidados | Reembolso de gasto, no pago del trabajo | No |
| Egresos | Aporte personal IESS | 9,45% de la materia gravada | — |
| Egresos | Anticipo quincenal | Lo que usted recibió el día 15 | — |
| Egresos | Préstamo quirografario o hipotecario IESS | El dividendo que el IESS notifica | — |
| Egresos | Préstamo de la empresa | La cuota pactada por escrito | — |
| Egresos | Comisariato | El consumo del mes en producto de la compañía | — |
| Egresos | Pensión alimenticia / retención judicial | Solo con orden judicial | — |
| Egresos | Impuesto a la renta en relación de dependencia | La retención mensual proyectada | — |
| Egresos | Multa del Reglamento Interno | **Hoy no se aplica.** Mientras no exista en \`datos/parametros-legales.json\` un parámetro verificado con el tope legal de la multa, VERTIENTE no impone multas (Art. 108 del Reglamento Interno y sección 8.4 de la Política de Disciplina). Esta línea no debe aparecer en ningún rol | — |
| Informativo | Aporte patronal IESS | 11,15% de la materia gravada, lo paga la empresa | — |

### 3.2 Rol de pagos de un prevendedor

#### Ejemplo resuelto 3 — Jefferson Quimí, prevendedor, matriz Guayaquil, septiembre de 2026

Jefferson eligió recibir su décimo tercero y su décimo cuarto **acumulados** (un solo pago en la fecha
límite) y sus fondos de reserva **mensualizados**. Por eso en su rol no aparecen líneas de décimos,
pero sí la de fondos de reserva.

**Ingresos**

| Línea | Cálculo | Valor USD |
|---|---|---|
| Sueldo base (30 días devengados) | Fijo contractual | 520,00 |
| Comisión por cumplimiento de cuota | 154,00 × 1,00 | 154,00 |
| Comisión por cobertura | 56,00 × 0,80 | 44,80 |
| Comisión por efectividad de visita | 42,00 × 1,00 | 42,00 |
| Comisión por drop size | 28,00 × 1,15 | 32,20 |
| **Subtotal materia gravada** | 520,00 + 273,00 | **793,00** |
| Fondos de reserva mensualizados | 793,00 × 8,33% | 66,06 |
| Movilización de ruta liquidada (20 días × USD 4,50) | Reembolso, no remuneración | 90,00 |
| **Total ingresos** | 793,00 + 66,06 + 90,00 | **949,06** |

**Egresos**

| Línea | Cálculo | Valor USD |
|---|---|---|
| Aporte personal IESS | 793,00 × 9,45% | 74,94 |
| Anticipo quincenal recibido el 15 de septiembre | Política interna | 190,00 |
| Préstamo quirografario IESS (dividendo notificado) | Lo fija el IESS | 96,40 |
| Comisariato del mes | Consumo con descuento | 48,50 |
| **Total egresos** | 74,94 + 190,00 + 96,40 + 48,50 | **409,84** |

**Líquido a recibir: 949,06 − 409,84 = USD 539,22**

**Informativo — costo del empleador:** aporte patronal IESS = 793,00 × 11,15% = **USD 88,42**. Este
valor **no** se descuenta de Jefferson; lo paga VERTIENTE además de su remuneración.

**Verificación del tope de anticipo.** El parámetro \`anticipo_quincenal_tope\` fija el anticipo en
hasta el 50% de lo devengado en la quincena. La quincena de Jefferson devengó aproximadamente
793,00 ÷ 2 = USD 396,50, de modo que su tope es 396,50 × 50% = **USD 198,25**. Su anticipo de
USD 190,00 está dentro del tope. Si hubiera pedido USD 200,00, Nómina habría tenido que rechazarlo.
Importante: ese 50% es una **política interna razonable**, no un porcentaje que la ley enuncie con ese
número; el parámetro está marcado \`verificar_antes_de_produccion\` por esa razón.

### 3.3 Rol de pagos de un estibador

#### Ejemplo resuelto 4 — Wilson Chalá, estibador, CD Quito, septiembre de 2026

Wilson eligió **mensualizar** su décimo tercero y su décimo cuarto, y también recibe sus fondos de
reserva mensualizados. Por eso su rol tiene tres líneas que el de Jefferson no tiene. Durante el mes
trabajó 6 horas suplementarias diurnas repartidas en tres días y 4 horas extraordinarias un domingo de
inventario.

**Ingresos**

| Línea | Cálculo | Valor USD |
|---|---|---|
| Sueldo base (30 días devengados) | Fijo contractual | 490,00 |
| Bono de bodega | Despacho sin error + ventana de carga | 45,00 |
| Horas suplementarias diurnas (6 h) | 6 × (490 ÷ 240) × 1,50 | 18,38 |
| Horas extraordinarias (4 h, domingo) | 4 × (490 ÷ 240) × 2,00 | 16,33 |
| **Subtotal materia gravada** | 490,00 + 45,00 + 18,38 + 16,33 | **569,71** |
| Fondos de reserva mensualizados | 569,71 × 8,33% | 47,46 |
| Décimo tercero mensualizado | 569,71 ÷ 12 | 47,48 |
| Décimo cuarto mensualizado | 470,00 ÷ 12 | 39,17 |
| **Total ingresos** | 569,71 + 47,46 + 47,48 + 39,17 | **703,82** |

**Egresos**

| Línea | Cálculo | Valor USD |
|---|---|---|
| Aporte personal IESS | 569,71 × 9,45% | 53,84 |
| Anticipo quincenal | Política interna | 150,00 |
| Comisariato del mes | Consumo con descuento | 62,30 |
| Préstamo de la empresa (cuota 3 de 6) | Convenio escrito | 40,00 |
| **Total egresos** | 53,84 + 150,00 + 62,30 + 40,00 | **306,14** |

**Líquido a recibir: 703,82 − 306,14 = USD 397,68**

**Informativo — costo del empleador:** aporte patronal IESS = 569,71 × 11,15% = **USD 63,52**.

**Lectura del rol de Wilson.** Tres cosas que explicarle si pregunta:

- Su aporte personal al IESS (USD 53,84) se calcula sobre USD 569,71, **no** sobre los USD 703,82 del
  total de ingresos. Los fondos de reserva y los décimos mensualizados no son materia gravada
  (parámetro \`iess_base_calculo\`).
- Su décimo tercero mensualizado sube y baja cada mes, porque se calcula sobre la remuneración
  efectivamente percibida en ese mes. Los meses en que hace más horas suplementarias, su décimo
  mensualizado es mayor.
- Elegir "mensualizado" no le da más dinero al año que elegir "acumulado". Le da el mismo dinero
  repartido de otra forma. La única diferencia real es de flujo de caja personal.

---

## 4. Horas suplementarias y extraordinarias

### 4.1 Los conceptos, sin confundirlos

Este es el tema que más consultas genera en bodega, planta y ruta, y casi siempre por confundir tres
cosas distintas.

| Concepto | Cuándo ocurre | Recargo | Factor de pago | Parámetro |
|---|---|---|---|---|
| Hora ordinaria diurna | 06h00 a 19h00, dentro de la jornada normal | 0% | 1,00 | \`jornada_horas_diarias\` |
| Hora ordinaria en jornada nocturna | La jornada **normal** del colaborador está pactada entre 19h00 y 06h00 | 25% | 1,25 | \`recargo_jornada_nocturna\`, \`jornada_nocturna_rango\` |
| Hora suplementaria diurna | Después de terminada la jornada, en día laborable, entre 06h00 y 24h00 | 50% | 1,50 | \`recargo_hora_suplementaria_diurna\` |
| Hora suplementaria nocturna | Después de terminada la jornada, en día laborable, entre 24h00 y 06h00 | 100% | 2,00 | \`recargo_hora_suplementaria_nocturna\` |
| Hora extraordinaria | Sábado, domingo, día de descanso obligatorio o feriado | 100% | 2,00 | \`recargo_hora_extraordinaria\` |

**La regla de no acumulación es absoluta:** una misma hora se paga bajo **un solo** concepto. Nunca se
suman dos recargos sobre la misma hora. Si usted trabajó un domingo que además era feriado, esa hora es
extraordinaria y se paga al factor 2,00 — no al 4,00.

### 4.2 Cómo se obtiene el valor de la hora

VERTIENTE usa el divisor de 240 horas al mes (parámetro \`valor_hora_ordinaria_divisor\`), que resulta de
30 días × 8 horas.

> **Valor de la hora ordinaria = remuneración mensual ÷ 240**

Advertencia de honestidad: el divisor 240 es una **convención de nómina**, no una cifra que la ley
enuncie con ese número. Algunas empresas usan 240, otras 160 y otras el número real de horas del mes.
El parámetro está marcado \`verificar_antes_de_produccion\` y VERTIENTE usa 240 en toda la simulación
para que los recargos sean reproducibles.

Segunda advertencia: la base de ese cálculo es la **remuneración mensual**. En VERTIENTE se usa la
remuneración fija (sueldo base más los rubros fijos del cargo), sin los componentes variables del mes.
Esta es una política interna y **no hay un parámetro que la respalde**: es un punto pendiente de
verificación, porque existe criterio de que los componentes variables habituales deberían integrar la
base. Ver la sección 20.

### 4.3 Los topes y la autorización previa

| Regla | Valor | Parámetro |
|---|---|---|
| Jornada máxima ordinaria diaria | 8 horas | \`jornada_horas_diarias\` |
| Jornada máxima ordinaria semanal | 40 horas | \`jornada_horas_semanales\` |
| Descanso semanal obligatorio | 48 horas seguidas | \`descanso_semanal_horas\` |
| Tope de horas suplementarias por día | 4 horas | \`horas_suplementarias_tope_diario\` |
| Tope de horas suplementarias por semana | 12 horas | \`horas_suplementarias_tope_semanal\` |

**Superar el tope es una infracción del empleador, no del colaborador.** Si un estibador llega al tope
semanal, el problema es de planificación del jefe de CD, y así lo dice el parámetro
\`horas_suplementarias_tope_semanal\`. Nadie debe pedirle a un colaborador que "no registre" horas para
no pasarse del tope: eso es una falta grave y se reporta a Relaciones Laborales.

**El procedimiento de autorización previa en VERTIENTE** tiene cuatro pasos y no admite atajos:

1. El supervisor o jefe solicita la sobrejornada en el sistema de asistencia **antes** de que ocurra,
   indicando motivo, personas, fecha y número de horas estimadas.
2. El jefe de la instalación aprueba o rechaza. La aprobación registrada es la vía **normal** de
   liquidación; su ausencia nunca extingue el derecho al pago de una hora efectivamente trabajada
   (ver el cierre de esta sección y el Art. 40 del Reglamento Interno de Trabajo).
3. El colaborador marca entrada y salida real. La hora se paga sobre lo **marcado**, no sobre lo
   estimado.
4. Nómina cruza autorización contra marcación al corte del día 20 y liquida en el rol del mes.

Las horas trabajadas sin autorización previa **no se pierden**: se liquidan igual si el control de
asistencia demuestra que se trabajaron, y se abre un caso de gestión contra la jefatura que no cumplió
el procedimiento. VERTIENTE no usa el procedimiento interno como excusa para no pagar trabajo real.

### 4.4 Tres ejemplos resueltos

#### Ejemplo resuelto 5 — estibador que se quedó dos horas un martes

Wilson Chalá, estibador del CD de Quito, remuneración fija mensual USD 490,00. El martes 15 de
septiembre de 2026 se quedó de 17h00 a 19h00 para terminar la carga de un camión de ruta.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Valor de la hora ordinaria | 490,00 ÷ 240 | 2,041666… USD/hora |
| 2. Tipo de hora | Día laborable, después de la jornada, entre 06h00 y 24h00 → **hora suplementaria diurna**, factor 1,50 (parámetro \`recargo_hora_suplementaria_diurna\`) | Factor 1,50 |
| 3. Cálculo | 2 h × 2,041666… × 1,50 = 6,125 | **USD 6,13** |
| 4. Control de topes | 2 horas ≤ 4 diarias (\`horas_suplementarias_tope_diario\`) y ≤ 12 semanales (\`horas_suplementarias_tope_semanal\`) | Dentro de norma |

En su rol de septiembre, Wilson vería esta línea como "horas suplementarias diurnas: 2,00 h — USD 6,13".
Ese valor **es materia gravada**: sube su aporte personal al IESS, pero también sube su décimo tercero
y sus fondos de reserva.

#### Ejemplo resuelto 6 — operario de planta en turno nocturno

Marlon Zambrano, operario de línea de FRUTAL en Durán, remuneración fija mensual USD 500,00. Su jornada
**ordinaria** es de 21h00 a 05h00. En septiembre de 2026 cubrió 12 turnos nocturnos de 8 horas.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Horas nocturnas del mes | 12 turnos × 8 h | 96 horas |
| 2. Valor de la hora ordinaria | 500,00 ÷ 240 | 2,083333… USD/hora |
| 3. Tipo de recargo | Su jornada ya está pactada de noche (19h00 a 06h00, parámetro \`jornada_nocturna_rango\`) → **recargo de jornada nocturna del 25%** (parámetro \`recargo_jornada_nocturna\`), no hora suplementaria | Factor 1,25 |
| 4. Recargo a pagar | 96 h × 2,083333… × 0,25 = 50,00 | **USD 50,00** |
| 5. Verificación del total de esas horas | 96 h × 2,083333… × 1,25 = 250,00, de los cuales 200,00 ya están dentro de su sueldo mensual | 200,00 + 50,00 = 250,00 |

**El error frecuente:** Marlon cree a veces que por trabajar de noche le deben pagar el doble. No es
así. Él trabaja su jornada normal de 8 horas, solo que de noche, y por eso recibe su sueldo **más** un
25% sobre esas horas. La línea que aparece en su rol es "recargo de jornada nocturna: 96,00 h — USD
50,00", y es adicional a su sueldo base.

Si además de su turno nocturno Marlon se quedara dos horas más, de 05h00 a 07h00, esas dos horas se
liquidan por separado y **cada una según la franja en la que cae** (tabla de la sección 4.1):

| Hora adicional | Franja | Tipo | Factor | Parámetro |
|---|---|---|---|---|
| 05h00 a 06h00 | Entre 24h00 y 06h00 | Hora **suplementaria nocturna** | 2,00 | \`recargo_hora_suplementaria_nocturna\` |
| 06h00 a 07h00 | Entre 06h00 y 24h00 | Hora **suplementaria diurna** | 1,50 | \`recargo_hora_suplementaria_diurna\` |

> 1 h × 2,083333… × 2,00 = 4,1667 → **USD 4,17** · 1 h × 2,083333… × 1,50 = 3,125 → **USD 3,13**
> · total **USD 7,30**

**No es correcto liquidar las dos horas al factor 1,50:** la hora de 05h00 a 06h00 está dentro del rango
nocturno y se paga con el 100% de recargo. Lo que sí es cierto es que nunca se suman el 25% de jornada
nocturna y el recargo suplementario sobre la misma hora: cada hora se paga bajo **un solo** concepto.

#### Ejemplo resuelto 7 — auxiliar que trabajó un domingo de feriado

Digna Macías, auxiliar de bodega y despacho del CD de Manta, remuneración fija mensual USD 512,00.
Trabajó 6 horas el **domingo 24 de mayo de 2026**, que además es feriado nacional por la Batalla de
Pichincha (tabla \`feriados_nacionales_2026\`).

| Paso | Operación | Resultado |
|---|---|---|
| 1. Valor de la hora ordinaria | 512,00 ÷ 240 | 2,133333… USD/hora |
| 2. Tipo de hora | Domingo, día de descanso de Digna, y feriado → **hora extraordinaria**, factor 2,00 (parámetro \`recargo_hora_extraordinaria\`) | Factor 2,00 |
| 3. Cálculo | 6 h × 2,133333… × 2,00 = 25,60 | **USD 25,60** |
| 4. No acumulación | No se suma "domingo" + "feriado": es un solo concepto, factor 2,00 | Confirmado |

**Dos advertencias sobre este ejemplo.** Primera: la tabla \`feriados_nacionales_2026\` está marcada
\`verificar_antes_de_produccion\` porque la regla de traslado de feriados y los feriados **locales** de
cada ciudad (Guayaquil, Durán, Quito, Cuenca, Ambato, Manta, Machala, Santo Domingo, Loja, Quevedo,
Ibarra) no constan en ella y **sí generan recargo** para el personal de esa localidad. Antes de liquidar
un recargo por feriado hay que verificar el calendario oficial de la ciudad.

Segunda: trabajar en día de descanso obligatorio no puede volverse costumbre. El parámetro
\`descanso_semanal_horas\` fija 48 horas seguidas de descanso; en operaciones que no pueden parar el
descanso puede trasladarse a otros dos días seguidos de la semana, **previo acuerdo y registro**, no
por decisión unilateral del jefe.

---

## 5. Décima tercera remuneración

### 5.1 Qué es y quién tiene derecho

La décima tercera remuneración —lo que todo el mundo llama "el décimo tercero" o "el bono navideño"—
es un beneficio social que recibe **todo** colaborador bajo relación de dependencia, sin importar su
cargo, su tipo de contrato ni su tiempo de servicio. Quien trabajó un mes recibe la parte de un mes.

| Dato | Valor | Parámetro |
|---|---|---|
| Fórmula | Un doceavo (1/12) de todo lo percibido por **remuneraciones** en el período | \`decimo_tercero_formula\` |
| Período de cálculo | 1 de diciembre del año anterior al 30 de noviembre del año en curso | \`decimo_tercero_periodo\` |
| Período vigente en 2026 | 2025-12-01 a 2026-11-30 | \`periodos_beneficios_2026\` |
| Fecha límite de pago | 2026-12-24 | \`decimo_tercero_fecha_pago\` |
| ¿Se puede mensualizar? | Sí, a elección del colaborador | \`decimo_tercero_mensualizacion\` |
| ¿Es materia gravada para el IESS? | **No** | \`iess_base_calculo\` |

**Qué entra en la base y qué no.** Entra todo lo que es remuneración: sueldo base, comisiones, bonos de
productividad y de bodega, horas suplementarias y extraordinarias, recargo nocturno. **No** entran los
otros beneficios sociales: la décima cuarta, los fondos de reserva, las utilidades, ni los viáticos que
no sean remuneración.

### 5.2 Ejemplo resuelto 8 — décimo tercero de un prevendedor con comisiones variables

Jefferson Quimí, prevendedor de Guayaquil. Período 2025-12-01 a 2026-11-30. Los meses de octubre y
noviembre de 2026 son proyección, porque a la fecha de este manual (2026-09-16) todavía no ocurrieron.

| Mes | Sueldo base | Comisiones | Remuneración percibida |
|---|---|---|---|
| Diciembre 2025 | 520,00 | 402,00 | 922,00 |
| Enero 2026 | 520,00 | 168,00 | 688,00 |
| Febrero 2026 | 520,00 | 214,00 | 734,00 |
| Marzo 2026 | 520,00 | 246,00 | 766,00 |
| Abril 2026 | 520,00 | 231,00 | 751,00 |
| Mayo 2026 | 520,00 | 288,00 | 808,00 |
| Junio 2026 | 520,00 | 255,00 | 775,00 |
| Julio 2026 | 520,00 | 279,00 | 799,00 |
| Agosto 2026 | 520,00 | 236,00 | 756,00 |
| Septiembre 2026 | 520,00 | 273,00 | 793,00 |
| Octubre 2026 (proyectado) | 520,00 | 290,00 | 810,00 |
| Noviembre 2026 (proyectado) | 520,00 | 318,00 | 838,00 |
| **Total del período** | **6.240,00** | **3.200,00** | **9.440,00** |

| Paso | Operación | Resultado |
|---|---|---|
| 1. Sumar todo lo percibido como remuneración | 6.240,00 + 3.200,00 | USD 9.440,00 |
| 2. Dividir para 12 | 9.440,00 ÷ 12 = 786,666… | **USD 786,67** |

Su décimo tercero de USD 786,67 es **mayor** que su sueldo base de USD 520,00. Esa es exactamente la
razón por la que se calcula sobre lo percibido y no sobre el sueldo nominal: las comisiones cuentan.
Si alguien le dice a Jefferson que su décimo tercero "es un sueldo", le está informando mal.

### 5.3 Ejemplo resuelto 9 — prorrateo de quien ingresó a mitad de período

Un estibador ingresó el **20 de abril de 2026** con remuneración fija de USD 490,00 mensuales, sin
variables. Su primer décimo tercero corresponde al período 2025-12-01 a 2026-11-30, aunque él solo
trabajó una parte.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Abril de 2026 (del 20 al 30 = 11 días) | 490,00 × 11 ÷ 30 = 179,666… | USD 179,67 |
| 2. Mayo a noviembre de 2026 (7 meses completos) | 490,00 × 7 | USD 3.430,00 |
| 3. Total percibido en el período | 179,67 + 3.430,00 | USD 3.609,67 |
| 4. Décimo tercero | 3.609,67 ÷ 12 = 300,805… | **USD 300,81** |

**El punto que hay que explicarle:** no existe un "prorrateo" adicional que hacer. La fórmula
"un doceavo de lo percibido" **ya** prorratea sola, porque quien trabajó menos meses percibió menos. El
error frecuente es calcular el décimo completo y luego volver a prorratearlo por meses trabajados, lo
que produce un valor menor al que corresponde y perjudica al colaborador.

### 5.4 Mensualizado contra acumulado

| Modalidad | Cómo se ve | Cuándo conviene | Total anual |
|---|---|---|---|
| **Acumulado** | Un solo pago hasta el 2026-12-24 (\`decimo_tercero_fecha_pago\`) | Si usted quiere un monto grande en diciembre | El mismo |
| **Mensualizado** | Una línea de ingreso en el rol de cada mes, igual a la remuneración de ese mes ÷ 12 | Si usted necesita flujo mes a mes | El mismo |

Ejemplo de mensualización con el rol de Wilson Chalá de septiembre de 2026: materia gravada
USD 569,71 ÷ 12 = **USD 47,48**. Si su remuneración de octubre fuera distinta, su décimo mensualizado
de octubre también lo sería.

**Advertencia de verificación.** El parámetro \`decimo_tercero_mensualizacion\` está marcado
\`verificar_antes_de_produccion\`: la opción de mensualizar existe con certeza, pero el trámite exacto
vigente en 2026 —en qué plataforma se registra la decisión, en qué plazo del año debe declararse y si
requiere ratificación anual— debe confirmarse con Nómina y Compensaciones y con el Ministerio del
Trabajo antes de comunicárselo a un colaborador como procedimiento.

### 5.5 Errores frecuentes con el décimo tercero

| Error | Por qué está mal | Lo correcto |
|---|---|---|
| Calcularlo sobre el sueldo base | La fórmula es sobre lo **percibido**, que incluye comisiones y horas extra | Sumar las 12 remuneraciones reales del período y dividir para 12 |
| Incluir el décimo cuarto o los fondos de reserva en la base | Son beneficios sociales, no remuneración | Excluirlos de la suma |
| Descontarle aporte al IESS | No es materia gravada (\`iess_base_calculo\`) | No se le descuenta aporte personal |
| Creer que quien renunció en septiembre lo pierde | El derecho se gana día a día | Se paga proporcional en el acta de finiquito |
| Usar el año calendario (enero a diciembre) como período | El período es de diciembre a noviembre (\`decimo_tercero_periodo\`) | 2025-12-01 a 2026-11-30 |

---

## 6. Décima cuarta remuneración

### 6.1 Qué es y por qué en VERTIENTE hay dos fechas

La décima cuarta remuneración —"el bono escolar"— es **un Salario Básico Unificado completo para todos
por igual** (parámetro \`decimo_cuarto_valor\`, equivalente a la clave \`sbu\`: USD 470,00 en la
simulación). Un estibador y un jefe de centro de distribución reciben exactamente lo mismo. No depende
de cuánto gane cada quien.

Lo que sí cambia es **cuándo** se cobra, y eso depende de la **región de la instalación donde usted
trabaja**, no de dónde vive.

| Región | Instalaciones de VERTIENTE | Período de cálculo | Fecha límite de pago | Parámetros |
|---|---|---|---|---|
| **Costa e Insular** | Matriz Guayaquil, planta FRUTAL Durán, CD Manta, CD Machala, CD Santo Domingo, CD Quevedo | 2025-03-01 a 2026-02-28 | **2026-03-15** | \`decimo_cuarto_periodo_costa_galapagos\`, \`decimo_cuarto_fecha_pago_costa_galapagos\` |
| **Sierra y Amazonía** | CD Quito, CD Cuenca, CD Ambato, CD Loja, CD Ibarra | 2025-08-01 a 2026-07-31 | **2026-08-15** | \`decimo_cuarto_periodo_sierra_amazonia\`, \`decimo_cuarto_fecha_pago_sierra_amazonia\` |

La regla que evita el reclamo más común está en el propio parámetro
\`decimo_cuarto_fecha_pago_costa_galapagos\`: **manda la región del lugar de trabajo, no la del domicilio
del colaborador.** Un prevendedor domiciliado en Ambato pero asignado al CD de Manta cobra en marzo, no
en agosto. Si un colaborador se traslada de instalación a mitad de período, Nómina liquida la parte
proporcional de cada régimen, y esa es una situación que se revisa caso por caso.

A la fecha de este manual (2026-09-16), ambas décimas cuartas de 2026 **ya fueron pagadas**
(tabla \`periodos_beneficios_2026\`). El próximo pago de Costa vence el 2027-03-15 y el de Sierra el
2027-08-15.

### 6.2 Ejemplo resuelto 10 — colaborador de Guayaquil (Costa), período completo

Jefferson Quimí trabajó todo el período 2025-03-01 a 2026-02-28 en la matriz de Guayaquil.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Valor base | Un SBU completo (\`decimo_cuarto_valor\` = \`sbu\`) | USD 470,00 |
| 2. Tiempo trabajado en el período | 12 meses completos | 100% |
| 3. Décima cuarta | 470,00 × 100% | **USD 470,00** |
| 4. Fecha de cobro | Hasta el 2026-03-15 | Ya pagada |

Sus comisiones de USD 3.200 al año **no cambian nada**: la décima cuarta no depende del sueldo.

### 6.3 Ejemplo resuelto 11 — colaboradora de Quito (Sierra), período incompleto

Narcisa Pilamunga, mercaderista de trade marketing del CD de Quito, ingresó el **12 de enero de 2026**.
Su primera décima cuarta corresponde al período de Sierra 2025-08-01 a 2026-07-31, del cual ella
trabajó solo una parte.

| Paso | Operación | Resultado |
|---|---|---|
| 1. Contar los días trabajados dentro del período | 12-ene a 31-ene: 20 días · febrero: 28 · marzo: 31 · abril: 30 · mayo: 31 · junio: 30 · julio: 31 | **201 días** |
| 2. Valor diario de la décima cuarta | 470,00 ÷ 360 = 1,305555… | 1,3056 USD/día |
| 3. Proporcional | 470,00 × 201 ÷ 360 = 262,416… | **USD 262,42** |
| 4. Fecha de cobro | Hasta el 2026-08-15 | Ya pagada |

**Advertencia de honestidad sobre el divisor.** VERTIENTE usa un año comercial de 360 días para
prorratear beneficios, porque es la convención más extendida en la práctica de nómina ecuatoriana y
porque produce un resultado ligeramente **más favorable al colaborador** que usar 365. Con 365 el
resultado sería USD 258,82, es decir USD 3,60 menos. **No existe un parámetro en
\`datos/parametros-legales.json\` que fije este divisor**, y por eso se reporta como pendiente en la
sección 20. Mientras no se verifique, VERTIENTE aplica el criterio más favorable al colaborador, que es
360.

### 6.4 Mensualización y jornada parcial

Si el colaborador eligió mensualizar (parámetro \`decimo_cuarto_mensualizacion\`), en su rol aparece una
línea fija de 470,00 ÷ 12 = **USD 39,17** cada mes. Es un valor constante, a diferencia del décimo
tercero mensualizado, porque la décima cuarta no depende de lo que se gane.

Para jornada parcial la décima cuarta se paga **proporcional a la jornada** (parámetro
\`decimo_cuarto_valor\`). Por ejemplo, una jornada parcial de 20 horas semanales frente a las 40 legales
(\`jornada_horas_semanales\`) recibiría 470,00 × 20 ÷ 40 = USD 235,00 por período completo.

### 6.5 Errores frecuentes con la décima cuarta

| Error | Por qué está mal | Lo correcto |
|---|---|---|
| Creer que "el que gana más cobra más" | Es un SBU igual para todos (\`decimo_cuarto_valor\`) | Todos cobran lo mismo |
| Calcularla por la región donde vive el colaborador | Manda el lugar de trabajo | La región de la instalación asignada |
| Usar el año calendario como período | Son períodos escolares diferenciados | Costa: mar-feb · Sierra: ago-jul |
| Pensar que no la cobra quien tiene menos de un año | Se paga proporcional | Prorrateo por días trabajados |
| Descontarle aporte al IESS | No es materia gravada | Sin descuento de aporte personal |

---

## 7. Fondos de reserva

### 7.1 Qué son y desde cuándo

Los fondos de reserva equivalen a **un mes de remuneración por cada año trabajado** con el mismo
empleador. En el rol se ven como un 8,33% de la materia gravada del mes (parámetro
\`fondos_reserva_porcentaje\`), que no es otra cosa que 1 ÷ 12 expresado en porcentaje.

| Dato | Valor | Parámetro |
|---|---|---|
| Porcentaje | 8,33% de la materia gravada del mes | \`fondos_reserva_porcentaje\` |
| Desde cuándo se generan | Desde el mes 13 de trabajo, es decir cumplido un año completo con el mismo empleador | \`fondos_reserva_inicio\` |
| Modalidades | Mensualizado en el rol, o acumulado en la cuenta individual del IESS | \`fondos_reserva_modalidad\` |
| ¿Es materia gravada? | No | \`iess_base_calculo\` |

**La pregunta número uno del personal nuevo de ruta y bodega:** "¿por qué no me pagan fondos de
reserva?". La respuesta es el parámetro \`fondos_reserva_inicio\`: durante los **primeros doce meses no
se generan**. Si alguien ingresó en marzo de 2026, sus fondos empiezan a correr desde marzo de 2027.
No es un descuido de Nómina ni un error del rol.

Ejemplo concreto a la fecha de este manual: un auxiliar que ingresó el **3 de noviembre de 2025**
cumple su primer año el 3 de noviembre de 2026. A la fecha de corte (2026-09-16) todavía le faltan
poco menos de dos meses. Su primera línea de fondos de reserva aparecerá en el rol de noviembre de 2026,
por la parte proporcional de ese mes.

### 7.2 Ejemplo resuelto 12 — fondos de reserva de Wilson Chalá

Wilson ingresó en 2023, de modo que ya genera fondos de reserva. Su materia gravada de septiembre de
2026 fue de USD 569,71 (ver ejemplo 4).

| Paso | Operación | Resultado |
|---|---|---|
| 1. Identificar la materia gravada del mes | 490,00 + 45,00 + 18,38 + 16,33 | USD 569,71 |
| 2. Aplicar el 8,33% (\`fondos_reserva_porcentaje\`) | 569,71 × 0,0833 = 47,456… | **USD 47,46** |

Nótese que las horas suplementarias y extraordinarias y el bono de bodega **sí** entran en la base: son
remuneración. Si Wilson hubiera hecho más horas ese mes, sus fondos de reserva también habrían sido
mayores.

### 7.3 Mensualizado o acumulado: cómo se decide y cómo se cambia

| Modalidad | Qué pasa con el dinero | Ventaja | Desventaja |
|---|---|---|---|
| **Mensualizado** | Aparece como ingreso en el rol de cada mes y usted lo recibe con su sueldo | Liquidez inmediata | No se acumula un ahorro |
| **Acumulado en el IESS** | VERTIENTE lo transfiere al IESS con la planilla mensual y queda en su cuenta individual | Se forma un fondo que usted puede retirar según las reglas del IESS | No lo tiene disponible mes a mes |

La decisión **es del colaborador**, no de la empresa, y se registra en la plataforma del IESS. VERTIENTE
solo ejecuta lo que el IESS notifica en la planilla.

**Advertencia de verificación.** El parámetro \`fondos_reserva_modalidad\` está marcado
\`verificar_antes_de_produccion\` en un punto muy concreto: **con qué periodicidad el IESS permite
cambiar de modalidad y con qué plazo el cambio surte efecto en la planilla.** Por eso, ante la pregunta
"si cambio hoy, ¿desde cuándo lo veo en mi rol?", la respuesta correcta es "hay que verificarlo en la
plataforma del IESS", no una fecha inventada.

**Punto crítico para la liquidación:** si usted eligió acumulado, sus fondos de reserva **no aparecen
en el acta de finiquito**, porque ya están en el IESS y se cobran directamente allí. Esta es una de las
confusiones más dolorosas en las salidas, y se explica en la sección 13.

---

## 8. Vacaciones

### 8.1 Cuántos días corresponden

| Dato | Valor | Parámetro |
|---|---|---|
| Vacaciones anuales | 15 días **calendario** ininterrumpidos por año de servicio | \`vacaciones_dias_anuales\` |
| Día adicional | Uno por cada año, **desde el sexto año** de servicio | \`vacaciones_dia_adicional_desde_anio\` |
| Tope de días adicionales | 15 días adicionales (techo total: 30 días) | \`vacaciones_dias_adicionales_tope\` |
| Acumulación máxima | Hasta 3 años | \`vacaciones_acumulacion_maxima_anios\` |
| Pago | La remuneración del período se paga **por anticipado**, antes de salir | \`vacaciones_anticipo_pago\` |

**Son días calendario, no días hábiles.** Quince días de vacaciones incluyen los sábados, domingos y
feriados que caigan dentro del período. Si usted sale el lunes 5 de octubre, sus 15 días terminan el
lunes 19 y usted se reincorpora el martes 20. Es el malentendido más frecuente en bodega y en planta.

Escala completa por antigüedad (tabla \`vacaciones_por_antiguedad\`):

| Años de servicio cumplidos | Días de vacaciones | Años de servicio cumplidos | Días de vacaciones |
|---|---|---|---|
| 1 a 5 | 15 | 13 | 23 |
| 6 | 16 | 14 | 24 |
| 7 | 17 | 15 | 25 |
| 8 | 18 | 16 | 26 |
| 9 | 19 | 17 | 27 |
| 10 | 20 | 18 | 28 |
| 11 | 21 | 19 | 29 |
| 12 | 22 | 20 o más | 30 (tope) |

### 8.2 Cuánto vale la vacación (la duda número uno de la fuerza de ventas)

Un prevendedor o un vendedor de ruta que sale de vacaciones **no cobra su sueldo base a secas**. Cobra
sobre el promedio de **todo lo que percibió como remuneración durante el año de servicio**, incluidas
sus comisiones y sus horas suplementarias. Esa es la única forma de que salir de vacaciones no le
cueste dinero a quien tiene ingresos variables.

> **Valor del día de vacación = lo percibido como remuneración en el año de servicio ÷ 360**
>
> Para los 15 días base, esto equivale a **lo percibido ÷ 24** (la vigésima cuarta parte).

**Advertencia de honestidad.** El archivo \`datos/parametros-legales.json\` **no contiene un parámetro que
fije esta fórmula ni su divisor.** El fundamento se cita en términos generales —Código del Trabajo,
capítulo de las vacaciones— y este manual lo reporta como pendiente de verificación en la sección 20.
Lo que sí es cierto y no admite duda es el principio: la vacación se paga sobre lo efectivamente
percibido en el año, no sobre el sueldo nominal.

### 8.3 Ejemplo resuelto 13 — vacaciones de un vendedor de ruta con comisiones variables

Édison Tenesaca, vendedor de ruta (autoventa) del CD de Cuenca. Sueldo base USD 540,00. Su año de
servicio corrió del **1 de septiembre de 2025 al 31 de agosto de 2026**. En diciembre de 2025 hizo
20 horas suplementarias diurnas por el pico de temporada.

| Mes | Sueldo base | Comisiones | Horas suplementarias | Remuneración percibida |
|---|---|---|---|---|
| Septiembre 2025 | 540,00 | 380,00 | — | 920,00 |
| Octubre 2025 | 540,00 | 410,00 | — | 950,00 |
| Noviembre 2025 | 540,00 | 455,00 | — | 995,00 |
| Diciembre 2025 | 540,00 | 602,50 | 67,50 | 1.210,00 |
| Enero 2026 | 540,00 | 300,00 | — | 840,00 |
| Febrero 2026 | 540,00 | 330,00 | — | 870,00 |
| Marzo 2026 | 540,00 | 395,00 | — | 935,00 |
| Abril 2026 | 540,00 | 420,00 | — | 960,00 |
| Mayo 2026 | 540,00 | 465,00 | — | 1.005,00 |
| Junio 2026 | 540,00 | 400,00 | — | 940,00 |
| Julio 2026 | 540,00 | 430,00 | — | 970,00 |
| Agosto 2026 | 540,00 | 385,00 | — | 925,00 |
| **Total** | **6.480,00** | **4.972,50** | **67,50** | **11.520,00** |

Comprobación de las horas suplementarias de diciembre: 20 h × (540,00 ÷ 240) × 1,50 = 20 × 2,25 × 1,50
= **USD 67,50**.

**Cálculo de la vacación de Édison** (tiene 4 años de servicio, luego le corresponden 15 días, tabla
\`vacaciones_por_antiguedad\`):

| Paso | Operación | Resultado |
|---|---|---|
| 1. Total percibido como remuneración en el año de servicio | 6.480,00 + 4.972,50 + 67,50 | USD 11.520,00 |
| 2. Valor del día de vacación | 11.520,00 ÷ 360 | USD 32,00 por día |
| 3. Valor de 15 días | 32,00 × 15 | **USD 480,00** |
| 4. Comprobación por la vigésima cuarta parte | 11.520,00 ÷ 24 | **USD 480,00** ✓ |
| 5. Cuándo se le paga | Por anticipado, antes de salir (\`vacaciones_anticipo_pago\`) | Antes del primer día de descanso |

**La comparación que hay que mostrarle a Édison.** Si su vacación se hubiera calculado solo sobre el
sueldo base, habría recibido 540,00 × 12 ÷ 24 = **USD 270,00**. Con la fórmula correcta recibe
**USD 480,00**, es decir **USD 210,00 más**. Quien le diga que "las vacaciones se pagan con el sueldo"
lo está perjudicando en esa diferencia.

**Si Édison tuviera 8 años de servicio**, le corresponderían 18 días (tabla \`vacaciones_por_antiguedad\`)
y su vacación valdría 32,00 × 18 = **USD 576,00**.

### 8.4 Acumulación, negativa justificada y "venta" de vacaciones

**Acumulación.** Usted puede acumular vacaciones hasta por tres años y gozarlas juntas en el cuarto
(parámetro \`vacaciones_acumulacion_maxima_anios\`). **Que usted no las tome no hace desaparecer su
derecho:** lo que se pierde al pasar el tope de acumulación es la posibilidad de **gozar juntos** los
períodos más antiguos, no el derecho en sí, que se liquida en dinero al terminar la relación laboral
(sección 13.2). La nota de la tabla \`vacaciones_por_antiguedad\` es expresa: el empleador puede negar y
acumular hasta 15 días en casos justificados, pero **nunca suprimir el derecho**. Si alguien le dice
que "sus vacaciones viejas ya se perdieron", le está informando mal. Por eso Nómina y Compensaciones
de VERTIENTE emite una **alerta automática a la jefatura y
al colaborador cuando se acumulan dos períodos**, y una alerta con copia a la Gerencia de Recursos
Humanos al llegar a tres.

**Negativa justificada.** El empleador puede negar hasta 15 días de vacaciones en casos justificados y
acumularlos, pero **nunca puede suprimir el derecho** (nota de la tabla \`vacaciones_por_antiguedad\`).
En VERTIENTE una negativa debe constar por escrito, con motivo operativo concreto y con fecha
alternativa propuesta. "No hay gente" no es un motivo escrito; "cierre de inventario anual del CD entre
el 1 y el 12 de diciembre" sí lo es.

**"Venta" de vacaciones.** VERTIENTE **no compra vacaciones**. El derecho a las vacaciones es un
derecho al **descanso**, no a un pago adicional, y cambiarlo por dinero contradice su finalidad. Las
vacaciones no gozadas se pagan en dinero **solo cuando termina la relación laboral**, dentro del acta
de finiquito (sección 13). Si un colaborador propone "que me las paguen y sigo trabajando", la
respuesta es no, y la razón se le explica sin rodeos: su salud y su descanso no son negociables.

### 8.5 Errores frecuentes con las vacaciones

| Error | Por qué está mal | Lo correcto |
|---|---|---|
| Contar los 15 días como días hábiles | Son días calendario (\`vacaciones_dias_anuales\`) | 15 días corridos, fines de semana incluidos |
| Pagar la vacación sobre el sueldo base a un comisionista | La base es lo percibido en el año | Dividir lo percibido para 360 y multiplicar por los días |
| Pagar la vacación después del retorno | Se paga por anticipado (\`vacaciones_anticipo_pago\`) | Antes de que el colaborador salga |
| Dar el día adicional desde el segundo año | El día adicional corre desde el sexto (\`vacaciones_dia_adicional_desde_anio\`) | Del año 1 al 5 son 15 días fijos |
| Acumular cuatro o cinco períodos "porque no hay gente" | El tope es de 3 años (\`vacaciones_acumulacion_maxima_anios\`) | Planificar el calendario de vacaciones del CD |

---

## 9. Utilidades

### 9.1 Cómo funciona el reparto

Las utilidades son la participación de los colaboradores en el resultado del ejercicio anterior. Es el
**15% de las utilidades líquidas** (parámetro \`utilidades_porcentaje_total\`), y se parte en dos bolsas
que se reparten con reglas completamente distintas.

| Bolsa | Porcentaje | Cómo se reparte | Parámetro |
|---|---|---|---|
| Por tiempo trabajado | 10% de las utilidades líquidas | Por igual entre todos, en proporción a los **días trabajados** en el ejercicio, **sin distinción de cargo ni de sueldo** | \`utilidades_porcentaje_por_trabajador\` |
| Por cargas familiares | 5% de las utilidades líquidas | En proporción al **número de cargas familiares** de cada colaborador | \`utilidades_porcentaje_cargas_familiares\` |

**El punto que más sorprende:** su sueldo **no influye** en el cálculo. Un operario de línea y un jefe
regional que trabajaron los mismos días reciben exactamente lo mismo por la bolsa del 10%. Así lo dice
el parámetro \`utilidades_porcentaje_por_trabajador\`.

**Y el punto que más duele:** si la empresa no tuvo utilidades líquidas, **no hay reparto**. Las
utilidades no son un bono garantizado ni un décimo quinto sueldo. Así lo dice el parámetro
\`utilidades_porcentaje_total\`.

### 9.2 Quién cuenta como carga familiar

Cuentan como carga familiar (parámetro \`utilidades_porcentaje_cargas_familiares\`):

- El cónyuge, o el conviviente en unión de hecho legalmente reconocida.
- Los hijos **menores de 18 años**.
- Los hijos con discapacidad, **de cualquier edad**.

Las cargas deben estar **declaradas y documentadas ante Recursos Humanos antes del cierre del
ejercicio**. Si no se declaran a tiempo, no se computan. Esto no es una formalidad burocrática: es la
causa número uno de reclamos de utilidades en VERTIENTE. La documentación es partida de nacimiento o
cédula del hijo, acta de matrimonio o inscripción de unión de hecho, y carné de discapacidad cuando
corresponda.

**Recordatorio operativo:** un hijo que cumple 18 años durante el ejercicio deja de contar como carga
a partir de esa fecha, y Nómina lo prorratea. Un hijo que nace en septiembre cuenta desde septiembre.

### 9.3 Ejemplo resuelto 14 — reparto de utilidades del ejercicio 2025

Datos de la simulación para el ejercicio 2025 de Corporación Vertiente S.A., pagadas hasta el
2026-04-15 (parámetro \`utilidades_fecha_limite_pago\`):

| Dato | Valor |
|---|---|
| Utilidades líquidas del ejercicio 2025 | USD 4.200.000,00 |
| 15% a repartir (\`utilidades_porcentaje_total\`) | USD 630.000,00 |
| Bolsa del 10% por tiempo trabajado | USD 420.000,00 |
| Bolsa del 5% por cargas familiares | USD 210.000,00 |
| Total de días trabajados por toda la nómina en 2025 | 420.000 días-persona |
| Total de cargas familiares declaradas y validadas | 1.400 cargas |

**Los dos valores unitarios del ejercicio:**

| Valor unitario | Operación | Resultado |
|---|---|---|
| Valor del día trabajado | 420.000,00 ÷ 420.000 días | **USD 1,00 por día** |
| Valor de la carga familiar | 210.000,00 ÷ 1.400 cargas | **USD 150,00 por carga** |

**Colaborador A — Jefferson Quimí**, prevendedor de Guayaquil. Trabajó los 365 días de 2025. Tiene
3 cargas familiares declaradas (cónyuge y dos hijos menores de 18 años).

| Paso | Operación | Resultado |
|---|---|---|
| 1. Componente por tiempo trabajado | 365 días × 1,00 | USD 365,00 |
| 2. Componente por cargas familiares | 3 cargas × 150,00 | USD 450,00 |
| 3. **Total utilidades de Jefferson** | 365,00 + 450,00 | **USD 815,00** |

**Colaboradora B — Digna Macías**, auxiliar de bodega del CD de Manta. Ingresó el **14 de abril de
2025**, de modo que trabajó 262 días del ejercicio. Tiene 1 carga familiar declarada (un hijo menor).

| Paso | Operación | Resultado |
|---|---|---|
| 1. Días trabajados en 2025 | 14-abr a 31-dic: 17 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 | 262 días |
| 2. Componente por tiempo trabajado | 262 días × 1,00 | USD 262,00 |
| 3. Componente por cargas familiares | 1 carga × 150,00 | USD 150,00 |
| 4. **Total utilidades de Digna** | 262,00 + 150,00 | **USD 412,00** |

**Lo que este par de ejemplos enseña.** Jefferson gana bastante más que Digna en su rol mensual, pero
su ventaja en utilidades **no viene de su sueldo**: viene de haber trabajado 103 días más y de tener
2 cargas familiares más. Si Digna hubiera trabajado el año completo y tuviera 3 cargas, recibiría
exactamente lo mismo que Jefferson.

### 9.4 El tope individual

| Dato | Valor | Parámetro |
|---|---|---|
| Tope individual de utilidades | 24 SBU | \`utilidades_tope\` |
| Equivalente en dinero con el SBU de la simulación | 24 × 470,00 = **USD 11.280,00** | \`utilidades_tope\` × \`sbu\` |
| Destino del excedente | Se transfiere al régimen de prestaciones solidarias de la seguridad social | \`utilidades_tope\` |

Ni Jefferson ni Digna se acercan al tope. El tope se vuelve relevante en años de utilidad muy alta y en
personal comercial de alta comisión. **Advertencia:** el parámetro \`utilidades_tope\` está marcado
\`verificar_antes_de_produccion\` porque no se tiene certeza absoluta de si los 24 SBU aplican por igual a
todos los trabajadores o si hay tramos distintos según el tipo de cargo, ni del mecanismo exacto de
transferencia del excedente. Antes de liquidar utilidades de personal comercial de alta comisión, esto
debe verificarse.

### 9.5 Quien ya no trabaja en la empresa

**El derecho no se pierde por haber salido.** Quien trabajó durante el ejercicio conserva su derecho a
la parte proporcional de utilidades aunque ya no esté en la empresa al momento del pago (parámetro
\`utilidades_extrabajadores\`). VERTIENTE debe **convocar públicamente** a los extrabajadores para el
cobro.

Esta es una consulta frecuentísima del personal de ruta que salió a mitad de año. La respuesta correcta
es siempre: "sí le corresponden, por los días que trabajó en ese ejercicio; esté pendiente de la
convocatoria pública y acérquese con su cédula". Nunca "ya no le toca porque se fue".

### 9.6 Errores frecuentes con las utilidades

| Error | Por qué está mal | Lo correcto |
|---|---|---|
| Creer que el que gana más recibe más | El reparto no depende del sueldo | Depende de días trabajados y cargas |
| Declarar las cargas después del cierre del ejercicio | No se computan fuera de plazo | Declararlas y documentarlas antes del cierre |
| Contar como carga a un hijo de 19 años sin discapacidad | El límite es 18 años | Solo menores de 18 o con discapacidad |
| Suponer que se pagan todos los años | Dependen de que haya utilidades líquidas | Si no hay utilidad, no hay reparto |
| Pensar que quien renunció las pierde | El derecho se conserva (\`utilidades_extrabajadores\`) | Cobro proporcional con convocatoria pública |
| Descontarles aporte al IESS | No son materia gravada (\`iess_base_calculo\`) | Sin aporte personal |

---

## 10. Aportes al IESS y prestaciones

### 10.1 Los dos aportes

| Aporte | Porcentaje | Quién lo paga | ¿Aparece en el rol? | Parámetro |
|---|---|---|---|---|
| Aporte personal | 9,45% de la materia gravada | El colaborador | **Sí**, como egreso | \`iess_aporte_personal\` |
| Aporte patronal | 11,15% de la materia gravada | VERTIENTE | **No**, es costo del empleador | \`iess_aporte_patronal\` |

#### Ejemplo resuelto 15 — aportes sobre la materia gravada de Jefferson Quimí

| Paso | Operación | Resultado |
|---|---|---|
| 1. Materia gravada de septiembre | Sueldo 520,00 + comisiones 273,00 | USD 793,00 |
| 2. Aporte personal (se le descuenta) | 793,00 × 9,45% = 74,9385 | **USD 74,94** |
| 3. Aporte patronal (lo paga la empresa) | 793,00 × 11,15% = 88,4195 | **USD 88,42** |
| 4. Total que ingresa al IESS por Jefferson | 74,94 + 88,42 | USD 163,36 |

El aporte patronal **no se descuenta de Jefferson y no aparece como egreso en su rol** (parámetro
\`iess_aporte_patronal\`). Cuando un colaborador pregunta "¿por qué la empresa me quita el 11,15%?", la
respuesta es que no se lo quita: lo pone la empresa además de su sueldo.

### 10.2 Qué ingresos son aportables

| Rubro | ¿Materia gravada? | Observación |
|---|---|---|
| Sueldo base | Sí | |
| Comisiones | Sí | Toda la comisión del mes |
| Bono de productividad de planta y bono de bodega | Sí | Bonos de eficiencia con carácter de remuneración |
| Horas suplementarias y extraordinarias | Sí | |
| Recargo de jornada nocturna | Sí | |
| Décima tercera y décima cuarta remuneración | **No** | Beneficios sociales |
| Fondos de reserva | **No** | Beneficio de seguridad social |
| Utilidades | **No** | |
| Viáticos, movilización y kilometraje sustentados | **No** (pendiente de verificación) | Ver la advertencia siguiente |

**Advertencia de verificación.** El parámetro \`iess_base_calculo\` está marcado
\`verificar_antes_de_produccion\` **precisamente por los rubros de frontera de VERTIENTE**: viáticos,
movilización de prevendedores, bono de ruta y comisiones variables. La instrucción del propio parámetro
es verificar rubro por rubro con el IESS y con Nómina antes de cerrar la planilla. Este manual no
resuelve esa duda: la declara.

**Base mínima de aportación.** No se aporta sobre menos del SBU en jornada completa (parámetro
\`iess_base_minima_aportacion\`). Para jornada parcial la base es proporcional a las horas efectivamente
trabajadas, pero la regla exacta aplicable a jornadas parciales y a ingresos y salidas a mitad de mes
está marcada para verificación.

### 10.3 Avisos de entrada y salida

| Aviso | Plazo del parámetro | Política de VERTIENTE | Parámetro |
|---|---|---|---|
| Aviso de entrada | 15 días desde el inicio de la relación laboral | **El mismo día de ingreso, sin usar el plazo** | \`iess_aviso_entrada_plazo\` |
| Aviso de salida | 3 días desde la terminación | El mismo día de la salida | \`iess_aviso_salida_plazo\` |

La afiliación debe hacerse **desde el primer día de labor**; el plazo es para registrar el aviso, no
para empezar a afiliar (nota del parámetro \`iess_aviso_entrada_plazo\`). El aviso de salida es crítico
porque de él dependen el seguro de desempleo, la cesantía y la atención médica del extrabajador; por eso
VERTIENTE no usa el plazo. Ambos parámetros están marcados \`verificar_antes_de_produccion\`: los plazos
han cambiado por resolución del IESS en distintos momentos, y antes de informar un plazo a un
colaborador que sale hay que verificarlo en la plataforma del IESS.

### 10.4 Préstamos del IESS y su descuento

| Tipo | Cómo llega al rol | Puede la empresa modificarlo |
|---|---|---|
| Préstamo quirografario | El IESS notifica el dividendo mensual al empleador; VERTIENTE lo retiene del rol y lo transfiere junto con la planilla de aportes | **No.** El empleador no decide ni negocia el dividendo: solo ejecuta lo que el IESS notifica (\`iess_prestamo_quirografario_descuento\`) |
| Préstamo hipotecario | Mismo mecanismo de retención por rol y transferencia con la planilla | **No** |

En el rol de Jefferson (ejemplo 3) el dividendo quirografario aparece como un egreso de USD 96,40.
Si un colaborador quiere cambiar el monto del dividendo, refinanciar o precancelar, el trámite es
**directamente con el IESS**; Nómina solo puede explicarle el mecanismo y mostrarle el valor notificado.

**Advertencia:** el parámetro \`iess_prestamo_quirografario_descuento\` está marcado para verificación en
cuanto al tope del dividendo respecto del ingreso del afiliado y al monto máximo prestable, que el IESS
ajusta periódicamente. Este manual no registra esas cifras para no inventarlas.

### 10.5 Subsidios por enfermedad y por maternidad, y su efecto en el rol

**Enfermedad propia.** El esquema general (parámetro \`licencia_enfermedad_propia_subsidio\`) es que los
primeros días de enfermedad los asume el empleador y que a partir de cierto día el IESS paga subsidio al
afiliado que cumple los requisitos de aportación. **Este parámetro está marcado
\`verificar_antes_de_produccion\` en un punto muy sensible: el número exacto de días a cargo del empleador,
el porcentaje del subsidio y el número mínimo de aportaciones exigidas.** Por eso, ante la pregunta
"¿cuánto voy a cobrar durante mi reposo?", la respuesta correcta de Nómina y del consultor virtual es
explicar el mecanismo y **remitir la cifra a verificación**, nunca improvisar un porcentaje.

Cómo se ve en el rol, con independencia de la cifra exacta:

| Línea del rol | Qué pasa durante un reposo |
|---|---|
| Sueldo base | Se paga por los días a cargo del empleador; por los días de subsidio, la empresa registra el ajuste correspondiente |
| Subsidio IESS | El IESS acredita el subsidio al afiliado según su propio procedimiento |
| Aporte personal | Se sigue calculando sobre la materia gravada que corresponda al período |
| Comisiones | La cuota de ruta se ajusta a los días efectivamente trabajados; no se penaliza el reposo |

**Maternidad.** La licencia es de 84 días —doce semanas— (parámetro \`licencia_maternidad_dias\`), con
10 días adicionales en parto múltiple (parámetro \`licencia_maternidad_parto_multiple_adicional\`, marcado
para verificación). El IESS cubre una parte del subsidio y **el empleador completa la diferencia hasta
el 100% de la remuneración**, siempre que la afiliación esté al día. En el rol, la colaboradora ve su
remuneración completa, con el desglose entre subsidio y complemento patronal.

**Paternidad.** 10 días (parámetro \`licencia_paternidad_dias\`), con 5 días adicionales en cesárea o parto
múltiple (\`licencia_paternidad_cesarea_multiple_adicional\`). Los adicionales por nacimiento prematuro
(\`licencia_paternidad_prematuro_adicional\`) y por enfermedad grave del recién nacido
(\`licencia_paternidad_enfermedad_grave_adicional\`) están marcados para verificación en cuanto a la
definición médica que los habilita y el certificado que los sustenta.

**Lactancia.** Jornada de 6 horas diarias, sin reducción de remuneración (parámetro
\`lactancia_jornada_horas\`), durante 12 meses contados **desde el parto**, no desde el retorno de la
licencia (parámetro \`lactancia_duracion_meses\`). En el rol no hay ninguna reducción: la remuneración es
la misma. Cómo se distribuyen las dos horas se acuerda con la jefatura; el derecho a las dos horas **no
es negociable**.

---

## 11. Descuentos que pueden aparecer en su rol

### 11.1 El principio general

La remuneración está protegida frente a embargos y descuentos, con excepciones taxativas: pensiones
alimenticias, aportes al IESS, préstamos del IESS, impuesto a la renta, anticipos y cuotas autorizadas
por escrito por el colaborador (parámetro \`descuentos_rol_limite\`). **Ningún descuento se aplica sin
título: o es una obligación legal, o es una orden judicial, o es una autorización escrita del
colaborador.**

**Advertencia de honestidad.** El parámetro \`descuentos_rol_limite\` **no tiene un valor numérico
registrado**: el archivo declara expresamente que no se tiene certeza del límite porcentual exacto ni
del artículo aplicable. Por eso este manual **no enuncia un porcentaje máximo de descuentos
voluntarios**. Lo que sí afirma es el principio: los descuentos no pueden dejar al colaborador sin lo
indispensable para vivir.

### 11.2 Tabla de descuentos

| Descuento | Qué lo habilita | Regla en VERTIENTE | Parámetro |
|---|---|---|---|
| **Aporte personal IESS** | La ley | 9,45% de la materia gravada, automático | \`iess_aporte_personal\` |
| **Pensión alimenticia** | **Orden judicial**, nunca un acuerdo privado | Se aplica exactamente por el monto y la periodicidad que ordena el juez. Nómina no negocia, no reduce ni suspende. Tiene prioridad sobre cualquier otro descuento voluntario | \`descuentos_rol_limite\` |
| **Otra retención judicial** | Orden judicial notificada a la compañía | Igual tratamiento | \`descuentos_rol_limite\` |
| **Anticipo quincenal** | Solicitud del colaborador | Hasta el 50% de lo devengado en la quincena; se descuenta íntegro en el rol del mismo mes | \`anticipo_quincenal_tope\` |
| **Préstamo quirografario / hipotecario IESS** | Notificación del IESS | Se retiene el dividendo notificado, sin modificación | \`iess_prestamo_quirografario_descuento\` |
| **Préstamo de la empresa** | Convenio escrito y firmado, con tabla de cuotas | Sin interés. Máximo 12 cuotas. Se suspende durante licencia sin sueldo y se retoma al reintegro | — |
| **Comisariato** | Consumo del colaborador con su credencial | Se descuenta en el rol del mes siguiente al consumo, en hasta 2 cuotas si supera el cupo mensual | \`comisariato_umbral\` |
| **Multa del Reglamento Interno** | Proceso disciplinario concluido, con derecho a defensa | **Suspendida: VERTIENTE no impone multas hoy.** El Art. 108 del Reglamento Interno lo dice expresamente mientras no exista un parámetro verificado con el tope legal, y la sección 8.4 de la Política de Disciplina y Debido Proceso confirma que la compañía no usa sanciones económicas. Si a un colaborador le aparece una multa en el rol, es un error y debe reversarse | — |
| **Impuesto a la renta** | La ley tributaria | Retención mensual según la proyección anual del colaborador | — |
| **Uniformes y EPP** | **Nada. No procede** | VERTIENTE **no descuenta** uniformes ni equipo de protección personal: la ley obliga a entregarlos gratuitamente | \`ropa_trabajo_frecuencia\`, \`epp_obligacion\`, \`utiles_herramientas_obligacion\` |

### 11.3 Tres reglas que no admiten excepción

**Primera: el uniforme y el EPP no se descuentan, nunca.** El parámetro \`ropa_trabajo_frecuencia\` obliga
a entregar al menos un vestido adecuado para el trabajo por año **en forma completamente gratuita**, y
el parámetro \`epp_obligacion\` establece que el equipo de protección personal es gratuito, obligatorio,
en la cantidad y frecuencia que exija el riesgo del puesto, con capacitación de uso y **reposición
inmediata por deterioro**. Si a un colaborador le aparece un descuento por uniforme, casco, faja, guante
o calzado de seguridad, ese descuento está mal y debe reversarse. Lo mismo aplica a las herramientas de
trabajo (parámetro \`utiles_herramientas_obligacion\`): el terminal de preventa, el lector de código y la
transpaleta son herramientas de la empresa, no un beneficio del colaborador.

**Segunda: las multas requieren proceso.** Una multa del Reglamento Interno no es una decisión de un
supervisor en el momento. Requiere un proceso disciplinario concluido, con derecho del colaborador a ser
escuchado, y una resolución escrita y notificada. **Este manual no enuncia el tope de la multa porque no
existe un parámetro que lo registre** (ver la sección 20): el tope lo fija el Reglamento Interno de
Trabajo legalmente aprobado, y ese documento es el que hay que consultar.

**Tercera: la pensión alimenticia se respeta al pie de la letra.** Nómina no tiene facultad para
reducirla, diferirla ni suspenderla, aunque el colaborador lo pida, aunque presente un acuerdo con la
otra parte, aunque alegue que el hijo ya cumplió la mayoría de edad. Solo una nueva orden judicial
modifica una orden judicial. Lo que Nómina sí hace es entregarle al colaborador el respaldo de las
retenciones efectuadas para el trámite que él quiera seguir.

---

## 12. Beneficios propios de VERTIENTE

### 12.1 Cómo leer esta sección

Todo lo que sigue está **por encima del mínimo legal**. Son beneficios que VERTIENTE otorga por decisión
propia y que puede revisar anualmente. No son cifras legales y por eso no llevan clave de parámetro,
salvo cuando la ley sí obliga y VERTIENTE hace más de lo obligado, en cuyo caso se cita el parámetro del
mínimo.

Los niveles que se usan en las tablas son:

| Nivel | Quiénes |
|---|---|
| **N1 — Operativo** | Estibadores, perchadores, auxiliares de bodega, operarios de línea, mercaderistas, choferes, prevendedores, vendedores de ruta |
| **N2 — Mandos medios** | Supervisores zonales, supervisores de producción, coordinadores, jefes de centro de distribución |
| **N3 — Jefaturas y gerencias** | Jefes regionales de ventas, jefaturas de planta y de áreas administrativas, gerencias |

### 12.2 Tabla general de beneficios por nivel

| Beneficio | N1 Operativo | N2 Mandos medios | N3 Jefaturas y gerencias |
|---|---|---|---|
| Seguro de asistencia médica | Titular | Titular + cónyuge | Titular + cónyuge + hijos |
| Comisariato FRUTAL | Sí | Sí | Sí |
| Alimentación subsidiada en planta y CD | Sí | Sí | Sí |
| Refrigerio de turno nocturno | Sí (turno nocturno) | Sí (turno nocturno) | — |
| Transporte de turno de madrugada | Sí | Sí | — |
| Uniformes y EPP | Sí, 2 juegos al año | Sí, 2 juegos al año | Según puesto |
| Bono de escolaridad | Sí | Sí | Sí |
| Apoyo por calamidad | Sí | Sí | Sí |
| Celular corporativo con plan | Solo preventa y autoventa (herramienta de trabajo) | Sí | Sí |
| Vehículo asignado y cupo de combustible | — | Sí (supervisores zonales y jefes de CD) | Sí |
| Viáticos y movilización | Sí, según tarifario | Sí, según tarifario | Sí, según tarifario |

### 12.3 Seguro de asistencia médica

Es un seguro **complementario** al IESS, no un reemplazo. Cubre consulta ambulatoria, medicina,
hospitalización y emergencias en la red de prestadores del asegurador.

| Concepto | N1 | N2 | N3 |
|---|---|---|---|
| Cobertura | Titular | Titular + cónyuge | Titular + cónyuge + hijos menores de 25 años |
| Aporte del colaborador | Sin costo | Sin costo por el titular; el dependiente se descuenta por rol | Sin costo por titular y dependientes |
| Deducible por evento (USD) | 15,00 | 20,00 | 25,00 |
| Ingreso a la póliza | Al superar el período de prueba de 90 días (\`contrato_periodo_prueba_dias\`) | Igual | Igual |

Los dependientes adicionales que el nivel no cubre pueden incorporarse con descuento por rol,
autorizado por escrito por el colaborador (ver la sección 11.1).

### 12.4 Comisariato

VERTIENTE tiene más de 100 trabajadores y por lo tanto el comisariato es una obligación legal, no solo
un beneficio (parámetro \`comisariato_umbral\`).

| Regla | Detalle |
|---|---|
| Qué se puede comprar | Producto de la compañía: la línea FRUTAL de la planta de Durán y las marcas distribuidas que la compañía habilite |
| Descuento sobre el precio de venta al público | 25% |
| Cupo mensual | Hasta el 12% de la remuneración mensual del colaborador |
| Forma de pago | Descuento por rol del mes siguiente al consumo; hasta 2 cuotas si el consumo supera el cupo de un mes |
| Puntos de atención | Matriz Guayaquil, planta FRUTAL Durán y los 9 centros de distribución |
| Prohibición | El producto del comisariato es para consumo del hogar del colaborador. Revenderlo es una falta grave del Reglamento Interno |

Ejemplo: Wilson Chalá, con remuneración de USD 569,71 en septiembre, tiene un cupo de
569,71 × 12% = **USD 68,37**. Su consumo del mes fue de USD 62,30 (ver el ejemplo 4), dentro del cupo.

### 12.5 Alimentación, refrigerio y transporte de madrugada

| Beneficio | Quién | Detalle |
|---|---|---|
| Almuerzo subsidiado | Personal de planta FRUTAL y de los 11 sitios con comedor | VERTIENTE subsidia el 70% del costo del menú; el 30% restante se descuenta por rol |
| Refrigerio de turno nocturno | Personal en turno entre 19h00 y 06h00 | Sin costo para el colaborador |
| Transporte de turno de madrugada | Quien ingresa antes de las 05h00 o sale después de las 22h00 | Recorrido puerta a puerta o a punto de encuentro seguro, sin costo. Aplica a estibadores y auxiliares del CD de Quito y de la matriz que cargan camiones de madrugada, y al turno nocturno de la línea de FRUTAL |

El transporte de madrugada no es un lujo: es una medida de seguridad. Un colaborador que no tiene cómo
llegar al CD a las 04h00 no debe resolverlo por su cuenta.

### 12.6 Uniformes, EPP, bono de escolaridad y apoyo por calamidad

| Beneficio | Mínimo legal | Lo que hace VERTIENTE |
|---|---|---|
| Ropa de trabajo | Al menos 1 vestido adecuado por año, gratuito (\`ropa_trabajo_frecuencia\`) | **2 juegos completos al año**, entregados en marzo y en septiembre, más reposición por deterioro |
| EPP | Gratuito, obligatorio, con capacitación y reposición inmediata (\`epp_obligacion\`) | Entrega contra matriz de riesgos del puesto, con registro firmado y reposición inmediata sin trámite |
| Herramientas de trabajo | A cargo del empleador, sin costo (\`utiles_herramientas_obligacion\`) | Terminal de preventa, lector, transpaleta, faja y calzado de seguridad |
| Bono de escolaridad | No existe mínimo legal; es adicional a la décima cuarta | **USD 60,00 por hijo en edad escolar, hasta 3 hijos.** Se paga en el rol de marzo para el personal de Costa y en el de septiembre para el de Sierra, acompañando el inicio de clases de cada régimen |
| Apoyo por calamidad | La licencia de 3 días es el mínimo (\`licencia_calamidad_domestica_dias\`, pendiente de verificación) | **Aporte no reembolsable de hasta USD 800,00 por evento** (siniestro grave en la vivienda, enfermedad grave o fallecimiento de familiar directo), más anticipo sin interés de hasta 2 remuneraciones, a 12 cuotas |

Ejemplo del bono de escolaridad: Byron Lascano, perchador del CD de Ambato (Sierra), con 2 hijos en edad
escolar, recibe 2 × 60,00 = **USD 120,00** en su rol de septiembre. Este bono es **adicional** a su
décima cuarta remuneración de USD 470,00 cobrada el 15 de agosto; no la sustituye.

### 12.7 Viáticos, movilización y su liquidación

Los viáticos y la movilización **no son remuneración**: son el reembolso de un gasto en que el
colaborador incurrió por razón del trabajo. Por eso no suman para décimos, fondos de reserva ni
vacaciones. **Advertencia obligatoria:** el parámetro \`iess_base_calculo\` está marcado
\`verificar_antes_de_produccion\` justamente para estos rubros de frontera, y su nota instruye verificar
rubro por rubro con el IESS y con Nómina antes de cerrar la planilla. Si la verificación concluyera que
alguno de estos rubros es materia gravada, habría que recalcular aportes y bases de beneficios.

**Tarifario de VERTIENTE (decisión interna, no cifra legal):**

| Concepto | Tarifa USD | Condición |
|---|---|---|
| Movilización urbana de prevendedor y mercaderista | 4,50 por día efectivo de ruta | Contra registro de visitas del día en el sistema de preventa |
| Alimentación en ruta fuera de la ciudad base, sin pernocte | 8,00 por día | Autorización previa del supervisor zonal |
| Viático integral por día con pernocte (alimentación y movilización local) | 22,00 por día | Autorización previa del jefe de área |
| Hospedaje fuera de la ciudad base | 38,00 por noche | **Contra factura** a nombre de Corporación Vertiente S.A., RUC 0992847561001 |
| Kilometraje en vehículo propio autorizado | 0,28 por kilómetro | Solo con autorización escrita previa y con licencia y matrícula vigentes registradas |
| Peajes y parqueaderos | Valor real | Contra comprobante |

**Proceso de liquidación de viáticos, en cinco pasos:**

1. **Solicitud previa.** El colaborador registra la solicitud en el sistema con destino, fechas, motivo
   y estimación de gasto. La aprueba su jefatura directa.
2. **Anticipo.** VERTIENTE acredita hasta el 80% del viático estimado antes del viaje. Nadie debe
   financiar con su propio dinero un viaje de trabajo.
3. **Informe de gasto.** Dentro de los **5 días hábiles** siguientes al retorno, el colaborador presenta
   el informe con las facturas, todas a nombre de Corporación Vertiente S.A. con RUC 0992847561001.
4. **Revisión.** Administración Comercial (para el personal de ventas) o la jefatura del área revisa y
   aprueba. Los gastos sin sustento se devuelven al colaborador para completar o se descuentan del
   anticipo.
5. **Cierre.** El saldo a favor del colaborador se reembolsa en el siguiente rol; el saldo a favor de la
   empresa se descuenta en el siguiente rol, en una sola cuota salvo acuerdo distinto.

**Regla de oro del viático:** el viático cubre el gasto, no genera utilidad. Si usted gastó menos,
devuelve la diferencia; si gastó más con autorización y sustento, se le reembolsa.

### 12.8 Celular, vehículo y combustible

| Recurso | Quién lo recibe | Naturaleza |
|---|---|---|
| Terminal de preventa con plan de datos | Prevendedores y vendedores de ruta | **Herramienta de trabajo** (\`utiles_herramientas_obligacion\`), no beneficio. No se descuenta, no se valora como ingreso |
| Celular corporativo con plan de voz y datos | N2 y N3 | Beneficio, con política de uso razonable |
| Vehículo asignado | Supervisores zonales, jefes de CD y N3 | Beneficio, con contrato de uso y responsabilidad por multas de tránsito personales |
| Cupo de combustible | Igual que el vehículo | Cupo mensual definido por zona y kilometraje de la ruta asignada |

Las multas de tránsito por infracción personal del conductor **son de cargo del colaborador**; las multas
de índole administrativa de la flota son de cargo de la empresa. El descuento de una multa personal
requiere autorización escrita del colaborador, como todo descuento voluntario (sección 11.1).

---

## 13. Liquidación y acta de finiquito

### 13.1 Qué es el acta de finiquito

El acta de finiquito es el documento que cierra la relación laboral y detalla, **rubro por rubro**, todo
lo que se le paga al colaborador que sale. Debe ser **pormenorizada**, suscrita por ambas partes y
celebrada ante el Inspector del Trabajo o a través de la plataforma oficial del Ministerio del Trabajo
(parámetro \`acta_finiquito_forma\`).

| Dato | Valor | Parámetro |
|---|---|---|
| Forma del acta | Pormenorizada, ante autoridad o plataforma oficial | \`acta_finiquito_forma\` |
| Plazo de registro | 30 días desde la terminación | \`acta_finiquito_plazo_registro\` (marcado para verificación) |
| Plazo de pago | De forma inmediata a la terminación, en el mismo acto de suscripción | \`liquidacion_plazo_pago\` (marcado para verificación) |
| Aviso de salida al IESS | 3 días desde la terminación; VERTIENTE lo hace el mismo día | \`iess_aviso_salida_plazo\` (marcado para verificación) |

**"Pormenorizada" significa que usted tiene derecho a ver cada número y cómo se calculó.** Si el acta
que le presentan dice solo "liquidación: USD 1.330,79", esa acta no cumple el requisito. Usted puede
pedir el desglose antes de firmar, y VERTIENTE debe entregárselo.

### 13.2 Qué se paga siempre y qué se paga solo en ciertos casos

| Rubro | ¿Cuándo se paga? |
|---|---|
| Sueldo pendiente de los días trabajados del mes | **Siempre** |
| Décimo tercero proporcional | **Siempre** |
| Décimo cuarto proporcional | **Siempre** |
| Vacaciones no gozadas y proporcionales | **Siempre** |
| Fondos de reserva pendientes | **Solo si los tenía mensualizados y quedó algún mes sin pagar.** Si los tenía acumulados, están en el IESS y se cobran allí, no en el acta |
| Horas suplementarias y extraordinarias pendientes | Si existen y están registradas |
| Comisiones del período pendientes de liquidar | Si existen |
| Bonificación por desahucio | En el desahucio presentado por el trabajador **y también** en el despido intempestivo (\`desahucio_bonificacion_porcentaje\`) |
| Indemnización por despido intempestivo | **Solo** si hubo despido intempestivo (\`despido_intempestivo_indemnizacion_minima\`, \`despido_intempestivo_meses_por_anio\`, \`despido_intempestivo_tope_meses\`) |
| Indemnización adicional por despido ineficaz | **Solo** en los casos de protección reforzada (\`despido_ineficaz_indemnizacion_adicional\`) — escalamiento obligatorio a Legal y Cumplimiento |
| Jubilación patronal | Con 25 años de servicio con el mismo empleador (\`jubilacion_patronal_anios\`); proporcional entre 20 y menos de 25 (\`jubilacion_patronal_proporcional_rango\`) |
| Utilidades del ejercicio en curso | Se pagan en la fecha general del reparto, no en el acta (\`utilidades_extrabajadores\`) |

### 13.3 Ejemplo resuelto 16 — liquidación de un perchador con 2 años 8 meses

**Datos del caso.** Byron Lascano, ayudante de venta (perchador) del CD de Ambato, región **Sierra**.

| Dato | Valor |
|---|---|
| Fecha de ingreso | 2024-01-15 |
| Fecha de salida | 2026-09-15 |
| Tiempo de servicio | 2 años y 8 meses (32 meses) |
| Última remuneración mensual | USD 505,00 |
| Modalidad de fondos de reserva | Mensualizados (ya cobrados mes a mes) |
| Vacaciones | Gozó las del primer año; **no gozó las del segundo** |
| Saldos pendientes | Préstamo de la empresa USD 80,00 · comisariato del mes USD 35,20 |

#### Paso 1 — Sueldo pendiente

Trabajó del 1 al 15 de septiembre de 2026, es decir 15 días.

> 505,00 × 15 ÷ 30 = **USD 252,50**

#### Paso 2 — Décimo tercero proporcional

Período vigente: 2025-12-01 a 2026-11-30 (\`decimo_tercero_periodo\`). Byron trabajó desde el inicio del
período hasta el 15 de septiembre de 2026.

| Sub-paso | Operación | Resultado |
|---|---|---|
| Diciembre 2025 a agosto 2026 (9 meses completos) | 505,00 × 9 | USD 4.545,00 |
| Septiembre 2026 (15 días) | Valor del paso 1 | USD 252,50 |
| Total percibido en el período | 4.545,00 + 252,50 | USD 4.797,50 |
| Décimo tercero proporcional | 4.797,50 ÷ 12 = 399,791… | **USD 399,79** |

#### Paso 3 — Décimo cuarto proporcional

Byron está en **Sierra**. El período de Sierra 2025-08-01 a 2026-07-31 ya se le pagó completo el
2026-08-15. El período en curso arrancó el 2026-08-01, de modo que se le debe la parte del nuevo período.

| Sub-paso | Operación | Resultado |
|---|---|---|
| Días trabajados del nuevo período | Agosto: 31 días + septiembre: 15 días | 46 días |
| Valor diario | 470,00 ÷ 360 (\`decimo_cuarto_valor\` = \`sbu\`) | 1,3056 USD/día |
| Décimo cuarto proporcional | 470,00 × 46 ÷ 360 = 60,055… | **USD 60,06** |

#### Paso 4 — Vacaciones no gozadas y proporcionales

| Sub-paso | Operación | Resultado |
|---|---|---|
| Valor del día de vacación | (505,00 × 12) ÷ 360 = 6.060,00 ÷ 360 | 16,8333 USD/día |
| Segundo año de servicio no gozado (15 días, \`vacaciones_dias_anuales\`) | 16,8333 × 15 | USD 252,50 |
| Tercer año, proporcional por 8 meses | 15 días × 8 ÷ 12 = 10 días; 16,8333 × 10 | USD 168,33 |
| **Total vacaciones** | 252,50 + 168,33 | **USD 420,83** |

#### Paso 5 — Fondos de reserva

Byron los tenía **mensualizados** y los recibió en cada rol. En su acta de finiquito la línea de fondos
de reserva es **USD 0,00**, y así debe constar expresamente, con la nota de que fueron pagados
mensualmente. Si los hubiera tenido acumulados, la línea también sería USD 0,00, pero por otra razón: el
dinero estaría en su cuenta individual del IESS y lo cobraría directamente allí
(parámetro \`fondos_reserva_modalidad\`).

#### Paso 6 — Subtotal de rubros que se pagan siempre

| Rubro | Valor USD |
|---|---|
| Sueldo pendiente (1 al 15 de septiembre) | 252,50 |
| Décimo tercero proporcional | 399,79 |
| Décimo cuarto proporcional | 60,06 |
| Vacaciones no gozadas y proporcionales | 420,83 |
| Fondos de reserva | 0,00 |
| **Subtotal de proporcionales** | **1.133,18** |

Verificación: 252,50 + 399,79 + 60,06 + 420,83 = **USD 1.133,18**.

#### Paso 7 — Bonificación por desahucio

La bonificación por desahucio es el **25% de la última remuneración mensual por cada año de servicio**
(parámetro \`desahucio_bonificacion_porcentaje\`), y se paga **tanto en el desahucio presentado por el
trabajador como, adicionalmente, en el despido intempestivo**.

> 0,25 × 505,00 × (32 meses ÷ 12) = 126,25 × 2,666666… = **USD 336,67**

**Advertencia de honestidad.** VERTIENTE calcula la bonificación por desahucio de forma **proporcional**
a los meses de servicio, porque es el criterio más favorable al colaborador frente a descartar la
fracción de año. **El archivo de parámetros no registra una regla sobre si la fracción de año se
prorratea o se computa como año completo para esta bonificación** (sí lo hace para la indemnización por
despido intempestivo, en la tabla \`indemnizacion_despido\`). Este punto se reporta como pendiente en la
sección 20.

#### Paso 8 — Escenario A: Byron presenta su desahucio (renuncia con preaviso)

El desahucio es el aviso anticipado de que se quiere dar por terminado el contrato, con 15 días de
anticipación (parámetro \`desahucio_preaviso_dias\`, marcado para verificación en cuanto al plazo exacto y
a la forma de notificación).

| Rubro | Valor USD |
|---|---|
| Subtotal de proporcionales | 1.133,18 |
| Bonificación por desahucio | 336,67 |
| **Total a favor del colaborador** | **1.469,85** |

#### Paso 9 — Escenario B: despido intempestivo

Con 2 años 8 meses de servicio, Byron cae en el tramo de "1 a 3 años" de la tabla
\`indemnizacion_despido\`: **3 meses de remuneración**, que además es el piso mínimo absoluto
(parámetro \`despido_intempestivo_indemnizacion_minima\`). Nadie despedido intempestivamente recibe menos
de tres meses.

| Rubro | Operación | Valor USD |
|---|---|---|
| Subtotal de proporcionales | — | 1.133,18 |
| Indemnización por despido intempestivo | 3 × 505,00 | 1.515,00 |
| Bonificación por desahucio (se suma además) | 0,25 × 505,00 × 2,6667 | 336,67 |
| **Total a favor del colaborador** | 1.133,18 + 1.515,00 + 336,67 | **2.984,85** |

#### Paso 10 — Descuentos del acta y líquido final

| Descuento | Operación | Valor USD |
|---|---|---|
| Aporte personal IESS sobre el sueldo pendiente | 252,50 × 9,45% (\`iess_aporte_personal\`) | 23,86 |
| Saldo del préstamo de la empresa | Convenio escrito | 80,00 |
| Comisariato del mes | Consumo | 35,20 |
| **Total descuentos** | 23,86 + 80,00 + 35,20 | **139,06** |

Nótese que el aporte personal se calcula **solo sobre el sueldo pendiente**, que es el único rubro del
acta que es materia gravada. Los décimos proporcionales, las vacaciones y las bonificaciones e
indemnizaciones **no** son materia gravada (parámetro \`iess_base_calculo\`).

| Escenario | Total a favor | Descuentos | **Líquido a recibir** |
|---|---|---|---|
| **A — desahucio del trabajador** | 1.469,85 | 139,06 | **USD 1.330,79** |
| **B — despido intempestivo** | 2.984,85 | 139,06 | **USD 2.845,79** |

**Lo que NO se le descuenta a Byron:** el uniforme, el calzado de seguridad, la faja ni la credencial.
Son entrega gratuita obligatoria (parámetros \`ropa_trabajo_frecuencia\`, \`epp_obligacion\`,
\`utiles_herramientas_obligacion\`). Si no devuelve el terminal de preventa, eso se gestiona como un tema
de custodia de activos por la vía que corresponda, no como un descuento automático del finiquito.

**Y lo que le sigue correspondiendo después de salir:** las **utilidades del ejercicio 2026**, por los
días que trabajó en ese año, que se pagarán en 2027 en la fecha general del reparto
(parámetro \`utilidades_extrabajadores\`). Byron debe estar pendiente de la convocatoria pública.

### 13.4 El visto bueno y el despido: qué dice este manual y qué no

Este manual **no resuelve casos individuales de terminación**. Registra tres datos y deriva:

| Figura | Qué es | Parámetro |
|---|---|---|
| Visto bueno | Autorización del Inspector del Trabajo para terminar el contrato por una causal legal. Puede pedirlo el empleador o el trabajador | \`visto_bueno_causales_empleador\`, \`visto_bueno_causales_trabajador\`, \`visto_bueno_faltas_injustificadas\` |
| Despido intempestivo | Terminación unilateral sin causa legal; genera indemnización | \`despido_intempestivo_indemnizacion_minima\` y siguientes |
| Despido ineficaz | Despido de mujer embarazada o en lactancia, o de dirigente sindical: se considera no terminada la relación y procede reintegro más indemnización adicional | \`despido_ineficaz_indemnizacion_adicional\`, \`estabilidad_embarazo_lactancia\`, \`estabilidad_dirigente_sindical\` |

**Regla operativa de VERTIENTE que no admite excepción:** ninguna desvinculación de una colaboradora
embarazada o en período de lactancia se ejecuta sin informe previo de Legal y Cumplimiento
(nota del parámetro \`estabilidad_embarazo_lactancia\`). Y **todo caso individual de despido, visto bueno
o conflicto en curso se escala a Legal y Cumplimiento y a Relaciones Laborales.** Ni este manual ni el
consultor virtual opinan sobre el fondo de un caso individual.

---

## 14. Calendario anual de nómina

### 14.1 El ciclo mensual

| Día del mes | Hito | Responsable | Qué significa para usted |
|---|---|---|---|
| 15 | Acreditación del anticipo quincenal | Nómina | Si lo solicitó, le llega ese día |
| **20** | **Corte de novedades** | Jefaturas y supervisores | Último día para que su jefatura cargue horas extra, licencias, cambios de cargo, ingresos, salidas y comisiones. **Lo que entra después del 20 se paga el mes siguiente** |
| 21 | Cierre de información comercial | Administración Comercial | Base de comisiones del mes |
| 22 | Prevalidación de nómina | Nómina y Compensaciones | Se corren los cálculos y se revisan excepciones |
| 23 | Cierre de nómina | Nómina y Compensaciones | Se congelan los valores |
| 24 al 26 | Revisión y aprobación | Gerencia de RR.HH. y Gerencia Administrativa Financiera | Doble control |
| 27 | Generación de la planilla del IESS y del archivo de pago | Nómina | |
| **Último día hábil del mes** | **Acreditación del rol** | Tesorería | Su sueldo llega a su cuenta |
| Primeros 5 días hábiles del mes siguiente | Publicación del rol individual y atención de consultas | Nómina | Su rol queda disponible para descarga |

**La fecha que hay que memorizar es el día 20.** La causa número uno de "no me pagaron mis horas extra"
no es un error de Nómina: es una novedad cargada por la jefatura el día 24. Si usted hizo horas extra el
día 26, se le pagarán en el rol del mes siguiente, con el detalle del mes al que corresponden.

### 14.2 El calendario anual de beneficios

| Fecha límite | Beneficio | Alcance | Parámetro |
|---|---|---|---|
| **15 de marzo** | Décima cuarta remuneración — **Costa e Insular** | Matriz Guayaquil, planta FRUTAL Durán, CD Manta, Machala, Santo Domingo y Quevedo | \`decimo_cuarto_fecha_pago_costa_galapagos\` |
| **15 de abril** | **Utilidades** del ejercicio anterior | Toda la nómina que trabajó el ejercicio, incluidos extrabajadores | \`utilidades_fecha_limite_pago\` |
| **15 de agosto** | Décima cuarta remuneración — **Sierra y Amazonía** | CD Quito, Cuenca, Ambato, Loja e Ibarra | \`decimo_cuarto_fecha_pago_sierra_amazonia\` |
| **24 de diciembre** | **Décima tercera remuneración** | Toda la nómina | \`decimo_tercero_fecha_pago\` |

Estado a la fecha de este manual (2026-09-16), según la tabla \`periodos_beneficios_2026\`:

| Beneficio | Estado |
|---|---|
| Décima cuarta Costa (período 2025-03-01 a 2026-02-28) | **Ya pagada** el 2026-03-15 |
| Utilidades del ejercicio 2025 | **Ya pagadas** el 2026-04-15 |
| Décima cuarta Sierra (período 2025-08-01 a 2026-07-31) | **Ya pagada** el 2026-08-15 |
| Décima tercera (período 2025-12-01 a 2026-11-30) | **Pendiente**, vence el 2026-12-24 |

**Advertencia sobre la fecha de utilidades.** El parámetro \`utilidades_fecha_limite_pago\` está marcado
\`verificar_antes_de_produccion\` porque el plazo legal está redactado como un número de días contados
desde la liquidación de utilidades, **no como una fecha fija**, y porque hay reglas particulares para
empresas con distinto período fiscal y para el pago a extrabajadores. **Antes de comprometer una fecha
con el personal, hay que verificar con Financiero y con el Ministerio del Trabajo.**

### 14.3 Impuesto a la renta en relación de dependencia

Cuando su ingreso anual proyectado supera el umbral que fija la normativa tributaria, VERTIENTE actúa
como **agente de retención**: calcula al inicio del año cuánto impuesto a la renta le corresponderá
pagar en el año y lo divide para los meses del ejercicio, reteniéndole una parte cada mes en su rol. Así
usted no tiene que pagar una suma grande al final del año.

El ciclo en VERTIENTE:

| Momento | Hito | Qué hace usted |
|---|---|---|
| Enero | Recepción del **formulario de proyección de gastos personales** | Declara cuánto estima gastar en el año en los rubros que la norma tributaria admite |
| Febrero a diciembre | Retención mensual en el rol | Ve la línea "impuesto a la renta" en sus egresos |
| A mitad de año o ante un cambio relevante | Reliquidación | Puede rectificar su proyección si su ingreso o su gasto cambió mucho |
| Enero o febrero del año siguiente | Entrega del **certificado de ingresos y retenciones** | Recibe el documento con lo ganado y lo retenido en el año anterior |

**Advertencia de honestidad, importante.** **El archivo \`datos/parametros-legales.json\` no contiene
ningún parámetro tributario**: no registra la fracción básica desgravada, ni la tabla del impuesto a la
renta de personas naturales, ni el tope de gastos personales deducibles, ni las fechas oficiales del
Servicio de Rentas Internas. Por eso **este manual no enuncia ninguna de esas cifras ni fechas
oficiales.** Las fechas de enero y de febrero que aparecen en la tabla anterior son el **calendario
interno de VERTIENTE**, no plazos legales. Antes de comunicar cualquier cifra tributaria a un
colaborador, Nómina debe consultar la normativa vigente del SRI. Este punto se reporta en la sección 20.

---

## 15. Trámites del colaborador

### 15.1 Cómo leer su certificado de ingresos

El certificado de ingresos y retenciones en relación de dependencia es el documento anual que resume lo
que usted ganó y lo que se le retuvo. Sus bloques son siempre los mismos:

| Bloque del certificado | Qué contiene | Con qué línea de su rol se cruza |
|---|---|---|
| Identificación | Sus datos y los del empleador (Corporación Vertiente S.A., RUC 0992847561001) | — |
| Ingresos gravados | La suma anual de su remuneración: sueldo, comisiones, bonos, horas extra, recargos | Suma de las materias gravadas de los 12 roles |
| Ingresos exentos | Décima tercera, décima cuarta, fondos de reserva | Líneas de beneficios sociales |
| Aporte personal al IESS | La suma anual de sus aportes | Suma de la línea "aporte personal IESS" |
| Gastos personales proyectados o declarados | Lo que usted informó en su formulario | — |
| Impuesto a la renta causado y retenido | Lo que se le retuvo en el año | Suma de la línea "impuesto a la renta" |

**Cómo verificarlo usted mismo:** descargue sus 12 roles del año y sume la columna de materia gravada.
Ese total debe coincidir con los ingresos gravados del certificado. Si no coincide, hay algo que revisar
y debe reportarlo.

### 15.2 Cómo pedir un certificado laboral

| Tipo de certificado | Qué dice | Para qué sirve | Plazo de entrega |
|---|---|---|---|
| Simple | Que usted trabaja en VERTIENTE, su cargo y su fecha de ingreso | Trámites generales | 2 días hábiles |
| Con remuneración | Lo anterior más su remuneración mensual | Crédito bancario, arriendo | 3 días hábiles |
| Con detalle de ingresos de los últimos meses | Lo anterior más el desglose mensual | Crédito hipotecario, visa | 5 días hábiles |
| De tiempo de servicio para extrabajador | Cargo, fechas de ingreso y salida | Trámites posteriores a la salida | 5 días hábiles |

**Cómo se pide:** por el canal de autoservicio de Recursos Humanos o preguntándole al consultor virtual,
que abre el caso automáticamente. Hay que indicar el **tipo** de certificado y **a nombre de qué
entidad** se emite. Los plazos corren en días hábiles desde la solicitud completa.

### 15.3 Cómo actualizar su cuenta bancaria

1. Presente el **formulario de actualización de datos bancarios** firmado.
2. Adjunte un **certificado bancario** o una libreta/estado de cuenta donde consten su nombre y el
   número de cuenta.
3. La cuenta debe estar **a nombre del colaborador**. VERTIENTE **no acredita la remuneración en la
   cuenta de un tercero**, ni siquiera de un familiar: la remuneración se paga al trabajador.
4. Preséntelo **antes del día 20** (corte de novedades). Si lo presenta después, el cambio aplica desde
   el rol del mes siguiente y el rol de este mes se acredita en la cuenta anterior.

### 15.4 Qué hacer si su rol tiene un error

| Paso | Qué hacer | Plazo |
|---|---|---|
| 1 | Revise su rol apenas se publique y compare con sus marcaciones, su autorización de horas extra y su liquidación de comisiones | Primeros 5 días hábiles del mes |
| 2 | Reporte el caso por el canal de Nómina o pregúntele al consultor virtual, indicando **la línea exacta** que cree equivocada y por qué | Dentro de los **30 días** desde la acreditación (plazo interno de gestión) |
| 3 | Nómina revisa y responde por escrito | **5 días hábiles** desde el reporte |
| 4 | Si hay un valor a su favor, se acredita en el rol del mes siguiente o, si el monto lo justifica, en un pago extraordinario | Según el monto |
| 5 | Si usted no está de acuerdo con la respuesta, puede elevar el caso a la Jefatura de Nómina y Compensaciones y luego a la Gerencia de Recursos Humanos | — |

**Aclaración que VERTIENTE hace expresamente:** el plazo interno de 30 días es un **plazo de gestión**
para que el reclamo se resuelva rápido y con la información fresca. **No extingue su derecho.** Los
derechos laborales tienen un plazo de prescripción fijado por el Código del Trabajo, y **este manual no
enuncia ese plazo porque no existe un parámetro registrado que lo respalde** (ver la sección 20). Nadie
en VERTIENTE puede decirle que "ya pasaron los 30 días y perdió su derecho": eso sería falso.

---

## 16. Errores frecuentes, en una sola tabla

Esta es la tabla que más consultas evita. Está ordenada por frecuencia real de la consulta.

| # | Lo que se cree | Lo que es | Dónde verlo |
|---|---|---|---|
| 1 | "Mis fondos de reserva no me los pagan" | No se generan durante los primeros 12 meses (\`fondos_reserva_inicio\`) | Sección 7.1 |
| 2 | "El décimo tercero es un sueldo" | Es un doceavo de **lo percibido**, que incluye comisiones y horas extra | Sección 5.2 |
| 3 | "El que gana más cobra más décimo cuarto" | Es un SBU igual para todos (\`decimo_cuarto_valor\`) | Sección 6.1 |
| 4 | "Los 15 días de vacaciones son hábiles" | Son días calendario (\`vacaciones_dias_anuales\`) | Sección 8.1 |
| 5 | "Las vacaciones se pagan con el sueldo base" | Se pagan sobre lo percibido en el año de servicio | Sección 8.3 |
| 6 | "Las utilidades dependen del sueldo" | Dependen de días trabajados y cargas familiares | Sección 9.1 |
| 7 | "Si renuncié, pierdo las utilidades" | El derecho se conserva (\`utilidades_extrabajadores\`) | Sección 9.5 |
| 8 | "Trabajar de noche se paga doble" | Se paga la jornada normal con un recargo del 25% (\`recargo_jornada_nocturna\`) | Sección 4.4, ejemplo 6 |
| 9 | "Domingo y feriado se suman los recargos" | Una hora, un solo concepto: factor 2,00 | Sección 4.4, ejemplo 7 |
| 10 | "La empresa me quita el 11,15%" | El aporte patronal lo paga la empresa, no se descuenta (\`iess_aporte_patronal\`) | Sección 10.1 |
| 11 | "No me pagaron las horas extra del día 26" | El corte de novedades es el día 20; se pagan el mes siguiente | Sección 14.1 |
| 12 | "Me descontaron el uniforme" | No procede: la entrega es gratuita (\`ropa_trabajo_frecuencia\`, \`epp_obligacion\`) | Sección 11.3 |
| 13 | "Mi cuota de comisión no bajó cuando estuve de vacaciones" | La cuota se ajusta a los días efectivos de ruta | Sección 2.3 |
| 14 | "Mis fondos acumulados deben salir en el finiquito" | Si están acumulados, están en el IESS y se cobran allí | Sección 13.3, paso 5 |
| 15 | "Pasaron 30 días, ya no puedo reclamar" | El plazo interno es de gestión, no extingue el derecho | Sección 15.4 |
| 16 | "Puedo vender mis vacaciones" | VERTIENTE no compra vacaciones; el derecho es al descanso | Sección 8.4 |
| 17 | "Declaro mis cargas familiares cuando pagan utilidades" | Deben estar declaradas antes del cierre del ejercicio | Sección 9.2 |
| 18 | "El viático que me sobró es mío" | El viático cubre el gasto, no genera utilidad; se devuelve | Sección 12.7 |

---

## 17. Glosario mínimo

| Término | Qué significa |
|---|---|
| **Rol de pagos** | Documento mensual con sus ingresos, sus egresos y su líquido a recibir |
| **Materia gravada** | La parte de sus ingresos sobre la que se calculan los aportes al IESS |
| **Ingreso / egreso** | Lo que suma / lo que resta en su rol |
| **Prorrateo o proporcional** | Pagar solo la parte que corresponde al tiempo trabajado |
| **Décimo tercero** | Bono navideño: un doceavo de lo percibido en el período |
| **Décimo cuarto** | Bono escolar: un SBU igual para todos |
| **Fondos de reserva** | Un mes de remuneración por año trabajado, en forma de 8,33% mensual |
| **Hora suplementaria** | La trabajada después de la jornada, en día laborable |
| **Hora extraordinaria** | La trabajada en sábado, domingo, descanso obligatorio o feriado |
| **Jornada nocturna** | La jornada ordinaria pactada entre 19h00 y 06h00, con recargo del 25% |
| **Aporte personal / patronal** | Lo que aporta al IESS el colaborador / la empresa |
| **Aviso de entrada / salida** | El registro en el IESS del inicio / fin de la relación laboral |
| **Desahucio** | Aviso anticipado de que se quiere terminar el contrato |
| **Visto bueno** | Autorización del Inspector del Trabajo para terminar el contrato por causal legal |
| **Acta de finiquito** | Documento pormenorizado que cierra la relación laboral y detalla lo que se paga |
| **SUT** | Sistema Único de Trabajo, la plataforma del Ministerio del Trabajo |
| **Preventa** | El prevendedor toma el pedido y otro vehículo entrega después |
| **Autoventa** | El vendedor de ruta lleva el producto y vende y entrega en el mismo acto |
| **Percha** | El espacio del producto en el estante de la tienda; perchar es acomodarlo |
| **Drop size** | Valor promedio de cada pedido |
| **Cobertura** | Porcentaje de clientes de la ruta que efectivamente compraron en el mes |
| **Estibador** | Quien carga y descarga mercadería en la bodega y los camiones |
| **Comisariato** | Punto donde el colaborador compra producto de la compañía a precio preferencial |
| **Viáticos / movilización** | Reembolso del gasto de viaje / del gasto de desplazamiento en ruta |

---

## 18. Qué responde el consultor virtual y qué escala a un humano

El consultor virtual de VERTIENTE usa este manual como una de sus fuentes. Sus límites son claros.

**Responde con este manual, citando la sección y la fecha de vigencia:**

- Cómo se calcula una hora suplementaria, extraordinaria o el recargo nocturno.
- Cuánto le corresponde de décimo tercero, décimo cuarto, fondos de reserva, vacaciones y utilidades, y
  en qué fecha se pagan.
- Qué significa cada línea de su rol de pagos y por qué un descuento aparece ahí.
- Qué se paga en un acta de finiquito y cómo se calcula cada rubro.
- Cómo pedir un certificado, cómo actualizar la cuenta bancaria, cómo reportar un error del rol.
- Qué beneficios propios de VERTIENTE le corresponden según su nivel, y cómo se liquidan los viáticos.

**No opina y escala a un humano, con acuse empático, canal correcto, plazo comprometido y registro del
caso:**

La matriz vinculante es la de la sección 5.5 del documento *Alcance del Consultor Virtual de RR.HH.*
(VRT-RRHH-VIR-09). Se reproduce aquí para lectura, con su plazo comprometido; **ante cualquier
diferencia manda aquella**.

| Situación | Rol receptor primario | Copia | Plazo comprometido de contacto humano |
|---|---|---|---|
| Conflicto individual de trabajo en curso | Jefatura de Relaciones Laborales y Disciplina | Generalista de RR.HH. de la zona | 3 días hábiles |
| Denuncia de acoso, discriminación o represalia | **Comité de Ética** (a través de la Línea Ética VERTIENTE) | Gerencia de Recursos Humanos | 48 horas |
| Temas de organización sindical o acciones colectivas | Jefatura de Legal y Cumplimiento | Gerencia de Recursos Humanos | 3 días hábiles |
| Reclamo sobre condiciones laborales de una instalación concreta | Jefatura de Seguridad y Salud Ocupacional | Jefe de CD o de Planta y Comité Paritario | 48 horas, o inmediato si hay riesgo grave e inminente |
| Cualquier caso de despido, visto bueno o terminación individual | Jefatura de Administración de Personal | Jefatura de Legal y Cumplimiento | 2 días hábiles, o 24 horas si hay protección reforzada |
| Negociación salarial individual | Jefatura de Nómina y Compensaciones | Jefatura directa del colaborador | 5 días hábiles |
| Salud mental en crisis o violencia | **Servicio Médico Ocupacional** | Trabajo Social y Gerencia de Recursos Humanos | **2 horas, 24/7**, sin esperar día hábil |
| Cualquier consulta que insinúe litigio | Jefatura de Legal y Cumplimiento | Gerencia de Recursos Humanos | 2 días hábiles |

**Y hay dos cosas que el consultor virtual nunca hace:** disuadir a un colaborador de ejercer un
derecho, y minimizar un mínimo legal. Si la política de VERTIENTE y el mínimo legal difieren, **manda el
que sea más favorable al colaborador**, y el consultor lo dice expresamente.

---

## 19. Parámetros legales citados en este manual

| Clave del parámetro | Valor citado | Estado de verificación |
|---|---|---|
| \`sbu\` | USD 470,00 mensuales | verificar_antes_de_produccion |
| \`sbu_anterior\` | USD 470,00 (2025) | verificado |
| \`periodicidad_pago_remuneracion\` | Mensual para el personal remunerado por mes | verificado |
| \`anticipo_quincenal_tope\` | 50% de lo devengado en la quincena | verificar_antes_de_produccion |
| \`descuentos_rol_limite\` | Sin valor numérico registrado | verificar_antes_de_produccion |
| \`valor_hora_ordinaria_divisor\` | 240 horas/mes | verificar_antes_de_produccion |
| \`jornada_horas_diarias\` | 8 horas/día | verificado |
| \`jornada_horas_semanales\` | 40 horas/semana | verificado |
| \`descanso_semanal_horas\` | 48 horas consecutivas | verificado |
| \`horas_suplementarias_tope_diario\` | 4 horas/día | verificado |
| \`horas_suplementarias_tope_semanal\` | 12 horas/semana | verificado |
| \`recargo_hora_suplementaria_diurna\` | 50% (factor 1,50) | verificado |
| \`recargo_hora_suplementaria_nocturna\` | 100% (factor 2,00) | verificado |
| \`recargo_hora_extraordinaria\` | 100% (factor 2,00) | verificado |
| \`recargo_jornada_nocturna\` | 25% (factor 1,25) | verificado |
| \`jornada_nocturna_rango\` | 19h00 a 06h00 | verificado |
| \`decimo_tercero_formula\` | 1/12 de lo percibido por remuneraciones | verificado |
| \`decimo_tercero_periodo\` | 2025-12-01 a 2026-11-30 | verificado |
| \`decimo_tercero_fecha_pago\` | 2026-12-24 | verificado |
| \`decimo_tercero_mensualizacion\` | Opción del colaborador | verificar_antes_de_produccion |
| \`decimo_cuarto_valor\` | Un SBU completo o proporcional | verificado |
| \`decimo_cuarto_periodo_sierra_amazonia\` | 2025-08-01 a 2026-07-31 | verificado |
| \`decimo_cuarto_fecha_pago_sierra_amazonia\` | 2026-08-15 | verificado |
| \`decimo_cuarto_periodo_costa_galapagos\` | 2025-03-01 a 2026-02-28 | verificado |
| \`decimo_cuarto_fecha_pago_costa_galapagos\` | 2026-03-15 | verificado |
| \`decimo_cuarto_mensualizacion\` | Opción del colaborador | verificar_antes_de_produccion |
| \`fondos_reserva_porcentaje\` | 8,33% | verificado |
| \`fondos_reserva_inicio\` | Desde el mes 13 de trabajo | verificado |
| \`fondos_reserva_modalidad\` | Mensualizado o acumulado en el IESS | verificar_antes_de_produccion |
| \`vacaciones_dias_anuales\` | 15 días calendario | verificado |
| \`vacaciones_dia_adicional_desde_anio\` | Desde el año 6 | verificado |
| \`vacaciones_dias_adicionales_tope\` | 15 días adicionales (tope 30) | verificado |
| \`vacaciones_acumulacion_maxima_anios\` | 3 años | verificado |
| \`vacaciones_anticipo_pago\` | Pago anticipado antes de salir | verificar_antes_de_produccion |
| \`utilidades_porcentaje_total\` | 15% de las utilidades líquidas | verificado |
| \`utilidades_porcentaje_por_trabajador\` | 10%, por tiempo trabajado | verificado |
| \`utilidades_porcentaje_cargas_familiares\` | 5%, por cargas familiares | verificado |
| \`utilidades_fecha_limite_pago\` | 2026-04-15 | verificar_antes_de_produccion |
| \`utilidades_tope\` | 24 SBU (USD 11.280,00) | verificar_antes_de_produccion |
| \`utilidades_extrabajadores\` | El derecho se conserva tras la salida | verificado |
| \`iess_aporte_personal\` | 9,45% | verificado |
| \`iess_aporte_patronal\` | 11,15% | verificado |
| \`iess_base_calculo\` | Todo ingreso regular como retribución del trabajo | verificar_antes_de_produccion |
| \`iess_base_minima_aportacion\` | El SBU, salvo jornada parcial | verificar_antes_de_produccion |
| \`iess_aviso_entrada_plazo\` | 15 días (VERTIENTE: el mismo día) | verificar_antes_de_produccion |
| \`iess_aviso_salida_plazo\` | 3 días (VERTIENTE: el mismo día) | verificar_antes_de_produccion |
| \`iess_prestamo_quirografario_descuento\` | Retención del dividendo notificado | verificar_antes_de_produccion |
| \`licencia_maternidad_dias\` | 84 días | verificado |
| \`licencia_maternidad_parto_multiple_adicional\` | 10 días adicionales | verificar_antes_de_produccion |
| \`licencia_paternidad_dias\` | 10 días | verificado |
| \`licencia_paternidad_cesarea_multiple_adicional\` | 5 días adicionales | verificado |
| \`licencia_paternidad_prematuro_adicional\` | 8 días adicionales | verificar_antes_de_produccion |
| \`licencia_paternidad_enfermedad_grave_adicional\` | 25 días adicionales | verificar_antes_de_produccion |
| \`lactancia_jornada_horas\` | 6 horas diarias | verificado |
| \`lactancia_duracion_meses\` | 12 meses desde el parto | verificado |
| \`licencia_calamidad_domestica_dias\` | 3 días | verificar_antes_de_produccion |
| \`licencia_enfermedad_propia_subsidio\` | Primeros días a cargo del empleador, luego subsidio IESS | verificar_antes_de_produccion |
| \`desahucio_preaviso_dias\` | 15 días de anticipación | verificar_antes_de_produccion |
| \`desahucio_bonificacion_porcentaje\` | 25% de la última remuneración por año | verificado |
| \`despido_intempestivo_indemnizacion_minima\` | 3 meses de remuneración | verificado |
| \`despido_intempestivo_meses_por_anio\` | 1 mes de remuneración por **cada año de servicio** (no solo por los posteriores al tercero), con el piso de 3 meses de \`despido_intempestivo_indemnizacion_minima\` | verificado |
| \`despido_intempestivo_tope_meses\` | 25 meses | verificado |
| \`despido_ineficaz_indemnizacion_adicional\` | 12 meses adicionales | verificar_antes_de_produccion |
| \`estabilidad_embarazo_lactancia\` | Protección reforzada | verificar_antes_de_produccion |
| \`estabilidad_dirigente_sindical\` | Estabilidad durante el período y posterior | verificar_antes_de_produccion |
| \`visto_bueno_causales_empleador\` | Lista de causales | verificar_antes_de_produccion |
| \`visto_bueno_causales_trabajador\` | Lista de causales | verificar_antes_de_produccion |
| \`visto_bueno_faltas_injustificadas\` | 3 días en un mismo mes | verificar_antes_de_produccion |
| \`acta_finiquito_forma\` | Pormenorizada, ante autoridad o plataforma oficial | verificado |
| \`acta_finiquito_plazo_registro\` | 30 días desde la terminación | verificar_antes_de_produccion |
| \`liquidacion_plazo_pago\` | Inmediato a la terminación | verificar_antes_de_produccion |
| \`jubilacion_patronal_anios\` | 25 años de servicio | verificado |
| \`jubilacion_patronal_proporcional_rango\` | Entre 20 y menos de 25 años | verificar_antes_de_produccion |
| \`contrato_periodo_prueba_dias\` | 90 días | verificado |
| \`comisariato_umbral\` | 100 trabajadores | verificar_antes_de_produccion |
| \`ropa_trabajo_frecuencia\` | Al menos 1 vestido por año, gratuito | verificado |
| \`epp_obligacion\` | Gratuito y obligatorio, con reposición | verificado |
| \`utiles_herramientas_obligacion\` | A cargo del empleador, sin costo | verificado |
| **Tabla** \`recargos_jornada\` | Factores por tipo de hora | — |
| **Tabla** \`vacaciones_por_antiguedad\` | Días de vacaciones por año de servicio | verificado |
| **Tabla** \`indemnizacion_despido\` | Escala de indemnización y bonificación | verificado |
| **Tabla** \`feriados_nacionales_2026\` | Feriados nacionales del año | verificar_antes_de_produccion |
| **Tabla** \`periodos_beneficios_2026\` | Calendario de beneficios del año | verificar_antes_de_produccion |
| **Tabla** \`serie_sbu\` | Serie histórica del SBU | verificar_antes_de_produccion |
| **Tabla** \`dias_habiles_2026\` | Días hábiles por mes | verificar_antes_de_produccion |

---

## 20. Pendientes de verificación

Estas son las dudas reales que este manual **declara en lugar de disimular**. Cada una debe resolverse
antes de que este documento se use para un cálculo con efecto real.

### 20.1 Parámetros que faltan en \`datos/parametros-legales.json\`

| # | Parámetro que hace falta | Por qué lo necesita este manual | Dónde se nota |
|---|---|---|---|
| 1 | Divisor de prorrateo de beneficios (360 o 365 días) | Se usa para prorratear la décima cuarta y las vacaciones proporcionales. VERTIENTE aplica 360 por ser más favorable, sin respaldo normativo registrado | Secciones 6.3 y 13.3 |
| 2 | Fórmula y divisor del valor de la vacación | La vacación se paga sobre lo percibido en el año, pero el divisor (24 para 15 días, equivalente a 360 por día) no está registrado | Sección 8.2 |
| 3 | Tope de la multa del Reglamento Interno | Este manual no enuncia ningún porcentaje de multa por no tener respaldo | Sección 11.3 |
| 4 | Parámetros tributarios: fracción básica desgravada, tabla del impuesto a la renta, tope de gastos personales y fechas oficiales del SRI | Este manual describe el mecanismo de retención sin ninguna cifra ni fecha oficial | Sección 14.3 |
| 5 | Plazo de prescripción de las acciones laborales | Necesario para responder correctamente cuando un colaborador pregunta hasta cuándo puede reclamar | Sección 15.4 |
| 6 | Regla sobre si la fracción de año se prorratea o se computa como año completo para la **bonificación por desahucio** | La tabla \`indemnizacion_despido\` lo resuelve para la indemnización, pero no para la bonificación | Sección 13.3, paso 7 |
| 7 | Regla sobre si los componentes variables integran la base del valor de la hora ordinaria | VERTIENTE usa la remuneración fija; existe criterio de que los variables habituales deberían integrarla | Sección 4.2 |
| 8 | Tope del dividendo de préstamo quirografario respecto del ingreso del afiliado | El propio parámetro \`iess_prestamo_quirografario_descuento\` declara que no se registra para no inventar cifras | Sección 10.4 |
| 9 | Tope y condiciones del descuento por préstamo de la empresa | Hoy es solo política interna (12 cuotas, sin interés) | Sección 11.2 |

### 20.2 Parámetros existentes cuya duda afecta cálculos de este manual

| # | Parámetro | Duda declarada | Impacto en este manual |
|---|---|---|---|
| 1 | \`sbu\` | El SBU 2026 arrastra el valor de 2025 y **casi con seguridad subestima** el real | Afecta la décima cuarta (ejemplos 10 y 11), el tope de utilidades (sección 9.4) y el piso de todas las bandas (sección 2.2) |
| 2 | \`valor_hora_ordinaria_divisor\` | El divisor 240 es convención, no cifra legal | Afecta los tres ejemplos de horas extra (5, 6 y 7) y el rol de Wilson (ejemplo 4) |
| 3 | \`iess_base_calculo\` | Tratamiento de viáticos, movilización, bono de ruta y comisiones variables | Afecta la clasificación de la sección 2.1, el tarifario de viáticos (12.7) y toda la planilla |
| 4 | \`anticipo_quincenal_tope\` | El 50% es política interna, no cifra legal | Afecta el control del anticipo en el rol de Jefferson (ejemplo 3) |
| 5 | \`utilidades_fecha_limite_pago\` | El plazo se cuenta en días desde la liquidación, no es una fecha fija | Afecta el calendario de la sección 14.2 |
| 6 | \`utilidades_tope\` | No hay certeza de si los 24 SBU aplican por igual a todos los cargos | Afecta la liquidación de utilidades de personal comercial de alta comisión (9.4) |
| 7 | \`licencia_enfermedad_propia_subsidio\` | Número de días a cargo del empleador y porcentaje del subsidio | Afecta la respuesta a "¿cuánto cobro durante mi reposo?" (10.5) |
| 8 | \`decimo_tercero_mensualizacion\` y \`decimo_cuarto_mensualizacion\` | Trámite y plazo vigentes para registrar la decisión | Afecta las secciones 5.4 y 6.4 |
| 9 | \`fondos_reserva_modalidad\` | Periodicidad de cambio y plazo de efecto en planilla | Afecta la sección 7.3 |
| 10 | \`iess_aviso_salida_plazo\` | Plazo exacto y si se cuentan días hábiles o calendario | Afecta la sección 10.3 y la salida de todo colaborador |
| 11 | \`acta_finiquito_plazo_registro\` y \`liquidacion_plazo_pago\` | Plazos exactos vigentes | Afecta la sección 13.1 |
| 12 | Tabla \`feriados_nacionales_2026\` | Regla de traslado de feriados y **ausencia de feriados locales** de las 11 ciudades de VERTIENTE | Afecta el ejemplo 7 y toda liquidación de hora extraordinaria por feriado |
| 13 | \`desahucio_preaviso_dias\` | Plazo exacto y forma de notificación | Afecta el escenario A de la liquidación (13.3) |
| 14 | \`vacaciones_anticipo_pago\` | Plazo exacto de anticipación exigido | Afecta la sección 8.3, paso 5 |

### 20.3 Responsables de cerrar los pendientes

| Bloque de pendientes | Responsable de verificar | Contraparte externa |
|---|---|---|
| SBU, décimos, vacaciones, jornada y recargos | Jefatura de Nómina y Compensaciones | Ministerio del Trabajo |
| Aportes, avisos, préstamos y subsidios | Jefatura de Nómina y Compensaciones | IESS |
| Utilidades y su tope | Gerencia Administrativa Financiera | Ministerio del Trabajo |
| Despido, desahucio, visto bueno y finiquito | Jefatura de Legal y Cumplimiento | Ministerio del Trabajo |
| Impuesto a la renta y gastos personales | Jefatura de Contabilidad e Impuestos | Servicio de Rentas Internas |
| Feriados locales de las 11 instalaciones | Jefaturas de centro de distribución y de planta | Municipios respectivos |

---

## 21. Control de cambios

| Versión | Fecha | Elaborado por | Revisado por | Aprobado por | Descripción del cambio |
|---|---|---|---|---|---|
| 1.0 | 2026-09-16 | Jefatura de Nómina y Compensaciones | Gerencia de RR.HH. · Jefatura de Legal y Cumplimiento · Contraloría | Gerencia Administrativa Financiera | Emisión inicial. Consolida en un solo documento la estructura de remuneración de VERTIENTE, la anatomía del rol de pagos, el cálculo de horas suplementarias y extraordinarias, los beneficios de ley (décimos, fondos de reserva, vacaciones, utilidades), los aportes al IESS, los descuentos admisibles, los beneficios propios de la compañía, el procedimiento de liquidación y finiquito, el calendario anual de nómina y los trámites del colaborador. Incorpora 16 ejemplos numéricos resueltos y verificados, y declara 23 pendientes de verificación en la sección 20. |

### Reglas de actualización de este documento

1. **Cada cambio de cifra legal se hace en \`datos/parametros-legales.json\`, no aquí.** Este manual cita
   claves; no almacena valores normativos propios.
2. **Revisión obligatoria en enero de cada año**, apenas se publique el Acuerdo Ministerial que fija el
   Salario Básico Unificado, por su efecto en la décima cuarta remuneración y en el tope de utilidades.
3. **Revisión extraordinaria** ante cualquier reforma laboral, resolución del IESS que cambie tasas,
   plazos o el mecanismo de préstamos, o cambio del tarifario interno de viáticos y beneficios.
4. **Cada pendiente que se cierre** debe registrarse como una nueva fila de este control de cambios,
   indicando el parámetro verificado, la fuente consultada y la fecha de verificación.
5. La versión vigente de este manual es siempre la publicada en el repositorio de normativa de Recursos
   Humanos. Cualquier copia impresa o descargada es **referencial** y puede estar desactualizada.

---

*Documento de simulación de Corporación Vertiente S.A. (VERTIENTE) — empresa ficticia. Personas, marcas,
rutas, cédulas, RUC y montos de negocio son ficticios. Fuente única de cifras normativas:
\`datos/parametros-legales.json\` v1.0.0, fecha de corte 2026-09-16. Fecha de vigencia de este manual:
16 de septiembre de 2026.*
`;export{e as default};