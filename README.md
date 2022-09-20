## Dependências Globais
- Node e MySQL

#### Dependências para a utilização do Sequelize com MySQL
`npm i express mysql2 sequelize`

#### Dependências de desenvolvimento
`npm i nodemon sequelize-cli --save-dev`

#### Demais dependências para a criação do CRUD
`npm i bcryptjs body-parser cors dotenv express-validator hpp jsonwebtoken swagger-autogen swagger-ui-express xss-clean`

#### Dependências para desenvolvimento de testes
`npm i jest supertest --save-dev`

## Sequelize 
- Pensando em deploy e continuidade do projeto, essa opção é super interessante, já que garante uma melhor gestão de ambientes e versionamento de código.

### Inicializar o projeto sequelize
`npx sequelize-cli init`

#### Nesse momento serão criadas as seguintes pastas:
- Created "src/config/database.js"
- Successfully created models folder at "/home/user/projetos/crud/models".
- Successfully created migrations folder at "/home/user/projetos/crud/src/database/migrations".
- Successfully created seeders folder at "/home/user/projetos/crud/seeders".

##### Obs. 1: Como o sequelize não reconhece, por padrão, o arquivo config/database.js (ele espera um json), existe a necessidade de criação do arquivo .sequelizerc, na raiz do projeto, a fim de apontar o caminho dos arquivos de configuração

##### Obs. 2: Setup finalizado para trabalhar com sequelize, sequelize-cli e seeders e migrations, esse último pensando em trabalhar com o conceito de Code First, ao invés de DDL

#### Comando para criação da base após o processo de configuração do Sequelize
`npx sequelize-cli db:create`

#### Criação da primeira migration
`npx sequelize-cli migration:generate --name users`

#### Executando a migration.  Esse comando criará a tabela configurada no arquivo gerado após a execução do passo anterior
`npx sequelize-cli db:migrate`

#### Caso queira desfazer a migrate, "droapando" a tabela, execute o seguinte
`npx sequelize-cli db:migrate:undo`

##### Pensando que já existe um banco em produção, e que o conceito de administração é feito pelo código, através das migrations, caso haja a necessidade de edições dos Models, será necessário criar uma nova migration.  
#### Obs.: Esse comando deve ser executado após rodar novamente o comando de criação da migration criada anteriormente, pois ele atualizará uma tabela existente
`npx sequelize-cli migration:generate --name alter-users-contato`

#### Para rodar as modificações, o comando é o mesmo da criação da primeira migrate
`npx sequelize-cli db:migrate`