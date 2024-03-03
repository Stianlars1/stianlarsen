export const portfolioProject = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of block project",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of your project",
      options: {
        source: "title",
      },
    },

    { name: "titleImage", type: "image", title: "Title image" },
    { name: "previewLogo", type: "image", title: "Logo image" },
    { name: "mockupImage", type: "image", title: "Mockup image" },
    {
      name: "previewLogoBackgroundColor",
      type: "string",
      title: "Primary color of the logo image (HEX value)",
    },
    { name: "imageDescription", type: "text", title: "Image description" },
    { name: "smallDescription", type: "text", title: "Small description" },
    { name: "bigDescription", type: "text", title: "Big description" },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};