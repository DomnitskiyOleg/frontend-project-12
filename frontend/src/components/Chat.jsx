import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import AddChannelButton from './AddChanellButton';
import SendMessageForm from './SendMessageForm';
import Channelslist from './ChannelsList';
import { fetchChatData } from '../slices/chatDataSlice';

const Chat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChatData());
  });
  return (
    <Container className="h-100 p-2">
      <Row className="h-100 justify-content-center">
        <Col className="col-12">
          <Row className="h-100 justify-content-center">
            <Col className="d-flex flex-column col-4 col-md-2 shadow m-1 rounded bg-light">
              <div className="d-flex justify-content-between p-4">
                <b>Каналы</b>
                <AddChannelButton />
              </div>
              <Channelslist />
            </Col>
            <Col className="p-0 d-flex flex-column col-7 col-md-9 bg-white shadow m-1 rounded">
              <div className="p-3 shadow-sm rounded bg-light mb-4">
                <p className="m-0">
                  <b># general</b>
                </p>
                <span className="text-muted"> 0 сообщений</span>
              </div>
              <div
                id="messages-box"
                className="chat-messages overflow-auto px-5 "
              >
                <div className="text-break mb-2">
                  <b>admin</b>
                  : 124
                </div>
              </div>
              <SendMessageForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
