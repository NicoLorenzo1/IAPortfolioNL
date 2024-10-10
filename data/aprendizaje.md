<a href="../index.html" class="return-button">Regresar al inicio</a>

# **Aprendizaje Supervisado y No Supervisado**

El aprendizaje automático se divide en dos categorías principales: supervisado y no supervisado, cada una con características particulares y objetivos distintos.

---

## **Aprendizaje Supervisado** 

El aprendizaje supervisado es una técnica en la que el modelo aprende a partir de un conjunto de datos que ya está etiquetado. Esto significa que cada instancia del conjunto de datos tiene una entrada y una salida correspondiente. El objetivo del modelo es encontrar una función que asocie correctamente la entrada con la salida para predecir resultados en nuevos datos no etiquetados.

### **Características Claves:**
- **Datos etiquetados:** En el aprendizaje supervisado, el conjunto de datos de entrenamiento contiene pares de entrada y salida (etiquetas). Estas etiquetas guían el modelo para aprender patrones.
- **Función objetivo:** El objetivo principal es que el modelo aprenda una función que pueda mapear las entradas a las salidas de manera precisa.
- **Tareas comunes:**
  - **Clasificación:** El modelo predice una etiqueta discreta para una entrada dada. Ejemplo: predecir si un correo es spam o no.
  - **Regresión:** El modelo predice un valor continuo. Ejemplo: predecir el precio de una casa basado en sus características.

### **Ejemplos de Algoritmos Supervisados:**
- **Regresión Lineal:** Utilizado para problemas de regresión, predice un valor continuo.
- **Regresión Logística:** Utilizado para clasificación, predice la probabilidad de que una instancia pertenezca a una clase particular.
- **Árboles de decisión:** Utilizados para clasificación y regresión.

### **Ventajas del Aprendizaje Supervisado:**
- **Precisión:** Proporciona predicciones más precisas porque el modelo es guiado por las etiquetas.
- **Explicabilidad:** Las relaciones entre las entradas y las salidas son generalmente más fáciles de interpretar.

### **Desventajas del Aprendizaje Supervisado:**
- **Requiere etiquetas:** El proceso de etiquetar datos puede ser costoso y llevar mucho tiempo.
- **Sobreajuste:** El modelo puede aprender demasiado bien los datos de entrenamiento, lo que hace que tenga un rendimiento deficiente con datos nuevos.

---

## **Aprendizaje No Supervisado**

El **aprendizaje no supervisado** se utiliza cuando los datos de entrada no tienen etiquetas. En este caso, el modelo intenta descubrir patrones y estructuras ocultas en los datos por sí mismo, sin una guía explícita.

### **Características Claves:**
- **Datos no etiquetados:** No hay etiquetas que guíen el aprendizaje del modelo, lo que implica que el modelo debe identificar patrones por su cuenta.
- **Exploración de patrones:** El objetivo es agrupar o estructurar los datos de manera que se identifiquen patrones o relaciones internas.

### **Tareas comunes:**
- **Agrupamiento (Clustering):** El modelo divide el conjunto de datos en grupos (clusters) de elementos similares. Ejemplo: segmentación de clientes en marketing.
- **Reducción de Dimensionalidad:** El modelo simplifica el conjunto de datos, manteniendo solo las características más importantes. Ejemplo: Principal Component Analysis (PCA).

### **Ejemplos de Algoritmos No Supervisados:**
- **K-Means:** Un algoritmo de agrupamiento que divide los datos en K clusters.

### **Ventajas del Aprendizaje No Supervisado:**
- **No requiere etiquetas:** Ahorra el esfuerzo de etiquetar datos, lo que es especialmente útil en grandes conjuntos de datos.
- **Descubrimiento de patrones:** Útil cuando no se tiene una idea clara de los grupos o patrones en los datos.

### **Desventajas del Aprendizaje No Supervisado:**
- **Menos precisión:** Sin etiquetas, puede ser difícil evaluar el rendimiento del modelo.
- **Complejidad:** Los modelos no supervisados pueden ser más difíciles de interpretar y ajustar.

---

## **Comparación: Aprendizaje Supervisado vs No Supervisado**

| **Característica**           | **Aprendizaje Supervisado**                                           | **Aprendizaje No Supervisado**                                   |
|------------------------------|----------------------------------------------------------------------|------------------------------------------------------------------|
| **Datos**                    | Etiquetados (con salida conocida)                                    | No etiquetados (sin salida conocida)                             |
| **Objetivo**                 | Predecir una salida basada en la entrada                             | Identificar patrones o estructuras ocultas                       |
| **Algoritmos Comunes**       | Regresión lineal, clasificación, SVM                                 | K-Means, DBSCAN, PCA                                             |
| **Precisión**                | Alta si el conjunto de datos es representativo                       | Menos preciso debido a la falta de etiquetas                     |
| **Uso**                      | Cuando las salidas son conocidas y se requiere predicción            | Cuando se busca descubrir patrones en datos no etiquetados       |

---

## **Aplicaciones de Aprendizaje Supervisado y No Supervisado**

### **Aprendizaje Supervisado:**
- Detección de fraudes: Clasificación de transacciones como fraudulentas o legítimas.
- Diagnóstico médico: Predecir la presencia de una enfermedad en base a síntomas y pruebas.
- Reconocimiento de voz: Convertir señales de audio en texto.
  
### **Aprendizaje No Supervisado:**
- Segmentación de clientes: Agrupar clientes en función de su comportamiento.
- Detección de anomalías: Identificar datos que no se ajustan al patrón general.
- Compresión de datos: Reducir el tamaño de los datos manteniendo la información esencial (PCA).

