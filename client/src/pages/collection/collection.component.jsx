import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const CollectionPage = ({collection, history, match}) => {
    const {title, items} = collection;
    return(
        <div className='collection-page'>
            <div className='top'>
                <Link to='/shop' className='back-to-shop'> &#8678; </Link>
                <h2 className='title'>{title}</h2>
            </div>
            <div className='items'>
                {
                    items.map(item => 
                    <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);