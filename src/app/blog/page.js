import React from 'react';
import CardBlog from '../../../components/CardBlog';

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-[#f6f3fc] p-5">
      <Header />
      <BlogPosts />
      <ViewAllButton />
    </div>
  );
}

const Header = () => (
  <div className='flex flex-col items-center justify-center'>
    <h1 className='font-semibold text-3xl text-center mb-5'>Blog Post</h1>
    <p className='px-20 mx-60 text-center text-sm mb-12'>
      Blogs are a great method to increase traffic and generate leads, make a profit. <br />
      Get compensated for your efforts.
    </p>
  </div>
);

const BlogPosts = () => (
  <div className='flex items-center justify-center gap-5'>
    <CardBlog
      title={"Article"}
      parra={"How do you use social media for growing traffic and sales?"}
      img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
      name={"Bonnie Green"}
      date={"May 2020"}
      mins={"5"}
      like={"34"}
      view={"203"}
    />
    <CardBlog
      title={"Lifestyle"}
      parra={"Health & fitness for busy people during times of stress."}
      img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"}
      name={"Jason Bourne"}
      date={"April 2020"}
      mins={"10"}
      like={"39"}
      view={"604"}
    />
    <CardBlog
      title={"Article"}
      parra={"QR codes - innovative ways to use them in small businesses."}
      img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
      name={"Wanda Maximoff"}
      date={"March 2020"}
      mins={"7"}
      like={"26"}
      view={"436"}
    />
  </div>
);

const ViewAllButton = () => (
  <button className="mt-24 bg-transparent border-transparent text-transparent bg-gradient-to-r from-purple-500 to-blue-500 font-bold py-2 px-4 rounded hover:from-purple-700 hover:to-blue-700 bg-clip-text border-2 border-gradient-to-r">
    View All
  </button>
);
