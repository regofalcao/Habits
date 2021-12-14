import { UserProvider } from "./User";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";
import { OpenSideBarProvider } from "./OpenSideBar";
import { OpenModalProvider } from "./OpenModal";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupsProvider>
        <GoalsProvider>
          <ActivitiesProvider>
            <OpenModalProvider>
              <OpenSideBarProvider>{children}</OpenSideBarProvider>
            </OpenModalProvider>
          </ActivitiesProvider>
        </GoalsProvider>
      </GroupsProvider>
    </UserProvider>
  );
};

export default Providers;
