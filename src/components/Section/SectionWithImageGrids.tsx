import { ReactNode } from "react";
import Container from "../Container";
import { PropData } from "../../types/d";
import Title from "../Title";
import Text from "../Text";
import useMedia from "../../hook/useMedia";

interface Props {
  children?: ReactNode;
  data?: PropData;
  flex?: boolean;
}

const SectionWithImageGrids = ({ children, data, flex = false }: Props) => {
  const isMobile = useMedia().isMobile;

  const first = data!.images![0];
  const second = data!.images![1];
  const third = data!.images![2];
  return (
    children ?? (
      <>
        <Container flex={flex}>
          <div className="w-auto ">
            <Title className="text-left">{data?.title}</Title>
            {/* images section */}
            <div className="flex w-full justify-between items-end my-2">
              {" "}
              <h3 className=" text-xl md:text-2xl w-full md:text-left text-center md:w-1/3 my-2 mx-[7.5%] md:mx-0 border-[1px] border-slate-400 p-2 md:p-4 px-4 md:px-8 rounded-full">
                Your Current {!isMobile ? <br /> : ""}
                UberBlack Option
              </h3>
              <h3 className="text-xl md:text-2xl text-left md:flex hidden w-max my-2 mx-[7.5%] md:mx-0 border-[1px] border-slate-400 p-2 md:p-4 px-4 md:px-8 rounded-full">
                A1naire
              </h3>
            </div>
            <div className="flex gap-5 w-full">
              <div className="w-full flex flex-col md:flex-row gap-2">
                <div className="left md:w-1/3 w-full">
                  <div className="flex gap-0 md:gap-2 flex-row md:flex-col">
                    <img
                      src={third.img}
                      alt={third.alt}
                      className=" w-1/2 md:w-full"
                    />
                    <img
                      src={second.img}
                      alt={second.alt}
                      className="w-1/2 md:w-full"
                    />
                  </div>
                </div>

                <div className="right w-full md:w-2/3">
                  <h3 className="text-xl md:text-4xl md:text-left text-center flex justify-center md:hidden w-myMobile md:w-max my-2 mx-[7.5%] border-[1px] border-slate-400 p-2 px-4 rounded-full">
                    A1naire
                  </h3>
                  <img src={first.img} alt={first.alt} className=" w-full" />
                </div>
              </div>
            </div>

            {/* text section */}
            <div>
              <Text className="text-left">{data?.text}</Text>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default SectionWithImageGrids;
