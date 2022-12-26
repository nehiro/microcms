import Router from 'next/router';
import Link from 'next/link';
import { StartEnd, TotalCount } from '../ts/blog';

export const Pagination = ({ totalCount }: TotalCount) => {
  const PER_PAGE = 5;

  const range = (start: StartEnd['start'], end: StartEnd['end']) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  // [...Array(end - start + 1)] 引数の数だけ要素が入っている配列が作られる
  // map((_, i) 第二引数はインデックス　第一引数はArrayに要素が入っていないからindexを使用するため,start+1は1開始にするため
  return (
    <ul className="grid gap-2 grid-cols-2">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="text-white">
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
};
