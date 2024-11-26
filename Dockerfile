FROM 'node:21.7.3-alpine'

WORKDIR /app

COPY . .


CMD ["sh", "-c", "echo 'Instalando dependências...'; npm install && npm run dev"]
