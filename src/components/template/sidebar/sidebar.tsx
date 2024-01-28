import {Box} from '../../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../../styles/flex';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
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
                  
                  {/*
                  
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
                  */}
                  

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
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
