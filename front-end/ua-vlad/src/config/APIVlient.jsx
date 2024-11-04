import axios from 'axios';

// Функция для извлечения CSRF-токена из cookies
function getCSRFToken() {
    const csrfCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='));
    return csrfCookie ? csrfCookie.split('=')[1] : null;
}

// Создание инстанса axios
const apiClient = axios.create({
    baseURL: 'https://ua-vlad.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true // Чтобы cookies отправлялись с запросами
});

// Перехватчик для добавления CSRF-токена в заголовки каждого запроса
apiClient.interceptors.request.use(config => {
    const csrfToken = getCSRFToken();
    if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default apiClient;
