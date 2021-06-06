import React, { useState, useEffect } from 'react'
import './main.css'
import { Paper, Card, CardMedia, CardActionArea, CardContent, Typography, Button, makeStyles, CardActions } from '@material-ui/core'

import Image from './tikshuv.jpeg'


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '40vh',
        borderRadius: '0px 0px 20px 20px',
        backgroundSize: 'cover'
    }
}

const Main = () => { 

    return (
        <div id='main'>
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
        </div>
    );
}

export default Main