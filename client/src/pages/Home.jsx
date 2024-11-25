import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, Table } from 'semantic-ui-react';
import './Home.css'; // Import custom styles

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://mern-mvc-l0h9.onrender.com/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(() => {
        console.error('Error fetching books data');
      });
  }, []);

  return (
    <div className="home-page">
      <Header as='h1' textAlign='center' className="page-header">
        List of Books
      </Header>
      <Container text>
        <Table celled className="custom-table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Author</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
              <Table.HeaderCell>Publication Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {books.map(book => (
              <Table.Row key={book._id}>
                <Table.Cell>{book.title}</Table.Cell>
                <Table.Cell>{book.author ? `${book.author.givenName} ${book.author.lastName}` : 'Unknown'}</Table.Cell>
                <Table.Cell>{book.genre}</Table.Cell>
                <Table.Cell>{book.publicationDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}

export default Home;