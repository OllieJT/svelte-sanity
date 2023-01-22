import type { IconType } from '$src/lib/types';

interface StateValue<T> {
	resting: T;
	active: T;
	disabled?: T;
}
export type ButtonState = keyof StateValue<unknown>;
export type ButtonIcons = StateValue<IconType>;
export type ButtonLabels = StateValue<string>;

export type ButtonAlign = 'left' | 'right';
