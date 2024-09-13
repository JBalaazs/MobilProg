export function GET () {

    /*Function:*/

    const getCarDetails = (setCars) => {

        fetch('http://10.0.2.2:3000/api/data/cars')
            .then(res => res.json())
            .then(data => setCars(data))

    }

    /*Return:*/

    return{

        getCarDetails,

    }

}