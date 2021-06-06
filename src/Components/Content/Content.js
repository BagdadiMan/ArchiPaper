import "./content.css";
import ContentRoutes from "../../ContentRoutes.js";
import CommonProblems from '../CommonProblems/CommonProblems.jsx'

const Content = props => {
  return (
    <div id="content">
      {props.contentRoute == ContentRoutes.CommonProblems ? (
        <CommonProblems/>
      ) : null}
    </div>
  );
};

export default Content;
