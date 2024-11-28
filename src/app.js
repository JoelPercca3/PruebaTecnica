import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

// Rutas
app.use('/api/tasks', taskRoutes)

// Configuración del puerto
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App runnig on port http://localhost:${PORT}`)
})
