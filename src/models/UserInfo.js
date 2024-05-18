import { Schema, models, model } from "mongoose";

const UserInfoSchema = new Schema({
  email: { type: String, require: true },
  phone: { type: String },
  city: { type: String },
  postal: { type: String },
  address: { type: String },
  admin: { type: Boolean, default: false },
}, { timestamps: true });

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);