import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTickets, reset } from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

function Tickets() {
  const {tickets, isLoading, isSuccess} = useSelector((state) => state.tickets)

  const dispacth = useDispatch()

  useEffect(() => {
    return () => {
      if(isSuccess) {
        dispacth(reset())
      }
    }
  }, [dispacth, isSuccess])

  useEffect(() => {
    dispacth(getTickets())
  }, [dispacth])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <h1>
      Tickets
    </h1>
  )
}

export default Tickets
