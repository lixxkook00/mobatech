import React from 'react'
import './Mission.scss'

export default function Mission() {
  return (
   <div className="mission">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-6 centering">
                    <img className="img-width" src="https://www.seekpng.com/png/full/345-3451966_fortnite-season-6-png.png" alt="" />
                </div>

                <div className="col-xl-6 flex-column">
                    <div className="mission-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Mission
                            <div className="primary-title__line"></div>
                        </div>
                    </div>
                    <div className="paragraph">
                        Sứ mệnh của chúng tôi là tạo nên một sân chơi công bằng cho tất cả game thủ, nhà phát triển và nhà tài trợ. Phát triển nền tảng Metaverse giúp người xem có thể theo dõi giải đấu yêu thích của mình theo một cách chân thực, choáng ngợp nhất.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}
