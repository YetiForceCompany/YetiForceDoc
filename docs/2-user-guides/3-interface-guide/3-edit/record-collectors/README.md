---
title: Record collectors
description: Record collectors
keywords:
  - collectors
  - YetiForce
tags:
  - collectors
---

## Video guide

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player';

<Tabs groupId="XlIXiQpC9ug">
	<TabItem value="youtube-XlIXiQpC9ug" label="🎬 YouTube">
		<ReactPlayer
			url="https://www.youtube.com/watch?v=XlIXiQpC9ug"
			width="100%"
			height="500px"
			controls={true}
		/>
	</TabItem>
	<TabItem value="yetiforce-XlIXiQpC9ug" label="🎥 YetiForce TV">
		<ReactPlayer url="/video/record-collector.mp4" width="100%" height="500px" controls={true} />
	</TabItem>
</Tabs>

Record collector is used to load data from various sources and enables displaying and loading data into the YetiForce CRM system.

![record-collector-1](record-collector-1.jpg)

The mechanism is available in all modules, however it has to be enabled and configured for each module to work correctly.

## Permissions

For the collector to work properly you have to check (☑) the "Record collector" field in the profile permission configuration panel (`Software configuration → Permissions → Profiles`) shown below:

![record-collector-2](record-collector-2.jpg)

If you can't see the "records collector" action in profiles you should edit the following file: modules/Settings/ModuleManager/models/Module.php and add in the variable the following text (only if it's missing)

## Available collectors

import DocCardList from '@theme/DocCardList';

<DocCardList />
