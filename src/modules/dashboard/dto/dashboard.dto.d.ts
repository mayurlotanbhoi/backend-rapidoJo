export interface DashboardKpisDto {
    totalJobs: number;
    activeJobs: number;
    premiumJobs: number;
    totalUsers: number;
    applicationsToday: number;
    revenue: number;
    coursesSold: number;
    newRegistrations: number;
}
export interface DashboardChartPointDto {
    name: string;
    value?: number;
    users?: number;
    jobs?: number;
}
export interface RevenuePointDto {
    month: string;
    premium: number;
    courses: number;
    subscriptions: number;
    total: number;
}
export interface DashboardAnalyticsDto {
    userGrowth: DashboardChartPointDto[];
    topCities: DashboardChartPointDto[];
    topSkills: DashboardChartPointDto[];
    applicationsTrend: DashboardChartPointDto[];
    categoryBreakdown: DashboardChartPointDto[];
}
//# sourceMappingURL=dashboard.dto.d.ts.map