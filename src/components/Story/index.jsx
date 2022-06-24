import React from 'react'
import './Story.scss'

export default function Story() {
  return (
   <div className="story">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-6 centering">
                    <img className="img-width" src="./images/charc1.png" alt="" />
                </div>

                <div className="col-xl-6 flex-column">
                    <div className="story-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Story
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        MOBATECH là nhà cung cấp phần mềm độc lập, nghiên cứu và đầu tư công nghệ. Chúng tôi đang cung cấp các nền tảng trò chơi mở và các dịch vụ chuyên nghiệp cho cả lĩnh vực trò chơi online và offline. Chúng tôi tin tưởng vào các giải pháp công nghệ định hướng giá trị giúp đơn giản hóa hoạt động kinh doanh của bạn cho dù bạn là nhà điều hành, nhà cung cấp hay cơ quan quản lý.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}
