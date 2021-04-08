import { CarImage } from './carImage';

export interface Car {
  carId: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  modelYear: number;
  imagePaths: CarImage[];
  imagePath: CarImage;
}