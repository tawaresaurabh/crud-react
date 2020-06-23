export const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/activeBookings");
      const data = await response.json();
      
      return data;
    } catch (e) {
      console.log(e);
    }
  };


  