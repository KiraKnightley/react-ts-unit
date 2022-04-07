import React from 'react';
import './List.css';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T> (props: ListProps<T>) {
    return (
        <div className={'list'}>
            {props.items.map(props.renderItem)}
        </div>
    );
}
export default List;