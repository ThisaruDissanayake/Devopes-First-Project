import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
 
  email: { type: String,required: true, unique: true,},
  password: {type: String, required: true,},
  isAdmin: {type: Boolean, default: false},
});

export const User = mongoose.model('User', userSchema);

