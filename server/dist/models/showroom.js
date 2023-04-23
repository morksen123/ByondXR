import { model, Schema } from "mongoose";
const boardSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
});
const showRoomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    boards: {
        type: [boardSchema],
        required: true,
    },
});
const Showroom = model('Showroom', showRoomSchema);
export default Showroom;
