import Image from "next/image";
import Feature1 from '../../public/assets/feature-1.svg';
import Feature2 from '../../public/assets/feature-2.svg';
import Feature3 from '../../public/assets/feature-3.svg';
import Check from '../../public/assets/check.svg';
import BlueButton from '../../public/assets/blue-button.svg';

export function Features() {
    return (
        <div className={'flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]'}>
            {/*Feature1*/}
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt={'feature 1 image'} className={'hidden w-1/2 sm:block'}/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className={'font-medium text-[#0085FF] lg:text-[18px] '}>
                        Sales Monitoring
                    </h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                        Simplify your sales monitoring
                    </h1>
                    <Image src={Feature1} alt={'feature 1 image'} className={'pt-[24px] sm:hidden'}/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Stay on top of things and revamp your work process with our game-changing feature. Get a bird's
                        eye view with our customizable dashboard.
                    </p>

                    <ul className={'flex flex-col gap-y-0.5 lg:text-[18px]'}>
                        <li className={'flex items-center gap-x-2 text-[#36485C]'}>
                            <span>
                                <Image src={Check} alt={'Checkmark'}/>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>

                        <li className={'flex items-center gap-x-2 text-[#36485C]'}>
                            <span>
                                <Image src={Check} alt={'Checkmark'}/>
                            </span>
                            Consectetur adipiscing elit
                        </li>

                        <li className={'flex items-center gap-x-2 text-[#36485C]'}>
                            <span>
                                <Image src={Check} alt={'Checkmark'}/>
                            </span>
                            Sed do eiusmod tempor incididunt ut labore
                        </li>
                    </ul>

                    <p className="flex gap-x-2 items-center pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
                        Learn More{' '} <span><Image src={BlueButton} alt={'Learn more'}/></span>
                    </p>
                </div>

            </div>


            {/*Features 2*/}
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature2} alt={'feature 1 image'} className={'hidden w-1/2 sm:block'}/>
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className={'font-medium text-[#0085FF] lg:text-[18px] '}>
                        Sales Monitoring
                    </h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                        Simplify your sales monitoring
                    </h1>
                    <Image src={Feature2} alt={'feature 2 image'} className={'pt-[24px] sm:hidden'}/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Stay on top of things and revamp your work process with our game-changing feature. Get a bird's
                        eye view with our customizable dashboard.
                    </p>

                    <ul className={'flex flex-col gap-y-0.5 lg:text-[18px]'}>
                        <li className={'flex items-center gap-x-2 text-[#36485C]'}>
                            <span>
                                <Image src={Check} alt={'Checkmark'}/>
                            </span>
                            Lorem ipsum dolor sit amet
                        </li>

                        <li className={'flex items-center gap-x-2 text-[#36485C]'}>
                            <span>
                                <Image src={Check} alt={'Checkmark'}/>
                            </span>
                            Consectetur adipiscing elit
                        </li>

                        <li className={'flex items-center gap-x-2 text-[#36485C]'}>
                            <span>
                                <Image src={Check} alt={'Checkmark'}/>
                            </span>
                            Sed do eiusmod tempor incididunt ut labore
                        </li>
                    </ul>

                    <p className="flex gap-x-2 items-center pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
                        Learn More{' '} <span><Image src={BlueButton} alt={'Learn more'}/></span>
                    </p>
                </div>

            </div>
        </div>
    )
}