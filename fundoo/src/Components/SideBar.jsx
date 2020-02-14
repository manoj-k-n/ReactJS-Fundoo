
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DehazeIcon from '@material-ui/icons/Dehaze';
// import { Label } from 'react-bootstrap';
import LabelIcon from '@material-ui/icons/Label';
import ArchiveIcon from '@material-ui/icons/Archive';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EditIcon from '@material-ui/icons/Edit';
import Label from './Label';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Notes','Reminder'].map((text, index) => (
          <ListItem button key='/hello'>
            <ListItemIcon>{index % 2 === 0 ?<EmojiObjectsIcon /> : <AddAlertIcon /> }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      
     <div>
     <Label/>
     </div>

      <Divider />
      <List>
        {['Archive','Bin'].map((text, index) => (
          <ListItem button key='/hello'>
            <ListItemIcon>{index % 2 === 0 ? <ArchiveIcon color="action"/> : <DeleteOutlineIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      
    </div>
  );



  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><DehazeIcon/></Button>
    
      <Drawer open={state.left} >
        {sideList('left')}
      </Drawer>
     
    </div>
  );
}

