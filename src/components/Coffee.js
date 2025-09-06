import React from "react";

const BuyMeCoffee = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="max-w-xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-anton text-gray-900 mb-4 tracking-tight">
          Love what I do? ☕
        </h2>
        <p className="text-gray-700 mb-8 text-base sm:text-lg">
          Support my work and fuel creativity with a cup of coffee.  
          Every contribution helps me keep building awesome projects!
        </p>

        {/* Buy me a coffee button */}
        <a
          href="https://www.buymeacoffee.com/yourusername" // replace with your link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-300 text-black font-bold px-8 py-4 
          rounded-lg border-4 border-black shadow-[6px_6px_0px_0px_#000000] 
          hover:shadow-[10px_10px_0px_0px_#000000] active:shadow-[2px_2px_0px_0px_#000000] 
          hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] 
          transition-all duration-200 text-lg sm:text-xl"
        >
          ☕ Buy Me a Coffee
        </a>
      </div>
    </div>
  );
};

export default BuyMeCoffee;
