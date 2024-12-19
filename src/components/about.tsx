import { Dropdown } from "./dropdown";

export const About = () => {
  return (
    <div className="mx-auto flex w-[90%] items-center justify-center gap-[15%]">
      <div className="flex-1 space-y-4">
        <h2 className="font-header text-6xl font-bold">About Dhruv Rayat</h2>
        <p className="font-body">
          Crafting immersive digital experiences through cutting-edge front-end
          development. I bring passion, precision, and creativity to every
          project, ensuring seamless user interactions and visually stunning
          interfaces. But I am also a lil' goofy sometimes 😛 -{" "}
          <em>Yapper McYappington</em>
        </p>
      </div>

      <div className="flex-1">
        <Dropdown title="seo" dropdownContents="lorem" />
        <Dropdown title="story" dropdownContents="∫∫∫∫" />
        <Dropdown title="tech stack" dropdownContents="yes" />
      </div>
    </div>
  );
};
