import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";
import * as P from "./aboutMeDesc.parts";

const AboutMeDesc = () => {
  const { ref, inView, entry } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      gsap.to(entry.target.children, { display: "block" });
    }
  }, [inView]);

  return (
    <P.Container ref={ref}>
      <P.Line>
        Cześć na imię mam Maciej, jako ścieżkę rozwoju wybrałem front-end
        development, którego aktywnie uczę się każdego dnia co pozwala mi na
        ciągły rozwój i doskonalenie samego siebie przez co, jak najlepiej mogę
        oddawać coraz to lepsze doznania i wrażenia na ręce użytkowników
        aplikacji, do których tworzenia mogłem się przyczynić.
      </P.Line>
      <P.Line>
        Ukończyłem studia inżynierskie o kierunku edukacji
        techniczno-informatycznej, lecz front-endu uczę się na własną rękę, a
        dziś chciałbym zweryfikować swoje umiejętności z zamiarem wyznaczenia
        konkretnych działań jakie należy podjąć, by móc wejść do świata IT i
        czerpać oraz dzielić wiedzę z tej dziedziny.
      </P.Line>
    </P.Container>
  );
};

export default AboutMeDesc;
