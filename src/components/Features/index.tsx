import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Web Scraping - Unlock the hidden potential of web data with our expert web scraping services. We can extract valuable information from websites, transform it into actionable insights, and deliver it in a format that suits your needs. Whether you need market research, competitive intelligence, or lead generation, we'll help you gather the data you need to make informed decisions. We are proficient in programming languages such as Python, and web scraping tools such as Beautiful Soup and Scrapy. We can navigate complex website structures, handle dynamic content, and ensure data accuracy. Let us turn the web into your data source."
            center
          />
          <SectionTitle
            title=""
            paragraph="Telegram Discord Bot Development - Revolutionize your Telegram channel with a custom bot tailored to your specific needs. We specialize in creating intelligent Telegram bots that enhance user engagement, automate tasks, and provide valuable information. Whether you need a customer support bot, a trading assistant, or a content delivery system, We can bring your vision to life. Our expertise includes integrating APIs, handling real-time data, and designing intuitive user interfaces. With a Telegram bot, you can streamline your operations, improve customer satisfaction, and unlock new opportunities for growth.
Also we develop powerful Discord bots that moderate channels, provide entertainment, and facilitate seamless communication. Whether you need a music bot, a game integration, or a custom moderation tool, We can create a solution that fits your server's unique needs. We are skilled in using JavaScript, Python, and other relevant technologies to build robust and scalable Discord bots. Enhance your community experience and streamline server management with a custom Discord bot."
            center
          />
          <SectionTitle
            title=""
            paragraph="Website Development - Establish a strong online presence with a professional and user-friendly website. We offer comprehensive website development services, from design and development to deployment and maintenance. We are proficient in HTML, CSS, JavaScript, React, Next, Wordpress, Shopify and various content management systems (CMS). Whether you need a simple landing page, a complex e-commerce platform, or a custom web application, We can deliver a solution that meets your goals. Let me help you create a website that attracts visitors, engages customers, and drives results."
            center
          />
          <SectionTitle
            title=""
            paragraph="Trading Bot Development - Automate your trading strategies and maximize your returns with a custom trading bot. We specialize in developing sophisticated trading bots for various platforms, including cryptocurrency exchanges and stock brokerages. We can implement complex trading algorithms, integrate real-time market data, and manage risk effectively. Our expertise includes Python, C#, and various trading APIs. Whether you're a seasoned trader or just starting out, a custom trading bot can help you execute trades efficiently and capitalize on market opportunities."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
