# Teste de proficiência - frontend

## Objetivo

Desenvolver uma mini-aplicação (layout e código) que interaja com um backend rodando em Docker através de requisições HTTP.

## Instruções para Execução do Teste

O candidato deverá desenvolver duas aplicações idênticas: a primeira utilizando React (ou outro framework similar) e a segunda utilizando JavaScript puro (ou TypeScript).

A aplicação em JavaScript puro deverá ser desenvolvida utilizando JavaScript ES6 e um bundler (Webpack, Vite, Rollup etc.) com Babel.

A aplicação em React deverá ser armazenada em uma branch do repositório e a aplicação em JavaScript puro deve ser armazenada em uma branch diferente.

O layout e design da aplicação fica a critério do candidato (e serão critérios de avaliação), sendo necessário apenas preencher os requisitos descritos abaixo.

A entrega do teste será feita através de um repositório git disponível publicamente. O candidato está livre para escolher o provedor que quiser (GitLab, GitHub, Bitbucket, etc.).

## Requisitos da Aplicação

A aplicação deve ser composta por um formulário de cadastro com os campos descritos abaixo e um botão para submeter as informações:
- **Nome**
- **Email**
- **Senha**
- **Confirmação de senha**

O formulário deverá ser validado com as regras descritas no próximo item. O usuário deverá ser notificado sobre os erros de validação do formulário.

Alguns emails estão indisponíveis para cadastro por já estarem cadastrados, o usuário deve ser notificado sobre esses casos também.

## Regras de Validação do Formulário

A validação deve ser feita no front-end, seguindo as seguintes regras:
- **Nome:** Obrigatório.
- **Email:** Obrigatório; E-mail válido.
- **Senha:** Obrigatório; Mínimo de 8 caracteres; Mínimo de 1 caractere minúsculo; Mínimo de 1 caractere maiúsculo; Mínimo de um numeral.
- **Confirmação de senha:** Obrigatório; Deve ser idêntico ao campo **Senha**.

### Endereços de Email Indisponíveis
- teste@exemplo.com
- joao@exemplo.com
- maria@acme.net

## Estrutura do Repositório
O repositório deve conter duas branches principais:

- **main:** Branch principal
- **react-app:** Contém a aplicação desenvolvida em React.
- **js-app:** Contém a aplicação desenvolvida em JavaScript puro com ES6 e bundler.

Cada branch deve conter sua própria estrutura de pastas e arquivos, seguindo as melhores práticas de organização de código para cada tecnologia.
