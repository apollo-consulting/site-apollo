# 1. Base
FROM node:20-alpine

# 2. Diretório de trabalho
WORKDIR /app

# 3. Copia dependências
COPY package*.json ./

# 4. Instala dependências
RUN npm ci

# 5. Copia o restante do projeto
COPY . .

# 6. Build do Next
RUN npm run build

# 7. Porta usada pelo Next
EXPOSE 3000

# 8. Start (MUITO IMPORTANTE)
CMD ["npm", "run", "start"]
