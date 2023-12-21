import React from "react";
import BannerEdukasi from "../../Components/BannerEdukasi";
import img1 from "../Images/imgEdukasi1.png";
import img2 from "../Images/imgEdukasi2.png";
import img3 from "../Images/imgEdukasi3.png";
import { Button } from "@material-tailwind/react";

function AdminEdukasi() {
  return (
    <div>
      <BannerEdukasi></BannerEdukasi>
      <div className="flex justify-end px-10">
        <Button color="blue" className="mt-14">
          Add Content
        </Button>
      </div>
      <div className="px-12">
        <Button color="blue" className="w-1/4 text-lg">
          What Is Plastic Polution
        </Button>
        <div className="mt-8">
          <img
            src={img1}
            width={"400px"}
            className="h-48 float-left me-5 mb-2"
          />
          <p className="text-sm">
            Reducing plastic waste is essential to mitigate its detrimental
            impact on the environment. There are several effective strategies
            and lifestyle changes that individuals, communities, and governments
            can adopt to minimize plastic waste. Firstly, raising awareness
            about the consequences of plastic pollution is crucial. Education
            campaigns can inform people about the environmental impact of
            plastic and encourage them to make more sustainable choices. This
            awareness can drive behavioral changes, leading to reduced plastic
            usage. Additionally, promoting and investing in research and
            development for alternative materials can significantly contribute
            to decreasing our reliance on conventional plastics. Biodegradable
            and compostable materials offer promising alternatives that break
            down naturally, posing fewer threats to the environment. Secondly,
            recycling programs play a pivotal role in reducing plastic waste.
            Communities and businesses should invest in efficient recycling
            systems that encourage the proper disposal of plastic products.{" "}
          </p>
          <p className="text-sm">
            Governments can enforce stricter regulations and provide incentives
            for recycling initiatives, making it easier and more economically
            viable for individuals and industries to recycle plastics.
            Additionally, promoting the concept of the circular economy, where
            products are designed to be reused, refurbished, or recycled, can
            significantly reduce the demand for new plastic production. Thirdly,
            reducing single-use plastic consumption is paramount. Encouraging
            the use of reusable items such as bags, bottles, and containers can
            significantly cut down on plastic waste. Businesses can take the
            lead by offering eco-friendly packaging options and minimizing
            plastic packaging wherever possible. Consumers, on the other hand,
            can consciously choose products with minimal or no plastic
            packaging, thus reducing demand for such items. Governments can also
            implement policies like plastic bag bans and impose taxes on
            single-use plastics to discourage their usage.
          </p>
          <div className=" mt-6 relative">
            <div className="flex absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
        </div>
        <Button color="blue" className=" text-lg mt-8">
          How We Do Reduce Plastic Waste
        </Button>
        <div className="mt-8">
          <img src={img2} alt="" className="h-48 float-left me-5 mb-2" />
          <p className="text-sm">
            Reducing plastic waste is essential to mitigate its detrimental
            impact on the environment. There are several effective strategies
            and lifestyle changes that individuals, communities, and governments
            can adopt to minimize plastic waste. Firstly, raising awareness
            about the consequences of plastic pollution is crucial. Education
            campaigns can inform people about the environmental impact of
            plastic and encourage them to make more sustainable choices. This
            awareness can drive behavioral changes, leading to reduced plastic
            usage. Additionally, promoting and investing in research and
            development for alternative materials can significantly contribute
            to decreasing our reliance on conventional plastics. Biodegradable
            and compostable materials offer promising alternatives that break
            down naturally, posing fewer threats to the environment. Secondly,
            recycling programs play a pivotal role in reducing plastic waste.
            Communities and businesses should invest in efficient recycling
            systems that encourage the proper disposal of plastic products.{" "}
          </p>
          <p className="text-sm">
            Governments can enforce stricter regulations and provide incentives
            for recycling initiatives, making it easier and more economically
            viable for individuals and industries to recycle plastics.
            Additionally, promoting the concept of the circular economy, where
            products are designed to be reused, refurbished, or recycled, can
            significantly reduce the demand for new plastic production. Thirdly,
            reducing single-use plastic consumption is paramount. Encouraging
            the use of reusable items such as bags, bottles, and containers can
            significantly cut down on plastic waste. Businesses can take the
            lead by offering eco-friendly packaging options and minimizing
            plastic packaging wherever possible. Consumers, on the other hand,
            can consciously choose products with minimal or no plastic
            packaging, thus reducing demand for such items. Governments can also
            implement policies like plastic bag bans and impose taxes on
            single-use plastics to discourage their usage.
          </p>
          <div className=" mt-6 relative">
            <div className="flex absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
        </div>

        <Button color="blue" className="w-1/4 text-lg mt-8">
          How We Can Help
        </Button>
        <div className="mt-8">
          <img src={img3} alt="" className="h-48 float-left me-5 mb-2" />
          <p className="text-sm">
            To address plastic pollution, we can organize various events and
            programs that actively involve communities. One effective way is to
            conduct local clean-up campaigns. In these events, volunteers can
            come together to clean beaches, rivers, or other public areas from
            plastic waste. Not only does this clean the environment, but it also
            raises public awareness about the importance of cleanliness and
            reducing the use of single-use plastics. Furthermore, these events
            can include education on recycling and ways to reduce plastic waste
            in everyday life. Reducing plastic can also be accomplished through
            educational campaigns in schools and universities. Organizing
            seminars, workshops, or training sessions on the negative impacts of
            plastic on the environment and ways to reduce it can raise awareness
            among the younger generation. Students can be encouraged to develop
            creative ideas such as using reusable water bottles and shopping
            bags, as well as recycling plastic to create useful products. By
            educating the next generation, we can instill sustainable habits and
            reduce the plastic generation.
          </p>
        </div>
        <div className=" mt-6 relative">
          <div className="flex absolute bottom-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEdukasi;
