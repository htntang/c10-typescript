type BossName=string;
type Attacks=string[];
type Health=number;
type SoulsDropped=number;
type ItemDrops=string[];
type lore={
    backstory:string,
    age:number,
}

type BossFight={
    name:BossName,
    attacks:Attacks,
    health:Health,
    souls:SoulsDropped,
    items?:ItemDrops
    lore?: lore
}

//

