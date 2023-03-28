import { useNavigate } from "react-router-dom";
import * as C from "./styles"
import { AiOutlineArrowLeft} from 'react-icons/ai'


interface PokeBar{
  pokeName: string | undefined;
  returnPage?: boolean;
  icon?: any;
  NavigatePage?: string;
  
}
interface QueryParams{
  name: string | undefined;
}

export const AppBarButton: React.FC<PokeBar> = ({pokeName, icon: Icon, returnPage, NavigatePage}) => {
  const navigate = useNavigate();
  
  //const { name } = useParams<QueryParams>();

  function handleClick(){
    navigate("/")
  }

 
  
  return (
    <C.Container>
            {returnPage ? (
            <>
            <button onClick={() => handleClick()}><AiOutlineArrowLeft/></button>
            </>
            ) : (
            null
            )}
            <h1>{pokeName}</h1>
            <button onClick={() => navigate(NavigatePage)}>{Icon && <Icon />}</button>
            
    </C.Container>
  );
}