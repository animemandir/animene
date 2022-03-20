import Grid from "@mui/material/Grid"
import Lazyload from "react-lazyload"
import CardSkeleton from "../ui/CardSkeleton"

import styles from "./styles.module.scss"

import AnimeCard from "../AnimeCard"

import AnimeCardHorizontal from "../AnimeCardHorizontal"

const AnimeCardList = ({ animes, type }) => {
  if (type === "horizontal") {
    return (
      <>
        {animes.map((anime) => (
          <Grid item xs={12} key={anime.id}>
            <Lazyload
              key={anime.id}
              height={200}
              offset={50}
              placeholder={<CardSkeleton type={type} />}
            >
              <AnimeCardHorizontal anime={anime} />
            </Lazyload>
          </Grid>
        ))}
      </>
    )
  }
  return (
    <>
      {animes.map((anime) => (
        <Grid item xs={4} sm={3} md={2.4} key={anime.id}>
          <Lazyload
            height={200}
            offset={50}
            placeholder={<CardSkeleton type={type} />}
          >
            <AnimeCard anime={anime} />
          </Lazyload>
        </Grid>
      ))}
    </>
  )
}
export default AnimeCardList
