import { Pagination, Stack } from '@mui/material';
import useWindowWidth from '../../hooks/useWindowWidth';

const PaginationNumber = () => {

    const windoWidth = useWindowWidth()

    return (

        <>
            <div className="pagination-wrapper">
                <Stack spacing={2}>
                    <Pagination
                        siblingCount={windoWidth < 767 ? 0 : 1}
                        boundaryCount={1}
                        count={10} />
                </Stack>
            </div>
        </>
    )
}

export default PaginationNumber;