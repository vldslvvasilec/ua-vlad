# Используем легковесный образ Python
FROM python:3.12.3

WORKDIR /uaVlad
# Обновляем pip
RUN pip install --upgrade pip

# Устанавливаем системные зависимости
RUN apt-get update && \
apt-get install -y --no-install-recommends \
gcc \
libpq-dev \
&& rm -rf /var/lib/apt/lists/*

# Копируем файл requirements.txt
COPY requirements.txt requirements.txt

# Устанавливаем зависимости из requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь проект в контейнер
COPY uaVlad/ /uaVlad/

# Указываем команду для запуска приложения
CMD ["python", "manage.py", "runserver", "0.0.0.0:8084"]
