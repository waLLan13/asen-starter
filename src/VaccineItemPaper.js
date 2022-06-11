import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const VaccineItemPaper = ({ item }) => {
  const { display, code, designation } = item;

  const icon = designation ? "alert" : "check-circle";

  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Title
        titleNumberOfLines={3}
        title={display}
        subtitle={code}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
      />
      {designation && (
        <Card.Content>
          <Title>{designation[0].use.display}</Title>
          <Paragraph>{designation[0].value}</Paragraph>
        </Card.Content>
      )}
    </Card>
  );
};

export default VaccineItemPaper;
