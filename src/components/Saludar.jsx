import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Saludar = ({hola}) => {
    const [frase, setFrase] = useState('')
    
    return (
        <div className='text-center'>
            <h1 className='text-center pt-5 display-1'>Hello {hola} {frase}</h1>
            <Button variant="primary" className='mt-5' onClick={() => setFrase('(from changed state)')}>Haz click!</Button>
        </div>
    );
};

export default Saludar;