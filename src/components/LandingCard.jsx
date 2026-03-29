import styled from "@emotion/styled";

const StyleCard = styled.li`
  width: 414px;
  & .black {
    width: 288px;
    height: 272px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 6px;
    @media screen and (min-width: 1024px) {
      width: 414px;
      height: 374px;
    }
  }
  & .thumb {
    width: 256px;
    @media screen and (min-width: 1024px) {
      width: 414px;
      height: 374px;
    }
  }
  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    padding-top: 24px;
    padding-bottom: 25px;
    padding-left: 32px;
    border: 1px solid #00000060;
    border-radius: 6px;
    @media screen and (min-width: 1024px) {
      padding-left: 32px;
    }
  }
`;

export const LandingCard = ({ image, text }) => {
  return (
    <StyleCard>
      <div className="black">
        <div className="thumb">
          <img src={image} alt="" />
        </div>
      </div>
      <p>{text}</p>
    </StyleCard>
  );
};
