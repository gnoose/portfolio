import React from "react";
import userData from "@constants/data";
import Contacts from '@components/Contacts';

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-900">
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Lin Hong. All Rights Reserved.</p>
          </div>
          <div>
            {/* Support me by keeping this in the footer, please. :) */}
            <p>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="/"
                >
                  Lin Hong
                </a>
              </div>
            </p>
          </div>
          <div className="space-x-4 flex flex-row items-center">
            <Contacts/>
          </div>
        </div>
      </div>
    </div>
  );
}
