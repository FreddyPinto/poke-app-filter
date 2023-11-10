### ¡Bienvenidos !

La idea de este desafío es demostrar algunas habilidades básicas sobre JavaScript y React.

Aquí encontrarás todas las instrucciones necesarias para este mini desafío.

Requisitos adicionales:

- Debería poder insertar caracteres en mayúsculas o minúsculas y hacer coincidir una cadena
- Debes ignorar los espacios iniciales y finales.

## Instrucciones

En este Codesandbox, tienes un entorno completo con todo lo que necesitas para ejecutar tu aplicación. Sólo tienes que seguir las instrucciones a continuación:

1. En el componente de **App.js** llama la siguiente API de pokemon `https://pokeapi.co/` para obtener los primeros 50 pokemon que expone la API, guarda en un estado la data obtenida.
2. Crea un componente `CardItems` en el cual se nuestre la imagen del pokemon (img) y su nombre (h2), el componente debe estar wrap en un div con la clase **card-item**.
3. itera sobre los pokemon obtenidos mostrando todos los pokemon obtenidos utilizanod el componente `CardItems`.
4. En el componente **App.js** agrega un <input /> que va a filtrar los pokemones obtenidos.
5. Cree un estado para que el componente de la aplicación administre el valor de entrada.
6. Utilice el evento onChange de la entrada para actualizar el estado, filtrando los resultados con el valor de la entrada.

Notas:

- El componente CardItem recibe (nombre: cadena, sprite: cadena).