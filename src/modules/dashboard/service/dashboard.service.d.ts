import { ApiResponse } from "../../../shared/response/api-response";
export declare class DashboardService {
    private repository;
    getKpis(): Promise<ApiResponse<{
        totalJobs: number;
        totalCourses: number;
        activeJobs: number;
        premiumJobs: number;
        totalUsers: number;
        activeSubscriptions: number;
        applicationsToday: number;
        revenue: any;
        coursesSold: any;
        newRegistrations: number;
    }>>;
    getAnalytics(): Promise<ApiResponse<{
        userGrowth: {
            name: string | undefined;
            users: number;
            jobs: number;
        }[];
        topCities: any[];
        topSkills: {
            name: string;
            value: number;
        }[];
        applicationsTrend: {
            name: string;
            value: number;
        }[];
        categoryBreakdown: any[];
    }>>;
    getRevenue(): Promise<ApiResponse<{
        month: string | undefined;
        premium: number;
        courses: any;
        subscriptions: number;
        total: any;
    }[]>>;
}
//# sourceMappingURL=dashboard.service.d.ts.map