import { Button, Card, Divider, Input, Pagination, Space, Statistic } from 'antd';
import { useBoolean } from 'norush-hooks';
import { useState } from 'react';
import { Link } from 'umi';
import './index.less';
const { TextArea } = Input;

function MyButton() {
  return <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />;
}

function MyButton2() {
  return <Pagination defaultCurrent={1} total={50} />;
}

function AddCount1({ count, onClick }) {
  return (
    <>
      <Button type="primary" onClick={onClick}>
        Click
      </Button>
      <Statistic title="Clicked Number" value={count} />
      Clicked {count} nums
    </>
  );
}

function AddCount2({ count, onClick }) {
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          title="Shared counts"
          extra={
            <Button type="primary" onClick={onClick}>
              Click
            </Button>
          }
          style={{
            width: 300,
          }}
        >
          <p>Card content {count} nums</p>
        </Card>
      </Space>
    </>
  );
}

function StateChange() {
  const [number, setNumber] = useState(0);

  const handleClick = function (value) {
    console.log(value);
  };

  return (
    <>
      <h1>{number}</h1>
      <Button
        onClick={() => {
          setNumber(number + 5);
          // setTimeout(() => {
          //   alert('得到点击时第一次的render:' + number);
          // }, 1000);
          handleClick(number);
          // alert(number);
        }}
      >
        +5
      </Button>
    </>
  );
}

// 红绿灯
function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <Button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</Button>
      <h1
        style={{
          color: walk ? 'darkgreen' : 'darkred',
        }}
      >
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}

// norush-hooks 包测试
function NorusHoolks() {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  return (
    <div>
      <p>Effects：{JSON.stringify(state)}</p>
      <p>
        <Button type="primary" onClick={toggle}>
          Toggle
        </Button>
        <Button type="primary" onClick={setFalse}>
          Set false
        </Button>
        <Button type="primary" onClick={setTrue}>
          Set true
        </Button>
      </p>
    </div>
  );
}

export default function MyApp() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  // 共享参数
  const [count, setCount] = useState(0);
  function handleShared() {
    setCount(count + 1);
  }

  return (
    <div className="container-exp">
      <h1>动态路由</h1>
      <Link to="/hoo/:id/index">Hoo pages</Link>
      <Divider />
      <h1>Welcome to my experiment</h1>
      <Button type="primary" onClick={handleClick}>
        Clicked {show} nums
      </Button>
      <Divider />
      <div>{show ? <MyButton /> : <MyButton2 />}</div>
      <Divider />
      <AddCount1 count={count} onClick={handleShared} />
      <Divider />
      <AddCount2 count={count} onClick={handleShared} />
      <Divider />
      <StateChange />
      <Divider />
      <TrafficLight />
      <Divider />
      <NorusHoolks />
    </div>
  );
}
