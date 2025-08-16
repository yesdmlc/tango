import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

interface UserFormModalProps {
  user: { email: string; access_level: string; is_active: boolean } | null;
  onClose: () => void;
  onSave: (updatedList: any) => void;
}

const UserFormModal: React.FC<UserFormModalProps> = ({ user, onClose, onSave }) => {
  const [email, setEmail] = useState(user?.email || '');
  const [accessLevel, setAccessLevel] = useState(user?.access_level || '');
  const [isActive, setIsActive] = useState(user?.is_active ?? true);
  const [error, setError] = useState<string | null>(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (!email || !accessLevel) {
      setError('Email and Access Level are required.');
      setValidated(true);
      return;
    }

    try {
      await onSave({ email, access_level: accessLevel, is_active: isActive });
      setError(null);
      onClose();
    } catch (err) {
      setError('Failed to submit user data. Please try again.');
    }
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{user ? 'Edit User' : 'Add User'}</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="formAccessLevel">
            <Form.Label>Access Level</Form.Label>
            <Form.Control type="text" value={accessLevel} onChange={(e) => setAccessLevel(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="formIsActive">
            <Form.Check type="checkbox" label="Active" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {user ? 'Update' : 'Add'} User
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UserFormModal;
