import globalCSS from "@/styles/global.module.css";
import aboutCss from "./About.module.css";
import AboutImage from "../../assets/images/aboutImage.png";
export default function About() {
  return (
    <section>
      <div className={`${globalCSS.container} ${aboutCss.about_container}`}>
        {/* <!-- Left side --> */}
        <div className={aboutCss.about_visual}>
          <img src={AboutImage} alt="aboutImg" width={591} height={449} />
        </div>

        {/* <!-- Right side --> */}
        <div className={aboutCss.about_content}>
          <h1 className={aboutCss.content_title}>My Story:</h1>
          <div className={aboutCss.text_block}>
            <p className={aboutCss.content_text}>
              In velit arcu posuere integer. Dolor sit amet, consectetur nun
              adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed
              scelerisque praesent duis volutpat laoreet.
            </p>
            <p className={aboutCss.content_text}>
              Nisl, sit molestie commodo congue. Etiam lectus risus in amet.
              Commodo molestie fames etiam aenean sed. Pellentesque et venenatis
              amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra
              faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque
              imperdiet nunc.
            </p>
          
          <a href="#" className={aboutCss.more_content_link}>
            Know more
            </a>
            </div>
        </div>
      </div>
    </section>
  );
}
