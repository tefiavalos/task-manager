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

// Endpoint de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ token: 'fake-jwt-token', role: user.role, userId: user.id });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

// Endpoint para obtener todos los usuarios (para el select de asignaciones)
app.get('/users', (req, res) => {
  console.log('endpoints users')
  res.json(users);
});

// Lista de proyectos simulados
const projects = [
  { id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del proyecto 1' },
  { id: 2, nombre: 'Proyecto 2', descripcion: 'Descripción del proyecto 2' }
];

// Obtener todos los proyectos (solo para administradores)
// Obtener todos los proyectos (solo para administradores o los proyectos con tareas asignadas al usuario)
app.get('/projects', (req, res) => {
  const { role, userId } = req.query;

  if (role === 'admin') {
    // Si el usuario es administrador, devolver todos los proyectos
    res.json(projects);
  } else {
    // Si el usuario es regular, devolver solo los proyectos en los que tiene tareas asignadas
    const userProjects = tasks
      .filter(task => task.asignada_a === parseInt(userId))
      .map(task => task.proyecto_id);

    // Filtrar proyectos únicos para devolver solo los proyectos en los que el usuario tiene tareas
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
    id: projects.length + 1,
    nombre,
    descripcion
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});


// Tareas simuladas
let tasks = [
  { id: 1, nombre: 'Tarea 1', descripcion: 'Descripción de la tarea 1', estado: 'pendiente', proyecto_id: 1, asignada_a: 1 },
  { id: 2, nombre: 'Tarea 2', descripcion: 'Descripción de la tarea 2', estado: 'en progreso', proyecto_id: 1, asignada_a: 2 }
];

// Obtener las tareas por proyecto
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

// Actualizar una tarea
// Actualizar una tarea (solo admins pueden actualizar cualquier tarea, los usuarios solo las suyas)
app.patch('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    const { role, userId, estado, asignada_a } = req.body;

    // Verificar si el usuario tiene permisos para actualizar la tarea
    if (role === 'admin' || task.asignada_a === userId) {
      // Actualizar estado si está presente en la solicitud
      if (estado) {
        task.estado = estado;
      }
      // Si el usuario es admin, puede reasignar la tarea a otro usuario
      if (role === 'admin' && asignada_a !== undefined) {
        task.asignada_a = asignada_a;
      }

      // Simular notificación en la consola
      const assignedUser = users.find(u => u.id === task.asignada_a);
      console.log(`Notificación enviada a ${assignedUser.name}: La tarea (${task.nombre}) fue actualizada`);

      res.json(task);
    } else {
      // Si el usuario no tiene permisos para actualizar la tarea
      res.status(403).json({ error: 'No tienes permiso para actualizar esta tarea' });
    }
  } else {
    // Si la tarea no se encuentra
    res.status(404).json({ error: 'Tarea no encontrada' });
  }
});


app.post('/tasks', (req, res) => {
  const { role, nombre, descripcion, proyecto_id, userId } = req.body;

  if (role !== 'admin') {
    return res.status(403).json({ error: 'No tienes permiso para agregar una tarea' });
  }

  const newTask = {
    id: tasks.length + 1,
    nombre,
    descripcion,
    estado: 'pendiente', // Nueva tarea siempre comienza como pendiente
    proyecto_id,
    asignada_a: 1 // El admin puede asignarla al usuario correspondiente
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Borrar una tarea (solo admins pueden borrar cualquier tarea, los usuarios solo las suyas)
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

// Borrar un proyecto (solo administradores)
app.delete('/projects/:id', (req, res) => {
  const { role } = req.body;

  if (role !== 'admin') {
    return res.status(403).json({ error: 'No tienes permiso para eliminar un proyecto' });
  }

  const projectIndex = projects.findIndex(p => p.id === parseInt(req.params.id));
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
    // También eliminar tareas asociadas al proyecto eliminado
    tasks = tasks.filter(task => task.proyecto_id !== parseInt(req.params.id));
    res.status(200).json({ message: 'Proyecto eliminado correctamente' });
  } else {
    res.status(404).json({ error: 'Proyecto no encontrado' });
  }
});



app.listen(5001, () => {
  console.log('Servidor simulado corriendo en el puerto 5001');
});
