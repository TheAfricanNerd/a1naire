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
          <div className="w-auto mx-auto">
            <Title>{data?.title}</Title>
            {/* images section */}
            <div className="flex justify-between items-end my-2">
              {" "}
              <h3 className=" text-xl md:text-4xl my-2 w-full md:w-1/3">
                Your Current {!isMobile ? <br /> : ""}
                UberBlack Option
              </h3>
              <h3 className="text-xl md:text-4xl text-right md:flex hidden w-full my-2">
                A1naire
              </h3>
            </div>
            <div className="flex gap-5 w-full">
              <div className="w-full flex flex-col md:flex-row gap-2">
                <div className="left md:w-1/3 w-full">
                  <div className="flex gap-2 flex-col">
                    <img src={third.img} alt={third.alt} className=" w-full" />
                    <img
                      src={second.img}
                      alt={second.alt}
                      className=" w-full"
                    />
                  </div>
                </div>

                <div className="right w-full md:w-2/3">
                  <h3 className="text-xl md:text-4xl text-right flex md:hidden w-full my-2">
                    A1naire
                  </h3>
                  <img src={first.img} alt={first.alt} className=" w-full" />
                </div>
              </div>
            </div>

            {/* text section */}
            <div>
              <Text>{data?.text}</Text>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default SectionWithImageGrids;
