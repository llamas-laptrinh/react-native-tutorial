/**
 * @format
 */
import { Formik } from 'formik';
import * as Yup from 'yup';
import {AppRegistry} from 'react-native';
import { useState } from 'react';
import App from './App';
import Form from './Validator/Form';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Form);
