import React from "react";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center rounded-3xl overflow-hidden mx-6 my-4 shadow-lg"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-2xl">
            <p className="italic text-xl font-light mb-4">
              “Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!”
            </p>
            <p className="text-sm">
              ICEBERG is a leading CA & CMA test series platform designed to help students achieve top scores and career success.
              Our comprehensive approach, including mock tests, expert counseling, and strategic study planning, has helped
              thousands of students clear their exams with confidence.
            </p>
            <button className="mt-6 bg-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              About ICEBERG
            </button>
          </div>
        </div>
      </div>
      
      {/* Full-Width Mission Image Section */}
      <section>
        <img
          src="/AboutUs3.png"
          alt="Mission"
          className="w-full h-auto"
        />
      </section>
    </div>
  );
};

export default App;
