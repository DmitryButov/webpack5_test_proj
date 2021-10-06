
Getting started
--------------------

for start (as usual user):
   docker-compose run --rm -u 1000 nodejs-dev

 # при создании проекта
   npm init                             - создать новый nodejs package - запускать в корне(директория app)
   npm install -D webpack webpack-cli   - поставить webpack вручную
   добавить скрипты в package.json:
   "scripts": {
    "dev":    "webpack --mode development",
    "build":  "webpack --mode production"
   }

# использование
   npm install .      - поставить все зависимости
   npm run dev        - собрать через webpack в режиме разработки
   npm run build      - собрать через webpack в режиме production (минифицированные файлы и т.п.)



Links
----------------

tutorial based on:
https://www.youtube.com/watch?v=eSaF8NXeNsA&t=1210s


node.js related:
    video:
        https://www.youtube.com/watch?v=3aGSqasVPsI
    docker:
        https://habr.com/ru/company/ruvds/blog/440656/
        https://hub.docker.com/_/node
        https://github.com/nodejs/docker-node/blob/main/README.md#how-to-use-this-image
