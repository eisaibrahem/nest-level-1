import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.js';
import { UpdateOrderDto } from './dto/update-order.dto.js';
import { Repository } from 'typeorm/browser';
import { Order } from './entities/order.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) { }

  create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    order.createdAt = new Date();
    order.updatedAt = new Date();
    order.isActive = true;
    return this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOne({ where: { id: id, isActive: true } });
  }

  async updateOrderTitle(id: number, title: string) {
    const existingOrder = await this.orderRepository.findOne({ where: { id: id, isActive: true } });
    if (!existingOrder) {
      throw new NotFoundException('Order not found');
    }
    existingOrder.title = title;
    existingOrder.updatedAt = new Date();
    return this.orderRepository.save(existingOrder);
  }

  async remove(id: number) {
    const deletedOrder = await this.orderRepository.delete(id);
    if (deletedOrder.affected === 0) {
      throw new NotFoundException('Order not found');
    }
    return { message: 'Order deleted successfully' };
  }
}
