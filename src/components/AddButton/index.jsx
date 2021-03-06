import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ ...rest }) => {
  const style = {
    p: 1,
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "#11995E",
    width: 32,
    borderRadius: 1.5,
    "&:hover": {
      cursor: "pointer",
      opacity: "85%",
      transition: "opacity 0.5s",
    },
  };
  return <AddIcon {...rest} sx={style} />;
};

export default AddButton;
