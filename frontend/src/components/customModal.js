import React, {Component} from "react";
import { Button, Modal } from "react-bootstrap";

class CustomModal extends Component{
    render(){
        return(
            <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title  id="contained-modal-title-vcenter">
                        과목 검색
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ㅇㅇㅇㅇ
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>닫기</Button>
                </Modal.Footer>
            </Modal>
            
        );
    }

}

export default CustomModal