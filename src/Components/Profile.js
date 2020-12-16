import {Component} from 'react'

class Profile extends Component {
    state = { 
        post: {}
    }

    componentDidMount(){
        fetch("https://www.reddit.com/r/3Dprinting/.json")
            .then(resp => resp.json())
            .then(data => {
                let post = data.data.children.find(post => post.data.id===this.props.match.params.id)
                this.setState({ post: post.data });
            })
    }

    render() { 
        const {post} = this.state
        return ( 
            <div>
                <h3>{post.title}</h3>
            </div>
        );
    }
}

export default Profile;