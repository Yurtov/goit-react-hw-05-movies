import { BsArrowLeft } from 'react-icons/bs';
import { Button, Container } from './GoBackBtn.styled';

export const GoBackBtn = () => {
  return (
    <Container>
      <Button>
        <BsArrowLeft />
        <p>Go back</p>
      </Button>
    </Container>
  );
};
