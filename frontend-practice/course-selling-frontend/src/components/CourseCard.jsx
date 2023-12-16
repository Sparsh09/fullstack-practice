import Card from "@mui/material/Card";
import { Button, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

function CourseCard (props) {
    const course = props.course;
    return (
        <Card sx={{ display: "flex", width: "245px" , height:"300px",  marginRight: "30px"  }} id={props.id}>
        <CardActionArea>
          <img src={course.imageLink} style={{height: "130px", width: "245px" }}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
}
export default CourseCard;