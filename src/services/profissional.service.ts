import * as profissionalRepository from "../repositories/profissional.repository.js";
import { Prisma } from "@prisma/client";

export async function createProfissional(data: Prisma.ProfissionalCreateInput) {
  return await profissionalRepository.create(data);
}

export async function getAllProfissionais() {
  return await profissionalRepository.findAll();
}

export async function getProfissionalById(id: number) {
  return await profissionalRepository.findById(id);
}

export async function updateProfissional(id: number, data: Prisma.ProfissionalUpdateInput) {
  return await profissionalRepository.update(id, data);
}

export async function deleteProfissional(id: number) {
  return await profissionalRepository.remove(id);
}
