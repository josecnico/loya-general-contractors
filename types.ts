export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface NavLink {
  path: string;
  label: string;
}