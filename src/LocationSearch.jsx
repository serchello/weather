import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Location from './component/Location';
import { trackPromise, usePromiseTracker} from 'react-promise-tracker';

const styles = {
    display:'inline',
    width:'25%',
    height:50,
    float:'left',
    padding:10,
    border:'0.5px solid black',
    marginBottom:10,
    marginRight:10
    }

const area = 'locations';

function LocationSearch(){

    const [city,setCity] = useState();
    const [locations,setLocations] = useState([]);

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [consolidated_weather, setWeather] = useState([]);
    const { promiseInProgress } = usePromiseTracker({ area });

    const handleClose = () => {
        setOpen(false);
    };


    const handleOpen = (title, woeid) => {

        setOpen(true);
        setTitle(title);
        
        trackPromise(fetch(`/location/?query=${woeid}`)
        .then(async response => {
            let result = await response.json();
            setWeather(result.data.consolidated_weather);
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
        }));
    };


    const inputEvent = (event) => {
        let data = event.target.value;
        if(data !== ""){
            setCity(data);
        }
    };

    useEffect(() => {
        trackPromise(fetch(`/locationSearch/?query=${city}`)
        .then(async response => {
            let result = await response.json();
            setLocations(result.data);
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
        }));
    }, [city]);

   
    const result = locations.map((value, index)=>{
        return <div style={styles} key={index} onClick={handleOpen.bind(this, value.title, value.woeid)}>
                    {value.title}
                </div>
    });


    return (
        <>
            <TextField 
                fullWidth 
                id="standard-basic" 
                label="Search weather ..." 
                onChange = {inputEvent}
            />
            <div>
            {promiseInProgress
            ? <div>Wait, loading data!</div>
            :  locations && result }
                
            </div>
           <Location open={open} onClose={handleClose} title={title} data={consolidated_weather}/>
        </>
    );
}

export default LocationSearch;