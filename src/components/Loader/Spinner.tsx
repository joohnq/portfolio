import { loader } from "./Loader.css";

interface SpinnerProps {
  type: string | { type: string };
}

export default function Spinner() {
  return <div className={`${loader}`}></div>;
}
