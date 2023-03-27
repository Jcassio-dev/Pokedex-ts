import { useNavigate, useParams } from "react-router-dom";
import * as C from "./styles"

interface PokeBar{
  pokeName: string | undefined;
}
interface QueryParams{
  name: string | undefined;
}

export const AppBarButton: React.FC<PokeBar> = ({pokeName}) => {
  const navigate = useNavigate();
  const { name } = useParams<QueryParams>();
  return (
    <C.Container>
            {name ? (
            <>
            <button onClick={() => navigate(-1)}>voltar</button>
            <h1>{pokeName}</h1>
            </>
            ) : (
            <>
            <button>pesquisar</button>
            <h1>{pokeName}</h1>
            </>
            )}
            
    </C.Container>
  );
}