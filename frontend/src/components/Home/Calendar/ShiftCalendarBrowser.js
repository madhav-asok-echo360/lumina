import React from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { daysOfWeek, months } from "../../SharedComponents/DateTranslation";
import { CreateShiftModal, PrepoulateConfirmModal } from "./CalendarModals";
import LuminaCalendar from "./LuminaCalendar";
import Shifts from "./Shifts";
import { getDaysInMonth } from "./DateFunctions";
import HomeMainContentContainer from "../../SharedComponents/HomeMainContentContainer";

const ShiftCalendarBrowser = ({
  contactList,
  date,
  currentEvent,
  setCurrentEvent,
  events,
  setEvents,
  contactListSelectable,
  cancelShift,
  prepopulate
}) => {
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const {
    isOpen: isPrepopulateOpen,
    onOpen: onPrepopulateOpen,
    onClose: onPrepopulateClose,
  } = useDisclosure();

  function openCreateShiftModal() {
    onCreateOpen();
  }

  return (
    <HomeMainContentContainer flexDir="row" minH="75vh">
      <Box minW='40%' mr={10}>
        <Box mb={3}>
          <Text fontSize="30px">{daysOfWeek[date.getDay()]}</Text>
          <Text fontWeight="bold" fontSize="40px">
            {`${
              months[date.getMonth()]
            } ${date.getDate()}, ${date.getFullYear()}`}
          </Text>
        </Box>
        <Shifts
          currentEvent={currentEvent}
          contactList={contactList}
          date={date}
          events={events}
          setEvents={setEvents}
          contactListSelectable={contactListSelectable}
          cancelShift={cancelShift}
        />
      </Box>
      <Box w='50%'>
        <Button
          variant="animated"
          bg="orange.100"
          mb={3}
          onClick={() => openCreateShiftModal()}
        >
          + New Shift
        </Button>
        <Button
          variant="animated"
          bg="orange.100"
          mb={3}
          ml={3}
          onClick={() => onPrepopulateOpen()}
        >
          Prepopulate
        </Button>
        <LuminaCalendar
          events={events}
          setCurrentEvent={setCurrentEvent}
        />
      </Box>
      <CreateShiftModal
        contactList={contactList}
        isOpen={isCreateOpen}
        events={events}
        setEvents={setEvents}
        onClose={onCreateClose}
        contactListSelectable={contactListSelectable}
      />
      <PrepoulateConfirmModal
        prepopulate={prepopulate}
        isOpen={isPrepopulateOpen}
        onClose={onPrepopulateClose}
      />
    </HomeMainContentContainer>
  );
};

export default ShiftCalendarBrowser;
