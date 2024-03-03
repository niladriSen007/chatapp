import { Box, Grid, Skeleton, Stack } from "@mui/material";

const Loader = () => {
  return (
   <>
   <Box sx={{height:"4rem"}} />
     <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
      <Grid
        height={"100%"}
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        className=""
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6}>
        <Stack spacing={2}>
         {
              Array.from({length: 3}).map((_, index) => (
                 <Skeleton key={index} variant="rounded" height={"5rem"} />
              ))
         }
        </Stack>
       <Box marginTop={5} className="flex items-center justify-center w-full"> <img loading="lazy" src="/loader.svg" alt="chat_loader" /></Box>
      </Grid>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Skeleton  variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
   </>
  );
};
export default Loader;
