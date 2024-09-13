import { Title } from './PageTitle.styled';

type Props = {
    title: string;
  };
  
 const PageTitle = ({title}: Props) => {
  return <Title>{title}</Title>;
}

export default PageTitle;