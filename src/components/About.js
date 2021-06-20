// Typing Master
// Last Edit: June 6th, 2018
// Authors: Fahad Alarefi, Ben Martinson

import React, { Component } from 'react'

class About extends Component {

  constructor(props) {
    super(props);
  }

 render() {
   return (
    <div>
      <div>
        <h1>Trò chơi đánh chữ</h1>
        <p>Chào mừng bạn tới trò chơi đánh chữ.</p>
        <p>Đây là trò chơi đánh chữ mục đích luyện cho người chơi có thể tăng tốc độ đánh từ 20wpm lên 80wpm
        </p>
        <p>
          Trò chơi vẫn còn nhiều lỗi bug chưa sửa được do trình độ có hạn của người lập trình, sẽ còn tiếp tục phát triển. 
        </p>
        <br />
        <br />
        <p>Hope you enjoy </p>
      </div>
    </div>
   )
 }
}

export default About;
