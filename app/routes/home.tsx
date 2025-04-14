"use client";

import React from "react";
import { ModernNavbar } from "@components/components/ModernNavbar";
import { ModernNavbarMobile } from "@components/components/ModernNavbarMobile";
import { Button } from "@components/components/Button";
import { FeatherZap } from "@subframe/core";
import { FeatherArrowRight } from "@subframe/core";
import { IconButton } from "@components/components/IconButton";
import { FeatherEdit3 } from "@subframe/core";
import { FeatherNavigation } from "@subframe/core";
import { FeatherFileText } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherTwitter } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherSlack } from "@subframe/core";
import { FeatherYoutube } from "@subframe/core";

function Home() {
    return (
        <div className="flex h-full w-full flex-col items-center bg-default-background">
            <div className="flex w-full flex-col items-center justify-center gap-2 px-6 py-6">
                <ModernNavbar className="mobile:hidden" />
                <ModernNavbarMobile className="hidden mobile:flex" />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24">
                <div className="flex w-full max-w-[1024px] flex-col items-start gap-12 px-6 py-6 mobile:px-0 mobile:py-0">
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="max-w-[768px] font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                            Autonomous AI Interfaces
                        </span>
                        <span className="max-w-[576px] font-['Inter'] text-[21px] font-[500] leading-[28px] text-subtext-color -tracking-[0.03em]">
                            Streamline and accelerate user workflows with AI-powered
                            automation—handling forms, optimizing purchase flows, navigating
                            pages, and generating dynamic content.
                        </span>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2">
                        <Button
                            size="large"
                            icon={<FeatherZap />}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                        >
                            Experience AI automation
                        </Button>
                        <Button
                            variant="neutral-tertiary"
                            size="large"
                            iconRight={<FeatherArrowRight />}
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                        >
                            Watch demo
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2">
                <img
                    className="h-144 w-full max-w-[1024px] flex-none object-cover"
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                />
            </div>
            <div className="flex w-full flex-col items-center justify-center px-6 py-40 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
                <div className="flex w-full max-w-[1024px] flex-col items-start gap-16">
                    <div className="flex w-full flex-wrap items-end gap-12">
                        <span className="grow shrink-0 basis-0 font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                            Let AI handle the complexity
                        </span>
                        <span className="grow shrink-0 basis-0 font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                            Our intelligent interfaces learn, adapt, and work autonomously to
                            streamline your workflows and deliver faster value to customers.
                        </span>
                    </div>
                    <div className="flex flex-wrap items-start gap-2">
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-64 w-full flex-none object-cover"
                                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-2 bg-default-background px-8 py-6">
                                <span className="grow shrink-0 basis-0 font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.02em]">
                                    Autonomous Form Completion
                                </span>
                                <IconButton
                                    size="large"
                                    icon={<FeatherEdit3 />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                />
                            </div>
                        </div>
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-64 w-full flex-none object-cover"
                                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-2 bg-default-background px-8 py-6">
                                <span className="grow shrink-0 basis-0 font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.02em]">
                                    Smart Navigation
                                </span>
                                <IconButton
                                    size="large"
                                    icon={<FeatherNavigation />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                />
                            </div>
                        </div>
                        <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-center self-stretch overflow-hidden rounded-2xl shadow-[0px_4px_16px_-4px_#0000000a]">
                            <img
                                className="h-64 w-full flex-none object-cover"
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 items-end gap-2 bg-default-background px-8 py-6">
                                <span className="grow shrink-0 basis-0 font-['Inter'] text-[21px] font-[500] leading-[28px] text-default-font -tracking-[0.02em]">
                                    Dynamic Content Generation
                                </span>
                                <IconButton
                                    size="large"
                                    icon={<FeatherFileText />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center px-6 pt-40 pb-20 bg-gradient-to-b from-neutral-50 to-transparent">
                <div className="flex w-full max-w-[1024px] flex-col items-start gap-6">
                    <div className="flex w-full flex-col items-start gap-8">
                        <div className="flex w-full flex-col items-start gap-6">
                            <div className="flex items-center gap-2">
                                <div className="flex h-2 w-4 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                                <span className="font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                                    AI-powered automation
                                </span>
                                <FeatherChevronRight className="text-body font-body text-default-font" />
                            </div>
                            <span className="w-full max-w-[768px] font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                                Your interface works while you focus on what matters
                            </span>
                        </div>
                        <div className="flex w-full max-w-[448px] flex-col items-start">
                            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-default-font -tracking-[0.01em]">
                                {"Reduce development effort and accelerate value delivery."}
                            </span>
                            <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[500] leading-[24px] text-subtext-color -tracking-[0.01em]">
                                {"Let AI handle routine tasks while you focus on innovation."}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-center justify-center gap-6 border-b border-solid border-neutral-100 px-6 py-24 bg-gradient-to-t from-neutral-100 via-transparent">
                <div className="flex max-w-[1024px] grow shrink-0 basis-0 flex-wrap items-end justify-center gap-16">
                    <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-16">
                        <span className="w-full whitespace-pre-wrap font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font -tracking-[0.04em]">
                            {"Transform your app into\nan autonomous assistant"}
                        </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 items-center justify-end gap-2 mobile:items-center mobile:justify-start">
                        <Button
                            variant="neutral-primary"
                            size="large"
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                        >
                            Get started
                        </Button>
                        <Button
                            size="large"
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                        >
                            Contact sales
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-12">
                <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
                    <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch">
                        <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-start gap-4">
                            <img
                                className="h-5 w-5 flex-none object-cover"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
                            />
                            <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                                Subframe
                            </span>
                        </div>
                        <div className="flex w-full items-center gap-2">
                            <IconButton
                                icon={<FeatherTwitter />}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            />
                            <IconButton
                                icon={<FeatherGithub />}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            />
                            <IconButton
                                icon={<FeatherSlack />}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            />
                            <IconButton
                                icon={<FeatherYoutube />}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            />
                        </div>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch">
                        <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                            <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                                Product
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Features
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Solutions
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Pricing
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Demo
                            </span>
                        </div>
                        <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                            <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                                Company
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                About
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Blog
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Careers
                            </span>
                        </div>
                        <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                            <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                                Resources
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Documentation
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Support
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Privacy
                            </span>
                            <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                                Terms
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;