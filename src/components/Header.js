import React from 'react'

export default function Header() {
    return (
        <header>
            <div>
                <span className='fw-semibold fs-3'>Shop</span>
                <ul className='d-flex float-end list-unstyled gap-4 fs-6 fw-medium'>
                    <li> Про нас</li>
                    <div className="vr"></div>
                    <li>Контакты</li>
                    <div className="vr"></div>
                    <li>Кабинет</li>
                </ul>
            </div>
        </header>
    )
}