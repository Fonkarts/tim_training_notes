// controller
import { Request, Response } from "express";
import { Note } from "../models/notes.model";

export async function getAll(req: Request, res: Response) {
    const notes = await Note.findAll();
    res.json(notes);
}

export async function getOne(req: Request, res: Response) {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).send({ error: "Not found" });
    res.json(note);
}

export async function create(req: Request, res: Response) {
    const note = await Note.create(req.body);
    res.status(201).json(note);
}

export async function update(req: Request, res: Response) {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).send({ error: "Not found" });
    await note.update(req.body);
    res.json(note);
}

export async function remove(req: Request, res: Response) {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).send({ error: "Not found" });
    await note.destroy();
    res.status(204).send();
}
