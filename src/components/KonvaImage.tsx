//REACT
import { Image } from 'react-konva';

//USEIMAGE
import useImage from 'use-image';

//INTERFACES
import { IKonvaImageProps } from '../interfaces/ComponentInterfaces'

const KonvaImage = (props: IKonvaImageProps) => {
  const { imageUrl, orientation } = props
  const [image] = useImage(imageUrl);


  return <Image
    width={orientation === 'horizontal' ? 1920 * 2 / 3 : 1080}
    height={orientation === 'horizontal' ? 1080 : 1920 * 2 / 3}
    orientation={orientation} x={0} y={0}
    image={image} alt="main_image"
  />
};


export default KonvaImage


