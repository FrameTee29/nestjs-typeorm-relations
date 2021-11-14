echo "1. installing the core and supporting files "
yarn add @nestjs/core @nestjs/common rxjs reflect-metadata 

echo "2. Installing typeorm mysql"
yarn add typeorm mysql2 @nestjs/typeorm

echo "3. Installing swagger"
yarn add @nestjs/swagger swagger-ui-express

echo "4. Installing config (dotenv)"
yarn add @nestjs/config

echo "5. Installing ValidationPipe"
yarn add class-validator class-transformer

echo "6. Installing @nestjs/axios"
yarn add @nestjs/axios
