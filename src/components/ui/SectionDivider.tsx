import { useInView } from '../../hooks/useInView';

export default function SectionDivider() {
  const { ref, inView } = useInView(0.5);
  return (
    <div ref={ref} className="flex justify-center py-2">
      <div
        className={`h-px w-full max-w-md bg-gradient-to-r from-transparent via-neutral-300 to-transparent origin-center ${inView ? 'animate-drawLine' : 'scale-x-0'}`}
      />
    </div>
  );
}
