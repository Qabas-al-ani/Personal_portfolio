import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import avatar from " ../avatar.jpg"

const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="" />
        </Box>
    )
}

export default Header
