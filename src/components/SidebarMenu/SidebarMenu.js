import React from 'react';
import PropTypes from 'prop-types';
import Parse from 'parse';

import { AuthContext } from '../../App';

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Profile from '../Profile/Profile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} overflow={'scroll'} height={'100vh'}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabIcon: {
    minWidth: 'auto',
  },
}));

export default function SidebarMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const Auth = React.useContext(AuthContext);

  const logOutUser = () => {
    Parse.User.logOut();
    Auth.setIsLoggedIn(false);
    Auth.setUser(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          aria-label="Main menu"
          centered
        >
          <Tab
            className={classes.tabIcon}
            icon={<PersonIcon />}
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tabIcon}
            icon={<SearchIcon />}
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tabIcon}
            icon={<SettingsIcon />}
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tabIcon}
            icon={<ExitToAppIcon />}
            onClick={logOutUser}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Pretraga i filtracija
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Podešavanja
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
