import AddIcon from "@mui/icons-material/Add";

const AddButton = () => {
  const style = {
    p: 1,
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "#11995E",
    width: 32,
    borderRadius: 1.5,
  };
  return <AddIcon sx={style} />;
};

export default AddButton;
