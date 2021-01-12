import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Container, GridColumn, Header, Image, Segment, Grid, Card, } from 'semantic-ui-react';
import Nav from '../../components/Nav';

class Landing extends Component {

    render() {

      return (
        <div>
          <div>
            <Nav page="home"/> 
          </div>
          
          <Segment inverted style={{margin: 0}}>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <Container text>
                  <Header
                    as='h1'
                    content='Rahul Rudra'
                    inverted
                    style={{
                      fontSize: 70,
                      fontWeight: 'normal',
                      marginBottom: 0,
                      marginTop: 50,
                    }}
                  />
                  <Header
                    as='h2'
                    content='Computer Scientist'
                    inverted
                    style={{
                      fontSize: 0 ? '1.5em' : '1.7em',
                      fontWeight: 'normal',
                      marginTop: 0 ? '0.5em' : '1.5em',
                      marginBottom: 80,
                    }}
                  />
                </Container>
              </Grid.Column>
              <GridColumn>
              <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BwSSIfLiIjTrEyK00DKy2gHaEM%26pid%3DApi&f=1' 
                     size='medium' 
                     circular
                     style={{ marginTop:70 }} />
              </GridColumn>
            </Grid>
          </Segment>

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YupX9dK6VYa-wm-4zEvbUAHaFj%26pid%3DApi&f=1' fluid />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mYC7_NoqKSFLBe1mqhqyyQHaFj%26pid%3DApi&f=1' fluid />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KtQKbLbF_l80z6IQfX1ZogHaFj%26pid%3DApi&f=1' fluid  />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          <Header as='h1' textAlign='center' style={{fontSize: 40, marginTop: 80}}>
            Who Am I?
          </Header>
          
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                
              </Grid.Column>
              <Grid.Column>
                <Card fluid centered style={{backgroundColor: 'black'}}>
                  <Card.Content textAlign='center' as='h1' style={{color: 'white', fontSize: 18}}>
                    Recent Graduate
                  </Card.Content>
                  <Card.Content style={{color: 'white'}}>
                    The Fall of 2020 I graduated from the University of Florida with a Bachelor’s 
                    in Computer Science and a Minor in Innovation. My minor in innovation lead me to take on classes that were focused on 
                    developing my entrepreneurial ability and knowledge. During my time at UF I also took part in 
                    organizations and extra-circulars that were heavily related to my field of study as well as others 
                    that merely sparked my interest. Some of the activities I participated in that were closely related 
                    to computer science included Swamphacks and Capture the Flag events. I was also fortunate enough to 
                    assist in the research of an autonomous driving and control systems project that was overseen by an 
                    advisor at UF. The Reitz Programming Board was one of the organizations I joined at UF that centered 
                    around hosting events at the Reitz Union. Although it had very little to do with my major I gained 
                    experience in leadership and organizational skills.
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Header as='h1' textAlign='center' style={{fontSize: 40, marginTop: 80}}>
            What Have I Done?
          </Header>
          
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card fluid centered style={{backgroundColor: 'black'}}>
                  <Card.Content textAlign='center' as='h1' style={{color: 'white', fontSize: 18}}>
                    A Student
                  </Card.Content>
                    <Card.Content style={{color: 'white'}}>
                      As a student at the University of Florida I was exposed to and became adept in many of the 
                      fundamentals required of Computer Scientist to be successful in their field. The classes I 
                      completed included but is not limited to data structures, operating systems, software 
                      engineering, database fundamentals, and continuous integration/development. Many of the 
                      classes I took required me to develop projects that ranged from peer to peer file sharing 
                      applications in java to predicting the genre of an audio file using a Convolutional Neural Network.
                      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid centered style={{backgroundColor: 'black'}}>
                  <Card.Content textAlign='center' as='h1' style={{color: 'white', fontSize: 18}}>
                    An Intern
                  </Card.Content>
                  <Card.Content style={{color: 'white'}}>
                    I also gained experience as a Dev Ops intern during the summer of 2019. At this internship 
                    I helped implement a software named Speedy to monitor the agile practices of the development 
                    teams. I specifically helped in debugging the software and its interactions with the back-end 
                    database. I was also tasked with implementing a prediction model using AWS Forecast to 
                    determine what future sales at specific locations would amount to.
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid centered style={{backgroundColor: 'black'}}>
                  <Card.Content textAlign='center' as='h1' style={{color: 'white', fontSize: 18}}>
                    An Assistant
                  </Card.Content>
                  <Card.Content style={{color: 'white'}}>
                    The most experience I’ve gained however is from my time as a research assistant for my lab. 
                    The lab I participated in consisted of 3 masters students and myself. My role in the lab 
                    initially was to learn the system that was being developed, at the time we only had one model 
                    car functional. However due to the pandemic caused by Covid and half of the lab members 
                    graduating at the end of the semester, it was my sole responsibility to completely develop a 
                    second model car for testing interactions between two vehicles. Not only was I able to accomplish this 
                    but I was able to progress our vehicles abilities to be able to map its environment, localize 
                    itself within the map, and then drive to a location or follow a path that was specified on the map. 
                    It also has the ability to pursue an April tag if detected by the mounted camera. All of the self 
                    driving algorithms are written in Python using ROS subscribers and publishers to communicate data. 
                    My role in this lab started off small but within a year I was able to take the reigns and am now 
                    the main leader of the lab.
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Header as='h1' textAlign='center' style={{fontSize: 40, marginTop: 80}}>
            Why Choose Me?
          </Header>
          
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                
              </Grid.Column>
              <Grid.Column>
                <Card fluid centered style={{backgroundColor: 'black'}}>
                  <Card.Content textAlign='center' as='h1' style={{color: 'white', fontSize: 18}}>
                    A Drive to Succeed
                  </Card.Content>
                  <Card.Content style={{color: 'white'}}>
                    As you can see, the experience I have is varied. I have a little bit of experience from software development 
                    all the way to robotic automation. I think this illustrates the fact that I have a natural curiosity for all 
                    focuses of computer science. Learning more about computer systems, how they work, and improving on them is a 
                    passion that has really grown on me. I am always eager to tackle challenges that are nontrivial in order to 
                    improve my knowledge. Even if the task may seem out of my scope I will always ensure that I can impact my team 
                    in positive ways. I have been faced multiple times with solving problems that required me to adapt and learn in 
                    order to succeed. Another takeaway from my experiences also exemplify my commitment to achieving the tasks I set 
                    for myself. Some of my accomplishments came with a rigorous amount of work and studying to attain. I can guarantee 
                    any team that if I commit to an assignment it will get completed. Previous professors and managers that I have 
                    worked with can attest to the fact that my work ethic is unmatched.
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      )
    }
  }

export default withRouter(Landing);