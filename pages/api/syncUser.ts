import axios from "axios"

export const syncUserWithBackend = async (user: any) => {
  if (!user) return;

  const userData = {
    clerkId: user.id,
    name: user.fullName || user.username || "",
    email: user.emailAddresses?.[0]?.emailAddress || "",
    profileImage: user.imageUrl || "",
  };

  try {
    await axios.post("https://icebreg-backend2.onrender.com/api/auth/sync-user", userData);
    console.log("✅ Synced user with backend");
  } catch (error) {
    console.error("❌ Failed to sync user with backend:", error);
  }
};
