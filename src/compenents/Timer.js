import React from 'react'




const seconds=(x)=>Math.floor((x / 1000) % 60)===0?"00":Math.floor((x / 1000) % 60)<10?"0"+Math.floor((x / 1000) % 60):Math.floor((x / 1000) % 60)
const minutes=(x)=>Math.floor((x / (1000 * 60)) % 60)===0?"00":Math.floor((x / (1000 * 60)) % 60)<10?"0"+ Math.floor((x / (1000 * 60)) % 60):Math.floor((x / (1000 * 60)) % 60)
const hours= (x)=> Math.floor((x / (1000 * 60 * 60)) % 24)===0? "00":Math.floor((x / (1000 * 60 * 60)) % 24)<10?"0"+ Math.floor((x / (1000 * 60 * 60)) % 24):Math.floor((x / (1000 * 60 * 60)) % 24)




 class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clock:0,
            timePause:true,
            name:"btn-start",
            description:"Start"
        }
      
      
      
      }

      start=()=>{
       
          if(this.state.timePause){
              
              this.setState({timePause:false,name:"btn-pause",description:"Pause"})
            this.timer= setInterval(
            () => {
              this.setState({clock:this.state.clock+1000})
            },
            1000) }else if(!this.state.timePause) {

                clearInterval(this.timer,1000)
                this.setState({timePause:true,name:"btn-start",description:"Start"})
               
            }
            
    }
    reset=()=>{
       
        
        this.setState({timePause:true,name:"btn-start",description:"Start",clock:0})
        clearInterval(this.timer,1000)
    }

    render() {
       
       
    return(
    <div className="container">
<div className="timer-container">

    <div className="hours"><h1>{hours(this.state.clock)}</h1> <p>Hours</p></div><h1>:</h1>
<div className="minutes"><h1>{minutes(this.state.clock)} </h1><p>Minutes</p></div><h1>:</h1>
<div className="seconds"><h1>{seconds(this.state.clock)} </h1><p>Seconds</p></div>

</div>
<div className="button-container">
<button className={this.state.name} onClick={this.start}>{this.state.description}</button> 
<button className="btn-reset" onClick={this.reset}>Reset</button>
</div>

</div>

    )
    }
}


export default Timer