import mongoose from 'mongoose';

const medicalrecSchema = new mongoose.Schema({}, { timestamps: true });

export const medicalReport = mongoose.model('medicalReport', medicalrecSchema);
