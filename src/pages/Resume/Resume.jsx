import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Mufakose high 2"
            date="2018 — 2021"
            description="Odinary level"
          />
          <TimelineItem
            title="Uncommon.org"
            date="2024 — present"
            description="software development"
          />
         
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Acez electricals"
            date="2024 may-june"
            description="Created their official website as a freelancer"
          />
          <TimelineItem
            title="Volunteer youth coding instructor @uncommon.org"
            date="2024 — present"
            description="i am volunteering to teach scratch to students all over the zimbabwe"
          />
          <TimelineItem
            title="Software developer @procode platforms"
            date="2024 — present"
            description="software developer who creates, improves, and maintains software systems. You also work closely with clients to understand their requirements and ensure the software meets their needs"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Tech stack</h3>
        <ul className="skills-list content-card">
          <SkillItem title="MongoDb" value={100} />
          <SkillItem title="Expressjs" value={100} />
          <SkillItem title="Nodejs" value={100} />
          <SkillItem title="React" value={100} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
