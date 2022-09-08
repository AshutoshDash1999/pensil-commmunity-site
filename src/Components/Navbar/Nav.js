import React from "react";
import { Button, Input } from "@material-tailwind/react";

export default function Nav() {
  return (
    <nav class="bg-white px-2 sm:px-4 py-2.5 shadow-md fixed w-full z-20 top-0 left-0">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center space-x-2">
          <img src="./logo.png" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0046ff] to-black self-center text-4xl font-semibold whitespace-nowrap">
            Community
          </span>
        </a>
        <div class="flex md:order-2">
          <Button>Let's get started</Button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <div className="w-72">
                <Input label="Search Your Communities" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
