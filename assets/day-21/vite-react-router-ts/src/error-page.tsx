import { isRouteErrorResponse, useRouteError } from "react-router-dom";

type ErrorThrow = {
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorThrow;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(isRouteErrorResponse(error) && error.statusText) || error.message}
        </i>
      </p>
    </div>
  );
}
