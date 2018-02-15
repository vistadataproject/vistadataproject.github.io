---
layout: default
title: VICS Web1
---

## Build Web 1 (of 3) (February 15th, 2018)

The VICS Client [a] establishes an open source, industry-standard development framework for clinical and non clinical, web-based VICS clients, [b] demonstrates that such clients can operate seemlessly along side CPRS and [c] shows that VICS _directly enables_ clients with cross VA as opposed to per-VISTA scope.

This Web Client will cover all the relevant functionality of CPRS in a web-friendly form and deliver modern visual motifs and features missing from CPRS such as auto-complete in search dialogs and ease of personalization.

![ComboVICS -width70](images/ComboVICS.png)

VAM has three _PDE Clinical Web Client_ (_"VICS Client"_) releases:

Release | Name | Content | Due
--- | --- | --- | ---
W1 | Establish | [a] Basic GUI Component Framework,<br>[b] __Subset of CPRS__,<br>[c] against __nodeVISTA__ (from VDP) | February 18
W2 | CPRS Coverage Complete | [a] __CPRS-compatible and equivalent__ Client for User, Division, Patient and three PDE domains,<br>[b] __VICS for Meta Data__ | May 18
W3 | Scalable National Client | [a] __VICS for all Data__,<br>[b] All CPRS interaction scenarios (locking),<br>[c] Cross VA, national client (VICS station #),<br>[d] AWS deployment,<br>[e] Proven scalability | August 18

__Diagram showing Web 1__ and __Diagram showing ultimate deployment__

__Development__: the client uses the popular React.js framework and, like the VICS Server, is being developed in open gits:
  * [React.js](https://reactjs.org/)
  * Development Gits: (note: due to move to own git in W2)
    * [VAM Client](https://github.com/vistadataproject/nodeVISTAClients/tree/master/vam-client)
    * [VAM Proxy Server](https://github.com/vistadataproject/nodeVISTAClients/tree/master/vam-server)

__Demo__: 

![Web1Demo -width70](images/Web1Demo.png)

see [demo](demo/)

