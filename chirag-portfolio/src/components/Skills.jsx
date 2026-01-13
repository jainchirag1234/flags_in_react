const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PHP",
  "MySQL",
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
