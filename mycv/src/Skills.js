import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'SCSS', 'Git'];

  return (
    <section>
      <h2>Навыки</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
