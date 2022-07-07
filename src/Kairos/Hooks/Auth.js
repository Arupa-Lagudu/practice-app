import React, { useContext } from "react";
import authContext from "./auth_context";
  
const Auth = () => {
  // Now all the data stored in the context can 
  // be accessed with the auth variable
  const auth = useContext(authContext);
  console.log(auth.status);
  return (
    <div>
      <h1>Are you authenticated?</h1>
      {auth.status ? 
<p>Yes you are</p>
 : 
<p>Nopes</p>
}
  
      <button onClick={auth.login}>Click To Login</button>
    </div>
  );
};
export default Auth;