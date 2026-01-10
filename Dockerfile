# 1. Etapa de Dependências (Usando Node 20)
FROM node:20-alpine AS deps
WORKDIR /app
# Instala compatibilidade para bibliotecas antigas se necessário
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

#TESTE
# 2. Etapa de Construção (Usando Node 20)
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilita telemetria
ENV NEXT_TELEMETRY_DISABLED=1

# Roda o build
RUN rm -rf .next
RUN npm run build

# 3. Etapa de Produção (Usando Node 20)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# OBRIGATÓRIO: Hostname 0.0.0.0 para o Easypanel encontrar o site
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


# Copia os arquivos gerados pelo build
COPY --from=builder /app/public ./public
# Copia a pasta standalone (se certifique que output: 'standalone' está no next.config.js)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]