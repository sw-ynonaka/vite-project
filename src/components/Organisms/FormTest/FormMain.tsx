
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

function FormMain() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" {...register('password')} type="password" />
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
}

export default FormMain;