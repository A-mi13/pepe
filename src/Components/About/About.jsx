import './about.css'

const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about__container container">
        <div className="about__content flex">
          <div className="about__bg"></div>
          <div className="about__right">
            <h2 className="about__title"> 
              <span className="about__title-span">About US</span> About US
            </h2>
            <p className="about__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con <br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu <br /><br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
