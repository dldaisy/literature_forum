import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import MenuListComposition from '../components/MenuList';
import { Typography } from '@material-ui/core';
import PersistentDrawer from './PersistentDrawer';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  const rightmenu = {
      '作品库' : ['青春文学', '都市小说', '武侠玄幻'],
      '排行榜' : ['新人榜','月度榜'],
      '版权专区' : ['已签约','未签约'],
  }


  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <PersistentDrawer />
          </div>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/premium-themes/onepirate/"
          >
            {'晋江文学城'}
          </Link>
          <div className={classes.right}>
            <MenuListComposition 
                className = {classes.rightLink} 
                buttontext = "作品库"
                content = {rightmenu["作品库"]}>
            </MenuListComposition>
            <MenuListComposition 
                className = {classes.rightLink} 
                buttontext = "排行榜"
                content = {rightmenu["排行榜"]}>
            </MenuListComposition>
            <MenuListComposition 
                className = {classes.rightLink} 
                buttontext = "版权专区"
                content = {rightmenu["版权专区"]}>
            </MenuListComposition>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
