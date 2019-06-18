import { Pipe, PipeTransform, Input } from "@angular/core";

@Pipe({
	name: "breakline",
})
export class BreaklinePipe implements PipeTransform {
	transform(value: any, args?: any): any {
		/*Pipe para filtrar os textos, caso ele seja formatado com '\n' será substituido por <br>.
    Caso não haja formatação "\n", os pontos serão substituídos por ". <br>"*/

		for (let i = 0; i < value.length; i++) {
			//Percorre o texto até achar um "/n", se nenhum é encontrado, utiliza-se a outra formatação
			if (value.charAt(i) == "\n") {
				return value.replace(/\n/g, "<br>");
			}
		}

		return value.replace(/\./g, ". <br>");

		//return value;
	}
}
