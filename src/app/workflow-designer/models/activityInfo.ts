export class ActivityInfo {
    name: string;
    type: string;
    parameteres: ParameterInfo[] = [];
}

export class ParameterInfo {
    name: string;
    valueTypes: string[];
    required: boolean;
}
