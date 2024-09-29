import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: 'Frontend Developer',
      company: 'WeTec Co., Ltd.',
      period: '2022 - настоящее время',
      description: 'Разработка интерфейсов для веб-приложений на React.'
    },
    {
      position: 'History Teacher',
      company: 'School in Russia',
      period: 'до 2014',
      description: 'Преподавание истории и подготовка учебных материалов.'
    }
  ];

  return (
    <section>
      <h2>Опыт работы</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <h3>{exp.position} — {exp.company}</h3>
            <p>{exp.period}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
