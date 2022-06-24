import React from 'react'
import './Vision.scss'

export default function Vision() {
  return (
   <div className="vision">
        <div className="container">
            <div className="row">

                <div className="col-xl-6 flex-column">
                    <div className="vision-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Vision
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        Trong ngắn hạn chúng tôi mong muốn trở thành nền tảng chơi game đa kênh, đa nền tảng, thu hút nhiều tựa game và tạo ra các giải đấu hấp dẫn. Một nơi để các đổi tuyển game tạo ra các cuộc đối đầu bùng nổ.

                        Trong dài hạn MOBATECH sẽ trở thành một trong 5 doanh nghiệp quản lý dịch vụ trò chơi hàng đầu thế giới. Hỗ trợ quảng bá cho các tựa game tiềm năng. Xây dựng không gian Metaverse dành riêng cho game thủ. 
                    </div>
                </div>

                 <div className="col-xl-6 centering">
                    <img className="img-width" src="./images/charc2.png" alt="" />
                </div>
            </div>
        </div>
   </div>
  )
}