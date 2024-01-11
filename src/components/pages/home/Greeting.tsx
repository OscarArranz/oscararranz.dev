const BlueText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-600 dark:text-blue-400 underline">{children}</span>
);

const Greeting = () => (
  <div className="flex flex-col gap-12 max-w-3xl text-center xl:text-left">
    <h1 className="text-5xl xl:text-6xl font-extrabold">
      Hi 👋, I&apos;m Oscar
    </h1>
    <div className="text-xl xl:text-2xl font-semibold leading-10 text-left">
      <p>
        And I admit it, I&apos;m a bit of a <BlueText>nerd</BlueText>.
      </p>
      <p>
        From playing with new <BlueText>languages</BlueText> and{' '}
        <BlueText>frameworks</BlueText> to revealing you my best-kept secrets,
        I&apos;ll be sharing with you the <BlueText>little tricks</BlueText>{' '}
        that have helped me along the path to become a{' '}
        <BlueText>better developer</BlueText>.
      </p>
    </div>
  </div>
);

export default Greeting;
