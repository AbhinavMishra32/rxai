import { Router } from "express";
import { addNote, deleteNote, fetchAllNotes, fetchNote, updateNote } from "../controller/notes.controller";

const router = Router();

router.get('/:noteId', fetchNote);
router.get('/', fetchAllNotes);
router.post('/', addNote);
router.put('/:noteId', updateNote);
router.delete('/:noteId', deleteNote);

export default router;