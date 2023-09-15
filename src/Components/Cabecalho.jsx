import { Link } from "react-router-dom";

export default function Cabecalho(){

    return(
        <>
            <header>
                <h1>Home 1TDSS</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                </ul>
            </header>
        </>
    )
}