import css from "./Form.module.css";
interface Orderform {
  onSubmit: (value: string) => void;
}

export default function Form({ onSubmit }: Orderform) {
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("username") as string;

    console.log(name);
    onSubmit("Hello");
  };
  return (
    <form action={handleSubmit} className={css.form}>
      <div className={css.inputContainer}>
        <input
          type="text"
          name="username"
          className={css.inputText}
          placeholder="Write your name here"
        />
        <input
          type="text"
          name="email"
          className={css.inputText}
          placeholder="Write your email address"
        />
        <input
          type="text"
          name="message"
          className={css.inputText}
          placeholder="Write your messages here"
        />
      </div>
      <button type="submit" className={css.submitButton}>
        Send it
      </button>
    </form>
  );
}
