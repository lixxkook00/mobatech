import React from 'react'
import './Tokenomic.scss'

export default function Tokenomic() {
  return (
    <div className="tokenomic">
        <div className="container">
            <div className="row col-xl-12">
                <div className="tokenomic-title centering">
                    <div className="primary-title primary-gradient-text">
                        Tokenomic
                        <div className="primary-title__line"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col-xl-6 col-12">
                    <div className="tokenomic-content">
                        <div className="tokenomic-content-name">
                            ​<img className="img-width" src="./images/logo.png" alt="" />
                        </div>

                        <div className="tokenomic-content-code primary-gradient-text">
                            ​​OBA
                        </div>

                        <div className="tokenomic-content-supply">
                            Total Supply​​ : 81,000,000
                        </div>

                        <div className="tokenomic-content-network">
                            Contract-Network (​BEP-20)
                        </div>

                        <div className="tokenomic-content-price">
                            Initial Price : $0.8
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <img src="./images/coin.png" alt="" className="img-width tokenomic-logo" />
                </div>
            </div>
        </div>
    </div>
  )
}
