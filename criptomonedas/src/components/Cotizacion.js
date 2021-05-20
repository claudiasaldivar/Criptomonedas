import React from 'react';
import styled from '@emotion/styled';

const DivCotizacion = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
    font-size: 18px;

    span: {
        font-weight: bold;
    }
`;

const Precio = styled.span`
    font-size: 30px;
    font-weight: bold;
 `;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;

    return ( 
        <DivCotizacion>
            <Parrafo>El precio es: <Precio>{resultado.PRICE}</Precio></Parrafo>
            <Parrafo>El precio mas alto del día: <span>{resultado.HIGHDAY}</span></Parrafo>
            <Parrafo>El precio mas bajo del día: <span>{resultado.LOWDAY}</span></Parrafo>
            <Parrafo>Ultimas 24 hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Parrafo>
            <Parrafo>Ultima actualización: <span>{resultado.LASTUPDATE}</span></Parrafo>
        </DivCotizacion>
     );
}
 
export default Cotizacion;