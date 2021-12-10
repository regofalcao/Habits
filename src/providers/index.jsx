import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivitiesProvider } from "./Activities";
import { OpenSideBarProvider } from "./OpenSideBar";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GroupsProvider>
          <GoalsProvider>
            <ActivitiesProvider>
              <OpenSideBarProvider>{children}</OpenSideBarProvider>
            </ActivitiesProvider>
          </GoalsProvider>
        </GroupsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Providers;
