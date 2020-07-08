import React from "react";
import { connect } from 'react-redux'

import { selectCollection } from '../../redux/shop/shop.selectors'

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss'
import {createStructuredSelector} from "reselect";

const CollectionPage = ({ match }) => (
  <div className='collection-page'>
    <h2>CategoryPage</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)
})

export default connect(mapStateToProps)(CollectionPage)
