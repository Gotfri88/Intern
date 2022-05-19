import React from 'react'
import './index.css'
import GreyImg from '../../Images/Tool/Tool_grey.png'
import TopPoolImg from '../../Images/Tool/Tool_top_pool.png'
import IdeaImg from '../../Images/Tool/Tool_idea.png'
import LeftGraphImg from '../../Images/Tool/Tool_left_graph.png'
import RightGraphImg from '../../Images/Tool/Tool_right_graph.png'
import SticksImg from '../../Images/Tool/Tool_sticks.png'
import ChargingImg from '../../Images/Tool/Tool_charging.png'

function Tool() {
  return (
    <section>
      <div className='flex_tool'>
        <div className='flex_tool_left'>
          <h1>BI Tool Integration</h1>
          <p>We use Business Intelligence Tool that allows you to be updated what is happening in your business just by one click. Track revenue and profit by one click.</p>
        </div>
        <div className='flex_tool_right'>
          <img className='grey_img' src={GreyImg} alt='#'/>
          <img className='top_pool_img' src={TopPoolImg} alt='#'/>
          <img className='idea_img' src={IdeaImg} alt='#'/>
          <img className='left_graph_img' src={LeftGraphImg} alt='#'/>
          <img className='right_graph_img' src={RightGraphImg} alt='#'/>
          <img className='sticks_img' src={SticksImg} alt='#'/>
          <img className='charging_img' src={ChargingImg} alt='#'/>
        </div>
      </div>
    </section>
  )
}

export default Tool