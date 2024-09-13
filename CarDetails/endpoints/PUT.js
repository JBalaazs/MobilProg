export function PUT() {

    /*Function:*/

    const modifyCar = (inputCar) => {

        fetch('http://10.0.2.2:3000/api/data/cars/update', {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputCar)

        })
        .then(res => res.json());

    }

    /*Return:*/

    return{

        modifyCar,

    }

}