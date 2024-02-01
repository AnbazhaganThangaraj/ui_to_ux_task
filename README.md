Steps to be followed for Project setup:

1. ```npm install``` command for installing the required dependencies.

2. Create a database named AUTOMOBILE in your local Mysql DB. Execute npx sequelize-cli db:migrate command to run the migration files so that tables get created.

3. Run npx sequelize-cli db:seed:all command to insert the data present in seeder files.

4. Open this url http://localhost:2024/api-docs/ in browser to access REST API's via Swagger docs. Or else can execute via postman.

5. Provide Authorization (apiKey) - 416f786b666b4e6f6b784d6b676f79 which is present in .env file for API access. Also add a dummy token to execute the API.
