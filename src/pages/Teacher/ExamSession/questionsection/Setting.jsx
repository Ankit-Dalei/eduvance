import React from 'react';
import { Checkbox, Button, Breadcrumb } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-[80%] mx-auto ">
         <Breadcrumb aria-label="breadcrumb" className="mb-4">
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
        <Breadcrumb.Item current>
          Settings
        </Breadcrumb.Item>
      </Breadcrumb>
      <p className="text-gray-400 italic mb-6">Set various challenge flags and parameters.</p>

      
      <div className="mb-4">
        <Checkbox id="precisionCheck" />
        <label htmlFor="precisionCheck" className="ml-2">Enable Precision Check</label>
        <div className="ml-6 mt-1 text-gray-600 text-sm">
          There should be at max one number per line in output file and this can be a floating point value.
        </div>
      </div>

      <div className="mb-4">
        <Checkbox id="disableCompileTest" />
        <label htmlFor="disableCompileTest" className="ml-2">Disable Compile & Test</label>
      </div>

      <div className="mb-4">
        <Checkbox id="disableCustomTestcase" />
        <label htmlFor="disableCustomTestcase" className="ml-2">Disable Custom Testcase</label>
      </div>

      <div className="mb-4">
        <Checkbox id="disableSubmissions" />
        <label htmlFor="disableSubmissions" className="ml-2">Disable Submissions</label>
        <div className="ml-6 mt-1 text-gray-600 text-sm">
          Don't accept any user submissions for this challenge.
        </div>
      </div>

      <div className="mb-4">
        <Checkbox id="publicTestcase" />
        <label htmlFor="publicTestcase" className="ml-2">Public Testcase</label>
        <div className="ml-6 mt-1 text-gray-600 text-sm">
          Make testcases public after the contest ends.
        </div>
      </div>

      <div className="mb-4">
        <Checkbox id="publicSolutions" />
        <label htmlFor="publicSolutions" className="ml-2">Public Solutions</label>
        <div className="ml-6 mt-1 text-gray-600 text-sm">
          Make solutions public after the contest ends.
        </div>
      </div>

      <div className="mb-4">
        <Checkbox id="restrictedForum" />
        <label htmlFor="restrictedForum" className="ml-2">Restricted Forum</label>
        <div className="ml-6 mt-1 text-gray-600 text-sm">
          Participants can post questions but can't post answers. Only contest moderators will have permission to post answers. This configuration should also be set for individual challenge(s) of the contest.
        </div>
      </div>

      <div className="flex justify-end">
      <Link to={'/questionbaselayout/editorial'}><Button color="dark">Save Changes</Button></Link> 
      </div>
    </div>
  );
};

export default Setting;
