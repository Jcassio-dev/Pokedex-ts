import { useNavigate, useParams } from "react-router-dom";
import * as C from "./styles"

interface PokeBar{
  pokeName: string | undefined;
}
interface QueryParams{
  name: string
}

export const AppBarButton: React.FC<PokeBar> = ({pokeName}) => {
  const navigate = useNavigate();
  const { name } = useParams<QueryParams>();
  return (
    <C.Container>
            {name ? <button onClick={() => navigate(-1)}>voltar</button> : <button>pesquisar</button>}
            <h1>{name}</h1>
    </C.Container>
  );
}