import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0)
          throw new Error('Valor não permitido! Nota informada menor que 0');
      },
    },
    lastModified: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

const studentModel = mongoose.model('students', studentSchema, 'students');

export { studentModel };
