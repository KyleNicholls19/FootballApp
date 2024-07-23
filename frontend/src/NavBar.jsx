import { Anchor, Center, Container, Group, Menu, ActionIcon,Drawer,Popover ,NavLink,Flex,Box,Button } from '@mantine/core';
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
              <Menu.Item component={Link} to={`/fixtures/league/premier-league`}>All Premier League Fixtures</Menu.Item>
              {PremierLeagueTeams.map((item) => (
                <Menu.Item component={Link} to={`/fixtures/team/${item.url}`} key={item.url}>{item.display}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
      
      <Flex direction='row' style={{width: '100%'}}justify='center' align='flex-start'>
        <ActionIcon variant='hover' component={Link} to='/'>
        <IconHome></IconHome>
        </ActionIcon> 
        <Box width={240}>  
          <NavLink
            href="#required-for-focus"
            label="Fixtures"
            childrenOffset={3}
            className='NavLink'>         


          <NavLink
          href="#required-for-focus"
          label="Premier League"
          childrenOffset={28}
          >
            <NavLink component={Link} to={'/fixtures/league/premier-league'} label='All Premier League Fixtures'/>

            {PremierLeagueTeams.map((item) => (
              <NavLink component={Link} to={`/fixtures/team/${item.url}`} key={item.url} label={item.display}/>
            ))}


          </NavLink>
          </NavLink>
          </Box>    

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