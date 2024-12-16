export default getClassTypesRequest = () =>{
    fetch(BACKENDURL + "/api/classType/getClassTypeInfors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => {
          if (!response.ok) {
            console.log("get class type is failed : " + response.status);
          }
          return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
          console.log("Data received from server:", data);
          // Handle the data here
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          // Handle errors here
        });
}