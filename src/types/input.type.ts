export default interface IInputData {
    label: string,
    id: string,
    type: string,
    name: string,
    class: string,
    value: string,
    onChange: (value: string) => void,
    required?: boolean,
}