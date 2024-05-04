"use client";

import Link from 'next/link';
import Image from 'next/image';
import {DarkModeToggle} from "@/components/dark-mode-toggle";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";

export default function NavMenu() {
    return (
        <header>
            <NavigationMenu>
                <NavigationMenuList className={"w-screen flex flex-row gap-2 px-8 py-2"}>
                    <NavigationMenuItem>
                        <Link href={'/'}>
                            <Image
                                src="/logo.svg" // Route of the image file
                                width={216}
                                height={30}
                                alt="NextSpace Logo"
                            />
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'/about'}>About</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'/blog'}>Blog</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={'/users'}>Users</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <DarkModeToggle/>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}