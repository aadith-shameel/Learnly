import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UserCardComp from "../userCard/userCard";
import "./bodyComp.css";
import { Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function BodyComp(props) {
  const [textareaValue, setTextareaValue] = useState("");
  const [isResponseEmpty, setIsResponseEmpty] = useState(false);

  const handleTextareaChange = (event) => {
    setTextareaValue(event?.target?.value);
    if (textareaValue !== "") {
      setIsResponseEmpty(false);
    }
  };

  function respondQuery(e, value) {
    e.preventDefault();
    if (value === "") {
      setIsResponseEmpty(true);
      return;
    }
    const newQueries = props.Queries;
    const response = value ?? "";
    newQueries[props.userId].isResponded = true;
    newQueries[props.userId].response = response;
    props.updateQueries(newQueries);
    setTextareaValue("");
    props.changeDisplayOption("Pending");
    //window.alert("Query moved to Answered");
  }

  return (
    <div className="bodyCompDiv">
      {props.selectedUserId ? (
        <div>
          <div>
            <UserCardComp userId={props.userId} inBody={true} />
          </div>
          <br />
          <div className="textAreaContainer">
            <Typography className="title" variant="h6" component="h2">
              {props.Queries[props.userId].title}
            </Typography>
            <Box mt={2}>
              <Typography className="text-box query-text-box" variant="body1">
                {props.Queries[props.userId].query}
              </Typography>
            </Box>
            {props.Queries[props.userId].isResponded === false ? (
              <div className="formDiv">
                <form onSubmit={(e) => respondQuery(e, textareaValue)}>
                  <TextField
                    id="outlined-multiline-static"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    label="Message"
                    multiline
                    maxRows={4}
                    error={isResponseEmpty}
                  />

                  <div className="buttonDiv">
                    <Button
                      variant="contained"
                      className="deleteButton"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      className="submitButton"
                      type="submit"
                      // color="success"
                      endIcon={<SendIcon />}
                    >
                      Respond
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <Box mt={2}>
                  <Typography
                    className="text-box responseTextBox"
                    variant="body1"
                  >
                    {props.Queries[props.userId].response}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  className="deleteButton deleteButtonAnswered"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="noBodyCompDiv">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <div className="noBodyInnerDiv">Select a Query</div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default BodyComp;
