import { motion, type Variants, type HTMLMotionProps, type Transition } from "framer-motion";
import { type ReactNode } from "react";

// Animation variants for reuse across components
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Default transition settings
export const defaultTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export const smoothTransition: Transition = {
  duration: 0.4,
  ease: "easeOut",
};

export const gentleTransition: Transition = {
  duration: 0.5,
  ease: "easeOut",
};

// Motion section wrapper with scroll animation
interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionSection({
  children,
  className,
  delay = 0,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

// Motion div with stagger children
interface MotionContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}

export function MotionContainer({
  children,
  className,
  fast = false,
  ...props
}: MotionContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fast ? staggerContainerFast : staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Motion item (child of stagger container)
interface MotionItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function MotionItem({ children, className, ...props }: MotionItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={smoothTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Hover scale animation wrapper
interface HoverScaleProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function HoverScale({
  children,
  className,
  scale = 1.02,
  ...props
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Page transition wrapper
interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

export { motion };
