import { Router } from "express";
import reviewHandler from "./handler.js";

const router = Router();

router.route( "/" )
    .get( reviewHandler.getAll )
    .post( reviewHandler.add );

router.route( '/:id' )
    .get( ( req, res, next ) => reviewHandler.findById( req, res, next) )
    .put   ( reviewHandler.update )
    .delete( reviewHandler.delete )


export default router;
