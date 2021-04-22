import React, { Fragment } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

function AddForm({addProduct}) {
const history = useHistory();

return ( 
    <Fragment>
    <h1>Add a New listing</h1>
    <Formik
        initialValues={{ name: '', description: '', image: '', location: '', price: '', brand: '', user_id: 1 }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                fetch('http://localhost:4000/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values)
                })
                    .then((r) => r.json())
                    .then((data) => {
                        addProduct(data)
                        setSubmitting(true);
                        // history.push('/');
                    });
                setSubmitting(false);
            }, 400);
        }}
    >
        {({ isSubmitting, handleChange }) => (
            <Form>
                <Field type="text" name="name" onChange={handleChange} placeholder="Name" />
                <Field type="text" name="description" onChange={handleChange} placeholder="Description" />
                <Field type="text" name="image" onChange={handleChange} placeholder="Image Url" />
                <Field type="text" name="location" onChange={handleChange} placeholder="Location" />
                <Field type="number" name="price" onChange={handleChange} placeholder="Price" />
                <Field type="text" name="brand" onChange={handleChange} placeholder="Brand" />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>
</Fragment>
    )

}
export default AddForm