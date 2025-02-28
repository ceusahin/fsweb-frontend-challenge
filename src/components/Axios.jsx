import { toast } from "react-toastify";
import axios from "axios";

export default function Request() {
  const user = {
    id: 1,
    name: "Hakan Sahin",
    year: 2001,
    color: "#FFFFFF",
    pantone_value: "",
  };

  function axiosRequest() {
    axios
      .post("https://reqres.in/api/workintech", user)
      .then((res) => {
        console.log(res);
        toast.success("User added successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error adding user!");
      });
  }

  return (
    <div>
      <button
        className="dark:text-white mx-10 mt-10 hidden"
        onClick={axiosRequest}
      >
        Fake Axios Request
      </button>
    </div>
  );
}
