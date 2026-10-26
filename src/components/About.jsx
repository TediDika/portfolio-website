import tedi from "../assets/tedi.jpg";

const About = () => {
  return (
    <div className="flex justify-center items-center w-full h-210 mt-[20rem]">
      <div id="about" className="relative -top-[41rem]"></div>
      <div className="flex flex-col h-210 w-[50rem] dark:bg-black p-6">
        <h1 className="mb-10 h1">About.</h1>
        <p>
          Hi there! I’m Tedi Dika, a graduate student pursuing an M.S. in Computer Science 
          at the University of Texas at Dallas, focusing on Intelligent Systems. 
          I also earned my bachelor’s in Computer Science from UTD.
        </p>
        <p className="mt-[2.5rem]">
          At UTD, I’ve been taking every opportunity I can to get hands on experience 
          with AI and machine learning. I recently competed in my first hackathon, hosted 
          by Noetic at UTD, where my team won with a project that analyzed encrypted 
          network traffic. I built and tuned our random forest model, helped build the React 
          dashboard, and presented our approach to the judges. Outside of class, I’m on the 
          software teams for UTD’s Neurotech club, which is building an EEG brain-computer 
          interface to control a robotic prosthetic, and Nebula Labs, where I contribute to 
          open source tools for UTD students.
        </p>
        <p className="mt-[2.5rem]">
          My love for programming started in my junior year of high school, when I first wrote 
          code in Java. I enjoy both the puzzle-solving and the creativity it allows, 
          from finding new ways to approach a problem to designing interfaces people enjoy 
          using. I also love that there’s always something new to learn. I’m currently looking 
          for roles in software engineering and AI/ML.
        </p>
        <p className="mt-[2.5rem]">
          In my free time, I enjoy volleyball, watching movies, and
          spending time with friends and family. Please feel free to reach out
          to me at{" "}
          <span className="underline decoration-sky-500 inline">
            tdika7@gmail.com
          </span>
        </p>
        <img
          className="w-[30rem] rounded-lg self-center mt-10 shadow-lg"
          alt="tedi"
          src={tedi}
        ></img>
      </div>
    </div>
  );
};

export default About;
