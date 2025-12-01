import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

import Consulta from "../entities/consulta.entity.js"

export async function create(data:{nomeProcedimento: string, duracaoHoras: number, duracaoMinutos: number, pacienteId: number, profissionalId: number}){
    return Consulta.create({data: {nomeProcedimento: data.nomeProcedimento, duracaoHoras: data.duracaoHoras, duracaoMinutos: data.duracaoMinutos, paciente:
        {connect: {id: data.pacienteId}}, profissional: {connect: {id: data.profissionalId}}},
    include: {paciente: {select: {id: true, nome: true}},
      profissional: {select: {id: true, nome: true}}}
  })
}

export async function findAll(){
    return Consulta.findMany({include: {paciente: true, profissional: true}})
}

export async function findById(id: number){
    return Consulta.findUnique({where: {id}, include: {paciente: true, profissional: true}})
}

export async function update(id: number, data:{nomeProcedimento: string, duracaoHoras: number, duracaoMinutos: number, pacienteId: number, profissionalId: number}){
    return Consulta.update({where: {id}, data})
}

export async function remove(id: number){
    return Consulta.delete({where: {id}})
}