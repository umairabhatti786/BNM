import api from "./api";

export const driverSearchService = {
  async searchDrivers(params) {
    try {
      console.log("Searching drivers with params:", params);
      const response = await api.get("/api/driver-search/search", {
        params: {
          location: params.location,
          radius: params.radius || 10,
          vehicleType: params.vehicleType,
        },
      });
      console.log("Driver search response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error searching drivers:", error.response?.data || error);
      throw error;
    }
  },
};
