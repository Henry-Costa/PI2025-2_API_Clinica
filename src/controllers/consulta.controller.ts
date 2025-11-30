import type {Request, Response} from "express"
import * as consultaService from "../services/consulta.service.js"

export async function createConsulta(req: Request, res: Response){
    const data = req.body
    const consulta = await consultaService.createConsulta(data)
    return res.status(201).json(consulta)
}

export async function getAllConsultas(req: Request, res: Response){
    const consultas = await consultaService.getAllConsultas()
    return res.json(consultas)
}

export async function getConsultaById(req: Request, res: Response){
    const id = Number(req.params.id)
    const consulta = await consultaService.getConsultaById(id)
    return res.json(consulta)
}

export async function updateConsulta(req: Request, res: Response){
    const id = Number(req.params.id)
    const data = req.body
    const consulta = await consultaService.updateConsulta(id, data)
    return res.json(consulta)
}

export async function deleteConsulta(req: Request, res: Response){
    const id = Number(req.params.id)
    await consultaService.deleteConsulta(id)
    return res.status(204).send()
}