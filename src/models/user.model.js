
import mongooes from "mongooes"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const UserSchema = new mongooes.Schema(
    {
        username: {
            type:string,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true


        },

     email: {
            type:string,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
           


        } ,
        
     FullName: {
            type:string,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true


        }  ,
        
    avatar: {
        type:String,
        required:true,
    }  ,
    coverImage:{
        type:String,
    },
    watchHistory: [
        {
            type:mongooes.Schema.Types.ObjectId,
            ref:"video"
        }
    ] ,

    password:{
        type:String,
       required: [true,"password is requird"]
    },
    refreshToken: {
        type:String,
    }

    },{timeStamp:true})



UserSchema.pre("save", async function (next) {
    if(!this.isModified("password") )
        return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})

UserSchema.methods.isPasswordCorrect = async function (password) {
 return  await bcrypt.compare(password,this.password)
}

UserSchema.methods.generateaccsesstocken = function () {
   return  jwt.sign({
        id: this._id,
        email:this.email,
        username:this.username,
        fullName:this.FullName,

    },
    process.env.ACCSESS_TOCKEN,
    {
        expiresIn:ACCSESS_TOCKEN_EXPIRY,
    }
)
}

UserSchema.methods.generaterefrshaccsesstocken = function () {
   return  jwt.sign({
        id: this._id,
       

    },
    process.env.REFRESH_TOCKEN,
    {
        expiresIn:REFRESH_TOCKEN_EXPIRY,
    }
)
}


export const User = mongooes.model("User",UserSchema)    