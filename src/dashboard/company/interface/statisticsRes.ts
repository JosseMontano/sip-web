import { StatisticsRes } from "../../../common/components/statistics/interfaces/StatisticsRes";

export interface StatisticsResponse {
    message: string;
    data: StatisticsRes;
    status: number;
  }