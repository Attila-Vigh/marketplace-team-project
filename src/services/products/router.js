import { Router } from "express";
import productsHandler from "./handler.js";
const route = Router();

route.get   ('/', productsHandler.list   )
route.post  ('/', productsHandler.add    )
route.get   ('/:id', productsHandler.single )
route.put   ('/:id', productsHandler.update )
route.delete('/:id', productsHandler.delete )

export default route;
