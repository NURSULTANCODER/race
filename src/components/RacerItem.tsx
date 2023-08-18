import React, { FC, useMemo } from "react";
import { ReactComponent as Helmet } from 'assest/helmet.svg'
import { makeStyles } from '@material-ui/styles';
import { racerInterface } from 'types/racesList.Interface'

const useStyles = makeStyles({
  container: {
    padding: '5px 15px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    border: '1px solid #0090D1',
    borderRadius: '15px',
    backgroundColor: '#008fd13a',
  },
  userIcon: {
    width: '30px',
    height: '30px',

  },
  timeSpeed: {
    display: 'flex'
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#0F161F',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  time: {
    color: '#0090D1'
  },
  speed: {
    color: '#f20bdb'
  }, 
  hr: {
    color: '#0090D1',
    margin: '0 10px', 
  }, 
  count: {
    fontSize: '18px',
  },
  Icon: {
    backgroundColor: '#f3f3f3',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

interface RacerItemInterface extends racerInterface {
  count: number
}


const RacerItem: FC<RacerItemInterface> = ({count, id, name, speed}: RacerItemInterface) => {
  const classes = useStyles();

  const getRandomColor = useMemo(() => {
    const red = Math.floor(Math.random() * 200);     // случайное значение от 0 до 255
    const green = Math.floor(Math.random() * 200);   // случайное значение от 0 до 255
    const blue = Math.floor(Math.random() * 200);    // случайное значение от 0 до 255
  
    const color = `rgb(${red},${green},${blue})`;
    return color;
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.count}>
        {count + 1}
      </div>
      <div className={classes.Icon}>
        <Helmet fill={getRandomColor} className={classes.userIcon} />
      </div>
      <div>
        <div className={classes.name}>
          {name}kjlkjljlkjj;jk;ljl;lk;ldsfkdlfksdlfk;sdf
        </div>
        <div className={classes.timeSpeed}>
          <div className={classes.time}>23:54.260</div>
          <div className={classes.hr}>|</div>
          <div className={classes.speed}>{speed} km/h</div>
        </div>
      </div>
    </div>
  )
}

export default RacerItem