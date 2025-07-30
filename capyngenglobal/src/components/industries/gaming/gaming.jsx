import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../style.css';

const Gaming = () => {
  return (
    <div className=" bg-black">
      {/* Hero Section */}
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(11, 42, 76, 0.9)), url("/background.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
          flexDirection: 'column',
          display: 'flex',
          textAlign: 'center'
        }}
      >
        <h1 className="display-4 fw-bold">Gaming</h1>
        <p className="lead">A Place Where New Ideas and Deep Experiences Meet</p>
        <button className="btn btn-primary mt-3">Let's Talk →</button>
      </div>

      {/* Intro Paragraph */}
      <div className="container py-5">
        <p className="text-center text-secondary">
          Gaming has come a long way; it's not just a hobby anymore. These days, it's a great mix of stories, entertainment, and the latest technology. Gaming has become a cultural force around the world, with millions of people getting lost in ever-changing digital worlds and having experiences they'll never forget, whether they're playing on a console, PC, or mobile device.
        </p>
      </div>

      {/* Core Skills - Gaming Industry Growth */}
      <div className="container py-3">
        <div className="row align-items-center"> {/* Added align-items-center for vertical alignment */}
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-white text-start">Gaming Industry Growth</h3>
            <ul className="text-secondary">
              <li>
                In the past few years, the gaming industry has grown much faster than the movie and music industries. This makes it one of the most popular forms of entertainment in the world. At first, video games were only for kids or small groups of people. Now, people of all ages and backgrounds like them.
              </li>
              <li>
                There are games like God of War, Zelda: Tears of the Kingdom, and The Last of Us that have stories and emotions that are as deep as movies. But Fortnite and Valorant let people from all over the world play with each other in real time. These aren't just games; they're real life.
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center"> {/* Image section */}
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38148e658" // Example gaming image
              className="img-fluid rounded shadow"
              alt="Gaming Industry Growth"
            />
          </div>
        </div>
      </div>

      {/* Core Skills - Using Tech to Spark New Ideas */}
      <div className="container py-3">
        <div className="row align-items-center flex-md-row-reverse"> {/* Reverse order for left text, right image */}
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-start text-white">Using Tech to Spark New Ideas</h3>
            <ul className="text-secondary">
              <li>
                Technology is a big part of modern gaming. AI, AR, VR, and cloud computing have all come a long way, and these changes have changed how people play, experience, and talk about games.
              </li>
              <li>AI makes games more logical by making NPCs smarter and stories that react better.</li>
              <li>VR and AR put players in real-life situations, turning gaming into a sport.</li>
              <li>There are no hardware limits with cloud gaming because you can stream high-quality games on any device.</li>
              <li>Blockchain is also changing the way businesses work by using play-to-earn models that let gamers make real money by selling NFTs and cryptocurrency-based in-game items.</li>
            </ul>
          </div>
          <div className="col-md-6 text-center"> {/* Image section */}
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb3ad5804df" // Example tech gaming image
              className="img-fluid rounded shadow"
              alt="Tech in Gaming"
            />
          </div>
        </div>
      </div>

      {/* Core Skills - Gaming and Esports That Are Competitive */}
      <div className="container py-3">
        <div className="row align-items-center"> {/* Added align-items-center for vertical alignment */}
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-start text-white">Gaming and Esports That Are Competitive</h3>
            <ul className="text-secondary">
              <li>
                Esports has turned video games into huge events that fill stadiums. Some of the most popular games in the world are League of Legends, Dota 2, and Counter-Strike. They have prize pools worth millions of dollars and well-known professional players.
              </li>
              <li>
                Esports isn't just a trend; it's a job. There are a lot of jobs in the industry, including those for gamers, analysts, broadcasters, team managers, and sponsors.
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center"> {/* Image section */}
            <img
              src="https://images.unsplash.com/photo-1593305372173-92f7466d624c" // Example esports image
              className="img-fluid rounded shadow"
              alt="Esports"
            />
          </div>
        </div>
      </div>

      {/* Core Skills - Community and Creativity */}
      <div className="container py-3">
        <div className="row align-items-center flex-md-row-reverse"> {/* Reverse order for left text, right image */}
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-start text-white">Community and Creativity</h3>
            <ul className="text-secondary">
              <li>
                Video games are very social. People make friends and build communities by playing co-op missions or fighting each other in online arenas. People on social media sites like Discord, Twitch, and YouTube Gaming stream gameplay, share tips, and celebrate gaming culture.
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center"> {/* Image section */}
            <img
              src="https://images.unsplash.com/photo-1542831371-32f22b8214b7" // Example gaming community image
              className="img-fluid rounded shadow"
              alt="Gaming Community"
            />
          </div>
        </div>
      </div>

      {/* Core Skills - The Future: More Than Just Mobile and the Metaverse */}
      <div className="container py-3">
        <div className="row align-items-center"> {/* Added align-items-center for vertical alignment */}
          <div className="col-md-6 text-start">
            <h3 className="fw-bold text-start text-white">The Future: More Than Just Mobile and the Metaverse</h3>
            <ul className="text-secondary">
              <li>
                There will be a lot of new things in the future of gaming. The metaverse is getting bigger, which means that in the future, digital worlds will be more than just places to play. They will also be places to work, hang out, and meet new people. NFTs, digital ownership, and decentralised platforms will give players even more control.
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center"> {/* Image section */}
            <img
              src="https://images.unsplash.com/photo-1620202973809-906d2038933e" // Example metaverse/future gaming image
              className="img-fluid rounded shadow"
              alt="Future of Gaming"
            />
          </div>
        </div>
      </div>

      {/* Emphasis Text */}
      <div className="container py-3">
        <p className="text-center" style={{ color: '#91c4ffe9' }}>
          This isn't just a game; it's a job, a passion, and progress.
          <br />
          Turn on the power, hit start, and step into a world full of new ideas and deep experiences.
        </p>
      </div>

      {/* Why Gaming Stands Out Section */}
      <div className="container my-5">
        <div className="row rounded p-4 align-items-center" style={{ backgroundColor: '#111111ff' }}>
          <div className="col-md-6 text-white">
            <h4>Why Gaming Stands Out</h4>
            <ul>
              <li>Cultural force with millions of players worldwide</li>
              <li>Faster growth than movie and music industries</li>
              <li>Deep narratives and engaging multiplayer experiences</li>
              <li>Integration of cutting-edge tech: AI, AR, VR, Cloud, Blockchain</li>
              <li>Massive competitive esports scene with professional opportunities</li>
              <li>Vibrant online communities and content creation</li>
              <li>Future expansion into the metaverse with digital ownership</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" // Consider changing this image to a gaming-related one if possible
              className="img-fluid rounded shadow"
              alt="Gaming"
            />
          </div>
        </div>
      </div>

      {/* Footer Statement */}
      <div className="text-center py-4 " style={{ color: '#91c4ffe9' }}>
        The End
        <br />
        Gaming is no longer just a hobby; it's a global movement fuelled by creativity, technology, and socialising.
        <br />
        There is a place for everyone in gaming, whether you play games on your phone, watch esports, make content, or just love technology.
      </div>
    </div>
  );
};

export default Gaming;