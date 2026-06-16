export interface ClubPass {
  id: string;
  number: string;
  title: string;
  features: string[];
  price: string;
  period: string;
}

export interface TrainingRitual {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface RegistrationForm {
  name: string;
  phone: string;
  passType: string;
  goals: string;
}
