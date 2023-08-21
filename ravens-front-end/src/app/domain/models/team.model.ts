export interface Team {
  name: string;
  secretary: Secretary;
  team: Player[];
}

export interface Secretary {
  name: string;
  phone: string;
  email: string;
}

export interface Player {
  name: string;
  pronouns: string;
  dietary: string;
  allergies: string;
}
