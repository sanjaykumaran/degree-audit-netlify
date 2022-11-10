import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
      await logOut();
      navigate("/login");
  };

  return (
    <div className="w-100 d-flex flex-column gap-2 align-items-center">
      <h2 className="text-center mb-2">Profile</h2>
      <Form style={{ width: "100%" }}>
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <Button
            className="w-100 mt-2"
            variant="danger"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Profile;
