import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      > */}
      <section
        lang={langName}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center"
      >
        <h1>
          {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {/* {siteConfig.description} */}
          {locale.description}
        </p>
      </section>
      {/* </motion.div> */}
      <div className="flex justify-center gap-4">
        <CTAButton locale={CTALocale}></CTAButton>
        <Button variant="outline">
          <Link href="https://nexty.dev/" className="flex items-center gap-2">
            <img
              src="/nexty-logo.png"
              alt="Nexty.dev Logo"
              className="w-4 h-4"
            />{" "}
            Get SaaS Boilerplate
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Hero;
