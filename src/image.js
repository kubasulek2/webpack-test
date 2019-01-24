import head from './components/heading/heading';
import addImage from './components/image/image';
import _ from 'lodash';
import React from 'react';

const heading = new head;
const image = new addImage;
heading.render(_.upperFirst('image'));
image.render();