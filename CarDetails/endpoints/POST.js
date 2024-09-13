export function POST() {

    /*Function:*/

    const saveDetails = (details) => {

        fetch('http://10.0.2.2:3000/api/data/cars/upload', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)

        })
        .then(res => {
            return res.json();
        })

    }

    /*Return:*/

    return{

        saveDetails,

    }

}