<style>
    .general-content {
        margin-left: 2em; 
        margin-right: 2em; 
    }
</style>

<div class="general-content">

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de terremotos</span>

Este proyecto se centra en el análisis del dataset de terremotos, el objetivo es predecir si un terremoto desencadenará un tsunami. El conjunto de datos contiene varios atributos que describen las características del terremoto, y el atributo objetivo es "Tsunami", que indica si un terremoto provocó un tsunami ("1" para sí y "0" para no).

## <span style="color: #007BFF; text-align: center; display: block;">Descripción del Proyecto</span>

La idea detrás de este análisis es determinar qué características de los terremotos influyen más en la probabilidad de que se genere un tsunami. A través de un modelo de clasificación como Árboles de decisión, se busca averiguar factores como la magnitud, la profundidad, la ubicación y otras características sismológicas afectan la probabilidad de que ocurra un tsunami.

## <span style="color: #007BFF; text-align: center; display: block;">Objetivos</span>

El objetivo principal de este proyecto es desarrollar un modelo predictivo que permita determinar si un terremoto desencadenará un tsunami. A través del análisis de los datos, también buscamos identificar los factores más importantes que influyen en la predicción final.


## <span style="color: #007BFF; text-align: center; display: block;">Aplicando Árboles de decisión</span>

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos</span>

### Descripción de las Columnas del Dataset de Terremotos ###

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
            <td style="border: 1px solid #ddd; padding: 8px;">Magnitud</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La magnitud del terremoto, que refleja la fuerza del evento.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Profundidad</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La profundidad del hipocentro del terremoto debajo de la superficie terrestre.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Lugar</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Descripción general de la ubicación del terremoto.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Latitud y Longitud</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Coordenadas geográficas del epicentro del terremoto.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Hora y Fecha</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Momento en el que ocurrió el terremoto.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">sentimiento</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Número de personas que reportaron haber sentido el terremoto.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">cdi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Cómo se sintió el terremoto en la comunidad.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">mmi</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Escala usada para medir la intensidad del terremoto.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">alerta</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nivel de alerta emitido para el terremoto (verde, amarillo, naranja, rojo).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">sig</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Medida del impacto del terremoto, basada en la magnitud, la población afectada y otros factores.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Tsunami</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El atributo objetivo que indica si el terremoto provocó un tsunami (1 para sí, 0 para no).</td>
        </tr>
        </tbody>
    </table>
</div>

Estas serán las columnas clave que seleccionaremos del dataset ya que proporcionan información importante que puede ayudar a desarrollar un modelo de clasificación binaria, utilizando técnicas como árboles de decisión o Naive Bayes, para predecir si un terremoto puede desencadenar un tsunami.

## <span style="color: #007BFF; text-align: center; display: block;">Desarrollo</span>

Comenzamos con el siguiente proceso en Rapidminer: 

![Texto alternativo](./assets/terremoto1.png)

1. **Retrieve (Carga de datos)**  
   - **Propósito**: Cargar el dataset de terremotos para su análisis y predicción.
   - **Descripción**: Este operador carga el conjunto de datos que contiene información de varios terremotos, incluyendo atributos como la magnitud, la profundidad, la ubicación geográfica (latitud, longitud), y la variable objetivo que es si el terremoto desencadenó un tsunami.

2. **Filter Examples (Filtrar filas con valores faltantes)**  
   - **Propósito**: Eliminar los registros que tienen valores faltantes en la columna "alert", que podrían afectar la calidad del análisis.
   - **Descripción**: El operador "Filter Examples" se utiliza para filtrar y eliminar las filas que contienen el valor `?` en el atributo "alert", asegurando que los datos que se utilicen para el entrenamiento sean completos.

3. **Numerical to Binominal (Conversión de numérico a binario)**  
   - **Propósito**: Convertir el atributo objetivo "tsunami" en un atributo binominal (sí/no).
   - **Descripción**: Este operador transforma el atributo "tsunami", que originalmente es numérico (0 o 1), en un atributo binominal. Esto es esencial para algoritmos de clasificación binaria como los árboles de decisión.

4. **Set Role (Definir roles de atributos)**  
   - **Propósito**: Definir el atributo objetivo (label) que se desea predecir.
   - **Descripción**: Este operador asigna el atributo "tsunami" como el rol de "label", que es la variable que el modelo intentará predecir en base a los otros atributos del conjunto de datos (magnitud, profundidad, etc.).

5. **Split Data (Dividir los datos en entrenamiento y prueba)**  
   - **Propósito**: Dividir el dataset en dos partes: una para entrenar el modelo y otra para evaluar su rendimiento.
   - **Descripción**: Este operador divide los datos en dos subconjuntos: 
     - **Datos de entrenamiento**: Usados para entrenar el modelo de árbol de decisión (por ejemplo, el 70% de los datos).
     - **Datos de prueba**: Usados para evaluar el rendimiento del modelo (por ejemplo, el 30% restante).

6. **Decision Tree (Entrenamiento del modelo Árbol de Decisión)**  
   - **Propósito**: Entrenar un modelo de Árbol de Decisión utilizando el dataset de terremotos.
   - **Descripción**: Este operador entrena un modelo de Árbol de Decisión utilizando los atributos predictivos como la magnitud, la profundidad y otros. El árbol de decisión genera reglas basadas en las características del terremoto para predecir si se desencadenará un tsunami. El criterio seleccionado para la construcción del árbol es "gain_ratio".

7. **Apply Model (Aplicar el modelo entrenado)**  
   - **Propósito**: Aplicar el modelo de Árbol de Decisión a los datos de prueba.
   - **Descripción**: Este operador aplica el modelo previamente entrenado sobre los datos de prueba. Genera predicciones sobre si un terremoto provocará un tsunami basado en las características observadas en los datos de prueba.

8. **Performance (Evaluación del rendimiento del modelo)**  
   - **Propósito**: Evaluar el rendimiento del modelo utilizando métricas de clasificación.
   - **Descripción**: Este operador evalúa el rendimiento del modelo de Árbol de Decisión utilizando varias métricas, como la precisión, el recall y la exactitud. Las métricas ayudan a determinar qué tan bien el modelo predice correctamente si un terremoto causará un tsunami.
   
## <span style="color: #007BFF; text-align: center; display: block;">Resultados obtenidos al aplicar Arboles de decisión</span>

![Texto alternativo](assets/terremoto2.png)

## <span style="color: #007BFF; text-align: center; display: block;">Analisis Final</span>

Los principales indicadores son la exactitud (accuracy), la precisión (precision), y el recall (sensibilidad)

Exactitud (Accuracy): 97.38%
Significado: La exactitud indica el porcentaje total de predicciones correctas, es decir, el número de predicciones correctas (tanto positivas como negativas) dividido por el número total de predicciones.
En este caso, el modelo ha logrado una exactitud de 97.38%, lo que significa que, en promedio, predice correctamente si un terremoto desencadenará o no un tsunami en el 97.38% de los casos.

Matriz de Confusión:
La matriz de confusión nos muestra cómo se distribuyen las predicciones correctas e incorrectas del modelo:

True Negative (pred. false, true false): El modelo predijo correctamente que no habría tsunami en 212 ocasiones.
False Positive (pred. true, true false): El modelo predijo incorrectamente que habría un tsunami en 1 ocasión.
True Positive (pred. true, true true): El modelo predijo correctamente que habría un tsunami en 11 ocasiones.
False Negative (pred. false, true true): El modelo predijo incorrectamente que no habría un tsunami cuando en realidad hubo uno en 5 ocasiones.

Precisión (Precision):
Para la clase "false" (no tsunami): 97.70% Esto significa que el 97.70% de las veces que el modelo predijo que no habría un tsunami, fue correcto.
Para la clase "true" (tsunami): 91.67% Este porcentaje de las veces que el modelo predijo que habría un tsunami, fue correcto.

Recall (Sensibilidad):
Para la clase "false" (no tsunami): 99.53% Esto indica que el 99.53% de los casos en los que efectivamente no hubo un tsunami fueron correctamente predichos por el modelo.
Para la clase "true" (tsunami): 68.75% esto significa que ese porcentaje de los casos en los que hubo un tsunami fueron correctamente identificados por el modelo.

## <span style="color: #007BFF; text-align: center; display: block;">Conclusión</span>

El modelo tiene un excelente rendimiento en términos de predicción de los no tsunamis (alta precisión y sensibilidad).
Sin embargo, tiene dificultades en la predicción de los tsunamis. Aunque tiene una precisión relativamente alta (91.67%), la sensibilidad es más baja (68.75%), lo que indica que, si bien predice correctamente la mayoría de los tsunamis que ocurren, aún hay un 31.25% de tsunamis que no detecta.

[Regresar al inicio](https://nicolorenzo1.github.io/IAPortfolioNL/)

</div>
