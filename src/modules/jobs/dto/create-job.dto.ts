export interface CreateJobDto {
     title: string;
     company: string;
     source: string;
     sourceUrl: string;
     location: string;

     salaryMin?: number;
     salaryMax?: number;

     expMin?: number;
     expMax?: number;

     skills: string[];

     description: string;

     requirements: string[];

     benefits: string[];
}