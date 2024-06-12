import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>CHECK URL AGAIN PAGE NOT FOUND SITE UNDER CONSTRUCTION</h2>
    </div>
  );
};
export default Error;
