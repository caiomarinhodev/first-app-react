import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ListPosts } from './components/ListPosts';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const sections = [
    { id: 1, title: 'Section 1', href: '#section-1' },
    { id: 2, title: 'Section 2', href: '#section-2' },
    { id: 3, title: 'Section 3', href: '#section-3' },
    { id: 4, title: 'Section 4', href: '#section-4' },
  ];
  const posts = [
    {
      id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      image: 'https://picsum.photos/200/200/?random'
    },
    { id: 2, title: 'Post 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', image: 'https://picsum.photos/200/200/?random' },
    { id: 3, title: 'Post 3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', image: 'https://picsum.photos/200/200/?random' },
    { id: 4, title: 'Post 4', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', image: 'https://picsum.photos/200/200/?random' },
    { id: 5, title: 'Post 5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.', image: 'https://picsum.photos/200/200/?random' }
  ]
  return (
    <div className="App" style={{ width: '100%' }}>
      <Header />
      <br />
      <Menu />
      <Row>
        <Col md={9}>
          <ListPosts posts={posts} />
        </Col>
        <Col md={3}>
          <Sidebar sections={sections} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
