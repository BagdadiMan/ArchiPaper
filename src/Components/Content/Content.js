import "./content.css";
import ContentRoutes from "../../ContentRoutes.js";
import CommonProblems from "../CommonProblems/CommonProblems.jsx";
import HeirarchyTree from "../Tree/HierarchyTree";
import Pics from "../Pics/Pics";

const Content = props => {
  return (
    <div id="content">
      {props.contentRoute == ContentRoutes.CommonProblems ? (
        <CommonProblems />
      ) : null}
      {props.contentRoute == ContentRoutes.HeirarchyTree ? (
        <HeirarchyTree />
      ) : null}
      {props.contentRoute == ContentRoutes.Pics ? (
        <Pics />
      ) : null}
    </div>
  );
};

export default Content;
