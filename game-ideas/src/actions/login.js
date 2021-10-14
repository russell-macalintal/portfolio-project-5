export function submitLogin(user) {
    return (dispatch) => {
        dispatch( {type: 'SUBMITTING'} );
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:3000/users', configObj)
            .then(response => response.json())
            .then(user_obj => {
                console.log(user_obj);
                return dispatch ({type: 'SET_USER', user: user_obj.username});
            });
    }
}