import React from 'react';

function About(props) {
  const { imageSrc = 'https://via.placeholder.com/215', text } = props;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{ "A blog about learning React"}</p>
    </aside>
  );
}

export default About;
