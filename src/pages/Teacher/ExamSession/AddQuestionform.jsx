// src/components/AddQuestionForm.js
import React, { useRef } from 'react';
import Layout from '../Layout';
import GlobalEditor from './GlobalEditor';

export default function AddQuestionForm() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <Layout>
      <div className="w-[100%] mx-auto xl:ml-40">
        <h1 className="lg:text-3xl text-lg leading-5 mb-4">Add Question</h1>
        <p className="text-gray-400 italic mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <form action="">
          <div className="mb-6 flex flex-col lg:flex-row gap-7 items-center">
            <label htmlFor="default-input" className="block mb-2 font-medium text-gray-900 dark:text-white text-lg">Challenge Name</label>
            <input type="text" id="default-input" className="lg:relative left-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-[60%] p-2.5" />
          </div>
          <div className="mb-6 flex flex-col lg:flex-row gap-7 items-center">
            <label htmlFor="default-input" className="block mb-2 font-medium text-gray-900 dark:text-white text-lg">Description</label>
            <textarea id="message" rows="4" className="lg:relative left-16 resize-none block p-2.5 w-full lg:w-[60%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
          </div>
          <div className="mb-6 flex flex-col lg:flex-row gap-7">
            <label htmlFor="default-input" className="block mb-2 font-medium text-gray-900 dark:text-white text-lg">Problem statement</label>
            <div className="w-full lg:w-[60%]">
              <GlobalEditor
                initialValue="<p>This is the initial content of the editor.</p>"
                onEditorChange={(content) => console.log(content)}
              />
            </div>
          </div>
          <div className="text-center lg:relative right-[6%]">
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full md:w-auto text-center">
              Submit Here!!
            </button>
            <button type="reset" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full md:w-auto">Reset here!!</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
