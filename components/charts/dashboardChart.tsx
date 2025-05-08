interface DashboardChartProps {
  data: ChartProp[];
}

interface ChartProp {
  date: string;
  sales: number;
  contacts: number;
  exchanges: number;
  returns: number;
}

export default function DashboardChart({ data }: DashboardChartProps) {
  return <div />;
}
