/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
const Title = ({ title = "Chat app", description = "This is my chat app" }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  );
};
export default Title;
