# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Expón el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación (aquí se usa nodemon para desarrollo)
CMD ["npm", "start"]
