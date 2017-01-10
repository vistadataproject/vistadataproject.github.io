---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG EVENT AUDIT 

 property | value 
--- | --- 
 label | MAG EVENT AUDIT
 tag | EVENT
 routine | [MAGUAUD](http://code.osehra.org/dox/Routine_MAGUAUD_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC audits background events such as DICOM Queries.  When auditing events executed by other APIs, it may be invoked as a MUMPS API without making another call to the RPC Broker.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | EVENT | LITERAL | 30 | true | This is the event being audited.  It must be a valid entry on the IMAGING EVENT ACTION File (#2006.931). | 
| vs:Input_Parameter-8994_02 | HOSTNAME | LITERAL | 64 |  | This is the host name of the host machine whose event is being audited. | 
| vs:Input_Parameter-8994_02 | APPNAME | LITERAL | 64 |  | This is the application name of the application whose event is being audited. | 
| vs:Input_Parameter-8994_02 | MESSAGE | LITERAL | 250 |  | This is the message associated with the audit event. | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 129 |  | This is a list of data attribute names and associated values to be includedin the audit event log. | 