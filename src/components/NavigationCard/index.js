import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomTooltip from "../CustomTooltip";

const NavigationCard = ({
  title,
  history,
  navigateTo,
  tooltipText,
  cardMediaSource,
}) => {
  return (
    <CustomTooltip title={tooltipText}>
      <ButtonBase onClick={() => history.push(navigateTo)}>
        <Card
          elevation={3}
          style={{ padding: "5%", maxHeight: "350px", width: "400px" }}
        >
          <CardMedia>
            <img
              src={cardMediaSource}
              alt={title}
              style={{ height: "300px" }}
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </CustomTooltip>
  );
};

export default NavigationCard;
