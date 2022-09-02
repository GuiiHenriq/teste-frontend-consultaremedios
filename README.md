# Teste Front-end | Consulta Remédios

**Deploy**: [https://teste-frontend-consultaremedios.vercel.app/](https://teste-frontend-consultaremedios.vercel.app/)


# Checklist ✅

 - Vue 3  (**Script Setup**) :heavy_check_mark:
 - Nuxt.js :heavy_check_mark:
 - Typescript :heavy_check_mark:
 - Atomic Design :heavy_check_mark:
 - CSS Puro :heavy_check_mark:
 - Variáveis de Ambiente :heavy_check_mark:
 - Design Responsivo :heavy_check_mark:
 - SCSS, ESlint, Prettier, Axios e Loaders :heavy_check_mark:
 - Testes E2E :heavy_check_mark:
 - SSG ❌

# Rodar Projeto :computer:

> ⭕ Versão do Node Recomendada: 16xx ⭕

> Necessário inserir a URL da API no arquivo **.env**

> No arquivo **.env.sample** tem um exemplo da variável utilizada.

> https://raw.githubusercontent.com/ConsultaRemedios/frontend-challenge/master/products.json

    git clone https://github.com/GuiiHenriq/teste-frontend-consultaremedios.git

    cd teste-frontend-consultaremedios
    
    yarn install

    yarn dev

## Rodar Cypress
    yarn open cypress

> Caso tiver usando NPM, use:
> `npx open cypress`

# Observações :warning:
Tive alguns problemas para utilizar a store da Vuex com **NuxtJS + Script Setup + TS**, como já havia iniciado o projeto com **Script Setup**, afim de não mudar toda a estrutura, optei por trabalhar com eventos customizados, passando os dados no componente Pai para Filho via **PROP** e no componente Filho para Pai via **EVENT**.<br/><br/>
Essa não é a melhor solução a ser aplicada, mas como os dados a serem armazenados não são de grande volume, acredito ser uma solução viável.<br/><br/>
Em um projeto maior, iria optar por mudar a estrutura do projeto ou utilizar o [Pinia](https://pinia.vuejs.org/). <br/><br/>
> Para verem a solução que eu iria utilizar, mantive o module dentro da
> pasta **[store](https://github.com/GuiiHenriq/teste-frontend-consultaremedios/blob/main/store/games/index.js)** com a lógica que eu iria abordar utilizando a Vuex.