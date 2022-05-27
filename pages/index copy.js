import { Flex, Input, Heading, Button, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import React from 'react'
import Image from 'next/image'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const IndexPage = () => {
  const [value, setValue] = React.useState('1')
  const [startDate, setStartDate] = React.useState(    
    setHours(setMinutes(new Date(), 30), 16)
  );
  const onChange = incoming_date => {
    console.log(date)
    setDate(new Date(incoming_date));
    console.log(date)
  }

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return(
   <Flex height="100vh" alignItems="center" justifyContent="center">
     <Flex direction="column" background="gray.100" p={12} rounded={6}>
        
        <Input placeholder="Nombre" variant="outline" mb={3} size='sm'/>
        <Input placeholder="Email" variant="outline" mb={3} size='sm'/>
        <Input placeholder="Teléfono" variant="outline" mb={3} size='sm'/>
        <Input placeholder="¿Donde estará tu auto" variant="outline" mb={3} size='sm'/>
        <Text mb='2px'>¿De qué tamaño es tu vehículo?</Text>
        <RadioGroup onChange={setValue} value={value} mb="2px">
          <Stack direction='row'>
            <Radio value='1'><Image src="https://carvuk.com/images/carvuk-logo.svg" width="100vh" height="100vh"/></Radio>
            <Radio value='2'><Image src="https://carvuk.com/images/carvuk-logo.svg" width="100vh" height="100vh"/></Radio>
            <Radio value='3'><Image src="https://carvuk.com/images/carvuk-logo.svg" width="100vh" height="100vh"/></Radio>
            <Radio value='4'><Image src="https://carvuk.com/images/carvuk-logo.svg" width="100vh" height="100vh"/></Radio>
          </Stack>
        </RadioGroup>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 30), 18)}
          filterDate={isWeekday}
          locale="es"
          placeholderText="¿Para cuando quieres agendar?"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <Button colorScheme='blue'>Agendar</Button>
     </Flex>
   </Flex>)
  }

  export default IndexPage
