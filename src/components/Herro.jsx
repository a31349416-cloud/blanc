import styled from "@emotion/styled";

const StyledHerro = styled.section`
  background-color: #ff7143;
  & .container {
    display: flex;
    justify-content: space-between;
  }

  & h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
    text-align: center;
    margin-top: 242px;
  }
  & p {
    width: 587px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    margin-top: 27px;
  }
  & .button {
    display: flex;
    justify-content: center;
    margin-top: 22px;
    gap: 8px;
  }

  & .wallpere {
    width: 417px;
    height: 732px;
    background-image: url("./IMAGE.png");
    background-size: 417px 860px;
    background-position: bottom;
  }
`;
const Button = styled.button`
  width: 208px;
  height: 64px;
  border: none;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  background-color: ${({ bColor }) => bColor};
  color: ${({ fColor }) => fColor};
`;

export const Herro = () => {
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
        <div className="wallpere"></div>
      </div>
    </StyledHerro>
  );
};
