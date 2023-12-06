import React from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import socket from '../sockets/index';

const SendMessageForm = ({ currentChannelId }) => {
  // const { username } = useSelector((state) => state.username);
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: async ({ message }) => {
      const { username } = JSON.parse(localStorage.getItem('userId'));
      try {
        formik.resetForm();
        await socket.emitWithAck('newMessage', {
          message,
          username,
          channelId: currentChannelId,
        });
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <div className="mt-auto py-3 px-4">
      <Form
        onSubmit={formik.handleSubmit}
        noValidate=""
        className="py-1 border rounded-2"
      >
        <Form.Group className="input-group has-validation">
          <Form.Control
            name="message"
            aria-label="Новое сообщение"
            placeholder="Введите сообщение..."
            className="border-0 p-1 form-control"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <button
            type="submit"
            className="btn btn-group-vertical"
            disabled={formik.values.message.length === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
            <span className="visually-hidden">Отправить</span>
          </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SendMessageForm;
