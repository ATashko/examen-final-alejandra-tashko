import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { GlobalContext } from "../../../Context/GlobalContext";

const ContactForm = () => {
  const ariaLabel = { "aria-label": "description" };
  const { state } = useContext(GlobalContext);

  const [contact, setcontact] = useState({
    name: "",
    email: "",
    info: "",
  });
  const [error, setError] = useState(false);
const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e, propiedad) => {
    setcontact({ ...contact, [propiedad]: e.target.value });
  };

  const validateName = (str) => {
    const withoutSpaces = str.trim();

    if (withoutSpaces.length > 6 && str === withoutSpaces) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid =
      contact.nombre.length > 6 && validateName(contact.nombre);
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailIsValid.test(e.target.value));

    if (!nameIsValid || !emailIsValid) {
      setError(true);
      console.log(error);

      if (!nameIsValid && !emailIsValid) {
        alert("Los datos no son válidos");
        console.log(errorMessage);
      } else if (!nameIsValid) {
        setErrorMessage("El nombre no es válido");
      } else {
        setErrorMessage("El email no es válido");
      }

      return;
    }

    setIsSent(true);
    console.log("data: ", contact);
  };

  return (
    <div
      className={state.isDark ? "container-dark" : "container-light"}
      onSubmit={handleSubmit}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          placeholder="Nombre"
          inputProps={ariaLabel}
          onChange={(e) => handleChange(e, "nombre")}
        />

        {error && errorMessage.includes("El nombre no es válido") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <Input
          placeholder="Email"
          inputProps={ariaLabel}
          onChange={(e) => handleChange(e, "email")}
        />

        {error && errorMessage.includes("El email no es válido") && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <Input
          placeholder="Motivo de consulta"
          inputProps={ariaLabel}
          onChange={(e) => handleChange(e, "info")}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Stack>
        {isSent && (
          <Alert severity="success" margin="auto">
            ¡Tu mensaje fue enviado con éxito!
          </Alert>
        )}
      </Box>
    </div>
  );
};
export default ContactForm;
