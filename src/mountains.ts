export interface Mountain {
    name: string;
    height:number;
}

const mountains: Mountain[] = [{name:"Kilimanjaro", height:19341}, {name:"Everest", height:29029},{name:"Denali",height:20310}];


export function findNameOfTallestMountain(mountains: Mountain[]) :string {
    let tallestMountain = "";
    for (let i = 0; i < mountains.length; i++) {
        for (let j =1; j < mountains.length; j++){
            for (let k = 2; k < mountains.length; k++){
                if(mountains[i].height > mountains[j].height && mountains[i].height > mountains[k].height) {
                    tallestMountain = mountains[i].name;
                } else if(mountains[k].height > mountains[i].height && mountains[k].height > mountains[j].height) {
                    tallestMountain = mountains[k].name;
                } else if(mountains[j].height > mountains[i].height && mountains[j].height > mountains[k].height) {
                    tallestMountain = mountains[j].name;
                }
            }
        }
    } return tallestMountain;
}

let name = findNameOfTallestMountain([{name:"Kilimanjaro", height:19341}, {name:"Everest", height:290209},{name:"Denali",height:20310}]);
 
console.log(name);