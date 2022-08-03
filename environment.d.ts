/* eslint-disable no-unused-vars */
declare global {
    namespace NodeJS{
        interface ProcessEnv {
            GOOGLE_API_KEY: string
            OPEN_WEATHER_API_KEY: string
            NODE_ENV: 'development' | 'production'
            PORT?: string
            PWD: string
        }
    }
}

export {}