const express = require("express");

const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

// http://localhost:3333/projects/2
app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto 4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

const port = 3333;
app.listen(port, () => {
  console.log(`🚀️Server up and running on PORT ${port}🚀️`);
});
