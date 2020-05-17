const fs = require( 'fs' );
const colors = require('colors');

const crearArchivo = ( base, limite = 10 ) => {

    return new Promise ( ( resolve, reject ) => {

        if ( !Number( base ) ) {

            reject( `El valor introducido ${ base } no es número` ) ;
            return;

        }
        
        let data = [];

        for (let index = 1; index <= limite; index++) {
    
            data += ( ` ${ base } * ${ index } = ${ base * index } \n` );

        }

        fs.writeFile(`archivos/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err) { 
                
                reject( err );
            
            } else {
                
                resolve(`tabla-${ base }-al-${ limite }.txt`);

            }
        });
    });
};

const listarTabla = ( base, limite = 10 ) => {

    console.log( `Tabla de ${ base }`.blue );

    for ( let i = 1; i <= limite; i++ ) {
        console.log( `${ base } * ${ i } = ${ base * i }` );
    }

};


module.exports = {

    crearArchivo,
    listarTabla

};