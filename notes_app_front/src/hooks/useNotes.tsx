import axios from "axios";

const useNotes = () => {
  //api calls

  const getNotes = async () => {
    const request = await axios.get("/api/notes/");

    if (request.status == 200) {
      return request.data;
    }
  };

  return {
    getNotes,
  };
};

export default useNotes;
