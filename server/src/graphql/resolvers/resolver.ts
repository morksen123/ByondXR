import mongoose, { mongo } from "mongoose";
import showroom from "../../../dist/models/showroom.js";
import userActivity from "../../../dist/models/userActivity.js"
import UserActivity from "../../models/userActivity.js";

interface getShowroomReqInterface {
  name: string;
}

interface addUserActivityReqInterface {
  input: UserActivity;
}

export const resolvers = {
  Query: {
    getShowroom: async (parent: void, req: getShowroomReqInterface) => {
      const result = await showroom.findOne({ title: req.name });
      return result;
    },
  },

  Mutation: {
    addUserActivity: async (parent: void, req: addUserActivityReqInterface) => {
      try {
        const newUserActivity = new UserActivity({
          timestamp: new Date(),
          page: req.input.page,
          entity_id: req.input.entity_id,
          event_type: req.input.event_type,
          data: {
            board_id: req.input.data.board_id,
          },
        });
        const result = await newUserActivity.save();
        console.log('New UserActivity document added to the database:', result);
        return result
      } catch (error) {
        console.error('Failed to add UserActivity document to the database:', error);
      }
    },
  },
};

export default resolvers;
