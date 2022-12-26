import Link from 'next/link';
import React from 'react';

type Props = {
  icon: Function;
  href: string;
  'aria-label': string;
};
const SocialLink = ({ icon: Icon, ...props }: Props) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};

export default SocialLink;
