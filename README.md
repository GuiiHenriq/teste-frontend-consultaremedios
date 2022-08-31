# Teste Front-end | Consulta Remédios

**Deploy**: [https://teste-frontend-consultaremedios.vercel.app/](https://teste-frontend-consultaremedios.vercel.app/)


# Checklist

 - Vue 3  (c/ Script Setup) ✅
 - Nuxt.js ✅
 - Typescript ✅
 - Atomic Design ✅
 - CSS Puro ✅
 - Variáveis de Ambiente ✅
 - Design Responsivo ✅
 - SCSS, ESlint, Prettier, Axios e Loaders ✅
 - Testes com Cypress ❌
 - SSG ❌

# Observações
Tive alguns problemas para utilizar a store da Vuex com **NuxtJS + Script Setup + TS**, como já havia iniciado o projeto com **Script Setup**, afim de não mudar toda a estrutura, optei por trabalhar com eventos customizados, passando os dados no componente Pai para Filho via **PROP** e no componente Filho para Pai via **EVENT**.
Essa não é a melhor solução a ser aplicada, mas como os dados a serem armazenados não são de grande volume, acredito ser uma solução viável.
Em um projeto maior, iria optar por mudar a estrutura do projeto ou utilizar o [Pinia](https://pinia.vuejs.org/).  