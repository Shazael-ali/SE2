import config from "../config";
import winston, { silly, verbose } from "winston";   


const {logsDir, isDev}= config
const logFileFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.splat(),
    winston.format.errors({stack:true})
)

const logConsoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({format:'HH:mm:ss'}),
    winston.format.splat(),
    winston.format.printf(({timestamp,level,message,stack})=>{
        return `[${timestamp}] ${level}: ${message} ${stack ? stack : ''}`
    })
)
const logger = winston.createLogger({
level:'info',

transports:[
  
    new winston.transports.File({filename:'logs/error.log',level:'error',format:logFileFormat,dirname:logsDir}),
    new winston.transports.File({filename:'logs/test.log',format:logFileFormat, dirname:logsDir}),
],
exceptionHandlers:[
    new winston.transports.File({filename:'logs/exception.log',format:logFileFormat,dirname:logsDir}),
]

})

if(isDev){
    logger.add(new winston.transports.Console({format:logConsoleFormat}))
    logger.level='debug'
}

export default logger