import { Form } from 'react-bootstrap';

function FormInput({
    type,
    label,
    placeholder,
    id,
    name,
    value = '',
    error,
    handleChange,
}) {
    return (
        <Form.Group controlId={id}>
            <Form.Label column="lg">Your name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                // value={value}
                // onChange={handleChange}
                size="lg"
                required={true}
                // isInvalid={error}
                // isValid={!error && value.length > 0}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default FormInput;
