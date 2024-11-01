FROM node:18 AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY ua-vlad/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY ua-vlad/ .

# Сборка проекта
RUN npm run build

# Используем nginx для раздачи собранных файлов
FROM nginx:stable-alpine

# Копируем собранные файлы из предыдущего контейнера в nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Копируем конфигурацию nginx, если необходимо
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]