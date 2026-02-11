
import mongooes from "mongooes"
const VideoSchema = new mongooes.Schema (
    {
        videoFiles : {
            type:string,
            required:true

        },
        thumbnails: {
            type:String,
            required:true
        },
        title: {
            type:String,
            required:true
        },
     
           description: {
            type:String,
            required:true
        },
       views : {
        type:Boolean,
        default:0,
       },
       isPublished: {
        type:Boolean,
        default:true
       },
       owner:{
        type:mongooes.Schema.Type.ObjectId,
        ref:"User"
       }


},{timeStamp:true})

export const Vidoe = mongooes.model("Video",VideoSchema)