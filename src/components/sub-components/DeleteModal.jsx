import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export function DeleteModal ({setIsDeleteConfirmed, isShow = false, setShowDeleteModel}) {
    const [show, setShow] = useState(isShow);

    useEffect(()=> {

        setShow(isShow);

    }, [isShow])

    function handleClose() {
        setShow(false);
        setShowDeleteModel(false);
    }

    function handleDelete() {
        setIsDeleteConfirmed(true)
        setShow(false);
        setShowDeleteModel(false);
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this comment?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>
}