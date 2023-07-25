import axios from 'axios';
import { IPoets } from '@/api/dto/orders';

export async function getPoets(): Promise<IPoets[]> {
    const response = await axios.get('https://api.ganjoor.net/api/ganjoor/poets');
    return response.data;
  }