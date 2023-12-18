/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const InfoCard = (props) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "30%",
        boxShadow: `0 0 20px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.2),
    0 0 60px rgba(0, 0, 0, 0.1); `,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.data.desc}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
