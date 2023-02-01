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
  /* bottom: -110px; */
  /* left: 138px; */
  /* bottom: 0;
  left: 0; */

  top: ${props => {
    if (props.y + 112 > props.clientHeight) {
      return props.y - 112;
    } else {
      return props.y;
    }
  }}px;
  left: ${props => {
    if (props.x + 232 > props.clientWidth) {
      return props.x - 232;
    } else {
      return props.x;
    }
  }}px;

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
`;
export const StyledModalActionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
