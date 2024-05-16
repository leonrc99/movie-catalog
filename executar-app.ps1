Write-Host "Iniciando banco de dados PostgreSQL..."
docker run -p 5432:5432 --name movies_catalog -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=movies_catalog -d postgres

Start-Sleep -Seconds 15

# Executar a aplicação Angular em um novo terminal PowerShell
Write-Host "Executando aplicação Angular..."
Start-Process powershell -ArgumentList "-Command", "cd './catalog-front'; npm start"

Start-Sleep -Seconds 5

Write-Host "Executando aplicação Spring Boot..."
cd ./catalog
./mvnw spring-boot:run