import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="singlePostImg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Chetan</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi explicabo inventore iusto illo minima possimus animi? Laborum mollitia nesciunt sapiente, impedit explicabo praesentium cumque alias, ipsa quaerat provident reiciendis nulla?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi explicabo inventore iusto illo minima possimus animi? Laborum mollitia nesciunt sapiente, impedit explicabo praesentium cumque alias, ipsa quaerat provident reiciendis nulla?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi explicabo inventore iusto illo minima possimus animi? Laborum mollitia nesciunt sapiente, impedit explicabo praesentium cumque alias, ipsa quaerat provident reiciendis nulla?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi explicabo inventore iusto illo minima possimus animi? Laborum mollitia nesciunt sapiente, impedit explicabo praesentium cumque alias, ipsa quaerat provident reiciendis nulla?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi explicabo inventore iusto illo minima possimus animi? Laborum mollitia nesciunt sapiente, impedit explicabo praesentium cumque alias, ipsa quaerat provident reiciendis nulla?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi explicabo inventore iusto illo minima possimus animi? Laborum mollitia nesciunt sapiente, impedit explicabo praesentium cumque alias, ipsa quaerat provident reiciendis nulla?
        </p>
      </div>
    </div>
  )
}
