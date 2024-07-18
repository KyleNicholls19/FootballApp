import { Anchor, Center, Container, Group, Menu } from '@mantine/core';
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
          <Menu>
            <Menu.Target>
              <Anchor target="_blank" underline="hover" className='nav-items'>
              Tables
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>League Tables</Menu.Label>
              <Menu.Item>Bundesliga</Menu.Item>
              <Menu.Item>Premier League</Menu.Item>
              <Menu.Item>La Liga</Menu.Item>
            </Menu.Dropdown>
          </Menu>

        </Group>
        </Center>
        </Container>
      );

}


export default NavBar