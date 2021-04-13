import express, { json } from 'express'
const cors = require('cors');
import morgan from 'morgan'

const app = express();

// Import routes
import userRoutes from './routes/users';
import supportsRoutes from './routes/supports'

// Middlewares
app.use(morgan('combined'));
app.use(json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/supports', supportsRoutes);

export default app;