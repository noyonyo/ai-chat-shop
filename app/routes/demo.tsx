"use client";

import React, { useState } from "react";
import { DefaultPageLayout } from "@components/layouts/DefaultPageLayout";
import { Button } from "@components/components/Button";
import { FeatherCheck } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { IconWithBackground } from "@components/components/IconWithBackground";
import { Progress } from "@components/components/Progress";
import { TextField } from "@components/components/TextField";
import { IconButton } from "@components/components/IconButton";
import { FeatherX } from "@subframe/core";
import { Alert } from "@components/components/Alert";
import { Avatar } from "@components/components/Avatar";
import { FeatherLoader } from "@subframe/core";
import { FeatherClock } from "@subframe/core";
import { FeatherSend, } from "@subframe/core";
import Joyride, { Step } from 'react-joyride';

function Demo() {
    const [runTour, setRunTour] = useState(true);

    const steps: Step[] = [
        {
            target: '[data-tour="chat-area"]',
            content: 'Meet your AI Assistant! This powerful AI can understand and execute complex tasks through natural conversation. In this demo, watch how it handles a shopping scenario - from understanding preferences to applying filters and completing the purchase. The AI can be customized to automate any workflow in your application.',
            disableBeacon: true,
            placement: 'left',
        },
        {
            target: '[data-tour="actions-log"]',
            content: 'The AI provides real-time visibility into its actions, showing you exactly what it\'s doing on your behalf. You can see it navigating pages, applying filters, and interacting with external services - all while keeping you informed of its progress.',
        },
        {
            target: '[data-tour="filters-area"]',
            content: 'Watch as the AI automatically applies relevant filters based on your request to find the perfect product for you.',
        },

        {
            target: '[data-tour="payment-area"]',
            content: 'Watch how the AI automatically interacts with external systems like AB Qallets to retrieve and fill in your payment details. The AI can seamlessly communicate with various services and APIs, handling complex interactions while maintaining security - no manual form filling needed!',
        }
    ];

    return (
        <DefaultPageLayout>
            <Joyride
                steps={steps}
                run={runTour}
                continuous={true}
                showSkipButton={true}
                styles={{
                    options: {
                        primaryColor: '#4F46E5',
                        zIndex: 1000,
                    }
                }}
                callback={(data) => {
                    if (data.status === 'finished' || data.status === 'skipped') {
                        setRunTour(false);
                    }
                }}
            />
            <div className="flex h-full w-full flex-col items-start bg-default-background">
                <div className="flex w-full grow shrink-0 basis-0 items-start">
                    <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch overflow-auto">
                        <div className="flex w-full flex-col items-start gap-6 border-b border-solid border-neutral-border px-6 py-6" data-tour="filters-area">
                            <div className="flex w-full items-center gap-2">
                                <Button
                                    icon={<FeatherCheck />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                >
                                    Dance
                                </Button>
                                <Button
                                    icon={<FeatherCheck />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                >
                                    Support
                                </Button>
                                <Button
                                    icon={<FeatherCheck />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                >
                                    Black
                                </Button>
                                <Button
                                    variant="neutral-primary"
                                    icon={<FeatherChevronDown />}
                                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                >
                                    Size
                                </Button>
                            </div>
                            <div className="flex w-full flex-wrap items-start gap-4">
                                <div className="flex items-start gap-6 self-stretch rounded-md border border-solid border-brand-primary bg-brand-50 px-4 py-4 relative">
                                    <img
                                        className="h-24 w-24 flex-none rounded-sm object-cover"
                                        src="https://images.unsplash.com/photo-1596703263926-eb0762ee17e4"
                                    />
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                                        <span className="text-body-bold font-body-bold text-default-font">
                                            Professional Dance Support Shoes
                                        </span>
                                        <span className="text-body font-body text-default-font">
                                            $159.99
                                        </span>
                                        <span className="text-caption font-caption text-subtext-color">
                                            Black • Extra cushioning • Back support
                                        </span>
                                    </div>
                                    <IconWithBackground
                                        className="absolute bottom-2 right-2 border border-solid border-neutral-200"
                                        variant="success"
                                        size="small"
                                    />
                                </div>
                                <div className="flex items-start gap-6 self-stretch rounded-md bg-neutral-100 px-4 py-4 relative">
                                    <img
                                        className="h-24 w-24 flex-none rounded-sm object-cover"
                                        src="https://images.unsplash.com/photo-1613987876445-fcb353cd8e27"
                                    />
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch">
                                        <span className="text-body-bold font-body-bold text-default-font">
                                            Comfort Dance Pro
                                        </span>
                                        <span className="text-body font-body text-default-font">
                                            $145.99
                                        </span>
                                        <span className="text-caption font-caption text-subtext-color">
                                            Black • Arch support • Memory foam
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-6 px-6 py-6" data-tour="payment-area">
                            <Progress value={75} />
                            <div className="flex w-full flex-col items-start gap-6">
                                <div className="flex w-full flex-col items-start gap-1">
                                    <span className="text-heading-3 font-heading-3 text-default-font">
                                        Payment Details
                                    </span>
                                    <span className="text-body font-body text-subtext-color">
                                        Complete your purchase securely
                                    </span>
                                </div>
                                <div className="flex w-full flex-col items-start gap-4">
                                    <TextField
                                        className="h-auto w-full flex-none"
                                        label="Card Number"
                                        helpText=""
                                    >
                                        <TextField.Input
                                            placeholder="1234 5678 9012 3456"
                                            value=""
                                            onChange={(
                                                event: React.ChangeEvent<HTMLInputElement>
                                            ) => { }}
                                        />
                                    </TextField>
                                    <div className="flex w-full items-start gap-4">
                                        <TextField className="grow" label="Expiry Date" helpText="">
                                            <TextField.Input
                                                placeholder="03/25"
                                                value=""
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => { }}
                                            />
                                        </TextField>
                                        <TextField className="grow" label="CVV" helpText="">
                                            <TextField.Input
                                                placeholder="123"
                                                value=""
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => { }}
                                            />
                                        </TextField>
                                    </div>
                                    <TextField
                                        className="h-auto w-full flex-none"
                                        label="Name on Card"
                                        helpText=""
                                    >
                                        <TextField.Input
                                            placeholder="John Smith"
                                            value=""
                                            onChange={(
                                                event: React.ChangeEvent<HTMLInputElement>
                                            ) => { }}
                                        />
                                    </TextField>
                                </div>
                                <Alert
                                    title="Processing Payment"
                                    description="Please wait while we securely process your payment with AB Qallets"
                                    actions={
                                        <IconButton
                                            icon={<FeatherX />}
                                            onClick={(
                                                event: React.MouseEvent<HTMLButtonElement>
                                            ) => { }}
                                        />
                                    }
                                />
                                <div className="flex w-full items-center justify-end gap-2">
                                    <Button
                                        variant="neutral-tertiary"
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        loading={true}
                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                                    >
                                        Complete Purchase
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-96 flex-none flex-col items-start self-stretch border-l border-solid border-neutral-border" data-tour="chat-area">
                        <div className="flex w-full flex-col items-start gap-6 border-b border-solid border-neutral-border px-6 py-6">
                            <span className="text-heading-3 font-heading-3 text-default-font">
                                Shopping Assistant
                            </span>
                            <div className="flex w-full flex-col items-start gap-4">
                                <div className="flex w-full items-start gap-2">
                                    <Avatar size="small" image="">
                                        U
                                    </Avatar>
                                    <div className="flex max-w-[288px] items-start rounded-md bg-neutral-100 px-3 py-2">
                                        <span className="text-body font-body text-default-font">
                                            find me black dancing shoes with support for back pains
                                            without sparkles in them. buy them. Use my wallet
                                            credentials from AB Qallets to make the transaction
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full items-end justify-end gap-2">
                                    <div className="flex max-w-[288px] items-start rounded-md bg-brand-100 px-3 py-2">
                                        <span className="text-body font-body text-default-font">
                                            I&#39;ll perform the search for you and purchase the first
                                            set of shoes. Approve?
                                        </span>
                                    </div>
                                    <Avatar size="small" image="">
                                        AI
                                    </Avatar>
                                </div>
                                <div className="flex w-full items-start gap-2">
                                    <Avatar size="small" image="">
                                        U
                                    </Avatar>
                                    <div className="flex max-w-[288px] items-start rounded-md bg-neutral-100 px-3 py-2">
                                        <span className="text-body font-body text-default-font">
                                            Yes
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full items-end justify-end gap-2">
                                    <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-default-background px-4 py-4" data-tour="actions-log">
                                        <div className="flex w-full items-center gap-2">
                                            <IconWithBackground variant="success" size="small" />
                                            <span className="text-body font-body text-default-font">
                                                Navigated to Dance Shoes category
                                            </span>
                                        </div>
                                        <div className="flex w-full items-center gap-2">
                                            <IconWithBackground variant="success" size="small" />
                                            <span className="text-body font-body text-default-font">
                                                Applied filters: Black, Support, Dance
                                            </span>
                                        </div>
                                        <div className="flex w-full items-center gap-2">
                                            <IconWithBackground
                                                size="small"
                                                icon={<FeatherLoader />}
                                            />
                                            <span className="text-body font-body text-default-font">
                                                Processing payment with AB Qallets
                                            </span>
                                        </div>
                                        <div className="flex w-full items-center gap-2">
                                            <IconWithBackground
                                                variant="neutral"
                                                size="small"
                                                icon={<FeatherClock />}
                                            />
                                            <span className="text-body font-body text-default-font">
                                                Confirming order details
                                            </span>
                                        </div>
                                    </div>
                                    <Avatar size="small" image="">
                                        AI
                                    </Avatar>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-2 px-6 py-4">
                            <TextField
                                className="h-auto grow shrink-0 basis-0"
                                variant="filled"
                                label=""
                                helpText=""
                            >
                                <TextField.Input
                                    placeholder="Type a message..."
                                    value=""
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { }}
                                />
                            </TextField>
                            <IconButton
                                variant="brand-primary"
                                icon={<FeatherSend />}
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultPageLayout>
    );
}

export default Demo;