import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import DeviceHubRoundedIcon from '@mui/icons-material/DeviceHubRounded';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import List from '@mui/material/List';
import logo from './Images/K-logo.png';
import ListItem from '@mui/material/ListItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Kairoslogo from './Images/kairos_logo.png';
import React, { useState } from 'react';
import MoreIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { useTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { StyledPaperwithBC } from './Styles/Styled.Paper';
import { LIB } from './Styles/Styled.LIB';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


const drawerWidth = 180;

function ResponsiveDrawer() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [mobileOpen, setMobileOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon color='primary'/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box 
      display="flex"
      justifyContent="center"
      alignItems="center" 
      marginTop={2}
      >
      <img src={logo} alt="logo"/>
      </Box>
      <List>
        {['Dashboard', 'Test Hub', 'Scheduled', 'Connections', 'Files', 'Validations'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <LIB href={`/${text}`}>
              <ListItemIcon>
                {[<DashboardRoundedIcon />, <HomeRoundedIcon />, <CalendarMonthRoundedIcon />, 
                <DeviceHubRoundedIcon />, <FolderCopyRoundedIcon />, <TaskAltRoundedIcon /> ].at(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </LIB>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['preference', 'Guides'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <LIB href={`/${text}`}>
              <ListItemIcon>
              {[<SettingsApplicationsRoundedIcon />, <SupportRoundedIcon />].at(index)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </LIB>
          </ListItem>
        ))}
      </List>
    </div>
  );

  

  return (
    <React.Fragment>
    <Box>
      <CssBaseline />
      <StyledPaperwithBC
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <GridViewRoundedIcon color='primary'/>
          </IconButton>

          <img src={Kairoslogo} alt="logo" height={'50vh'} width={'150vh'}/>

          <Box
          sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },display: 'flex',justifyContent: 'space-evenly'
          }}
          >
            <Typography 
            variant="h6" 
            noWrap 
            component="div" 
            color={"primary"}>
            <b>DATA QUALITY GATEWAY</b>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex'}, justifyContent:'flex-end'}}>

          <Box>
            <IconButton sx={{mt: 0.4 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ fontSize: 15 }}/> : <Brightness4Icon sx={{ fontSize: 15 }}/>}
            </IconButton>
          </Box>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
            <AccountCircleIcon color='primary'/>
            <Typography 
            variant="body2" 
            noWrap 
            component="body2">  
              steve smith
            </Typography>
            <ArrowDropDownIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              edge="end"
            >
              <MoreIcon color='primary'/>
            </IconButton>
          </Box>

        </Toolbar>
      
      </StyledPaperwithBC>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          {renderMobileMenu}
          {renderMenu}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, boxShadow: "0px 0px 05px 0px #bdbdbd" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </React.Fragment>
  );
}

export default ResponsiveDrawer;