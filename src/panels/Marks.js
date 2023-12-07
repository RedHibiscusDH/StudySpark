import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Spacing, Separator, Group, SimpleCell, Avatar, Tabbar, TabbarItem, Button } from '@vkontakte/vkui';
import { Icon28DocumentOutline, Icon28HomeOutline, Icon28ServicesOutline, Icon28Notifications } from '@vkontakte/icons';

const Marks = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		{fetchedUser && (
			<Group>
				<div style={{ display: 'flex', justifyContent: 'space-between'}}>
    			{<Button size="s">2200</Button>}
				Успеваемость
				{<IconButton onClick={go} data-to="notifications">
          			<Icon28Notifications/>
        		</IconButton>}
    			{fetchedUser.photo_200 && <Avatar size={60} src={fetchedUser.photo_200} onClick={go} data-to="home"/>}
  				</div>
			</Group>
		)}
		{fetchedUser && (
		<Group>
			<SimpleCell>ID: {fetchedUser.id}</SimpleCell>
			<Spacing size={24}>
				<Separator />
			</Spacing>
			
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

Marks.propTypes = {
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
export default Marks;
