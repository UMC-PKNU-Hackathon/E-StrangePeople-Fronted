import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import styled from "styled-components";
import { useNavigate } from "react-router";

const GoogleLoginButton = () => {
  const clientId ="421232647868-s2e2k6uvv5ern1qoq1hk0sleoe4f634a.apps.googleusercontent.com";
  const navigate = useNavigate();

  const onClickCredential = ()=>{
    navigate(`/search`, {
        state: {},
    });
  }
  return (
    <>
       <LoginBtn >
          <GoogleOAuthProvider clientId={clientId}
          >
            <GoogleLogin
              onSuccess={onClickCredential}
              onFailure={(err) => {
                console.log(err);
              }}
            />
          </GoogleOAuthProvider>
        </LoginBtn>
    </>
  );
};
const LoginBtn = styled.div`
//   visibility: hidden;
`;

const Btn = styled.div`
  border-radius: 1rem;
  backgroud-color: balck;
`;

export default GoogleLoginButton;
