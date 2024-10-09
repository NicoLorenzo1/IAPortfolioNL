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

## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos</span>

### <span style="color: #007BFF; text-align: center; display: block;">Descripción de las Columnas del Dataset de Vinos</span>

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

## <span style="color: #007BFF; text-align: center; display: block;">Conclusión</span>

Este proyecto busca utilizar análisis estadísticos y técnicas de machine learning para predecir el origen del vino en función de sus propiedades químicas y físicas. El análisis de los diferentes compuestos permite no solo diferenciar la región de origen, sino también identificar las propiedades más importantes que afectan la calidad del vino.

---

[Regresar al inicio](../index.html)

</div>
