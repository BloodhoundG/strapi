interface IStrapiPagination {
  page?: number;
  pageCount?: number;
  pageSize?: number;
  total?: number;
}

interface IPersonAboutObject {
  type?: string;
  children?: {
    type?: string;
    text?: string;
  }[];
}

interface IAvatarFormatObject {
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

interface IAvatarObject {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: IAvatarFormatObject;
    small?: IAvatarFormatObject;
    medium?: IAvatarFormatObject;
    large?: IAvatarFormatObject;
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
  about?: IPersonAboutObject[];
  age?: number;
  avatar?: IAvatarObject;
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
