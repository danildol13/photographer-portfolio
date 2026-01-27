import globalCSS from "@/styles/global.module.css";
import heroCSS from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={heroCSS.hero}>
      <div className={`${globalCSS.container} ${heroCSS.hero_container}`}>
        <div className={heroCSS.hero_inside_container_left}></div>
        <div className={heroCSS.hero_inside_container_right}>
          <div className={heroCSS.hero_content}>
            <h1 className={heroCSS.hero_title}>I’m Void Sir.</h1>
            <p className={heroCSS.hero_description}>
              Tattoos have their own unique power and magic. They not only
              beautify the body but also the psyche.
            </p>
            <button type="button" className={heroCSS.hero_button}>
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
