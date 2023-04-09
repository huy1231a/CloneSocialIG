import React from "react";
import "./Style-PostItem.css";
import { img } from "../../Assets/ImageList/img.jpg";
import Avatar from "@material-ui/core/Avatar";

export default function PostItem() {
  return (
    <div className="post__container">
      {/* Header -> Username + Avatar + Local */}
      <div className="post__header">
        <div className="post__header--block-left">
          <div className="post__header--avatar">
            <Avatar alt="Remy Sharp" src={img} />
          </div>
        </div>
        <div className="post__header--block-right">
          <div className="post__header--username">
            <a href="/#">dieuanh_678</a>
          </div>
          <div className="post__header--more-option">
            <span>
              <i className="bx bx-dots-horizontal-rounded"></i>
            </span>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="post__image">
        <img src={'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.18169-9/26113844_546877488979811_5776368442466262032_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TfRJcu3uGgAAX-DM4qF&_nc_ht=scontent-hkg4-1.xx&oh=00_AfA9G-Qw2jP1ecu--RCw97IWKmCt-n5D3UBIz6MXHZJXjQ&oe=6459E30B'} alt="p-1" />
      </div>
      <div className="post__group-bottom">
        {/* Group of interactive icons */}
        <div className="post__group-bottom">
          <div className="icons">
            <div className="icons-left">
              <span>
                <i className="bx bx-heart"></i>
              </span>
              <span>
                <i className="bx bx-message-rounded"></i>
              </span>
              <span>
                <i className="bx bx-paper-plane"></i>
              </span>
            </div>
            <div className="icons-right">
              <span>
                <i className="bx bx-bookmark"></i>
              </span>
            </div>
          </div>
          <div className="post__interactive-info">
            <a href="/#">
              <span>321</span> lượt thích
            </a>
          </div>
        </div>
        {/* Username + Caption */}
        <div className="post__caption">
          <div className="post__caption--user">
            <span className="user-name">
              <a href="/#">dieuanh_678</a>
            </span>
            &nbsp;
            <span className="caption">
              "Don't feel better than anybody, because you feel like something.
              Always have it at the back of your mind that you were nothing
              before you became something, and that thing you supposed to be is
              absolutely nothing."
            </span>
          </div>
          {/* Time */}
          <p className="post__caption--time"><span>1</span> Ngày trước</p>
        </div>
        {/* input field for comment */}
        <div className="post__comment">
            <form>
                <span>
                    <i className='bx bx-smile'></i>
                </span>
                <input type="text" placeholder="Thêm bình luận..." />
                <button className="btn btn-post-comment">Đăng</button>
            </form>
        </div>
      </div>
    </div>
  );
}