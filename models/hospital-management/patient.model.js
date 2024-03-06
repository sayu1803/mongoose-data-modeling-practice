import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    adress: {
      type: string,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['MALE', 'FEMALE', 'OTHERS'],
      required: true,
    },
    admitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hospital',
    },
    doctoredby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'doctor',
    },
  },
  { timestamps: true }
);

export const patient = mongoose.model('patient', patientSchema);
