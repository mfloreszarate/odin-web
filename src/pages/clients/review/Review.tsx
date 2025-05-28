import './review.css'


interface Props {
  content: string,
  clientName: string,
  // clientImg: string
}

export const Review = ({ clientName, content }: Props) => {

  return (
    <div className='review'>
      <div className="content">
        {content}
      </div>
      <div className="client-name center">
        {clientName}
      </div>
    </div>
  )
}
