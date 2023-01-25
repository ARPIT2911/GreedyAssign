import React,{useEffect,useRef,useState} from 'react';
import {DatePicker} from 'antd';
import format from 'date-fns/format';
import 'antd/dist/reset.css';
const {RangePicker} =DatePicker;
function Dat() {
    const[start,setstart] =useState(new Date());
    
    const[end,setend] =useState(new Date());
    
  //  console.log(start.getFullYear() + '-' + 0  + '-' + start.getDate());
  //  console.log(end);

   
   
    // const url=`http://go-dev.greedygame.com/v3/dummy/report?startDate=${start.getFullYear() + '-' + 0  + '-' + start.getDate()}&endDate=${end.getFullYear() + '-' + 0  + '-' + end.getDate()}`;
  
    async function fetchdata(start, end){
     
      var mons = start.getMonth() + 1;
   var mone = end.getMonth() + 1;

        const response= await fetch(`http://go-dev.greedygame.com/v3/dummy/report?startDate=${start.getFullYear() + '-' + 0 + mons + '-' + start.getDate()}&endDate=${end.getFullYear() + '-' + 0 + mone + '-' + end.getDate()}`);
        const jsondata= await response.json();


        console.log(jsondata);
    }
    useEffect(() => {
        fetchdata();
    }, []);
      return (
        <div>
            <div>
                <RangePicker
                dateFormat = "dd/mm/yyyy"
                onChange={(values)=>{
                    setstart(new Date(values[0]));
                    setend(new Date(values[1]));
                }}
                />
            </div>
         <button onClick={() => {fetchdata(start,end)}}>Apply</button>
        </div>
      );
}

export default Dat;
