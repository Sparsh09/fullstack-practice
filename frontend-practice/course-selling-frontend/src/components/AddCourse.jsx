import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: 400,
          padding: 20,
        }}
      >
        <Card
          style={{
            width: 400,
            padding: 20,
            border: "1px solid lightBlue",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            fullWidth
            id={"title"}
            label="Title"
            variant="outlined"
            type={"text"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <TextField
            fullWidth
            id={"description"}
            label="Description"
            variant="outlined"
            type={"text"}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <Button
            variant={"contained"}
            onClick={() => {
              fetch("http://localhost:3000/admin/courses", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  price: 5999,
                  imageLink:
                    "https://www.shutterstock.com/image-vector/cartoon-cute-character-funny-illustration-600nw-2320715743.jpg",
                  published: true,
                }),
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log(data);
                  alert("Course Added !!");
                });
            }}
          >
            Create Course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
