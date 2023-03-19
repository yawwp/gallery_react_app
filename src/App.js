import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'



//config 
import config from './config'

//App components
import Photo from './components/Photo'
import Search from './components/Search'
import Nav from './components/Nav'
import Error from './components/Error'

function App() {
    //Setting state for api search 
    const [input, setInput] = useState(undefined);

    //Array of data based on 'input' state
    const [data, setData] = useState(null);

    useEffect(()=> {
        const fetchPhotos = async () => {
            try{
                const api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${input}&format=json&nojsoncallback=1`;
                const res = await axios.get(api);
                if (res && res.data) setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPhotos();
    },[input])

    function getData(data){
        setInput(data);
    }

    function clearData(){
        setData();
    }


    return (
        <div className='container'>
            <Search/>
            <Nav getData={getData}/>
            
            <Routes>
                <Route path='/' 
                    element={data ? <Photo 
                        data={data} 
                        getData={getData} 
                        input={input} 
                        /> : 'Loading.....' }/> 
                    <Route path=':search' 
                        element={data ? <Photo 
                            data={data} 
                            getData={getData} 
                            input={input}
                            clearData={clearData}
                            />  : 'Searching.... '} />
                        <Route path='*' element={<Error />}/>
            </Routes>
        </div>

    )
}

export default App;