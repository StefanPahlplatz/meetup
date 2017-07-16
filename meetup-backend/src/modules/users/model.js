import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  fullName: String,
  avatar: String,
  providerData: {
    uid: String,
    provider: String,
  },
}, { timestamps: true });

UserSchema.statics.findOrCreate = async (args) => {
  try {
    // Try to find a user.
    const user = await this.findOne({
      email: args.email,
      fullName: args.fullName,
    });

    // If the user doesn't exist yet, create one.
    if (!user) {
      return await this.create(args);
    }

    // Otherwise return the user.
    return user;
  } catch (e) {
    return e;
  }
};

export default mongoose.model('User', UserSchema);
