import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) {}

  getNews(): Promise<AxiosResponse<any, any>> {
    return this.httpService.axiosRef.get(
      'https://newsapi.org/v2/everything?q=finanzas',
      {
        headers: { 'X-Api-Key': process.env.API_KEY },
      },
    );
  }

  getTopHeadLines(): Promise<AxiosResponse<any, any>> {
    return this.httpService.axiosRef.get(
      'https://newsapi.org/v2/top-headlines?country=ar&category=business',
      {
        headers: { 'X-Api-Key': process.env.API_KEY },
      },
    );
  }
}
