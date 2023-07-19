import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";

//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function WorksId({ works }) {
  return (
    <div className="absolute bg-base">
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{works.title}</h1>
        <p className={styles.publishedAt}>{works.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{ __html: `${works.body}` }}
          className={styles.post}
        ></div>
      </main>
      <Footer />
    </div>
  );
}
