import showroom from "../../../dist/models/showroom.js";

interface getShowroomReqInterface {
  name: string;
}

export const resolvers = {
  Query: {
    getShowroom: async (parent: void, req: getShowroomReqInterface) => {
      const result = await showroom.findOne({ title: req.name });
      return result;
    },
  },
};

export default resolvers;
