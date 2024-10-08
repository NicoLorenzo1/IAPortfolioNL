

<style>
    .general-content {
        margin-left: 2em; 
        margin-right: 2em; 
    }
</style>

<div class="general-content">

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Riesgos y Aprobación de Préstamos</span>

Este conjunto de datos comprende 20.000 registros de datos personales y financieros, diseñados para facilitar el desarrollo de modelos predictivos para la evaluación de riesgos y la aprobación de préstamos.

## <span style="color: #007BFF; text-align: center; display: block;">Descripción del Proyecto</span>

El proyecto **"Financial Risk for Loan Approval"** se centra en un análisis exhaustivo de las predicciones de aprobación de préstamos utilizando un conjunto de datos sintético que contiene información sobre datos personales y registros financieros. Este conjunto de datos incluye **20.000 registros**, cada uno con una variedad de atributos que capturan la situación económica y financiera de los solicitantes.

## <span style="color: #007BFF; text-align: center; display: block;">Objetivos</span>

El objetivo principal de este proyecto es desarrollar modelos predictivos que permitan evaluar el riesgo asociado con la aprobación de préstamos. A través de un análisis cuidadoso de los datos, se busca identificar patrones y correlaciones que influyan en la decisión de aprobar o denegar un préstamo. Esta información podría ser crucial y de gran ayuda para las instituciones financieras, ya que les ayuda a minimizar el riesgo de incumplimiento y a optimizar sus procesos de evaluación de solicitudes.

Este proyecto no solo tiene como objetivo proporcionar una herramienta útil para la evaluación de riesgos en préstamos, sino que también busca contribuir al campo de la analítica financiera mediante la creación de un modelo que pueda adaptarse y aplicarse a diferentes contextos en la industria financiera.

---

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos</span>

### <span style="color: #007BFF; text-align: center; display: block;">Descripción de las Columnas del Dataset de Préstamos</span>

<div style="text-align: center;">
    <table style="width: 90%; margin: 0 auto; border-collapse: collapse; text-align: left;">
        <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Nombre de la columna</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Descripción</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Fecha de solicitud</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La fecha en que se presentó la solicitud de préstamo. Ayuda a rastrear las tendencias de los préstamos a lo largo del tiempo.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Edad</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La edad del solicitante en años. La edad puede influir en la aprobación del préstamo debido a los niveles de riesgo asociados.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Ingresos anuales</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Ingresos anuales del solicitante. Los ingresos más altos a menudo se correlacionan con un menor riesgo y mayores posibilidades de aprobación de préstamos.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Puntuación de crédito</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Puntuación de solvencia. Una puntuación de crédito más alta indica una mejor salud financiera y un menor riesgo.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Situación laboral</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Situación laboral actual del solicitante (por ejemplo, empleado, desempleado, etc.).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Nivel de educación</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El nivel más alto de educación alcanzado por el solicitante (por ejemplo, escuela secundaria, licenciatura, etc.).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Experiencia</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Experiencia laboral del solicitante en años. Generalmente, más experiencia implica una mayor estabilidad financiera.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Importe del préstamo</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El monto del préstamo solicitado por el solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Duración del préstamo</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La duración (en meses) para la que se solicita el préstamo.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Estado civil</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Estado civil del solicitante (por ejemplo, casado, soltero, etc.).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Número de dependientes</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El número de dependientes (por ejemplo, hijos) que tiene el solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Inicio Propiedad Estado</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El tipo de propiedad de la vivienda (por ejemplo, propiedad, alquiler, hipoteca).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Pagos mensuales de la deuda</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Obligaciones de deuda mensuales que el solicitante ya está pagando.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tasa de utilización de tarjetas de crédito</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El porcentaje del uso de la tarjeta de crédito del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Número de líneas de crédito abiertas</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El número de líneas de crédito activas que tiene el solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Número de consultas de crédito</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El recuento de consultas de crédito realizadas en el pasado.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Relación deuda-ingresos</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Relación entre la deuda total y los ingresos anuales.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Historial de quiebras</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Indica si el solicitante se ha declarado en bancarrota en el pasado.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Propósito del préstamo</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El motivo indicado para solicitar el préstamo (por ejemplo, vivienda, consolidación de deudas, educación, etc.).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Anterior Préstamos Incusos</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Indica si el solicitante ha incumplido préstamos anteriores.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Historial de pagos</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Historial de pagos puntuales del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Duración del historial de crédito</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La duración total (en años) del historial crediticio del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Saldo de la cuenta de ahorros</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Saldo actual en la cuenta de ahorros del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Saldo de la cuenta de cheques</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Saldo actual en la cuenta corriente del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Activos totales</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Valor total de todos los activos propiedad del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Total de pasivos</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Valor total de todos los pasivos del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Ingresos mensuales</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Ingresos mensuales del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Historial de pagos de facturas de servicios públicos</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Registro de los pagos de la factura de servicios públicos del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Empleo</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La duración (en años) del trabajo actual del solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Net worth</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El valor financiero total del solicitante (activos menos pasivos).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tasa de interés base</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La tasa de interés básica ofrecida al solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tasa de interés</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La tasa de interés final aplicada al solicitante.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Pago mensual del prestado</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Importe mensual del reembolso del préstamo.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Relación total sobre la deuda y los ingresos</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Deuda total en relación con los ingresos mensuales.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Préstamo Aprobado</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Resultado binario que indica si el préstamo fue aprobado o no (1 = Aprobado, 0 = Denegado).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Puntuación de riesgo</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La puntuación de riesgo prevista para la probabilidad de incumplimiento de cada solicitante.</td>
        </tr>
        </tbody>
    </table>
    </div>
</div>


---

[Regresar al inicio](../index.html)
