import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
    render() {
        return (
            <main className='mt-3'>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} />
                ))}
            </main>
        )
    }
}

export default Items