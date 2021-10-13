import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getComingSoon, getMovieSchedules } from "../../api/movie.api";
import { RootState } from "../../app/store";

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async () => {

    const response = await getComingSoon();
    return response?.map((item: any, index: number) => ({
      id: index,
      ...item,
    })) || [];

    // const {
    //   ResultMessage,
    //   ResultSchedule,
    // } = await getMovieSchedules();

    // if (ResultMessage === "성공") {
    //   const movieMap = new Map(); 
    //   return ResultSchedule?.ScheduleList.reduce((movies: any, schedule: any, index: number) => {
    //     const data = movieMap.get(schedule.MovieNmKor);
    //     if (data) {
    //       data.push(schedule);
    //       movieMap.set(schedule.MovieNmKor, data);
    //     } else {
    //       movieMap.set(schedule.MovieNmKor, [schedule]);
    //     } 

    //     movies.push({
    //       id: index,
    //       code: schedule.MovieCd,
    //       name: schedule.MovieNmKor,
    //       start: schedule.PlayStartTm,
    //       end: schedule.PlayEndTm,
    //       theater: schedule.TheaterNm,
    //       runningTime: schedule.RunningTime,
    //       poster: schedule.PosterImageUrl,
    //       date: schedule.PlayYmd,
    //       screen: schedule.ScreenNm,
    //       screenRating: schedule.ScreenRatingNm,
    //     })
    //     return movies;
    //   }, [])
    // }
    // return [];
  }
)

const moviesAdapter = createEntityAdapter({
  selectId: (movie: any) => movie.id,
})

const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState({
    loading: false,
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }: any) => {
        state.loading = false;
        moviesAdapter.setAll(state, payload);
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const moviesSelectors = moviesAdapter.getSelectors(
  (state: RootState) => state.movie
)

export default moviesSlice.reducer;