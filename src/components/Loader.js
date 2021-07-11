import Skeleton from 'react-loading-skeleton';

const Loader = ({height = 200, width=null }) => {
    return(
        <Skeleton height={height} width={width} style={{borderRadius : 10}}/>
    )
}

export default Loader