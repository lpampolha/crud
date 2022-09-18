yarn add express mysql2 sequelize

yarn add -D nodemon sequelize-cli

yarn add bcryptjs body-parser cors dotenv express-validator hpp jsonwebtoken swagger-autogen swagger-ui-express xss-clean

yarn add -D jest supertest

## Comando para criação da base após importação e configuração do Sequelize
`yarn sequelize db:create`

## Comando para criação da primeira migration, a de criação de user
`yarn sequelize migration:create --name=create-user`

## Comando para criação da primeira tabela
`yarn sequelize db:migrate`

