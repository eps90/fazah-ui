let apiUrl = '';

if (process.env.NODE_ENV === 'production') {
    apiUrl = 'http://localhost:8082';
}

export const API_URL = apiUrl;
