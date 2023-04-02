# Desafio de API do rickandmortyapi

Desenvolvi como forma de desafio tecnico uma plataforma onde consome um API REST e trata os dados para o usuário

## Recursos

- Listagem de personagens
- Filtro de personagens por nome
- Filtro de personagens por tipo
- Filtro de personagens por espercie
- Filtro de personagens por sexo
- Adiciona e remove personagens dos favoritos
- Sistema multi idiomas (pt-BR, es-ES, e en-US)
- Temas escuro e claro
- Teste unitários

## Installation

Vamos executar o sistema

##### On-line

[https://desafio-rickandmortycharacters.ynsmdx.easypanel.host/](https://desafio-rickandmortycharacters.ynsmdx.easypanel.host/)
O link acima disponibilzei afim de testar-mos a aplicação de forma mais rápida

##### Via docker

Primeiro passo e clonar esse repositório e na raiz dele executar os comandos:

```sh
docker build -t jarder_aplication  .
docker run -p 3000:3000 jarder_aplication
```

##### Tradicional

Primeiro passo e clonar esse repositório:
e depois e só executar

```sh
npm install // ou yarn install
npm run dev // ou yarn dev
```

E a aplicaçao irá executar em: [http://localhost:3000/](http://localhost:3000/)

##### Testes unitários

Essa aplicação foi realizado alguns testes unitário com a lib Jest, e para executar:

```sh
npm run test // ou yarn test
```

Nesse projeto utilizei:

- NextJs

---
