import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {styles} from '../../styles/scss/style'
import { HomeIcon } from '../../mui';

class MainBreadcrumbs extends  Component {
    render () {
        const { classes, breadcrumbData } = this.props;
        return (
            <div className={classes.root}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
                <HomeIcon color="primary" style={{verticalAlign:"top", height:"0.8em"}}/>
                <Typography color="textPrimary">{breadcrumbData.parent}</Typography>
                {breadcrumbData.child && <Typography color="textPrimary">{breadcrumbData.child}</Typography>}
                </Breadcrumbs>
            </div>
        )
    }
}

MainBreadcrumbs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      breadcrumbData: state.updateBreadcrumb.breadcrumbData
    }
  }
  
  export default connect(mapStateToProps)(withStyles(styles)(MainBreadcrumbs));
  