import { LoaderContainerStyle, loader } from "./Loader.css";

interface LoaderProps {
  readonly isLoading: boolean;
}

export default function LoaderComponent({ isLoading }: LoaderProps) {
  if (isLoading) {
    return (
      <div className={LoaderContainerStyle}>
        <div className={loader}></div>
      </div>
    );
  }
  return null;
}
