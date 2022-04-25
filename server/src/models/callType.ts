import { model, Schema } from "mongoose"
import { ICallType } from '../types/type'

const callTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const CallType = model<ICallType>("CallType", callTypeSchema)