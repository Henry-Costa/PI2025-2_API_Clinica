import * as consultaRepository from "../repositories/consulta.repository.js"

export async function createConsulta(data: {nomeProcedimento: string, duracaoHoras: number, duracaoMinutos: number, pacienteId: number, profissionalId: number}){
    return consultaRepository.create(data)
}

export async function getAllConsultas() {
    return consultaRepository.findAll()
}

export async function getConsultaById(id: number){
    if (!id) {throw new Error("ID inválido")}
    const consulta = await consultaRepository.findById(id)
        if(!consulta) {throw new Error("Consulta não encontrada")}
        return consulta
}

export async function updateConsulta(id: number, data: {nomeProcedimento: string, duracaoHoras: number, duracaoMinutos: number, pacienteId: number, profissionalId: number}){
    if(!id) {throw new Error("ID inválido")}
    return consultaRepository.update(id, data)
}

export async function deleteConsulta(id: number){
    if(!id) {throw new Error("ID inválido")}
    return consultaRepository.remove(id)
}