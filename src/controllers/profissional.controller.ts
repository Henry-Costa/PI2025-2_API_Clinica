import type express from "express";
import * as profissionalService from "../services/profissional.service.js";

export async function createProfissional(req: express.Request, res: express.Response) {
  try {
    const { nome, especialidade, registroConselho } = req.body;

    if (!nome || !especialidade || !registroConselho) {
      return res.status(400).json({ message: "Campos obrigatórios: nome, especialidade, registroConselho" });
    }

    const profissional = await profissionalService.createProfissional({
      nome,
      especialidade,
      registroConselho,
    });

    res.status(201).json({
      message: "Profissional criado com sucesso",
      dados: profissional,
    });
  } catch (error) {
    console.error("Erro ao criar profissional:", error);
    res.status(500).json({ message: "Erro ao criar profissional" });
  }
}

export async function getAllProfissionais(req: express.Request, res: express.Response) {
  try {
    const profissionais = await profissionalService.getAllProfissionais();
    res.json(profissionais);
  } catch (error) {
    console.error("Erro ao buscar profissionais:", error);
    res.status(500).json({ message: "Erro ao buscar profissionais" });
  }
}

export async function getProfissionalById(req: express.Request, res: express.Response) {
  try {
    const id = Number(req.params.id);
    const profissional = await profissionalService.getProfissionalById(id);

    if (!profissional) {
      return res.status(404).json({ message: "Profissional não encontrado" });
    }

    res.json(profissional);
  } catch (error) {
    console.error("Erro ao buscar profissional:", error);
    res.status(500).json({ message: "Erro ao buscar profissional" });
  }
}

export async function updateProfissional(req: express.Request, res: express.Response) {
  try {
    const id = Number(req.params.id);
    const data = req.body;

    const profissional = await profissionalService.updateProfissional(id, data);
    res.json(profissional);
  } catch (error) {
    console.error("Erro ao atualizar profissional:", error);
    res.status(500).json({ message: "Erro ao atualizar profissional" });
  }
}

export async function deleteProfissional(req: express.Request, res: express.Response) {
  try {
    const id = Number(req.params.id);
    await profissionalService.deleteProfissional(id);
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar profissional:", error);
    res.status(500).json({ message: "Erro ao deletar profissional" });
  }
}
