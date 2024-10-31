# Этап сборки с использованием Node.js
FROM node:14 AS build

# Установка рабочей директории
WORKDIR /usr/src/app

# Копирование файлов package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование всех остальных файлов (например, исходный код приложения)
COPY . .

# Сборка приложения
RUN npm run build

# Этап развертывания с использованием Nginx
FROM nginx:stable-alpine

# Копирование собранных файлов из этапа сборки
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Копирование конфигурации Nginx, если она у вас есть
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Открытие порта 80 для доступа
EXPOSE 80

# Запуск Nginx в фоновом режиме
CMD ["nginx", "-g", "daemon off;"]
