import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // one property is mutationFn doing mutation we need
    mutationFn: (id) => deleteCabinApi(id), // we can call it just deleteCabin and it will work
    //onSuccess is function which does actions after mutation is successfully done
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // it takes error from delteCabin function
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
