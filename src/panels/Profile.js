import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Spacing, Separator, PanelHeader, PanelHeaderBack, Group, SimpleCell, InfoRow, Avatar, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { Icon28DocumentOutline, Icon28HomeOutline, Icon28ServicesOutline } from '@vkontakte/icons';

let gender = ["Не указан", "Женский", "Мужской"];

const Profile = ({ id, go, fetchedUser, phoneNumber }) => (
	<Panel id={id}>
		{<PanelHeaderBack onClick={go} data-to="home"/>}
		{fetchedUser && (
			<Group style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				{fetchedUser.photo_200 && <Avatar size={130} src={fetchedUser.photo_200}/>}
			</Group>
		)}
		{fetchedUser && (
		<Group>
			<SimpleCell>ID: {fetchedUser.id}</SimpleCell>
			<Spacing size={24}>
				<Separator />
			</Spacing>
			<SimpleCell multiline>
				<InfoRow header="ФИО:">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Подразделение:">Не указан</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Пол:">{gender[fetchedUser.sex]}</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Должность:">Студент</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Контактный Email:">ZvTSs@edu.midis.ru</InfoRow>
			</SimpleCell>
			<SimpleCell>
				<InfoRow header="Номер телефона:">{`+${phoneNumber}`}</InfoRow>
			</SimpleCell>
		</Group>
		)}
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

Profile.propTypes = {
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
export default Profile;
