<style>
    .general-content {
        margin-left: 2em; 
        margin-right: 2em; 
    }
</style>

<div class="general-content">

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Origen y Calidad del Vino</span>

Este proyecto se centra en el análisis de un conjunto de datos de vinos, que incluye 178 registros con diferentes características químicas y físicas del vino. El objetivo es identificar patrones y características clave que permiten clasificar el origen y la calidad del vino.

## <span style="color: #007BFF; text-align: center; display: block;">Descripción del Proyecto</span>

El proyecto utiliza un conjunto de datos compuesto por diversas características químicas y físicas de vinos cultivados en diferentes regiones. El dataset consta de 178 registros, cada uno representando muestras de vino con diferentes características, como el contenido de alcohol, la acidez, el magnesio, y más. Este análisis tiene como fin predecir el origen del vino y estudiar las propiedades que definen su calidad.

## <span style="color: #007BFF; text-align: center; display: block;">Objetivos</span>

El objetivo principal de este proyecto es desarrollar modelos predictivos que permitan determinar el origen del vino en función de sus características químicas y físicas. A través del análisis de los datos, también buscamos identificar los factores más importantes que influyen en la calidad del vino. Esta información puede ser de gran utilidad para los enólogos, ya que les permite comprender mejor las propiedades que determinan la calidad de un buen vino.

Además, el proyecto no solo busca proporcionar un modelo de clasificación para el origen del vino, sino que también busca contribuir al estudio de la química del vino, proporcionando información valiosa que podría ser utilizada en otras investigaciones del campo.

---


## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos Aplicando Random forest </span>


### Descripción de las Columnas del Dataset de Vinos ###
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
            <td style="border: 1px solid #ddd; padding: 8px;">Class</td>
            <td style="border: 1px solid #ddd; padding: 8px;">La clase de origen del vino (1, 2 o 3), que indica la región de producción.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Alcohol</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Contenido de alcohol en el vino. Es un factor importante para determinar la calidad del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Malic acid</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nivel de ácido málico en el vino. Este ácido contribuye a la acidez del vino y su frescura.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Ash</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Ceniza total, que es un indicador de los minerales presentes en el vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Alcalinity of ash</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Alcalinidad de la ceniza. Refleja la presencia de compuestos inorgánicos.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Magnesium</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Contenido de magnesio. Es un mineral importante que afecta la composición del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Total phenols</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Fenoles totales. Los fenoles son compuestos que influyen en el sabor y la textura del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Flavanoids</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Flavonoides, que son una clase de fenoles que contribuyen al color y al sabor.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Nonflavanoid phenols</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Fenoles no flavonoides. Estos afectan la estructura del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Proanthocyanins</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Proantocianidinas, que son taninos importantes en la maduración del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Color intensity</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Intensidad de color, que es un indicador visual de la calidad del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Hue</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Matiz del vino, otro factor que afecta el color.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">OD280/OD315 of diluted wines</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Proporción entre OD280 y OD315. Es una medida espectrofotométrica utilizada para evaluar la calidad del vino.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Proline</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Prolina, que es un aminoácido importante en el vino y está relacionado con el sabor.</td>
        </tr>
        </tbody>
    </table>
</div>

---

## <span style="color: #007BFF; text-align: center; display: block;">Desarrollo</span>


Comenzamos con el siguiente proceso en Rapidminer: 

![Texto alternativo](./assets/wineProcess.png)

1. **Retrieve (Carga de datos)**  
   - **Propósito**: Cargar el dataset de vinos.
   - **Descripción**:  Este operador carga el archivo de datos que contiene las diferentes características químicas y físicas de los vinos, entre las cuales se incluye la clase (Class), que indica el origen de cada vino.

2. **Numerical to polynomial**  
   - **Propósito**: Pasar la variable objetivo (class) a polynomial.
   - **Descripción**: Esto se realiza ya que para aplicar random forest como clasificacion la variable a predecir debe ser de tipo polynomial y en nuestro caso estaba definida como numerica.  

3. **Set Role (Definir roles de atributos)**  
   - **Propósito**: Configurar el atributo que se desea predecir (etiqueta).  
   - **Descripción**: Este operador cambia el rol del atributo Class a label (etiqueta), que es la variable objetivo en este proceso. Las demás columnas se mantienen con el rol de atributos predictivos, tales como Alcohol, Malic acid, entre otros.

4. **Split Data (Dividir los datos en entrenamiento y prueba)**  
   - **Propósito**: Dividir el dataset en dos partes: una para entrenar el modelo y otra para evaluar su rendimiento.  
   - **Descripción**: Este operador divide los datos en dos subconjuntos:
     - **Datos de entrenamiento** (por ejemplo, el 70% de los datos) utilizados para entrenar el modelo.
     - **Datos de prueba** (por ejemplo, el 30% restante) utilizados para evaluar el modelo. En este caso, el flujo de datos se divide, enviando los datos de entrenamiento a random forest y los de prueba a Apply Model.

5. **Random forest**  
   - **Propósito**: Entrenar el modelo utilizando el algoritmo Random Forest para predecir el origen del vino.
   - **Descripción**: Este operador entrena un modelo utilizando el algoritmo de Random Forest. Random Forest crea múltiples árboles de decisión a partir de diferentes subconjuntos de los datos y combina sus predicciones para obtener una predicción final más robusta y precisa. Cada árbol de decisión es entrenado utilizando un subconjunto de atributos y registros, lo que reduce la varianza y mejora la precisión de la predicción final. Este algoritmo es especialmente útil cuando los datos contienen muchas características y puede manejar bien tanto datos balanceados como desbalanceados.

6. **Apply model**  
   - **Propósito**: Utilizar el modelo entrenado con Random Forest para hacer predicciones sobre el conjunto de prueba.
   - **Descripción**:  Este operador aplica el modelo de Random Forest entrenado a los datos de prueba para predecir el origen del vino. Compara las predicciones generadas por el modelo con los valores reales del atributo Class para generar las predicciones sobre los datos no etiquetados del conjunto de prueba.

7. **Performance**  
   - **Propósito**: Evaluar el rendimiento del modelo utilizando métricas de clasificación.
   - **Descripción**:  Este operador evalúa el rendimiento del modelo de Random Forest calculando varias métricas de clasificación. Estas métricas permiten medir qué tan bien el modelo predice correctamente el origen del vino en comparación con los valores reales del conjunto de prueba. Random Forest es conocido por su capacidad para evitar el sobreajuste y, a menudo, produce mejores resultados en comparación con otros modelos más simples como K-NN o Regresión Logística.


## <span style="color: #007BFF; text-align: center; display: block;">Resultados obtenidos al aplicar Random forest</span>

![Texto alternativo](assets/wineResult.png)

## <span style="color: #007BFF; text-align: center; display: block;">Analisis final</span>

Resumen de Resultados:

Clase 1:
19 instancias clasificadas correctamente.
Recall: 100% (todas las instancias reales de Clase 1 fueron detectadas).
Precision: 100% (todo lo predicho como Clase 1 fue correcto).

Clase 2:
18 instancias clasificadas correctamente.
1 error: 1 instancia de Clase 2 fue mal clasificada como Clase 3.
Recall: 94.74% (18/19 instancias reales detectadas).
Precision: 100% (todas las instancias predichas como Clase 2 fueron correctas).

Clase 3:
15 instancias clasificadas correctamente.
Recall: 100% (todas las instancias reales de Clase 3 fueron detectadas).
Precision: 93.75% (1 instancia fue mal clasificada como Clase 3, pero no lo era).

El modelo clasificó correctamente el 98.11% de todas las instancias del conjunto de prueba.


## <span style="color: #007BFF; text-align: center; display: block;">Conclusión</span>
<p>
El modelo Random Forest muestra un excelente rendimiento, con una precisión global de 98.11%. La mayoría de las clases son clasificadas correctamente, aunque existe un pequeño error en la Clase 2, donde una instancia fue clasificada incorrectamente como Clase 3.

Si este resultado en un futuro se quisiera mejorar aún más, se podria ajustar los parámetros de Random Forest (como el número de árboles) o probar con algun otro algoritmo como ser SVM para comparar resultados y quedarnos con el mejor.
</p>

[Regresar al inicio](https://nicolorenzo1.github.io/IAPortfolioNL/)

</div>
