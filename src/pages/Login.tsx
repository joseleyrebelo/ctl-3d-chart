import React from "react";
import { NavigateFunction } from "react-router-dom";
import { withNavigation } from "../util/withNavigation";

type Props = {
  navigate: NavigateFunction;
};
type State = {
  username: string;
  password: string;
  isFormValid: boolean;
};

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isFormValid: false,
    };
  }
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      this.state.username !== prevState.username ||
      this.state.password !== prevState.password
    ) {
      this.setState({
        isFormValid: !!this.state.username && !!this.state.password,
      });
    }
  }
  setUsername(username: string) {
    this.setState({ username });
  }
  setPassword(password: string) {
    this.setState({ password });
  }
  signIn = () => {
    if (this.state.isFormValid) {
      this.props.navigate("/dashboard");
    }
  };
  render() {
    return (
      <div className="ctl-userArea__holder">
        <div className="ctl-userArea__container ">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-title font-bold">Welcome back,</h1>
            <p>Please insert your user credentials</p>
            <input
              placeholder="username"
              className="ctl-input"
              type="text"
              value={this.state.username}
              onChange={(e) => this.setUsername(e.target.value)}
            ></input>
            <input
              placeholder="password"
              className="ctl-input"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setPassword(e.target.value)}
            ></input>
            <button
              type="button"
              onClick={() => this.signIn()}
              className={`ctl-button ${
                this.state.isFormValid ? "opacity-100" : "opacity-50"
              } `}
            >
              sign in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigation(Login);
