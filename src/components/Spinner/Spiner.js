import { RotatingLines } from 'react-loader-spinner';
import { Preloader, SpinerStyle } from './Spiner.styled';

export const Spiner = () => {
  return (
    <Preloader>
      <SpinerStyle>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </SpinerStyle>
    </Preloader>
  );
};
