import React from "react";

const Number = ({ num }) => {
  return (
    <div className="text-[16rem] -mb-48 font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-white to-purple-300">
      {num}
    </div>
  );
};

const Step = ({ num, title, description }) => {
  return (
    <div className="flex flex-col items-center mx-4">
      <Number num={num} />
      <div className="text-4xl font-black leading-normal tracking-wide text-gray-800">
        {title}
      </div>
      <div className="text-lg font-medium leading-normal tracking-wide text-gray-500  text-center">
        {description}
      </div>
    </div>
  );
};

const Working = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6 container px-6">
      <div className="rounded-3xl border border-solid border-gray-200 p-8 md:px-12 md:py-20 shadow-md ">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-5xl font-semibold leading-14 tracking-wide text-gray-800">
            How it works
          </div>
          <div className="text-xl leading-normal tracking-wide text-gray-600">
            Premium designs, unlimited requests, super fast delivery, for one
            flat monthly fee.
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center">
          <Step
            num="1"
            title="Subscribe"
            description="Subscribe to a plan & get instant access to your private Slack channel."
          />
          <Step
            num="2"
            title="Request"
            description="Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours."
          />
          <Step
            num="3"
            title="Revise"
            description="Need changes? We guarantee unlimited revisions until you're 200% satisfied."
          />
        </div>
      </div>
    </div>
  );
};

export default Working;
