export default {
  name: "speaker",
  type: "document",
  title: "Speaker",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
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
