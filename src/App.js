import "./App.css";

import json from "../src/service.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(json);
  const [popup, setPopup] = useState(false);
  const [popData, setPopData] = useState(null);

  console.log(data);

  return (
    <div className="grid md:grid-cols-2 gap-4 grid-cols-1 p-2 ">
      {data.map((data) => {
        return (
          <div className="border rounded-lg shadow-md ">
            <div className="w-full fill-x h-48px rounded-tl-8 rounded-tr-8 p-3 md:p-4 bg-[#FCF4E9] ">
              <p className=" text-20 font-semibold leading-24 ">
                {data.service}
              </p>
            </div>
            <div className="p-4">
              <div>
                {data.includes === null && (
                  <p className="w-full">{data.description}</p>
                )}

                {data.includes != null && (
                  <ol className="list-decimal pl-5">
                    {data.includes.slice(0, 4).map((includes) => {
                      return <li>{includes}</li>;
                    })}
                  </ol>
                )}
              </div>

              <button
                className="p-2 rounded-md border-[#54545433] border-2 mt-2"
                onClick={() => {
                  setPopup(true);
                  setPopData(data);

                  console.log(data, "data");
                }}
              >
                Details
              </button>
            </div>

            {popup && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 p-10">
                <div className="bg-white  rounded-lg shadow-lg overflow-y-auto max-h-full">
                  <div className="w-full h-48px p-3  bg-[#FCF4E9] mb-2">
                    <p className="text-20 font-semibold leading-24">
                      {popData?.service}
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-lg mb-4">{popData?.description}</p>
                    {popData?.includes && (
                      <ol className="list-decimal pl-5">
                        {popData.includes.map((include, index) => {
                          return <li key={index}>{include}</li>;
                        })}
                      </ol>
                    )}
                    <div className="flex justify-between">
                      <button
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 mt-2"
                        onClick={() => {
                          setPopup(false);
                          setPopData(null);
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
