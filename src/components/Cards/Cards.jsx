import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed){
        return 'loading...'
    }
    
    return (
        <div className={styles.container}>

        <h1>World Meter </h1>
        <h2><Typography color="textSecondary"> Last Updated on {new Date(lastUpdate).toDateString()}</Typography></h2>

            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom> Infected</Typography>
                        <Countup start={0} end={confirmed.value} duration={2} separator=","/>
                        <Typography variant="body2" > Total Infected </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                        <Countup start={0} end={recovered.value} duration={1} separator="," />
                        <Typography variant="body2" > Total Recovered </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths</Typography>
                        <Countup start={0} end={deaths.value} duration={1} separator=","/>
                        <Typography variant="body2" > Total Death </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;