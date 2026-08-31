import { Button } from "antd";
import { HiArrowLeft, HiFlag, HiOutlineHome } from "react-icons/hi";
import Status from "../components/ui/Status";

function BookingDetail() {
  return (
    <div className="bg-surface-darker h-full w-full px-18 py-10">
      <div className="bg-surface space-y-10 rounded-lg pt-7">
        <DetailHeader />
        <DetailContainer />
      </div>
    </div>
  );
}

function DetailHeader() {
  return (
    <header className="flex items-center justify-between px-10">
      <div className="flex items-center gap-10">
        <h1 className="text-[2.4rem] font-bold">
          Booking <span>#9</span>
        </h1>
        <Status status={"Unconfirmed"} />
      </div>
      <Button type="link" icon={<HiArrowLeft />} style={{ fontWeight: "600" }}>
        Back
      </Button>
    </header>
  );
}

function DetailContainer() {
  return (
    <section>
      <div className="bg-primary flex justify-between px-10 py-8 font-semibold text-white">
        <div className="flex items-center gap-5">
          <HiOutlineHome color="white" size={28} />
          <p>
            <span>15</span> nights in cabin <span>002</span>
          </p>
        </div>
        <p>
          <span>Sat, Jun 17 2023 (in month)</span> -{" "}
          <span>Sun, Jul 02 2023</span>
        </p>
      </div>
      <div className="px-10 py-8">
        <div className="flex items-center gap-25 font-medium">
          <p>
            <span className="mr-4">
              <HiFlag style={{ display: "inline-block" }} color="#10b981" />
            </span>
            Kao Viboth
          </p>
          <p className="text-gray-500">kaoviboth25@gmail.com</p>
          <p className="text-gray-500">National ID 12345678910</p>
        </div>
      </div>
    </section>
  );
}

export default BookingDetail;
