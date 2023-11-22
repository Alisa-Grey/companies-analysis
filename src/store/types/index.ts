export interface CompanyProps {
  id: number;
  name: string;
  netRevenue: {year: number, value: number}[];
  revenue: {year: number, value: number}[];
}