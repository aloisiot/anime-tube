import { Input, Col, Row } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Logo, LogoDarkTheme, SmLogo } from '../icons';
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
                  <div>
                    <div className="lg-logo">
                      {theme === "dark" ? LogoDarkTheme : Logo}
                    </div>
                    <div className="sm-logo">
                      {SmLogo}
                    </div>
                  </div>
                </Link>
              </Col>
              <Col className='search-input-container'>
                <Search
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