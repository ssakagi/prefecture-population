prepare:
	docker-compose run --rm app yarn
	docker-compose up -d

up:
	docker-compose up -d

build:
	docker-compose build

down:
	docker-compose down

test:
	docker-compose exec app yarn test:watch

catalog:
	docker-compose exec -d app yarn storybook