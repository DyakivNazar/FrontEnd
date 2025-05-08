import {useSearchParams} from "react-router-dom";

const PaginationComp = () => {

    const [query, setQuery] = useSearchParams({pg: '1'});
    let paga = Number(query.get('pg') || '1');

    return (
        <div>
            <button onClick={() => {
                if (paga > 1) {
                    setQuery({pg: (--paga).toString()});
                }
            }}
            >prev
            </button>

            <button onClick={() => {
                // const pg = query.get('pg');
                setQuery({pg: (++paga).toString()});

            }}
            >next
            </button>
        </div>
    );
};

export default PaginationComp;