import { Container } from "./styles";
import { Avatar } from "@mui/material";

const CardMember = ({ username }) => {
  const stringToColor = (name) => {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        mr: 2,
      },
      children: `${name[0].toUpperCase()}`,
    };
  };

  const nameEllipsis = (newUsername) => {
    return username.slice(0, 11).concat("...");
  };

  const newName = username.length < 14 ? username : nameEllipsis(username);

  return (
    <Container>
      <div>
        <Avatar {...stringAvatar(newName)} />
        <h3>{newName}</h3>
      </div>
    </Container>
  );
};

export default CardMember;
