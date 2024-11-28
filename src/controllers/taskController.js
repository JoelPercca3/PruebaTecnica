import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../models/taskModel.js";

// Listar todas las tareas
export const getTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva tarea
export const addTask = async (req, res) => {
  try {
    const newTask = await createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una tarea existente
export const editTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await updateTask(id, req.body);
    if (updated) {
      res.status(200).json({ message: "Tarea actualizada correctamente" });
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una tarea
export const removeTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteTask(id);
    if (deleted) {
      res.status(200).json({ message: "Tarea eliminada correctamente" });
    } else {
      res.status(404).json({ message: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
