import { Anchor, Center, Container, Group } from '@mantine/core';

function NavBar() {
    return (
        <Container fluid h={50}>
        <Center>
        <Group justify="center">
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