const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Usuarios simulados
const users = [
  { id: 1, email: 'admin@example.com', password: 'admin123', role: 'admin', name: 'Admin User' },
  { id: 2, email: 'user@example.com', password: 'user123', role: 'user', name: 'Regular User' }
];

// Usuarios

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ token: 'fake-jwt-token', role: user.role, userId: user.id });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

app.get('/users', (req, res) => {
  res.json(users);
});

// Proyectos

const projects = [];
let projectCounter = 0;

app.get('/projects', (req, res) => {
  const { role, userId } = req.query;

  if (role === 'admin') {
    res.json(projects);
  } else {
    const userProjects = tasks
      .filter(task => task.asignada_a === parseInt(userId))
      .map(task => task.proyecto_id);

    const uniqueProjectIds = [...new Set(userProjects)];
    const filteredProjects = projects.filter(project => uniqueProjectIds.includes(project.id));
    res.json(filteredProjects);
  }
});

app.post('/projects', (req, res) => {
  const { role, nombre, descripcion } = req.body;

  if (role !== 'admin') {
    return res.status(403).json({ error: 'No tienes permiso para agregar un proyecto' });
  }

  const newProject = {
    id: ++projectCounter,
    nombre,
    descripcion
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

app.delete('/projects/:id', (req, res) => {
  const { role } = req.body;

  if (role !== 'admin') {
    return res.status(403).json({ error: 'No tienes permiso para eliminar un proyecto' });
  }

  const projectIndex = projects.findIndex(p => p.id === parseInt(req.params.id));
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
    tasks = tasks.filter(task => task.proyecto_id !== parseInt(req.params.id));
    res.status(200).json({ message: 'Proyecto eliminado correctamente' });
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
});

// Tareas

let tasks = [];

app.get('/tasks', (req, res) => {
  const { project_id, userId, role } = req.query;

  if (role === 'admin') {
    const filteredTasks = tasks.filter(t => t.proyecto_id === parseInt(project_id));
    res.json(filteredTasks);
  } else {
    const filteredTasks = tasks.filter(t => t.proyecto_id === parseInt(project_id) && t.asignada_a === parseInt(userId));
    res.json(filteredTasks);
  }
});

app.post('/tasks', (req, res) => {
  const { role, nombre, descripcion, proyecto_id, userId } = req.body;

  if (role !== 'admin') {
    return res.status(403).json({ error: 'No tienes permiso para agregar una tarea' });
  }

  if (!proyecto_id) {
    return res.status(400).json({ error: 'El proyecto ID es obligatorio' });
  }

  const newTask = {
    id: tasks.length + 1,
    nombre,
    descripcion,
    estado: 'pendiente',
    proyecto_id,
    asignada_a: 1
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.patch('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    const { role, userId, estado, asignada_a } = req.body;

    if (role === 'admin' || task.asignada_a === userId) {
      if (estado) {
        task.estado = estado;
      }
      if (role === 'admin' && asignada_a !== undefined) {
        task.asignada_a = asignada_a;
      }

      const assignedUser = users.find(u => u.id === task.asignada_a);
      console.log(`Notificación enviada a ${assignedUser.name}: La tarea (${task.nombre}) fue actualizada`);

      res.json(task);
    } else {
      res.status(403).json({ error: 'No tienes permiso para actualizar esta tarea' });
    }
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

app.delete('/tasks/:id', (req, res) => {
  const { role, userId } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex !== -1) {
    const task = tasks[taskIndex];
    if (role === 'admin' || task.asignada_a === userId) {
      tasks.splice(taskIndex, 1);
      res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } else {
      res.status(403).json({ error: 'No tienes permiso para eliminar esta tarea' });
    }
  } else {
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});

// Servidor
app.listen(5001, () => {
  console.log('Servidor simulado corriendo en el puerto 5001');
});
