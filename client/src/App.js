import axios from "axios";
import React, { useState, useEffect } from "react";
import TableContact from "./Layout/TableContact/TableContact";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import AppendContact from "./Layout/FormContact/AppendContact";
import Pagination from "./Layout/Pagination/Pagination";
import ContactDetails from "./Layout/ContactDetails/ContactDetails";

const baseApiUrl = process.env.REACT_APP_API_URL;

const App = () => {
  const [contacts, setContacts] = useState([]);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize] = useState(10);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [deleteTrigger, setDeleteTrigger] = useState(0);

  const handelDeleteTrigger = () => {
    setDeleteTrigger(deleteTrigger + 1);
  }

  const handelUpdateTrigger = () => {
    setUpdateTrigger(updateTrigger + 1);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    const url = `${baseApiUrl}/contacts/page?pageNumber=${currentPage}&pageSize=${pageSize}`;
    axios.get(url).then(
      res => {
        setContacts(res.data.contacts);
        setTotalPages(Math.ceil(res.data.totalCount / pageSize))
      }
    );
  }, [currentPage, pageSize, location.pathname]);

  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={
          <div className="card">
            <div className="card-header">
              <h1>Список контактов</h1>
            </div>

            <div className="card-body">
              <TableContact
                contacts={contacts}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
              <Link to="/append"
                className="btn btn-success mt-3">
                Добавить контакт
              </Link>
            </div>
          </div>
        } />
        <Route path="contact/:id" element={<ContactDetails onUpdate={handelUpdateTrigger} onDelete={handelDeleteTrigger} />} />
        <Route path="append" element={<AppendContact />} />
      </Routes>
    </div>
  );
}

export default App;