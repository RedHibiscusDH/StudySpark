import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Group, Cell, Avatar, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28DocumentOutline, Icon28HomeOutline, Icon28ServicesOutline } from '@vkontakte/icons';

const Home = ({ id, go, fetchedUser, phoneNumber }) => (
	<Panel id={id}>
		{<PanelHeaderBack onClick={go} data-to="home"/>}
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar size={60} src={fetchedUser.photo_200}/> : null}
				subtitle={`+${phoneNumber}`}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			<Cell expandable size="l" onClick={go} data-to="profile">
				Данные пользователя
      		</Cell>
		</Group>}

		<Group>
			<Cell expandable size="l" onClick={go} data-to="tasks">
				Журнал заданий
      		</Cell>
			<Cell expandable size="l" onClick={go} data-to="marks">
				Журнал оценок
      		</Cell>
		</Group>
		<Tabbar>
			<TabbarItem text="Здания">
				<Icon28ServicesOutline />
			</TabbarItem>
			<TabbarItem text="Главная">
				<Icon28HomeOutline />
			</TabbarItem>
			<TabbarItem text="Оценки">
				<Icon28DocumentOutline />
			</TabbarItem>
		</Tabbar>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
