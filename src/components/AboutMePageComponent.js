import React from "react";

function AboutMePageComponent() {
  return (
    <div className="aboutMePageComponent">
      <div className="education">
        <div className="title">
          <div></div>
          EDUCATION
          <div></div>
        </div>
        <h5 style={{ color: "wheat" }}>BACHELOR's DEGREE</h5>
        <div className="study">
          <div className="small_screens">
            <div></div>
            <h6>
              <em>
                Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya
                University
              </em>
            </h6>
          </div>
          <div className="small_screens">
            <ul>
              <li>B.E - Computer Science and Engineering</li>
              <li>
                CGPA <b>:</b> 9.50
              </li>
              <li>
                Percentage <b>:</b> 92.85%
              </li>
              <li>2019-2023</li>
              <li>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1XkQ2Jc1VBqBx-4GA5dXPHK3tdrsMMWCb/view?usp=sharing"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  Click here to view certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h5 style={{ color: "wheat" }}>INTERMEDIATE</h5>
        <div className="study">
          <div className="small_screens">
            <h6>
              <em>Narayana Jr. College</em>
            </h6>
          </div>
          <div className="small_screens">
            <ul>
              <li>M.P.C</li>
              <li>
                CGPA <b>:</b> 9.67
              </li>
              <li>
                Percentage <b>:</b> 93.5%
              </li>
              <li>2017-2019</li>
              <li>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1mDzbBiSIYp7-0tSp-Lvd09I8Ir_z_yc_/view?usp=sharing"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  Click here to view certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h5 style={{ color: "wheat" }}>
          X <sup>TH</sup>
        </h5>
        <div className="study">
          <div className="small_screens">
            <h6>
              <em>Narayana EM High School</em>
            </h6>
          </div>
          <div className="small_screens">
            <ul>
              <li>State Board</li>
              <li>
                CGPA <b>:</b> 9.7
              </li>
              <li>2016-2017</li>
              <li>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1erylaod77OVRbK7SFeOu8FMNxN3MNY8b/view?usp=sharing"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  Click here to view certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="title">
          <div></div>
          SKILLS
          <div></div>
        </div>
        <div className="skill_container">
          <div className="skill">
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Redux</li>
              <li>MySQL</li>
              <li>REST API's</li>
            </ul>
          </div>
          <div className="skill">
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>OOPS</li>
              <li>DSA</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="skill">
            <ul>
              <li>UI/UX</li>
              <li>Backend Web Development &nbsp;</li>
              <li>Bootstrap</li>
              <li>System Design</li>
              <li>Linux</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="title">
          <div></div>
          EXPERIENCE
          <div></div>
        </div>
        <h5 style={{ color: "wheat" }}>INTERNSHIP</h5>
        <div className="study">
          <div className="small_screens">
            <h6>
              <em>Expand AI</em>
            </h6>
          </div>
          <div className="small_screens">
            <ul>
              <li>Data Associate - Machine Learning Intern</li>
              <li>Labeling Object Detection.</li>
              <li>Preparing Research Reports.</li>
              <li>Instance Segmentation Data.</li>
              <li>
                Adapted to changing project priorities and requirements,
                showcasing flexibility in labeling tasks.
              </li>
              <li>21/12/2021 - 21/02/2022</li>
              <li>
                {" "}
                <a
                  href="https://drive.google.com/file/d/1vcNYebONCATdDrQLhaYEh3wZITFepoMn/view?usp=sharing"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  Click here to view certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="education">
        <div className="title">
          <div></div>
          CERTIFICATIONS
          <div></div>
        </div>
        <h5 style={{ color: "wheat" }}>MERN Stack</h5>
        <div className="study">
          <div className="small_screens">
            <h6>
              <em>GUVI- IIMA & IITM Incubated Company</em>
            </h6>
          </div>
          <div className="small_screens">
            <ul>
              <li>Zen Class Full Stack Developer Program</li>
              <li>Trained MERN Stack Developer</li>
              <li>UI/UX, Backend Web Development, API</li>
              <li>Done around 10 projects to gain hands on experience</li>
              <li>06/2023 - 12/2023</li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1q1II3-SzrLgD2f2EAhZ0pRJ8sf18jHxn/view?usp=sharing"
                  style={{ color: "green", textDecoration: "none" }}
                >
                  Click here to view certificate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePageComponent;
