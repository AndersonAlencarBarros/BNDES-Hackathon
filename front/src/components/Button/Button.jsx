import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: 200,
  height: 40,
  fontWeight: 'bold',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  padding: '6px 12px',
  margin: '10px 200px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: '#C32828',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#C32828',
    borderColor: '#C32828',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function ButtonInit() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple>
       CHAT
      </BootstrapButton>
    </Stack>
  );
}