import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './routes/taskRoutes.js'
import cors from 'cors';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173' 
}));
// Rutas
app.use('/api/tasks', taskRoutes)

// Configuración del puerto
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App runnig on port http://localhost:${PORT}`)
})
