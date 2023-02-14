import React, { Component } from 'react';
import '../assets/styles/UserChat.css';
import emoji from '../assets/imgs/emojis.svg';
import user from '../assets/imgs/image.png';
import messageicon from '../assets/imgs/messages.png';
import mic from '../assets/imgs/microphone.svg';
import attach from '../assets/imgs/attachment.svg'; 
import messagehelp from '../assets/imgs/message_us.png';

class UserChat extends Component {
    constructor(props) {
        super(props); 

        this.state =  {
            button: true,
            chatbutton: '.chatbox__button',
            support: '.chatbox__support'
        } 
        this.display = this.display.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.showOrHideChatBox = this.showOrHideChatBox.bind(this);
    }
    

 

    display(){  

        const a = document.querySelector('.chatbox__button');
        const b = document.querySelector('.chatbox__support');  
        console.log("Let's start");   
        this.toggleState(b, a);
    }

    toggleState(chatbox, button){
        this.setState((state) => ({
           button: !state.button
        })); 
        console.log("togglestate");
        this.showOrHideChatBox(chatbox, button);
    }
    

      showOrHideChatBox(chatbox, button){
        if(this.state.button) {
            chatbox.classList.add('chatbox--active');
            console.log("active");
        } else if (!this.state.button) {
            chatbox.classList.remove('chatbox--active');
            console.log("inactive"); 
        }
    }

      
    
 
    render() {
        // const { chatbutton, support } = this.state;
        // const classes = {
        //     first: chatbox__support,
        //     second: chatbox--active
        // }
        return ( 
            
            <div className="container">
                <div className="chatbox">
                <div className="chatbox__support">
                    <div className="chatbox__header">
                        <div className="chatbox__image--header">
                            <img src={ user } alt="image_user" />
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Chat support</h4>
                            <p className="chatbox__description--header">Any questions? Ask Us!</p>
                        </div>
                    </div>
                    <div className="chatbox__messages"> 
                            <div className="messages__item messages__item--visitor">
                                Can you let me talk to the support?
                            </div>
                            <div className="messages__item messages__item--operator">
                                Sure!
                            </div>
                            <div className="messages__item messages__item--visitor">
                                Need your help, I need a developer in my site.
                            </div>
                            <div className="messages__item messages__item--operator">
                                Hi... What is it? I'm a front-end developer, yay!
                            </div>
                            {/* <div className="messages__item messages__item--typing">
                                <span className="messages__dot"></span>
                                <span className="messages__dot"></span>
                                <span className="messages__dot"></span>
                            </div>  */}
                    </div>
                        <div className="chatbox__footer">
                            <img src={ emoji } alt=""/>
                            <img src={ mic } alt=""/>
                            <input type="text" placeholder="Write a message..."/>
                            <p className="chatbox__send--footer">Send</p>

                            <img src={ attach } alt=""/>
                        </div>
                </div>
                <div className="chatbox__button d-flex flex-row justify-content-end">
                <img src={ messagehelp } alt='Need Help?' />
                    <button onClick={ this.display } className=""> 
                         { this.state.button ? <img src={ messageicon } alt='messageIcon' /> : <img src={ messageicon } alt='messageIcon' /> }
                    </button>
                </div>
                </div>
            </div>
        );
    }
}

 


export default UserChat;