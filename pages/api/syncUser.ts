import axios from "axios";

export const syncUserWithBackend = async (user: any) => {
  if (!user) return;

  const userData = {
    clerkUserId: user.id,
    username: user.username,
    email: user.emailAddresses[0]?.emailAddress,
    phoneNumber: user.phoneNumbers[0]?.phoneNumber,
    name: user.fullName,
    profileImage: user.imageUrl,
  };

  try {
    await axios.post("http://localhost:7000/api/auth/sync-user", userData);
    console.log("✅ Synced user with backend");
  } catch (error) {
    console.error("Failed to sync user with backend:", error);
  }
};
