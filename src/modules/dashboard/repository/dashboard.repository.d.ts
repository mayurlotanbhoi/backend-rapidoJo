export declare class DashboardRepository {
    getKpis(): Promise<{
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
    }>;
    getAnalytics(): Promise<{
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
    }>;
    getRevenue(): Promise<{
        month: string | undefined;
        premium: number;
        courses: any;
        subscriptions: number;
        total: any;
    }[]>;
    private getUserGrowth;
    private getTopCities;
    private getTopSkills;
    private getCategoryBreakdown;
}
//# sourceMappingURL=dashboard.repository.d.ts.map