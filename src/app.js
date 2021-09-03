import express from 'express';
import cors from 'cors';
import services from './services/index.js';
// import { errorHandler } from './middleWares/errorHandlers.js';

const app = express();

const whileList = [ '127.0.0.1:4200' ];

const corsOptions = {
    origin: ( origin, callback ) => {
        console.log( { whileList } );
        console.log( { origin } );
        callback( null, true );
        if ( whileList.indexOf( origin ) > -1 )
            callback( null, true );
        else
            callback( new Error( 'Origin not allowed' ) );
    }
};

app.use( cors() );

app.use( express.json() );

app.use( '/', services );

export default app;
