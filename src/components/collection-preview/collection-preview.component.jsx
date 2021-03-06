import React,{Component} from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

const CollectionPreview =({items,title})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,title)=> item.id <4)
                .map(({id,...otherItemProps})=>(
                <CollectionItem key={id}{...otherItemProps}></CollectionItem>
            ))}
        </div>
    </div>
)

export default CollectionPreview;