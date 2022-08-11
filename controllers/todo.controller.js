const getTodos = (req, res) => {
  res.status(200).json("Gel Todos");
};

const getTodo = (req, res) => {
  res.status(200).json("Gel Todo");
};

const addTodo = (req, res) => {
  res.status(201).json("Add Todo");
};

const updateTodo = (req, res) => {
  res.status(200).json("Update Todo");
};

const deleteTodo = (req, res) => {
  res.status(200).json("Delete Todo");
};

module.exports = { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
