---
layout: post
title: Behind the Schedule
author: Conor Dowling
categories:
- Project Management
---

Every interesting project integrates the old and borrowed with the new and speculative. The pitfall for schedulers is treating remakes and reuses as novelty while assuming that the novel is so well understood that dead-ends and misunderstandings will never happen. A practical schedule must push quickly for the obvious, recognize dependencies and leave plenty of time for the truly new. These principles lie behind the [VISTA Data Project's Schedule](https://github.com/vistadataproject/documents#deliverables-schedule).

The Performance Work Statement (PWS) requires

> a single comprehensive security-enabled read/write data model for all VA VISTA data, a model which must enable exchange between VA and DoD clinical information systems

There needs to be a _Test VISTA_ system to enable straightforward development, use of Node.js support for Javascript in VISTA and infographics to showcase the model. This is quite a list for a small one year project!

Fortunately, there's a lot of open source and VA work just waiting to be refined and integrated:

  * querying formally modeled VISTA Data isn't new. The Open Source FileMan Query Language ([FMQL](http://fmql.caregraf.info)) provides a uniform mechanism for extracting both VISTA's data and model while the [Virtual Patient Record (VPR) service](https://github.com/vistadataproject/MVDM/tree/master/VPRModel) is built around a normalized model for extracted VISTA data. While neither exactly meet the requirements of the Project, they provide a clear basis for the VISTA Data Model (VDM), the Master VISTA Data Model (MVDM) and their modules.

  * [OSEHRA's packaging for VISTA](https://github.com/vistadataproject/nodeVISTA/tree/master/osehraVISTA) is easy to install and use. The Project can build on this packaging to make its development system, _[nodeVISTA](https://github.com/vistadataproject/nodeVISTA)_.
  
  * VISTA runs on Intersystems Cache and the open source GT.M MUMPS environments and both support Node.js. What these implementations lack in documentation and examples can be fleshed out, work that's [already underway](https://github.com/vistadataproject/nodeVISTA/tree/master/nodemExamples). 
  
  * Infographics libraries in general are plentiful now and several DoD projects have [already packaged](https://github.com/vistadataproject/infographics) one of the most popular, [d3.js](http://d3js.org/), to visualize the data of FileMan, the database inside VISTA. 
  
  * PIKS, the de-composition of VISTA Data into groupings of Patient, Institutional, Knowledge and System came from FMQL and its isolation of patient from other FileMan data provides a path to patient-centric security.
  
  * Health-care Systems rarely exchange data directly. Data is first transformed into a standard model such as HL7's FHIR, an approach already taken in DoD projects and by the VA themselves in [eHMP](https://github.com/vistadataproject/MVDMmap/issues/1). 

With reuse of existing artifacts, many deliverables can be made in the first quarter. Others like data exchange or patient-centric security will come later as they depend on basic _VDM_ and _MVDM_ implementations.

But enough of all this refining and integrating. The PWS's big novelty is _data write_, the ability to write data into VISTA with the same ease and based on the same model as data is read. Up to now, changing VISTA data only happened through thousands of remote procedure calls (RPC) or menu options. In this project, we must correctly create and change data using create and update calls on the _MVDM_. 

With no pre-existing _FMQL_ or _VPR Model_ support, write-back will require all-new configurations and code as well analysis of side effects and dependencies. Inevitably, there will be surprises and work will go through the end of the Project. 

Cleaner data extraction and VISTA Javascript development, graphical presentation of models and yet more data exchange, all these must be delivered but the schedule reflects that the success of the Project will be measured by the effectiveness of MVDM's write-back support. 
