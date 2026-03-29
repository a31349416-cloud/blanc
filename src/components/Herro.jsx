import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

const StyledHerro = styled.section`
  background-color: #ff7143;
  padding: 20px;

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  & h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: clamp(28px, 7vw, 72px);
    line-height: 1.3;
    text-align: center;
    margin-top: 242px;
    margin-bottom: 0;
    word-break: break-word;
  }

  & p {
    width: 100%;
    max-width: 587px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(14px, 3vw, 18px);
    line-height: 1.6;
    text-align: center;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  & .button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 22px;
    gap: 8px;
  }

  & .wallpere {
    width: 100%;
    max-width: 417px;
    height: auto;
    aspect-ratio: 417 / 732;
    background-image: url("./IMAGE.png");
    background-size: cover;
    background-position: bottom;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;

    & .container {
      flex-direction: column;
      gap: 30px;
    }

    & h1 {
      margin-top: 60px;
    }

    & .wallpere {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    padding: 12px 12px;

    & .container {
      gap: 20px;
    }

    & h1 {
      margin-top: 30px;
      font-size: clamp(24px, 6vw, 40px);
    }

    & p {
      font-size: clamp(13px, 2.5vw, 16px);
      margin-top: 15px;
    }

    & .button {
      flex-direction: column;
      gap: 12px;
      margin-top: 20px;
    }

    & .wallpere {
      width: 100%;
      max-width: 100%;
      height: auto;
      aspect-ratio: 417 / 732;
      margin-bottom: 0;
    }
  }
`;
const Button = styled.button`
  width: clamp(140px, 90%, 208px);
  height: 56px;
  border: none;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: clamp(13px, 2.5vw, 18px);
  line-height: 1.4;
  background-color: ${({ bColor }) => bColor};
  color: ${({ fColor }) => fColor};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 12px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 52px;
    font-size: clamp(13px, 3vw, 16px);
    padding: 0 16px;
  }
`;

export const Herro = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);

    window.addEventListener("resize", () => {
      setWidth(document.documentElement.clientWidth);
    });
  }, []);
  return (
    <StyledHerro>
      <div className="container">
        <div>
          <h1>Blanko template</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris
            porttitor amet volutpat.
          </p>
          <div className="button">
            <Button bColor="#000000" fColor="#FFFFFF">
              Purchase template
            </Button>
            <Button bColor="#FFFFFF" fColor="000000">
              Other templates
            </Button>
          </div>
        </div>
        {width > 1280 && <div className="wallpere"></div>}
      </div>
    </StyledHerro>
  );
};
