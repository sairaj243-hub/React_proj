import { useEffect, useState } from "react";

function DataMap() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(data);
    }, [])
    let data = [
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            age: 52,
            poone: "00000022"
        },
        {
            id: 2,
            name: "John",
            email: "john@gmail.com",
            age: 52,
            poone: "00000022"
        },
        {
            id: 3,
            name: "John",
            email: "john@gmail.com",
            age: 52,
            poone: "00000022"
        },
        {
            id: 4,
            name: "John",
            email: "john@gmail.com",
            age: 52,
            poone: "00000022"
        },
        {
            id: 5,
            name: "John",
            email: "john@gmail.com",
            age: 52,
            poone: "00000022"
        },
        {
            id: 6,
            name: "John",
            email: "john@gmail.com",
            age: 52,
            poone: '00000022'
        },
    ];
    return (
        <>
            <table border={2} width={"100%"} style={{ textAlign: "center", color: "blue" }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <th>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.age}</td>
                                    <td>{element.poone}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default DataMap;
