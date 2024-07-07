import React from 'react';
import { Breadcrumb, Button, Checkbox, Select, Textarea } from 'flowbite-react';

const CustomChecker = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
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
        <Breadcrumb.Item href='/questionbaselayout/editorial'>
          Editorial
        </Breadcrumb.Item>
        <Breadcrumb.Item current>
          Custom Checker
        </Breadcrumb.Item>
      </Breadcrumb>

        <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <p className="text-gray-400 italic mb-6">Add custom checker for approximation challenges, magic-lines challenges or codegolf.<span className='text-blue-700 underline cursor-pointer'> Learn more</span></p>
          <div className="mb-6">
           Enabel Custom Checker <Checkbox id="enable-custom-checker" label="Enable Custom Checker" />
          </div>

          <div className="mb-6">
            <label htmlFor="code-editor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Custom Checker Code:
            </label>
            <div className="relative">
              <Textarea
                id="code-editor"
                rows="15"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="# Enter your custom checker code here..."
              ></Textarea>
              <div className="absolute top-2 right-2">
                <Select>
                  <option value="python2">Python 2</option>
                  <option value="python3">Python 3</option>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4 space-x-2">
            <Button color="light">Preview Challenge</Button>
            <Button color="dark">Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomChecker;
