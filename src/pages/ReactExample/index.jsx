import { Button } from 'antd';
import { useState } from 'react';

// 假装发送一条消息。
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function FeedbackForm() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea disabled={isSending} value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

function Rexp() {
  const [state, setState] = useState(null);
  return (
    <>
      <h1>你好呀{state}</h1>
      <Button onClick={() => setState('norush')}>say</Button>
      <FeedbackForm></FeedbackForm>
    </>
  );
}
export default Rexp;
