import java.util.*;

public class mergesort_np03cs4a220415 {
	
        ArrayList<Integer> getInput(ArrayList<Integer> al) {

            try (Scanner sc = new Scanner(System.in)) {
                System.out.println("Enter the number of elements you want: ");
                int num = sc.nextInt();
                for(int i=0; i<num; i++){
                    System.out.println("Input the  " + i + " indexed element that you want : ");
                    al.add(sc.nextInt());
                }
            }
            
            return al;          
        }
        
        void getOutput(ArrayList<Integer> al) {
            System.out.println("Unsorted ArrayList: "+al);
            sort(al, 0, al.size() - 1);
            System.out.println("Sorted ArrayList :" + al);
        }
        
        
        
        static void merge(ArrayList<Integer> al, int beg, int mid, int end) {
            ArrayList<Integer> mergedAl = new ArrayList<Integer>(end - beg + 1);
		    int firstHalfIndx = beg; // index number for the first half
		    int secondHalfIndx = mid + 1; // index number for the second half
            //adds the lowest value first in mergedAl
            while (firstHalfIndx <= mid && secondHalfIndx <= end){
                if (al.get(firstHalfIndx) < al.get(secondHalfIndx)){
                    mergedAl.add(al.get(firstHalfIndx));
                    firstHalfIndx++;
                }else{
                    mergedAl.add(al.get(secondHalfIndx));
                    secondHalfIndx++;
                }
            }
            for (int x = firstHalfIndx; x <= mid; x++) //adds any remaining values
                mergedAl.add(al.get(x));

            for (int x = 0; x < mergedAl.size(); x++)//copies the processed ArrayList into the original ArrayList
                al.set(beg + x, mergedAl.get(x));
            
        }
        
        static void sort(ArrayList<Integer> al, int beg, int end) {
            if (beg >= end) 
                return;
            int mid =  beg + (end - beg) / 2;// Finds the middle index
            sort(al, beg, mid);// first half
            sort(al, mid + 1, end); // second half
            merge(al, beg, mid, end);// calls merge() function to start the sorting process
        }
        
        public static void main(String[] args) {
            mergesort_np03cs4a220415 call = new mergesort_np03cs4a220415();
            ArrayList < Integer > al = new ArrayList < Integer > ();
            call.getInput(al); //get input
            call.getOutput(al); //display output
            
        }
    
    }
    

