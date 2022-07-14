import React from 'react'
import Headers from './components/header/Header'
import SideBar from './components/sideBar/SideBar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'
const App = () => {
        return (
                <>
                        <Headers />
                        <div className='app__container'>

                                <SideBar />
                                <Container fluid className='app__main'>
                                        <HomeScreen />
                                </Container>


                        </div>

                </>

        )
}
export default App
