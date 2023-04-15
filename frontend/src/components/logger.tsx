import React from 'react';
import { Heading, Textarea } from '@chakra-ui/react';

const Logger = () => {
    return (
        <>
            <Heading pb={2}>Food Logger</Heading>
            <Textarea placeholder="Enter your meal description here"></Textarea>
        </>
    )
}

export default Logger;