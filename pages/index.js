import Image from 'next/image'
import styles from "../styles/Home.module.scss"
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();
 
  return (
    <>
      
      <Header country = { country }/>
      <div> TEST DDDDDDDDDDDDDDDDD</div>
      <Footer country = { country } />



    </>
  )
}

export async function getServerSideProps() {
 /*  let data = await axios
    .get("https://api.ipregistry.co/?key=wx0ts8u1rst18wb2")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data); */
  return {
    props: {

     // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        key: "DDDDDKKEE",
        name: "Morocco",
        flag: "https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360",
      },
    },
  };
}
