import { useIdleTimer } from 'react-idle-timer'
import { useEffect, useState } from "react";
import AuthService from "./services/auth.service";
import { IdleTimeOutModal } from './IdolModal';


function IdleTimerContainer () {
  
  const timeout = 1000 * 6
  const promptTimeout = 1000 * 15

  const [open, setOpen] = useState(false)

  const [remaining, setRemaining] = useState(0)

  const onPrompt = () => {
    setOpen(true)
    setRemaining(promptTimeout)
  }
  
  const onIdle = () => {
    setOpen(false)
    setRemaining(0)
    AuthService.logout()    
  }
  
  const onActive = () => {
    setOpen(false)
    setRemaining(0)
  }

  const { getRemainingTime, isPrompted, activate } = useIdleTimer({
    timeout,
    promptTimeout,
    onPrompt,
    onIdle,
    onActive
  })

  const handleStillHere = () => {
    setOpen(false)
    activate()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPrompted()) {
        setRemaining(Math.ceil(getRemainingTime() / 1000))
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [getRemainingTime, isPrompted])

  const handleLogout = () => {
    setOpen(false)
    AuthService.logout()    
  }

  return (
    <div>
      
      <IdleTimeOutModal
        showModal={open}
        handleClose={handleStillHere}
        handleLogout={handleLogout}
        remainingTime={remaining}
      />

    </div>
  )
}

export default IdleTimerContainer;