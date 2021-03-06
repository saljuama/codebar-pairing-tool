import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addAttendee, goToPairingStep, selectAttendees} from '../attendeesSlice'
import {AttendeeEditor} from './editor/AttendeeEditor'
import {AttendeeMiniCard} from './list/AttendeeMiniCard'
import {Button, IconButton} from '@material-ui/core'
import {PersonAdd as PersonAddIcon, SkipNext as SkipNextIcon} from '@material-ui/icons'
import './UpdateAttendeesStep.scss'

export const UpdateAttendeesStep = () => {
  const [selectedAttendee, setSelectedAttendee] = useState(undefined)
  const attendees = useSelector(selectAttendees)
  const dispatch = useDispatch()
  const testId = name => `update-attendees-step-${name}`

  const selectAttendeeToEdit = attendee => {
    if (selectedAttendee === undefined || selectedAttendee.id !== attendee.id)
      setSelectedAttendee(attendee)
    else
      setSelectedAttendee(undefined)
  }

  const addNewAttendeeButton =
    <div
      data-test-id={testId('new-attendee')}
      onClick={() => dispatch(addAttendee({name: '', role: 'Student', languages: [], attendance: true}))}
    >
      <IconButton><PersonAddIcon/></IconButton>
    </div>

  const attendeesCards =
    <>
      {attendees.slice().reverse().map(attendee =>
        <AttendeeMiniCard
          key={attendee.id}
          attendee={attendee}
          selected={selectedAttendee !== undefined && selectedAttendee.id === attendee.id}
          onClick={() => selectAttendeeToEdit(attendee)}
        />
      )}
    </>

  return (
    <div className='UpdateAttendeesStep'>
      <div className='UpdateAttendeesStepHeader'>
        <span>Step 2: Update attendance, skills and add new students or coaches</span>
        <Button
          data-test-id={testId('pairing')}
          className='UpdateAttendeesStepDone'
          variant='contained'
          color='primary'
          endIcon={<SkipNextIcon/>}
          onClick={() => dispatch(goToPairingStep())}
        >
          Continue to pairings
        </Button>
      </div>
      <div className='UpdateAttendeesStepContent'>
        <div className='Attendees' data-test-id={testId('list')}>
          {addNewAttendeeButton}
          {attendeesCards}
        </div>
        {selectedAttendee !== undefined && <AttendeeEditor attendee={selectedAttendee}/>}
      </div>
    </div>
  )
}
