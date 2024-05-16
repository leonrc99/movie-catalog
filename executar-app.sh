echo "Iniciando banco de dados PostgreSQL..."
docker run -p 5432:5432 --name movies_catalog -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=movies_catalog -d postgres

sleep 15

echo "Executando aplicação Angular..."
cd ./catalog-front
npm start &

sleep 5

echo "Executando aplicação Spring Boot..."
cd ../catalog
./mvnw spring-boot:run