import React from 'react';
import Photo from './Photo';
import { Link } from 'react-router';
export default class PhotoGrid extends React.Component {
  render() {
    return <div className="photo-grid">
    {this.props.posts.map((post, i) => <Photo key={post.code} i={i} post={post} {...this.props} />)}
   </div>
  }
}