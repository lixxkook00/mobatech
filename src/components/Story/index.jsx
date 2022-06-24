import React from 'react'
import './Story.scss'

export default function Story() {
  return (
   <div className="story">
        <div className="container">
            <div className="row">
                {/* PLANET */}
                <div className="col-xl-6 centering">
                    <img className="img-width" src="https://playerx.qodeinteractive.com/elementor/wp-content/uploads/2018/06/h1-img-1.png" alt="" />
                </div>
                {/* PARAGRAPH */}
                <div className="col-xl-6">
                    <div className="story-title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Story
                        </div>
                    </div>
                    <div className="paragraph">
                        Earth's background in 2163: natural disasters continuously occur, habitats are severely affected, life is threatened, a deadly atmosphere covers the whole planet, and the population decreases continuously, leading to the danger of extinction. 
                    </div>
                    <div className="paragraph">
                        On earth, the tiger is a species with the greatest strength, ability to hunt and fight, and is highly adaptable in the harsh jungle environment. Therefore, a special force was established with 1575 tiger warriors selected through many rigorous training, testing, and evaluation courses. They are sent to find and explore a new planet in order to assist in the evacuation of all creatures on Earth to this new location.
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}
