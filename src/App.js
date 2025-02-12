import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Book from "./components/Book/Book";
import AddBooks from "./components/AddBooks/AddBook";
import DeleteBooks from "./components/DeleteBooks/DeleteBooks";
import Registration from "./components/Registration/Registration";
import Browse from "./components/Browse/Browse";
import Checkout from "./components/Checkout/Checkout";
import { FirestoreCacheProvider } from "./provider/ContextProvider.js";
import Navigation from "./components/Navigation/Navigation.js";
import LogonForm from "./components/LogonForm/LogonForm.js";
import Cart from "./components/Cart/Cart.js";
import Footer from "./components/Footer/Footer.js";
import TimeClock from "./components/TimeClock/TimeClock.js";
import Accounting from "./components/Accounting/Accounting.js";
import Inventory from "./components/Inventory/Inventory.js";
import UserProfile from "./components/UserProfile/UserProfile.js";

function App() {
  const [name, setName] = useState("Guest");
  const [verified, setVerified] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [signOn, setSignOn] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [users, setUsers] = useState();
  const [search, setSearch] = useState();
  const [books, setBooks] = useState();
  const [bookCategory, setBookCategory] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [redirect, setRedirect] = useState();
  return (
    <FirestoreCacheProvider>
      <div className="page">
        <BrowserRouter>
          <Navigation
            verified={verified}
            setVerified={setVerified}
            signOn={signOn}
            setSignOn={setSignOn}
            employee={employee}
            setEmployee={setEmployee}
            displayCart={displayCart}
            setDisplayCart={setDisplayCart}
            setUsers={setUsers}
            search={search}
            setSearch={setSearch}
            books={books}
            setBooks={setBooks}
            bookCategory={bookCategory}
            setBookCategory={setBookCategory}
            cartItems={cartItems}
            redirect={redirect}
            setRedirect={setRedirect}
          />
          <LogonForm
            signOn={signOn}
            setSignOn={setSignOn}
            setVerified={setVerified}
            employee={employee}
            setEmployee={setEmployee}
            users={users}
            setUsers={setUsers}
            setRedirect={setRedirect}
          />
          <Cart
            cart={displayCart}
            books={books}
            setBooks={setBooks}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setDisplayCart={setDisplayCart}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  name={name}
                  setName={setName}
                  verified={verified}
                  setVerified={setVerified}
                  employee={employee}
                  setEmployee={setEmployee}
                  signOn={signOn}
                  setSignOn={setSignOn}
                  displayCart={displayCart}
                  setDisplayCart={setDisplayCart}
                  users={users}
                  setUsers={setUsers}
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                  bookCategory={bookCategory}
                  setBookCategory={setBookCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setRedirect={setRedirect}
                />
              }
            />

            <Route
              path="/book/:bookId"
              element={
                <Book
                  name={name}
                  setName={setName}
                  verified={verified}
                  setVerified={setVerified}
                  employee={employee}
                  setEmployee={setEmployee}
                  displayCart={displayCart}
                  setDisplayCart={setDisplayCart}
                  signOn={signOn}
                  setSignOn={setSignOn}
                  users={users}
                  setUsers={setUsers}
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                  bookCategory={bookCategory}
                  setBookCategory={setBookCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setRedirect={setRedirect}
                />
              }
            />
            <Route
              path="/user"
              element={
                <UserProfile
                  name={name}
                  verified={verified}
                  setVerified={setVerified}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Registration
                  name={name}
                  setName={setName}
                  verified={verified}
                  setVerified={setVerified}
                  displayCart={displayCart}
                  setDisplayCart={setDisplayCart}
                  signOn={signOn}
                  setSignOn={setSignOn}
                  employee={employee}
                  setEmployee={setEmployee}
                  users={users}
                  setUsers={setUsers}
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                  bookCategory={bookCategory}
                  setBookCategory={setBookCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />

            <Route
              path="/order"
              element={
                <AddBooks
                  name={name}
                  setName={setName}
                  verified={verified}
                  setVerified={setVerified}
                  displayCart={displayCart}
                  setDisplayCart={setDisplayCart}
                  signOn={signOn}
                  setSignOn={setSignOn}
                  employee={employee}
                  setEmployee={setEmployee}
                  users={users}
                  setUsers={setUsers}
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                  bookCategory={bookCategory}
                  setBookCategory={setBookCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/deletebooks"
              element={
                <DeleteBooks
                  name={name}
                  setName={setName}
                  verified={verified}
                  setVerified={setVerified}
                  displayCart={displayCart}
                  setDisplayCart={setDisplayCart}
                  signOn={signOn}
                  setSignOn={setSignOn}
                  employee={employee}
                  setEmployee={setEmployee}
                  users={users}
                  setUsers={setUsers}
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                  bookCategory={bookCategory}
                  setBookCategory={setBookCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/browse"
              element={
                <Browse
                  name={name}
                  setName={setName}
                  verified={verified}
                  setVerified={setVerified}
                  displayCart={displayCart}
                  setDisplayCart={setDisplayCart}
                  signOn={signOn}
                  setSignOn={setSignOn}
                  employee={employee}
                  setEmployee={setEmployee}
                  users={users}
                  setUsers={setUsers}
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                  bookCategory={bookCategory}
                  setBookCategory={setBookCategory}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setRedirect={setRedirect}
                />
              }
            />
            <Route path="/clock" element={<TimeClock />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  name={name}
                  verified={verified}
                  setVerified={setVerified}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </FirestoreCacheProvider>
  );
}

export default App;
