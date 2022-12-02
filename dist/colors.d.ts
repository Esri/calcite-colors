export declare type ChartColorSet = {
    name: string;
    colors: string[];
};
export declare type ThemeVariables = {
    brand: string;
    "brand-hover": string;
    "brand-press": string;
    background: string;
    "foreground-1": string;
    "foreground-2": string;
    "foreground-3": string;
    "text-1": string;
    "text-2": string;
    "text-3": string;
    "text-highlight": string;
    "text-inverse": string;
    "text-link": string;
    "border-1": string;
    "border-2": string;
    "border-3": string;
    "border-input": string;
    info: string;
    success: string;
    warning: string;
    danger: string;
    "danger-hover": string;
    "danger-press": string;
};
export declare type Theme = {
    name: string;
    variables: ThemeVariables;
};
export declare const chartColors: string[];
export declare const defaultChartColors: string[];
export declare const chartColorSets: ChartColorSet[];
export declare const colors: Record<string, string>;
export declare const themes: Theme[];
