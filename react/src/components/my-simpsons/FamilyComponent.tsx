import {simpsons} from "../../data/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";

export const FamilyComponent = () => {

    return (
        <div>
            {
                simpsons.map((simpson, index) => <CharacterComponent key={index} simpson={simpson}>
                        {simpson.info}
                    </CharacterComponent>

                )
            }
        </div>
    );
};

export default FamilyComponent;