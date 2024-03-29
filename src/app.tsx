import { useState, useEffect } from 'react';
import { Item } from 'components';
import { get } from './request';
import './app.css';



export const App = () => {
  const [list,setList] = useState([]);

  useEffect(()=>{
    get('https://systemjs.1688.com/krump/schema/1352.json').then(res=>{
      const { list } = res;
      console.log(list);
      setList(list);
    })
  },[]);

  return (
    <div className='app-wrapper'>
      <div className="title-block">1688 进货红包</div>
      <div>
        {list.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
