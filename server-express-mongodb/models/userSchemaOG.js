const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  created: {
    type: Date,
    required: [true, 'Created date is required']
  }
})

userSchema.statics.findByLogin = async function (login) {
  let user = await this.findOne({
    username: login,
  });
  if (!user) {
    user = await this.findOne({ email: login });
  }
  return user;
};
const User = mongoose.model('User', userSchema);

// module.exports = userSchema