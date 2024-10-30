import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Amanda from "../assets/img/amanda.jpg";
import BackgroundVideo from "../assets/video/videofundo.mp4"; // Importação do vídeo local
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Editora de vídeo", "Youtuber"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) setDelta(prevDelta => prevDelta / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else setIndex(prevIndex => prevIndex + 1);
  }

  useEffect(() => {
    const bannerImage = document.querySelector('.banner img');
    const handleScroll = () => {
      if (window.scrollY > 100) bannerImage.classList.add('hidden');
      else bannerImage.classList.remove('hidden');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="banner" id="home">
      {/* Vídeo de fundo */}
      <video autoPlay loop muted className="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bem-vindo ao meu Portfólio</span>
                  <h1>{`Oi! Eu sou `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Editora de vídeo", "Youtuber" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Olá, sou Amanda Figueredo, tenho 22 anos, Tenho experiência em edição de vídeos voltados para o universo gamer, trabalhando em diversas etapas da produção, desde a captura até a pós-produção. Ao longo do tempo, desenvolvi habilidades específicas para este nicho, incluindo cortes dinâmicos para destacar momentos de gameplay intenso, inserção de efeitos visuais e transições que mantêm a audiência engajada, e edição de áudio para melhorar a imersão dos espectadores. Também tenho facilidade com softwares como CapCut, Picsart e Kinemaster, onde aplico técnicas como slow motion, motion tracking e color grading para dar um toque cinematográfico e realçar a estética dos jogos. Meu objetivo é sempre transformar cada vídeo em uma experiência envolvente, que capture o espírito do jogo e cative tanto os jogadores quanto os entusiastas.</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={Amanda} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

