# nexus-plugin-kurento-client <!-- omit in toc -->

**Contents**

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Example Usage](#example-usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br>

## Installation


```
yarn add nexus-plugin-kurento-client
```

<br>

## Example Usage

```
import { use } from 'nexus'
import { kurentoClient } from 'nexus-plugin-kurento-client'

use(kurentoClient({ kurentoUrl: $KURENTO_URL }))
```

then you can access kurentoClient in context
```
resolve: (_, __, { kurentoClient }) => {}
```