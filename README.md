Ao baixar o repositório localmente (usar command prompt):
1. Se não tiver instalado ainda, instalar ' npm install -D typescript tsx @types/node '
2. gerar o banco de dados local 'npx prisma generate'
3. testar API ' npm run dev '

Pacientes:

POST: ' http://localhost:3000/pacientes ' { "nome": "string", "idade": number, "telefone": "string", "convenio": "string"}

GET (getAll): ' http://localhost:3000/pacientes '

GET (getById): ' http://localhost:3000/pacientes/:id '
 
PUT: ' http://localhost:3000/pacientes/:id ' { "nome": "string", "idade": number, "telefone": "string", "convenio": "string"}

DELETE: ' http://localhost:3000/pacientes/:id '

Profissionais:

POST: ' http://localhost:3000/profissionais ' { "nome": "string", "especialidade": "string", "registroConselho": "string"}

GET (getAll): ' http://localhost:3000/profissionais '

GET (getById): ' http://localhost:3000/profissionais/:id '
 
PUT: ' http://localhost:3000/profissionais/:id ' { "nome": "string", "especialidade": "string", "registroConselho": "string"}

DELETE: ' http://localhost:3000/profissionais/:id '

Consultas:

POST: ' http://localhost:3000/consultas ' { "nomeProcedimento": "string", "duracaoHoras": number, "duracaoMinutos": number, "pacienteId": number, "profissionalId": number}

GET (getAll): ' http://localhost:3000/consultas '

GET (getById): ' http://localhost:3000/consultas/:id '
 
PUT: ' http://localhost:3000/consultas/:id ' { "nomeProcedimento": "string", "duracaoHoras": number, "duracaoMinutos": number, "pacienteId": number, "profissionalId": number}

DELETE: ' http://localhost:3000/consultas/:id '



Construção da base da API e banco de dados (Já feito, apenas demonstrativo):
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
