import React from "react";
import Col from "react-bootstrap/Col";
import MyContext from "../components/MyContext";
import LoginForm from "../components/LoginForm";
import { LoggedInHeaderPart } from "../layout/LoggedInHeaderPart";
import "../App.css";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <MyContext.Consumer>
      {value => {
        return (
          <header className="headerStyle">
            <div>
              <Col>
                <h1 style={{ padding: "8px" }}>Coolzontations</h1>
              </Col>
              <Col>
                {value.user.id !== 0 ? (
                  <LoggedInHeaderPart
                    newConsultationForm={value.newConsultationForm}
                    logout={value.logout}
                  ></LoggedInHeaderPart>
                ) : (
                  <LoginForm setUser={value.setUser}></LoginForm>
                )}
              </Col>
            </div>
          </header>
        );
      }}
    </MyContext.Consumer>
  );
};
