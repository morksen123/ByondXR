import { model, Schema } from "mongoose";
const userActivitySchema = new Schema({
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
const UserActivity = model('UserActivity', userActivitySchema);
export default UserActivity;
