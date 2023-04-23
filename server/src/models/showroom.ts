import { Document, model, Schema } from "mongoose";

interface Board {
  id: Schema.Types.ObjectId;
  title: string;
  description: string;
  image: string;
}

interface Showroom extends Document {
  title: string;
  boards: Board[];
}

const boardSchema = new Schema<Board>({
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

const showRoomSchema = new Schema<Showroom>({
  title: {
    type: String,
    required: true,
  },
  boards: {
    type: [boardSchema],
    required: true,
  },
});

const Showroom = model<Showroom>('Showroom', showRoomSchema)

export default Showroom
