// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://rohit:supercell@cluster0.pk7ng.mongodb.net/twitter?retryWrites=true&w=majority",
    JWT_SECRET: "secretissecret",
  },
};
