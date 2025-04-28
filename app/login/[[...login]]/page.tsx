// 'use client';

// import { SignIn } from '@clerk/nextjs';

// export default function LoginPage() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       {/* Clerk's SignIn Component */}
//       <SignIn path="/login" routing="path" signUpUrl="/sign-up" />
//     </div>
//   );
// }

import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-center p-5">
      <SignIn />
    </div>
  );
}