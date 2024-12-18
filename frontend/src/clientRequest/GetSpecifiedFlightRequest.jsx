
import { BACKENDURL } from "../Config/Config.js";

const getSpecifiedFlight = (id, history, setCurrentFlight, setLoading) => {
    const token = localStorage.getItem("token");
    setTimeout(() => {
      fetch(BACKENDURL + "/api/flights/getSingleFlight/" + id, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          
          if (data.success === false) {
            window.scrollTo(0, 0);
            history("/");
            return;
          }
          console.log(data);
          setCurrentFlight(data);
          setLoading(false);

        });
    }, 1000);
    window.scrollTo(0, 0);
};

export default getSpecifiedFlight;