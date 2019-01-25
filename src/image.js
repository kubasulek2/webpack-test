import Head from './components/heading/heading';
import AddImage from './components/image/image';
import _ from 'lodash';
//import React from 'react';

const heading = new Head();
const image = new AddImage();
heading.render(_.upperFirst('image'));
image.render();