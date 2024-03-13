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
    {
      name: "publishedDate",
      type: "date",
      title: "Published Date",
      description: "The date the article was published",
      options: {
        dateFormat: "DD.MM.YYYY", // Display format in Sanity Studio (for UI only)
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
    { name: "website", type: "text", title: "Website url" },
    {
      name: "techStack",
      type: "array",
      title: "Tech Stack",
      description: "Select technologies used",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Algolia", value: "ALGOLIA" },
              { title: "Amazon Web Services", value: "AWS" },
              { title: "ChatGPT", value: "CHATGPT" },
              { title: "C#", value: "CSHARP" },
              { title: ".NET", value: "DOTNET" },
              { title: "Figma", value: "FIGMA" },
              { title: "Firebase", value: "FIREBASE" },
              { title: "Framer Motion", value: "FRAMERMOTION" },
              { title: "GitHub", value: "GITHUB" },
              { title: "HTML", value: "HTML" },
              { title: "Java", value: "JAVA" },
              { title: "JavaScript", value: "JAVASCRIPT" },
              { title: "Kotlin", value: "KOTLIN" },
              { title: "Less", value: "LESS" },
              { title: "MySQL", value: "MYSQL" },
              { title: "Next.js", value: "NEXTJS" },
              { title: "Node.js", value: "NODE" },
              { title: "Python", value: "PYTHON" },
              { title: "React", value: "REACT" },
              { title: "Sanity", value: "SANITY" },
              { title: "SCSS", value: "SCSS" },
              { title: "Slack", value: "SLACK" },
              { title: "TypeScript", value: "TYPESCRIPT" },
              // Add more technologies as needed
            ],
          },
        },
      ],
    },
    {
      name: "images",
      type: "array",
      title: "Series of images",
      of: [{ type: "image" }],
      options: {
        layout: "grid", // Optional: this will display the images in a grid in the studio
      },
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },

        {
          type: "image",
          options: { hotspot: true }, // Enables hotspot for precise control over how images are cropped
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true, // Highlights this field when an image is selected
              },
            },
            {
              // Optionally, you can include this to allow alt text for accessibility
              // to be added to images
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};
