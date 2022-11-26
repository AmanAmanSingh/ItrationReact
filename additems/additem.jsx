const UnorderList = (props) => {
    return (
        <div>
            <ul>
                {props.userlistforUL.map((user, index) => {
                    return (
                        <div key={index}>
                            <li>{user.name}</li>
                            <li >{user.age}</li>
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )

}
export default UnorderList;