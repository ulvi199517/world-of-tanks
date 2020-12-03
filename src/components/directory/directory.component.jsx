import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'sssr',
                    imageUrl: 'https://i.ibb.co/mSB9P1g/sssr-flag-svg.png',
                    id: 1
                },
                {
                    title: 'german',
                    imageUrl: 'https://i.ibb.co/LNtjsyM/Germany-svg.png',
                    id: 2
                },
                {
                    title: 'uk',
                    imageUrl: 'https://i.ibb.co/D9k0DJH/UK-flag.jpg',
                    id: 3
                },
                {
                    title: 'usa',
                    imageUrl: 'https://i.ibb.co/02y2bWN/usa-flag.png',
                    id: 4 
                },
                {
                    title: 'french',
                    imageUrl: 'https://i.ibb.co/vXyLHf4/french-flag-svg.png',
                    size: 'large',
                    id: 5
                },

            ]
        }
    }
    render(){
        return(
    <div className='directory-menu'>
        {
            this.state.sections.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))
        }
    </div>
        )
    }
}

export default Directory;