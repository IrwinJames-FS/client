import { ReactElement, ReactNode } from "react"
import { Record } from "../models"
import styled from "styled-components"

type RowProps<T extends Record> = {
	item: T
}
export type RowIterator<T extends Record> = (props:RowProps<T>) => ReactElement
type ListProps<T extends Record> = {
	array: T[],
	header: ReactNode,
	RowElement: RowIterator<T>
}
export const List = <T extends Record>({array, header, RowElement}:ListProps<T>) => (<Table>
	<tbody>
		{header}
		{array.map(item => <RowElement key={item._id} item={item}/>)}
	</tbody>
</Table>)
const Table = styled.table`
width: 100%;
border: var(--vip-list-border);

td, th{
	border-left: var(--vip-list-border)
}

tr:nth-child(odd){
	background-color: var(--vip-odd-table-row, #dde);
}

tr:nth-child(even){
	background-color: var(--vip-even-table-row, #ccf);
}
`;