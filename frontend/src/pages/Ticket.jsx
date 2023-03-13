import { useParams } from "react-router-dom"
import { useEffect } from "react"
import {toast} from 'react-toastify'
import { useSelector, useDispatch } from "react-redux"
import { getTicket, reset } from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

function View() {
  const {ticket, isLoading, isSuccess, isError, message} = useSelector((state) => state.tickets)

  const dispacth = useDispatch()
  const {ticketId} = useParams()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispacth(getTicket(ticketId))
    // eslint-disable-next-line
  }, [isError, ticketId, message])

  if(isLoading) {
    return <Spinner />
  }

  if(isError) {
    return <h3>Something Went Wrong</h3>
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleDateString('en-US')}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  )
}

export default View
