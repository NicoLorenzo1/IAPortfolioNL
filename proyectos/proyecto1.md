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

El proyecto se centra en un análisis exhaustivo de las predicciones de aprobación de préstamos utilizando un conjunto de datos sintético que contiene información sobre datos personales y registros financieros. Este conjunto de datos incluye 20.000 registros, cada uno con una variedad de atributos que capturan la situación económica y financiera de los solicitantes.

## <span style="color: #007BFF; text-align: center; display: block;">Objetivos</span>

El objetivo principal de este proyecto es desarrollar modelos predictivos que permitan evaluar el riesgo asociado con la aprobación de préstamos. A través de un análisis cuidadoso de los datos, se busca identificar patrones y correlaciones que influyan en la decisión de aprobar o denegar un préstamo. Esta información podría ser crucial y de gran ayuda para las instituciones financieras, ya que les ayuda a minimizar el riesgo de incumplimiento y a optimizar sus procesos de evaluación de solicitudes.

Este proyecto no solo tiene como objetivo proporcionar una herramienta útil para la evaluación de riesgos en préstamos, sino que también busca contribuir al campo de la analítica financiera mediante la creación de un modelo que pueda adaptarse y aplicarse a diferentes contextos en la industria financiera.

---
## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos</span>


### Descripción de las Columnas del Dataset de Préstamos ###
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
            <td style="border: 1px solid #ddd; padding: 8px;">Anterior Préstamos Incumplidos</td>
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
            <td style="border: 1px solid #ddd; padding: 8px;">Resultado que indica si el préstamo fue aprobado o no (1 = Aprobado, 0 = Denegado).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Puntuación de riesgo</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La puntuación de riesgo prevista para la probabilidad de incumplimiento de cada solicitante.</td>
        </tr>
        </tbody>
    </table>
</div>

## <span style="color: #007BFF; text-align: center; display: block;">Desarrollo</span>

## <span style="color: #007BFF; text-align: center; display: block;">Aplicando Regresión logística</span>

Comenzamos particionando el conjunto, dado que este conjunto es bastante grande para analizar (20,000 filas), lo vamos a particionar para trabajar con un conjunto más pequeño.

Para comenzar con la clasificación binaria y predecir si el crédito (LoanApproved) será aprobado o no, utilizaremos el algoritmo de Regresión Logística, dado que es adecuado para este caso.

Dentro de RapidMiner ejecutamos el siguiente proceso:

![Texto alternativo](./assets/credit1.png)

1. **Retrieve Limited_Loan (Carga de datos)**  
   - **Propósito**: Cargar el dataset de préstamos previamente limitado a 10,000 filas (por restricciones de la licencia).  
   - **Descripción**: Este operador trae los datos del archivo que contiene la información de los solicitantes de préstamos y sus atributos, entre los cuales se incluye el atributo `LoanApproved`, que indica si el préstamo fue aprobado (1) o rechazado (0).

2. **Set Role (Definir roles de atributos)**  
   - **Propósito**: Configurar el atributo que se desea predecir (etiqueta).  
   - **Descripción**: Este operador cambia el rol del atributo LoanApproved a label (etiqueta), que es la variable objetivo en este proceso. Las demás columnas se mantienen con el rol de atributos predictivos.

3. **Numerical to Binominal (Convertir numérico a categórico)**  
   - **Propósito**: Convertir la etiqueta numérica (1 y 0) a una categoría binaria.  
   - **Descripción**: La Regresión Logística no puede manejar etiquetas numéricas, por lo que este operador convierte el atributo `LoanApproved` de valores numéricos (0 y 1) a valores binomiales (categóricos). Esto garantiza que el modelo pueda entrenarse correctamente.

4. **Split Data (Dividir los datos en entrenamiento y prueba)**  
   - **Propósito**: Dividir el dataset en dos partes: una para entrenar el modelo y otra para evaluar su rendimiento.  
   - **Descripción**: Este operador divide los datos en dos subconjuntos:
     - **Datos de entrenamiento** (por ejemplo, el 70% de los datos) utilizados para entrenar el modelo.
     - **Datos de prueba** (por ejemplo, el 30% restante) utilizados para evaluar el modelo. En este caso, el flujo de datos se divide, enviando los datos de entrenamiento a Logistic Regression y los de prueba a Apply Model.

5. **Logistic Regression (Regresión Logística)**  
   - **Propósito**: Entrenar el modelo para predecir si un préstamo será aprobado o no.  
   - **Descripción**: Este operador entrena un modelo de regresion logística

6. **Apply model**  
   - **Propósito**: Utilizar el modelo entrenado con Regresión Logística para hacer predicciones sobre el conjunto de prueba.
   - **Descripción**: Este operador aplica el modelo de Regresión Logística entrenado a los datos de prueba para predecir si los préstamos serán aprobados o no. Compara las predicciones con los valores reales del atributo LoanApproved para generar las predicciones sobre los datos no etiquetados del conjunto de prueba.

6. **Performance**  
   - **Propósito**: Evaluar el rendimiento del modelo utilizando métricas de clasificación.
   - **Descripción**:  Este operador evalúa el rendimiento del modelo de Regresión Logística calculando varias métricas. Estas métricas permiten medir qué tan bien el modelo predice la aprobación o rechazo de los préstamos en comparación con los valores reales del conjunto de prueba.


## <span style="color: #007BFF; text-align: center; display: block;">Resultados obtenidos al aplicar regresión logística</span>

![Texto alternativo](./assets/credit2.png)

## <span style="color: #007BFF; text-align: center; display: block;">Analisis de la Regresión logística</span>

Este algoritmo es una opción común para problemas de clasificación binaria, ya que modela la probabilidad de que una instancia pertenezca a una de dos clases. A continuación, se evaluará su rendimiento en este contexto y se comparará con otros enfoques.

Es un modelo simple, eficiente y fácil de interpretar, ya que proporciona una salida de probabilidad que puede ajustarse según el umbral deseado. En este caso específico, los resultados obtenidos muestran un rendimiento muy alto, con una precisión del 99.83%, lo que sugiere que el modelo tiene un buen desempeño al clasificar correctamente las solicitudes de préstamos.

La precisión del 99.83% significa que el modelo predice correctamente la aprobación o rechazo de los préstamos en el 99.83% de los casos, lo cual es una precisión muy alta.

Préstamo rechazado: El modelo predijo correctamente el rechazo de préstamos con una precisión del 99.78%.
Préstamo aprobado: El modelo predijo correctamente los préstamos aprobados con una precisión perfecta del 100%.

Este nivel de precisión es notablemente alto, lo que puede ser un indicativo de que el modelo ha aprendido correctamente las relaciones entre las variables predictoras y la aprobación del préstamo.


## <span style="color: #007BFF; text-align: center; display: block;">Aplicando K-Nearest Neighbors (KNN)</span>
Continuaremos aplicando el algoritmo K-Nearest Neighbors (KNN) dado que es un algoritmo simple que no hace ninguna suposición sobre la distribución de los datos. Funciona bien cuando los datos están bien distribuidos en diferentes clases y es justo nuestro caso.

Comenzamos ejecutando este proceso en Rapidminer

![Texto alternativo](./assets/creditKnnProcess.png)

1. **Retrieve Limited_Loan (Carga de datos)**  
   - **Propósito**: Cargar el dataset de préstamos previamente limitado a 10,000 filas (por restricciones de la licencia).  
   - **Descripción**: Este operador trae los datos del archivo que contiene la información de los solicitantes de préstamos y sus atributos, entre los cuales se incluye el atributo `LoanApproved`, que indica si el préstamo fue aprobado (1) o rechazado (0).

4. **Numerical to Binominal (Convertir numérico a categórico)**  
   - **Propósito**: Convertir la etiqueta numérica (1 y 0) a una categoría binaria.  
   - **Descripción**: La Regresión Logística no puede manejar etiquetas numéricas, por lo que este operador convierte el atributo `LoanApproved` de valores numéricos (0 y 1) a valores binomiales (categóricos). Esto garantiza que el modelo pueda entrenarse correctamente.

3. **Set Role (Definir roles de atributos)**  
   - **Propósito**: Configurar el atributo que se desea predecir (etiqueta).  
   - **Descripción**: Este operador cambia el rol del atributo LoanApproved a label (etiqueta), que es la variable objetivo en este proceso. Las demás columnas se mantienen con el rol de atributos predictivos.

4. **Normalize**  
   - **Propósito**: Normalizar los datos.  
   - **Descripción**: El objetivo del operador Normalize es escalar los valores de los atributos numéricos a un rango estándar

5. **Split Data (Dividir los datos en entrenamiento y prueba)**  
   - **Propósito**: Dividir el dataset en dos partes: una para entrenar el modelo y otra para evaluar su rendimiento.  
   - **Descripción**: Este operador divide los datos en dos subconjuntos:
     - **Datos de entrenamiento** (por ejemplo, el 70% de los datos) utilizados para entrenar el modelo.
     - **Datos de prueba** (por ejemplo, el 30% restante) utilizados para evaluar el modelo. En este caso, el flujo de datos se divide, enviando los datos de entrenamiento a Logistic Regression y los de prueba a Apply Model.

6. **K-Nearest Neighbors (K-NN)**  
   - **Propósito**: Entrenar el modelo utilizando el algoritmo K-NN para predecir si un préstamo será aprobado o no.
   - **Descripción**: Este operador entrena un modelo utilizando el algoritmo de K-NN (K vecinos más cercanos). El modelo clasifica los datos basándose en la cercanía de una instancia a los puntos de datos vecinos en el conjunto de entrenamiento. El parámetro K define el número de vecinos a considerar para hacer la predicción. K-NN es un algoritmo simple que no hace suposiciones sobre la distribución de los datos, pero puede ser computacionalmente costoso cuando se trabaja con grandes conjuntos de datos.

7. **Apply model**  
   - **Propósito**: Utilizar el modelo entrenado con K-NN para hacer predicciones sobre el conjunto de prueba.
   - **Descripción**: Este operador aplica el modelo K-NN entrenado a los datos de prueba para predecir si los préstamos serán aprobados o no. Compara las predicciones con los valores reales del atributo LoanApproved para generar las predicciones sobre los datos no etiquetados del conjunto de prueba.

8. **Performance**  
   - **Propósito**: Evaluar el rendimiento del modelo utilizando métricas de clasificación.
   - **Descripción**:  Este operador evalúa el rendimiento del modelo de K-NN calculando varias métricas. Estas métricas permiten medir qué tan bien el modelo predice la aprobación o rechazo de los préstamos en comparación con los valores reales del conjunto de prueba.

## <span style="color: #007BFF; text-align: center; display: block;">Resultados obtenidos al aplicar K-Nearest Neighbors (K-NN)</span>

![Texto alternativo](./assets/creditKnnResult.png)

<p>
La precisión global (accuracy) es 75.30%,

Análisis Detallado:

Clase 0 (No Aprobado):
El modelo predijo correctamente 2248 de las 2278 instancias reales de clase 0.
Recall (Sensibilidad): 98.68% Casi todas las instancias de la clase 0 fueron detectadas correctamente.
Precisión: 75.97% De todas las instancias clasificadas como 0, solo el 75.97% fue correcto.

Clase 1 (Aprobado):
Solo 11 instancias de la clase 1 fueron clasificadas correctamente.
El modelo cometió muchos errores, prediciendo clase 0 en lugar de clase 1.
Recall: 1.52% el modelo apenas detectó instancias de la clase 1.
Precisión: 26.83% las predicciones de la clase 1 tienen una baja confianza.

La clase 0 tiene muchas más instancias que la clase 1, lo que hace que el modelo esté sesgado hacia predecir la clase mayoritaria (0).
Esto explica el alto recall para la clase 0 y el bajo recall para la clase 1.

</p>

## <span style="color: #007BFF; text-align: center; display: block;">Analisis General de aplicar K-NN y regresión logística</span>

Resultados obtenidos al aplicar el algoritmo K-Nearest Neighbors (K-NN) con los resultados de Regresión Logística:

Regresión Logística:

Precisión General: 99.83%, lo que indica un rendimiento casi perfecto en la clasificación.
Recall y Precisión:
La clase 0 (No aprobado) y la clase 1 (Aprobado) tienen recall y precisión extremadamente altos (casi 100%).
El modelo logra un buen balance entre ambas clases y no presenta sesgo hacia la clase mayoritaria.

K-Nearest Neighbors (K-NN):
Precisión General: 75.30%, lo que significa que el modelo tuvo un desempeño moderado al clasificar los préstamos.
Recall Clase 0: 98.68%, el modelo detecta bien las instancias de la clase mayoritaria (No aprobado).
Recall Clase 1: 1.52%, el modelo no logra identificar correctamente las instancias de la clase minoritaria (Aprobado).
Sesgo hacia la clase mayoritaria: La mayoría de las predicciones del modelo son clase 0, debido al desbalance de clases.

Conclusión:
La Regresión Logística es muy eficiente para este problema, debido a su naturaleza lineal y la capacidad de manejar bien las características de los datos.

## <span style="color: #007BFF; text-align: center; display: block;">Conclusión final</span>
Para este caso, lo mejor es utilizar la regresión logistica dado que muestra una precisión extremadamente alta y logra un buen equilibrio entre ambas clases además de que es un modelo muy sencillo y rápido.
Aún asi, el modelo K-NN tiene un rendimiento aceptable en la clase mayoritaria, su incapacidad para detectar la clase minoritaria lo hace menos adecuado para este problema. Cabe destacar que se podrían realizar algunos ajustes en los parametros del algoritmo KNN y ver si mejora su rendimiento.

