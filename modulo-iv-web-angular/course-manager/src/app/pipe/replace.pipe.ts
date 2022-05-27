import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: "replace"
})
export class ReplacePipe implements PipeTransform {
    transform(value: string, replace: string, replaceWith: string): string {
        return (value as string).replace(replace, replaceWith);
    }
}