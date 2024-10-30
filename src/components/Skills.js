
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ativa a animação apenas uma vez
    threshold: 0.2, // Quando 20% do componente estiver visível
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={`skill ${inView ? 'animate' : ''}`} id="skills" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Cortes</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Thumbnail</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Highlights</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Edição de fotos</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};