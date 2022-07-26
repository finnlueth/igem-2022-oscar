import React from 'react';
import './main.css';
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap'

const Main = () => {
    return (
        <div class="p-3 mb-2 bg-secondary text-white">
            <Card>Card</Card>
            <Breadcrumb>
                <Breadcrumb.Item>Test1</Breadcrumb.Item>
                <Breadcrumb.Item>Test2</Breadcrumb.Item>
                <Breadcrumb.Item>Test3</Breadcrumb.Item>
            </Breadcrumb>
            <Alert variant='primary'>Alert!!</Alert>
            Navbar
            <Button>Test Button</Button>
        </div>
    )
}

export default Main