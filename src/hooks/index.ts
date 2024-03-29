import { useState,useRef } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import { useInterval } from 'ahooks';

dayjs.extend(duration);

const tool= (time)=>{
    const duration =dayjs.duration(time, 'seconds');
    const hours = duration.hours();
    const minutes = duration.minutes();
    const second = duration.seconds();
    return {
        hours:hours<10?`0${hours}`:hours,
        minutes:minutes<10?`0${minutes}`:minutes,
        second:second<10?`0${second}`:second
    }
}

export const useTime=(time)=>{
    const count = useRef(time);
    const [timeShow,setTimeShow] = useState<any>(()=>{
        return tool(time);
    })
    const clear = useInterval(() => {

        if(count.current>0){
            count.current--;
            setTimeShow(tool(count.current));
        }else{
            clear();
            setTimeShow(null);
        }

      }, 1000);
    return timeShow;
}