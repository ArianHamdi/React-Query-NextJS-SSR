import styles from './Pagination.module.scss';
import PaginationItem from './PaginationItem';

function Pagination({ id }) {

    let items = [];

    for (let i = id - 2; i <= +id + 2; i++) {
        if (i < 1 || i > 100) continue;
        items.push(
            <PaginationItem
                key={i}
                index={i}
                isActive={i === +id}
            />
        )
    }

    return (
        <div className={styles.pagination}>
            {items}
        </div>
    )
}

export default Pagination;