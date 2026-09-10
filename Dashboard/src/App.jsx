import { useState } from 'react'
import './App.css'
import { Button, Card, Col, Container, FormControl, FormGroup, InputGroup, ListGroup, ListGroupItem, Row, Stack } from 'react-bootstrap'
import { LuLayoutDashboard } from "react-icons/lu";
import { GoPlus, GoTasklist } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelp } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { useTimer } from 'react-timer-hook'

function App() {


  google.charts.load('current', { 'packages': ['corechart'] });


  google.charts.setOnLoadCallback(drawChart);


  function drawChart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Week days');
    data.addColumn('number', 'Porcentage');
    data.addRows([
      ['Sunday', 30],
      ['Monday', 12],
      ['Tuesday', 18],
      ['Wednesday', 29],
      ['Thursday', 32],
      ['Friday', 10],
      ['Saturday', 64],

    ]);


    var options = {
      'title': '',
      'width': 500,
      'height': 200

    };


    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart2);
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Project', 'Porcentage'],
      ['Pending', 25],
      ['Complete', 75],
    ]);

    var options = {
      title: '',
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }

  // function Timer({ expiryTimestamp }) {
  //   const {
  //     totalSeconds,
  //     milliseconds,
  //     seconds,
  //     minutes,
  //     hours,
  //     days,
  //     isRunning,
  //     start,
  //     pause,
  //     resume,
  //     restart,
  //   } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 })
  //   return (
  //     <div style={{ textAlign: 'center' }}>

  //       <div style={{ fontSize: '100px' }}>
  //        <span>{seconds}</span>:<span>{milliseconds}</span>
  //       </div>
  //       <p>{isRunning ? 'Running' : 'Not running'}</p>
  //       <button onClick={start}>Start</button>
  //       <button onClick={pause}>Pause</button>
  //       <button onClick={resume}>Resume</button>
  //       <button onClick={() => {

  //         const time = new Date();
  //         time.setSeconds(time.getSeconds() + 300);
  //         restart(time)
  //       }}>Restart</button>
  //     </div>
  //   );
  // }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);


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
                    <span className='text-secondary fs-5'>Menu</span>
                  </div>
                  <div className='botoes-nav'>

                    <Button aria-label='Go to the dashboard page' className='bg-transparent border-0 px-0 button-dashboard'><p className='fw-semibold text-black mb-1 fs-4'><LuLayoutDashboard className='me-2' color='black' size={24} /> Dashboard</p></Button>
                    <Button aria-label='Go to the tasks page' className='bg-transparent border-0 px-0 '><p className='fw-thin text-secondary mb-1 fs-4'><GoTasklist className='me-2' color='black' size={24} /> Tasks</p></Button>
                    <Button aria-label='Go to the calendar page ' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1 fs-4'><FaRegCalendar className='me-2' color='black' size={24} /> Calendar</p></Button>
                    <Button aria-label='Go to the analytics page' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1 fs-4'><TbBrandGoogleAnalytics className='me-2' color='black' size={24} /> Analytics</p></Button>
                    <Button aria-label='Go to the team page' className='bg-transparent border-0 px-0'><p className='fw-thin text-secondary mb-1 fs-4'><AiOutlineTeam className='me-2' color='black' size={24} /> Team</p></Button>

                  </div>
                </Stack>
              </div>



              <div>

                <Stack gap={3}>
                  <div>
                    <p className='text-secondary mb-0 fs-5'>General</p>
                  </div>
                  <div className='botoes-nav'>

                    <Button aria-label='Go to the settings page' className='bg-transparent border-0 px-0 fs-4'><p className='fw-thin text-secondary mb-1'><IoSettingsOutline className='me-2' color='black' size={24} /> Settings</p></Button>
                    <Button aria-label='Call help/support' className='bg-transparent border-0 px-0 fs-4'><p className='fw-thin text-secondary mb-1'><IoHelp className='me-2' color='black' size={24} /> Help</p></Button>
                    <Button aria-label='Logout from the system' className='bg-transparent border-0 px-0 fs-4'><p className='fw-thin text-secondary mb-1'><IoLogOutOutline className='me-2' color='black' size={24} /> Logout</p></Button>
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
              <div className='col-4 d-flex align-items-center'>
                <FormGroup className='border-start-0'>

                  <InputGroup className='border-end-0'>
                    <InputGroup.Text className='bg-white border-end-0'>
                      <CiSearch color='black' size={24} />
                    </InputGroup.Text>
                    <FormControl
                      aria-label='Search up tasks'
                      placeholder='Search tasks'
                    />
                  </InputGroup>
                </FormGroup>
              </div>

              <div className='d-flex gap-4 align-items-center'>
                <MdOutlineEmail size={24} />
                <FaRegBell size={24} />
                <div className='d-flex gap-3'>
                  <img src='https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='image-profile' alt='Image profile' />
                  <div>

                    <p className='mb-0'>Mark_toni</p>
                    <p className='text-secondary'>mark_toni@gmail.com</p>
                  </div>

                </div>
              </div>
            </Card>



            <Card className='card-3'>
              <section className='d-flex justify-content-between'>
                <div>
                  <h2>Dashboard</h2>
                  <p className='text-secondary'>Plain, prioritize and accomplish your tasks</p>
                </div>
                <div>

                  <Stack direction='horizontal' gap={4}>
                    <Button aria-label='Add project' className='button-add-project'><GoPlus size={20} /> Add project</Button>
                    <Button aria-label='Import data' className='button-import-data'>Import Data</Button>

                  </Stack>
                </div>

              </section>
              <Row>
                <Col>


                  <Card className='card-1-dashboard'>
                    <Card.Title className='px-3 pt-3'>
                      Total Projects
                    </Card.Title>
                    <Card.Body className='px-3'>
                      <span className='fs-1'>24</span>
                    </Card.Body>
                    <Card.Footer className='border-top-0 bg-transparent px-3'>
                      <span className='text-custom-green'>Increased from last month</span>
                    </Card.Footer>
                  </Card>



                </Col>
                <Col>
                  <Card>
                    <Card.Title className='px-3 pt-3'>
                      Ended Projects
                    </Card.Title>
                    <Card.Body className='px-3'>
                      <span className='fs-1'>10</span>
                    </Card.Body>
                    <Card.Footer className='border-top-0 bg-transparent px-3'>
                      <span className='text-custom-green'>Increased from last month</span>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col>
                  <Card>
                    <Card.Title className='px-3 pt-3'>
                      Running Projects
                    </Card.Title>
                    <Card.Body className='px-3'>
                      <span className='fs-1'>12</span>
                    </Card.Body>
                    <Card.Footer className='border-top-0 bg-transparent px-3'>
                      <span className='text-custom-green'>Increased from last month</span>
                    </Card.Footer>
                  </Card>
                </Col>

                <Col>
                  <Card>
                    <Card.Title className='px-3 pt-3'>
                      Pending Projects
                    </Card.Title>
                    <Card.Body className='px-3'>
                      <span className='fs-1'>2</span>
                    </Card.Body>
                    <Card.Footer className='border-top-0 bg-transparent px-3'>
                      <span className='text-custom-green'>On discuss</span>
                    </Card.Footer>
                  </Card>
                </Col>

              </Row>
              <Row className='mt-3'>
                <Col className='col-6 '>
                  <Card className='p-3'>
                    <span className='fs-4'>Project Analytics (%)</span>

                    <div id='chart_div'></div>
                  </Card>
                </Col>
                <Col>
                  <Card className='p-3'>
                    <p className='fs-4'>Reminders</p>

                    <p className='fs-3 text-custom-color'>Meeting with arc company</p>
                    <p className='text-secondary'>Time: 02:00 pm - 04:00 pm</p>
                    <Button aria-label='Start a meeting' className='button-meeting'><MdOutlineVideoCameraFront className='me-2' color='white' size={20} /> Start meeting</Button>
                  </Card>
                </Col>

                <Col>
                  <Card className='p-3 d-flex gap-3'>
                    <div className='d-flex justify-content-between'>

                      <span className='fs-4'>Project</span>
                      <Button aria-label='New project' className='button-new-project'>+ New</Button>
                    </div>
                    <div>

                      <div>
                        <p className='mb-0 fw-semibold'>Develop systems</p>
                        <p className='text-secondary'>Develop systems with auth</p>

                      </div>

                      <div>
                        <p className='mb-0 fw-semibold'>Integrate auth system</p>
                        <p className='text-secondary'>Integrate user authentication</p>

                      </div>

                      <div>
                        <p className='mb-0 fw-semibold'>Test automaty</p>
                        <p className='text-secondary'>Test if automaty is now working</p>

                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row className='mt-2 pb-2'>
                <Col className='col-5 pb-2'>
                  <Card className='p-3'>
                    <div className='d-flex justify-content-between'>

                      <span className='fs-4'>Project Collaboration</span>
                      <Button aria-label='New member' className='button-new-member'>+ New member</Button>

                    </div>
                    <ListGroup className='mt-3'>
                      <ListGroupItem>
                        <div className='d-flex gap-3'>

                          <img src='https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='image-profile' alt='Image profile' />

                          <div className='me-5'>


                            <p className='mb-0'>Alexandra Deff</p>
                            <p><span className='text-secondary'>Working on</span> <span className='fw-bold'>Github repositories</span></p>
                          </div>

                          <span className='text-success'>Complete</span>



                        </div>
                      </ListGroupItem>
                      <ListGroupItem>
                        <div className='d-flex gap-3'>

                          <img src='https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='image-profile' alt='Image profile' />

                          <div className='me-5'>


                            <p className='mb-0'>Edwin Adenike</p>
                            <p><span className='text-secondary'>Working on</span> <span className='fw-bold'>Integrating user auth</span></p>
                          </div>

                          <span>Pending</span>



                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
                <Col className='pb-2' >
                  <Card className='p-3 '>
                    <span className='fs-4'>
                      Project Progress
                    </span>
                    <div id='donutchart'></div>
                  </Card>
                </Col>
                <Col >
                  <Card className='p-3'>
                    <span className='fs-4'>Timer Tracker</span>

                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>

        </Row>

      </Container>
    </>
  )
}

export default App
