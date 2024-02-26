import { ForwardedRef, forwardRef} from "react";
const SearchInput = forwardRef((props,ref) => {
    
    return (
        <input{...props} ref={ref}
        type="text" 
        className="searchInput" 
        placeholder="Search for a movie, tv show, person......" />);
            
})

export default SearchInput;