import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";
// import Loader from "../src/components/Loader";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | 잔나비</title>
      </Head>
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
    </div>
  );
}


export async function getStaticProps() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    }
  }
}