import { useState } from "react";
import UnorderList from "./additem";
import Alertmsg from "./alertmsg";

const InputSection = () => {
    const [name, setname] = useState("");
    const [age, setAge] = useState(0);
    const [userList, setUserList] = useState([]);
    const [para, setPara] = useState("");

    const handleItemAdd = () => {
        if (age > 18) {
            setUserList([...userList, { name: name, age: age }]);
            setname("");
            setAge(0);
        } else {
            setPara("you are minor")
            setTimeout(() => { setPara("") }, 5000)
        }
    }

    return (
        <div>
            <Alertmsg paraForAlert={para} />
            <input onChange={(event) => { setname(event.target.value) }} value={name} />
            <input type="number" onChange={(event) => { setAge(parseInt(event.target.value)) }} value={age} />
            <button onClick={handleItemAdd}>Add Item</button>
            <UnorderList userlistforUL={userList} />
        </div>

    )
}
export default InputSection;