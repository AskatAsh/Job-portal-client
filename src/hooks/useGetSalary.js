const useGetSalary = (salaryRange) => {
    const {min, max, currency} = salaryRange;
    let minSalary = min, maxSalary = max;

    // for minimum salary range
    if(min >= 1000){
        minSalary = (min/1000);
    }
    
    // for maximum salary range
    if(max >= 1000){
        maxSalary = (max/1000);
    }
    
    return {salary: `${minSalary}k~${maxSalary}k ${currency}`};
};

export default useGetSalary;