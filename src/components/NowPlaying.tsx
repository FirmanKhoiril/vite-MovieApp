import { Box, Typography } from "@mui/material";
import useGetNowPlaying from "../hooks/useGetNowPlaying";
import { Error, Loading, MovieCard } from ".";
import { TCardDetail } from "../types/Types";
import { time } from "../types/DummyData";
import { useGlobalContext } from "../context/Context";

const NowPlaying = () => {
  const { timePopuler, setTimePopuler } = useGlobalContext();
  const { data, isSuccess, isError, isLoading, isFetching } = useGetNowPlaying();

  return (
    <Box sx={{ py: { md: 10, xs: 5 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: { md: 4, xs: 2 }, py: 2, alignItems: "center" }}>
        <Typography variant="h4" sx={{ fontSize: { md: 40, xs: 26, sm: 30 } }}>
          Trending Movie {timePopuler === "day" ? "Today" : "This Week"}
        </Typography>
        <Box sx={{ overflow: "hidden", borderRadius: 9999, display: "flex", alignItems: "center" }} className="border border-red-500">
          {time.map((item) => (
            <Box
              component={"button"}
              key={item.name}
              sx={{ py: { md: 1.5, sm: 1, xs: 0.5 }, px: { md: 2.5, sm: 2, xs: 1.5 } }}
              className={`${timePopuler === item.name ? "bg-gradient-to-r from-red-400 via-red-600 to-red-500" : "bg-white/10"}`}
              onClick={() => setTimePopuler(item.name)}
            >
              {item.value}
            </Box>
          ))}
        </Box>
      </Box>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <Box sx={{ display: "flex", overflowX: "scroll", gap: 1.5, py: 5, px: 4 }} className="scrollbar scrollbar-w-4 scrollbar-thumb-red-500 scrollbar-track-black/10 scroll-p-7">
            {data?.results.map((item: TCardDetail) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </Box>
        )
      )}
    </Box>
  );
};

export default NowPlaying;
