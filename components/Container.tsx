import { forwardRef, LegacyRef, ReactNode, Ref, RefObject } from 'react';
import clsx from 'clsx';

type OuterContainer = {
  className: string;
  children: ReactNode;
  props: HTMLStyleElement;
};
type InnerContainer = {
  className: string;
  children: ReactNode;
  props: HTMLStyleElement;
};
type Container = {
  children: ReactNode;
  props: HTMLStyleElement;
};

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: OuterContainer,
  ref
) {
  console.log({ ...props }, '...props');
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: InnerContainer,
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container = forwardRef(function Container(
  { children, ...props }: Container,
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
