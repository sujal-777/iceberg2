// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import Clock from "../testPage/clock";

// const TestCardsSection = () => {
//   return (
//     <div className="mb-8 mx-[100px]">
//       <h2 className="text-2xl font-bold mb-6">Test Series</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
//         {/* CA Card */}
//         <Card className="bg-blue-100 border-2 border-black overflow-hidden rounded-md max-w-xs mx-auto">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="bg-blue-100 p-2 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
//                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
//                 </svg>
//               </div>
//               <h3 className="font-bold">Chartered Accountant (CA)</h3>
//             </div>
//             <p className="text-sm text-gray-600 mb-4">
//               Comprehensive mock tests for all levels of CA exams with detailed solutions and performance analytics.
//             </p>
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-1">
//                 <Badge variant="outline" className="bg-green-100 text-green-700 border-0 flex gap-1 items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
//                     <path d="m5 12 5 5L20 7" />
//                   </svg>
//                   Success Rate: 76%
//                 </Badge>
//               </div>
//               <div className="flex items-center gap-1 text-gray-500">
//                 <Clock />
//                 Last: 2 days ago
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="px-4 py-3 bg-white">
//             <Button variant="outline" className="w-full border-blue-500 rounded-md border-2 hover:bg-blue-500 hover:text-white transition-all duration-200">
//               Explore Tests
//             </Button>
//           </CardFooter>
//         </Card>

//         {/* CS Card */}
//         <Card className="bg-blue-100 border-2 border-black overflow-hidden rounded-md max-w-xs mx-auto">
//           <CardContent className="p-4">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="bg-blue-100 p-2 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
//                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
//                 </svg>
//               </div>
//               <h3 className="font-bold">Company Secretary (CS)</h3>
//             </div>
//             <p className="text-sm text-gray-600 mb-4">
//               Practice with our extensive collection of CS mock exams designed by industry experts to help you excel.
//             </p>
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-1">
//                 <Badge variant="outline" className="bg-green-100 text-green-700 border-0 flex gap-1 items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
//                     <path d="m5 12 5 5L20 7" />
//                   </svg>
//                   Success Rate: 72%
//                 </Badge>
//               </div>
//               <div className="flex items-center gap-1 text-gray-500">
//                 <Clock />
//                 Last: 5 days ago
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="px-4 py-3 bg-white">
//             <Button variant="outline" className="w-full border-blue-500 rounded-md border-2 hover:bg-blue-500 hover:text-white transition-all duration-200">
//               Explore Tests
//             </Button>
//           </CardFooter>
//         </Card>

//         {/* CMA Card */}
//         <Card className="bg-blue-100 border-2 border-black overflow-hidden rounded-md max-w-xs mx-auto">
//           <CardContent className="p-4">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="bg-blue-100 p-2 rounded-full">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
//                   <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//                   <path d="M6 12v5c3 3 9 3 12 0v-5" />
//                 </svg>
//               </div>
//               <h3 className="font-bold">Cost Management Accountant (CMA)</h3>
//             </div>
//             <p className="text-sm text-gray-600 mb-4">
//               Prepare for your CMA exams with our specialized mock tests covering all essential topics and concepts.
//             </p>
//             <div className="flex items-center gap-4 text-sm">
//               <div className="flex items-center gap-1">
//                 <Badge variant="outline" className="bg-green-100 text-green-700 border-0 flex gap-1 items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
//                     <path d="m5 12 5 5L20 7" />
//                   </svg>
//                   Success Rate: 75%
//                 </Badge>
//               </div>
//               <div className="flex items-center gap-1 text-gray-500">
//                 <Clock />
//                 Last: 2 days ago
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="px-4 py-3 bg-white">
//             <Button variant="outline" className="w-full border-blue-500 rounded-md border-2 hover:bg-blue-500 hover:text-white transition-all duration-200">
//               Explore Tests
//             </Button>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default TestCardsSection;


"use client";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Clock from "../testPage/clock";

const testData = [
  {
    title: "Chartered Accountant (CA)",
    description:
      "Comprehensive mock tests for all levels of CA exams with detailed solutions and performance analytics.",
    successRate: "76%",
    lastTest: "2 days ago",
    redirect: "/test-series/free-mock-test/ca-mock",
  },
  {
    title: "Company Secretary (CS)",
    description:
      "Practice with our extensive collection of CS mock exams designed by industry experts to help you excel.",
    successRate: "72%",
    lastTest: "5 days ago",
    redirect: "/test-series/free-mock-test/cs-mock",
  },
  {
    title: "Cost Management Accountant (CMA)",
    description:
      "Prepare for your CMA exams with our specialized mock tests covering all essential topics and concepts.",
    successRate: "75%",
    lastTest: "2 days ago",
    redirect: "/test-series/free-mock-test/cma-mock",
  },
];

const TestCardsSection = () => {
  const router = useRouter();

  return (
    <div className="mb-8 mx-4 md:mx-20">
      <h2 className="text-2xl font-bold mb-6">Test Series</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testData.map((test, idx) => (
          <Card
            key={idx}
            className="bg-blue-100 border-2 border-black rounded-md flex flex-col justify-between h-full max-w-xs mx-auto"
          >
            <CardContent className="p-6 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="font-bold">{test.title}</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">{test.description}</p>

              <div className="flex items-center gap-4 text-sm mt-auto">
                <div className="flex items-center gap-1">
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-700 border-0 flex gap-1 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    Success Rate: {test.successRate}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock />
                  Last: {test.lastTest}
                </div>
              </div>
            </CardContent>

            <CardFooter className="px-4 py-3 bg-white mt-auto">
              <Button
                variant="outline"
                onClick={() => router.push(test.redirect)}
                className="w-full border-blue-500 rounded-md border-2 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Explore Tests
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestCardsSection;
