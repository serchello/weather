import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: {
    minWidth: 1100,
  }

}));


//  Table
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);

const SimpleModal = (props) =>  {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

//   const body = (
//     // <div style={modalStyle} className={classes.paper}>
//     //   <h2 id="simple-modal-title">{props.title}</h2>
//     //   <p id="simple-modal-description">
          
//     //   {/* {props.data} */}
//     //   {props.data.map(data => <div>{data.created}</div>)}
//     //   </p>
//     //   <SimpleModal />
//     // </div>
//   );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        {...props}
      >
           
        {/* {body} */}
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">{props.title}</h2>

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell> 
                        <StyledTableCell align="right" >Weather</StyledTableCell>
                        <StyledTableCell align="right" >Wind direction</StyledTableCell>
                        <StyledTableCell align="right" >Min temp</StyledTableCell>
                        <StyledTableCell align="right" >Max temp</StyledTableCell>
                        <StyledTableCell align="right" >Wind speed</StyledTableCell>
                        <StyledTableCell align="right" >Direction</StyledTableCell>
                        <StyledTableCell align="right" >Air pressure</StyledTableCell>
                        <StyledTableCell align="right" >Humidity</StyledTableCell>
                        <StyledTableCell align="right" >Visibility</StyledTableCell>
                        <StyledTableCell align="right" >Predictability</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
            
                {props.data.map((row, idx) => (
                <StyledTableRow key={idx}>
                    <StyledTableCell key={row.weather_state_name} component="th" scope="row">{row.applicable_date}</StyledTableCell >
                    <StyledTableCell  align="right">{row.weather_state_name}</StyledTableCell >
                    <StyledTableCell  align="right">{row.wind_direction_compass}</StyledTableCell >
                    <StyledTableCell  align="right">{ Math.floor(row.min_temp * 100) / 100 }</StyledTableCell >
                    <StyledTableCell  align="right">{ Math.floor(row.max_temp * 100) / 100 }</StyledTableCell >
                    <StyledTableCell  align="right">{ Math.floor(row.wind_speed * 100) / 100 }</StyledTableCell >
                    <StyledTableCell  align="right">{ Math.floor(row.wind_direction * 100) / 100 }</StyledTableCell >
                    <StyledTableCell  align="right">{row.air_pressure}</StyledTableCell >
                    <StyledTableCell  align="right">{row.humidity}</StyledTableCell >
                    <StyledTableCell  align="right">{ Math.floor(row.visibility * 100) / 100}</StyledTableCell >
                    <StyledTableCell  align="right">{row.predictability}</StyledTableCell >
                </StyledTableRow >
                ))}

                </TableBody>
            </Table>
        </TableContainer>
        </div>
      </Modal>
    </>
  );
}

export default SimpleModal;