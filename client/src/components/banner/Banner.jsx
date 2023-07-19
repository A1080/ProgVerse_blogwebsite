import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
  background: url(https://cdn.pixabay.com/photo/2020/04/19/14/23/developer-5063843_1280.jpg);
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  justify-content: center; /* Center items vertically */
  padding-left: 30px; /* Add some left padding */
`;

const Title = styled(Typography)`
  font-size: 120px; /* Set the font size */
  font-weight: bold; /* Set the font weight */
  color: #ffffff; /* Set the font color */
  margin-bottom: 30px; /* Add some bottom margin */
`;

const Subtitle = styled(Typography)`
  font-size: 30px; /* Set the font size */
  color: #ffffff; /* Set the font color */
`;

const Banner = () => {
  return (
    <Image>
      <Title variant="h1">BLOG</Title>
      <Subtitle variant="h2">Contribute to the Community</Subtitle>
    </Image>
  );
};

export default Banner;
