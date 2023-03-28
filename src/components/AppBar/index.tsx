import { useNavigate } from "react-router-dom";
import * as C from "./styles"
import { AiOutlineArrowLeft} from 'react-icons/ai'


interface PokeBar{
  pokeName: string | undefined;
  returnPage?: boolean;
  icon?: any;
  NavigatePage?: string;
  FavoritesNumber?: number;
  
}
interface QueryParams{
  name: string | undefined;
}

export const AppBarButton: React.FC<PokeBar> = ({pokeName, icon: Icon, returnPage, NavigatePage, FavoritesNumber}) => {
  const navigate = useNavigate();
  

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
            <button onClick={() => navigate(NavigatePage)}>{Icon && <Icon />}<span>{FavoritesNumber}</span></button>
            
    </C.Container>
  );
}