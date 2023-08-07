/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 */
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Snackbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { MAKE_PAYMENT } from "../../utils/apiUrls";

const StyledBox = styled(Box)({
  maxWidth: "400px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#F7F7F7",
});

const PaymentDetailsPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const location = useLocation();
  const mentorId = location.state.mentorId;
  const price = location.state.servicePrice;
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const navigate = useNavigate();
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handlePayButtonClick = () => {
    if (cardNumber.length !== 16) {
      setSnackbarMessage("Card number should be 16 digits");
      setSnackbarOpen(true);
      return;
    }
    if (cardHolderName === "") {
      setSnackbarMessage("Card holder name field should not be empty");
      setSnackbarOpen(true);
      return;
    }
    if (cvv.length !== 3) {
      setSnackbarMessage("CVV should be 3 numbers");
      setSnackbarOpen(true);
      return;
    }

    fetch(MAKE_PAYMENT + "/" + mentorId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardNumber,
        cardHolderName,
        cvv,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setSnackbarMessage("Payment successful. Please check your email.");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          setSnackbarMessage("Payment failed");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      })
      .catch((error) => {
        setSnackbarMessage("Payment failed");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <StyledBox>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
      >
        Complete Your Payment
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="h6" color="text.primary"></Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="card-number">Card Number</InputLabel>
          <OutlinedInput
            id="card-number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            startAdornment={
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            }
            label="Card Number"
          />
        </FormControl>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="card-holder-name">Card Holder Name</InputLabel>
          <OutlinedInput
            id="card-holder-name"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
            label="Card Holder Name"
          />
        </FormControl>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="cvv">CVV</InputLabel>
          <OutlinedInput
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <LockIcon />
                </IconButton>
              </InputAdornment>
            }
            label="CVV"
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayButtonClick}
          sx={{
            fontSize: 18,
            padding: "10px 30px",
            borderRadius: 5,
            height: "100%",
            fontWeight: 600,
            backgroundColor: "#1D267D",
            "&:hover": {
              backgroundColor: "#0C134F",
            },
          }}
        >
          Pay
        </Button>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};

export default PaymentDetailsPage;
