import axios from "axios";

export const syncUserWithBackend = async (user: any) => {
  if (!user) return;

  const userData = {
    clerkId: user.id,
    name: user.name,
    email: user.email,
    profileImage: user.imageUrl,
  };

  try {
    await axios.post("http://localhost:5000/api/auth/login", userData);
    console.log("✅ Synced user with backend");
  } catch (error) {
    console.error("Failed to sync user with backend:", error);
  }
};
