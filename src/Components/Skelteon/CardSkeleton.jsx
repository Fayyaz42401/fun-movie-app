
// import { height, width } from "@mui/system"
import { Bars } from "react-loader-spinner"
const CardSkeleton = () => {
  return (
    <div style={{
      display:"flex",
      justifyContent:"centre",
      alignItems:"center",
      width:"100%",
      height:"80vh"
    }}>
        <Bars
  height="80"
  width="80"
  color="var(--main)"
  ariaLabel="bars-loading"
  wrapperStyle={{
    display:"flex",
    justifyContent:"center",
    width:"100%"
  }}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default CardSkeleton