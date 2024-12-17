'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from './ui/breadcrumb';
import { MobileSidebar } from './Sidebar';
import { cn } from '@/lib/utils';

function BreadcrumbHeader() {
	const pathName = usePathname();
	const paths = pathName === '/' ? [''] : pathName?.split('/');
	const lastPath = paths.length ? paths.length - 1 : 0;

	return (
		<div className="flex items-center flex-start">
			<MobileSidebar />
			<Breadcrumb>
				<BreadcrumbList>
					{paths.map((path, index) => (
						<React.Fragment key={index}>
							<BreadcrumbItem>
								<BreadcrumbLink
									className={cn(
										`${index === lastPath ? 'font-semibold' : ''}`,
										'capitalize',
									)}
									href={`/${path}`}
								>
									{path === '' ? 'home' : path}
								</BreadcrumbLink>
							</BreadcrumbItem>

							{index === lastPath ? <></> : <BreadcrumbSeparator />}
						</React.Fragment>
					))}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
}

export default BreadcrumbHeader;
