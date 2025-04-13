'use client';

import React, { Component } from 'react';

class CAForm extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
            Counseling Intake Form
          </h1>
          <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <iframe
              aria-label="Counseling Intake Form"
              frameBorder="0"
              className="w-full h-[500px]"
              src="https://forms.zohopublic.in/temp77261gm1/form/CounselingIntakeForm/formperma/U9q8YZ-LpdEPwFkmLkldYrJatyuC10xevOFfSIlUA1U"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default CAForm;
