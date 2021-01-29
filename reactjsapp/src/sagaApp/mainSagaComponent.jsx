import React from "react";
import ReadWriteComponent from "./views/ReadWriteComponent";
import ListDataComponent from "./views/ListDataComponent";
const MainSagaComponent = () => {
  return (
    <div className="container">
      <ReadWriteComponent></ReadWriteComponent>
      <hr />
      <ListDataComponent></ListDataComponent>
    </div>
  );
};

export default MainSagaComponent;
