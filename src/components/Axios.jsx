import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

export default function Request() {
  const user = {
    id: 1,
    name: "Hakan Sahin",
    year: 2001,
    color: "#FFFFFF",
    pantone_value: "",
  };

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", user)
      .then((response) => {
        console.log(response.data);
        toast.success("Post Request is successful.");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      }, []);
  });
}
