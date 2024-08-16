import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineMail,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-210 mt-[20rem]"
      id="contact"
    >
      <div className="flex flex-col h-210 w-[50rem] dark:bg-black p-6">
        <h1 className="mb-10 h1">Contact.</h1>
        <div className="flex justify-evenly py-[1.5rem]">
          <a
            className="flex items-center justify-center lg:w-[6.5rem] lg:h-[6.5rem] w-[5rem] h-[5em] bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="https://www.linkedin.com/in/tedi-dika-ba0264262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-0 transform transition-transform duration-200 active:scale-95">
              <AiFillLinkedin className="lg:text-[5rem] text-[3.5rem]" />
            </button>
          </a>

          <a
            className="flex items-center justify-center lg:w-[6.5rem] lg:h-[6.5rem] w-[5rem] h-[5em] bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="https://github.com/TediDika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-0 transform transition-transform duration-200 active:scale-95">
              <AiFillGithub className="lg:text-[5rem] text-[3.5rem]" />
            </button>
          </a>

          <a
            className="flex items-center justify-center lg:w-[6.5rem] lg:h-[6.5rem] w-[5rem] h-[5em] bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="mailto:tdika7@gamil.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-0 transform transition-transform duration-200 active:scale-95">
              <AiOutlineMail className="lg:text-[5rem] text-[3.5rem]" />
            </button>
          </a>

          <a
            className="flex items-center justify-center lg:w-[17rem] lg:h-[6.5rem] w-[14rem] h-[5em] bg-n-7 rounded-lg transition-colors hover:bg-n-6"
            href="https://drive.google.com/file/d/1znsukDRWYaXhy-kWjggjl2CkX7yz0G7-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 lg:h-[80px] h-[60px] border-[3px] border-white rounded-md px-4 transform transition-transform duration-200 active:scale-95">
              <AiOutlineDownload className="lg:text-[5rem] text-[3.5rem]" />
              <span className="lg:text-[2rem] text-[1.5rem]">Resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
