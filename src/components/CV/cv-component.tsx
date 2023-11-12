import React from 'react'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ComputerIcon from '@mui/icons-material/Computer';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import StarIcon from '@mui/icons-material/Star';
import { TFunction } from 'i18next';

interface CVProps {
    t: TFunction;
}

export const CVComponent = ({t} : CVProps) => {
    const renderObjective = () => (
        <div className='flex flex-col w-full bg-white rounded-[10px] shadow-md py-3'>
            <div className='flex flex-row gap-x-2 px-4 pb-2 border-b'>
                <LeaderboardIcon color='primary'/>
                <div className='uppercase font-medium text-[#1976d2]'>{t('info.object')}</div>
            </div>
            <div className='flex flex-col gap-y-1 text-start px-4 pt-2'>
                <div className='text-start font-medium'>{t('info.short-term')}</div>
                <div className='italic'>{t('info.short-time')}</div>
                <ul className='list-disc list-inside'>
                    <li>{t('info.short-1')}</li>
                    <li>{t('info.short-2')}</li>
                    <li>{t('info.short-3')}</li>
                </ul>
                <div className='text-start font-medium pt-2'>{t('info.long-term')}</div>
                <div className='italic'>{t('info.long-time')}</div>
                <ul className='list-disc list-inside'>
                    <li>{t('info.long-1')}</li>
                    <li>{t('info.long-2')}</li>
                    <li>{t('info.long-3')}</li>
                </ul>
            </div>
        </div>
    )

    const renderContact = () => (
        <div className='flex flex-col w-full bg-white rounded-[10px] shadow-md py-3'>
            <div className='flex flex-row gap-x-2 px-4 pb-2 border-b'>
                <PermContactCalendarIcon color='primary'/>
                <div className='uppercase font-medium text-[#1976d2]'>{t('info.contact')}</div>
            </div>
            <div className='flex flex-col gap-y-3 text-start px-4 pt-2'>
                <div>
                    <div className='text-start font-medium'>{t('info.address')}</div>
                    <div>{t('info.detail-address')}</div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.mobile')}</div>
                    <div>{t('info.mobile-number')}</div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.dob')}</div>
                    <div>{t('info.detail-dob')}</div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.email')}</div>
                    <div>{t('info.email-1')}</div>
                    <div>{t('info.email-2')}</div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.git-hub')}</div>
                    <div>{t('info.git-detail')}</div>
                </div>
            </div>
        </div>
    )

    const renderITSkill = () => (
        <div className='flex flex-col w-full bg-white rounded-[10px] shadow-md py-3'>
            <div className='flex flex-row gap-x-2 px-4 pb-2 border-b'>
                <ComputerIcon color='primary'/>
                <div className='uppercase font-medium text-[#1976d2]'>{t('info.it-skill')}</div>
            </div>
            <div className='flex flex-col gap-y-5 text-start px-4 pt-2'>
                <div>
                    <div className='text-start font-medium'>{t('info.html-css')}</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <LinearProgress value={85} variant="determinate" className='flex grow'/>
                        <div className='italic'>85%</div>
                    </div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.javascript')}</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <LinearProgress value={80} variant="determinate" className='flex grow'/>
                        <div className='italic'>80%</div>
                    </div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.react')}</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <LinearProgress value={77} variant="determinate" className='flex grow'/>
                        <div className='italic'>77%</div>
                    </div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.angular')}</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <LinearProgress value={80} variant="determinate" className='flex grow'/>
                        <div className='italic'>80%</div>
                    </div>
                </div>
                <div>
                    <div className='text-start font-medium'>{t('info.node')}</div>
                    <div className='flex flex-row gap-x-2 items-center'>
                        <LinearProgress value={60} variant="determinate" className='flex grow'/>
                        <div className='italic'>60%</div>
                    </div>
                </div>
            </div>
        </div>
    )

    const personaRender = (label: string, value: number) => (
        <div className='flex justify-center relative'>
            <div className='flex flex-col absolute top-[32px] text-center'>
                <div className='text-[11px] font-medium text-[#1976d2]'>{label}</div>
                <div>{value}%</div>
            </div>
            <CircularProgress value={value} variant="determinate" size={100}/>
        </div>
    )

    const renderPersonalSkill = () => (
        <div className='flex flex-col w-full bg-white rounded-[10px] shadow-md py-3'>
            <div className='flex flex-row gap-x-2 px-4 pb-2 border-b'>
                <StarIcon color='primary'/>
                <div className='uppercase font-medium text-[#1976d2]'>{t('info.persona')}</div>
            </div>
            <div className='grid grid-cols-2 gap-4 px-4 pt-2'>
                {personaRender(t('info.adapt'),80)}
                {personaRender(t('info.motive'),88)}
                {personaRender(t('info.analytic'),84)}
                {personaRender(t('info.team'),73)}
            </div>
        </div>
    )

    return(
        <div className="flex flex-col gap-y-3 mx-[250px] my-[20px] p-5 bg-gray-100 rounded-[10px]">
            <div className='flex flex-row justify-start uppercase text-[50px] p-5 font-medium'>
            {t('info.name')}
            </div>
            <div className='flex flex-row justify-start uppercase italic text-[20px] px-2 font-medium border-t border-b'>
            {t('info.position')}
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className='flex flex-col w-full gap-y-5'>
                {renderObjective()}
                {renderContact()}
                {renderITSkill()}
                {renderPersonalSkill()}
                </div>
                <div className='col-span-3 border'>Content</div>
            </div>
        </div>
    )
}