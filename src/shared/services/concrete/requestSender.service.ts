import { HttpClient } from "../abstract/httpClient.interface";

/*
 *  Сервис отправки запросов.
 */
const RequestSender: HttpClient = {

    async get(url: string, headers?: {}, skipErrorsHandler: boolean = false): Promise<Request> {
        const options: RequestInit = {
            method: 'GET',
            headers: { ...defaultHeaders, ...headers }
        }

        return fetch(url, options)
            .then(handleRedirect)
            .then(res => handleServerError(res, skipErrorsHandler))
    },

    async post(url: string, body?: {}, headers?: {}, skipErrorsHandler: boolean = false): Promise<Request> {
        const options: RequestInit = {
            method: 'POST',
            headers: { ...defaultHeaders, ...headers },
            body: JSON.stringify(body)
        }

        return fetch(url, options)
            .then(handleRedirect)
            .then(res => handleServerError(res, skipErrorsHandler))
    },

    async put(url: string, body?: {}, headers?: {}, skipErrorsHandler: boolean = false): Promise<Request> {
        const options: RequestInit = {
            method: 'PUT',
            headers: { ...defaultHeaders, ...headers },
            body: JSON.stringify(body)
        }

        return fetch(url, options)
            .then(handleRedirect)
            .then(res => handleServerError(res, skipErrorsHandler))
    },

    async delete(url: string, body?: {}, headers?: {}, skipErrorsHandler: boolean = false): Promise<Request> {
        const options: RequestInit = {
            method: 'DELETE',
            headers: { ...defaultHeaders, ...headers },
            body: JSON.stringify(body)
        }

        return fetch(url, options)
            .then(handleRedirect)
            .then(res => handleServerError(res, skipErrorsHandler))
    },

    async postFormData(url: string, body: FormData, headers?: {}, skipErrorsHandler: boolean = false): Promise<Request> {
        const options: RequestInit = {
            method: 'POST',
            // headers: { ...defaultHeaders, ...headers },
            body: body
        }

        return await fetch(url, options)
            .then(handleRedirect)
            .then(res => handleServerError(res, skipErrorsHandler))
    },
    
    async putFormData(url: string, body: FormData, headers?: {}, skipErrorsHandler: boolean = false): Promise<Request> {
        const options: RequestInit = {
            method: 'PUT',
            // headers: { ...defaultHeaders, ...headers },
            body: body
        }

        return await fetch(url, options)
            .then(handleRedirect)
            .then(res => handleServerError(res, skipErrorsHandler))
    }

}

const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const handleRedirect = (response: any) => {
    if (response.redirected) {
        window.location.replace(response.url);

        const error = new RequestError('Переадресация...');
        error.redirected = true;

        throw error;
    }

    return response;
};

const handleServerError = async (response: any, skipErrorsHandler: boolean) => {
    if (!skipErrorsHandler && !response.ok) {
        if (response.status === 401) {
            window.location.replace('/login');
        }

        const error = new RequestError(`Ошибка сервера (Код: ${response.status})`);

        // Добавляем данные ошибки к error.
        try {
            error.data = await response.json();
        } catch {
            console.log('unable to parse server error data');
        }

        throw error;
    }

    return response;
}

class RequestError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, RequestError.prototype);
    }

    redirected: boolean = false
    data?: object
}

export default RequestSender;