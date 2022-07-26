import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CssBaseline } from "@mui/material";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <CssBaseline />
      <div className="not-found">
        <h1>404</h1>
        <h2>That page cannot be found </h2>
        <p>
          Redirecting to{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>{" "}
        </p>
      </div>
    </>
  );
};

export default NotFound;
