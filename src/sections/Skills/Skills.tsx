import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import cssSkills from "./Skills.module.css";
import globalCSS from "@/styles/global.module.css";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref}>
      <div className={`${cssSkills.container} ${globalCSS.container}`}>
        <ul className={cssSkills.skill_list}>
          <li>
            {inView && (
              <CountUp
                className={cssSkills.value}
                start={0}
                end={80}
                duration={4}
                suffix="%"
              />
            )}
          </li>
          <li>
            {inView && (
              <CountUp
                className={cssSkills.value}
                start={0}
                end={90}
                duration={4}
                suffix="%"
              />
            )}
          </li>

          <li>
            {inView && (
              <CountUp
                className={cssSkills.value}
                start={0}
                end={65}
                duration={4}
                suffix="%"
              />
            )}
          </li>

          <li>
            {inView && (
              <CountUp
                className={cssSkills.value}
                start={0}
                end={50}
                duration={4}
                suffix="%"
              />
            )}
          </li>
        </ul>
        <ul className={cssSkills.text_list}>
          <li>
            <p className={cssSkills.text}>Full Body Tattoo</p>
          </li>
          <li>
            <p className={cssSkills.text}>Safely Piercing</p>
          </li>
          <li>
            <p className={cssSkills.text}>Full colour tattoo</p>
          </li>
          <li>
            <p className={cssSkills.text}>Temporary tattoo</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
