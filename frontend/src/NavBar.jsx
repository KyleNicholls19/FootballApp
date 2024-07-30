import { Anchor, Center, Container, Group, Menu, ActionIcon,Drawer,Popover ,NavLink,Flex,Box,Button, ScrollArea,SimpleGrid,Grid } from '@mantine/core';
import { Link } from 'react-router-dom';
import data from './NameConversion.json'
import {IconHome} from '@tabler/icons-react'

function Navbar() {



  
/*
Creates the navigation bar with functionality to reroute user to different parts of the webpage
General use navbar to be displayed on multiple parts of the site
*/
    return (
      <>

        <Box pb={60}>
        <header className='header'>

        <Group className='navbar'>
        <ActionIcon variant='hover' component={Link} to='/'>
        <IconHome></IconHome>
        </ActionIcon> 


        <Group className='inner-navbar'>
        
        <Menu openDelay={100} closeDelay={400}>
        <Menu.Target>
        <Anchor target="_blank" underline="hover" className='nav-items'>Fixtures</Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Main menu</Menu.Label>
          {(data.names).map((item) => (          
          <>
          <Menu.Item>
          <Menu trigger="hover" openDelay={100} closeDelay={400} position='right-start' withArrow offset={10}>
            <Menu.Target>
              <div>{item.display}</div>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>Teams</Menu.Label>
              <ScrollArea h={400}>
              <Menu.Item component={Link} to={`/fixtures/league/${item.url}`}>All {item.display} Fixtures</Menu.Item>
              {(data[item.url]).map((item2) => (
                <Menu.Item component={Link} to={`/fixtures/team/${item.url}/${item2.url}`} key={item2.url}>{item2.display}</Menu.Item>
              ))}
              </ScrollArea>
            </Menu.Dropdown>
            </Menu>
            </Menu.Item>
            </>
            ))}

        </Menu.Dropdown>
        </Menu>
        

          <Menu withArrow offset={0} transitionProps={{transition: 'pop',duration:150}}>
            <Menu.Target>
              <Anchor target="_blank" underline="hover" className='nav-items'>
              Tables
              </Anchor>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>League Tables</Menu.Label>
              {data.names.map((item) => (
                <Menu.Item component={Link} to={`/table/${item.url}`} key={item.url}>{item.display}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu> 
          
          </Group>
        

          </Group>
          </header> 
          </Box>
        </>

      );

}


export default Navbar