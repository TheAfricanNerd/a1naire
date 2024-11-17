import { IImage, INSTAGRAMPhoto1, INSTAGRAMPhoto2, INSTAGRAMPhoto3, INSTAGRAMPhoto4 } from "../../assets/images";

export interface IIGImage {
  id: number,
  link: string
  image: IImage
}
export default <IIGImage[]><unknown>[
  {
    id: 1,
    link: "https://www.instagram.com/reel/DBT_NPDOi-Y/?igsh=MWRhNGpqaHczYXN0aA==",
    image: INSTAGRAMPhoto1
  },
  {
    id: 2,
    link: "https://www.instagram.com/reel/C_9C1oLyfcn/?igsh=dW90OTNhZXl0OWd4",
    image: INSTAGRAMPhoto2
  },
  {
    id: 3,
    link: "https://www.instagram.com/reel/DAWXvOQODGj/?igsh=OGdqZXZoMXYwamdw",
    image: INSTAGRAMPhoto3
  },
  {
    id: 4,
    link: "https://www.instagram.com/reel/DBtuY-KJoS6/?igsh=NDdqYnZodnRkZWNi",
    image: INSTAGRAMPhoto4
  },
] 