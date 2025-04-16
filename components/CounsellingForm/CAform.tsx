'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CAForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-8">
      {/* Centered Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-10"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-8 tracking-tight">
          Counseling Intake Form
        </h1>

        {/* Subtitle (optional) */}
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Please fill out the form below to help us understand your needs better. This information will be kept confidential.
        </p>

        {/* Embedded Form */}
        <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
          <iframe
            title="Counseling Intake Form"
            src="https://forms.zohopublic.in/temp77261gm1/form/CounselingIntakeForm/formperma/U9q8YZ-LpdEPwFkmLkldYrJatyuC10xevOFfSIlUA1U"
            frameBorder="0"
            allowFullScreen
            className="w-full h-[1600px] md:h-[1700px] rounded-xl"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default CAForm;
