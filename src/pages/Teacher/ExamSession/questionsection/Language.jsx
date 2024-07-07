import React from 'react';
import { Breadcrumb, Button, Checkbox } from 'flowbite-react';
import { Link } from 'react-router-dom';

const languages = [
  { name: 'ADA', timeLimit: '3 s', memoryLimit: '512 MB', selected: true },
  { name: 'Babel JS', timeLimit: '10 s', memoryLimit: '1024 MB', selected: false },
  { name: 'Bash', timeLimit: '1 s', memoryLimit: '512 MB', selected: true },
  { name: 'Brainf**k', timeLimit: '2 s', memoryLimit: '512 MB', selected: false },
  { name: 'C', timeLimit: '2 s', memoryLimit: '512 MB', selected: true },
  { name: 'C Clang', timeLimit: '2 s', memoryLimit: '512 MB', selected: false },
  { name: 'C#', timeLimit: '3 s', memoryLimit: '512 MB', selected: true },
  { name: 'C++', timeLimit: '2 s', memoryLimit: '512 MB', selected: true },
  { name: 'C++ Clang', timeLimit: '2 s', memoryLimit: '512 MB', selected: false },
  { name: 'C++14', timeLimit: '2 s', memoryLimit: '512 MB', selected: true },
  { name: 'C++20', timeLimit: '2 s', memoryLimit: '512 MB', selected: true },
  { name: 'COBOL', timeLimit: '5 s', memoryLimit: '512 MB', selected: false },
  { name: 'Clojure', timeLimit: '8 s', memoryLimit: '512 MB', selected: true },
  { name: 'CoffeeScript', timeLimit: '10 s', memoryLimit: '1024 MB', selected: true },
  { name: 'Common Lisp (SBCL)', timeLimit: '10 s', memoryLimit: '512 MB', selected: true },
];

const Language = () => {
  const [selectedLanguages, setSelectedLanguages] = React.useState(
    languages.reduce((acc, lang) => {
      acc[lang.name] = lang.selected;
      return acc;
    }, {})
  );

  const handleSelectAll = () => {
    const newSelection = { ...selectedLanguages };
    Object.keys(newSelection).forEach(key => {
      newSelection[key] = true;
    });
    setSelectedLanguages(newSelection);
  };

  const handleUnselectAll = () => {
    const newSelection = { ...selectedLanguages };
    Object.keys(newSelection).forEach(key => {
      newSelection[key] = false;
    });
    setSelectedLanguages(newSelection);
  };

  const handleCheckboxChange = (language) => {
    setSelectedLanguages(prevState => ({
      ...prevState,
      [language]: !prevState[language],
    }));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
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
          <Breadcrumb.Item current>
            Language
          </Breadcrumb.Item>
        </Breadcrumb>
        <p className="text-gray-400 italic mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Button color="light" onClick={handleUnselectAll}>Unselect All Languages</Button>
          <Button color="dark" onClick={handleSelectAll}>Select All Languages</Button>
        </div>
        <div className=" rounded-lg border border-gray-300 dark:border-gray-700 overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-x-auto">
            <thead className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
              <tr>
                <th className="px-4 py-2 text-left">Select</th>
                <th className="px-4 py-2 text-left">Language</th>
                <th className="px-4 py-2 text-left">Time Limit (seconds)</th>
                <th className="px-4 py-2 text-left">Memory Limit (MB)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {languages.map((lang, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <Checkbox
                      checked={selectedLanguages[lang.name]}
                      onChange={() => handleCheckboxChange(lang.name)}
                    />
                  </td>
                  <td className="px-4 py-2">{lang.name}</td>
                  <td className="px-4 py-2">{lang.timeLimit}</td>
                  <td className="px-4 py-2">{lang.memoryLimit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <Button color="light">Preview Challenge</Button>
          <Link to={'/questionbaselayout/setting'}><Button color="dark">Save Changes</Button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Language;
