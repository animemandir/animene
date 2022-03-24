import styles from "./styles.module.scss"
import Grid from "@mui/material/Grid"
import CardSkeleton from "../ui/CardSkeleton"

export default function Loading({ type }) {
  let config = {
    default: {
      xs: 4,
      sm: 3,
      md: 2.4
    },
    horizontal: {
      xs: 12,
      sm: 12,
      md: 12
    },
    square: {
      xs: 12,
      sm: 12,
      md: 6
    }
  }

  const { xs, sm, md } = config[type] || config.default

  const dummy = new Array(10).fill(0)
  return (
    <>
      {dummy.map((_, idx) => (
        <Grid item xs={xs} sm={sm} md={md} key={idx}>
          <CardSkeleton type={type} />
        </Grid>
      ))}
    </>
  )
}
