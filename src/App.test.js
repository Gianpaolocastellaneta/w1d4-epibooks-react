import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Il componente welcome è montato correttamente', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('verifico il render di tutte le card', async () => {
  render(<App />);
  const cardsElements = await screen.findAllByTestId('card-image');
 
  expect(cardsElements).toHaveLength(150);
});

test('verifica del componente Comment Area', () => {
  render(<App />);
  const cardsElements = screen.getAllByTestId('card-image');
  fireEvent.click(cardsElements[0]);
  const rate = screen.getByPlaceholderText(/rate/i);
  expect(rate).toBeInTheDocument();

});

describe('ricerca dei libri tramite navbar', () => {
  test('SearchOne', () => {
    render(<App />);
    const searchBook = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchBook, { target: { value: 'justice' } });
    const AllTheBooksCards = screen.getAllByTestId('card-image');
    expect(AllTheBooksCards).toHaveLength(2);
  })

  test('SearchTwo', () => {
    render(<App />);
    const searchBook = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchBook, { target: { value: 'wild' } });
    const AllTheBooksCards = screen.getAllByTestId('card-image');
    expect(AllTheBooksCards).toHaveLength(1);
  })
  });

test('cliccando su un libro, il suo bordo cambia colore',  () => {
  render(<App />);
  const book =  screen.getAllByTestId('card-image');
  fireEvent.click(book[0]);
  expect(book[0]).toHaveClass('redBorder');
});

test('cliccando su un secondo libro dopo il primo, il bordo del primo libro ritorna normale', () => {
  render(<App />);
  const firstBook = screen.getAllByTestId('card-image');
  fireEvent.click(firstBook[0]);
  expect(firstBook[0]).toHaveClass('redBorder');

  fireEvent.click(firstBook[1]);
  expect(firstBook[0]).not.toHaveClass('redBorder');
}); 

test('verifico che all avvio della pagina non ci sia SingleComment', () => {
  render(<App />);
  const comment = screen.queryAllByTestId('comment');
  expect(comment).toHaveLength(0);
}); 

test('verifico che cliccando su un libro di recensioni, esse vengano caricate nel DOM', async () => {
  render(<App />);
  const book = screen.getAllByTestId('card-image');
  fireEvent.click(book[0]);
  const comment = await screen.findAllByTestId('comment');
  expect(comment).not.toHaveLength(0);
});