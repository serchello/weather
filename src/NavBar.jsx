import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import SimpleModal from './Modal';

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



function NavBar(){

    


    // const [modal2Visible,setModal2Visible]=useState(true);

    // const handleModalOpen = () =>{
    //     setOpen(true);
    // }


    // const classes = useStyles();
    // // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = React.useState(getModalStyle);
    // const [open, setOpen] = React.useState(false);
  
    // const handleOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    // const body = (
    //   <div style={modalStyle} className={classes.paper}>
    //     <h2 id="simple-modal-title">Text in a modal</h2>
    //     <p id="simple-modal-description">
    //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //     </p>
      
    //   </div>
    // );


    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [consolidated_weather, setWeather] = useState([]);

    const handleOpen = (title, woeid) => {
      setOpen(true);
      setTitle(title);

      
      
      fetch(`/location/?query=${woeid}`)
     
      .then(async response => {
      
          let result = await response.json();
          setWeather(result.data.consolidated_weather);
          console.log(result.data);
      
      })
      .catch("dsdsd");

    };

    const handleClose = () => {
      setOpen(false);
    };


    const [search,setSearch] = useState('');
    const [record,setRecord] = useState([]);

    const inputEvent = (event) => {

        const data = event.target.value;
        //  axios.get(`https://www.metaweather.com/api/location/search/?query=${data}`)
      
        // .then(response => {
        //  setRecord(response.data);
        // console.log(response.data);
        // }).catch(error => {
        // console.log('Error getting fake data: ' + error);
        // });
        // console.log(data);


        // axios({
        //     method: "GET",
        //     url: `http://localhost:2400/async`,
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Access-Control-Allow-Origin" :"*", 
        //       'Access-Control-Allow-Methods' : 'GET, PUT, POST'
        //     }
        //   }).then(res => {
        //     setRecord(res.data);
        //     console.log(res.data);
        //   });

// fetch('/async' ,{
//     // NEW - add a Content-Type header
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }).then(express => {
//        // setRecord(response);
//         console.log(express);
//       });
// var data = {
//     data: data
//    }
        fetch(`/locationSearch/?query=${data}`)
            .then(async response => {
            
                let result = await response.json();
                setRecord(result.data);
                console.log(result.data);
            
            })
            .catch("dsdsd");

    }
    return (
        <>
            <TextField 
                fullWidth 
                id="standard-basic" 
                label="Search weather ..." 
                onChange = {inputEvent}
            />
            <div>
                {record.map((value, index)=>
                    <div style={styles} key={index} onClick={handleOpen.bind(this, value.title, value.woeid)}>
                    {value.title}
                    </div>
                )
                
                } 
            </div>
           <SimpleModal open={open} onClose={handleClose} title={title} data={consolidated_weather}/>
        </>
    );
}

export default NavBar;