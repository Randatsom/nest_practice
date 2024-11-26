# берем базовый образ
FROM node:14-alpine 
# обозначаем папку, в которой будем работать
WORKDIR /opt/path
# добавили package.json и установили зависимости
ADD package.json package.json
RUN npm install
# добавили весь оставшийся код и собрали все
ADD . .
RUN npm run build
# удалил dev зависимости
RUN npm prune --production
CMD [ "node", "./dist/main.js" ]

