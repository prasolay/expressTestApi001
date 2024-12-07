import express from 'express';
import { validateUserRequest } from './middlewares/request-validation.middleware';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/users', validateUserRequest, (req, res) => {
  // Process the validated user object
  // ...

  res.status(201).json({ message: 'User created successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});