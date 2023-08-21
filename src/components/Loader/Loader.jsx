import { RotatingLines } from 'react-loader-spinner';
import { StyledThumb } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledThumb>
      <RotatingLines
        strokeColor=" rgb(100, 158, 255)"
        strokeWidth="5"
        animationDuration="1"
        width="96"
        visible={true}
      />
    </StyledThumb>
  );
};
