import { compareAsc, format, formatDistance, subDays } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";

const Practice = () => {
  const [startDate, setStartDate] = useState(new Date());
  const deadline = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;

    const dateline = compareAsc(new Date(startDate), deadline);

    if (dateline === 1) {
      toast.error("Dateline over");
    } else {
      toast.success("Confirm bids");
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-full my-auto">
      <div>
        <h1>Deadline</h1>
        <p>{format(deadline, "dd/MM/yyyy")}</p>
        <form
          onSubmit={handleSubmit}
          className="w-52 h-40 rounded-lg p-4 border shadow-xl"
        >
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="dd/MM/yyyy"
          />
          <input type="file" name="photo" id="" className="py-2 px-4" />
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Practice;
