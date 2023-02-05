import { Image } from 'react-konva';
import useImage from 'use-image';
import { IImageProps } from '../interfaces/ComponentInterfaces'

const KonvaImage = (props : IImageProps) => {
    const { imageUrl, positionX, positionY, width, height } = props
    const [image] = useImage(imageUrl);
    
    return <Image x={positionX} y={positionY} width ={width} height= {height} image={image} alt="main_image"/>;
  };


export default KonvaImage