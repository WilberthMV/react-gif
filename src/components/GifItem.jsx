
export const GifItem = ({title,url,id}) => {
  return (
    <div className="card">
            {/* <li >{title}</li> */}
            <img src={url} alt={title} />
            <p>{title}</p>
    </div>
  )
}
