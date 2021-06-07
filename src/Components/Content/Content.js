import "./content.css";
import ContentRoutes from "../../ContentRoutes.js";
import CommonProblems from '../CommonProblems/CommonProblems.jsx'
import HeirarchyTree from '../Tree/HierarchyTree';

const Content = props => {
  return (
    <div id="content">
      {props.contentRoute == ContentRoutes.CommonProblems ? (
        <CommonProblems/>
      ) : null}
      {props.contentRoute == ContentRoutes.HeirarchyTree ? (
        <HeirarchyTree/>
      ) : null}
    </div>
  );
};

export default Content;
