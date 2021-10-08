
Getting started
--------------------

for start (as usual user, and use "ports" part for expose)
    docker-compose run --rm --service-ports -u 1000 nodejs-dev

 # при создании проекта
    npm init                             - создать новый nodejs package - запускать в корне(директория app)
    npm install -D webpack webpack-cli   - поставить webpack вручную
    # также потребуется установить доп. плагины (тоже как development-зависимости)
    npm i -D html-webpack-plugin
    npm install copy-webpack-plugin --save-dev   - для копирования static-файлов как есть
    # и лоадеры (как минимум для сss)
    npm i -D style-loader css-loader    - для сss

    # если нужно что то удалить (из development-зависимостей)
    npm uninstall --save-dev clean-webpack-plugin

    добавить скрипты в package.json:
    "scripts": {
        ....
    }

# использование
    npm install .      - поставить все зависимости
    npm run dev        - собрать через webpack в режиме разработки
    npm run build      - собрать через webpack в режиме production (минифицированные файлы и т.п.)
    npm run watch      - в таком случае процесс сборки висит и следит за изменениями


Babel support
--------------
see instruction on  https://babeljs.io/setup, select webpack

npm install --save-dev babel-loader @babel/core
npm install --save-dev @babel/preset-env



Links
----------------

tutorial based on:
    https://www.youtube.com/watch?v=eSaF8NXeNsA&t=1210s


webpack5 docs:
    https://webpack.js.org/configuration/output/#template-strings
    https://webpack.js.org/guides/asset-modules/


node.js related:
    video:
        https://www.youtube.com/watch?v=3aGSqasVPsI
    docker:
        https://habr.com/ru/company/ruvds/blog/440656/
        https://hub.docker.com/_/node
        https://github.com/nodejs/docker-node/blob/main/README.md#how-to-use-this-image
