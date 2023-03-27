import * as C from "./styles"

interface PokeBar{
  name: string | undefined;
}

export const AppBarButton: React.FC<PokeBar> = ({name}) => {
  return (
    <C.Container>
            <h1>{name}</h1>
    </C.Container>
  );
}