import React from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Layout from '../Layout';

export default function AddQuestionform() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <Layout>
        <div className='w-[100%] mx-auto xl:ml-40'>
      <h1 className='text-3xl leading-5 mb-4'>Add Question</h1>
      <p className='text-gray-400 italic mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
          <Editor
            apiKey='695bhx4ub7gr6sm0dpjrx7dp4copd1epv0m1oopvn61co8m3'
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 300,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
        </div>
        
      </div>
      <div className='text-center mr-48'>
      <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  w-full md:w-auto  text-center">Submit Here!!</button>

      </div>
      </form>

      </div>
    </Layout>
  );
}
