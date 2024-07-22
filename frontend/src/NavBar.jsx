import { Anchor, Center, Container, Group, Menu, ActionIcon,Drawer,Popover } from '@mantine/core';
import { Link } from 'react-router-dom';
import {names} from './NameConversion.json'
import {IconHome} from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks';

function Navbar() {
  
/*
Creates the navigation bar with functionality to reroute user to different parts of the webpage
General use navbar to be displayed on multiple parts of the site
*/
    return (
        <Container fluid h={50} >
        <Center>
        <Group justify="center" spacing='xl'>
        <ActionIcon variant='hover' component={Link} to='/'>
        <IconHome></IconHome>
        </ActionIcon>       
          <Anchor href="https://mantine.dev/" target="_blank" underline="hover" className='nav-items'>
            Results
          </Anchor>


          
          <Anchor component={Link} to={'/fixtures/league/premier-league'} underline="hover" className='nav-items'>
          Fixtures
          </Anchor>


          <Menu withArrow offset={0} transitionProps={{transition: 'pop',duration:150}}>
            <Menu.Target>
              <Anchor target="_blank" underline="hover" className='nav-items'>
              Tables
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>League Tables</Menu.Label>
              {names.map((item) => (
                <Menu.Item component={Link} to={`/table/${item.url}`} key={item.url}>{item.display}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>

        </Group>
        </Center>
        </Container>
      );

}


export default Navbar