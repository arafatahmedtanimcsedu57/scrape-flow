'use client';

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from './ui/separator';

interface Props {
	title?: string;
	subTitle?: string;
	icon?: LucideIcon;

	titleClassName?: string;
	subTitleClassName?: string;
	iconClassName?: string;
}

function CustomDialogHeader(props: Props) {
	const {
		icon: Icon,
		iconClassName,
		title,
		titleClassName,
		subTitle,
		subTitleClassName,
	} = props;
	return (
		<DialogHeader className="py-6">
			<DialogTitle asChild>
				<div className="flex flex-col items-center gap-2 mb-2">
					{Icon && (
						<Icon size={30} className={cn('stroke-primary', iconClassName)} />
					)}
					{title && (
						<p className={cn('text-xl text-primary', titleClassName)}>
							{title}
						</p>
					)}
					{subTitle && (
						<p
							className={cn('text-sm text-muted-foreground', subTitleClassName)}
						>
							{subTitle}
						</p>
					)}
				</div>
			</DialogTitle>
			<Separator />
		</DialogHeader>
	);
}

export default CustomDialogHeader;
