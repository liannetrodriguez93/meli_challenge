import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@reduxConfig/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
