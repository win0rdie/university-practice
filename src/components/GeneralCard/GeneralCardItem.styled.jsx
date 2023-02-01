import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  display: flex;
  position: relative;
  padding: 12px 48px 12px 24px;
  width: 370px;
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--clr-white);
`;

export const StyledContainer = styled.div`
  position: absolute;
  bottom: -110px;
  left: 138px;
  background-color: var(--clr-white);
  width: 232px;
  height: 112px;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

export const StyledBtnMenu = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  width: 32px;
  height: 32px;
  display: block;

  /* margin: 0; */

  :hover,
  :focus {
    border-radius: 50%;
    background: #eceff1;
  }
`;

export const StyledBtn = styled.button`
  padding: 12px 24px;
  border: none;
  background-color: var(--clr-white);
text-align: left;

  :hover,
  :focus {
    background: #fafafa;
  }
  svg {
    margin-right: 25px;
  }
`
