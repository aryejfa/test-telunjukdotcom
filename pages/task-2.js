import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";
import Container from "../src/components/container";
import Layout from "../src/components/layout";

export default function Task2() {
  const { locale } = useRouter();

  return (
    <>
      <Layout pageTitle="Task 2">
        <Container
          padding="lg:pt-16"
          margin="mt-[7rem] sm:mt-31 md:mt-31 lg:mt-[4rem]"
        >
          <h2 className="lg:text-[32px] text-lg  leading-normal lg:pt-[100px] pt-20  text-center px-1 ">
            {locale === "en"
              ? "Bismillah, hopefully the test results are successful."
              : "Bismillah semoga hasil test tersebut berhasil."}
          </h2>
          <h2 className="lg:text-3xl text-lg font-semibold leading-12 lg:pb-5 pb-2 text-center px-1 ">
            {locale === "en" ? "Task 2" : "Tugas 2"}
          </h2>
          <h2 className="lg:text-3xl text-lg font-semibold leading-12 lg:pb-5 pb-10 text-center px-1 ">
            React JS (Next JS) & Tailwind CSS
          </h2>
        </Container>
      </Layout>
    </>
  );
}
