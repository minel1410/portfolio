


const ContactSection = () => {
    return (
      <div className="flex flex-col pt-64 pb-44 gap-6 text-center">
        <p className="text-Green text-xl font-sf-mono">04. What now?</p>
        <p className="text-LightestSlate text-6xl font-calibre font-extrabold">
          Get In Touch
        </p>
        <p className="font-calibre text-2xl text-LightSlate px-8">
          As a final-year student passionate about software engineering, I am
          eager to demonstrate my abilities and take on new challenges. I would
          love to connect and explore opportunities where I can contribute and
          grow. Please feel free to reach out!
        </p>

        <div className="relative mt-5 w-full flex justify-center group">
          <div className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all absolute z-10 px-8 py-4 border border-Green rounded-md bg-Navy font-sf-mono text-Green">
            Contact me
          </div>
          <div className="absolute px-8 py-4 border border-Green rounded-md font-sf-mono text-Green bg-Green z-0">
            Contact me
          </div>
        </div>
      </div>
    );
}

export default ContactSection;