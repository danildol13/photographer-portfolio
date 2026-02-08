import globalCSS from "@/styles/global.module.css";
import css from "./WatchInterview.module.css";

export default function name() {
  return (
    <section className={css.innerContent}>
      <div className={`${globalCSS.container} ${css.innerContainer}`}>
        <h1 className={css.title}>
          “Consider what you desire. Your tattoo artist will never tell you what
          tattoo to have.”
        </h1>
        <div className={css.buttonContent}>
          <button type="button" className={css.icon}>
            <div className={css.circle}>
              <svg width={20} height={20}>
                <use href="/public/images/sprite.svg#icon-Vector"></use>
              </svg>
            </div>
          </button>
          <span className={css.buttonText}>WATCH IT NOW</span>
        </div>
      </div>
    </section>
  );
}
