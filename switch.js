

function rank(a){
  switch(true){
    case (a<3)  : return "low";
    case (a<6)  : return "middle";
    case (a<10) : return "high";
    default     : return "very high";
  }
}



print(rank(1) + "\n")
print(rank(5) + "\n")
print(rank(9) + "\n")
print(rank(100) + "\n")


