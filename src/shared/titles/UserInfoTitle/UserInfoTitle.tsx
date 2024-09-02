import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 12px;
  color: var(--Primary-black, #1e1d21);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */
`;

type Props = {
    title: string;
  };
  
 const UserInfoTitle = ({title}: Props) => {
  return <Title>{title}</Title>;
}

export default UserInfoTitle;