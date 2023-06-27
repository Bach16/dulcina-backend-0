import { BaseEntity } from 'src/config/base.entity';
import { IProduct } from 'src/interfaces/product.interface';
import { Column,Entity } from 'typeorm';

@Entity({name:"products"})
export class ProductEntity extends BaseEntity implements IProduct {
  @Column()
  name: string;
  @Column()
  status: string;
}
