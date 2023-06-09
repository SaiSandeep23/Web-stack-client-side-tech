import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import { Control, Errors } from "react-redux-form";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";

import { Control, Form, Errors, actions } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  // handleSubmit(values){
  //   // alert(val.rating);
  //   this.props.addComment(values);

  // }
  handleSubmit(values) { 
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values)); 
    // this.props.resetFeedbackForm(); // event.preventDefault(); 
    // console.log(this.props);
    this.props.postComment(values);

  }
  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <div>
              {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}> */}
              {/* <LocalForm onSubmit={(values) => this.handleSubmit(values)}> */}
              <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Label htmlFor="rating" md={12}>
                    Rating
                  </Label>
                  <Col md={{ size: 12 }}>
                    <Control.select
                      model=".rating"
                      id="rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="author" md={12}>
                    Your Name
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model=".author"
                      id="author"
                      name="author"
                      placeholder="Your Name"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".author"
                      show="touched"
                      messages={{
                        required: "Required. ",
                        minLength: "Must be greater then 2 characters. ",
                        maxLength: "Must be 15 characters or less. ",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment" md={12}>
                    Comment
                  </Label>
                  <Col md={12}>
                    <Control.textarea
                      model=".comment"
                      id="comment"
                      name="comment"
                      rows="6"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 12 }}>
                    <Button type="submit" color="primary">
                      Submit
                    </Button>
                  </Col>
                  <Col md={{ size: 12 }}>
                    <Button type="cancel">
                      cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default CommentComponent;

// export default withRouter(connect(numapStateToPropsll, mapDispatchToProps))(CommentComponent);

