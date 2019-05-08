import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export class resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
          <div style={{textAlign:'çenter'}}>
          <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
          alt="avatar" 
          style={{height:'200px'}}/>
          </div>

          <h2 style={{paddingTop: '0.5em'}}>Abi</h2>
          <h4 style={{color:'grey'}}>Programmer</h4>
          <hr style={{borderTop:'3px solid #833fb2'}}/>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
          content here', making it look like readable English.  
          </p>
          <hr style={{borderTop:'3px solid #833fb2'}}/>
          <h5>Address</h5>
          <p>1 Colombo Gold Way Park, 7843</p>
          <h5>Phone</h5>
          <p>(021) 345-7868</p>
          <h5>Email</h5>
          <p>abi@gmail.com</p>
          <h5>Web</h5>
          <p>mywebsite.com</p>
          <hr style={{borderTop:'3px solid #833fb2'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>
          <Education 
          startYear={2010}
          endYear={2014}
          schoolName="My University"
          schoolDescription="It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout."
          />

          <Education 
          startYear={2015}
          endYear={2016}
          schoolName="My 2nd University"
          schoolDescription="It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout."
          />
          <hr style={{borderTop: '3px solid #e22947'}}/> 

          <h2>Experience</h2>

          <Experience
          startYear={2017}
          endYear={2018}
          jobName="First Job"
          jobDescription="It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout."
          />

          <Experience
          startYear={2018}
          endYear={2019}
          jobName="Second Job"
          jobDescription="It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout."
          />

          <hr style={{borderTop: '3px solid #e22947'}}/> 

          <h2>Skills</h2>
          <Skills
          skill="HTML/CSS"
          progress={100}
          />

<Skills
          skill="javascript"
          progress={80}
          />

<Skills
          skill="React"
          progress={70}
          />

<Skills
          skill="SpringBoot"
          progress={80}
          />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default resume
