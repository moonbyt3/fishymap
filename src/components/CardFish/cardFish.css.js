import styled from 'styled-components/macro';

export const CardFishWrapper = styled.div`
  display: flex;
  max-width: 340px;
  width: 100%;
  margin-bottom: 15px;
`;

export const CardFishTitle = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 5px;
  text-align: left;
`;

export const CardFishMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

export const CardFishMedia = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 100%;
  min-height: 75px;
  background-color: #000;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CardFishData = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: '. .' '. .';
  width: 50%;
  margin-left: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    width: 2px;
    height: 100%;
  }
  &::after {
    height: 2px;
    width: 100%;
  }
`;
export const CardFishDataItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const CardFishDataItemTitle = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

export const CardFishDataItemText = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 12px;
`;
