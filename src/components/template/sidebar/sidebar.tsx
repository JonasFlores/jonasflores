import React, {useState} from 'react';
import {Box} from '../../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../../styles/flex';
import {CompaniesDropdown} from './companies-dropdown';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {BalanceIcon} from '../icons/sidebar/balance-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {DevIcon} from '../icons/sidebar/dev-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {useSidebarContext} from '../layout/layout-context';
import {useRouter} from 'next/router';

export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0'
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%' }}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Home"
                     icon={<HomeIcon />}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="Main Menu">
                     
                     <SidebarItem
                        title="CV"
                        icon={<HomeIcon />}
                        isActive={router.pathname === '/cv'}
                        href="/cv"
                     />
                     
                     
                     <SidebarItem
                        isActive={router.pathname === '/tests'}
                        title="Tests"
                        icon={<ReportsIcon />}
                        href='/tests'
                     />
                     
                  </SidebarMenu>
                  
                  <SidebarMenu title="Dashboard Template">
                     <CollapseItems
                        icon={<BalanceIcon />}
                        title="Templates"
                        items={[
                           {title: 'Home', href:"/template/home"},
                           {title: 'Accounts', href: "/template/accounts"},
                           {title: 'LandingPage', href:"/template/landing"}
                        ]}
                        />

                  </SidebarMenu>

                  <SidebarMenu title="Future features">
                     <SidebarItem
                        isActive={router.pathname === '/developers'}
                        title="Source Code"
                        icon={<DevIcon />}
                        
                     />
                     <SidebarItem
                        isActive={router.pathname === '/settings'}
                        title="Settings"
                        icon={<SettingsIcon />}
                     />
                  </SidebarMenu>
               </Sidebar.Body>

               <Sidebar.Footer>
                  {/* 
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  */}
                  <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar
                        src="https://avatars.githubusercontent.com/u/20671649?v=4"
                        size={'sm'}
                     />
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
