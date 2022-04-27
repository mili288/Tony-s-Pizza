import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
  <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
      <div className="aboutBottom">
          <h1>ABOUT US</h1>
          <p>It may be audacious even to attempt a definition of his greatness, but it is not so difficult to describe the gifts that enabled him to create imaginative visions of pathos and mirth that, whether read or witnessed in the theatre, fill the mind and linger there. He is a writer of great intellectual rapidity, perceptiveness, and poetic power. Other writers have had these qualities, but with Shakespeare the keenness of mind was applied not to abstruse or remote subjects but to human beings and their complete range of emotions and conflicts. Other writers have applied their keenness of mind in this way, but Shakespeare is astonishingly clever with words and images, so that his mental energy, when applied to intelligible human situations, finds full and memorable expression, convincing and imaginatively stimulating. As if this were not enough, the art form into which his creative energies went was not remote and bookish but involved the vivid stage impersonation of human beings, commanding sympathy and inviting vicarious participation. Thus, Shakespeare’s merits can survive translation into other languages and into cultures remote from that of Elizabethan England.</p>
      </div>
</div>
  );
}

export default About;
