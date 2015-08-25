---
title: Architecture 
permalink: /architecture/
layout: page
categories: eve architecture
group: "navigation"
weight: 1
---

### Overall architecture -functional blocks:

![Overall architecture -functional blocks](/img/architecture.png)

#### EVE Management
- Provides management of the users, courses, schedules and interactive content
- Provides online editor for course session scenarios
- Publish parts of functionalities as open SaaS services enabling integration with other LMS systems

#### Pre-session Tasks
- Handles all pre-session tasks which shall be finished before course session will start
  - deliver offline content to registered student devices
  - Notifies student about upcoming course sessions

#### Scenario Execution
- Executes predefined and preconfigured course session scenarios
- E-learning scenario
  - provides content and questions
  - modifies following steps based on response evaluation
- Online scenario
  - manage sessions with students and lector
  - provides local and remote content control for lector
  - evaluates responses to questions

#### Real-time Communication (Video/Voice)
- Provides personal video/voice online communication sessions between students and lector
- Solves different networking issues like firewalls or NAT traversal

#### Real-time Communication (Text Chat)
- Provides real-time transport text chat communication between session users (lector and students)

#### Post-session Tasks
- Handles all post-session tasks which are following after finished course session (depends on course type)
  - evaluates student responses
  - generates certificates
  - proposes next courses
  - updates student CV and personal characteristic profile (e.g. MBTI, skill-prerequisities) for later match with employer requirements

#### Objects Storage
- Stores all data related to
  - course content
  - sessions data and statistics
  - users personal profiles
  - response evaluation reports
  - issued certificates
  - reports

#### Integration Gateway
- Gateway between WEB / Mobile client applications connected also via WebSockets and enabler specific REST interface (e.g. from Orion Broker)
- Adaptation of the external content and data provider APIs
- Publish Open API for integration with other LMS systems Adaptation to
- Handles online cooperation on technological level interfaces with other intelligent external devices connected to the course scenario, like interactive school blackboard based on IoTwhich will display information synchronized with lector tablet.

<hr>

<img style="float: right" src="/img/block.png">

### EVE Backend

Architecture description of the EVE application functional blocks implementation on the backend servers

#### Server Functional Block Structure

Each functional block is based on [Docker container](https://www.docker.com/)
 - Runs as an isolated process in userspaceon the host operating system
 - Sharing the kernel with other containers
 - Enjoys the resource isolation and allocation benefits of VMs but is much more portable and efficient
 - Simplify installing duplicate instances to enhance application capacity or distribute resources
 - Allows easily manage separated functional instances e.g. for enterprises but based on same application code
