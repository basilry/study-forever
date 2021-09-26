import axios from "axios";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";


export default function admin () {

  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  

  function checkLogin() {
    axios.get("/api/isLogin").then(res => {
      if(res.status === 200 && res.data.name) {
        // 로그인
        setIsLogin(true);
      } else {
        // 로그인 안됨
        router.push("/login")
      }
    })
  }

  function logout() {
    axios.get("/api/logout")
    .then((res) => {
      if(res.status === 200) {
        router.push("/")
        setIsLogin(false)
      }
    })
  }

  useEffect(() => {
    checkLogin();
  }, [])


    return (
        <div>
            admin
            {isLogin && <Button onClick={logout}>Logout</Button>}
        </div>
    );
}

