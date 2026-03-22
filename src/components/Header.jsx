import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background-color: black;
  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 81px;
  }
  & .left {
    display: flex;
    align-items: center;
    gap: 65px;
    & a {
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;
    }
  }
  & button {
    width: 207px;
    height: 48px;
    border-radius: 6px;
    background: #ff7143;
    font-weight: 700;
    font-size: 16px;
    border: none;
  }

  & .right {
    display: flex;
    align-items: center;
    gap: 20px;
    & a {
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="left">
          <img src="./logo.svg" alt="logo" />
          <a href="/">mail@blanko.com</a>
        </div>
        <div className="right">
          <a href="/">Landing</a>
          <a href="/">All pages</a>
          <a href="/">Template</a>
          <button>Purchase template</button>
        </div>
      </div>
    </StyledHeader>
  );
};
