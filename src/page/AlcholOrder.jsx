import { alchols } from '../data/alcholOrder.js';

export function AlcholOrder() {
    return (
        <div>
            {alchols.map(alchol => {
                return(
                <p key={alchol.id}>{alchol.productName}</p>
                )
            })}
        </div>
    );
}
