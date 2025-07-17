import React,{useState} from 'react'
import {Button,Menu,MenuItem} from '@material-ui/core'

const Profile=({profile})=>{
      //Menu
      const [anchorEl, setAnchorEl] =useState(null);

      //Menu
      const handleClick=(event)=>{
        setAnchorEl(event.currentTarget);
      }

      const handleClose = () => {
        setAnchorEl(null);
      };
    return(
        <div style={{marginRight:'30px',float:'right'}}>
            <Button aria-controls="simple-menu" variant="contained" color="secondary" aria-haspopup="true" onClick={handleClick}>
                        View Profile
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                        {profile && profile.user_metadata && <MenuItem>Username: {profile.user_metadata.username}</MenuItem>}
                        {profile && <MenuItem>Email: {profile.email}</MenuItem>}
                </Menu>
        </div>
    )
}
export default Profile