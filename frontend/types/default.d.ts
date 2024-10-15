interface IStrapiPagination {
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
}

interface IStrapiAbout {
  type?: string;
  children?: {
    type?: string;
    text?: string;
  }[];
}

interface IStrapiAvatarFormat {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  path?: string | null;
  width?: number;
  height?: number;
  size?: number;
  sizeInBytes?: number;
  url?: string;
}

interface IStrapiAvatar {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: IStrapiAvatarFormat;
    small?: IStrapiAvatarFormat;
    medium?: IStrapiAvatarFormat;
    large?: IStrapiAvatarFormat;
  };
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: any | null;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string | null;
}

interface IStrapiPerson {
  about?: IStrapiAbout[];
  age?: number;
  avatar?: IStrapiAvatar;
  documentId?: string;
  firstname?: string;
  lastname?: string;
  id?: number;
}

interface IStrapiData {
  data?: IStrapiPerson[];
  meta?: {
    pagination?: IStrapiPagination;
  };
}
