import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalEditor from "./GlobalEditor";

const Details = () => {
  const location = useLocation();
  const [contestName, setContestName] = useState("Coding Exam");
  const [startTime, setStartTime] = useState("08:05");
  const [endTime, setEndTime] = useState("08:15");
  const [organizationType, setOrganizationType] = useState("CUTM");
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contestName || !startTime || !endTime || !organizationType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setContestName("");
    setStartTime("");
    setEndTime("");
    setOrganizationType("");
  };

  let backLink = "/contestform";

  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:ml-40">
      <div className="flex items-center mb-4 mt-3">
        <Link
          to={backLink}
          className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
        >
          <FiArrowLeft className="mr-1" />
          Back to ContestForm
        </Link>
      </div>
      <h1 className="lg:text-3xl text-lg leading-5 mb-1">Bikash Malu</h1>
      <a href="" className='text-blue-500 underline mb-3'>wwww.hackerrank.com/bikash-malu</a>
      <h1 className="lg:text-3xl text-lg leading-5 mb-4">Contest Details</h1>
      <p className="text-gray-400 italic mb-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. <br />
        Facilis ratione consequuntur ea, consequatur deleniti accusamus! Error
        quae culpa assumenda eaque <br />
        eveniet soluta esse, facere eum odio non. Dolore, repellendus vitae?
      </p>

      <form onSubmit={handleFormSubmit}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="contest_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contest Name
            </label>
            <input
              type="text"
              id="contest_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5"
              placeholder="John"
              value={contestName}
              onChange={(e) => setContestName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="contest_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contest Url
            </label>
            <input
              disabled
              type="text"
              id="contest_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5"
              placeholder="John"
              value={"https://www.youtube.com/"}
              onChange={(e) => setContestName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="start_time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Time
            </label>
            <div className="flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-3">
              <input
                type="text"
                id="start_time"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                placeholder="Enter Start time.."
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <span>at</span>
              <input
                type="time"
                id="start_time_at"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="end_time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              End Time
            </label>
            <div className="flex flex-wrap items-center space-y-2 md:space-y-0 md:space-x-3">
              <input
                type="text"
                id="end_time"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                placeholder="Enter End time.."
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
              <span>at</span>
              <input
                type="time"
                id="end_time_at"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="no_end_time"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="no_end_time"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              The contest has no end time.
            </label>
          </div>

          <div>
            <label
              htmlFor="organization_type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Organization Type
            </label>
            <select
              id="organization_type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5 mb-3"
              value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
            >
              <option disabled>Choose an Organization</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="contest_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="contest_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/2 p-2.5"
              placeholder="John"
              value={organizationType}
              onChange={(e) => setContestName(e.target.value)}
            />
          </div>
        </div>
        <hr className="mt-4 w-[100%]" />
        <div className="space-y-4 mt-3">
          <h1 className="lg:text-3xl text-lg leading-5 mb-4">
            Landing Page Customization
          </h1>
          <p className="text-gray-400 italic mb-3">
            Fill out this information to customize your contest landing page.
          </p>
          <div>
            <label
              htmlFor="contest_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Background Image :
            </label>

            <div class="flex items-center w-full">
              <label
                for="dropzone-file"
                class="w-[70%] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Tagline :
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-[70%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Write your thoughts here..."
            ></textarea>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Description :
            </label>
            <div className="w-full lg:w-[70%]">
              <GlobalEditor
                initialValue="<p>This is the initial content of the editor.</p>"
                onEditorChange={(content) => console.log(content)}
              />
            </div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Prizes :
            </label>
            <div className="w-full lg:w-[70%]">
              <GlobalEditor
                initialValue="<p>This is the initial content of the editor.</p>"
                onEditorChange={(content) => console.log(content)}
              />
            </div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Rules:
            </label>
            <div className="w-full lg:w-[70%]">
              <GlobalEditor
                initialValue="<p>This is the initial content of the editor.</p>"
                onEditorChange={(content) => console.log(content)}
              />
            </div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
            Scoring :
            </label>
            <div className="w-full lg:w-[70%]">
              <GlobalEditor
                initialValue="<p>This is the initial content of the editor.</p>"
                onEditorChange={(content) => console.log(content)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center w-full md:w-[70%] mt-3 space-x-2">
  <div className="w-full md:w-auto mb-4 md:mb-0">
    <Link to="/teacher/add-question">
      <button
        type="button"
        className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-[1rem] py-2.5 text-center mb-2 ${
          location.pathname === '/teacher/add-question' ? 'bg-gray-900 text-white' : ''
        } w-full md:w-auto`}
      >
        Preview Landing Page
      </button>
    </Link>
    <Link to="/teacher/add-contest">
      <button
        type="button"
        className={`ml-1 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-[1rem] py-2.5 text-center mb-2 ${
          location.pathname === '/teacher/add-contest' ? 'bg-gray-900 text-white' : ''
        } w-full md:w-auto`}
      >
        Preview Challenge Page
      </button>
    </Link>
  </div>
  <div>
  <button type="reset" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset Here!!</button>
  <Link to={'/baselayout/challenge'}>
  <button
    type="submit"
    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full md:w-auto text-center"
  >
    Save Changes
  </button>
  </Link>
  </div>



 
</div>

      
      </form>
    </div>
  );
};

export default Details;
