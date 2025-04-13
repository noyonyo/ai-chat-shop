"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/5d6db2dff5e5/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Text Field — https://app.subframe.com/5d6db2dff5e5/library?component=Text+Field_be48ca43-f8e7-4c0e-8870-d219ea11abfe
 * Icon Button — https://app.subframe.com/5d6db2dff5e5/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Button — https://app.subframe.com/5d6db2dff5e5/library?component=Button_3b777358-b86b-40af-9327-891efc6826fe
 * Dropdown Menu — https://app.subframe.com/5d6db2dff5e5/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Avatar — https://app.subframe.com/5d6db2dff5e5/library?component=Avatar_bec25ae6-5010-4485-b46b-cf79e3943ab2
 * Topbar with search — https://app.subframe.com/5d6db2dff5e5/library?component=Topbar+with+search_27f64edc-a451-416b-98b4-9bb1f95991e0
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { TextField } from "../components/TextField";
import { FeatherSearch } from "@subframe/core";
import { IconButton } from "../components/IconButton";
import { FeatherFilterX } from "@subframe/core";
import { Button } from "../components/Button";
import { FeatherPlusCircle } from "@subframe/core";
import { FeatherBell } from "@subframe/core";
import { FeatherShoppingCart } from "@subframe/core";
import { DropdownMenu } from "../components/DropdownMenu";
import { FeatherUser } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { FeatherLogOut } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { Avatar } from "../components/Avatar";
import { TopbarWithSearch } from "../components/TopbarWithSearch";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full flex-col items-center",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full flex-col items-center">
        <TopbarWithSearch
          leftSlot={
            <>
              <img
                className="h-6 flex-none object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
              />
              <span className="text-heading-2 font-heading-2 text-default-font">
                Shoes
              </span>
              <TextField
                variant="filled"
                label=""
                helpText=""
                icon={<FeatherSearch />}
              >
                <TextField.Input placeholder="Black dancing shoes with..." />
              </TextField>
              <IconButton variant="brand-primary" icon={<FeatherFilterX />} />
            </>
          }
          rightSlot={
            <>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="neutral-tertiary"
                    icon={<FeatherPlusCircle />}
                  >
                    New
                  </Button>
                  <IconButton icon={<FeatherBell />} />
                  <IconButton icon={<FeatherShoppingCart />} />
                </div>
              </div>
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif">
                    A
                  </Avatar>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon={<FeatherUser />}>
                        Profile
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={<FeatherSettings />}>
                        Settings
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={<FeatherLogOut />}>
                        Log out
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </>
          }
        />
      </div>
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
