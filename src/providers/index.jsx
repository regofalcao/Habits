import { OpenSideBarProvider } from "./openSideBar";

const Providers = ({ children }) => {
  return <OpenSideBarProvider>{children}</OpenSideBarProvider>;
};

export default Providers;
