import tedi from "../assets/tedi.jpg";

const About = () => {
  return (
    <div className="flex justify-center items-center w-full h-210 mt-[20rem]">
      <div id="about" className="relative -top-[41rem]"></div>
      <div className="flex flex-col h-210 w-[50rem] dark:bg-black p-6">
        <h1 className="mb-10 h1">About.</h1>
        <p>
          Hi there! I’m Tedi Dika, a recent graduate with a B.S. in Computer
          Science from the University of Texas at Dallas. I am currently seeking
          an entry-level software engineer role. Throughout my studies, I've
          gained proficiency in multiple programming languages, including Java,
          JavaScript, C#, C++, Python, and SQL, alongside a deep understanding
          of software development methodologies and best practices. I am
          passionate about full-stack development and eager to learn new
          technologies!
        </p>
        <p className="mt-[2.5rem]">
          My love for programming began in my junior year of high school when I
          first started coding in Java. I’m drawn to the puzzle-solving aspect
          of programming and the creative freedom it offers in problem-solving
          and UI/UX development. What excites me most about this field is that
          it's a lifelong learning journey, an industry that’s constantly
          evolving, where every day brings new challenges and opportunities to
          grow!
        </p>
        <p className="mt-[2.5rem]">
          In my free time, I enjoy mountain biking, watching movies, and
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
