export interface Job {
  id: number;
  companyName: string;
  designation: string;
  postedDate: number;
  jobType: string;
  location: string;
  imageUrl: string;
  isFeatured: boolean;
  tags: string[];
}
