import React from 'react'

const AddQuestion = () => {
    
const contestData = [
    {
      "contestName": "Code Championship",
      "contestOwner": "John Doe",
      "startDate": "2024-07-01",
      "signup": "Open",
      "participants": 50
    },
    {
      "contestName": "Hackathon",
      "contestOwner": "Jane Smith",
      "startDate": "2024-07-05",
      "signup": "Closed",
      "participants": 75
    },
    {
      "contestName": "AI Contest",
      "contestOwner": "Alice Johnson",
      "startDate": "2024-07-10",
      "signup": "Open",
      "participants": 100
    },
    {
      "contestName": "Data Science Challenge",
      "contestOwner": "Michael Brown",
      "startDate": "2024-07-15",
      "signup": "Open",
      "participants": 80
    },
    {
      "contestName": "Cyber Security Contest",
      "contestOwner": "Sarah Wilson",
      "startDate": "2024-07-20",
      "signup": "Closed",
      "participants": 60
    },
    {
      "contestName": "Web Development Contest",
      "contestOwner": "David Lee",
      "startDate": "2024-07-25",
      "signup": "Open",
      "participants": 90
    },
    {
      "contestName": "Mobile App Contest",
      "contestOwner": "Emily Clark",
      "startDate": "2024-07-30",
      "signup": "Open",
      "participants": 70
    },
  
  ];
  return (
    <div>
         <div className='flex justify-between w-full items-center mb-4'>
          <div className="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Dark alert!</span> Change a few things up and try submitting again.
            </div>
          </div>
          <div>
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Create Question
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto rounded-2xl text-center">
          <table className="w-full text-sm rtl:text-right text-gray-500 bg-gray-800 text-center">
            <thead className="text-xs text-white uppercase bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3">Contest Name</th>
                <th scope="col" className="px-6 py-3">Contest Owner</th>
                <th scope="col" className="px-6 py-3">Start Date</th>
                <th scope="col" className="px-6 py-3">Signup</th>
                <th scope="col" className="px-6 py-3">Participants</th>
              </tr>
            </thead>
            <tbody className='bg-gray-800'>
              {contestData.map((contest, index) => (
                <tr key={index} className="border-b bg-gray-800 text-white">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">{contest.contestName}</th>
                  <td className="px-6 py-4">{contest.contestOwner}</td>
                  <td className="px-6 py-4">{contest.startDate}</td>
                  <td className="px-6 py-4">{contest.signup}</td>
                  <td className="px-6 py-4">{contest.participants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default AddQuestion