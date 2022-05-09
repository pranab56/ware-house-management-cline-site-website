import { useEffect, useState } from "react"

const useItems = () => {

    const [Items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://safe-coast-41091.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [Items, setItems];
}

export default useItems;