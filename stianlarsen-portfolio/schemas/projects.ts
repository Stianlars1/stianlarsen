export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of block project',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your project',
      options: {
        source: 'title',
      },
    },

    {name: 'titleImage', type: 'image', title: 'Title image'},
    {name: 'previewLogo', type: 'image', title: 'Logo image'},
    {name: 'mockupImage', type: 'image', title: 'Mockup image'},
    {
      name: 'previewLogoBackgroundColor',
      type: 'string',
      title: 'Primary color of the logo image (HEX value)',
    },
    {name: 'imageDescription', type: 'text', title: 'Image description'},
    {name: 'smallDescription', type: 'text', title: 'Small description'},
    {name: 'bigDescription', type: 'text', title: 'Big description'},
    {
      name: 'images',
      type: 'array',
      title: 'Series of images',
      of: [{type: 'image'}],
      options: {
        layout: 'grid', // Optional: this will display the images in a grid in the studio
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },

        {
          type: 'image',
          options: {hotspot: true}, // Enables hotspot for precise control over how images are cropped
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true, // Highlights this field when an image is selected
              },
            },
            {
              // Optionally, you can include this to allow alt text for accessibility
              // to be added to images
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
