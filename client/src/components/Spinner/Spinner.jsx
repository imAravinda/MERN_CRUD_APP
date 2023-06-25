import { ColorRing, Oval } from "react-loader-spinner";
import * as l from "./SpinnerElements";
const Spinner = () => {
  return (
    <l.Container>
      <Oval
        height={200}
        width={200}
        color="#46458C"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#46458Ced"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </l.Container>
  );
};

export default Spinner;