export default {
  name: "featurePartner",
  type: "document",
  title: "Feature Partner",
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
