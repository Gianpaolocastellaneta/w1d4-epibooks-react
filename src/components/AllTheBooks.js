import MyCard from "./MyCard";
import history from "../data/history.json";

function AllTheBooks() {
    return (
        <div className="container">
        <div className="row row-cols-3">
            {history.map((book) => (
                <MyCard
                    key={book.asin}
                    asin={book.asin}
                    title={book.title}
                    img={book.img}
                    price={book.price}
                    category={book.category}
                />

               
            ))}
        </div>
        </div>

               
    );
}    
export default AllTheBooks;
