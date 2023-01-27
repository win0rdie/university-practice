import styled from 'styled-components';

export const StyledButton = styled.button`
  .button {
    display: flex;

    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;

    background-color: var(--clr-primary);

    font-weight: 700;
    font-size: 14px;
    line-height: 1.71;
    text-transform: uppercase;

    color: var(--clr-white);

    border: none;

    transition: all 250ms linear;
  }

  .button:hover,
  .button:focus {
    background-color: #c05209;
  }
`;
