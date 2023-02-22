const Yup = require("yup");

export const updateSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phone: Yup.string().required(),
  website: Yup.string().required(),
});