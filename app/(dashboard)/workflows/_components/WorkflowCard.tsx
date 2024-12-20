'use client';

import React from 'react';
import Link from 'next/link';
import {
	FileTextIcon,
	MoreVertical,
	PlayIcon,
	ShuffleIcon,
	TrashIcon,
} from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants, Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import TooltipWrapper from '@/components/TooltipWrapper';

import { WorkflowStatus } from '@/types/workflow';
import type { Workflow } from '@prisma/client';
import { cn } from '@/lib/utils';

const statusColors = {
	[WorkflowStatus.DRAFT]: 'bg-yellow-400 text-yellow-600',
	[WorkflowStatus.PUBLISHED]: 'bg-primary',
};

function WorkflowCard({ workflow }: { workflow: Workflow }) {
	const isDraft = workflow.status === WorkflowStatus.DRAFT;

	return (
		<Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
			<CardContent className="p-4 flex items-center justify-between h-[100px]">
				<div className="flex items-center justify-end space-x-3">
					<div
						className={cn(
							'w-10 h-10 rounded-full flex justify-center items-center',
							statusColors[workflow.status as WorkflowStatus],
						)}
					>
						{isDraft ? (
							<FileTextIcon className="h-5 w-5" />
						) : (
							<PlayIcon className="h-5 w-5 text-white" />
						)}
					</div>
					<div>
						<h3 className="text-base font-bold text-muted-foreground flex items-center">
							<Link
								href={`/workflow/editor/${workflow.id}`}
								className="flex items-center hover:underline"
							>
								{workflow.name}
							</Link>

							{isDraft && (
								<span className="ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
									Draft
								</span>
							)}
						</h3>
					</div>
				</div>

				<div className="flex items-center space-x-2">
					<Link
						href={`/workflow/editor/${workflow.id}`}
						className={cn(
							buttonVariants({
								variant: 'outline',
								size: 'sm',
							}),
						)}
					>
						<ShuffleIcon size={16} />
						Edit
					</Link>

					<WorkflowActions />
				</div>
			</CardContent>
		</Card>
	);
}

function WorkflowActions() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'outline'} size="sm">
					<TooltipWrapper content={'More actions'} side="top">
						<div className="flex items-center justify-center w-ful h-full">
							<MoreVertical size={18} />
						</div>
					</TooltipWrapper>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Actions</DropdownMenuLabel>

				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<TrashIcon size={16} /> Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default WorkflowCard;
