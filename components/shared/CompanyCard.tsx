'use client'
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import { useRouter } from 'next/navigation';
import Dialogue from '@/components/shared/Dialogue'
import DetailCard from './DetailCard';

type CompanyData = {
  title: string;
  summarydesc: string;
  img: string;
};

type Props = {
  companyData: CompanyData[];
};

const CompanyCard = ({ companyData }: Props) => {
  const [isMenu, setMenu] = useState<boolean>(false)
  const [isDialogue, setDialogue] = useState<boolean>(false)
  const router = useRouter();


  const handleButtonClick = () => {
    router.push('/konnector/konnects');
  };

  return (
    <Fragment>

      <div className="flex flex-wrap -mx-2 ">
        {companyData.map((data, index) => (
          <div key={index} className="lg:w-[20%] w-[50%] p-2">
            <div className="bg-white-600 rounded-xl p-3 lg:border-[2px] border-gray-200">
              <div className="flex justify-between items-center gap-2 py-2">
                <Image src={data.img} alt="" width={100} height={100} className="object-cover  " />
                <h5 className="text-[10px] lg:font-[12px] text-brand-primary font-bold">{data.title}</h5>
              </div>
              <h6 className="mt-3 font-bold text-brand-primary text-[12px]">Summary: </h6>
              <p className="text-[12px] text-left">{data.summarydesc}</p>

              <div className="flex gap-2 mt-4 ">
                <Button
                  style="lg:p-4 p-1 max-h-[14px] shadow-inner hover:bg-black-500 bg-black-500 min-w-[40%] rounded-full m-auto text-[8px] md:text-[10px]"
                  onClick={handleButtonClick}
                  text="Konnect"
                />
                <Button
                  style="lg:p-4 px-3 max-h-[30px] shadow-inner hover:bg-black-500 bg-black-500 min-w-[40%] rounded-full m-auto text-[8px] md:text-[10px]"
                  onClick={() => {
                    setDialogue(true);
                    setMenu(!isMenu);
                  }}
                  text="See More"
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      <Dialogue show={isDialogue} onClose={() => setDialogue(false)} style="bg-white-600 max-w-[400px] flex justify-center items-center flex-col py-6" >
        <DetailCard />
      </Dialogue>

    </Fragment>
  );
};

export default CompanyCard;
