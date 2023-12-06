import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import AddChannelButton from './AddChanellButton';
import SendMessageForm from './SendMessageForm';
import Channelslist from './ChannelsList';
import MessageBox from './MessageBox';
import { fetchChatData } from '../slices/chatDataSlice';

const Chat = () => {
  const dispatch = useDispatch();
  const { channels, currentChannelId, messages } = useSelector(
    (state) => state.chatData,
  );
  console.log(messages);
  useEffect(() => {
    dispatch(fetchChatData());
  }, []);
  return (
    <div className="h-100 d-flex container-fluid overflow-hidden justify-content-center align-items-center bg-light py-4">
      <Container className="h-100 p-2">
        <Row className="h-100 justify-content-center">
          <Col className="h-100 col-12">
            <Row className="h-100 justify-content-center">
              <Col className="d-flex flex-column col-4 col-md-3 col-lg-2 shadow m-1 rounded bg-light">
                <div className="d-flex justify-content-between py-4">
                  <b>Каналы</b>
                  <AddChannelButton />
                </div>
                <Channelslist
                  chanels={channels}
                  currentChannelId={currentChannelId}
                  setActiveChannelId={currentChannelId}
                />
              </Col>
              <Col className="h-100 p-0 d-flex flex-column col-6 col-md-8 col-lg-9 bg-white shadow m-1 rounded">
                <div className="p-3 shadow-sm rounded bg-light mb-4">
                  <p className="m-0">
                    <b># general</b>
                  </p>
                  <span className="text-muted"> 0 сообщений</span>
                </div>
                <MessageBox
                  messages={messages}
                  currentChannelId={currentChannelId}
                />
                <SendMessageForm currentChannelId={currentChannelId} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Chat;
