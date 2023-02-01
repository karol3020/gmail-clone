import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import { CloseSendMessage } from '../features/mailSlice'
import { useDispatch } from 'react-redux'
import { db } from './Firebase' 

function SendMail () {

    const { register, handleSubmit, errors  } = useForm();

    const onSubmit = (formData) => {
        db.collection('emails').add({
            to: formData.to ,
            subject: formData.subject ,
            message: formData.message 
        })
        dispatch(CloseSendMessage())
    }

    const dispatch = useDispatch()

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>NewMessage</h3>
                <CloseIcon 
                onClick={() => dispatch(CloseSendMessage())}
                className='sendMail__close' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <input name='to' placeholder='To' type='email'
                {...register("name value", {required: true})}
                />
                {{errors}.to && <p className='sendMail__error'>To is required!!</p>}

                <input name='subject' placeholder='Subject' type='text'
                {...register("name value", {required: true})}
                />
                {{errors}.subject && <p className='sendMail__error'>Subject is required!!</p>}

                <input name='message' placeholder='Message...'
                {...register("name value", {required: true})}
                type='text'
                className='sendMail__message'/>
                {{errors}.message && <p className='sendMail__error'>Message is required!!</p>}

                <div className='sendMail__options'>
                    <Button 
                    className='sendMail__send'
                    variant='container'
                    color='primary'
                    type='submit'
                    >Send</Button>
                </div>
            </form>

        </div> 
    )
}

export default SendMail