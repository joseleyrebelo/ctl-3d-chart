import { useNavigate } from "react-router-dom";

export function withNavigation(Component: any): (props: any) => JSX.Element {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
