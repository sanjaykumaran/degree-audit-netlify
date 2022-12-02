import React, { useEffect } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleChange = (event) => {
    if (event.target.checked) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    setPercentage(((counter / 46) * 100).toFixed(2));
  }, [counter]);

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div className="w-100 d-flex flex-column gap-2">
      <div className="aligh-items-center">
        <div>
          <h2 className="text-center mb-2">Profile</h2>
        </div>
        <div className="w-100 progressBar">
          <ProgressBar now={percentage} label={`${percentage}%`} />
        </div>
      </div>
      <div className="d-flex flex-column w-10">
        <div className="d-flex flex-column w-10">
          <h5>Major Preparatory Requirements</h5>
          <label className="flex">
            <input type="checkbox" onChange={handleChange} />
            ECS1100
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 1200
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 1336
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 1136
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 1337
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 2305
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 2336
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 2340
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            MATH 2413
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            MATH 2414
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            MATH 2418
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            PHYS 2325
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            PHYS 2125
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            PHYS 2326
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            PHYS 2126
          </label>
        </div>
        <div className="d-flex flex-column w-10">
          <h5>Major Core Requirements</h5>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 3162
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 3305
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 3341
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 3345
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 3354
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 3377
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS/CE 4337
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4341
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4141
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4347
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4348
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4349
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4384
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            CS 4485
          </label>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input test-id="edit-course" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CS Guided Elective 1" />
            </div>
          </div>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CS Guided Elective 2" />
            </div>
          </div>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CS Guided Elective 3" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column w-10">
          <h5>Core Curriculum</h5>
            <label>
              <input type="checkbox" onChange={handleChange} />
              RHET 1302
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              GOVT 2305
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              GOVT 2306
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              HIST 1301
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              HIST 1302
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              HUMA 1301
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              MUSI 1306
            </label>
            <label>
              <input type="checkbox" onChange={handleChange} />
              PSY 2301
            </label>
          </div>
        </div>
        <div className="d-flex flex-column w-10">
          <h5>Electives</h5>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Free Elective 1 (3hr.)" />
            </div>
          </div>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Free Elective 2 (3hr.)" />
            </div>
          </div>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Free Elective 3 (3hr.)" />
            </div>
          </div>
          <div class='parent'>
            <div class='child inline-block-child'>
              <input type="checkbox" onChange={handleChange} />
            </div>
            <div class='child inline-block-child'>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Free Elective 4 (1hr.)" />
            </div>
          </div>
          <label>
            <input type="checkbox" onChange={handleChange} />
            UNIV 1010
          </label>
          <label>
            <input type="checkbox" onChange={handleChange} />
            UNIV 2020
          </label>
        </div>
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
      <div></div>
    </div>
  );
}

export default Profile;
