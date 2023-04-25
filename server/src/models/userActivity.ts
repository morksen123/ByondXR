import { Document, model, Schema } from "mongoose";

interface UserActivityData {
  board_id: Schema.Types.ObjectId;
}

interface UserActivity extends Document {
  timestamp: Date;
  page: string;
  entity_id: Schema.Types.ObjectId;
  event_type: string;
  data: UserActivityData;
}

const userActivitySchema = new Schema<UserActivity>({
  timestamp: {
    type: Date
  },
  page: {
    type: String,
    required: true,
  },
  entity_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  event_type: {
    type: String,
    required: true,
  },
  data: {
    board_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
});


const UserActivity = model<UserActivity>('UserActivity', userActivitySchema)

export default UserActivity