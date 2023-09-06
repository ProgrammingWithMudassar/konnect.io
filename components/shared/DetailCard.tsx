import React from 'react';
import { FaLinkedin, FaFacebook, FaGlobe } from 'react-icons/fa'; // Import the specific icons you want to use
import Image from 'next/image';
import Button from '@/components/shared/Button';

const DetailCard = () => {
    const selectedImage = '/Company/PAlto1.png';
    const route = '';

    const handleButtonClick = () => {
        if (route) {

        }
    };

    return (
        <div className='min-h-[calc(100vh-300px)] py-2 w-[100%] flex flex-col justify-between'>
            <div>
                <Image src={selectedImage} alt="" width={100} height={100} className="object-cover w-[80%] lg:w-[50%] m-auto" />
                <p className='text-[16px] text-black-400 m-auto bg-opacity-50 bg-brand-primary w-[70%] rounded-2xl'>Company Name</p>

                <div className='w-[100%] text-left pl-4 mt-6 flex flex-col gap-2 h-[40vh]'>
                    <p className='text-[12px] lg:text-[14px]'>Summary:</p>
                    <p className='text-[12px] lg:text-[14px]'>Website:</p>
                    <p className='text-[12px] lg:text-[14px]'>White paper:</p>
                    <p className='text-[12px] lg:text-[14px]'>LinkedIn:</p>
                    <p className='text-[12px] lg:text-[14px]'>Customer Testimonials:</p>
                    <p className='text-[12px] lg:text-[14px]'>Founded:</p>
                    <p className='text-[12px] lg:text-[14px]'>Head Quarters:</p>
                </div>
            </div>

            <div className='m-auto w-[80%] flex justify-end items-center gap-4 flex-col'>
                <div className='flex gap-4'>
                    <FaLinkedin size={30} className='text-brand-primary' />
                    <FaGlobe size={30} className='text-brand-primary' />
                    <FaFacebook size={30} className='text-brand-primary' />
                </div>
                <Button
                    style="lg:p-4 p-1 shadow-inner hover:bg-black-500 bg-black-500 rounded-full mt-4 m-auto w-[50%]"
                    onClick={handleButtonClick}
                    text="Konnect"
                />
            </div>
        </div>

    );
};

export default DetailCard;
