db:
	docker-compose up --build -d scrapping_db

migrate:
	npx knex migrate:latest

app:
	docker-compose up --build -d scrap_app

