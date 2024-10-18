export enum Category {
  Utility = 'Utility',
  Productivity = 'Productivity',
  Security = 'Security',
  Multimedia = 'Multimedia',
  Development = 'Development',
}

export enum OS {
  Windows = 'Windows',
  MacOS = 'MacOS',
  Linux = 'Linux',
  CrossPlatform = 'Cross-Platform',
}

export interface Software {
  id: number;
  name: string;
  description: string;
  category: Category;
  os: OS;
  downloadUrl: string;
  imageUrl: string;
}