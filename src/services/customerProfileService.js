import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const customerProfileService = {
  async getUserProfile() {
    try {
      console.log("=== Get User Profile ===");
      console.log("Fetching user profile from API");
      const response = await api.get("/api/user/profile");
      console.log(
        "Profile API Response:",
        JSON.stringify(response.data, null, 2)
      );

      if (!response.data || !response.data.data) {
        throw new Error("No profile data received");
      }

      // Store profile in AsyncStorage with verification status
      const profileData = {
        ...response.data.data,
        phone_verified: response.data.data.is_phone_verified || false,
        account_active: response.data.data.is_phone_verified || false,
      };
      console.log(
        "Profile data to be stored:",
        JSON.stringify(profileData, null, 2)
      );

      await AsyncStorage.setItem("userProfile", JSON.stringify(profileData));
      console.log("Profile stored in AsyncStorage");

      // Verify storage
      const storedProfile = await AsyncStorage.getItem("userProfile");
      console.log(
        "Verifying stored profile:",
        JSON.stringify(JSON.parse(storedProfile), null, 2)
      );

      return profileData;
    } catch (error) {
      console.error("Profile fetch error:", error.response?.data || error);
      throw error;
    }
  },

  async updateUserProfile(profileData) {
    try {
      console.log("=== Update User Profile ===");
      console.log(
        "Updating user profile:",
        JSON.stringify(profileData, null, 2)
      );
      const response = await api.post("/api/user/profile", profileData);
      console.log(
        "Profile update API Response:",
        JSON.stringify(response.data, null, 2)
      );

      if (!response.data || !response.data.data) {
        throw new Error("No profile data received");
      }

      // Get current stored profile
      const storedProfile = await this.getStoredProfile();
      console.log(
        "Current stored profile:",
        JSON.stringify(storedProfile, null, 2)
      );

      // Update profile in AsyncStorage with verification status
      const updatedProfile = {
        ...response.data.data,
        phone_verified: response.data.data.is_phone_verified || false,
        account_active: response.data.data.is_phone_verified || false,
      };
      console.log(
        "Updated profile data to be stored:",
        JSON.stringify(updatedProfile, null, 2)
      );

      await AsyncStorage.setItem("userProfile", JSON.stringify(updatedProfile));
      console.log("Profile updated in AsyncStorage");

      // Verify storage
      const newStoredProfile = await AsyncStorage.getItem("userProfile");
      console.log(
        "Verifying updated stored profile:",
        JSON.stringify(JSON.parse(newStoredProfile), null, 2)
      );

      return updatedProfile;
    } catch (error) {
      console.error("Profile update error:", error.response?.data || error);
      throw error;
    }
  },

  async updatePhoneVerificationStatus(isVerified) {
    try {
      console.log("=== Update Phone Verification Status ===");
      console.log("New verification status:", isVerified);
      const storedProfile = await this.getStoredProfile();
      console.log(
        "Current stored profile:",
        JSON.stringify(storedProfile, null, 2)
      );

      if (storedProfile) {
        const updatedProfile = {
          ...storedProfile,
          phone_verified: isVerified,
          account_active: isVerified,
        };
        console.log(
          "Updated profile with verification status:",
          JSON.stringify(updatedProfile, null, 2)
        );

        await AsyncStorage.setItem(
          "userProfile",
          JSON.stringify(updatedProfile)
        );
        console.log("Phone verification status updated in AsyncStorage");

        // Verify storage
        const newStoredProfile = await AsyncStorage.getItem("userProfile");
        console.log(
          "Verifying updated stored profile:",
          JSON.stringify(JSON.parse(newStoredProfile), null, 2)
        );

        return updatedProfile;
      }
    } catch (error) {
      console.error("Phone verification status update error:", error);
      throw error;
    }
  },

  async uploadProfilePicture(imageUri) {
    try {
      console.log("=== Upload Profile Picture ===");

      // Create form data for the image upload
      const formData = new FormData();
      formData.append("profile_picture", {
        uri: imageUri,
        type: "image/jpeg",
        name: "profile.jpg",
      });

      // Make the API request
      const response = await api.post("/api/user/profile/picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Profile picture upload response:", response.data);

      if (!response.data || !response.data.data) {
        throw new Error("No profile data received after picture upload");
      }

      // Update the stored profile with the new picture URL
      const storedProfile = await this.getStoredProfile();
      const updatedProfile = {
        ...storedProfile,
        profile_picture: response.data.data.profile_picture,
      };

      await AsyncStorage.setItem("userProfile", JSON.stringify(updatedProfile));
      console.log("Profile picture updated in AsyncStorage");

      return updatedProfile;
    } catch (error) {
      console.error(
        "Profile picture upload error:",
        error.response?.data || error
      );
      throw error;
    }
  },

  async getStoredProfile() {
    try {
      console.log("=== Get Stored Profile ===");
      const storedProfile = await AsyncStorage.getItem("userProfile");
      console.log("Raw stored profile:", storedProfile);
      const parsedProfile = storedProfile ? JSON.parse(storedProfile) : null;
      console.log(
        "Parsed stored profile:",
        JSON.stringify(parsedProfile, null, 2)
      );
      return parsedProfile;
    } catch (error) {
      console.error("Error getting stored profile:", error);
      return null;
    }
  },

  async clearProfile() {
    try {
      await AsyncStorage.removeItem("userProfile");
      console.log("Profile cleared from AsyncStorage");
    } catch (error) {
      console.error("Error clearing profile:", error);
    }
  },

  async signIn(email, password) {
    try {
      console.log("=== Sign In Process ===");
      console.log("Attempting sign in with:", { email });
      const response = await api.post("/api/auth/login", {
        email,
        password,
      });
      console.log("Sign in response:", JSON.stringify(response.data, null, 2));

      if (!response.data || !response.data.data) {
        throw new Error("No sign in data received");
      }

      // Store tokens
      await AsyncStorage.setItem(
        "accessToken",
        response.data.data.access_token
      );
      await AsyncStorage.setItem(
        "refreshToken",
        response.data.data.refresh_token
      );
      console.log("Tokens stored in AsyncStorage");

      // Get and store user profile
      console.log("Fetching user profile after sign in...");
      const profileResponse = await api.get("/api/user/profile");
      console.log(
        "Profile API Response:",
        JSON.stringify(profileResponse.data, null, 2)
      );

      if (profileResponse.data && profileResponse.data.data) {
        const profileData = {
          ...profileResponse.data.data,
          phone_verified: profileResponse.data.data.is_phone_verified || false,
          account_active: profileResponse.data.data.is_phone_verified || false,
        };
        console.log(
          "Profile data to be stored:",
          JSON.stringify(profileData, null, 2)
        );
        await AsyncStorage.setItem("userProfile", JSON.stringify(profileData));
        console.log("Profile stored in AsyncStorage during sign in");

        // Verify storage
        const storedProfile = await AsyncStorage.getItem("userProfile");
        console.log(
          "Verifying stored profile:",
          JSON.stringify(JSON.parse(storedProfile), null, 2)
        );
      }

      return response.data;
    } catch (error) {
      console.error("Sign in error:", error.response?.data || error);
      throw error;
    }
  },
};
