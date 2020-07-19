import styled from 'styled-components/macro';

export const AddFishWrapper = styled.div`
  .bm-burger-button {
    top: 63px;
    width: 36px;
    height: 36px;

    /* this span holds default burger icon */
    span {
      display: none;
    }

    button {
      border-radius: 50%;
      background-color: #d2d2d2 !important;
      border: 2px solid black !important;

      &:focus {
        outline: none !important;
      }
    }

    &::after {
      content: '+';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      font-size: 36px;
      font-weight: bold;
      line-height: 1;
      pointer-events: none;
    }
  }
`;

export const AddFishForm = styled.form``;

export const AddFishPicture = styled.div``;

export const AddFishButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;
