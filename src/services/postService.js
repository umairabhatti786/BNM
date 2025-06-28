import api from "./api";

export const postService = {
  async savePost(postData) {
    try {
      console.log("Saving post with data:", postData);
      const response = await api.post("/api/posts", postData);
      console.log("Post save response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error saving post:", error.response?.data || error);
      throw error;
    }
  },

  async saveDeliveryPost(deliveryData) {
    const postData = {
      postType: "delivery",
      ...deliveryData,
    };
    return this.savePost(postData);
  },

  async saveRidePost(rideData) {
    const postData = {
      postType: "ride",
      ...rideData,
    };
    return this.savePost(postData);
  },

  async getAllPosts() {
    try {
      console.log("Fetching all posts");
      const response = await api.get("/api/posts");
      console.log("Posts fetch response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error.response?.data || error);
      throw error;
    }
  },

  async updatePost(postId, postData) {
    try {
      console.log("Updating post with data:", postData);
      const response = await api.put(`/api/posts/${postId}`, postData);
      console.log("Post update response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating post:", error.response?.data || error);
      throw error;
    }
  },

  async updateDeliveryPost(postId, deliveryData) {
    const postData = {
      postType: "delivery",
      ...deliveryData,
    };
    return this.updatePost(postId, postData);
  },

  async updateRidePost(postId, rideData) {
    const postData = {
      postType: "ride",
      ...rideData,
    };
    return this.updatePost(postId, postData);
  },

  async deletePost(postId) {
    try {
      console.log("Deleting post with ID:", postId);
      const response = await api.delete(`/api/posts/${postId}`);
      console.log("Post delete response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting post:", error.response?.data || error);
      throw error;
    }
  },
};
