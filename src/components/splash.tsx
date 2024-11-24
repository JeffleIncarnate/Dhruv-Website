export const Splash = () => {
  return (
    <header className="relative flex h-lvh w-full items-center justify-center">
      <div className="flex w-2/5 flex-col gap-8">
        <div className="h-2 w-full bg-white"></div>

        <div className="font-header w-full text-center text-6xl font-bold">
          <h1 className="uppercase">Hey there, I'm</h1>
          <h1 className="uppercase">Dhruv Rayat</h1>
        </div>

        <div className="h-2 w-full bg-white"></div>
      </div>

      <div className="absolute aspect-square w-[calc(40%-5rem)] rounded-full bg-gradient-to-b from-white from-0% to-30% opacity-10" />
    </header>
  );
};
