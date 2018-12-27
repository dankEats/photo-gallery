import React from 'react';
import Photos from './Photos.jsx';

class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            photos: [],
            resturantId: 1
        }
        this.grabPhotos = this.grabPhotos.bind(this);
    }

    componentDidMount() {
        this.grabPhotos()
    }

    grabPhotos () {
        fetch(`/${this.state.resturantId}/photos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((gallery) => {
            console.log(gallery);
            this.setState({
                photos: gallery
            })
        })
    }

    render() {
        return (
        <div>
            <Photos photo={this.state.photos} />
        </div>
        )
    }
}

export default Gallery;