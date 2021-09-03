import { Router } from "express";
import cartsHandler from "./handler.js";

const router = Router();

router.route( "/" )
    .get( cartsHandler.getAll )
    .post( cartsHandler.add );

router.route( '/:id' )
    .get( ( req, res, next ) => cartsHandler.findById( req, res, next) )
    .put   ( cartsHandler.update )
    .delete( cartsHandler.delete )



export default router;
