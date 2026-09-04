import { skills } from "../../data/skills";

export default function SkillsWindow() {
  return (
    <div className="p-4 h-full overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {skills.map((category) => (
          <div
            key={category.title}
            className="
              border-2 
              border-[#8A2BE2]
              bg-[#1a0033]
            "
          >

            <div
              className="
                bg-[#000080]
                text-white
                px-2
                py-1
                flex
                justify-between
                items-center
                font-bold
              "
            >
              <span>
                {category.icon} {category.title}
              </span>

              <span>
                □ ✕
              </span>
            </div>


            <div className="p-3">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      border-2
                      border-white
                      bg-[#1a0033]
                      p-3
                      text-center
                      hover:bg-[#8A2BE2]
                      hover:-translate-y-1
                      transition-all
                      cursor-pointer
                    "
                  >

                    <div className="text-3xl">
                      {skill.icon}
                    </div>

                    <div className="
                      text-[#D8BFD8]
                      mt-2
                      text-sm
                    ">
                      {skill.name}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}