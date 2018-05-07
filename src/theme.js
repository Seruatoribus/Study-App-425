/*
  This file contains CSS classes and parameters to be injected into our frame using withStyles()
*/
import blue from 'material-ui/colors/purple';

const drawerWidth = 200; // Drawer Width Const is applied in styles.drawerPaper.width

export default theme => ({
  root: {
    height: 800,
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  card: {
    minWidth: 500,
    minHeight: 300,
  },
  cardButton: {
    flex: 1,
    backgroundColor: '#3366cc',
    color: '#ffffff'
  },
  flex: {
    flex: 1
  },
  appBar: {
    background: "linear-gradient(45deg, #3366cc 30%, #ccffff 99%)",
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbar: theme.mixins.toolbar
});
