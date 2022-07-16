import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../src/components/container";
import Layout from "../src/components/layout";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <Layout pageTitle="Blog">
      <Container
        padding="lg:py-16"
        margin="mt-32 sm:mt-32 md:mt-32 lg:mt-[6rem]"
      >
        <div className="pt-10">
          <div className="card ">
            <h2>Page 404</h2>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
