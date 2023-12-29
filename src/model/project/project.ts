import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
  {
    title: String,
    description: String,
    voltages: { LV: Boolean, MV: Boolean, HV: Boolean, EV: Boolean },
    lvOptions: [{ label: String, value: String }],
    mvOptions: [{ label: String, value: String }],
    hvOptions: [{ label: String, value: String }],
    evOptions: [{ label: String, value: String }],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;