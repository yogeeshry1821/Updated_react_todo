import React, { Component } from "react";

import Todo from "../components/todo";

// import Drawer from '@material-ui/core/Drawer';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
// import List from '@material-ui/core/List';
import Typography from "@material-ui/core/Typography";
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { colors } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: "white",
    "text-align": "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 20,
    colors: blue,
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "45%",
    top: "35%",
  },
  toolbar: theme.mixins.toolbar,
});

class home extends Component {
  state = {
    render: false,
  };

  loadAccountPage = (event) => {
    this.setState({ render: true });
  };

  loadTodoPage = (event) => {
    this.setState({ render: false });
  };

  constructor(props) {
    console.log("yogi");
    super(props);

    this.state = {};
  }

  componentWillMount = () => {
    console.log("yogi");
    // authMiddleWare(this.props.history);
    // const authToken = localStorage.getItem('AuthToken');
    // axios.defaults.headers.common = { Authorization: `${authToken}` };
  };

  render() {
    const { classes } = this.props;
    if (this.state.uiLoading === true) {
      return (
        <div className={classes.root}>
          {this.state.uiLoading && (
            <CircularProgress size={150} className={classes.uiProgess} />
          )}
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography
                variant="h3"
                noWrap
                style={{
                  paddingTop: "20px",
                  textAlign: "center",
                  marginLeft: "40px",
                  paddingInline: "70vh",
                }}
              >
                To-do List
              </Typography>
            </Toolbar>
			
          </AppBar>

          <div>{<Todo />}</div>
        </div>
      );
    }
  }
}

export default withStyles(styles)(home);
