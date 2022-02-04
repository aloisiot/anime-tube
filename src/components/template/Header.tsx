import { Input, Col, Row } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Logo } from '../icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);
interface HeaderProps{
    onSearch: (value: string) => void
}

export default function Header(props: HeaderProps){
    return (
        <header className='page-header'>
            <Row  align="middle" justify='space-between'>
              <Col>
                {Logo}
              </Col>
              <Col >
                <Search
                  className='search-input'
                  placeholder="input search text"
                  style={{ maxWidth: 304 }}
                  onSearch={onSearch} enterButton />

              </Col>
              <Col>
                <span style={{height: "24px", width: '48px', background: "#CDCDCD", borderRadius: "12px", display: "flex", alignItems: "center", padding: "2px"}}>
                  <span style={{height: "18px", width: "18px", background: "#E89029", borderRadius: "12px"}}></span>
                </span>
              </Col>
            </Row>
        </header>
    )
}