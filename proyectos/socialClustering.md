<style>
    .general-content {
        margin-left: 2em; 
        margin-right: 2em; 
    }
</style>

<div class="general-content">

# <span style="color: #007BFF; text-align: center; display: block;">Segmentación de Usuarios de Redes Sociales</span>

Este proyecto tiene como objetivo desarrollar una metodología para segmentar a los usuarios de redes sociales en función de sus intereses comunes.
La segmentación permitirá sugerir conexiones entre usuarios con afinidades similares, facilitando la creación de comunidades más significativas y mejorando la experiencia del usuario.
La segmentación basada en intereses no solo aumenta la probabilidad de conexiones exitosas, sino que también optimiza el contenido recomendado en función de lo que los usuarios valoran y comparten en común.
Este conjunto de datos contiene 10,000 filas, lo que lo hace ideal para este análisis.

# <span style="color: #007BFF; text-align: center; display: block;">¿Por qué elegí este caso de estudio?</span>
Elegí este estudio de caso porque la segmentación de usuarios en redes sociales es un tema altamente relevante en el mundo digital actual.
En un entorno donde las plataformas compiten por atraer y retener usuarios, ofrecer experiencias personalizadas se ha convertido en una estrategia clave.
Agrupar a los usuarios en función de intereses comunes no solo mejora las recomendaciones de amigos y contenido, sino que también fomenta interacciones significativas y la creación de comunidades virtuales que enriquecen la experiencia del usuario.

# <span style="color: #007BFF; text-align: center; display: block;">Objetivos</span>
El proyecto tiene como objetivo identificar patrones ocultos en los datos mediante técnicas de clustering (aprendizaje no supervisado). El enfoque principal consiste en agrupar usuarios basándose en intereses compartidos para optimizar las recomendaciones de contenido y fomentar conexiones significativas dentro de las redes sociales.

# <span style="color: #007BFF; text-align: center; display: block;">Desarrollo</span>
El dataset utilizado contiene información detallada sobre:
- Intereses de los usuarios
- fecha de nacimiento
- Distribución geográfica (ciudad y país)


## <span style="color: #007BFF; text-align: center; display: block;">Análisis de Datos</span>

### Descripción de las Columnas del Dataset de Usuarios ###
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
            <td style="border: 1px solid #ddd; padding: 8px;">UserID</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Identificador único del usuario.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Nombre</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nombre del usuario registrado.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Género</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Género del usuario (Masculino/Femenino).</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Fecha de nacimiento (DOB)</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Fecha de nacimiento que permite calcular la edad de los usuarios.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Intereses</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lista de intereses de cada usuario.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Ciudad</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Ciudad de residencia del usuario.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">País</td>
            <td style="border: 1px solid #ddd; padding: 8px;">País de residencia del usuario.</td>
        </tr>
        </tbody>
    </table>
</div>

### Análisis de Atributos y Distribuciones

**1. UserID**  
El identificador único del usuario tiene una distribución uniforme (cada usuario tiene un ID único sin valores repetidos).

**2. Nombre**  
No se identificaron valores nulos o vacíos en los nombres de los usuarios.

**3. Género**  
Representa el género de los usuarios: "Masculino" y "Femenino".  
La proporción entre géneros es cercana a un 50-50, indicando una distribución binomial casi equilibrada. Sin embargo, se observa una ligera inclinación hacia el género femenino, aunque la diferencia es mínima.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/image.png" alt="Distribución de Géneros" style="width: 400px; margin-bottom: 3em;">
</div>

**4. Fecha de Nacimiento (DOB)**  
En base en este atributo, se calculó la edad de los usuarios. Las edades oscilan entre 20 años (nacidos en 2004) y 70 años (nacidos en 1954).  
La distribución es sesgada hacia la derecha, lo que significa que hay más usuarios jóvenes (entre 20 y 40 años) en comparación con usuarios mayores de 50 años.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/imageDOB.png" alt="Distribución de Fechas de Nacimiento" style="width: 400px; margin-bottom: 1em;">
</div>
<div style="text-align: left;">
    <img src="assets/userInterestAssets/imageDob2.png" alt="Distribución de Edades Detallada" style="width: 400px; margin-bottom: 3em;">
</div>

**5. Intereses**  
La distribución de intereses en este dataset proporciona información clave sobre la variedad y frecuencia de intereses entre los usuarios de redes sociales. Este análisis es esencial para comprender las preferencias generales de los usuarios y cómo estos intereses pueden agruparse para generar recomendaciones personalizadas.  
Algunos usuarios tienen un único interés, mientras que otros poseen múltiples intereses, lo que se puede analizar agrupando usuarios según la cantidad de intereses listados.  
Un ejemplo es "Fashion", que aparece 142 veces.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/imageInterest.png" alt="Distribución de Intereses" style="width: 400px; margin-bottom: 3em;">
</div>

**6. Ciudad**  
La distribución de ciudades está altamente sesgada, ya que la mayoría de las ciudades tienen solo un usuario registrado. Solo unas pocas ciudades tienen más de un usuario, lo que representa una amplia dispersión de la población.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/city.png" alt="Distribución de Ciudades" style="width: 400px; margin: margin-bottom: 1em;">
</div>
<div style="text-align: left;">
    <img src="assets/userInterestAssets/city2.png" alt="Distribución de Ciudades Detallada" style="width: 400px; margin-bottom: 3em;">
</div>

**7. País**  
La distribución está positivamente sesgada, ya que un pequeño grupo de países representa la mayoría de los registros. La cola de la distribución muestra muchos países con pocos registros, lo cual es común en datasets de este tipo donde ciertas ubicaciones son más prominentes. No se identificaron valores atípicos claros en la distribución. Los registros de países menos frecuentes son consistentes con la naturaleza del dataset.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/country.png" alt="Distribución de Países" style="width: 400px; margin-bottom: 3em;">
</div>


### Identificación del Tipo de Problema
En este caso, el objetivo es agrupar a los usuarios en función de sus intereses utilizando el conjunto de datos de Usuarios de Redes Sociales. El problema pertenece al tipo de aprendizaje no supervisado clustering. Esto se debe a que no hay etiquetas o variables objetivo predefinidas (por ejemplo, "grupo de usuario"). Esto significa que el modelo necesita identificar patrones o grupos únicamente basándose en los datos disponibles.

El Clustering es una técnica utilizada para descubrir grupos o patrones ocultos en los datos, como los intereses comunes en este caso.
Para este tipo de problema, se puede utilizar el algoritmo K-Means, ya que agrupa a los usuarios minimizando las distancias dentro de los clusters y maximizando las distancias entre ellos.
Este método es especialmente útil para identificar patrones comunes entre los usuarios con intereses similares.
Además, este algoritmo permite experimentar con diferentes valores de k (número de clusters) y seleccionar el más adecuado para lograr el ajuste deseado.


### Aplicación del Modelo K-Means
Para segmentar los usuarios en función de sus intereses y características comunes, se utilizó el algoritmo K-Means en AI Studio. Este proceso permitió agrupar a los usuarios en clusters basados en patrones de similitud.

#### Proceso creado en AI Studio:
El siguiente diagrama muestra el flujo general del proceso para implementar K-Means:
<div style="text-align: left;">
    <img src="assets/userInterestAssets/allProcess.png" alt="" style="width: 1000px; margin-bottom: 3em;">
</div>

#### Subproceso dentro del "Loop Parameters":
En este subproceso se optimizan los parámetros del algoritmo mediante pruebas iterativas.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/subProcess.png" alt="" style="width: 1000px; margin-bottom: 3em;">
</div>

#### Descripción de los operadores aplicados:
1. **Sample:**  
   Su propósito es extraer una muestra de datos del dataset original.  
   Este operador se utiliza generalmente para manejar un subconjunto de datos más manejable cuando el dataset original es muy grande, permitiendo realizar pruebas rápidas y evitando problemas de rendimiento.

2. **Remove Duplicates:**  
   Elimina registros duplicados del dataset.  
   Los duplicados pueden sesgar los resultados del clustering, haciendo que ciertos clusters parezcan más densos de lo que realmente son.

3. **Date to Numerical:**  
   Convierte atributos de tipo fecha (como DOB) en valores numéricos.  
   Propósito: Los algoritmos de clustering no pueden manejar directamente datos de tipo fecha. En este caso, se utilizó para calcular la edad a partir del año de nacimiento.

4. **Generate Attributes:**  
   Crea atributos derivados basados en cálculos.  
   Este operador se usó para calcular la edad del usuario a partir de la fecha de nacimiento (DOB), transformándola en un atributo numérico relevante para el clustering.

5. **Select Attributes:**  
   Selecciona los atributos relevantes para el análisis.  
   propósito: El clustering funciona mejor con atributos significativos, por lo que se seleccionaron Edad, Intereses y Género como los más relevantes para la segmentación.

6. **Nominal to Numerical:**  
   Convierte atributos categóricos (nominales) en un formato numérico.  
   K-Means requiere que todos los atributos sean numéricos para calcular las distancias entre puntos.

7. **Normalize:**  
   Escala los atributos numéricos a un rango común (por ejemplo, [0,1] o valores estandarizados).  
   K-Means es sensible a la escala de los atributos. La normalización asegura que ningún atributo domine el cálculo de distancias debido a un rango más amplio de valores.

8. **Loop Parameters:**  
   Permite aplicar y optimizar el algoritmo de clustering.  
   Este operador se utiliza para realizar un análisis iterativo con diferentes configuraciones del algoritmo, como el número de clusters k. Configura el rango de valores para k y evalúa el rendimiento de cada modelo basado en métricas como el Método del Codo o la distancia entre clusters.

9. **K-Means Clustering:**  
   Agrupa los datos en k clusters basados en similitudes entre los atributos seleccionados.  
   Este paso genera los clusters finales y asigna cada registro a un cluster.  
   El número óptimo de clusters (k) debe determinarse con base en pruebas previas. Para medir la similitud entre puntos, se utiliza la distancia euclidiana.

### Selección del parámetro k en K-Means

El operador Loop Parameters fue clave para realizar experimentos iterativos con diferentes configuraciones de parámetros. En el caso del algoritmo K-Means, este operador permitió probar diferentes valores de k para determinar el más adecuado.

#### Método del Codo (Elbow Method):
Se utilizó el método conocido como "Elbow Method", una técnica visual para determinar el número óptimo de clusters en algoritmos de clustering.

Para realizar este método, configuramos el operador Cluster Distance Performance para calcular la métrica "Distancia promedio al centroide" en cada iteración.  
En el gráfico resultante, el eje X representa el número de clusters (k), y el eje Y representa la métrica "Distancia promedio al centroide" calculada para cada k.

Ajustamos el operador Loop Parameters para explorar valores desde k = 2 hasta k = 30 en 20 pasos.


<div style="text-align: left;">
    <img src="assets/userInterestAssets/elbow.png" alt="" style="width: 1000px; margin-bottom: 3em;">
</div>

<div style="text-align: left;">
    <img src="assets/userInterestAssets/elbowAvg.png" alt="" style="width: 1000px; margin-bottom: 3em;">
</div>

### Visualización del gráfico
El gráfico muestra una tendencia decreciente, como era de esperarse. A medida que aumenta el número de clusters, la distancia promedio al centroide disminuye, ya que hay más clusters para capturar las variaciones en los datos.  

El "codo" es el punto en el que la reducción en la distancia promedio comienza a ser menos significativa. En este caso, el codo aparece alrededor de k = 12. Esto significa que hasta k = 12, agregar más clusters resulta en una mejora sustancial en la compacidad de los clusters. Más allá de k = 12, la mejora es marginal.  

Seleccionar k = 12 equilibra una buena segmentación de los datos sin sobreajustar.

### Índice de Davies-Bouldin:
Ahora calculamos el valor más eficiente de k pero utilizando el Índice de Davies-Bouldin, que representa la relación entre que tan compactos estan los clusters y su separación.  

En este caso, se selecciona el punto donde el índice es más bajo, ya que esto indica el mejor valor de k.  

<div style="text-align: left;">
    <img src="assets/userInterestAssets/daviesBoudinK.png" alt="" style="width: 1000px; margin-bottom: 3em;">
</div>

#### Parámetros seleccionados:
<div style="text-align: left;">
    <img src="assets/userInterestAssets/kmeansParameters.png" alt="" style="width: 1000px; margin-bottom: 3em;">
</div>

Seleccionar k = 12 fue un valor óptimo según los métodos anteriores para evitar el sobreajuste del algoritmo. Esto se alinea con los índices obtenidos a partir de la métrica "Distancia promedio al centroide".

Se eligió un límite razonable de iteraciones máximas (10) para asegurar que el algoritmo optimice correctamente las posiciones de los centroides sin consumir recursos innecesarios.  

Los parámetros seleccionados incluyen:

Divergencias de Bregman, fue seleccionado porque esta métrica es coherente con el tipo de datos que se están procesando. Las divergencias de Bregman son una extensión matemática adecuada cuando se trabaja con datos transformados y normalizados, como en este caso.

Distancia Euclidiana Cuadrada, fue elegido porque es una métrica estándar en K-Means, que mide de manera efectiva las diferencias entre puntos en un espacio multidimensional. Esto es apropiado porque los intereses y características (como la edad y el género) han sido escalados de manera uniforme.

optimización maxima de steps, fue seleccionado porque este valor garantiza que K-Means tenga suficientes pasos para optimizar la posición de los centroides y ajustar los clusters. En este caso, con datos complejos y un número de clusters (\( k = 15 \)), establecer un límite suficientemente alto, como 100, permite un ajuste adecuado sin sobrecargar el procesamiento.


### Ejecutando el algoritmo

<div style="text-align: left;">
    <img src="assets/userInterestAssets/clusters.png" alt=""style="height: auto;">
</div>

En este caso, el eje X representa el atributo "Intereses" previamente normalizado, y el eje Y representa el atributo "Edad", también normalizado. Cada color representa un cluster único, con un total de 12 clusters.
Los clusters parecen razonablemente distribuidos, con diferenciaciones visibles en ciertas regiones. Sin embargo, algunos clusters muestran superposiciones o separaciones menos claras, reflejando la naturaleza de los datos, donde personas de diferentes edades pueden compartir intereses similares, o viceversa.

<div style="text-align: left;">
    <img src="assets/userInterestAssets/clustersGender.png" alt="" style="margin-top: 3em;">
</div>

Ahora, el eje x representa la característica "Intereses" del conjunto de datos, previamente normalizada, y el eje y representa la característica "Género". Cada color denota un cluster único, con un total de 12 clusters representados. La clara separación en dos líneas horizontales (-1 y 1) indica que los datos están distribuidos únicamente entre dos géneros, lo que significa que el atributo no tiene valores intermedios. También se observa que los colores de los clusters están mezclados dentro de los valores de Intereses, lo que indica que "Intereses" no es un atributo completamente discriminativo para separar los clusters. Esto refleja la naturaleza de los datos, donde diferentes personas comparten intereses similares independientemente del género. Algunos clusters ocupan rangos amplios en el eje de Intereses, lo que sugiere una mayor diversidad de intereses dentro de esos grupos.


### Modificación del Dataset
El dataset original contenía los intereses de los usuarios agrupados en una sola columna como un atributo polinómico (una lista de múltiples valores separados por comas para cada usuario). Esto presentó varios desafíos al aplicar el algoritmo K-Means.  
K-Means, al ser un algoritmo basado en distancias, calcula similitudes entre puntos utilizando coordenadas numéricas en un espacio multidimensional. Sin embargo, cuando los intereses están agrupados en una sola columna, esta información no se traduce de manera efectiva en un formato que K-Means pueda interpretar con precisión.  

Agrupar los intereses en un solo atributo dificulta la identificación de patrones específicos en los datos, ya que es complicado determinar exactamente cuáles intereses comparten los usuarios. El algoritmo podría tratar los valores concatenados como una sola entidad, generando clusters basados en similitudes incorrectas o irrelevantes.

Para abordar este problema, se implementó la estrategia de One-Hot Encoding. Este método transformó el atributo "Intereses" en un conjunto de atributos binarios, donde cada interés único se convirtió en una columna independiente. En estas nuevas columnas:  
- "1" indica que el usuario tiene ese interés específico.  
- "0" indica que el usuario no tiene ese interés.  

### Beneficios de esta modificación:
- Mejor interpretación por parte de K-Means: Separar los intereses en atributos binarios convierte cada uno en una dimensión en el espacio donde opera K-Means, permitiendo cálculos de distancia más precisos entre los puntos.
- Mejora de la granularidad: Ahora es posible analizar patrones específicos de intereses para cada usuario, mejorando la calidad de los clusters.
- Mayor flexibilidad para análisis futuros: Con los intereses separados en atributos individuales, se pueden crear visualizaciones más detalladas, como gráficos de barras apilados o mapas de calor, para observar cómo se distribuyen los intereses en los clusters.
- Optimización de recomendaciones: Separar los intereses permite identificar más eficazmente grupos de usuarios con preferencias compartidas, facilitando recomendaciones personalizadas y la creación de comunidades basadas en afinidades.

#### Visualización de la transformación del dataset:

<div style="text-align: left;">
    <img src="assets/userInterestAssets/one-hot-encoding.png" alt="" >
</div>

### Calulando el valor de k
El valor de k se recalculó para determinar el número más preciso posible utilizando el Método del Codo (Elbow Method).

<div style="text-align: left;">
    <img src="assets/userInterestAssets/elbow-One-Hot-Encoding.png" alt="" style="margin-bottom: 3em;">
</div>

En este caso, un buen valor para k podría ser 15, ya que agregar más clusters no mejora significativamente la segmentación. Este comportamiento es típico del "codo" en el gráfico, lo que hace de k=15 una elección sólida.  
Si el valor de k es demasiado alto, existe el riesgo de crear clusters pequeños y excesivamente específicos que no generalizan bien.

Después de seleccionar el valor óptimo de k y ejecutar el algoritmo bajo las mismas condiciones, se obtuvieron los siguientes resultados:

#### Visualización de la distribución por edad y intereses:
<div style="text-align: left;">
    <img src="assets/userInterestAssets/barInterestAgeNormalized.png" alt="" style="margin-bottom: 3em;">
</div>

Al separar los intereses en columnas diferentes, los clusters aparecen más claramente definidos, permitiendo analizar solo los intereses que se desean observar.  
En este caso, se seleccionaron dos intereses en relación con la edad desnormalizada para proporcionar un ejemplo de cómo se pueden descubrir diferentes patrones de información relevante dentro del dataset.  

El gráfico muestra cómo se distribuyen los datos en función de la edad desnormalizada, con valores separados en columnas individuales. Este enfoque facilita un análisis más preciso y segmentado de los datos.  
Los intereses "Arte" (representado en azul) y "Libros" (representado en verde) fueron utilizados. Cada barra indica el número total de usuarios con un interés específico dentro de cada rango de edad.  
- En edades jóvenes (20-30 años), ambos intereses muestran una distribución estable, aunque "Libros" tiene un mayor número de usuarios.  
- A medida que aumenta la edad, la diferencia entre los dos intereses se mantiene relativamente constante, con ligeras variaciones.

Este tipo de visualización ayuda a identificar segmentos de usuarios en función de sus intereses y edades, permitiendo recomendaciones personalizadas de contenido o productos para grupos de edades específicos.

### Descubriendo más información en los datos
#### Proporción de género por interés:

<div style="text-align: left;">
    <img src="assets/userInterestAssets/interestGaming.png" alt="" style="margin-bottom: 3em;">
</div>

Este ejemplo refleja la proporción de género para el interés "Gaming" en cada cluster.  
El gráfico muestra cómo se compone cada cluster en términos de género para este interés específico:  
- En el caso del cluster 9, se observa que está compuesto completamente por el género "0" (verde), lo que indica que todos los usuarios de este cluster interesados en Gaming pertenecen a este género.
- Otros clusters, como el cluster 11, muestran una combinación de ambos géneros, con proporciones específicas de azul (género "1") y verde (género "0").  

Si ciertos clusters tienen un género predominante para un interés, esto podría indicar una fuerte correlación entre ese género y el interés. En clusters con ambos géneros presentes, se podría analizar si el interés resulta igualmente atractivo para todos o si existen diferencias en la proporción de usuarios.  


### Conclusión

Este caso de estudio demostró cómo se puede utilizar el algoritmo K-Means para segmentar a los usuarios de redes sociales en función de sus intereses comunes y otras características clave, como la edad y el género. Una segmentación efectiva es esencial para personalizar las experiencias de los usuarios y optimizar las recomendaciones, lo que mejora significativamente la interacción y la satisfacción del usuario. 

Para determinar el número óptimo de grupos, se utilizaron dos métricas principales: la distancia promedio dentro del centroide (Método del Codo) y el Índice de Davies-Bouldin. Estas herramientas permitieron establecer el valor más adecuado para "k", asegurando una segmentación equilibrada y representativa. Es importante destacar que el algoritmo K-Means es sensible a la selección del parámetro  "k", lo que puede influir en la calidad de los grupos generados. Además, K-Means tiende a crear grupos de tamaño uniforme, lo que no siempre refleja con precisión la distribución real de los datos. 

A pesar de estas limitaciones, los resultados obtenidos proporcionan información valiosa para recomendar contenido y establecer conexiones entre usuarios con intereses similares. 

Cabe resaltar la importancia del preprocesamiento de datos, ya que sin aplicar la técnica de codificación one-hot a los intereses de las personas, los resultados habrían sido muy diferentes y habrían proporcionado información que no es completamente precisa. 

Finalmente, después de aplicar el algoritmo, se identificaron patrones relevantes y se descubrió nueva información que puede ser utilizada para diversos propósitos. Además, toda la información generada y representada en los clusters puede procesarse y desnormalizarse para visualizar detalles específicos, como qué usuarios tienen ciertos intereses. Esto permite un mayor nivel de granularidad, facilitando una clasificación más precisa y detallada.