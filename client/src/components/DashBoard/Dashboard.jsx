import { Link } from "react-router-dom";
import * as l from "./DashboardElements";
import useAuth from "../../Hooks/useAuth";

const DashBoard = ({ DashBoardLinks1 }) => {
  const { logout, user, loadUser, loading } = useAuth();

  const onclick = (link) => {
    if (link === "/") {
      logout();
    }
  };
  return (
    <l.Container>
      <l.Section>
        <l.Heading>Welcome</l.Heading>
        <l.Options>
          {DashBoardLinks1.map((data) => {
            return (
              <Link
                to={data.link}
                onClick={() => {
                  onclick(data.link);
                }}
                className="link"
              >
                <l.Option>
                  <l.Icon>{data.icon}</l.Icon>
                  <l.Text>{data.text}</l.Text>
                </l.Option>
              </Link>
            );
          })}
        </l.Options>
      </l.Section>
    </l.Container>
  );
};

export default DashBoard;
