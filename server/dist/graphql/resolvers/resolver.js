import showroom from "../../../dist/models/showroom.js";
export const resolvers = {
    Query: {
        getShowroom: async (parent, req) => {
            const result = await showroom.findOne({ title: req.name });
            return result;
        },
    },
};
export default resolvers;
