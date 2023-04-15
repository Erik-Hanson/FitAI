import React from 'react';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const numberOfDays = lastDayOfMonth.getDate();
    const initialPadding = firstDayOfMonth.getDay();

    const calendarCells = [];

    for (let i = 0; i < initialPadding; i++) {
        calendarCells.push(<Box key={`padding-${i}`} w="40px" h="40px" />);
    }

    for (let i = 1; i <= numberOfDays; i++) {
        calendarCells.push(
            <Box
                key={`day-${i}`}
                w="40px"
                h="40px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg={i === today.getDate() ? 'blue.500' : 'gray.100'}
                color={i === today.getDate() ? 'white' : 'black'}
                borderRadius="lg"
            >
                <Text fontSize="sm">{i}</Text>
            </Box>
        );
    }

    const rows = [];
    for (let i = 0; i < calendarCells.length; i += 7) {
        rows.push(<HStack key={`row-${i}`}>{calendarCells.slice(i, i + 7)}</HStack>);
    }

    return (
        <VStack w="100%" p={4} boxShadow="md" borderRadius="lg">
            <HStack>
                {days.map((day) => (
                    <Box key={day} w="40px" h="40px" display="flex" alignItems="center" justifyContent="center">
                        <Text fontSize="sm" fontWeight="bold">
                            {day}
                        </Text>
                    </Box>
                ))}
            </HStack>
            {rows}
        </VStack>
    );
};

export default Calendar;