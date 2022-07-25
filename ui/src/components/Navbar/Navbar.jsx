import React from 'react'
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <div>
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

export default Navbar