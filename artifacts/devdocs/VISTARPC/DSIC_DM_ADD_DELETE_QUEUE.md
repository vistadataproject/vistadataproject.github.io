---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DM ADD DELETE QUEUE
# DSIC DM ADD DELETE QUEUE

This will allow you to add or delete an entry to file 19621.  When you use the VistA Imaging import an image API, you are returned a queue number.  This number means that VistA Imaging background processor accepted your request and place it a queue and will process it in due time.  After you get this successful queue message you should immediately file that data through this RPC. This file is to allow communication between the VistA Imaging background processor and the DSS Document Management system.

Property | Value
--- | ---
Label | UPD
Routine | [DSICDM](http://code.osehra.org/dox/Routine_DSICDM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACT | LITERAL | 1 | true | This is the action that should be taken.  The default value if not passed is A.  ACT &#x3D; A then add a record to file 19621 - TRANID and QUEUE required  ACT &#x3D; D then delete a record in file 19621 - TRANID is only required
TRANID | LITERAL | 50 | true | This is the transaction ID you passed to the VistA Imaging import API.  It must be in the format DSS;xxxxxx This is optional.  If it is not passed, then a transaction ID will be built from the APP parameter.
QUEUE | LITERAL | 20 | true | This is only required if you have successfully queued an import request to VistA Imaging.  VistA Imaging import API will return you a QUEUE number.  This is only required if you are adding a record to file 19606.
APP | LITERAL | 7 | true | This is optional only for DocManager.  For all othr DSS applications, this is required. DSS Product Prefixes for VistA Imaging:  Product Name                            Product Prefix  DocManager                              DM  CNT                                     CNT  Total Notes                             TNT  PFCS                                    PFCS  PTF                                     PTF  VRM                                     VRM  DRM                                     DRM  Dental Treatment Planner                DTP  TRM                                     TRM  PSS                                     PSS  ROI                                     ROI  MHTP                                    MHTP  Draeger                                 DRG  VistA Gateway/ProVation                 VGPRO  VistA Gateway/QuadraMed                 VGQM  VistA Gateway/Intisiq                   VGINQ  VistA Gateway/TheraDoc                  VGTHD



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}