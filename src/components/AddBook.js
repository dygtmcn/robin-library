import React, { useState } from "react";
import ManualForm from "./ManualForm";
import SearchForm from "./SearchForm";
import "../styles/AddBook.css";

export default function AddBook({ closeForm }) {
    const [isManualAdd, setIsManualAdd] = useState(false);

    const toggleFormType = () => {
        setIsManualAdd((prev) => !prev);
    };

    return (
        <div className="add-book-popup">
            <h2>Search for a book</h2>
            {isManualAdd ? (
                <ManualForm closeForm={closeForm} />
            ) : (
                <SearchForm toggleFormType={toggleFormType} closeForm={closeForm} />
            )}
        </div>
    );
}
