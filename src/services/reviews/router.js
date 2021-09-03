import { Router } from "express";
import reviewsHandler from "./handler.js";

const router = Router();

router.route( "/" )
    .get( reviewsHandler.getAll )
    .post( reviewsHandler.add );

// router.route( "/:search" ).get( reviewsHandler.searchByTitle );

router.route( '/:id' )
    .get( ( req, res, next ) => reviewsHandler.findById( req, res, next) )
    .put   ( reviewsHandler.update )
    .delete( reviewsHandler.delete )


router.route( '/:id/comments' )
    .get( reviewsHandler.getreviewCommentsById )
//     .post( reviewsHandler.addComment );
    
// router.route( '/:id/comments/commentId' )
//     .get( reviewsHandler.getCommentById )
//     .put( reviewsHandler.updateComment )
//     .delete( reviewsHandler.deleteComment );



//  /reviewPosts/:id
//  /reviewPosts/:id/comments
//  /reviewPosts/:id/comments/:commentId
//  /reviewPosts/:id/comments/:commentId
//  /reviewPosts/:id/comments/:commentId



export default router;
