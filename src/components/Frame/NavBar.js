import React from "react";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import ShareIcon from "@material-ui/icons/Share";
import AssignIcon from "@material-ui/icons/Assignment";

export default class NavBar extends React.Component {
  render() {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: this.props.classes.drawerPaper
        }}
      >
        <div className={this.props.classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <Typography variant="title">Discover</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignIcon />
            </ListItemIcon>
            <Typography variant="title">mnemonics</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="button">Practice</Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <Typography variant="button">Button 4</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="button">Button 5</Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="button">Button 6</Typography>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}
