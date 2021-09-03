import { Router } from "express";
import reviewHandler from "./handler.js";
import ReviewHandler from "../reviews/handler.js";
const route = Router();

route.get   ('/', reviewHandler.getAll   )
route.post  ('/', reviewHandler.add    )
// route.get   ('/:id', reviewHandler.single )
// route.put   ('/:id', reviewHandler.update )
// route.delete('/:id', reviewHandler.delete )


// route.get('/reviews' , ReviewHandler.getAll )
// route.post('/reviews' , ReviewHandler.add)
// route.get('/reviews/:id' , ReviewHandler.findById)
// route.put('/reviews/:id' , ReviewHandler.findById)
// route.delete('/reviews/:id' , ReviewHandler.findById)




export default route;
