import React, { Component } from 'react';
import logo_icon from '../../style/img/logo_icon.png'

 export default class Header extends Component {
  render() {
    return (
      <header className="header-wrapper" id="header">
        <div className="logo d-flex justify-content-start">
          <a href="/">
            M
            <img src={logo_icon} alt="logo_icon" className="logo-icon"/>
            VIE APP
          </a>
        </div>
        <div className="navigation-bar">
          <ul className="nav-list d-flex justify-content-between">
            <li>
              <a href="/"><i className="far fa-comment-dots"></i></a>
              <div className="nav-link-hover-element">
                comics
              </div>
            </li>
            <li>
              <a href=""><i className="fas fa-video"></i></a>
              <div className="nav-link-hover-element">
                movies
              </div>
            </li>
            <li>
              <a href=""><i className="far fa-play-circle"></i></a>
              <div className="nav-link-hover-element">
                video
              </div>
            </li>
            <li>
              <a href=""><i className="fas fa-gamepad"></i></a>
              <div className="nav-link-hover-element">
                game
              </div>
            </li>
            <li>
              <a href=""><i className="fas fa-tv"></i></a>
              <div className="nav-link-hover-element">
                tv
              </div>
            </li>
            <li>
              <a href=""><i className="far fa-share-square"></i></a>
              <div className="nav-link-hover-element">
                more
              </div>
            </li>
          </ul>
        </div>
        <div className="user d-flex justify-content-end">
          <div className="user-layout d-flex">
            <div className="user-image">
              <img src="https://templeofzagan.files.wordpress.com/2018/08/bezos-eyes.jpg" alt=""/>
            </div>
            <div className="username"><a href="/">Jeff Bezos</a></div>
            <div className="edit-profile">
              <a href="/">
                <i className="fas fa-pen"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
 };