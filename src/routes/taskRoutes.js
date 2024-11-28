import express from 'express'
import { getTasks, addTask, editTask, removeTask } from '../controllers/taskController.js'

const router = express.Router()

router.get('/', getTasks) // Listar todas las tareas
router.post('/', addTask) // Crear una nueva tarea
router.put('/:id', editTask) // Actualizar una tarea existente
router.delete('/:id', removeTask) // Eliminar una tarea

export default router
