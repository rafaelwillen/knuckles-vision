export type Props = {
  video: VideoProps;
};

export type VideoProps = {
  src: string;
  title: string;
  author: string;
  publicationDate: Date;
  description: string;
};
