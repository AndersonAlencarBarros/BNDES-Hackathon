import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Cadastrar() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', maxWidth: 600, marginLeft: 50, alignItems: 'center', justifyContent:'center' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          E-mail
          id="outlined-error"
          label="E-mail"
          
          helperText="*"
          variant="filled"
        />
        <TextField
         variant="filled"
          Nome
          id="outlined-error-helper-text"
          label="Nome"
          helperText="*"
         
        />
        
      </div>
      <div>
        <TextField
          CPF
          id="filled-error"
          label="CPF"
          helperText="*"
          variant="filled"
        />
        <TextField
          Cidade
          id="filled-error-helper-text"
          label="Cidade"
          helperText="*"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          Rua
          id="standard-error"
          label="Número"
          defaultValue="Nº"
          helperText="*"
          variant="filled"
        />
        <TextField
          data
          id="standard-error-helper-text"
          label="Nascimanento"
          defaultValue="dd/mm/aaaa"
          helperText="*"
          variant="filled"
        />
         <TextField
          Formação Escolar
          id="standard-error-helper-text"
          label="Formação Escolar"
          defaultValue="Formação Escolar"
          helperText="*"
          variant="filled"
        />
        <TextField
         variant="filled"
          Telefone
          id="outlined-error-helper-text"
          label="Telefone"
          helperText="*"
         />
      </div>
    </Box>
  );
}
