import * as React from 'react';
import Box from '@mui/material/Box';

import FilledInput from '@mui/material/FilledInput';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


export default function Quest() {
   return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',}}>
      <div>
        <FormControl fullWidth sx={{ m: 1, maxWidth: 600, padding: 3  }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Você ja empreende?</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
                        
              startAdornment={<InputAdornment position="start">sim ou não</InputAdornment>}
            />
          </FormControl>
      </div>
        <FormControl fullWidth sx={{ m: 1, maxWidth: 600, padding: 3 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Qual é o nível de conhecimento do seu negócio?</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
                        
              startAdornment={<InputAdornment position="start">R:</InputAdornment>}
            />
          </FormControl>
      <div>
        <FormControl fullWidth sx={{ m: 1, maxWidth: 600, padding: 3  }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Qual é a sua renda mensal?</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
                      
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          />
        </FormControl>

      </div>
      <div>
      <FormControl fullWidth sx={{ m: 1, maxWidth: 600, padding: 3, }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Qual é a sua renda mensal?</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
                      
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          />
        </FormControl>
      </div>
    </Box>
  );
}
