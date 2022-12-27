import { forwardRef, LegacyRef, ReactNode, Ref, RefObject, PropsWithoutRef } from 'react';
import clsx from 'clsx';

type OuterContainer = {
  className: string;
  children: ReactNode;
  // props: HTMLStyleElement;
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

const OuterContainerComponent = forwardRef<HTMLDivElement, OuterContainer & PropsWithoutRef<JSX.IntrinsicElements['div']>>(function OuterContainer(
  { className, children, ...props },
  ref
) {
  console.log({ ...props }, '...props');
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainerComponent = forwardRef(function InnerContainer(
  { children }: { children: ReactNode },
  // { className, children, ...props }: InnerContainer,
  // ref
) {
  return (
    <div
      // ref={ref}
      // className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      // {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Container = forwardRef(function ContainerRender(
  { children, ...props }: Container,
  ref
) {
  return (
    <OuterContainerComponent ref={ref} {...props}>
      <InnerContainerComponent>{children}</InnerContainerComponent>
    </OuterContainerComponent>
  );
});

Container.Outer = OuterContainerComponent;
Container.Inner = InnerContainerComponent;
