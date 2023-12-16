import '../css/LeftSidebar.css'

import HomeIcon from '@mui/icons-material/Home'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function LeftSidebar() {
    return (
        <div className='left-sidebar'>
            <div className='sidebar-logo'>
                <img src='/Instagram-logo.png' alt='Instagram' width="150" height="150"/>
            </div>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                    <ListItemText>Search</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ExploreIcon/>
                    </ListItemIcon>
                    <ListItemText>Explore</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <OndemandVideoIcon/>
                    </ListItemIcon>
                    <ListItemText>Reels</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ChatBubbleOutlineIcon/>
                    </ListItemIcon>
                    <ListItemText>Messages</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon/>
                    </ListItemIcon>
                    <ListItemText>Notifications</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AddBoxIcon/>
                    </ListItemIcon>
                    <ListItemText>Create</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                </MenuItem>
            </MenuList>
            
            <p>More</p>
        </div>
    );
}                