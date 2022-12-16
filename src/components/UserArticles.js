import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Articles = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <div className='ver_container'>
            <h1>Twoje artykuły</h1>
            {users?.length
                ? (
                    <ul className="ver_container">
                        {users.map((user, i) =>
                            
                                <div className='ver_template'>
                                    <span>Tytuł:</span><p>Overwatch 2 przeszło w nocy aktualizację.</p><span>Autor:</span><p>{user?.username}</p><span>Tagi:</span><p>Overwatch</p><div className='buttons'><button className='preview'>Edytuj</button></div>
                                </div>
                
                        )}
                    </ul>
                ) : <p>No users to display</p>}
        </div>
    );
};

export default Articles;