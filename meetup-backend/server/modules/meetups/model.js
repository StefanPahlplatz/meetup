import mongoose, { Schema } from 'mongoose';

const meetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'Title must be at least 5 characters!'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Title must be at least 10 characters!'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true });

export default mongoose.model('Meetup', meetupSchema);
