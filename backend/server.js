import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Docs available at http://localhost:${PORT}/api-docs`);
});
