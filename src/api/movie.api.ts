import axios from "axios";

export const getComingSoon = async () => {
  const response = await axios.get('/cgv/soon');
  return response.data;
};

export const getMovieSchedules = async () => {
  const response = await axios.post('/cgv/schedule', {
    strMovieGroupCd: "",
    strMovieTypeCd: "",
    strPlayYMD: "",
    strRankType: "MOVIE",
    strRequestType: "THEATER",
    strScreenTypeCd: "",
    strTheaterCd: "0013",
    strUserID: "",
  });
  return response.data;
};

export const findTicket = async (movieName: string) => {
  const response = await axios.post(`/cgv/ticket`, {
    strMovieGroupCd: "",
    strMovieTypeCd: "",
    strPlayYMD: "",
    strRankType: "MOVIE",
    strRequestType: "THEATER",
    strScreenTypeCd: "",
    strTheaterCd: "0013",
    strUserID: "",
    movieName,
  });
  return response.data;
}