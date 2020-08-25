import React from "react";
const useStyles = (theme) => ({
  card: {
    width: "270px",
    height: "60px",
  },
});
export default function Card() {
  const classes = useStyles();
  return (
    <div>
      <div className="flex  pt-6">
        <div className="mr-8">
          <div
            className="bg-white flex justify-between items-center font-semibold px-3 border-l-2 border-blue-600 border-solid shadow-md "
            style={{ width: "270px", height: "60px" }}
          >
            <h1>BackLog</h1>
            <span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13a1 1 0 100-2 1 1 0 000 2zM19 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"
                  stroke="#7B828C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div>
            <div
              className="bg-white px-3 py-1 mt-4 shadow-lg border"
              style={{ width: "270px", height: "95px" }}
            >
              <div className="flex  items-center text-xs text-gray-900">
                <p>Sprints and backlogs </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="text-xs text-gray-900"
                >
                  <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
                </svg>
                <p>Backlogs</p>
              </div>
              <div>
                <h1 className="font-bold mb-2">Fix Over</h1>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-3"
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.333 8.75s.584-.583 2.334-.583 2.916 1.166 4.666 1.166c1.75 0 2.334-.583 2.334-.583v-7s-.584.583-2.334.583-2.916-1.166-4.666-1.166c-1.75 0-2.334.583-2.334.583v7zM2.333 12.833V8.75"
                    stroke="#FFCF00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-red-500">09/15/20</p>
              </div>
            </div>
            <div
              className="bg-white px-3 py-1 mt-4 shadow-lg border"
              style={{ width: "270px", height: "95px" }}
            >
              <div className="flex  items-center text-xs text-gray-900">
                <p>Sprints and backlogs </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
                </svg>
                <p>Backlogs</p>
              </div>
              <div>
                <h1 className="font-bold mb-2">Fix Over</h1>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-3"
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.333 8.75s.584-.583 2.334-.583 2.916 1.166 4.666 1.166c1.75 0 2.334-.583 2.334-.583v-7s-.584.583-2.334.583-2.916-1.166-4.666-1.166c-1.75 0-2.334.583-2.334.583v7zM2.333 12.833V8.75"
                    stroke="#FFCF00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-red-500">09/15/20</p>
              </div>
            </div>
            <div className="mt-8 text-gray-900 text-sm"> + New Task</div>
          </div>
        </div>
        <div>
          <div
            className="bg-white flex justify-between items-center font-semibold px-3 border-l-2 border-blue-600 border-solid shadow-md mr-8"
            style={{ width: "270px", height: "60px" }}
          >
            <h1>BackLog</h1>
            <span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13a1 1 0 100-2 1 1 0 000 2zM19 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"
                  stroke="#7B828C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div>
            <div
              className="bg-white px-3 py-1 mt-4 shadow-lg border"
              style={{ width: "270px", height: "95px" }}
            >
              <div className="flex  items-center text-xs text-gray-900">
                <p>Sprints and backlogs </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="text-xs text-gray-900"
                >
                  <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
                </svg>
                <p>Backlogs</p>
              </div>
              <div>
                <h1 className="font-bold mb-2">Fix Over</h1>
              </div>
              <div>
                <p className="text-red-500">09/15/20</p>
              </div>
            </div>
            <div
              className="bg-white px-3 py-1 mt-4 shadow-lg border"
              style={{ width: "270px", height: "95px" }}
            >
              <div className="flex  items-center text-xs text-gray-900">
                <p>Sprints and backlogs </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
                </svg>
                <p>Backlogs</p>
              </div>
              <div>
                <h1 className="font-bold mb-2">Fix Over</h1>
              </div>
              <div>
                <p className="text-red-500">09/15/20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
