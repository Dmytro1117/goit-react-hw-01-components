import styled from '@emotion/styled'

export const ContainerProfile = styled.div`
    background-color: #558aed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerDescription = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: solid 2px;
`;

export const ImgAvatar = styled.img`
    width: 150px;
  border-radius: 50%;
  background-color: #e7eeeeed;
  margin: 16px;
`;

export const ParName = styled.p`
    font-weight: 700;
  font-size: 30px;
  margin-bottom: 25px;
`;

export const ParTag = styled.p`
     font-weight: 500;
  font-size: 20px;
  margin-bottom: 25px;
`;

export const ParLocation = styled.p`
     font-weight: 700;
  font-size: 20px;
  margin-bottom: 25px;
`;

export const UlStats = styled.ul`
     display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
`;

export const LiStats = styled.li`
    display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  margin: 8px 8px 16px;
`;

export const SpanLabel = styled.span`
   font-weight: 400;
  font-size: 20px;
`;

export const SpanQuantity = styled.span`
  font-weight: 600;
  font-size: ${p => p.theme.fontsSizes.big};
`;