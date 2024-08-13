import React from "react";

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="card-container mb-10 overflow-hidden rounded-lg bg-custom-g shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-dark-2 dark:shadow-md dark:hover:shadow-xl">
      <img src={image} alt="" className="w-full h-48 custom-gd:h-56 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-300 hover:scale-105" />
      <div className="card-content p-6 custom-gd:p-7 md:p-8 lg:p-9 text-center">
        <h3>
          <a
            href={titleHref || "/#"}
            className="card-title mb-4 block text-lg custom-gd:text-xl md:text-2xl font-semibold text-dark transition-colors duration-300 hover:text-primary dark:text-white"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="card-description mb-6 custom-gd:mb-7 text-custom-gd custom-gd:text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>

        {Button && (
          <a
            href={btnHref || "#"}
            className="card-button inline-block rounded-full border border-blue-500 bg-blue-500 px-5 py-2 custom-gd:px-7 custom-gd:py-2.5 text-custom-gd custom-gd:text-base font-medium text-white transition duration-300 hover:bg-blue-600 hover:border-blue-600 dark:text-dark-6"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleCard;
