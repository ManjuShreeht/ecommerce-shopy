import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { textAlign } from '@mui/system';

export default function Toggle({ dataType,setdataType }) {
  const [alignment, setAlignment] = React.useState('Men');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setdataType(event.target.value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
        onChange={handleChange}
      aria-label="Platform"
      sx={{textAlign:"center",marginLeft:"400px",marginTop:"100px",fontSize:"32px",fontWeight:"600"}}
    >
      <ToggleButton className="toggle" value="Men's">Men</ToggleButton>
      <ToggleButton className="toggle" value="Women">Women's</ToggleButton>
      <ToggleButton className="toggle" value="jewelery">jewelery</ToggleButton>
      <ToggleButton className="toggle" value="electronics">electronics</ToggleButton>
    </ToggleButtonGroup>
  );
}