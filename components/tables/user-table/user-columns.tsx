"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Check, X, Trash2, Eye, Copy, MoreVertical} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DataTableColumnHeader} from "@/components/tables/column-header";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {User} from "@/models/user";


export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Name"/>
        ),
        cell: ({row}) => <div>{row.getValue("name")}</div>,
        enableSorting: true,
        sortingFn: "alphanumeric"
    },
    {
        accessorKey: "email",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Email"/>
        ),
        cell: ({row}) => <div className="lowercase">{row.getValue("email")}</div>,
        enableSorting: true,
        sortingFn: "alphanumeric"
    },
    {
        accessorKey: "is_subscribed",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Subscribed"/>
        ),
        cell: ({row}) => <div className={"flex flex-row justify-center"}>{
            row.getValue('is_subscribed') ?
                <Check className={"text-green-500"}></Check> :
                <X className={"text-red-500"}></X>
        }</div>,
        enableSorting: false,
    },
    {
        accessorKey: "created_at",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Created"/>
        ),
        cell: ({row}) => <div className="lowercase">{new Date(row.getValue("created_at")).toLocaleDateString()}</div>,
        enableSorting: true,
        sortingFn: "datetime"
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({row}) => {
            const user = row.original

            return (
                <div className={"flex flex-row justify-center"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
                                <Copy className={"mr-2"}></Copy>
                                Copy User ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>
                                <Eye className={"mr-2"}></Eye>
                                View User
                            </DropdownMenuItem>
                            <DropdownMenuItem className={"text-red-500"}>
                                <Trash2 className={"mr-2"}></Trash2>
                                Delete User
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
    },
]


