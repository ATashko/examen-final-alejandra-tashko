import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Contact = () => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <div>
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
        <Input
          placeholder="Email"
          inputProps={ariaLabel}
          onChange={(e) => handleChange(e, "nombre")}
        />
        <Input
          placeholder="Motivo de consulta"
          inputProps={ariaLabel}
          onChange={(e) => handleChange(e, "nombre")}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Contact;
