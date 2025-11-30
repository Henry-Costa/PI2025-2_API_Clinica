import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(data: Prisma.ProfissionalCreateInput) {
  return await prisma.profissional.create({ data });
}

export async function findAll() {
  return await prisma.profissional.findMany();
}

export async function findById(id: number) {
  return await prisma.profissional.findUnique({ where: { id } });
}

export async function update(id: number, data: Prisma.ProfissionalUpdateInput) {
  return await prisma.profissional.update({ where: { id }, data });
}

export async function remove(id: number) {
  return await prisma.profissional.delete({ where: { id } });
}
