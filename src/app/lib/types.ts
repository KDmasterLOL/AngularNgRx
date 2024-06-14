enum City {
  Moscow,
  SaintPetersburg,
  NewYork
}
interface Ticket {
  id: number
  title: string
  creation_data: Date
}
interface Profile {
  id: number
  login: string
  name: string
  last_name: string
  city: City
  birth_date: Date
}
export type { Ticket, Profile }
export { City }
