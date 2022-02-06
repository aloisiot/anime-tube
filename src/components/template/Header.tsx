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
  const onSearch = (value: string) => console.log(value);
  
  return (
      <header className='page-header'>
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
                style={{ maxWidth: 304 }}
                onSearch={onSearch} enterButton
              />
            </Col>
            <Col>
              <ToggleTheme />
            </Col>
          </Row>
      </header>
    )
}