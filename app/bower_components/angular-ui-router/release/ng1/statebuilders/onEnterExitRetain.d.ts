/** @module ng1 */ /** */
import { State } from "../../state/stateObject";
import { TransitionStateHookFn } from "../../transition/interface";
import { BuilderFunction } from "../../state/stateBuilder";
/**
 * This is a [[StateBuilder.builder]] function for angular1 `onEnter`, `onExit`,
 * `onRetain` callback hooks on a [[Ng1StateDeclaration]].
 *
 * When the [[StateBuilder]] builds a [[State]] object from a raw [[StateDeclaration]], this builder
 * ensures that those hooks are injectable for angular-ui-router (ng1).
 */
export declare const getStateHookBuilder: (hookName: "onEnter" | "onExit" | "onRetain") => (state: State, parentFn: BuilderFunction) => TransitionStateHookFn;
