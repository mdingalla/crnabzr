import React from 'react';
import { Router,Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import NavProps from './constants/navigation';


import HomeScreen from './components/screens/HomeScreen';
import AccountScreen from './components/screens/AccountScreen';
import About from './components/screens/About';

const Routes = (
    <Router>
            <Stack key="root">
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
                                    title="Home"
                                    icon={() => <Icon name="home" {...NavProps.icons} />}
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
                                    <Scene key="profile" component={AccountScreen}  />
                                </Stack>
                        </Tabs>
                    </Scene>

                    <Scene
                        clone
                        key="about"
                        title="about"
                        {...NavProps.navbarProps}
                        component={About} />
                </Stack>
            </Stack>
          </Router>
)

export default Routes;