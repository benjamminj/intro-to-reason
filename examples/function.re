type pet = 
  | Dog(string) 
  | Cat(string) 
  | Fish;

switch(pet) {
  | Dog(breed) => "ruff! I'm a " ++ breed ++ " 🐶"
  | Cat(_breed) => "meow 🙀"
  | Fish => "What sounds do fish make? 🐟🐠🐡"
}
