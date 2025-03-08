
// src/models/types.ts
export interface Project {
  id: number;
  title: string;
  imageUrl?: string;
  description?: string;
}

export interface ContactInfo {
  title: string;
  name?: string;
  address?: string[];
  mobile?: string;
  email?: string;
}