import React from 'react';

const Education = () => {
  const educations = [
    {
      institution: 'Historical University in Russia',
      degree: 'Магистр истории',
      period: '2008 - 2012'
    },
    {
      institution: 'IT School',
      degree: 'Frontend Developer',
      period: '2023'
    }
  ];

  return (
    <section>
      <h2>Образование</h2>
      <ul>
        {educations.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree} — {edu.institution}</h3>
            <p>{edu.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
