const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '1em', margin: '1em' }}>
            <h2 style={{ color: 'blueviolet', fontSize: '10px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;