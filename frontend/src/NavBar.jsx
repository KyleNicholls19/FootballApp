import { Anchor, Center, Container, Group } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';

function NavBar() {
    const theme = useMantineTheme(); 
    const props = {
        
    }


    return (
        <Container fluid h={50} {...props}>
        <Center>
        <Group justify="center">
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover" className='nav-items'>
            Results
          </Anchor>
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover" className='nav-items'>
            Fixtures
          </Anchor>
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover" className='nav-items'>
            Tables
          </Anchor>
        </Group>
        </Center>
        </Container>
      );

}


export default NavBar