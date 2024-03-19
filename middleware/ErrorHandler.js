const {constants}=require('../constants')
const { stack } = require('../routes/contactComponents')

const errorHandler=(err,req,res,next)=>{
    const SourceCode=res.SourceCode?res.SourceCode:500

    switch(SourceCode){
        case constants.VALIDATION_ERROR:
        res.json({
            title:"validation error",
            message:err.message,
            stackmessage:err.stack,
        })
        break;
        case constants.NOT_FOUND:
        res.json({
            title:"Not found",
            message:err.message,
            stackmessage:err.stack,
        })
        break;
        case constants.UNAUTHERIZED:
        res.json({
            title:"unauthenticated",
            message:err.message,
            stackmessage:err.stack,
        })
        break;
        case constants.FORBIDDEN:
        res.json({
            title:"forbidden",
            message:err.message,
            stackmessage:err.stack,
        })
        break;
        case constants.SERVER_ERROR:
        res.json({
            title:"server error",
            message:err.message,
            stackmessage:err.stack,
        })
        break;
        default:
            console.log("No ERROR all Godd to Go!");
            break;
    }
}

module.exports ={errorHandler}