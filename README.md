# Desafio Weather - Letras

Essa aplicação tem como objetivo prover informações sobre o clima atual e previsões do tempo em um local selecionado.

## Tecnologias

* ReactJs: Controle de estados, componentes e reatividade;
* NextJs: Otimização de performance com SSR e Bundling;
* Styled Components: CSS dinâmico com a técnica CSS-in-JS;
* Jest & React Testing Library: Testes unitários com manipulação do DOM;
* Google Places API: Autocomplete com informações do Google Maps;
* Open Weather API: Informações do clima e previsões.

## Setup

### Requisitos:
* Node v16.16
* Yarn 1.22
* API Key para Google Places
* API Key para Open Weather
* next.config.js
* .env.local

### Dependências:

Para baixar as dependências da aplicação execute o comando:

```
yarn
```

Crie um arquivo na raiz do projeto com o nome de `next.config.js` e insira o código abaixo substituindo o <API_ID> pela Api Key do Open Weather

```
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    OPEN_WEATHER_API_ID: <API_ID>
  }
}
  
module.exports = nextConfig
```

Crie um arquivo .env.local na raiz do projeto com o código:

```
GOOGLE_API_KEY=<GoogleApiKey>
```

### Execução

* Ambiente de desenvolvimento: `yarn dev`
* Executar testes unitários: `yarn test`
* Build e execução: `yarn build` & `yarn start`