import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '@/api/admin'; // Assurez-vous que le chemin est correct

const useAdminDashboardData = () => {
  return useQuery({ 
    queryKey: ['adminDashboardStats'], 
    queryFn: getDashboardStats 
  });
};

export default useAdminDashboardData;
