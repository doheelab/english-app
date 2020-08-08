import React from "react";
import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  return (
    <div>
      <Table className="tg" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="tg-baqh">
              <img
                src={require("./voca/apple.jpg")}
                width="250px"
                height="120px"
                alt=""
              />
              <p></p>apple (사과)
            </th>
            <th className="tg-baqh">
              <img
                src={require("./voca/ant.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>ant (개미)
            </th>
            <th className="tg-baqh">
              <img
                src={require("./voca/alligator.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>alligator (악어)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-baqh">
              <img
                src={require("./voca/bed.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>bed (침대)
            </td>
            <td class="tg-baqh">
              <img
                src={require("./voca/bear.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>bear (곰)
            </td>
            <td class="tg-baqh">
              <img
                src={require("./voca/bag.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>bag (가방)
            </td>
          </tr>
          <tr>
            <td class="tg-baqh">
              <img
                src={require("./voca/cat.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>cat (고양이)
            </td>
            <td class="tg-baqh">
              <img
                src={require("./voca/cup.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>cup (컵)
            </td>
            <td class="tg-baqh">
              <img
                src={require("./voca/car.jpg")}
                width="250px"
                height="120px"
              />
              <p></p>car (차)
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
