---
layout: post
title: The Present is Node.js
author: conor
tags:
- Project Management
- node.js
---

According to its [manual](http://docs.intersystems.com/documentation/cache/20122/pdfs/BXJS.pdf), _cache.node_ is a <q>module for the Node.js environment that implements high performance access to data held in [Intersystem's] Caché</q>. If you write or deploy software, you know <a href="https://nodejs.org/en/">Node.js</a> but Caché? According to this manual ...

> Caché can be regarded as a NoSQL database [that provides] a multi-dimensional multiple key/value storage model 

Now it so happens that Intersystems Caché is a [MUMPS](https://en.wikipedia.org/wiki/MUMPS) virtual machine but you won't find the M word in _cache.node_'s manual. Even when you invoke a MUMPS routine through _cache.node_, you are said to be calling a <q>Caché function</q>. Don't mention the MUMPS! Here's the leading MUMPS vendor positioning its product as an ideal storage medium for mainstream Node.js programmers. 

<!--more-->

And Node.js programmers are quite the bunch, one that according to the [Node.js foundation](https://nodejs.org/en/) participate in <q>largest ecosystem of open source libraries in the world</q>. Of course Intersystems wants these folks and they're not alone - seemingly the _Oracle Database Node.js Driver_ <q>demonstrates the power and flexibility of Node.js</q>!

But there's more to this story for VISTA. Take a look inside some sample data in that _cache.node_ manual ...

```text

 {
   global: "Customer",
   subscripts: [2],
   data: "Rob Tweed",
   defined: 1
 }
 {
   global: "Customer",
   subscripts: [3],
   data: "Jane Smith",
   defined: 1
 }

```

<p data-pullquote="I have seen the future and it's Node.js shaped"></p> 

Right beside the prosaic name Jane Smith is the sartorial name, _Rob Tweed_, but, unlike Jane, [Mr Tweed](https://github.com/vistadataproject/documents/tree/master/Background#outside-technology-and-advocacy) is all too real. That homespun Northern Irishman has been a mainstay of MUMPS development for decades and ever since 2012, when he added Node.js to Caché for Intersystems, he's been preaching and teaching and demonstrating its benefits to anyone who would listen. <q>I have seen the future and it's Node.js shaped</q>, [he wrote](https://robtweed.wordpress.com/2012/10/24/i-have-seen-the-future-and-its-node-js-shaped/).

<p class="pull-left" data-pullquote="We must wade into the thickets of VISTA Data - extracting, representing, defining, creating, securing"></p>

Finally, finally, eighteen months ago, Mr Tweed got the attention of the Veterans Administration (VA). The VA's Caché-hosted VISTA is one of the largest MUMPS systems in the world. You might say that Mr Tweed went to Washington and the Enterprise Health Management Platform ([eHMP](https://github.com/vistadataproject/nodeVISTA/tree/master/eHMP)), one of a set of <q cite="https://github.com/vistadataproject/documents/tree/master/Background#outside-technology-and-advocacy">coordinated improvements</q> to VISTA, listened. Node.js is now intrinsic to eHMP which resides above the VISTA system proper and _cache.node_-enabled, in-VISTA use is just over the horizon. 

Which gets me to the VISTA Data Project. We must wade into the thickets of VISTA Data - extracting, representing, defining, creating, securing. There's little time to evaluate software plumbing, to tease out how best to code and network in VISTA and with such a compelling, mainstream option as Node.js, there's no need either. 

In this project, code will be in Node.js Javascript and run right inside VISTA using _cache.node_ or its open source equivalent, _nodem_. Tweeking Mr Tweed, for the VISTA Data Project, [<q>the present is Node.js</q>](https://github.com/vistadataproject/nodeVISTA/tree/master/nodemExamples). We will rely on its commonplace modules for web services and process handling, logging and security while we wade into all that data!
