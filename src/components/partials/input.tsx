import IInputData from '../../types/input.type';

export default function InputField(props: IInputData) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(event.target.value);
    };
  
    return (
      <div className="form-group">
        <label>{props.label}</label>
        <input
          type={props.type}
          className={props.class}
          id={props.id}
          value={props.value}
          onChange={handleInputChange}
          name={props.name}
          required={props.required || false}
        />
      </div>
    );
}