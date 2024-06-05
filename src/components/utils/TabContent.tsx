import React from 'react';

const TabContent = ({ active, subtitle, title, image, description }) => {
  if (!active) return null;

  return (
    <div className="tab-content flex items-center mb-20">
      <div className="split-inner w-1/2 lg:w-1/2 p-4 lg:p-8">
        <div className="subtitle mb-4">
          <span className="theme-gradient text-2xl">{subtitle}</span>
        </div>
        <h2 className="text-left title  text-4xl text-tertiary font-bold mb-4">
          {title}
        </h2>
        <p className="description text-lg mb-4">{description}</p>
        <div className="view-more-button mt-6">
          {/* <a
            className="btn-default color-blacked bg-purple-600 text-white p-4 rounded"
            href="/contact"
          >
            Try It Now <i className="fa fa-arrow-right ml-2"></i>
          </a> */}
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img className="inline-block h-50" src={image} alt={title} />
      </div>
    </div>
  );
};

export default TabContent;
