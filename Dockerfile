FROM 'node:21.7.3-alpine'

WORKDIR /app

COPY package.json ./

COPY . .

USER node

CMD ["sh", "-c", "npm install && npm run dev"]
