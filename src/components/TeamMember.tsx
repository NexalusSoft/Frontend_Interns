import React from 'react';
import '../css/TeamMember.css';
import member1 from '../image/OurTeam/team-image-1.webp';
import member2 from '../image/OurTeam/team-image-2.webp';
import member3 from '../image/OurTeam/team-image-3.webp';
import member4 from '../image/OurTeam/home-team-image-1.webp';

type TeamMemberType = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMemberType[] = [
  {
    name: 'Mathew',
    role: 'Chief Engineer',
    image: member1,
  },
  {
    name: 'Joe',
    role: 'Product Engineer',
    image: member2,
  },
  {
    name: 'Brook',
    role: 'Manager',
    image: member3,
  },
  {
    name: 'Tim',
    role: 'C E O',
    image: member4,
  },
];

function TeamMember() {
  return (
    <div className="container-fluid px-4 text-center my-5">
      <h5 className="mb-4" style={{ color: '#ffaa4a', letterSpacing: '4px', fontWeight: 400 }}>
        Our Team
      </h5>
      <h2 className="mb-4">Technology Professionals</h2>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {teamMembers.map((member, index) => (
          <div className="col" key={index}>
            <div className="team-member position-relative">
              <div className="img-wrapper">
                <img src={member.image} alt={member.name} className="img-fluid" />

                <div className="social-box">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-name mt-2">{member.name}</div>
              <div className="member-name2">{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
