import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center absolute left-0 w-16 h-full bg-white border-solid border-r border-gray-50 pt-6">
      <div>
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 1.5H24V15h-2.742L15.199 4.5l-1.207 2.074a8.57 8.57 0 00-1.535-1.781A8.936 8.936 0 0010.5 3.48V1.5zm2.402 6.973l-5.484 9.492c-.227.023-.45.035-.668.035a6.677 6.677 0 01-4.77-1.98 6.952 6.952 0 01-1.44-2.145A6.681 6.681 0 010 11.25a6.677 6.677 0 011.98-4.77 6.952 6.952 0 012.145-1.44 6.681 6.681 0 014.547-.259 6.987 6.987 0 011.734.797 6.629 6.629 0 012.496 2.895zM6.972 22.5L15.2 8.25l8.227 14.25H6.973z"
            fill="#FFCF00"
          />
        </svg>
      </div>
      <div className="mt-6">
        <div className="mb-5 bg-blue-900 text-white p-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              stroke="#f2f2f2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12h6v10"
              stroke="#f2f2f2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mb-5 p-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12h6v10"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="p-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12h6v10"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
