import Card, { CardActions, CardContent } from "material-ui/Card";
import React from "react";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

export default class Flashcard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.content} >
        <div className={classes.toolbar} />
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              benevolent
            </Typography>
            <Typography component="p">
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Previous</Button>
            <Button size="small">Flip</Button>
            <Button size="small">Next</Button>
          </CardActions>
        </Card>
      </main>
    );
  }
}
