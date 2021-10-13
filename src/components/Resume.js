import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import { Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar"


const useStyles = makeStyles({
    mainContainer: {
        background: "white"
    }
})



const Resume = () => {
    const classes = useStyles()
    return (
        <>
        <Navbar />
<Box component="header" className={classes.mainContainer}>
<Typography variant="h4" align="center">
    Working Experience 
</Typography>
<Box component="div">
    <Typography variant="h2">2021</Typography>
</Box>
</Box>
       
        </>
    )
}

export default Resume
