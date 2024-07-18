import { Anchor, Center, Container, Group } from '@mantine/core';

function NavBar() {
    const props = {
        bg: 'blue'
    }
    return (
        <Container fluid h={50} {...props}>
        <Center>
        <Group justify="center" className = 'nav-bar'>
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover" className='test'>
            Results
          </Anchor>
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
            Fixtures
          </Anchor>
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
            Tables
          </Anchor>
        </Group>
        </Center>
        </Container>
      );

}


export default NavBar