import React from 'react';
import './CreepyButton.css';
import { Link } from 'react-router-dom';
/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

const STYLES = ['cbtn--primary', 'cbtn--outline'];

const SIZES = ['cbtn--medium', 'cbtn--large'];

export const CreepyButtonConst = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (

        <Link to="/" className='cbtn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>

    )






}