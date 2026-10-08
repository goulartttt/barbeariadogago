import Image from "next/image";
import Carousel from "@/components/Carousel";
import { SectionHeading } from "@/components/common";
import { gallery } from "@/data/siteData";

export default function Gallery() {
  return (
    <section id="galeria" className="section section--coal gallery" aria-labelledby="galeria-title">
      <SectionHeading id="galeria-title" kicker="Galeria" lines={["Feito para", <em>ser visto.</em>]} />

      <Carousel variant="photos" label="Galeria de fotos" itemLabel="Foto" previousLabel="Foto anterior" nextLabel="Próxima foto">
        {gallery.map((photo) => (
          <figure className="photo" key={photo.src}>
            <div className="photo__frame curtain">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 64rem) 46vw, 86vw" draggable={false} />
            </div>
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  );
}
