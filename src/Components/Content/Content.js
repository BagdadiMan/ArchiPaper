import "./content.css";
import ContentRoutes from "../../ContentRoutes.js";

const Content = props => {
  return (
    <div id="content">
      {props.contentRoute == ContentRoutes.CommonProblems ? (
        <span>Common Problems</span>
      ) : null}
    </div>
  );
};

export default Content;
