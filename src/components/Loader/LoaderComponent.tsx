import { LoaderContainerStyle } from "./Loader.css";
import Spinner from "./Spinner";

export default function LoaderComponent() {
  return (
    <div className={LoaderContainerStyle}>
      <Spinner />
    </div>
  );
}
