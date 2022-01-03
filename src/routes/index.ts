import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World - Desafio: Database Queries!" });
});

export { routes };
