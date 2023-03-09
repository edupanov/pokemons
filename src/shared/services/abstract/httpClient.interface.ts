export interface HttpClient {
    get(url: string, headers?: {}, skipErrorsHandler?: boolean): Promise<Request>
    post(url: string, body?: {}, headers?: {}, skipErrorsHandler?: boolean): Promise<Request>
    put(url: string, body?: {}, headers?: {}, skipErrorsHandler?: boolean): Promise<Request>
    delete(url: string, body?: {}, headers?: {}, skipErrorsHandler?: boolean): Promise<Request>
    postFormData(url: string, body: FormData, headers?: {}, skipErrorsHandler?: boolean): Promise<Request>
    putFormData(url: string, body: FormData, headers?: {}, skipErrorsHandler?: boolean): Promise<Request>
}