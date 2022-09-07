import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({
  todo:
  { title, user, completed },
}) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': completed === true,
    },
  )}
  >
    <h2 className="TodoInfo__title">{ title }</h2>
    {user && <UserInfo user={user} />}
  </article>
);