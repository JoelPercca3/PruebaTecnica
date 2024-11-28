import pool from '../config/db.js'

// Listar todas las tareas
export const getAllTasks = async () => {
  const [rows] = await pool.query('SELECT * FROM Tasks')
  return rows
}

// Crear una nueva tarea
export const createTask = async (task) => {
  const { titulo, descripcion, estado } = task
  const [result] = await pool.query(
    'INSERT INTO Tasks (Titulo, Descripcion, Estado) VALUES (?, ?, ?)',
    [titulo, descripcion, estado]
  )
  return { id: result.insertId, ...task }
}

// Actualizar una tarea
export const updateTask = async (id, task) => {
  const { titulo, descripcion, estado } = task
  const [result] = await pool.query(
    'UPDATE Tasks SET Titulo = ?, Descripcion = ?, Estado = ?, FechaActualizacion = NOW() WHERE ID = ?',
    [titulo, descripcion, estado, id]
  )
  return result.affectedRows
}

// Eliminar una tarea
export const deleteTask = async (id) => {
  const [result] = await pool.query('DELETE FROM Tasks WHERE ID = ?', [id])
  return result.affectedRows
}
