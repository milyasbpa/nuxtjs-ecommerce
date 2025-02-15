import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    users: [],
    revenue: 0,
  }),
  actions: {
    async fetchDashboardData() {
      try {
        const response = await fetch("https://api.example.com/dashboard");
        const data = await response.json();
        this.users = data.users;
        this.revenue = data.revenue;
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    },
  },
});
