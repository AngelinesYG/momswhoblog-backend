const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema(
   {
   username: {type: String,
              unique: true,
              required: true
             },
   password: {type: String,
              required: true,
              bio: String,
              minlength: 6,
              momfriends: [{type: Schema.Types.ObjectId, ref:"username"}],
              blogs:[{type: Schema.Types.ObjectId, ref: "Blog"}]
           },
   },
      {timestamps: true}
);

const User = mongoose.model('User', userSchema)

module.exports = User
