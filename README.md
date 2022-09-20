npm i express mysql2 sequelize

npm i nodemon sequelize-cli --save-dev

npm i bcryptjs body-parser cors dotenv express-validator hpp jsonwebtoken swagger-autogen swagger-ui-express xss-clean

npm i jest supertest --save-dev

#### Sequelize 

### Inicializar o projeto sequelize
`npx sequelize-cli init`

## Nesse momento serão criadas as seguintes pastas:
- Created "src/config/database.js"
- Successfully created models folder at "/home/user/projetos/crud/models".
- Successfully created migrations folder at "/home/user/projetos/crud/src/database/migrations".
- Successfully created seeders folder at "/home/user/projetos/crud/seeders".

# Obs. 1: Como o sequelize não reconhece, por padrão, o arquivo config/database.js (ele espera um json), existe a necessidade de criação do arquivo .sequelizerc, na raiz do projeto, a fim de apontar o caminho dos arquivos de configuração

# Obs. 2: Setup finalizado para trabalhar com sequelize, sequelize-cli e seeders

## Comando para criação da base após o processo de configuração do Sequelize
`npx sequelize-cli db:create`

## Criação do primeiro model a partir do Sequelize
`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

## Comando para criação da base após importação e configuração do Sequelize
`npx sequelize-cli db:create`

## Comando para criação da primeira migration, a de criação de user
`npx sequelize migration:create --name=create-user`

## Comando para criação da primeira tabela
`npx sequelize db:migrate`

