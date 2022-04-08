export default {
  name: "partner",
  type: "document",
  title: "Partner",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
