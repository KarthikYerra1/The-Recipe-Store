import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#334155"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loading;
