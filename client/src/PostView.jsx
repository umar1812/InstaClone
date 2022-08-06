
const PostView = (props) => {
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec",];
    const newDate = props.date;
    let arr = newDate.split("T")
    let arr2 = arr[0].split("-")
    let num = Number(arr2[1])
    let month = months[num - 1]
    let actdate = `${arr2[2]} ${month} ${arr2[0]}`

    return (
        <div className='outer'>
            <div className='post'>
                <div className='top'><span><span className='user'>{props.author}</span><br /><span className='location' style={{ color: 'grey' }}>{props.location}</span></span> <img src='./Images/dots.jpg' alt='dots' height={'25px'} /></div>
                <div className='middle'><img src={props.img} alt='Post' height={'270px'} width={'400px'} /></div>
                <div className='bottom'><img src='./Images/like.png' height={'22px'} alt='like' /> <span className='date'>{actdate}</span></div>
                <h6 id="likeCss" style={{ color: 'grey' }}>{props.likes} likes</h6>
                <h5 id="desCss">{props.description}</h5>
            </div>
        </div>
    )
}

export default PostView;