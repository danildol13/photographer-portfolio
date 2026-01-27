// Gallery.tsx
import globalCSS from "@/styles/global.module.css";
import galleryCSS from "./Gallery.module.css";
import { galleryItems } from "../../constants/photos";

export default function Gallery() {
  return (
    <section className={galleryCSS.gallery_section}>
      <div className={`${globalCSS.container} ${galleryCSS.gallery_container}`}>
        <h1 className={galleryCSS.gallery_title}>CHECK MY GALLERY:</h1>
        <div className={galleryCSS.grid}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={galleryCSS.grid_item}
              style={{
                gridRow: item.rowSpan ? `span ${item.rowSpan}` : 'span 1',
              }}
            >
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
        <button type="button" className={galleryCSS.view_button}>
          VIEW ALL →
        </button>
      </div>
    </section>
  );
}