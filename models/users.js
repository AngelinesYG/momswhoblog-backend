const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema(
   {
   firstName:{type: String,
               required: true
             },
   email:    {type: String,
              required: true
             },
   username: {type: String,
              unique: true,
              required: true
             },
   password: {type: String,
              required: true,
              bio: String,
              minlength: 6,
              momfriends: [{type: Schema.Types.ObjectId, ref:"username"}],
             },
   },
      {timestamps: true}
);

const User = mongoose.model('User', userSchema)

module.exports = User
