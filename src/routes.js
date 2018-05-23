import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import NavProps from './constants/navigation';

import HomeScreen from './components/screens/HomeScreen';
import AccountScreen from './components/screens/AccountScreen';

const Routes = (
    <Stack>
        <Scene hideNavBar>
        <Tabs
            key="tabbar"
            swipeEnabled
            type="replace"
            showLabel={false}
            {...NavProps.tabProps}>
                <Stack
                    key="home"
                    title="CRNABZR"
                    icon={() => <Icon name="planet" {...NavProps.icons} />}
                    {...NavProps.navbarProps}
                    >
                    <Scene key="home" component={HomeScreen} />
                </Stack>
                <Stack
                    key="profile"
                    title="Profile"
                    icon={() => <Icon name="person" {...NavProps.icons} />}
                    {...NavProps.navbarProps}
                    >
                    <Scene key="home" component={AccountScreen} />
                </Stack>

        </Tabs>
            
        </Scene>
    </Stack>
)

export default Routes;