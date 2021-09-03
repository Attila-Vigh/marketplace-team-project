export const errorHandler = (err, req, res, next) => {
    
    res
        .status(err.status || 500)
        .send({ message: err.message } || "Something went wrong");
}

export const unauthorized = ( err, req, res, next ) => {
    res
        .status(401)
        .send({
            message: err.message || "Unauthorized",
            errors: err.error || []
        });
}

export const forbidden = ( err, req, res, next ) => {

    res
        .status(403)
        .send({
            message: err.message || 'Forbidden',
            errors: err.errors || []
        })
}

export const notFound = ( err, req, res, next ) => {
    
    res
        .status(404)
        .send({ 
            message: err.message || 'Not found', 
            errors: err.errors || []
        })
}


