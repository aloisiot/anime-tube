import { Input, Col, Row } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Logo, LogoDarkTheme } from '../icons';
import ToggleTheme from './ToggleTheme';
import useAppData from '../../data/hooks/useAppContext';
import Link from 'next/link';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
)

interface HeaderProps{
  onSearch: (value: string) => void
}

export default function Header(props: HeaderProps){
  const { theme } = useAppData()
  
  return (
      <header className='page-header'>
          <div className="container">
            <Row  align="middle" justify='space-between'>
              <Col style={{cursor: "pointer"}}>
                <Link passHref href={"/"}>
                  {theme === "dark" ? LogoDarkTheme : Logo}
                </Link>
              </Col>
              <Col >
                <Search
                  className='search-input'
                  placeholder="search"
                  onSearch={props.onSearch}
                  enterButton
                />
              </Col>
              <Col>
                <ToggleTheme />
              </Col>
            </Row>
          </div>
      </header>
    )
}