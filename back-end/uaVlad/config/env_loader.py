import os
from dotenv import load_dotenv

# Путь к .env на два уровня выше
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '..', '.env')
load_dotenv(dotenv_path)

def get_env_variable(name):
    """
    Получает значение переменной окружения из файла .env.
    Если переменная не найдена, вызывает исключение.
    """
    value = os.getenv(name)
    if value is None:
        raise EnvironmentError(f"Переменная окружения '{name}' не найдена в .env файле.")
    return value
