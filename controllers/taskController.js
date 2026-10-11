let tasks = [];
let nextId = 1;

exports.getTasks = (req, res) => res.json(tasks);

exports.createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
};