import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      reqired: true,
    },
    qualificaton: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hospital',
      },
    ],
  },
  { timestamps: true }
);

export const doctor = mongoose.model('doctor', doctorSchema);
