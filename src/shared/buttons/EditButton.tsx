import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  // color: var(--Primary-bright-purple, #5826DA);

  color: var(--Primary-black, #1e1d21);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;


type Props = {
    onClick?: () => void
    label: string
  }
  
  const EditButton = ({ onClick, label }: Props) => {
    return (
      <Button
        type="submit"
        onClick={onClick}
      >
        {label}
      </Button>
    )
  }
  
  export default EditButton
  
