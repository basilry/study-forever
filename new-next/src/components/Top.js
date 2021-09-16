import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{display: "flex"}}>
        <img src="/favicon.ico" style={{width: 80, margin: "20px"}} />
        <Header as="h1" style={{marginTop: "50px"}}>잔나비</Header>
      </div>
      <Gnb />
    </div>
  );
}
