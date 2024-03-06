import './ErrorMessage.scss'
import errorIcon from '../../shared/media/icon-error.svg'

type Props = { message: string }

export const ErrorMessage: React.FC<Props> = ({ message }): JSX.Element => {
  return (
    <div className='error-message'>
      <img
        src={errorIcon}
        alt='icon error'
        className='error-message__icon'
      />
      <p className='error-message__text'>{message}</p>
    </div>
  )
}
