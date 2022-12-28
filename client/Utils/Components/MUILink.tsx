import { PaginationRenderItemParams } from '@mui/material/Pagination';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

export interface MaterialUiLinkProps {
	item: PaginationRenderItemParams;
	query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
	return (
		<Link
			href={{
				pathname: '/view-car',
				query: { ...query, page: item.page },
			}}
		>
			<a {...props}></a>
		</Link>
	);
}
