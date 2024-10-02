"use client";

import {useState} from "react";
import {FaEdit, FaTrash} from 'react-icons/fa';

const SearchAndCancel = () => {
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        console.log('Searching for category:', category);
        // Add your search logic here
    };

    const handleCancel = () => {
        setCategory(''); // Clear the input field
    };
    return (
        <div className="flex items-center space-x-2 w-1/2">
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Catégorie"
                className="border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 rounded-md w-2/3"
            />
            <div className="space-x-2">
                <button
                    onClick={handleSearch}
                    className="bg-[#008083] text-white px-4 py-2 rounded-md hover:bg-[#006767]"
                >
                    Rechercher
                </button>
                <button
                    onClick={handleCancel}
                    className="bg-[#008083] text-white px-4 py-2 rounded-md hover:bg-[#006767]"
                >
                    Annuler
                </button>
            </div>
        </div>
    )
}
const SaveAndCancel = () => {
    const [category, setCategory] = useState('');

    const handleSave = () => {
        console.log('Saving category:', category);
        // Add your search logic here
    };

    const handleCancel = () => {
        setCategory(''); // Clear the input field
    };
    return (
        <div className="flex items-center space-x-2 w-1/2">
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Catégorie"
                className="border border-gray-300 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 p-2 rounded-md w-2/3"
            />
            <div className="space-x-2">
                <button
                    onClick={handleSave}
                    className="bg-[#008083] text-white px-4 py-2 rounded-md hover:bg-[#006767]"
                >
                    Enregistrer
                </button>
                <button
                    onClick={handleCancel}
                    className="bg-[#008083] text-white px-4 py-2 rounded-md hover:bg-[#006767]"
                >
                    Annuler
                </button>
            </div>
        </div>
    )
}

const ProductsTable = ({products, setProducts}) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedName, setEditedName] = useState('');

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedName(products[index].name);
    };

    const handleDeleteClick = (id) => {
        setProducts(products.filter(
            (product) => product.id !== id
        ))
    };

    const handleSaveClick = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].name = editedName;
        setProducts(updatedProducts);
        setEditIndex(null);
    };
    return (
        <table className="min-w-full border-collapse border border-gray-900 mt-14">
            <thead>
            <tr>
                <th className="text-left border text-gray-400 border-gray-700 p-2 bg-black">Catégories Produits</th>
                <th className="text-left border text-gray-400 border-gray-700 p-2 bg-black">Actions</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={product.id}>
                    <td className="border border-gray-300 p-2">
                        {editIndex === index ? (
                            <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className="border-none p-1 w-full"
                            />
                        ) : (
                            product.name
                        )}
                    </td>
                    <td className="border border-gray-300 p-2">
                        {editIndex === index ? (
                            <button
                                onClick={() => handleSaveClick(index)}
                                className="text-green-500 hover:text-green-700 mr-2"
                            >
                                Save
                            </button>
                        ) : (
                            <button
                                onClick={() => handleEditClick(index)}
                                className="text-blue-500 hover:text-blue-700 mr-2"
                            >
                                <FaEdit/>
                            </button>
                        )}
                        <button
                            onClick={() => handleDeleteClick(product.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <FaTrash/>
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default function Products() {
    const [products, setProducts] = useState([
        {id: 1, name: 'Copieurs, imprimantes & multifonctions'},
        {id: 2, name: 'Smartphone, Tablette, PC, Laptop, PDA'},
    ])


    return (
        <div className="p-5">
            <div className="w-full h-1/5 p-3">
                <div className="text-right">
                    <button
                        className="bg-[#3D1101] text-white py-2 px-4 rounded-lg hover:bg[#2A0B01] transition duration-300">Retour
                    </button>
                </div>
                <div className="flex w-full mt-10 justify-between space-x-20">
                    <SearchAndCancel />
                    <SaveAndCancel />
                </div>
                <ProductsTable products={products} setProducts={setProducts}/>
            </div>
        </div>
    )
}