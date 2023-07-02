# Aplicación de Diagnóstico de Memoria de Trabajo

Esta aplicación fue desarrollada como trabajo final para la materia de Aplicaciones Móviles de la UTN FRLP. Su objetivo es servir como una herramienta de diagnóstico de la memoria de trabajo, recopilando datos para que los médicos puedan tomar decisiones informadas y profundizar en la evaluación de cada paciente.

## Características principales

- **Autenticación y Perfil**: La aplicación utiliza la autenticación de Firebase para permitir el acceso seguro a los usuarios. Cada usuario tiene un perfil personalizado donde se almacenan sus datos.

- **Juego de Memoria**: El juego consta de una serie de imágenes presentadas en dos momentos diferentes. El usuario debe determinar si las imágenes son iguales o no. Para brindar retroalimentación, la aplicación utiliza el sensor de vibración y emite sonidos relacionados a la respuesta dada por el usuario.

- **Tema de las Imágenes**: El usuario tiene la opción de elegir la temática de las imágenes del juego, lo que permite personalizar la experiencia de acuerdo a sus preferencias.

- **Almacenamiento y Consumo de Datos**: Los datos de aciertos y errores del usuario se guardan en la base de datos de Firebase. Estos datos se consumen posteriormente en una aplicación web, donde se muestran en una tabla para que los médicos puedan revisarlos y tomar decisiones informadas.

## Desarrolladores

- [Agustin Gomez D'Addario]
- [Manuel de la Mano]
- [Nahuel Lorenzo]
- [Ulises Mijael Ben]

## Tecnologías Utilizadas

- React Native: Framework de desarrollo de aplicaciones móviles multiplataforma.
- Firebase: Plataforma de desarrollo de aplicaciones móviles y web que proporciona autenticación y base de datos en tiempo real.
- Sensores de Vibración y Sonido: Utilizados para proporcionar retroalimentación al usuario durante el juego.

## Aplicación Web para Médicos

Los datos recopilados por la aplicación móvil se pueden visualizar y analizar en la aplicación web específicamente diseñada para los médicos. Esta aplicación web proporciona una interfaz intuitiva para revisar los datos de cada paciente y tomar decisiones informadas.

Accede a la [Aplicación Web para Médicos](https://app-medico-three.vercel.app/) para ver y analizar los datos de los pacientes.

## Instalación y Uso

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura tus credenciales de Firebase en el archivo de configuración correspondiente.
4. Ejecuta `npm start` para iniciar la aplicación.

¡Gracias por utilizar nuestra aplicación! Esperamos que sea útil en el diagnóstico y evaluación de la memoria de trabajo. Si tienes alguna pregunta o problema, no dudes en ponerte en contacto con nosotros.

