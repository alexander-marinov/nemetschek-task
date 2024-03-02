export interface Command<Params> {
    execute(params: Params): void;
    canExecute(): boolean;
}