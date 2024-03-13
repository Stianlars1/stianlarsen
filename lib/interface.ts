interface PreviewProjectsType {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  previewLogo: any;
  previewLogoBackgroundColor: string;
  mockupImage?: any;
}
interface ProjectType {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
  previewLogo: any;
  previewLogoBackgroundColor: string;
  mockupImage?: any;

  imageDescription: string;
  bigDescription: string;
  images: any | any[];
  content: any;
  techStack?: string;
  website?: string;
  publishedDate?: string;
}
