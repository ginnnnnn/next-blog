import Image from "next/image";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/austin.png"
          alt="An image showing aus"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi This is Gingogo</h1>
      <p>this is my blog ,check what i wrote</p>
    </section>
  );
};

export default Hero;
