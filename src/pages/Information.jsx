import React from 'react';
import "./information.scss";

//be sure to add a div and use the orange, beige, and yellow color schemes from the other pages

const Information = () => {
  return (
    <>
      <div className='content-spring'>

        <h1 className='content-springTitle'>Spring Savings</h1>
        <h2 className='content-spring-Cards'>Revature's Latest Banking Application!</h2>

        <p className="content-spring-area">
          Spring Savings is a mobile-responsive banking application designed to be both convenient
          and appealing.<br />
          Our mission is to supply target customers with a sleek,
          intuitive application to meet their financial needs.
        </p>

        <ul className="latestContent-spring">
          <li>Secured and Tested features</li>
          <li>Simple and Safe Banking</li>
          <li>Flexible and Creative</li>
          <li>Desktop and Mobile Responsive</li>
          <li>Always Ready to help, with 24/7 Chats</li>
        </ul>

        <div className="springinfo"><span >
          Spring Savings LLC. </span>
          <p>7777 Spring Savings St.<br />
            Flushing, NY 11355<br />

            888-151-7474</p>

          Copyright &copy; 2022 Revature - Spring Savings<br />
          <a href="mailto:springsavings@revature.com">springsavings@revature.com</a>
        </div>
      </div>

    </>
  )
}

export default Information;
