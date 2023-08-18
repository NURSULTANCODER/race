import React, { FC, useState, useEffect } from "react"
import RacerItem from 'components/RacerItem'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { getRaces } from 'store/racers-slice'
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import useScrollDebounce from "hooks/useScrollDebounce";
import { racerInterface } from "types/racesList.Interface";

const useStyles = makeStyles({
  container: {
    padding: '15px'
  }, 
  loader: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100px'
  }
})


const RacersList: FC = () => {
  const dispatch = useAppDispatch()
  const { racesList, isLoading } = useAppSelector((state) => state.racersReduser)
  const classes = useStyles();
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);



  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading && !isLoadingMore
    ) {
      setIsLoadingMore(true);
      dispatch(getRaces()).finally(() => {
        setIsLoadingMore(false);
      });
    }
  };

  const scrolling = useScrollDebounce(handleScroll, 300);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false); 
      return; 
    }


    dispatch(getRaces())
  }, [dispatch, initialLoad])

  return (
    <div className={classes.container}>
      {racesList.map((race: racerInterface, index: number) => (
        <RacerItem key={race.id} count={index} {...race} />
      ))}
      {isLoading && (
        <div className={classes.loader}>
            <CircularProgress />
        </div>
      )}
    </div>
  )
}

export default RacersList