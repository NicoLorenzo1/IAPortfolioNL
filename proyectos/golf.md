<style>
    .general-content {
        margin-left: 2em; 
        margin-right: 2em; 
    }
</style>

<div class="general-content">

## <span style="color: #007BFF; text-align: center; display: block;">Análisis del juego Golf</span>

Este proyecto se centra en el análisis del dataset de golf, el objetivo es predecir si se debe o no jugar al golf en un día determinado, basándose en las condiciones meteorológicas. El conjunto de datos contiene varios atributos que describen el pronóstico del clima en ese día, y el atributo objetivo es Play, que indica si el golf se jugó ("yes") o no ("no").

## <span style="color: #007BFF; text-align: center; display: block;">Descripción del Proyecto</span>

La idea detrás de este análisis es determinar qué condiciones meteorológicas influyen más en la decisión de jugar al golf. A través de un modelo de clasificación, como Naive Bayes, se busca averiguar cómo factores como la temperatura, la humedad, el pronóstico del tiempo y el viento afectan la probabilidad de que se juegue al golf.

## <span style="color: #007BFF; text-align: center; display: block;">Objetivos</span>

El objetivo principal de este proyecto es desarrollar modelos predictivos que permitan determinar si se va ajugar al golf en función del estado del tiempo. A través del análisis de los datos, también buscamos identificar los factores más importantes que influyen en la prediccion final. 

## <span style="color: #007BFF; text-align: center; display: block;">Aplicando Naive bayes</span>

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos</span>

### Descripción de las Columnas del Dataset de Golf ###

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
            <td style="border: 1px solid #ddd; padding: 8px;">Play</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Este es el atributo objetivo, que indica si se juega al golf o no (valores: "yes" o "no").</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Outlook</td>
            <td style="border: 1px solid #ddd; padding: 8px;">El pronóstico del tiempo con valores como "sunny" (soleado), "overcast" (nublado), y "rain" (lluvioso).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Temperature</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La temperatura en grados Fahrenheit.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Humidity</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La humedad medida en porcentaje.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Wind</td>
            <td style="border: 1px solid #ddd; padding: 8px;"> Indica si hay viento o no (valores: "true" o "false").</td>
        </tr>
        </tbody>
    </table>
</div>

---

## <span style="color: #007BFF; text-align: center; display: block;">Desarrollo</span>

Comenzamos con el siguiente proceso en Rapidminer: 

![Texto alternativo](./assets/golf1.png)

1. **Retrieve (Carga de datos)**  
   - **Propósito**: Cargar el dataset de golf para entrenamiento.
   - **Descripción**: Este operador carga el conjunto de datos de golf, que incluye las características del clima (outlook, temperature, humidity, wind) y la decisión de si se jugó golf (play).

2. **Discretize (Discretizar los atributos)**  
   - **Propósito**: Convertir atributos numéricos continuos en categorías discretas. 
   - **Descripción**:  El operador "Discretize" convierte las características numéricas continuas como temperature y humidity en valores discretos (intervalos), lo que es útil para ciertos algoritmos de clasificación como Naive Bayes, que funcionan mejor con datos categóricos.

3. **Naive Bayes (Entrenamiento del modelo Naive Bayes)**  
   - **Propósito**: Entrenar un modelo Naive Bayes utilizando el dataset de golf.
   - **Descripción**: Este operador utiliza el algoritmo Naive Bayes para entrenar un modelo de clasificación que predice si se jugará al golf (play) en función de las características del clima (outlook, temperature, humidity, wind). Naive Bayes asume que los atributos son condicionalmente independientes entre sí y calcula la probabilidad de que un día sea favorable para jugar al golf.

4. **Retrieve Golf-Testset (Carga de datos del conjunto de prueba)**  
   - **Propósito**: Cargar el dataset de prueba.
   - **Descripción**:  Este operador carga un conjunto de datos de prueba de golf que se utilizará para evaluar el rendimiento del modelo entrenado. El conjunto de prueba tiene las mismas características que el conjunto de entrenamiento (clima), pero las decisiones reales sobre jugar o no al golf no se utilizarán en la evaluación.

5. **Discretize (2) (Discretización de los datos de prueba)**  
   - **Propósito**: Discretizar los atributos del conjunto de prueba de golf.
   - **Descripción**:  Similar al proceso en el conjunto de entrenamiento, este operador discretiza las características numéricas del conjunto de prueba (como temperature y humidity) para alinearlas con el modelo Naive Bayes.

6. **Apply Model (Aplicar el modelo entrenado)**  
   - **Propósito**: Aplicar el modelo Naive Bayes a los datos de prueba.
   - **Descripción**:  Este operador aplica el modelo Naive Bayes previamente entrenado sobre el conjunto de prueba. Se generan predicciones basadas en las características del clima (pronóstico, temperatura, etc.) para determinar si se jugará al golf.

## <span style="color: #007BFF; text-align: center; display: block;">Resultados obtenidos al aplicar Naive Bayes</span>

![Texto alternativo](assets/golf2.png)
![Texto alternativo](assets/golf3.png)

## <span style="color: #007BFF; text-align: center; display: block;">Analisis Final</span>

El resultado final muestra dos variables "no" y "yes" que Indican el nivel de confianza del modelo para predecir "no" o "yes". Estos valores varían entre 0 y 1, reflejando qué tan seguro está este modelo en la predicción.

En este caso, el modelo predice correctamente en la mayoría de los casos, como se puede ver en las coincidencias entre las columnas "Play" y "prediction(Play)". Para la fila 3, por ejemplo, el modelo predijo correctamente que se iba a jugar (yes), con una confianza del 99.5%.

Sin embargo, hay algunos casos en los que el modelo falla. Por ejemplo, en la fila 1, el valor real es "yes", pero el modelo predice "no" con una confianza de 72%.

El modelo de Naive Bayes muestra la distribución para la clase "Play" en dos categorías:

Class no (0.357): Esto significa que el 35.7% de los datos pertenece a la clase "no".
Class yes (0.643): El 64.3% de los datos pertenece a la clase "yes".

Esto refleja que la clase "yes" está más presente en los datos que la clase "no". Esto también explica por qué el modelo tiende a tener una mayor confianza para predecir "yes" en la mayoría de los casos, ya que está influenciado por la distribución de los datos de entrenamiento.

## <span style="color: #007BFF; text-align: center; display: block;">Conclusión</span>

El modelo de Naive Bayes asume independencia condicional entre los atributos predictivos, lo que no siempre se cumple en la realidad. Si algunos atributos están correlacionados, como pueden ser la Humedad y el Outlook, la precisión del modelo puede verse afectada.
Además, como la clase "yes" es más común, el modelo puede estar algo sesgado hacia predecir "yes" más frecuentemente, lo que podría explicar por qué a veces predice "yes" con un alto grado de confianza incluso cuando el valor real es "no" (o viceversa).

El modelo parece tener un buen rendimiento en términos generales, pero sería importante realizar evaluaciones con métricas mas detalladas.
---

[Regresar al inicio](https://nicolorenzo1.github.io/IAPortfolioNL/)

</div>
