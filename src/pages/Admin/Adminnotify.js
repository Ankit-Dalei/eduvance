import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronRight, faAngleLeft, faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { messages } from '../../Data/emaildata';
import { Link, useNavigate } from 'react-router-dom';


const Adminnotify = () => {
    const [searchInitial, setSearchInitial] = useState({ username: '' });
    const [filteredData, setFilteredData] = useState(messages);
    const totalEntries = filteredData.length;
    const [initialIndex, setInitialIndex] = useState(0);
    const [initialIndexPre, setInitialIndexPre] = useState(0);
    const [finalIndex, setFinalIndex] = useState(10);
    const [finalIndexPre, setFinalIndexPre] = useState(0);
    const [count,setCount]=useState(1)
    const navigate=useNavigate()
  
    const dataArray = filteredData.slice(initialIndex, finalIndex);
    const lastIndex = messages[filteredData.length - 1]?.id;
    const handlePrevious = () => {
      if (initialIndex > 0) {
        if (initialIndex + 10 > lastIndex) {
          setInitialIndex(initialIndexPre);
          setFinalIndex(finalIndexPre);
          setCount(count-1)
        } else {
          setInitialIndex(initialIndex - 10);
          setFinalIndex(finalIndex - 10);
          setCount(count-1)
  
        }
      }
    };
    const handleNext = () => {
      if (finalIndex < totalEntries) {
        if (finalIndex + 10 > lastIndex) {
          setFinalIndexPre(finalIndex);
          setInitialIndexPre(initialIndex);
          setFinalIndex(lastIndex);
          setInitialIndex(initialIndex + 10);
          setCount(count+1)
        } else {
          setInitialIndex(initialIndex + 10);
          setFinalIndex(finalIndex + 10);
          setCount(count+1)
        }
      }
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSearchInitial((prev) => ({ ...prev, [name]: value }));
  
      const filteredResults = messages.filter((course) => {
        const Susername = course.sender.toLowerCase();
        const Semail = course.heading.toLowerCase();
        return Susername.includes(value.toLowerCase()) || Semail.includes(value.toLowerCase());
      });
  
      setFilteredData(filteredResults);
      setInitialIndex(0);
      setFinalIndex(10);
      setCount(1)
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const handelClick=(item)=>{
      navigate('/admin/notificationDisplay', { state: { message: item } })
    }
  
    return (
      <>
        <div className={`lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center`}>
          <div className={`lg:h-[95%] lg:w-[95%] lg:flex lg:justify-between lg:items-center lg:flex-col`}>
            <div className="lg:h-[10%] lg:w-[100%] lg:flex lg:justify-between lg:items-center">
                <form className="lg:bg-slate-300 lg:h-[35px] lg:w-[350px] lg:flex lg:justify-between lg:items-center lg:rounded-3xl lg:p-2" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search Here"
                    name="username"
                    onChange={handleChange}
                    value={searchInitial.username}
                    className="lg:bg-slate-300 lg:h-[25px] lg:w-[90%] lg:rounded-3xl lg:p-3 lg:border-none lg:outline-slate-300"
                  />
                  <button className="lg:flex lg:justify-center lg:items-center lg:w-[10%] lg:outline-none lg:border-none">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
                <div className={`lg:h-[100%] lg:w-[450px] lg:flex lg:justify-end lg:items-center`}>
                  <div className="lg:h-[100%] lg:w-[50%] lg:flex lg:justify-end lg:items-center">
                    <p>{initialIndex + 1} - {Math.min(finalIndex, totalEntries)} of {totalEntries}</p>
                    <div className="lg:ml-6 lg:flex">
                      <button onClick={handlePrevious} disabled={initialIndex === 0}>
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        className="hover:text-slate-300 cursor-pointer lg:text-xl"
                      />
                      </button >
                      <div className={`lg:ml-3`}>{count}</div>
                      <button onClick={handleNext} disabled={finalIndex >= totalEntries}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="lg:ml-3 hover:text-slate-300 cursor-pointer lg:text-xl"
                      />
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            <div className={`lg:h-[89%] lg:w-[100%] lg:relative lg:flex lg:justify-center lg:items-center`}>
              <div className={`lg:h-[100%] lg:w-[100%] lg:flex lg:justify-start lg:items-center lg:flex-col lg:gap-1`}>
                {totalEntries > 0 ? (
                    dataArray.map((item) => (
                      <div className="lg:flex lg:justify-center lg:items-center lg:bg-gray-100 p-4 lg:h-[9.1%] lg:w-full lg:border-b lg:border-gray-200 lg:hover:bg-gray-400 lg:hover:border-2 lg:cursor-pointer " onClick={()=>handelClick(item)}>
                        <div className="lg:flex lg:items-center lg:flex-grow">
                          <div className="lg:w-[15%] lg:text-gray-600 lg:font-semibold">{item.sender}</div>
                          <div className="lg:ml-4 lg:text-gray-800">{item.heading}</div>
                        </div>
                        <div className=" lg:text-gray-600">{item.time}</div>
                      </div>
                    ))
                  ) :<div className={`lg:flex lg:justify-center lg:items-center lg:h-full lg:w-full lg:font-mono lg:text-2xlxl`}>no data found</div> }
              </div>
              <Link to={`/admin/message`}>
                <button className={`lg:absolute lg:bg-pink-500 lg:p-2 lg:right-2 lg:bottom-5 lg:rounded-full lg:w-[130px] lg:text-gray-200 lg:font-semibold hover:lg:bg-slate-600 lg:flex lg:justify-center lg:items-center lg:gap-3`}><FontAwesomeIcon icon={faPenFancy} size='ls'/>
                  Compose
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
}

export default Adminnotify
