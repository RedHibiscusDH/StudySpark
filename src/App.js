import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Profile from './panels/Profile';
import Tasks from './panels/Tasks';
import Marks from './panels/Marks';
import Notifications from './panels/Notifications';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const phone = await bridge.send('VKWebAppGetPhoneNumber');
			setPhoneNumber(phone.phone_number);
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' fetchedUser={fetchedUser} phoneNumber={phoneNumber} go={go} />
								<Persik id='persik' go={go} />
								<Profile id='profile' fetchedUser={fetchedUser} phoneNumber={phoneNumber} go={go} />
								<Tasks id='tasks' fetchedUser={fetchedUser} go={go} />
								<Marks id='marks' fetchedUser={fetchedUser} go={go} />
								<Notifications id='notifications' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;

