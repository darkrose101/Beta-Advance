export type UserRole = 'youth' | 'corporation' | 'admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  verified: boolean;
}

export interface Corporation extends User {
  registrationNumber: string;
  industry: string;
  description: string;
}

export interface Youth extends User {
  age: number;
  skills: string[];
  education: string;
  experience: string[];
}

export interface Job {
  id: string;
  corporationId: string;
  title: string;
  description: string;
  requirements: string[];
  budget: number;
  deadline: Date;
  status: 'open' | 'in-progress' | 'completed';
}

export interface Application {
  id: string;
  jobId: string;
  youthId: string;
  proposal: string;
  status: 'pending' | 'accepted' | 'rejected';
  submittedAt: Date;
}

export interface Review {
  id: string;
  jobId: string;
  youthId: string;
  rating: number;
  comment: string;
  metrics: {
    quality: number;
    communication: number;
    timeliness: number;
  };
}