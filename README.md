Docker:
-dev: docker-compose -f docker-compose.dev.yml up --build
-prod: docker-compose -f docker-compose.prod.yml up --build

docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build

Хост: http://localhost:3000/

План:

1. FSD стуктура
   src/
   │
   ├── app/ # Инициализация приложения: роутинг, провайдеры, стили
   ├── shared/ # Переиспользуемые модули
   shared/ui/ — кнопки, модалки, лоадеры
   shared/lib/ — утилиты, хелперы
   shared/api/ — axios instance, общие fetch-обёртки
   shared/config/ — env, routes, constants
   ├── entities/ # Примитивные, переиспользуемые сущности:
   ├── features/ # Независимые фичи, завязанные на бизнес-логику
   ├── widgets/ # Комбинации фич и сущностей в единый UI-компонент
   └── pages/ # Страницы, собирают виджеты и фичи
#   W i t c h H u n t B o a r d G a m e N e w  
 #   W i t c h H u n t B o a r d G a m e N e w  
 