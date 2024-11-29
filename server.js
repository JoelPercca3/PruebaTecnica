import cors from 'cors';

// Permitir solicitudes de todos los orígenes
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173' 
}));
