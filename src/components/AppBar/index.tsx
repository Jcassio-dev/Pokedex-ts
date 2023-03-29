import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import * as C from "./styles"
import { AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import { Input } from "../Input";
import { FavoriteContext } from '../../hooks/FavoriteContext';


interface PokeBar{
  pokeName: string | undefined;
  returnPage?: boolean;
  icon?: any;
  NavigatePage?: string;
  
}


export const AppBarButton: React.FC<PokeBar> = ({ icon: Icon, returnPage, NavigatePage}) => {
  const navigate = useNavigate();
  const { favorites } = useContext(FavoriteContext)

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
            <Input icon={AiOutlineSearch} placeholder="Pesquise o pókemon aqui"/>
            )}
            <button onClick={() => navigate(NavigatePage)}>{Icon && <Icon />}<span>{favorites.length}</span></button>
            
    </C.Container>
  );
}