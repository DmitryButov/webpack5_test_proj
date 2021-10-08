
Getting started
--------------------
NodeJs is using for building web-project with webpack

for start under docker (as usual user, and use "ports" part for expose)
docker-compose run --rm --service-ports -u 1000 nodejs-dev




    # project creation with webpack usage
    npm init                             - create new nodejs package - in root folder of furure packege (app/)
    npm install -D webpack webpack-cli   - need install webpack as dev-dependencies

    # install some webpack pligins for development
    npm i -D html-webpack-plugin
    npm install copy-webpack-plugin --save-dev   - for copy static-files into output folder without any modifications

    # install some loaders
    npm i -D style-loader css-loader             - for сss

    # for remove something (from dev dependencies of package) - use uninstall, for example
    npm uninstall --save-dev clean-webpack-plugin

    # next step - add some scripts in package.json (as dev, build, start, watch) - see in code:
    "scripts": {
        ....
    }

    # usage
    npm install .      - install all again (you can remove node_modules folder before)

    # usage scripts
    npm run dev        - use webpack in development mode
    npm run build      - use webpack in production mode (minify files, etc.)
    npm run watch      - watch and rebuild on changes, development mode


Babel support
--------------
see instruction on  https://babeljs.io/setup, select webpack

npm install --save-dev babel-loader @babel/core
npm install --save-dev @babel/preset-env
npm install --save core-js       # core-js@3    3.18


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
