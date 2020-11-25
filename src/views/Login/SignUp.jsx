import React from "react";
import { withRouter } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import useSignUpForm from "hooks/useSignUpForm";

const SignUp = (props) => {
	const { history, isLoading } = props;
	const { registerUser } = props;

	const { info, errors, handleChange, handleSubmit } = useSignUpForm(registerUser);

	const fade = useSpring({
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	});

	return (
		<animated.div style={fade} className='w-100'>
			<form className='sign-in' onSubmit={handleSubmit}>
				<div className='sign-in__input-group'>
					<input
						type='text'
						name='name'
						id='name'
						autoComplete='new-password'
						className={`sign-in__input ${errors.name ? "sign-in__input--error" : ""}`}
						value={info.name}
						onChange={handleChange}
					/>
					<label
						htmlFor='name'
						className={`sign-in__label ${info.name ? "sign-in__label--active" : ""}`}
					>
						Firstname
					</label>

					<p
						className={`sign-in__input-error ${errors.name ? "sign-in__input-error--visible" : ""}`}
					>
						{errors.name}
					</p>
				</div>

				<div className='sign-in__input-group'>
					<input
						type='text'
						name='surname'
						id='surname'
						autoComplete='new-password'
						className={`sign-in__input ${errors.surname ? "sign-in__input--error" : ""}`}
						value={info.surname}
						onChange={handleChange}
					/>
					<label
						htmlFor='surname'
						className={`sign-in__label ${info.surname ? "sign-in__label--active" : ""}`}
					>
						Surname
					</label>

					<p
						className={`sign-in__input-error ${
							errors.surname ? "sign-in__input-error--visible" : ""
						}`}
					>
						{errors.surname}
					</p>
				</div>

				<div className='sign-in__input-group'>
					<input
						type='email'
						name='email'
						id='email'
						autoComplete='new-password'
						className={`sign-in__input ${errors.email ? "sign-in__input--error" : ""}`}
						value={info.email}
						onChange={handleChange}
					/>
					<label
						htmlFor='email'
						className={`sign-in__label ${info.email ? "sign-in__label--active" : ""}`}
					>
						Email
					</label>

					<p
						className={`sign-in__input-error ${
							errors.email ? "sign-in__input-error--visible" : ""
						}`}
					>
						{errors.email}
					</p>
				</div>

				<div className='sign-in__input-group'>
					<input
						type='password'
						name='password'
						id='password'
						autoComplete='new-password'
						className={`sign-in__input ${errors.password ? "sign-in__input--error" : ""}`}
						value={info.password}
						onChange={handleChange}
					/>
					<label
						htmlFor='password'
						className={`sign-in__label ${info.password ? "sign-in__label--active" : ""}`}
					>
						Password
					</label>

					<p
						className={`sign-in__input-error ${
							errors.password ? "sign-in__input-error--visible" : ""
						}`}
					>
						{errors.password}
					</p>
				</div>

				<div className='sign-in__input-group'>
					<input
						type='password'
						name='confirmPassword'
						id='confirmPassword'
						autoComplete='new-password'
						className={`sign-in__input ${errors.confirmPassword ? "sign-in__input--error" : ""}`}
						value={info.confirmPassword}
						onChange={handleChange}
					/>
					<label
						htmlFor='confirmPassword'
						className={`sign-in__label ${info.confirmPassword ? "sign-in__label--active" : ""}`}
					>
						Confirm Password
					</label>

					<p
						className={`sign-in__input-error ${
							errors.confirmPassword ? "sign-in__input-error--visible" : ""
						}`}
					>
						{errors.confirmPassword}
					</p>
				</div>

				<button type='submit' disabled={isLoading} className='sign-in__btn-submit' formNoValidate>
					Sign up
				</button>
			</form>

			<div className='flex justify-center align-center'>
				<p>Already have an account?</p>

				<button onClick={history.goBack} className='login-page__link'>
					Sign in
				</button>
			</div>
		</animated.div>
	);
};

export default withRouter(SignUp);
