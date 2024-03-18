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
  publishedDate: string;

  imageDescription: any | any[];
  bigDescription: string;
  images: any | any[];
  content: any;
  techStack?: string;
  website?: string;
}
