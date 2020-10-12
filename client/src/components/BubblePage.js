import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [dependency, setDependency] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/colors")
      .then((res) => {
        setColorList(res.data);
        setDependency(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="bubbles">
      <ColorList colors={colorList} updateColors={setColorList} setDependency={setDependency} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
