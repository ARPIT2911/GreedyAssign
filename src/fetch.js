import React,{useEffect,useRef,useState} from 'react';
import {DatePicker} from 'antd';
import format from 'date-fns/format';
import 'antd/dist/reset.css';
const {RangePicker} =DatePicker;
function Dat() {
    const[start,setstart] =useState('');
    
    const[end,setend] =useState('');
   console.log(start);
   console.log(end);
    const url=`http://go-dev.greedygame.com/v3/dummy/report?startDate=${start}&endDate=${end}`;
  
    async function fetchdata(){
        const response= await fetch(url);
        const jsondata= await response.json();

        // console.log(jsondata);
    }
    useEffect(() => {
        fetchdata();
    }, []);
      return (
        <div>
            <div>
                <RangePicker
                onChange={(values)=>{
                    setstart(values[0]);
                    setend(values[1]);
                }}
                />
            </div>
         <button onClick={fetchdata}>Apply</button>
        </div>
      );
}

export default Dat;
