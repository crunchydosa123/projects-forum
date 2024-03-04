import React, { useEffect, useState } from 'react'

const ApiTest = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch('http://localhost:5000/api/data');

                if(!response.ok){
                    throw new Error('Network response not ok');
                }

                const jsonData = await response.json();
                setData(jsonData);
            }catch(error){
                console.error(error);
            }
        };

        fetchData();

    }, [])

  return (
    <div>
        {data && (
            <div>
                <p>Data received from Flask API: </p>
                <p>{data.message}</p>
                <p>{data.rule}</p>
            </div>
        )}
    </div>
  );
}

export default ApiTest