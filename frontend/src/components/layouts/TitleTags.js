import React from "react";
import { Helmet } from "react-helmet";

//MetaData
const TitleTags = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title> {`${title} - Best Capsule Wardrobes`}</title>
      </Helmet>
    </div>
  );
};

export default TitleTags;
