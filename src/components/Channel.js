import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Profile from '../assets/img/perfil.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

export const Channel = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ativa a animação apenas uma vez
        threshold: 0.2, // Quando 20% do componente estiver visível
      });

      return(
        <section className='channel' id="connect" ref={ref}>
           <Container>
            <Row className='justify-content-center'>
               <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible}) => 
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                     <span className="taglino">Meu Canal do Youtube</span>
                     <p>Jogo ff desde dos meus 15 anos. Tinha um canal no Youtube<br/> e o meu último vídeo bombou, porém desisti por desânimo<br/> mas depois me arrependi e aqui está eu começando de novo.<br/> Contando com a ajuda de vocês
                    o Youtube faz perder um pouco<br/> da qualidade dos meus vídeos, espero que entendam e fortaleçam,<br/> pois ainda estou aprendendo a lidar com o youtube
                    inscreva-se<br/> e ative o sininho de notificações para ficar por dentro de todos<br/> os conteúdos, de qualidade e esforço.
                    </p>
                  </div>
                  }
                </TrackVisibility>
               </Col>
               <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                 {({ isVisible }) => 
                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={Profile} alt="Perfil"/>
                    <a href="https://www.youtube.com/@MANDLYZKILLFF" className='vvs' target="_blank" rel="noopener noreferrer">
                            <span>Inscreva-se</span>
                        </a>
                 </div>
                 }
                </TrackVisibility>
               </Col>
            </Row>
           </Container>
        </section>
      )
}