import React from 'react';
import { Link } from 'react-router-dom';
import GlobalEditor from '../GlobalEditor';
import { FiArrowLeft } from 'react-icons/fi';
import { Breadcrumb } from 'flowbite-react';

const Editoral = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="flex items-center mb-4">
      <Breadcrumb aria-label="breadcrumb" className="mb-4 mt-3">
        <Breadcrumb.Item href="/questionbaselayout">
          Question form
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/questionbaselayout/details">
          Details
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/questionbaselayout/moderate">
          Moderate
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/questionbaselayout/testcase">
          Test Case
        </Breadcrumb.Item>
     
        <Breadcrumb.Item href='/questionbaselayout/codesube'>
          Code Stubs
        </Breadcrumb.Item>
        <Breadcrumb.Item href='/questionbaselayout/language'>
          Language
        </Breadcrumb.Item>
        <Breadcrumb.Item  href='/questionbaselayout/setting'>
          Settings
        </Breadcrumb.Item>
        <Breadcrumb.Item current>
          Editorial
        </Breadcrumb.Item>
      </Breadcrumb>
      </div>

      <p className="text-gray-400 italic mb-6">This is the basic information that describes your challenge.</p>
      <form>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="required-knowledge" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Required Knowledge</label>
          <input 
            type="text" 
            id="required-knowledge" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-3/4 p-2.5" 
          />
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="time-complexity" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Time Complexity</label>
          <input 
            type="text" 
            id="time-complexity" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-3/4 p-2.5" 
          />
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="editorialist" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Editorialist</label>
          <input 
            type="text" 
            id="editorialist" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-3/4 p-2.5" 
          />
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-2">
          <label htmlFor="partial-editorial" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Partial Editorial (Only Hints)</label>
          <input 
            type="checkbox" 
            id="partial-editorial" 
            className="bg-gray-50 border border-gray-300" 
          />
        </div>

        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="approach" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Approach</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="problem-setter" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Problem Setter</label>
          <div className="w-full lg:w-3/4">
            <textarea 
              id="problem-setter" 
              rows="2" 
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Write your description here..."
            ></textarea>
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="setter-code" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Setter's Code</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="problem-tester" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Problem Tester</label>
          <div className="w-full lg:w-3/4">
            <textarea 
              id="problem-tester" 
              rows="2" 
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Write your description here..."
            ></textarea>
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start gap-2">
          <label htmlFor="tester-code" className="block font-medium text-gray-900 dark:text-white lg:w-1/6">Tester's Code</label>
          <div className="w-full lg:w-3/4">
            <GlobalEditor
              initialValue="<p>This is the initial content of the editor.</p>"
              onEditorChange={(content) => console.log(content)}
            />
          </div>
        </div>

        <div className="text-center lg:ml-32">
          <button 
            type="reset" 
            className="mx-1 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-full lg:w-auto"
          >
            Preview Challenges
          </button>
          <Link to={'/questionbaselayout/custom'}>
            <button 
              type="submit" 
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full lg:w-auto mr-2"
            >
              Submit Here!!
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Editoral;
