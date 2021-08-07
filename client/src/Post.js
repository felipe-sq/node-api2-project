import React from 'react';
import { Container, Card, } from 'react-bootstrap';

const Post = (props) => {

    const { posts } = props;

    return (
        <Container style={{ width: '40rem' }} fluid="sm">
            { posts.map(post => (
                <Card bg="dark" text="white" key={post.id}>
                    <Card.Header as="h5">{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Text className="text-muted">{post.contents}</Card.Text>
                        <Card.Text>{post.comments}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default Post;