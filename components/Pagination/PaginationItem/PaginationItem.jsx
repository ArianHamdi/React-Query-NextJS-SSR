import styles from './PaginationItem.module.scss';
import Link from 'next/link';
import cn from 'classnames';

function PaginationItem({ isActive, index }) {

    const itemClassName = cn(styles.item, {
        [styles.active]: isActive
    })

    return (
        <Link className={itemClassName} href={'/posts/' + index} shallow={true}>
            {index}
        </Link>
    )
}

export default PaginationItem;