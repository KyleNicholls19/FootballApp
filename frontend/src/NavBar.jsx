import { Anchor, Center, Container, Group, Menu, ActionIcon,Drawer,Popover ,NavLink,Flex,Box,Button, ScrollArea } from '@mantine/core';
import { Link } from 'react-router-dom';
import {names,teams} from './NameConversion.json'
import {IconHome} from '@tabler/icons-react'

function Navbar() {
  

  
/*
Creates the navigation bar with functionality to reroute user to different parts of the webpage
General use navbar to be displayed on multiple parts of the site
*/
    return (
      <>

      
      <Flex direction='row' style={{width: '100%',backgroundColor:'violet',position:'fixed',top:'0',left:'0',zIndex:'999'}}justify='center' align='flex-start' gap='xl'>
        <ActionIcon variant='hover' component={Link} to='/'>
        <IconHome></IconHome>
        </ActionIcon> 

        <Menu openDelay={100} closeDelay={400}>
        <Menu.Target>
        <Anchor target="_blank" underline="hover" className='nav-items'>Fixtures</Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Main menu</Menu.Label>
          {names.map((item) => {

          <Menu.Item>
          <Menu trigger="hover" openDelay={100} closeDelay={400} position='right-start' withArrow offset={10}>
            <Menu.Target>
              <div>{item.display}</div>
            </Menu.Target>
            {console.log(teams[item])}
            <Menu.Dropdown>
              <Menu.Label>Teams</Menu.Label>
              <ScrollArea h={400}>
              <Menu.Item component={Link} to={`/fixtures/league/${item.url}`}>All {item.display} Fixtures</Menu.Item>
              {(teams[item.url]).map((item2) => (
                <Menu.Item component={Link} to={`/fixtures/team/${item2.url}`} key={item2.url}>{item2.display}</Menu.Item>
              ))}
              </ScrollArea>
            </Menu.Dropdown>
          </Menu>
          </Menu.Item>
          })}

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
              {names.map((item) => (
                <Menu.Item component={Link} to={`/table/${item.url}`} key={item.url}>{item.display}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>    
          </Flex>
        </>

      );

}


export default Navbar