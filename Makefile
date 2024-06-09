prepare:
	docker-compose run --rm app yarn
	docker-compose up -d

up:
	docker-compose up -d

build:
	docker-compose build

down:
	docker-compose down