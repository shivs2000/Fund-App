import React from 'react';
import { LineChart,
    Line, XAxis, 
   
     CartesianGrid,
      Tooltip, 
       ResponsiveContainer } from 'recharts';
       import {Link ,useParams} from 'react-router-dom';
function Details({}) {
    const params=useParams();
    const id=params.id;
    console.log(id);
    return (
        <div>
             <h3 className="chartTitle"></h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
               <LineChart >

                 <XAxis dataKey="name" stroke="#5550bd"/>
                 <Line type="monotone"  />
                 <Tooltip/>
                 
               </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Details;