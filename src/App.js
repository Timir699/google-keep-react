
import './App.css';
import { useState } from 'react'
import { Box, Flex, ThemeProvider, theme, CSSReset } from "@chakra-ui/react"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'



function App() {
    const [sidebarClick, setSidebarClick] = useState(false)

    const clickedSideButton = () => {
        setSidebarClick(!sidebarClick)
    }

    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Box paddingBottom="34%" bg="#202124" color="#E2E2E3" >
                <Header
                    clickedSideButton={clickedSideButton}
                />
                <Flex className="no-srink">
                    <Sidebar className="no-srink"
                        sidebarClick={sidebarClick}
                    />
                </Flex>
            </Box >
        </ThemeProvider>



    );
}

export default App;