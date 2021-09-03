import { Router } from "express";
import productsHandler from "./handler.js";
const router = Router();
router.route( '/')
    .get ( productsHandler.list )
    .post( productsHandler.add  )

router.route( '/:productId' )
    .get   ( productsHandler.single )
    .put   ( productsHandler.update )
    .delete( productsHandler.delete )

router.route( '/:productId/Reviews' )
    .get(productsHandler.getAllReviewsByProductId)


export default router;

