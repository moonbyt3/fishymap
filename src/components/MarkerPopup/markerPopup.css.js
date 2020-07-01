import styled from 'styled-components/macro';


export const MarkerPopupWrapper = styled.div`
    display: flex;
    max-width: 240px;
    width: 100%;
`;

export const MarkerPopupTitle = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 5px;
`;

export const MarkerPopupMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
`;

export const MarkerPopupMedia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: auto;
    height: 100%;
`;

export const MarkerPopupData = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ". ." ". .";
    width: 300px;
    margin-left: 15px;

    &::before, &::after {
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
export const MarkerPopupDataItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const MarkerPopupDataItemTitle = styled.span`
    display: block;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    
`;

export const MarkerPopupDataItemText = styled.span`
    display: block;
    width: 100%;
    text-align: center;
`;
