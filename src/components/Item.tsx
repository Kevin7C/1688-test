import { useMemo } from "react";
import dayjs from "dayjs";
import { useTime } from '../hooks';
import { formatMoney } from '../utils';
import './item.css';


export const Item=({ data })=>{
    const { title, money, description, time, restTime, status } = data;

    const {
        startTime,
        endTime
    } = useMemo(()=>{
        if(!Array.isArray(time)){
            return {
                startTime:'',
                endTime:''
            }
        }
        return {
            startTime: time[0]? dayjs(time[0]).format('MM.DD HH:mm'):'',
            endTime:time[1]? dayjs(time[1]).format('MM.DD HH:mm'):'',
        }
    },time);

    const timeShow = useTime(restTime);

    return (
        <div className="item-wrapper">
                <div className="money-block">
                    <span className="num" title={formatMoney(money)}>{formatMoney(money)}</span>
                    <span className="unit">元</span>
                </div>
                <div className="right-block">
                    <div className="content-block">
                        <div className="content-title">
                            {title}
                        </div>
                        <div className="content-des">
                            {description}
                        </div>
                        {
                            restTime&&timeShow?
                            <div className="content-rest">
                                <span className="mr-[10px]">距结束 </span>
                                <span className="rest-unit">{timeShow?.hours}</span>
                                <span className="mx-[5px]">:</span>
                                <span className="rest-unit">{timeShow.minutes}</span>
                                <span className="mx-[5px]">:</span>
                                <span className="rest-unit">{timeShow.second}</span>
                            </div>:
                            <div className="content-time">
                                有效期：<span>{startTime}</span>-<span>{endTime}</span>
                            </div>
                        }
                        
                    </div>
                    <div className="status-block">
                        {status}
                    </div>
                </div>
        </div>
    )
}