import HdBody from "./_components/HdBody";
import HdHeader from "./_components/HdHeader";

export default function page() {
  return (
    <div className="h-[90vh] w-[100vw] flex justify-center items-center ">
      <div className="h-full w-11/12 bg-white flex flex-col justify-start items-center">
        <HdHeader />
        <HdBody />
      </div>
    </div>
  );
}
