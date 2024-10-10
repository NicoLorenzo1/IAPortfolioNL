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

| **Nombre de la columna**                       | **Descripción**                                                                                                      |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Fecha de solicitud                             | La fecha en que se presentó la solicitud de préstamo. Ayuda a rastrear las tendencias de los préstamos a lo largo del tiempo. |
| Edad                                           | La edad del solicitante en años. La edad puede influir en la aprobación del préstamo debido a los niveles de riesgo asociados. |
| Ingresos anuales                               | Ingresos anuales del solicitante. Los ingresos más altos a menudo se correlacionan con un menor riesgo y mayores posibilidades de aprobación de préstamos. |
| Puntuación de crédito                          | Puntuación de solvencia. Una puntuación de crédito más alta indica una mejor salud financiera y un menor riesgo.      |
| Situación laboral                              | Situación laboral actual del solicitante (por ejemplo, empleado, desempleado, etc.).                                 |
| Nivel de educación                             | El nivel más alto de educación alcanzado por el solicitante (por ejemplo, escuela secundaria, licenciatura, etc.).   |
| Experiencia                                    | Experiencia laboral del solicitante en años. Generalmente, más experiencia implica una mayor estabilidad financiera. |
| Importe del préstamo                           | El monto del préstamo solicitado por el solicitante.                                                                |
| Duración del préstamo                          | La duración (en meses) para la que se solicita el préstamo.                                                         |
| Estado civil                                   | Estado civil del solicitante (por ejemplo, casado, soltero, etc.).                                                  |
| Número de dependientes                         | El número de dependientes (por ejemplo, hijos) que tiene el solicitante.                                             |
| Inicio Propiedad Estado                        | El tipo de propiedad de la vivienda (por ejemplo, propiedad, alquiler, hipoteca).                                    |
| Pagos mensuales de la deuda                    | Obligaciones de deuda mensuales que el solicitante ya está pagando.                                                 |
| Tasa de utilización de tarjetas de crédito     | El porcentaje del uso de la tarjeta de crédito del solicitante.                                                     |
| Número de líneas de crédito abiertas           | El número de líneas de crédito activas que tiene el solicitante.                                                    |
| Número de consultas de crédito                 | El recuento de consultas de crédito realizadas en el pasado.                                                        |
| Relación deuda-ingresos                        | Relación entre la deuda total y los ingresos anuales.                                                               |
| Historial de quiebras                          | Indica si el solicitante se ha declarado en bancarrota en el pasado.                                                |
| Propósito del préstamo                         | El motivo indicado para solicitar el préstamo (por ejemplo, vivienda, consolidación de deudas, educación, etc.).     |
| Anterior Préstamos Incusos                     | Indica si el solicitante ha incumplido préstamos anteriores.                                                        |
| Historial de pagos                             | Historial de pagos puntuales del solicitante.                                                                       |
| Duración del historial de crédito              | La duración total (en años) del historial crediticio del solicitante.                                               |
| Saldo de la cuenta de ahorros                  | Saldo actual en la cuenta de ahorros del solicitante.                                                               |
| Saldo de la cuenta de cheques                  | Saldo actual en la cuenta corriente del solicitante.                                                                |
| Activos totales                                | Valor total de todos los activos propiedad del solicitante.                                                         |
| Total de pasivos                               | Valor total de todos los pasivos del solicitante.                                                                   |
| Ingresos mensuales                             | Ingresos mensuales del solicitante.                                                                                 |
| Historial de pagos de facturas de servicios públicos | Registro de los pagos de la factura de servicios públicos del solicitante.                                        |
| Empleo                                         | La duración (en años) del trabajo actual del solicitante.                                                           |
| Net worth                                      | El valor financiero total del solicitante (activos menos pasivos).                                                  |
| Tasa de interés base                           | La tasa de interés básica ofrecida al solicitante.                                                                  |
| Tasa de interés                                | La tasa de interés final aplicada al solicitante.                                                                   |
| Pago mensual del prestado                      | Importe mensual del reembolso del préstamo.                                                                         |
| Relación total sobre la deuda y los ingresos   | Deuda total en relación con los ingresos mensuales.                                                                |
| Préstamo Aprobado                              | Resultado binario que indica si el préstamo fue aprobado o no (1 = Aprobado, 0 = Denegado).                          |
| Puntuación de riesgo                           | La puntuación de riesgo prevista para la probabilidad de incumplimiento de cada solicitante.                        |

---
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
Continuaremos aplicando el algoritmo K-Nearest Neighbors (KNN) dado que s un algoritmo simple que no hace ninguna suposición sobre la distribución de los datos. Funciona bien cuando los datos están bien distribuidos en diferentes clases y es justo nuestro caso.

Comenzamos ejecutando este proceso en Rapidminer

![Texto alternativo](./assets/credit3.png)

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

5. **K-Nearest Neighbors (K-NN)**  
   - **Propósito**: Entrenar el modelo utilizando el algoritmo K-NN para predecir si un préstamo será aprobado o no.
   - **Descripción**: Este operador entrena un modelo utilizando el algoritmo de K-NN (K vecinos más cercanos). El modelo clasifica los datos basándose en la cercanía de una instancia a los puntos de datos vecinos en el conjunto de entrenamiento. El parámetro K define el número de vecinos a considerar para hacer la predicción. K-NN es un algoritmo simple que no hace suposiciones sobre la distribución de los datos, pero puede ser computacionalmente costoso cuando se trabaja con grandes conjuntos de datos.

6. **Apply model**  
   - **Propósito**: Utilizar el modelo entrenado con K-NN para hacer predicciones sobre el conjunto de prueba.
   - **Descripción**: Este operador aplica el modelo K-NN entrenado a los datos de prueba para predecir si los préstamos serán aprobados o no. Compara las predicciones con los valores reales del atributo LoanApproved para generar las predicciones sobre los datos no etiquetados del conjunto de prueba.

6. **Performance**  
   - **Propósito**: Evaluar el rendimiento del modelo utilizando métricas de clasificación.
   - **Descripción**:  Este operador evalúa el rendimiento del modelo de K-NN calculando varias métricas. Estas métricas permiten medir qué tan bien el modelo predice la aprobación o rechazo de los préstamos en comparación con los valores reales del conjunto de prueba.

## <span style="color: #007BFF; text-align: center; display: block;">Resultados obtenidos al aplicar K-Nearest Neighbors (K-NN)</span>

![Texto alternativo](./assets/credit4.png)

## <span style="color: #007BFF; text-align: center; display: block;">Analisis de K-Nearest Neighbors (K-NN)</span>

Al comparar los resultados obtenidos al aplicar el algoritmo K-Nearest Neighbors (K-NN) con los resultados de Regresión Logística, podemos realizar

Rendimiento de K-Nearest Neighbors (K-NN):
Raíz del error cuadrático medio (RMSE): El modelo K-NN nos devuelve un valor de 0.470. Este valor nos indica qué tan lejos están, en promedio, las predicciones del modelo en relación con los valores reales. Dado que estamos trabajando con un problema de clasificación binaria (aprobado o no aprobado), la RMSE mide el error de predicción continuo, aunque en este caso, deberíamos interpretar el error en términos de clasificación.
El K-NN no es un algoritmo paramétrico, por lo que no realiza ninguna suposición sobre la distribución subyacente de los datos. Sin embargo, puede ser sensible a la elección del número de vecinos (k que en este caso fue 5) y al escalamiento de los datos.

Comparación con Regresión Logística:
Precisión de Regresión Logística: El análisis con Regresión Logística mostró una precisión extremadamente alta (99.83%), con un buen equilibrio entre la capacidad de predecir tanto préstamos aprobados como rechazados. Esto sugiere que la Regresión Logística manejó bastante bien la separación de las clases dentro de los datos.

Rendimiento de K-NN: Aunque el modelo K-NN también ofrece predicciones razonables, al observar el RMSE podemos inferir que su error es relativamente mayor en comparación con la exactitud obtenida con Regresión Logística. En este caso, una RMSE de 0.470 nos indica que el modelo tiene un margen de error en sus predicciones, lo que puede traducirse en una menor precisión en comparación con el análisis previo.