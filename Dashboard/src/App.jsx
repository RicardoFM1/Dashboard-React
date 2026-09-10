import { useState } from 'react'
import './App.css'
import { Button, Card, Col, Container, FormControl, FormGroup, InputGroup, Row, Stack } from 'react-bootstrap'
import { LuLayoutDashboard } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

function App() {


  return (
    <>
      <Container fluid>
        <Row className='mt-3'>


          <Col role='header' as={'header'} className='coluna-1' lg={3}>
            <Card className='card-1'>
              <div className='d-flex align-items-center gap-2'>
                <img className='image' src='./src/assets/logo.jpg'></img>
                <p className='fw-bold fs-4 mb-2'>Donezo</p>
              </div>
              <div>

                <Stack gap={3}>
                  <div>
                    <span className='text-secondary'>Menu</span>
                  </div>
                  <div className='botoes-nav'>

                    <Button aria-label='Go to the dashboard page' className='bg-transparent border-0 px-0 button-dashboard'><p className='fw-semibold text-black mb-1'><LuLayoutDashboard className='me-2' color='black' size={20} /> Dashboard</p></Button>
                    <Button aria-label='Go to the tasks page' className='bg-transparent border-0 px-0 '><p className='fw-thin text-secondary mb-1 '><GoTasklist className='me-2' color='black' size={20} /> Tasks</p></Button>
                    <Button aria-label='Go to the calendar page ' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1'><FaRegCalendar className='me-2' color='black' size={20} /> Calendar</p></Button>
                    <Button aria-label='Go to the analytics page' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1'><TbBrandGoogleAnalytics className='me-2' color='black' size={20} /> Analytics</p></Button>
                    <Button aria-label='Go to the team page' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1'><AiOutlineTeam className='me-2' color='black' size={20} /> Team</p></Button>

                  </div>
                </Stack>
              </div>



              <div>

                <Stack gap={3}>
                  <div>
                    <p className='text-secondary mb-0'>General</p>
                  </div>
                  <div className='botoes-nav'>

                    <Button aria-label='Go to the settings page' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1'><IoSettingsOutline className='me-2' color='black' size={20} /> Settings</p></Button>
                    <Button aria-label='Call help/support' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1'><IoHelp className='me-2' color='black' size={20} /> Help</p></Button>
                    <Button aria-label='Logout from the system' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1'><IoLogOutOutline className='me-2' color='black' size={20} /> Logout</p></Button>
                  </div>
                </Stack>
              </div>

              <Card className='p-3 d-flex align-items-center card-download'>
                <Card.Title>
                  Download our mobile App
                </Card.Title>
                <Card.Body>
                  <Button aria-label='Download mobile app' className='button-download'>Download</Button>
                </Card.Body>
              </Card>

            </Card>

          </Col>


          <Col role='main' as={'main'} className='d-flex flex-column gap-5 coluna-2'>
            <Card className='card-2'>
              <div className='col-4'>
                <FormGroup className='border-start-0'>

                  <InputGroup className='border-end-0'>
                    <InputGroup.Text className='bg-white border-end-0'>
                      <CiSearch color='black' size={20} />
                    </InputGroup.Text>
                    <FormControl
                      placeholder='Search tasks'
                    />
                  </InputGroup>
                </FormGroup>
              </div>

              <div className='d-flex gap-4 align-items-center'>
                <MdOutlineEmail size={20}/>
                <FaRegBell size={20}/>
                <img src='https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='image-profile' alt='Image profile'/>
              </div>
            </Card>



            <Card className='card-3'>Dashboard (Main)</Card>
          </Col>



        </Row>
      </Container>
    </>
  )
}

export default App
