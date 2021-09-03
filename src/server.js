import server from './app.js';
import listEndpoints from 'express-list-endpoints';
import mongoose from 'mongoose';

const { PORT, MONGO_CONNECTION_LOCAL, MONGO_CONNECTION_CLOUD, MONGO_CONNECTION_iCLOUD } = process.env;


console.table( listEndpoints( server ) );


mongoose.connect( MONGO_CONNECTION_CLOUD );

mongoose.connection.on( 'connected', () => {
    console.info( `✅ Connected to MongoDB at ${ MONGO_CONNECTION_iCLOUD } 🤞🤞🚀🚀🚀` );
    server.listen( PORT, () => console.log( `✅ Server listening on port 🥳 ${ PORT } 🥳 🥳🥳🥳🥳🥳 :` ) );
    server.on( 'error', ( err ) => console.log( `❌ Server error: ${ err } 🥵🥵🥵🥵🥵🥵🥵  ` ) );

} );

mongoose.connection.on( 'error', ( err ) => console.log( `❌ Mongo error: ${ err } 📛📛📛📛📛📛📛📛  ` ) );
