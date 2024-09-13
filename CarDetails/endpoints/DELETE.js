export function DELETE() {

    /*Function:*/

    const deleteCar = (id) => {

        fetch('http://10.0.2.2:3000/api/data/cars/delete', {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Id: id})
            
        })
        .then(res => res.json());

    }

    /*Return:*/

    return{

        deleteCar,

    }

}