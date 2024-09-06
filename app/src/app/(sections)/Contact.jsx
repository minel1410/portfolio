


const ContactSection = () => {
    return (
      <div className="flex flex-col pt-64 pb-44 gap-6 text-center">
        <p className="text-Green text-xl font-sf-mono">04. What now?</p>
        <p className="text-LightestSlate text-6xl font-calibre font-extrabold">
          Get In Touch
        </p>
        <p className="font-calibre text-2xl text-LightSlate px-8">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
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