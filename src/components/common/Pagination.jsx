import { Pagination, Stack } from '@mui/material';
import useWindowWidth from '../../hooks/useWindowWidth';

const PaginationNumber = ({ totalPages, currentPage, pageSize, onPageChange }) => {

    const windoWidth = useWindowWidth()

    const handlePageChange = (event, value) => {

        onPageChange(value);
    };


    return (

        <>
            <div className="pagination-wrapper">
                <Stack spacing={2}>
                    <Pagination
                        siblingCount={windoWidth < 767 ? 0 : 1}
                        boundaryCount={1}
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </Stack>
            </div>
        </>
    )
}

export default PaginationNumber;