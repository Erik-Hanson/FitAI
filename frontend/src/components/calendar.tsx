import React, { useState } from "react";
import { VStack, HStack, Box, Text, Heading } from "@chakra-ui/react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarProps {
  onDateSelect: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const numberOfDays = lastDayOfMonth.getDate();
  const initialPadding = firstDayOfMonth.getDay();
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
    const selectedDateString = new Date(
      today.getFullYear(),
      today.getMonth(),
      date
    )
      .toISOString()
      .split("T")[0];
    onDateSelect(selectedDateString);
  };

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
        bg={i === selectedDate ? "blue.500" : "gray.100"}
        color={i === selectedDate ? "white" : "black"}
        borderRadius="lg"
        onClick={() => handleDateSelect(i)}
        cursor="pointer"
      >
        <Text fontSize="sm">{i}</Text>
      </Box>
    );
  }

  const rows = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    rows.push(
      <HStack key={`row-${i}`}>{calendarCells.slice(i, i + 7)}</HStack>
    );
  }

  return (
    <>
      <Heading>Calendar</Heading>
      <VStack w="100%" p={4} boxShadow="md" borderRadius="lg">
        <HStack>
          {days.map((day) => (
            <Box
              key={day}
              w="40px"
              h="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="sm" fontWeight="bold">
                {day}
              </Text>
            </Box>
          ))}
        </HStack>
        {rows}
      </VStack>
    </>
  );
};

export default Calendar;
