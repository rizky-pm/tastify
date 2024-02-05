import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='relative w-full h-[50vh]'>
        <Image
          src={'/header-image.jpg'}
          fill
          alt='Food on the table'
          className='object-cover object-center'
        />
        <div
          className='bg-gray-900/75 absolute z-10 w-full h-full text-center flex items-center justify-center flex-col'
          aria-hidden='true'
        >
          {/* TODO: Find better font */}
          <h1 className='text-3xl text-white'>
            What recipe are you hungry for today?
          </h1>
          <div className='w-2/4 mt-4'>
            <Input type='search' placeholder='Pizza' className='text-center' />
          </div>
        </div>
      </div>

      <MaxWidthWrapper className='mt-16'>
        <div>
          <h3>Browse &rarr;</h3>

          {/* TODO: Add recipe listing */}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
