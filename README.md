Construção da base da API e banco de dados:
1. npm init -y
2. npm install -D typescript tsx @types/node
3. npx tsc --init
4. npm install express
5. npm install -D @types/express
6. npm install prisma --save-dev
7. npm install @prisma/client
8. npx prisma init
9. npm install dotenv
10. Ajuste do schema.prisma (provider = sqlite)
11. Ajuste o env - DATABASE_URL="file:./database.db"
12. prisma.config.ts -> import "dotenv/config"
13. Ajustar schema.prisma com as tabelas
14. Ajustar package.json com type = module
15. No tsconfig.json descomentar o rootDir e outDir
16. npx prisma generate
17. npx prisma migrate dev --name init
18. Criar pastas de camadas
19. Criar arquivos do paciente
20. Criar arquivos do profissional
21. Criar arquivos da consulta
22. Criar server.ts 
23. npm run dev (ignorar erro no schema.prisma da url, visual studio espera outra versão do prisma)
