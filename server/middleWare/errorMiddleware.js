const notFound = (req, res, next) => {
    const error = new Error(`${req.originalUrl} mavjud emas`)
    res.status(404);
    next(error)
}

const errorHanler = (err, req, res, next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        msg: err.message,
        stacK: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export {notFound, errorHanler}