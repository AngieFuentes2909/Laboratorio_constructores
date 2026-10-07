# Laboratorio Constructores

### Ejercicio 1
¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?  
**R/=** La ventaja técnica es que se puede utilizar el codigo nuevamente sin volver a repetir y en futuro sirve pata agregar o modificar con mas facilidad.

### Ejercicio 2
¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?  
**R/=** Porque this va directamente al objeto que está usando el método en ese momento así se puede evitar que los datos se revuelvan asegurando que se actualicen o modifiquen solo los atributos de ese objeto especifico sin tocar los demás.

### Ejercicio 3
¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?  
**R/=** La principal ventaja de alta cohesión es que mantiene todo ordenado en un solo lugar. Así, si en el futuro cambian las reglas por ejemplo la nota que ya no sea 3.0 sino 3.2, es mucho más fácil actualizar el código sin enredarse.

### Ejercicio 4
¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?  
**R/=** Habría un desorden en el inventario por ejemplo de una biblioteca y el sistema le podría prestar el mismo libro a varias personas al mismo tiempo lo que causaría confusiones y problemas con los préstamos.

### Ejercicio 5
¿Qué ventajas tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?  
**R/=** Hace que el programa sea más dinámico y interactivo, ya que no tenemos datos fijos escritos en el código y asi cualquier persona puede ingresar información nueva y el sistema funcionará sin necesidad de modificarlo cada vez que se quiera cambiar modelo año etc.
