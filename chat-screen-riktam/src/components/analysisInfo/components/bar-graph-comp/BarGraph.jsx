import { Grid, Typography } from "@mui/material";
import {
  Bar,
  BarCircle,
  BarContainer,
  Container,
  ContainerBarCircle,
  DayLabel,
  HeadingContainer,
} from "../../styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BarGraph = ({
  heading,
  subheading,
  data,
  color,
  hoverColor,
  barWidth,
}) => {
  return (
    <Container>
      <HeadingContainer>
        <Typography variant="h6">{heading}</Typography>
        <Typography variant="subtitle2">{subheading}</Typography>
      </HeadingContainer>
      <BarContainer>
        {data.map((item, index) => (
          <Grid key={index} item sm={1}>
            <ContainerBarCircle hoverColor={hoverColor}>
              <Bar
                height={item}
                width={barWidth}
                color={color}
                hoverColor={hoverColor}
              ></Bar>
              <BarCircle
                color={color}
                height={item}
                width={barWidth}
                hoverColor={hoverColor}
              />
            </ContainerBarCircle>
            <DayLabel>{days[index]}</DayLabel>
          </Grid>
        ))}
      </BarContainer>
    </Container>
  );
};

export default BarGraph;
