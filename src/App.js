import React from 'react';
import './App.css';
import myResume from './resume.json';

function networkIcon(network) {
  console.log(network);
  if (network === "Twitter") {
    return "fa fa-twitter";
  }
  else if (network === "GitHub") {
    return "fa fa-github";
  }
  else if (network === "Stack Overflow") {
    return "fa fa-stack-overflow";
  }
  return "fa fa-globe";
}

function Basics(props) {
  return (
    <div className="basics box">
      <div className="pure-g">
        <div className="pure-u-3-5">
          <h1 id="name">{myResume.basics.name}</h1>
        </div>
        <div className="pure-u-2-5" style={{ textAlign: "right" }}>
          <p>
              <a className="mono prof" href={myResume.basics.website}>{myResume.basics.website.replace('http://','')}</a><i className="fa fa-globe" />
          </p>
          {myResume.basics.profiles.map(prof => (
            <div key={prof.network}>
            <p><a className="mono prof" href={prof.url}>@{prof.username}</a> 
            <i className={networkIcon(prof.network)} />
            </p></div>
          ))}
          <p><a className="mono prof" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{myResume.basics.email}</a><i className="fa fa-envelope-o" /></p>
        </div>
      </div>
      <p>{myResume.basics.summary}</p>
    </div>
  )
}

function WorkItem(props) {
  return (
    <div className="work-item box">
      <div className="pure-g">
        <div className="pure-u-1-4">
          <h4>{props.position}</h4>
          <p className="mono">{props.startDate} - {props.endDate}</p>
        </div>
        <div className="pure-u-3-4">
          <ul>
            {props.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

WorkItem.defaultProps = {
  endDate: "Present",
  highlights: [],
}

function Work(props) {
    return (
      <div className="work box">
        <h2>Warby Parker</h2>
        {myResume.work.filter(function(x) { return x.company === "Warby Parker" }).map(workItem => (
          <WorkItem
            key={workItem.position}
            company={workItem.company}
            position={workItem.position}
            startDate={workItem.startDate}
            endDate={workItem.endDate}
            highlights={workItem.highlights}
            />
        ))}
        <h2>LIT</h2>
        {myResume.work.filter(function(x) { return x.company === "LIT" }).map(workItem => (
          <WorkItem
            key={workItem.position}
            company={workItem.company}
            position={workItem.position}
            startDate={workItem.startDate}
            endDate={workItem.endDate}
            highlights={workItem.highlights}
            />
        ))}
      </div>
    )
}

function EducationItem(props) {
  return (
    <div className="education-item box">
      <h3>{props.institution}</h3>
      <p>{props.studyType} {props.area}</p>
      <p className="mono">{props.startDate} - {props.endDate}</p>
    </div>
  )
}

function Education(props) {
  return (
    <div className="education box">
      <h2>Education</h2>
      {myResume.education.map(ed => (
        <EducationItem
          key={ed.institution}
          institution={ed.institution}
          area={ed.area}
          studyType={ed.studyType}
          startDate={ed.startDate}
          endDate={ed.endDate}
          />
      ))}
    </div>
  )
}

function SkillItem(props) {
  return (
    <div className="skill-item box">
      <h3>{props.name}</h3>
      <ul>
        {props.keywords.map(kw => (
          <li key={kw}>{kw}</li>
        ))}
      </ul>
    </div>
  )
}

function Skills(props) {
  return (
    <div className="skills box">
      <h2>Skills</h2>
      {myResume.skills.map(skill => (
        <SkillItem
          key={skill.name}
          name={skill.name}
          level={skill.level}
          keywords={skill.keywords}
          />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <div className="paper">
        <div className="left">
          <Basics />
          <Work />
        </div>
        <div className="right">
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
