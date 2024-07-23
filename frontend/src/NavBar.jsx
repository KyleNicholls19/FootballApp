import { Anchor, Center, Container, Group, Menu, ActionIcon,Drawer,Popover ,NavLink,Flex,Box,Button, ScrollArea } from '@mantine/core';
import { Link } from 'react-router-dom';
import {names,PremierLeagueTeams} from './NameConversion.json'
import {IconHome} from '@tabler/icons-react'

function Navbar() {

  
/*
Creates the navigation bar with functionality to reroute user to different parts of the webpage
General use navbar to be displayed on multiple parts of the site
*/
    return (
      <>

      
      <Flex direction='row' style={{width: '100%'}}justify='center' align='flex-start'>
        <ActionIcon variant='hover' component={Link} to='/'>
        <IconHome></IconHome>
        </ActionIcon> 

        <Menu openDelay={100} closeDelay={400}>
        <Menu.Target>
        <Anchor target="_blank" underline="hover" className='nav-items'>Fixtures</Anchor>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Main menu</Menu.Label>
          <Menu.Item>
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <div>Premier League</div>
            </Menu.Target>
            
            <Menu.Dropdown>
              <Menu.Label>Teams</Menu.Label>
              <ScrollArea h={400}>
              <Menu.Item component={Link} to={`/fixtures/league/premier-league`}>All Premier League Fixtures</Menu.Item>
              {PremierLeagueTeams.map((item) => (
                <Menu.Item component={Link} to={`/fixtures/team/${item.url}`} key={item.url}>{item.display}</Menu.Item>
              ))}
              </ScrollArea>
            </Menu.Dropdown>
          </Menu>
          </Menu.Item>
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