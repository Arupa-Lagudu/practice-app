import {TailSpin} from "react-loader-spinner"

function WithListLoading(Component) {
  return function WihLoadingComponent({ Loading, ...props }) {
    console.dir(props);
    if (!Loading) return <Component {...props} />;
    return (
       <div style={{ position: "fixed", left: "47%", top: "40%" }}>
        <TailSpin 
          color="#000" 
          height={50} 
          width={50}/>
         <p style={{color: "#000"}}>Loading......</p>
         </div>
    );
  };
}
export default WithListLoading;
