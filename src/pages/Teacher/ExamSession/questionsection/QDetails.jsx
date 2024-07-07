import React from 'react';
import { Link } from 'react-router-dom';
import GlobalEditor from '../GlobalEditor';
import { FiArrowLeft } from 'react-icons/fi';
import { Breadcrumb } from 'flowbite-react';

const QDetails = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="flex items-center mb-4">
        <Breadcrumb aria-label="breadcrumb" className="flex items-center text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500">
          <Breadcrumb.Item>
            <Link to="/questionform" className="flex items-center">
              <FiArrowLeft className="mr-1" />
              Back to Question form
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <p className="text-gray-400 italic mb-6">This is the basic information that describes your challenge.</p>
      <form>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="challenge-name" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Language</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-[30%] p-2.5">
            <option selected>Choose Language</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="challenge-difficulty" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Challenge difficulty</label>
          <select id="challenge-difficulty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-[30%] p-2.5">
            <option selected>Medium</option>
            <option value="Hard">Hard</option>
            <option value="Easy">Easy</option>
          </select>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="challenge-name" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Challenge Name</label>
          <input 
            type="text" 
            id="challenge-name" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-3/4 p-2.5" 
          />
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
  <label htmlFor="challenge-slug" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Challenge Slug</label>
  <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full lg:w-3/4">
   
    <p className="text-gray-400 italic mb-0 lg:mb-0 lg:ml-2">https://www.hackerrank.com/.../</p>
    <input 
      type="text" 
      id="challenge-slug" 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-1/5 p-1" 
    />
  </div>
</div>

        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="description" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Description</label>
          <div className="w-full lg:w-3/4">
            <textarea 
              id="description" 
              rows="2" 
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Write your description here..."
            ></textarea>
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="problem-statement" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Problem Statement</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="input-format" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Input Format</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="constraints" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Constraints</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="output-format" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Output Format</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="tags" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Enter the tag</label>
          <div className="w-full lg:w-3/4">
            <textarea 
              id="tags" 
              rows="2" 
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Write your tags here..."
            ></textarea>
          </div>
        </div>

        <div className="text-center lg:ml-32">
          <Link to={'/questionbaselayout/moderate'}>
            <button 
              type="submit" 
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full lg:w-auto mr-2"
            >
              Submit Here!!
            </button>
          </Link>
          
          <button 
            type="reset" 
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full lg:w-auto"
          >
            Reset Here!!
          </button>
        </div>
      </form>
    </div>
  );
}

export default QDetails;
