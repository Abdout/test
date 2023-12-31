import mongoose, { Schema } from "mongoose";

const optionSchema = new Schema({
  label: String,
  value: String,
});

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    voltages: { LV: Boolean, MV: Boolean, HV: Boolean, EV: Boolean },
    lvOptions: [optionSchema],
    mvOptions: [optionSchema],
    hvOptions: [optionSchema],
    evOptions: [optionSchema],
    lvSwgr: [optionSchema],
    lvTrafo: [optionSchema],
    lvCable: [optionSchema],
    lvRmu: [optionSchema],
    mvSwgr: [optionSchema],
    mvTrafo: [optionSchema],
    mvCable: [optionSchema],
    mvRmu: [optionSchema],
    hvSwgr: [optionSchema],
    hvTrafo: [optionSchema],
    hvCable: [optionSchema],
    hvRmu: [optionSchema],
    evSwgr: [optionSchema],
    evTrafo: [optionSchema],
    evCable: [optionSchema],
    evRmu: [optionSchema],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
// const ProjectSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   customer: String,
//   client: String,
//   voltageLevels: [{
//     level: String,
//     items: [{
//       name: String,
//       subitems: [{
//         name: String,
//         activities: [String]
//       }]
//     }]
//   }]
// });