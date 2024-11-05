import './review.css'


interface Props {
  content: string,
  clientName: string,
  clientImg: string
}

export const Review = ({ clientImg, clientName, content }: Props) => {

  return (
    <div className='review'>
      <div className="client-img center">
        <img src={clientImg} alt="client-img" />
      </div>
      <div className="content">
        {content}
      </div>
      <div className="client-name center">
        {clientName}
      </div>
    </div>
  )
}
